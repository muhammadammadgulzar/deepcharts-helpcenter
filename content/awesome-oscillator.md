---
title: "Awesome Oscillator"
slug: "awesome-oscillator"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "How the Awesome Oscillator compares a fast and slow moving average to show momentum shifts as a histogram, with every AO setting in DeepCharts."
keywords: ["AO", "awesome oscillator indicator", "bill williams awesome oscillator", "ao histogram", "awsome oscillator"]
---

The Awesome Oscillator (AO), popularized by trader Bill Williams, evaluates market momentum by contrasting a short-term moving average with a longer-term one — 5 and 34 periods by default. The result is drawn as a histogram fluctuating around a zero line, making momentum shifts visible at a glance.

In DeepCharts, AO renders in its own chart area with slope-based auto-coloring and an optional average (signal) line.

## What it is

AO answers: which way is momentum leaning, and is it accelerating or fading? When the short average pulls above the long one, the histogram is above zero — bullish momentum. When it drops below, the histogram is below zero — bearish momentum. Bar-to-bar changes show acceleration: bars growing away from zero mean the move is gaining speed, bars shrinking toward zero mean it is losing speed. Traders use it to identify momentum shifts, trend strength, potential reversals, and bullish or bearish acceleration.

## When to use it

- You want momentum as a histogram you can read peripherally while focused on price.
- You need an objective momentum-regime marker — which side of zero the histogram is on.
- You want acceleration information: whether the current push is stronger or weaker than the last one.
- You follow Bill Williams-style setups (zero-line cross, twin peaks, saucer) that are defined on this specific indicator.

## Quick start

1. Open a chart and press **Ctrl I** — or click the bar-chart icon in the chart toolbar, then **Indicators** — to open the **Indicator List**.
2. Search for "Awesome" and click **+** to add the oscillator. It renders in its own chart area below the price bars (see [[indicator-layout]]).
3. Click the gear icon on the indicator's row to open its settings.
4. Keep the defaults to start: **Average Type** Simple, **AO Length 1** 5, **AO Length 2** 34. Leave the slope-based auto-coloring on so rising and falling bars are colored differently.

[SCREENSHOT: A chart with the Awesome Oscillator histogram in its own area below price, bars colored by slope, crossing from below to above the zero line during a rally | awesome-oscillator-on-chart.png]

## How to read it

- **Zero line.** Histogram above zero: the fast average is above the slow one and momentum is on the bullish side. Below zero: bearish. A zero-line cross marks a momentum regime change.
- **Bar color and slope.** A rising bar (colored as such by the slope auto-coloring) means momentum is building in that direction; a falling bar means it is fading — even while the histogram stays on the same side of zero.
- **Twin peaks.** Two histogram peaks on the same side of zero, the second shallower than the first, warn that the push is weakening — a classic AO divergence pattern.
- **Saucer.** A brief dip of falling bars followed by a resumption of rising bars, all on one side of zero, is a continuation cue in the direction of the prevailing momentum.

[SCREENSHOT: Close-up of the AO chart area showing a twin-peaks pattern — two peaks above zero with the second one lower, followed by a cross under the zero line | awesome-oscillator-twin-peaks.png]

## Settings reference

Open the dialog from the gear icon on the indicator's row in the **Indicators** panel.

### Average parameters

| Setting | What it does |
|---|---|
| **Average Type** | The moving-average method used in the calculation. Default: Simple. |
| **AO Length 1** | The short period. Default: 5. |
| **AO Length 2** | The long period. Default: 34. |
| **Average Length** | Length of the smoothing for the optional average (signal) line when it is activated. |

### Levels

| Setting | What it does |
|---|---|
| **Middle Level** | Position of the middle reference line. Default: 50. |
| **Lower Level** | Position of the lower reference line. Default: 20. |
| **High Level** | Position of the upper reference line. Default: 80. |

Level line colors and width are customizable. AO values are measured in price units and vary by instrument, so adjust these reference lines to the scale of the symbol you trade.

### Subgraphs

| Setting | What it does |
|---|---|
| **Awesome Oscillator** | The main series, drawn in histogram format. Options include the color, a secondary color, auto-coloring based on slope direction, and line styling. |
| **Average** | The optional signal line, drawn as a line with its own appearance options. |

### Other display options

| Setting | What it does |
|---|---|
| **Name and value labels** | Show or hide the indicator's name and current value in the chart area. |
| **Background settings** | Background styling for the indicator's chart area. |
| **Auto-center** | Includes the indicator in automatic centering of the chart area. |

[SCREENSHOT: The Awesome Oscillator settings dialog showing Average Type Simple, AO Length 1 = 5, AO Length 2 = 34, and the subgraph section with the histogram style and slope auto-color option | awesome-oscillator-settings-dialog.png]

## Tips and common mistakes

- **Read slope, not size.** AO values are in price units and differ wildly between instruments. The bar-to-bar direction (which the slope coloring shows) carries the signal; the absolute height does not transfer across symbols.
- **The 5/34 pairing is the definition.** The classic AO patterns — twin peaks, saucer, zero-line cross — were defined on the 5/34 simple-average settings. Change the lengths and you change what every one of those patterns means.
- **Zero-line crosses whipsaw in chop.** In a sideways market the histogram hovers around zero and flips repeatedly. Use crosses as regime markers in moving markets, not as standalone entries in ranges.
- **Enable the average line for cleaner triggers.** If raw histogram flips are too fast for your style, the optional average line gives a smoother reference to cross against.

## Related articles

- [[macd]]
- [[momentum]]
- [[rsi|Relative Strength Index (RSI)]]
- [[stochastic-oscillator]]
- [[different-types-of-input]]
- [[indicator-layout]]
