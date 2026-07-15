---
title: "Volume Swing"
slug: "volume-swing"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "ZigZag-based swing analysis with per-swing volume and delta labels, automatic No Effort / No Result markers, a trend detector and level lines."
keywords: ["volume swing", "swing volume", "zigzag volume", "NOE", "NOR", "no effort", "no result", "swing delta", "effort vs result", "trend detector"]
---

Volume Swing combines market structure with volume analysis: it detects price swings with a ZigZag engine, then labels every swing with the volume, delta and related metrics that built it. On top of that it prints automatic effort-versus-result markers (NOE and NOR), can color the background by detected trend, and can draw threshold level lines.

The idea is Wyckoff's effort versus result made mechanical — every leg of the market gets measured, so you can see which swings had real participation behind them and which ran on fumes.

## What it is

Volume Swing is a comprehensive volume-and-structure tool. The ZigZag identifies swings (by absolute price reversal or by tick reversal), and up to four configurable labels per swing show metrics such as volume, delta volume, delta trade, volume per tick and extension. Two markers are calculated automatically: **NOE** (No Effort — a move lacking the volume to support it) and **NOR** (No Result — heavy volume that failed to move price). A trend detector adds colored background bands at your chosen sensitivity.

[SCREENSHOT: Chart window with Volume Swing applied — ZigZag lines connecting swing highs and lows, per-swing labels showing volume and delta values, one swing tagged NOE and another tagged NOR, with trend background bands visible | volume-swing-chart-overview.png]

## When to use it

- You want each swing quantified: how much volume and delta drove this leg compared to the previous one.
- You trade effort versus result: rising legs on falling volume (NOE) or heavy volume with no price progress (NOR) are structural warnings.
- You want objective swing structure — the ZigZag replaces subjective leg-drawing with fixed reversal rules.
- You want a trend filter: the built-in trend detector shades the background so counter-trend signals are obvious.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Volume Swing** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. Under **Data Settings**, keep **Input Data** on **Volume** (see [[different-types-of-input]]).
5. Under **ZigZag Settings**, pick a **ZigZag Mode** — **Tick Reversal** with a tick count suited to your instrument is a practical intraday start; **Absolute Reversal** uses a fixed price reversal value instead.
6. In **Label Settings**, enable the **First Label** with **Volume** and the **Second Label** with **Delta volume** — two metrics per swing is plenty while learning.
7. Optionally enable the **Trend Detector** on **Medium** sensitivity, then apply.

[SCREENSHOT: Volume Swing settings dialog open at the ZigZag Settings section — ZigZag Mode dropdown showing Absolute Reversal and Tick Reversal, with the Zig Zag Rev. & Absolute and Zig Zag Tick Rev. fields plus Color Up/Down and Line Width below | volume-swing-settings-zigzag.png]

## How to read it

- **Compare consecutive swings in the same direction.** Higher highs on shrinking swing volume mean the advance is losing participation. Rising legs each carrying more volume than the last is a healthy trend.
- **NOE (No Effort)** marks a swing lacking the volume to support its movement — a push that has lost momentum. Expect shallower follow-through or a rotation back.
- **NOR (No Result)** marks a swing with significant volume but little price progress — effort was spent against strong resistance or support. These frequently mark absorption zones and reversal candidates (see [[understanding-icebergs-absorption]]).
- **Delta labels split the effort by side.** A rising swing with negative delta volume rose while sellers were more aggressive — passive buying drove it, a very different character from an aggressive-buyer rally.
- **Trend bands set the context.** Take NOE/NOR readings with the trend, not against it, until you have evidence the trend itself is turning.

> **Note:** These signals carry the most weight in medium-to-large moves outside high-volatility conditions. In low liquidity the market produces less meaningful, unreliable readings.

## Settings reference

Grouped as in the settings dialog.

### Data Settings

| Setting | What it does |
|---|---|
| **Input Data** | Basis of the analysis: **Volume** (total trade volume), **Order** (number of orders) or **Aggregated volume** (aggregated order volumes). See [[different-types-of-input]]. |
| **Filter Min** | Minimum filter value for the selected data — entries below the threshold are excluded. |
| **Filter Max** | Maximum filter value — data exceeding the limit is excluded. |

### ZigZag Settings

| Setting | What it does |
|---|---|
| **ZigZag Mode** | **Absolute Reversal** uses a fixed price reversal value to determine a swing; **Tick Reversal** defines the reversal in ticks, allowing a minimum amount of tick movement. |
| **Zig Zag Rev. & Absolute** | Minimum change required for price to define a new swing in Absolute Reversal mode. |
| **Zig Zag Tick Rev.** | Number of ticks required for a reversal in Tick Reversal mode. |
| **Color Up / Color Down** | Colors differentiating upward and downward swings. |
| **Line Width** | Thickness of the ZigZag plot. |

### Label Settings

| Setting | What it does |
|---|---|
| **Text Size** | Size of the swing labels. |
| **Text Offset** | Positions the labels relative to the swing point. |
| **Max Bars to View** | Limits how far back labels are drawn. |
| **First / Second / Third / Fourth Label** | Each label slot has an **Enabled** toggle, a displayed metric (**Volume**, **Delta volume**, **Delta trade**, **Vol per tick**, **Extension**) and **Positive/Negative Color** selections. |

### Marker Labels

Calculated automatically — no thresholds to configure.

| Marker | Meaning |
|---|---|
| **NOE (No Effort)** | Lack of volume to support the movement or push — the move has lost momentum. |
| **NOR (No Result)** | Lack of result in price movement despite significant volume — suggests strong resistance or support. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Display Mode** | **Lines only**, **Bars histogram**, or **Lines and Bars** combined. |
| **Histogram Value** | Metric the histogram represents: **Delta Volume**, **Delta trade**, **Vol per tick** or **Extension**. |
| **All-in-one** | Combines multiple metrics in one plot: **None**, **Vol delta trade**, **Vol delta** or **Volume**. |
| **Show Sign** | How values are signed: **Positive**, **Negative** or **Based Delta**. |
| **Color Mode** | **Fixed**, **Fading colour** or **Delta fading**. |
| **Std. Dev. for Coloring** | Sensitivity of the coloring to changes in the volumetric data. |

### All-in-one Color Settings

| Setting | What it does |
|---|---|
| **Volume Line** | Color of the combined volume line. |
| **Positive / Negative Delta Vol.** | Colors for positive and negative delta volume. |
| **Positive / Negative Delta Trade** | Colors for positive and negative delta trade. |

### High/Low Line Settings

| Setting | What it does |
|---|---|
| **Enable** | Shows or hides the swing high/low lines. |
| **Show End Retracement** | Displays the end-of-retracement marking. |
| **Line Width / Color / Style** | Appearance of the high/low lines. |
| **End Retrace Color** | Color used for the end-retracement marking. |

### Trend Detector

| Setting | What it does |
|---|---|
| **Enable Trend** | Displays colored background bands for detected trends. |
| **Mode** | Sensitivity: **Weak** (minor trends included), **Medium** (intermediate) or **Strong** (major trends only). |
| **Trend Up / Trend Down Color** | Band colors per direction. |
| **Background Opacity** | Visibility of the bands. |

### Level Settings

| Setting | What it does |
|---|---|
| **Level Enable** | Displays horizontal reference lines. |
| **Level Value** | Numerical threshold for the level. |
| **Line Width / Color / Style** | Appearance — styles: **Solid**, **Dash**, **Dot**, **Dash Dot**, **Dash Dot Dot**. |

## Tips and common mistakes

- **Tune the ZigZag before trusting any label.** Too small a reversal setting turns noise into "swings" and floods the chart with meaningless NOE/NOR tags; too large hides the structure you trade.
- **Two labels beat four.** Start with Volume and Delta volume; add Vol per tick or Extension only when you actively use them.
- **Respect the liquidity caveat.** Overnight and holiday sessions produce unreliable effort/result signals — the volume base is too thin.
- **The last swing repaints by design.** ZigZag-based tools finalize a swing only after the reversal condition is met, so treat the current leg's label as provisional.
- **NOE and NOR are context, not entries.** Combine them with the trend bands and a location argument (support, resistance, value-area edge) before acting.

## Related articles

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[swing-point]]
- [[zig-zag]]
- [[volume]]
