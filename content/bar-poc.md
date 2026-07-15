---
title: "Bar POC"
slug: "bar-poc"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Marks the Point of Control — the highest-volume price — of each bar and can extend it to the right as a live reference level until price trades back through it."
keywords: ["bar POC", "point of control", "POC per bar", "extended POC", "naked POC", "POC extension", "bar point of control", "poc indicator"]
---

The Bar POC indicator finds the Point of Control (POC) of every bar — the single price where the most volume traded inside that bar — and highlights it directly on your candles. It can also extend each POC to the right as a horizontal line, turning the busiest price of a past bar into a live reference level that stays on your chart until price returns to it.

Where a session profile gives you one POC per day, Bar POC gives you one per bar, which makes it a fast way to see exactly where the heaviest business was done inside each candle.

## What it is

Bar POC is an orderflow level indicator. For each bar it locates the price level with the highest traded volume and marks it with a small highlight rectangle; optionally it draws an extension line from that POC toward the right edge of the chart. It answers the question "at what price did most of this bar's volume actually change hands — and has the market tested that price since?"

[SCREENSHOT: Chart window with Bar POC applied — candles with small highlight rectangles on the highest-volume price of each bar, and two or three extended POC lines running to the right edge of the chart, one of them showing a duration label | bar-poc-chart-overview.png]

## When to use it

- You trade retests: untouched (extended) POCs are natural magnets and reaction levels because real volume was transacted there.
- You want to see whether a bar's business was done near its high, middle, or low — a quick read on acceptance versus rejection inside each candle.
- You use the aggression coloring to see whether buyers or sellers dominated the POC area of a key bar.
- You want automatically maintained intraday levels without drawing lines by hand.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Bar POC** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. Set **Days to Load** to cover the history you trade from — more days means more historical POCs and extensions.
5. Set **Filter Mode** to **Auto** so the platform's internal algorithm highlights only the most relevant POCs instead of marking every bar.
6. Under **Extended POC**, turn on **Enable** so unrevisited POCs project to the right as levels, then apply.

[SCREENSHOT: Bar POC settings dialog showing the General section with Days to Load, Input Data, Filter Mode dropdown open on Auto, Auto Std. Dev. and Manual Min. Vol. fields, and the Plot Settings groups (HighLight, Extended POC, Duration on Extension) below | bar-poc-settings-dialog.png]

## How to read it

- **POC position inside the bar.** A POC near the top of an up bar means the market accepted higher prices and did business there; a POC left behind at the bottom of a long up bar means the move above it happened on comparatively little volume and may be fragile.
- **Extension lines are unfinished business.** An extended POC is a price where heavy volume traded but which the market has not revisited. These levels often act as support or resistance on the first retest, so they are natural locations for entries, targets, and stop placement.
- **Aggression color.** The **Bid/Ask Color** setting colors the highlight rectangle based on the sell/buy aggression in the POC area, so you can see at a glance which side was hitting the market at the bar's busiest price.
- **Filtering matters.** With **Filter Mode** set to **None** every bar gets a POC and the chart becomes noise. Auto or manual filtering reduces the display to POCs backed by meaningful volume.

## Settings reference

Grouped as in the settings dialog.

### General Settings

| Setting | What it does |
|---|---|
| **Days to Load** | Defines the number of historical days loaded for the indicator. |
| **Input Data** | Selects the input data the calculation uses. See [[different-types-of-input]] for the available types. |
| **Min/Max Filter** | Screens orders by contract size, so the POC calculation can ignore trades outside your chosen size range. |
| **Filter Mode** | **None** — no filter is applied. **Manual** — applies a user-defined manual filter. **Auto** — applies an automatic filter using the platform's internal algorithms to highlight the most relevant POCs. |
| **Auto Std. Dev.** | Defines the standard deviation used by the automatic filter. Higher values keep only the most exceptional POCs. |
| **Manual Min. Vol.** | Defines the minimum volume required for a POC when using manual filtering. |

> **Note:** These settings can be configured separately for Regular Trading Hours (RTH), so you can filter the regular session differently from the overnight session.

### Plot Settings — HighLight

| Setting | What it does |
|---|---|
| **Show Rectangle** | Toggles the rectangle that highlights the POC price inside the bar. |
| **Line Width** | Thickness of the rectangle border. |
| **Show Background** | Toggles the rectangle's background fill. |
| **Back Opacity** | Transparency of the background fill. |
| **Bid/Ask Color** | Colors the rectangle based on the sell/buy aggression in the POC area. |

### Plot Settings — Extended POC

| Setting | What it does |
|---|---|
| **Enable** | Extends a line from the POC toward the right edge of the chart until price interacts with it. |
| **Line Width** | Thickness of the extension line. |
| **Max Bar Extension** | Maximum number of bars an extension may run. Set to **0** to extend to the end of the chart. |
| **Reset Start Day** | When enabled, restricts extensions to the current day only. |
| **Remove Line On Shadow Triggered** | Ends the extension the first time price touches the level (including with a wick) instead of waiting for a close-based breakout. |
| **Tick Margin Breakout** | Minimum number of ticks price must move through the level to confirm a breakout and remove the line. |

### Plot Settings — Duration on Extension

| Setting | What it does |
|---|---|
| **Enable** | Shows the duration (days, hours, minutes) of the POC extension next to the line. |
| **Text Size** | Size of the duration text. |
| **Text Color** | Color of the duration text. |

## Tips and common mistakes

- **Start with Auto filtering.** Manually tuning **Manual Min. Vol.** per instrument is error-prone; the automatic filter adapts via its standard-deviation threshold and is the faster route to a clean chart.
- **Old extensions are stronger context than fresh ones.** A POC that has survived many hours untested (visible with **Duration on Extension** enabled) carries more weight than one printed three bars ago.
- **Choose your touch rule deliberately.** **Remove Line On Shadow Triggered** treats a single wick as a test; leaving it off requires a genuine breakout confirmed by **Tick Margin Breakout**. Scalpers usually want the wick rule, level traders the breakout rule.
- **Do not confuse Bar POC with the session POC.** The session-wide Point of Control comes from a profile tool such as [[deep-profile]]; Bar POC works at the resolution of a single candle. See [[understanding-volume-profile]] for how POCs fit into the bigger auction picture.

## Related articles

- [[understanding-volume-profile]]
- [[dynamic-poc]]
- [[deep-profile]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
