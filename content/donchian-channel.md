---
title: "Donchian Channel"
slug: "donchian-channel"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Plot the highest high and lowest low over a lookback period with the Donchian Channel to spot breakouts, trend direction and volatility expansion."
keywords: ["donchian channel", "donchian", "highest high lowest low", "breakout channel", "price channel", "turtle channel", "donchain"]
---

The Donchian Channel plots two lines around price: the highest high and the lowest low of a chosen number of past bars. The result is a channel that contains all recent price action, making breakouts and consolidations unmistakable.

It is one of the simplest indicators to understand — there is exactly one parameter — which makes it a good first channel indicator before moving on to volatility-based bands.

## What it is

The channel answers the question "where are the recent extremes, and is price breaking beyond them?" It consists of two elements:

- **Upper Line** — the highest high of the lookback period.
- **Lower Line** — the lowest low of the lookback period.

When price touches or exceeds the upper line, it is making a new high for the period; the same logic applies to the lower line for new lows. The vertical distance between the lines is a direct read of recent range: a widening channel means volatility expansion, a narrow channel means compression.

## When to use it

- To trade breakouts: a close beyond the channel means price has exceeded every high or low in the lookback window.
- To read trend direction: in an uptrend the upper line steps upward repeatedly while the lower line trails behind.
- To spot volatility expansion and contraction from the channel width.
- To locate support and resistance: the channel lines mark the period's extremes, which often act as reaction levels.

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Donchian Channel" and click **+** to add it.
4. Click the gear icon next to the indicator to open its settings and set **Length** to the lookback you want to trade against — a shorter length hugs price for short-term signals, a longer one defines the bigger structure.

[SCREENSHOT: A price chart with the Donchian Channel plotted — upper and lower lines stepping around the candles, with a recent breakout candle closing above the upper line | donchian-channel-on-chart.png]

## How to read it

- **Breakout above the Upper Line**: price has printed a new high for the entire lookback period — bullish momentum. A breakout below the Lower Line is the bearish mirror.
- **Stair-stepping lines**: an upper line that keeps ratcheting higher while the lower line rises behind it is trend behavior; use the lower line as a trailing reference.
- **Flat, narrow channel**: price has not made a new extreme in the whole window — consolidation. Compressed channels often precede expansions, so a squeeze is a reason to watch for the next breakout.
- **Channel width**: widening = volatility expanding; narrowing = volatility contracting. Compare with [[atr|ATR]] if you want the same information as a single number.

## Settings reference

### Parameters

| Setting | What it does |
|---|---|
| **Length** | How many past bars are used to calculate the highest high (Upper Line) and lowest low (Lower Line). Increasing the length widens the channel and slows its reactivity; decreasing it makes the channel more sensitive to recent price movement. |

### Subgraphs

| Setting | What it does |
|---|---|
| **Donchian_Channel** | Controls the visual styling of the indicator: line colors, subgraph style, auto-coloring, line style, line width and a custom short-name label. |
| **+DI (Upper Line)** | The subgraph representing the highest high over the selected period. |
| **-DI (Lower Line)** | The subgraph representing the lowest low over the selected period. |

> **Note:** The upper and lower lines appear in the settings dialog under the subgraph names **+DI** and **-DI**. They are the Donchian upper and lower lines, not the directional-movement lines from [[adx|ADX]].

Each subgraph also exposes display options: **Name Label**, **Value Label**, **Name Background**, **Value Background**, **Include on Auto Center**, and **Chart color for marker** — these control how the line is labeled and whether it influences the chart's auto-centering.

[SCREENSHOT: The Donchian Channel settings dialog showing the Length parameter and the subgraph rows for Donchian_Channel, +DI (Upper Line) and -DI (Lower Line) with their display options | donchian-channel-settings.png]

## Tips and common mistakes

- **Match Length to your holding period.** A day trader reading a 5-minute chart and a swing trader reading a daily chart should not use the same lookback; the channel is only meaningful relative to the horizon you trade.
- **A touch is not a breakout.** Price tagging the upper line only means it equaled the period high; many traders wait for a close beyond the channel to filter noise.
- **Expect whipsaws in ranges.** In sideways markets price repeatedly pokes both extremes; combine the channel with a trend-strength filter such as [[adx|ADX]] before trading breakouts.
- **Don't confuse it with volatility bands.** [[bollinger-bands|Bollinger Bands]] and the [[keltner-channel|Keltner Channel]] are built from averages and volatility; the Donchian Channel is pure price extremes, so it behaves differently around quiet periods.

## Related articles

- [[keltner-channel]]
- [[bollinger-bands]]
- [[atr]]
- [[adx]]
- [[different-types-of-input]]
- [[indicator-layout]]
