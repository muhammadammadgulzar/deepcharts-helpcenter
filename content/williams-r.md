---
title: "Williams %R"
slug: "williams-r"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "How Williams %R locates the close inside the recent high-low range to flag overbought and oversold conditions, with every setting in DeepCharts."
keywords: ["williams percent r", "%R", "W%R", "william r", "williams r indicator", "overbought oversold"]
---

Williams %R is a momentum oscillator that measures overbought and oversold conditions by comparing the closing price with the high–low range over a specified lookback period. It is one of the fastest-reacting oscillators available, which makes it popular for short-term timing.

In DeepCharts, the indicator plots values between 0 and 100 in its own chart area, with configurable high, middle and low reference levels and an optional smoothing average.

## What it is

Williams %R answers: where inside its recent range is price closing right now? A close near the top of the range over the lookback pushes the reading toward the top of the scale; a close near the bottom pushes it toward the bottom. In DeepCharts, values above 80 suggest overbought conditions (potential selling opportunities) and values below 20 suggest oversold conditions (potential buying opportunities).

The raw line is deliberately twitchy. The built-in **Average** section can smooth it when you want fewer, cleaner signals.

## When to use it

- You need fast reversal timing at the edges of a trading range — %R reacts more quickly than most oscillators.
- You want a second opinion that confirms an [[rsi]] or [[stochastic-oscillator]] signal.
- You want a slope-based read of momentum — the **Auto Color** Slope option colors the line by whether it is rising or falling.
- You trade short timeframes where a slower oscillator would signal too late.

## Quick start

1. Open a chart and press **Ctrl I** — or click the bar-chart icon in the chart toolbar, then **Indicators** — to open the **Indicator List**.
2. Search for "Williams" and click **+** to add the indicator. It renders in its own chart area below the price bars (see [[indicator-layout]]).
3. Click the gear icon on the indicator's row to open its settings.
4. Keep the defaults to start: **Length** 14 with the **High Level** at 80, **Middle Level** at 50 and **Low Level** at 20. If the line is too noisy for your timeframe, enable the **Average** section (Simple, 20 bars) to smooth it.

[SCREENSHOT: A chart with the Williams %R indicator in its own area below price, the line dipping under the 20 low level and turning back up, with the 80/50/20 level lines visible | williams-r-on-chart.png]

## How to read it

- **Extreme zones.** Above the high level (80 by default), price is closing near the top of its recent range — overbought. Below the low level (20), it is closing near the bottom — oversold.
- **Exit beats entry.** The line leaving an extreme zone (crossing back under 80, or back over 20) is a stronger timing cue than the line first entering the zone.
- **Middle level as bias.** The 50 line is a midpoint reference: readings holding above it lean bullish, below it bearish.
- **Trends pin the reading.** In a strong trend, %R can sit at an extreme for many bars. Treat extremes as reversal zones only when the market is ranging.

## Settings reference

Open the dialog from the gear icon on the indicator's row in the **Indicators** panel.

### Parameters

| Setting | What it does |
|---|---|
| **Length** | The lookback period for the %R calculation. Default: 14. Shorter periods increase sensitivity; longer periods smooth the results. |

### Average

| Setting | What it does |
|---|---|
| **Enable** | Applies moving-average smoothing to the %R line to reduce noise and clarify the trend. |
| **Average Type** | Smoothing method: Simple (equal weighting), Exponential (emphasizes recent values), Triangular (double smoothing) or Weighted (progressive weighting). |
| **Average Length** | Length of the smoothing average. Default: 20 bars. Higher values create a smoother line. |

### Levels

| Setting | What it does |
|---|---|
| **Middle Level** | Midpoint reference line. Default: 50. |
| **Low Level** | Oversold threshold line. Default: 20. |
| **High Level** | Overbought threshold line. Default: 80. |

Each level line has its own color and width settings (default line width: 1).

### Subgraph

| Setting | What it does |
|---|---|
| **Subgraph Style** | How the series is drawn. Default: Line, a continuous line of the values. |
| **Auto Color** | The Slope option changes the line color based on whether momentum is rising or falling. |
| **Line Style** | Default: Solid; dashed and dotted alternatives are available. |
| **Line Width** | Thickness of the line. Default: 1. |
| **Short Name** | The label shown for the indicator. Default: "W%R". |

[SCREENSHOT: The Williams %R settings dialog showing Length 14, the Average section with Average Type options, and the Levels section with Middle 50, Low 20 and High 80 | williams-r-settings-dialog.png]

## Tips and common mistakes

- **Mind the scale.** Textbook definitions quote Williams %R on a 0 to −100 scale. DeepCharts displays the equivalent information on a 0 to 100 scale, so "above 80" here corresponds to the textbook's "above −20". The signals are the same; only the axis labels differ.
- **%R duplicates the Stochastic K line.** Both measure the close's position inside the recent range — running Williams %R alongside [[stochastic-oscillator]] adds no new information. Pick one.
- **Smooth on fast charts.** On low timeframes the raw line whipsaws constantly; enabling the Average section is usually better than lengthening the lookback.
- **Do not fade a pinned extreme.** A reading parked above 80 in a strong uptrend is trend information, not a sell signal.

## Related articles

- [[stochastic-oscillator]]
- [[rsi|Relative Strength Index (RSI)]]
- [[cci|Commodity Channel Index (CCI)]]
- [[momentum]]
- [[different-types-of-input]]
- [[indicator-layout]]
