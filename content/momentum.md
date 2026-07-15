---
title: "Momentum"
slug: "momentum"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "How the Momentum indicator measures the speed of price movement, how to read acceleration and divergence, and every setting in DeepCharts."
keywords: ["momentum indicator", "MOM", "price velocity", "speed of price", "momentum oscillator", "momentun"]
---

The Momentum indicator measures the speed — or pace — of an asset's price movements: how quickly price is changing relative to prior periods. It is one of the simplest oscillators available, which is exactly why it is useful for spotting acceleration and deceleration phases that candles alone can hide.

In DeepCharts, Momentum draws a single line in its own chart area, with an optional moving-average line you can enable as a smoother or signal line.

## What it is

Momentum answers: is this move speeding up or slowing down? The indicator evaluates how far price has changed over a set lookback (**Length**, 14 periods by default). When price advances at an increasing pace the line rises; when the advance slows — even while price is still making new highs — the line flattens or turns down. That early loss of speed is the indicator's main value: momentum usually stalls before price does.

## When to use it

- You want to gauge the strength of the current trend, not only its direction.
- You want early warning of a reversal — a fading momentum line while price still pushes on.
- You need to spot acceleration and deceleration phases, for example around a breakout.
- You want a raw, unsmoothed momentum reading to pair with a slower indicator such as [[macd]].

## Quick start

1. Open a chart and press **Ctrl I** — or click the bar-chart icon in the chart toolbar, then **Indicators** — to open the **Indicator List**.
2. Search for "Momentum" and click **+** to add it. The indicator renders in its own chart area below the price bars (see [[indicator-layout]]).
3. Click the gear icon on the indicator's row to open its settings.
4. Keep the defaults to start: **Input Data** Close, **Length** 14. If the line is too jumpy for your timeframe, switch to the **Average** section, enable the average line and leave it at Simple with 20 periods.

[SCREENSHOT: A chart with the Momentum indicator in its own area below price, the momentum line rising steeply during a price advance and its optional average line enabled | momentum-on-chart.png]

## How to read it

- **Slope first.** A rising line means price is changing faster than it was over the lookback window; a falling line means the pace is fading. Direction and slope carry the information — the absolute value depends on the symbol's price scale.
- **Momentum leads price at turns.** Momentum peaks frequently form before price peaks. A line that flattens while price grinds higher is a deceleration warning.
- **Average-line crossings.** With the average enabled, the momentum line crossing its average is a cleaner trigger than reading raw wiggles.
- **Divergence.** Price makes a new high while the momentum line makes a lower high (or the mirror at lows) — the move is running on less speed and is more vulnerable to reversal.

## Settings reference

Open the dialog from the gear icon on the indicator's row in the **Indicators** panel.

### Parameters — General

| Setting | What it does |
|---|---|
| **Input Data** | The data series fed into the calculation — Close, Open, High, Low or Volume. Close is standard; selecting Volume applies the same calculation to volume instead of price. See [[different-types-of-input]]. |
| **Length** | Number of periods for the momentum calculation. Default: 14. Shorter lengths react faster but add noise; longer lengths show the broader swing. |

### Parameters — Average

| Setting | What it does |
|---|---|
| **Enable** | Turns the average (signal) line on or off. |
| **Average Type** | Moving-average method for the signal line: Simple, Exponential, Triangular or Weighted. |
| **Periods** | Number of periods for the average calculation. Default: 20. |

### Subgraph

| Setting | What it does |
|---|---|
| **Momentum line color** | Color of the main momentum line. |
| **Average line color** | Color of the optional average line. |
| **Secondary color** | Optional additional color for the display. |
| **Display style** | How the series are drawn in the chart area. |
| **Line style / Line width** | Rendering style and thickness of the lines. |
| **Use secondary axis** | Plots the indicator against a secondary value axis. |

[SCREENSHOT: The Momentum settings dialog showing Input Data set to Close, Length 14, and the Average section with Average Type and Periods 20 | momentum-settings-dialog.png]

## Tips and common mistakes

- **Momentum is unbounded.** There is no fixed overbought or oversold threshold — compare the current reading against the symbol's own recent extremes, not against a universal number.
- **Do not compare values across symbols.** The reading scales with the instrument's price, so cross-symbol comparisons are meaningless; if you need a normalized version, use [[rate-of-change]] instead.
- **Use the average line as the trigger.** Raw momentum whipsaws on fast charts; the cross of momentum through its enabled average filters most of the noise.
- **Match Length to your holding period.** A 14-period momentum on a 1-minute chart describes the last quarter hour — do not read it as trend information for a swing trade.

## Related articles

- [[rate-of-change|Rate of Change (ROC)]]
- [[macd]]
- [[rsi|Relative Strength Index (RSI)]]
- [[awesome-oscillator]]
- [[different-types-of-input]]
- [[indicator-layout]]
