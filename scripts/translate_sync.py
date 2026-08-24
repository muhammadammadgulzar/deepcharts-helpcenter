#!/usr/bin/env python3
"""Translation sync — keeps the non-English help centers in step with English.

English is the source of truth (content/ + content-deepdom/). Each enabled
language <L> mirrors it in content-<L>/ + content-<L>-deepdom/ with
manifest-<L>.json + manifest-<L>-deepdom.json. A language is "enabled" once
its manifests exist (created by --init).

Every translated article records in its frontmatter:
    machine_translated: true
    source_hash: <sha1 of the English file it was translated from>
so the sync knows exactly which translations are stale.

Usage:
    python3 scripts/translate_sync.py --files content/rsi.md content-deepdom/heatmap.md
        translate the given ENGLISH files into every enabled language
        (skips languages whose translation is already up to date)
    python3 scripts/translate_sync.py --all [--force]
        sync every English article into every enabled language
    python3 scripts/translate_sync.py --init it
        bootstrap a language: translate BOTH manifests + ALL articles
    python3 scripts/translate_sync.py --status
        report staleness per language (no API calls)

Screenshots: placeholder/image IDs are language-aware ({kb}-{lang}-{slug}-{NN}).
The sync swaps the language token automatically, and any English REAL image
whose localized capture doesn't exist yet in assets/img/ becomes a PLACEHOLDER
in the translated article — so the site and the admin coverage report show
exactly which localized screenshots still need capturing.

Env: OPENAI_API_KEY (required for translating), OPENAI_TRANSLATE_MODEL
(default gpt-4o). Exits 0 with a notice when there is nothing to do.
"""
import argparse
import hashlib
import json
import os
import re
import sys
from concurrent.futures import ThreadPoolExecutor

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "assets", "img")

LANG_NAMES = {"it": "Italian", "es": "Spanish", "fr": "French", "de": "German"}
MODEL = os.getenv("OPENAI_TRANSLATE_MODEL", "gpt-4o")

FM_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.S)
SHOT_RE = re.compile(r"^\[SCREENSHOT:\s*(.+?)\s*\|\s*([\w.\-]+)\s*\][ \t]*$", re.M)
WIDGET_RE = re.compile(r"^\[WIDGET:\s*([\w\-]+)\s*\][ \t]*$", re.M)
LINK_RE = re.compile(r"\[\[([\w\-]+)(?:\|[^\]]+)?\]\]")
IMG_LINE_RE = re.compile(r"^!\[([^\]]*)\]\(([^)\s]*assets/img/)([\w.\-]+)\)[ \t]*$", re.M)
ID_TOKEN_RE = re.compile(r"^(dc|dd)-(en|it|es|fr|de)-(.+)$")


def en_pairs():
    """(en_dir, lang_dir_pattern, en_manifest, lang_manifest_pattern)"""
    return [("content", "content-{L}", "manifest.json", "manifest-{L}.json"),
            ("content-deepdom", "content-{L}-deepdom", "manifest-deepdom.json", "manifest-{L}-deepdom.json")]


def enabled_langs():
    out = []
    for L in LANG_NAMES:
        if all(os.path.exists(os.path.join(ROOT, mp.format(L=L))) for _, _, _, mp in en_pairs()):
            out.append(L)
    return out


def sha1(text):
    return hashlib.sha1(text.encode("utf-8")).hexdigest()[:16]


def swap_lang_token(fname, lang):
    m = ID_TOKEN_RE.match(fname)
    return f"{m.group(1)}-{lang}-{m.group(3)}" if m else fname


# ── OpenAI ────────────────────────────────────────────────────────

_client = None

def client():
    global _client
    if _client is None:
        if not os.getenv("OPENAI_API_KEY"):
            print("OPENAI_API_KEY not set — nothing translated.")
            sys.exit(0)
        from openai import OpenAI
        _client = OpenAI()
    return _client


def llm(prompt, max_tokens=8000):
    resp = client().chat.completions.create(
        model=MODEL, temperature=0.2, max_tokens=max_tokens,
        messages=[{"role": "user", "content": prompt}])
    return (resp.choices[0].message.content or "").strip()


TRANSLATE_RULES = """Rules — follow them EXACTLY:
- Translate the natural-language text only. Keep ALL markdown structure identical
  (headings, lists, tables, blockquotes, blank lines).
- Frontmatter (the --- block): translate ONLY the values of title, description and
  keywords. Keep slug, category, subcategory, type, difficulty, time EXACTLY as-is.
- [[some-slug]] cross-links: keep EXACTLY as-is. [[some-slug|Link text]]: translate
  only the "Link text" part after the |, never the slug.
- [WIDGET: name] lines: keep EXACTLY as-is.
- [SCREENSHOT: description | file-id.png] lines: translate the description, keep the
  "| file-id.png" part EXACTLY as-is (I will adjust the filename myself).
- ![alt](path) image lines: translate the alt text only, keep the path EXACTLY as-is.
- [CONFIRM: ...] flags: keep EXACTLY as-is, untranslated.
- Callout labels: "> **Tip:**", "> **Warning:**", "> **Note:**" — you may localize the
  label word ONLY to: Tip→{tip}, Warning→{warn}, Note→{note}; keep the "> **" and ":**".
- Text in `backticks`, product names (DeepCharts, DeepDom, DeepDOM), keyboard
  shortcuts and URLs stay untranslated.
- EVERY heading, step and sentence MUST be translated — never leave a whole line in
  English. Inside a translated sentence, keep only the exact on-screen UI term
  (button/menu/window/field name, e.g. "Show Orders", "Options > Settings") in
  English, optionally adding the translation in parentheses. Example:
  "Click on the Trading menu" → "Fai clic sul menu Trading" (structure translated,
  only the literal menu name kept).
Return ONLY the complete translated file, no commentary, no code fences."""

CALLOUT_WORDS = {"it": ("Suggerimento", "Attenzione", "Nota"),
                 "es": ("Consejo", "Advertencia", "Nota"),
                 "fr": ("Astuce", "Avertissement", "Remarque"),
                 "de": ("Tipp", "Warnung", "Hinweis")}


def translate_file(en_text, lang):
    tip, warn, note = CALLOUT_WORDS[lang]
    rules = TRANSLATE_RULES.format(tip=tip, warn=warn, note=note)
    prompt = (f"Translate this help-center article from English to {LANG_NAMES[lang]}.\n"
              f"{rules}\n\n----- FILE START -----\n{en_text}\n----- FILE END -----")
    return llm(prompt, max_tokens=max(2000, int(len(en_text) / 2)))


# ── post-processing / validation ─────────────────────────────────

def postprocess(translated, en_text, lang, slug):
    """Deterministic fixes + parity checks. Returns (text, problems)."""
    problems = []
    t = translated.strip()
    if t.startswith("```"):
        t = re.sub(r"^```[a-z]*\n", "", t)
        t = re.sub(r"\n```$", "", t)

    # force slug + translation bookkeeping in frontmatter
    m = FM_RE.match(t)
    if not m:
        return None, ["missing frontmatter in translation"]
    fm = m.group(1)
    fm = re.sub(r'^slug:.*$', f'slug: "{slug}"', fm, flags=re.M)
    fm = re.sub(r'^\s*machine_translated:.*\n', "", fm, flags=re.M)
    fm = re.sub(r'^\s*source_hash:.*\n', "", fm, flags=re.M)
    fm += f'\nmachine_translated: true\nsource_hash: "{sha1(en_text)}"'
    body = t[m.end():]

    # swap screenshot-ID language tokens deterministically
    body = SHOT_RE.sub(lambda mm: f"[SCREENSHOT: {mm.group(1)} | {swap_lang_token(mm.group(2), lang)}]", body)

    # localized real images: swap token; if the localized capture doesn't exist
    # yet, turn the image back into a placeholder so coverage tracking sees it
    def img_sub(mm):
        alt, prefix, fname = mm.groups()
        swapped = swap_lang_token(fname, lang)
        if swapped != fname and not os.path.exists(os.path.join(IMG_DIR, swapped)):
            return f"[SCREENSHOT: {alt} | {swapped}]"
        return f"![{alt}]({prefix}{swapped})"
    body = IMG_LINE_RE.sub(img_sub, body)

    out = f"---\n{fm}\n---\n{body}"

    # parity checks against the English source
    en_body = en_text[FM_RE.match(en_text).end():]
    en_shots = len(SHOT_RE.findall(en_body)) + len(IMG_LINE_RE.findall(en_body))
    tr_shots = len(SHOT_RE.findall(body)) + len(IMG_LINE_RE.findall(body))
    if en_shots != tr_shots:
        problems.append(f"screenshot count mismatch (en {en_shots} vs {tr_shots})")
    if sorted(WIDGET_RE.findall(en_body)) != sorted(WIDGET_RE.findall(body)):
        problems.append("widget lines mismatch")
    if set(LINK_RE.findall(en_body)) != set(LINK_RE.findall(body)):
        problems.append("[[cross-link]] targets mismatch")
    return out, problems


def target_path(en_path, lang):
    rel = os.path.relpath(en_path, ROOT)
    for en_dir, lang_pat, _, _ in en_pairs():
        if rel.startswith(en_dir + os.sep):
            return os.path.join(ROOT, lang_pat.format(L=lang), os.path.basename(rel))
    return None


def needs_update(en_text, tgt_path, force):
    if force or not os.path.exists(tgt_path):
        return True
    m = FM_RE.match(open(tgt_path, encoding="utf-8").read())
    if not m:
        return True
    hm = re.search(r'^source_hash:\s*"?([0-9a-f]+)"?', m.group(1), re.M)
    return not hm or hm.group(1) != sha1(en_text)


def sync_one(en_path, lang, force=False):
    """Translate one English file into one language. Returns status string."""
    slug = os.path.basename(en_path)[:-3]
    tgt = target_path(en_path, lang)
    if tgt is None:
        return f"skip {en_path} (not an English content file)"
    en_text = open(en_path, encoding="utf-8").read()
    if not needs_update(en_text, tgt, force):
        return f"ok   [{lang}] {slug} (up to date)"
    for attempt in (1, 2):
        out, problems = postprocess(translate_file(en_text, lang), en_text, lang, slug)
        if out and not problems:
            os.makedirs(os.path.dirname(tgt), exist_ok=True)
            open(tgt, "w", encoding="utf-8").write(out)
            return f"DONE [{lang}] {slug}"
        if attempt == 2:
            return f"FAIL [{lang}] {slug}: {'; '.join(problems or ['no output'])}"
    return f"FAIL [{lang}] {slug}"


# ── manifests ────────────────────────────────────────────────────

def translated_title(lang_dir, slug, fallback):
    p = os.path.join(ROOT, lang_dir, f"{slug}.md")
    if os.path.exists(p):
        m = FM_RE.match(open(p, encoding="utf-8").read())
        if m:
            tm = re.search(r'^title:\s*"(.*)"\s*$', m.group(1), re.M)
            if tm:
                return tm.group(1)
    return fallback


def sync_manifest(lang, en_manifest, lang_manifest, lang_dir, translate_names=False):
    """Mirror the English manifest structure with translated titles/names."""
    en = json.load(open(os.path.join(ROOT, en_manifest)))
    tgt_path = os.path.join(ROOT, lang_manifest.format(L=lang))
    old = json.load(open(tgt_path)) if os.path.exists(tgt_path) else None

    def old_cat(slug_):
        if old:
            for c in old["categories"]:
                if c["slug"] == slug_:
                    return c
        return None

    if translate_names or not old:
        names = {"site": en["site"],
                 "cats": [{"slug": c["slug"], "name": c["name"], "description": c["description"],
                           "subs": [s["name"] for s in c["subcategories"] if s["name"]]}
                          for c in en["categories"]]}
        raw = llm(f"Translate every 'name', 'tagline' and 'description' value in this JSON to "
                  f"{LANG_NAMES[lang]}. Keep 'slug' values and the JSON structure EXACTLY. "
                  f"Keep product names (DeepCharts, DeepDOM) untranslated. Return ONLY the JSON.\n\n"
                  + json.dumps(names, ensure_ascii=False), max_tokens=4000)
        raw = re.sub(r"^```[a-z]*\n|\n```$", "", raw.strip())
        tr = json.loads(raw)
        tr_cats = {c["slug"]: c for c in tr["cats"]}
        tr_subs = {c["slug"]: dict(zip([s["name"] for s in next(ec for ec in en["categories"] if ec["slug"] == c["slug"])["subcategories"] if s["name"]],
                                       c.get("subs", []))) for c in tr["cats"]}
        site = tr["site"]
    else:
        tr_cats, tr_subs, site = {}, {}, old["site"]

    out = {"site": site, "categories": []}
    for c in en["categories"]:
        oc = old_cat(c["slug"])
        tc = tr_cats.get(c["slug"], {})
        name = tc.get("name") or (oc["name"] if oc else c["name"])
        desc = tc.get("description") or (oc["description"] if oc else c["description"])
        subs_out = []
        old_sub_names = {}
        if oc:
            en_c = next(ec for ec in en["categories"] if ec["slug"] == c["slug"])
            for es_, os_ in zip(en_c["subcategories"], oc["subcategories"]):
                old_sub_names[es_["name"]] = os_["name"]
        for s in c["subcategories"]:
            sname = tr_subs.get(c["slug"], {}).get(s["name"]) or old_sub_names.get(s["name"], s["name"])
            arts = [{"slug": a["slug"],
                     "title": translated_title(lang_dir.format(L=lang), a["slug"], a["title"])}
                    for a in s["articles"]]
            subs_out.append({"name": sname if s["name"] else "", "articles": arts})
        out["categories"].append({"slug": c["slug"], "name": name, "icon": c["icon"],
                                  "description": desc, "subcategories": subs_out})
    json.dump(out, open(tgt_path, "w", encoding="utf-8"), indent=2, ensure_ascii=False)
    print(f"wrote {os.path.basename(tgt_path)}")


def sync_manifests(lang, translate_names=False):
    for en_dir, lang_dir, en_man, lang_man in en_pairs():
        sync_manifest(lang, en_man, lang_man, lang_dir, translate_names)


# ── modes ────────────────────────────────────────────────────────

def all_en_files():
    out = []
    for en_dir, _, _, _ in en_pairs():
        d = os.path.join(ROOT, en_dir)
        out += [os.path.join(d, f) for f in sorted(os.listdir(d)) if f.endswith(".md")]
    return out


def run_sync(files, langs, force=False):
    jobs = [(f, L) for f in files for L in langs]
    if not jobs:
        print("nothing to translate.")
        return 0
    fails = 0
    with ThreadPoolExecutor(max_workers=4) as ex:
        for res in ex.map(lambda j: sync_one(j[0], j[1], force), jobs):
            print(res)
            if res.startswith("FAIL"):
                fails += 1
    for L in langs:
        sync_manifests(L)          # refresh titles/structure after translations
    return fails


def status():
    langs = enabled_langs()
    if not langs:
        print("no languages enabled yet (run --init <lang> first).")
        return
    for L in langs:
        stale = missing = ok = 0
        for f in all_en_files():
            tgt = target_path(f, L)
            if not os.path.exists(tgt):
                missing += 1
            elif needs_update(open(f, encoding="utf-8").read(), tgt, False):
                stale += 1
            else:
                ok += 1
        print(f"[{L}] up-to-date: {ok} | stale: {stale} | missing: {missing}")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--files", nargs="*", help="English content files that changed")
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--init", metavar="LANG", choices=list(LANG_NAMES))
    ap.add_argument("--langs", nargs="*", choices=list(LANG_NAMES))
    ap.add_argument("--force", action="store_true")
    ap.add_argument("--status", action="store_true")
    a = ap.parse_args()

    if a.status:
        return status()

    if a.init:
        L = a.init
        print(f"bootstrapping {LANG_NAMES[L]}…")
        sync_manifests(L, translate_names=True)      # creates manifests -> enables lang
        fails = run_sync(all_en_files(), [L], force=True)
        sys.exit(1 if fails else 0)

    langs = a.langs or enabled_langs()
    if not langs:
        print("no languages enabled yet — nothing to do. (bootstrap with --init <lang>)")
        return
    if a.all:
        files = all_en_files()
    else:
        files = []
        for f in a.files or []:
            p = os.path.join(ROOT, f) if not os.path.isabs(f) else f
            if os.path.exists(p) and p.endswith(".md") and target_path(p, langs[0]):
                files.append(p)
        # manifest-only changes still need the structure mirrored
        if not files and any((a.files or [])):
            for L in langs:
                sync_manifests(L)
            return
    fails = run_sync(files, langs, a.force)
    sys.exit(1 if fails else 0)


if __name__ == "__main__":
    main()
