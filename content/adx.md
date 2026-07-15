---
title: "Average Directional Index (ADX)"
slug: "adx"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Measure trend strength with the Average Directional Index (ADX) and its +DI/−DI lines to tell trending markets from sideways ones."
keywords: ["adx", "average directional index", "trend strength indicator", "plus di", "minus di", "directional movement", "dmi", "is the market trending"]
---

The Average Directional Index (ADX) is a technical analysis indicator used to measure the strength of a trend in an asset's price. Crucially, it measures strength only — a rising ADX tells you the market is trending, not which way.

That makes it one of the most useful filters in a trend trader's toolkit: it answers the question every trend-following strategy needs answered first — is there actually a trend to follow, or is the market moving sideways?

## What it is

ADX plots in its own panel below the price chart. Alongside the main ADX line, the indicator includes the two directional lines it is derived from: the **Plus Directional Indicator (+DI)** and the **Minus Directional Indicator (−DI)**. The +DI line tracks upward directional movement, the −DI line tracks downward directional movement, and the ADX line smooths the difference between them into a single trend-strength reading.

The result: direction comes from which DI line is on top, and conviction comes from the height of the ADX line.

## When to use it

- As a regime filter: take trend-following signals only when ADX confirms a trending market, and stand aside (or switch to range tactics) when it does not.
- To confirm breakouts: a breakout accompanied by a rising ADX has directional strength behind it; one with a flat ADX is more likely to fail.
- To read directional bias from the **+DI/−DI** crossovers.
- To detect a maturing trend: an ADX that rolls over from a high reading warns that trend strength is fading.

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Average Directional Index" and click **+** to add it — it opens in its own chart area under the price panel.
4. Click the gear icon next to the indicator to open its settings.

The default **Period** of 14 is the standard configuration and a sensible starting point on any timeframe. Give the ADX line and the two DI lines clearly distinct colors so crossovers read instantly.

[SCREENSHOT: A price chart with the ADX indicator in a lower panel showing three lines — the ADX line rising during a trending move, with +DI above −DI — while the price panel above shows the corresponding uptrend | adx-on-chart.png]

## How to read it

- **ADX line height = trend strength.** By common convention, readings above roughly 25 indicate a trending market and readings below roughly 20 indicate a weak or sideways market; the zone between is ambiguous. These thresholds are conventions, not rules — calibrate them to your instrument and timeframe.
- **ADX direction matters more than its level.** A rising ADX means the trend is strengthening; a falling ADX means it is weakening — even if price is still drifting in the trend direction.
- **ADX is direction-agnostic.** A strong downtrend produces a high ADX exactly like a strong uptrend. Read direction from the DI lines or from price itself.
- **DI crossovers**: +DI crossing above −DI signals bullish directional movement taking over; −DI crossing above +DI signals the bearish side. Crossovers are most meaningful when ADX is elevated or rising.

## Settings reference

### Parameters

| Setting | What it does |
|---|---|
| **Period** | The period used for the ADX calculation. Default: 14. Shorter periods make the indicator react faster but whipsaw more; longer periods smooth the reading for higher-timeframe regime analysis. |

### Subgraphs

| Setting | What it does |
|---|---|
| **Line Color** | Color of the main ADX line. |
| **Line Style** | Style of the ADX line (solid, dashed). |
| **Line Width** | Thickness of the ADX line. |
| **Plus DI Color** | Color of the Plus Directional Indicator (+DI) line. |
| **Minus DI Color** | Color of the Minus Directional Indicator (−DI) line. |

[SCREENSHOT: The ADX settings dialog showing the Period parameter set to 14 and the subgraph options for Line Color, Line Style, Line Width, Plus DI Color and Minus DI Color | adx-settings.png]

## Tips and common mistakes

- **The most common mistake: reading ADX as direction.** A falling ADX during an uptrend does not mean "sell" — it means the trend is losing strength. Direction always comes from the DI lines or price structure.
- **ADX lags by design.** It is a smoothed derivative of smoothed inputs, so it confirms trends rather than predicting them. Use it to qualify signals from faster tools, not to generate entries on its own.
- **Low ADX is information, not absence of information.** A prolonged low-ADX stretch marks a range — the environment where mean-reversion tools like [[rsi|RSI]] work best and breakout entries fail most often.
- Pair it with the [[donchian-channel|Donchian Channel]] or [[super-trend|Super Trend]]: the channel or trend line supplies the entry logic, ADX supplies the "is it worth taking" filter.

## Related articles

- [[aroon-up-down]]
- [[aroon-oscillator]]
- [[super-trend]]
- [[donchian-channel]]
- [[different-types-of-input]]
- [[indicator-layout]]
