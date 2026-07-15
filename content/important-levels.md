---
title: "Important Levels"
slug: "important-levels"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Automatically plots prior daily, weekly and monthly highs, lows, opens, closes, POCs, value areas and VWAPs as labeled reference levels on your intraday chart."
keywords: ["important levels", "key levels", "previous day high", "previous day low", "PDH", "PDL", "prior close", "weekly high low", "POC level", "value area", "VWAP level", "levels indicator"]
---

The Important Levels indicator highlights the most significant reference prices of previous periods directly on your intraday chart: highs, lows, opens, closes, POCs, value areas, VWAPs and averages, across daily, weekly and monthly timeframes. Instead of drawing and updating a dozen horizontal lines every morning, you enable the levels you care about once and the indicator maintains them automatically.

These are the prices most participants watch — prior day high and low, last week's close, the monthly POC — which makes them recurring locations for reactions, breaks and retests.

## What it is

Important Levels is an automated multi-timeframe levels indicator designed for intraday charts. For each enabled period (day, week, month) it plots the prior period's key statistics as labeled lines and keeps them current as new periods begin. It answers the question "where are the reference prices from higher timeframes sitting relative to price right now?"

[SCREENSHOT: Intraday chart with Important Levels applied — labeled horizontal lines for the previous day's high, low, close, POC and VWAP in distinct colors, with price trading between the prior day POC and high | important-levels-chart-overview.png]

## When to use it

- You prepare a session plan and want yesterday's, last week's and last month's key prices marked without manual drawing.
- You trade breakouts and retests of prior highs/lows — the most commonly watched liquidity locations.
- You combine price-based levels (high, low, open, close) with volume-based ones (POC, value area, VWAP) to find confluence zones.
- You run several instruments and cannot maintain hand-drawn levels on every chart.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Important Levels** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. In the length settings, set **Days** to **1**, and **Weeks** and **Months** to **1** each — one prior period per timeframe is plenty to start.
5. In the enabled-levels section, start with **High**, **Low**, **Close** and **POC** for the daily period only; add weekly and monthly levels once the chart still reads clean.
6. Set **Plot Type** to **Label and Line** so every line carries a name, choose distinct colors per level type, then apply.

[SCREENSHOT: Important Levels settings dialog showing the Length section (Days, Weeks, Months, Skip Last), Plot Settings with the Plot Type dropdown open (Label, Line, Label and Line), the per-period level toggles (Average Value, Low, High, Open, Close, POC, Value Area, VWAP), the color settings, and the Filter Time dropdown | important-levels-settings-dialog.png]

## How to read it

- **Prior highs and lows are liquidity magnets.** Stops and breakout orders cluster beyond them, so expect acceleration on the break and frequent reactions on the first test. These are the levels to have marked before the open.
- **Prior close and open define the gap.** Price trading far from the prior close means an open gap; many session strategies revolve around whether that gap fills or extends.
- **POC and value area describe accepted value.** The prior period's Point of Control is where the most volume traded; the value area brackets the bulk of that business. Price re-entering an old value area tends to rotate through it, while rejection at its edge signals the market is treating old value as support or resistance. See [[understanding-volume-profile]] for the underlying concept.
- **VWAP levels carry institutional weight.** A prior period's VWAP is a benchmark average price; reactions there often reflect participants defending or unwinding around their average. See [[understanding-vwap]].
- **Confluence is the real signal.** A prior weekly low sitting on the monthly value area edge is a much stronger zone than either level alone.

## Settings reference

Grouped as in the settings dialog.

### Length Settings

| Setting | What it does |
|---|---|
| **Days** | How many previous days' levels to display. |
| **Weeks** | How many previous weeks' levels to display. |
| **Months** | How many previous months' levels to display. |
| **Skip Last** | When enabled, excludes the current (still-forming) period's values, so only completed periods are plotted. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Font Size** | Size of the level label text. |
| **Plot Type** | **Label** (text only), **Line** (horizontal lines only), or **Label and Line** (both). |
| **Text Align** | Label positioning: **Left**, **Right**, **Current to Right** or **Current to Last**. |

### Enabled Levels (per period)

For each timeframe — daily, weekly, monthly — you can individually toggle:

| Level | What it marks |
|---|---|
| **Average Value** | The period's average value level. |
| **Low / High** | The period's low and high. |
| **Open / Close** | The period's opening and closing prices. |
| **POC** | The period's Point of Control — the price with the highest traded volume. |
| **Value Area** | The period's value area boundaries. |
| **VWAP** | The period's volume-weighted average price. |

### Color Settings

Customizable colors for **Low**, **High**, **Open**, **Close**, **Mid Point**, **POC**, **Value Area** and **VWAP**.

### Filter Time

| Setting | What it does |
|---|---|
| **Filter Time** | Trading session used to build the levels: **None**, **ETH**, **RTH**, or **Custom**. With **Custom**, you set start and end times based on the exchange time zone. |

> **Note:** The session filter changes the levels themselves, not only their display — an RTH-only prior day high can differ substantially from the full-session (ETH) high. Pick the session your strategy actually references.

## Tips and common mistakes

- **Enable levels progressively.** Turning on every level for every period creates a wall of lines. Start with the daily levels you actually trade and add higher-timeframe levels only where they earn their place.
- **Use color to encode timeframe.** Give daily, weekly and monthly levels distinct color families so you instantly know a level's weight when price approaches it.
- **Decide on ETH vs RTH deliberately.** Futures traders commonly plan off RTH levels while the market trades ETH overnight; mismatched session settings are the usual reason "the prior high looks wrong." See [[understanding-market-structure-sessions]].
- **Use Skip Last to avoid moving targets.** With the current period included, levels shift as the period develops; enabling **Skip Last** keeps the map fixed to completed periods.

## Related articles

- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[understanding-market-structure-sessions]]
- [[pivot-points]]
- [[different-types-of-input]]
- [[indicator-layout]]
