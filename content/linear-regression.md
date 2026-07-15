---
title: "Linear Regression"
slug: "linear-regression"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Reference for the Linear Regression indicator in DeepCharts: the best-fit trend line, input data and length settings, and line styling options."
keywords: ["linear regression line", "least squares", "regression indicator", "best fit line", "LSMA", "linear regression settings"]
---
The Linear Regression indicator calculates and displays a trend line based on the linear regression method — a line that minimizes the distance to price points over a specific period. Instead of averaging past prices like a moving average, it fits the statistically best straight line through them and plots where that line currently sits.

The result is a smooth curve that hugs the trend more closely than a moving average of the same length, helping you identify trend direction and forecast price movement through dynamic support and resistance.

## What it is

Linear Regression answers the question: if the last N bars were summarized by one straight line, where would that line be right now? Each bar, the indicator re-fits a least-squares line through the lookback window and plots its endpoint. Because the fit reacts to the trend's slope rather than lagging behind an average, the line turns faster at reversals while still smoothing bar-to-bar noise.

[SCREENSHOT: A candlestick chart with the Linear Regression line plotted over price, tracking closely along an uptrend and curling over at the reversal | linear-regression-on-chart.png]

## When to use it

- Reading trend direction with less lag than a moving average of comparable length.
- Identifying dynamic support and resistance zones as price oscillates around its statistical fair value.
- Spotting overextension: price far above or below the regression line tends to revert toward it.
- Building crossover or slope-based rules where responsiveness matters more than maximum smoothing.

## Quick start

1. Open a chart — see [[first-chart]].
2. Click the bar-chart icon in the chart's top-left icon row to open the **Indicators** panel, then click **Indicators** to open the full **Indicator List**.
3. Search for **Linear Regression** and click **+** to add it.
4. Click the gear icon to open its settings.
5. Starter configuration: leave **Input Data** on Close and **Length** at the default 21. Raise the length for a smoother, slower fit; lower it to track short swings.

[SCREENSHOT: Linear Regression settings dialog showing the Parameters section with Input Data set to Close and Length = 21, and the Subgraph styling section below | linear-regression-settings.png]

## How to read it

- **Slope** is the primary signal: an upward-sloping line means the best-fit trend of the window is up. A flattening slope is often the earliest hint that a trend is stalling.
- **Price vs. line**: closes consistently on one side of the line confirm the trend; price snapping back across it flags a possible character change.
- **Distance from the line** measures stretch. The regression line is the window's statistical center, so unusually large gaps between price and the line often precede mean reversion.
- **Versus a moving average**: with the same length, the regression line turns earlier at reversals but can overshoot in choppy conditions — it trades smoothness for responsiveness.

## Settings reference

### Parameters

| Setting | What it does |
|---|---|
| **Input Data** | The price source for the regression: Close, Open, High, Low, or Volume. Close is standard. |
| **Length** | Number of periods in the regression window. Default: 21. Shorter windows fit recent swings tightly; longer windows describe the broader trend. |

### Subgraph

| Setting | What it does |
|---|---|
| **Regression Line Color** | Color of the plotted line. |
| **Secondary Color** | Optional secondary color assignment. |
| **Subgraph Style** | Display style of the series. |
| **Line Style** | Line appearance definition. |
| **Line Width** | Thickness of the line. |
| **Use Secondary Axis** | Displays the indicator on an alternative axis. |

## Tips and common mistakes

- **Do not confuse it with a drawn regression trendline.** This indicator re-fits and plots a rolling endpoint each bar; if you want a full channel with deviation bands over a fixed span, use [[regression-channel]] instead.
- **Short lengths whip in ranges.** A tight fit through sideways noise flips slope constantly; either lengthen the window or require additional confirmation before acting on slope changes.
- **Extrapolate with care.** The line summarizes the past window — projecting its slope forward assumes the trend persists, which is an assumption, not a forecast.
- Volume as **Input Data** produces a regression of volume, not price — useful as a volume-trend study in a separate panel, not as a price overlay.

## Related articles

- [[regression-channel]]
- [[moving-average]]
- [[tillson-t3]]
- [[standard-deviation]]
- [[different-types-of-input]]
- [[indicator-layout]]
