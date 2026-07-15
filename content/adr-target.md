---
title: "Average Daily Range Target (ADR Target)"
slug: "adr-target"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Projects intraday price targets from the average daily range of recent sessions so you can set statistically grounded profit targets and spot exhaustion zones."
keywords: ["ADR", "ADR target", "average daily range", "daily range projection", "range target", "intraday targets", "expansion target", "average range indicator"]
---

The Average Daily Range Target (ADR Target) calculates the average price movement — high to low — of an instrument over a set number of days and projects that range forward as potential intraday price targets. Instead of guessing how far today's move can travel, you measure it against what the instrument has actually done recently.

That makes it a volatility ruler: when price has already covered its typical daily distance, the odds of further expansion drop, and your profit targets and risk decisions can reflect that.

## What it is

ADR Target is a statistical level indicator. It averages the high-to-low range of the last N periods (daily bars by default, with weekly and monthly options) and draws that expected range on your chart as labeled target levels. It answers the questions "how far does this market usually move in a day?" and "how much of that move has already happened?"

[SCREENSHOT: Chart window with ADR Target applied — intraday price candles with the projected ADR target levels and their text labels visible on the chart, price trading roughly midway to the upper target | adr-target-chart-overview.png]

## When to use it

- You want realistic daily expansion targets instead of arbitrary round-number goals.
- You want to estimate intraday exhaustion zones — areas where the day has already traveled its statistically typical distance.
- You manage profit targets by statistics: taking profit inside the average range rather than hoping for an outlier day.
- You tend to overtrade late in the day — ADR shows when the market has likely spent its typical volatility budget.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **ADR Target** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. Set **Length Type** to **Daily** — this calculates the ADR from daily bars, the standard reading.
5. Set **Length** to **10** so the average uses the last 10 trading days.
6. Adjust **Font Size**, **Text Align**, **Background** and **Text Color** under the plot settings until the labels are readable on your color scheme, then apply.

[SCREENSHOT: ADR Target settings dialog showing the Length Type dropdown open with Daily, Weekly and Monthly options, the Length field set to 10, and the plot settings (Font Size, Text Align, Background, Text Color) below | adr-target-settings-dialog.png]

## How to read it

The projected levels represent the distance the instrument covers on an average day. [CONFIRM: which price the ADR targets are projected from — session open, current day high/low, or previous close]

- **Price well inside the ADR:** the day still has statistical room to expand. Trend continuation targets within the remaining range are reasonable.
- **Price approaching a full ADR extension:** the day has traveled its typical distance. This is a natural profit-taking zone and a poor place to initiate fresh breakout trades — most days do not exceed their average range.
- **Price exceeding the ADR:** you are in an outlier session, usually driven by news or a genuine regime change. Treat the levels as informational, not as a hard ceiling.

The Length Type changes the horizon: **Weekly** and **Monthly** average the range of weekly and monthly bars, producing wider targets suited to swing planning rather than intraday execution.

## Settings reference

Grouped as in the settings dialog.

### Calculation

| Setting | What it does |
|---|---|
| **Length Type** | Bar size used for the range average: **Daily** (calculates ADR using daily bars), **Weekly** or **Monthly**. |
| **Length** | Number of previous periods used to calculate the average range. Example: **Length = 10** with Daily uses the last 10 trading days. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Font Size** | Adjusts the size of the ADR label text on the chart. |
| **Text Align** | Aligns the labels to the **Left** or **Right** of the level. |
| **Background** | Background color of the label. |
| **Text Color** | Color of the label text. |

## Tips and common mistakes

- **Match Length to the current regime.** A short Length (5–10 days) adapts quickly after a volatility shift; a longer Length smooths out one-off news days. If the market recently changed character, a long average will lag reality.
- **ADR is a probability, not a wall.** Price exceeds its average range on outlier days by definition. Never fade a strong move only because ADR is "full" — combine it with structure and orderflow confirmation.
- **Do not use Weekly/Monthly targets for scalping.** They describe multi-day ranges; on an intraday chart they will sit far from price and tempt you into oversized targets.
- **Check the session context.** Holiday sessions and half days compress ranges and drag the average down for the following days. See [[understanding-market-structure-sessions]] for how sessions shape the numbers.

## Related articles

- [[atr]]
- [[standard-deviation]]
- [[understanding-market-structure-sessions]]
- [[different-types-of-input]]
- [[indicator-layout]]
