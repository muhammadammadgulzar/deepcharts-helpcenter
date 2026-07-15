/* DeepCharts Help Center — live article widgets.
   Mounts into <div class="widget-mount" data-widget="NAME"></div> injected by build.py. */
(function () {
  "use strict";
  var mounts = document.querySelectorAll(".widget-mount[data-widget]");
  if (!mounts.length) return;

  /* shared tooltip */
  var tip = document.createElement("div");
  tip.className = "wg-tip";
  document.body.appendChild(tip);
  function showTip(html, x, y) { tip.innerHTML = html; tip.style.opacity = 1; tip.style.left = (x + 16) + "px"; tip.style.top = (y - 14) + "px"; }
  function hideTip() { tip.style.opacity = 0; }

  function chrome(mount, title, tag) {
    mount.innerHTML = '<div class="wg-head"><div class="dots"><i></i><i></i><i></i></div>' +
      '<div class="wg-title">' + title + '</div><span class="wg-live">' + (tag || "LIVE") + "</span></div>" +
      '<div class="wg-body"></div>';
    return mount.querySelector(".wg-body");
  }

  /* ================= DOM LADDER ================= */
  function domLadder(mount) {
    var body = chrome(mount, "Depth of Market — hover any level", "HOVER ME");
    body.style.cssText = "padding:14px 22px 20px;display:flex;flex-direction:column;gap:5px";
    var rows = [
      { px: 105, v: 78, s: "sell" }, { px: 104, v: 64, s: "sell" }, { px: 103, v: 56, s: "sell" },
      { px: 102, v: 42, s: "sell" }, { px: 101, v: 33, s: "sell" }, { px: 100, last: true },
      { px: 99, v: 41, s: "buy" }, { px: 98, v: 33, s: "buy" }, { px: 97, v: 51, s: "buy" },
      { px: 96, v: 60, s: "buy" }, { px: 95, v: 72, s: "buy" }];
    var max = 80;
    function annot(txt, color) {
      var a = document.createElement("div");
      a.style.cssText = "font-size:12.5px;margin:2px 0 6px 64px;color:" + color;
      a.textContent = "⤷ " + txt; body.appendChild(a);
    }
    annot("participants willing to sell — resting limit orders above price", "#a58bff");
    rows.forEach(function (r, i) {
      var row = document.createElement("div");
      row.style.cssText = "display:grid;grid-template-columns:50px 1fr;gap:14px;align-items:center";
      if (r.last) {
        row.innerHTML = '<div style="text-align:right"><span style="background:#fff;color:#000;border-radius:6px;padding:1px 7px;font-weight:800;font-size:12.5px">100</span></div>' +
          '<div style="font-size:10.5px;color:#ff7a3d;letter-spacing:1.5px;text-transform:uppercase">← last trade · the spread lives here</div>';
        body.appendChild(row);
        annot("participants willing to buy — the bid side of the book", "#22e56a");
        return;
      }
      var bar = document.createElement("div");
      var grad = r.s === "sell" ? "linear-gradient(90deg,#8f6bff,#5c3fd6)" : "linear-gradient(90deg,#2ef575,#12b04a)";
      var glow = r.s === "sell" ? "rgba(124,92,255,.3)" : "rgba(34,229,106,.28)";
      bar.style.cssText = "height:22px;border-radius:6px;display:flex;align-items:center;padding:0 9px;" +
        "font-size:11.5px;font-weight:700;color:rgba(255,255,255,.92);cursor:crosshair;transform-origin:left;" +
        "background:" + grad + ";box-shadow:0 0 18px " + glow + ";width:" + (r.v / max * 100) + "%;" +
        "transition:filter .25s,transform .25s;animation:wgrow .8s cubic-bezier(.22,.8,.22,1) " + (i * 0.06) + "s backwards";
      bar.textContent = r.v;
      bar.addEventListener("mousemove", function (e) {
        showTip(r.s === "sell"
          ? "<b>" + r.v + "</b> contracts offered at <b>" + r.px + "</b> — sellers waiting for an aggressive buyer. If price eats through, the level was thinner than it looked."
          : "<b>" + r.v + "</b> contracts bid at <b>" + r.px + "</b> — buyers defending. Watch it get pulled (fear) or stacked (conviction).", e.clientX, e.clientY);
        bar.style.filter = "brightness(1.3)";
      });
      bar.addEventListener("mouseleave", function () { hideTip(); bar.style.filter = ""; });
      row.innerHTML = '<div style="font-size:12.5px;color:#6b7484;text-align:right;font-variant-numeric:tabular-nums">' + r.px + "</div>";
      row.appendChild(bar); body.appendChild(row);
    });
    var st = document.createElement("style");
    st.textContent = "@keyframes wgrow{from{transform:scaleX(0)}}";
    mount.appendChild(st);
  }

  /* ================= RSI LAB ================= */
  function rsiLab(mount) {
    var body = chrome(mount, "RSI — drag the settings, the indicator re-thinks live", "REAL MATH");
    body.innerHTML =
      '<div style="display:grid;grid-template-columns:1fr 270px" class="wg-grid">' +
      '<div style="padding:14px 6px 6px 2px"><svg viewBox="0 0 760 360" width="100%" height="auto"></svg></div>' +
      '<div style="border-left:1px solid rgba(255,255,255,.08);padding:20px;display:flex;flex-direction:column;gap:18px;background:rgba(255,255,255,.015)">' +
      '<div><label style="display:flex;justify-content:space-between;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#6b7484;margin-bottom:8px">Length <output style="color:#22e56a;font-weight:800">14</output></label><input type="range" min="2" max="50" value="14" data-k="len" style="width:100%"></div>' +
      '<div><label style="display:flex;justify-content:space-between;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#6b7484;margin-bottom:8px">Overbought <output style="color:#a58bff;font-weight:800">70</output></label><input type="range" min="55" max="95" value="70" data-k="ob" style="width:100%"></div>' +
      '<div><label style="display:flex;justify-content:space-between;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#6b7484;margin-bottom:8px">Oversold <output style="color:#22e56a;font-weight:800">30</output></label><input type="range" min="5" max="45" value="30" data-k="os" style="width:100%"></div>' +
      '<div class="wg-read" style="font-size:12.5px;color:#9aa3b2;border-top:1px solid rgba(255,255,255,.08);padding-top:14px;line-height:1.8"></div></div></div>';
    if (matchMedia("(max-width:900px)").matches) { body.querySelector(".wg-grid").style.gridTemplateColumns = "1fr"; }
    var svg = body.querySelector("svg"), read = body.querySelector(".wg-read");
    var N = 180, price = [], p = 4300, seed = 42;
    function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647 - 0.5; }
    for (var i = 0; i < N; i++) { p += rnd() * 14 + Math.sin(i / 14) * 3.5; price.push(p); }
    var st = { len: 14, ob: 70, os: 30 };
    function rsi(len) {
      var out = Array(N).fill(null), g = 0, l = 0, d, i;
      for (i = 1; i <= len; i++) { d = price[i] - price[i - 1]; if (d > 0) g += d; else l -= d; }
      var ag = g / len, al = l / len;
      out[len] = 100 - 100 / (1 + (al === 0 ? 100 : ag / al));
      for (i = len + 1; i < N; i++) {
        d = price[i] - price[i - 1];
        ag = (ag * (len - 1) + Math.max(d, 0)) / len; al = (al * (len - 1) + Math.max(-d, 0)) / len;
        out[i] = 100 - 100 / (1 + (al === 0 ? 100 : ag / al));
      }
      return out;
    }
    var W = 760, PH = 170, RY0 = 195, RH = 150, lastR = [];
    function X(i) { return 20 + i * (W - 40) / (N - 1); }
    function draw() {
      var r = rsi(st.len); lastR = r;
      var pmin = Math.min.apply(null, price), pmax = Math.max.apply(null, price);
      function PY(v) { return 14 + (1 - (v - pmin) / (pmax - pmin)) * (PH - 24); }
      function RY(v) { return RY0 + (1 - v / 100) * RH; }
      var path = "", rpath = "", dots = "", cross = 0, i;
      for (i = 0; i < N; i++) path += (i ? "L" : "M") + X(i).toFixed(1) + " " + PY(price[i]).toFixed(1);
      for (i = 0; i < N; i++) if (r[i] != null) rpath += (rpath ? "L" : "M") + X(i).toFixed(1) + " " + RY(r[i]).toFixed(1);
      for (i = 1; i < N; i++) {
        if (r[i - 1] == null || r[i] == null) continue;
        if (r[i - 1] < st.ob && r[i] >= st.ob) { dots += '<circle cx="' + X(i) + '" cy="' + RY(r[i]) + '" r="4.5" fill="#8f6bff"/>'; cross++; }
        if (r[i - 1] > st.os && r[i] <= st.os) { dots += '<circle cx="' + X(i) + '" cy="' + RY(r[i]) + '" r="4.5" fill="#2ef575"/>'; cross++; }
      }
      svg.innerHTML =
        '<text x="22" y="12" fill="#6b7484" font-size="10" letter-spacing="2">PRICE (SIM)</text>' +
        '<path d="' + path + '" fill="none" stroke="#38d6ff" stroke-width="1.8" opacity=".85"/>' +
        '<text x="22" y="' + (RY0 - 6) + '" fill="#6b7484" font-size="10" letter-spacing="2">RSI ' + st.len + "</text>" +
        '<line x1="20" x2="' + (W - 20) + '" y1="' + RY(st.ob) + '" y2="' + RY(st.ob) + '" stroke="#8f6bff" stroke-dasharray="5 5"/>' +
        '<line x1="20" x2="' + (W - 20) + '" y1="' + RY(st.os) + '" y2="' + RY(st.os) + '" stroke="#2ef575" stroke-dasharray="5 5"/>' +
        '<text x="' + (W - 24) + '" y="' + (RY(st.ob) - 5) + '" fill="#8f6bff" font-size="10" text-anchor="end">' + st.ob + " overbought</text>" +
        '<text x="' + (W - 24) + '" y="' + (RY(st.os) + 13) + '" fill="#2ef575" font-size="10" text-anchor="end">' + st.os + " oversold</text>" +
        '<path d="' + rpath + '" fill="none" stroke="#f2f4f8" stroke-width="1.8"/>' + dots +
        '<rect class="hit" x="20" y="' + RY0 + '" width="' + (W - 40) + '" height="' + RH + '" fill="transparent"/>';
      read.innerHTML = "Signals in view: <b style='color:#f2f4f8'>" + cross + "</b><br>Shorter length ⇒ jumpier line, more (noisier) signals. Wider bands ⇒ fewer, stronger ones.";
      var hit = svg.querySelector(".hit");
      hit.addEventListener("mousemove", function (e) {
        var box = svg.getBoundingClientRect();
        var idx = Math.round(((e.clientX - box.left) / box.width * W - 20) / ((W - 40) / (N - 1)));
        var v = lastR[Math.max(0, Math.min(N - 1, idx))];
        if (v == null) return hideTip();
        showTip("RSI <b>" + v.toFixed(1) + "</b> — " + (v >= st.ob ? "overbought: buyers stretched" : v <= st.os ? "oversold: sellers stretched" : "neutral: momentum undecided"), e.clientX, e.clientY);
      });
      hit.addEventListener("mouseleave", hideTip);
    }
    body.querySelectorAll("input[type=range]").forEach(function (el) {
      var out = el.parentElement.querySelector("output");
      el.addEventListener("input", function () { out.textContent = el.value; st[el.dataset.k] = +el.value; draw(); });
    });
    draw();
  }

  /* ================= FEED NAVIGATOR ================= */
  function feedNav(mount) {
    var body = chrome(mount, "Feed Settings — pick your source, we route you", "LIVE MOCK");
    var sources = [
      { k: "dxFeed", tag: "website purchase", hint: "Credentials come from your dxFeed welcome email; the agreement signs in your DeepCharts dashboard.", server: null, go: "connect-dxfeed" },
      { k: "dxFeed Prop", tag: "MFF · Aqua · Goat…", hint: "Prop dxFeed accounts have NO Server field — that is normal. Sign the agreement on your prop firm's dashboard.", server: null, go: "connect-dxfeed-prop-firm" },
      { k: "Rithmic RAPI", tag: "brokers + prop firms", hint: "Every Rithmic account signs its agreement inside R Trader Pro first. Prop firms pick their named server.", server: "Apex ▾ (16 prop servers)", go: "connect-rithmic-prop-firm" },
      { k: "CQG", tag: "AMP · Optimus · Ironbeam", hint: "Works only when issued DIRECTLY by CQG — never via Tradovate or NinjaTrader.", server: null, go: "connect-cqg" },
      { k: "dxFeed — 15m delayed", tag: "free · no credentials", hint: "The free feed: no credentials, no agreement. Map exchanges in Symbol Manage and you're live (delayed).", server: null, go: "free-delayed-data-feed" }];
    body.innerHTML =
      '<div style="padding:6px 18px 20px">' +
      '<div style="margin:14px 0 0"><div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#6b7484;margin-bottom:7px">Source</div>' +
      '<div class="wg-sel" style="position:relative;background:#14141c;border:1px solid rgba(255,255,255,.15);border-radius:11px;padding:12px 14px;cursor:pointer;transition:border-color .3s,box-shadow .3s"><span class="wg-sel-label" style="color:#9aa3b2">Select your data source…</span><span style="position:absolute;right:14px;color:#6b7484">▾</span>' +
      '<div class="wg-menu" style="position:absolute;z-index:30;left:0;right:0;top:calc(100% + 8px);background:#15151d;border:1px solid rgba(255,255,255,.15);border-radius:13px;overflow:hidden;box-shadow:0 30px 70px rgba(0,0,0,.65);opacity:0;transform:translateY(-8px);pointer-events:none;transition:all .28s cubic-bezier(.22,.8,.22,1)"></div></div></div>' +
      '<div class="wg-server" style="display:none;margin-top:14px"><div style="font-size:11px;letter-spacing:1.4px;text-transform:uppercase;color:#6b7484;margin-bottom:7px">Server</div><div class="wg-server-v" style="background:#14141c;border:1px solid rgba(255,255,255,.15);border-radius:11px;padding:12px 14px"></div></div>' +
      '<div class="wg-hint" style="display:none;gap:9px;margin-top:14px;padding:11px 13px;border-radius:11px;font-size:13px;color:#c8d2de;background:rgba(34,229,106,.12);border:1px solid rgba(34,229,106,.25)"></div>' +
      '<a class="wg-go" style="display:none;margin-top:16px;align-items:center;gap:8px;background:#22e56a;color:#04140a;font-weight:750;font-size:14px;padding:12px 20px;border-radius:12px;box-shadow:0 0 30px rgba(34,229,106,.35);text-decoration:none;transition:transform .28s,box-shadow .28s;width:max-content"></a></div>';
    var sel = body.querySelector(".wg-sel"), menu = body.querySelector(".wg-menu"),
      lab = body.querySelector(".wg-sel-label"), srv = body.querySelector(".wg-server"),
      srvV = body.querySelector(".wg-server-v"), hint = body.querySelector(".wg-hint"),
      go = body.querySelector(".wg-go"), open = false;
    sources.forEach(function (s) {
      var b = document.createElement("button");
      b.style.cssText = "display:flex;justify-content:space-between;width:100%;padding:11px 14px;font-size:14px;color:#9aa3b2;background:none;border:none;cursor:pointer;font-family:inherit";
      b.innerHTML = "<span>" + s.k + "</span><small style='color:#6b7484'>" + s.tag + "</small>";
      b.onmouseenter = function () { b.style.background = "rgba(124,92,255,.16)"; b.style.color = "#f2f4f8"; };
      b.onmouseleave = function () { b.style.background = "none"; b.style.color = "#9aa3b2"; };
      b.onclick = function (e) {
        e.stopPropagation(); toggle(false);
        lab.textContent = s.k; lab.style.color = "#f2f4f8";
        srv.style.display = s.server ? "" : "none"; if (s.server) srvV.textContent = s.server;
        hint.style.display = "flex"; hint.innerHTML = "<span>💡</span><span>" + s.hint + "</span>";
        go.style.display = "inline-flex"; go.textContent = "Open the " + s.k + " guide →";
        go.href = (window.HC_ROOT || "../") + "article/" + s.go + ".html";
      };
      menu.appendChild(b);
    });
    function toggle(v) {
      open = v === undefined ? !open : v;
      menu.style.opacity = open ? 1 : 0; menu.style.transform = open ? "none" : "translateY(-8px)";
      menu.style.pointerEvents = open ? "auto" : "none";
      sel.style.borderColor = open ? "#7c5cff" : "rgba(255,255,255,.15)";
      sel.style.boxShadow = open ? "0 0 0 4px rgba(124,92,255,.16)" : "none";
    }
    sel.addEventListener("click", function () { toggle(); });
    document.addEventListener("click", function (e) { if (!sel.contains(e.target)) toggle(false); });
    go.addEventListener("mouseenter", function () { go.style.transform = "translateY(-2px)"; });
    go.addEventListener("mouseleave", function () { go.style.transform = "none"; });
  }

  /* ================= MAIN BAR EXPLORER ================= */
  function mainBar(mount) {
    var body = chrome(mount, "The DeepCharts main bar — click the menus, everything answers", "LIVE MOCK");
    var A = (window.HC_ROOT || "../") + "article/";
    var MENUS = [
      { label: "New", items: [
        { t: "Adv. Time And Sales", tip: "The tape — every executed trade as it prints, with aggressor colors.", go: "adv-time-and-sales" },
        { t: "Book ▸ Adv. / Horizontal / Vertical dom", tip: "Depth-of-market ladders in three layouts.", go: "advanced-dom" },
        { t: "Correlation Viewer", tip: "Compare how instruments move together on one % axis.", go: "correlation-viewer" },
        { t: "Price Chart", tip: "The standard chart window — candles, indicators, drawings, trading.", go: "chart-window" },
        { t: "Profile Chart", tip: "TPO letters and volume/delta profiles in a dedicated window.", go: "profile-chart-window" },
        { t: "Scanner", tip: "A live OHLC + % table across the symbols you pick.", go: "scanner-window" }] },
      { label: "Options", items: [
        { t: "Feed Settings", tip: "Add and edit data-feed connections — where every setup starts.", go: "connect-data-feed" },
        { t: "Symbol Manage", tip: "Map exchanges to your feed. Empty instrument picker? Fix it here.", go: "symbol-manage" },
        { t: "Symbols Rollover", tip: "Roll futures contracts to the next month (and roll back).", go: "symbol-rollover" },
        { t: "Replay Tick Data", tip: "Practice on recorded markets, risk-free.", go: "replay-data" },
        { t: "Database ▸", tip: "Optimize, delete or re-download stored market data.", go: "database-optimization" },
        { t: "Show Calendar", tip: "Economic calendar with event intensity ratings." },
        { t: "Settings", tip: "Language, theme, timezone, sounds, keyboard shortcuts.", go: "customize-language-theme-sounds" }] },
      { label: "Trading", items: [
        { t: "Orders", tip: "Every order you have placed — working, filled, cancelled.", go: "orders-window" },
        { t: "Portfolio", tip: "Balances and P/L per account, plus the risk manager.", go: "portfolio-wallet" },
        { t: "Signal Performance", tip: "Statistics on your past trades — win rate, time analysis, export.", go: "performance-analysis" },
        { t: "Risk Manager", tip: "Loss limits and automatic lockouts.", go: "risk-manager" },
        { t: "Trade Copier", tip: "Mirror orders across several accounts.", go: "trade-copier" }] },
      { label: "Window", items: [
        { t: "Position windows", tip: "Arrange window types across monitors — and recover off-screen windows.", go: "multi-monitor-windows" }] },
      { label: "About us", items: [
        { t: "Calendar events", tip: "Join live DeepCharts sessions or watch recordings from inside the app." },
        { t: "Info", tip: "Version and license information." },
        { t: "Website", tip: "Opens deepcharts.com." }] },
      { label: "?", items: [
        { t: "Guides", tip: "Opens this help center." },
        { t: "Contact Support", tip: "Opens the diagnostic window — run it before writing to support.", go: "diagnostic-report" }] },
      { label: "Untitled ▾", right: true, items: [
        { t: "Workspace: New / Save as / Open", tip: "Save your window layout and reload it tomorrow — locally, in the cloud, or shared.", go: "templates-workspaces" }] },
      { label: "● dxFeed - 15m", right: true, feed: true, items: [
        { t: "✓ dxFeed - 15m delayed", tip: "Your active connection. Green dot = connected and streaming.", go: "free-delayed-data-feed" },
        { t: "Feed Settings…", tip: "Add another connection — live Rithmic, CQG, dxFeed, prop feeds.", go: "connect-data-feed" }] },
    ];
    body.innerHTML = '<div style="padding:22px 18px 26px"><div class="mb-bar" style="display:flex;align-items:center;gap:4px;background:#0a0a10;border:1px solid rgba(255,255,255,.12);border-radius:12px;padding:9px 14px;flex-wrap:wrap">' +
      '<span style="font-weight:900;font-style:italic;font-size:13px;margin-right:10px">𝕯 DEEPCHARTS</span></div>' +
      '<div style="margin-top:12px;font-size:12.5px;color:#6b7484">↑ This is a working mock. Click a menu, hover an item to learn it, click to open its guide.</div></div>';
    var bar = body.querySelector(".mb-bar"), openMenu = null;
    MENUS.forEach(function (m) {
      var wrap = document.createElement("div");
      wrap.style.cssText = "position:relative" + (m.right ? ";margin-left:auto" : "");
      if (m.right && !wrap.previousElementSibling) wrap.style.marginLeft = "auto";
      var btn = document.createElement("button");
      btn.textContent = m.label;
      btn.style.cssText = "font:inherit;font-size:13px;color:" + (m.feed ? "#22e56a" : "#c8d2de") +
        ";background:none;border:none;border-radius:8px;padding:6px 11px;cursor:pointer;transition:background .2s";
      btn.onmouseenter = function () { btn.style.background = "rgba(255,255,255,.07)"; };
      btn.onmouseleave = function () { if (openMenu !== dd) btn.style.background = "none"; };
      var dd = document.createElement("div");
      dd.style.cssText = "position:absolute;z-index:40;top:calc(100% + 10px);" + (m.right ? "right:0" : "left:0") +
        ";min-width:250px;background:#15151d;border:1px solid rgba(255,255,255,.15);border-radius:13px;overflow:hidden;" +
        "box-shadow:0 30px 70px rgba(0,0,0,.7);opacity:0;transform:translateY(-8px);pointer-events:none;transition:all .26s cubic-bezier(.22,.8,.22,1)";
      m.items.forEach(function (it) {
        var el = document.createElement(it.go ? "a" : "div");
        if (it.go) el.href = A + it.go + ".html";
        el.textContent = it.t;
        el.style.cssText = "display:block;padding:10px 15px;font-size:13.5px;color:#9aa3b2;text-decoration:none;cursor:" + (it.go ? "pointer" : "default") + ";transition:background .2s,color .2s";
        el.onmouseenter = function (e) { el.style.background = "rgba(124,92,255,.16)"; el.style.color = "#f2f4f8"; showTip(it.tip + (it.go ? " <b>Click to open the guide.</b>" : ""), e.clientX, e.clientY); };
        el.onmousemove = function (e) { showTip(it.tip + (it.go ? " <b>Click to open the guide.</b>" : ""), e.clientX, e.clientY); };
        el.onmouseleave = function () { el.style.background = "none"; el.style.color = "#9aa3b2"; hideTip(); };
        dd.appendChild(el);
      });
      btn.onclick = function (e) {
        e.stopPropagation();
        if (openMenu && openMenu !== dd) close(openMenu);
        if (openMenu === dd) { close(dd); openMenu = null; return; }
        dd.style.opacity = 1; dd.style.transform = "none"; dd.style.pointerEvents = "auto";
        btn.style.background = "rgba(124,92,255,.2)"; openMenu = dd;
      };
      function close(d) { d.style.opacity = 0; d.style.transform = "translateY(-8px)"; d.style.pointerEvents = "none"; bar.querySelectorAll("button").forEach(function (b) { b.style.background = "none"; }); }
      wrap.appendChild(btn); wrap.appendChild(dd); bar.appendChild(wrap);
      document.addEventListener("click", function () { if (openMenu === dd) { close(dd); openMenu = null; } });
    });
  }

  /* ================= SPEC CHECK — "will it run?" ================= */
  function specCheck(mount) {
    var body = chrome(mount, "Will DeepCharts run on your machine? Dial it in", "LIVE CHECK");
    body.innerHTML =
      '<div class="wg-grid" style="display:grid;grid-template-columns:300px 1fr">' +
      '<div style="padding:20px;display:flex;flex-direction:column;gap:18px;border-right:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.015)">' +
      '<div><div class="sc-lab">Operating system</div><select class="sc-os" style="width:100%;background:#14141c;border:1px solid rgba(255,255,255,.15);border-radius:10px;color:#f2f4f8;padding:10px 12px;font:inherit;font-size:14px">' +
      '<option value="w11">Windows 11 (64-bit)</option><option value="w10">Windows 10 (64-bit)</option>' +
      '<option value="old">Older Windows / 32-bit</option><option value="mac">macOS</option><option value="linux">Linux</option></select></div>' +
      '<div><div class="sc-lab">RAM <output class="sc-ram-o" style="color:#22e56a;font-weight:800">16 GB</output></div><input type="range" class="sc-ram" min="4" max="64" step="4" value="16" style="width:100%"></div>' +
      '<div><div class="sc-lab">CPU cores <output class="sc-cpu-o" style="color:#22e56a;font-weight:800">4</output></div><input type="range" class="sc-cpu" min="2" max="16" step="1" value="4" style="width:100%"></div>' +
      '<div class="sc-lab" style="display:flex;justify-content:space-between;align-items:center;text-transform:none;letter-spacing:0">System drive is an SSD' +
      '<button class="sc-ssd" aria-pressed="true" style="width:42px;height:24px;border-radius:99px;background:#22e56a;position:relative;border:none;cursor:pointer"><span style="position:absolute;top:3px;left:21px;width:18px;height:18px;border-radius:50%;background:#fff;transition:left .3s"></span></button></div>' +
      '<div><div class="sc-lab">Windows you plan to keep open <output class="sc-win-o" style="color:#38d6ff;font-weight:800">3</output></div><input type="range" class="sc-win" min="1" max="10" value="3" style="width:100%">' +
      '<div style="font-size:11.5px;color:#6b7484;margin-top:6px">charts + DOMs + tapes — each holds tick data in RAM</div></div>' +
      '<div style="font-size:11px;color:#6b7484;border-top:1px solid rgba(255,255,255,.08);padding-top:12px">Find yours: press <b style="color:#9aa3b2">Win + Pause</b> or open Settings → System → About.</div></div>' +
      '<div style="padding:20px 22px"><div class="sc-banner" style="border-radius:12px;padding:14px 16px;font-size:14.5px;font-weight:650;margin-bottom:14px;transition:all .4s"></div><div class="sc-rows" style="display:flex;flex-direction:column;gap:9px"></div>' +
      '<div style="font-size:11.5px;color:#6b7484;margin-top:14px">Practical guidance — the authoritative minimums are published on your my.deepcharts.com dashboard.</div></div></div>';
    if (matchMedia("(max-width:900px)").matches) body.querySelector(".wg-grid").style.gridTemplateColumns = "1fr";
    var st2 = document.createElement("style");
    st2.textContent = ".sc-lab{font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#6b7484;margin-bottom:8px;display:flex;justify-content:space-between}";
    mount.appendChild(st2);
    var s = { os: "w11", ram: 16, cpu: 4, ssd: true, win: 3 };
    var rows = body.querySelector(".sc-rows"), banner = body.querySelector(".sc-banner");
    function verdict() {
      var out = [];
      if (s.os === "mac" || s.os === "linux")
        out.push(["fail", "Operating system", "DeepCharts is Windows-only. You need a Windows 10/11 machine or a Windows VPS."]);
      else if (s.os === "old")
        out.push(["fail", "Operating system", "64-bit Windows 10 or 11 is required."]);
      else out.push(["pass", "Operating system", (s.os === "w11" ? "Windows 11" : "Windows 10") + " 64-bit — supported."]);
      var need = Math.max(8, Math.round(6 + s.win * 1.4));
      if (s.ram < 8) out.push(["fail", "RAM — " + s.ram + " GB", "Below the practical 8 GB minimum. Charts will page to disk."]);
      else if (s.ram < need) out.push(["warn", "RAM — " + s.ram + " GB", "Runs, but " + s.win + " windows of tick data want ~" + need + " GB. Reduce days-to-load or add RAM."]);
      else out.push(["pass", "RAM — " + s.ram + " GB", "Comfortable for " + s.win + " open window" + (s.win > 1 ? "s" : "") + " (~" + need + " GB working set)."]);
      if (s.cpu < 4) out.push(["warn", "CPU — " + s.cpu + " cores", "Dual/triple-core will lag during volatile bursts; tick processing is CPU-bound."]);
      else out.push(["pass", "CPU — " + s.cpu + " cores", "Indicator math and tick processing have room to breathe."]);
      if (s.ssd) out.push(["pass", "Storage — SSD", "Chart builds read tick history from disk; SSD keeps loads short."]);
      else out.push(["warn", "Storage — HDD", "It runs, but chart build times suffer badly. Move the database folder to an SSD."]);
      return out;
    }
    var C = { pass: ["#22e56a", "rgba(34,229,106,.1)", "✓"], warn: ["#ff7a3d", "rgba(255,122,61,.1)", "!"], fail: ["#ff4d5e", "rgba(255,77,94,.1)", "✗"] };
    function draw() {
      var v = verdict(), worst = v.some(function (r) { return r[0] === "fail"; }) ? "fail" : v.some(function (r) { return r[0] === "warn"; }) ? "warn" : "pass";
      rows.innerHTML = v.map(function (r) {
        return '<div style="display:flex;gap:12px;align-items:flex-start;border:1px solid rgba(255,255,255,.08);border-radius:11px;padding:11px 13px;background:' + C[r[0]][1] + ';transition:all .35s">' +
          '<span style="flex:none;width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:900;color:#0a0a0c;background:' + C[r[0]][0] + '">' + C[r[0]][2] + "</span>" +
          '<span><b style="font-size:13.5px">' + r[1] + '</b><br><span style="font-size:12.5px;color:#9aa3b2">' + r[2] + "</span></span></div>";
      }).join("");
      banner.style.background = C[worst][1]; banner.style.border = "1px solid " + C[worst][0]; banner.style.color = C[worst][0];
      banner.textContent = worst === "pass" ? "✓ You're good — this machine handles a real orderflow desk."
        : worst === "warn" ? "! It will run — but fix the orange items before blaming the platform."
        : "✗ This setup can't run DeepCharts — see the red item.";
    }
    function bindR(cls, out, key, suf) {
      var el = body.querySelector(cls), o = body.querySelector(out);
      el.addEventListener("input", function () { s[key] = +el.value; o.textContent = el.value + (suf || ""); draw(); });
    }
    bindR(".sc-ram", ".sc-ram-o", "ram", " GB"); bindR(".sc-cpu", ".sc-cpu-o", "cpu"); bindR(".sc-win", ".sc-win-o", "win");
    body.querySelector(".sc-os").addEventListener("change", function (e) { s.os = e.target.value; draw(); });
    var ssd = body.querySelector(".sc-ssd");
    ssd.addEventListener("click", function () {
      s.ssd = !s.ssd; ssd.style.background = s.ssd ? "#22e56a" : "#23232d";
      ssd.firstElementChild.style.left = s.ssd ? "21px" : "3px"; ssd.setAttribute("aria-pressed", s.ssd); draw();
    });
    draw();
  }

  var registry = { "dom-ladder": domLadder, "rsi-lab": rsiLab, "feed-navigator": feedNav, "main-bar": mainBar, "spec-check": specCheck };
  mounts.forEach(function (m) {
    var fn = registry[m.dataset.widget];
    if (fn) try { fn(m); } catch (e) { m.remove(); }
  });
})();
