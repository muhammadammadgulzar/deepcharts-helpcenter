---
title: "Delta Cumulative Candlestick"
slug: "delta-cumulative-candlestick"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Plots cumulative delta as candlesticks so you can read the running total of buy versus sell aggression with full open-high-low-close detail."
keywords: ["delta cumulative candlestick", "cumulative delta", "CVD", "cumulative volume delta", "delta candles", "CVD candlestick", "cumulative delta divergence"]
---

Delta Cumulative Candlestick plots the running summation of each candle's delta — the difference between aggressive market buys and market sells — as its own candlestick series beneath the chart. Where a per-bar delta tool shows each candle's aggression in isolation, this indicator shows the accumulated score of the whole battle, so you can see which side has been more aggressive over time.

Because the cumulative delta is drawn as candlesticks rather than a single line, you also see its open, high, low and close per bar — the path aggression took inside every candle.

## What it is

The indicator visualizes the cumulative delta summation of each candlestick. Every new bar adds its delta to the running total: sustained aggressive buying tilts the series upward, sustained selling tilts it down. Traders commonly call this cumulative volume delta (CVD). Its main use is comparing the shape of the delta series with the shape of price — agreements confirm the move, divergences warn about it.

Explore the running total below — hover the bars to see each candle's delta being added to the cumulative line.

[WIDGET: delta-lab]

## When to use it

- You want trend confirmation: price making higher highs while cumulative delta also makes higher highs shows real aggressive participation.
- You hunt divergences: price breaks to a new high but cumulative delta does not — the breakout lacks aggressive buyers.
- You study absorption: cumulative delta falls hard while price holds — passive buyers are absorbing the sell aggression.
- You want intrabar detail on the delta path itself, which a simple line version cannot show.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Delta Cumulative Candlestick** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. Set **Input Data** to **Volumes** — delta from the amounts of contracts/shares traded — the standard choice (see [[different-types-of-input]]).
5. Enable **Reset to Start Session** so the accumulation restarts each trading session and today's reading is not polluted by yesterday's total.
6. Under **Subgraphs**, choose the **Candlestick** style and colors that match your chart, then apply.

[SCREENSHOT: Delta Cumulative Candlestick settings dialog showing the Input Data dropdown open with Volumes, Order and Aggregates Trades options, plus Filter Min, Filter Max, Reset to Start Session, Average and Zero Line settings | delta-cumulative-candlestick-settings.png]

## How to read it

- **The zero line is the balance point.** Above it, cumulative buying aggression leads; below it, selling aggression leads. With session reset enabled, the zero line reads as "who has won the session so far."
- **Confirmation:** price trend and cumulative delta trend moving together is the healthy state — aggression is producing result.
- **Divergence:** price up, cumulative delta flat or down means the rally is running on passive demand or thin supply rather than aggressive buying. It often precedes stalls, though divergences can persist in strong trends — treat them as caution, not a signal by themselves.
- **Absorption:** cumulative delta dropping sharply while price barely moves means aggressive sellers are being absorbed by passive buyers. See [[understanding-icebergs-absorption]].
- **The average line** smooths the cumulative delta and helps you read its trend cleanly; its deviation bands add a volatility envelope around the delta path.

## Settings reference

Grouped as in the settings dialog.

### Parameters

| Setting | What it does |
|---|---|
| **Input Data** | Database for the calculation: **Volumes** (the amounts of contracts/shares traded), **Order** (order data, such as the quantity of buy and sell orders) or **Aggregates Trades** (the number of exchanges or transactions executed). Trades indicate how often an instrument is traded, Volumes indicate how much. See [[different-types-of-input]]. |
| **Filter Min** | Only cumulative delta contributions above this threshold are counted. |
| **Filter Max** | Maximum filter. Left at **0**, no maximum filter is applied. |
| **Reset to Start Session** | Restarts the cumulative delta calculation at the beginning of each trading session instead of accumulating indefinitely. |
| **Average** | Adds a smoothing average to the cumulative delta line, helping identify its trend more clearly. |
| **Zero Line** | The dividing line between positive cumulative delta (more buying aggression) and negative cumulative delta (more selling aggression). |

### Subgraphs

| Setting | What it does |
|---|---|
| **Cumulative Delta** | Colors, subgraph style (**Candlestick**, **OHLC** or **CandleBody**) and line width of the cumulative delta series. |
| **Average** | Color, line style, line width and deviation settings — the deviations draw volatility bands around the average. |

## Tips and common mistakes

- **Decide on session reset consciously.** With reset enabled you compare intraday aggression; disabled, you track a longer-running total whose absolute level depends on when accumulation started. Mixing the two readings leads to wrong conclusions.
- **Divergences are context, not triggers.** Strong trends can shrug off several CVD divergences in a row. Wait for price confirmation.
- **Compare like with like.** Cumulative delta built from **Volumes** and from **Aggregates Trades** can diverge from each other — pick one input and stay consistent within an analysis.
- **Use the candle wicks.** A cumulative delta candle with a long lower wick shows sell aggression that was recovered within the same bar — information a line plot throws away.

## Related articles

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-cumulative-histogram]]
- [[delta-bar]]
- [[deep-delta]]
