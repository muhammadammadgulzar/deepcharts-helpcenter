---
title: "Delta Cumulative Histogram"
slug: "delta-cumulative-histogram"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Shows cumulative delta as bars or a line at the base of the chart — a compact running total of buy versus sell aggression."
keywords: ["delta cumulative histogram", "cumulative delta histogram", "CVD histogram", "cumulative delta line", "delta bars cumulative", "cumulative volume delta"]
---

Delta Cumulative Histogram displays the cumulative summation of each candle's delta — the difference between aggressive market buys and market sells — as bars or a line positioned at the base of the chart. It answers one question continuously: which side has been more aggressive so far, and is that lead growing or shrinking?

It is the compact sibling of [[delta-cumulative-candlestick]]: the same running total, rendered as a simple histogram or line instead of full candlesticks.

## What it is

Each bar's delta is added to a running total. Positive cumulative delta (drawn green) means buyer aggression leads; negative cumulative delta (drawn red) means seller aggression leads. Because it lives in a slim panel at the chart's base, it works well as an always-on companion to any chart layout without taking the space of a full CVD candlestick panel.

Try it below — hover along the histogram to follow how each bar's delta feeds the running total, and watch for the moment the total flattens while price keeps pushing.

[WIDGET: delta-lab]

## When to use it

- You want a persistent, low-footprint read of net aggression under every chart.
- You confirm trends: rising cumulative delta together with rising price shows aggressive buyers driving the move.
- You spot divergences: price makes a new extreme, the histogram does not follow.
- You compare sessions: with the session reset enabled, each day starts at zero and the histogram becomes an intraday scoreboard.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Delta Cumulative Histogram** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. Set **Input Data** to **Volumes** so delta is calculated from the quantity of contracts or shares traded (see [[different-types-of-input]]).
5. Enable **Restore at Start Session** so the total resets at each session's beginning rather than accumulating indefinitely.
6. Under **Subgraphs**, pick **Bars** or **Line**, set the colors, and apply.

[SCREENSHOT: Delta Cumulative Histogram settings dialog showing Input Data options (Volumes, Trades), Filter Min and Filter Max fields, the Restore at Start Session toggle, and the Subgraphs style options Bars / Line | delta-cumulative-histogram-settings.png]

## How to read it

- **Green (positive) histogram:** cumulative buyer aggression leads the period. **Red (negative):** sellers lead.
- **Slope over sign.** A positive but flattening histogram means the buyers' lead has stopped growing — momentum in aggression is fading even while the total is still green.
- **Divergence with price** is the classic signal: price grinding to new highs while the histogram flatlines means the move is not being driven by fresh aggressive buying. Treat it as a warning to tighten risk, not an automatic fade.
- **Volumes versus Trades input changes the story.** Trades show how often the instrument trades, Volumes show how much. More trades without more volume points to many small orders; more volume without more trades points to fewer participants executing large orders. Reading both against each other reveals who is active — crowd or size.

## Settings reference

Grouped as in the settings dialog.

### Parameters

| Setting | What it does |
|---|---|
| **Input Data** | Database for the delta calculation: **Volumes** (quantity of contracts or shares traded) or **Trades** (number of executed trades, regardless of size). See [[different-types-of-input]]. |
| **Filter Min** | Minimum threshold — values below it are ignored. |
| **Filter Max** | Maximum threshold. Set to **0** to disable this filter. |
| **Restore at Start Session** | When enabled, the indicator resets at the beginning of each trading session rather than accumulating indefinitely. |

### Subgraphs

| Setting | What it does |
|---|---|
| **Style** | Rendering as **Bars** or **Line**. |
| **Line Style** | **Solid** or **Hatch**. |
| **Line Width** | Thickness of the plot. |
| **Colors** | Plot colors — green for positive cumulative delta (buyer aggression), red for negative (seller aggression). |
| **Show Name / Value** | Toggles display of the indicator name and its current value. |
| **Custom Name** | Renames the indicator label on the chart. |

## Tips and common mistakes

- **Pick one reset convention and keep it.** An accumulating histogram and a session-reset histogram at the same value mean completely different things.
- **The absolute number is feed- and filter-dependent.** Compare the histogram's shape and slope against price, not its raw value against other platforms or other traders' charts.
- **Filters change what "delta" means.** With a high **Filter Min** you are tracking cumulative large-trade delta — powerful, but document it before comparing to an unfiltered chart.
- **Use the candlestick variant when you need intrabar detail.** The histogram shows only closing totals per bar; [[delta-cumulative-candlestick]] shows the path delta took inside each bar.

## Related articles

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-cumulative-candlestick]]
- [[delta-bar]]
- [[volume]]
