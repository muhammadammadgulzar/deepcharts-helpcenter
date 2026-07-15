---
title: "Relative Strength Index (RSI)"
slug: "rsi"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Set up and interpret the Relative Strength Index (RSI), the classic 0–100 momentum oscillator for spotting overbought and oversold conditions."
keywords: ["rsi", "relative strength index", "overbought oversold", "rsi 70 30", "momentum oscillator", "wilder rsi", "rsi divergence", "rsi settings"]
---

The Relative Strength Index (RSI) is one of the most popular technical analysis indicators for evaluating the strength or weakness of an asset over a time period. Developed by J. Welles Wilder, it is a momentum oscillator that moves on a 0–100 scale and is primarily used to identify overbought or oversold conditions, which may indicate a reversal or a consolidation of price.

If you learn one oscillator first, make it this one — most other momentum tools are variations on the same theme.

## What it is

RSI compares the size of recent price increases against recent declines over the same window and expresses the result as a single curve between 0% and 100%. When gains have dominated, the curve rises toward the top of the scale; when losses have dominated, it falls toward the bottom.

The DeepCharts version adds an optional smoothed **Average** line on top of the RSI itself, which you can use as a signal line, plus configurable overbought/oversold level lines.

## When to use it

- To flag overbought (RSI above the overbought level) and oversold (below the oversold level) conditions that may precede a reversal or pause.
- To read momentum bias: RSI holding in the upper half of its range supports bullish momentum, the lower half bearish.
- To spot divergences: price making a new extreme while RSI does not is an early warning that momentum is fading (see [[divergence-detector]]).
- In ranges, as a mean-reversion timing tool — the environment where the classic 70/30 signals work best.

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Relative Strength Index" and click **+** to add it — it plots in its own panel below the price chart.
4. Click the gear icon next to the indicator to open its settings.

The defaults are the textbook configuration: **Length** 14 with the **Overbought Level** at 70 and the **Oversold Level** at 30. Leave them as they are while you learn the indicator; they are also what most other traders are watching, which matters for levels that act partly by consensus. Try it live below — drag the Length and level sliders, hover the curve for readings, and watch how the signal dots move.

[WIDGET: rsi-lab]

## How to read it

- **Above the overbought level (default 70)**: recent gains have strongly outweighed losses. This flags stretched momentum — it is a caution sign, not an automatic sell.
- **Below the oversold level (default 30)**: the mirror condition on the downside.
- **The 50 midline**: RSI spending its time above 50 indicates bullish momentum regime; below 50, bearish. Many trend traders use the midline rather than 70/30.
- **Divergence**: price prints a higher high while RSI prints a lower high (bearish divergence), or price a lower low while RSI a higher low (bullish divergence). Divergences warn that the move's momentum is thinning.
- **With the Average line enabled**: RSI crossing above its average is a momentum-turning-up cue, crossing below the opposite — similar to a signal line on [[macd|MACD]].

> **Warning:** In a strong trend, RSI can stay overbought or oversold for a long time while price keeps running. Fading every 70/30 touch in a trending market is the most expensive way to use this indicator.

## Settings reference

### Parameters — General

| Setting | What it does |
|---|---|
| **Input data** | Which price data feeds the calculation. See [[different-types-of-input]]. |
| **Length** | Number of periods used in the RSI calculation. Default: 14. Shorter lengths make the curve faster and noisier; longer lengths smooth it. |

### Parameters — Average

| Setting | What it does |
|---|---|
| **Enable** | Toggles the additional average (signal) line calculated on the RSI. |
| **Average Type** | The averaging methodology used for the signal line. |
| **Length** | Number of periods for the average. Default: 20. |

### Parameters — Level settings

| Setting | What it does |
|---|---|
| **Overbought Level** | The upper threshold line. Default: 70. Raise it (e.g. toward 80) to demand more extreme readings in strongly trending markets. |
| **Oversold Level** | The lower threshold line. Default: 30. |
| **Overbought Color** / **Oversold Color** | Colors of the two threshold lines. |
| **Level Width** | Width setting for the level lines. Default: 10. |

### Subgraph

| Setting | What it does |
|---|---|
| RSI line color / average line color / secondary color | Colors for the RSI curve, its average line, and the secondary color option. |
| Display style / line style / line width | How the curves are drawn and how thick. |
| Secondary axis display | Option to display the indicator on a secondary axis. |

[SCREENSHOT: The RSI settings dialog showing the General group (Input data, Length 14), the Average group (Enable, Average Type, Length 20) and the Level settings group (Overbought 70, Oversold 30) | rsi-settings.png]

## Tips and common mistakes

- **Context first.** The same RSI 75 reading is a fade candidate in a range and a strength confirmation in a fresh breakout. Decide what regime you are in — a trend filter like [[adx|ADX]] helps — before applying overbought/oversold logic.
- **Divergence needs confirmation.** A divergence is a warning, not an entry; wait for price structure (a break of a swing level) to confirm before acting on it.
- **Don't shorten Length to "see signals earlier".** A 5-period RSI produces constant extreme readings that mean very little; if you need faster signals, shorten your chart timeframe instead and keep the RSI window meaningful.
- **Use the Average line to cut noise**: requiring RSI to be above/below its own average filters a surprising number of false midline crosses.

## Related articles

- [[stochastic-oscillator]]
- [[macd]]
- [[williams-r]]
- [[divergence-detector]]
- [[different-types-of-input]]
- [[indicator-layout]]
