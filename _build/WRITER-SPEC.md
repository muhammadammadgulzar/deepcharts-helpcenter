# DeepCharts Help Center — Writer Specification

You are writing articles for the NEW DeepCharts Help Center. Follow this spec EXACTLY — a build
system parses your files and any deviation breaks the site.

## Output

Write each article to: `/Users/flutter/Desktop/deepchart-helpcenter/content/<slug>.md`
(slug comes from your assignment file — never change it).

## File format

Start every file with YAML frontmatter, exactly these keys:

```
---
title: "Exact Title From Your Assignment"
slug: "the-slug"
category: "Category Name From Assignment"
subcategory: "Subcategory From Assignment (empty string if none)"
type: "reference | howto | troubleshooting | concept"
difficulty: "beginner | intermediate | advanced"
time: "5 min read"            # references/concepts: N min read (words/200). howto/troubleshooting: N min to complete
description: "One sentence for search results and category cards. No marketing fluff."
keywords: ["alias 1", "alias 2", "exact error text users paste", "common misspelling"]
---
```

Then the body in Markdown. Rules:

- NO H1 in the body (the page renders the title). Start with 1–2 intro paragraphs.
- `##` for main sections, `###` for subsections — these build the on-page table of contents.
- **Screenshot placeholders** (IMPORTANT — used to capture real screenshots later). On its own line:
  `[SCREENSHOT: <detailed capture instructions — which window/dialog, what state, what must be visible/highlighted> | <suggested-filename.png>]`
  Example: `[SCREENSHOT: Feed Settings dialog with Source=Rithmic RAPI selected and the Server dropdown open showing the Apex entry highlighted | feed-settings-rithmic-apex.png]`
  Be generous: every non-trivial step or UI area gets one. Filenames: kebab-case, unique, descriptive.
- **Internal links**: `[[slug]]` or `[[slug|link text]]` — slugs MUST come from the slug directory at
  the bottom of this file. Never invent slugs, never use raw URLs for internal links.
- **Callouts** as blockquotes with a bold label — exactly one of:
  `> **Note:** ...`   `> **Tip:** ...`   `> **Warning:** ...` (destructive/data-loss steps MUST get a Warning)
- **Tables** (GitHub style) for settings references and comparison matrices.
- End every article with `## Related articles` — 3–6 `[[slug]]` bullet links (use the slug directory).
- UI labels in **bold** exactly as they appear in the app. Menu paths like **Options → Symbol Manage**.

## Article templates by type

**reference** (features, windows, indicators):
intro → `## What it is` (plain language, what question it answers) → `## When to use it` (bullets) →
`## Quick start` (numbered steps + starter configuration) → `## How to read it` (interpretation — skip only for pure-UI features) →
`## Settings reference` (grouped exactly like the in-app dialog; one line per setting: what it does + default if known + when to change it) →
`## Tips and common mistakes` → `## Related articles`

**howto**:
intro (one sentence goal: "By the end you will have X working.") → `## Before you start` (checklist, each item a [[link]]) →
`## Steps` (numbered, one action per step, exact **UI labels**, screenshot placeholder at each decision point; branches as `### If you ...` subsections, never prose forks) →
`## Verify it worked` (the observable success state) → `## If something went wrong` (symptom → [[error-article]] table or bullets) →
`## Related articles`

**troubleshooting**:
intro → `## Symptom` (exactly what the user sees; "not to be confused with" links) → `## Most likely cause` (one sentence) →
`## Quick fix` (the fix that resolves most cases, numbered) → `## If that didn't work` (remaining causes least-destructive first, `### Cause: ...` each) →
`## Still stuck` (link [[diagnostic-report]] then [[get-help]]) → `## Prevent this` (link the canonical how-to) → `## Related articles`

**concept**:
intro → `## The idea in one paragraph` (plain English + real-market analogy, zero platform UI) → `## Why traders care` →
`## How it works` (annotated-chart screenshot placeholder; math in a `### The math (optional)` subsection) →
`## See it in DeepCharts` (link every indicator/window that visualizes this concept) → `## Worked example` →
`## Common misreadings` → `## Go deeper` → `## Related articles`

## Content rules (non-negotiable)

1. **Never invent facts**: no invented settings, defaults, hotkeys, prices, server names, URLs, or emails.
   When your source states a default, keep it. When a needed fact is unknown, either omit it or write
   `[CONFIRM: what needs confirming]` inline — the team resolves these before publish.
2. **Hedging**: where your assignment notes say a semantic is unconfirmed (open owner questions),
   write around it or hedge ("exact behavior may vary") — never present an inference as fact.
3. **Brand**: always "DeepCharts" (never DeepChart/Deepchart). The sibling product "DeepDom" is out of scope.
4. **Tone**: professional, teaching, direct. Second person ("you"). No marketing copy, no exclamation marks,
   no "simply/just/easily". Explain WHY at decision points, not only WHAT.
5. **Progressive disclosure**: a beginner must get value from the intro + quick start alone; an advanced
   user must find depth in the settings reference and tips. Don't dumb down — layer.
6. **No prices/offers ever.** No personal data. No internal tool names.
7. Length guide: standard indicator reference 450–900 words; major feature/window reference 900–1800;
   howto 400–900; troubleshooting 300–700; concept 700–1200. Quality over padding.
8. For LIVE sources: fetch `https://www.deepcharts.com/helpcenter/article/<old-slug>` with WebFetch
   (prompt it to extract the complete content: every heading, step, setting name, description and default).
   Percent-encode special characters if the fetch fails: `(` = %28, `)` = %29, `®` = %C2%AE.
   Keep every real fact; restructure and complete per the template. For MERGE sources fetch both articles.
9. After writing your files, re-read each one once to check: frontmatter parses, all [[slugs]] exist in the
   directory below, sections match the template, at least one screenshot placeholder in any UI-facing article.

## Slug directory (the ONLY valid [[link]] targets)


**Getting Started**
- `welcome-to-deepcharts` — Welcome to DeepCharts: Platform Tour
- `system-requirements` — System Requirements
- `install-deepcharts` — How to Install DeepCharts and Activate Your License
- `free-delayed-data-feed` — Use the Free 15-Minute Delayed Data Feed
- `buy-data-feed` — How to Buy a Data Feed and Get Your Credentials
- `first-chart` — Open Your First Chart
- `simulation-accounts` — Trading Accounts and Simulation
- `quick-start-first-trade` — Quick Start: From Install to Your First Trade

**Connections & Data Feeds / Setup**
- `compatibility-guide` — Supported Brokers, Prop Firms and Data Feeds
- `connect-data-feed` — How to Connect a Data Feed (Feed Settings)
- `symbol-manage` — Symbol Manage: Subscribe Exchanges and Map Your Feed
- `sign-market-data-agreement` — Sign Your Market Data Agreement
- `connect-dxfeed` — How to Connect a dxFeed Data Feed
- `connect-rithmic` — How to Connect a Rithmic Data Feed
- `rtrader-pro-plugin` — Connect Rithmic Using the RTrader Pro Plugin
- `connect-rithmic-prop-firm` — Connect Any Rithmic Prop-Firm Account (Server Table)
- `connect-apex` — Connect Apex Trader Funding
- `connect-dxfeed-prop-firm` — Connect a Prop-Firm dxFeed Account (MFF, Aqua, Goat...)
- `connect-cqg` — How to Connect CQG (AMP, Optimus, EdgeClear, Ironbeam...)
- `connect-interactive-brokers` — Connect Interactive Brokers (Execution Only)
- `competition-connect` — DeepCharts Competition: Join and Connect
- `end-of-day-data` — Connect Historical Data (End of Day)
- `manage-feed-connections` — Manage and Switch Between Feed Connections

**Connections & Data Feeds / Troubleshooting**
- `feed-connected-chart-not-moving` — Fix: Live Feed Connected but Chart Is Not Moving
- `fix-unable-to-establish-connection` — Fix: Connection Failed — Unable to Establish Connection
- `fix-username-password` — Fix: Connection Failed — Check Username and Password
- `fix-bad-server` — Fix: Connection Failed — Bad Server
- `fix-log-in-using-rtrader` — Fix: Please Log In Using R Trader or R Trader Pro
- `fix-rithmic-expert-not-attached` — Fix: Rithmic — Expert Not Attached
- `fix-dxfeed-dll` — Fix: Unable to Load DLL DXFeed_64.dll
- `fix-data-access-suspended` — Fix: dxFeed DATA_ACCESS_SUSPENDED
- `fix-myfundedfutures-failed` — Fix: dxfeed.myfundedfutures.com Failed
- `fix-system-cannot-find-file` — Fix: The System Cannot Find the File Specified
- `connection-lost-opening-chart` — Fix: Connection Lost When Opening a Chart
- `symbol-subscription-issue` — Fix: Symbol Subscription Issue
- `app-crashes-saving-feed` — Fix: App Crashes When Saving Feed Settings
- `gaps-in-price` — Fix: Gaps in Price on Charts
- `data-delayed-lagging` — Fix: Charts Lagging or Data Delayed (Checklist)

**Charts & Workspace**
- `chart-window` — The Chart Window
- `price-chart-settings` — Price Chart Settings
- `chart-display-options` — Chart Display Options (Bar Styles, Sessions, Countdown)
- `drawing-tools` — Drawing Tools and Annotations
- `templates-workspaces` — Templates and Workspaces
- `quick-chart-templates` — Quick Chart Templates (OF-VP, D-VP, W-VP...)
- `link-windows` — Link Windows with Color Groups
- `replay-data` — Replay Market Data
- `customize-language-theme-sounds` — Customize Language, Theme and Notification Sounds
- `keyboard-shortcuts` — How to Configure Keyboard Shortcuts
- `keyboard-shortcuts-reference` — Keyboard Shortcuts Reference
- `multi-monitor-windows` — Arrange Windows Across Monitors (and Recover Off-Screen Windows)

**Platform Windows**
- `adv-time-and-sales` — Advanced Time And Sales (The Tape)
- `advanced-dom` — Advanced DOM Window
- `profile-chart-window` — Profile Chart Window (TPO and Volume Profiles)
- `scanner-window` — Market Scanner
- `correlation-viewer` — Correlation Viewer

**Trading & Orders**
- `trading-from-chart` — Trading from the Chart
- `trading-panel-reference` — Trading Panel Reference: Every Button and Field
- `dom-trading-chart` — DOM Trading on the Chart (Click-Trading Ladder)
- `depth-of-market` — Depth of Market (DOM) Indicator
- `oco-strategies` — OCO (One-Cancels-the-Other) Strategies
- `orders-window` — Orders Window
- `portfolio-wallet` — Portfolio (Wallet)
- `risk-manager` — Risk Manager
- `trade-copier` — How to Set Up the Trade Copier
- `performance-analysis` — Performance Analysis (Signal Performance)

**Concepts**
- `orderflow-101` — Orderflow 101: Bid, Ask, Aggressor and Delta
- `understanding-volume-profile` — Understanding Volume Profile: POC, Value Area, HVN/LVN
- `understanding-auction-theory` — Understanding Auction Theory: Imbalance, Unfinished Auctions, Absorption
- `understanding-icebergs-absorption` — Understanding Icebergs and Absorption
- `understanding-vwap` — Understanding VWAP
- `understanding-market-structure-sessions` — Understanding Market Structure and Sessions (RTH/ETH, Rollover)
- `reading-a-footprint` — Reading a Footprint: Worked Examples
- `glossary` — Glossary of Orderflow and Platform Terms

**Indicators & Analysis / Indicator Basics**
- `different-types-of-input` — Different Types of Input Data for Indicators
- `indicator-layout` — How to Change the Layout of Indicators

**Indicators & Analysis / Deep Indicators**
- `deep-print` — Deep Print (Footprint)
- `deep-profile` — Deep Profile (Volume / Delta Profile)
- `deep-profile-swing` — Deep Profile Swing
- `deep-profile-values` — Deep Profile Values
- `deep-delta` — Deep Delta
- `deep-stats` — Deep Stats
- `deep-trades` — Deep Trades
- `deep-wall` — Deep Wall
- `deep-v-tracker` — Deep V-Tracker
- `deep-m-ivb` — Deep-M IVB
- `deep-m-effort` — Deep-M Effort (NQ)
- `deep-pattern-builder` — Deep Pattern Builder

**Indicators & Analysis / Trend**
- `moving-average` — Moving Average
- `super-trend` — Super Trend
- `super-trend-difference` — Super Trend Difference
- `parabolic-sar` — Parabolic SAR
- `ichimoku` — Ichimoku
- `linear-regression` — Linear Regression
- `regression-channel` — Regression Channel
- `tillson-t3` — Tillson T3
- `zig-zag` — Zig Zag
- `donchian-channel` — Donchian Channel
- `adx` — Average Directional Index (ADX)
- `aroon-up-down` — Aroon Up/Down
- `aroon-oscillator` — Aroon Oscillator

**Indicators & Analysis / Momentum & Oscillators**
- `rsi` — Relative Strength Index (RSI)
- `macd` — MACD
- `stochastic-oscillator` — Stochastic Oscillator
- `momentum` — Momentum
- `rate-of-change` — Rate of Change (ROC)
- `cci` — Commodity Channel Index (CCI)
- `williams-r` — Williams %R
- `awesome-oscillator` — Awesome Oscillator
- `inverse-cyber-cycle` — Inverse Cyber Cycle
- `know-sure-thing` — Know Sure Thing (KST)

**Indicators & Analysis / Volatility & Bands**
- `bollinger-bands` — Bollinger Bands
- `keltner-channel` — Keltner Channel
- `atr` — Average True Range (ATR)
- `standard-deviation` — Standard Deviation
- `vwap-envelopes` — VWAP Envelopes
- `adr-target` — Average Daily Range Target (ADR Target)

**Indicators & Analysis / Volume & Delta**
- `volume` — Volume
- `delta-bar` — Delta Bar
- `delta-highlight` — Delta % Highlight
- `delta-cumulative-candlestick` — Delta Cumulative Candlestick
- `delta-cumulative-histogram` — Delta Cumulative Histogram
- `volume-swing` — Volume Swing
- `volume-delta-sprint` — Volume/Delta Sprint
- `chaikin-ad` — Chaikin Accumulation/Distribution
- `big-trades` — Big Trades
- `speed-of-tape` — Speed of Tape
- `speed-of-tape-instant` — Speed of Tape (Instant)
- `market-statistics` — Market Statistics
- `on-candle-stats` — On Candle Stats

**Indicators & Analysis / Order Flow & Auction**
- `market-profile-tpo` — Market Profile (TPO)
- `imbalance-tracker` — Imbalance Tracker
- `imbalance-rejector` — Imbalance Rejector
- `session-imbalance` — Session Imbalance
- `unfinished-auction` — Unfinished Auction
- `auction-gap-tracker` — Auction Gap Tracker
- `dynamic-poc` — Dynamic POC
- `bar-poc` — Bar POC
- `stop-spotter` — Stop Spotter
- `ratio-highlight` — Ratio Highlight

**Indicators & Analysis / Levels & Patterns**
- `pivot-points` — Pivot Points
- `important-levels` — Important Levels
- `absolute-levels` — Absolute Levels
- `price-movement-levels` — Price Movement Levels
- `session-marker` — Session Marker
- `swing-point` — Swing Point
- `gap-detector` — Gap Detector
- `fvg-identifier` — FVG Identifier
- `divergence-detector` — Divergence Detector
- `confluence-identifier` — Confluence Identifier

**Indicators & Analysis / Chart Overlays**
- `candlestick-bar` — Candlestick Bar
- `overlay-chart` — Overlay Chart
- `overlay-symbol` — Overlay Symbol
- `overlay-timeframe-candlestick` — Overlay Timeframe Candlestick
- `overlay-timeframe-highlight` — Overlay Timeframe Highlight
- `shift-candle` — Shift Candle
- `text-on-chart` — Text on Chart
- `annotations-overlay` — Annotations Overlay

**Data & Database**
- `symbol-rollover` — Symbol Rollover (Change Contract Month)
- `delete-market-data` — Delete Market Data (In-App and Manual Methods)
- `download-data` — Re-download Historical Data (Download Data Tool)
- `database-optimization` — Database Optimization
- `database-problems` — Fix: Database Problems
- `fix-could-not-find-path` — Fix: Could Not Find a Part of the Path

**Troubleshooting & Support**
- `installation-problems` — Fix: Installation Problems and Basic Requirements
- `installation-setup-failed` — Fix: Installation Setup Failed
- `application-control-policy` — Fix: Application Control Policy Blocks DeepCharts
- `rectangle-drawing-tool` — Fix: Rectangle Drawing Tool Not Working
- `chart-zoom` — Fix: Chart Zoom In and Out Not Working
- `license-issues` — Fix: License and Activation Issues
- `diagnostic-report` — Diagnostic Report: Before You Contact Support
- `get-help` — How to Get Help (Chat, Diagnostic Report, Support)

**Account & Billing**
- `manage-subscriptions` — Manage Your Subscriptions and Billing
- `move-to-new-computer` — Move DeepCharts to a New Computer
