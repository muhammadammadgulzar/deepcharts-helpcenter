---
title: "Drawing Tools and Annotations"
slug: "drawing-tools"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Every drawing tool in DeepCharts with its hotkey, plus editing, snapping, hiding, importing/exporting and syncing annotations between charts."
keywords: ["drawing tools", "annotations", "horizontal line", "trend line", "fibonacci retracement", "buy calculator", "sell calculator", "export annotations", "import annotations", "erase all drawing", "magnet", "snap annotation", "drawings disappeared"]
---

Drawings — lines, levels, rectangles, Fibonacci tools, text notes — are how you mark up a DeepCharts chart. Every tool is available from two places: the left toolbar strip on the chart and the right-click menu under **Drawing Objects**, most with a keyboard shortcut.

This article lists every drawing object and its hotkey, then covers the workflows around drawings: editing and reusing styles, snapping, hiding, bulk-erasing, moving annotations between charts and machines, and keeping drawings in sync across charts of the same instrument.

## What it is

The annotation system of the chart window. It answers "how do I draw X", "how do I change a drawing's color", "where did my drawings go", and "how do I get my drawings onto another chart or another PC".

[SCREENSHOT: A chart with several annotations placed — a horizontal line at a level, a trend line, a rectangle zone and a text note — with the left drawing toolbar strip visible and the right-click Drawing Objects submenu open | drawing-tools-overview.png]

## When to use it

- Mark support/resistance levels, zones, and session extremes.
- Measure moves and plan trades (Ruler, Buy/Sell calculator).
- Annotate charts for a journal or to share as screenshots.
- Keep the same levels visible across several charts of one instrument.

## Quick start

1. Right-click the chart and open **Drawing Objects**, or use the left toolbar strip (toggle it with the **≡** icon at the top left).
2. Pick a tool — for example **Horizontal Line** (Shift H) — and click on the chart to place it.
3. To edit a drawing, double left-click it (or left-click to select, then right-click → **Settings**) and change colors and styles in the Annotation Settings.
4. To remove one drawing, select it and delete it; to clear everything, use right-click → **Drawing Utilities → Erase All Drawing** (see the warning below).

[SCREENSHOT: The Annotation Settings dialog open for a horizontal line, showing color, line style and width options | drawing-tools-annotation-settings.png]

## Settings reference

### Drawing Objects (right-click → Drawing Objects)

| Tool (hotkey) | What it does |
|---|---|
| **Horizontal Line** (Shift H) | Price level across the chart. |
| **Vertical Line** | Marks a point in time. |
| **Horizontal Ray** | Price level starting at a point and extending right. |
| **Line** (Shift L) | Free trend line between two points. |
| **Parallel Lines** (Shift P) | Parallel channel. |
| **Ruler** | Measures between two chart points. |
| **Rectangle** (Shift R) | Price/time zone. If it stops responding, see [[rectangle-drawing-tool]]. |
| **Ellipse** | Elliptical zone. |
| **Text** (Shift T) | Text note on the chart. |
| **Pencil** | Freehand drawing. |
| **Price Retracement** (Shift F) | Fibonacci retracement. |
| **Price Projection** | Fibonacci projection. |
| **Price Fan** | Fan tool — corresponds to the Fibonacci fan listed in **Options → Settings → Toolbar**. |
| **Volume Profile** (Shift V) | Draws a volume profile over a selected range. Concept: [[understanding-volume-profile]]. |
| **VWAP** | VWAP drawing tool. Concept: [[understanding-vwap]]. |
| **Buy calculator** (Shift B) | Position calculator for longs: place it, then drag the stop-loss area and the take-profit area up or down — it shows the risk/reward ratio, the price of both levels, and each level's tick distance from entry. |
| **Sell calculator** (Shift S) | The same position calculator for shorts. |

[SCREENSHOT: A Buy calculator drawing placed on a chart with the SL area below entry and TP area above, showing the risk/reward ratio and tick distances | drawing-tools-buy-calculator.png]

> **Tip:** The cursor-mode entries in the same right-click menu are worth memorizing: **Pointer** (Alt P), **Crosshair** (Alt C), **Global Crosshair** (Alt G — crosshair on all charts of the same instrument), **Hand** (Alt H). Hotkeys are configurable — see [[keyboard-shortcuts]].

### Left toolbar extras

The left strip mirrors the drawing tools (which tools appear there is configurable in **Options → Settings → Toolbar**), plus:

| Icon | What it does |
|---|---|
| **Eye** | Hides/shows ALL drawings on the chart. |
| **Magnet** | When enabled, new drawings attach to the closest main level — the nearest candle wick high/low or open/close. Disabled = fully free placement. |
| **Eraser** | Removes drawings. |

### Editing and reusing styles

- **Edit:** double left-click a drawing, or select it and right-click → **Settings**.
- **Save a configuration:** store a drawing's style settings for future reuse from its settings dialog.
- **Recall a configuration:** right-click the drawing and open **Tool Config**.

### Drawing Utilities (right-click → Drawing Utilities)

| Item | What it does |
|---|---|
| **Import Annotations** | Loads drawings from a file. |
| **Export Annotations** | Saves drawings to a file — format selectable: CSV or the Volumetrica format (specific to the DeepCharts apps). This is how you move drawings between machines or share them. [CONFIRM: whether export covers all drawings or only selected ones] |
| **Snap annotation** (Ctrl S) | Snapping toggle for annotations [CONFIRM: whether this is the same toggle as the magnet icon]. |
| **Hide/Show annotations** | Toggles visibility of annotations on the chart. |
| **Erase All Drawing** | Removes every drawing from the chart. |

> **Warning:** **Erase All Drawing** deletes all drawings on the chart in one action. Export your annotations first if there is any chance you will want them back.

### Drawings across charts

- **Drawing Tool From Other Chart** (right-click menu) syncs drawings between charts — set it between, say, a 1-minute and a 5-minute chart of the same symbol, and a drawing made on one appears on the other.
- To carry a full chart setup (drawings context included) to another chart or PC, use templates and workspaces — see [[templates-workspaces]].

## Tips and common mistakes

- **"My drawings disappeared."** Before assuming they are lost, check the **eye** icon on the left toolbar and right-click → **Drawing Utilities → Hide/Show annotations** — one of the two visibility toggles is usually the cause.
- **Drawings won't land exactly on candle highs/lows** — enable the **magnet** icon so new drawings snap to the nearest wick or open/close.
- **Moving to a new PC?** Right-click → **Drawing Utilities → Export Annotations**, copy the file over, then **Import Annotations** on the other machine.
- **Plan the trade before placing it:** the **Buy/Sell calculator** shows risk/reward and tick distances while you drag the levels — faster than computing them by hand.
- Related chart-level options: **Options → Settings → General → Chart** includes annotation behaviors such as **Editable copied annotation** and **Annotations stop on last bar**.

## Related articles

- [[chart-window]]
- [[rectangle-drawing-tool]]
- [[keyboard-shortcuts-reference]]
- [[templates-workspaces]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]
