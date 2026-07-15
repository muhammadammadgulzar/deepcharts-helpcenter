---
title: "Pivot Points"
slug: "pivot-points"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Plots a pivot level plus R1/R2 resistance and S1/S2 support lines calculated from the previous day's, week's or month's high, low and close."
keywords: ["pivot points", "pivots", "R1", "R2", "S1", "S2", "daily pivots", "support and resistance levels", "pivot point indicator", "pivot lines"]
---

The Pivot Points indicator plots potential support and resistance levels calculated from the high, low and closing prices of previous periods — daily, weekly or monthly. It draws a central pivot level with resistance levels (R1, R2) above and support levels (S1, S2) below, giving you a ready-made map of prices where the market reacted before it even opens.

Because the levels come from fixed historical prices, they are identical for everyone using the same calculation — which is exactly why so many traders watch them, and why price so often reacts around them.

## What it is

Pivot Points is a classic levels indicator. At the start of each period it computes a pivot and its surrounding support/resistance levels from the previous period's high, low and close, then draws them as labeled horizontal lines across the new period. It answers the question "based on yesterday's (or last week's, or last month's) trading, where are today's likely reaction prices?"

[CONFIRM: which pivot calculation variant DeepCharts uses to derive the pivot, R1/R2 and S1/S2 from the previous period's high, low and close]

[SCREENSHOT: Intraday chart with Pivot Points applied — the central pivot line with R1 and R2 above and S1 and S2 below, each line labeled and in a distinct color, with price reacting near R1 | pivot-points-chart-overview.png]

## When to use it

- You are new to support and resistance and want objective, automatically drawn levels instead of subjective trendlines.
- You day trade and want the daily pivot map on your chart before the session opens.
- You need common reference prices — pivots are widely watched, so reactions around them tend to be self-reinforcing.
- You swing trade and want the wider weekly or monthly pivot grid for targets and risk placement.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Pivot Points** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. Keep **Period to Show** at its default of **1** so only the current set of levels is drawn — a clean chart while you learn the tool.
5. Give the pivot, resistance and support lines distinct colors under the color settings, so you can tell R-levels from S-levels at a glance.
6. Adjust **Font Size** (default 12.00) and **Line Width** (default 1.00) to taste, then apply.

[SCREENSHOT: Pivot Points settings dialog showing Plot Settings (Font Size 12.00, Line Width 1.00, Line Style, Label Align, Period to Show 1), the Custom Reference - Timeframe section, the color settings for Pivot Point, R1, R2, S1, S2, and the Custom Time - Market Timezone section | pivot-points-settings-dialog.png]

## How to read it

- **The pivot line is the session's balance point.** Trading above the pivot is generally read as a bullish bias for the period; trading below it as bearish. Repeated crosses back and forth signal a rotational, range-bound session.
- **R1 and R2 are staged resistance.** In an up move, R1 is the first natural reaction area and a common first profit target; R2 marks a stretched move for the period.
- **S1 and S2 are staged support.** The mirror image below the pivot: S1 is the first area to expect buyers, S2 a deeper flush.
- **Levels work as flip zones.** A broken resistance level often acts as support on the retest (and vice versa). The first retest of a freshly broken pivot level is one of the most common setups built on this indicator.
- **Match the period to your horizon.** Daily pivots suit intraday trading; weekly and monthly pivots produce wider grids relevant for swing entries and bigger targets.

## Settings reference

Grouped as in the settings dialog.

### Plot Settings

| Setting | Default | What it does |
|---|---|---|
| **Font Size** | 12.00 | Size of the level label text. |
| **Line Width** | 1.00 | Thickness of the pivot lines. |
| **Line Style** | — | Visual style of the lines. |
| **Label Align** | — | Position/alignment of the level labels. |
| **Period to Show** | 1 | How many periods of levels to display. Raise it to keep prior periods' levels on the chart for context. |

### Custom Reference — Timeframe

| Setting | What it does |
|---|---|
| **Enable** | Activates the custom reference, letting you base the levels on a reference period other than the standard one. |
| **Param Type** | Selects the type of time reference used. |
| **Param Value** | Value for the chosen parameter type. |

### Color Settings

| Setting | What it does |
|---|---|
| **Pivot Point Color** | Color of the central pivot line. |
| **R1 Color / R2 Color** | Colors of the first and second resistance levels. |
| **S1 Color / S2 Color** | Colors of the first and second support levels. |

### Custom Time — Market Timezone

| Setting | Default | What it does |
|---|---|---|
| **Enable** | — | Toggles the custom time window on or off. |
| **Ini Time** | 00:00:00 | Start time of the period used for the calculation. |
| **End Time** | 00:00:00 | End time of the period used for the calculation. |

> **Tip:** The custom time window matters for futures, where the exchange day and your local calendar day differ. Defining the period explicitly ensures the high, low and close feeding the pivots come from the session you actually trade.

## Tips and common mistakes

- **Do not treat pivots as guaranteed turning points.** They are reference prices, not predictions. Trade the reaction you see at the level — rejection, absorption, or clean break — rather than the level itself.
- **Mind the session definition.** If the levels look "off" compared to other platforms, the period boundary is the usual culprit; use the **Custom Time — Market Timezone** section to align the calculation window with your market's session.
- **Fewer periods, cleaner chart.** A high **Period to Show** buries the current levels under old ones. Keep it low intraday and raise it only when studying how price treated past grids.
- **Combine with volume-based levels.** Pivots are price-formula levels; pairing them with volume-derived references such as [[important-levels]] (POC, value areas, VWAP) shows you where formula levels and actual traded interest agree — those confluences are the strongest zones.

## Related articles

- [[important-levels]]
- [[absolute-levels]]
- [[price-movement-levels]]
- [[understanding-market-structure-sessions]]
- [[different-types-of-input]]
- [[indicator-layout]]
