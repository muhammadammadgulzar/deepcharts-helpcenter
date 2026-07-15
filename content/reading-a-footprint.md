---
title: "Reading a Footprint: Worked Examples"
slug: "reading-a-footprint"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "8 min read"
description: "How to read a bid/ask footprint bar — diagonal imbalances, stacked imbalances, unfinished auctions and absorption — with three worked examples."
keywords: ["footprint", "footprint chart", "bid ask footprint", "diagonal imbalance", "stacked imbalance", "unfinished auction", "zero print", "absorption footprint", "how to read footprint", "order flow chart"]
---
A footprint takes the candle you already know and opens it up: instead of one body and two wicks, you see how much traded at every price inside the bar, split by which side was aggressive. It is the highest-resolution view of a market that still fits on a chart — and it rewards structured reading far more than staring.

This article assumes you know what bid, ask, aggressor and delta mean; if not, read [[orderflow-101]] first. Everything here is concept and convention — the DeepCharts indicator that draws footprints is covered in [[deep-print]].

## The idea in one paragraph

A candlestick is the final score of a battle; a footprint is the play-by-play. For each price inside a bar it shows two numbers: how many contracts sellers hit into the bid, and how many buyers lifted from the ask. Imagine an auction house where, instead of only learning the final hammer price, you get the full ledger — at every bid level, how many lots impatient sellers dumped and how many impatient buyers grabbed. Reading a footprint is reading that ledger for patterns: where one side steamrolled the other, where a big passive player quietly soaked up everything thrown at them, and where a move ran out of participants.

## Why traders care

- **It shows conviction at the exact price.** A support level "holding" means little; a support level where aggressive sellers unloaded heavily and price refused to drop is a measurable event.
- **It exposes the loser in real time.** Imbalances show which side is being run over right now, bar by bar, price by price.
- **It reveals what the candle hides.** Two identical hammers can contain opposite stories — one absorbing sellers at the low, one merely running out of them. The footprint tells them apart.
- **It grades your levels.** Whether a breakout, a pullback or a profile level is worth trading is answered by the footprints printed there, not by the level itself.

## How it works

### Anatomy of a footprint bar

Each price row in a bid/ask footprint shows `bid volume × ask volume` — contracts that traded at the bid (aggressive selling) on the left, contracts that traded at the ask (aggressive buying) on the right. Under or beside the bar you typically find the bar's totals: volume and delta (ask-traded minus bid-traded volume). Color intensity usually scales with size, so heavy rows stand out at a glance.

Explore a live bar below — hover any bid × ask cell to decode it, and watch the per-bar delta readout as you go.

[WIDGET: footprint-lab]

### Diagonal imbalances

Here is the part beginners get wrong: bid and ask volume at the *same* price are not directly comparable, because they never competed with each other. When the ask at 5,300.25 is being lifted, the bid being hit is 5,300.00 — one tick lower. So footprint imbalances are computed **diagonally**: ask volume at one price against bid volume one tick below it. When the winning side exceeds the other by a configured ratio (300%, i.e. 3:1, is a common convention; the threshold is configurable in the indicator), the cell is flagged as an imbalance — buyers overwhelming sellers on that diagonal, or the reverse.

A single imbalance is noise. **Stacked imbalances** — commonly three or more on consecutive prices — mark a zone where one side got steamrolled, and those zones often act as support (buy-side stacks) or resistance (sell-side stacks) on a revisit.

### Auction completion at the extremes

The top and bottom of a bar or swing carry their own signal. By convention, a *finished* high prints `0 × n` at the very top — nobody was left bidding at the extreme, buying exhausted naturally. If the extreme price instead shows volume on **both** sides (no zero), bidders were still active at the very high when price turned away: an **unfinished auction**. The common expectation is that the market revisits such levels to finish the business — a magnet, not a certainty. The same logic mirrors at lows with the ask column.

### Effort versus result

The most important footprint question is not "who was aggressive?" but "what did their aggression achieve?" Heavy ask-side volume that fails to lift price means someone large is passively selling into the buyers — **absorption** (see [[understanding-icebergs-absorption]]). Shrinking volume as price presses to a new extreme is **exhaustion**. Both are effort-versus-result reads, and both matter more at meaningful locations — value area edges, prior session levels, VWAP — than in the middle of nowhere.

### The math (optional)

For a diagonal imbalance with threshold *r* (e.g. 3):

```
buy imbalance at price P:  ask_volume(P) ≥ r × bid_volume(P − 1 tick)
sell imbalance at price P: bid_volume(P) ≥ r × ask_volume(P + 1 tick)
```

Bar delta = Σ ask volume − Σ bid volume across all prices in the bar. Exact thresholds, minimum-volume filters and stack definitions are indicator settings, not laws — see [[deep-print]].

## See it in DeepCharts

- [[deep-print|Deep Print]] — the DeepCharts footprint indicator.
- [[quick-chart-templates]] — the **OF-VP** preset (each candle as its own volume profile) and **OF-B/A** preset (bid/ask columns with imbalance prints in bold and color intensity) load a ready-made footprint in one click.
- [[imbalance-tracker]] and [[imbalance-rejector]] — imbalance detection as standalone studies.
- [[unfinished-auction|Unfinished Auction]] — flags unfinished-auction extremes automatically.
- [[ratio-highlight]] — highlights notable bid/ask ratios.
- [[deep-delta]] and [[delta-cumulative-candlestick]] — the delta context to read footprints against.
- [[adv-time-and-sales|Advanced Time And Sales]] — the raw tape the footprint is aggregated from.

## Worked example

Three short reads, all illustrative ES numbers.

### Example 1: Breakout with stacked imbalances

Price breaks a morning high at 5,310.00. The breakout bar prints buy-side diagonal imbalances on four consecutive prices from 5,310.25 to 5,311.00, delta +1,800, and closes on its high. Read: aggressive buyers overwhelmed sellers through the level and were not absorbed — initiative buying with follow-through. The stacked zone at 5,310.25–5,311.00 is now the pullback zone of interest; holding above it keeps the breakout healthy.

[SCREENSHOT: Footprint bars around a breakout with four stacked buy imbalances highlighted on consecutive diagonal cells, positive delta readout below the bar, and the stacked zone marked as future support | footprint-example-stacked-imbalances.png]

### Example 2: Absorption at the high

Later, price pushes to 5,318.00. The bar prints its heaviest ask-side volume of the day at 5,317.75–5,318.00 — buyers lifting hard — yet delta of +2,400 produces a close in the *middle* of the bar, and the next bar cannot trade above 5,318.00. Read: maximum buying effort, no result. A passive seller absorbed the buyers at the highs. When the following bar flips to sell-side imbalances, the absorption is confirmed and the reversal story begins — the same sequence described in [[orderflow-101]], now visible cell by cell.

### Example 3: Unfinished auction at the low

During the afternoon selloff, the swing low at 5,296.50 prints `41 × 17` — volume on both bid and ask at the extreme price, no zero print. Read: the auction at the low did not finish; bidders were still active when price bounced. Many footprint traders will keep 5,296.50 on the chart as a revisit candidate and treat any later approach as a planned event rather than a surprise. If the low had printed `0 × 22` instead, selling ended naturally and the level carries no unfinished business.

[SCREENSHOT: A swing low footprint with the extreme price row showing volume on both bid and ask, annotated "unfinished auction — no zero print", plus a later revisit of the same price marked with an arrow | footprint-example-unfinished-auction.png]

## Common misreadings

- **Comparing bid and ask at the same price.** Imbalances are diagonal. Same-row comparison quietly inverts half of your reads.
- **Trading every imbalance.** Imbalances print constantly. They mean something at locations that matter — session levels, value area edges, VWAP — and little in the middle of a rotation.
- **"Big number = big signal."** Heavy volume is only half the sentence; the other half is what price did next. Effort without result is a *reversal* clue, not a continuation one.
- **Reading footprints on the wrong resolution.** Footprints aggregate per bar, so bar type and size change what you see. A pattern on a 5-minute footprint may not exist on a 30-minute one.
- **Ignoring data quality.** Bid/ask classification depends on your feed's granularity — see [[orderflow-101]] and [[compatibility-guide]]. Read patterns, not precise figures.

## Go deeper

Footprints are the microscope; auction theory is the map. [[understanding-auction-theory]] puts imbalance, absorption and unfinished business into the balance/imbalance framework, and [[understanding-icebergs-absorption]] covers how large passive players hide the orders you are reading. When you are ready to configure the tool itself, start with [[deep-print]] or load the OF presets from [[quick-chart-templates]]. Unfamiliar terms are collected in the [[glossary]].

## Related articles

- [[orderflow-101]]
- [[deep-print]]
- [[quick-chart-templates]]
- [[understanding-auction-theory]]
- [[understanding-icebergs-absorption]]
- [[glossary]]
