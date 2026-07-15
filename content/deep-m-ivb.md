---
title: "Deep-M IVB"
slug: "deep-m-ivb"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Algorithmic Opening Range Breakout (ORB) indicator that plots statistically derived projection, protection and exit levels plus reaction zones and a daily bias."
keywords: ["deep m ivb", "deep-m ivb", "ivb", "opening range breakout", "ORB indicator", "opening range levels", "orb targets"]
---

Deep-M IVB is an algorithmic indicator developed by the DeepCharts team to simplify trading the Opening Range Breakout (ORB) structure. Instead of you measuring the opening range and guessing targets, it derives its levels from years of historical statistics and plots them automatically: the range itself, protection and exit levels after a breakout, reaction zones, and a daily bias readout.

The result is a complete ORB framework on the chart — where the range is, where a breakout statistically tends to travel, where it tends to stall, and which direction the day leans.

## What it is

Deep-M IVB builds the RTH opening range (High, Mid, Low) over a window you choose, then projects statistically derived levels beyond it. After a breakout it plots protection and exit levels — high-probability targets and structured zones — and highlights the strongest reaction zones where price may decelerate. A summary panel in the top-left corner of the chart shows the daily bias.

[SCREENSHOT: Chart with Deep-M IVB applied after the open — opening range High/Mid/Low lines, projection levels above the range following a breakout, shaded reaction zones, and the Summary Panel visible in the top-left corner showing the daily bias | deep-m-ivb-chart-overview.png]

## When to use it

- You trade the Opening Range Breakout and want statistically grounded targets instead of fixed-multiple projections.
- You want pre-planned partial-exit areas: the reaction zones mark where breakout momentum tends to slow.
- You want a quick daily-bias read (Neutral / Positive / Negative) without building your own model.
- You need clear invalidation and protection levels for managing a breakout trade.

## Quick start

1. Open the **Indicator List** on your chart, search for **Deep-M IVB** and click **+**.
2. Click the **Settings** icon to configure it.
3. Set **RTH Opening Range (Min)** to **30** — supported options are 15, 30 and 60 minutes, and the team recommends 30.
4. Turn on **Enable Protection** so protection and exit levels plot after the range breaks.
5. Turn on **Enable Zones** to highlight the strongest reaction zones during a breakout.
6. Apply and wait for the opening range window to complete after the RTH open.

[SCREENSHOT: Deep-M IVB settings dialog showing RTH Opening Range (Min) set to 30, with Enable Protection and Enable Zones toggled on, and the Range color/width/style controls visible | deep-m-ivb-settings.png]

## How to read it

- **Opening range (High / Mid / Low):** the structure everything else keys off. Above the range the day leans long; below it, short; inside it, no breakout yet.
- **Projections (three levels, by probability):** **Protection** is the highest-probability daily target, **Average** (Ext. Avg) is the second target, and **Projection** (Ext. Std-1) is the third. A common approach is scaling out as each is reached.
- **Reaction zones:** areas where price may react and momentum may slow during a breakout — natural partial-exit or re-entry-on-hold locations. **Support** zones color the bullish side, **Resistance** zones the bearish side.
- **Summary Panel (top-left):** the daily bias — **Neutral**, **Positive** (bullish) or **Negative** (bearish) — for a one-glance directional lean.

A breakout that reaches the Protection level has already achieved its statistically most likely objective; expecting the further projections is a lower-probability bet, which is why they are sequenced.

## Settings reference

Grouped as in the settings dialog.

### Range

| Setting | What it does |
|---|---|
| **RTH Opening Range (Min)** | Minutes used to build the opening range: 15, 30 or 60. Team recommendation: 30. Defines the range High, Mid and Low. |
| **High / Mid / Low Colors** | Line colors for the three range levels. |
| **Line Width / Style** | Thickness and style of the range lines. |

### Breakout levels

| Setting | What it does |
|---|---|
| **Enable Protection** | Plots protection and exit levels after the range is broken — high-probability targets and structured zones. |
| **Projection Colors** | Colors for the three projections: **Protection** (highest probability), **Average** (Ext. Avg), **Projection** (Ext. Std-1). |

### Zones

| Setting | What it does |
|---|---|
| **Enable Zones** | Highlights the strongest reaction zones during a breakout, where price may decelerate. |
| **Support Color / Resistance Color** | Colors for bullish (support) and bearish (resistance) zones. |
| **Opacity** | Zone transparency. |
| **Bar Extension** | How many candles forward the zones extend (for example 10). |
| **Line Width** | Zone border thickness. |

### Summary Panel

| Setting | What it does |
|---|---|
| **Bias colors** | Colors for the **Neutral**, **Positive** and **Negative** daily-bias states shown in the top-left panel. |

## Tips and common mistakes

- **Pick one range window and stay with it.** The levels are statistical; switching between 15/30/60 intraday invalidates the comparison. The team recommends 30 minutes.
- **Nothing plots before the range completes.** The indicator needs the full opening-range window after the RTH open before levels appear.
- **Treat projections as sequenced targets, not guarantees.** Protection first, then Average, then Projection — probability drops with each extension.
- **Use the zones for management, not entries alone.** They mark where momentum may slow; combine with orderflow confirmation such as [[deep-stats]] or [[deep-trades]] at the zone.
- **Session context matters.** ORB logic assumes a clean RTH open — see [[understanding-market-structure-sessions]] for RTH vs ETH behavior.

## Related articles

- [[understanding-market-structure-sessions]]
- [[pivot-points]]
- [[important-levels]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]
