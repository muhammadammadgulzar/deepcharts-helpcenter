---
title: "Aroon Up/Down"
slug: "aroon-up-down"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Read trend momentum with the Aroon Up/Down indicator: two 0–100 lines that measure how recently price made a new high or low."
keywords: ["aroon", "aroon up down", "aroon indicator", "trend momentum", "new high new low indicator", "arun indicator", "aroon crossover"]
---

The Aroon Up/Down indicator evaluates trend momentum by measuring how recently price made a new high or a new low within a selected period. Instead of asking "how far has price moved?", Aroon asks "how fresh is the latest extreme?" — a subtly different and often earlier read on trend health.

The indicator plots two lines in their own panel, each ranging from 0 to 100, so you always see the bullish and bearish sides of the market measured separately.

## What it is

Aroon consists of two components:

- **Aroon Up** — measures the strength of bullish momentum: it is high when a new period-high was made recently and decays as that high ages.
- **Aroon Down** — measures the strength of bearish momentum in the same way, based on the most recent period-low.

A reading near 100 means the corresponding extreme was set very recently; a reading near 0 means it happened long ago within the lookback window. Because the two lines are independent, Aroon distinguishes "strong uptrend" (Up high, Down low) from "volatile chop" (both elevated) in a way single-line tools cannot.

## When to use it

- To spot emerging trends early: a line pinned near 100 means price keeps printing fresh extremes in that direction.
- To time trend changes with **Aroon Up/Aroon Down crossovers**.
- To confirm consolidation: both lines drifting low means no new highs or lows are being made — a range.
- As a complement to [[adx|ADX]]: ADX measures trend strength without direction; Aroon shows which side is producing the fresh extremes.

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Aroon Up/Down" and click **+** to add it — it plots in its own panel below the price chart.
4. Click the gear icon next to the indicator to open its settings.

The default **Length** of 14 with the standard levels (75 / 50 / 25) is a solid starting point. Give Aroon Up and Aroon Down strongly contrasting colors — the crossovers are the signal, so they need to be visible at a glance.

[SCREENSHOT: A price chart with the Aroon Up/Down indicator in a lower panel — Aroon Up riding near 100 during an uptrend while Aroon Down sits near 0, with the 75/50/25 level lines visible | aroon-up-down-on-chart.png]

## How to read it

- **Aroon Up near 100, Aroon Down near 0**: strong uptrend — new highs keep arriving while the last low ages. Reverse the reading for a downtrend.
- **Crossovers**: Aroon Up crossing above Aroon Down suggests bullish momentum taking control; the opposite cross suggests bearish control. Crosses that happen near the **Middle Level** (50) with both lines moving decisively are cleaner than crosses in the low zone.
- **Above the High Level (75)**: strong trend momentum on that side.
- **Below the Lower Level (25)**: weak momentum — that side of the market has not set an extreme in a long time.
- **Both lines low**: consolidation. Neither side is making progress, so trend signals are unreliable until one line breaks upward.

## Settings reference

### Parameters

| Setting | What it does |
|---|---|
| **Length** | Number of bars used in the calculation. Default: 14. Lower values produce faster-responding signals; higher values deliver smoother trend analysis. |

### Level settings

| Setting | What it does |
|---|---|
| **Middle Level** | The equilibrium line between bullish and bearish forces. Default: 50. |
| **Lower Level** | The threshold that signals weak trend momentum. Default: 25. |
| **High Level** | The threshold that signals strong trend momentum. Default: 75. |
| Level colors / **Level Width** | The color of each level line and the line thickness are customizable. |

### Subgraphs (Aroon Up and Aroon Down)

Both lines offer identical configuration:

| Setting | What it does |
|---|---|
| **Color** | Line color for the subgraph. |
| **Line Style** | Visual pattern. Default: **Solid**. |
| **Line Width** | Line thickness. |
| **Short Name** | Custom label shown in the chart legend. |
| **Name Label** / **Value Label** | Optional labels showing the line's name and current value, with configurable background colors. |
| **Include on Auto Center** | Whether this line is considered when the panel auto-scales. |

[SCREENSHOT: The Aroon Up/Down settings dialog showing Length 14, the Middle/Lower/High Level fields at 50/25/75, and the two subgraph sections for Aroon Up and Aroon Down | aroon-up-down-settings.png]

## Tips and common mistakes

- **Do not trade every crossover.** In a range the lines cross constantly; require one line to push toward the High Level after the cross before treating it as a trend signal.
- **Aroon measures recency, not magnitude.** A new high by one tick resets Aroon Up to the top exactly like a major breakout does. Check price structure or volume before assuming strength.
- **Length defines what counts as "recent".** A 14-bar Aroon on a 5-minute chart describes roughly the last hour of extremes; the same setting on a daily chart describes three weeks. Set it to the horizon you actually trade.
- If you prefer the same information compressed into a single line around zero, use the [[aroon-oscillator|Aroon Oscillator]] instead.

## Related articles

- [[aroon-oscillator]]
- [[adx]]
- [[donchian-channel]]
- [[different-types-of-input]]
- [[indicator-layout]]
