---
title: "Unfinished Auction"
slug: "unfinished-auction"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Reference for the Unfinished Auction indicator: how it detects highs and lows where the auction did not complete, and every setting for filtering and extending them."
keywords: ["unfinished auction", "unfinished business", "finished auction", "bad high", "bad low", "auction anomaly", "unfinished auktion", "zero prints at high"]
---

The Unfinished Auction indicator finds highs and lows where the market's auction did not complete — extremes reached without the opposite side's aggression showing up — and marks them with rectangles on your chart. These levels represent unfinished business: in auction theory, price frequently returns to revisit them.

This article covers the indicator itself. For the underlying theory of finished and unfinished auctions, see [[understanding-auction-theory]].

## What it is

A finished auction occurs when price reaches an extreme where both aggressive buyers and aggressive sellers participate — the market explored the level fully. An unfinished auction occurs when an extreme is reached without the presence of the opposite side's aggression: for example, a high showing 60 aggressive sellers but zero aggressive buyers. That extreme was never properly tested, and it may attract a future revisit.

Technically, the indicator hunts for anomalies at bar extremes. Normally a candle's high shows 0 Bid with Ask contracts, and its low shows Bid contracts with 0 Ask. When this pattern breaks — Bid contracts printing at a high, or Ask contracts printing at a low — the indicator displays a rectangle at the anomaly.

Hover the bid×ask cells in the interactive footprint below to see that structure for yourself — note how a bar's extremes normally print zero on one side:

[WIDGET: footprint-lab]

## When to use it

- To build a map of unfinished highs and lows that may act as magnets for future price revisits.
- To judge whether a swing extreme was a completed auction (safer to trade against) or unfinished (likely to be retested).
- To combine auction-completion evidence with your footprint reading — see [[reading-a-footprint]].
- To track how price behaves when it returns to repair unfinished business.

## Quick start

1. Add **Unfinished Auction** to your chart.
2. Set **Days to Load** to control how much history is scanned and displayed.
3. Keep **Show rectangle** enabled and pick distinct colors for **Color Bad High** and **Color Bad Low** so the two anomaly types are easy to separate.
4. If the chart gets busy, use the filter settings in manual mode to require a minimum volume before an anomaly is highlighted.

[SCREENSHOT: A futures chart with the Unfinished Auction indicator showing a rectangle at a swing high marked as a bad high, in a contrasting color to a bad-low rectangle at a swing low below | unfinished-auction-rectangles-chart.png]

## How to read it

A rectangle at a high (a bad high) means the up-auction ended without aggressive buyers participating at the extreme — the market did not finish exploring higher prices there. A rectangle at a low (a bad low) is the mirror case. In both situations the level is a candidate for a revisit: many auction traders expect price to come back, touch the level, and complete the auction before the market moves on.

Treat these levels as reference points rather than automatic trades. An unfinished high above the market is a reason to be cautious about aggressive shorts into that area, and a target candidate for longs; once the level is revisited and repaired, its magnet effect is spent.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Days to Load** | Number of historical days scanned and displayed. |
| **Line Width** | Thickness of the rectangle's dividing line. |
| **Color Bad High** / **Color Bad Low** | Separate colors to differentiate high anomalies from low anomalies. |
| **Show rectangle** | Toggles the rectangle visibility. |
| **Show background** | Toggles the filled background of the marked area. |
| **Opacity** | Transparency of the background fill. |

### Filter

Manual mode enables minimum-volume filtering, so only anomalies with significant volume are highlighted. Use it on active instruments where tiny prints at extremes would otherwise flood the chart.

### Extend

Controls line extension from detected anomalies:

- Extend lines from the anomaly forward in time.
- Daily reset options stop extensions at the end of the day.
- Candle shadow intersection controls decide how a touch by a candle's wick interacts with (and terminates) the extended line.

[SCREENSHOT: The Unfinished Auction settings dialog showing the General section with Days to Load, Line Width, Color Bad High, Color Bad Low, Show rectangle, Show background and Opacity | unfinished-auction-settings-dialog.png]

## Tips and common mistakes

- **Filter by volume on liquid contracts.** Without a minimum-volume filter, minor prints at extremes generate anomalies that carry little information.
- **Unfinished does not mean immediate.** The revisit can come many bars — or sessions — later; use **Days to Load** and the extend settings to keep older levels in view.
- **Distinguish repaired levels.** Once price has returned to an unfinished extreme, the auction there is complete; do not keep trading the level as a magnet.
- **Colors are your fastest read.** Keeping **Color Bad High** and **Color Bad Low** clearly distinct makes the chart readable at a glance during fast markets.

## Related articles

- [[understanding-auction-theory]]
- [[auction-gap-tracker]]
- [[reading-a-footprint]]
- [[deep-print]]
- [[different-types-of-input]]
- [[indicator-layout]]
