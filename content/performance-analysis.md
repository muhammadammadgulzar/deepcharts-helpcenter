---
title: "Performance Analysis (Signal Performance)"
slug: "performance-analysis"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Generate trading statistics per account: equity curve, drawdown, per-trade detail, symbol breakdown and profitability by hour."
keywords: ["performance analysis", "signal performance", "strategy report", "show reports", "trading statistics", "equity curve", "drawdown", "run-up", "trade list", "time analysis", "export csv", "win rate"]
---
The Strategy Report turns an account's trade history into statistics: total profit and drawdown, a per-trade list, a per-symbol breakdown, an equity curve, and a profitability-by-hour view that shows which hours of the day actually make you money.

One naming quirk up front: you open it from the menu as **Strategy Report**, but the window itself is titled **Signal Performance**. Same feature — do not go looking for a second tool.

## What it is

A report generator for any connected account (including SIM). You pick the broker, account, date range and symbols, click **Generate Report**, and get five sections of analysis over exactly those trades. Because it works per account, it is equally useful for reviewing a live prop account and for measuring a strategy you have been testing on SIM.

[SCREENSHOT: The Signal Performance window opened via Trading → Strategy Report, showing the Broker and Account selectors, the date range and symbol filters in the top-right, and the Generate Report button | signal-performance-window.png]

## When to use it

- **Weekly or monthly review** — measure win rate, drawdown and commissions over a period instead of trusting memory.
- **Comparing instruments** — the Symbol Performance section shows which markets pay you and which bleed you.
- **Finding your hours** — Time Analysis reveals the hours of the day where your trading is profitable and the hours you should sit out.
- **Validating a SIM strategy** — generate the same report on the SIM account before taking a strategy live; see [[simulation-accounts]].

## Quick start

1. Click **Trading → Strategy Report** in the main bar. The **Signal Performance** window opens.
2. Choose the **Broker** and the **Account** to analyze.
3. Use the scroll wheel in the top-right corner to pick the date range and the symbols to include.
4. Click **Generate Report**.
5. To take the data elsewhere (spreadsheet, journal), click **Export CSV**.

[SCREENSHOT: The top-right filter area of the Signal Performance window with the date range and symbol selection controls visible | signal-performance-filters.png]

## How to read it

The generated report is organized in five sections:

### Strategy Performance

The summary of the period: **Balance**, **Profit** made, **Losses** made, number of trades executed, **Commissions** (when commission tracking is enabled [CONFIRM: where commissions are configured]), **DrawDown** and **Run-up**, and the percentage of winning trades. The figures are split into **Long Executes**, **Short Executes** and **All Executes** — so you can see immediately whether one direction is carrying the account.

[SCREENSHOT: The Strategy Performance section of a generated report showing Balance, Profit, Losses, trade count, DrawDown, Run-up and win percentage split into Long/Short/All Executes columns | strategy-performance-summary.png]

### Trade List

Every trade in the period with entry and exit time, entry and exit price, quantity, and per-trade **Profit**, **DrawDown** and **Run-up**. Per-trade drawdown/run-up is the underrated column: it shows how much heat each winner took and how far each loser was once in profit — the raw material for tuning stops and targets.

### Symbol Performance

The balance per symbol traded during the period — the fastest way to identify your most and least profitable instruments.

### Chart

Visual analysis of the same data: the **equity curve**, the **drawdown** chart, and views of individual trades.

[SCREENSHOT: The Chart section of a report showing the equity curve with the drawdown chart below it | signal-performance-equity-curve.png]

### Time Analysis

Profitability by hour of the day — which hours are the most and least favorable — with daily, monthly and annual views as well. Use it to adjust when you trade, for example by avoiding your consistently low-performing hours.

[SCREENSHOT: The Time Analysis section showing the profitability-by-hour histogram with clearly profitable and unprofitable hours | signal-performance-time-analysis.png]

## Settings reference

| Control | What it does |
|---|---|
| **Broker** | Which connection's history to report on. |
| **Account** | Which account under that broker. |
| **Date range / symbol filters** (scroll wheel, top-right) | Restrict the report to a period and set of instruments. |
| **Generate Report** | Builds the report from the current selection. |
| **Export CSV** | Exports the report data to a CSV file. |

## Tips and common mistakes

- **"Strategy Report" vs "Signal Performance"** — menu entry and window title differ; it is one feature.
- **Empty report** — check the Broker/Account selection and widen the date range; the report only covers the selected account, not all accounts together.
- **Long/Short split first** — before changing anything about a strategy, check whether losses concentrate in one direction. That is often the whole diagnosis.

> **Warning:** The chart right-click menu contains **Clear Historical Account Report**, which permanently removes the stored trading history of the account selected in the trading panel. After clearing it, the Strategy Report has no data for that account and it cannot be recovered. Do not use it as a "refresh" button.

## Related articles

- [[orders-window]]
- [[portfolio-wallet]]
- [[trading-panel-reference]]
- [[trading-from-chart]]
- [[simulation-accounts]]
