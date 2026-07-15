---
title: "VWAP Envelopes"
slug: "vwap-envelopes"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Reference for the VWAP Envelopes indicator in DeepCharts: continuous VWAP with standard-deviation or percentage bands, Period Mode settings, and how to trade the envelopes."
keywords: ["vwap envelopes", "vwap bands", "vwap standard deviation", "volume weighted average price", "vwap deviation bands", "continuous vwap", "vwap envelope"]
---
The VWAP Envelopes indicator displays the Volume-Weighted Average Price (VWAP) of trades made during a certain period of time, together with standard-deviation bands around it. The envelopes measure the average distance of prices from the mean value, helping you gauge how stretched price is relative to the volume-weighted average.

A key distinction from a classic session VWAP: this indicator calculates in continuous mode, updating progressively rather than resetting at midnight. That rolling behavior makes it well suited to intraday analysis that spans session boundaries.

## What it is

VWAP Envelopes answer the question: where is the volume-weighted fair price, and how far from it is the market trading right now? The indicator plots the VWAP line over price plus up to three envelope bands on each side, built either from standard deviations of price around VWAP or from fixed percentages of it.

Because VWAP weights every price by the volume traded there, it represents the average position of market participants over the period — which is why distance from VWAP is often read as premium (above) or discount (below).

> **Note:** The VWAP calculated by this indicator aligns with the Daily Volume Profile VWAP only at the end of the session. Intraday, the continuous calculation and a session-anchored VWAP will differ.

The live model below shows the idea — adjust the sigma bands around VWAP and hover the chart for a z-score reading of how stretched price is.

[WIDGET: vwap-lab]

## When to use it

- Support and resistance identification — the VWAP line and outer bands are widely watched reaction levels.
- Premium/discount recognition — judging whether current price is rich or cheap relative to the volume-weighted mean.
- Mean-reversion trading — fading pushes into the outer bands back toward VWAP in balanced conditions.
- Breakout confirmation — sustained acceptance beyond an outer band signals genuine initiative, not noise.
- Intraday precision — the continuous calculation keeps the reference valid across the midnight boundary.

## Quick start

1. Open a price chart — see [[first-chart]].
2. Click the green **Indicators** button (or press **Ctrl I**) to open the **Indicator List**.
3. Search for **VWAP Envelopes** and click **+** to add it.
4. Click the gear icon to open its settings.
5. As a starting configuration, set **Period Mode** to **Daily** with a **Period Value** of 1 for a rolling one-day view, keep **Envelope Mode** on **Standard Deviation**, and enable the 1st and 2nd bands. Exact rolling behavior relative to your session times may vary — verify on your instrument before relying on the levels.

[SCREENSHOT: VWAP Envelopes settings dialog open showing Period Mode (Daily/Minutes), Period Value, Envelope Mode (Standard Deviation / Price Percentage) and the 1st/2nd/3rd Standard band parameters | vwap-envelopes-settings.png]

## How to read it

- **VWAP as the session's gravity.** Price above VWAP with pullbacks holding it = buyers in control; the mirror below. Repeated crosses through VWAP = balance.
- **The statistical bands.** In Standard Deviation mode the bands carry the usual normal-distribution intuition: roughly 68% of price action typically falls within 1 standard deviation, roughly 95% within 2, and roughly 99.7% within 3. A tag of the 2nd or 3rd band is therefore a statistically stretched price.
- **Reversion vs. acceptance.** A quick rejection at an outer band back toward VWAP favors mean reversion. Price closing and holding beyond a band — "acceptance" — flips the read to breakout strength.
- **Premium and discount zones.** Longs taken deep below VWAP buy at a discount to the average participant; shorts far above sell at a premium. This framing matters most for mean-reversion styles.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Period Mode** | Selects the calculation window type: **Daily** for a longer-term perspective across n days, or **Minutes** for shorter-period analysis that tracks price and volume movement more closely. |
| **Period Value** | The numerical parameter corresponding to the selected mode (number of days or minutes). |

### Envelope Mode

| Setting | What it does |
|---|---|
| **Standard Deviation** | Builds the bands from the typical deviation of price around VWAP. |
| **Price Percentage** | Builds the bands as fixed percentage offsets above and below VWAP. |

### Envelope parameters

| Band | Statistical meaning (Standard Deviation mode) |
|---|---|
| **1st Standard** | Approximately 68% of price action typically falls within 1 standard deviation. |
| **2nd Standard** | Approximately 95% of price action typically falls within 2 standard deviations. |
| **3rd Standard** | Approximately 99.7% of price action typically falls within 3 standard deviations. |

### Subgraphs

The VWAP line and each envelope line support adjustable color, line style (solid, dotted or dashed), width, and visibility toggles — hide the bands you do not trade to keep the chart readable.

## Tips and common mistakes

- **Know which VWAP you are looking at.** This is a continuous, rolling VWAP — it only matches the Daily Volume Profile VWAP at the end of the session. Comparing the two intraday and assuming one is "wrong" is the most common confusion with this tool.
- **The percentages assume normal-ish conditions.** In strong trends, price can hold beyond the 2nd band far longer than the 95% figure suggests — treat band statistics as context, not guarantees.
- **Match Period Mode to your horizon.** Minutes mode with a short value reacts quickly but produces a fast-moving reference; Daily mode gives the stable institutional-style anchor.
- **Percentage mode is for instruments, not statistics.** Price Percentage bands do not adapt to volatility — use them when you want fixed offsets, and Standard Deviation mode when you want volatility-adjusted ones.

## Related articles

- [[understanding-vwap]]
- [[bollinger-bands]]
- [[standard-deviation]]
- [[deep-profile]]
- [[different-types-of-input]]
- [[indicator-layout]]
