---
title: "Overlay Chart"
slug: "overlay-chart"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Display a second instrument on your main chart with its own chart type and timeframe, including delta-based candle coloring."
keywords: ["overlay chart", "compare two symbols", "second symbol on chart", "multi symbol chart", "secondary axis", "overlay indicator", "overlaychart"]
---

The Overlay Chart indicator draws the chart of a second financial instrument on top of your main chart, so you can monitor two markets in one window. It is the more configurable sibling of [[overlay-symbol|Overlay Symbol]]: instead of mirroring the main chart's timeframe, Overlay Chart lets you pick a completely independent chart type and parameters for the overlaid instrument.

## What it is

Overlay Chart answers the question "what is that other market doing right now, on the resolution I choose?" without opening a second chart window. You select any symbol from your feed, give it its own chart type (time, range, volume, Renko and more), and DeepCharts renders it either in a separate panel or directly on top of your main price series.

Because the overlaid series can use a different scale than your main instrument, the indicator includes a secondary price axis option so both series stay readable.

## When to use it

- You trade one instrument but take cues from a correlated one — for example watching an index future while trading a related market.
- You want a higher or lower resolution view of another symbol than your main chart uses (Overlay Symbol cannot do this — it always syncs to the main chart's timeframe).
- You are studying lead/lag or divergence behavior between two markets inside a single window.
- You want delta-colored candles on the overlaid series to compare order flow across instruments.

## Quick start

1. Open the indicator menu on your chart and add **Overlay Chart**.
2. Open the indicator's settings.
3. Click **Select Symbol** and choose the instrument you want to overlay.
4. Set **Parameter Type** to the chart type you want for the overlay (for example **Minutes**) and enter its value in **Param 1** (for example 15 for a 15-minute series).
5. To draw the overlay on top of your main price series, select **Chart Area 1** at the top of the indicator window. Leaving it in its own area keeps the two series in separate panels.
6. If the two instruments trade at different price levels, enable **Use Secondary Axis** so the overlay gets its own scale.
7. Apply the settings.

[SCREENSHOT: Main chart of one futures instrument with Overlay Chart active showing a second instrument's candlesticks rendered in Chart Area 1 on a secondary axis, both series clearly distinguishable by color | overlay-chart-two-instruments.png]

## How to read it

Read the overlay as context, not as a signal by itself. The most common uses:

- **Correlation and divergence** — when two normally correlated markets stop moving together, the one lagging often resolves toward the leader. The overlay makes these moments visible bar by bar.
- **Relative strength** — compare the shape of the two series across the same session: which one made a new high first, which one held its low.
- **Scale awareness** — with **Use Secondary Axis** enabled, the two series are drawn on independent scales. Compare shapes and timing, not vertical distance; a visual crossover between the two lines has no meaning across different axes.

If you enable **Delta-based Color**, the overlaid candles are colored by their delta (buying vs. selling aggression) instead of open/close direction, letting you compare order flow across the two markets. See [[orderflow-101]] for how delta is computed.

## Settings reference

[SCREENSHOT: Overlay Chart settings dialog open, showing the General parameters section with Select Symbol, Parameter Type dropdown expanded listing Minutes, Days, Weekly, Monthly, Vol Bars, Range, Volume, Trade, Renko, Seconds, Point Figure and Delta | overlay-chart-settings-general.png]

### General

| Setting | What it does |
|---|---|
| **Select Symbol** | Click to choose the symbol to overlay on the main chart. |
| **Parameter Type** | The chart type for the overlaid series: **Minutes**, **Days**, **Weekly**, **Monthly**, **Vol Bars**, **Range**, **Volume**, **Trade**, **Renko**, **Seconds**, **Point Figure** or **Delta**. |
| **Param 1** | The reference parameter for time-based charts and for Range, Volume, Trade, Renko and Delta types; also the first parameter for Vol Bars and Point Figure charts. |
| **Param 2** | The second parameter, used only by the Vol Bars and Point Figure chart types. |

### Volume/Delta

| Setting | What it does |
|---|---|
| **Delta-based Color** | Colors the overlay candles by their delta instead of open/close direction. |
| **Open/Close Based Border** | Colors the candlestick border by bullish/bearish (open vs. close) status, useful alongside delta-based body coloring. |
| **Delta Input** | Which database the delta calculation reads from: **Volume** or **Trades**. See [[different-types-of-input]]. |
| **Color Mode** | **Fade** grades the color intensity by delta magnitude; **Fixed** uses a single solid color per direction. |
| **Std. Dev. for Coloring** | The standard deviation value that scales the fade intensity when **Color Mode** is set to Fade. |

### Subgraph

| Setting | What it does |
|---|---|
| **Border color** | Border color of the overlay candles. |
| **Fill color** | Body fill color of the overlay candles. |
| **Chart Style** | How the overlaid series is drawn: **Line**, **Candlestick**, **OHLC**, **Hidden** or **Candlebody**. |
| **Border width** | Thickness of the candle borders. |

### Placement

| Setting | What it does |
|---|---|
| **Chart Area** | Select **Chart Area 1** at the top of the indicator window to draw the overlay in the main chart area; otherwise it renders in its own panel. |
| **Use Secondary Axis** | Gives the overlaid series its own price axis. Enable this whenever the two instruments trade on different price scales. |

## Tips and common mistakes

- **Forgetting the secondary axis** is the most common issue: with two instruments on very different price levels sharing one axis, one series flattens into an unreadable line. Enable **Use Secondary Axis**.
- If you only want the same timeframe as your main chart, use [[overlay-symbol|Overlay Symbol]] instead — it auto-syncs and needs less configuration.
- Mixing very different chart types (for example Renko overlay on a time-based main chart) is powerful but can mislead on timing, since Renko bars do not close on a clock. Interpret bar-to-bar alignment loosely.
- Delta-based coloring depends on bid/ask trade data from your feed; if delta looks empty or flat, check your feed's data type in [[different-types-of-input]].
- Use the **Line** or **Candlebody** chart styles when the overlay clutters the main series — a thinner representation keeps the main instrument readable.

## Related articles

- [[overlay-symbol]]
- [[overlay-timeframe-candlestick]]
- [[correlation-viewer]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[orderflow-101]]
