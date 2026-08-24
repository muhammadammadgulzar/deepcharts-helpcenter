#!/usr/bin/env python3
"""Translation toolkit — the AI assistant translates, this script keeps it honest.

English is the source of truth (content/ + content-deepdom/). Each enabled
language <L> mirrors it in content-<L>/ + content-<L>-deepdom/ with
manifest-<L>.json + manifest-<L>-deepdom.json. A language is "enabled" once
its manifests exist (created by --enable).

TRANSLATIONS ARE WRITTEN BY THE AI ASSISTANT (Claude Code) — there is no
API call in this script. The script provides the deterministic rails:

    --status              staleness report per language (uses source_hash)
    --todo [LANG ...]     work list for the AI: every stale/missing translation
                          with source path -> target path, plus the rules
    --finalize FILE ...   run AFTER the AI wrote/updated translated files:
                          fixes screenshot-ID language tokens and image path
                          depths, validates parity with the English source
                          (screenshot/widget/cross-link counts), stamps
                          ai_translated + source_hash frontmatter, and
                          re-syncs the language manifests. Exits 1 with a
                          reason if a file fails validation.
    --enable LANG         turn a language live: requires EVERY English article
                          to have a finalized translation AND a names file
                          translations/names-<L>.json (see --enable output for
                          its template). Writes the manifests -> the build
                          starts producing site/<L>/…
    --check               exit 1 if any enabled language is stale/missing
                          (for CI or pre-push checks); prints the offenders

Every finalized translation records in its frontmatter:
    ai_translated: true
    source_hash: <sha1 of the English file it was translated from>
so staleness is always machine-checkable — build.py publishes it to
site/assets/shots-status.json for the admin panel.

Screenshots: placeholder/image IDs are language-aware ({kb}-{lang}-{slug}-{NN}).
--finalize swaps the language token automatically, and any English REAL image
whose localized capture doesn't exist yet in assets/img/ becomes a PLACEHOLDER
in the translated article — so the site and the admin coverage report show
exactly which localized screenshots still need capturing.
"""
import argparse
import hashlib
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "assets", "img")
NAMES_DIR = os.path.join(ROOT, "translations")

LANG_NAMES = {"it": "Italian", "es": "Spanish", "fr": "French", "de": "German"}

FM_RE = re.compile(r"^---\s*\n(.*?)\n---\s*\n", re.S)
SHOT_RE = re.compile(r"^\[SCREENSHOT:\s*(.+?)\s*\|\s*([\w.\-]+)\s*\][ \t]*$", re.M)
WIDGET_RE = re.compile(r"^\[WIDGET:\s*([\w\-]+)\s*\][ \t]*$", re.M)
LINK_RE = re.compile(r"\[\[([\w\-]+)(?:\|[^\]]+)?\]\]")
IMG_LINE_RE = re.compile(r"^!\[([^\]]*)\]\(([^)\s]*assets/img/)([\w.\-]+)\)[ \t]*$", re.M)
ID_TOKEN_RE = re.compile(r"^(dc|dd)-(en|it|es|fr|de)-(.+)$")

TRANSLATION_RULES = """Translation rules (the AI translator MUST follow these):
- Translate the natural-language text only. Keep ALL markdown structure identical
  (headings, lists, tables, blockquotes, blank lines).
- Frontmatter: translate ONLY the values of title, description and keywords.
  Keep slug, category, subcategory, type, difficulty, time EXACTLY as-is.
- [[some-slug]] cross-links: keep EXACTLY as-is. [[some-slug|Link text]]:
  translate only the "Link text" part after the |, never the slug.
- [WIDGET: name] lines: keep EXACTLY as-is.
- [SCREENSHOT: description | file-id.png] lines: translate the description, keep
  the "| file-id.png" part as-is (--finalize adjusts the language token itself).
- ![alt](path) image lines: translate the alt text only, keep the path as-is.
- [CONFIRM: ...] flags: keep EXACTLY as-is, untranslated.
- Callout labels "> **Tip:**" / "> **Warning:**" / "> **Note:**" may be localized
  (Tip -> Suggerimento/Consejo/Astuce/Tipp, Warning -> Attenzione/Advertencia/
  Avertissement/Warnung, Note -> Nota/Nota/Remarque/Hinweis); keep the "> **"
  and ":**" markers.
- Text in `backticks`, product names (DeepCharts, DeepDom, DeepDOM), keyboard
  shortcuts and URLs stay untranslated.
- EVERY heading, step and sentence must be translated — never leave a whole line
  in English. Inside a translated sentence keep only the literal on-screen UI
  term (button/menu/window/field name) in English, optionally with the
  translation in parentheses.
- Do NOT add machine_translated/ai_translated/source_hash yourself — --finalize
  stamps them."""


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


def img_prefix_for(tgt_path):
    """Relative prefix from a content dir's articles to the shared site assets/."""
    rel = os.path.relpath(tgt_path, ROOT)
    d = rel.split(os.sep)[0]
    if d == "content":
        return "../"
    if d == "content-deepdom" or re.match(r"^content-(it|es|fr|de)$", d):
        return "../../"
    return "../../../"          # content-<lang>-deepdom


def target_path(en_path, lang):
    rel = os.path.relpath(en_path, ROOT)
    for en_dir, lang_pat, _, _ in en_pairs():
        if rel.startswith(en_dir + os.sep):
            return os.path.join(ROOT, lang_pat.format(L=lang), os.path.basename(rel))
    return None


def source_for(tgt_path):
    """Inverse of target_path: (en_path, lang) for a translated file."""
    rel = os.path.relpath(tgt_path, ROOT).replace(os.sep, "/")
    m = re.match(r"^content-(it|es|fr|de)(-deepdom)?/([\w\-]+\.md)$", rel)
    if not m:
        return None, None
    lang, dd, fn = m.group(1), m.group(2) or "", m.group(3)
    return os.path.join(ROOT, f"content{dd}", fn), lang


def needs_update(en_text, tgt_path):
    if not os.path.exists(tgt_path):
        return True
    m = FM_RE.match(open(tgt_path, encoding="utf-8").read())
    if not m:
        return True
    hm = re.search(r'^source_hash:\s*"?([0-9a-f]+)"?', m.group(1), re.M)
    return not hm or hm.group(1) != sha1(en_text)


def all_en_files():
    out = []
    for en_dir, _, _, _ in en_pairs():
        d = os.path.join(ROOT, en_dir)
        out += [os.path.join(d, f) for f in sorted(os.listdir(d)) if f.endswith(".md")]
    return out


# ── finalize: deterministic fixes + validation of AI-written drafts ──

def finalize_text(draft, en_text, lang, slug, tgt_path):
    """Returns (fixed_text, problems)."""
    problems = []
    t = draft.strip()
    m = FM_RE.match(t)
    if not m:
        return None, ["missing frontmatter"]
    fm = m.group(1)
    fm = re.sub(r'^slug:.*$', f'slug: "{slug}"', fm, flags=re.M)
    fm = re.sub(r'^\s*(machine_translated|ai_translated):.*\n', "", fm, flags=re.M)
    fm = re.sub(r'^\s*source_hash:.*\n', "", fm, flags=re.M)
    fm += f'\nai_translated: true\nsource_hash: "{sha1(en_text)}"'
    body = t[m.end():]

    # swap screenshot-ID language tokens deterministically
    body = SHOT_RE.sub(lambda mm: f"[SCREENSHOT: {mm.group(1)} | {swap_lang_token(mm.group(2), lang)}]", body)

    # real images: swap token and FIX the relative prefix for this article's
    # location; if the localized capture doesn't exist yet, turn the image into
    # a placeholder so coverage tracking sees it
    good_prefix = img_prefix_for(tgt_path) + "assets/img/"
    def img_sub(mm):
        alt, _prefix, fname = mm.groups()
        swapped = swap_lang_token(fname, lang)
        if swapped != fname and not os.path.exists(os.path.join(IMG_DIR, swapped)):
            return f"[SCREENSHOT: {alt} | {swapped}]"
        return f"![{alt}]({good_prefix}{swapped})"
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


def finalize(paths):
    fails = 0
    touched_langs = set()
    for p in paths:
        tgt = p if os.path.isabs(p) else os.path.join(ROOT, p)
        en_path, lang = source_for(tgt)
        if not en_path:
            print(f"SKIP {p}: not a translated content file (content-<lang>[-deepdom]/…)")
            fails += 1
            continue
        if not os.path.exists(en_path):
            print(f"FAIL {p}: no English source {os.path.relpath(en_path, ROOT)} — "
                  f"translated articles must mirror an English one")
            fails += 1
            continue
        if not os.path.exists(tgt):
            print(f"FAIL {p}: file not found")
            fails += 1
            continue
        en_text = open(en_path, encoding="utf-8").read()
        slug = os.path.basename(tgt)[:-3]
        out, problems = finalize_text(open(tgt, encoding="utf-8").read(),
                                      en_text, lang, slug, tgt)
        if out is None or problems:
            print(f"FAIL {p}: {'; '.join(problems)}")
            fails += 1
            continue
        open(tgt, "w", encoding="utf-8").write(out)
        touched_langs.add(lang)
        print(f"OK   {p}")
    for L in touched_langs:
        if L in enabled_langs():
            sync_manifests(L)      # refresh sidebar titles for updated articles
    return fails


# ── manifests ────────────────────────────────────────────────────

NAMES_TEMPLATE = {
    "site": {"name": "<translated site name>", "tagline": "<translated tagline>"},
    "site_deepdom": {"name": "<translated DeepDOM site name>", "tagline": "<translated tagline>"},
    "categories": {"<category-slug>": {"name": "<translated>", "description": "<translated>"}},
    "subcategories": {"<English subcategory name>": "<translated>"},
}


def load_names(lang):
    p = os.path.join(NAMES_DIR, f"names-{lang}.json")
    return json.load(open(p, encoding="utf-8")) if os.path.exists(p) else None


def translated_title(lang_dir, slug, fallback):
    p = os.path.join(ROOT, lang_dir, f"{slug}.md")
    if os.path.exists(p):
        m = FM_RE.match(open(p, encoding="utf-8").read())
        if m:
            tm = re.search(r'^title:\s*"(.*)"\s*$', m.group(1), re.M)
            if tm:
                return tm.group(1)
    return fallback


def sync_manifests(lang):
    names = load_names(lang) or {}
    for idx, (en_dir, lang_dir, en_man, lang_man) in enumerate(en_pairs()):
        en = json.load(open(os.path.join(ROOT, en_man)))
        site_key = "site_deepdom" if idx == 1 else "site"
        site = names.get(site_key) or en["site"]
        out = {"site": site, "categories": []}
        for c in en["categories"]:
            n = names.get("categories", {}).get(c["slug"], {})
            subs_out = []
            for s in c["subcategories"]:
                sname = names.get("subcategories", {}).get(s["name"], s["name"]) if s["name"] else ""
                arts = [{"slug": a["slug"],
                         "title": translated_title(lang_dir.format(L=lang), a["slug"], a["title"])}
                        for a in s["articles"]]
                subs_out.append({"name": sname, "en_name": s["name"], "articles": arts})
            out["categories"].append({"slug": c["slug"],
                                      "name": n.get("name", c["name"]), "icon": c["icon"],
                                      "description": n.get("description", c["description"]),
                                      "subcategories": subs_out})
        json.dump(out, open(os.path.join(ROOT, lang_man.format(L=lang)), "w", encoding="utf-8"),
                  indent=2, ensure_ascii=False)
        print(f"wrote {lang_man.format(L=lang)}")


# ── modes ────────────────────────────────────────────────────────

def stale_report(langs):
    """{lang: {"stale": [en_paths], "missing": [en_paths], "ok": n}}"""
    rep = {}
    for L in langs:
        stale, missing, ok = [], [], 0
        for f in all_en_files():
            tgt = target_path(f, L)
            if not os.path.exists(tgt):
                missing.append(f)
            elif needs_update(open(f, encoding="utf-8").read(), tgt):
                stale.append(f)
            else:
                ok += 1
        rep[L] = {"stale": stale, "missing": missing, "ok": ok}
    return rep


def cmd_status(check=False):
    langs = enabled_langs()
    if not langs:
        print("no languages enabled yet (use --todo/--enable to bootstrap one).")
        return 0
    rep = stale_report(langs)
    bad = 0
    for L, r in rep.items():
        print(f"[{L}] up-to-date: {r['ok']} | stale: {len(r['stale'])} | missing: {len(r['missing'])}")
        bad += len(r["stale"]) + len(r["missing"])
    if check and bad:
        print(f"\nCHECK FAILED: {bad} translation(s) out of sync — run --todo and translate them.")
        return 1
    return 0


def cmd_todo(langs):
    langs = langs or enabled_langs() or list(LANG_NAMES)
    rep = stale_report(langs)
    total = 0
    print(TRANSLATION_RULES)
    print("\nWork list (translate each source into its target path, then run "
          "`python3 scripts/translate_sync.py --finalize <target files>`):\n")
    for L, r in rep.items():
        items = [("MISSING", f) for f in r["missing"]] + [("STALE", f) for f in r["stale"]]
        if not items:
            print(f"[{L}] nothing to do")
            continue
        for kind, f in items:
            total += 1
            print(f"[{L}] {kind:7s} {os.path.relpath(f, ROOT)}  ->  "
                  f"{os.path.relpath(target_path(f, L), ROOT)}")
    print(f"\ntotal: {total} translation(s) needed")
    return 0


def cmd_enable(lang):
    rep = stale_report([lang])[lang]
    missing_or_stale = rep["missing"] + rep["stale"]
    problems = []
    if missing_or_stale:
        problems.append(f"{len(missing_or_stale)} article(s) not translated/finalized yet "
                        f"(first: {os.path.relpath(missing_or_stale[0], ROOT)}) — run --todo {lang}")
    if not load_names(lang):
        os.makedirs(NAMES_DIR, exist_ok=True)
        tpl = os.path.join(NAMES_DIR, f"names-{lang}.json.template")
        json.dump(NAMES_TEMPLATE, open(tpl, "w", encoding="utf-8"), indent=2, ensure_ascii=False)
        problems.append(f"translations/names-{lang}.json missing — translate the category/site "
                        f"names into it (template written to {os.path.relpath(tpl, ROOT)}; the "
                        f"real category slugs are in manifest.json)")
    if problems:
        print(f"language '{lang}' NOT enabled:")
        for p in problems:
            print(" -", p)
        return 1
    sync_manifests(lang)
    print(f"language '{lang}' ENABLED — next build produces site/{lang}/…")
    return 0


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--status", action="store_true")
    ap.add_argument("--check", action="store_true")
    ap.add_argument("--todo", nargs="*", metavar="LANG")
    ap.add_argument("--finalize", nargs="+", metavar="FILE")
    ap.add_argument("--enable", metavar="LANG", choices=list(LANG_NAMES))
    a = ap.parse_args()

    if a.finalize:
        sys.exit(1 if finalize(a.finalize) else 0)
    if a.enable:
        sys.exit(cmd_enable(a.enable))
    if a.todo is not None:
        sys.exit(cmd_todo(a.todo))
    if a.check:
        sys.exit(cmd_status(check=True))
    sys.exit(cmd_status())


if __name__ == "__main__":
    main()
