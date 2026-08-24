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

  /* ============ shared helpers for the lab widgets ============ */
  function genSeries(n, start, vol, seedv) {
    var out = [], p = start, seed = seedv || 42;
    function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647 - 0.5; }
    for (var i = 0; i < n; i++) { p += rnd() * vol + Math.sin(i / 13) * vol * 0.25; out.push(p); }
    return out;
  }
  function sliderRow(label, min, max, val, step, color) {
    return '<div><div style="display:flex;justify-content:space-between;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#6b7484;margin-bottom:8px">' +
      label + ' <output style="color:' + (color || "#22e56a") + ';font-weight:800">' + val + "</output></div>" +
      '<input type="range" min="' + min + '" max="' + max + '" step="' + (step || 1) + '" value="' + val + '" style="width:100%"></div>';
  }
  function labShell(body, controlsHtml, vb) {
    body.innerHTML = '<div class="wg-grid" style="display:grid;grid-template-columns:1fr 260px">' +
      '<div style="padding:14px 6px 6px 2px"><svg viewBox="0 0 ' + (vb || "760 340") + '" width="100%" height="auto"></svg></div>' +
      '<div style="border-left:1px solid rgba(255,255,255,.08);padding:20px;display:flex;flex-direction:column;gap:18px;background:rgba(255,255,255,.015)">' +
      controlsHtml + '<div class="wg-read" style="font-size:12.5px;color:#9aa3b2;border-top:1px solid rgba(255,255,255,.08);padding-top:14px;line-height:1.8"></div></div></div>';
    if (matchMedia("(max-width:900px)").matches) body.querySelector(".wg-grid").style.gridTemplateColumns = "1fr";
    return { svg: body.querySelector("svg"), read: body.querySelector(".wg-read"), sliders: body.querySelectorAll("input[type=range]") };
  }
  function bindSlider(el, fn) {
    var out = el.parentElement.querySelector("output");
    el.addEventListener("input", function () { out.textContent = el.value; fn(+el.value); });
  }

  /* ================= VOLUME PROFILE LAB ================= */
  function vpLab(mount) {
    var body = chrome(mount, "Volume Profile — drag the Value Area %, hover the rows", "REAL MATH");
    var ui = labShell(body, sliderRow("Value Area %", 50, 90, 70, 1, "#38d6ff"), "700 340");
    var N = 22, base = 21000, vols = [], i;
    for (i = 0; i < N; i++) { var d = Math.abs(i - 13.2); vols.push(Math.round(900 * Math.exp(-d * d / 16) + 40 + (i * 37 % 90))); }
    var total = vols.reduce(function (a, b) { return a + b; }, 0), poc = vols.indexOf(Math.max.apply(null, vols));
    function vaRows(pct) {
      var need = total * pct / 100, sum = vols[poc], lo = poc, hi = poc;
      while (sum < need && (lo > 0 || hi < N - 1)) {
        var up = hi < N - 1 ? vols[hi + 1] : -1, dn = lo > 0 ? vols[lo - 1] : -1;
        if (up >= dn) { hi++; sum += vols[hi]; } else { lo--; sum += vols[lo]; }
      }
      return [lo, hi];
    }
    function draw(pct) {
      var va = vaRows(pct), lo = va[0], hi = va[1], W = 700, H = 330, rh = H / N - 3, max = Math.max.apply(null, vols), rows = "";
      for (var i = 0; i < N; i++) {
        var y = 6 + i * (H / N), w = vols[i] / max * (W - 170), inVA = i >= lo && i <= hi, isPoc = i === poc;
        var fill = isPoc ? "#ff5cd6" : inVA ? (i < poc ? "#8f6bff" : "#22e56a") : "#2b2b36";
        rows += '<g class="vp" data-i="' + i + '"><text x="46" y="' + (y + rh / 2 + 4) + '" fill="#6b7484" font-size="9.5" text-anchor="end">' + (base + (N - i) * 5) + "</text>" +
          '<rect x="54" y="' + y + '" width="' + w + '" height="' + rh + '" rx="3" fill="' + fill + '" opacity="' + (inVA ? ".95" : ".6") + '" style="cursor:crosshair"/></g>';
      }
      var yLo = 6 + lo * (H / N) - 2, yHi = 6 + (hi + 1) * (H / N) - 1;
      ui.svg.innerHTML = rows +
        '<line x1="54" x2="' + (W - 100) + '" y1="' + yLo + '" y2="' + yLo + '" stroke="#38d6ff" stroke-dasharray="5 5"/><text x="' + (W - 96) + '" y="' + (yLo + 4) + '" fill="#38d6ff" font-size="10">VAH</text>' +
        '<line x1="54" x2="' + (W - 100) + '" y1="' + yHi + '" y2="' + yHi + '" stroke="#38d6ff" stroke-dasharray="5 5"/><text x="' + (W - 96) + '" y="' + (yHi + 4) + '" fill="#38d6ff" font-size="10">VAL</text>' +
        '<text x="' + (W - 96) + '" y="' + (6 + poc * (H / N) + rh / 2 + 4) + '" fill="#ff5cd6" font-size="10">POC</text>';
      ui.read.innerHTML = "<b style='color:#f2f4f8'>" + pct + "%</b> of all volume traded between VAH and VAL — the market's <b style='color:#38d6ff'>accepted</b> prices. The magenta <b style='color:#ff5cd6'>POC</b> row is the single busiest price.";
      ui.svg.querySelectorAll("g.vp rect").forEach(function (r, idx) {
        r.addEventListener("mousemove", function (e) {
          var inV = idx >= lo && idx <= hi;
          showTip("<b>" + vols[idx] + "</b> contracts at " + (base + (N - idx) * 5) + " — " + (idx === poc ? "the <b>POC</b>: fairest price of the session." : inV ? "inside the value area: accepted, two-sided trade." : "outside value: the auction probed here and got rejected."), e.clientX, e.clientY);
        });
        r.addEventListener("mouseleave", hideTip);
      });
    }
    bindSlider(ui.sliders[0], draw); draw(70);
  }

  /* ================= FOOTPRINT LAB ================= */
  function fpLab(mount) {
    var body = chrome(mount, "Footprint — bid × ask per price. Tune the imbalance filter", "REAL MATH");
    var ui = labShell(body, sliderRow("Imbalance ratio", 2, 5, 3, 0.5, "#ff7a3d"), "760 350");
    var ROWS = 9, COLS = 3, base = 21040, seed = 7, data = [];
    function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    for (var c = 0; c < COLS; c++) { var col = []; for (var r = 0; r < ROWS; r++) col.push([Math.round(rnd() * 140 + 5), Math.round(rnd() * 140 + 5)]); data.push(col); }
    data[1][2] = [12, 190]; data[1][3] = [15, 160]; data[2][6] = [170, 9]; /* seeded stories */
    function draw(k) {
      var W = 760, H = 340, cw = 150, ch = (H - 40) / ROWS, out = "", c, r;
      for (c = 0; c < COLS; c++) {
        var x0 = 70 + c * (cw + 70), delta = 0;
        for (r = 0; r < ROWS; r++) delta += data[c][r][1] - data[c][r][0];
        for (r = 0; r < ROWS; r++) {
          var y = 10 + r * ch, bid = data[c][r][0], ask = data[c][r][1];
          var askImb = r < ROWS - 1 && ask >= k * data[c][r + 1][0];
          var bidImb = r > 0 && bid >= k * data[c][r - 1][1];
          out += '<g class="fp" data-c="' + c + '" data-r="' + r + '">' +
            '<rect x="' + x0 + '" y="' + y + '" width="' + (cw / 2) + '" height="' + (ch - 2) + '" fill="' + (bidImb ? "rgba(255,92,120,.35)" : "rgba(255,255,255,.03)") + '" stroke="rgba(255,255,255,.07)" style="cursor:crosshair"/>' +
            '<rect x="' + (x0 + cw / 2) + '" y="' + y + '" width="' + (cw / 2) + '" height="' + (ch - 2) + '" fill="' + (askImb ? "rgba(34,229,106,.35)" : "rgba(255,255,255,.03)") + '" stroke="rgba(255,255,255,.07)" style="cursor:crosshair"/>' +
            '<text x="' + (x0 + cw / 4) + '" y="' + (y + ch / 2 + 3) + '" fill="' + (bidImb ? "#ff8fa3" : "#9aa3b2") + '" font-size="10.5" text-anchor="middle" ' + (bidImb ? 'font-weight="800"' : "") + ">" + bid + "</text>" +
            '<text x="' + (x0 + cw * 3 / 4) + '" y="' + (y + ch / 2 + 3) + '" fill="' + (askImb ? "#4ef58a" : "#9aa3b2") + '" font-size="10.5" text-anchor="middle" ' + (askImb ? 'font-weight="800"' : "") + ">" + ask + "</text>";
          if (c === 0) out += '<text x="62" y="' + (y + ch / 2 + 3) + '" fill="#6b7484" font-size="9" text-anchor="end">' + (base - r * 5) + "</text>";
          out += "</g>";
        }
        out += '<text x="' + (x0 + cw / 2) + '" y="' + (H - 6) + '" text-anchor="middle" font-size="11" font-weight="800" fill="' + (delta >= 0 ? "#22e56a" : "#ff5c78") + '">Δ ' + (delta > 0 ? "+" : "") + delta + "</text>" +
          '<text x="' + (x0 + cw / 4) + '" y="' + (H - 22) + '" text-anchor="middle" font-size="8.5" fill="#6b7484">BID×</text><text x="' + (x0 + cw * 3 / 4) + '" y="' + (H - 22) + '" text-anchor="middle" font-size="8.5" fill="#6b7484">×ASK</text>';
      }
      ui.svg.innerHTML = out;
      ui.read.innerHTML = "Highlighted cells beat the <b style='color:#f2f4f8'>diagonal</b> opposite by ≥ <b style='color:#ff7a3d'>" + k + ":1</b> — an imbalance. Green = aggressive buyers dominating; pink = aggressive sellers. Stacked imbalances mark initiative moves.";
      ui.svg.querySelectorAll("g.fp").forEach(function (g) {
        var c = +g.dataset.c, r = +g.dataset.r, bid = data[c][r][0], ask = data[c][r][1];
        g.addEventListener("mousemove", function (e) {
          showTip("Price " + (base - r * 5) + ": <b>" + bid + "</b> sold at bid × <b>" + ask + "</b> bought at ask. Diagonal rule compares this ask to the bid one row lower — that is how conviction shows.", e.clientX, e.clientY);
        });
        g.addEventListener("mouseleave", hideTip);
      });
    }
    bindSlider(ui.sliders[0], draw); draw(3);
  }

  /* ================= VWAP LAB ================= */
  function vwapLab(mount) {
    var body = chrome(mount, "VWAP — the volume-weighted anchor with σ bands", "REAL MATH");
    var ui = labShell(body, sliderRow("Band width (σ)", 1, 3, 2, 0.5, "#a58bff"), "760 340");
    var N = 150, px = genSeries(N, 21000, 9, 11), vol = [], i;
    for (i = 0; i < N; i++) vol.push(60 + (i * 53 % 90));
    var vwap = [], cumPV = 0, cumV = 0, dev = [];
    for (i = 0; i < N; i++) { cumPV += px[i] * vol[i]; cumV += vol[i]; vwap.push(cumPV / cumV); var s = 0, j; for (j = 0; j <= i; j++) s += Math.pow(px[j] - vwap[i], 2) * vol[j]; dev.push(Math.sqrt(s / cumV)); }
    function draw(k) {
      var W = 760, H = 330, mn = 1e9, mx = -1e9;
      for (var i = 0; i < N; i++) { mn = Math.min(mn, px[i], vwap[i] - dev[i] * k); mx = Math.max(mx, px[i], vwap[i] + dev[i] * k); }
      function Y(v) { return 12 + (1 - (v - mn) / (mx - mn)) * (H - 24); }
      function X(i) { return 16 + i * (W - 32) / (N - 1); }
      var p = "", vw = "", up = "", dn = "";
      for (i = 0; i < N; i++) {
        p += (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(px[i]).toFixed(1);
        vw += (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(vwap[i]).toFixed(1);
        up += (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(vwap[i] + dev[i] * k).toFixed(1);
      }
      for (i = N - 1; i >= 0; i--) dn += "L" + X(i).toFixed(1) + " " + Y(vwap[i] - dev[i] * k).toFixed(1);
      ui.svg.innerHTML = '<path d="' + up + dn + 'Z" fill="rgba(124,92,255,.1)"/>' +
        '<path d="' + up + '" fill="none" stroke="#8f6bff" stroke-width="1" stroke-dasharray="4 4"/>' +
        '<path d="M' + dn.slice(1) + '" fill="none" stroke="#8f6bff" stroke-width="1" stroke-dasharray="4 4"/>' +
        '<path d="' + vw + '" fill="none" stroke="#ff7a3d" stroke-width="2"/>' +
        '<path d="' + p + '" fill="none" stroke="#38d6ff" stroke-width="1.6"/>' +
        '<rect class="hit" x="0" y="0" width="' + W + '" height="' + H + '" fill="transparent"/>';
      ui.read.innerHTML = "Orange = <b style='color:#ff7a3d'>VWAP</b>, the session's volume-weighted average. Bands sit <b style='color:#a58bff'>" + k + "σ</b> away: price near the upper band is stretched vs where volume actually traded; reversion trades and trend riders read it opposite ways.";
      var hit = ui.svg.querySelector(".hit");
      hit.addEventListener("mousemove", function (e) {
        var box = ui.svg.getBoundingClientRect(), i = Math.max(0, Math.min(N - 1, Math.round(((e.clientX - box.left) / box.width * W - 16) / ((W - 32) / (N - 1)))));
        var z = dev[i] ? (px[i] - vwap[i]) / dev[i] : 0;
        showTip("Price <b>" + px[i].toFixed(2) + "</b> vs VWAP " + vwap[i].toFixed(2) + " → <b>" + z.toFixed(2) + "σ</b> " + (z > 1 ? "above — buyers paying premium" : z < -1 ? "below — trading at a discount" : "near fair value"), e.clientX, e.clientY);
      });
      hit.addEventListener("mouseleave", hideTip);
    }
    bindSlider(ui.sliders[0], draw); draw(2);
  }

  /* ================= MOVING AVERAGE LAB ================= */
  function maLab(mount) {
    var body = chrome(mount, "Moving Average — feel the lag trade-off", "REAL MATH");
    var ui = labShell(body, '<div style="display:flex;gap:8px"><button class="ma-t on" data-t="sma">SMA</button><button class="ma-t" data-t="ema">EMA</button></div>' + sliderRow("Length", 3, 60, 20), "760 320");
    var st3 = document.createElement("style");
    st3.textContent = ".ma-t{flex:1;font:inherit;font-size:12px;font-weight:700;padding:8px;border-radius:9px;border:1px solid rgba(255,255,255,.15);background:none;color:#9aa3b2;cursor:pointer;transition:all .25s}.ma-t.on{background:rgba(34,229,106,.14);border-color:#22e56a;color:#22e56a}";
    mount.appendChild(st3);
    var N = 160, px = genSeries(N, 4300, 8, 23), st = { t: "sma", len: 20 };
    function calc() {
      var out = Array(N).fill(null), i;
      if (st.t === "sma") { var s = 0; for (i = 0; i < N; i++) { s += px[i]; if (i >= st.len) s -= px[i - st.len]; if (i >= st.len - 1) out[i] = s / st.len; } }
      else { var k = 2 / (st.len + 1), e = px[0]; for (i = 0; i < N; i++) { e = px[i] * k + e * (1 - k); out[i] = e; } }
      return out;
    }
    function draw() {
      var ma = calc(), W = 760, H = 310, mn = Math.min.apply(null, px), mx = Math.max.apply(null, px);
      function Y(v) { return 12 + (1 - (v - mn) / (mx - mn)) * (H - 24); } function X(i) { return 16 + i * (W - 32) / (N - 1); }
      var p = "", m = "", i;
      for (i = 0; i < N; i++) { p += (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(px[i]).toFixed(1); if (ma[i] != null) m += (m ? "L" : "M") + X(i).toFixed(1) + " " + Y(ma[i]).toFixed(1); }
      ui.svg.innerHTML = '<path d="' + p + '" fill="none" stroke="#38d6ff" stroke-width="1.5" opacity=".8"/><path d="' + m + '" fill="none" stroke="#ff7a3d" stroke-width="2.2"/>';
      ui.read.innerHTML = "<b style='color:#ff7a3d'>" + st.t.toUpperCase() + " " + st.len + "</b> — shorter hugs price but whipsaws; longer smooths but answers late. EMA weights recent bars, so it turns earlier than the SMA at the same length.";
    }
    body.querySelectorAll(".ma-t").forEach(function (b) {
      b.addEventListener("click", function () { body.querySelectorAll(".ma-t").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); st.t = b.dataset.t; draw(); });
    });
    bindSlider(ui.sliders[0], function (v) { st.len = v; draw(); }); draw();
  }

  /* ================= MACD LAB ================= */
  function macdLab(mount) {
    var body = chrome(mount, "MACD — two EMAs arguing, a histogram keeping score", "REAL MATH");
    var ui = labShell(body, sliderRow("Fast EMA", 4, 20, 12) + sliderRow("Slow EMA", 15, 50, 26, 1, "#a58bff") + sliderRow("Signal", 3, 15, 9, 1, "#ff7a3d"), "760 350");
    var N = 170, px = genSeries(N, 4300, 9, 31), st = { f: 12, s: 26, g: 9 };
    function ema(arr, len) { var out = [], k = 2 / (len + 1), e = arr[0]; for (var i = 0; i < arr.length; i++) { e = arr[i] * k + e * (1 - k); out.push(e); } return out; }
    function draw() {
      if (st.f >= st.s) { ui.read.innerHTML = "<b style='color:#ff5c78'>Fast must be shorter than slow.</b>"; return; }
      var ef = ema(px, st.f), es = ema(px, st.s), macd = [], i;
      for (i = 0; i < N; i++) macd.push(ef[i] - es[i]);
      var sig = ema(macd, st.g), W = 760, H = 340, PH = 170, MY0 = 190, MH = 140;
      var mn = Math.min.apply(null, px), mx = Math.max.apply(null, px);
      var mmn = Math.min.apply(null, macd), mmx = Math.max.apply(null, macd), mr = Math.max(Math.abs(mmn), Math.abs(mmx));
      function Y(v) { return 10 + (1 - (v - mn) / (mx - mn)) * (PH - 20); }
      function MY(v) { return MY0 + (1 - (v + mr) / (2 * mr)) * MH; }
      function X(i) { return 16 + i * (W - 32) / (N - 1); }
      var p = "", ml = "", sl = "", bars = "", cross = 0;
      for (i = 0; i < N; i++) {
        p += (i ? "L" : "M") + X(i).toFixed(1) + " " + Y(px[i]).toFixed(1);
        ml += (i ? "L" : "M") + X(i).toFixed(1) + " " + MY(macd[i]).toFixed(1);
        sl += (i ? "L" : "M") + X(i).toFixed(1) + " " + MY(sig[i]).toFixed(1);
        var h = macd[i] - sig[i];
        bars += '<rect x="' + (X(i) - 1.6) + '" y="' + Math.min(MY(0), MY(0) - h / mr * MH / 2) + '" width="3.2" height="' + Math.abs(h / mr * MH / 2) + '" fill="' + (h >= 0 ? "#22e56a" : "#8f6bff") + '" opacity=".8"/>';
        if (i && (macd[i - 1] - sig[i - 1]) * h < 0) cross++;
      }
      ui.svg.innerHTML = '<text x="18" y="12" fill="#6b7484" font-size="10" letter-spacing="2">PRICE</text><path d="' + p + '" fill="none" stroke="#38d6ff" stroke-width="1.5" opacity=".8"/>' +
        '<text x="18" y="' + (MY0 - 4) + '" fill="#6b7484" font-size="10" letter-spacing="2">MACD ' + st.f + "/" + st.s + "/" + st.g + '</text>' +
        '<line x1="16" x2="' + (W - 16) + '" y1="' + MY(0) + '" y2="' + MY(0) + '" stroke="rgba(255,255,255,.15)"/>' + bars +
        '<path d="' + ml + '" fill="none" stroke="#f2f4f8" stroke-width="1.7"/><path d="' + sl + '" fill="none" stroke="#ff7a3d" stroke-width="1.4"/>';
      ui.read.innerHTML = "White = MACD line (fast − slow EMA). Orange = its signal EMA. Histogram = the gap. <b style='color:#f2f4f8'>" + cross + " crossovers</b> in view — tighter settings mean more, noisier signals.";
    }
    bindSlider(ui.sliders[0], function (v) { st.f = v; draw(); });
    bindSlider(ui.sliders[1], function (v) { st.s = v; draw(); });
    bindSlider(ui.sliders[2], function (v) { st.g = v; draw(); });
    draw();
  }

  /* ================= CANDLE ANATOMY ================= */
  function candleAnatomy(mount) {
    var body = chrome(mount, "Candle anatomy — hover every part, flip the direction", "INTERACTIVE");
    body.innerHTML = '<div style="display:flex;flex-wrap:wrap;gap:0"><div style="flex:1;min-width:280px;padding:18px 10px 10px"><svg viewBox="0 0 340 320" width="100%" height="auto"></svg></div>' +
      '<div style="flex:1;min-width:280px;border-left:1px solid rgba(255,255,255,.08);padding:20px;background:rgba(255,255,255,.015)">' +
      '<div style="display:flex;gap:8px;margin-bottom:16px"><button class="ca-d on" data-d="bull">Bullish</button><button class="ca-d" data-d="bear">Bearish</button></div>' +
      '<div class="ca-read" style="font-size:13px;color:#9aa3b2;line-height:1.8">Hover the candle parts — each explains itself. A candle compresses four facts (open, high, low, close) into one shape; the color tells you which side won the interval.</div></div></div>';
    var st4 = document.createElement("style");
    st4.textContent = ".ca-d{flex:1;font:inherit;font-size:12px;font-weight:700;padding:8px;border-radius:9px;border:1px solid rgba(255,255,255,.15);background:none;color:#9aa3b2;cursor:pointer;transition:all .25s}.ca-d.on{background:rgba(34,229,106,.14);border-color:#22e56a;color:#22e56a}";
    mount.appendChild(st4);
    var svg = body.querySelector("svg"), read = body.querySelector(".ca-read"), dir = "bull";
    function draw() {
      var bull = dir === "bull", col = bull ? "#22e56a" : "#8f6bff", glow = bull ? "rgba(34,229,106,.4)" : "rgba(124,92,255,.45)";
      var oy = bull ? 210 : 110, cy = bull ? 110 : 210;
      var zones = [
        ["Upper wick", "Price pushed up to the HIGH but sellers forced it back — extension beyond the body shows rejection.", 140, 40, 60, 55],
        ["Body", bull ? "Open at the bottom, close at the top: buyers controlled this interval." : "Open at the top, close at the bottom: sellers controlled this interval.", 140, 110, 60, 100],
        ["Lower wick", "Price probed down to the LOW and was bought back up.", 140, 225, 60, 55],
      ];
      svg.innerHTML = '<line x1="170" y1="42" x2="170" y2="280" stroke="' + col + '" stroke-width="3" opacity=".8"/>' +
        '<rect x="146" y="110" width="48" height="100" rx="5" fill="' + col + '" style="filter:drop-shadow(0 0 18px ' + glow + ')"/>' +
        '<text x="120" y="46" fill="#6b7484" font-size="11" text-anchor="end">HIGH</text><line x1="126" y1="42" x2="164" y2="42" stroke="#6b7484" stroke-dasharray="3 3"/>' +
        '<text x="120" y="285" fill="#6b7484" font-size="11" text-anchor="end">LOW</text><line x1="126" y1="280" x2="164" y2="280" stroke="#6b7484" stroke-dasharray="3 3"/>' +
        '<text x="228" y="' + (oy + 4) + '" fill="#ff7a3d" font-size="11">OPEN</text><line x1="196" y1="' + oy + '" x2="224" y2="' + oy + '" stroke="#ff7a3d" stroke-dasharray="3 3"/>' +
        '<text x="228" y="' + (cy + 4) + '" fill="#38d6ff" font-size="11">CLOSE</text><line x1="196" y1="' + cy + '" x2="224" y2="' + cy + '" stroke="#38d6ff" stroke-dasharray="3 3"/>' +
        zones.map(function (z, i) { return '<rect class="ca-z" data-i="' + i + '" x="' + z[2] + '" y="' + z[3] + '" width="' + z[4] + '" height="' + z[5] + '" fill="transparent" style="cursor:help"/>'; }).join("");
      svg.querySelectorAll(".ca-z").forEach(function (r) {
        var z = zones[+r.dataset.i];
        r.addEventListener("mousemove", function (e) { showTip("<b>" + z[0] + "</b> — " + z[1], e.clientX, e.clientY); });
        r.addEventListener("mouseleave", hideTip);
      });
    }
    body.querySelectorAll(".ca-d").forEach(function (b) {
      b.addEventListener("click", function () { body.querySelectorAll(".ca-d").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); dir = b.dataset.d; draw(); });
    });
    draw();
  }

  /* ================= TAPE LAB (Adv. Time & Sales) ================= */
  function tapeLab(mount) {
    var body = chrome(mount, "The tape, live — filter it like the real gear menu", "STREAMING");
    body.innerHTML = '<div style="padding:16px 18px 20px"><div style="display:flex;gap:8px;margin-bottom:12px">' +
      '<button class="tp-f on" data-f="all">All Trades</button><button class="tp-f" data-f="ask">Ask Trades</button><button class="tp-f" data-f="bid">Bid Trades</button>' +
      '<span style="margin-left:auto;font-size:11px;color:#6b7484;align-self:center">hover a print to pause</span></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr 1fr;font-size:10.5px;letter-spacing:1.4px;text-transform:uppercase;color:#6b7484;padding:0 10px 6px">' +
      "<span>Time</span><span>Volume</span><span>Price</span></div><div class=\"tp-rows\" style=\"display:flex;flex-direction:column;gap:3px;min-height:300px\"></div>" +
      '<div class="tp-foot" style="display:flex;gap:18px;border-top:1px solid rgba(255,255,255,.08);margin-top:12px;padding-top:10px;font-size:12.5px;color:#9aa3b2"></div></div>';
    var st5 = document.createElement("style");
    st5.textContent = ".tp-f{font:inherit;font-size:12px;font-weight:700;padding:7px 14px;border-radius:9px;border:1px solid rgba(255,255,255,.15);background:none;color:#9aa3b2;cursor:pointer;transition:all .25s}.tp-f.on{background:rgba(124,92,255,.16);border-color:#7c5cff;color:#c9b8ff}@keyframes tprow{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}";
    mount.appendChild(st5);
    var rowsEl = body.querySelector(".tp-rows"), foot = body.querySelector(".tp-foot");
    var seed = 99, price = 21052, buys = 0, sells = 0, paused = false, filter = "all", rows = [];
    function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
    function tick() {
      if (paused) return;
      var r = rnd(), side = r < 0.44 ? "ask" : r < 0.88 ? "bid" : "mid";
      var vol = Math.ceil(rnd() * (rnd() > 0.93 ? 80 : 9));
      price += side === "ask" ? 0.25 * Math.round(rnd() * 2) : side === "bid" ? -0.25 * Math.round(rnd() * 2) : 0;
      if (side === "ask") buys += vol; if (side === "bid") sells += vol;
      var d = new Date(), t = ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
      rows.unshift({ t: t, v: vol, p: price.toFixed(2), s: side }); rows = rows.slice(0, 13); render();
    }
    function render() {
      rowsEl.innerHTML = rows.filter(function (r) { return filter === "all" || r.s === filter; }).map(function (r) {
        var col = r.s === "ask" ? "#22e56a" : r.s === "bid" ? "#ff5c78" : "#9aa3b2";
        return '<div class="tp-r" data-s="' + r.s + '" data-v="' + r.v + '" style="display:grid;grid-template-columns:1fr 1fr 1fr;padding:5px 10px;border-radius:7px;font-size:13px;background:rgba(255,255,255,.02);animation:tprow .3s;cursor:crosshair">' +
          '<span style="color:#6b7484;font-variant-numeric:tabular-nums">' + r.t + '</span><span style="color:#38d6ff">' + r.v + '</span><span style="color:' + col + ';font-weight:' + (r.v > 40 ? 800 : 500) + '">' + r.p + "</span></div>";
      }).join("");
      foot.innerHTML = "<span>Buy volume: <b style='color:#22e56a'>" + buys + "</b></span><span>Sell volume: <b style='color:#ff5c78'>" + sells + "</b></span><span>Delta: <b style='color:" + (buys - sells >= 0 ? "#22e56a" : "#ff5c78") + "'>" + (buys - sells) + "</b></span>";
      rowsEl.querySelectorAll(".tp-r").forEach(function (el) {
        el.addEventListener("mouseenter", function (e) {
          paused = true;
          var s = el.dataset.s, v = el.dataset.v;
          showTip(s === "ask" ? "<b>" + v + "</b> lifted the ask — an aggressive <b>buyer</b> paid up." : s === "bid" ? "<b>" + v + "</b> hit the bid — an aggressive <b>seller</b> dumped." : "Traded <b>between</b> bid and ask — likely a spread/mid execution.", e.clientX, e.clientY);
        });
        el.addEventListener("mouseleave", function () { paused = false; hideTip(); });
      });
    }
    body.querySelectorAll(".tp-f").forEach(function (b) {
      b.addEventListener("click", function () { body.querySelectorAll(".tp-f").forEach(function (x) { x.classList.remove("on"); }); b.classList.add("on"); filter = b.dataset.f; render(); });
    });
    for (var i = 0; i < 10; i++) tick();
    setInterval(tick, 750);
  }

  /* ================= SYMBOL MANAGE MOCK ================= */
  function symbolManage(mount) {
    var body = chrome(mount, "Symbol Manage — map exchanges to feeds (click the chain-link)", "LIVE MOCK");
    var FEEDS = ["dxFeed - 15m delayed", "dxFeed", "Rithmic RAPI"];
    var state = [["CME", 0], ["COMEX", 0]];
    var AVAIL = ["CBOT", "EUREX", "CME FX", "INDEX US"];
    body.innerHTML = '<div style="padding:16px 18px 20px"><div class="sm-rows" style="display:flex;flex-direction:column;gap:8px"></div>' +
      '<div style="display:flex;gap:10px;margin-top:14px;align-items:center"><select class="sm-add-s" style="background:#14141c;border:1px solid rgba(255,255,255,.15);border-radius:10px;color:#f2f4f8;padding:9px 12px;font:inherit;font-size:13.5px"></select>' +
      '<button class="sm-add" style="font:inherit;font-size:13px;font-weight:700;background:#22e56a;color:#04140a;border:none;border-radius:10px;padding:9px 16px;cursor:pointer">Subscribe</button>' +
      '<span class="sm-note" style="font-size:12px;color:#6b7484"></span></div>' +
      '<div style="margin-top:14px;padding:11px 13px;border-radius:11px;font-size:13px;color:#c8d2de;background:rgba(56,158,255,.09);border:1px solid rgba(56,158,255,.3)">The instrument picker <b>only shows subscribed exchanges</b>. An empty picker means nothing is subscribed here — the #1 cause of “my symbol is missing”.</div></div>';
    var rowsEl = body.querySelector(".sm-rows"), sel = body.querySelector(".sm-add-s"), note = body.querySelector(".sm-note");
    function renderSel() { sel.innerHTML = AVAIL.map(function (a) { return "<option>" + a + "</option>"; }).join(""); sel.parentElement.style.display = AVAIL.length ? "flex" : "none"; }
    function render() {
      rowsEl.innerHTML = state.map(function (r, i) {
        return '<div style="display:flex;align-items:center;gap:12px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:11px;padding:10px 14px">' +
          '<b style="font-size:13.5px;width:90px">' + r[0] + '</b>' +
          '<span style="font-size:12.5px;color:#38d6ff;background:rgba(56,214,255,.08);border:1px solid rgba(56,214,255,.25);border-radius:99px;padding:3px 11px">' + FEEDS[r[1]] + "</span>" +
          '<button class="sm-link" data-i="' + i + '" title="Change data feed source" style="margin-left:auto;font-size:15px;background:none;border:1px solid rgba(255,255,255,.15);border-radius:8px;color:#9aa3b2;padding:4px 10px;cursor:pointer">🔗</button>' +
          '<button class="sm-un" data-i="' + i + '" style="font-size:12px;background:none;border:1px solid rgba(255,92,120,.4);border-radius:8px;color:#ff8fa3;padding:5px 10px;cursor:pointer">Unsubscribe</button></div>';
      }).join("") || '<div style="padding:22px;text-align:center;color:#ff8fa3;font-size:13.5px;border:1px dashed rgba(255,92,120,.4);border-radius:11px">Nothing subscribed — your instrument picker is now EMPTY. This is exactly what a blank picker means.</div>';
      rowsEl.querySelectorAll(".sm-link").forEach(function (b) {
        b.addEventListener("mousemove", function (e) { showTip("The <b>chain-link</b>: switch which connection feeds this exchange — e.g. move CME from the free delayed feed to your live Rithmic.", e.clientX, e.clientY); });
        b.addEventListener("mouseleave", hideTip);
        b.addEventListener("click", function () { var r = state[+b.dataset.i]; r[1] = (r[1] + 1) % FEEDS.length; note.textContent = r[0] + " now streams from " + FEEDS[r[1]]; render(); });
      });
      rowsEl.querySelectorAll(".sm-un").forEach(function (b) {
        b.addEventListener("click", function () { var r = state.splice(+b.dataset.i, 1)[0]; AVAIL.push(r[0]); renderSel(); render(); });
      });
    }
    body.querySelector(".sm-add").addEventListener("click", function () {
      var v = sel.value; if (!v) return;
      AVAIL.splice(AVAIL.indexOf(v), 1); state.push([v, 0]); note.textContent = v + " subscribed — it now appears in the instrument picker.";
      renderSel(); render();
    });
    renderSel(); render();
  }

  /* ================= TRADING PANEL MOCK ================= */
  function tradingPanel(mount) {
    var body = chrome(mount, "The trading panel — hover every control, place a SIM trade", "SIM ONLY");
    function btn(t, col, tip2) { return '<button class="tpn-b" data-tip2="' + tip2.replace(/"/g, "&quot;") + '" style="flex:1;font:inherit;font-size:12px;font-weight:800;padding:10px 4px;border-radius:9px;border:1px solid ' + col + ';background:rgba(255,255,255,.02);color:' + col + ';cursor:pointer;transition:all .2s">' + t + "</button>"; }
    body.innerHTML = '<div style="display:grid;grid-template-columns:290px 1fr" class="wg-grid">' +
      '<div style="padding:18px;border-right:1px solid rgba(255,255,255,.08);display:flex;flex-direction:column;gap:9px;background:rgba(255,255,255,.015)">' +
      '<div style="display:flex;justify-content:space-between;font-size:13px;color:#9aa3b2"><span>NQ-202609</span><span>Broker: <b style="color:#38d6ff">SIM</b></span></div>' +
      '<div class="tpn-b" data-tip2="Order size for every button below. The red (!) appears when an OCO strategy quantity does not match this." style="display:flex;justify-content:space-between;align-items:center;border:1px solid rgba(255,255,255,.15);border-radius:9px;padding:8px 12px;font-size:13px;cursor:help">Qty <b>1</b></div>' +
      '<div style="display:flex;gap:8px">' + btn("BUY MKT", "#22e56a", "Market buy — fills immediately at the best available ask.") + btn("SELL MKT", "#ff5c78", "Market sell — fills immediately at the best available bid.") + "</div>" +
      '<div style="display:flex;gap:8px">' + btn("BID", "#22e56a", "Places a BUY LIMIT at the best bid (offset by the Ticks diff. setting) — you join the queue instead of paying the spread.") + btn("ASK", "#ff5c78", "Places a SELL LIMIT at the best ask (offset by Ticks diff.).") + "</div>" +
      '<div style="display:flex;gap:8px">' + btn("LMT", "#9aa3b2", "Limit order at the price you click on the chart or DOM.") + btn("STP", "#9aa3b2", "Stop order — becomes a market order when price touches it.") + btn("STP LMT", "#9aa3b2", "Stop that becomes a LIMIT instead of a market order.") + "</div>" +
      '<div style="display:flex;gap:8px">' + btn("Breakeven", "#38d6ff", "Moves your stop to entry (± the Breakeven-Ticks buffer from Settings → Trading).") + btn("Cancel && Flat", "#ff7a3d", "Cancels every pending order AND closes the position — for this panel's symbol only.") + "</div>" +
      '<div class="tpn-b" data-tip2="Bracket every entry with a stop-loss and take-profit, in ticks or money. Server-side OCO lives at the broker; client-side lives in the app." style="border:1px solid rgba(124,92,255,.4);border-radius:9px;padding:8px 12px;font-size:12.5px;color:#a58bff;cursor:help">OCO: SL 12t / TP 24t &nbsp;·&nbsp; mode SL/TP</div></div>' +
      '<div style="padding:18px" class="tpn-right"><div class="tpn-pos" style="font-size:13.5px;color:#6b7484">No position. Hover the controls to learn them — then hit <b style="color:#22e56a">BUY MKT</b> to feel a SIM fill.</div></div></div>';
    if (matchMedia("(max-width:900px)").matches) body.querySelector(".wg-grid").style.gridTemplateColumns = "1fr";
    var pos = null, px = 21050, posEl = body.querySelector(".tpn-pos"), timer = null;
    body.querySelectorAll(".tpn-b").forEach(function (b) {
      b.addEventListener("mousemove", function (e) { showTip(b.dataset.tip2, e.clientX, e.clientY); });
      b.addEventListener("mouseleave", hideTip);
      b.addEventListener("mouseenter", function () { b.style.background = "rgba(255,255,255,.07)"; });
      b.addEventListener("mouseleave", function () { b.style.background = "rgba(255,255,255,.02)"; });
    });
    function renderPos() {
      if (!pos) { posEl.innerHTML = "Position closed. Realized P/L: <b style='color:" + (lastPL >= 0 ? "#22e56a" : "#ff5c78") + "'>" + (lastPL >= 0 ? "+" : "") + "$" + lastPL.toFixed(2) + "</b> — Cancel & Flat would do the same in one click."; return; }
      var pl = (px - pos.entry) * 20 * pos.q * (pos.side === "L" ? 1 : -1);
      posEl.innerHTML = '<div style="border:1px solid rgba(34,229,106,.35);background:rgba(34,229,106,.08);border-radius:12px;padding:14px 16px;font-size:14px">' +
        (pos.side === "L" ? "LONG" : "SHORT") + " " + pos.q + " NQ @ " + pos.entry.toFixed(2) +
        ' &nbsp;·&nbsp; last ' + px.toFixed(2) + ' &nbsp;·&nbsp; P/L <b style="color:' + (pl >= 0 ? "#22e56a" : "#ff5c78") + '">' + (pl >= 0 ? "+" : "") + "$" + pl.toFixed(2) + "</b>" +
        '<br><span style="font-size:12px;color:#9aa3b2">OCO bracket working: SL ' + (pos.entry - 3).toFixed(2) + " / TP " + (pos.entry + 6).toFixed(2) + "</span>" +
        '<div style="margin-top:10px"><button class="tpn-flat" style="font:inherit;font-size:12px;font-weight:800;padding:8px 16px;border-radius:9px;border:1px solid #ff7a3d;background:none;color:#ff7a3d;cursor:pointer">FLAT</button></div></div>';
      var f = posEl.querySelector(".tpn-flat");
      if (f) f.addEventListener("click", function () { lastPL = pl; pos = null; clearInterval(timer); renderPos(); });
    }
    var lastPL = 0;
    body.querySelectorAll(".tpn-b").forEach(function (b) {
      if (b.textContent === "BUY MKT" || b.textContent === "SELL MKT") b.addEventListener("click", function () {
        pos = { side: b.textContent[0] === "B" ? "L" : "S", q: 1, entry: px };
        clearInterval(timer);
        timer = setInterval(function () { px += (Math.random() - 0.48) * 1.5; renderPos(); }, 800);
        renderPos();
      });
    });
  }

  /* ================= DELTA LAB ================= */
  function deltaLab(mount) {
    var body = chrome(mount, "Delta per bar + cumulative delta — hover for the story", "REAL MATH");
    body.innerHTML = '<div style="padding:14px 8px 8px"><svg viewBox="0 0 760 300" width="100%" height="auto"></svg>' +
      '<div style="padding:4px 12px 16px;font-size:12.5px;color:#9aa3b2">Bars = net aggression per interval (buy volume − sell volume). The line = the running total. When <b style="color:#f2f4f8">price makes a high but cumulative delta does not</b>, buyers are thinning — a divergence worth respecting.</div></div>';
    var svg = body.querySelector("svg"), N = 40, seed = 5, deltas = [], cum = [], c = 0;
    function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647 - 0.5; }
    for (var i = 0; i < N; i++) { var d = Math.round(rnd() * 220 + Math.sin(i / 6) * 60); deltas.push(d); c += d; cum.push(c); }
    var W = 760, H = 290, mx = Math.max.apply(null, deltas.map(Math.abs)), cmn = Math.min.apply(null, cum), cmx = Math.max.apply(null, cum);
    function X(i) { return 22 + i * (W - 44) / (N - 1); }
    var mid = 200, bars = "", line = "";
    for (i = 0; i < N; i++) {
      var h = deltas[i] / mx * 80;
      bars += '<rect class="dl" data-i="' + i + '" x="' + (X(i) - 6) + '" y="' + Math.min(mid, mid - h) + '" width="12" height="' + Math.abs(h) + '" rx="2.5" fill="' + (deltas[i] >= 0 ? "#22e56a" : "#8f6bff") + '" opacity=".85" style="cursor:crosshair"/>';
      line += (i ? "L" : "M") + X(i).toFixed(1) + " " + (20 + (1 - (cum[i] - cmn) / (cmx - cmn)) * 130).toFixed(1);
    }
    svg.innerHTML = '<text x="24" y="16" fill="#6b7484" font-size="10" letter-spacing="2">CUMULATIVE DELTA</text><path d="' + line + '" fill="none" stroke="#38d6ff" stroke-width="2"/>' +
      '<text x="24" y="' + (mid - 90) + '" fill="#6b7484" font-size="10" letter-spacing="2">DELTA / BAR</text>' +
      '<line x1="22" x2="' + (W - 22) + '" y1="' + mid + '" y2="' + mid + '" stroke="rgba(255,255,255,.15)"/>' + bars;
    svg.querySelectorAll(".dl").forEach(function (r) {
      var i = +r.dataset.i;
      r.addEventListener("mousemove", function (e) {
        showTip("Bar " + (i + 1) + ": delta <b>" + (deltas[i] > 0 ? "+" : "") + deltas[i] + "</b> — " + (deltas[i] >= 0 ? "buyers lifted more than sellers hit" : "sellers hit harder than buyers lifted") + ". Running total: <b>" + cum[i] + "</b>.", e.clientX, e.clientY);
      });
      r.addEventListener("mouseleave", hideTip);
    });
  }

  /* ================= TPO LAB ================= */
  function tpoLab(mount) {
    var body = chrome(mount, "TPO profile — press play, watch the day build letter by letter", "ANIMATED");
    body.innerHTML = '<div style="padding:16px 18px 20px"><div style="display:flex;gap:10px;align-items:center;margin-bottom:12px">' +
      '<button class="tpo-play" style="font:inherit;font-size:12.5px;font-weight:800;background:#22e56a;color:#04140a;border:none;border-radius:9px;padding:8px 18px;cursor:pointer">▶ Build the day</button>' +
      '<span class="tpo-clock" style="font-size:12.5px;color:#6b7484"></span></div><div class="tpo-grid" style="font-family:ui-monospace,Menlo,monospace;font-size:13px;line-height:1.75"></div></div>';
    var ROWS = 15, base = 21075, letters = "ABCDEFGHIJ", grid = [], r;
    for (r = 0; r < ROWS; r++) grid.push([]);
    var path = [7, 6, 5, 6, 7, 8, 9, 8, 7, 6], host = body.querySelector(".tpo-grid"), clock = body.querySelector(".tpo-clock"), playing = false;
    function render(upTo) {
      var counts = grid.map(function (g) { return g.length; }), mx = Math.max.apply(null, counts.concat(1)), poc = counts.indexOf(Math.max.apply(null, counts));
      var total = counts.reduce(function (a, b) { return a + b; }, 0), need = total * 0.7, sum = counts[poc], lo = poc, hi = poc;
      while (total && sum < need && (lo > 0 || hi < ROWS - 1)) { var up = hi < ROWS - 1 ? counts[hi + 1] : -1, dn = lo > 0 ? counts[lo - 1] : -1; if (up >= dn) { hi++; sum += counts[hi]; } else { lo--; sum += counts[lo]; } }
      host.innerHTML = grid.map(function (g, i) {
        var inVA = total && i >= lo && i <= hi;
        return '<div style="display:flex;gap:14px"><span style="color:#6b7484;width:58px;text-align:right">' + (base - i * 5) + "</span>" +
          '<span class="tpo-row" data-i="' + i + '" style="letter-spacing:2px;cursor:crosshair;color:' + (total && i === poc ? "#ff5cd6" : inVA ? "#f2f4f8" : "#6b7484") + '">' + g.join("") + (total && i === poc ? "  ← POC" : "") + "</span></div>";
      }).join("");
      host.querySelectorAll(".tpo-row").forEach(function (el) {
        var i = +el.dataset.i;
        el.addEventListener("mousemove", function (e) {
          if (!grid[i].length) return;
          showTip("Price " + (base - i * 5) + " traded in <b>" + grid[i].length + "</b> half-hour period" + (grid[i].length > 1 ? "s" : "") + " (" + grid[i].join(", ") + "). More letters = more time accepted at this price.", e.clientX, e.clientY);
        });
        el.addEventListener("mouseleave", hideTip);
      });
    }
    function play() {
      if (playing) return; playing = true;
      for (var r = 0; r < ROWS; r++) grid[r] = [];
      var p = 0;
      var iv = setInterval(function () {
        if (p >= letters.length) { clearInterval(iv); playing = false; clock.textContent = "Session complete — 70% value area shaded, POC marked."; return; }
        var center = path[p];
        for (var o = -2; o <= 2; o++) { var row = center + o; if (row >= 0 && row < ROWS && Math.abs(o) < 2 + (p % 2)) grid[row].push(letters[p]); }
        clock.textContent = "Period " + letters[p] + " — " + (9 + Math.floor((p + 1) / 2)) + ":" + (p % 2 ? "30" : "00");
        p++; render();
      }, 550);
    }
    body.querySelector(".tpo-play").addEventListener("click", play);
    render();
  }

  /* ================= LINK GROUPS DEMO ================= */
  function linkGroups(mount) {
    var body = chrome(mount, "Link color groups — same color = symbols move together", "LIVE MOCK");
    var SYMS = ["NQ", "ES", "CL", "GC"], COLORS = ["None", "#22e56a", "#7c5cff", "#ff7a3d"];
    var wins = [{ sym: 0, link: 1 }, { sym: 1, link: 1 }];
    body.innerHTML = '<div style="padding:18px;display:grid;grid-template-columns:1fr 1fr;gap:14px" class="lg-grid"></div>' +
      '<div style="padding:0 18px 18px;font-size:12.5px;color:#9aa3b2">Both windows are on the <b style="color:#22e56a">green</b> link group — change the symbol in one and the other follows. Set a window to <b>None</b> and it stops listening. Links sync the <b>symbol only</b>, not the timeframe or drawings.</div>';
    var gridEl = body.querySelector(".lg-grid");
    if (matchMedia("(max-width:700px)").matches) gridEl.style.gridTemplateColumns = "1fr";
    function render() {
      gridEl.innerHTML = wins.map(function (w, i) {
        return '<div style="border:1px solid rgba(255,255,255,.12);border-radius:12px;overflow:hidden;transition:box-shadow .4s" class="lg-w">' +
          '<div style="display:flex;align-items:center;gap:8px;padding:8px 12px;background:rgba(255,255,255,.03);border-bottom:1px solid rgba(255,255,255,.08)">' +
          '<span style="font-size:11px;color:#6b7484">Chart ' + (i + 1) + "</span>" +
          '<select class="lg-sym" data-i="' + i + '" style="background:#14141c;border:1px solid rgba(255,255,255,.15);border-radius:8px;color:#f2f4f8;padding:4px 8px;font:inherit;font-size:12.5px">' +
          SYMS.map(function (s, j) { return "<option " + (j === w.sym ? "selected" : "") + ">" + s + "</option>"; }).join("") + "</select>" +
          '<select class="lg-lnk" data-i="' + i + '" title="Link group" style="margin-left:auto;background:#14141c;border:1px solid rgba(255,255,255,.15);border-radius:8px;color:#f2f4f8;padding:4px 8px;font:inherit;font-size:12.5px">' +
          COLORS.map(function (c, j) { return '<option value="' + j + '" ' + (j === w.link ? "selected" : "") + ">" + (j === 0 ? "None" : "Link " + j) + "</option>"; }).join("") + "</select>" +
          '<span style="width:12px;height:12px;border-radius:3px;background:' + (w.link ? COLORS[w.link] : "#2a2a33") + '"></span></div>' +
          '<div style="padding:26px;text-align:center;font-size:22px;font-weight:850;letter-spacing:-.5px">' + SYMS[w.sym] + '<div style="font-size:11px;color:#6b7484;font-weight:500;margin-top:4px">mini chart</div></div></div>';
      }).join("");
      gridEl.querySelectorAll(".lg-sym").forEach(function (s) {
        s.addEventListener("change", function () {
          var i = +s.dataset.i; wins[i].sym = SYMS.indexOf(s.value);
          if (wins[i].link) wins.forEach(function (w, j) { if (j !== i && w.link === wins[i].link) w.sym = wins[i].sym; });
          render();
          gridEl.querySelectorAll(".lg-w").forEach(function (el) { el.style.boxShadow = "0 0 30px rgba(34,229,106,.25)"; setTimeout(function () { el.style.boxShadow = "none"; }, 700); });
        });
      });
      gridEl.querySelectorAll(".lg-lnk").forEach(function (s) {
        s.addEventListener("change", function () { wins[+s.dataset.i].link = +s.value; render(); });
      });
    }
    render();
  }

  var registry = {
    "dom-ladder": domLadder, "rsi-lab": rsiLab, "feed-navigator": feedNav, "main-bar": mainBar, "spec-check": specCheck,
    "volume-profile-lab": vpLab, "footprint-lab": fpLab, "vwap-lab": vwapLab, "ma-lab": maLab, "macd-lab": macdLab,
    "candle-anatomy": candleAnatomy, "tape-lab": tapeLab, "symbol-manage-mock": symbolManage,
    "trading-panel-mock": tradingPanel, "delta-lab": deltaLab, "tpo-lab": tpoLab, "link-groups-demo": linkGroups,
  };
  mounts.forEach(function (m) {
    var fn = registry[m.dataset.widget];
    if (fn) try { fn(m); } catch (e) { m.remove(); }
  });
})();
