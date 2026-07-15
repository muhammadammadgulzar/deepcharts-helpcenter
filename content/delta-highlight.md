---
title: "Delta % Highlight"
slug: "delta-highlight"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Marks candles whose delta percentage meets your threshold so extreme one-sided aggression stands out on the chart instantly."
keywords: ["delta % highlight", "delta percent highlight", "delta percentage", "highlight candles delta", "delta marker", "imbalanced candles", "extreme delta"]
---

Delta % Highlight marks the candles on your chart whose delta percentage — buy versus sell pressure relative to the candle's volume — reaches a threshold you define. Instead of scanning every bar's delta manually, you let the chart flag the candles with significant one-sided aggression.

It is a screening tool: it does not calculate anything new, it makes the extreme orderflow candles impossible to miss.

## What it is

The indicator highlights candles where the percentage of delta meets your criteria. A candle where nearly all volume was aggressive buying gets marked in the **Ask Color**; a candle dominated by aggressive selling gets marked in the **Bid Color**. Everything in between stays unmarked, keeping your chart clean.

[SCREENSHOT: Chart window with Delta % Highlight applied — a series of ordinary candles with two or three candles visibly tinted in the Ask color and one in the Bid color, showing how extreme-delta candles stand out | delta-highlight-chart-overview.png]

## When to use it

- You want extreme imbalance candles flagged automatically while you focus on structure.
- You review sessions after the close and need the one-sided candles found fast.
- You trade initiative moves: a highlighted candle breaking a key level shows genuine aggressive participation.
- You hunt exhaustion: an extreme-delta candle that fails to follow through is a classic sign the aggressor is trapped.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Delta % Highlight** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. Set **Min Value** to a meaningful threshold — this is the minimum delta percentage a candle must reach to be marked. Start high enough that only a few candles per session qualify, then tune down.
5. Leave **Max Value** at **0** to disable the maximum filter, so every candle above the minimum is marked.
6. Pick a **Bid Color** and **Ask Color** that contrast with your regular candles, and set **Opacity** so the highlight is visible without hiding the candle underneath.

[SCREENSHOT: Delta % Highlight settings dialog showing Min Value and Max Value fields, the Bid Color and Ask Color pickers, and the Opacity control | delta-highlight-settings-dialog.png]

## How to read it

- **Ask-colored candle (positive delta %):** aggressive buyers dominated the candle's volume. Inside a trend, that is confirmation; into resistance after an extended run, it can be the buy climax.
- **Bid-colored candle (negative delta %):** aggressive sellers dominated — the mirror image.
- **What happens next matters most.** A highlighted candle followed by continuation validates the aggression. A highlighted candle immediately rejected — price closes back through it — suggests the aggressive side was absorbed, one of the stronger reversal tells in orderflow (see [[understanding-icebergs-absorption]]).
- **Frequency is a regime clue.** Sessions that print many highlights are one-sided and trending; sessions with none are balanced and rotational.

## Settings reference

| Setting | What it does |
|---|---|
| **Min Value** | Minimum delta percentage threshold — only candles meeting or exceeding this level are marked. |
| **Max Value** | Maximum delta percentage filter. Set to **0** to disable maximum filtering, so all candles above the minimum are marked. |
| **Bid Color** | Marker color for negative delta percentages — selling pressure dominance. |
| **Ask Color** | Marker color for positive delta percentages — buying pressure dominance. |
| **Opacity** | Marker transparency: lower values make the highlight more transparent, higher values make it more opaque and visible. |

## Tips and common mistakes

- **Calibrate per instrument.** A delta percentage that is rare on one contract may be routine on a thinner one. Tune **Min Value** until highlights are genuinely exceptional for the market you trade.
- **Percentage hides size.** A tiny candle with three contracts can print an extreme delta percentage. Cross-check the actual volume — pair the highlight with [[volume]] or [[deep-stats]] before treating it as significant.
- **Do not trade the color, trade the reaction.** The highlight identifies the candidate candle; the entry logic comes from what price does at and after it.
- **Use both bounds for band-pass screening.** Setting a **Max Value** above the minimum marks only the mid-range imbalances and skips the blow-off extremes, which some mean-reversion styles prefer.

## Related articles

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-bar]]
- [[deep-stats]]
- [[ratio-highlight]]
