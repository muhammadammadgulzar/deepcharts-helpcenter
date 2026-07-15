---
title: "Deep Pattern Builder"
slug: "deep-pattern-builder"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "7 min read"
description: "Build custom trading logic from relational conditions over price, volume, delta and other indicators, then backtest it with the built-in simulation engine."
keywords: ["deep pattern builder", "pattern builder", "custom conditions", "backtest", "execute backtest", "autotrading backtest", "indicator id subgraph id", "calculate on close"]
---

Deep Pattern Builder is the most advanced indicator in the DeepCharts suite. It lets you construct custom trading logic out of relational conditions — comparisons like A + B > C + D over candle values, volume, delta, POC references or other indicators' outputs — and then run automated backtests on that logic with the built-in simulation engine.

In practice it is two tools in one: a signal engine that plots markers or background highlights wherever your conditions are true, and a backtester that turns those signals into simulated entries with stops, targets and trailing logic.

## What it is

Each condition in the builder takes up to four inputs (**A**, **B**, **C**, **D**), joins A with B and C with D using math operators, and compares the AB block against the CD block with one logical operator. Conditions can be combined with AND/OR logic, filtered by an integrated imbalance filter, visualized on the chart, wired to alerts, and fed into a simulated entry/exit model for backtesting.

[SCREENSHOT: Chart with Deep Pattern Builder applied — signal markers plotted on candles where the custom conditions fired, with a couple of background-highlighted bars visible | deep-pattern-builder-chart-signals.png]

## When to use it

- You have a repeatable idea ("close above the POC with positive delta") and want the platform to mark it on every bar, live and historically.
- You want to reference other indicators' values (for example a moving average) inside your conditions.
- You want statistical evidence: the built-in backtest simulates entries, stops and targets over historical data.
- You want alerting on multi-part logic that no single stock indicator covers.

## Quick start

1. Apply the **Deep Trades** indicator to the chart first — the builder workflow depends on it (see [[deep-trades]]).
2. Click the **Indicator** icon, search for **Deep Pattern Builder** and click **+** to add it.
3. Click the **Settings** icon next to Deep Pattern Builder.
4. Build a first condition. Example — "delta-positive close above the open": **Condition 1**: Input A = **Reference → Close**, Logical Operator **>**, Input C = **Reference → Open**. **Condition 2**: Input A = **Reference → Delta Volume**, Logical Operator **>**, Input C = **Constant → 0**. Combine with **AND (Simple)**.
5. Enable **Calculate on Close** so signals evaluate only when the candle completes, without intrabar flicker.
6. Under **Plot Settings**, choose a **Plot Type** (start with **Marker**) and a **Plot Price** placement.
7. Click **Apply and Save** and check that markers appear on historical bars where the logic is true.

[SCREENSHOT: Deep Pattern Builder settings dialog showing one enabled condition with Input A set to Reference Close, the Logical Operator dropdown, Input C set to Reference Open, and the Combine Mode selector below | deep-pattern-builder-condition-setup.png]

## How to read it

A signal (marker or highlighted background) means every part of your combined logic evaluated true on that bar — nothing more. The tool plots your idea; judging the idea is what the backtest is for.

- **Markers** are placed at the **Plot Price** you chose (High = above the candle, Low = below, Current = at the close, Mid Price = wick center), colored per side via the subgraph colors.
- **Flickering signals during a live bar** mean the condition is oscillating intrabar — enable **Calculate on Close** if you only want confirmed signals.
- **Backtest report**: after running a backtest, the report shows how the simulated entries performed under your stop/target model. Iterate: adjust the conditions or risk settings, re-run, compare against previous saved reports.

## Settings reference

Grouped as in the settings dialog.

### Condition

| Setting | What it does |
|---|---|
| **Enable** | Activates the condition. |
| **Inputs A, B, C, D** | Up to four input slots per condition; B and D are optional (set unused slots to **Unused**). |
| **Math Operator 1** | +, −, ×, / between inputs A and B. |
| **Math Operator 2** | +, −, ×, / between inputs C and D. |
| **Logical Operator** | Compares the AB block with the CD block: >, >=, =, <> (not equal), <, <=. |

### Input types

| Input Type | What it does |
|---|---|
| **Unused** | Disables the input slot. |
| **Reference** | Candle components: Open, Close, High, Low, Bid Volume, Bid NT, Ask Volume, Ask NT, Total Volume, Total NT, Delta Volume, Delta NT, Low–High Ticks, Open–Close Ticks, POC Price %, POC Total Volume, POC on Shadow, Cumulative Delta Volume. |
| **Indicator** | Live values from another applied indicator — requires that indicator's **Indicator ID** and **Subgraph ID** (the specific value line to read). |
| **Constant** | A fixed numeric value you type in. |

| Option | What it does |
|---|---|
| **Previous Bar** | Pulls the input's value from the prior candle instead of the current one — enables bar-over-bar logic such as "delta rising" (A = Delta Volume > B = Delta Volume, Previous Bar). |

### Combine modes

| Mode | What it does |
|---|---|
| **OR (Simple)** | Any single condition being true fires the signal. |
| **AND (Simple)** | All conditions must be true. |
| **AND + OR (Advanced)** | Nested groupings such as (Condition 1 OR Condition 2) AND (Condition 3 OR Condition 4). |
| **Calculate on Close** | Evaluates conditions only after the candle closes — no intrabar flicker. |

### Imbalance filter

| Setting | What it does |
|---|---|
| **Imbalance filter** | An integrated filter whose configuration mirrors the [[imbalance-tracker]] indicator's settings — restricts signals to bars that also meet the imbalance criteria. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Plot Type** | **Marker** (signal marker only), **Background** (candle background highlight), or **Series & Background** (both). |
| **Days to Load** | How many historical days to calculate signals for. |
| **Plot Price** | Marker placement: **High** (above candle), **Low** (below candle), **Current** (at close), **Mid Price** (wick center). |
| **Color / Opacity** | Marker or background color and background transparency. |

### Alert Settings

| Setting | What it does |
|---|---|
| **Alert selection** | Alerts must be created first via **Options → Add Alert**; only then do they appear in the builder's alert list for selection. |

### Simulation (backtesting)

| Setting | What it does |
|---|---|
| **Enable** | Activates simulation mode. |
| **Entry Type** | **Market** (immediate entry), **Half Bar**, or **Ticks from Close** (limit order X ticks from the candle close). |
| **Side** | **Buy** or **Sell**. |
| **Allow Multiple Entries** | Permits concurrent positions. |
| **Entry Expiration (Bars)** | How many bars a pending entry stays valid. |
| **Stop (Ticks)** | Fixed stop-loss distance. |
| **Trailing Stop — Enable / Trigger (Ticks) / Offset (Ticks)** | Activates a trailing stop; Trigger is the profit threshold before it engages, Offset the gap it maintains behind price. |
| **Targets** | Multiple profit targets in ticks. |
| **Move to Break Even (B/E)** | Moves the stop to entry price when a target is reached. |

### Subgraph

| Setting | What it does |
|---|---|
| **Color / Color 2** | Bid-side and ask-side marker colors. |
| **Subgraph style** | Marker style selection. |

## Running a backtest

1. Configure conditions, plot and simulation settings, then click **Apply and Save**.
2. Right-click the chart.
3. Select **Autotrading → Execute Backtest**.
4. Review the report. Via right-click you can also clear results, view previous backtests and save reports.

[SCREENSHOT: Right-click context menu on the chart with Autotrading expanded and Execute Backtest highlighted, with a completed backtest report visible | deep-pattern-builder-execute-backtest.png]

## Tips and common mistakes

- **Backtest option missing on right-click?** Follow the full workflow in order: Deep Trades applied, Deep Pattern Builder added and configured, **Apply and Save** clicked — then right-click → **Autotrading → Execute Backtest**.
- **Alert not listed in the builder?** Alerts must exist before the builder can use them — create them first via **Options → Add Alert**.
- **Signals flicker intrabar?** Enable **Calculate on Close**.
- **Referencing another indicator returns nothing?** Check both the **Indicator ID** and the **Subgraph ID** — the Subgraph ID selects which value line of that indicator you read.
- **Start with one condition.** Verify each condition plots sensibly on its own before combining with AND/OR — debugging nested logic with four inputs per condition is much harder.
- **Bar-over-bar logic needs Previous Bar.** "Delta rising" is current Delta Volume > Delta Volume with **Previous Bar** enabled on the second input, not two separate conditions.

## Related articles

- [[deep-trades]]
- [[imbalance-tracker]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[dynamic-poc]]
