---
title: "Bollinger Bands"
slug: "bollinger-bands"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Reference for the Bollinger Bands indicator in DeepCharts: middle average, upper and lower standard-deviation bands, all settings, and how to read the squeeze and band touches."
keywords: ["bollinger bands", "bollinger", "bands indicator", "std dev bands", "volatility bands", "bollinger squeeze", "boilinger bands", "bolinger bands"]
---
Bollinger Bands, developed by John Bollinger in the 1980s, measure market volatility and help identify potential trading opportunities. The indicator draws three lines directly over price: a central moving average with an upper and a lower band placed a set number of standard deviations away from it.

Because the bands are built from standard deviation, they automatically widen when the market gets volatile and tighten when it goes quiet — which is what makes them useful in any market condition without re-tuning.

## What it is

Bollinger Bands answer the question: is price high or low relative to its own recent behavior? The three components are:

- **Bollinger Avg** — the middle line, typically a simple moving average of the selected price input.
- **Bollinger Up** — the upper band, the average plus a multiple of standard deviation.
- **Bollinger Down** — the lower band, the average minus the same multiple.

Since roughly all of recent price action is contained between the bands under normal conditions, a touch or breach of a band is a statement about volatility-adjusted extremes, not a signal by itself.

[SCREENSHOT: Candlestick chart with Bollinger Bands overlaid, showing the middle average and the upper and lower bands, with a visible squeeze (bands narrowing) followed by an expansion | bollinger-bands-on-chart.png]

## When to use it

- Judging whether price is stretched relative to its recent average before entering or exiting.
- Spotting volatility contractions (the "squeeze") that often precede strong directional moves.
- Framing mean-reversion trades in ranging markets — fades from the outer bands back toward the average.
- Trailing context in trends — strong trends tend to walk along one band while the average acts as pullback support or resistance.

## Quick start

1. Open a price chart — see [[first-chart]].
2. Click the green **Indicators** button (or press **Ctrl I**) to open the **Indicator List**.
3. Search for **Bollinger Bands** and click **+** to add it. The three lines draw over the price candles.
4. Click the gear icon (the indicator settings icon) to open its configuration window.
5. The classic configuration described by John Bollinger is a 20-period average with a standard-deviation value of 2, calculated on the Close — a solid starting point on any timeframe.

[SCREENSHOT: Bollinger Bands configuration window open, showing the Input Data dropdown, the Periods field and the Std Dev Value field, with the Subgraphs styling section below | bollinger-bands-settings.png]

## How to read it

- **Band width = volatility.** Wide bands mean an active market; narrow bands mean a quiet one. A pronounced narrowing (squeeze) signals stored energy — expect an expansion, but let price pick the direction.
- **Band touches are context, not triggers.** In a range, price touching the upper band is a candidate fade back to the average. In a trend, price riding the upper band is strength, not an automatic sell.
- **The middle line is the mean.** Pullbacks that hold the Bollinger Avg keep the trend intact; a clean break of it shifts the bias toward the opposite band.
- **Closes outside a band are rare by construction.** Repeated closes outside a band indicate an unusually strong move — tighten risk management rather than fading it blindly.

## Settings reference

Clicking the indicator settings icon opens the configuration window.

### Parameters

| Setting | What it does |
|---|---|
| **Input Data** | The price source used for the average calculation — High, Low, Open or Close. Close is the conventional choice. |
| **Periods** | The number of periods used to calculate the middle line. Fewer periods hug price more tightly; more periods smooth the bands. |
| **Std Dev Value** | The coefficient applied to the standard deviation, controlling how far the upper and lower bands sit from the average. Higher values contain more price action but signal less often. |

### Subgraphs

Each of the three lines can be styled individually — color, style (solid or dashed) and thickness:

| Line | What it is |
|---|---|
| **Bollinger Avg** | The middle line (the average). |
| **Bollinger Up** | The upper band. |
| **Bollinger Down** | The lower band. |

## Tips and common mistakes

- **A band touch is not a reversal signal.** The most common beginner error is selling every upper-band touch; in a trend, price can ride a band for dozens of bars.
- **Pair the squeeze with a direction filter.** The squeeze predicts expansion, not direction — combine it with structure, [[volume]], or a trend tool before positioning.
- **Do not shrink Periods to "see more signals."** A short lookback makes the bands chase every candle and destroys the statistical meaning of the standard deviation.
- **Compare with Keltner Channels.** Bollinger Bands built on standard deviation react to price dispersion, while [[keltner-channel]] bands built on ATR react to range — running both makes squeezes easier to spot.

## Related articles

- [[keltner-channel]]
- [[standard-deviation]]
- [[atr]]
- [[moving-average]]
- [[different-types-of-input]]
- [[indicator-layout]]
