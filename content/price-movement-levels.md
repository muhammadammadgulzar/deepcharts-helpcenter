---
title: "Price Movement Levels"
slug: "price-movement-levels"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Plots structured percentage or fixed-step levels above and below a reference price, building an automatic grid of expansion, support and resistance zones."
keywords: ["price movement levels", "percentage levels", "step levels", "price grid", "expansion levels", "percent move indicator", "level grid", "reference price levels"]
---

The Price Movement Levels indicator plots structured percentage or step-based levels above and below a reference price. Starting from a base such as the session open or close, it builds an evenly spaced grid — every 0.5%, every 20 points, whatever spacing you define — so you always know how far price has traveled from its anchor and where the next structured reaction area sits.

It turns "the market is up a lot today" into a measurable statement: price is at the +1.5% level, with the +2% level overhead.

## What it is

Price Movement Levels is a grid-based levels indicator. It selects a reference price, then calculates levels above and below it using your chosen spacing — percentage-based (**Percentual** mode) or fixed value steps. Levels above the base plot as resistance, levels below as support, and a zero line marks the reference anchor itself. It answers the question "how far has price moved from its reference, and where are the next structured levels?"

[SCREENSHOT: Intraday chart with Price Movement Levels applied — the zero line at the session's reference price with percentage-labeled levels stacked above (resistance color) and below (support color), price trading between the first and second upper levels | price-movement-levels-chart-overview.png]

## When to use it

- You want to identify intraday expansion levels — how far today's move has stretched from its base.
- You want automatically drawn support and resistance zones at consistent intervals instead of hand-picked prices.
- You track percentage-based price movement, for example instruments where daily moves are commonly discussed in percent.
- You want structured reaction areas for staged profit targets — scaling out at each successive level.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Price Movement Levels** and click **+** to add it.
3. Click the **Settings** icon next to the indicator.
4. Set **Level based on** to your preferred reference price — for example the session **Open** for a day-trading anchor.
5. Set **Step mode** to **Percentual** and choose a **Step value** that gives usable spacing on your instrument; widen the step if the grid crowds your chart.
6. Give the **Support Line**, **Resistance Line** and **Zero Line** distinct colors so the three roles read instantly, then apply.

[SCREENSHOT: Price Movement Levels settings dialog showing the Chart Area options, General settings (Days to load, Level based on, Step mode, Step value, Font size, Text color, Minimum levels), and the Support Line, Resistance Line, Zero Line and Custom Time Session groups | price-movement-levels-settings-dialog.png]

## How to read it

The indicator works through a five-step logic: it selects the base price, calculates levels using your step spacing, displays positive levels as resistance, negative levels as support, and marks the reference anchor with the zero line.

- **The zero line is your session anchor.** Price above it means the market is net positive against the reference; below it, net negative. Repeated crossing of the zero line signals a rotational day around the anchor.
- **Each level is a staged milestone.** In a trend, price tends to move level to level; a stall at a level is your first sign the expansion is pausing, and a clean break shifts focus to the next level in the grid.
- **Distance from zero measures stretch.** The further price trades from the reference, the more extended the move — deeper grid levels are natural areas to tighten risk or take profit rather than initiate fresh entries.
- **Percentage versus fixed steps changes the meaning.** Percentual spacing keeps the grid proportional across instruments and price regimes; fixed steps map to concrete point/tick distances that match instruments with well-known round-number behavior.

## Settings reference

Grouped as in the settings dialog.

### Chart Area

| Setting | What it does |
|---|---|
| **Horizontal** | Draws the levels on the main price chart. |
| **Vertical** | Displays the levels vertically, where supported. |
| **Panel** | Selects where the levels appear. |

### General Settings

| Setting | What it does |
|---|---|
| **Days to load** | Number of past sessions used for calculating and displaying levels. |
| **Level based on** | Reference price the grid is anchored to (for example **Open** or **Close**). |
| **Step mode** | Spacing method: **Percentual** (percentage-based) or fixed value steps. |
| **Step value** | Spacing between each level. |
| **Font size** | Size of the percentage labels. |
| **Text color** | Color of the level labels. |
| **Minimum levels** | Minimum number of levels plotted above and below the base. |

### Support Line

| Setting | What it does |
|---|---|
| **Color / Style / Width** | Formatting of the downside (support) levels. Style options include solid and dash. |

### Resistance Line

| Setting | What it does |
|---|---|
| **Color / Style / Width** | Formatting of the upside (resistance) levels. |

### Zero Line

| Setting | What it does |
|---|---|
| **Color / Style / Width** | Formatting of the base reference level (0%). |

### Custom Time Session

| Setting | What it does |
|---|---|
| **Enable** | Limits the calculation to a specific session window. |
| **Ini Time / End Time** | Start and end of the session window, in the exchange time zone. |

## Tips and common mistakes

- **Choose the anchor deliberately.** A grid based on the **Open** answers "how far have we come today"; a grid based on the **Close** frames the move against yesterday's settlement. The two grids can sit at very different prices — know which question you are asking.
- **Tune Step value to the instrument's volatility.** A step that produces five levels a day on one instrument may produce fifty on another. If price slices through several levels per bar, the grid is too fine to be useful.
- **Use Minimum levels to guarantee coverage.** On quiet days a sparse grid can leave price with no visible level overhead; the **Minimum levels** setting ensures the map extends far enough in both directions.
- **Align the session window.** For futures, enable the **Custom Time Session** and set the window in the exchange time zone so the reference price comes from the session you trade — a mismatched window silently shifts the entire grid. See [[understanding-market-structure-sessions]].
- **Grids mark structure, not signals.** Levels at fixed spacing will sometimes coincide with real reaction prices and sometimes not; combine with volume-based references such as [[important-levels]] before treating a grid level as tradeable.

## Related articles

- [[adr-target]]
- [[absolute-levels]]
- [[important-levels]]
- [[pivot-points]]
- [[different-types-of-input]]
- [[indicator-layout]]
