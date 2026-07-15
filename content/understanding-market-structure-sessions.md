---
title: "Understanding Market Structure and Sessions (RTH/ETH, Rollover)"
slug: "understanding-market-structure-sessions"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "beginner"
time: "8 min read"
description: "RTH vs ETH sessions, the futures trading day, overnight reference levels, and contract rollover — the structure every futures chart is built on."
keywords: ["RTH", "ETH", "regular trading hours", "electronic trading hours", "overnight session", "globex", "contract rollover", "front month", "continuous contract", "session open", "why does my chart look different"]
---
Futures markets trade almost around the clock, but the hours are not equal. A handful of structural facts — when the "real" session runs, when the exchange day actually starts, and which contract month you are looking at — quietly shape every chart you open. Traders who skip this layer end up confused by charts that disagree, indicators that reset at odd times, and price "gaps" that never happened.

This article covers the two ideas that matter most: sessions (RTH versus ETH) and contract rollover. Both are general futures-market structure; the DeepCharts settings that control them are linked in See it in DeepCharts.

## The idea in one paragraph

Think of a futures market as a shop that never really closes but has one busy period a day. The doors are open almost 23 hours (the electronic session), yet the serious business happens in the few hours when the main crowd — funds, institutions, the cash stock market next door — is present (the regular session). Prices printed at 3 a.m. with a skeleton crew are real, but they carry less weight than prices printed at 10 a.m. with everyone in the room. On top of that daily rhythm, futures contracts themselves expire every few months, so the market periodically moves its business from the expiring contract to the next one — like the shop moving to a new address a few streets away, where the crowd is the same but the price tags differ slightly.

## Why traders care

- **Volume and conviction differ by session.** A 40-point overnight drift on thin volume and a 40-point RTH move on heavy volume are not the same information. Session context tells you how much to trust a move.
- **The key reference levels are session levels.** Overnight high and low, prior RTH close, RTH open — these are among the most commonly watched intraday levels precisely because different participant crowds built them.
- **Session boundaries drive your tools.** Daily profiles, session VWAP, "day" statistics — all of them reset at a session boundary. Two traders with different session settings will see different profiles, different VWAPs and different daily levels on the same market ([[understanding-volume-profile]], [[understanding-vwap]]).
- **Rollover decides which prices are real.** Around expiry, the old contract goes quiet and the new one takes over at a slightly different price. Charts that ignore this show phantom gaps and dead data.

## How it works

### RTH versus ETH

**ETH (Electronic Trading Hours)** is the full electronic session — nearly the whole day. **RTH (Regular Trading Hours)** is the main daytime session, and for US equity index futures it is commonly defined to match the US cash-equity session, 09:30–16:00 New York time (exact definitions vary by instrument and platform). Everything outside RTH is loosely called the overnight or ETH-only session.

The overnight session is thinner: fewer participants, less volume at each price, so moves travel further on less business. Many intraday frameworks therefore treat the overnight range as *context* — an unresolved advertisement of where value might be heading — and the RTH open as the moment the market votes on it with full attendance. That is why "did the overnight low hold after the open?" is a more meaningful question than the same test at 4 a.m.

### The futures trading day

For CME equity index futures such as ES and NQ, the electronic week opens Sunday evening at 18:00 New York time and runs to Friday 17:00, with a one-hour maintenance pause each day from 17:00 to 18:00. Check the exchange's published schedule for your specific instrument and for holiday sessions.

One consequence surprises almost everyone: the exchange's trading day does not start at midnight — it starts at 18:00 the *previous* evening. Monday's "day" of trading began Sunday night. Daily bars, day-start lines and session statistics anchored to the exchange day therefore reset in the evening, not at 00:00.

[SCREENSHOT: An NQ chart spanning two full days with the overnight (ETH-only) portion visually distinguished from the RTH portion, annotated with the 18:00 New York session start, the 09:30 RTH open, the overnight high and low, and the 17:00–18:00 daily pause | market-structure-sessions-annotated.png]

### Rollover and contract months

A futures contract is an agreement with an expiry date, so every instrument is actually a family of contracts. Equity index futures use a quarterly cycle — March, June, September and December, carrying the month codes H, M, U and Z. The contract where the volume currently lives is called the **front month**, and it is the one you should be charting and trading.

As expiry approaches (equity index futures typically expire on the third Friday of the contract month), volume migrates to the next contract over a few days — most of it around a conventional roll date roughly a week before expiration. Two things follow:

1. **You must switch contracts.** Staying on the expiring contract leaves you watching a market that is going quiet; after expiry the chart simply stops. In DeepCharts the switch is done with **Options → Symbols Rollover** — see [[symbol-rollover]].
2. **The two contracts trade at different prices.** The gap between the old and new contract is a pricing artifact (carrying costs, dividends, interest), not a market move. Long-history charts stitch contracts together as a *continuous contract*, and the stitching method decides whether that artificial gap is left visible or adjusted away.

### The math (optional)

There is no heavy math here, only one adjustment idea: when stitching contract months, "adjusted" continuous series shift the older contract's prices by the roll-date price difference so the join is seamless. Unadjusted series keep every price as it actually traded, at the cost of a visible step at each roll. Neither is wrong — adjusted series are better for long-term levels and indicator continuity; unadjusted series preserve the true printed prices.

## See it in DeepCharts

- [[chart-display-options]] — the **ETH Session** toggle in the two-candle dropdown (default on) switches a chart between the full session and RTH-only.
- [[price-chart-settings]] — the same switch as **RTH - only**, plus **CUSTOM TIME SESSION** for your own session window (e.g. only the first two hours after the open), **LINE START DAY** for a vertical line at each exchange-day start, and **Continuous Contract** (None, Date, Volume, Adjusted Date, Adjusted Volume) for how history stitches across contract months.
- [[symbol-rollover]] — how to roll your symbols to the new contract month.
- [[session-marker]] — an indicator that marks session boundaries on the chart.
- [[session-imbalance]] — session-scoped orderflow analysis; see its indicator reference.
- [[gaps-in-price]] — how to tell an expired-contract artifact from a real data problem.

## Worked example

Suppose NQ closes its regular session at 18,500.00, then grinds up overnight to 18,590.00 on light volume (numbers illustrative). At 09:30 New York time the RTH open prints 18,575.00 and heavy two-sided volume arrives. Within the first hour, price breaks below the overnight low of 18,540.00 and cannot reclaim it. The session-structure read: the overnight markup was an advertisement made by a thin crowd, and the full RTH crowd rejected it — a materially more bearish fact than the same break happening at 3 a.m. A trader using session structure now watches the prior RTH close at 18,500.00 as the next decision level, and weighs every level test by *which session built the level and which session is testing it*.

[SCREENSHOT: Intraday NQ chart of the worked example with the overnight range shaded, annotations on the RTH open, the failed overnight-high extension, the break of the overnight low with a volume surge, and the prior RTH close marked as the next reference | market-structure-worked-example-onl-break.png]

## Common misreadings

- **"A move is a move, whenever it happens."** Overnight and RTH moves are built by different crowds on different volume. Weight them accordingly.
- **"The trading day starts at midnight."** For CME futures the exchange day starts at 18:00 New York time the prior evening. Daily bars and day-anchored tools reset there, not at 00:00.
- **"My chart is broken — it shows different candles than my colleague's."** Check the **ETH Session** / **RTH - only** setting first. An RTH-only chart and a full-session chart of the same market legitimately disagree — different bars, different highs and lows, different profiles.
- **"There's a huge gap — something crashed."** If the gap sits exactly at a quarterly roll, it is likely the price difference between contract months, not a market event. An Adjusted continuous-contract mode removes it; see [[price-chart-settings]].
- **"My feed died at 17:30."** For CME instruments that is the daily maintenance pause, not an outage. Data resumes at 18:00 New York time.

## Go deeper

Session structure is the stage; auction theory is the play. Read [[understanding-auction-theory]] for how balance, imbalance and acceptance work within and across sessions, and [[understanding-volume-profile]] for the session-anchored profile tools that make structure visible. When you are ready to keep contracts current in practice, [[symbol-rollover]] is the how-to. Unfamiliar terms are collected in the [[glossary]].

## Related articles

- [[chart-display-options]]
- [[price-chart-settings]]
- [[symbol-rollover]]
- [[understanding-auction-theory]]
- [[understanding-volume-profile]]
- [[glossary]]
