---
title: "Rate of Change (ROC)"
slug: "rate-of-change"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "How the Rate of Change indicator measures percentage price change over a lookback period, and every ROC setting in DeepCharts."
keywords: ["ROC", "rate of change indicator", "price rate of change", "percentage change indicator", "roc oscillator"]
---

Rate of Change (ROC) measures the percentage change in an asset's price over a set number of bars. It is a close cousin of the [[momentum]] indicator with one practical advantage: because the output can be expressed as a percentage, readings are comparable across symbols and price scales.

In DeepCharts, ROC draws a single line in its own chart area, oscillating around a zero line.

## What it is

ROC answers: how much has price changed, in percentage terms, compared with N bars ago? A reading above zero means price is higher than it was over the lookback window; below zero means it is lower. The steeper the line, the faster the change. Traders use it to assess trend strength, identify possible price reversals, detect overbought and oversold extremes, and confirm trend direction.

## When to use it

- You want a momentum reading you can compare across different instruments or timeframes.
- You want a clean, objective marker of trend direction — which side of zero the line is on.
- You are looking for overbought or oversold extremes relative to the symbol's own history.
- You want divergence signals to warn of a weakening move.

## Quick start

1. Open a chart and press **Ctrl I** — or click the bar-chart icon in the chart toolbar, then **Indicators** — to open the **Indicator List**.
2. Search for "Rate of Change" and click **+** to add it. ROC renders in its own chart area below the price bars (see [[indicator-layout]]).
3. Click the gear icon on the indicator's row to open its settings.
4. Keep the default **Period** of 10 to start, and use **Use Percent** to choose between percentage readings and absolute price change. Percentage is the more common way to read ROC.

[SCREENSHOT: A chart with the Rate of Change indicator in its own area below price, the ROC line crossing above the zero line as price breaks out | roc-on-chart.png]

## How to read it

- **Zero line.** Above zero, price is higher than it was N bars ago — the lookback window is net bullish. Below zero, net bearish. A zero-line cross marks the trend flipping over that window.
- **Slope and extremes.** A steep line means price is changing quickly. Unusually high or low readings — relative to the symbol's own recent range of ROC values — flag overbought and oversold conditions.
- **Confirmation.** A breakout accompanied by a rising ROC has speed behind it; a breakout with a flat ROC is suspect.
- **Divergence.** Price makes a new high while ROC makes a lower high (or the mirror at lows) — the move is decelerating.

## Settings reference

Open the dialog from the gear icon on the indicator's row in the **Indicators** panel.

### Parameters

| Setting | What it does |
|---|---|
| **Period** | Number of periods used in the ROC calculation. Default: 10. Shorter periods make a fast timing tool; longer periods describe the broader regime. |
| **Use Percent** | Toggles the output between percentage change and absolute price change. |

### Subgraph

| Setting | What it does |
|---|---|
| **ROC Color** | Color of the ROC line. |
| **Secondary Color** | Optional additional color for the display. |
| **Subgraph Style** | How the series is drawn in the chart area. |
| **Line Style** | Rendering style of the line. |
| **Line Width** | Thickness of the line. |
| **Use Secondary Axis** | Plots the indicator against a secondary value axis. |

[SCREENSHOT: The Rate of Change settings dialog showing Period 10, the Use Percent toggle and the Subgraph appearance options | roc-settings-dialog.png]

## Tips and common mistakes

- **Check Use Percent before comparing symbols.** With percentage output the readings are comparable across instruments; with absolute output they are in price points and only meaningful on that one chart.
- **There is no universal overbought number.** ROC is unbounded — calibrate extreme levels per symbol and per timeframe by looking at where past reversals happened.
- **ROC and Momentum overlap.** They measure the same thing on different scales; running both on one chart adds no information. Pick one — ROC if you want percentage normalization.
- **Beware single-bar distortions.** A large bar dropping out of the back of the lookback window can move the reading even when current price is quiet. Longer periods soften this effect.

## Related articles

- [[momentum]]
- [[rsi|Relative Strength Index (RSI)]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]
