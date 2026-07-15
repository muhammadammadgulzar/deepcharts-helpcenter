---
title: "Deep Profile Values"
slug: "deep-profile-values"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "8 min read"
description: "Reference for Deep Profile Values: plot POC, value area, VWAP with deviations, peaks and valleys as clean level lines — including naked (virgin) POCs."
keywords: ["profile values", "vbp values", "naked poc", "virgin poc", "value area lines", "vwap deviations", "developing poc", "poc line"]
---

Deep Profile Values (also called VBP Values) plots the key values of the volume-by-price analysis on your chart — Volume POC, Value Area, VWAP with standard deviations, Peaks and Valleys — without drawing the volume distributions themselves. You get the levels that matter on a clean chart.

Where [[deep-profile]] shows the full histogram, this indicator extracts only its outputs, and adds line-extension logic powerful enough to track naked (virgin) POCs — levels that price has never returned to touch.

## What it is

The indicator computes a volume profile over a period you define (composite, multiples, visible or personalized) and then draws only the resulting reference levels as lines: the point of control, the value area boundaries, the VWAP and its deviation bands, and high/low-volume nodes. Each line family has its own display, extension and styling controls, plus an optional per-profile data summary.

The live profile below shows where those levels come from — the POC and the value area boundaries sit on the histogram they are computed from. Drag the Value Area % to watch VAH and VAL move.

[WIDGET: volume-profile-lab]

## When to use it

- You trade off profile levels (POC, VAH/VAL, VWAP) but want candles readable — no histogram overlay.
- You track naked/virgin POCs across days: untouched levels that often act as magnets on revisit.
- You want VWAP with ±1/±2/±3 standard-deviation bands anchored to a profile period.
- You want several periods' key levels on screen at once (the **Number of Profiles** setting).

## Quick start

1. Open a chart and add **Deep Profile Values** from the chart's **Indicators** button.
2. Set **VBP Period** to **Multiples** with **Length Type** = Days and **Length Value** = 1 so each day produces its own set of levels.
3. In the **POC** section, set **Enable** on and **Extend Line** to **Till Interaction**.
4. In **Value Area**, enable the lines with **% Value Area** = 70.
5. Apply — each day's POC and value area boundaries now draw as lines, and POC lines that price has not yet revisited keep extending: those are your naked POCs.

[SCREENSHOT: Chart with Deep Profile Values active showing daily POC lines and value area boundary lines; one older POC line extends untouched across several days, annotated as a naked POC | deep-profile-values-naked-poc.png]

## How to read it

- **POC** — the highest-volume price of the period. It can be displayed fixed, developing (updating live as volume shifts), or with shifted-zone highlighting.
- **Value Area** — the price range containing the configured percentage of the period's volume (70% is the conventional choice). Its high and low boundaries are the classic VAH/VAL references.
- **VWAP** — the volume-weighted average price. Trading above it means paying more than the volume-weighted average — "expensive" relative to the session's business; below is "cheap." Institutions use it as an execution benchmark.
- **VWAP standard deviations** — ±1 is the typical range where price usually remains; ±2 marks meaningfully stretched conditions; ±3 is rare and signals extreme movement.
- **Peaks and Valleys** — peaks are concentrated high-volume areas (strong market interest); valleys are low-volume voids that price tends to cross quickly.
- **Naked (virgin) levels** — with **Extend Line** = **Till Interaction**, a line stops the moment price touches it. Any line still extending has never been revisited: a naked POC or untested level. This is the key mechanic of the indicator.

See [[understanding-volume-profile]] and [[understanding-vwap]] for the concepts behind these levels.

## Settings reference

Grouped as in the indicator dialog.

> **Note:** The continuous line-extension option is listed as **Till End Window** in some sections and **Till End Interaction** in others. [CONFIRM: exact label of the continuous Extend Line option in each section of the Deep Profile Values dialog]

### General settings

| Setting | What it does |
|---|---|
| **VBP Period** | Reference timeframe: **Composite** (all loaded data in one profile), **Multiples** (separate profiles per time interval), **Visible** (based on the currently visible chart portion), **Personalized** (manual period from specific dates/times) |
| **Length Type** | Measurement unit for the profile: Minutes, Days, Weeks, Months or Volume |
| **Length Value** | How many Length Type units each profile covers |

### Custom Period

| Setting | What it does |
|---|---|
| **Start Date/Time** | Beginning of the period when VBP Period is set to the personalized/customized mode |

### Data settings

| Setting | What it does |
|---|---|
| **Input Data** | Calculation basis: **Volume** (total volume per level), **Order** (buy/sell order quantities), **Aggregate Trades** (combined trades at the same price), **Number of Trades** (transaction frequency per level). See [[different-types-of-input]] |
| **Filter Min** | Minimum volume threshold for inclusion |
| **Max Filter** | Maximum ceiling, excluding distorting very large volumes |

### Auto Grouping

| Setting | What it does |
|---|---|
| **Type** | **Automatic** (adapts tick grouping to the market) or **Manual** (you specify it) |
| **Grouping Factor** | Aggregation intensity in Automatic mode — higher means more aggregation |
| **Tick in Manual** | Grouped tick quantity in Manual mode |

### Plot settings

| Setting | What it does |
|---|---|
| **Number of Profiles** | How many profiles' values display simultaneously for the selected period |

### POC

| Setting | What it does |
|---|---|
| **Enable** | Shows the POC — the highest-volume price level |
| **Show Line** | Display method: **Show** (fixed line at the maximum-volume level), **Developing** (dynamic line updating as the POC moves), **Extend Shifted** (highlights the zones where the POC shifted during its evolution) |
| **Extend Line** | **None** (no extension beyond the period), **Till Interaction** (extends until price touches or exceeds the level — surviving lines are naked POCs), **Till End Window** (continuous across the chart) |
| **Line-Color / Line Width** | POC line styling |
| **Dev. POC Start Time** | When the dynamic (developing) POC calculation begins |
| **Shifted POC Tick Grouping** | How many ticks group together before a POC position counts as shifted |
| **Opacity POC Grouping** | Visibility of the grouped POC display — higher is more visible |

### Value Area

| Setting | What it does |
|---|---|
| **Enable** | Shows the value area — the range containing the set percentage of volume |
| **% Value Area** | The percentage threshold (e.g. 70% draws the range holding 70% of total volume) |
| **Show Line** | Draws the lines delimiting the Value Area High and Low |
| **Developing** | Dynamic mode — plots the value area's shifts as traded volume changes |
| **Extend Line** | **None**, **Till Interaction**, or continuous across the chart |
| **Line Color / Line Width** | Value area line styling |

### Peaks and Valleys

| Setting | What it does |
|---|---|
| **Sensitivity** | Detection precision — higher gives fewer (more significant) detections, lower gives more |
| **Exclude High/Low** | Automatically removes peaks/valleys at the profile's extreme top and bottom zones |
| **Peak: Enable / Minimum Volume / Extend Line / Line Width / Line Color** | Peak line visualization, its volume threshold, extension mode (None, Till Interaction, Till End Window) and styling |
| **Valley: Enable / Minimum Volume / Extend Line / Line Width / Line Color** | The same controls for valley lines |

### VWAP

| Setting | What it does |
|---|---|
| **Enable** | Shows the VWAP line |
| **Extend Line** | **None**, **Till Interaction**, or continuous across the chart |
| **Line Color / Line Width** | VWAP line styling |
| **Developing VWAP** | Real-time dynamic VWAP that updates with each new volume |
| **Enable Bands** | Shows the standard-deviation envelope around the VWAP |
| **Envelope Settings** | Opens band customization, including how many standard deviations to draw |

### Summary

| Setting | What it does |
|---|---|
| **Enable-Summary** | Shows a data summary per profile — total volume, delta, trades, ticks and related statistics |
| **Volume Summary** | Displays total traded volume |
| **Trade Summary** | Displays the total transaction count for the profile period |
| **Text Color / Ask Color / Bid Color** | Colors for the summary text and its ask/bid volume figures |

### Customized Timetable

| Setting | What it does |
|---|---|
| **Filter Mode** | **None** (all data, no filtering), **Filter** (a custom temporal filter over a specific period), **Split** (divides the profile by sessions, e.g. morning/afternoon) |
| **Ini Session / End Session** | Trading session start and end times |

> **Warning:** Customized Timetable session times reference the U.S. time zone exclusively. If you trade from another region, convert your session boundaries before entering them, or the profiles will cover the wrong hours.

[SCREENSHOT: Deep Profile Values settings dialog open at the POC section showing Show Line and Extend Line dropdowns with Till Interaction selected | deep-profile-values-settings-poc.png]

## Tips and common mistakes

- **Hunting naked POCs:** set the POC **Extend Line** to **Till Interaction** — lines that survive are the untouched levels. With **Till End Window** every line extends forever and the naked/tested distinction disappears.
- **Too many peak/valley lines:** raise **Sensitivity** — higher values yield fewer but more meaningful detections — and use each line family's **Minimum Volume** threshold.
- **Levels shift when zooming:** Automatic grouping recalculates bar heights; set grouping to Manual (Tick in Manual = 1) to freeze level prices.
- **Values disagree with your Deep Profile histogram:** compare VBP Period, Input Data and grouping between the two indicators — they compute independently from their own settings.
- **Screen overload:** this indicator can draw POC, VA, VWAP, bands, peaks and valleys simultaneously. Enable one family at a time and keep only what you actually trade from.

## Related articles

- [[deep-profile]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[vwap-envelopes]]
- [[dynamic-poc]]
- [[different-types-of-input]]
