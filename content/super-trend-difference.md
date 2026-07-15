---
title: "Super Trend Difference"
slug: "super-trend-difference"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Reference for the Super Trend Difference indicator in DeepCharts: the price-to-Super-Trend histogram, ATR length and multiplier, and histogram styling."
keywords: ["supertrend difference", "super trend histogram", "supertrend oscillator", "price distance from supertrend", "trend momentum histogram"]
---
Super Trend Difference plots the distance between the current price and the Super Trend line as a histogram in a separate panel. Instead of only telling you which side of the trend you are on, it shows how far price has traveled from the trend line — a quick read on momentum and potential exhaustion.

It uses the same ATR-based calculation as [[super-trend]], so the two indicators pair naturally: Super Trend on the price chart for direction, Super Trend Difference below it for the strength of that direction.

## What it is

The indicator answers the question: is the trend gaining or losing steam? Each bar of the histogram is the difference between price and the Super Trend line. Positive bars mean price is above the line (bullish state); negative bars mean price is below it (bearish state). Growing bars show price pulling away from the trend line; shrinking bars show price closing back in on it — often the first hint of a stall or reversal before the Super Trend line itself flips.

[SCREENSHOT: A candlestick chart with Super Trend on price and the Super Trend Difference histogram in a panel below, showing positive green bars shrinking toward zero ahead of a trend flip | super-trend-difference-on-chart.png]

## When to use it

- Gauging momentum behind a Super Trend signal — a flip backed by rapidly growing histogram bars carries more conviction than one that barely clears zero.
- Spotting early exhaustion: bars shrinking toward zero while price still trends warn that the move is decelerating.
- Timing exits ahead of the flip — many traders scale out as the histogram contracts rather than waiting for Super Trend to switch sides.
- Comparing swing strength: successively lower histogram peaks during an uptrend suggest weakening pushes.

## Quick start

1. Open a chart — see [[first-chart]].
2. Click the bar-chart icon in the chart's top-left icon row to open the **Indicators** panel, then click **Indicators** to open the full **Indicator List**.
3. Search for **Super Trend Difference** and click **+** to add it.
4. Click the gear icon to open its settings.
5. Starter configuration: keep **Length** at 10 and **Multiplier** at 3.00 — and if you run [[super-trend]] on the same chart, use identical values on both so the histogram matches the line you see on price.

[SCREENSHOT: Super Trend Difference settings dialog showing General parameters Length = 10 and Multiplier = 3.00, with the Subgraphs section showing Auto Color +/- and Line Width 4 | super-trend-difference-settings.png]

## How to read it

- **Sign** = trend state. Positive histogram: price above the Super Trend line. Negative: below it.
- **Height** = distance. Taller bars mean price is stretched further from the line. Because the line is ATR-based, some of that height is volatility — compare against recent bars, not absolute values.
- **Slope of the bars** is the actionable part: expanding bars confirm momentum with the trend; contracting bars mean price is converging on the line and a flip is getting closer.
- **Zero cross** happens at the same moment the Super Trend line flips sides — the histogram does not lead the flip itself, but its contraction beforehand often does.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Length** | Defines the period length for calculating the Average True Range (ATR) used in the Super Trend calculation. Default: 10. Higher values reduce sensitivity to short-term fluctuations; lower values increase responsiveness. |
| **Multiplier** | Sets the multiplier for the ATR value, which determines the distance of the Super Trend line from price. Default: 3.00. Higher multipliers produce larger difference values in the histogram. |

### Chart Settings

| Setting | What it does |
|---|---|
| **Chart Area** | **Horizontal** displays the histogram above or below the main chart; **Vertical** displays it in a separate vertical panel. |
| **Use Sec. Axis** | Plots on a secondary axis for independent scaling. |

### Subgraphs

| Setting | What it does |
|---|---|
| **Color** | Primary color for histogram bars when the difference is positive (bullish conditions). |
| **2° Color** | Secondary color for histogram bars when the difference is negative (bearish conditions). |
| **Subgraph Style** | Default displays the data as a histogram with vertical bars. |
| **Auto Color** | The **+/-** setting automatically assigns colors based on positive or negative values. |
| **Line Style** | Default: Solid, for filled bars. |
| **Line Width** | Default: 4. Wider bars increase prominence; narrower bars can become hard to see at some zoom levels. |
| **Short Name** | Custom label used to identify the indicator in the chart legend. |

## Tips and common mistakes

- **Match the parameters to your Super Trend overlay.** If the histogram uses a different **Length** or **Multiplier** than the Super Trend line on your price chart, the zero crosses will not line up with the visible flips and the two tools will appear to disagree.
- **Do not read raw height as strength across instruments or sessions.** ATR scales with volatility, so a "tall" bar on a quiet day may be smaller in points than a modest bar on a volatile one. Compare bars to their recent neighbors.
- **Contraction is a warning, not a signal.** Bars shrinking toward zero flag deceleration; wait for your entry/exit criteria rather than treating every contraction as a reversal.
- If the histogram panel is cramped or in the wrong position, rearrange chart areas — see [[indicator-layout]].

## Related articles

- [[super-trend]]
- [[atr]]
- [[macd]]
- [[momentum]]
- [[different-types-of-input]]
- [[indicator-layout]]
