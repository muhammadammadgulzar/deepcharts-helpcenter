---
title: "Session Imbalance"
slug: "session-imbalance"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Reference for the Session Imbalance indicator: Initial Balance high, low and midpoint plus 50% and 100% extension levels, with every setting and alert explained."
keywords: ["session imbalance", "initial balance", "IB high", "IB low", "initial balance extensions", "first hour range", "opening range indicator", "session imbalence"]
---

The Session Imbalance indicator highlights the key price levels created in the first hour of trading — or any custom period you define. It plots the Initial Balance High, Initial Balance Low and the Midpoint between them, and can add optional 50% and 100% extension levels above and below the range.

The Initial Balance is a cornerstone of auction-based day trading: the range built during the opening period frames how the rest of the session is read. For the theory behind it, see [[understanding-auction-theory]] and [[understanding-market-structure-sessions]].

## What it is

At the start of each session the indicator measures the high and low printed during the configured number of minutes (60 by default) and projects those levels — plus the midpoint — across the rest of the session. Extension levels at 50% and 100% of the Initial Balance range can be projected beyond the high and low, giving you pre-computed targets for breakout days.

## When to use it

- To frame the trading day: rotation inside the Initial Balance versus extension beyond it.
- To get ready-made breakout targets (50% and 100% extensions) without manual measuring.
- To study how many recent sessions respected or extended their opening range, by loading multiple days.
- To be alerted when price takes out the Initial Balance extremes or reaches an extension level.

## Quick start

1. Add **Session Imbalance** to your chart.
2. Keep **Number of Minutes** at its default of 60 for the classic first-hour Initial Balance.
3. Set **Number of Days (0 - All)** to a small number (for example 5) while you learn the tool — 0 draws every available session and can crowd the chart.
4. Enable the **50%** and **100%** extension levels if you want breakout targets plotted automatically.
5. Turn on the alert groups you care about — Initial Balance extremes, 50% levels, 100% levels — and pick a sound for each.

[SCREENSHOT: An intraday futures chart with the Session Imbalance indicator plotting Initial Balance High, Low and Mid lines for the first 60 minutes, with 50% and 100% extension levels visible above and below | session-imbalance-initial-balance-chart.png]

## How to read it

The Initial Balance is the market's opening auction range. Price holding inside it signals a balanced, rotational session where fading the extremes is the classic play. A clean break and hold beyond the IB High or IB Low signals range extension — a directional session — and the 50% and 100% extensions become natural targets: the 100% extension is a full projection of the opening range beyond the broken side.

The **Mid** line matters intraday too: it often acts as the pivot between the buyers' and sellers' halves of the opening range, and reactions there tell you which side is in control.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Number of Minutes** | Duration of the period used to calculate the session imbalance. Default: 60 minutes (the classic Initial Balance). |
| **Custom Start Time** | When enabled, lets you set your own start time; when disabled, the calculation begins at the session open (for U.S. futures, 00:00 Central European Time). |
| **Number of Days (0 - All)** | How many sessions to display. 0 shows all available sessions. |

### Plot Settings

| Setting | What it does |
|---|---|
| **High Color** / **Low Color** / **Mid Color** | Colors of the three primary lines. |
| **Line Width** | Thickness of the plotted lines. |
| **Line Style** | Solid, Dashed, Dotted and other styles. |
| **Text Size** / **Text Alignment** | Size and placement of the level labels. |

### Extension Levels

| Setting | What it does |
|---|---|
| **50% Extensions** | Toggles the 50% extension levels, with a dedicated color selection. |
| **100% Extensions** | Toggles the 100% extension levels, with a separate color selection. |

### Alerts

Three alert categories, each with popup and sound options and a selectable sound type:

- **HH/LL Alerts** — fire when price takes out the Initial Balance extremes.
- **50% Level Alerts** — fire at the 50% extension thresholds.
- **100% Level Alerts** — fire at the 100% extension thresholds.

[SCREENSHOT: The Session Imbalance settings dialog showing the General group with Number of Minutes set to 60, Custom Start Time and Number of Days fields | session-imbalance-settings-dialog.png]

## Tips and common mistakes

- **Verify the start time against your instrument.** If your market's session open does not match the default, enable **Custom Start Time** and set it explicitly — an Initial Balance measured from the wrong open is worse than none.
- **Do not treat every extension touch as a reversal.** On strong trend days price can run through the 50% level and tag the 100% extension; read the levels together with the day's structure.
- **Limit the days displayed.** **Number of Days** at 0 loads every session, which is useful for studies but heavy for live trading charts.
- **Use the alerts instead of watching lines.** The three alert groups cover the meaningful events; let them do the monitoring.

## Related articles

- [[understanding-auction-theory]]
- [[understanding-market-structure-sessions]]
- [[market-profile-tpo]]
- [[session-marker]]
- [[different-types-of-input]]
- [[indicator-layout]]
