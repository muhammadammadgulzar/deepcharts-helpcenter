---
title: "Swing Point"
slug: "swing-point"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Automatically mark swing highs and swing lows with horizontal lines so support, resistance and reversal levels are always on your chart."
keywords: ["swing point", "swing points", "swing high", "swing low", "support resistance indicator", "pivot high low", "market structure", "swingpoint"]
---

Every trader marks swing highs and swing lows — the local peaks and troughs where price turned. The Swing Point indicator does it for you: it identifies significant swings using a customizable lookback and draws horizontal lines at those price levels, so your support and resistance map updates itself as the market prints new structure.

Because the definition of a swing is fully parameterized, you control how selective the indicator is — from every minor wiggle to only the major turning points.

## What it is

The Swing Point indicator answers the question "where did price most recently turn, and at what levels?" A **swing high** is a bar whose high is higher than the highs of a set number of bars on both sides; a **swing low** is the mirror image with lows. When a bar qualifies, the indicator draws a horizontal line at that level, with labels, so the level remains visible as price trades away from it.

Swing highs mark potential resistance and reversal zones; swing lows mark potential support. Together they outline the market structure most price-action methods are built on.

## When to use it

- To keep an always-current map of support and resistance levels without drawing lines manually.
- To read market structure: a sequence of higher swing highs and higher swing lows defines an uptrend, and a break of that sequence is an early trend-change warning.
- To find stop placement and target references — swings are where resting orders naturally cluster.
- To feed other analysis: divergence and confluence work is usually anchored at swing points (see [[divergence-detector]] and [[confluence-identifier]]).

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Swing Point" and click **+** to add it.
4. Click the gear icon next to the indicator to open its settings. Start with the defaults (**Left Bars** 2, **Right Bars** 2) and increase both if the chart shows more swing lines than you can use.
5. Set distinct **High Color** and **Low Color** values so resistance and support levels are distinguishable at a glance.

[SCREENSHOT: A price chart with the Swing Point indicator active — dashed horizontal lines extending from several swing highs and swing lows, each with a small text label near the line | swing-point-on-chart.png]

## How to read it

- **Swing high lines** are levels where sellers previously overwhelmed buyers — watch for rejection (resistance holding) or acceptance (breakout) when price returns to them.
- **Swing low lines** are the support-side mirror.
- **Selectivity is your dial.** With small **Left Bars** / **Right Bars** values you see many minor swings — useful for scalping structure. Larger values keep only the more significant turns that define the higher-timeframe picture.
- **Confirmation lags by design.** A swing cannot be confirmed until the required number of right-side bars has printed, so a new swing line appears only after that many bars have closed beyond the extreme. Higher **Right Bars** values mean the indicator waits longer for confirmation — fewer false swings, later signals.

## Settings reference

### General Parameters

| Setting | What it does |
|---|---|
| **Left Bars** | Number of bars to the left of the candidate bar that must have lower highs (for a swing high) or higher lows (for a swing low). Increasing this value makes the indicator more selective, identifying only more significant swings. Default: 2. |
| **Right Bars** | Number of bars to the right that must show lower highs or higher lows before the swing is validated. Higher values mean the indicator waits longer for confirmation. Default: 2. |
| **Filter Swing** | When activated, applies additional filtering that removes minor swings which do not meet quality thresholds, reducing noise. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Line Width** | Thickness of the horizontal swing lines. Default: 2. |
| **Line Style** | Style of the swing lines. Default: Dash — dashed lines keep swing levels visually distinct from other chart elements. |
| **High Color** | Color of swing high lines (resistance/reversal zones). |
| **Low Color** | Color of swing low lines (support/reversal zones). |
| **Text Tick Offset** | Distance, in ticks, between a swing line and its text label. Default: 1. |
| **Text Size** | Size of the swing labels. Default: 11.00. |
| **High Text Color** | Text color for swing high labels. |
| **Low Text Color** | Text color for swing low labels. |

[SCREENSHOT: The Swing Point settings dialog showing General Parameters (Left Bars, Right Bars, Filter Swing) and the Plot Settings group with Line Width, Line Style, High/Low colors and text options | swing-point-settings.png]

## Tips and common mistakes

- **Don't treat a fresh swing as tradeable the bar it forms.** The line appears **Right Bars** bars after the actual extreme; by then price has already moved away. Use swings as levels for the next visit, not as entry signals at confirmation.
- **Match selectivity to timeframe.** Left/Right of 2 on a 1-minute chart produces a dense web of lines; either raise the values or enable **Filter Swing** before concluding the indicator is "too noisy".
- **Symmetric values are a starting point, not a rule.** A larger **Right Bars** than **Left Bars** demands more proof that the turn held, which suits swing traders; scalpers often prefer the opposite trade-off.
- **Read swings as structure, not standalone signals.** A broken swing low in an uptrend matters because of what it says about the higher-low sequence — combine the lines with a trend read rather than fading every level.

## Related articles

- [[zig-zag]]
- [[pivot-points]]
- [[important-levels]]
- [[divergence-detector]]
- [[different-types-of-input]]
- [[indicator-layout]]
