---
title: "Different Types of Input Data for Indicators"
slug: "different-types-of-input"
category: "Indicators & Analysis"
subcategory: "Indicator Basics"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "What the Volume, Order and Aggregate input data types mean and how they change what your orderflow indicators count."
keywords: ["input data", "data settings", "volume vs aggregate", "aggregate trades", "MBO", "market by order", "big trades missed order", "input type"]
---

Nearly every orderflow indicator in DeepCharts — Deep Print, the Deep Profile family, Big Trades, the delta tools and more — has an **Input Data** setting in its **Data Settings** section. This one dropdown decides what the indicator actually counts, and it is the single most common reason two traders looking at "the same" indicator see different numbers.

Understanding the input types takes five minutes and will save you hours of confusion later.

## What it is

**Input Data** selects the source data an indicator is built from. The same candle can be measured as raw exchange transactions (**Volume**), as order-book events (**Order**), or as trades reconstructed by DeepCharts into their original size (**Aggregate**). Many indicators also offer **Number of Trades**, which counts executions instead of contracts.

The choice matters because exchanges do not report trades the way most people imagine. When one buyer takes 30 contracts that were offered by three separate sellers of 10 contracts each, the raw feed records three separate transactions of 10 — not one trade of 30.

You can watch this raw execution stream live below — every print is one recorded transaction, exactly what the **Volume** input type counts.

[WIDGET: tape-lab]

## When to use it

- An indicator "missed" an obviously large trade — the order was probably split across executions and each piece fell below your threshold.
- Your numbers differ from another trader's chart — always compare **Input Data** types first.
- You want order-level detail (which passive orders were consumed) — that requires the **Order** type and an MBO-capable feed.
- You want to detect institutions that deliberately split large orders into many small ones — that is exactly what **Aggregate** was built for.

## Quick start

1. Open the settings of any orderflow indicator (Deep Print, Deep Profile, Big Trades, and so on).
2. Go to the **Data Settings** section.
3. Open the **Input Data** dropdown and pick a type using the table below.
4. Apply and compare — different input types can produce visibly different results on the same candles.

[SCREENSHOT: An indicator settings dialog (e.g. Deep Print) open at the Data Settings section with the Input Data dropdown expanded, showing the Volume, Order and Aggregate entries | input-data-dropdown.png]

## How to read it

**Volume** is the raw per-transaction record from the exchange. Every individual execution is stored separately, covering both passive and aggressive participation. The 30-contract example above becomes three transactions of 10 — so a Big Trades indicator with a minimum size of 30 skips it entirely, because no single transaction meets the threshold.

**Order** works only with MBO (Market by Order) data feeds and exposes order-level granularity. In the [[adv-time-and-sales|Advanced Time And Sales]] window, the **List** column shows the top two largest passive orders that were consumed by an aggressor. Even Order data has a blind spot, though: large institutions often split intentionally — for example, sending 100 separate orders of 5 contracts instead of one order of 500 — precisely to stay invisible to tools like this.

**Aggregate** is not delivered by any data feed; it is calculated by DeepCharts itself. The platform analyzes the transaction stream and reconstructs hidden large orders by linking executions that share the same aggressor ID across time and price. Because it is computed locally, it works with any data feed and does not require MBO.

[SCREENSHOT: Two identical footprint charts side by side, one with Input Data = Volume and one with Input Data = Aggregate, showing visibly different cell values on the same candles | volume-vs-aggregate-comparison.png]

## Settings reference

| Input type | What it counts | Feed requirement | Best for |
|---|---|---|---|
| **Volume** | Raw exchange transactions; every execution recorded separately | Any feed | Total activity per price; the "classic" reading |
| **Order** | Order-book level data — e.g. the largest passive orders consumed by an aggressor | MBO-capable feed only | Seeing which resting orders were hit |
| **Aggregate** | Executions re-linked by shared aggressor ID into their original order size | Any feed (calculated by DeepCharts) | Detecting deliberately split institutional orders |
| **Number of Trades** | The count of executions per price, not contract volume (offered by many indicators) | Any feed | Trade-frequency analysis |

## Tips and common mistakes

- **"Big Trades didn't mark a huge order."** With Input Data = Volume, a split order is counted as its component executions, each below your minimum. Switch to **Aggregate** so DeepCharts reconstructs the original size.
- **"Order input shows nothing."** Your feed is not delivering MBO data. CQG feeds do not provide MBO; dxFeed requires the DOM type to be set to MBO; Rithmic feeds provide it. See [[connect-data-feed]] for feed configuration.
- **Comparing charts with another trader?** Ask about Input Data before anything else — then filters, then tick grouping.
- Different input types produce genuinely different shapes on profile indicators. Neither is "wrong"; they measure different things.

## Related articles

- [[indicator-layout]]
- [[orderflow-101]]
- [[deep-print]]
- [[big-trades]]
- [[adv-time-and-sales]]
- [[deep-profile]]
