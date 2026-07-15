---
title: "Super Trend"
slug: "super-trend"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Reference for the Super Trend indicator in DeepCharts: ATR length and multiplier, chart area options, alerts, candle coloring, and line styling."
keywords: ["supertrend", "super trend indicator", "trend following", "ATR bands", "trailing stop indicator", "super trend settings"]
---
Super Trend is a trend-following indicator that identifies the direction of the market trend by drawing a dynamic support or resistance line based on price movement and volatility. The line sits below price in an uptrend and above price in a downtrend, flipping sides when the trend changes.

Because its distance from price is derived from the Average True Range (ATR), the line automatically widens in volatile conditions and tightens in quiet ones — which is what makes it popular both as a trend filter and as a trailing-stop guide.

## What it is

Super Trend answers the question: which side of the market am I on, and where is the level that would invalidate that view? It combines an ATR volatility measure (**Length**) with a **Multiplier** that sets how far from price the line is drawn. While price stays on one side of the line the trend is considered intact; a close through the line flips the indicator to the other side.

[SCREENSHOT: A candlestick chart with the Super Trend line plotted below price in an uptrend, then flipping above price after a reversal; both line colors visible across the flip | super-trend-on-chart.png]

## When to use it

- Establishing trend direction quickly on any timeframe — the line's side and color state it directly.
- Trailing a stop behind a winning position: the line ratchets with the trend and backs off with volatility.
- Filtering signals from faster tools — for example only taking longs while Super Trend is below price.
- Spotting trend flips: the moment the line switches sides is a defined, objective event you can attach alerts to.

## Quick start

1. Open a chart — see [[first-chart]].
2. Click the bar-chart icon in the chart's top-left icon row to open the **Indicators** panel, then click **Indicators** to open the full **Indicator List**.
3. Search for **Super Trend** and click **+** to add it.
4. Click the gear icon to open its settings.
5. Starter configuration: keep **Length** at the default 10 and **Multiplier** at the default 3.00. These defaults suit most timeframes; widen the multiplier if you get whipsawed, shorten the length if the line reacts too slowly.

[SCREENSHOT: Super Trend settings dialog showing the General section with Length = 10 and Multiplier = 3.00, plus the Chart Settings and Alert sections visible below | super-trend-settings.png]

## How to read it

- **Line below price** — uptrend context. The line acts as dynamic support; pullbacks that hold above it keep the trend intact.
- **Line above price** — downtrend context. The line acts as dynamic resistance.
- **A flip** (line jumps to the other side of price) signals a potential trend change. Flips in strong trends are meaningful; flips in a sideways chop happen constantly and are best ignored or filtered.
- **Distance between price and the line** reflects volatility, not strength: a wide gap means ATR is elevated, not that the trend is "stronger."
- With **Chart Color for Marker** enabled, the candles themselves recolor with the trend direction, making the current state readable at a glance.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Length** | Period for the ATR calculation. Default: 10. Higher values reduce sensitivity to short-term fluctuations; lower values make the line more reactive. |
| **Multiplier** | Multiplies the ATR to set the line's distance from price. Default: 3.00. Increasing it creates wider bands — fewer false signals but later entries; decreasing it tightens the bands. |

### Chart Settings

| Setting | What it does |
|---|---|
| **Chart Area** | **Horizontal** displays the indicator across the main price chart; **Vertical** displays it in a separate panel. |
| **Use Sec. Axis** | Plots the indicator on a secondary axis, allowing you to overlay indicators with different scales. |

### Alerts

| Setting | What it does |
|---|---|
| **Enable Alert Sound** | Plays an audible notification when a signal is generated. |
| **Alert Name** | Custom identifier — helpful when managing multiple alerts. |
| **Enable Message** | Displays a visual notification. |

### Subgraphs

| Setting | What it does |
|---|---|
| **Color / 2° Color** | Line color in bullish and bearish states respectively. |
| **Subgraph Style** | Display style. Default: Line. |
| **Line Style** | Default: Solid. |
| **Line Width** | Default: 1. Increase for prominence. |
| **Name Label / Name Background / Value Label / Value Background** | Show or style the indicator's identifier and numerical value on the chart. |
| **Auto Color** | Choose manual color override or automatic color adjustment. |
| **Chart Color for Marker** | Recolors the candles themselves based on the current trend direction. |
| **Include on Auto Center** | Includes the indicator when the chart auto-scales, so the line stays in view. |

## Tips and common mistakes

- **Do not scalp flips in a range.** Super Trend is a trend tool; in sideways markets it flips repeatedly and every flip looks like a signal. Check a higher timeframe or a trend-strength filter like [[adx]] first.
- **Tune with the multiplier, not only the length.** Widening the **Multiplier** is usually the more effective way to cut whipsaws, at the cost of later entries.
- **It lags by design.** The flip confirms a move already underway — pair it with faster context (for example [[atr]] for the volatility regime) rather than expecting it to catch tops and bottoms.
- Use [[super-trend-difference]] alongside it to see how far price has stretched from the line as a histogram.

## Related articles

- [[super-trend-difference]]
- [[atr]]
- [[moving-average]]
- [[parabolic-sar]]
- [[different-types-of-input]]
- [[indicator-layout]]
