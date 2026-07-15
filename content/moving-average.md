---
title: "Moving Average"
slug: "moving-average"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Reference for the Moving Average indicator in DeepCharts: input data, length, average types (Simple, Exponential, Triangular, Weighted), alerts, and styling."
keywords: ["MA", "simple moving average", "SMA", "EMA", "exponential moving average", "weighted moving average", "triangular moving average", "moving avarage"]
---
The Moving Average is one of the most widely used technical analysis tools. It draws a line on the chart representing the average value of an instrument's prices over a chosen number of periods, smoothing out bar-to-bar noise so the underlying direction is easier to see.

In DeepCharts you can choose which price the average is built from, how many periods it covers, and which averaging formula is used — then style the line and attach alerts to it.

## What it is

A moving average answers the question: where has price been trading, on average, over the last N bars? Because each new bar pushes the oldest one out of the calculation, the line "moves" with the market. Traders use it to analyze trends, identify potential price reversals, and create buy or sell signals — for example when price crosses the line, or when a fast average crosses a slow one. Try it live below — toggle between Simple and Exponential and drag the length slider to see how the line trades responsiveness for smoothness.

[WIDGET: ma-lab]

## When to use it

- Reading the direction and strength of a trend at a glance — a rising average under price is an uptrend context, a falling one above price a downtrend context.
- Filtering trade direction: many traders only take longs while price holds above a chosen average.
- Watching for crossovers — price crossing the average, or two averages of different lengths crossing each other.
- Using the line as dynamic support or resistance in trending markets.

## Quick start

1. Open a chart — see [[first-chart]] if you have not yet.
2. Click the bar-chart icon in the chart's top-left icon row to open the **Indicators** panel, then click **Indicators** to open the full **Indicator List**.
3. Search for **Moving Average** and click **+** to add it.
4. Click the gear icon next to the indicator to open its settings.
5. Starter configuration: leave **Input** on Close and **Length** at its default of 21, and pick **Simple** or **Exponential** as the **Type Average**. Adjust the length later to match your timeframe — shorter for faster reaction, longer for smoother trend context.

[SCREENSHOT: Moving Average settings dialog open, showing the Parameters section with Input, Length set to 21 and the Type Average dropdown expanded listing Simple, Exponential, Triangular and Weighted | moving-average-settings.png]

## How to read it

- **Slope**: a rising line means the average price is increasing — trend context is up. A flat line means a range; averages produce their worst signals in ranges.
- **Price vs. line**: price holding above the average suggests buyers are in control; repeated closes below it suggest the trend is weakening or reversing.
- **Crossovers**: a shorter average crossing above a longer one is a classic bullish signal, and the reverse bearish. Crossovers lag by design — they confirm a move that has already started.
- **Average type matters**: an Exponential average weights recent prices more heavily and reacts faster than a Simple average of the same length; Triangular is smoothest, Weighted sits in between.

## Settings reference

### Parameters

| Setting | What it does |
|---|---|
| **Input** | The price data the average is calculated from: Close, Open, High, Low, or volume. Close is the usual choice; use High/Low for envelope-style studies. |
| **Length** | Number of periods in the calculation. Default: 21. Lower it for faster reaction, raise it for smoother, slower trend context. |
| **Type Average** | The averaging formula: **Simple**, **Exponential**, **Triangular**, or **Weighted**. Exponential and Weighted emphasize recent bars; Triangular double-smooths. |

### Alerts

| Setting | What it does |
|---|---|
| **Enable Alert Sound** | Plays an audio notification when the alert triggers. |
| **Enable Alert Message** | Shows a popup alert message when triggered. |
| **Alert Name** | A custom label for the notification, useful when running several alerts at once. |

### Subgraph

| Setting | What it does |
|---|---|
| **Moving Average Color** | Color of the plotted line. |
| **Secondary Color** | Optional complementary color. |
| **Subgraph Style** | How the series is displayed. |
| **Line Style** | Line appearance (solid, dashed, and so on). |
| **Line Width** | Thickness of the line. |
| **Use Secondary Axis** | Plots the indicator on an alternative axis — useful when overlaying series with different scales. |

## Tips and common mistakes

- **Do not treat one length as universal.** The default 21 is a reasonable starting point, but the "right" length depends on your timeframe and how much smoothing you want — test before relying on it.
- **Ranges generate false crossovers.** In sideways markets price whipsaws across the average constantly; combine the MA with a trend filter such as [[adx]] before acting on crosses.
- **Faster is not always better.** An Exponential average reacts sooner but also produces more noise-driven signals than a Simple average of the same length.
- If the line renders in the wrong place or you want it in its own panel, see [[indicator-layout]] for arranging chart areas.

## Related articles

- [[super-trend]]
- [[parabolic-sar]]
- [[linear-regression]]
- [[adx]]
- [[different-types-of-input]]
- [[indicator-layout]]
