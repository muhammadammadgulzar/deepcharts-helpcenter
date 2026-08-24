# DeepCharts + DeepDOM Help Center — AI Context File

Read this fully before changing anything. This file is the contract for EVERY
AI assistant working in this repo (the owner's and every teammate's).

## What this is

A static help-center site holding TWO knowledge bases, built by `build.py`:

| KB | Sources | Output |
|---|---|---|
| DeepCharts (173 articles) | `manifest.json` + `content/*.md` | `site/` root |
| DeepDOM (39 articles) | `manifest-deepdom.json` + `content-deepdom/*.md` | `site/deepdom/` |

`site/` is **generated and gitignored** — never hand-edit it, never commit it.
GitHub Actions builds and deploys it (`.github/workflows/deploy.yml`).

## Branch rules — CRITICAL

| Branch | Role | Who pushes |
|---|---|---|
| `main` | **LIVE site** (deploys to the public URL) | Owner only, or via admin-panel "Approve & Publish" (merges test → main) |
| `test` | **Team workspace** (deploys to the /test/ preview URL) | Everyone — all day-to-day work happens here |
| `gh-pages` | Deploy target, written by CI only | Nobody. Never touch it. |

- **Teammates: work ONLY on `test`. Never push to `main`, ever.** Publishing to
  live happens exclusively through the owner's approval in the admin panel.
- Always `git pull` before starting work — someone else may have pushed.
- If a push is rejected (non-fast-forward), `git pull --rebase` then push again.
- One commit per finished article/fix, with a clear message saying what changed
  and why — the AI change summary the owner reviews is generated from these diffs,
  so descriptive commits help.

## Editing workflow

1. Edit or add articles in `content/` (DeepCharts) or `content-deepdom/` (DeepDOM).
   Follow `_build/WRITER-SPEC.md`: frontmatter (title, slug, category, type,
   difficulty, time, description, keywords), `[SCREENSHOT: desc | file.png]`
   placeholders, `[WIDGET: name]` live widgets, `[[slug]]` cross-links,
   `> **Tip:** / **Warning:** / **Note:**` callouts.
2. New article? Also add its slug to the right category in `manifest.json` /
   `manifest-deepdom.json` (that sets sidebar position and next/prev order).
3. Rebuild and preview locally:
   ```
   pip install -r requirements.txt      # first time only
   python3 build.py
   cd site && python3 -m http.server 8080
   ```
   The build validates everything — missing files, broken `[[links]]`, unknown
   widgets, PDF failures. **Never push if `build.py` exits non-zero.**
4. Commit to `test`, push. The Action deploys the preview URL (~2 min).

## Content rules

- **Never invent product facts.** If you don't know how a feature behaves, hedge
  or add a visible `[CONFIRM: question]` flag. Do not remove existing CONFIRM
  flags unless the owner confirmed the fact.
- Real screenshots live in `assets/img/` (source dir, copied into the site at
  build). Reference them from DeepCharts articles as `../assets/img/x.png` and
  from DeepDOM articles as `../../assets/img/x.png`.
- DeepDOM article slugs must never collide with DeepCharts slugs (remarks and
  search rely on global uniqueness). Colliding names get a `-deepdom` suffix.
- `deepdom-source-images.csv` maps every DeepDOM screenshot placeholder to the
  original image on the old site — use it as reference when capturing.
- Owner review remarks arrive via the review overlay (`assets/review.js`) and are
  stored in the admin backend. If the owner says "check the remarks", they mean
  open the article on the site with `#review` and read the highlighted notes.

## Never do

- Commit or push `site/` (it's gitignored — leave it that way).
- Push to `main` or `gh-pages` from a teammate machine.
- Force-push anything.
- Edit `assets/review.js` / `assets/review.css` API endpoints — they point at the
  production bot backend.
- Delete or rename existing article slugs without the owner's OK (breaks remarks,
  search history, and any external links).
