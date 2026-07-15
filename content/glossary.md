---
title: "Glossary of Orderflow and Platform Terms"
slug: "glossary"
category: "Concepts"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "7 min read"
description: "Short definitions of every orderflow, auction, market-structure and DeepCharts platform term used across the Help Center, with links to the full articles."
keywords: ["glossary", "definitions", "what is delta", "what is POC", "orderflow terms", "footprint terms", "trading dictionary", "what does imbalance mean", "MBO vs MBP", "RTH ETH meaning"]
---
Every specialist field compresses its ideas into shorthand, and orderflow trading is worse than most. This page defines the terms used across the DeepCharts Help Center in one or two sentences each, grouped by theme, with a link to the article that explains each idea properly.

Use it as a lookup, not a course — the linked articles carry the substance. If you are starting from zero, read [[orderflow-101]] first and return here whenever a term stops you.

## How to use this glossary

Terms are grouped into five sections: orderflow basics, footprint and imbalance, profiles and auction structure, market structure and data, and platform terms. Within each group, related terms sit next to each other so you can read a group top to bottom as a micro-primer.

## Orderflow basics

- **Orderflow** — The study of the actual orders behind price movement: executed trades, their aggressor side, and the resting liquidity they trade into. Foundation article: [[orderflow-101]].
- **Bid** — The highest price at which resting buyers are currently willing to buy. A trade printing at the bid was initiated by an aggressive seller.
- **Ask (offer)** — The lowest price at which resting sellers are currently willing to sell. A trade printing at the ask was initiated by an aggressive buyer.
- **Spread** — The gap between the best bid and the best ask; in liquid futures such as ES it is usually one tick.
- **Limit order** — A resting order to buy or sell at a stated price or better; limit orders make up the book that aggressors trade into.
- **Market order** — An order that executes immediately against whatever is resting at the best available price, crossing the spread to do so.
- **Aggressor** — The impatient side of a trade — the participant whose market order crossed the spread. Orderflow tools classify every trade by its aggressor; see [[orderflow-101]].
- **Delta** — Ask-traded volume minus bid-traded volume for a bar: the net balance of aggression. Plotted per bar by [[delta-bar]] and [[deep-delta]].
- **Cumulative delta** — Each bar's delta added to a running session total, used to compare the trend of aggression against the trend of price. See [[delta-cumulative-candlestick]].
- **Delta divergence** — Price making a new extreme that cumulative delta does not confirm (or vice versa) — a disagreement between effort and result worth attention.
- **Liquidity** — The resting orders available to trade against. A liquid price absorbs large orders with little movement; an illiquid one moves on small orders.
- **Tape (Time and Sales)** — The raw chronological list of every executed trade with its price, size and side. In DeepCharts this is the [[adv-time-and-sales|Advanced Time And Sales]] window.
- **Speed of tape** — How fast trades are printing — a proxy for urgency and participation. Measured by the [[speed-of-tape]] indicator.
- **Sweep** — A single aggressive order large enough to consume multiple price levels of resting liquidity at once. Large aggressive prints are isolated by [[big-trades]].
- **Iceberg** — A large limit order that displays only a small portion at a time, automatically reloading as it fills so its true size stays hidden. See [[understanding-icebergs-absorption]].
- **Absorption** — Heavy aggressive volume that fails to move price because a large passive player is taking the other side — often the earliest visible sign of a reversal. See [[understanding-icebergs-absorption]].
- **Exhaustion** — A move running out of participants: shrinking volume and aggression as price presses to a new extreme, leaving it vulnerable to reversal.
- **Initiative vs responsive** — Initiative activity attacks away from established value (breakout buying above value); responsive activity defends value (buying a dip back to it). Framework article: [[understanding-auction-theory]].

## Footprint and imbalance

- **Footprint** — A chart style that opens each bar to show traded volume at every price, split into bid-traded and ask-traded. Concept and reading practice: [[reading-a-footprint]]; the DeepCharts indicator is [[deep-print]].
- **Imbalance** — A footprint cell where one side's volume exceeds the other's by a set ratio, compared diagonally (ask volume at a price versus bid volume one tick below). Detected by [[imbalance-tracker]].
- **Stacked imbalance** — Several imbalances on consecutive prices in the same direction — a zone where one side was overwhelmed, often acting as support or resistance on revisit. See [[reading-a-footprint]].
- **Unfinished auction** — A bar or swing extreme that traded on both bid and ask (no zero print), suggesting the auction at that price never completed; such levels are common revisit candidates. Flagged by the [[unfinished-auction]] indicator.

## Profiles and auction structure

- **TPO (Time Price Opportunity)** — The building block of Market Profile: each price gets one mark per time bracket it traded in, so the profile shows where the market spent *time*. See [[market-profile-tpo]] and the [[profile-chart-window]].
- **Single print** — In a TPO profile, a price visited during only one time bracket — a mark of rapid, unaccepted movement that traders watch for later revisits.
- **POC (Point of Control)** — The single price with the most traded volume (or most TPOs) in a period — the market's consensus fair price. Concept: [[understanding-volume-profile]]; tracked live by [[dynamic-poc]].
- **Naked POC** — A prior session's POC that price has not traded back through since — a commonly watched future target.
- **Value area (VA), VAH, VAL** — The price band around the POC containing a set share of the period's volume (about 70% by convention); its edges are the Value Area High and Value Area Low. See [[understanding-volume-profile]].
- **HVN / LVN (high / low volume node)** — Secondary volume peaks (prices the market kept returning to) and the thin valleys between them (prices it rejected quickly). LVNs tend to be traversed fast; HVNs slow price down.
- **VWAP** — The Volume Weighted Average Price of the session: the average price paid, weighted by size, usually drawn with standard-deviation bands. See [[understanding-vwap]] and [[vwap-envelopes]].

## Market structure, contracts and data

- **RTH / ETH** — Regular Trading Hours (the main daytime session) versus Electronic Trading Hours (the full, nearly 24-hour session). Concept: [[understanding-market-structure-sessions]]; the chart toggle lives in [[chart-display-options]].
- **Session** — A defined trading period (RTH, overnight, or a custom window) used to anchor profiles, VWAP and daily statistics; custom windows are set in [[price-chart-settings]].
- **Front month** — The contract month where the volume currently lives — the one you should chart and trade.
- **Rollover** — Switching from the expiring futures contract to the next one as volume migrates ahead of expiry. In DeepCharts: [[symbol-rollover]].
- **Continuous contract** — A long chart history stitched together across contract months; adjusted modes remove the artificial price step at each roll. Setting reference: [[price-chart-settings]].
- **EOD (end-of-day) data** — Historical daily data loaded without a live streaming feed, useful for reviewing past price action. See [[end-of-day-data]].
- **Tick / volume / range bars** — Bar types that close after a set number of trades, a set traded volume, or a set price range, instead of after a fixed time. Configured in [[price-chart-settings]].
- **Level 1 vs Level 2** — Level 1 data carries trades and the best bid/ask only; Level 2 adds the depth ladder of resting orders at prices beyond the best. The DOM and depth features need Level 2 — see [[advanced-dom]].
- **MBO vs MBP** — Two Level 2 formats: Market By Order delivers every individual resting order (heavier, best for orderflow tools), Market By Price delivers only per-level totals (lighter on bandwidth). The choice appears as **DOM Type** in dxFeed connections — see [[connect-dxfeed]].
- **DOM (Depth of Market)** — The ladder of resting bid and ask liquidity at each price. In DeepCharts: the [[advanced-dom]] window and the [[depth-of-market]] indicator.

## Platform terms

- **Template** — One chart's saved configuration — indicators, styles, settings — reloadable on any chart. See [[templates-workspaces]]; the built-in one-click presets are covered in [[quick-chart-templates]].
- **Workspace** — Your entire saved screen layout: multiple windows, charts and their configurations. See [[templates-workspaces]].
- **Sim account** — A simulation account on the built-in **SIM** broker that fills orders against live chart data without real money. See [[simulation-accounts]].
- **Prop firm** — A proprietary trading firm that funds traders on its own capital, typically via an evaluation; prop-firm accounts connect to DeepCharts through feeds such as Rithmic or dxFeed. See [[compatibility-guide]] and [[connect-rithmic-prop-firm]].
- **Data feed** — The market-data connection that streams prices into the platform; every chart needs one. Setup overview: [[connect-data-feed]].

## Related articles

- [[orderflow-101]]
- [[understanding-volume-profile]]
- [[understanding-auction-theory]]
- [[understanding-market-structure-sessions]]
- [[reading-a-footprint]]
- [[welcome-to-deepcharts]]
