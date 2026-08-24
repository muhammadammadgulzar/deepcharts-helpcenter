# DeepCharts + DeepDOM Help Center

A complete, self-contained static help center holding **two knowledge bases**:
**DeepCharts (173 articles, 10 categories)** and **DeepDOM (39 articles, 6 categories)** —
sidebar navigation, per-KB client-side search, a KB switcher in the header, per-article
tables of contents, next/previous navigation, difficulty/time badges, callouts, cross-links,
**a downloadable PDF for every article**, and detailed screenshot placeholders ready for capture.

## URLs & deployment

| What | Where |
|---|---|
| **LIVE** (from `main`) | https://muhammadammadgulzar.github.io/deepcharts-helpcenter/ |
| **TEST** (from `test`) | https://muhammadammadgulzar.github.io/deepcharts-helpcenter/test/ |
| DeepDOM KB | append `deepdom/` to either URL |

Pushing to `main` or `test` triggers `.github/workflows/deploy.yml`, which builds the site
and publishes to the `gh-pages` branch (root = live, `/test/` = preview). `site/` is
**generated and gitignored** — nobody commits it.

Team workflow: see **TEAM-SETUP.md** (humans) and **CLAUDE.md** (AI assistants).
Teammates work on `test`; the owner approves changes in the admin panel, which merges
`test → main` and goes live automatically.

## Preview locally

```bash
pip3 install -r requirements.txt
python3 build.py
cd site && python3 -m http.server 8080     # then open http://localhost:8080
```

## Folder map

| Path | What it is |
|---|---|
| `content/*.md` | **DeepCharts source of truth** — one markdown file per article with frontmatter |
| `content-deepdom/*.md` | **DeepDOM source of truth** — same format |
| `manifest.json` / `manifest-deepdom.json` | Category tree + article order per KB |
| `build.py` | Static-site generator: both KBs → HTML + PDFs + search indexes + screenshots manifest |
| `site/` | The generated site (gitignored; article/, category/, pdf/, deepdom/, assets/) |
| `screenshots-needed.md` | Every screenshot placeholder (both KBs) with capture instructions |
| `deepdom-source-images.csv` | Maps each DeepDOM placeholder to its original image on the old site |
| `assets/` | Source CSS/JS copied into the site at build time (`assets/img/` for real screenshots) |
| `scripts/import_deepdom.py` | One-shot importer that scraped the old DeepDOM KB into `content-deepdom/` |
| `.github/workflows/deploy.yml` | CI: build + deploy `main` → live root, `test` → `/test/` |
| `_build/` | Writer spec + batch files used during generation (keep for reference) |

## Editing workflow

1. Edit or add articles in `content/` or `content-deepdom/` (follow `_build/WRITER-SPEC.md`).
2. If you add an article, also add its slug to the matching manifest in the right category
   (that sets its position in the sidebar and the next/prev order).
3. Rebuild: `python3 build.py` (needs `pip3 install -r requirements.txt`, or the bot
   project's venv: `source ~/Desktop/ai-support-system/venv/bin/activate`).
4. The build validates everything: missing files, broken `[[links]]`, PDF failures.

## Screenshots — unique IDs & bulk apply

Every placeholder has a **unique ID** shown on the page and in `screenshots-needed.md`:
`{kb}-{lang}-{article-slug}-{NN}` (kb: dc/dd, lang: en/it/es/fr/de) — e.g. `dc-en-connect-cqg-03`.
The build FAILS on malformed or duplicate IDs, so they stay reliable.

Capture pass: save every capture named exactly by its ID (`dd-en-heatmap-01.png`) into one
folder, then run:

```bash
python3 scripts/apply_screenshots.py <folder> --build
```

It copies the images into `assets/img/` and replaces every matching placeholder in the
content automatically. For DeepDOM articles, `deepdom-source-images.csv` links each ID to
the original old-site image. `site/assets/shots-status.json` (rebuilt every build) feeds the
admin panel's screenshot-coverage view.

## Languages

English is the source of truth. The header has a language dropdown (Italiano, Español,
Français, Deutsch — BETA). A language goes live once bootstrapped:

```bash
OPENAI_API_KEY=... python3 scripts/translate_sync.py --init it
```

That creates `manifest-it(.deepdom).json` + `content-it(/-deepdom)/` with translated
articles (marked `machine_translated: true`) and the site builds `site/it/…` automatically.
From then on, `.github/workflows/translate.yml` re-translates any English article the team
changes on `test` (needs the repo secret `OPENAI_API_KEY`). Screenshot IDs are per-language
(`dc-it-…`), and a language's article shows a placeholder until its localized capture is
added — so the coverage report tracks every language separately.
`python3 scripts/translate_sync.py --status` shows staleness without API calls.

## Things awaiting confirmation

Writers were forbidden from inventing facts. Anywhere a fact was unknown or is still an open
owner question (the P-rows in the bot repo's `docs/ui-maps-owner-answers-needed.csv`), the text
is hedged or carries a visible yellow `[CONFIRM: ...]` flag. Search the content folder with
`grep -rn "CONFIRM:" content/` to get the full list before publishing.
