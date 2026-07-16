#!/usr/bin/env python3
"""DeepCharts Help Center static-site builder.

Reads manifest.json + content/*.md and produces:
  site/index.html, site/category/<cat>.html, site/article/<slug>.html
  site/pdf/<slug>.pdf           (per-article download)
  site/assets/*                 (css/js + search-index.js)
  screenshots-needed.md         (every placeholder, for the screenshot capture pass)

Run:  python3 build.py
"""
import json, os, re, html, shutil, sys, datetime

import yaml
from markdown_it import MarkdownIt

ROOT = os.path.dirname(os.path.abspath(__file__))
CONTENT = os.path.join(ROOT, "content")
SITE = os.path.join(ROOT, "site")
ASSETS = os.path.join(ROOT, "assets")

md = MarkdownIt("commonmark", {"html": True}).enable("table").enable("strikethrough")

manifest = json.load(open(os.path.join(ROOT, "manifest.json")))
SITE_NAME = manifest["site"]["name"]
TAGLINE = manifest["site"]["tagline"]
TODAY = datetime.date.today().strftime("%B %d, %Y")

# ---------------- load articles ----------------
def parse_frontmatter(text, path):
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n", text, re.S)
    if not m:
        raise ValueError(f"{path}: missing frontmatter")
    meta = yaml.safe_load(m.group(1))
    return meta, text[m.end():]

articles = {}   # slug -> {meta, body}
errors = []
for fn in sorted(os.listdir(CONTENT)) if os.path.isdir(CONTENT) else []:
    if not fn.endswith(".md"):
        continue
    path = os.path.join(CONTENT, fn)
    try:
        meta, body = parse_frontmatter(open(path, encoding="utf-8").read(), fn)
        slug = meta.get("slug") or fn[:-3]
        if fn[:-3] != slug:
            errors.append(f"{fn}: filename != slug '{slug}'")
        articles[slug] = {"meta": meta, "body": body}
    except Exception as e:
        errors.append(f"{fn}: {e}")

# linear order from manifest
order = []          # [(slug, cat, sub)]
cat_of = {}
for c in manifest["categories"]:
    for s in c["subcategories"]:
        for a in s["articles"]:
            order.append((a["slug"], c, s["name"]))
            cat_of[a["slug"]] = (c, s["name"], a)

missing = [sl for sl, _, _ in order if sl not in articles]
extra = [sl for sl in articles if sl not in cat_of]
print(f"content files: {len(articles)} | manifest: {len(order)} | missing: {len(missing)} | extra: {len(extra)}")
if missing:
    print("MISSING:", ", ".join(missing))
if extra:
    print("EXTRA (not in manifest, skipped):", ", ".join(extra))
for e in errors:
    print("ERROR:", e)

# ---------------- markdown transforms ----------------
SHOT_RE = re.compile(r"^\[SCREENSHOT:\s*(.+?)\s*\|\s*([\w.\-]+)\s*\][ \t]*$", re.M)
WIDGET_RE = re.compile(r"^\[WIDGET:\s*([\w\-]+)\s*\][ \t]*$", re.M)
LINK_RE = re.compile(r"\[\[([\w\-]+)(?:\|([^\]]+))?\]\]")
CONFIRM_RE = re.compile(r"\[CONFIRM:([^\]]+)\]")

shots = []   # (slug, filename, desc)
badlinks = []

def transform_md(slug, body):
    def shot_sub(m):
        desc, fname = m.group(1), m.group(2)
        shots.append((slug, fname, desc))
        return ('<div class="shot"><div class="cam">📷</div><div>'
                '<div class="s-label">Screenshot placeholder</div>'
                f'<div class="s-desc">{html.escape(desc)}</div>'
                f'<div class="s-file">{html.escape(fname)}</div></div></div>')
    body = SHOT_RE.sub(shot_sub, body)
    def widget_sub(m):
        name = m.group(1)
        (widget_uses if name in KNOWN_WIDGETS else bad_widgets).append((slug, name))
        return f'<div class="widget-mount" data-widget="{name}"></div>'
    body = WIDGET_RE.sub(widget_sub, body)

    def link_sub(m):
        target, text = m.group(1), m.group(2)
        if target in articles:
            label = text or articles[target]["meta"].get("title", target)
        else:
            badlinks.append((slug, target))
            label = text or target
            return html.escape(label)
        return f'<a href="./{target}.html">{html.escape(label)}</a>'
    body = LINK_RE.sub(link_sub, body)
    body = CONFIRM_RE.sub(lambda m: f'<span class="confirm-flag">CONFIRM:{html.escape(m.group(1))}</span>', body)
    return body

def heading_anchor_pass(rendered):
    """Add ids to h2/h3 and build the on-page toc list."""
    toc = []
    used = set()
    def repl(m):
        level, inner = m.group(1), m.group(2)
        plain = re.sub(r"<[^>]+>", "", inner)
        hid = re.sub(r"[^a-z0-9]+", "-", plain.lower()).strip("-") or "sec"
        base = hid; i = 2
        while hid in used:
            hid = f"{base}-{i}"; i += 1
        used.add(hid)
        toc.append((int(level), hid, plain))
        return f'<h{level} id="{hid}">{inner}</h{level}>'
    rendered = re.sub(r"<h([23])>(.*?)</h\1>", repl, rendered, flags=re.S)
    return rendered, toc

def callout_pass(rendered):
    for label, cls in (("Tip", "callout-tip"), ("Warning", "callout-warning"), ("Note", "callout-note")):
        rendered = rendered.replace(f"<blockquote>\n<p><strong>{label}:</strong>",
                                    f'<blockquote class="{cls}">\n<p><strong>{label}:</strong>')
    return rendered

# ---------------- html shell ----------------
def sidebar_html(root, active_slug=None):
    out = []
    for c in manifest["categories"]:
        out.append('<div class="nav-cat"><button>{i}&nbsp; {n} <span class="tw">▶</span></button><ul class="nav-items">'
                   .format(i=c["icon"], n=html.escape(c["name"])))
        for s in c["subcategories"]:
            if s["name"]:
                out.append(f'<li class="nav-sub">{html.escape(s["name"])}</li>')
            for a in s["articles"]:
                cls = ' class="active"' if a["slug"] == active_slug else ""
                out.append(f'<li><a href="{root}article/{a["slug"]}.html"{cls}>{html.escape(a["title"])}</a></li>')
        out.append("</ul></div>")
    return "".join(out)

def header_html(root):
    return f'''<header class="site-header">
  <div class="logo"><a href="{root}index.html">DeepCharts <span class="hc">Help Center</span></a></div>
  <div class="searchbox" data-search><span class="mag">🔎</span>
    <input type="text" placeholder="Search the knowledge base...  ( / )" autocomplete="off">
    <div class="search-results"></div></div>
  <nav class="header-links"><a href="{root}index.html">All articles</a><a href="{root}article/quick-start-first-trade.html">Quick start</a><a href="{root}article/get-help.html">Get help</a></nav>
</header>'''

def page(root, title, body, active_slug=None, toc_html="", desc=""):
    return f'''<!DOCTYPE html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">

<title>{html.escape(title)} — {SITE_NAME}</title>
<meta name="description" content="{html.escape(desc)}">
<link rel="stylesheet" href="{root}assets/style.css">
<script>window.HC_ROOT="{root}";</script>
</head><body>
{header_html(root)}
<div class="layout">
  <nav class="sidebar">{sidebar_html(root, active_slug)}</nav>
  <main class="content">{body}
    <div class="footer">DeepCharts Help Center · rebuilt {TODAY} · screenshots pending capture (see placeholders)</div>
  </main>
  {toc_html}
</div>
<script src="{root}assets/search-index.js"></script>
<script src="{root}assets/app.js"></script>
<script src="{root}assets/widgets.js"></script>
<script src="{root}assets/deep-print-studio.js"></script>
</body></html>'''

# ---------------- live widgets ----------------
# Widgets are declared inline in markdown via [WIDGET: name]; this list validates names.
KNOWN_WIDGETS = {
    "dom-ladder", "rsi-lab", "feed-navigator", "main-bar", "spec-check",
    "volume-profile-lab", "footprint-lab", "vwap-lab", "ma-lab", "macd-lab",
    "candle-anatomy", "tape-lab", "symbol-manage-mock",
    "trading-panel-mock", "delta-lab", "tpo-lab", "link-groups-demo", "deep-print-studio",
}
widget_uses = []   # (slug, name) for reporting
bad_widgets = []

# ---------------- build article pages ----------------
os.makedirs(os.path.join(SITE, "article"), exist_ok=True)
os.makedirs(os.path.join(SITE, "category"), exist_ok=True)
os.makedirs(os.path.join(SITE, "pdf"), exist_ok=True)
shutil.copytree(ASSETS, os.path.join(SITE, "assets"), dirs_exist_ok=True)

search_index = []
linear = [sl for sl, _, _ in order if sl in articles]

for idx, slug in enumerate(linear):
    art = articles[slug]
    meta = art["meta"]
    c, sub, _ = cat_of[slug]
    body_md = transform_md(slug, art["body"])
    rendered = md.render(body_md)
    rendered = callout_pass(rendered)
    rendered, toc = heading_anchor_pass(rendered)

    toc_html = ""
    if toc:
        items = "".join(f'<li class="lv{lv}"><a href="#{hid}">{html.escape(t)}</a></li>' for lv, hid, t in toc)
        toc_html = f'<aside class="toc"><div class="toc-head">On this page</div><ul>{items}</ul></aside>'

    prev_a = next_a = ""
    if idx > 0:
        p = articles[linear[idx-1]]["meta"]
        prev_a = f'<a class="prev" href="./{linear[idx-1]}.html"><div class="pn-lbl">← Previous</div><div class="pn-title">{html.escape(p["title"])}</div></a>'
    if idx < len(linear) - 1:
        n = articles[linear[idx+1]]["meta"]
        next_a = f'<a class="next" href="./{linear[idx+1]}.html"><div class="pn-lbl">Next →</div><div class="pn-title">{html.escape(n["title"])}</div></a>'

    crumb = (f'<div class="breadcrumb"><a href="../index.html">Help Center</a> › '
             f'<a href="../category/{c["slug"]}.html">{html.escape(c["name"])}</a>'
             + (f' › {html.escape(sub)}' if sub else "") + "</div>")
    dif = meta.get("difficulty", "beginner")
    typ = meta.get("type", "reference")
    body_html = f'''{crumb}
<div class="article-head"><h1>{html.escape(meta["title"])}</h1>
<p class="article-desc">{html.escape(meta.get("description",""))}</p>
<div class="meta-row">
  <span class="badge b-{dif}">{dif.capitalize()}</span>
  <span class="badge">{typ.capitalize()}</span>
  <span class="badge">🕒 {html.escape(meta.get("time",""))}</span>
  <a class="btn-pdf" href="../pdf/{slug}.pdf" download>⬇ Download PDF</a>
</div></div>
<article class="article-body">{rendered}</article>
<div class="pn">{prev_a}{next_a}</div>'''

    open(os.path.join(SITE, "article", f"{slug}.html"), "w", encoding="utf-8").write(
        page("../", meta["title"], body_html, active_slug=slug, toc_html=toc_html, desc=meta.get("description","")))

    search_index.append({"s": slug, "t": meta["title"], "d": meta.get("description",""),
                         "c": c["name"], "sub": sub, "dif": dif,
                         "k": meta.get("keywords", []), "h": [t for _, _, t in toc]})

# ---------------- category pages ----------------
for c in manifest["categories"]:
    parts = [f'<div class="breadcrumb"><a href="../index.html">Help Center</a> › {html.escape(c["name"])}</div>',
             f'<div class="article-head"><h1>{c["icon"]} {html.escape(c["name"])}</h1>'
             f'<p class="article-desc">{html.escape(c["description"])}</p></div>']
    for s in c["subcategories"]:
        if s["name"]:
            parts.append(f'<div class="sec-h">{html.escape(s["name"])}</div>')
        parts.append('<ul class="art-list">')
        for a in s["articles"]:
            m = articles.get(a["slug"], {}).get("meta", {})
            d = m.get("description", "")
            dif = m.get("difficulty", a.get("difficulty", ""))
            parts.append(f'<li><a href="../article/{a["slug"]}.html"><div class="t">{html.escape(a["title"])}</div>'
                         f'<div class="d">{html.escape(d)}</div>'
                         f'<div class="d"><span class="badge b-{dif}">{dif}</span></div></a></li>')
        parts.append("</ul>")
    open(os.path.join(SITE, "category", f'{c["slug"]}.html'), "w", encoding="utf-8").write(
        page("../", c["name"], "".join(parts), desc=c["description"]))

# ---------------- home page ----------------
total = len(linear)
cards = []
for c in manifest["categories"]:
    cnt = sum(len(s["articles"]) for s in c["subcategories"])
    cards.append(f'<a class="cat-card" href="category/{c["slug"]}.html"><div class="c-ico">{c["icon"]}</div>'
                 f'<h3>{html.escape(c["name"])}</h3><p>{html.escape(c["description"])}</p>'
                 f'<div class="c-count">{cnt} articles →</div></a>')
candles = "".join(
    f'<div class="candle {k}" style="height:{h}px;margin-top:{m}px;animation-delay:{i*0.35:.2f}s"></div>'
    for i, (k, h, m) in enumerate([("g",140,-40),("p",90,30),("g",180,-10),("p",120,60),("g",100,-70),
                                   ("p",170,20),("g",130,80),("p",95,-30),("g",160,40),("p",140,-60)]))
home = f'''<div class="hero home-hero">
<div class="hero-candles">{candles}</div>
<h1>Don't read the manual.<br><span class="hg">Live</span> the <span class="hp">platform</span>.</h1>
<p>{html.escape(TAGLINE)} Every guide here is a working piece of DeepCharts — turn the dials, hover the ladders, feel the answer.</p>
<div class="hero-search searchbox" data-search><span class="mag">🔎</span>
<input type="text" placeholder="Search {total} articles… try “connect dxFeed” or “what is delta”" autocomplete="off"><div class="search-results"></div></div>
<div class="start-strip"><span style="color:var(--green);font-size:13px;align-self:center;font-weight:700">New here?</span>
<a href="article/quick-start-first-trade.html">🚀 Quick start</a>
<a href="article/install-deepcharts.html">Install DeepCharts</a>
<a href="article/compatibility-guide.html">Is my broker supported?</a>
<a href="article/orderflow-101.html">Learn orderflow</a></div></div>
<div class="home-duo">
<div class="home-duo-txt"><div class="sec-h" style="margin-top:0">Navigate by <b style="color:var(--orange)">doing</b></div>
<h2 style="font-size:26px;letter-spacing:-.6px;margin:0 0 12px">This is the Feed Settings window.<br>Pick a source — we fly you to its guide.</h2>
<p style="color:var(--ink2);font-size:15px">You don't remember article titles — you remember what the screen looked like. So the help center starts from the screen. Hover any field to understand it; choose your data source and the library reshapes around your setup.</p>
<div class="demo-strip"><span>More live demos:</span>
<a href="article/rsi.html">RSI lab</a><a href="article/advanced-dom.html">Living DOM ladder</a><a href="article/orderflow-101.html">Orderflow 101</a></div></div>
<div class="widget-mount" data-widget="feed-navigator" style="margin:0"></div>
</div>
<div class="sec-h">Browse the library</div>
<div class="cat-grid">{''.join(cards)}</div>'''
open(os.path.join(SITE, "index.html"), "w", encoding="utf-8").write(page("", "Home", home, desc=TAGLINE))

# ---------------- search index ----------------
open(os.path.join(SITE, "assets", "search-index.js"), "w", encoding="utf-8").write(
    "window.SEARCH_INDEX=" + json.dumps(search_index, ensure_ascii=False) + ";")

# ---------------- per-article PDFs ----------------
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable)

NAVY = colors.HexColor("#15263c"); ACCENT = colors.HexColor("#0d8a5f"); GRAY = colors.HexColor("#57606c")
ss = getSampleStyleSheet()
p_title = ParagraphStyle("t", parent=ss["Title"], fontSize=20, leading=25, textColor=NAVY, alignment=TA_LEFT if (TA_LEFT:=0) == 0 else 0)
p_h2 = ParagraphStyle("h2", parent=ss["Heading2"], fontSize=13.5, leading=17, textColor=ACCENT, spaceBefore=12, spaceAfter=4)
p_h3 = ParagraphStyle("h3", parent=ss["Heading3"], fontSize=11.5, leading=14, textColor=NAVY, spaceBefore=8, spaceAfter=3)
p_body = ParagraphStyle("b", parent=ss["Normal"], fontSize=9.8, leading=14)
p_bullet = ParagraphStyle("bl", parent=p_body, leftIndent=14, spaceAfter=2)
p_meta = ParagraphStyle("m", parent=p_body, fontSize=8.5, textColor=GRAY)
p_call = ParagraphStyle("c", parent=p_body, leftIndent=10, borderPadding=6, backColor=colors.HexColor("#eef4fb"))
p_shot = ParagraphStyle("s", parent=p_body, fontSize=8.8, textColor=colors.HexColor("#3d4c5d"), backColor=colors.HexColor("#f2f6fa"), borderPadding=8)

INLINE_BOLD = re.compile(r"\*\*(.+?)\*\*")
INLINE_IT = re.compile(r"(?<!\*)\*([^*]+)\*(?!\*)")
INLINE_CODE = re.compile(r"`([^`]+)`")
MDLINK = re.compile(r"\[([^\]]+)\]\([^)]+\)")

def inline(s):
    s = html.escape(s)
    s = LINK_RE.sub(lambda m: (m.group(2) or (articles.get(m.group(1), {}).get("meta", {}).get("title", m.group(1)))), s)
    s = MDLINK.sub(r"\1", s)
    s = INLINE_BOLD.sub(r"<b>\1</b>", s)
    s = INLINE_IT.sub(r"<i>\1</i>", s)
    s = INLINE_CODE.sub(r'<font face="Courier" size="8.5">\1</font>', s)
    s = CONFIRM_RE.sub(lambda m: f'<font color="#b9770e"><b>[CONFIRM:{m.group(1)}]</b></font>', s)
    return s

def md_to_flowables(body, meta):
    flows = []
    lines = body.split("\n")
    i, para, bullets = 0, [], []
    def flush_para():
        nonlocal para
        if para:
            flows.append(Paragraph(inline(" ".join(para)), p_body)); flows.append(Spacer(1, 3)); para = []
    def flush_bullets():
        nonlocal bullets
        for kind, txt in bullets:
            flows.append(Paragraph(("&#8226; " if kind == "u" else f"{txt[0]}. ") if False else ("&#8226; " + inline(txt) if kind == "u" else inline(txt)), p_bullet))
        if bullets: flows.append(Spacer(1, 3))
        bullets = []
    while i < len(lines):
        ln = lines[i].rstrip()
        m_shot = SHOT_RE.match(ln)
        if m_shot:
            flush_para(); flush_bullets()
            flows.append(Paragraph(f"[ SCREENSHOT PLACEHOLDER ]  {inline(m_shot.group(1))}  &nbsp;&nbsp;<font face='Courier' size='8'>{m_shot.group(2)}</font>", p_shot))
            flows.append(Spacer(1, 5)); i += 1; continue
        if ln.startswith("|") and i + 1 < len(lines) and set(lines[i+1].replace("|", "").replace(" ", "")) <= set("-:"):
            flush_para(); flush_bullets()
            rows = []
            while i < len(lines) and lines[i].strip().startswith("|"):
                cells = [c.strip() for c in lines[i].strip().strip("|").split("|")]
                if not set("".join(cells)) <= set("-: "):
                    rows.append([Paragraph(inline(c), ParagraphStyle("tc", parent=p_body, fontSize=8.5, leading=11)) for c in cells])
                i += 1
            if rows:
                ncol = max(len(r) for r in rows)
                rows = [r + [""] * (ncol - len(r)) for r in rows]
                t = Table(rows, colWidths=[(A4[0] - 40*mm) / ncol] * ncol, repeatRows=1)
                t.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,0), colors.HexColor("#f0f2f5")),
                                       ("GRID", (0,0), (-1,-1), 0.4, colors.HexColor("#c9d2da")),
                                       ("VALIGN", (0,0), (-1,-1), "TOP"),
                                       ("TOPPADDING", (0,0), (-1,-1), 3), ("BOTTOMPADDING", (0,0), (-1,-1), 3)]))
                flows.append(t); flows.append(Spacer(1, 6))
            continue
        if ln.startswith("### "):
            flush_para(); flush_bullets(); flows.append(Paragraph(inline(ln[4:]), p_h3))
        elif ln.startswith("## "):
            flush_para(); flush_bullets(); flows.append(Paragraph(inline(ln[3:]), p_h2))
        elif ln.startswith("# "):
            flush_para(); flush_bullets(); flows.append(Paragraph(inline(ln[2:]), p_h2))
        elif ln.startswith("> "):
            flush_para(); flush_bullets(); flows.append(Paragraph(inline(ln[2:]), p_call)); flows.append(Spacer(1, 4))
        elif re.match(r"^\s*[-*]\s+", ln):
            flush_para(); bullets.append(("u", re.sub(r"^\s*[-*]\s+", "", ln)))
        elif re.match(r"^\s*\d+\.\s+", ln):
            flush_para(); bullets.append(("o", ln.strip()))
        elif not ln.strip():
            flush_para(); flush_bullets()
        else:
            flush_bullets(); para.append(ln.strip())
        i += 1
    flush_para(); flush_bullets()
    return flows

pdf_fail = []
for slug in linear:
    art = articles[slug]; meta = art["meta"]
    c, sub, _ = cat_of[slug]
    out = os.path.join(SITE, "pdf", f"{slug}.pdf")
    try:
        docp = SimpleDocTemplate(out, pagesize=A4, leftMargin=20*mm, rightMargin=20*mm,
                                 topMargin=18*mm, bottomMargin=18*mm, title=meta["title"], author="DeepCharts Help Center")
        flows = [Paragraph(inline(meta["title"]), p_title),
                 Paragraph(f'{c["name"]}{" / " + sub if sub else ""} &nbsp;|&nbsp; {meta.get("difficulty","")} &nbsp;|&nbsp; {meta.get("time","")} &nbsp;|&nbsp; DeepCharts Help Center &nbsp;|&nbsp; {TODAY}', p_meta),
                 Spacer(1, 4), HRFlowable(width="100%", thickness=0.7, color=colors.HexColor("#c9d2da")), Spacer(1, 8)]
        flows += md_to_flowables(art["body"], meta)
        docp.build(flows)
    except Exception as e:
        pdf_fail.append((slug, str(e)[:120]))

# ---------------- screenshots manifest ----------------
with open(os.path.join(ROOT, "screenshots-needed.md"), "w", encoding="utf-8") as f:
    f.write(f"# Screenshots to capture — {len(shots)} placeholders\n\n")
    f.write("Save each capture as `site/assets/img/<filename>` and replace the placeholder in the matching "
            "content/*.md file with a normal image tag, then rebuild.\n\n")
    cur = None
    for slug, fname, desc in shots:
        if slug != cur:
            cur = slug
            t = articles[slug]["meta"]["title"]
            f.write(f"\n## {t}  (`content/{slug}.md`)\n\n")
        f.write(f"- **{fname}** — {desc}\n")

print(f"\nbuilt: {len(linear)} articles, {len(manifest['categories'])} categories, "
      f"{len(shots)} screenshot placeholders, {len(widget_uses)} live widgets in "
      f"{len(set(s for s, _ in widget_uses))} articles, {len(linear) - len(pdf_fail)} PDFs")
if bad_widgets:
    print("UNKNOWN WIDGETS:")
    for s, n in bad_widgets:
        print(f"   {s} -> [WIDGET: {n}]")
if pdf_fail:
    print("PDF FAILURES:")
    for s, e in pdf_fail:
        print("  ", s, "->", e)
if badlinks:
    uniq = sorted(set(badlinks))
    print(f"BAD [[links]] ({len(uniq)}):")
    for s, t in uniq:
        print(f"   {s} -> [[{t}]]")
sys.exit(1 if (missing or pdf_fail or bad_widgets) else 0)
