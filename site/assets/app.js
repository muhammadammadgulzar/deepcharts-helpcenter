/* DeepCharts Help Center — search, sidebar state, TOC scroll-spy */
(function () {
  // ---------- sidebar: open current category, remember toggles ----------
  document.querySelectorAll(".nav-cat > button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      btn.parentElement.classList.toggle("open");
    });
  });
  var active = document.querySelector(".nav-items a.active");
  if (active) {
    var cat = active.closest(".nav-cat");
    if (cat) cat.classList.add("open");
    active.scrollIntoView({ block: "center" });
  } else {
    var first = document.querySelector(".nav-cat");
    if (first) first.classList.add("open");
  }

  // ---------- search ----------
  var IDX = window.SEARCH_INDEX || [];
  function score(item, q, words) {
    var t = item.t.toLowerCase(), d = (item.d || "").toLowerCase(),
        k = (item.k || []).join(" ").toLowerCase(), h = (item.h || []).join(" ").toLowerCase();
    var s = 0;
    if (t === q) s += 100;
    if (t.indexOf(q) !== -1) s += 40;
    words.forEach(function (w) {
      if (!w) return;
      if (t.indexOf(w) !== -1) s += 14;
      if (k.indexOf(w) !== -1) s += 9;
      if (h.indexOf(w) !== -1) s += 5;
      if (d.indexOf(w) !== -1) s += 3;
    });
    return s;
  }
  function attach(input, results) {
    var sel = -1;
    function render(items) {
      if (!items.length) { results.classList.remove("open"); results.innerHTML = ""; return; }
      results.innerHTML = items.map(function (it) {
        return '<a href="' + window.HC_ROOT + 'article/' + it.s + '.html"><div class="r-title">' + it.t +
               '</div><div class="r-meta">' + it.c + (it.sub ? " / " + it.sub : "") + " · " + it.dif + "</div></a>";
      }).join("");
      results.classList.add("open"); sel = -1;
    }
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      if (q.length < 2) { results.classList.remove("open"); return; }
      var words = q.split(/\s+/);
      var scored = IDX.map(function (it) { return [score(it, q, words), it]; })
        .filter(function (p) { return p[0] > 0; })
        .sort(function (a, b) { return b[0] - a[0]; })
        .slice(0, 10).map(function (p) { return p[1]; });
      render(scored);
    });
    input.addEventListener("keydown", function (e) {
      var links = results.querySelectorAll("a");
      if (!links.length) return;
      if (e.key === "ArrowDown") { sel = Math.min(sel + 1, links.length - 1); e.preventDefault(); }
      else if (e.key === "ArrowUp") { sel = Math.max(sel - 1, 0); e.preventDefault(); }
      else if (e.key === "Enter" && sel >= 0) { links[sel].click(); return; }
      else if (e.key === "Escape") { results.classList.remove("open"); return; }
      links.forEach(function (l, i) { l.classList.toggle("sel", i === sel); });
      if (sel >= 0) links[sel].scrollIntoView({ block: "nearest" });
    });
    document.addEventListener("click", function (e) {
      if (!results.contains(e.target) && e.target !== input) results.classList.remove("open");
    });
  }
  document.querySelectorAll("[data-search]").forEach(function (box) {
    attach(box.querySelector("input"), box.querySelector(".search-results"));
  });
  // "/" focuses search
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
      var inp = document.querySelector("[data-search] input");
      if (inp) { inp.focus(); e.preventDefault(); }
    }
  });

  // ---------- TOC scroll spy ----------
  var tocLinks = document.querySelectorAll(".toc li a");
  if (tocLinks.length) {
    var heads = Array.prototype.map.call(tocLinks, function (a) {
      return document.getElementById(a.getAttribute("href").slice(1));
    }).filter(Boolean);
    function spy() {
      var pos = window.scrollY + 90, cur = heads[0];
      heads.forEach(function (h) { if (h.offsetTop <= pos) cur = h; });
      tocLinks.forEach(function (a) {
        a.classList.toggle("active", cur && a.getAttribute("href") === "#" + cur.id);
      });
    }
    window.addEventListener("scroll", spy, { passive: true });
    spy();
  }
})();
