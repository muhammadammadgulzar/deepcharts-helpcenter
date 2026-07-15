---
title: "Speed of Tape"
slug: "speed-of-tape"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Measures how fast the market is trading over a chosen time window, so you can spot activity surges, acceleration and dead zones."
keywords: ["speed of tape", "tape speed", "trading speed indicator", "tape reading", "market activity intensity", "trades per second", "pace of tape"]
---

Speed of Tape monitors the intensity of market activity — how much volume, how many orders, or how many trades go through in a fixed time window. When the tape speeds up, participants are urgent; when it slows to a crawl, nobody is committed. This indicator turns that tape-reading instinct into a measurable, chartable series.

It is a pace gauge rather than a direction gauge: it tells you how hard the market is working, and its candle-style coloring hints at which side is doing the work.

Get a feel for pace on the live tape below — let it run, then hover to pause and inspect individual prints while the buy/sell counters keep ticking.

[WIDGET: tape-lab]

## What it is

The indicator measures activity per time interval — the **Number Seconds** window — using your choice of volume, orders, or executed trades as the input. The result plots as candlestick-style bars in a separate panel, with bull and bear coloring reflecting strong buyer or strong seller participation. Filters and a standard-deviation option let you keep only the statistically unusual readings.

[SCREENSHOT: Chart window with the Speed of Tape indicator in a footer panel — candlestick-style speed bars spiking during a breakout, with bull-colored bars on the impulse and smaller bars during the consolidation before it | speed-of-tape-chart-overview.png]

## When to use it

- You want early warning that activity is surging before a breakout extends — pace often rises with, or just before, the move.
- You identify acceleration patterns: successive speed increases confirm growing urgency behind a trend.
- You avoid dead markets: persistently low tape speed flags conditions where breakouts tend to fail.
- You supplement footprint or profile analysis with a pure pace dimension that neither shows directly.

## Quick start

1. Open the **Indicator List** on your chart and add **Speed of Tape**.
2. Open the indicator's **Settings**.
3. Set **Input Data** to **Trades** to measure execution count, or keep **Volume** to weight by size (see [[different-types-of-input]]).
4. Set **Number Seconds** to the interval you want speed measured over — shorter intervals react faster, longer intervals smooth the reading.
5. Leave **Filter Min** and **Filter Max** unset at first; add a **Filter Min** later to mark only genuinely fast periods.

[SCREENSHOT: Speed of Tape settings dialog open on the General section — Input Data dropdown expanded showing Volume, Order and Trades, with Number Seconds and the filter fields visible below | speed-of-tape-settings-general.png]

## How to read it

- **Tall bars** — high activity for the measured window: urgency, participation, and usually cleaner follow-through.
- **Rising sequence of bars** — acceleration: each window is busier than the last, typical of a move gathering real participation.
- **Spike then collapse** — a burst that found no continuation; often marks climax or exhaustion points.
- **Bull-colored vs. bear-colored bars** — strong buyer participation versus strong seller participation, telling you which side generated the pace.
- **Flat, tiny bars** — the market is idling; treat range extremes and signals with extra skepticism until pace returns.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Input Data** | What gets counted: **Volume** (amount of volume traded in the period), **Order** (number of orders placed during the period), or **Trades** (number of trades executed during the period). |
| **Filter Min** | Minimum threshold — only bars exceeding this level are marked. |
| **Filter Max** | Maximum threshold — only bars below this level are marked. |
| **Number Seconds** | The time interval (in seconds) in which speed is measured. |
| **Std Dev Per Filter** | Standard-deviation value for filtering data to a specific statistical range. |

### Subgraphs

| Setting | What it does |
|---|---|
| **Bull Border / Bull Fill** | Colors for positive candles showing strong buyer participation. |
| **Bear Border / Bear Fill** | Colors for negative candles showing strong seller participation. |
| **Subgraph Style** | Drawing style — **Candlesticks**. |
| **Line Style / Line Width** | Rendering style and thickness. |
| **Short Name** | Custom label shown in the panel legend. |

## Tips and common mistakes

- **Choose the window deliberately.** A short **Number Seconds** value makes the panel twitchy; a long one hides micro-bursts. Match it to how long your typical trade setup takes to develop.
- **Speed is not direction.** A fast tape can be fast in both directions (a battle). Read pace here and direction from delta tools such as [[delta-bar]].
- **Use Std Dev Per Filter to find the unusual.** Filtering to readings beyond a statistical band keeps only the windows that genuinely deviate from normal pace, which is where the information is.
- **Combine, don't isolate.** The indicator is most effective alongside volume profile and delta analysis — pace confirms whether structure-based levels are being attacked with real participation.
- **Know the difference from the Instant variant.** [[speed-of-tape-instant]] focuses on the current, instantaneous tape speed over the most recent bars; this indicator plots the speed series across the chart's history.

## Related articles

- [[speed-of-tape-instant]]
- [[delta-bar]]
- [[adv-time-and-sales]]
- [[understanding-volume-profile]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
