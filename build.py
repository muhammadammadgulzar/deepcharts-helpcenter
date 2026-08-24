#!/usr/bin/env python3
"""DeepCharts + DeepDOM Help Center static-site builder — multi-language.

Builds a (language × knowledge-base) matrix into one site:

  site/                        DeepCharts KB, English      (LIVE root)
  site/deepdom/                DeepDOM KB, English
  site/<lang>/                 DeepCharts KB, <lang>       (it / es / fr / de)
  site/<lang>/deepdom/         DeepDOM KB, <lang>
  site/assets/*                shared css/js + per-(lang,kb) search indexes
  site/assets/shots-status.json  machine-readable screenshot coverage
  screenshots-needed.md        every placeholder, all languages/KBs

A language is built when BOTH its manifests and content dirs exist:
  en:  manifest.json + content/          manifest-deepdom.json + content-deepdom/
  it:  manifest-it.json + content-it/    manifest-it-deepdom.json + content-it-deepdom/
  (same pattern for es / fr / de — created by scripts/translate_sync.py --init)

Screenshot placeholders carry a unique language-aware ID as their filename:
  {kb}-{lang}-{article-slug}-{NN}.png    e.g. dc-en-connect-cqg-03.png
The build FAILS on malformed, duplicated, or wrong-language/kb/slug IDs.

Run:  python3 build.py
"""
import hashlib, json, os, re, html, shutil, sys, datetime

import yaml
from markdown_it import MarkdownIt

ROOT = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.join(ROOT, "site")
ASSETS = os.path.join(ROOT, "assets")

md = MarkdownIt("commonmark", {"html": True}).enable("table").enable("strikethrough")
TODAY = datetime.date.today().strftime("%B %d, %Y")

# ---------------- languages × knowledge bases ----------------
LANGS = [
    ("en", "English", False),
    ("it", "Italiano", True),
    ("es", "Español", True),
    ("fr", "Français", True),
    ("de", "Deutsch", True),
]   # (code, label, beta-badge)

def kb_defs(lang):
    sfx = "" if lang == "en" else f"-{lang}"
    return [
        {"key": "",        "shot_kb": "dc", "brand": "DeepCharts",
         "manifest": f"manifest{sfx}.json", "content": f"content{sfx or ''}" if lang != "en" else "content",
         "sub": "", "search_js": f"search-index{sfx}.js"},
        {"key": "deepdom", "shot_kb": "dd", "brand": "DeepDOM",
         "manifest": f"manifest{sfx}-deepdom.json", "content": f"content{sfx}-deepdom",
         "sub": "deepdom", "search_js": f"search-index{sfx}-deepdom.js"},
    ]

def lang_available(lang):
    return all(os.path.exists(os.path.join(ROOT, kb["manifest"]))
               and os.path.isdir(os.path.join(ROOT, kb["content"]))
               for kb in kb_defs(lang))

ENABLED_LANGS = [l for l in LANGS if lang_available(l[0])]

# The few chrome strings that appear on generated non-article UI.
UI_STR = {
    "en": {"new_here": "New here?", "browse": "Browse the library",
           "search_ph": "Search the knowledge base...  ( / )",
           "beta_note": ""},
    "it": {"new_here": "Prima volta qui?", "browse": "Sfoglia la libreria",
           "search_ph": "Cerca nella knowledge base...  ( / )",
           "beta_note": "Questa lingua è in beta — alcune pagine possono essere tradotte automaticamente."},
    "es": {"new_here": "¿Primera vez aquí?", "browse": "Explora la biblioteca",
           "search_ph": "Buscar en la base de conocimientos...  ( / )",
           "beta_note": "Este idioma está en beta — algunas páginas pueden estar traducidas automáticamente."},
    "fr": {"new_here": "Nouveau ici ?", "browse": "Parcourir la bibliothèque",
           "search_ph": "Rechercher dans la base de connaissances...  ( / )",
           "beta_note": "Cette langue est en bêta — certaines pages peuvent être traduites automatiquement."},
    "de": {"new_here": "Neu hier?", "browse": "Bibliothek durchsuchen",
           "search_ph": "Wissensdatenbank durchsuchen...  ( / )",
           "beta_note": "Diese Sprache ist in der Beta — einige Seiten können maschinell übersetzt sein."},
}

# ---------------- load articles ----------------
def parse_frontmatter(text, path):
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n", text, re.S)
    if not m:
        raise ValueError(f"{path}: missing frontmatter")
    meta = yaml.safe_load(m.group(1))
    return meta, text[m.end():]


def load_kb(lang, kb):
    content_dir = os.path.join(ROOT, kb["content"])
    man = json.load(open(os.path.join(ROOT, kb["manifest"])))
    arts = {}
    errs = []
    for fn in sorted(os.listdir(content_dir)) if os.path.isdir(content_dir) else []:
        if not fn.endswith(".md"):
            continue
        path = os.path.join(content_dir, fn)
        try:
            raw = open(path, encoding="utf-8").read()
            meta, body = parse_frontmatter(raw, fn)
            slug = meta.get("slug") or fn[:-3]
            if fn[:-3] != slug:
                errs.append(f"{fn}: filename != slug '{slug}'")
            arts[slug] = {"meta": meta, "body": body,
                          "raw_hash": hashlib.sha1(raw.encode("utf-8")).hexdigest()[:16]}
        except Exception as e:
            errs.append(f"{fn}: {e}")

    ordr = []          # [(slug, cat, sub)]
    catof = {}
    for c in man["categories"]:
        for s in c["subcategories"]:
            for a in s["articles"]:
                ordr.append((a["slug"], c, s["name"]))
                catof[a["slug"]] = (c, s["name"], a)

    miss = [sl for sl, _, _ in ordr if sl not in arts]
    extr = [sl for sl in arts if sl not in catof]
    print(f"[{lang}/{kb['brand']}] content files: {len(arts)} | manifest: {len(ordr)} | "
          f"missing: {len(miss)} | extra: {len(extr)}")
    if miss:
        print("MISSING:", ", ".join(miss))
    if extr:
        print("EXTRA (not in manifest, skipped):", ", ".join(extr))
    for e in errs:
        print("ERROR:", e)
    return {"manifest": man, "articles": arts, "order": ordr, "cat_of": catof,
            "missing": miss, "errors": errs}

# per-build globals (assigned by build_kb; helpers below read them)
LANG = "en"
LANG_PREFIX = ""            # "" for en, "it/" etc.
KB = kb_defs("en")[0]
manifest = None
articles = {}
cat_of = {}
order = []
SITE_NAME = ""
TAGLINE = ""
LANG_SLUGS = {}             # lang -> kbkey -> {"articles": set, "categories": set}

# ---------------- markdown transforms ----------------
SHOT_RE = re.compile(r"^\[SCREENSHOT:\s*(.+?)\s*\|\s*([\w.\-]+)\s*\][ \t]*$", re.M)
SHOT_ID_RE = re.compile(r"^(dc|dd)-(en|it|es|fr|de)-([a-z0-9][a-z0-9\-]*)-(\d{2})\.(png|jpg|jpeg|webp)$")
IMG_RE = re.compile(r"!\[[^\]]*\]\([^)\s]*assets/img/([^)\s]+)\)")
WIDGET_RE = re.compile(r"^\[WIDGET:\s*([\w\-]+)\s*\][ \t]*$", re.M)
LINK_RE = re.compile(r"\[\[([\w\-]+)(?:\|([^\]]+))?\]\]")
CONFIRM_RE = re.compile(r"\[CONFIRM:([^\]]+)\]")

shots = []        # (content_dir, slug, title, filename, desc)
badlinks = []
bad_shots = []    # (lang, kb, slug, filename, reason)
seen_shot_ids = {}   # filename -> (lang, kb, slug)
missing_imgs = []    # (content_dir, slug, img)

def transform_md(slug, body):
    def shot_sub(m):
        desc, fname = m.group(1), m.group(2)
        mid = SHOT_ID_RE.match(fname)
        if not mid:
            bad_shots.append((LANG, KB["shot_kb"], slug, fname,
                              "ID must look like {kb}-{lang}-{slug}-{NN}.png"))
        else:
            if mid.group(1) != KB["shot_kb"]:
                bad_shots.append((LANG, KB["shot_kb"], slug, fname, f"kb token should be '{KB['shot_kb']}'"))
            if mid.group(2) != LANG:
                bad_shots.append((LANG, KB["shot_kb"], slug, fname, f"language token should be '{LANG}'"))
            if mid.group(3) != slug:
                bad_shots.append((LANG, KB["shot_kb"], slug, fname, f"slug token should be '{slug}'"))
            stem = fname.rsplit(".", 1)[0]
            if stem in seen_shot_ids:
                bad_shots.append((LANG, KB["shot_kb"], slug, fname,
                                  f"duplicate ID (also in {seen_shot_ids[stem]})"))
            seen_shot_ids[stem] = (LANG, KB["shot_kb"], slug)
        shots.append((KB["content"], slug, articles[slug]["meta"]["title"], fname, desc))
        sid = html.escape(fname.rsplit(".", 1)[0])
        return ('<div class="shot"><div class="cam">📷</div><div>'
                '<div class="s-label">Screenshot placeholder</div>'
                f'<div class="s-desc">{html.escape(desc)}</div>'
                f'<div class="s-file">ID: <b class="s-id">{sid}</b> · save as <code>{html.escape(fname)}</code></div></div></div>')
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

# callout labels per language (translations may use localized labels;
# the English tokens always work in every language)
CALLOUT_LABELS = {
    "callout-tip":     ["Tip", "Suggerimento", "Consejo", "Astuce", "Tipp"],
    "callout-warning": ["Warning", "Attenzione", "Avvertenza", "Advertencia", "Avertissement", "Warnung", "Achtung"],
    "callout-note":    ["Note", "Nota", "Remarque", "Hinweis"],
}

def callout_pass(rendered):
    for cls, labels in CALLOUT_LABELS.items():
        for label in labels:
            rendered = rendered.replace(f"<blockquote>\n<p><strong>{label}:</strong>",
                                        f'<blockquote class="{cls}">\n<p><strong>{label}:</strong>')
    return rendered

# ---------------- html shell ----------------
def sidebar_html(kbroot, active_slug=None):
    out = []
    for c in manifest["categories"]:
        out.append('<div class="nav-cat"><button>{i}&nbsp; {n} <span class="tw">▶</span></button><ul class="nav-items">'
                   .format(i=c["icon"], n=html.escape(c["name"])))
        for s in c["subcategories"]:
            if s["name"]:
                out.append(f'<li class="nav-sub">{html.escape(s["name"])}</li>')
            for a in s["articles"]:
                cls = ' class="active"' if a["slug"] == active_slug else ""
                out.append(f'<li><a href="{kbroot}article/{a["slug"]}.html"{cls}>{html.escape(a["title"])}</a></li>')
        out.append("</ul></div>")
    return "".join(out)


def lang_href(root, target_lang, loc):
    """Best link into target_lang for the current page location."""
    prefix = "" if target_lang == "en" else f"{target_lang}/"
    kbseg = "deepdom/" if KB["key"] == "deepdom" else ""
    base = f"{root}{prefix}{kbseg}"
    known = LANG_SLUGS.get(target_lang, {}).get(KB["key"], {"articles": set(), "categories": set()})
    if loc["kind"] == "article" and loc["slug"] in known["articles"]:
        return f'{base}article/{loc["slug"]}.html'
    if loc["kind"] == "category" and loc["slug"] in known["categories"]:
        return f'{base}category/{loc["slug"]}.html'
    return f"{base}index.html"


def lang_dropdown(root, loc):
    items = []
    enabled = {c for c, _, _ in ENABLED_LANGS}
    for code, label, beta in LANGS:
        badge = ' <em class="beta">BETA</em>' if beta else ""
        if code == LANG:
            items.append(f'<span class="lang-item cur">{label}{badge}</span>')
        elif code in enabled:
            items.append(f'<a class="lang-item" href="{lang_href(root, code, loc)}">{label}{badge}</a>')
        else:
            items.append(f'<span class="lang-item soon">{label}{badge} <em class="soonlbl">soon</em></span>')
    return (f'<div class="lang-dd"><button class="lang-btn" aria-haspopup="true">🌐 {LANG.upper()} ▾</button>'
            f'<div class="lang-menu">{"".join(items)}</div></div>')


def header_html(root, kbroot, loc):
    langroot = f"{root}{LANG_PREFIX}"
    if KB["key"] == "deepdom":
        brand = 'DeepDOM <span class="hc">Help Center</span>'
        switch = f'<a class="kb-switch" href="{langroot}index.html" title="Switch knowledge base">⇄ DeepCharts KB</a>'
        links = (f'<a href="{kbroot}index.html">All articles</a>'
                 f'<a href="{kbroot}article/installation-and-first-configuration.html">Get started</a>'
                 f'<a href="{langroot}article/get-help.html">Get help</a>')
    else:
        brand = 'DeepCharts <span class="hc">Help Center</span>'
        switch = f'<a class="kb-switch" href="{langroot}deepdom/index.html" title="Switch knowledge base">⇄ DeepDOM KB</a>'
        links = (f'<a href="{kbroot}index.html">All articles</a>'
                 f'<a href="{kbroot}article/quick-start-first-trade.html">Quick start</a>'
                 f'<a href="{kbroot}article/get-help.html">Get help</a>')
    ph = UI_STR.get(LANG, UI_STR["en"])["search_ph"]
    return f'''<header class="site-header">
  <div class="logo"><a href="{kbroot}index.html">{brand}</a></div>
  <div class="searchbox" data-search><span class="mag">🔎</span>
    <input type="text" placeholder="{html.escape(ph)}" autocomplete="off">
    <div class="search-results"></div></div>
  <nav class="header-links">{links}{switch}{lang_dropdown(root, loc)}</nav>
</header>'''


def page(root, kbroot, title, body, loc, active_slug=None, toc_html="", desc=""):
    return f'''<!DOCTYPE html>
<html lang="{LANG}"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">

<title>{html.escape(title)} — {SITE_NAME}</title>
<meta name="description" content="{html.escape(desc)}">
<link rel="stylesheet" href="{root}assets/style.css">
<link rel="stylesheet" href="{root}assets/review.css">
<script>window.HC_ROOT="{root}";window.KB_ROOT="{kbroot}";window.HC_KB="{KB["key"]}";window.HC_LANG="{LANG}";</script>
</head><body>
{header_html(root, kbroot, loc)}
<div class="layout">
  <nav class="sidebar">{sidebar_html(kbroot, active_slug)}</nav>
  <main class="content">{body}
    <div class="footer">{SITE_NAME} · rebuilt {TODAY} · screenshots pending capture (see placeholders)</div>
  </main>
  {toc_html}
</div>
<script src="{root}assets/kb-map.js"></script>
<script src="{root}assets/{KB["search_js"]}"></script>
<script src="{root}assets/app.js"></script>
<script src="{root}assets/widgets.js"></script>
<script src="{root}assets/deep-print-studio.js"></script>
<script type="module" src="{root}assets/review.js"></script>
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

# ---------------- pdf machinery ----------------
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
        elif ln.startswith("#### "):
            flush_para(); flush_bullets(); flows.append(Paragraph(inline(ln[5:]), p_h3))
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

# ---------------- per-(lang,kb) build ----------------
def build_kb(lang, kb, data):
    global LANG, LANG_PREFIX, KB, manifest, articles, cat_of, order, SITE_NAME, TAGLINE
    LANG = lang
    LANG_PREFIX = "" if lang == "en" else f"{lang}/"
    KB = kb
    manifest = data["manifest"]
    articles = data["articles"]
    cat_of = data["cat_of"]
    order = data["order"]
    SITE_NAME = manifest["site"]["name"]
    TAGLINE = manifest["site"]["tagline"]
    S = UI_STR.get(lang, UI_STR["en"])

    out_base = os.path.join(SITE, LANG_PREFIX, kb["sub"]).rstrip("/")
    os.makedirs(os.path.join(out_base, "article"), exist_ok=True)
    os.makedirs(os.path.join(out_base, "category"), exist_ok=True)
    os.makedirs(os.path.join(out_base, "pdf"), exist_ok=True)

    # path prefixes: root -> site root (assets), kbroot -> this KB's root
    depth_sub = 1 + (1 if kb["sub"] else 0) + (1 if LANG_PREFIX else 0)
    depth1 = "../" * depth_sub                 # from article/ or category/ pages
    kb1 = "../"                                # KB root from its own subpages
    root0 = "../" * (depth_sub - 1)            # site root from the KB's index page
    kb0 = ""                                   # KB root from its own index page

    search_index = []
    status_articles = []
    linear = [sl for sl, _, _ in order if sl in articles]

    for idx, slug in enumerate(linear):
        art = articles[slug]
        meta = art["meta"]
        c, sub, _ = cat_of[slug]

        # screenshot coverage bookkeeping (from the raw body, pre-transform)
        ph_ids = [f for _, f in SHOT_RE.findall(art["body"])]
        img_files = IMG_RE.findall(art["body"])
        for imgf in img_files:
            if not os.path.exists(os.path.join(ASSETS, "img", imgf)):
                missing_imgs.append((kb["content"], slug, imgf))
        if ph_ids or img_files:
            status_articles.append({"slug": slug, "title": meta["title"],
                                    "placeholders": ph_ids, "images": len(img_files)})

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

        open(os.path.join(out_base, "article", f"{slug}.html"), "w", encoding="utf-8").write(
            page(depth1, kb1, meta["title"], body_html, {"kind": "article", "slug": slug},
                 active_slug=slug, toc_html=toc_html, desc=meta.get("description","")))

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
        open(os.path.join(out_base, "category", f'{c["slug"]}.html'), "w", encoding="utf-8").write(
            page(depth1, kb1, c["name"], "".join(parts),
                 {"kind": "category", "slug": c["slug"]}, desc=c["description"]))

    # ---------------- home page ----------------
    total = len(linear)
    cards = []
    for c in manifest["categories"]:
        cnt = sum(len(s["articles"]) for s in c["subcategories"])
        cards.append(f'<a class="cat-card" href="category/{c["slug"]}.html"><div class="c-ico">{c["icon"]}</div>'
                     f'<h3>{html.escape(c["name"])}</h3><p>{html.escape(c["description"])}</p>'
                     f'<div class="c-count">{cnt} articles →</div></a>')
    beta_note = (f'<p style="margin-top:14px;color:var(--orange);font-size:13.5px">{html.escape(S["beta_note"])}</p>'
                 if lang != "en" and S["beta_note"] else "")

    if kb["key"] == "deepdom":
        home = f'''<div class="hero home-hero">
<h1>The <span class="hp">DeepDOM</span> knowledge base.</h1>
<p>{html.escape(TAGLINE)}</p>
<div class="hero-search searchbox" data-search><span class="mag">🔎</span>
<input type="text" placeholder="Search {total} DeepDOM articles…" autocomplete="off"><div class="search-results"></div></div>
<div class="start-strip"><span style="color:var(--green);font-size:13px;align-self:center;font-weight:700">{html.escape(S["new_here"])}</span>
<a href="article/installation-and-first-configuration.html">🚀 {html.escape(articles.get("installation-and-first-configuration",{}).get("meta",{}).get("title","Installation"))}</a>
<a href="article/general-settings.html">{html.escape(articles.get("general-settings",{}).get("meta",{}).get("title","General settings"))}</a>
<a href="article/heatmap.html">{html.escape(articles.get("heatmap",{}).get("meta",{}).get("title","Heatmap"))}</a>
<a href="article/deep-iceberg.html">{html.escape(articles.get("deep-iceberg",{}).get("meta",{}).get("title","Deep Iceberg"))}</a></div>
{beta_note}</div>
<div class="sec-h">{html.escape(S["browse"])}</div>
<div class="cat-grid">{''.join(cards)}</div>
<p style="margin-top:28px;color:var(--ink2);font-size:14px">
<a href="../index.html"><b>⇄ DeepCharts Help Center →</b></a></p>'''
    elif lang != "en":
        home = f'''<div class="hero home-hero">
<h1>DeepCharts <span class="hg">Help Center</span></h1>
<p>{html.escape(TAGLINE)}</p>
<div class="hero-search searchbox" data-search><span class="mag">🔎</span>
<input type="text" placeholder="{html.escape(S["search_ph"])}" autocomplete="off"><div class="search-results"></div></div>
{beta_note}</div>
<div class="sec-h">{html.escape(S["browse"])}</div>
<div class="cat-grid">{''.join(cards)}</div>
<div class="sec-h">DeepDOM</div>
<a class="cat-card" href="deepdom/index.html" style="max-width:420px"><div class="c-ico">🧊</div>
<h3>DeepDOM Help Center</h3><p></p>
<div class="c-count">→</div></a>'''
    else:
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
<div class="cat-grid">{''.join(cards)}</div>
<div class="sec-h">Also from DeepCharts</div>
<a class="cat-card" href="deepdom/index.html" style="max-width:420px"><div class="c-ico">🧊</div>
<h3>DeepDOM Help Center</h3><p>Guides for the DeepDOM orderflow platform — installation, trading, the Heatmap and the Deep indicator series.</p>
<div class="c-count">Open the DeepDOM KB →</div></a>'''

    open(os.path.join(out_base, "index.html"), "w", encoding="utf-8").write(
        page(root0, kb0, "Home", home, {"kind": "index", "slug": ""}, desc=TAGLINE))

    # ---------------- search index ----------------
    open(os.path.join(SITE, "assets", kb["search_js"]), "w", encoding="utf-8").write(
        "window.SEARCH_INDEX=" + json.dumps(search_index, ensure_ascii=False) + ";")

    # ---------------- per-article PDFs ----------------
    pdf_fail = []
    for slug in linear:
        art = articles[slug]; meta = art["meta"]
        c, sub, _ = cat_of[slug]
        out = os.path.join(out_base, "pdf", f"{slug}.pdf")
        try:
            docp = SimpleDocTemplate(out, pagesize=A4, leftMargin=20*mm, rightMargin=20*mm,
                                     topMargin=18*mm, bottomMargin=18*mm, title=meta["title"], author=SITE_NAME)
            flows = [Paragraph(inline(meta["title"]), p_title),
                     Paragraph(f'{c["name"]}{" / " + sub if sub else ""} &nbsp;|&nbsp; {meta.get("difficulty","")} &nbsp;|&nbsp; {meta.get("time","")} &nbsp;|&nbsp; {SITE_NAME} &nbsp;|&nbsp; {TODAY}', p_meta),
                     Spacer(1, 4), HRFlowable(width="100%", thickness=0.7, color=colors.HexColor("#c9d2da")), Spacer(1, 8)]
            flows += md_to_flowables(art["body"], meta)
            docp.build(flows)
        except Exception as e:
            pdf_fail.append((slug, str(e)[:120]))

    return {"linear": linear, "pdf_fail": pdf_fail,
            "n_cats": len(manifest["categories"]), "status_articles": status_articles}

# ---------------- main ----------------
os.makedirs(os.path.join(SITE, "assets"), exist_ok=True)
shutil.copytree(ASSETS, os.path.join(SITE, "assets"), dirs_exist_ok=True)

# load everything first (lang deep-links need every language's slug catalog)
loaded = []   # (lang, kb, data)
for code, label, beta in ENABLED_LANGS:
    for kb in kb_defs(code):
        data = load_kb(code, kb)
        loaded.append((code, kb, data))
        LANG_SLUGS.setdefault(code, {})[kb["key"]] = {
            "articles": {sl for sl, _, _ in data["order"]},
            "categories": {c["slug"] for c in data["manifest"]["categories"]},
        }

# kb-map.js: which article slugs belong to the DeepDOM KB (used by review.js)
dd_en = next(d for c, k, d in loaded if c == "en" and k["key"] == "deepdom")
open(os.path.join(SITE, "assets", "kb-map.js"), "w", encoding="utf-8").write(
    "window.DEEPDOM_SLUGS=" + json.dumps([sl for sl, _, _ in dd_en["order"]]) + ";")

results = []
for code, kb, data in loaded:
    results.append((code, kb, data, build_kb(code, kb, data)))

# ---------------- screenshots status (for the admin panel) ----------------
status = {"generated": datetime.datetime.now(datetime.timezone.utc).isoformat(),
          "languages": {}}
for code, kb, data, r in results:
    kbkey = kb["shot_kb"]
    arts = r["status_articles"]
    tot_ph = sum(len(a["placeholders"]) for a in arts)
    tot_img = sum(a["images"] for a in arts)
    status["languages"].setdefault(code, {})[kbkey] = {
        "brand": kb["brand"],
        "articles_total": len(r["linear"]),
        "articles_with_placeholders": sum(1 for a in arts if a["placeholders"]),
        "articles_complete": sum(1 for a in arts if not a["placeholders"] and a["images"]),
        "placeholders_total": tot_ph,
        "images_total": tot_img,
        "articles": arts,
    }
# translation staleness: every non-EN article records the source_hash of the
# English file it was translated from (stamped by translate_sync.py --finalize)
en_data = {kb["key"]: data for code, kb, data in loaded if code == "en"}
status["translations"] = {}
for code, kb, data, r in results:
    if code == "en":
        continue
    en_arts = en_data[kb["key"]]["articles"]
    stale, missing_tr = [], []
    for slug, en_art in en_arts.items():
        tr = data["articles"].get(slug)
        if tr is None:
            missing_tr.append(slug)
        elif str(tr["meta"].get("source_hash", "")) != en_art["raw_hash"]:
            stale.append(slug)
    status["translations"].setdefault(code, {})[kb["shot_kb"]] = {
        "brand": kb["brand"],
        "up_to_date": len(en_arts) - len(stale) - len(missing_tr),
        "stale": len(stale), "missing": len(missing_tr),
        "stale_slugs": stale[:50], "missing_slugs": missing_tr[:50],
    }
open(os.path.join(SITE, "assets", "shots-status.json"), "w", encoding="utf-8").write(
    json.dumps(status, ensure_ascii=False))

# ---------------- screenshots manifest ----------------
with open(os.path.join(ROOT, "screenshots-needed.md"), "w", encoding="utf-8") as f:
    f.write(f"# Screenshots to capture — {len(shots)} placeholders\n\n")
    f.write("Every placeholder has a unique ID = its filename ({kb}-{lang}-{slug}-{NN}.png).\n"
            "Capture pass: save each file named exactly by its ID into one folder, then run\n"
            "`python3 scripts/apply_screenshots.py <folder>` — it inserts them all at once.\n"
            "DeepDOM placeholders list their original old-site image in `deepdom-source-images.csv`.\n\n")
    cur = None
    for cdir, slug, title, fname, desc in shots:
        if (cdir, slug) != cur:
            cur = (cdir, slug)
            f.write(f"\n## {title}  (`{cdir}/{slug}.md`)\n\n")
        f.write(f"- **{fname}** — {desc}\n")

# ---------------- report ----------------
any_missing = any(data["missing"] for _, _, data, _ in results)
any_pdf_fail = any(r["pdf_fail"] for _, _, _, r in results)
for code, kb, data, r in results:
    print(f"[{code}/{kb['brand']}] built: {len(r['linear'])} articles, {r['n_cats']} categories, "
          f"{len(r['linear']) - len(r['pdf_fail'])} PDFs")
    if r["pdf_fail"]:
        print("PDF FAILURES:")
        for s, e in r["pdf_fail"]:
            print("  ", s, "->", e)
print(f"total screenshot placeholders: {len(shots)} | live widgets: {len(widget_uses)} in "
      f"{len(set(s for s, _ in widget_uses))} articles")
if missing_imgs:
    print(f"WARNING — {len(missing_imgs)} referenced images missing from assets/img/:")
    for cdir, s, i in missing_imgs[:20]:
        print(f"   {cdir}/{s}.md -> {i}")
if bad_shots:
    print(f"BAD SCREENSHOT IDs ({len(bad_shots)}):")
    for lang, kbk, s, fn, reason in bad_shots[:40]:
        print(f"   [{lang}/{kbk}] {s}: {fn} — {reason}")
if bad_widgets:
    print("UNKNOWN WIDGETS:")
    for s, n in bad_widgets:
        print(f"   {s} -> [WIDGET: {n}]")
if badlinks:
    uniq = sorted(set(badlinks))
    print(f"BAD [[links]] ({len(uniq)}):")
    for s, t in uniq:
        print(f"   {s} -> [[{t}]]")
sys.exit(1 if (any_missing or any_pdf_fail or bad_widgets or bad_shots) else 0)
