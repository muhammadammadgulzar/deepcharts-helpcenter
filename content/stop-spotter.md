---
title: "Stop Spotter"
slug: "stop-spotter"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "Detects potential stop-loss hunting events by combining delta, volume, body size, price movement and imbalance filters into a single chart marker with optional alerts."
keywords: ["stop spotter", "stop hunt", "stop run", "stop loss hunting", "liquidity grab", "stop cascade", "stop hunting indicator", "stop sweep"]
---

The Stop Spotter indicator identifies potential stop-loss hunting events — moments where price accelerates into a cluster of resting stop orders and triggers a cascade. It analyzes delta, volume, price action, candle body size and imbalances together, and prints a marker on the bar when all of your thresholds are met at once.

Because a genuine stop run leaves a very specific footprint (a sudden volume spike, one-sided aggression, consecutive imbalances and a fast directional body), requiring several conditions simultaneously filters out ordinary momentum bars and leaves you with the candidates worth trading.

## What it is

Stop Spotter is a multi-condition orderflow signal indicator. Each of its main parameters is a minimum threshold — for delta percentage, total volume, volume increase, body size, price movement, horizontal delta, and imbalance count and size — and a bar is marked only when every enabled condition is satisfied. It answers the question "did this bar behave like a stop cascade, or is it just a normal push?"

[SCREENSHOT: Chart window with Stop Spotter applied — a fast directional candle breaking a recent swing low with a square marker printed on it, surrounding bars unmarked, showing that only the stop-run candidate is flagged | stop-spotter-chart-overview.png]

## When to use it

- You trade reversals after liquidity grabs: a stop run into an obvious level that immediately stalls is a classic fade setup.
- You trade continuation through stops: a confirmed cascade can fuel the next leg, and the marker tells you the fuel was real.
- You want an objective, threshold-based definition of "stop hunt" instead of eyeballing wicks.
- You want to be alerted in real time when a stop-hunting condition fires, without watching every bar.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Stop Spotter** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. Keep the default thresholds on your first run — **Min. delta %** 25, **Min. volume** 1500, **Min. volume increase** 500, **Min. body ticks** 6 — and observe how often markers print on your instrument.
5. If markers are too frequent, raise **Min. volume** and **Min. % imbalance** first; if they are too rare, lower **Min. body ticks**.
6. Optionally enable the alert sound and message popup in the alert options so signals reach you when you are not watching the chart.

[SCREENSHOT: Stop Spotter settings dialog showing the main parameters list — Min. delta %, Min. volume, Min. volume increase, Min. body ticks, Min price ticks increase, Min. horizontal delta, Min. % imbalance, Min. number imbalance, Calculation Mode and Seconds To Close — with their default values visible | stop-spotter-settings-dialog.png]

> **Note:** The defaults are calibrated thresholds, not universal truths. Volume-based minimums in particular (**Min. volume**, **Min. volume increase**) depend heavily on the instrument and session you trade, so expect to tune them.

## How to read it

- **Marker direction.** The **Color** setting marks upward stop runs and **2° Color** marks downward stop runs, so the marker color tells you which side's stops were hit.
- **Location is everything.** A marker printed while price sweeps an obvious swing high/low, a session extreme, or a well-watched level is far more meaningful than one in the middle of a range. The indicator finds the footprint; you supply the context.
- **What happens next decides the trade.** If price reverses sharply after the marker, the cascade found no follow-through — a potential exhaustion/fade. If price keeps extending with fresh aggression, the stops became fuel for continuation.
- **Early signals.** With **Seconds To Close** at its default of 15, the indicator performs its calculations that many seconds before the bar closes, so a marker can appear slightly before the bar completes. Earlier warning comes at the cost of the occasional condition that fails in the final seconds.

## Settings reference

Grouped as in the settings dialog.

### Main Parameters

| Setting | Default | What it does |
|---|---|---|
| **Min. delta %** | 25 | Minimum difference between buying and selling volume, as a percentage, that signals the directional pressure typical of stop-hunting activity. |
| **Min. volume** | 1500 | Minimum volume a bar must trade to be considered for stop-hunting detection; filters out low-activity periods. |
| **Min. volume increase** | 500 | Minimum volume increase compared to recent bars required to trigger a signal; identifies sudden participation spikes. |
| **Min. body ticks** | 6 | Minimum candle body size in ticks for a bar to qualify; a stop cascade produces a strong directional body. |
| **Min price ticks increase** | 1 | Minimum price movement in ticks required to identify a stop-hunting event. |
| **Min. horizontal delta** | 60 | Minimum difference between bid and ask volume at specific price levels; identifies concentrated aggressive trading. |
| **Min. % imbalance** | 200% | Minimum percentage imbalance between bid and ask volume, indicating the one-sided order flow typical of stop cascades. |
| **Min. number imbalance** | 2 | Minimum number of consecutive imbalances required to confirm the event, for stronger confirmation. |
| **Calculation Mode** | Close | Determines which price level is used for calculations and where the signal is placed on the chart. |
| **Seconds To Close** | 15 | Number of seconds before bar close when the indicator performs its calculations, enabling earlier signals. |

### Contract Calculation

Enables an on-chart contract calculation display next to detected events, so you can translate a signal into position size.

| Setting | What it does |
|---|---|
| **Max loss** | The maximum loss used as the position-sizing input. |
| **Tick value divider** | Divider applied with the instrument's tick value in the size calculation. |
| **Font size** | Size of the calculation text. |
| **Back color / text colors** | Background and text colors of the calculation display. |

### Visual Settings

| Setting | Default | What it does |
|---|---|---|
| **Subgraph Style** | Square | Marker shape for detected events: square, circle, diamond, cross or triangle. |
| **Color** | — | Marker color for upward stop runs. |
| **2° Color** | — | Marker color for downward stop runs. |
| **Line Style / Line Width** | — | Border style and thickness of the markers. |
| **Short Name** | — | Custom label for the indicator on the chart. |

### Alert Options

| Setting | What it does |
|---|---|
| **Alert sound** | Plays a sound notification when the conditions are detected. |
| **Message popup** | Shows an on-screen popup when the conditions are detected. |

## Tips and common mistakes

- **Tune one threshold at a time.** With eight interacting minimums, changing several at once makes it impossible to know which edit changed your signal count. Adjust, observe a session, then adjust again.
- **Do not treat every marker as a reversal signal.** A stop run is a liquidity event, not a direction call. Cascades resolve as both exhaustion and continuation — read the reaction, and confirm with the tape or a footprint such as [[deep-print]].
- **Volume thresholds are instrument-specific.** 1500 contracts means something entirely different on a major index future than on a thin contract. Recalibrate **Min. volume** and **Min. volume increase** whenever you switch instruments.
- **Watch for signals near obvious liquidity pools.** Prior day highs/lows, overnight extremes and round numbers are where stops cluster; combine the marker with a levels tool such as [[important-levels]] to pre-mark the hunting grounds.

## Related articles

- [[orderflow-101]]
- [[understanding-icebergs-absorption]]
- [[big-trades]]
- [[imbalance-tracker]]
- [[different-types-of-input]]
- [[indicator-layout]]
