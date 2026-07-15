---
title: "Understanding Icebergs and Absorption"
slug: "understanding-icebergs-absorption"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "advanced"
time: "6 min read"
description: "How iceberg orders hide institutional size, how absorption looks on the tape, DOM and footprint, and how to avoid the classic false reads."
keywords: ["iceberg order", "hidden liquidity", "absorption", "order reloading", "refilling bid", "hidden size", "passive aggressor battle", "delta divergence absorption", "spoofing vs iceberg"]
---
Large traders have a problem: showing their full size would move the market against them before they finish filling. The iceberg order is their standard solution, and absorption is the shadow it casts on the tape. Learning to spot both is one of the highest-value skills in orderflow trading, because it reveals where serious money is willing to fight.

This is an advanced topic. It assumes you are comfortable with aggressor, delta and the order book from [[orderflow-101]], and with the auction framework from [[understanding-auction-theory]].

## The idea in one paragraph

An iceberg order is a large limit order that displays only a small visible portion — the tip — while the rest stays hidden and automatically refills as the tip gets executed. Imagine a wholesale buyer at a fish market who wants 5,000 kilos but only ever asks for 50 at a time, so nobody realises the scale of his demand and raises prices on him; every time his crate fills, he quietly orders another 50. Absorption is what the rest of the market experiences while he works: sellers keep unloading into what looks like a small bid, yet the price refuses to fall, because the hidden order swallows — absorbs — everything thrown at it.

## Why traders care

- **Icebergs mark real commitment.** Visible book size can be pulled in a millisecond; an iceberg that has already executed thousands of contracts is proof of genuine intent at that price.
- **Absorption often precedes reversals.** When aggressive sellers exhaust themselves against a hidden buyer, the path of least resistance flips upward — and vice versa.
- **They redefine support and resistance.** A level defended by an iceberg is structurally stronger than one drawn from a chart pattern, and its failure is proportionally more meaningful.
- **They protect you from traps.** Recognising absorption stops you from joining an aggressive move at exactly the point where a larger player is taking the other side of it.

## How it works

### The mechanics of an iceberg

A trader submits a limit order for, say, 500 contracts with a displayed size of 10. The book shows 10. When those 10 fill, the order automatically re-displays another 10 from the hidden reserve, at the same price, until the full 500 is done or the order is cancelled. Some icebergs are native (managed by the exchange); others are synthetic (an execution algorithm re-submitting small orders) — on the tape they look similar. The observable signature is always the same: **executed volume at a price vastly exceeds the size that was ever visible there.**

### What absorption looks like

Absorption is the market-level effect: heavy aggressive volume into a price, strong one-sided delta, and no price progress. The three views agree with each other:

- **On the tape:** a rapid stream of prints at one price, same side, far exceeding what the book displayed.
- **On the DOM:** the level's visible size takes hit after hit but keeps refilling to a similar number instead of shrinking to zero.
- **On the footprint:** an outsized volume cell at the extreme of the move with no follow-through beyond it, and delta pushing hard in a direction price refuses to go.

[SCREENSHOT: A composite annotated view of the same moment in three panels — tape showing repeated sell prints at one price, DOM showing the bid at that price refilling to a similar size after each hit, and a footprint bar with a huge bid-volume cell at the low and no lower prices printed, captioned "one iceberg, three views" | icebergs-absorption-three-views.png]

### Detection in practice

You rarely see an iceberg directly; you infer it. The strongest tells, in rough order of reliability:

1. **Reloading:** the same price re-displays similar size repeatedly while trades keep printing into it.
2. **Executed-vs-displayed mismatch:** cumulative traded volume at the level is a large multiple of anything the book ever showed.
3. **Delta divergence:** cumulative delta falls hard while price holds (hidden buyer), or rises hard while price stalls (hidden seller) — see [[delta-cumulative-candlestick]].
4. **Time:** genuine absorption takes repeated hits over time; a single large print proves nothing.

> **Note:** Detection quality depends on your market data. Order-by-order (MBO) depth data lets tools track individual order refills; aggregated depth makes iceberg inference less precise, and top-of-book (Level 1) data supports only the delta-divergence style of read. See [[compatibility-guide]] for what each feed supplies.

### The math (optional)

A useful mental ratio for a suspected iceberg level:

```
absorption ratio = volume executed at the level ÷ maximum size ever displayed there
```

There is no magic threshold, but the higher the multiple (and the shorter the time in which it accumulates), the harder it becomes to explain the activity as ordinary queue traffic from many small resting orders.

## See it in DeepCharts

- [[adv-time-and-sales|Advanced Time And Sales]] — the tape, where repeated prints into one price are seen first.
- [[advanced-dom|Advanced DOM]] — watch a level refill in real time as it absorbs.
- [[deep-print|Deep Print (Footprint)]] — outsized volume cells at extremes with no follow-through.
- [[deep-wall]] — tracks large resting liquidity in the book.
- [[deep-trades]] and [[big-trades]] — surface unusually large executed trades and clusters.
- [[delta-cumulative-candlestick]] and [[delta-cumulative-histogram]] — the divergence view of absorption.
- [[speed-of-tape]] — urgency spikes that often accompany a battle at an iceberg level.

## Worked example

ES sells off into 5,270.00 (illustrative), a level with no obvious chart significance. The DOM shows a bid of about 60 contracts there. Over the next four minutes the tape prints roughly 2,400 contracts sold at 5,270.00 — forty times the displayed size — and after every flurry the bid re-displays near 60. Cumulative delta drops sharply; price does not make a single new low. This is a textbook hidden buyer: sellers are pouring effort into a level and getting nothing. When the selling waves visibly shorten and the first aggressive buying appears, the absorbed shorts are trapped below a proven buyer — fuel for the bounce. Had 5,270.00 instead broken after all that defence, the same logic would flip: the big player is done or overwhelmed, and the move through the level tends to be fast.

[SCREENSHOT: ES chart of the worked example annotated with the 5,270.00 level line, a cumulative delta panel below falling sharply while price holds flat at the level, and a callout reading "2,400 sold into a 60-lot bid — hidden buyer" | icebergs-absorption-worked-example-es.png]

## Common misreadings

- **"Big visible size on the DOM is an iceberg."** The opposite — icebergs hide size. Large displayed size that vanishes when approached is closer to spoofing than to absorption. Judge by what executes, not what is shown.
- **"Every refilling level is an iceberg."** Busy prices attract fresh limit orders from many independent traders. Suspect an iceberg only when the executed-vs-displayed mismatch is extreme and concentrated.
- **"Absorption guarantees a reversal."** It marks a battle, not the winner. If the hidden order completes or cancels, the level can give way violently — absorption that fails is a breakout signal in its own right.
- **"I can spot icebergs on any data feed."** Without granular depth data the refill signature is blurred; be more conservative with your reads on aggregated or top-of-book feeds.

## Go deeper

Absorption is one of the three core auction events — see [[understanding-auction-theory]] for the full framework, and [[reading-a-footprint]] to practice spotting effort-versus-result bar by bar. [[orderflow-101]] covers the delta mechanics all of this rests on, and the [[glossary]] defines every term used here.

## Related articles

- [[understanding-auction-theory]]
- [[orderflow-101]]
- [[reading-a-footprint]]
- [[advanced-dom]]
- [[deep-wall]]
- [[adv-time-and-sales]]
