---
title: "Chaikin Accumulation/Distribution"
slug: "chaikin-ad"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Classic cumulative indicator that combines price position and volume to show whether a market is being accumulated or distributed."
keywords: ["chaikin ad", "accumulation distribution", "chaikin accumulation distribution", "A/D line", "AD line", "accumulation distribution line", "chaikin indicator"]
---

Chaikin Accumulation/Distribution (AD) measures buying and selling pressure by combining price and volume into a single cumulative line. It answers a question raw volume cannot: was that volume traded while price closed strong, or while price closed weak?

Unlike DeepCharts' orderflow delta tools, which classify trades by aggressor at the bid or ask, Chaikin AD is a classic price-based estimate — it infers pressure from where each candle closes within its range, weighted by volume. That makes it usable on any data and a good bridge between traditional technical analysis and orderflow.

## What it is

The AD line calculates cumulative buying and selling pressure using the price location within the candle and its volume. A close near the high of the bar contributes positively (accumulation); a close near the low contributes negatively (distribution). These contributions are summed over time, so the line's direction matters more than its absolute value: a rising AD line indicates accumulation, a falling AD line indicates distribution.

[SCREENSHOT: Chart window with the Chaikin Accumulation/Distribution indicator in a footer panel — the AD line rising in step with an uptrend, with the optional average line overlaid | chaikin-ad-chart-overview.png]

## When to use it

- You want to confirm a trend: price rising together with a rising AD line means volume supports the move.
- You hunt divergences: price makes a new high while the AD line does not — volume-weighted pressure is not confirming, a classic warning sign.
- You want an accumulation/distribution read on markets or data where true bid/ask delta is unavailable.
- You prefer a smooth, cumulative pressure gauge over bar-by-bar readings like [[delta-bar]].

## Quick start

1. Open the **Indicator List** on your chart and add **Chaikin Accumulation/Distribution**.
2. Open the indicator's **Settings**.
3. In the **Average** section, turn **Enable** on to plot a signal average over the AD line.
4. Choose an **Average Type** (start with **Exponential** for responsiveness) and set **Avg Length** to a period matching your trading horizon.
5. Leave the **AD** subgraph on its default **Line** style with **Solid** line style.

[SCREENSHOT: Chaikin Accumulation/Distribution settings dialog showing the Average section (Enable, Average Type, Avg Length) and the AD subgraph configuration below it | chaikin-ad-settings-dialog.png]

## How to read it

- **Rising AD line** — accumulation: closes are landing in the upper part of their ranges on meaningful volume.
- **Falling AD line** — distribution: volume is trading while price closes weak.
- **AD crossing its average line** — a momentum shift in cumulative pressure; many traders use the cross as a trend-confirmation trigger rather than a standalone signal.
- **Divergence** — price trend and AD trend point in opposite directions. Bearish divergence (higher price highs, lower AD highs) suggests the rally lacks volume support; bullish divergence is the mirror image.

Because the line is cumulative, its absolute level is arbitrary — compare slope and swing structure, never the raw number.

## Settings reference

### Average

| Setting | What it does |
|---|---|
| **Enable** | Toggles the signal average line drawn over the AD values. |
| **Average Type** | Moving-average method for the signal line: **Simple**, **Exponential**, **Triangular**, or **Weighted**. |
| **Avg Length** | Number of periods used for smoothing the average line. |

### AD (subgraph)

| Setting | What it does |
|---|---|
| **Color** / **2° Color** | Primary and secondary colors for the AD line. |
| **Subgraph Style** | **Line** or **Hidden** (hide the raw AD line and show only the average). |
| **Auto Color** | **None**, **Slope** (color by line direction), or **+/-** (color by sign). |
| **Line Style** | Line rendering. Default **Solid**. |
| **Line Width** | Thickness of the AD line. |
| **Short Name** | Custom label shown in the panel legend. |

### AVG (subgraph)

| Setting | What it does |
|---|---|
| **Color / Style / Width** | Visual configuration of the average line, independent of the AD line, letting you visually separate the smoothed signal from the raw values. |

### Display

| Setting | What it does |
|---|---|
| **Name Label** | Shows the indicator name in the panel. |
| **Value Label** | Shows the current value next to the line. |
| **Name/Value Background** | Draws a background behind the labels for readability. |
| **Include on Auto Center** | Includes this indicator when the panel auto-centers its scale. |

## Tips and common mistakes

- **Slope, not level.** Traders new to cumulative indicators try to read the AD value itself. It has no fixed scale — only direction and divergence carry information.
- **Watch for gap distortion.** The calculation uses close position within each bar's range, so it does not account for opening gaps; on gap-heavy instruments treat single-bar readings with caution.
- **Use Auto Color: Slope** for a fast visual read — the line changes color the moment cumulative pressure turns.
- **Pair it with true delta.** On futures with full orderflow data, confirm AD divergences against real aggressor delta ([[delta-cumulative-histogram]]) before acting; the estimate and the tape occasionally disagree.

## Related articles

- [[volume]]
- [[delta-cumulative-histogram]]
- [[divergence-detector]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
