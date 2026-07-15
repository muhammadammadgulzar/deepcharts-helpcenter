---
title: "Orderflow 101: Bid, Ask, Aggressor and Delta"
slug: "orderflow-101"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "beginner"
time: "6 min read"
description: "The four building blocks of orderflow trading — bid, ask, aggressor and delta — explained from zero, with a worked futures example."
keywords: ["order flow", "orderflow basics", "what is delta", "bid vs ask", "aggressor", "market order vs limit order", "cumulative delta", "delta divergence", "traded at ask", "traded at bid"]
---
A candlestick tells you what price did. Orderflow tells you who made it happen and how hard they pushed. Once you can read the bid, the ask, the aggressor and delta, every advanced tool in DeepCharts — footprints, delta charts, the DOM, the tape — becomes a variation on the same four ideas.

This article is the foundation for the rest of the Concepts section. Read it before [[reading-a-footprint]] or [[understanding-auction-theory]].

## The idea in one paragraph

Every trade in a futures market is a match between someone willing to wait and someone who is not. Patient traders post limit orders — "I will buy at this price or better" — and those orders sit in the book at the bid and the ask. Impatient traders send market orders that hit whatever is resting there. The impatient side is called the aggressor, and it decides where the trade prints: a market buy fills against the ask, a market sell fills against the bid. Think of a fish market: stall owners post their prices (limit orders); a customer who pays the asking price without haggling is an aggressive buyer; a fisherman who dumps his catch at whatever buyers will pay is an aggressive seller. Count the aggressive buys, subtract the aggressive sells, and you have delta — a running score of which side is more urgent.

## Why traders care

- **It separates conviction from drift.** Price can rise on heavy aggressive buying or on thin air. Delta shows which one you are looking at.
- **It exposes absorption.** When aggressive orders pour in but price does not move, someone large is passively taking the other side — often the earliest visible sign of a reversal (see [[understanding-icebergs-absorption]]).
- **It confirms or denies breakouts.** A breakout with strong same-direction delta has fuel; one without it is suspect.
- **It sharpens timing.** Chart patterns tell you where something may happen; orderflow tells you whether it is actually happening, trade by trade.

## How it works

### Bid, ask and the spread

At any moment the order book has two front prices. The **bid** is the highest price at which resting buyers are willing to buy. The **ask** (also called the offer) is the lowest price at which resting sellers are willing to sell. The gap between them is the spread — in liquid futures such as ES it is usually one tick. Behind those front prices sit queues of further limit orders at every level; that stack of resting orders is the market depth (see [[depth-of-market]] and [[advanced-dom]]). Hover the live ladder below to see what each resting level means — sell limits stacked above the spread, buy limits below.

[WIDGET: dom-ladder]

### The aggressor

Resting orders do not trade with each other — someone has to cross the spread. A market order (or an aggressive limit order priced through the spread) does exactly that:

- A trade that prints **at the ask** was initiated by an aggressive **buyer**.
- A trade that prints **at the bid** was initiated by an aggressive **seller**.

One point trips up almost every beginner: every single trade has exactly one buyer and one seller, so "more buyers than sellers" is meaningless. What orderflow measures is which side was aggressive — who paid the spread to get filled right now.

### Delta

Delta condenses the aggressor tally into one number per bar:

- Volume traded at the ask counts as buying pressure.
- Volume traded at the bid counts as selling pressure.
- **Delta = ask-traded volume − bid-traded volume.**

Positive delta means buyers were the more aggressive side during that bar; negative delta means sellers were. **Cumulative delta** adds each bar's delta to a running total across the session, so you can compare the trend of aggression against the trend of price. When price makes a new high but cumulative delta does not (or the reverse at lows), that disagreement is called a delta divergence and is worth attention.

Watch it work in the live panel below — hover each bar to see how its delta feeds the cumulative line.

[WIDGET: delta-lab]

### The math (optional)

For a single bar:

```
delta        = volume_at_ask − volume_at_bid
total volume = volume_at_ask + volume_at_bid
```

Cumulative delta at bar *n* is the sum of all bar deltas from the session start through bar *n*. Note that delta can be small while total volume is huge — that combination (heavy two-sided volume, little net aggression) is itself information: a battle, not a parade.

> **Note:** Delta depends on your data feed correctly classifying each trade as bid-side or ask-side. Feeds with more granular data produce more precise delta; see [[compatibility-guide]] for what each feed provides.

## See it in DeepCharts

- [[adv-time-and-sales|Advanced Time And Sales]] — the raw tape: every individual trade with its price, size and side.
- [[advanced-dom|Advanced DOM]] and the [[depth-of-market|Depth of Market indicator]] — the resting bid and ask liquidity that aggressors trade into.
- [[deep-print|Deep Print (Footprint)]] — bid-traded vs ask-traded volume at every price inside every bar.
- [[deep-delta]] and [[delta-bar]] — per-bar delta plotted as its own study.
- [[delta-cumulative-candlestick]] and [[delta-cumulative-histogram]] — cumulative delta for divergence reading.
- [[delta-highlight|Delta % Highlight]] — flags bars where delta is an unusually large share of volume.
- [[big-trades]] — isolates unusually large aggressive prints.
- [[speed-of-tape]] — how fast trades are hitting the market, a proxy for urgency.

## Worked example

Say ES is trading at 5,300.00 and a 5-minute bar prints 12,400 contracts at the ask and 9,900 at the bid (the numbers are illustrative). Delta is +2,500 on 22,300 total volume: buyers were clearly the aggressive side, and the bar closes near its high — aggression produced progress. Healthy initiative buying.

The next bar prints another +3,000 delta, yet closes flat, back near the previous close. Aggressive buyers spent 3,000 contracts of net effort and got nothing for it. Someone was passively selling into them at the highs — absorption. If the following bars show delta flipping negative while price starts slipping, the failed buying effort becomes the start of a reversal story.

[SCREENSHOT: Two consecutive footprint bars annotated side by side — first bar with strongly positive delta closing on its high, second bar with similar positive delta but a flat close, annotation text "same buying effort, no result = absorption" | orderflow-101-worked-example-absorption.png]

## Common misreadings

- **"Positive delta means price must go up."** No — delta measures effort, not result. Positive delta with no upward progress is bearish evidence, not bullish.
- **"Delta tells me how many buyers vs sellers there are."** Every trade has both. Delta measures aggression only.
- **"One big delta bar is a signal."** A single bar means little without context — location matters (at a key level, at session extremes) and so does what price did in response.
- **"Delta is identical on every feed."** Classification quality varies with feed granularity, so absolute delta numbers can differ between data sources. Read the pattern, not the precise figure.

## Go deeper

Once bid, ask, aggressor and delta feel natural, move on to [[reading-a-footprint]] for bar-by-bar practice, [[understanding-auction-theory]] for imbalance and absorption in context, and [[understanding-icebergs-absorption]] for how large players hide their orders. Unfamiliar terms are collected in the [[glossary]].

## Related articles

- [[reading-a-footprint]]
- [[understanding-auction-theory]]
- [[understanding-icebergs-absorption]]
- [[deep-print]]
- [[deep-delta]]
- [[glossary]]
