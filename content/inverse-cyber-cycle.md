---
title: "Inverse Cyber Cycle"
slug: "inverse-cyber-cycle"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Reference for the Inverse Cyber Cycle oscillator in DeepCharts: dual cycle lines, smoothing alpha, cycle lengths, level thresholds, and how to read crossovers."
keywords: ["inverse cyber cycle", "cyber cycle", "cycle oscillator", "cycle indicator", "turning points", "cycle a", "cycle b", "smoothing alpha", "inverse cybercycle"]
---
The Inverse Cyber Cycle is a cycle-based oscillator designed to identify turning points and cyclical momentum shifts. Instead of a single line, it plots two cycle lines of different speeds oscillating around a zero line, so you can compare a fast read of the market's rhythm against a slower, broader one.

Because it works with cycles rather than raw momentum, it is most useful to traders who already understand oscillator basics and want an earlier read on reversals than classic tools like [[rsi]] or [[stochastic-oscillator]] typically give.

## What it is

The indicator answers the question: where is price within its current cycle, and is that cycle turning? It draws two lines in a separate panel below the price chart:

- **Cycle A** — the faster cycle. It reacts quickly to recent price movement.
- **Cycle B** — the slower cycle. It captures the broader market rhythm.

Both lines oscillate around a configurable middle level (typically zero), with upper and lower threshold levels marking extreme positive and extreme negative cycle conditions.

[SCREENSHOT: Price chart with the Inverse Cyber Cycle in a lower panel, showing Cycle A and Cycle B in contrasting colors crossing near a swing low, with the middle, high and low level lines visible | inverse-cyber-cycle-on-chart.png]

## When to use it

- Timing entries near turning points inside an established trend, rather than chasing the move.
- Spotting cyclical momentum shifts early, before they show up on slower momentum oscillators.
- Identifying overbought or oversold cycle extremes via the high and low threshold levels.
- Comparing fast versus slow cycle behavior — agreement between Cycle A and Cycle B strengthens a signal.

## Quick start

1. Open a price chart — see [[first-chart]].
2. Click the green **Indicators** button (or press **Ctrl I**) to open the **Indicator List**.
3. Search for **Inverse Cyber Cycle** and click **+** to add it. It appears in its own panel below the price.
4. Click the gear icon next to the indicator to open its settings.
5. As a starting point, keep the default cycle lengths and smoothing, and set the **High Level** and **Low Level** symmetrically around the middle line so extremes are flagged on both sides.

[SCREENSHOT: Inverse Cyber Cycle settings dialog open, showing the Smoothing Alpha field, Cycle A Length and Cycle B Length parameters, and the Middle/Low/High level settings | inverse-cyber-cycle-settings.png]

## How to read it

- **Crossovers between the cycles** — watch Cycle A crossing Cycle B for momentum signals. A fast-over-slow cross suggests upward cyclical momentum; the reverse suggests downward momentum.
- **Threshold levels** — readings beyond the **High Level** indicate overbought or extreme positive cycle conditions; readings below the **Low Level** indicate oversold or extreme negative conditions. Turns that begin from these extremes carry more weight than turns near the middle line.
- **Turning points within trends** — the indicator's primary use. In an uptrend, look for the cycle dipping to an extreme low and turning back up as a potential continuation entry; mirror the logic in a downtrend.

## Settings reference

Grouped as in the indicator's configuration window.

### Display area

| Setting | What it does |
|---|---|
| **Horizontal** | Displays the indicator in a separate horizontal panel. |
| **Vertical** | Displays the indicator vertically. |
| Panel selector | Chooses which panel hosts the indicator. |
| Secondary axis | Toggle to scale the indicator on a secondary axis. |

### Parameters

| Setting | What it does |
|---|---|
| **Smoothing Alpha** | Governs how aggressively the cycle is smoothed. Lower values produce smoother but delayed responses; higher values accelerate reactions while increasing sensitivity to noise. |
| **Cycle A Length** | Establishes the faster cycle period. Shorter lengths react more quickly to price movement. |
| **Cycle B Length** | Defines the slower cycle period, capturing the broader market rhythm. |

### Levels

| Setting | What it does |
|---|---|
| **Middle Level** | The neutral reference line, typically zero. |
| **Low Level** | Sets the lower threshold used to identify oversold or extreme negative cycle conditions. |
| **High Level** | Sets the upper threshold used to identify overbought or extreme positive cycle conditions. |

Level colors, line thickness and visual styling are fully customizable.

### Subgraphs

Both **Cycle A** and **Cycle B** support customizable line color, line style, line width, auto-color behavior and label display. Display options include name and value labels with background customization, and inclusion in auto-centering.

## Tips and common mistakes

- **Do not trade every crossover.** Cycle A and Cycle B cross frequently in quiet markets; the highest-quality signals occur when a crossover starts from beyond the High or Low level.
- **Match the cycle lengths to your timeframe.** If the lines whip back and forth without rhythm, the lengths are too short for the instrument's actual cycle; lengthen Cycle B first.
- **Resist over-tightening Smoothing Alpha.** A higher alpha reacts faster but amplifies noise — increase it only if signals consistently arrive too late.
- **Use it inside a trend context.** The indicator identifies turning points within trends; in a strong one-way move, counter-trend extremes can stay pinned far longer than expected.

## Related articles

- [[know-sure-thing]]
- [[rsi]]
- [[stochastic-oscillator]]
- [[momentum]]
- [[different-types-of-input]]
- [[indicator-layout]]
