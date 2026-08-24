#!/usr/bin/env python3
"""Bulk-apply captured screenshots by ID.

Capture workflow: every placeholder on the site shows its unique ID
({kb}-{lang}-{slug}-{NN}). Save each capture into ONE folder, named exactly
by its ID (extension png/jpg/jpeg/webp), then run:

    python3 scripts/apply_screenshots.py <folder> [--build]

For every image found it:
  1. copies the file into assets/img/
  2. replaces the matching [SCREENSHOT: desc | id.png] line in the right
     content file with a real markdown image (correct relative path for
     that language/KB)
If a placeholder was already replaced earlier, the image file is just
refreshed. Unmatched files and still-missing placeholders are reported.

--build runs python3 build.py afterwards.
"""
import os
import re
import shutil
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "assets", "img")
SHOT_RE = re.compile(r"^\[SCREENSHOT:\s*(.+?)\s*\|\s*([\w.\-]+)\s*\][ \t]*$", re.M)
ID_RE = re.compile(r"^(dc|dd)-(en|it|es|fr|de)-([a-z0-9][a-z0-9\-]*)-(\d{2})$")
EXTS = (".png", ".jpg", ".jpeg", ".webp")


def content_dirs():
    """Every content dir with its site depth to the shared assets/ folder."""
    out = []
    for d in sorted(os.listdir(ROOT)):
        if d == "content":
            out.append((d, "../"))                       # site/article/x.html
        elif re.match(r"^content-deepdom$", d):
            out.append((d, "../../"))                    # site/deepdom/article/x.html
        elif re.match(r"^content-(it|es|fr|de)$", d):
            out.append((d, "../../"))                    # site/<lang>/article/x.html
        elif re.match(r"^content-(it|es|fr|de)-deepdom$", d):
            out.append((d, "../../../"))                 # site/<lang>/deepdom/article/x.html
    return out


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    do_build = "--build" in sys.argv
    if len(args) != 1 or not os.path.isdir(args[0]):
        print(__doc__)
        sys.exit(2)
    folder = args[0]

    # index every placeholder + already-inserted image across all content
    placeholder_at = {}   # id -> (content_dir, slug, rel_prefix)
    inserted = {}         # id -> (content_dir, slug, current_filename)
    for cdir, rel in content_dirs():
        full = os.path.join(ROOT, cdir)
        if not os.path.isdir(full):
            continue
        for fn in os.listdir(full):
            if not fn.endswith(".md"):
                continue
            text = open(os.path.join(full, fn), encoding="utf-8").read()
            for _, fname in SHOT_RE.findall(text):
                placeholder_at[fname.rsplit(".", 1)[0]] = (cdir, fn[:-3], rel)
            for m in re.finditer(r"!\[[^\]]*\]\([^)\s]*assets/img/([^)\s]+)\)", text):
                f2 = m.group(1)
                inserted[f2.rsplit(".", 1)[0]] = (cdir, fn[:-3], f2)

    os.makedirs(IMG_DIR, exist_ok=True)
    applied, refreshed, unmatched, badname = [], [], [], []

    for f in sorted(os.listdir(folder)):
        base, ext = os.path.splitext(f)
        if ext.lower() not in EXTS:
            continue
        if not ID_RE.match(base):
            badname.append(f)
            continue
        src = os.path.join(folder, f)
        dst_name = base + ext.lower()
        if base in placeholder_at:
            cdir, slug, rel = placeholder_at[base]
            path = os.path.join(ROOT, cdir, f"{slug}.md")
            text = open(path, encoding="utf-8").read()

            def sub(m):
                desc, fname = m.group(1), m.group(2)
                if fname.rsplit(".", 1)[0] != base:
                    return m.group(0)
                return f"![{desc}]({rel}assets/img/{dst_name})"
            new = SHOT_RE.sub(sub, text)
            open(path, "w", encoding="utf-8").write(new)
            shutil.copy2(src, os.path.join(IMG_DIR, dst_name))
            applied.append((base, f"{cdir}/{slug}.md"))
        elif base in inserted:
            cdir, slug, old_name = inserted[base]
            shutil.copy2(src, os.path.join(IMG_DIR, dst_name))
            if old_name != dst_name:
                # re-capture with a different extension: update the article's
                # image reference and drop the stale file
                path = os.path.join(ROOT, cdir, f"{slug}.md")
                text = open(path, encoding="utf-8").read()
                open(path, "w", encoding="utf-8").write(
                    text.replace(f"assets/img/{old_name}", f"assets/img/{dst_name}"))
                old_path = os.path.join(IMG_DIR, old_name)
                if os.path.exists(old_path):
                    os.remove(old_path)
            refreshed.append(base)
        else:
            unmatched.append(f)

    print(f"applied:   {len(applied)} placeholders replaced with real images")
    for b, p in applied[:30]:
        print(f"   {b}  ->  {p}")
    if len(applied) > 30:
        print(f"   … and {len(applied) - 30} more")
    if refreshed:
        print(f"refreshed: {len(refreshed)} images updated (placeholder already replaced before)")
    if badname:
        print(f"BAD NAMES (not an ID — must be kb-lang-slug-NN.ext): {', '.join(badname)}")
    if unmatched:
        print(f"UNMATCHED (no placeholder or image with this ID): {', '.join(unmatched)}")

    remaining = len(placeholder_at) - len(applied)
    print(f"placeholders still remaining across all languages/KBs: {remaining}")

    if do_build and (applied or refreshed):
        print("\nrebuilding site…")
        subprocess.run([sys.executable, os.path.join(ROOT, "build.py")], check=False)


if __name__ == "__main__":
    main()
