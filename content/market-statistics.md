---
title: "Market Statistics"
slug: "market-statistics"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Analyzes trade or bar data statistically — averages, deviations and frequency by range — so you can pick evidence-based thresholds for your other tools."
keywords: ["market statistics", "market stats indicator", "trade size statistics", "volume statistics", "standard deviation trades", "threshold calibration", "average trade size"]
---

Market Statistics is a calibration tool rather than a trading signal. It analyzes your symbol's trade or bar data and reports how frequently different value ranges occur, with an average and deviation for each grouping. Armed with those numbers, you stop guessing thresholds for other tools and start setting them from evidence.

The live documentation describes its purpose directly: obtaining useful statistical information to configure tools such as Big Trades, Volume Clusters, Significant POCs, Delta Filter Bars, and Time & Sales.

## What it is

The indicator scans a dataset you define — trade sizes, order counts, or per-bar values such as POC volume or delta — and identifies the most frequent and least frequent values in it. Results are grouped into ranges you control (**Initial Range**, **End Range**, **Step Range**) and each grouping is reported with **AVG** (average) and **Dev** (deviation). For example, a "300–350" range showing **AVG: 9** and **Dev: 17** describes how often values in that range occur.

[SCREENSHOT: Chart with the Market Statistics indicator output displayed — a table/graph of value ranges with AVG and Dev figures per range, on an active futures symbol | market-statistics-output-overview.png]

## When to use it

- You are setting the **Min** filter for [[big-trades]] and want to know what trade size is genuinely rare on your symbol.
- You calibrate size filters for [[adv-time-and-sales]] or delta-based tools instead of copying thresholds from another instrument.
- You are switching symbols or contracts and need to re-base every size-dependent setting quickly.
- You want to understand a market's baseline behavior — typical trade sizes, typical bar volume — before building rules on top of it.

## Quick start

1. Open the **Indicator List** on your chart and add **Market Statistics**.
2. Open the indicator's **Settings**.
3. Set **Stat Mode** to **Trades** to analyze trade/contract statistics.
4. In **Data Settings**, choose **Aggregate Trades** so split executions at the same price are combined (see [[different-types-of-input]]).
5. In **Range Trade Settings**, set an **Initial Range**, **End Range** and **Step Range** that cover the sizes you care about — for example stepping through size buckets from small retail prints up to large blocks.
6. Read the **AVG** and **Dev** per range, and use the ranges that occur rarely as candidate thresholds for your other tools.

[SCREENSHOT: Market Statistics settings dialog — Stat Mode, Font Size and % Dev. Std. in General, with the Data, Range Trade, Bar and Time sections visible | market-statistics-settings-dialog.png]

## How to read it

- **High-frequency ranges** — the market's normal behavior. Anything inside these ranges is noise for large-trade detection purposes.
- **Low-frequency ranges** — the outliers. Thresholds for tools like Big Trades belong at or beyond the point where frequency drops off sharply.
- **AVG per range** — the average occurrence for that grouping; **Dev** — the deviation around it. A high Dev relative to AVG means that range's behavior is inconsistent, so treat thresholds near it with more slack.
- **Bars mode** — the same logic applied to per-bar values (POC, Delta POC, or Volume) rather than individual trades, useful when calibrating bar-based tools.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Stat Mode** | **Trades** displays statistics based on the number of trades/contracts; **Bars** displays statistics related to bars and candles. |
| **Font Size** | Adjusts text size for graph readability. |
| **% Dev. Std.** | Sets the percentage of standard deviation used in the analysis. Higher values (2–3) broaden the selection to include values further from the mean; lower values (0.5–1.5) restrict it. [CONFIRM: whether lower % Dev. Std. values keep only values nearest the mean or exclude them — the legacy article wording is ambiguous] |

### Data Settings

| Setting | What it does |
|---|---|
| **Data Type** | **Volume** (total amount traded in a given time period), **Order** (order data and placement information), or **Aggregate Trades** (combines trades at the same price level for a total aggregate view). |
| **Filter Min / Filter Max** | Exclude values outside the specified thresholds from the analysis. |

### Range Trade Settings

| Setting | What it does |
|---|---|
| **Initial Range** | Lower bound of the analyzed value range. |
| **End Range** | Upper bound of the analyzed value range. |
| **Step Range** | Interval width for the frequency groupings. |

### Bar Settings

| Setting | What it does |
|---|---|
| **Base Data Bar** | The per-bar value analyzed in Bars mode: **POC** (Point of Control), **Delta POC** (difference between purchases and sales), or **Volume** (trade volume per bar). |

### Time Settings

| Setting | What it does |
|---|---|
| **Initial Filter / End Filter** | Restrict the analysis to a specific interval of the trading day — useful for excluding overnight sessions with different size behavior. |

## Tips and common mistakes

- **Analyze the session you trade.** Overnight and regular-hours size distributions differ substantially; use the **Time Settings** filters so statistics reflect your trading window.
- **Choose Step Range with intent.** Steps too wide blur the drop-off point where sizes become rare; steps too narrow fragment the picture. Start coarse, then refine around the interesting region.
- **Re-run after contract rollover or regime shifts.** Statistics from a low-volatility month will mis-calibrate thresholds in a high-volatility one.
- **Prefer Aggregate Trades for size thresholds.** Raw trade data counts a split execution as several small trades, which understates the true size hitting the book.

## Related articles

- [[big-trades]]
- [[adv-time-and-sales]]
- [[deep-stats]]
- [[on-candle-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]
