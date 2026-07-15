---
title: "Tillson T3"
slug: "tillson-t3"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Configure and read the Tillson T3, an advanced smoothed moving average that reduces lag compared to traditional moving averages."
keywords: ["tillson t3", "t3 moving average", "t3 indicator", "smoothed moving average", "volume factor", "tilson t3", "low lag moving average"]
---

The Tillson T3 is an advanced smoothing indicator developed by Tim Tillson. It behaves like a moving average but applies multiple layers of smoothing, which gives it a noticeably smoother line with less lag than a simple or exponential moving average of the same length.

If you already use a standard [[moving-average|Moving Average]] and find it either too jumpy or too slow, the T3 is the natural next step: it filters noise without falling as far behind price.

## What it is

The T3 answers the question "which way is price really going once the noise is stripped out?" It plots a single smoothed line on the price chart. Because of its construction, the line turns with price sooner than a conventional moving average of comparable smoothness — that lag reduction is the whole point of the indicator.

A **Volume Factor** setting controls the balance between responsiveness and smoothness, so one indicator can be tuned from "fast signal line" to "slow trend filter" without changing its length.

## When to use it

- As a trend filter: trade only in the direction of the T3 slope.
- As a dynamic support/resistance reference in trending markets, similar to how traders use an EMA.
- As a smoother replacement for a moving average in crossover setups, when a regular MA whipsaws too often.
- On volatile instruments or fast intraday timeframes where a raw moving average produces too much noise.

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Tillson T3" and click **+** to add it.
4. Click the gear icon next to the indicator to open its settings.

A sensible starter configuration is the default one: **Length** 14, **Volume Factor** 0.618, **Input Data** Close. With **Auto Color** set to **Slope**, the line changes color as its direction changes, which makes the trend read at a glance.

[SCREENSHOT: A price chart with the Tillson T3 plotted over the candles, Auto Color = Slope so the line shows one color on rising segments and the secondary color on falling segments | tillson-t3-on-chart.png]

## How to read it

- **Slope** is the primary signal. A rising T3 indicates upward pressure; a falling T3 indicates downward pressure. With **Auto Color: Slope** enabled the color flip marks each direction change.
- **Price relative to the line**: price holding above a rising T3 supports a long bias; price holding below a falling T3 supports a short bias.
- **Flattening line**: when the T3 goes flat and price crosses it repeatedly, the market is ranging — trend-following signals from any moving average are unreliable in that state.

Because the T3 is heavily smoothed, treat it as a trend and bias tool rather than a precise entry trigger. Combine it with a momentum tool such as [[rsi|RSI]] or with orderflow context for timing.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Length** | Number of bars used in the smoothing process. Default: 14. Shorten it for faster timeframes, lengthen it for higher-timeframe trend filtering; adjust to your instrument's volatility. |
| **Volume Factor** | Controls smoothing strength, typically in the range 0 to 1. Default: 0.618 (the golden ratio). Lower values make the line more responsive with less lag; higher values increase smoothing strength, producing a smoother line that filters out more noise. |
| **Input Data** | Which price series feeds the calculation: **High** (sensitive to upward movements), **Low** (sensitive to downward movements), **Open** (initial bar price), **Close** (default — the bar's settlement price), or **Volume** (volume-weighted analysis). See [[different-types-of-input]]. |

### Subgraph

| Setting | What it does |
|---|---|
| **Color** / **Secondary Color** | The bullish and bearish line colors used when auto-coloring is active. |
| **Subgraph Style** | How the series is drawn. Default: **Line**. |
| **Auto Color** | Set to **Slope** to recolor the line automatically based on the indicator's direction. |
| **Line Style** | Default: **Solid**; dashed alternatives are available. |
| **Line Width** | Line thickness. Default: 1. Increase it to make the trend line more prominent. |
| **Short Name** | Custom label shown in the chart legend. |

[SCREENSHOT: The Tillson T3 settings dialog showing the General group (Length 14, Volume Factor 0.618, Input Data Close) and the Subgraph group below it | tillson-t3-settings.png]

## Tips and common mistakes

- **Do not tune Length and Volume Factor at the same time.** Change one, observe, then change the other — both affect smoothness, and adjusting them together makes it hard to tell which change helped.
- **A smoother line is not automatically better.** Pushing the Volume Factor high makes the T3 very clean but also slower to confirm reversals. Match the setting to your holding time.
- **Ranging markets defeat every moving average**, including the T3. If the line is flat, stand aside or switch to range tools instead of taking every crossover.
- Compare it side by side with a standard [[moving-average]] of the same length once — seeing the lag difference on your own instrument is the fastest way to understand what the T3 buys you.

## Related articles

- [[moving-average]]
- [[super-trend]]
- [[linear-regression]]
- [[different-types-of-input]]
- [[indicator-layout]]
