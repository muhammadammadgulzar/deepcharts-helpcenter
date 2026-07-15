---
title: "Auction Gap Tracker"
slug: "auction-gap-tracker"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Reference for the Auction Gap Tracker indicator: how it highlights zero prints and low-participation gaps in the auction, with every setting explained."
keywords: ["auction gap tracker", "zero prints", "auction gaps", "lack of participation", "unfinished tracking", "zero print indicator", "auction gap traker"]
---

The Auction Gap Tracker identifies gaps in the auction process — areas on the chart where there is a lack of participation from buyers or sellers — and highlights those imbalances with colored rectangles. Where [[unfinished-auction]] focuses on anomalies at bar extremes, this tool tracks zero prints and near-zero participation anywhere you configure it to look, including inside bars.

This is an advanced order-flow tool: it assumes you understand aggressive buying and selling at the Bid and Ask. If you need the foundations, start with [[orderflow-101]] and [[understanding-auction-theory]].

## What it is

At price levels where one side of the tape traded nothing (a zero print) or almost nothing, the auction skipped a step — participation was missing. The Auction Gap Tracker scans for runs of such levels and, when enough consecutive ones appear, draws a rectangle marking the buy-side or sell-side gap. When price later crosses a highlighted level, the opacity of the highlight decreases, indicating the level has been crossed.

## When to use it

- To map low-participation areas that price may revisit to complete the auction.
- To track zero prints inside bars, not only at highs and lows.
- To separate untested gaps from gaps that have already been retested (triggered zones).
- To receive a sound alert when a new gap is detected.

## Quick start

1. Add **Auction Gap Tracker** to your chart.
2. Start strict: keep **Threshold-max. unfinished** at 0 so only true zero prints are tracked.
3. Set **Min. Num. Of Consecutive Zero** to require a run of levels — for example, 5 highlights only areas with five or more consecutive price levels lacking an aggressive side.
4. Choose your **Include Mode**: **Intrabar** to ignore highs and lows, or **All** to track every qualifying gap.
5. Pick distinct buy and sell colors, and enable the triggered-zone display if you want retested gaps kept on the chart.

[SCREENSHOT: A chart with the Auction Gap Tracker active, showing a fully opaque sell-side gap rectangle extending right and a reduced-opacity rectangle where price has already crossed the level | auction-gap-tracker-zones-chart.png]

## How to read it

Each rectangle marks a run of price levels where one side of the market failed to participate. A buy-side gap means aggressive buyers were absent through those levels; a sell-side gap means aggressive sellers were. Auction logic treats these as incomplete areas the market may revisit — similar to unfinished business at an extreme, but detectable anywhere in the bar.

Opacity is the state indicator: full opacity means the gap is untouched since detection, while reduced opacity means price has crossed the level at least once. With **Enable Triggered Zone** on, crossed gaps remain visible in their trigger colors; with **Trigger Only Touch** enabled, only gaps that have been retested at least once are plotted.

## Settings reference

### Unfinished Settings

| Setting | What it does |
|---|---|
| **Minimum Tick Vol** | The minimum volume required on ticks where the zero occurs. |
| **Threshold-max. unfinished** | Maximum threshold for Unfinished tracking. 0 tracks only zero prints; 1 also tracks levels where only 1 contract traded on the Ask or Bid side, and so on. |
| **Include Mode** | **Intrabar** tracks Unfinished only within bars, excluding highs and lows; **All** tracks every Unfinished level meeting your parameters. |
| **Min. Num. Of Consecutive Zero** | Minimum number of consecutive zeros required to trigger a highlight — for example, 5 highlights only runs of five or more consecutive price levels lacking aggressive buyers or sellers. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Num. Extended Bars** | How many bars forward the indicator's lines extend. |
| **Line Width** | Thickness of the lines. |
| **Buy Color** / **Sell Color** | Colors for buy-side and sell-side gaps. |
| **Enable Triggered Zone** | When enabled, also plots gaps that price has already retested. |
| **Trigger Only Touch** | When enabled, plots only gaps that have been retested at least once. |
| **Buy Trig Color** / **Sell Trig Color** | Colors for crossed (triggered) Unfinished zones. |

### Alert Settings

Sound alerts for generated signals, configurable by the user.

[SCREENSHOT: The Auction Gap Tracker settings dialog showing the Unfinished Settings group with Minimum Tick Vol, Threshold-max. unfinished, Include Mode and Min. Num. Of Consecutive Zero | auction-gap-tracker-settings-dialog.png]

## Tips and common mistakes

- **Raise the threshold deliberately.** Moving **Threshold-max. unfinished** above 0 redefines what counts as a gap — from true zero prints to thin participation. Know which definition your strategy relies on.
- **Consecutive zeros are the noise filter.** Isolated zero prints are routine; runs of them are the signal. Increase **Min. Num. Of Consecutive Zero** if the chart fills with trivial highlights.
- **Choose Include Mode consciously.** **Intrabar** deliberately excludes highs and lows — if you want extreme-based unfinished auctions too, use **All** or pair this tool with [[unfinished-auction]].
- **Read opacity before acting.** A faded rectangle has already been crossed; its information content is different from an untouched gap.

## Related articles

- [[understanding-auction-theory]]
- [[unfinished-auction]]
- [[imbalance-tracker]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
