---
title: "Deep V-Tracker"
slug: "deep-v-tracker"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Order Flow indicator with two modules: candle pattern anomalies (Acceleration, Slowdown, Exhaustion) and horizontal Absorption & Pressure levels."
keywords: ["deep v-tracker", "v tracker", "vtracker", "absorption pressure levels", "acceleration pattern", "exhaustion pattern", "PC PE AC AE labels", "what does P mean deep v-tracker"]
---

Deep V-Tracker is a sophisticated Order Flow indicator that detects volumetric imbalances and specific price patterns. It combines two independent modules: **Patterns**, which flags anomalies in trading speed and candlestick behavior, and **Absorption & Pressure**, which draws horizontal levels where buyers or sellers are exerting real force.

Together they answer two different questions — "is something unusual happening inside this candle?" and "at which prices are large participants pressing or absorbing?"

## What it is

The Patterns module watches how each candle forms and marks three anomalies: sudden acceleration in orderflow, deceleration (slowdown), and exhaustion of the aggressive side. The Absorption & Pressure module maps horizontal force levels, labeled by type (Pressure, Absorption, Control and Extreme variants), colored by which side is acting. Both modules aim at the same goal: exposing institutional activity and high-probability trade levels.

[SCREENSHOT: Chart with Deep V-Tracker active showing a cyan Acceleration box over a candle body plus several horizontal Absorption & Pressure lines in purple and green with their P/A/PC/AC labels visible | deep-v-tracker-chart-overview.png]

## When to use it

- You want automatic detection of orderflow "jerks" (acceleration) at rejection points and trend-continuation zones.
- You look for exhaustion at extremes — buyers finishing in an uptrend, sellers finishing in a downtrend.
- You want a live map of pressure and absorption levels with clear key-level and invalidation labels.
- You prefer configurable noise filtering (Strong/Medium/Weak) over an all-or-nothing signal tool.

## Quick start

1. Open the **Indicator List** on your chart, find **Deep V-Tracker** and click **+**.
2. Click the **Settings** icon to configure the modules.
3. In the Patterns module, enable only **Acceleration** to start — the team recommends disabling the other patterns at first to reduce clutter — and set **Pattern Mode** to **Strong**.
4. In the Absorption & Pressure module, start with **Intensity = Strong** and **Level Mode = Conservative** so only the most structural levels are drawn.
5. Optionally create alerts under **Options → Settings → Add Alert**; the alert then appears in the Deep V-Tracker list.

[SCREENSHOT: Deep V-Tracker settings dialog showing the Patterns module with only Acceleration enabled and Pattern Mode set to Strong, and the Absorption & Pressure section with Intensity and Level Mode dropdowns visible | deep-v-tracker-settings.png]

## How to read it

### Patterns module

| Pattern | Meaning |
|---|---|
| **Acceleration** | A sudden "jerk" in orderflow during candle formation, drawn as a filled cyan box over the candle body. Signals zones of strong institutional interest — rejection points and trend-continuation areas. |
| **Slowdown** | Price movement decelerating in the current direction — potential consolidation or a weakening trend. |
| **Exhaustion** | The aggressive side has depleted its orders. In an uptrend: buyers are done, reversal risk. In a downtrend: sellers are done, a bottom may form. |

### Absorption & Pressure module

Color tells you which side is acting: **purple = bid activity (seller pressure)**, **green = ask activity (buyer pressure)**.

| Label | Meaning |
|---|---|
| **P** (dashed) | Strong buying pressure. |
| **P** (solid) | Strong selling pressure. |
| **A** | Absorption — aggressive orders blocked by passive orders. |
| **PC** | Pressure Control — key selling level. |
| **PE** | Pressure Extreme — invalidation level for the pressure zone. |
| **AC** | Absorption Control — key buying level. |
| **AE** | Absorption Extreme — invalidation level for the absorption zone. |

Read Control levels (**PC**, **AC**) as the key prices to trade around, and Extreme levels (**PE**, **AE**) as the "I'm wrong" lines: if price trades through an Extreme, the corresponding zone is invalidated.

## Settings reference

Grouped by module as in the settings dialog.

### Patterns module

| Setting | What it does |
|---|---|
| **Pattern toggles** | Enable/disable **Acceleration**, **Slowdown**, **Exhaustion** individually. |
| **Pattern Mode** | Noise filter: **Strong** shows only strong levels with minimal noise, **Medium** is balanced, **Weak** shows more markers with higher noise. |
| **Color** (per pattern) | Custom color for each pattern type. |

### Absorption & Pressure module

| Setting | What it does |
|---|---|
| **Intensity** | **Strong** draws only the strongest levels (minimal noise), **Medium** balances visibility and noise, **Weak** draws more levels with more noise. |
| **Level Mode** | **Conservative** favors solid structural zones, **Medium** is balanced, **Aggressive** draws levels close to price that are easier to violate. |
| **Control/Extreme Line Width** | Line thickness for Control and Extreme levels. |
| **Bid Color / Ask Color** | Colors for the purple bid-side and green ask-side levels. |
| **Text Size** | Size of the P/A/PC/PE/AC/AE labels. |
| **Number of Bars** | How far the lines extend (line length in bars). |
| **Extend Far Right** | Extends levels all the way to the price scale. |

### Alerts

| Setting | What it does |
|---|---|
| **Add Alert** | Create alerts via **Options → Settings → Add Alert** for any pattern, pressure or absorption event; the alert then appears in the Deep V-Tracker list. |

## Tips and common mistakes

- **Chart too crowded?** Enable only the Acceleration pattern, raise **Pattern Mode** to **Strong**, and set **Intensity = Strong** with **Level Mode = Conservative**. Add detail back only when the chart stays readable.
- **Do not confuse label color and pattern color.** Purple/green encodes which side acts on the levels; the cyan box is specifically the Acceleration pattern.
- **Respect the Extremes.** PE and AE are invalidation prices — holding a trade through them means trading against the tool's own logic.
- **Aggressive Level Mode is for scalping.** Levels near price get violated more often; use Conservative mode for swing-style structure.
- **Cross-check exhaustion.** An Exhaustion mark pairs well with the ratio and COT columns in [[deep-stats]] before you fade a move.

## Related articles

- [[orderflow-101]]
- [[understanding-icebergs-absorption]]
- [[understanding-auction-theory]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]
