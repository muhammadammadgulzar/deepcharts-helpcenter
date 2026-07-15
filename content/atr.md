---
title: "Average True Range (ATR)"
slug: "atr"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Reference for the Average True Range (ATR) indicator in DeepCharts: what it measures, the Display Mode and Periods settings, and how to size stops with volatility."
keywords: ["ATR", "average true range", "true range", "volatility indicator", "atr stop", "wilder atr", "avarage true range", "atr indicator"]
---
The ATR (Average True Range) is a technical analysis indicator developed by J. Welles Wilder in the 1970s to measure the volatility of an asset. It shows the magnitude of price change over a specified timeframe — in plain terms, how much the instrument typically moves per bar.

ATR says nothing about direction. A rising ATR means bigger bars (in either direction); a falling ATR means the market is quieting down. That single number is the backbone of volatility-aware stop placement and position sizing.

## What it is

ATR answers the question: how much does this market actually move right now? It averages the "true range" of each bar — a range measure that also accounts for gaps between bars, not only the bar's own high-to-low span — over a chosen number of periods, and plots the result as a line in a panel below the price chart.

[SCREENSHOT: Price chart with the ATR indicator in a lower panel, ATR line rising sharply during a volatile sell-off and drifting lower during quiet consolidation | atr-on-chart.png]

## When to use it

- Sizing stops — placing a stop a multiple of ATR away keeps it outside normal noise for the current volatility.
- Position sizing — risking a fixed amount per ATR unit normalizes risk across quiet and fast markets.
- Regime awareness — a glance at ATR tells you whether today's market justifies your usual targets.
- Filtering signals — many strategies skip entries when ATR is unusually low (no follow-through) or unusually high (uncontrollable risk).

## Quick start

1. Open a price chart — see [[first-chart]].
2. Click the green **Indicators** button (or press **Ctrl I**) to open the **Indicator List**.
3. Search for **Average True Range** and click **+** to add it. It appears in its own panel below the price.
4. Click the gear icon to open its settings.
5. Wilder's classic lookback of 14 periods is the conventional starting point; shorten it for a faster read on current conditions, lengthen it for a smoother baseline.

[SCREENSHOT: ATR settings dialog open showing the Display Mode selection (Tick or Periods), the periods field, and the Subgraph styling options below | atr-settings-dialog.png]

## How to read it

- **Absolute level.** ATR is expressed in the instrument's own price units, so an ATR of 12 on one instrument and 0.5 on another are not comparable directly — compare each instrument against its own history.
- **Rising ATR** — expanding bars, often around news, breakouts or panics. Wider stops and smaller size are appropriate.
- **Falling ATR** — contracting range. Tighter markets often precede expansions, but low ATR itself is not a directional signal.
- **ATR multiples as distance.** "2 × ATR" is a common stop distance and "1 × ATR" a common intraday target unit — the multiple matters less than being consistent about it.

## Settings reference

### Parameters

| Setting | What it does |
|---|---|
| **Display Mode** | Selects between **Tick** and **Periods** display options. [CONFIRM: exact behavior of Tick vs Periods display mode] |
| Periods | The number of periods used in the ATR calculation. Fewer periods track current volatility closely; more periods smooth the line. |
| **Indicator Model** | Model configuration for the indicator's calculation. [CONFIRM: available Indicator Model options and default] |

### Subgraphs

| Setting | What it does |
|---|---|
| Color | Primary color of the ATR line. |
| Secondary color | Optional secondary color application. |
| **Subgraph Style** | Display style of the series. [CONFIRM: exact Subgraph Style option names in the dialog] |
| **Line Style** | Line rendering — Solid, Dashed, Dotted, and similar variations. |
| **Line Width** | Thickness of the indicator line. |

## Tips and common mistakes

- **Never read ATR as direction.** ATR rises in crashes and rallies alike; it measures movement size only.
- **Recalibrate stops when ATR shifts.** A stop distance chosen in a quiet regime is noise-bait after volatility doubles — re-derive it from current ATR, not from memory.
- **Do not compare raw ATR across instruments.** Normalize (for example, ATR as a percentage of price) before comparing volatility between markets.
- **ATR feeds other tools.** The [[keltner-channel]] bands and [[super-trend]] both build directly on ATR — understanding ATR first makes those indicators far easier to tune.

## Related articles

- [[keltner-channel]]
- [[bollinger-bands]]
- [[standard-deviation]]
- [[super-trend]]
- [[different-types-of-input]]
- [[indicator-layout]]
