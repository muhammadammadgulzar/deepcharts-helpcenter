---
title: "MACD"
slug: "macd"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "What the MACD line, signal line and histogram show, how to read crossovers and divergence, and every MACD setting in DeepCharts."
keywords: ["moving average convergence divergence", "macd histogram", "macd signal line", "macd crossover", "macd divergence", "mcad"]
---

MACD (Moving Average Convergence Divergence) turns the relationship between two exponential moving averages into a compact momentum display: a MACD line, a signal line and a histogram. Developed by Gerald Appel in the 1970s, it remains one of the most widely used indicators in technical analysis.

This reference covers adding MACD to a DeepCharts chart, reading its three components, and every option in its settings dialog.

## What it is

MACD answers one question: is short-term momentum strengthening or weakening relative to the longer-term trend? It compares a fast exponential moving average (12 periods by default) with a slow one (26 periods by default). The MACD line tracks the distance between the two averages, the signal line is a smoothed companion to the MACD line, and the histogram shows the gap between the two — a quick visual for momentum building or fading.

Because it is built entirely from moving averages, MACD is a lagging indicator: it confirms momentum shifts rather than predicting them.

## When to use it

- You want one panel that shows both trend direction and momentum strength.
- You need confirmation before acting on a price level or pattern — a MACD cross in the same direction adds weight.
- You are watching for divergence: price making a new extreme while momentum does not.
- You want an objective definition of "momentum turned" (a line crossing) instead of eyeballing candles.

## Quick start

1. Open a chart and press **Ctrl I** — or click the bar-chart icon in the chart toolbar, then **Indicators** — to open the **Indicator List**.
2. Type "MACD" in the search box and click **+** next to the indicator. MACD renders in its own chart area below the price bars (see [[indicator-layout]] to move or resize it).
3. Click the gear icon on the indicator's row to open its settings.
4. For a first configuration, keep the defaults: **Fast EMA Period** 12, **Slow EMA Period** 26 and **Input Data** set to Close. You can try those choices in the live MACD below — drag the fast, slow and signal sliders and watch how the histogram and crossover count respond.

[WIDGET: macd-lab]

## How to read it

- **Zero line.** MACD above zero means the fast average is above the slow one — momentum is on the bullish side. Below zero, the bearish side.
- **Crossovers.** The MACD line crossing above the signal line marks momentum turning up; crossing below marks it turning down. Crossovers that happen far from the zero line carry more weight than ones right at it.
- **Histogram.** Each bar is the distance between the MACD and signal lines. Shrinking bars mean the move is losing momentum, and often precede a crossover by a few bars.
- **Divergence.** Price prints a new high while MACD prints a lower high (or the mirror image at lows) — the move is running on less momentum and is more vulnerable to a reversal.

[SCREENSHOT: Close-up of the MACD chart area showing the histogram shrinking into a signal-line crossover, with the crossover bar highlighted | macd-histogram-crossover.png]

## Settings reference

Open the dialog from the gear icon on the indicator's row in the **Indicators** panel.

### Parameters

| Setting | What it does |
|---|---|
| **Fast EMA Period** | Length of the fast moving average. Default: 12. Lower it for earlier but noisier signals. |
| **Slow EMA Period** | Length of the slow moving average. Default: 26. Raise it to focus on longer swings. |
| **Input Data** | The data series fed into the calculation — Close, Open, High, Low or Volume. Close is the standard choice; see [[different-types-of-input]] for when the others make sense. |
| **Smooth** | Smoothing applied to the MACD line. Keep the default unless the line is too jagged to read on fast timeframes. |

[CONFIRM: whether the signal-line period is configurable in this dialog and what its default value is]

### Subgraph

| Setting | What it does |
|---|---|
| **Histogram color** | Color of the histogram bars. |
| **Signal color** | Color of the signal line. |
| **MACD color** | Color of the MACD line. |
| **Secondary color** | Optional additional color for the indicator display. |
| **Subgraph style** | How the series are drawn in the chart area. |
| **Line style** | Line rendering style for the MACD and signal lines. |
| **Line width** | Thickness of the lines. |
| **Use secondary axis** | Plots the indicator against a secondary value axis. |

[SCREENSHOT: The MACD settings dialog open on the Parameters section, showing Fast EMA Period 12, Slow EMA Period 26, the Input Data dropdown and the Smooth option | macd-settings-parameters.png]

## Tips and common mistakes

- **MACD lags by design.** It is built from moving averages, so use it to confirm a move you already have a reason to expect, not to predict one.
- **Chop kills crossovers.** In a sideways market MACD hugs the zero line and whipsaws. Filter by taking only crossovers on the trend side of zero, or pair it with a [[moving-average]] trend filter.
- **A histogram flip is not a crossover.** The histogram changes direction before the lines actually cross — treat it as an early warning, not a completed signal.
- **Absolute values are not comparable across symbols.** MACD is measured in price units, so a reading of 5 on one instrument tells you nothing about a reading of 5 on another. Read it within one chart only.

## Related articles

- [[rsi|Relative Strength Index (RSI)]]
- [[stochastic-oscillator]]
- [[momentum]]
- [[moving-average]]
- [[different-types-of-input]]
- [[indicator-layout]]
