---
title: "On Candle Stats"
slug: "on-candle-stats"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Prints per-candle statistics — volume, delta, trade counts and more — as text boxes directly on the chart next to each bar."
keywords: ["on candle stats", "candle statistics", "volume on candle", "delta on candle", "per candle stats", "candle text stats", "bar statistics on chart"]
---

On Candle Stats prints detailed statistics directly on your candles as text boxes: total volume, delta, trade counts, and other market microstructure data, bar by bar. Instead of glancing between the chart and a separate panel, the numbers sit right next to the price action they describe.

It is a favorite for orderflow traders who want footprint-grade information at a glance without opening a full footprint chart for every instrument.

## What it is

For each candle, the indicator computes a set of data series — eleven are available, including Max/Min Delta, total volume, delta volume, total trades, delta trades, extension, COT High, COT Low, COT Bar, Bid-Ask/Vol, and Ratio — and renders your chosen values as a compact text box positioned above, below, or on the candle. Coloring and opacity options tie the text's appearance to delta sign and magnitude, so the annotation itself carries a directional read.

[SCREENSHOT: Chart with On Candle Stats active — small text boxes above each candle showing volume and delta values, positive-delta candles labeled in green text and negative in red | on-candle-stats-chart-overview.png]

## When to use it

- You want exact per-bar numbers (volume, delta, trades) visible on the chart while you trade.
- You review sessions bar by bar and need microstructure detail without switching to [[deep-print]].
- You compare aggression across consecutive candles at key levels — for example delta shrinking as price presses into resistance.
- You annotate charts for journaling or teaching, where the values must be readable in a screenshot.

## Quick start

1. Open the **Indicator List** on your chart and add **On Candle Stats**.
2. Open the indicator's **Settings**.
3. Keep **Input Data** on **Volume** to start; switch to **Aggregate Volume** when you want orders at the same price combined for a more accurate activity view (see [[different-types-of-input]]).
4. Enable the subgraph series you actually need — **Tot. Vol** and **Delta Vol** are a good minimal pair — and leave the rest off to keep the chart legible.
5. Turn on **Color Text Based on Delta** so positive readings print in one color (typically green) and negative in another (typically red).
6. Set **Price Plot** to **High** and add a small **Tick Offset** so text boxes sit clear of the candle wicks.

[SCREENSHOT: On Candle Stats settings dialog — Data Settings at top (Input Data, Filter Min, Filter Max), with Text, Coloring and Price sections below, Color Text Based on Delta enabled | on-candle-stats-settings-dialog.png]

## How to read it

- **Volume with delta context** — a high-volume candle with small delta means two-sided battle; high volume with strongly one-sided delta means conviction.
- **Delta against the candle's direction** — a green candle printing negative delta (or vice versa) hints at absorption or passive strength; worth a closer look on a footprint.
- **Trade counts vs. volume** — many trades with modest volume suggests small participants; fewer trades carrying big volume suggests size is active.
- **Opacity grading** — with **Opacity Based on Ratio** enabled, fainter boxes mark statistically ordinary bars and stronger boxes mark the ones that deviate, letting you skim a session quickly.

## Settings reference

### Data Settings

| Setting | What it does |
|---|---|
| **Input Data** | Database used for the statistics: **Volume** (total volume at each price level — trading intensity), **Order** (transaction count at each price level — order frequency), or **Aggregate Volume** (combines orders at the same price level for a more accurate activity view). |
| **Filter Min** | Minimum threshold — only data above this value is displayed. |
| **Filter Max** | Maximum threshold — set to **0** to apply no maximum filter. |

### Text Settings

| Setting | What it does |
|---|---|
| **Font Size** | Text size on the candles. |
| **Smaller Font Size** | Minimum text size kept for readability at smaller chart scales. |
| **Auto Text Format** | When enabled, numbers above a thousand display grouped (e.g., "1,234"). |
| **Absolute Sign** | When enabled, values display without +/- signs. |

### Coloring Settings

| Setting | What it does |
|---|---|
| **Opacity Based on Ratio** | Adjusts text-box opacity according to the bar's ratio, de-emphasizing ordinary bars. |
| **Max Ratio** | Controls the maximum opacity ratio and text-box visibility. |
| **Color Text Based on Delta** | Positive delta prints in one color (typically green), negative delta in another (typically red). |

### Price Settings

| Setting | What it does |
|---|---|
| **Tick Offset** | Distance in ticks between the text box and the candle, preventing overlap with price action. |
| **Price Plot** | Text placement: **High**, **Low**, **Center**, **Price Slope**, or **Delta Sign**. |

### Subgraphs

Eleven data series are available to display: **Max/Min Delta**, **Tot. Vol**, **Delta Vol**, **Tot. Trade**, **Delta Trade**, **Extension**, **COT High**, **COT Low**, **COT Bar**, **Bid-Ask/Vol**, and **Ratio**. Enable only the series you read — each active series adds a line of text to every candle.

## Tips and common mistakes

- **Less is more.** Enabling many subgraph series turns every candle into a paragraph. Two or three well-chosen values beat eleven unread ones.
- **Mind the zoom level.** Text needs horizontal room; on tightly zoomed-out charts enable **Smaller Font Size** or the boxes will collide.
- **Delta Sign placement is contextual.** Setting **Price Plot** to **Delta Sign** moves the text with the delta's direction, which makes one-glance reading faster but shifts box positions bar to bar — pick it deliberately.
- **Use Absolute Sign for journaling screenshots** where color already carries the sign and the +/- clutter adds nothing.

## Related articles

- [[deep-print]]
- [[deep-stats]]
- [[delta-bar]]
- [[market-statistics]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
