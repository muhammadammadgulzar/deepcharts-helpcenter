---
title: "Imbalance Tracker"
slug: "imbalance-tracker"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Reference for the Imbalance Tracker indicator: how it detects buy/sell imbalance zones, how fresh and triggered zones work, and every setting explained."
keywords: ["imbalance tracker", "imbalance zones", "stacked imbalances", "buy sell imbalance", "order flow imbalance", "imbalence tracker", "fresh zone", "triggered zone"]
---

The Imbalance Tracker is an advanced market analysis tool that identifies and monitors imbalances between buy and sell orders — places where one side of the market traded far more aggressively than the other. When several imbalances stack on consecutive price levels, the indicator marks the area as a zone on your chart and keeps tracking it until price returns.

It is primarily used in order-flow trading: the zones it draws are the same stacked imbalances you would find manually on a footprint chart, detected and managed for you automatically.

## What it is

At each price level the indicator compares aggressive buying against aggressive selling. When the difference exceeds your percentage and volume thresholds — and enough consecutive levels agree — it plots an imbalance zone. Zones come in two states: **Fresh Zone** (price has not yet come back to test the area) and **Triggered Zone** (price has crossed back into it).

## When to use it

- To find stacked-imbalance support and resistance without reading every footprint bar by hand.
- To monitor which imbalance zones are still untested (fresh) and which have already been revisited.
- To get an alert the moment a new significant imbalance area forms.
- To add order-flow context to a standard candlestick chart without switching chart types.

## Quick start

1. Add **Imbalance Tracker** to your chart.
2. In the imbalance settings, review **Minimum Imbalance %** and **Minimum Volume Diff** — these two filters decide how significant a difference must be before it counts.
3. Set **Min. Num. Of Consecutive Imb** to require stacked imbalances rather than isolated ones; higher values produce fewer, stronger zones.
4. In the plot settings, pick distinct **Buy Color** and **Sell Color** values so buy-side and sell-side zones are unmistakable.
5. Optionally enable alerts so new zones notify you with a sound and popup.

[SCREENSHOT: A candlestick chart with the Imbalance Tracker active, showing a fresh buy-side imbalance zone extending right from a bullish impulse and a faded triggered zone above it | imbalance-tracker-zones-chart.png]

## How to read it

A buy-side zone marks levels where aggressive buyers overwhelmed sellers; in order-flow logic those levels often act as support on a retest, because the participants who bought there may defend the area. Sell-side zones are the mirror image and often act as resistance.

The zone state carries information too. A **Fresh Zone** is untested — the market has not yet returned to check whether the aggressive side will defend it. Once price crosses into the area it becomes a **Triggered Zone** and is recolored, telling you the level has already been consumed at least once. With **Trigger Only Touch** enabled, the triggered display is limited to zones price has retested at least once.

For the underlying theory of aggressive buyers, sellers and delta, see [[orderflow-101]]; for how imbalances look inside individual bars, see [[reading-a-footprint]].

## Settings reference

### Imbalance Settings

| Setting | What it does |
|---|---|
| **Minimum Imbalance %** | The minimum percentage difference between buy and sell orders for a level to qualify — the significance filter. |
| **Minimum Volume Diff** | The volume threshold that must be exceeded before an imbalance is detected. Raise it on active instruments to ignore trivial differences. |
| **Include zero on imbalance** | Whether ticks with zero volume on one side are included in the imbalance calculation. |
| **Min. Num. Of Consecutive Imb** | How many consecutive imbalanced price levels are required before the indicator marks an area. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Num. Extended Bars** | How many bars forward a zone is drawn across the chart. |
| **Line Width** | Thickness of the zone highlight lines. |
| **Fresh Zone** | Displays imbalance areas that price has not retested, with separate **Buy Color** and **Sell Color** options. |
| **Triggered Zone** | Shows zones price has crossed, with **Enable**, **Trigger Only Touch**, **Buy Trig Color** and **Sell Trig Color** options. |

### Alert Settings

| Setting | What it does |
|---|---|
| **Enable** | Activates sound and popup notifications when a signal is generated. |
| **Alert-Name** | Selects which notification sound plays. |
| **Popup-message** | Customizes the text shown in the popup. |

[SCREENSHOT: The Imbalance Tracker settings dialog showing the Imbalance Settings group with Minimum Imbalance %, Minimum Volume Diff, Include zero on imbalance and Min. Num. Of Consecutive Imb | imbalance-tracker-settings-dialog.png]

## Tips and common mistakes

- **Too low a consecutive count means noise.** A single imbalanced level is common; requiring several consecutive levels is what makes a zone meaningful.
- **Tune volume thresholds per instrument.** A **Minimum Volume Diff** that works on a liquid index future will flag everything on a thin contract — and vice versa.
- **Think about zero prints.** **Include zero on imbalance** changes what counts as an imbalance at levels where one side traded nothing at all; test both settings against your market.
- **Watch zone state, not only zone location.** A level that has already been triggered repeatedly is not the same trade as a fresh, untested zone.
- **Keep the chart readable.** Large **Num. Extended Bars** values leave many old zones on screen; shorten the extension if the chart becomes cluttered.

## Related articles

- [[orderflow-101]]
- [[reading-a-footprint]]
- [[imbalance-rejector]]
- [[deep-print]]
- [[different-types-of-input]]
- [[indicator-layout]]
