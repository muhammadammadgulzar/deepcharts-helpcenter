#!/usr/bin/env python3
"""One-shot migration: give every [SCREENSHOT: ...] placeholder a unique,
language-aware ID as its filename.

ID scheme:   {kb}-{lang}-{slug}-{NN}.png
             kb   = dc (DeepCharts) | dd (DeepDOM)
             lang = en | it | es | fr | de
             NN   = position of the placeholder within the article (01, 02, …)

e.g.  dc-en-connect-cqg-03.png   dd-en-heatmap-02.png

Also rewrites deepdom-source-images.csv so its placeholder_file column keeps
pointing at the right (renamed) placeholders.

Run once:  python3 scripts/migrate_shot_ids.py
"""
import csv
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SHOT_RE = re.compile(r"^(\[SCREENSHOT:\s*)(.+?)(\s*\|\s*)([\w.\-]+)(\s*\][ \t]*)$", re.M)

DIRS = [("content", "dc", "en"), ("content-deepdom", "dd", "en")]


def main():
    renames = {}   # old filename -> new filename (for the CSV rewrite)
    total = 0
    for d, kb, lang in DIRS:
        full = os.path.join(ROOT, d)
        for fn in sorted(os.listdir(full)):
            if not fn.endswith(".md"):
                continue
            slug = fn[:-3]
            path = os.path.join(full, fn)
            text = open(path, encoding="utf-8").read()
            n = 0

            def sub(m):
                nonlocal n
                n += 1
                new = f"{kb}-{lang}-{slug}-{n:02d}.png"
                old = m.group(4)
                if old != new:
                    renames[old] = new
                return f"{m.group(1)}{m.group(2)}{m.group(3)}{new}{m.group(5)}"

            new_text = SHOT_RE.sub(sub, text)
            if new_text != text:
                open(path, "w", encoding="utf-8").write(new_text)
            total += n

    # rewrite the deepdom source-image mapping to the new IDs
    csv_path = os.path.join(ROOT, "deepdom-source-images.csv")
    if os.path.exists(csv_path):
        rows = list(csv.reader(open(csv_path)))
        out = [rows[0]]
        for slug_col, fname, url in rows[1:]:
            out.append([slug_col, renames.get(fname, fname), url])
        w = csv.writer(open(csv_path, "w", newline=""))
        w.writerows(out)

    print(f"migrated {total} placeholders ({len(renames)} filenames changed)")


if __name__ == "__main__":
    main()
