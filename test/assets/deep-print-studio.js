/* DeepCharts Help Center — DEEP PRINT STUDIO 2.0
   Full settings editor + live footprint engine: zoomable price scale (feel Auto
   Grouping), true tape replay with live imbalance/POC/alert logic, per-candle 3D,
   settings export. Self-mounts into .widget-mount[data-widget="deep-print-studio"]. */
(function () {
  "use strict";
  var mount = document.querySelector('.widget-mount[data-widget="deep-print-studio"]');
  if (!mount) return;

  /* ============ tooltip + toasts ============ */
  var tip = document.createElement("div");
  tip.style.cssText = "position:fixed;z-index:80;background:#1b1b25;border:1px solid rgba(255,255,255,.15);border-radius:10px;padding:9px 12px;font-size:12.5px;pointer-events:none;opacity:0;transition:opacity .18s;box-shadow:0 18px 50px rgba(0,0,0,.6);line-height:1.55;max-width:300px;color:#f2f4f8";
  document.body.appendChild(tip);
  function showTip(h, x, y) { tip.innerHTML = h; tip.style.opacity = 1; tip.style.left = Math.min(x + 16, innerWidth - 320) + "px"; tip.style.top = (y - 12) + "px"; }
  function hideTip() { tip.style.opacity = 0; }

  /* ============ state — mirrors every group in the real dialog ============ */
  var st = {
    /* General settings */        type: "split", mode: "profile",
    /* Data settings */           inputType: "volume", minFilter: 0, maxFilter: 0,
    /* Tick grouping */           autoGroup: true, autoFactor: 2, manualTicks: 2, groupMode: "fixed",
    /* Plot settings */           markerWidth: 3, outsideBar: "bar", markerAlign: "left", outerEdge: false,
    /* Background settings */     opacity: 45, borderWidth: 0,
    /* Background coloration */   colorMode: "fading", colorCalc: "volume", imbRatio: 3, imbMinDiff: 8,
                                  imbZero: false, domOnly: false, inferiorBg: "#1a1a24",
    /* Colors */                  askColor: "#22e56a", bidColor: "#7c5cff", volColor: "#38d6ff",
                                  moreLow: "#20304a", moreMid: "#b9770e", moreHigh: "#ff4d5e",
    /* Text settings */           fontSize: 11, fmt: "K", dyn: true, showZeros: false,
    /* POC */                     pocOn: true, dpocOn: false, dpocMin: 40,
    /* Value Area */              vaOn: true, vaPct: 70, vaLine: false,
    /* Single Print */            spOn: false, spMin: 25, spHL: true,
    /* Ratio */                   ratOn: false, ratMin: 2, ratMax: 40, ratOffset: 1,
    /* Vol Cluster */             clOn: false, clMin: 220, clScale: true,
    /* Pull Back */               pbOn: false, pbSrc: 10, pbPull: 6, pbColor: "#ff7a3d",
    /* Alerts */                  alSound: false, alMsg: true, alMinVol: 55,
    /* View */                    candles: 3, zoom: 1, threeD: true
  };
  var TICK = 0.25, BASEPX = 7, curAutoG = null;

  /* ============ deterministic tape data ============ */
  var seed = 20260716;
  function rnd() { seed = (seed * 48271) % 2147483647; return seed / 2147483647; }
  function makeCandles(n) {
    seed = 20260716;
    var out = [], openT = 18000; /* ticks */
    for (var c = 0; c < n; c++) {
      var up = rnd() > 0.42, range = 14 + Math.floor(rnd() * 9);
      var path = [], pos = up ? Math.floor(range * .75) : Math.floor(range * .25); /* start inside */
      for (var s = 0; s < 46; s++) {
        var drift = up ? -0.22 : 0.22; /* pos counts down from high; up candle drifts to 0 */
        pos = Math.max(0, Math.min(range, pos + (rnd() < 0.5 + drift * 0.9 ? 1 : -1)));
        path.push(pos);
      }
      var endPos = up ? 1 + Math.floor(rnd() * 2) : range - 1 - Math.floor(rnd() * 2);
      path.push(endPos);
      var tape = [];
      path.forEach(function (p, pi) {
        var trades = 4 + Math.floor(rnd() * 6);
        for (var t = 0; t < trades; t++) {
          var lvl = Math.max(0, Math.min(range, p + (rnd() > .7 ? (rnd() > .5 ? 1 : -1) : 0)));
          var buyP = up ? 0.58 : 0.42;
          buyP += (range / 2 - lvl) * 0.012; /* buyers more aggressive near highs of up moves */
          var qty = 1 + Math.floor(Math.pow(rnd(), 2.6) * 70);
          tape.push({ lvl: lvl, side: rnd() < buyP ? "ask" : "bid", qty: qty, seq: pi });
        }
      });
      var hiT = openT + (up ? range - path[0] + 2 : path[0] + 2);
      out.push({ up: up, range: range, openT: openT, hiT: openT + range - path[0] + (up ? 0 : 0), tape: tape,
                 openPos: path[0], closePos: endPos });
      openT += up ? Math.floor(range * .5) : -Math.floor(range * .45);
    }
    /* absolute tick of a level index: level 0 = candle HIGH */
    out.forEach(function (cd) { cd.topTick = cd.openT + (cd.range - cd.openPos); });
    return out;
  }
  var candles = makeCandles(st.candles);

  /* ============ folding the tape (Input Type + Min/Max Filter) ============ */
  function foldTape(cd, upTo) {
    var lv = {}, tape = upTo == null ? cd.tape : cd.tape.slice(0, upTo);
    if (st.inputType === "aggregate") { /* merge consecutive same-side, same-level executions into one order */
      var merged = [], last = null;
      tape.forEach(function (t) {
        if (last && last.lvl === t.lvl && last.side === t.side && last.seq === t.seq) last = { lvl: t.lvl, side: t.side, qty: last.qty + t.qty, seq: t.seq };
        else { if (last) merged.push(last); last = { lvl: t.lvl, side: t.side, qty: t.qty, seq: t.seq }; }
      });
      if (last) merged.push(last);
      tape = merged;
    }
    tape.forEach(function (t) {
      if (st.minFilter && t.qty < st.minFilter) return;
      if (st.maxFilter && t.qty > st.maxFilter) return;
      var L = lv[t.lvl] || (lv[t.lvl] = { bid: 0, ask: 0, n: 0, maxQ: 0 });
      var v = st.inputType === "trades" ? 1 : t.qty;
      L[t.side] += v; L.n++; L.maxQ = Math.max(L.maxQ, t.qty);
    });
    return lv;
  }

  /* ============ grouping (Auto vs Manual, Fixed vs Open/Close anchor) ============ */
  function groupSize() {
    if (!st.autoGroup) return st.manualTicks;
    var px = BASEPX * st.zoom, target = 10 + st.autoFactor * 5;
    var g = Math.ceil(target / px), snaps = [1, 2, 3, 4, 5, 8, 10, 15, 20];
    for (var i = 0; i < snaps.length; i++) if (snaps[i] >= g) return snaps[i];
    return 20;
  }
  function groupRows(cd, lv) {
    var G = groupSize(), anchor = st.groupMode === "oc" ? ((cd.topTick - cd.openT) % G) : 0;
    var rows = {}, keys = Object.keys(lv);
    keys.forEach(function (k) {
      var levelIdx = +k; /* 0 = high */
      var rk = Math.floor((levelIdx + anchor) / G);
      var R = rows[rk] || (rows[rk] = { bid: 0, ask: 0, n: 0, maxQ: 0, topLvl: rk * G - anchor });
      var L = lv[k];
      R.bid += L.bid; R.ask += L.ask; R.n += L.n; R.maxQ = Math.max(R.maxQ, L.maxQ);
    });
    return Object.keys(rows).map(function (rk) { var r = rows[rk]; r.G = G; return r; })
      .sort(function (a, b) { return a.topLvl - b.topLvl; });
  }
  function analyse(rows) {
    var tot = 0, poc = 0, dmax = -1, dpoc = -1, i;
    rows.forEach(function (r, j) { var t = r.bid + r.ask; tot += t; if (t > rows[poc].bid + rows[poc].ask) poc = j;
      var d = Math.abs(r.ask - r.bid); if (d > dmax) { dmax = d; dpoc = j; } });
    var inVA = {}, cum = rows.length ? rows[poc].bid + rows[poc].ask : 0, a = poc - 1, b = poc + 1;
    inVA[poc] = 1;
    while (rows.length && cum < tot * st.vaPct / 100 && (a >= 0 || b < rows.length)) {
      var va = a >= 0 ? rows[a].bid + rows[a].ask : -1, vb = b < rows.length ? rows[b].bid + rows[b].ask : -1;
      if (va >= vb) { inVA[a] = 1; cum += va; a--; } else { inVA[b] = 1; cum += vb; b++; }
    }
    rows.forEach(function (r, j) {
      r.imbA = r.imbB = false;
      var below = rows[j + 1], above = rows[j - 1];
      if (below && (st.imbZero || below.bid > 0))
        if (r.ask - below.bid >= st.imbMinDiff && r.ask >= Math.max(below.bid, 1) * st.imbRatio) r.imbA = true;
      if (above && (st.imbZero || above.ask > 0))
        if (r.bid - above.ask >= st.imbMinDiff && r.bid >= Math.max(above.ask, 1) * st.imbRatio) r.imbB = true;
    });
    /* strongest contiguous cluster run of 2+ rows */
    var best = null;
    if (st.clOn) {
      var thr = st.clMin * (st.clScale ? (rows[0] ? rows[0].G : 1) : 1);
      for (i = 0; i + 1 < rows.length; i++) {
        var sum = 0, j = i;
        while (j < rows.length && j - i < 4) { sum += rows[j].bid + rows[j].ask; j++;
          if (j - i >= 2 && sum >= thr && (!best || sum > best.sum)) best = { a: i, b: j - 1, sum: sum }; }
      }
    }
    var delta = rows.reduce(function (s, r) { return s + r.ask - r.bid; }, 0);
    return { tot: tot, poc: poc, dpoc: dmax >= st.dpocMin ? dpoc : -1, inVA: inVA, delta: delta, cluster: best };
  }
  function fmtN(v) { return st.fmt === "K" && Math.abs(v) >= 1000 ? (v / 1000).toFixed(1) + "K" : v; }

  /* ============ shell ============ */
  mount.innerHTML =
    '<div class="wg-head"><div class="dots"><i></i><i></i><i></i></div>' +
    '<div class="wg-title">Deep Print Studio — the full dialog, alive</div><span class="wg-live">FULL EDITOR</span></div>' +
    '<div class="dps-grid" style="display:grid;grid-template-columns:292px 1fr">' +
    '<div class="dps-ctl" style="border-right:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.015);padding:12px 12px 20px;overflow-y:auto;max-height:760px"></div>' +
    '<div style="padding:14px 18px 20px;display:flex;flex-direction:column;gap:10px;min-width:0">' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">' +
    '<button class="b rep">▶ Replay tape</button><select class="b spd" style="padding:8px 8px"><option value="1">1×</option><option value="2" selected>2×</option><option value="4">4×</option></select>' +
    '<button class="b rst">⟲ Reset</button><span style="width:10px"></span>' +
    '<button class="b zo">−</button><span class="zl" style="font-size:12px;color:#9aa3b2;min-width:44px;text-align:center">100%</span><button class="b zi">+</button>' +
    '<button class="b d3">◇ 3D tiles: on</button>' +
    '<button class="b dl" style="margin-left:auto;background:#22e56a;color:#04140a;border:none;font-weight:750;box-shadow:0 0 26px rgba(34,229,106,.35)">⬇ Download my settings</button></div>' +
    '<div class="stage" style="position:relative;display:flex;gap:0;align-items:stretch">' +
    '<div class="row" style="flex:1;display:flex;gap:14px;min-width:0"></div>' +
    '<div class="axis" style="flex:none;width:64px"></div>' +
    '<div class="toasts" style="position:absolute;top:8px;right:74px;display:flex;flex-direction:column;gap:6px;z-index:5;pointer-events:none"></div></div>' +
    '<div class="read" style="font-size:12.5px;color:#9aa3b2;line-height:1.7"></div></div></div>' +
    '<style>.dps-ctl .b, .dps-grid .b{background:rgba(124,92,255,.14);border:1px solid rgba(124,92,255,.5);color:#a58bff;border-radius:9px;padding:8px 13px;font:inherit;font-size:12.5px;font-weight:650;cursor:pointer;transition:all .25s}' +
    '.dps-grid .b:hover{transform:translateY(-1px)}' +
    '.dps-grid .zo,.dps-grid .zi{width:34px;font-size:15px;background:rgba(56,214,255,.1);border-color:rgba(56,214,255,.4);color:#38d6ff}' +
    '.dps-grid .d3{background:rgba(56,214,255,.1);border-color:rgba(56,214,255,.4);color:#38d6ff}' +
    '@keyframes dpsPop{0%{opacity:.2;transform:scale(.7)}60%{transform:scale(1.12)}100%{opacity:1;transform:scale(1)}}' +
    '@keyframes dpsToast{from{opacity:0;transform:translateX(20px)}to{opacity:1;transform:none}}' +
    '.dps-cell{transition:transform .45s cubic-bezier(.22,.8,.22,1),filter .45s;transform-style:preserve-3d;border-radius:12px}' +
    '@media(max-width:900px){.dps-grid{grid-template-columns:1fr !important}}</style>';

  /* ============ settings panel ============ */
  var ctl = mount.querySelector(".dps-ctl");
  function grp(t, open) { return '<details' + (open ? " open" : "") + ' style="border:1px solid rgba(255,255,255,.08);border-radius:11px;margin-bottom:8px;background:#101016"><summary style="cursor:pointer;padding:9px 11px;font-size:11px;letter-spacing:1.2px;text-transform:uppercase;color:#9aa3b2;font-weight:800;user-select:none">' + t + '</summary><div style="padding:3px 11px 12px;display:flex;flex-direction:column;gap:10px">'; }
  var E = "</div></details>";
  function sel(k, l, o, tipTxt) { return '<label data-tip="' + (tipTxt || "") + '" style="font-size:12.5px;color:#9aa3b2;display:flex;flex-direction:column;gap:4px">' + l + '<select data-k="' + k + '" style="background:#14141c;border:1px solid rgba(255,255,255,.15);border-radius:8px;color:#f2f4f8;padding:7px 9px;font:inherit;font-size:12.5px">' + o.map(function (x) { return '<option value="' + x[0] + '"' + (String(st[k]) === x[0] ? " selected" : "") + ">" + x[1] + "</option>"; }).join("") + "</select></label>"; }
  function rng(k, l, mi, ma, stp, suf) { return '<label style="font-size:12.5px;color:#9aa3b2;display:flex;flex-direction:column;gap:4px"><span style="display:flex;justify-content:space-between">' + l + '<output style="color:#22e56a;font-weight:800">' + st[k] + (suf || "") + '</output></span><input type="range" data-k="' + k + '" data-suf="' + (suf || "") + '" min="' + mi + '" max="' + ma + '" step="' + (stp || 1) + '" value="' + st[k] + '"></label>'; }
  function tgl(k, l) { return '<label style="font-size:12.5px;color:#c8d2de;display:flex;justify-content:space-between;align-items:center;cursor:pointer;gap:8px">' + l + '<input type="checkbox" data-k="' + k + '"' + (st[k] ? " checked" : "") + ' style="width:17px;height:17px;accent-color:#22e56a;flex:none"></label>'; }
  function col(k, l) { return '<label style="font-size:12.5px;color:#c8d2de;display:flex;justify-content:space-between;align-items:center">' + l + '<input type="color" data-k="' + k + '" value="' + st[k] + '" style="width:32px;height:22px;border:none;background:none;cursor:pointer"></label>'; }
  ctl.innerHTML =
    grp("General settings", true) +
      sel("type", "Type", [["volume", "Volume"], ["split", "Ask/Bid Split"], ["delta", "Delta"], ["deltatotal", "Delta + Total Volume"]]) +
      sel("mode", "Mode", [["profile", "Profile (histogram)"], ["box", "Box (boxed values)"]]) +
      rng("candles", "Candles shown", 1, 5) + E +
    grp("Data settings") +
      sel("inputType", "Input Type", [["volume", "Volume"], ["aggregate", "Aggregate Volume"], ["trades", "Num Trades"]]) +
      rng("minFilter", "Min Filter (trade size)", 0, 30) + rng("maxFilter", "Max Filter (0 = off)", 0, 80, 5) + E +
    grp("Tick grouping", true) +
      sel("autoGroup", "Auto Grouping", [["true", "Automatic"], ["false", "Manual"]]) +
      rng("autoFactor", "Auto Group Factor", 1, 5) + rng("manualTicks", "Manual Ticks", 1, 10) +
      sel("groupMode", "Group Mode", [["fixed", "Fixed"], ["oc", "Based on Open/Close"]]) +
      '<div style="font-size:11px;color:#6b7484;line-height:1.5">Zoom the chart (− / + or mouse wheel) and watch Automatic re-group rows. Switch to Manual and zoom again — rows freeze.</div>' + E +
    grp("Plot settings") +
      rng("markerWidth", "Bar Marker Width", 1, 7) +
      sel("outsideBar", "Outside Bar Style", [["bar", "Bar (with shadows)"], ["body", "Body only"]]) +
      sel("markerAlign", "Marker Alignment", [["left", "Side"], ["center", "Center"]]) +
      tgl("outerEdge", "Outer Edge Mode (candle border)") + E +
    grp("Background settings") +
      rng("opacity", "Opacity", 10, 90, 5, "%") + rng("borderWidth", "Border Width", 0, 3) + E +
    grp("Background coloration", true) +
      sel("colorMode", "Color Mode", [["none", "None"], ["fixed", "Fixed"], ["fading", "Fading (gradient)"], ["more", "More Colors (USER)"]]) +
      sel("colorCalc", "Color Calculation", [["volume", "Volume"], ["delta", "Delta"], ["imbalance", "Imbalance"], ["domvol", "Dominant Volume"], ["domvoldelta", "Dominant Volume Delta"]]) +
      rng("imbRatio", "Diagonal imbalance ratio ≥", 1.5, 6, .5, "×") + rng("imbMinDiff", "Min. Vol. Diff. For Imbalance", 0, 60) +
      tgl("imbZero", "Include Zero on Imbalance") + tgl("domOnly", "Color Only Dominant Side") +
      col("inferiorBg", "Background Inferior Side") + E +
    grp("Colors") + col("askColor", "Fixed-Ask Color") + col("bidColor", "Fixed-Bid Color") + col("volColor", "Fixed-Volume Color") +
      col("moreLow", "More Colors — low") + col("moreMid", "More Colors — mid") + col("moreHigh", "More Colors — high") + E +
    grp("Text settings") +
      rng("fontSize", "Font Size", 8, 16) + sel("fmt", "Text Format", [["normal", "Normal"], ["K", "K (thousands)"]]) +
      tgl("dyn", "Dynamic Text Size") + tgl("showZeros", "Show Texts-by-Zeros") + E +
    grp("POC") + tgl("pocOn", "Volume POC — Enable") + tgl("dpocOn", "Delta POC — Enable") + rng("dpocMin", "Delta POC Minimum Delta", 0, 150, 5) + E +
    grp("Value Area") + tgl("vaOn", "Enable") + rng("vaPct", "% Value Area", 40, 95, 5, "%") + tgl("vaLine", "Show Line (VA boundaries)") + E +
    grp("Single Print") + tgl("spOn", "Enable") + rng("spMin", "Single Print Min Value", 5, 80, 5) + tgl("spHL", "Enable Only On High Or Low") + E +
    grp("Ratio") + tgl("ratOn", "Enabled (bar-extreme ratios)") + rng("ratMin", "Min Ratio", 1, 10, .5, "×") + rng("ratMax", "Maximum Ratio", 10, 99) + rng("ratOffset", "Tick Offset", 0, 4) + E +
    grp("Vol Cluster") + tgl("clOn", "Enable") + rng("clMin", "Min. Volume", 80, 600, 20) + tgl("clScale", "Increase Volume Based on Tick Grouped") + E +
    grp("Pull Back") + tgl("pbOn", "Enable (retracement bars)") + rng("pbSrc", "Min Source Bar Ticks", 4, 20) + rng("pbPull", "Min Pullback Ticks", 2, 14) + col("pbColor", "Bar Color") + E +
    grp("Alerts") + tgl("alMsg", "Enable Message (toast)") + tgl("alSound", "Enable Sound") + rng("alMinVol", "Alert Minimum Volume", 20, 90, 5) +
      '<div style="font-size:11px;color:#6b7484">Alerts fire during ▶ Replay when a single print ≥ threshold hits the tape.</div>' + E;

  /* ============ replay engine state ============ */
  var play = { on: false, ci: 0, ptr: [], raf: 0 }; /* raf holds a timer id */
  function resetPlay() { play.on = false; play.ci = 0; play.ptr = candles.map(function () { return null; }); clearTimeout(play.raf); }
  resetPlay();

  /* ============ render ============ */
  var row = mount.querySelector(".row"), axis = mount.querySelector(".axis"),
      read = mount.querySelector(".read"), zl = mount.querySelector(".zl");
  function globalTicks() {
    var hi = -1e9, lo = 1e9;
    candles.forEach(function (cd) { hi = Math.max(hi, cd.topTick); lo = Math.min(lo, cd.topTick - cd.range); });
    return { hi: hi + 2, lo: lo - 2 };
  }
  function renderAxis(gt, px) {
    var H = (gt.hi - gt.lo) * px, G = groupSize(), step = Math.max(G, Math.ceil(24 / px));
    var out = '<svg width="64" height="' + H + '">';
    for (var t = gt.lo; t <= gt.hi; t++) {
      if ((t % step) !== 0) continue;
      var y = (gt.hi - t) * px;
      out += '<line x1="0" x2="6" y1="' + y + '" y2="' + y + '" stroke="#2a2a35"/><text x="10" y="' + (y + 3.5) + '" fill="#6b7484" font-size="10" style="font-variant-numeric:tabular-nums">' + (t * TICK).toFixed(2) + "</text>";
    }
    out += '<line x1="0" x2="0" y1="0" y2="' + H + '" stroke="#23232d"/></svg>';
    axis.innerHTML = out;
  }
  function bgColor(r, A, val, side, gmax) {
    var mag = Math.min(1, Math.abs(val) / (gmax || 1));
    var color, on = true;
    if (st.colorCalc === "volume") color = st.volColor;
    else if (st.colorCalc === "delta") color = (r.ask - r.bid) >= 0 ? st.askColor : st.bidColor, mag = Math.min(1, Math.abs(r.ask - r.bid) / (gmax || 1) * 1.6);
    else if (st.colorCalc === "imbalance") { on = r.imbA || r.imbB; color = r.imbA ? st.askColor : st.bidColor; }
    else if (st.colorCalc === "domvol") color = r.ask >= r.bid ? st.askColor : st.bidColor;
    else { color = r.ask >= r.bid ? st.askColor : st.bidColor; mag = Math.min(1, Math.abs(r.ask - r.bid) / (gmax || 1) * 1.6); }
    if (side === "ask") color = st.colorCalc === "volume" ? st.askColor : color;
    if (side === "bid") color = st.colorCalc === "volume" ? st.bidColor : color;
    if (st.colorMode === "none" || !on) return null;
    if (st.colorMode === "fixed") return { c: color, o: st.opacity / 100 };
    if (st.colorMode === "more") return { c: mag < .33 ? st.moreLow : mag < .66 ? st.moreMid : st.moreHigh, o: st.opacity / 100 };
    return { c: color, o: (0.12 + mag * 0.75) * st.opacity / 100 };
  }
  function drawCandle(cd, ci, gt, px, animate) {
    var lv = foldTape(cd, play.ptr[ci]);
    var rows = groupRows(cd, lv), A = analyse(rows);
    var G = rows.length ? rows[0].G : groupSize();
    var H = (gt.hi - gt.lo) * px, w = 100; /* viewBox width per candle */
    var gmax = 1; rows.forEach(function (r) { gmax = Math.max(gmax, r.bid + r.ask, r.bid, r.ask); });
    var rowH = G * px, fsBase = Math.min(st.fontSize, rowH - 3), showText = rowH >= 10.5;
    var out = "", hit = [];
    /* candle marker (Plot settings) */
    var yHi = (gt.hi - cd.topTick) * px, yLo = (gt.hi - (cd.topTick - cd.range)) * px;
    var yOpen = (gt.hi - (cd.topTick - (cd.range - cd.openPos))) * px, yClose = (gt.hi - (cd.topTick - (cd.range - cd.closePos))) * px;
    var mx = st.markerAlign === "center" ? w / 2 : 3, mcol = cd.up ? st.askColor : st.bidColor;
    if (st.pbOn && cd.isPB) mcol = st.pbColor;
    if (st.outsideBar === "bar") out += '<line x1="' + mx + '" x2="' + mx + '" y1="' + yHi + '" y2="' + yLo + '" stroke="' + mcol + '" stroke-width="' + Math.max(1, st.markerWidth - 2) + '" opacity=".5"/>';
    out += '<line x1="' + mx + '" x2="' + mx + '" y1="' + Math.min(yOpen, yClose) + '" y2="' + Math.max(yOpen, yClose) + '" stroke="' + mcol + '" stroke-width="' + st.markerWidth + '" opacity="' + (st.markerAlign === "center" ? .35 : .8) + '"/>';
    if (st.pbOn && cd.isPB) out += '<text x="' + mx + '" y="' + (yLo + 14) + '" fill="' + st.pbColor + '" font-size="9" text-anchor="middle" font-weight="800">PB</text>';
    var x0 = st.markerAlign === "center" ? 10 : 12, cw = w - x0 - 4;
    rows.forEach(function (r, i) {
      var yTop = (gt.hi - (cd.topTick - r.topLvl)) * px, h = rowH - 1;
      var y = yTop, tot = r.bid + r.ask, dl = r.ask - r.bid;
      if (!tot && !st.showZeros) { hit.push({ y: y, h: h, r: r, A: A, i: i, cd: cd }); return; }
      var inVA = st.vaOn && A.inVA[i], dim = st.vaOn && !inVA ? .42 : 1;
      var anim = animate ? ' style="animation:dpsPop .35s ease backwards ' + (i * .02) + 's"' : "";
      out += "<g" + anim + ' opacity="' + dim + '">';
      var fs = st.dyn ? Math.min(fsBase + 4, fsBase + Math.round(4 * tot / gmax)) : fsBase;
      function cell(cx, cwd, val, side, imb, rawFor) {
        var bg = bgColor(r, A, rawFor == null ? tot : rawFor, side, gmax);
        var inferior = st.domOnly && side !== "vol" && ((side === "ask" && r.ask < r.bid) || (side === "bid" && r.bid < r.ask));
        if (inferior) { out += '<rect x="' + cx + '" y="' + (y + 1) + '" width="' + cwd + '" height="' + (h - 1) + '" rx="2.5" fill="' + st.inferiorBg + '" opacity=".9"/>'; }
        else if (bg) {
          var bw = st.mode === "profile" ? Math.max(2, cwd * Math.min(1, (rawFor == null ? tot : Math.abs(rawFor)) / gmax)) : cwd;
          out += '<rect x="' + cx + '" y="' + (y + 1) + '" width="' + bw.toFixed(1) + '" height="' + (h - 1) + '" rx="2.5" fill="' + bg.c + '" opacity="' + bg.o.toFixed(2) + '"/>';
        }
        if (st.borderWidth) out += '<rect x="' + cx + '" y="' + (y + 1) + '" width="' + cwd + '" height="' + (h - 1) + '" fill="none" stroke="rgba(255,255,255,.25)" stroke-width="' + st.borderWidth * .5 + '"/>';
        if (imb) out += '<rect x="' + cx + '" y="' + (y + 1) + '" width="' + cwd + '" height="' + (h - 1) + '" rx="2.5" fill="none" stroke="' + (side === "ask" ? st.askColor : st.bidColor) + '" stroke-width="1.7" style="filter:drop-shadow(0 0 4px ' + (side === "ask" ? st.askColor : st.bidColor) + ')"><animate attributeName="opacity" values="1;.4;1" dur="1.5s" repeatCount="indefinite"/></rect>';
        if (showText) out += '<text x="' + (cx + cwd / 2) + '" y="' + (y + h / 2 + fs / 2.8) + '" text-anchor="middle" fill="#f2f4f8" font-size="' + fs + '"' + (imb ? ' font-weight="900"' : "") + ' style="font-variant-numeric:tabular-nums">' + (typeof val === "number" ? fmtN(val) : val) + "</text>";
      }
      if (st.type === "split") { cell(x0, cw / 2 - 1, r.bid, "bid", st.colorMode !== "none" && r.imbB, r.bid); cell(x0 + cw / 2 + 1, cw / 2 - 1, r.ask, "ask", st.colorMode !== "none" && r.imbA, r.ask); }
      else if (st.type === "volume") cell(x0, cw, tot, "vol", false);
      else if (st.type === "delta") cell(x0, cw, (dl > 0 ? "+" : "") + fmtN(dl), dl >= 0 ? "ask" : "bid", r.imbA || r.imbB, dl);
      else { cell(x0, cw * .56 - 1, (dl > 0 ? "+" : "") + fmtN(dl), dl >= 0 ? "ask" : "bid", r.imbA || r.imbB, dl); cell(x0 + cw * .56 + 1, cw * .44 - 1, tot, "vol", false); }
      /* single print */
      if (st.spOn && r.n === 1 && r.maxQ >= st.spMin && (!st.spHL || i === 0 || i === rows.length - 1))
        out += '<rect x="' + (x0 - 2) + '" y="' + y + '" width="' + (cw + 4) + '" height="' + (h + 1) + '" rx="4" fill="none" stroke="#38d6ff" stroke-width="1.5" stroke-dasharray="3 3"/>';
      if (st.pocOn && i === A.poc) out += '<rect x="' + (x0 - 2) + '" y="' + y + '" width="' + (cw + 4) + '" height="' + (h + 1) + '" rx="4" fill="none" stroke="#ffd35c" stroke-width="1.6"/>';
      if (st.dpocOn && i === A.dpoc) out += '<rect x="' + (x0 - 2) + '" y="' + y + '" width="' + (cw + 4) + '" height="' + (h + 1) + '" rx="4" fill="none" stroke="' + (dl >= 0 ? st.askColor : st.bidColor) + '" stroke-width="1.4" stroke-dasharray="5 4"/>';
      out += "</g>";
      hit.push({ y: y, h: h, r: r, A: A, i: i, cd: cd });
    });
    /* value area lines */
    if (st.vaOn && st.vaLine && rows.length) {
      var keys = Object.keys(A.inVA).map(Number), t0 = Math.min.apply(null, keys), t1 = Math.max.apply(null, keys);
      var vy0 = (gt.hi - (cd.topTick - rows[t0].topLvl)) * px, vy1 = (gt.hi - (cd.topTick - rows[t1].topLvl)) * px + rowH;
      out += '<line x1="' + x0 + '" x2="' + (x0 + cw) + '" y1="' + vy0 + '" y2="' + vy0 + '" stroke="#ffd35c" stroke-width="1" stroke-dasharray="4 3" opacity=".8"/>' +
             '<line x1="' + x0 + '" x2="' + (x0 + cw) + '" y1="' + vy1 + '" y2="' + vy1 + '" stroke="#ffd35c" stroke-width="1" stroke-dasharray="4 3" opacity=".8"/>';
    }
    /* cluster */
    if (A.cluster) {
      var cy0 = (gt.hi - (cd.topTick - rows[A.cluster.a].topLvl)) * px, cy1 = (gt.hi - (cd.topTick - rows[A.cluster.b].topLvl)) * px + rowH;
      out += '<rect x="' + (x0 - 4) + '" y="' + (cy0 - 2) + '" width="' + (cw + 8) + '" height="' + (cy1 - cy0 + 3) + '" rx="7" fill="' + st.volColor + '" opacity=".08" stroke="' + st.volColor + '" stroke-width="1.3"/>';
    }
    /* ratio at extremes */
    if (st.ratOn && rows.length >= 2) {
      var rt = rows[0].ask / Math.max(1, rows[1].ask), rb = rows[rows.length - 1].bid / Math.max(1, rows[rows.length - 2].bid);
      rt = Math.min(rt, st.ratMax); rb = Math.min(rb, st.ratMax);
      if (rt >= st.ratMin) out += '<text x="' + (x0 + cw / 2) + '" y="' + (yHi - 5 - st.ratOffset * 4) + '" text-anchor="middle" fill="' + st.askColor + '" font-size="9.5" font-weight="800">' + rt.toFixed(1) + "×</text>";
      if (rb >= st.ratMin) out += '<text x="' + (x0 + cw / 2) + '" y="' + (yLo + 12 + st.ratOffset * 4) + '" text-anchor="middle" fill="' + st.bidColor + '" font-size="9.5" font-weight="800">' + rb.toFixed(1) + "×</text>";
    }
    if (st.outerEdge && rows.length) {
      var oy0 = (gt.hi - (cd.topTick - rows[0].topLvl)) * px - 2, oy1 = (gt.hi - (cd.topTick - rows[rows.length - 1].topLvl)) * px + rowH + 2;
      out += '<rect x="' + (x0 - 5) + '" y="' + oy0 + '" width="' + (cw + 10) + '" height="' + (oy1 - oy0) + '" rx="8" fill="none" stroke="rgba(255,255,255,.3)" stroke-width="1"/>';
    }
    /* footer */
    out += '<text x="' + (w / 2) + '" y="' + (H - 6) + '" text-anchor="middle" fill="#6b7484" font-size="9.5" letter-spacing="1">Σ ' + fmtN(A.tot) + '  Δ <tspan fill="' + (A.delta >= 0 ? st.askColor : st.bidColor) + '" font-weight="800">' + (A.delta > 0 ? "+" : "") + fmtN(A.delta) + "</tspan></text>";
    return { svg: '<svg viewBox="0 0 ' + w + " " + H + '" width="100%" height="' + H + '" preserveAspectRatio="none">' + out + "</svg>", hit: hit, H: H, showText: showText, G: G };
  }
  function markPullbacks() {
    candles.forEach(function (cd, i) {
      cd.isPB = false;
      var prev = candles[i - 1];
      if (prev && prev.up !== cd.up && prev.range >= st.pbSrc && cd.range >= st.pbPull) cd.isPB = true;
    });
  }
  function draw(animate) {
    markPullbacks();
    var gt = globalTicks(), px = BASEPX * st.zoom, anyHiddenText = false, G = groupSize();
    if (curAutoG !== null && G !== curAutoG && st.autoGroup)
      flashRead("Auto grouping " + (G > curAutoG ? "merged rows: now " : "split rows: now ") + G + " tick" + (G > 1 ? "s" : "") + " per row (was " + curAutoG + ") — this is what zooming does with Automatic grouping.");
    curAutoG = G;
    ensureCells();
    candles.forEach(function (cd, ci) {
      var res = drawCandle(cd, ci, gt, px, animate);
      if (!res.showText) anyHiddenText = true;
      var cellDiv = row.children[ci];
      cellDiv._res = res;
      cellDiv.innerHTML = res.svg; /* listeners live on cellDiv, so 3D tilt + hover survive replay redraws */
    });
    renderAxis(gt, px);
    zl.textContent = Math.round(st.zoom * 100) + "%";
    var base = "Grouping: <b style='color:#f2f4f8'>" + G + " tick" + (G > 1 ? "s" : "") + "/row (" + (st.autoGroup ? "Automatic, factor " + st.autoFactor : "Manual") + ", " + (st.groupMode === "oc" ? "anchored to Open/Close" : "Fixed grid") + ")</b> · zoom " + Math.round(st.zoom * 100) + "% · hover cells for the diagonal-imbalance story";
    if (anyHiddenText) base += " · <b style='color:#ff7a3d'>rows too thin for numbers — zoom in, or raise grouping</b>";
    if (readFlash) { read.innerHTML = "<b style='color:#38d6ff'>" + readFlash + "</b><br>" + base; readFlash = null; }
    else read.innerHTML = base;
  }
  var readFlash = null;
  function flashRead(m) { readFlash = m; }
  function ensureCells() {
    if (row.children.length === candles.length) return;
    row.innerHTML = "";
    candles.forEach(function () {
      var cellDiv = document.createElement("div");
      cellDiv.className = "dps-cell"; cellDiv.style.cssText = "flex:1;min-width:0;position:relative";
      /* row tooltips — hit data refreshed on every redraw via cellDiv._res */
      cellDiv.addEventListener("mousemove", function (e) {
        var res = cellDiv._res; if (!res) return;
        var svgEl = cellDiv.querySelector("svg"); if (!svgEl) return;
        var b = svgEl.getBoundingClientRect();
        if (b.height > 2) {
          var yv = (e.clientY - b.top) / b.height * res.H, found = null;
          res.hit.forEach(function (hh) { if (yv >= hh.y && yv <= hh.y + hh.h) found = hh; });
          if (found) {
            var r = found.r, dl = r.ask - r.bid;
            var price = ((found.cd.topTick - r.topLvl) * TICK).toFixed(2);
            var m = "<b>" + price + "</b> (" + r.G + "-tick row) — bid <b style='color:" + st.bidColor + "'>" + fmtN(r.bid) + "</b> × ask <b style='color:" + st.askColor + "'>" + fmtN(r.ask) + "</b> · Δ " + (dl > 0 ? "+" : "") + fmtN(dl) + " · " + r.n + " trades, biggest " + r.maxQ;
            if (r.imbA) m += "<br><b>Ask imbalance</b> — beats the bid diagonally below by ≥" + st.imbRatio + "×";
            if (r.imbB) m += "<br><b>Bid imbalance</b> — beats the ask diagonally above by ≥" + st.imbRatio + "×";
            if (found.i === found.A.poc) m += "<br><b style='color:#ffd35c'>Volume POC</b> of this candle";
            showTip(m, e.clientX, e.clientY);
          } else hideTip();
        }
        /* per-candle 3D tile */
        if (st.threeD && b.width > 2) {
          var rb = cellDiv.getBoundingClientRect();
          var ry = ((e.clientX - rb.left) / rb.width - .5) * 16, rx = -((e.clientY - rb.top) / rb.height - .5) * 9;
          cellDiv.style.transform = "perspective(700px) rotateX(" + rx.toFixed(1) + "deg) rotateY(" + ry.toFixed(1) + "deg) scale(1.03) translateZ(8px)";
          cellDiv.style.filter = "drop-shadow(0 18px 30px rgba(0,0,0,.55)) drop-shadow(0 0 18px rgba(124,92,255,.15))";
          cellDiv.style.zIndex = 3;
        }
      });
      cellDiv.addEventListener("mouseleave", function () { hideTip(); cellDiv.style.transform = "none"; cellDiv.style.filter = "none"; cellDiv.style.zIndex = ""; });
      row.appendChild(cellDiv);
    });
  }

  /* ============ replay ============ */
  var toasts = mount.querySelector(".toasts"), audio = null;
  function beep() {
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      var o = audio.createOscillator(), g = audio.createGain();
      o.frequency.value = 880; o.connect(g); g.connect(audio.destination);
      g.gain.setValueAtTime(.08, audio.currentTime); g.gain.exponentialRampToValueAtTime(.001, audio.currentTime + .18);
      o.start(); o.stop(audio.currentTime + .2);
    } catch (e) {}
  }
  function toast(msg) {
    var t = document.createElement("div");
    t.style.cssText = "background:#15151d;border:1px solid rgba(34,229,106,.5);color:#f2f4f8;font-size:12px;padding:8px 12px;border-radius:10px;box-shadow:0 12px 30px rgba(0,0,0,.5);animation:dpsToast .3s ease";
    t.innerHTML = msg;
    toasts.appendChild(t);
    setTimeout(function () { t.style.transition = "opacity .4s"; t.style.opacity = 0; setTimeout(function () { t.remove(); }, 450); }, 2400);
    while (toasts.children.length > 3) toasts.firstChild.remove();
  }
  var repBtn = mount.querySelector(".rep"), spdSel = mount.querySelector(".spd");
  function step() {
    if (!play.on) return;
    var speed = +spdSel.value, applied = 0;
    while (applied < speed * 2 && play.ci < candles.length) {
      var cd = candles[play.ci];
      if (play.ptr[play.ci] == null) play.ptr[play.ci] = 0;
      if (play.ptr[play.ci] >= cd.tape.length) { play.ci++; continue; }
      var tr = cd.tape[play.ptr[play.ci]];
      play.ptr[play.ci]++;
      applied++;
      if (tr.qty >= st.alMinVol) {
        var price = ((cd.topTick - tr.lvl) * TICK).toFixed(2);
        if (st.alMsg) toast("🔔 <b>Deep Print alert</b> — " + tr.qty + " @ " + price + " (" + (tr.side === "ask" ? "buy" : "sell") + ")");
        if (st.alSound) beep();
      }
    }
    draw(false);
    if (play.ci >= candles.length) { play.on = false; repBtn.textContent = "▶ Replay tape"; flashRead("Replay complete — every number you watched grow came through the tape, trade by trade."); draw(false); return; }
    play.raf = setTimeout(step, 28);
  }
  repBtn.addEventListener("click", function () {
    if (play.on) { play.on = false; repBtn.textContent = "▶ Resume"; clearTimeout(play.raf); return; }
    if (play.ci >= candles.length || play.ptr.every(function (p) { return p === null; })) { play.ci = 0; play.ptr = candles.map(function () { return 0; }); }
    play.on = true; repBtn.textContent = "⏸ Pause";
    flashRead("Streaming the tape — watch cells grow, imbalances ignite and die, and the POC migrate as volume builds.");
    step();
  });
  mount.querySelector(".rst").addEventListener("click", function () { resetPlay(); repBtn.textContent = "▶ Replay tape"; draw(true); });

  /* ============ zoom ============ */
  function setZoom(z) { st.zoom = Math.max(.45, Math.min(3.2, z)); draw(false); }
  mount.querySelector(".zi").addEventListener("click", function () { setZoom(st.zoom * 1.25); });
  mount.querySelector(".zo").addEventListener("click", function () { setZoom(st.zoom / 1.25); });
  mount.querySelector(".stage").addEventListener("wheel", function (e) { e.preventDefault(); setZoom(st.zoom * (e.deltaY < 0 ? 1.12 : 0.89)); }, { passive: false });

  /* ============ 3D toggle ============ */
  var d3btn = mount.querySelector(".d3");
  d3btn.addEventListener("click", function () { st.threeD = !st.threeD; d3btn.textContent = "◇ 3D tiles: " + (st.threeD ? "on" : "off"); });

  /* ============ settings events ============ */
  ctl.addEventListener("input", function (e) {
    var k = e.target.dataset.k; if (!k) return;
    if (e.target.type === "checkbox") st[k] = e.target.checked;
    else if (e.target.type === "range") {
      st[k] = +e.target.value;
      var o = e.target.closest("label").querySelector("output"); if (o) o.textContent = e.target.value + (e.target.dataset.suf || "");
    } else if (k === "autoGroup") st[k] = e.target.value === "true";
    else st[k] = e.target.value;
    if (k === "candles") { candles = makeCandles(st.candles); resetPlay(); }
    draw(false);
  });

  /* ============ export ============ */
  mount.querySelector(".dl").addEventListener("click", function () {
    function oo(b) { return b ? "On" : "Off"; }
    var T = { volume: "Volume", split: "Ask/Bid Split", delta: "Delta", deltatotal: "Delta + Total Volume" };
    var IT = { volume: "Volume", aggregate: "Aggregate Volume", trades: "Num Trades" };
    var CM = { none: "None", fixed: "Fixed", fading: "Fading", more: "More Colors (Range Definition = USER)" };
    var CC = { volume: "Volume", delta: "Delta", imbalance: "Imbalance", domvol: "Dominant Volume", domvoldelta: "Dominant Volume Delta" };
    var txt = ["DEEP PRINT — MY SETTINGS", "Built in the DeepCharts Help Center studio · apply in: chart → Indicators → Deep Print", "",
      "[General settings]", "  Type: " + T[st.type], "  Mode: " + (st.mode === "profile" ? "Profile" : "Box"), "",
      "[Data settings]", "  Input Type: " + IT[st.inputType], "  Min Filter: " + (st.minFilter || "off"), "  Max Filter: " + (st.maxFilter || "off"), "",
      "[Tick grouping]", "  Auto Grouping: " + (st.autoGroup ? "Automatic" : "Manual"), "  Auto Group Factor: " + st.autoFactor, "  Manual Ticks: " + st.manualTicks, "  Group Mode: " + (st.groupMode === "oc" ? "Based on Open/Close" : "Fixed"), "",
      "[Plot settings]", "  Bar Marker Width: " + st.markerWidth, "  Outside Bar Style: " + (st.outsideBar === "bar" ? "Bar (with shadows)" : "Body only"), "  Marker Alignment: " + (st.markerAlign === "center" ? "Center" : "Side"), "  Outer Edge Mode: " + oo(st.outerEdge), "",
      "[Background settings]", "  Opacity: " + st.opacity + "%", "  Border Width: " + st.borderWidth, "",
      "[Background coloration]", "  Color Mode: " + CM[st.colorMode], "  Color Calculation: " + CC[st.colorCalc],
      "  Diagonal imbalance ratio (studio): " + st.imbRatio + "x", "  Min. Vol. Diff. For Imbalance: " + st.imbMinDiff,
      "  Include Zero on Imbalance: " + oo(st.imbZero), "  Color Only Dominant Side: " + oo(st.domOnly), "  Background Inferior Side: " + st.inferiorBg, "",
      "[Colors]", "  Fixed-Ask Color: " + st.askColor, "  Fixed-Bid Color: " + st.bidColor, "  Fixed-Volume Color: " + st.volColor,
      "  More Colors low/mid/high: " + st.moreLow + " / " + st.moreMid + " / " + st.moreHigh, "",
      "[Text settings]", "  Font Size: " + st.fontSize, "  Text Format: " + (st.fmt === "K" ? "K" : "Normal"), "  Dynamic Text Size: " + oo(st.dyn), "  Show Texts-by-Zeros: " + oo(st.showZeros), "",
      "[POC]", "  Volume POC — Enable: " + oo(st.pocOn), "  Delta POC — Enable: " + oo(st.dpocOn), "  Delta POC Minimum Delta: " + st.dpocMin, "",
      "[Value Area]", "  Enable: " + oo(st.vaOn), "  % Value Area: " + st.vaPct, "  Show Line: " + oo(st.vaLine), "",
      "[Single Print]", "  Enable: " + oo(st.spOn), "  Single Print Min Value: " + st.spMin, "  Enable Only On High Or Low: " + oo(st.spHL), "",
      "[Ratio]", "  Enabled: " + oo(st.ratOn), "  Min Ratio: " + st.ratMin, "  Maximum Ratio: " + st.ratMax, "  Tick Offset: " + st.ratOffset, "",
      "[Vol Cluster]", "  Enable: " + oo(st.clOn), "  Min. Volume: " + st.clMin, "  Increase Volume Based on Tick Grouped: " + oo(st.clScale), "",
      "[Pull Back]", "  Enable: " + oo(st.pbOn), "  Min Source Bar Ticks: " + st.pbSrc, "  Min Pullback Ticks: " + st.pbPull, "  Bar Color: " + st.pbColor, "",
      "[Alerts]", "  Enable Message: " + oo(st.alMsg), "  Enable Sound: " + oo(st.alSound), "  Alert Minimum Volume: " + st.alMinVol, "",
      "JSON: " + JSON.stringify(st)].join("\n");
    var a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([txt], { type: "text/plain" }));
    a.download = "deep-print-my-settings.txt";
    document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 400);
  });

  draw(true);
})();
