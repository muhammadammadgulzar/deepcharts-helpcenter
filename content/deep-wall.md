---
title: "Deep Wall"
slug: "deep-wall"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "3 min read"
description: "ES-only detector of passive order walls that absorb aggressive orders and cause price rejection — a signature of hidden iceberg orders."
keywords: ["deep wall", "iceberg detector", "order wall", "ES indicator", "liquidity wall", "deep wall no signals", "deep wall never triggers"]
---

Deep Wall is a specialized indicator developed by the DeepCharts team specifically for ES charts. It monitors price behavior at key levels and flags moments when a wall of passive orders absorbs incoming aggressive orders and triggers a price rejection — the classic signature of a hidden iceberg order.

It is deliberately a low-frequency tool. Signals appear only a few times per week or even per month, mostly in low-liquidity environments such as the London session. If it has been quiet for days, that is normal behavior, not a malfunction.

## What it is

Deep Wall answers one question: "did a large passive player defend this price?" When aggressive orders repeatedly hit a level and the resting liquidity there keeps absorbing them until price rejects, Deep Wall marks the event. Because that pattern typically comes from iceberg orders — large orders shown to the market in small slices — the signal points at hidden institutional liquidity.

> **Warning:** Deep Wall is built for **ES** charts specifically. Applying it to other instruments will not give meaningful signals.

[SCREENSHOT: ES chart with a Deep Wall detection visible — the marked level where price repeatedly hit resting liquidity and rejected, with the Deep Wall signal highlighted | deep-wall-es-signal.png]

## When to use it

- You trade ES and want alerts for hidden iceberg activity without watching the DOM all session.
- You look for high-probability rejection/reversal spots backed by real passive absorption.
- You trade low-liquidity windows (for example the London session) where wall behavior is most visible.
- You want an independent confirmation layer on top of tools like [[deep-trades]] or the DOM.

## Quick start

1. Open an **ES** chart.
2. Open the **Indicator List**, locate **Deep Wall** and click **+** to add it.
3. Click the **Settings** icon next to Deep Wall.
4. Set up an alert so you do not miss the rare detections: go to **Options → Settings → Add Alert** and configure the **Alert Sound** and **Message Popup** for Deep Wall events.

[SCREENSHOT: Deep Wall settings dialog together with the Options → Settings → Add Alert screen showing an alert configured with Alert Sound and Message Popup enabled for Deep Wall | deep-wall-settings-alert.png]

## How to read it

A Deep Wall detection means aggressive flow ran into passive liquidity that refused to break — absorption followed by rejection. Treat the marked level as defended:

- **Rejection trades**: the detection itself argues for a move away from the wall; many traders use it as a reversal or fade location.
- **Level memory**: a level a large player defended once often matters again on a retest.
- **Failure is information too**: if price later breaks cleanly through a detected wall, the defender is gone — that break carries its own signal.

Because signals are rare, each one carries weight. Do not dilute the tool by expecting several per session.

## Settings reference

Deep Wall's detection logic is preconfigured; the user-facing settings center on notifications.

| Setting | What it does |
|---|---|
| **Alert Sound** | Plays a sound when a Deep Wall event triggers. Configure via **Options → Settings → Add Alert**. |
| **Message Popup** | Shows a popup message on detection so the event is not missed. |

## Tips and common mistakes

- **"It never triggers" is usually normal.** A few signals per week or month is the design. Patience is part of the tool.
- **Check the symbol first.** If you see nothing for a long time, confirm the indicator is applied to an ES chart — it is ES-specific.
- **Always configure the alert.** With signals this infrequent, an unwatched chart means missed detections.
- **Confirm with context.** Combine a detection with orderflow context — the tape, [[deep-stats]] absorption reads, or footprint structure in [[deep-print]] — before committing to a trade.

## Related articles

- [[understanding-icebergs-absorption]]
- [[orderflow-101]]
- [[deep-trades]]
- [[big-trades]]
- [[different-types-of-input]]
- [[indicator-layout]]
