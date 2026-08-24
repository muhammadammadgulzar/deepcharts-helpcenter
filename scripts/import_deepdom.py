#!/usr/bin/env python3
"""Import DeepDOM KB articles from the old Framer help center into content-deepdom/*.md.

Reads pre-downloaded HTML files (one per article) and converts each to a
markdown article with frontmatter in the same format as content/*.md.
Images in the article body become [SCREENSHOT: desc | file.png] placeholders;
the original Framer image URL for each placeholder is written to
deepdom-source-images.csv so the capture pass can reference the originals.

Usage:  python3 scripts/import_deepdom.py <raw-html-dir>
"""
import csv, html, os, re, sys
from html.parser import HTMLParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "content-deepdom")

# ---------------- article registry ----------------
# (old-site slug, final slug, title, category-key)
# Final slug differs where it would collide with a content/*.md DeepCharts slug.
ARTICLES = [
    ("installation-issues", "installation-issues", "Installation Issues", "common-issues"),
    ("licence-issues", "licence-issues", "Licence Issues", "common-issues"),
    ("symbol-subscription-issues", "symbol-subscription-issues", "Symbol Subscription Issues", "common-issues"),
    ("cache-issues-deepdom", "cache-issues-deepdom", "Cache Issues", "common-issues"),

    ("installation-and-first-configuration", "installation-and-first-configuration", "Installation and First Configuration", "how-to"),
    ("general-settings", "general-settings", "General Settings", "how-to"),
    ("how-to-add-a-new-connection", "how-to-add-a-new-connection", "How to Add a New Connection", "how-to"),
    ("how-to-add-markets-correctly", "how-to-add-markets-correctly", "How to Add Markets Correctly", "how-to"),
    ("user-configuration-templates-workspaces-tool-config-(deepdom)", "user-configuration-templates-workspaces", "User Configuration — Templates, Workspaces, Tool Config", "how-to"),
    ("how-to-set-up-keyboard-shortcuts", "how-to-set-up-keyboard-shortcuts", "How to Set Up Keyboard Shortcuts", "how-to"),
    ("how-to-insert-sound-notifications", "how-to-insert-sound-notifications", "How to Insert Sound Notifications", "how-to"),
    ("how-to-customize-language-and-theme", "how-to-customize-language-and-theme", "How to Customize Language and Theme", "how-to"),
    ("how-to-manage-symbol-rollover", "how-to-manage-symbol-rollover", "How to Manage Symbol Rollover", "how-to"),

    ("orders-window", "orders-window-deepdom", "Orders Window", "trading"),
    ("trading-from-the-chart", "trading-from-the-chart", "Trading from the Chart", "trading"),
    ("portfolio-risk-manager", "portfolio-risk-manager", "Portfolio-Risk Manager", "trading"),
    ("simulation-environment", "simulation-environment", "Simulation Environment", "trading"),

    ("spread-bid-ask", "spread-bid-ask", "Spread Bid/Ask", "indicators"),
    ("vwap-envelopes", "vwap-envelopes-deepdom", "VWAP + Envelopes", "indicators"),
    ("session-imbalance", "session-imbalance-deepdom", "Session Imbalance", "indicators"),
    ("book-speed", "book-speed", "Book Speed", "indicators"),
    ("volume-profile", "volume-profile-deepdom", "Volume Profile", "indicators"),
    ("stop-run", "stop-run", "Stop Run", "indicators"),
    ("absorption", "absorption", "Absorption", "indicators"),
    ("cumulative-iceberg-stop", "cumulative-iceberg-stop", "Cumulative Iceberg/Stop", "indicators"),
    ("volume-swing", "volume-swing-deepdom", "Volume Swing", "indicators"),
    ("poc-dynamic", "poc-dynamic", "POC Dynamic", "indicators"),
    ("volume", "volume-deepdom", "Volume", "indicators"),
    ("delta-bar", "delta-bar-deepdom", "Delta Bar", "indicators"),
    ("cumulative-volume-delta", "cumulative-volume-delta", "Cumulative Volume Delta", "indicators"),
    ("big-trades-deepdom", "big-trades-deepdom", "Big Trades", "indicators"),
    ("important-levels-deepdom", "important-levels-deepdom", "Important Levels", "indicators"),

    ("volume-bubbles", "volume-bubbles", "Volume Bubbles", "features"),
    ("heatmap", "heatmap", "Heatmap", "features"),
    ("replay-tick-data", "replay-tick-data", "Replay Tick Data", "features"),

    ("deep-iceberg-(iceberg-detector)", "deep-iceberg", "Deep Iceberg (Iceberg Detector)", "deepindicators"),
    ("deep-reload", "deep-reload", "Deep Reload", "deepindicators"),
    ("deep-liquidity-scan", "deep-liquidity-scan", "Deep Liquidity Scan", "deepindicators"),
    ("deep-delta", "deep-delta-deepdom", "Deep Delta", "deepindicators"),
]

CATS = {
    "common-issues":  ("Common Issues", "troubleshooting", "beginner"),
    "how-to":         ("How To", "how-to", "beginner"),
    "trading":        ("Trading", "how-to", "intermediate"),
    "indicators":     ("Indicators", "reference", "intermediate"),
    "features":       ("Features", "reference", "intermediate"),
    "deepindicators": ("Deep Indicators", "reference", "advanced"),
}

ALL_TITLES = {t for _, _, t, _ in ARTICLES}
# titles as they appear on the old site (some differ from our cleaned titles)
OLDSITE_TITLES = ALL_TITLES | {
    "Cache Issues - DeepDom", "General Settings (DeepDOM)", "Orders Window",
    "User Configuration – Templates, Workspaces, Tool Config (DeepDom)",
    "Trading from the Chart (Deepdom)", "Big Trades (Deepdom)", "Important Levels",
    "Deep Iceberg (Iceberg Detector)",
}
OLD_TO_NEW_SLUG = {old: new for old, new, _, _ in ARTICLES}

NOISE_EXACT = {
    "search our knowledge base…", "search our knowledge base...", "search",
    "home page", "all articles", "no headings found on page", "on this page",
    "view all", "main", "features", "pricing", "resources", "work with us",
    "home", "data feeds", "blog", "contact", "help center", "knowledge base",
    "table of contents", "related articles", "share", "copy link",
    "previous", "next", "by", "<-", "->", "‹", "›", "updated:",
    "common issues", "how to", "trading", "indicators", "deep indicators",
}
NOISE_RE = [
    re.compile(r"^updated:?\s", re.I),
    re.compile(r"^[a-z]{3} \d{1,2}, \d{4}$", re.I),          # "Jun 18, 2026"
    re.compile(r"^©"), re.compile(r"^\d{4} deepcharts", re.I),
    re.compile(r"^all rights reserved", re.I),
]

BLOCK_TAGS = {"h1", "h2", "h3", "h4", "h5", "h6", "p", "li"}


def norm(s):
    return re.sub(r"\s+", " ", s).strip()


def is_noise(text):
    t = norm(text).lower().rstrip(":")
    if t in NOISE_EXACT:
        return True
    return any(r.match(t) for r in NOISE_RE)


class Extractor(HTMLParser):
    """Walk the page in document order and emit (kind, text, meta) blocks."""

    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.blocks = []           # (kind, text, {links:[hrefs]})
        self.cur = None            # (kind, parts:[], links:[], linktext:int, textlen:int)
        self.list_stack = []       # "ul" / "ol"
        self.inline_stack = []
        self.in_a = 0
        self.seen_imgs = []        # (block_index_at_time, url)

    # -- block open/close --
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag in ("ul", "ol"):
            self.list_stack.append(tag)
        elif tag == "img":
            src = a.get("src", "")
            if "framerusercontent.com/images" in src:
                url = src.split("?")[0]
                self.blocks.append(("img", url, {}))
        elif tag in BLOCK_TAGS:
            if self.cur and tag == "p" and self.cur[0] == "li":
                return  # p inside li: merge into the li block
            self._open(tag)
        elif tag == "br":
            if self.cur:
                self.cur[1].append(" ")
        elif tag in ("strong", "b"):
            if self.cur:
                self.cur[1].append("**")
                self.inline_stack.append("**")
        elif tag in ("em", "i"):
            if self.cur:
                self.cur[1].append("*")
                self.inline_stack.append("*")
        elif tag == "a":
            self.in_a += 1
            if self.cur:
                self.cur[2].append(a.get("href", ""))

    def handle_endtag(self, tag):
        if tag in ("ul", "ol"):
            if self.list_stack:
                self.list_stack.pop()
        elif tag in ("strong", "b", "em", "i"):
            if self.inline_stack and self.cur:
                self.cur[1].append(self.inline_stack.pop())
        elif tag == "a":
            self.in_a = max(0, self.in_a - 1)
        elif tag in BLOCK_TAGS:
            if self.cur and (self.cur[0] == tag or (tag == "p" and self.cur[0] == "li")):
                if self.cur[0] == tag:
                    self._close()

    def _open(self, tag):
        if self.cur:
            self._close()
        kind = tag
        if tag == "li":
            kind = "li-ol" if (self.list_stack and self.list_stack[-1] == "ol") else "li-ul"
        self.cur = [kind, [], [], 0, 0]

    def _close(self):
        kind, parts, links, linktext, textlen = self.cur
        text = norm("".join(parts))
        # strip empty bold/italic artifacts
        text = re.sub(r"\*\*\s*\*\*", " ", text)
        text = re.sub(r"(?<!\*)\*\s*\*(?!\*)", " ", text)
        text = norm(text)
        if text:
            pure_anchor = links and all(l.startswith("#") for l in links) and linktext >= textlen - 2
            self.blocks.append((kind, text, {"links": links, "pure_anchor": pure_anchor}))
        self.cur = None

    def handle_data(self, data):
        if self.cur is not None:
            self.cur[1].append(data)
            self.cur[4] += len(data.strip())
            if self.in_a:
                self.cur[3] += len(data.strip())


def extract(path, title, chrome_imgs=frozenset()):
    ex = Extractor()
    ex.feed(open(path, encoding="utf-8").read())
    blocks = ex.blocks

    tnorm = norm(title).lower()
    # body headings start at the first h2/h3 — the title/header chrome lives before it
    limit = next((i for i, (k, _, _) in enumerate(blocks) if k in ("h2", "h3")),
                 min(60, len(blocks)))
    # --- body start: after the LAST title-ish block before the first heading
    start = 0
    for i, (k, t, m) in enumerate(blocks[:limit]):
        tl = norm(t).lower()
        if k != "img" and (tl == tnorm or (tnorm in tl and len(tl) <= len(tnorm) + 15)):
            start = i + 1
    # --- body end: first h4 that is a related-article card, or first h5, after start
    end = len(blocks)
    for i in range(start, len(blocks)):
        k, t, m = blocks[i]
        if k == "h5" or (k == "h4" and norm(t) in OLDSITE_TITLES):
            end = i
            break

    body = []
    prev_key = None
    seen_imgs = set()
    for k, t, m in blocks[start:end]:
        if k == "img":
            if t in seen_imgs or t in chrome_imgs:
                continue
            seen_imgs.add(t)
            body.append((k, t, m))
            prev_key = None
            continue
        if is_noise(t) or m.get("pure_anchor"):
            continue
        key = (k, norm(t).lower())
        if key == prev_key:          # framer desktop/mobile duplicate
            continue
        # also drop non-consecutive exact dupes of long text (framer variants split by imgs)
        if len(t) > 60 and any(bk != "img" and norm(bt).lower() == key[1] for bk, bt, _ in body):
            continue
        body.append((k, t, m))
        prev_key = key
    return body


def to_markdown(body, final_slug, title):
    lines = []
    heading = ""
    shot_n = 0
    shots = []
    ol_n = 0
    prev_kind = None
    for k, t, m in body:
        if k != "li-ol":
            ol_n = 0
        if k == "img":
            shot_n += 1
            fname = f"{final_slug}-{shot_n:02d}.png"
            desc = f"{title} — {heading}" if heading else f"{title} — overview"
            desc += " (DeepDOM)"
            lines.append(f"\n[SCREENSHOT: {desc} | {fname}]\n")
            shots.append((fname, t))
        elif k in ("h1", "h2"):
            heading = t
            lines.append(f"\n## {t}\n")
        elif k == "h3":
            heading = t
            lines.append(f"\n### {t}\n")
        elif k == "h4":
            heading = t
            lines.append(f"\n#### {t}\n")
        elif k == "li-ul":
            if prev_kind not in ("li-ul", "li-ol"):
                lines.append("")
            lines.append(f"- {t}")
        elif k == "li-ol":
            ol_n += 1
            if prev_kind not in ("li-ul", "li-ol"):
                lines.append("")
            lines.append(f"{ol_n}. {t}")
        else:  # p
            # a paragraph holding an inline "1. … 2. … 3. …" step run becomes a real list
            if re.match(r"^1\.\s", t) and re.search(r"\s\d{1,2}\.\s+[A-Z(]", t):
                steps = re.split(r"\s(?=\d{1,2}\.\s+[A-Z(])", t)
                if len(steps) >= 2:
                    lines.append("")
                    lines.extend(steps)
                    prev_kind = k
                    continue
            lines.append(f"\n{t}\n")
        prev_kind = k
    md = "\n".join(lines)
    md = re.sub(r"\n{3,}", "\n\n", md).strip() + "\n"
    return md, shots


def first_sentence(body):
    for k, t, m in body:
        if k == "p" and len(t) > 40:
            t = re.sub(r"\*+", "", t)
            s = re.split(r"(?<=[.!?])\s", t)
            out = ""
            for part in s:
                if len(out) + len(part) > 230 and out:
                    break
                out = (out + " " + part).strip()
            return out
    return ""


def keywords_for(title, catkey):
    words = re.sub(r"[^a-z0-9 ]", " ", title.lower()).split()
    base = " ".join(words)
    kws = [base, f"deepdom {base}", "deepdom"]
    catname = CATS[catkey][0].lower()
    if catname not in kws:
        kws.append(catname)
    return kws[:8]


def main():
    raw_dir = sys.argv[1] if len(sys.argv) > 1 else None
    if not raw_dir or not os.path.isdir(raw_dir):
        print("usage: import_deepdom.py <dir with <old-slug>.html files>")
        sys.exit(2)
    os.makedirs(OUT, exist_ok=True)

    # pre-pass: images that appear across many articles are chrome (logo, banners)
    img_articles = {}
    for old, _, _, _ in ARTICLES:
        path = os.path.join(raw_dir, f"{old}.html")
        if not os.path.exists(path):
            continue
        raw = open(path, encoding="utf-8").read()
        for u in set(re.findall(r'src="(https://framerusercontent\.com/images/[^"?]+)', raw)):
            img_articles.setdefault(u, set()).add(old)
    chrome_imgs = frozenset(u for u, arts in img_articles.items() if len(arts) >= 5)
    print(f"chrome images filtered (appear in >=5 articles): {len(chrome_imgs)}")

    img_rows = []
    report = []
    for old, new, title, catkey in ARTICLES:
        path = os.path.join(raw_dir, f"{old}.html")
        if not os.path.exists(path):
            report.append(f"MISSING RAW: {old}")
            continue
        body = extract(path, title, chrome_imgs)
        md, shots = to_markdown(body, new, title)
        desc = first_sentence(body)
        catname, typ, dif = CATS[catkey]
        wc = len(md.split())
        minutes = max(2, round(wc / 200))
        fm = [
            "---",
            f'title: "{title}"',
            f'slug: "{new}"',
            f'category: "{catname}"',
            'subcategory: ""',
            f'type: "{typ}"',
            f'difficulty: "{dif}"',
            f'time: "{minutes} min read"',
            f'description: "{desc.replace(chr(34), chr(39))}"',
            "keywords: [" + ", ".join(f'"{k}"' for k in keywords_for(title, catkey)) + "]",
            "---",
            "",
        ]
        open(os.path.join(OUT, f"{new}.md"), "w", encoding="utf-8").write("\n".join(fm) + md)
        for fname, url in shots:
            img_rows.append((new, fname, url))
        n_h = sum(1 for k, _, _ in body if k in ("h1", "h2", "h3", "h4"))
        report.append(f"{new}: {wc} words, {n_h} headings, {len(shots)} screenshots")

    with open(os.path.join(ROOT, "deepdom-source-images.csv"), "w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["article_slug", "placeholder_file", "original_image_url"])
        w.writerows(img_rows)

    print("\n".join(report))
    print(f"\nwrote {len(ARTICLES)} articles to content-deepdom/, "
          f"{len(img_rows)} screenshot placeholders (deepdom-source-images.csv)")


if __name__ == "__main__":
    main()
