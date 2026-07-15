---
title: "Commodity Channel Index (CCI)"
slug: "cci"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "How the Commodity Channel Index measures price deviation from its statistical mean, with interpretation guidance and every CCI setting in DeepCharts."
keywords: ["CCI", "commodity channel index", "cci indicator", "Lambert CCI", "cci overbought oversold"]
---

The Commodity Channel Index (CCI) measures how far an asset's price has deviated from its statistical mean value. Developed by Donald Lambert in the 1980s for commodity markets, it is now applied to stocks, currencies and indices as well, and is a staple tool for identifying overbought and oversold conditions.

In DeepCharts, CCI draws a single line in its own chart area around a zero line, with configurable overbought and oversold threshold lines and an optional smoothing average.

## What it is

CCI answers: is price unusually stretched away from its own average? A strongly positive reading means price is trading well above its typical level for the lookback window; a strongly negative reading means it is trading well below it. Because the index measures deviation rather than raw change, it is equally at home flagging mean-reversion opportunities in ranges and confirming strength in trends.

## When to use it

- You trade mean-reversion setups and want a statistical measure of "stretched" rather than a visual guess.
- You want to confirm breakout strength — a reading that holds deep in positive territory signals a strong upside deviation that is not immediately reverting.
- You are hunting divergences between price extremes and deviation extremes.
- You trade commodities or futures and want the tool that was designed for their cyclical behavior.

## Quick start

1. Open a chart and press **Ctrl I** — or click the bar-chart icon in the chart toolbar, then **Indicators** — to open the **Indicator List**.
2. Search for "Commodity Channel Index" (or "CCI") and click **+** to add it. The indicator renders in its own chart area below the price bars (see [[indicator-layout]]).
3. Click the gear icon on the indicator's row to open its settings.
4. Set **Input Data** to Close and pick a **Period** — 14 or 20 are the common textbook starting points. Set the overbought and oversold levels to match your extreme zone; +100 and −100 are the classic convention.

[SCREENSHOT: A chart with the CCI indicator in its own area below price, the line spiking above the overbought threshold line and rotating back toward zero | cci-on-chart.png]

## How to read it

- **Zero line.** A reading near zero means price is sitting at its statistical average for the window. The further the line travels from zero, the more stretched price is.
- **Extreme zones.** Most traders treat readings beyond ±100 as the extreme zone. In a range, a rotation back inside the zone is a classic mean-reversion trigger. In a trend, a reading that *holds* beyond +100 (or −100) is evidence of trend strength, not an automatic fade.
- **Divergence.** Price makes a new extreme while CCI makes a shallower one — the deviation is shrinking and the move may be exhausting.
- **Regime first.** The same reading means opposite things in a range and in a trend. Decide which market state you are in before you act on an extreme.

## Settings reference

Open the dialog from the gear icon on the indicator's row in the **Indicators** panel.

### Parameters — General

| Setting | What it does |
|---|---|
| **Input Data** | The data series used for the CCI calculation. See [[different-types-of-input]]. |
| **Period** | Number of periods in the calculation. Shorter periods produce more extreme-zone visits; longer periods reserve the extremes for genuinely unusual moves. |

### Parameters — Average

| Setting | What it does |
|---|---|
| **Enable** | Turns the optional average (smoothing) line on or off. |
| **Average Type** | Averaging method for the line — Simple, Exponential and other methods. |
| **Periods** | Number of periods for the average calculation. |

### Levels

| Setting | What it does |
|---|---|
| **Overbought level** | Position of the upper threshold line. ±100 is the classic convention. |
| **Oversold level** | Position of the lower threshold line. |
| **Zero line color** | Color of the center (zero) line. |

### Series

| Setting | What it does |
|---|---|
| **CCI line color** | Color of the main CCI line. |
| **Secondary color** | Optional additional color for the display. |
| **Average line color** | Color of the optional average line. |
| **Display style** | How the series is drawn in the chart area. |
| **Line style / Line width** | Rendering style and thickness of the lines. |
| **Use secondary axis** | Plots the indicator against a secondary value axis. |

[SCREENSHOT: The CCI settings dialog showing the General parameters with Input Data and Period, the Average section, and the Levels section with overbought, oversold and zero-line options | cci-settings-dialog.png]

## Tips and common mistakes

- **CCI is unbounded.** It can run far beyond ±100 in a strong trend — an overbought reading is not, by itself, a sell signal.
- **Fade in ranges, follow in trends.** Beyond-±100 readings are reversal material inside a range and continuation material inside a trend. Misapplying the range playbook to a trending market is the most common CCI mistake.
- **Smooth before you shorten.** If the line is too noisy, enable the Average section rather than cutting the Period — you keep the statistical meaning of the lookback while cleaning the display.
- **Keep Input Data consistent.** Backtest and trade the same input; switching the price source changes where the extremes land.

## Related articles

- [[rsi|Relative Strength Index (RSI)]]
- [[stochastic-oscillator]]
- [[williams-r|Williams %R]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]
