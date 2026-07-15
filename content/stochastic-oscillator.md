---
title: "Stochastic Oscillator"
slug: "stochastic-oscillator"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "How the Stochastic Oscillator's K and D lines locate the close inside the recent range, with every parameter, level and display setting in DeepCharts."
keywords: ["stochastics", "stochastic indicator", "%K", "%D", "K line", "D line", "overbought oversold", "stocastic"]
---

The Stochastic Oscillator measures where the most recent closing price sits inside the high–low range of the last several bars. Created by George Lane, it is one of the classic tools for spotting overbought and oversold conditions and potential trend reversals.

In DeepCharts the indicator draws two lines in its own chart area — the **K** line (the primary calculation) and the **D** line (a moving average of K) — between configurable overbought and oversold levels.

## What it is

The oscillator answers: is price closing near the top or the bottom of its recent range? A close near the top of the range pushes the reading toward the upper extreme (overbought territory); a close near the bottom pushes it toward the lower extreme (oversold territory). The D line smooths the K line, and the interplay between the two — crossings, and visits to the extreme zones — is what you trade off.

## When to use it

- You trade range-bound markets and want a repeatable way to time entries at the edges of the range.
- You want an early momentum trigger — K crossing D reacts faster than most trend indicators.
- You are hunting divergences between price extremes and momentum extremes.
- You want to confirm signals from another oscillator such as [[rsi]] before acting.

## Quick start

1. Open a chart and press **Ctrl I** — or click the bar-chart icon in the chart toolbar, then **Indicators** — to open the **Indicator List**.
2. Search for "Stochastic" and click **+** to add it. The oscillator renders in its own chart area below the price bars (see [[indicator-layout]]).
3. Click the gear icon on the indicator's row to open its settings.
4. Keep the defaults to start: **K Period** 14, **D Period** 3, **Smoothing Length** 3, with the **Overbought Level** at 80 and the **Oversold Level** at 20.

[SCREENSHOT: A chart with the Stochastic Oscillator in its own area below price, showing the K and D lines crossing inside the oversold zone under the 20 level line | stochastic-on-chart.png]

## How to read it

- **Extreme zones.** Readings above the overbought level (80 by default) mean price is closing near the top of its recent range; readings below the oversold level (20) mean it is closing near the bottom. In a range, these zones flag potential reversal areas.
- **K/D crossings.** K crossing above D is a bullish momentum trigger; K crossing below D is bearish. Crossings that occur inside — or while leaving — an extreme zone carry the most weight.
- **Trends pin the oscillator.** In a strong trend the reading can sit in the overbought or oversold zone for a long time. An extreme reading alone is not a reversal signal.
- **Divergence.** Price makes a new high while the oscillator makes a lower high (or the mirror at lows) — momentum is not confirming the move.

## Settings reference

Open the dialog from the gear icon on the indicator's row in the **Indicators** panel.

### Parameters

| Setting | What it does |
|---|---|
| **K Period** | Number of bars used to compute the K line's high–low range. Default: 14. Shorter periods react faster but whipsaw more. |
| **D Period** | Number of periods for the D line — the moving average of K. Default: 3. |
| **Smoothing Length** | Additional smoothing applied to the K line. Default: 3. Raising it turns the fast, jagged K into a slower, cleaner line. |

### Levels

| Setting | What it does |
|---|---|
| **Overbought Level** | Upper threshold line. Default: 80. Color and width are customizable. |
| **Oversold Level** | Lower threshold line. Default: 20. Color and width are customizable. |

### Subgraph

| Setting | What it does |
|---|---|
| **K line color** | Color of the K line. |
| **D line color** | Color of the D line. |
| **Line style / Line width** | Rendering style and thickness for each line. |
| **Display options** | How the series are drawn in the chart area. |
| **Use secondary axis** | Plots the oscillator against a secondary value axis. |

[SCREENSHOT: The Stochastic Oscillator settings dialog showing K Period 14, D Period 3, Smoothing Length 3 and the level settings with Overbought 80 and Oversold 20 | stochastic-settings-dialog.png]

## Tips and common mistakes

- **Overbought does not mean sell.** In an uptrend the oscillator lives above 80. Establish the market state first, then use extremes as reversal zones only inside ranges.
- **Wait for the exit, not the entry.** A reading leaving the extreme zone (crossing back under 80 or back over 20) is a stronger timing cue than the reading first entering the zone.
- **Tune the smoothing before the period.** If the K line is too noisy on fast futures charts, raise **Smoothing Length** before shortening **K Period** — you keep the lookback while cutting whipsaw.
- **Tighten the levels on volatile symbols.** 80/20 are conventions; on instruments that pin the extremes constantly, wider thresholds such as 90/10 filter out weak signals.

## Related articles

- [[rsi|Relative Strength Index (RSI)]]
- [[williams-r|Williams %R]]
- [[macd]]
- [[cci|Commodity Channel Index (CCI)]]
- [[different-types-of-input]]
- [[indicator-layout]]
