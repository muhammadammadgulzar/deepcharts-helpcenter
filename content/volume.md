---
title: "Volume"
slug: "volume"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "beginner"
time: "6 min read"
description: "Histogram of total volume per bar with delta-based background coloring, seconds-based calculation, absorption markers, alerts and an average volume line."
keywords: ["volume", "volume indicator", "volume histogram", "volume bars", "delta background", "volume absorption", "average volume", "volume marker", "volume alert"]
---

The Volume indicator displays the total volume traded in each bar as a histogram beneath your chart. In DeepCharts it goes well beyond a plain volume plot: the histogram background can be colored by delta, the data can be filtered by trade size, graphical markers can flag bars that meet volume and delta conditions you define, and the calculation can be based on seconds to reveal intrabar acceleration.

If you are new to orderflow, this is the first indicator to learn — nearly every other volume and delta tool builds on the same concepts.

## What it is

Volume is a per-bar activity meter. Each histogram bar answers "how much traded here?", and the optional delta coloring answers "who was more aggressive — buyers or sellers?" With markers enabled it also answers "did an unusually large effort get absorbed?"

[SCREENSHOT: Chart window with the Volume indicator in a panel beneath the price candles — histogram bars visible with a delta-based background coloring and one bar flagged with an absorption marker | volume-indicator-chart-overview.png]

## When to use it

- You want confirmation behind price moves: high volume on a breakout signals conviction, low volume signals weakness.
- You hunt absorption — strong volume and delta pushes that fail to move price, often preceding reversals.
- You trade range or tick charts and want seconds-based volume to expose accelerations and decelerations in trading speed.
- You want an at-a-glance read of buy-versus-sell pressure via the delta background modes.
- You want context: the average volume line shows whether current activity is above or below what is typical.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Volume** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. Under the data settings, keep **Input data** on **Volume** (see [[different-types-of-input]] for what **Order** and **Aggregate Trade** count instead).
5. Set **Background Mode** to **Delta Fading** so each histogram bar's background fades with the strength of buying or selling pressure.
6. Enable **Average Volume** and set a number of days so you can compare current bars against the recent norm.
7. Apply and confirm the histogram renders beneath the chart.

[SCREENSHOT: Volume indicator settings dialog open at the data section, showing the Input data dropdown expanded with Volume, Order and Aggregate Trade entries and the Filter Min / Filter Max fields below | volume-settings-input-data.png]

## How to read it

- **Tall bars at breakouts** mean participation backs the move; a breakout on shrinking volume is suspect.
- **Delta coloring** shows who was aggressive: with **Delta Fading**, a strongly colored bull background means buyers dominated the bar, and vice versa. A tall bar with a nearly neutral background means heavy two-sided trade — a battle, not a consensus.
- **Absorption markers** (with **Total Delta Absorption** enabled) flag bars that reached a strong delta peak and then closed with delta of the opposite sign — a complete reversal from strong buying to selling or the reverse, and a classic reversal warning.
- **Seconds-based volume** turns the histogram into a speed gauge: on range charts, rising per-interval volume shows the market accelerating into a level, falling volume shows effort drying up.
- **The average volume line** anchors everything: a "tall" bar only matters relative to what is normal for that instrument at that time.

## Settings reference

Grouped as in the settings dialog.

### Data Setting

| Setting | What it does |
|---|---|
| **Input data** | Database used to calculate the indicator: **Volume** (total quantity of contracts or shares traded), **Order** (number of orders placed — useful for gauging participation), or **Aggregate Trade** (number of trades executed, showing frequency independent of size). See [[different-types-of-input]]. |
| **Filter Min** | Minimum filter on the chosen database — only data above this threshold is counted. |
| **Filter Max** | Maximum filter on the chosen database. Left at **0**, no maximum filter is applied. |

### Calculation Settings

| Setting | What it does |
|---|---|
| **Calculation Based on Seconds** | When enabled, volume is calculated per time interval rather than per bar. Particularly useful on range charts to highlight accelerations or decelerations in trading speed. |
| **Number of Seconds** | The interval length for the seconds-based calculation — for example, 5 seconds shows volume acceleration or deceleration within 5-second windows. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Minimum Tot Volume** | Minimum total volume required for a bar to be displayed; smaller bars are hidden so significant activity stands out. |
| **Background Mode** | How the histogram background is colored: **None** (fixed colors from the Series Bull Border/Bull Fill), **Fade** (gradient from the Series colors), **Delta Fading** (fades with delta strength), **Delta Range** (colors from a user-defined delta range; the border takes the color of the delta peak reached), **Volume Slope** (Bull Border color when volume rises versus the previous bar, Bear Border when it falls), **Price Slope** (colored by price direction). |
| **Delta Input Data** | Database used for the delta calculation: **Volume** or **Trade**. |
| **Delta Range** | Opens a sub-dialog to customize delta colorimetry across user-defined value ranges. |
| **Neutral Color** | Background color used when delta is near zero or neutral. |
| **Text Settings** | Size and color of the text displayed on the volume histogram. |

### Marker (Setting, Color And Alert)

Enables graphical markers when volume and delta conditions are met.

| Setting | What it does |
|---|---|
| **Volume Max** | Volume peak threshold — marks bars that exceed it. |
| **Diff. Vol** | Volume difference from the maximum peak reached. Useful with seconds-based calculation to spot volume pullbacks or retracements. |
| **Max. Delta** | Maximum absolute delta the bar reached — marks bars with a significant buy/sell imbalance. |
| **Diff. Delta** | Delta difference from the maximum peak reached — useful for identifying delta absorption or reversals. |
| **Total Delta Absorption** | When enabled, highlights only bars that reach the specified peak and then close with delta of the opposite sign — a complete reversal in aggression that signals potential turns. |
| **Calculation on Close** | When enabled, the marker fires only on bar close. Disabled, it can appear intrabar and disappear again if the conditions stop being met. |
| **Marker Color** | Marker colors and opacity, differentiating absorption in Bid (sellers overpowered) from absorption in Ask (buyers overpowered). |
| **Marker Alert** | Audible notification and popup message when marker conditions are met. |

### Average Volume

| Setting | What it does |
|---|---|
| **Average Volume** | Enables an average line for volume and sets the number of days used to calculate it — context for whether current volume is above or below typical. |

## Tips and common mistakes

- **Interpret volume relative to the average, not in isolation.** Enable the average line before judging any bar as "big".
- **Leave Calculation on Close enabled while learning.** Intrabar markers that appear and vanish teach bad habits; closed-bar signals are stable.
- **Absorption markers are warnings, not entries.** Confirm against structure and the tape before fading a move — see [[orderflow-101]] for the underlying mechanics.
- **Seconds-based volume belongs on range and tick charts.** On plain time charts every bar already covers the same duration, so the option adds little.
- **A filtered histogram is a different indicator.** If you set **Filter Min** high to isolate large trades, remember the bars no longer show total activity — compare with an unfiltered chart before drawing conclusions.

## Related articles

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-bar]]
- [[big-trades]]
- [[speed-of-tape]]
