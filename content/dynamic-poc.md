---
title: "Dynamic POC"
slug: "dynamic-poc"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Reference for the Dynamic POC indicator: a rolling point of control over the last N minutes or bars, with configurable envelope bands and every setting explained."
keywords: ["dynamic POC", "rolling POC", "point of control", "moving POC", "POC envelope", "volume point of control", "dinamic poc", "dynamic point of control"]
---

The Dynamic POC indicator tracks the price level where the most volume has developed over a rolling window — the last N minutes or the last N bars — and plots it as a moving line on your chart. Around that line it can draw up to three configurable envelope bands, giving you a dynamic view of where volume is concentrated and how far price has stretched away from it.

Where a session profile gives you one static POC per period, Dynamic POC answers a different question: where is the market's volume anchor right now? For the theory behind the point of control, see [[understanding-volume-profile]].

## What it is

At every moment the indicator builds a volume distribution over your chosen reference period and marks its point of control — the single price level with the maximum traded volume in that window. As new data arrives and old data rolls out of the window, the POC updates, producing a line that follows the market's shifting center of volume. The envelope section adds percentage-based bands above and below the POC that act as volatility deviations.

For a hands-on feel of how a volume distribution produces its point of control, hover the rows in the interactive profile below — the POC is the magenta row:

[WIDGET: volume-profile-lab]

## When to use it

- To track the market's current volume anchor intraday without managing profile periods manually.
- To judge whether price is trading at, above or below the level the market has traded most.
- To frame stretch-and-revert behavior with the envelope bands around the rolling POC.
- To compare short windows (recent auction) against long windows (established acceptance) by running two instances.

## Quick start

1. Add **Dynamic POC** to your chart.
2. Choose a **Period Mode**: **Minutes** for a time-based window (useful for intraday, short-term volume patterns) or **Bars** for a candle-count window.
3. Set the **Period Value** — for example, 120 with **Minutes** shows the POC of the preceding 120-minute window.
4. Keep the three envelope percentages at their configured values to start, then widen or narrow them once you have seen how far your instrument typically stretches from its POC.

[SCREENSHOT: An intraday chart with the Dynamic POC line tracking the rolling point of control, with three envelope bands plotted above and below it | dynamic-poc-envelope-chart.png]

## How to read it

The POC line is the rolling consensus: the price where the most business was done in your window. Price holding near it means the market is accepting value there; price pulling away means the market is searching for value elsewhere. When price trades far above the rolling POC, recent buying has not yet been ratified by volume at those higher prices — a stretch that either gets built on (the POC migrates up) or reverts.

The envelopes grade that stretch. The first band marks a mild deviation, the second a significant one, the third an extreme. Watching whether the POC line follows price (trend behavior) or holds still while price snaps back (rotation behavior) is the core read.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Period Mode** | Reference period type: **Minutes** shows the POC of the last n minutes (suited to intraday short-term volume analysis); **Bars** shows the POC of the last n bars (candle-count based). |
| **Period Value** | The numeric window for the selected mode — for example, 120 in **Minutes** mode displays the POC of the preceding 120-minute window. |

### Envelope

Percentage-based bands around the POC showing volatility deviations:

| Setting | What it does |
|---|---|
| **% First** | Deviation of the first (innermost) envelope band. The documented typical default is 0.10. |
| **% Second** | Deviation of the second envelope band. The documented typical default is 0.25. |
| **% Third** | Deviation of the third (outermost) envelope band. The documented typical default is 0.50. |

The source documentation gives this example: with the POC at 5900 and **% First** at 0.10, the first bands appear at approximately 5890 and 5910. [CONFIRM: exact unit/scaling of the envelope percentage values — the 5900 → ±10 points example does not correspond to a plain 0.10% calculation.]

### Subgraphs

- **POC line color**, plus a secondary color option.
- **Line style**, **width** and thickness adjustments.
- **Custom short name** for the indicator's label.

[SCREENSHOT: The Dynamic POC settings dialog showing Period Mode, Period Value and the three envelope percentage fields | dynamic-poc-settings-dialog.png]

## Tips and common mistakes

- **Match the window to your trade horizon.** A 120-minute POC and a 20-bar POC answer different questions; scalping decisions off a slow window (or vice versa) mixes timeframes.
- **Minutes and Bars are not interchangeable.** In **Minutes** mode the number of bars in the window varies with your chart's timeframe; in **Bars** mode the time span varies. Pick the mode that matches how you think.
- **Do not treat envelope touches as automatic fades.** On trend days the POC migrates and price can ride the outer band; confirm with the POC line's own direction.
- **Verify the envelope scaling on your instrument.** Plot the bands and check the actual distances before sizing risk off them.

## Related articles

- [[understanding-volume-profile]]
- [[bar-poc]]
- [[deep-profile]]
- [[market-profile-tpo]]
- [[different-types-of-input]]
- [[indicator-layout]]
