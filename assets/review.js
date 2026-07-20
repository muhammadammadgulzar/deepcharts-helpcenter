/* DeepCharts Help Center — reviewer remarks overlay.
 *
 * Loaded as <script type="module"> on every generated page, but EXITS IMMEDIATELY
 * for normal visitors: nothing runs (and zero network requests are made, including
 * the Firebase import) unless location.hash === '#review' or the reviewer flag is
 * already set in localStorage. The public reading experience is untouched.
 *
 * API contract: see hc_review CONTRACT.md — endpoints under /hc/remarks,
 * Firebase ID token in Authorization: Bearer <token>.
 */

/* ======================= configuration ======================= */

// Switchable API base (test Render URL for now; swap for production later).
const API_BASE = "https://deepcharts-bot-test.onrender.com";
const API_PREFIX = "/hc/remarks";

// Pinned Firebase Web SDK version on the official gstatic CDN (modular ESM builds).
const FIREBASE_VER = "12.9.0";
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAQVPLZgCtHit_A4BcbJE9TxBDFhr0mJwA",
  authDomain: "deepaiadmin-82e17.firebaseapp.com",
  projectId: "deepaiadmin-82e17",
  appId: "1:1043097573106:web:9ecb1434fd24211240e26b",
};

const LS_REVIEWER = "hcReviewer";     // '1' after first successful login
const LS_MODE = "hcRemarksMode";      // '1' = remarks mode ON

const BLOCK_SEL = "p,li,h1,h2,h3,h4,h5,h6,td,th,blockquote,pre,figcaption,dt,dd,caption,summary,div,table";
const EL_TARGET_SEL = "img,svg,canvas,figure,pre,table";

/* ======================= entry gate ======================= */

function lsGet(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
function lsSet(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* ignore */ } }
function lsDel(k) { try { localStorage.removeItem(k); } catch (e) { /* ignore */ } }

/* The actual gate check lives at the very bottom of this file (after all
   declarations) so `boot()` never touches a const in its temporal dead zone. */

/* ======================= state ======================= */

const state = {
  auth: null,            // firebase Auth instance
  user: null,            // firebase User
  mode: lsGet(LS_MODE) === "1",
  remarks: [],           // remarks for this page
  orphaned: new Set(),   // remark ids whose anchor no longer matches
  mine: null,            // cached /mine list
  slug: detectSlug(),
  scope: null,           // element remarks attach inside
  ui: {},                // ui element refs
  pendingAnchor: null,   // anchor being created
};

/* ======================= slug / url helpers ======================= */

function detectSlug() {
  const p = location.pathname;
  let m = p.match(/\/article\/([^\/]+)\.html?$/);
  if (m) return decodeURIComponent(m[1]);
  m = p.match(/\/category\/([^\/]+)\.html?$/);
  if (m) return "category--" + decodeURIComponent(m[1]);
  return "home";
}

function slugToHref(slug) {
  const root = window.HC_ROOT || "";
  if (slug === "home") return root + "index.html";
  if (slug.startsWith("category--")) return root + "category/" + slug.slice(10) + ".html";
  return root + "article/" + slug + ".html";
}

function pageUrl() { return location.href.split("#")[0]; }

/* ======================= tiny dom helpers ======================= */

function h(tag, attrs, ...children) {
  const el = document.createElement(tag);
  if (attrs) {
    for (const [k, v] of Object.entries(attrs)) {
      if (k === "class") el.className = v;
      else if (k === "text") el.textContent = v;
      else if (k.startsWith("on")) el.addEventListener(k.slice(2), v);
      else el.setAttribute(k, v);
    }
  }
  for (const c of children) {
    if (c == null) continue;
    el.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
  }
  return el;
}

function fmtDate(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" }) +
    " " + d.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
}

function norm(s) { return (s || "").replace(/\s+/g, " "); }

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ======================= toasts ======================= */

function toastWrap() {
  if (!state.ui.toasts) {
    state.ui.toasts = h("div", { class: "hc-toast-wrap hc-ui" });
    document.body.appendChild(state.ui.toasts);
  }
  return state.ui.toasts;
}

function toast(msg, isErr, ms) {
  const t = h("div", { class: "hc-toast" + (isErr ? " hc-toast-err" : ""), text: msg });
  toastWrap().appendChild(t);
  setTimeout(() => t.remove(), ms || 3800);
  return t;
}

/* ======================= api ======================= */

async function api(path, opts = {}, _retried) {
  const headers = Object.assign(
    { Authorization: "Bearer " + (await state.user.getIdToken()) },
    opts.body ? { "Content-Type": "application/json" } : {},
    opts.headers || {}
  );
  let res;
  try {
    res = await fetch(API_BASE + API_PREFIX + path, Object.assign({}, opts, { headers }));
  } catch (netErr) {
    if (!_retried) {
      // Render free tier cold start: be honest, wait, retry once.
      toast("Connecting to review server (it may be waking up)…", false, 3200);
      await sleep(3000);
      return api(path, opts, true);
    }
    throw new Error("Review server unreachable (" + API_BASE + "). Is it awake?");
  }
  if (!res.ok) {
    let detail = "";
    try { detail = (await res.json()).detail || ""; } catch (e) { /* not json */ }
    if (res.status === 403) throw new Error(detail || "Not allowed — is this email in the reviewer list?");
    if (res.status === 401) throw new Error(detail || "Session expired — please sign in again.");
    if (res.status === 404) throw new Error(detail || "Remark not found (maybe already deleted).");
    throw new Error("Server error " + res.status + (detail ? ": " + detail : ""));
  }
  if (res.status === 204) return null;
  return res.json();
}

/* ======================= boot / auth ======================= */

async function boot() {
  state.scope =
    document.querySelector(".article-body") ||
    document.querySelector("main.content") ||
    document.body;

  let fbApp, fbAuth;
  try {
    const base = "https://www.gstatic.com/firebasejs/" + FIREBASE_VER + "/";
    [fbApp, fbAuth] = await Promise.all([
      import(base + "firebase-app.js"),
      import(base + "firebase-auth.js"),
    ]);
  } catch (e) {
    console.error("[hc-review] Firebase SDK failed to load:", e);
    toast("Review mode unavailable: Firebase SDK failed to load.", true, 6000);
    return;
  }

  const app = fbApp.initializeApp(FIREBASE_CONFIG, "hc-review");
  const auth = fbAuth.getAuth(app);
  state.auth = auth;
  state.fbAuth = fbAuth;

  fbAuth.onAuthStateChanged(auth, (user) => {
    state.user = user;
    if (user) {
      lsSet(LS_REVIEWER, "1");
      showToolbar();
      loadAndPaint();
    } else {
      removeToolbar();
      showEntryButton();
    }
  });
}

function showEntryButton() {
  if (state.ui.entry) return;
  const btn = h("button", {
    class: "hc-entry hc-ui",
    text: "\u{1F58A} Review",
    onclick: openLoginModal,
  });
  state.ui.entry = btn;
  document.body.appendChild(btn);
}

function removeEntryButton() {
  if (state.ui.entry) { state.ui.entry.remove(); state.ui.entry = null; }
}

function openLoginModal() {
  if (state.ui.modal) return;
  const email = h("input", { type: "email", autocomplete: "username", placeholder: "you@deepcharts.com" });
  const pass = h("input", { type: "password", autocomplete: "current-password", placeholder: "••••••••" });
  const err = h("div", { class: "hc-err" });
  const submit = h("button", { class: "hc-btn hc-primary", text: "Sign in" });
  const cancel = h("button", { class: "hc-btn", text: "Cancel", onclick: closeLoginModal });

  const form = h("form", null,
    h("h3", { text: "Reviewer sign in" }),
    h("p", { class: "hc-sub", text: "Help-center review mode. Use your reviewer account." }),
    h("label", { text: "Email" }), email,
    h("label", { text: "Password" }), pass,
    err,
    h("div", { class: "hc-modal-btns" }, submit, cancel)
  );
  form.addEventListener("submit", async (ev) => {
    ev.preventDefault();
    err.textContent = "";
    submit.disabled = true;
    submit.textContent = "Signing in…";
    try {
      await state.fbAuth.signInWithEmailAndPassword(state.auth, email.value.trim(), pass.value);
      lsSet(LS_REVIEWER, "1");
      closeLoginModal();
      removeEntryButton();
      toast("Signed in. Review mode ready.");
    } catch (e) {
      const code = e && e.code ? String(e.code) : "";
      err.textContent =
        code.includes("invalid-credential") || code.includes("wrong-password") || code.includes("user-not-found")
          ? "Wrong email or password."
          : code.includes("too-many-requests")
            ? "Too many attempts — wait a minute and retry."
            : "Sign-in failed" + (code ? " (" + code + ")" : "") + ".";
    }
    submit.disabled = false;
    submit.textContent = "Sign in";
  });

  const overlay = h("div", { class: "hc-modal-overlay hc-ui" }, h("div", { class: "hc-modal" }, form));
  overlay.addEventListener("mousedown", (ev) => { if (ev.target === overlay) closeLoginModal(); });
  state.ui.modal = overlay;
  document.body.appendChild(overlay);
  email.focus();
}

function closeLoginModal() {
  if (state.ui.modal) { state.ui.modal.remove(); state.ui.modal = null; }
}

async function signOut() {
  try { await state.fbAuth.signOut(state.auth); } catch (e) { /* ignore */ }
  lsDel(LS_REVIEWER);
  clearPaint();
  closeDrawer();
  closePopover();
  removeToolbar();
  // keep entry button only if hash still asks for it
  if (location.hash === "#review") showEntryButton();
  toast("Signed out.");
}

/* ======================= toolbar ======================= */

function showToolbar() {
  removeEntryButton();
  if (state.ui.toolbar) return;
  const modeBtn = h("button", { onclick: toggleMode });
  const mineBtn = h("button", { onclick: () => openDrawer("page") }, "My remarks", h("span", { class: "hc-count hc-zero", text: "0" }));
  const outBtn = h("button", { text: "Sign out", onclick: signOut });
  const bar = h("div", { class: "hc-toolbar hc-ui" }, modeBtn, mineBtn, outBtn);
  state.ui.toolbar = bar;
  state.ui.modeBtn = modeBtn;
  state.ui.countBadge = mineBtn.querySelector(".hc-count");
  renderModeBtn();
  document.body.appendChild(bar);
  bindModeListeners();
}

function removeToolbar() {
  if (state.ui.toolbar) { state.ui.toolbar.remove(); state.ui.toolbar = null; }
}

function renderModeBtn() {
  if (!state.ui.modeBtn) return;
  state.ui.modeBtn.textContent = "\u{1F58A} Remarks " + (state.mode ? "ON" : "OFF");
  state.ui.modeBtn.classList.toggle("hc-on", state.mode);
}

function toggleMode() {
  state.mode = !state.mode;
  lsSet(LS_MODE, state.mode ? "1" : "0");
  renderModeBtn();
  hideBubble();
  clearElHover();
  toast(state.mode ? "Remarks mode ON — select text or click an image/table." : "Remarks mode OFF.");
}

function updateCount() {
  if (!state.ui.countBadge) return;
  const n = state.remarks.filter((r) => r.status === "open").length;
  state.ui.countBadge.textContent = String(n);
  state.ui.countBadge.classList.toggle("hc-zero", n === 0);
}

/* ======================= load + paint ======================= */

async function loadAndPaint() {
  try {
    const data = await api("?slug=" + encodeURIComponent(state.slug));
    state.remarks = data.remarks || [];
  } catch (e) {
    toast("Could not load remarks: " + e.message, true, 6000);
    return;
  }
  paintAll();
}

function paintAll() {
  clearPaint();
  state.orphaned = new Set();
  for (const r of state.remarks) {
    let ok = false;
    try { ok = paintRemark(r); } catch (e) { console.warn("[hc-review] paint failed for #" + r.id, e); }
    if (!ok) state.orphaned.add(r.id);
  }
  updateCount();
  if (state.ui.drawer && state.ui.drawer.classList.contains("hc-open")) renderDrawerBody();
}

function clearPaint() {
  document.querySelectorAll("mark.hc-remark").forEach((m) => {
    const parent = m.parentNode;
    while (m.firstChild) parent.insertBefore(m.firstChild, m);
    m.remove();
    parent.normalize();
  });
  document.querySelectorAll(".hc-remark-el").forEach((el) => {
    el.classList.remove("hc-remark-el", "st-open", "st-fixed", "st-rejected");
  });
  document.querySelectorAll(".hc-el-badge:not(.hc-ui)").forEach((b) => b.remove());
}

function paintRemark(r) {
  const a = r.anchor || {};
  if (a.type === "element") return paintElementRemark(r);
  return paintTextRemark(r);
}

/* ---------- text anchors ---------- */

function buildTextIndex(root) {
  // Whitespace-normalized text of `root` plus a map from each normalized char
  // to its source {node, offset}.
  const map = [];
  let text = "";
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      const p = n.parentElement;
      if (p && p.closest("script,style,.hc-ui,.hc-el-badge")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });
  let n;
  while ((n = walker.nextNode())) {
    const s = n.nodeValue;
    for (let i = 0; i < s.length; i++) {
      if (/\s/.test(s[i])) {
        if (text === "" || text.endsWith(" ")) continue; // collapse runs, drop leading
        text += " ";
      } else {
        text += s[i];
      }
      map.push({ node: n, off: i });
    }
  }
  return { text, map };
}

function commonSuffixLen(a, b) {
  let n = 0;
  while (n < a.length && n < b.length && a[a.length - 1 - n] === b[b.length - 1 - n]) n++;
  return n;
}

function commonPrefixLen(a, b) {
  let n = 0;
  while (n < a.length && n < b.length && a[n] === b[n]) n++;
  return n;
}

function locateQuote(root, quote, prefix, suffix) {
  const q = norm(quote).trim();
  if (!q) return null;
  const { text, map } = buildTextIndex(root);
  const hits = [];
  let from = 0, i;
  while ((i = text.indexOf(q, from)) !== -1) { hits.push(i); from = i + 1; }
  if (!hits.length) return null;

  let best = hits[0];
  if (hits.length > 1) {
    const np = norm(prefix || "");
    const ns = norm(suffix || "");
    let bestScore = -1;
    for (const hit of hits) {
      const before = text.slice(Math.max(0, hit - np.length - 5), hit);
      const after = text.slice(hit + q.length, hit + q.length + ns.length + 5);
      const score = commonSuffixLen(before, np) + commonPrefixLen(after, ns);
      if (score > bestScore) { bestScore = score; best = hit; }
    }
  }

  const start = map[best];
  const end = map[best + q.length - 1];
  if (!start || !end) return null;
  const range = document.createRange();
  range.setStart(start.node, start.off);
  range.setEnd(end.node, end.off + 1);
  return range;
}

function wrapRangeInMarks(range, r) {
  // Wrap every text-node slice inside `range` in its own <mark> (a single
  // surroundContents fails when the selection crosses element boundaries).
  const root = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
    ? range.commonAncestorContainer.parentNode
    : range.commonAncestorContainer;
  const nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let n;
  while ((n = walker.nextNode())) if (range.intersectsNode(n)) nodes.push(n);
  if (range.startContainer.nodeType === Node.TEXT_NODE && !nodes.includes(range.startContainer)) {
    nodes.unshift(range.startContainer);
  }
  let made = 0;
  for (const node of nodes) {
    let s = node === range.startContainer ? range.startOffset : 0;
    let e = node === range.endContainer ? range.endOffset : node.nodeValue.length;
    if (s >= e) continue;
    const target = s > 0 ? node.splitText(s) : node;
    if (e - s < target.nodeValue.length) target.splitText(e - s);
    if (!target.nodeValue.trim() && made > 0) continue; // skip pure-whitespace slices
    const mark = document.createElement("mark");
    mark.className = "hc-remark st-" + (r.status || "open");
    mark.dataset.id = String(r.id);
    mark.addEventListener("click", (ev) => {
      if (!state.mode && mark.closest("a")) return; // mode OFF: keep links clickable
      ev.preventDefault(); ev.stopPropagation(); openViewPopover(r.id, mark);
    });
    target.parentNode.insertBefore(mark, target);
    mark.appendChild(target);
    made++;
  }
  return made > 0;
}

function paintTextRemark(r) {
  const a = r.anchor || {};
  let root = state.scope;
  // Prefer the stored block selector when it still resolves — keeps matches local.
  try {
    if (a.selector) {
      const el = state.scope.querySelector(a.selector) ||
        (state.scope.matches && state.scope.matches(a.selector) ? state.scope : null);
      if (el) root = el;
    }
  } catch (e) { /* bad selector — fall back to whole scope */ }
  let range = locateQuote(root, a.quote, a.prefix, a.suffix);
  if (!range && root !== state.scope) range = locateQuote(state.scope, a.quote, a.prefix, a.suffix);
  if (!range) return false;
  return wrapRangeInMarks(range, r);
}

/* ---------- element anchors ---------- */

function badgeLayer() {
  if (!state.ui.badgeLayer || !document.body.contains(state.ui.badgeLayer)) {
    state.ui.badgeLayer = h("div", { class: "hc-ui", style: "position:absolute;top:0;left:0;width:0;height:0" });
    document.body.appendChild(state.ui.badgeLayer);
  }
  return state.ui.badgeLayer;
}

function positionBadge(badge, el) {
  const rect = el.getBoundingClientRect();
  badge.style.left = (window.scrollX + rect.right - 13) + "px";
  badge.style.top = (window.scrollY + rect.top - 13) + "px";
}

function findElementByQuote(quote) {
  const q = norm(quote).trim().toLowerCase();
  if (!q) return null;
  for (const el of state.scope.querySelectorAll(EL_TARGET_SEL)) {
    const txt = norm(el.getAttribute("alt") || el.getAttribute("title") || el.textContent || "").trim().toLowerCase();
    if (txt && (txt.includes(q) || q.includes(txt))) return el;
  }
  return null;
}

function paintElementRemark(r) {
  const a = r.anchor || {};
  let el = null;
  try { el = a.selector ? document.querySelector(a.selector) : null; } catch (e) { /* invalid selector */ }
  if (el && a.quote) {
    // The page may have been rebuilt: a pure nth-of-type selector can
    // now point at a DIFFERENT element. Fail honest (orphan) rather
    // than pin the remark to the wrong thing.
    const hint = elHint(el);
    const q = norm(a.quote).trim();
    if (hint && q && !hint.includes(q) && !q.includes(hint)) el = null;
  }
  if (!el) el = findElementByQuote(a.quote);
  if (!el) return false;
  el.classList.add("hc-remark-el", "st-" + (r.status || "open"));
  const badge = h("button", {
    class: "hc-el-badge st-" + (r.status || "open"),
    text: "\u{1F58A}",
    title: "Remark #" + r.id,
    onclick: (ev) => { ev.preventDefault(); ev.stopPropagation(); openViewPopover(r.id, badge); },
  });
  badge.dataset.id = String(r.id);
  badgeLayer().appendChild(badge);
  positionBadge(badge, el);
  if (!state._badgeReposBound) {
    state._badgeReposBound = true;
    const repos = () => {
      document.querySelectorAll(".hc-el-badge").forEach((b) => {
        const rem = state.remarks.find((x) => String(x.id) === b.dataset.id);
        if (!rem) return;
        let target = null;
        try { target = rem.anchor.selector ? document.querySelector(rem.anchor.selector) : null; } catch (e) { /* ignore */ }
        if (!target) target = findElementByQuote(rem.anchor.quote);
        if (target) positionBadge(b, target);
      });
    };
    window.addEventListener("resize", () => { clearTimeout(state._reposT); state._reposT = setTimeout(repos, 150); });
    window.addEventListener("load", repos);
  }
  return true;
}

/* ======================= css paths ======================= */

function cssPath(el) {
  // ids > nth-of-type chain, rooted at body.
  const parts = [];
  let cur = el;
  while (cur && cur.nodeType === Node.ELEMENT_NODE && cur !== document.body) {
    if (cur.id) {
      parts.unshift("#" + (window.CSS && CSS.escape ? CSS.escape(cur.id) : cur.id));
      return parts.join(" > ");
    }
    let seg = cur.tagName.toLowerCase();
    const parent = cur.parentElement;
    if (parent) {
      const same = Array.from(parent.children).filter((c) => c.tagName === cur.tagName);
      if (same.length > 1) seg += ":nth-of-type(" + (same.indexOf(cur) + 1) + ")";
    }
    parts.unshift(seg);
    cur = parent;
  }
  return parts.join(" > ");
}

/* ======================= creating remarks ======================= */

function bindModeListeners() {
  if (state._modeBound) return;
  state._modeBound = true;

  // --- text selection bubble ---
  document.addEventListener("mouseup", (ev) => {
    if (!state.mode || !state.user) return;
    if (ev.target.closest && ev.target.closest(".hc-ui,.hc-bubble,.hc-pop")) return;
    setTimeout(maybeShowBubble, 10); // let the selection settle
  });
  document.addEventListener("selectionchange", () => {
    const sel = document.getSelection();
    if (!sel || sel.isCollapsed) hideBubble();
  });

  // --- element hover/click targets ---
  document.addEventListener("mouseover", (ev) => {
    if (!state.mode || !state.user) return;
    const t = ev.target.closest && ev.target.closest(EL_TARGET_SEL);
    clearElHover();
    if (!t || !state.scope.contains(t) || t.closest(".hc-ui")) return;
    t.classList.add("hc-el-hover");
    state._hoverEl = t;
    showHoverBadge(t);
  });
  document.addEventListener("mouseout", (ev) => {
    if (state._hoverEl && ev.relatedTarget &&
        (state._hoverEl.contains(ev.relatedTarget) ||
         (state.ui.hoverBadge && state.ui.hoverBadge.contains(ev.relatedTarget)))) return;
    // keep hover while moving onto the badge itself
    if (ev.relatedTarget && ev.relatedTarget.closest && ev.relatedTarget.closest(".hc-el-badge")) return;
    clearElHover();
  });
  document.addEventListener("click", (ev) => {
    if (!state.mode || !state.user) return;
    if (ev.target.closest && ev.target.closest(".hc-ui,.hc-bubble,.hc-pop,.hc-el-badge,mark.hc-remark")) return;
    const t = ev.target.closest && ev.target.closest(EL_TARGET_SEL);
    if (!t || !state.scope.contains(t)) return;
    ev.preventDefault();
    ev.stopPropagation();
    startElementRemark(t);
  }, true);
}

function maybeShowBubble() {
  const sel = document.getSelection();
  hideBubble();
  if (!sel || sel.isCollapsed || !sel.rangeCount) return;
  const range = sel.getRangeAt(0);
  const container = range.commonAncestorContainer;
  const containerEl = container.nodeType === Node.TEXT_NODE ? container.parentElement : container;
  if (!containerEl || !state.scope.contains(containerEl) || containerEl.closest(".hc-ui,.hc-pop")) return;
  if (!norm(range.toString()).trim()) return;

  const rect = range.getBoundingClientRect();
  const bubble = h("button", { class: "hc-bubble hc-ui", text: "\u{1F58A} Add remark" });
  bubble.addEventListener("mousedown", (ev) => {
    ev.preventDefault(); // keep the selection alive
    ev.stopPropagation();
    startTextRemark(range);
  });
  document.body.appendChild(bubble);
  const bw = bubble.offsetWidth || 120;
  let left = window.scrollX + rect.left + rect.width / 2 - bw / 2;
  left = Math.max(8, Math.min(left, window.scrollX + document.documentElement.clientWidth - bw - 8));
  bubble.style.left = left + "px";
  bubble.style.top = (window.scrollY + rect.bottom + 8) + "px";
  state.ui.bubble = bubble;
}

function hideBubble() {
  if (state.ui.bubble) { state.ui.bubble.remove(); state.ui.bubble = null; }
}

function startTextRemark(range) {
  // Capture the anchor BEFORE any popover interaction clears the selection.
  const scope = state.scope;
  const quote = range.toString();

  const pre = document.createRange();
  pre.selectNodeContents(scope);
  try { pre.setEnd(range.startContainer, range.startOffset); } catch (e) { /* outside scope */ }
  const post = document.createRange();
  post.selectNodeContents(scope);
  try { post.setStart(range.endContainer, range.endOffset); } catch (e) { /* outside scope */ }

  const startEl = range.startContainer.nodeType === Node.TEXT_NODE
    ? range.startContainer.parentElement
    : range.startContainer;
  const block = (startEl.closest && startEl.closest(BLOCK_SEL)) || scope;

  state.pendingAnchor = {
    type: "text",
    selector: cssPath(block),
    quote: quote,
    prefix: norm(pre.toString()).slice(-30),
    suffix: norm(post.toString()).slice(0, 30),
  };
  hideBubble();
  const rect = range.getBoundingClientRect();
  openCreatePopover(rect, quote);
  const sel = document.getSelection();
  if (sel) sel.removeAllRanges();
}

function elHint(el) {
  // Stable identity hint for an element anchor: alt/title, else for
  // images the src basename, else a text snippet. Used to detect a
  // selector resolving to the WRONG element after a rebuild.
  const at = el.getAttribute("alt") || el.getAttribute("title");
  if (at) return norm(at).trim().slice(0, 120);
  if (el.tagName === "IMG" && el.getAttribute("src")) {
    const src = el.getAttribute("src");
    return src.split("/").pop().split("?")[0].slice(0, 120);
  }
  return norm(el.textContent || "").trim().slice(0, 120);
}

function startElementRemark(el) {
  const quote = elHint(el);
  state.pendingAnchor = {
    type: "element",
    selector: cssPath(el),
    quote: quote,
    prefix: "",
    suffix: "",
  };
  clearElHover();
  openCreatePopover(el.getBoundingClientRect(), quote || "<" + el.tagName.toLowerCase() + "> element");
}

function showHoverBadge(el) {
  const badge = h("button", { class: "hc-el-badge hc-ui", text: "\u{1F58A}", title: "Add remark on this element" });
  badge.addEventListener("click", (ev) => { ev.preventDefault(); ev.stopPropagation(); startElementRemark(el); });
  document.body.appendChild(badge);
  positionBadge(badge, el);
  state.ui.hoverBadge = badge;
}

function clearElHover() {
  if (state._hoverEl) { state._hoverEl.classList.remove("hc-el-hover"); state._hoverEl = null; }
  if (state.ui.hoverBadge) { state.ui.hoverBadge.remove(); state.ui.hoverBadge = null; }
}

/* ======================= popovers ======================= */

function closePopover() {
  if (state.ui.pop) { state.ui.pop.remove(); state.ui.pop = null; }
  if (state._popDocClose) {
    document.removeEventListener("mousedown", state._popDocClose, true);
    state._popDocClose = null;
  }
}

function placePopover(pop, rect) {
  document.body.appendChild(pop);
  const pw = pop.offsetWidth || 340;
  let left = window.scrollX + rect.left;
  left = Math.max(8, Math.min(left, window.scrollX + document.documentElement.clientWidth - pw - 8));
  pop.style.left = left + "px";
  pop.style.top = (window.scrollY + rect.bottom + 10) + "px";
  state._popDocClose = (ev) => {
    if (!pop.contains(ev.target)) closePopover();
  };
  setTimeout(() => document.addEventListener("mousedown", state._popDocClose, true), 0);
}

function openCreatePopover(rect, quotePreview) {
  closePopover();
  const ta = h("textarea", { placeholder: "What should be fixed here?" });
  const save = h("button", { class: "hc-btn hc-primary", text: "Save remark" });
  const cancel = h("button", { class: "hc-btn", text: "Cancel", onclick: closePopover });
  const pop = h("div", { class: "hc-pop hc-ui" },
    h("div", { class: "hc-pop-quote", text: "“" + (quotePreview || "").slice(0, 160) + "”" }),
    ta,
    h("div", { class: "hc-pop-btns" }, cancel, save)
  );
  save.addEventListener("click", async () => {
    const text = ta.value.trim();
    if (!text) { ta.focus(); return; }
    save.disabled = true;
    save.textContent = "Saving…";
    try {
      const created = await api("", {
        method: "POST",
        body: JSON.stringify({
          article_slug: state.slug,
          page_url: pageUrl(),
          anchor: state.pendingAnchor,
          remark: text,
        }),
      });
      state.remarks.push(created);
      state.pendingAnchor = null;
      closePopover();
      paintAll();
      toast("Remark saved.");
    } catch (e) {
      toast(e.message, true, 6000);
      save.disabled = false;
      save.textContent = "Save remark";
    }
  });
  state.ui.pop = pop;
  placePopover(pop, rect);
  ta.focus();
}

function openViewPopover(id, anchorEl) {
  closePopover();
  const r = state.remarks.find((x) => x.id === id) || (state.mine || []).find((x) => x.id === id);
  if (!r) return;
  const own = state.user && r.reviewer &&
    r.reviewer.toLowerCase() === (state.user.email || "").toLowerCase();

  const body = h("div", null);
  const renderView = () => {
    body.textContent = "";
    body.appendChild(h("div", { class: "hc-pop-meta" },
      h("span", { class: "hc-pill st-" + r.status, text: r.status }),
      h("span", { text: r.reviewer || "" }),
      h("span", { text: fmtDate(r.created_at) })
    ));
    if (r.anchor && r.anchor.quote) {
      body.appendChild(h("div", { class: "hc-pop-quote", style: "margin-top:9px",
        text: "“" + norm(r.anchor.quote).slice(0, 160) + "”" }));
    }
    body.appendChild(h("div", { class: "hc-pop-text", text: r.remark }));
    if (r.status === "fixed" && r.fixed_note) {
      const note = h("div", { class: "hc-pop-note" });
      note.appendChild(h("b", { text: "Fixed: " }));
      note.appendChild(document.createTextNode(r.fixed_note));
      body.appendChild(note);
    }
    if (own && r.status === "open") {
      const edit = h("button", { class: "hc-btn", text: "Edit", onclick: renderEdit });
      const del = h("button", { class: "hc-btn hc-danger", text: "Delete" });
      del.addEventListener("click", async () => {
        if (!window.confirm("Delete this remark?")) return;
        del.disabled = true;
        try {
          await api("/" + r.id, { method: "DELETE" });
          state.remarks = state.remarks.filter((x) => x.id !== r.id);
          if (state.mine) state.mine = state.mine.filter((x) => x.id !== r.id);
          closePopover();
          paintAll();
          toast("Remark deleted.");
        } catch (e) {
          toast(e.message, true, 6000);
          del.disabled = false;
        }
      });
      body.appendChild(h("div", { class: "hc-pop-btns" }, edit, del));
    }
  };
  const renderEdit = () => {
    body.textContent = "";
    const ta = h("textarea");
    ta.value = r.remark;
    const save = h("button", { class: "hc-btn hc-primary", text: "Save" });
    const cancel = h("button", { class: "hc-btn", text: "Cancel", onclick: renderView });
    save.addEventListener("click", async () => {
      const text = ta.value.trim();
      if (!text) { ta.focus(); return; }
      save.disabled = true;
      save.textContent = "Saving…";
      try {
        const updated = await api("/" + r.id, { method: "PATCH", body: JSON.stringify({ remark: text }) });
        Object.assign(r, updated);
        renderView();
        toast("Remark updated.");
      } catch (e) {
        toast(e.message, true, 6000);
        save.disabled = false;
        save.textContent = "Save";
      }
    });
    body.appendChild(ta);
    body.appendChild(h("div", { class: "hc-pop-btns" }, cancel, save));
    ta.focus();
  };
  renderView();

  const pop = h("div", { class: "hc-pop hc-ui" }, body);
  state.ui.pop = pop;
  placePopover(pop, anchorEl.getBoundingClientRect());
}

/* ======================= drawer ======================= */

function ensureDrawer() {
  if (state.ui.drawer) return state.ui.drawer;
  const tabPage = h("button", { class: "hc-tab hc-on", text: "This page", onclick: () => switchTab("page") });
  const tabMine = h("button", { class: "hc-tab", text: "All mine", onclick: () => switchTab("mine") });
  const drawerBody = h("div", { class: "hc-drawer-body" });
  const drawer = h("div", { class: "hc-drawer hc-ui" },
    h("div", { class: "hc-drawer-head" }, tabPage, tabMine,
      h("button", { class: "hc-x", text: "✕", onclick: closeDrawer })),
    drawerBody
  );
  state.ui.drawer = drawer;
  state.ui.drawerBody = drawerBody;
  state.ui.tabPage = tabPage;
  state.ui.tabMine = tabMine;
  state.drawerTab = "page";
  document.body.appendChild(drawer);
  return drawer;
}

function openDrawer(tab) {
  ensureDrawer();
  state.drawerTab = tab || "page";
  state.ui.tabPage.classList.toggle("hc-on", state.drawerTab === "page");
  state.ui.tabMine.classList.toggle("hc-on", state.drawerTab === "mine");
  renderDrawerBody();
  requestAnimationFrame(() => state.ui.drawer.classList.add("hc-open"));
  if (state.drawerTab === "mine" && state.mine === null) loadMine();
}

function switchTab(tab) { openDrawer(tab); }

function closeDrawer() {
  if (state.ui.drawer) state.ui.drawer.classList.remove("hc-open");
}

async function loadMine() {
  try {
    const data = await api("/mine");
    state.mine = data.remarks || [];
  } catch (e) {
    state.mine = [];
    toast("Could not load your remarks: " + e.message, true, 6000);
  }
  if (state.drawerTab === "mine") renderDrawerBody();
}

function remarkItem(r, opts) {
  const item = h("div", { class: "hc-item" });
  const top = h("div", { class: "hc-item-top" }, h("span", { class: "hc-pill st-" + r.status, text: r.status }));
  if (opts && opts.showSlug) {
    const a = h("a", { class: "hc-item-slug", href: slugToHref(r.article_slug), text: r.article_slug });
    a.addEventListener("click", (ev) => ev.stopPropagation());
    top.appendChild(a);
  }
  if (opts && opts.orphan) top.appendChild(h("span", { class: "hc-orphan", text: "orphaned — anchor lost" }));
  item.appendChild(top);
  if (r.anchor && r.anchor.quote) {
    item.appendChild(h("div", { class: "hc-item-quote", text: "“" + norm(r.anchor.quote).slice(0, 140) + "”" }));
  }
  item.appendChild(h("div", { class: "hc-item-text", text: r.remark }));
  if (r.status === "fixed" && r.fixed_note) {
    item.appendChild(h("div", { class: "hc-item-note", text: "✔ " + r.fixed_note }));
  }
  item.appendChild(h("div", { class: "hc-item-date", text: fmtDate(r.created_at) + (r.reviewer ? " · " + r.reviewer : "") }));
  item.addEventListener("click", () => {
    if (r.article_slug === state.slug && !(opts && opts.orphan)) {
      const mark = document.querySelector('mark.hc-remark[data-id="' + r.id + '"]') ||
                   document.querySelector('.hc-el-badge[data-id="' + r.id + '"]');
      if (mark) {
        closeDrawer();
        mark.scrollIntoView({ behavior: "smooth", block: "center" });
        if (mark.classList.contains("hc-remark")) {
          document.querySelectorAll('mark.hc-remark[data-id="' + r.id + '"]').forEach((m) => {
            m.classList.add("hc-flash");
            setTimeout(() => m.classList.remove("hc-flash"), 2600);
          });
        }
      }
    } else if (r.article_slug !== state.slug) {
      location.href = slugToHref(r.article_slug) + "#review";
    }
  });
  return item;
}

function renderDrawerBody() {
  const body = state.ui.drawerBody;
  if (!body) return;
  body.textContent = "";
  if (state.drawerTab === "page") {
    if (!state.remarks.length) {
      body.appendChild(h("div", { class: "hc-drawer-empty", text: "No remarks on this page yet. Turn Remarks ON and select some text." }));
      return;
    }
    const live = state.remarks.filter((r) => !state.orphaned.has(r.id));
    const orphans = state.remarks.filter((r) => state.orphaned.has(r.id));
    for (const r of live) body.appendChild(remarkItem(r));
    if (orphans.length) {
      body.appendChild(h("div", { class: "hc-drawer-empty", style: "padding:14px 0 6px", text: "Anchors below no longer match the page content:" }));
      for (const r of orphans) body.appendChild(remarkItem(r, { orphan: true }));
    }
  } else {
    if (state.mine === null) {
      body.appendChild(h("div", { class: "hc-drawer-empty", text: "Loading your remarks…" }));
      return;
    }
    if (!state.mine.length) {
      body.appendChild(h("div", { class: "hc-drawer-empty", text: "You have not left any remarks yet." }));
      return;
    }
    for (const r of state.mine) body.appendChild(remarkItem(r, { showSlug: true }));
  }
}

/* ======================= entry gate (runs last) ======================= */

if (location.hash === "#review" || lsGet(LS_REVIEWER) === "1") {
  boot().catch((e) => console.error("[hc-review] failed to start:", e));
}
