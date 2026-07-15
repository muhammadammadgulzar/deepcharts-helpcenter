---
title: "Understanding Volume Profile: POC, Value Area, HVN/LVN"
slug: "understanding-volume-profile"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "6 min read"
description: "What a volume profile shows, how POC, value area, HVN and LVN are defined, and how traders use them as support, resistance and targets."
keywords: ["volume profile", "POC", "point of control", "value area", "VAH", "VAL", "high volume node", "low volume node", "HVN", "LVN", "volume at price", "naked POC"]
---
A normal volume histogram tells you how much traded in each time bar. A volume profile rotates the question 90 degrees: how much traded at each price. That single change of axis turns raw volume into a map of where the market found agreement and where it found none — and that map is the basis for some of the most widely watched intraday levels in futures trading.

This article covers the concept. For the DeepCharts tools that draw profiles, see the See it in DeepCharts section below.

## The idea in one paragraph

Markets are auctions, and auctions spend the most time — and trade the most volume — at prices both sides consider fair. Picture a street market: one stall's price draws a crowd all day, while stalls priced too high or too low get only brief, hurried visits. A volume profile is the crowd map of a trading session: a horizontal histogram showing traded volume at every price. The longest bar is the price the market treated as fairest; thin bars are prices the market rejected quickly. Traders read that map to judge which prices will attract the market back and which it will race through.

## Why traders care

- **Profiles rank prices by evidence.** A level where 40,000 contracts changed hands is structurally different from one that traded 900 — the profile makes that difference visible.
- **The POC acts as a magnet and reference.** Price tends to gravitate back toward the session's highest-volume price, and prior-session POCs are common reaction levels.
- **Value area edges frame the day.** Trading back inside the value area suggests rotation; acceptance outside it suggests a trending move.
- **LVNs mark fast lanes.** Price tends to traverse low-volume zones quickly, which helps with target placement and stop placement alike.

## How it works

### Building the profile

Take every trade in a chosen period — a session, a week, a swing — and bucket its volume by price. Drawn sideways along the price axis, the result is the profile. Three structures matter:

- **POC (Point of Control):** the single price with the highest traded volume in the period. The market's consensus fair price for that period.
- **Value Area (VA):** the price band around the POC containing a set percentage of the period's total volume — by convention usually about 70%. Its edges are the **VAH** (Value Area High) and **VAL** (Value Area Low).
- **HVNs and LVNs:** high volume nodes are secondary volume peaks — prices the market kept returning to; low volume nodes are the valleys between them — prices the market rejected.

[SCREENSHOT: A session volume profile beside an ES price chart, annotated with callouts on the POC (longest row), the shaded value area with VAH and VAL boundary lines, one HVN bulge and one LVN gap between volume clusters | volume-profile-anatomy-annotated.png]

### How each structure trades

- **POC:** behaves like a magnet while the market is in balance. Price wandering away from the POC on quiet volume often rotates back to it. A prior session's POC that price never revisited (often called a naked POC) stays on many traders' watchlists as a future target.
- **VAH/VAL:** the boundary between accepted and rejected prices. A common framework: if price opens outside the prior value area and trades back inside, it often rotates across to the other side of the value area; if price leaves the value area and holds outside it, the market may be trending to build value at new prices.
- **HVN:** support and resistance built from actual participation. Price tends to slow, chop, or reverse inside these zones because committed positions live there.
- **LVN:** the opposite — with little prior business at those prices, there is little to slow price down, so LVNs tend to be traversed quickly. They make poor places to expect a bounce and useful reference points for stops (beyond the node) and targets (the far side of the node).

### The math (optional)

The value area is typically computed by starting at the POC and expanding outward, repeatedly adding the neighbouring price row (or pair of rows) with the greater volume, until the accumulated volume reaches the chosen percentage of the period total. The 70% convention loosely mirrors one standard deviation of a normal distribution (~68%), treating the profile as a bell curve over price. Exact algorithms and the percentage are configurable in most tools, so two platforms can print slightly different VAH/VAL from identical data.

> **Note:** A profile is only as meaningful as the period it covers. A 30-minute profile and a weekly composite of the same market will disagree — decide first which auction you are analysing.

## See it in DeepCharts

- [[deep-profile|Deep Profile]] — the core volume/delta profile indicator drawn on the chart.
- [[deep-profile-swing]] — profiles anchored to swings rather than fixed sessions.
- [[deep-profile-values]] — plots profile-derived levels such as POC and value area boundaries.
- [[profile-chart-window]] — the dedicated window for TPO and volume profiles.
- [[market-profile-tpo]] — the time-based (TPO) counterpart to the volume profile.
- [[dynamic-poc]] — tracks the developing POC as it migrates through the session.
- [[bar-poc]] — marks the highest-volume price inside each individual bar.
- [[quick-chart-templates]] — ready-made profile chart layouts (D-VP, W-VP and similar).

## Worked example

Suppose yesterday's ES session built its POC at 5,290.00 with a value area of 5,283.00–5,296.00, and today opens at 5,302.00 — above yesterday's VAH (numbers illustrative). In the first half hour, sellers push price back under 5,296.00 and it holds inside the old value area. That open-above-then-reacceptance pattern suggests the overnight markup found no business, and many traders would now look for rotation down through the value area toward the 5,290.00 POC, then watch behavior there: a fast bounce keeps the balanced-day story alive; acceptance below VAL at 5,283.00 opens the door to a downside trend day. Notice how every decision point in that plan is a profile structure, not a guess.

[SCREENSHOT: Intraday ES chart with yesterday's profile overlaid, annotated with the open above VAH, the re-entry into value, and an arrow path toward the POC labelled with the rotation logic | volume-profile-worked-example-va-rotation.png]

## Common misreadings

- **"Price always bounces at the POC."** The POC is a reference, not a wall. In a strong trend, price slices through old POCs; context decides.
- **"The value area is an exact science."** Different tools, percentages and grouping settings shift VAH/VAL by a few ticks. Treat them as zones, not lines.
- **"A profile from any random period is meaningful."** Profiles describe a specific auction. A profile that spans half of one session and half of another describes nothing.
- **"Volume profile and TPO profile are the same."** They often agree but measure different things — contracts traded versus time spent. See [[market-profile-tpo]].

## Go deeper

Volume profile is auction theory made visible; read [[understanding-auction-theory]] for the framework behind acceptance and rejection, and [[understanding-vwap]] for the other widely watched "fair price" reference and how it differs from the POC. Session boundaries change what a profile means — [[understanding-market-structure-sessions]] covers RTH versus ETH.

## Related articles

- [[deep-profile]]
- [[profile-chart-window]]
- [[market-profile-tpo]]
- [[understanding-auction-theory]]
- [[understanding-vwap]]
- [[glossary]]
