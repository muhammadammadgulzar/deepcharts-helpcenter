---
title: "Keltner Channel"
slug: "keltner-channel"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Reference for the Keltner Channel indicator in DeepCharts: EMA center line, ATR-based bands, the ATR Multiplier and Length settings with defaults, and how to trade the channel."
keywords: ["keltner channel", "keltner", "keltner bands", "atr channel", "atr bands", "chester keltner", "kelter channel", "keltner channels"]
---
The Keltner Channel is a classic technical analysis indicator developed by Chester Keltner in 1960, used to identify trends, volatility and reversal areas. It draws three lines over price: a center line based on an exponential moving average, with an upper and a lower band positioned at a distance proportional to the Average True Range (ATR).

Because the band distance comes from ATR rather than standard deviation, the channel expands and contracts with the market's true trading range — including gaps — which gives it a smoother, steadier envelope than [[bollinger-bands]].

## What it is

The Keltner Channel answers the question: how far is price from its volatility-adjusted average, measured in units of typical range? Its three lines are:

- **Keltner Avg** — the center line, an exponential moving average of the selected input.
- **Keltner Up** — the upper band, the center line plus ATR multiplied by the ATR Multiplier.
- **Keltner Down** — the lower band, the center line minus the same distance.

[SCREENSHOT: Candlestick chart with the Keltner Channel overlaid, center EMA line with upper and lower bands, price trending along the upper band with pullbacks holding the center line | keltner-channel-on-chart.png]

## When to use it

- Trend identification — price holding above the center line with the channel sloping up is a clean uptrend read (and vice versa).
- Locating pullback entries in a trend, where the center line often acts as dynamic support or resistance.
- Spotting reversal areas when price stretches beyond a band in a non-trending market.
- Volatility framing — the channel width scales with ATR, so it stays honest across quiet and fast markets.

## Quick start

1. Open a price chart — see [[first-chart]].
2. Click the green **Indicators** button (or press **Ctrl I**) to open the **Indicator List**.
3. Search for **Keltner Channel** and click **+** to add it. The three lines draw over the candles.
4. Click the gear icon to open the indicator configuration window.
5. The defaults — **Length** 21 and **ATR Multiplier Value** 2.00 — are a sound starting configuration; widen the multiplier if your instrument tags the bands too often for your style.

[SCREENSHOT: Keltner Channel configuration window open showing the ATR Multiplier Value field set to 2.00, the Input dropdown, and the Length field set to 21, with the Subgraphs color options below | keltner-channel-settings.png]

## How to read it

- **Slope and side.** The channel's slope gives the trend; which side of the center line price holds gives the bias. Both together are stronger than either alone.
- **Center-line pullbacks.** In a trending market, retracements to the Keltner Avg that hold are classic continuation entries.
- **Band rides vs. band pokes.** Sustained closes along a band indicate a strong trend (do not fade). An isolated poke beyond a band in a flat channel is more likely an exhaustion or reversal area.
- **Channel width.** A visibly narrowing channel means contracting true range — the same "quiet before the move" logic as a Bollinger squeeze, but measured in ATR terms.

## Settings reference

Settings are accessed through the indicator configuration window.

### Parameters

| Setting | What it does | Default |
|---|---|---|
| **ATR Multiplier Value** | Multiplies the ATR to determine how far the outer bands sit from the center line. Higher values contain more price action; lower values signal earlier but more often. | 2.00 |
| **Input** | The price data used for the channel average — Close, Open, High, Low, or volume. | — |
| **Length** | The number of periods used to calculate the channel average. | 21 |

### Subgraphs

| Setting | What it does |
|---|---|
| **Keltner Avg Color** | Color of the center line. |
| Secondary color | Optional secondary color for the line. |
| **Keltner Up Color** | Color of the upper band. |
| **Keltner Down Color** | Color of the lower band. |
| Display style / line style / line width | Visual styling of each line. |
| Secondary axis | Option to scale on a secondary axis. |

## Tips and common mistakes

- **Do not fade band touches in a trending channel.** The most reliable reversal reads come when the channel is flat; in a sloped channel, a band touch is usually trend strength.
- **Tune the multiplier, not the length, first.** The Length changes the character of the center line; the ATR Multiplier only changes how tolerant the bands are. Most fitting problems are multiplier problems.
- **Combine with Bollinger Bands for squeeze detection.** When Bollinger Bands contract inside the Keltner Channel, volatility is unusually compressed — a widely used expansion setup.
- **Remember the bands are ATR-based.** After a volatility spike, the channel stays wide for a while even if price goes quiet; that is ATR's smoothing, not a signal.

## Related articles

- [[bollinger-bands]]
- [[atr]]
- [[moving-average]]
- [[standard-deviation]]
- [[different-types-of-input]]
- [[indicator-layout]]
