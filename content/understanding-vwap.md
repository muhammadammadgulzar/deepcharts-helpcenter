---
title: "Understanding VWAP"
slug: "understanding-vwap"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "6 min read"
description: "What VWAP measures, why institutions benchmark against it, how the standard-deviation bands work, and how to trade around it without the classic mistakes."
keywords: ["VWAP", "volume weighted average price", "vwap bands", "standard deviation bands", "vwap vs moving average", "vwap vs poc", "D-VL", "session vwap", "vwap pullback"]
---
VWAP — the Volume Weighted Average Price — is one of the few chart lines that professional execution desks, algorithmic strategies and discretionary intraday traders all watch at the same time. That shared attention is exactly what makes it useful: it is less a prediction tool than a meeting point.

This article explains what VWAP actually measures, why it behaves differently from a moving average, and how the standard-deviation bands around it are built and read. For the tools that draw it, see the See it in DeepCharts section.

## The idea in one paragraph

VWAP is the average price of everything that has traded so far in the session, where each trade counts in proportion to its size. Imagine a farmers' market stall selling apples all morning: a few early sales at 2.10, a big rush of sales at 2.00, a handful late at 2.30. The simple average of those prices overweights the stray sales; the volume-weighted average — total money taken divided by total apples sold — tells you what the crowd actually paid. VWAP is that number for a market, updated trade by trade. Price above VWAP means the average participant who traded today is sitting on a long-side gain; price below means the average buyer is underwater. That single fact gives every intraday move a reference point.

## Why traders care

- **It is the institutional benchmark.** Execution algorithms are routinely judged on whether they filled better or worse than VWAP, so large passive order flow clusters around it — which is why price so often reacts there.
- **It gives a session bias in one glance.** Persistent trade above a rising VWAP is a buyers-in-control day; persistent trade below a falling VWAP is the opposite. Chop back and forth across a flat VWAP is a rotation day.
- **The bands measure stretch.** Standard-deviation bands around VWAP adapt to the day's own volatility, so "extended" means the same thing on a quiet day and a wild one.
- **It pairs naturally with orderflow.** A pullback into VWAP is a location; what delta and the footprint do at that location is the trade — see [[orderflow-101]] and [[reading-a-footprint]].

## How it works

### Anchoring and the session reset

VWAP is always computed *from an anchor*. The most common anchor is the start of the trading day, so the line resets every session and early prints dominate at first. That reset matters: minutes after the open, VWAP is built from very little volume and swings with every burst of trade; by mid-session it has so much volume behind it that it barely moves. Treat early-session VWAP as provisional and late-session VWAP as heavy.

### The bands

Because VWAP is an average, price naturally oscillates around it. Standard-deviation bands quantify that oscillation: the first band contains "normal" wandering, while the second and third mark statistically stretched prices for *this* day's distribution. Traders use the outer bands two ways — as fade zones on rotation days (price stretched from a flat VWAP tends to revert) and as trend confirmation on drive days (price riding an outer band with the VWAP sloping steeply is strength, not an automatic short).

[SCREENSHOT: An ES intraday chart with session VWAP and three standard-deviation bands above and below, annotated with (1) the morning open where the bands are tight and unstable, (2) a midday pullback that holds the VWAP line, and (3) an afternoon push riding the first upper band with the VWAP visibly rising | understanding-vwap-bands-annotated.png]

### The math (optional)

After *n* trades (or bars), with price *P* and volume *V*:

```
VWAP = Σ(Pi × Vi) / Σ(Vi)
```

Bar-based implementations typically use each bar's typical price ((high + low + close) / 3) in place of individual trade prices. The bands are VWAP ± k × σ, where σ is the volume-weighted standard deviation of price around VWAP and k is 1, 2 or 3. Because both the average and σ are cumulative from the anchor, the bands widen through volatile sessions and tighten through quiet ones.

> **Note:** Two platforms can print slightly different VWAP values from the same market if they anchor at different session start times or compute from bars instead of ticks. The shape and the reactions matter more than the exact decimal.

## See it in DeepCharts

- **The D-VL quick template** — one click in the chart's bottom bar plots the daily VWAP with three standard-deviation bands above and below, preconfigured on the [[deep-profile]] indicator. See [[quick-chart-templates]].
- [[vwap-envelopes|VWAP Envelopes]] — the dedicated indicator for a VWAP line with surrounding envelope bands; see its reference for the available settings.
- **VWAP drawing tool** — the chart's **Drawing Objects** toolbox includes a VWAP tool for placing a VWAP directly on the chart. See [[drawing-tools]].
- [[deep-profile|Deep Profile]] — the profile indicator that the D-VL preset is built on.

## Worked example

Say ES opens at 5,300.00, drives to 5,312.00 in the first half hour, and the session VWAP settles near 5,305.00 (numbers illustrative). Mid-morning, price pulls back to 5,305.50 — the first touch of VWAP since the drive. This is the classic decision point: if responsive buyers defend the average and the footprint shows selling drying up into the touch, the trend-day playbook says the drive can continue, with the first upper band as an initial target. Instead, suppose price slices through VWAP on strong negative delta and then *retests it from below* at 5,304.75, stalls, and rolls over. The line has flipped from support to resistance, the VWAP slope flattens, and the day's character shifts from drive to rotation — now the play is fading the outer bands back toward the average, not chasing breaks. Same line, two different regimes; the slope and the reaction, not the touch itself, told you which one you were in.

[SCREENSHOT: The worked example as an annotated ES chart — morning drive above VWAP, first pullback touch labelled "decision point", the failed retest from below labelled "support becomes resistance", and the afternoon rotation between the bands with arrows | understanding-vwap-worked-example.png]

## Common misreadings

- **"VWAP is support."** VWAP is a *reference*, not a wall. It marks where a reaction is likely to be decided; the orderflow at the touch decides it.
- **"The bands are overbought/oversold levels."** On a trend day, price can ride an outer band for hours. Read the VWAP slope first: fade stretch from a flat VWAP, respect stretch along a steep one.
- **"The VWAP at 9:35 means something."** Early-session VWAP is built on thin cumulative volume and is unstable. Give it time to accumulate weight before leaning on it.
- **"VWAP and the POC are the same thing."** VWAP is the volume-weighted average price; the POC is the single price with the most volume ([[understanding-volume-profile]]). They often sit close together on balanced days and far apart on trend days — the distance between them is itself information.
- **"One VWAP fits all timeframes."** A session-anchored VWAP says nothing direct about a multi-day swing. If your idea spans days, you need a different anchor, not the same line.

## Go deeper

VWAP answers "what did the average participant pay"; the volume profile answers "at which prices did the business happen" — read [[understanding-volume-profile]] to combine the two views of fair price. [[understanding-auction-theory]] explains the balance/imbalance framework behind rotation days and drive days, and [[orderflow-101]] covers the delta tools you need to judge each VWAP touch. Unfamiliar terms are collected in the [[glossary]].

## Related articles

- [[vwap-envelopes]]
- [[quick-chart-templates]]
- [[deep-profile]]
- [[understanding-volume-profile]]
- [[drawing-tools]]
- [[glossary]]
