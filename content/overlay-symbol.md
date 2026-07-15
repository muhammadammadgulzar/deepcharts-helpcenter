---
title: "Overlay Symbol"
slug: "overlay-symbol"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Add a second instrument to your chart that automatically follows the main chart's timeframe, with optional volume and delta styling."
keywords: ["overlay symbol", "compare symbols", "add second symbol", "symbol overlay", "two instruments one chart", "overlaysymbol"]
---

The Overlay Symbol indicator displays another financial instrument on your main chart so you can monitor multiple markets at once. Its defining behavior: the overlaid series automatically syncs its timeframe with the main chart — change the main chart's resolution and the overlay follows.

## What it is

Overlay Symbol answers the question "how is that other market moving alongside mine?" with zero timeframe bookkeeping. You pick a symbol, and DeepCharts renders its candles next to (or on top of) your main series at the same resolution, updating whenever you change the main chart.

If you need the overlaid instrument on a *different* timeframe or chart type than the main chart, use [[overlay-chart|Overlay Chart]] instead — that is the key difference between the two indicators.

## When to use it

- You want an always-in-sync comparison of two correlated markets while you change timeframes freely.
- You track relative strength between an instrument and its sector or index counterpart during a session.
- You want order-flow context on the second instrument — the overlay supports delta-based coloring and volume-based candle widths.
- You are watching for divergences (one market makes a new high, the other does not) without managing a second chart window.

## Quick start

1. Open the indicator menu on your chart and add **Overlay Symbol**.
2. Click the indicator settings icon to open the configuration window.
3. Under General, use **Select** to choose the symbol to overlay.
4. To draw the overlay on top of your main price series, select **chart area 1**; otherwise it renders in its own panel.
5. If the two instruments trade at different price levels, enable **Use sec. axis** so the overlay gets its own price scale.
6. Apply the settings. Changing the main chart's timeframe now updates the overlay automatically.

[SCREENSHOT: Main chart with Overlay Symbol active — a second instrument's candles rendered in chart area 1 on a secondary axis, timeframe matching the main chart | overlay-symbol-on-chart.png]

## How to read it

Treat the overlay as context for your primary market:

- **Confirmation** — both markets pushing in the same direction supports trend continuation reads.
- **Divergence** — the overlaid market failing to confirm a new high or low in your main market is an early warning that the move may lack participation.
- **Independent scales** — with **Use sec. axis** enabled the two series are on separate axes: compare shape and timing, not vertical distance or crossovers.

With **Color based on Delta** enabled, the overlay candles are colored by net aggressive buying versus selling rather than open/close direction, and **Width based on volume** makes heavily traded candles physically wider — together they show where the activity in the second market is concentrated. See [[orderflow-101]] for the underlying concepts.

## Settings reference

[SCREENSHOT: Overlay Symbol settings window showing the General section with the Select field and the Volume/Delta section with Width based on volume, Color based on Delta, % Max Width Based on Volume, Border based on Open/close, Delta input, Color mode and Std. dev. for coloring | overlay-symbol-settings.png]

### General

| Setting | What it does |
|---|---|
| **Select** | Choose which symbol to overlay on the main chart. |

### Volume/Delta

| Setting | What it does |
|---|---|
| **Width based on volume** | Varies the candle width with traded volume — busier candles render wider. |
| **Color based on Delta** | Colors the overlay candles by their delta value instead of open/close direction. |
| **% Max Width Based on Volume** | The maximum width, as a percentage, that a volume-adjusted candle can reach. |
| **Border based on Open/close** | Colors the candle border by bullish/bearish (open vs. close) status — useful when the body is delta-colored. |
| **Delta input** | Data source for the delta calculation: **Volume** or **Trades**. See [[different-types-of-input]]. |
| **Color mode** | **Fade** grades color intensity by delta magnitude; **Fixed** uses a solid color per direction. |
| **Std. dev. for coloring** | The standard deviation value that scales fade intensity when **Color mode** is set to fade. |

### Subgraph

| Setting | What it does |
|---|---|
| **Border color** | Border color of the overlay candles. |
| **Fill color** | Body fill color of the overlay candles. |
| **Chart style** | How the series is drawn: **Line**, **Candlestick**, **OHLC**, **Hidden** or **Candlebody**. |
| **Border width** | Thickness of the candle borders. |

### Placement

| Setting | What it does |
|---|---|
| **Chart area** | Select **chart area 1** to overlay directly in the main chart area; otherwise the series renders in its own panel. |
| **Use sec. axis** | Gives the overlay its own price axis. Enable when the instruments' price scales differ. |

## Tips and common mistakes

- **Enable "Use sec. axis" for instruments on different price scales** — otherwise the lower-priced series compresses into a flat line and the overlay is unreadable.
- Remember the timeframe is locked to the main chart. If the overlay seems to "change on its own," it is following your main chart's resolution — that is by design. Use [[overlay-chart|Overlay Chart]] for an independent timeframe.
- The **Line** chart style is often the cleanest choice when you only care about directional comparison; full candlesticks on both series can clutter the window.
- Delta coloring requires bid/ask classified trade data from your feed. If the colors never vary, check the data types your feed provides in [[different-types-of-input]].

## Related articles

- [[overlay-chart]]
- [[overlay-timeframe-candlestick]]
- [[correlation-viewer]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[orderflow-101]]
