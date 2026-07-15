---
title: "Delta Bar"
slug: "delta-bar"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Plots each candle's delta — aggressive buying minus aggressive selling — as bars beneath the chart so you can compare market pressure bar by bar."
keywords: ["delta bar", "delta indicator", "bar delta", "buy sell delta", "delta histogram", "delta candlestick", "delta per candle", "orderflow delta"]
---

Delta Bar displays the delta of each candle — the difference between **buy market** and **sell market** activity — as footer bars beneath your price chart. Each bar tells you which side was more aggressive during that candle: market buyers lifting the offer, or market sellers hitting the bid.

It is the most direct way to compare aggression bar by bar, and the natural companion to reading candles: the candle shows what price did, the delta bar shows who was pushing.

## What it is

Delta Bar is a per-candle aggression gauge drawn in its own panel under the chart. Positive delta means more aggressive buying than selling in that candle; negative delta means the opposite. With the candlestick-style subgraph options, each delta bar can also reflect the range delta covered inside the bar — not only where it closed, but the extremes it reached along the way.

[SCREENSHOT: Chart window with the Delta Bar indicator in a footer panel — price candles above and per-bar delta values below, with a clear mix of positive (bull-colored) and negative (bear-colored) delta bars | delta-bar-chart-overview.png]

## When to use it

- You want to confirm a move: a rally on rising positive delta is being driven by real aggressive buying.
- You look for divergences: price makes a new high but delta stays negative or shrinks — the push lacks aggressive participation.
- You study absorption: strongly negative delta while price refuses to fall means passive buyers are soaking up the selling.
- You want the aggression story at a glance without opening a full footprint like [[deep-print]].

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Delta Bar** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. In the data settings, keep the input on **Volume** — the total volume traded at each price level — until you have a reason to switch (see [[different-types-of-input]]).
5. Leave **Filter Min** and **Filter Max** at their neutral values so all delta is counted (a **Filter Max** of **0** applies no maximum filter).
6. Under **Subgraphs**, pick a style — **Candlestick**, **OHLC** or **CandleBody** — and set the bull/bear colors to match your chart scheme.

[SCREENSHOT: Delta Bar settings dialog showing the data setting section with the input options (Volume, Order, Trades, Aggregate Volume, Aggregate Trades) and the Subgraphs section with the style dropdown open on Candlestick, OHLC, CandleBody | delta-bar-settings-dialog.png]

## How to read it

- **Sign and size.** A large positive delta bar means buyers aggressively dominated the candle; a large negative bar means sellers did. Small delta on a large candle means the move happened with little net aggression — often thin liquidity rather than conviction.
- **Delta versus price direction.** The strongest signals come from disagreement. A bullish candle with negative delta means price rose while sellers were more aggressive — passive buyers absorbed them, a strong sign. A bearish candle with positive delta is the mirror image.
- **Intrabar delta range.** With the **Candlestick** or **OHLC** style, the delta bar shows the extremes delta reached inside the candle as well as where it closed. A delta bar that spiked strongly positive but closed near flat reveals buyers who tried and failed.
- **Sequences matter more than single bars.** Shrinking positive delta bars into a resistance level show buying pressure fading before price confirms it.

## Settings reference

Grouped as in the settings dialog.

### Data Setting

| Setting | What it does |
|---|---|
| **Volume** | Calculates delta from total volume traded at each price level — the standard reading of trading intensity. |
| **Order** | Uses order data, such as the quantity of buy and sell orders at each price level — for evaluating order pressure and participant behavior. |
| **Trades** | Uses the number of trades executed at each price level, regardless of their size. |
| **Aggregate Volume** | Uses aggregate volume — small orders placed within a short time frame of each other and traceable to a single larger order, combined back together. |
| **Aggregate Trades** | Uses aggregate trades — the same reconstruction applied to trade counts. See [[different-types-of-input]]. |
| **Filter Min** | Minimal filter on the indicator — only delta values above this threshold are displayed. |
| **Filter Max** | Maximum filter on the indicator. Left at **0**, no maximum filter is applied. |

### Subgraphs

| Setting | What it does |
|---|---|
| **Colors** | Color scheme for the delta bars, differentiated for positive (buy) versus negative (sell) delta. |
| **Subgraph Style** | Drawing format: **Candlestick**, **OHLC** or **CandleBody**. |
| **Line Width** | Bar thickness, for visibility. |

## Tips and common mistakes

- **Delta is aggression, not prediction.** Positive delta into a wall of passive sellers can precede a drop — always read delta against what price actually did.
- **Match the input type before comparing charts.** Volume, Trades and Aggregate inputs produce genuinely different delta values on the same candles.
- **Use filters deliberately.** A **Filter Min** that isolates large trades turns Delta Bar into a "big player delta" tool — useful, but no longer the full picture.
- **Watch cumulative context.** Per-bar delta flips constantly; pair it with [[delta-cumulative-candlestick]] or [[delta-cumulative-histogram]] to see the running total.

## Related articles

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-cumulative-candlestick]]
- [[delta-cumulative-histogram]]
- [[delta-highlight]]
