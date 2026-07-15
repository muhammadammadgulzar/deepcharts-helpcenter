---
title: "Imbalance Rejector"
slug: "imbalance-rejector"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Reference for the Imbalance Rejector indicator: how it marks potential reversals from imbalances at swing highs and lows, and what each setting controls."
keywords: ["imbalance rejector", "imbalance rejection", "reversal marker", "diagonal imbalance", "swing rejection", "imbalance rejecter", "orderflow reversal indicator"]
---

The Imbalance Rejector identifies volumetric patterns based on imbalances and returns markers directly on the chart to highlight potential reversal situations. Instead of drawing zones like [[imbalance-tracker]], it looks for a specific event: an aggressive imbalance printing at a swing high or swing low — a sign that the push into the extreme may be getting rejected.

Because it works with diagonal Bid/Ask comparisons at bar extremes, this indicator assumes you are comfortable with footprint logic. If terms like aggressive buyer, Bid tick and Ask tick are new, start with [[orderflow-101]] and [[reading-a-footprint]].

## What it is

At the high of a bearish candle or the low of a bullish candle, the indicator compares volume diagonally between the Ask and Bid columns of neighboring price ticks. When the imbalance percentage at that extreme exceeds your minimum — and the extreme qualifies as a swing point over your lookback period — a marker is plotted a configurable number of ticks away from the high or low.

## When to use it

- To spot potential reversal points where an extreme printed a strong imbalance.
- To confirm a swing high or low with order-flow evidence before fading a move.
- To automate a pattern you would otherwise hunt for manually on a footprint chart.
- To generate reference points for further analysis with your other order-flow tools.

## Quick start

1. Add **Imbalance Rejector** to your chart.
2. Review **% Min. Imbalance** — this is the main sensitivity control; higher values demand a stronger imbalance before a marker prints.
3. Set the **Lookback Period** to define how many bars to the left must confirm a high or low as a swing point.
4. In the subgraph options, choose different colors and marker shapes for bullish and bearish signals so you can read them at a glance.

[SCREENSHOT: A chart with the Imbalance Rejector active, showing a bearish marker plotted a few ticks above a swing high and a bullish marker below a swing low, in contrasting colors | imbalance-rejector-markers-chart.png]

## How to read it

A bearish marker above a swing high means the indicator found the required imbalance in the highs of a bearish candle: the push into the high was met with an imbalance consistent with rejection, so the level is a candidate for a move lower. A bullish marker below a swing low is the mirror case in the lows of a bullish candle.

Markers are context, not commands. The lookback filter already demands that the extreme is a genuine swing point, but the signal quality still depends on where it appears — a rejection marker into a higher-timeframe level carries more weight than one in the middle of a range.

## Settings reference

### Settings Imbalance

| Setting | What it does |
|---|---|
| **% Min. Imbalance** | The minimum percentage of imbalance that must exist in the highs for bearish candles, or in the lows for bullish candles, before a marker is considered. |
| **Minimum Diagonal Comparison** | The minimum diagonal comparison in which to look for an imbalance. At 1, the most recent Ask tick is compared with the preceding Bid tick for bearish bars (and the most recent Bid tick with the preceding Ask tick for bullish bars); higher values expand the comparison across additional candle ticks. |
| **Lookback Period** | The number of bars required to the left for a candle's high or low to qualify as a swing point. Shorter periods print more markers but with lower reliability; longer periods print fewer, more robust markers. |
| **Tick Offset** | How many ticks away from the high or low the marker is plotted — purely a display offset to keep markers clear of the bar. |

### Subgraphs

- **Colors** — separate colors for bullish and bearish signals.
- **Marker shape** — square, circle, diamond, triangle or cross.
- **Thickness** — size/weight of the plotted markers.

[SCREENSHOT: The Imbalance Rejector settings dialog showing the Settings Imbalance group with % Min. Imbalance, Minimum Diagonal Comparison, Lookback Period and Tick Offset | imbalance-rejector-settings-dialog.png]

## Tips and common mistakes

- **Do not set the lookback too short.** The documentation's own tradeoff applies: short lookbacks flood the chart with fragile signals; longer lookbacks earn their scarcity with robustness.
- **Tune % Min. Imbalance per instrument.** What counts as an extreme imbalance on one contract can be routine noise on another.
- **Understand what Minimum Diagonal Comparison changes.** Raising it widens the search across more ticks of the candle, which changes the character of the signal — re-test after adjusting it.
- **Use Tick Offset for readability only.** It moves the marker, not the detected level; the rejection is still at the actual high or low.
- **Combine, do not isolate.** Pairing markers with the zones from [[imbalance-tracker]] or a swing framework such as [[swing-point]] gives each signal a location context.

## Related articles

- [[orderflow-101]]
- [[reading-a-footprint]]
- [[imbalance-tracker]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]
