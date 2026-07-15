---
title: "Speed of Tape (Instant)"
slug: "speed-of-tape-instant"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Shows the instantaneous speed of trade execution as delta-colored bars, so you can gauge urgency and pressure in real time."
keywords: ["speed of tape instant", "instant tape speed", "real time tape speed", "trade execution speed", "tape velocity", "instantaneous speed of tape"]
---

Speed of Tape (Instant) measures instantaneous trade execution speed — how much is trading right now within a short rolling time window. Bar height shows how fast the tape is running; bar color shows whether buying or selling pressure dominates the flow being measured.

Where the standard [[speed-of-tape]] indicator plots pace as a historical series, the Instant variant keeps you focused on the last few readings, making it a real-time urgency gauge for active trading.

## What it is

The indicator analyzes volume flow over a configurable window (**Number of seconds**, default **10**) and draws the result as colored bars: green/teal bars mark positive-delta periods where buying pressure dominates, red/pink bars mark negative-delta periods where selling pressure dominates, and bar height reflects trading velocity intensity. By default only the most recent readings are shown (**Bars to show**, default **3**), keeping the display anchored to the present.

[SCREENSHOT: Chart with Speed of Tape (Instant) active — the three most recent tape-speed bars visible, tallest bar in the buy color during a fast push up, price candles moving in the background | speed-of-tape-instant-chart-overview.png]

## When to use it

- You confirm momentum in real time: sudden tape-speed spikes in the direction of your trade validate the entry.
- You watch for exhaustion: bars progressively shortening while price extends warns the move is running out of participation.
- You identify acceleration phases: progressively taller bars flag institutional-scale urgency building.
- You recognize consolidation: persistently low velocity tells you to expect chop rather than follow-through.

## Quick start

1. Open the **Indicator List** on your chart and add **Speed of Tape (Instant)**.
2. Open the indicator's **Settings**.
3. Keep **Input data** on **Volume** (the default) to weight speed by traded size (see [[different-types-of-input]]).
4. Leave **Number of seconds** at the default **10** and **Display value** on **Total** — this aggregates all trading activity within each 10-second window.
5. Keep **Bars to show** at the default **3**; increase it only if you want more recent history in view.

[SCREENSHOT: Speed of Tape (Instant) settings dialog — Plot Settings with Bars to show = 3 and Scale min value = 0, Data Settings and Mode Settings sections visible with Number of seconds = 10 | speed-of-tape-instant-settings.png]

## How to read it

- **Tall bar, buy color** — heavy activity dominated by buying pressure; momentum confirmation for longs.
- **Tall bar, sell color** — the same urgency on the sell side.
- **Bars shrinking across readings** — an exhaustion signal: each window is quieter than the last even if price is still drifting.
- **Bars growing across readings** — an acceleration phase; breakouts starting on rising tape speed carry more weight.
- **Uniformly short bars** — low velocity, typical of consolidation; signals from other tools fire less reliably here.

Remember the color encodes delta dominance within the measured window, not the direction of the current candle — a red speed bar can print while price ticks up if sellers dominate the executed flow.

## Settings reference

### Plot Settings

| Setting | What it does |
|---|---|
| **Bars to show** | How many historical bars of Speed of Tape data are displayed on the chart. Default **3**. |
| **Scale min value** | Establishes the baseline for the visual representation of tape speed. Default **0**. |

### General (Candle Settings)

| Setting | What it does |
|---|---|
| **Line width** | Bar thickness for visibility. Default **1**. |
| **Plot reversed** | Reverses the vertical orientation of the bars when enabled. |
| **Delta Positive** | Color for positive-delta (buy-dominant) bars. Default green/teal. |
| **Delta Negative** | Color for bars representing negative-delta periods. |
| **Delta Positive (Secondary)** / **Delta Negative (Secondary)** | Additional color options for each side. |

### Data Settings

| Setting | What it does |
|---|---|
| **Input data** | Data source: **Volume** (default) or **Order** flow data. See [[different-types-of-input]]. |
| **Filter min** | Excludes low-activity periods from the calculation. |
| **Filter max** | Caps extremely high activity periods. Default **0** (no limit). |

### Mode Settings

| Setting | What it does |
|---|---|
| **Display value** | How activity in the window is summarized. Default **Total** — aggregates all trading activity within the specified time window. |
| **Number of seconds** | The time window in seconds over which tape speed is calculated. Default **10**. |

## Tips and common mistakes

- **Ten seconds is a sensible default — but not sacred.** Scalpers on very fast symbols may prefer a shorter window; slower instruments read better with a longer one. Change one thing at a time.
- **Do not treat color as a trade signal.** The delta coloring shows who dominated the measured flow; direction still needs price and structure to confirm.
- **Keep Bars to show small.** The indicator's value is its immediacy — turning it into a long history duplicates what [[speed-of-tape]] already does better.
- **Use Filter min to mute noise on thin markets**, where a handful of small trades can otherwise register as meaningless "speed."

## Related articles

- [[speed-of-tape]]
- [[delta-bar]]
- [[big-trades]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
