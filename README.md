# DeepCharts Help Center — Rebuilt

A complete, self-contained static rebuild of the DeepCharts help center: **173 articles** in
**10 categories**, with sidebar navigation, client-side search, per-article table of contents,
next/previous navigation, difficulty/time badges, callouts, cross-links, **a downloadable PDF for
every article**, and **502 detailed screenshot placeholders** ready for capture.

## Open it

Open `site/index.html` in a browser, or serve it (search works either way):

```bash
cd site && python3 -m http.server 8080     # then open http://localhost:8080
```

The `site/` folder is plain HTML/CSS/JS — host it anywhere (any static host, or port the
content into Framer/your CMS later; `content/*.md` is the canonical source).

## Folder map

| Path | What it is |
|---|---|
| `content/*.md` | **The source of truth** — one markdown file per article with frontmatter |
| `manifest.json` | Category tree + article order (drives navigation and next/prev) |
| `build.py` | Static-site generator: HTML + per-article PDFs + search index + screenshots manifest |
| `site/` | The generated site (article/, category/, pdf/, assets/) |
| `screenshots-needed.md` | Every screenshot placeholder with its article, filename and capture instructions |
| `assets/` | Source CSS/JS copied into the site at build time |
| `_build/` | Writer spec + batch files used during generation (keep for reference) |

## Editing workflow

1. Edit or add articles in `content/` (follow `_build/WRITER-SPEC.md` for the format).
2. If you add an article, also add its slug to `manifest.json` in the right category (that sets
   its position in the sidebar and the next/prev order).
3. Rebuild: `python3 build.py` (needs `pyyaml`, `markdown-it-py`, `reportlab` — all in the
   bot project's venv: `source ~/Desktop/ai-support-system/venv/bin/activate`).
4. The build validates everything: missing files, broken `[[links]]`, PDF failures.

## Adding the real screenshots

1. Work through `screenshots-needed.md` — each entry says exactly what to capture and the filename.
2. Save captures to `site/assets/img/<filename>` (create the folder).
3. In the matching `content/<slug>.md`, replace the `[SCREENSHOT: ... | filename.png]` line with
   `![alt text](../assets/img/filename.png)` and rebuild.

## Things awaiting confirmation

Writers were forbidden from inventing facts. Anywhere a fact was unknown or is still an open
owner question (the P-rows in the bot repo's `docs/ui-maps-owner-answers-needed.csv`), the text
is hedged or carries a visible yellow `[CONFIRM: ...]` flag. Search the content folder with
`grep -rn "CONFIRM:" content/` to get the full list before publishing.
