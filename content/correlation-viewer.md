---
title: "Correlation Viewer"
slug: "correlation-viewer"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "Compare how several instruments moved on one shared percent axis, configure the comparison in the Correlation Properties dialog, and read the per-symbol bars."
keywords: ["correlation viewer", "correlation", "compare symbols", "compare instruments", "relative strength", "NQ vs ES", "percent comparison", "corelation viewer", "select base instrument"]
---

The Correlation Viewer puts several instruments on one shared percentage axis so you can see, at a glance, which market moved more over the same window — for example NQ versus ES over the last 15 days. Instead of eyeballing two charts with different price scales, you get a single normalized comparison.

This reference covers opening the viewer, the Correlation Properties dialog, adding and removing comparison symbols, and how the rendered view reads.

## What it is

The Correlation Viewer answers the question "how did these markets move relative to each other?" You pick a base instrument, add the symbols you want to compare, and the viewer draws each symbol's percent change on the same axis. Because everything is expressed in percent rather than price, instruments with very different price levels (an index future against a currency future, for example) become directly comparable.

The viewer loads its own data from your feed, like a chart does, and its settings can be edited at any time after creation.

[SCREENSHOT: Correlation Viewer window rendered in Bars display mode with two per-symbol bars (NQ and ES) on a shared percent axis, symbol names visible under the bars and the percent scale on the y-axis | correlation-viewer-overview.png]

## When to use it

- You trade correlated index futures (NQ, ES) and want to see which one is leading or lagging.
- You want a quick relative-strength read across a handful of markets without building a multi-chart layout.
- You want to check whether a normally tight correlation is diverging over your chosen lookback window.
- You want a normalized (percent-based) comparison that ignores absolute price levels.

## Quick start

1. In the top application bar, choose **New → Correlation Viewer**.
2. The **Select Base Instrument** window opens — the standard instrument picker with an exchange sidebar, a type-to-filter box and a **Symbol / Description / Exchange** table. Pick your base symbol and press **Select**.

[SCREENSHOT: Select Base Instrument dialog with the exchange sidebar (All, CBOT, CME, COMEX, CRYPTO, EUREX, INDEX US and others), the type-to-filter box and the symbol table visible | correlation-select-base-instrument.png]

3. The **Correlation Properties** dialog opens. In the **GENERAL** section, set **Days to load**, **TF type** and **TF** for the comparison window.
4. In the **Symbols** section, press the green **Add symbol** button for each additional instrument you want to compare. Each one appears as a chip with its own color settings.

[SCREENSHOT: Correlation Properties dialog with the Symbols section showing NQ-CME and ES-CME chips, each with Price Down Color, Price Up Color and Retracement Color swatches, and the green Add symbol button | correlation-properties-symbols.png]

5. Press **OK**. The viewer shows a "Building chart" spinner while it downloads data, then renders one bar per symbol on the shared percent axis.

> **Note:** The instrument pickers only list exchanges you have subscribed in Symbol Manage. If the picker looks empty, set up your subscriptions first — see [[symbol-manage]].

## Window anatomy

The title bar contains, from left to right:

| Element | What it does |
|---|---|
| DeepCharts logo | Window branding |
| **Gear icon** | Reopens the Correlation Properties dialog so you can edit the comparison after creation |
| **Funnel icon** | [CONFIRM: what the funnel icon does in the Correlation Viewer — it is not necessarily the same rank filter as the Market Scanner's funnel] |
| Minimize / maximize / close | Standard window controls |

[SCREENSHOT: Correlation Viewer title bar zoomed in with the gear and funnel icons visible and labeled | correlation-viewer-title-bar.png]

While the viewer loads, the window body shows a "Building chart" spinner and a **DWT:** badge with the symbol name appears in the top application bar — DWT means the data is being downloaded from your feed server (LDT would mean data already on disk is being loaded).

[SCREENSHOT: Correlation Viewer showing the Building chart spinner with the DWT: ES-CME badge visible in the top application bar | correlation-viewer-building-chart.png]

## How to read it

With **Display mode** set to **Bars** (the mode observed; other display modes were not verified — [CONFIRM: the full Display mode option list and how each renders]), the viewer draws one vertical bar per symbol on a shared percent axis, with the symbol name under each bar.

Each bar summarizes that symbol's percent move over the loaded window. In a session where NQ fell much more than ES, the NQ bar extended far deeper on the negative percent axis than the ES bar — an immediate visual read on relative weakness. The bars have a body and a thinner wick-like extension. [CONFIRM: what the bar body versus the wick represents — for example net change versus the extremes of the loaded window]

Bar colors appear to follow each symbol's configured **Price Down Color** / **Price Up Color** from the Symbols section, but the exact color mapping may vary — if the colors matter for your read, set distinct per-symbol colors so each bar is unambiguous.

[SCREENSHOT: Rendered Bars view zoomed in on one symbol's bar showing the body and the thinner wick extension against the percent axis labels | correlation-viewer-bar-anatomy.png]

## Add or remove symbols

You can change the comparison at any time:

1. Click the **gear icon** to reopen **Correlation Properties**.
2. In the **Symbols** section, press the green **Add symbol** button — the standard **Select Instrument** picker opens on top of the dialog. Pick a symbol and confirm; it appears as a new chip.
3. To remove a symbol, hover its chip and click the red remove icon that appears.
4. Press **OK** — the viewer rebuilds with the updated symbol set.

Each symbol chip carries its own **Price Down Color** (red by default), **Price Up Color** (green by default) and **Retracement Color** (blue by default).

[SCREENSHOT: Select Instrument picker opened on top of the Correlation Properties dialog after pressing Add symbol | correlation-add-symbol-picker.png]

## Settings reference

All settings live in the **Correlation Properties** dialog, shown at creation and reopenable via the **gear icon**. **Apply** applies changes live; **OK** confirms and closes.

### GENERAL

| Setting | Default | What it does |
|---|---|---|
| **Days to load** | 15 | How many days of history the comparison covers. More days = a longer lookback and a longer initial download. |
| **TF type** | Minutes | The timeframe unit for the underlying data |
| **TF** | 15 | The timeframe value (with TF type = Minutes, 15-minute data) |
| **Display mode** | Bars | How the comparison renders. **Bars** draws one percent bar per symbol. [CONFIRM: other Display mode options] |

[SCREENSHOT: Correlation Properties GENERAL section showing Days to load, TF type dropdown, TF stepper and Display mode dropdown | correlation-properties-general.png]

### CALCULATION

| Setting | Default | What it does |
|---|---|---|
| **Mode** | Zig zag | The correlation calculation mode. Zig zag was the only mode observed. [CONFIRM: other Mode options] |
| **Zig Zag Abs. Rev** | 0.50 | The zig-zag reversal threshold used by the calculation. [CONFIRM: the exact unit and semantics of the 0.50 reversal value] |

### Symbols

| Setting | Default | What it does |
|---|---|---|
| **Add symbol** | — | Green button; opens the Select Instrument picker to add a comparison symbol |
| **Price Down Color** (per symbol) | Red | Color used for that symbol when its price moved down |
| **Price Up Color** (per symbol) | Green | Color used for that symbol when its price moved up |
| **Retracement Color** (per symbol) | Blue | Color used for that symbol's retracement overlay lines |

### RETRACEMENTS

| Setting | Default | What it does |
|---|---|---|
| **Enable** | Off | Turns the retracement overlay on; each symbol's lines use its Retracement Color (exact placement of the retracement lines may vary — enable it and observe on your data) |
| **Line width** | 1 | Width of the retracement lines |

### REFERENCE LEVEL

| Setting | Default | What it does |
|---|---|---|
| **Enable** | Off | Turns the reference-level line on. [CONFIRM: what level the reference line marks] |
| **Line width** | 1 | Width of the reference line |
| **Line color** | White | Color of the reference line |

### Window appearance

The same dialog also holds the standard window-appearance sections found on other DeepCharts windows:

| Section | Settings |
|---|---|
| **CHART AREA** | **Back Color**, **Border Color**, **Text Size** (12.00), **Text Color**, **Crosshair**, **Series Marker Margin (px)** (6) |
| **GRID** | Grid styling |
| **USER ANNOTATIONS** | Annotation styling |
| **EXTRA** | Additional options (collapsed by default) |

[SCREENSHOT: Correlation Properties dialog scrolled to the CHART AREA, GRID, USER ANNOTATIONS and EXTRA sections with the Apply and OK buttons visible | correlation-properties-appearance.png]

## Tips and common mistakes

- **Stuck on "Building chart"?** The viewer downloads data before rendering — the **DWT:** badge in the top bar confirms a download is in progress. Check that the feed badge dot is green and give it time; if charts load fine but the viewer never renders, close and reopen it, and see [[data-delayed-lagging]] if downloads are generally slow.
- **An empty instrument picker means no exchange subscriptions.** Subscribe the exchanges you need in [[symbol-manage]] first.
- **Give each symbol distinct colors.** With several symbols on one axis, per-symbol **Price Down/Up** colors are the only way to tell bars apart quickly.
- **Match the lookback to your question.** **Days to load** and **TF** define the comparison window — a 15-day window answers a different question than a 2-day window.
- **Settings are editable after creation.** You never need to rebuild the viewer from scratch — the gear icon reopens the full properties dialog.

## Related articles

- [[scanner-window]]
- [[symbol-manage]]
- [[connect-data-feed]]
- [[chart-window]]
- [[profile-chart-window]]
- [[data-delayed-lagging]]
