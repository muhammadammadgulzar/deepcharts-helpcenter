---
title: "Welcome to DeepCharts: Platform Tour"
slug: "welcome-to-deepcharts"
category: "Getting Started"
subcategory: ""
type: "concept"
difficulty: "beginner"
time: "6 min read"
description: "A guided tour of the DeepCharts main bar, its menus and window types, and where to go next after installing."
keywords: ["platform tour", "getting started", "main bar", "overview", "new to deepcharts", "what is deepcharts", "menus", "windows"]
---
DeepCharts is a Windows platform for orderflow analysis and trading. Instead of one fixed screen, it gives you a small control bar — the main bar — from which you open exactly the windows you need: price charts, DOMs, tape readers, profile charts, scanners and trading tools.

This tour walks the main bar menu by menu, explains what each window type is for, and points you to the right article for each next step. You do not need to memorize anything here — the goal is that when you see a menu label later, you already know what lives behind it.

## The idea in one paragraph

Think of a professional trading desk: one trader might keep a price chart on the left monitor, a depth-of-market ladder in the middle and a time-and-sales tape on the right — each screen doing one job well. DeepCharts works the same way. The platform itself is a thin coordinator (the main bar); everything else is a specialized window you open, arrange and save as a workspace. Market data flows in from a data feed you connect (live or free delayed), and every window reads from that same feed.

## Why traders care

- **You build your own screen.** Nothing is forced on you — a scalper's workspace and a swing trader's workspace can look completely different in the same platform.
- **Orderflow first.** Beyond classic candlestick charts, DeepCharts ships footprint, volume profile, DOM and tape tools designed around who is buying and who is selling — see [[orderflow-101]] for the concepts.
- **One feed, many views.** Connect a data feed once and every chart, DOM and scanner uses it. The free delayed feed means you can explore everything before paying for data — see [[free-delayed-data-feed]].
- **Layouts persist.** Window arrangements are saved as workspaces, so tomorrow's session starts where today's ended — see [[templates-workspaces]].

## How it works

Everything starts from the main bar — the slim bar at the top of your screen after the app launches. Below is a **working mock of it**: click every menu, hover the items, and click any item to jump straight to its guide.

[WIDGET: main-bar]

### The main bar

From left to right the main bar contains the menus — **New**, **Options**, **Trading**, **Window**, **About us** and a **?** help menu — plus two controls you will use constantly:

- **Workspace** selector — create, save and open window layouts (**New**, **Save as**, **Open**; layouts can be stored locally, in the cloud, or shared).
- **Feed** selector — shows your active data connection with a colored status dot. Green means connected; when nothing is connected it reads **Select a connection**. The dropdown lists your saved connections plus a **Feed Settings** entry for adding new ones — try it in the mock above: click **● dxFeed - 15m** on the right end of the bar.

### The New menu — opening windows

**New** is where every analysis window is born:

| Menu item | What it opens |
|---|---|
| **Price Chart** | The standard chart window — candles, indicators, drawing tools. See [[chart-window]]. |
| **Book** → **Adv. Dom** / **Horizontal dom** / **Vertical dom** | Depth-of-market ladders in three layouts. See [[advanced-dom]]. |
| **Adv. Time And Sales** | The tape — every executed trade as it prints. See [[adv-time-and-sales]]. |
| **Profile Chart** | TPO and volume profile analysis. See [[profile-chart-window]]. |
| **Scanner** | Scan the market for conditions you define. See [[scanner-window]]. |
| **Correlation Viewer** | Compare how instruments move together. See [[correlation-viewer]]. |

> **Tip:** Open the **New** menu in the live mock at the top of this page — every entry there links to its window's full guide.

### The Options menu — configuration and data

**Options** holds platform configuration and data management: **Symbol Manage** (map exchanges to your data feed — the single most important setup window, see [[symbol-manage]]), **Settings** (language, theme, timezone, sounds, shortcuts — see [[customize-language-theme-sounds]] and [[keyboard-shortcuts]]), **Replay Tick Data** (practice on recorded markets, see [[replay-data]]), **Symbols Rollover** (see [[symbol-rollover]]), a **Database** submenu (see [[database-optimization]]), **Show Log**, **Show Calendar** (economic calendar) and a **Tool** submenu.

### The Trading menu — orders and accounts

The **Trading** menu is home to your execution tooling, including the **Orders** window listing every order you have placed ([[orders-window]]), **Portfolio** with account balances, P/L and the built-in risk manager ([[portfolio-wallet]], [[risk-manager]]), **Signal Performance** for statistics on your past trades ([[performance-analysis]]) and the **Trade Copier** for mirroring orders across accounts ([[trade-copier]]). Actual order entry happens on the chart itself through the trading panel — see [[trading-from-chart]].

### The Window menu

**Window** manages open windows, including **Position windows** — a dialog that arranges your window types across monitors, useful on multi-screen setups. See [[multi-monitor-windows]].

### About us and help

**About us** contains **Calendar events** (the **Deepchart Events** window — join live sessions or watch recordings from inside the app), **Info** and **Website**. The **?** menu has two entries: **Guides**, which opens this help center in your browser, and **Contact Support**, which opens the diagnostic window — see [[get-help]] and [[diagnostic-report]].

## See it in DeepCharts

Every window type from the tour has its own reference article:

- Charts: [[chart-window]], [[price-chart-settings]], [[drawing-tools]]
- Orderflow windows: [[advanced-dom]], [[adv-time-and-sales]], [[profile-chart-window]]
- Analysis: [[scanner-window]], [[correlation-viewer]]
- Trading: [[trading-from-chart]], [[orders-window]], [[portfolio-wallet]], [[risk-manager]]

## Worked example

A typical first hour with DeepCharts looks like this. You install the platform and activate your license ([[install-deepcharts]]). On first launch a three-step startup wizard runs: you pick the free 15-minute delayed data feed ([[free-delayed-data-feed]]), confirm the exchange mapping in the embedded Symbol Manage step, and choose a theme and alert sound profile. The Feed selector dot turns green. You open **New → Price Chart**, pick an instrument, and candles start drawing ([[first-chart]]). From there you add an indicator, open a DOM next to the chart, and save the layout as your first workspace. Total cost so far: nothing — the delayed feed is free.

## Common misreadings

- **"DeepCharts comes with live market data."** It does not — the platform connects to a data feed you bring (or the free delayed one). Charts stay empty until a feed is connected and exchanges are mapped in [[symbol-manage]].
- **"DeepCharts is a broker."** No. It connects to brokers, prop firms and data feeds — see [[compatibility-guide]]. You can also paper-trade on a built-in SIM account with no broker at all ([[simulation-accounts]]).
- **"My symbol is missing, the feed must be broken."** Usually the exchange is simply not subscribed in **Options → Symbol Manage** — the instrument picker only lists subscribed exchanges.
- **"I skipped the wizard, so I have to reinstall."** Everything the wizard does can be redone later through **Feed Settings**, **Options → Symbol Manage** and **Options → Settings**.

## Go deeper

Follow the Getting Started path in order: [[system-requirements]] → [[install-deepcharts]] → [[free-delayed-data-feed]] → [[first-chart]] → [[simulation-accounts]] — or take the single capstone walkthrough [[quick-start-first-trade]] that chains them all into one session. When you are ready for live data, start at [[buy-data-feed]].

## Related articles

- [[quick-start-first-trade]]
- [[install-deepcharts]]
- [[free-delayed-data-feed]]
- [[first-chart]]
- [[symbol-manage]]
- [[compatibility-guide]]
