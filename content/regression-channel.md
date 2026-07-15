---
title: "Regression Channel"
slug: "regression-channel"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Reference for the Regression Channel indicator in DeepCharts: center line and deviation bands, bar and Zig Zag modes, and per-line plot settings."
keywords: ["linear regression channel", "regression bands", "standard deviation channel", "trend channel indicator", "zig zag channel"]
---
The Regression Channel is a tool used to identify trends and areas of support and resistance. It draws a channel derived from linear regression: a central trend line fitted through price, flanked by upper and lower bands offset by a chosen number of standard deviations.

Where the [[linear-regression]] indicator plots a single rolling line, the Regression Channel frames the whole move — showing the trend's direction, its statistical center, and the zone where most price action has stayed.

## What it is

The Regression Channel answers the question: what is the current trend, and how far from it is price allowed to wander before that means something? The center line is the best-fit regression through the lookback window; the bands sit a configurable number of standard deviations above and below it. Price near the center line is at the trend's fair value; price at a band is statistically stretched, favoring either a reversion toward the center or — if it breaks and holds — a change in trend.

[SCREENSHOT: A candlestick chart with the Regression Channel applied — upward-sloping center line with upper and lower deviation bands containing the trend, price tagging the lower band and reverting to the center | regression-channel-on-chart.png]

## When to use it

- Framing a trend objectively: the channel's slope states direction, its width states volatility.
- Trading pullbacks within a trend — entries near the channel's lower band in an up-slope, exits or shorts near the upper band in a down-slope.
- Detecting trend breaks: price closing and holding outside the channel suggests the regression that defined the move no longer fits.
- Pairing with swing structure via the Zig Zag mode so the channel anchors to detected swings rather than a fixed bar count.

## Quick start

1. Open a chart — see [[first-chart]].
2. Click the bar-chart icon in the chart's top-left icon row to open the **Indicators** panel, then click **Indicators** to open the full **Indicator List**.
3. Search for **Regression Channel** and click **+** to add it.
4. Click the gear icon to open its settings.
5. Starter configuration: keep **Bars** at the default 100 and **Value Dev. Std.** at the default 1.00. Widen the deviation (for example toward 2.00) if you want the bands to contain more of the price action and flag only larger stretches.

[SCREENSHOT: Regression Channel settings dialog showing the General section with Mode, Value Dev. Std. = 1.00 and Bars = 100, plus the Zig Zag section and the MID/UP/DN plot sections below | regression-channel-settings.png]

## How to read it

- **Center line slope** — the trend. Up-slope, favor longs; down-slope, favor shorts; near-flat, treat the channel as a range.
- **Position within the channel** — price near the center line is at the fitted trend's fair value; price at a band is at a statistical extreme for the window.
- **Band touches** — in a healthy trend, touches of the band on the trend side (lower band in an uptrend) are pullback opportunities; repeated failures to reach the far band show the trend weakening.
- **Channel breaks** — a decisive close outside the channel that holds means the fitted trend is failing; expect either acceleration in the break direction or a new regime the channel will re-fit to.
- **Trend coloring** — the MID, UP and DN lines each have positive and negative colors, so the channel's own coloring tells you which direction the fit currently has.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Mode** | Selects how the channel operates. [CONFIRM: the exact list of Mode options and what each does — the live article names the setting without enumerating its values] |
| **Value Dev. Std.** | Number of standard deviations for the upper and lower bands. Default: 1.00. Higher values place the bands further from the center line. |
| **Bars** | Number of bars used for the regression calculation. Default: 100. |

### Zig Zag

| Setting | What it does |
|---|---|
| **Zig Zag Mode** | Enables swing-pattern detection so the channel works from Zig Zag swings. |
| **Zig Zag Abs.Rev.** | Tick reversal threshold for swing detection. Default: 0.50. |
| **Zig Zag Tick Rev./Highest-Lowest** | Reversal value for the swing calculation. Default: 22. |

### MID — center line plot

| Setting | What it does |
|---|---|
| **Line Width** | Center line thickness. Default: 2. |
| **Line Style** | Solid, Dashed, Dotted and other formats. |
| **Positive Color** | Color when the fitted trend is up. |
| **Negative Color** | Color when the fitted trend is down. |

### UP — upper line plot

| Setting | What it does |
|---|---|
| **Line Width** | Upper band thickness. Default: 2. |
| **Line Style** | Solid, Dashed, Dotted and other formats. |
| **Positive / Negative Color** | Trend-based coloring for the upper band. |

### DN — lower line plot

| Setting | What it does |
|---|---|
| **Line Width** | Lower band thickness. Default: 2. |
| **Line Style** | Available line format options. |
| **Positive / Negative Color** | Trend-based coloring for the lower band. |

## Tips and common mistakes

- **Match Bars to the move you are framing.** 100 bars fitted over two separate trends produces a meaningless average channel; shorten the window, or use **Zig Zag Mode** to anchor the channel to detected swings.
- **One standard deviation contains less than you may expect.** At the default 1.00, price will trade outside the bands regularly in normal conditions — that alone is not a signal. Raise **Value Dev. Std.** if you want band touches to be rarer, more meaningful events.
- **Do not fade every band touch.** In a strong trend, price can ride the far band for extended stretches; check the center line's slope before treating a band as a reversal level.
- Compare with [[zig-zag]] to understand the swing detection that **Zig Zag Mode** builds on, and with [[standard-deviation]] for the dispersion measure behind the bands.

## Related articles

- [[linear-regression]]
- [[zig-zag]]
- [[standard-deviation]]
- [[bollinger-bands]]
- [[different-types-of-input]]
- [[indicator-layout]]
