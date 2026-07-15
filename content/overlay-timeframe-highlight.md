---
title: "Overlay Timeframe Highlight"
slug: "overlay-timeframe-highlight"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Highlight higher timeframe candle ranges on a lower timeframe chart, with optional high/low target projections and volume summaries."
keywords: ["overlay timeframe highlight", "higher timeframe highlight", "HTF range", "timeframe highlight", "higher timeframe high low", "MTF highlight"]
---

The Overlay Timeframe Highlight indicator visually highlights higher timeframe candles on a lower timeframe chart. Rather than drawing full candles like [[overlay-timeframe-candlestick|Overlay Timeframe Candlestick]], it shades each higher timeframe segment, can project its high/low as target lines, and can print volume or trade summaries per segment.

## What it is

The indicator aggregates your chart's lower timeframe bars into higher timeframe segments and highlights each segment visually. Optionally it projects high/low target lines from each higher timeframe candle and displays summary statistics such as total volume for the highlighted range.

It answers "which bigger candle does this price action belong to, where are that candle's extremes, and how much business was done inside it?"

## When to use it

- You want higher timeframe structure visible without switching charts.
- You track the high/low ranges of larger candles as intraday reference levels.
- You want per-segment volume or trade summaries to see which higher timeframe candles carried real participation.
- You mark higher timeframe targets — projected highs and lows the market may return to.

## Quick start

1. Open the indicator menu on your chart and add **Overlay Timeframe Highlight**.
2. Open the indicator settings.
3. In the General group, set **Param type** to the timeframe type (for example Minute, Hour or Day) and **Param 1** to the value — for example an hourly highlight on a 5-minute chart.
4. Under Chart Area, choose **Horizontal** to render the highlights on the price chart.
5. In Plot, confirm **Enable** is on and set **Body opacity** low enough that price bars stay readable.
6. Optionally switch on **Target enabled** in the Range Target group to project each candle's high/low as lines, and **Enable Summary** to print per-candle volume data.
7. Apply the settings.

[SCREENSHOT: A 5-minute chart with Overlay Timeframe Highlight shading alternating hourly segments, projected high/low target lines extending right from the last completed hourly candle, and a volume summary printed above each segment | overlay-timeframe-highlight-chart.png]

## How to read it

- **Segment boundaries** — each shaded block is one higher timeframe candle. Price rotating inside one block is balance on the higher timeframe; consecutive blocks stepping up or down is trend.
- **Highlight color** — up/down coloring shows the higher timeframe bar's direction at a glance. With **Color based on delta** enabled, color instead reflects order flow delta inside the segment, so a price-up but delta-down segment flags weak participation (see [[orderflow-101]]).
- **Target lines** — projected highs and lows of higher timeframe candles act as reference levels; the market frequently revisits and reacts at prior higher timeframe extremes.
- **Summaries** — compare volume between segments: a breakout segment on thin volume deserves more suspicion than one on heavy volume.

## Settings reference

[SCREENSHOT: Overlay Timeframe Highlight settings dialog showing all groups — Chart Area, General, Color, Plot, Range Target and Summary — with Target enabled and Enable Summary switched on | overlay-timeframe-highlight-settings.png]

### Chart Area

| Setting | What it does |
|---|---|
| **Horizontal** | Renders the highlights directly on the price chart. |
| **Vertical** | Displays the highlight vertically, where supported. |
| **Panel selector** | Chooses which chart panel displays the overlay. |

### General

| Setting | What it does |
|---|---|
| **Param type** | Defines the timeframe type used for highlighting (for example Minute, Hour, Day). |
| **Param 1** | Specifies the primary timeframe value (for example 5 for a 5-minute highlight). |
| **Param 2** | Optional secondary parameter, used depending on the selected timeframe type. |

### Color

| Setting | What it does |
|---|---|
| **Color based on delta** | Changes the highlight color dynamically based on order flow delta instead of bar direction. |
| **Color mode** | Determines how the color applies — fading with intensity or solid. |
| **Std dev for coloring** | Controls sensitivity when color is based on statistical deviation (fade mode). |
| **Up bar** | Highlight color for bullish higher timeframe candles. |
| **Down bar** | Highlight color for bearish higher timeframe candles. |

### Plot

| Setting | What it does |
|---|---|
| **Enable** | Toggles the highlight overlay on or off. |
| **Border width** | Controls the thickness of the candle border highlight. |
| **Body opacity** | Adjusts the transparency of the candle body highlight. |
| **Shadow opacity** | Adjusts the transparency of the candle wick highlight. |
| **Show background** | Fills the full background of the higher timeframe candle's range. |

### Range Target

| Setting | What it does |
|---|---|
| **Target enabled** | Enables high/low range projection lines from the higher timeframe candle. |
| **High color / Low color** | Colors of the projected high and low lines. |
| **Line width** | Thickness of the target lines. |
| **Line style** | Line appearance (solid, dash and similar). |
| **Extend line to left** | Extends the target lines backward across previous bars. |
| **Show text** | Displays label text on the target lines. |
| **Text color** | Label text color. |
| **Text size** | Label font size. |

### Summary

| Setting | What it does |
|---|---|
| **Enable Summary** | Displays higher timeframe summary information on the chart. |
| **Volume Summary** | Shows total volume for the highlighted candle. |
| **Trade Summary** | Displays trade-related metrics, where available. |
| **Text Color** | Summary text color. |
| **Ask Color / Bid Color** | Colors used for ask and bid values in the summary. |
| **Summary text size** | Font size of the summary data. |
| **Summary to view** | How many higher timeframe candles are included in the summary display. |

## Tips and common mistakes

- **Keep opacity low.** High **Body opacity** with **Show background** enabled can wash out the price bars; the highlight should frame the action, not hide it.
- **The current segment is still forming** — its color, range and summary keep updating until the higher timeframe candle completes.
- Limit **Summary to view** to a handful of candles; printing summaries for every segment on screen clutters the chart quickly.
- Delta-based coloring depends on your feed providing bid/ask classified data — see [[different-types-of-input]] if the coloring never varies.
- Use this indicator for ranges, targets and participation; use [[overlay-timeframe-candlestick|Overlay Timeframe Candlestick]] when you want the actual higher timeframe candle shapes. Many traders run both.

## Related articles

- [[overlay-timeframe-candlestick]]
- [[understanding-market-structure-sessions]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
