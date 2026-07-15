---
title: "Absolute Levels"
slug: "absolute-levels"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Plots two fixed horizontal price levels you define yourself, each with its own color, style and thickness — a lightweight way to keep key prices on the chart."
keywords: ["absolute levels", "fixed price level", "horizontal level", "custom levels", "price line", "static levels", "key price line", "manual levels indicator"]
---

The Absolute Levels indicator draws horizontal lines at price values you type in yourself. It is a technical analysis tool for marking key support and resistance levels on an asset's price chart — but unlike automated level indicators, you choose the exact prices, and the indicator keeps them plotted with your chosen formatting.

That makes it the right tool for levels that come from your own analysis or from outside the chart entirely: a settlement price, a round number, a level from a higher-timeframe study, or a price flagged in a trading plan.

## What it is

Absolute Levels is a manual levels indicator. You enter up to two fixed price values — **First Value** and **Second Value** — and the indicator plots each as a horizontal line with independently configurable color, style and thickness. It answers the question "where are my pre-decided prices relative to the market right now?"

[SCREENSHOT: Chart window with Absolute Levels applied — two horizontal lines at user-defined prices in different colors and styles, one above and one below the current price, clearly spanning the full chart width | absolute-levels-chart-overview.png]

## When to use it

- You have exact prices from your trading plan (entries, invalidation levels, targets) and want them fixed on the chart.
- You track prices that no automatic indicator produces — round numbers, settlement, a news-event level.
- You want levels that never move: unlike calculated levels, absolute levels stay exactly where you put them until you change them.
- You want a pair of reference lines with distinct formatting — for example, a green target line and a red risk line.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Absolute Levels** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. Enter the price for your first level in **First Value** and the price for your second level in **Second Value**.
5. Give the two lines contrasting formatting — for example, a solid line for the more important level and a dashed line for the secondary one — using each line's **Color**, **Style** and **Thickness** settings.
6. Apply and confirm both lines sit exactly at the prices you entered.

[SCREENSHOT: Absolute Levels settings dialog showing the Parameters section with First Value and Second Value fields filled in, and the First Line and Second Line formatting groups with Color, Style and Thickness controls | absolute-levels-settings-dialog.png]

## How to read it

Absolute Levels adds no calculation of its own — the interpretation is whatever meaning your prices carry:

- **Price approaching a level** is your cue to pay attention: watch how the market behaves into your pre-marked price rather than deciding in the moment.
- **A clean rejection at a level** validates the analysis that produced the price; a decisive close beyond it invalidates that idea and turns the line into a potential retest reference from the other side.
- **Two levels form a bracket.** With one value above and one below price, you have a simple range map: outside the bracket the market is doing something your plan should account for.

## Settings reference

Grouped as in the settings dialog.

### Parameters

| Setting | What it does |
|---|---|
| **First Value** | Price of the first absolute level displayed on your chart. |
| **Second Value** | Price of the second absolute level displayed on your chart. |

### First Line

| Setting | What it does |
|---|---|
| **First Line Color** | Color of the first plotted line. |
| **First Line Style** | Visual style of the first plotted line. |
| **First Line Thickness** | Width of the first plotted line. |

### Second Line

| Setting | What it does |
|---|---|
| **Second Line Color** | Color of the second plotted line. |
| **Second Line Style** | Visual style of the second plotted line. |
| **Second Line Thickness** | Width of the second plotted line. |

## Tips and common mistakes

- **Update the values when your plan changes.** Absolute levels do not roll over or recalculate; a stale line from last week's plan is worse than no line. Review the values as part of your session prep.
- **Use it alongside — not instead of — calculated levels.** Automated tools such as [[important-levels]] and [[pivot-points]] cover the standard reference prices; reserve Absolute Levels for the handful of prices only you are tracking.
- **Differentiate the two lines visually.** If both lines share a color and style, you lose the information of which level is which; encode meaning in the formatting.
- **Prefer this over a drawn line when precision matters.** Typing the exact value into **First Value** avoids the small placement errors of dragging a drawing by hand — see [[drawing-tools]] for when a freehand line is the better fit.

## Related articles

- [[important-levels]]
- [[pivot-points]]
- [[price-movement-levels]]
- [[drawing-tools]]
- [[different-types-of-input]]
- [[indicator-layout]]
