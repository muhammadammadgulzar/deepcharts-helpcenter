# Team setup — working on the help center with AI

How to set up a teammate's computer so they can work on the help center with
Claude Code, publish to the TEST URL, and submit work for the owner's approval.

## The system in one picture

```
you (teammate)                                the owner
   edit on `test` branch                         │
   push  ──►  TEST URL (auto, ~2 min)            │
              …/deepcharts-helpcenter/test/      │
                                                 ▼
              admin panel "HC Changes" — AI summary of your changes
                                                 │
                                     [Approve & Publish] merges test → main
                                                 ▼
              LIVE URL (auto, ~2 min)
              …/deepcharts-helpcenter/
```

- **LIVE:** https://muhammadammadgulzar.github.io/deepcharts-helpcenter/
- **TEST:** https://muhammadammadgulzar.github.io/deepcharts-helpcenter/test/

You never touch the live site. You push to `test`, the owner reviews your
changes (with an AI-written summary of each one) and clicks Approve.

## One-time setup (teammate PC)

1. **Git + GitHub access**
   - Install git (macOS: `xcode-select --install`, Windows: gitforwindows.org).
   - Ask the owner to add your GitHub account as a **collaborator** on
     `muhammadammadgulzar/deepcharts-helpcenter` (GitHub → repo → Settings →
     Collaborators). Accept the email invite.
   - Set your identity:
     ```
     git config --global user.name  "Your Name"
     git config --global user.email "you@example.com"
     ```

2. **Clone the repo and switch to the team branch**
   ```
   git clone https://github.com/muhammadammadgulzar/deepcharts-helpcenter.git
   cd deepcharts-helpcenter
   git checkout test
   ```

3. **Python build deps** (Python 3.10+):
   ```
   pip3 install -r requirements.txt
   ```

4. **Install Claude Code** (the AI you'll develop with):
   ```
   npm install -g @anthropic-ai/claude-code
   ```
   (needs Node 18+; or download the desktop app). Sign in with your own
   Anthropic account when it asks.

5. **First run** — open a terminal in the repo folder and run `claude`.
   It automatically reads `CLAUDE.md`, which teaches it every rule of this
   repo (branch rules, article format, how to build). You don't need to
   explain the project to it.

## Daily workflow (teammate)

```
git checkout test
git pull                  # ALWAYS pull first — others push here too
claude                    # work with the AI: edit articles, add articles…
python3 build.py          # must pass (the AI usually runs this itself)
git add -A && git commit -m "what you changed and why"
git push
```

~2 minutes later your work is visible on the **TEST URL**. Tell the owner it's
ready for review (or they'll see it in the admin panel's HC Changes page).

If the owner leaves remarks: open the article on the TEST URL with `#review`
appended to the URL, sign in, and you'll see their highlighted notes on the
exact text they mean.

## Rules (the short version)

- Work on `test` only. **Never push to `main` or `gh-pages`.**
- Never commit the `site/` folder (it's generated; it's gitignored).
- Never invent product facts — use `[CONFIRM: question]` flags when unsure.
- English (`content/`, `content-deepdom/`) is the source of truth. When other
  languages are live, YOUR AI translates your English changes before you push:
  it runs `python3 scripts/translate_sync.py --todo`, writes the translations,
  and validates them with `--finalize` (your CLAUDE.md teaches it the whole
  flow — just tell it "sync the translations"). CI flags pushes with stale
  translations.
- Screenshot placeholders: never change an existing ID; new ones follow
  `{kb}-{lang}-{slug}-{NN}.png` (the build enforces this).
- One commit per finished piece of work, with a descriptive message.
- If `python3 build.py` fails, fix it before pushing.
