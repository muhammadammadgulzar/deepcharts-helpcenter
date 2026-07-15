---
title: "Aroon Oscillator"
slug: "aroon-oscillator"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Compress Aroon Up and Aroon Down into a single line around zero with the Aroon Oscillator to read trend strength, direction and exhaustion."
keywords: ["aroon oscillator", "aroon osc", "aroon difference", "trend oscillator", "zero line oscillator", "arun oscillator"]
---

The Aroon Oscillator measures trend strength and direction by calculating the difference between Aroon Up and Aroon Down. Where [[aroon-up-down|Aroon Up/Down]] shows two lines, the oscillator compresses the same information into one line that fluctuates around a zero line: positive when the bulls are setting the fresh extremes, negative when the bears are.

If you find two-line crossovers visually noisy, this is the cleaner way to consume Aroon.

## What it is

The oscillator answers "which side is winning, and by how much?" in a single value. Because Aroon Up and Aroon Down each range from 0 to 100, their difference ranges between the extremes on either side of zero: strongly positive readings mean recent new highs dominate, strongly negative readings mean recent new lows dominate, and readings near zero mean neither side has an edge.

The indicator helps traders identify emerging trends, trend strength, potential reversals, and overbought/oversold-style exhaustion zones.

## When to use it

- To read trend direction and strength from a single line instead of tracking two.
- To catch trend transitions: the zero-line cross is the oscillator's version of the Aroon Up/Down crossover.
- To spot exhaustion: extreme readings that stall and turn back toward zero warn that the dominant side is losing its grip.
- To confirm signals from price-based tools such as the [[donchian-channel|Donchian Channel]] — a breakout backed by a strongly positive oscillator has fresh-extreme momentum behind it.

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Aroon Oscillator" and click **+** to add it — it plots in its own panel below the price chart.
4. Click the gear icon next to the indicator to open its settings.

The default **Length** of 14 matches the standard Aroon setup. The default **Subgraph Style** is **Bars** with **Auto Color (+/-)**, so positive and negative readings are colored differently out of the box — an easy way to read regime at a glance.

[SCREENSHOT: A price chart with the Aroon Oscillator in a lower panel rendered as bars, positive bars in one color during the uptrend and negative bars in another after the reversal, zero line visible in the middle | aroon-oscillator-on-chart.png]

## How to read it

- **Above zero**: Aroon Up exceeds Aroon Down — the most recent extremes are highs; bullish regime. **Below zero** is the bearish mirror.
- **Distance from zero = conviction.** Readings pushed toward the extremes mean one side has been setting extremes recently while the other side's last extreme is stale — a strong trend.
- **Zero-line crosses** mark potential trend changes. As with any oscillator, crosses during quiet ranges whipsaw; crosses accompanied by a decisive price move are more reliable.
- **Fading extremes**: when the oscillator reaches an extreme zone and then contracts toward zero while price stalls, the trend is aging — tighten risk or look for reversal structure.

## Settings reference

### Parameters

| Setting | What it does |
|---|---|
| **Length** | Number of bars used in the Aroon calculation. Default: 14. Lower values produce more responsive signals; higher values generate smoother results. |

### Level settings

| Setting | What it does |
|---|---|
| **Middle Level** | The neutral-trend reference line. Default: 0. |
| **Lower Level** | Level line marking one extreme zone. Default: 80. |
| **High Level** | Level line marking the opposite extreme zone. Default: -80. |
| **Middle/Lower/Higher Level Color** | Color of each level line. |
| **Level Width** | Thickness of the level lines. |

These levels help identify strong trend conditions and potential exhaustion zones.

[CONFIRM: the source article lists Lower Level default as 80 and High Level default as -80 — verify in the app whether these two defaults are intentionally assigned this way or swapped.]

### Subgraphs

| Setting | What it does |
|---|---|
| **Color** / **2° Color** | Primary and secondary colors for the oscillator bars. |
| **Subgraph Style** | Display format. Default: **Bars**. |
| **Auto Color (+/-)** | Automatically changes color based on positive or negative values. |
| **Line Style** | Visual pattern when drawn as a line (Solid and other styles). |
| **Line Width** | Line/bar thickness. |
| **Short Name** | Custom label shown in the chart legend. |
| **Name Label** / **Value Label** | Optional name and value labels, with **Name Background** and **Value Background** color options. |
| **Chart color for marker** | Uses the chart color for the value marker. |
| **Include on Auto Center** | Whether the series is considered when the panel auto-scales. |

[SCREENSHOT: The Aroon Oscillator settings dialog showing Length 14, the Level settings group with Middle/Lower/High Level fields, and the Subgraphs group with Subgraph Style set to Bars and Auto Color (+/-) enabled | aroon-oscillator-settings.png]

## Tips and common mistakes

- **Zero-line crosses lag the two-line view slightly** in choppy conditions and repeat often in ranges. Require follow-through — a push toward an extreme zone — before treating a cross as a trend change.
- **An extreme reading is strength, not an automatic reversal.** Unlike a true overbought/oversold oscillator, a pinned Aroon Oscillator often just means a healthy trend printing extreme after extreme. Look for the contraction back toward zero, not the extreme itself.
- **Keep Length consistent** with any [[aroon-up-down|Aroon Up/Down]] panel you run alongside it, or the two will disagree and generate confusion rather than confirmation.
- The **Bars** style with **Auto Color (+/-)** is easier to read at a glance than a line; keep it unless you overlay multiple series in the same panel (see [[indicator-layout]]).

## Related articles

- [[aroon-up-down]]
- [[adx]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]
