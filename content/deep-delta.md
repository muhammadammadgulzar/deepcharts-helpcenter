---
title: "Deep Delta"
slug: "deep-delta"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Reference for Deep Delta: filtered delta with up to four size ranges to separate small, medium and large participants, plus threshold lines and absorption markers."
keywords: ["deep delta", "delta filter", "delta bars", "filtered delta", "multi range delta", "big player delta", "absorption marker", "delta ranges"]
---

Deep Delta is an advanced evolution of the classic Delta Bars indicator. Instead of one delta number per candle, it lets you apply size filters to the delta and split it into up to four separate ranges — so you can watch small, medium and large participants' delta independently inside the same candle.

That separation is the whole point: retail-sized flow and institutional-sized flow often disagree, and Deep Delta makes the disagreement visible.

## What it is

Delta is aggressive buying volume minus aggressive selling volume. Classic delta lumps every trade size together; Deep Delta's Multi-Range mode filters trades by size into up to four ranges (each with its own minimum and maximum) and plots each range's delta as its own series. Threshold lines and vertical markers flag the moments when delta extremes hit levels you define.

## When to use it

- You want to see whether large players agree with the current move — or are fading it.
- You want to strip out small-lot noise and read only size above a threshold.
- You look for absorption: strong delta pushes in one direction that price fails to follow.
- You already use Delta Bars and want the same reading with size context added ([[delta-bar]] covers the classic version).

## Quick start

1. Open a chart and add **Deep Delta** from the chart's **Indicators** button.
2. Set **Delta Mode** to **Multi-Range**.
3. Enable two ranges to start: one with a low minimum for small flow, and one with a high **Min** filter (and **Max** = 0, which disables the maximum) for large flow only.
4. Set **Input Data** to **Aggregate Trades** so split executions are recombined before filtering — otherwise a large order counted as many small fills lands in the wrong range.
5. Apply, and give each range a distinct color in the **Subgraph** section.

[SCREENSHOT: Chart with Deep Delta in Multi-Range mode below the price panel, two colored delta series showing small-size and large-size delta diverging on the same candles | deep-delta-multi-range-chart.png]

## How to read it

- **Ranges agree** (all positive or all negative): participation is aligned across sizes — the pressure is broad.
- **Ranges diverge**: the interesting case. For example, large-size delta (a range with Min = 50) positive while small-size delta is negative suggests big players are buying into retail selling.
- **Markers firing while price does not follow the delta push**: the aggression is being absorbed by passive orders — a classic warning that the move may stall or reverse. See [[understanding-icebergs-absorption]].
- **Threshold lines**: your own significance levels — delta beyond the line means the bar's aggression is unusual by your definition.

For the underlying bid/ask/aggressor mechanics, see [[orderflow-101]].

## Settings reference

Grouped as in the indicator dialog.

### Parameters

| Setting | What it does |
|---|---|
| **Delta Mode** | **Classic** (standard Delta Bars, no filters) or **Multi-Range** (activates the filtered delta ranges) |
| **Input Data** | Calculation basis: **Volume** (total traded volume at each price level — high-intensity zones), **Aggregate Trades** (trades combined at the same price level — reduces execution-fragmentation noise), **Trades** (number of transactions per level — trade frequency), **Order** (order data such as buy/sell order quantities — order pressure). See [[different-types-of-input]] |
| **Range 1–4** | Each range has a **Min** filter, a **Max** filter and an enable toggle. Setting Max to 0 disables the maximum filter |

### Threshold

| Setting | What it does |
|---|---|
| **Level-settings** | Up to two customizable horizontal lines at defined positive/negative delta levels |
| **Marker** | Vertical markers when both the minimum and maximum deltas reach a set threshold — highlights opposing delta pushes within a single bar and absorption situations |

### Subgraph

| Setting | What it does |
|---|---|
| **Range colors** | A color per enabled range |
| **Maximum Positive/Negative Delta shadows** | Shadow colors marking each bar's delta extremes |
| **Line Thickness** | Adjusts the delta range body and shadow appearance |

[SCREENSHOT: Deep Delta settings dialog open at the Parameters section showing Delta Mode set to Multi-Range and the four range rows with Min/Max filters | deep-delta-settings-ranges.png]

## Tips and common mistakes

- **Nothing plots in Multi-Range mode?** The ranges must be individually enabled, and the Min/Max filters must not exclude everything — remember Max = 0 disables the maximum, so check whether your Min sits above the delta sizes actually trading. Also confirm the Input Data choice.
- **Want only big players' delta?** One enabled range with a high Min filter, and **Input Data** = **Aggregate Trades** so split executions are recombined into their original size first.
- **Ranges look identical?** Your Min/Max boundaries may overlap heavily — make the size bands distinct (for example 1–9, 10–49, 50+).
- **Markers everywhere?** The threshold is too low for the instrument's typical delta. Raise it until markers flag genuinely unusual bars.
- Delta measures aggression, not outcome — always read it against price. Strong positive delta with no upward progress is a bearish observation, not a bullish one.

## Related articles

- [[delta-bar]]
- [[orderflow-101]]
- [[deep-print]]
- [[understanding-icebergs-absorption]]
- [[different-types-of-input]]
- [[indicator-layout]]
