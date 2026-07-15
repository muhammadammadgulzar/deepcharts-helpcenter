---
title: "Candlestick Bar"
slug: "candlestick-bar"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Overlay Japanese candlesticks built from a different bar type — minutes, volume bars or range — on top of your main chart."
keywords: ["candlestick bar", "candle overlay", "japanese candles", "overlay candles", "volume bars overlay", "range bars overlay", "candlestick indicator"]
---

Sometimes you want two views of the same market on one chart: your working chart in one bar type, and classic Japanese candles built from another aggregation drawn over it. The Candlestick Bar indicator does exactly that — it overlays Japanese candles on top of the main chart, with the candle construction (minutes, volume bars or range) chosen independently of the chart underneath.

That makes it possible to, for example, keep a fast orderflow-oriented chart as your base while still seeing the structure of larger time-based or range-based candles in the same panel.

## What it is

The Candlestick Bar is a chart overlay that builds and draws its own candles from the parameter type you select — **Minutes**, **Vol Bars** or **Range** — and paints them over the existing price display. Body color, fill, border, opacity and width are all configurable, so the overlay can be as prominent or as subtle as you need for price-action analysis.

Because the overlay is independent of the base chart's bar type, it belongs to the same family of tools as [[overlay-timeframe-candlestick]] and [[overlay-chart]] — pick the one that matches the comparison you want to make.

## When to use it

- To see time-based candle structure on a chart whose base bars are non-time-based (tick, volume or range driven).
- To overlay volume-built or range-built candles on a time chart, revealing how activity-based bars frame the same move.
- To read classic candlestick patterns at a second aggregation without opening and linking another chart window.
- To keep a higher-level structural read visible while you execute from a faster base chart.

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Candlestick Bar" and click **+** to add it.
4. Click the gear icon next to the indicator to open its settings. Choose a **Parameter Type** and set **Parameter 1** — for example, Minutes with a value larger than your base chart's timeframe gives a classic higher-timeframe overlay.
5. Reduce the body **Opacity** or disable **Show Filled Bar** so the underlying chart stays readable beneath the overlay.

[SCREENSHOT: A fast intraday chart with the Candlestick Bar overlay active — larger semi-transparent candles drawn over the base bars, both clearly distinguishable | candlestick-bar-on-chart.png]

## How to read it

New to reading Japanese candles, or want a quick refresher? Hover the interactive candle below — each zone (body, wicks, open, high, low, close) explains itself, and you can flip it between bull and bear — then apply the same read to every overlay candle.

[WIDGET: candle-anatomy]

- **Each overlay candle summarizes several base bars** (or a volume/range quantum of trade) as one open-high-low-close unit — read it exactly as you would any Japanese candle: body direction for control, wicks for rejection.
- **Overlay-versus-base disagreement is information.** When the fast base bars whipsaw but the overlay candles stay one-directional, the noise is below your overlay's resolution; when both align, moves tend to be cleaner.
- **Volume-built candles equalize activity.** With **Vol Bars**, each candle closes after a target amount of volume, so quiet periods compress and busy periods expand — candle-to-candle comparisons become activity-normalized.
- **Range candles equalize movement.** With **Range**, each candle spans a fixed price distance, which strips time out of the pattern read entirely.

## Settings reference

### General Parameters

| Setting | What it does |
|---|---|
| **Parameter Type** | How the overlay candles are built: **Minutes**, **Vol Bars** or **Range**. |
| **Parameter 1** | The main construction value — applies to Minute and Range candles, and sets the target for Vol Bars. |
| **Parameter 2** | Controls the reverse value for Vol Bars. |

### Colors

| Setting | What it does |
|---|---|
| **Positive Bar** | Color of bullish overlay candles. |
| **Negative Bar** | Color of bearish overlay candles. |
| **Show Filled Bar** | Toggles the candle body background fill on or off. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Candle Width** | Thickness of the overlay candles. |
| **Border Width** | Thickness of the candle borders. |
| **Opacity** | Transparency of the candle body background. |
| **Show Vertical Line on Close** | When enabled, draws a vertical line on closing candles. |

[SCREENSHOT: The Candlestick Bar settings dialog showing Parameter Type set to Minutes with Parameter 1 and Parameter 2 fields, plus the Colors and Plot Settings groups | candlestick-bar-settings.png]

## Tips and common mistakes

- **Keep the overlay visually subordinate.** If the overlay candles are fully opaque and wide, they bury the base chart; lower **Opacity**, thin the **Candle Width**, or turn off **Show Filled Bar** and read the overlay from borders alone.
- **Pick an aggregation that is meaningfully different.** Overlaying 5-minute candles on a 3-minute chart adds clutter without insight; the overlay earns its place when it summarizes many base bars or a genuinely different bar-construction logic.
- **Remember which candles your patterns come from.** A candlestick pattern on the overlay completes only when the overlay candle closes — acting on it mid-candle, because the base chart already closed several bars, is a common error.
- **Consider the alternatives for cross-symbol or cross-timeframe views.** If you want another instrument overlaid, use [[overlay-symbol]]; for a dedicated higher-timeframe candle overlay, compare [[overlay-timeframe-candlestick]] before deciding.

## Related articles

- [[overlay-timeframe-candlestick]]
- [[overlay-chart]]
- [[overlay-symbol]]
- [[chart-display-options]]
- [[different-types-of-input]]
- [[indicator-layout]]
