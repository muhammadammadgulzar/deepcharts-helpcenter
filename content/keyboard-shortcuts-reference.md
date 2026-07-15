---
title: "Keyboard Shortcuts Reference"
slug: "keyboard-shortcuts-reference"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Default keyboard shortcuts in DeepCharts for workspaces, chart navigation, drawing tools and trading, grouped as in the Shortcuts settings tab."
keywords: ["keyboard shortcuts list", "hotkeys", "default shortcuts", "shortcut cheat sheet", "key combinations", "hotkey list", "keybindings", "shurtcuts"]
---

This page lists the default keyboard shortcuts that ship with DeepCharts, grouped the same way as the in-app **Shortcuts** table. Keep it open while you learn the platform — the handful of combinations for mouse modes, drawing tools and workspaces cover most day-to-day work.

Every shortcut is re-mappable, so if your combinations differ from this page, someone changed them in **Options → Settings → Shortcuts**. See [[keyboard-shortcuts]] for how to change or restore a binding.

## What it is

DeepCharts binds key combinations to platform actions (workspaces, screenshots) and chart actions (mouse modes, drawing tools, trading toggles). The authoritative list is the **Shortcuts** tab in **Options → Settings** — it holds roughly 70 bindable actions, organized by **Category** (**General** or **Chart**) and **Type** (**Action**, **Control**, **Drawing and Annotation**, **Scroll**, **Trading**). This page documents the default combinations for the most-used entries; actions not listed here can be looked up (and bound) in the same tab.

[SCREENSHOT: General Settings window on the Shortcuts tab showing the table of shortcuts with Category, Type, Description and Combination columns, scrolled to the top | shortcuts-reference-settings-tab.png]

## When to use it

- You want to work faster on charts without hunting through the right-click menu
- You pressed something by accident and need to identify what it triggered
- You are about to re-map keys and want to know what the defaults were
- You switched from another platform and want to compare conventions before re-mapping

## Quick start

1. Learn the five chart mouse modes first (**Alt P / Alt C / Alt G / Alt H / Alt R**) — they replace the most frequent toolbar clicks.
2. Add the drawing tools you use daily (for example **Shift H** for a horizontal line, **Shift R** for a rectangle).
3. Save your layout with **Ctrl Alt S** (**Workspace save**) at the end of every session — DeepCharts does not auto-save layouts.
4. To change any binding, open **Options → Settings → Shortcuts**, click **Register** on the row, press the new keys, then click **Save Settings** ([[keyboard-shortcuts|full walkthrough]]).

## Settings reference

Chart shortcuts act on the focused chart window. Many of them are also shown next to their commands in the chart right-click menu, so the menu doubles as an in-app reminder.

[SCREENSHOT: Chart right-click context menu open, with the hotkeys visible next to the entries (Pointer Alt P, Crosshair Alt C, Trading Enabled Ctrl Alt T, Indicators Ctrl I, Properties Ctrl P) | chart-context-menu-hotkeys.png]

### General (platform-wide)

| Action | Default combination |
|---|---|
| Workspace open | Ctrl Alt O |
| Workspace save | Ctrl Alt S |
| Workspace close | Ctrl Alt C |
| Workspace next | Ctrl Alt + |
| Workspace previous | Ctrl Alt - |
| Reset open windows | Ctrl Alt R |
| Take screenshot | Ctrl Alt I |
| Replay Play/Pause | [CONFIRM: default combination — none captured] |

### Chart — mouse modes (Control)

| Action | Default combination |
|---|---|
| Pointer | Alt P |
| Crosshair | Alt C |
| Global Crosshair | Alt G |
| Hand | Alt H |
| Zoom Range | Alt R |
| Crosshair Window | [CONFIRM: default combination — none captured] |

### Chart — actions

| Action | Default combination |
|---|---|
| Indicators | Ctrl I |
| Properties | Ctrl P |
| Rebuild chart | Ctrl R |
| Change symbol | Ctrl C |
| Change timeframe | Space |
| Annotation snap | Ctrl S |
| Annotation import / export / hide-show / erase all | [CONFIRM: default combinations — none captured] |

### Chart — drawing tools (Drawing and Annotation)

| Drawing tool | Default combination |
|---|---|
| Horizontal Line | Shift H |
| Line | Shift L |
| Parallel Lines | Shift P |
| Rectangle | Shift R |
| Text | Shift T |
| Price Retracement (Fibonacci retracement) | Shift F |
| Volume Profile | Shift V |
| Buy calculator | Shift B |
| Sell calculator | Shift S |

Vertical Line, Horizontal Ray, Ruler, Ellipse, Pencil, Price Projection, Price Fan and VWAP show no combination in the chart's **Drawing Objects** menu and appear to ship unbound. [CONFIRM: whether these drawing tools have default bindings] You can bind any of them yourself from the **Shortcuts** tab.

### Chart — trading

| Action | Default combination |
|---|---|
| Trading Enabled | Ctrl Alt T |
| Show Trading Panel | Ctrl Alt P |
| Show Historical Orders | Ctrl Alt H |

> **Note:** The **Scroll** type also exists in the Shortcuts tab for navigation and scrolling functions. [CONFIRM: default Scroll bindings — none captured]

## Tips and common mistakes

- **Ctrl C on a chart changes the symbol — it does not copy.** This is the single most surprising default for new users. If you keep triggering the instrument picker while trying to copy, either get used to it or re-map **Change symbol**.
- **Space changes the timeframe.** Pressing the spacebar with a chart focused opens the timeframe selection, which can feel accidental at first.
- **Alt C vs Ctrl Alt C.** Alt C switches the chart cursor to crosshair; adding Ctrl closes the current workspace. If your layout "disappeared" after a fat-fingered crosshair attempt, this is why — reopen it with Ctrl Alt O.
- **Make Ctrl Alt S a habit.** DeepCharts does not auto-save chart layouts; **Workspace save** is the difference between your setup surviving a restart or not. See [[templates-workspaces]].
- **Chart shortcuts need chart focus.** Click the chart first — a Chart-category combination pressed while another window is focused does nothing.
- **This page shows defaults.** All combinations are re-mappable, so a teammate's platform (or a platform configured months ago) may differ. The **Shortcuts** tab is always the source of truth for the machine in front of you.

## Related articles

- [[keyboard-shortcuts]]
- [[chart-window]]
- [[drawing-tools]]
- [[templates-workspaces]]
- [[trading-from-chart]]
- [[replay-data]]
