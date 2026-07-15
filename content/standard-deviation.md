---
title: "Standard Deviation"
slug: "standard-deviation"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Reference for the Standard Deviation indicator in DeepCharts: how it measures price dispersion from the average, the Periods setting (default 14), and styling options."
keywords: ["standard deviation", "std dev", "stdev indicator", "price dispersion", "volatility measure", "standard deviaton", "sigma indicator"]
---
The Standard Deviation indicator measures the volatility of an asset's price relative to its average over a given period. It shows how far price values diverge from the average: an elevated standard deviation reflects greater volatility (prices moving away from the average), while a diminished value shows lower volatility (prices staying closer to the average).

It is the statistical engine behind several other tools — [[bollinger-bands]] places its bands a multiple of this value from the average, and [[vwap-envelopes]] can use it to build deviation bands around VWAP — so reading it directly gives you the raw dispersion number those indicators repackage.

## What it is

Standard Deviation answers the question: how scattered has price been around its own average lately? Statistically, it is the square root of the average squared distance between each price and the mean of the lookback window. The result plots as a single line in a panel below the price chart — always positive, rising as price disperses and falling as it clusters.

[SCREENSHOT: Price chart with the Standard Deviation indicator in a lower panel, the line spiking during a fast breakout and decaying back toward its base during sideways consolidation | standard-deviation-on-chart.png]

## When to use it

- Measuring volatility directly, without the directional overlay of a band or channel indicator.
- Detecting volatility contractions — persistently falling standard deviation often precedes an expansion move.
- Comparing the intensity of successive moves on the same instrument and timeframe.
- Sanity-checking band indicators — when Bollinger Bands look unusually wide or tight, this line shows the raw input causing it.

## Quick start

1. Open a price chart — see [[first-chart]].
2. Click the green **Indicators** button (or press **Ctrl I**) to open the **Indicator List**.
3. Search for **Standard Deviation** and click **+** to add it. It appears in its own panel below the price.
4. Click the indicator settings icon to open its configuration window.
5. The default of 14 periods is a balanced starting point — long enough to be stable, short enough to react within a session.

[SCREENSHOT: Standard Deviation configuration window open showing the Periods field set to 14 and the Subgraphs section with Std. Dev Color, Subgraph Style, Line Style and Line Width options | standard-deviation-settings.png]

## How to read it

- **Level is relative.** Standard deviation is expressed in the instrument's price units, so judge it against its own recent history rather than a fixed threshold.
- **Rising line** — price is dispersing from its mean: a trend leg, a breakout, or a volatile shakeout is in progress.
- **Falling line** — price is compressing around its mean. Extended compression is the classic precondition for a range expansion.
- **No direction.** Like [[atr]], standard deviation is direction-blind; a crash and a melt-up look identical on this line. Pair it with a trend or structure read for direction.
- **Spikes decay slowly.** A single huge bar inflates the value for the entire lookback window; expect a plateau, then a step down when that bar leaves the window.

## Settings reference

Clicking the indicator settings icon opens the configuration window.

### Parameters

| Setting | What it does | Default |
|---|---|---|
| **Periods** | The number of periods used for the standard deviation calculation. Fewer periods make the line jumpy but current; more periods smooth it into a regime gauge. | 14 |

### Subgraphs

| Setting | What it does | Default |
|---|---|---|
| **Std. Dev Color** | Sets the standard deviation line color. | — |
| **Secondary Color** | Optional secondary color for the line. | — |
| **Subgraph Style** | Chooses the display style of the series. | — |
| **Line Style** | Defines the line style. | — |
| **Line Width** | Defines the width of the indicator line. | 2 |
| **Use Secondary Axis** | Displays the indicator on a secondary axis. | — |

## Tips and common mistakes

- **Do not treat a high reading as "overbought."** Standard deviation measures dispersion, not extension in a direction — a high value can accompany the start, middle or end of a move.
- **Match the lookback to your holding period.** A 14-period value on a 1-minute chart describes the last quarter hour; the same setting on a daily chart describes three weeks. Same number, very different meaning.
- **Watch for lookback artifacts.** Sudden drops in the line often mean an old outlier bar rolled out of the window, not that the market just calmed down.
- **Use it with ATR, not instead of it.** [[atr]] measures bar range including gaps; standard deviation measures dispersion of the input price around its mean. Quiet markets with large gaps can show low standard deviation but high ATR — seeing both prevents blind spots.

## Related articles

- [[bollinger-bands]]
- [[atr]]
- [[vwap-envelopes]]
- [[keltner-channel]]
- [[different-types-of-input]]
- [[indicator-layout]]
