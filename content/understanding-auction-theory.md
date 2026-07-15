---
title: "Understanding Auction Theory: Imbalance, Unfinished Auctions, Absorption"
slug: "understanding-auction-theory"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "6 min read"
description: "How the market-as-auction framework explains imbalances, unfinished auctions and absorption, and how to read each one on a footprint chart."
keywords: ["auction theory", "auction market theory", "imbalance", "stacked imbalance", "unfinished auction", "absorption", "initiative vs responsive", "diagonal imbalance", "buying imbalance", "selling imbalance"]
---
Auction theory is the framework that ties orderflow together. Instead of treating price as a line that goes up and down, it treats the market as a continuous two-way auction whose job is to find the price where business gets done. Imbalances, unfinished auctions and absorption are the three most tradeable footprints that auction leaves behind.

This article assumes you know what an aggressor and delta are — if not, start with [[orderflow-101]].

## The idea in one paragraph

A market works like an auctioneer who cannot stop talking: price moves up until buyers refuse to pay more, then down until sellers refuse to accept less, endlessly probing both directions for the edges of fair value. Picture a livestock auction — the auctioneer raises the price while hands keep going up, and the lot is not done until the raises are met by silence. Every market move is that same process: an advance is "finished" when buying interest is exhausted at the top, and a decline is "finished" when selling interest is exhausted at the bottom. Imbalance shows where one side is overwhelming the other, an unfinished auction is a move that ended before exhaustion was proven, and absorption is the moment a patient counterparty silences the aggressive side without price moving at all. You can watch that two-way auction live in the ladder below — hover each level to see its role.

[WIDGET: dom-ladder]

## Why traders care

- **Imbalances show who is in control right now** — and stacked imbalances mark price zones that often act as support or resistance on a retest.
- **Unfinished auctions leave unfinished business.** Many traders expect the market to eventually revisit an extreme where the auction did not properly complete, which makes those levels natural targets.
- **Absorption is an early-warning system.** It often appears at turning points before anything is visible on a plain candlestick chart.
- **The framework prevents one-sided reading.** Auction theory forces you to ask not only "who is aggressive?" but "is the aggression working?" — the difference between initiative activity that goes somewhere and responsive activity that fades it.

## How it works

### Imbalance

On a footprint chart, each price shows volume traded at the bid and at the ask. Because market buys lift the ask at one price while market sells hit the bid one tick lower, footprint imbalances are compared diagonally: ask volume at one price against bid volume one tick below. When one side exceeds the other by a large multiple — a common convention is 3:1 (300%), though the threshold is configurable in most tools — that price pair is marked as a buying or selling imbalance. A single imbalance is noise; three or more consecutive imbalances on the same side, called stacked imbalances, indicate that one side ran over the other across a whole zone, and that zone often gets defended when price returns to it.

Try it below — adjust the diagonal-imbalance ratio and hover the cells to see which diagonal pairs qualify.

[WIDGET: footprint-lab]

### Unfinished auctions

An auction is complete when the aggressive side is exhausted at the extreme. On a footprint, a clean, finished high tapers: at the very top price there is little or no ask-side volume left, because the last buyers gave up. When the extreme price of a move instead still shows solid two-sided trade — buying and selling both active at the top tick with no taper — the auction ended without proof of exhaustion. That level is called an unfinished auction, and the common expectation is that the market will return to it later to finish the business. Treat this as a tendency, not a rule: exact definitions vary between tools, and not every unfinished level gets revisited on any particular day.

### Absorption

Absorption is aggression meeting a patient wall. Aggressive market orders keep hitting a level — heavy volume, strong one-sided delta — yet price does not move, because large resting limit orders keep taking the other side. On the footprint it looks like unusually high volume at an extreme with no price progress; on a delta chart it appears as a divergence, effort without result. Sellers absorbing at a high often precede rejection downward; buyers absorbing at a low often precede a bounce. Absorption is covered in depth, together with the iceberg orders that usually cause it, in [[understanding-icebergs-absorption]].

### The math (optional)

For a diagonal pair, the imbalance ratio is:

```
buy imbalance  if ask_volume(price) ≥ ratio × bid_volume(price − 1 tick)
sell imbalance if bid_volume(price) ≥ ratio × ask_volume(price + 1 tick)
```

with `ratio` commonly set around 3.0. Most tools also require a minimum volume so that trivial prints (6 contracts vs 2) do not qualify.

## See it in DeepCharts

- [[deep-print|Deep Print (Footprint)]] — the chart where imbalances, tapering extremes and absorption are read directly.
- [[imbalance-tracker]] — detects and marks bid/ask imbalances automatically.
- [[imbalance-rejector]] — companion tool for tracking how price behaves at imbalance levels.
- [[session-imbalance]] — session-level imbalance reference levels.
- [[unfinished-auction]] — marks unfinished auction extremes so you can track whether they are revisited.
- [[auction-gap-tracker]] — tracks gaps the auction left behind.
- [[ratio-highlight]] — highlights extreme bid/ask ratios inside bars.
- [[market-profile-tpo]] and [[deep-profile]] — the profile views of the same auction, showing where it built value.

## Worked example

NQ rallies into yesterday's high (say 18,600 — illustrative). On the way up, the footprint prints stacked buying imbalances at 18,560–18,570: initiative buyers in control, and that zone becomes the pullback support to watch. At 18,600 the character changes — volume expands sharply, delta stays strongly positive, but price stalls for several bars. Effort without result: sellers are absorbing the buying. The top tick of the move still shows heavy two-sided trade, so the high is also a potential unfinished auction. Price then rolls over. The auction-theory read: buyers drove the move (imbalances), a patient seller ended it (absorption), and the untapered high stays on the map as unfinished business the market may revisit another day.

[SCREENSHOT: An NQ footprint sequence annotated in three stages — stacked buying imbalances during the rally, an absorption bar at the prior-day high with high volume and flat price, and the untapered top tick circled as a potential unfinished auction | auction-theory-worked-example-nq.png]

## Common misreadings

- **"Every imbalance is a signal."** Isolated imbalances happen constantly. Location (at a level that matters) and stacking are what give them weight.
- **"Unfinished auctions must be revisited."** It is a tendency traders plan around, not a guarantee — and definitions differ between tools, so two platforms may not mark the same levels.
- **"High volume at a high is always absorption."** It can also be genuine two-sided repricing. Absorption requires the third ingredient: price failing to move despite the aggression.
- **"Absorption means immediate reversal."** If the absorbing side eventually pulls its orders, the absorbed level can break violently — absorption tells you where the battle is, not who wins it.

## Go deeper

Practice the mechanics bar by bar in [[reading-a-footprint]], study the hidden-order side of absorption in [[understanding-icebergs-absorption]], and see how the auction's value-building shows up in [[understanding-volume-profile]]. Terms are defined in the [[glossary]].

## Related articles

- [[orderflow-101]]
- [[reading-a-footprint]]
- [[understanding-icebergs-absorption]]
- [[imbalance-tracker]]
- [[unfinished-auction]]
- [[deep-print]]
