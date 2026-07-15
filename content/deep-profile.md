---
title: "Deep Profile (Volume / Delta Profile)"
slug: "deep-profile"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "Complete reference for Deep Profile, the DeepCharts volume-by-price indicator: profile types, periods, session splitting, POC, peaks and valleys, merge and split."
keywords: ["volume profile", "delta profile", "vbp", "volume by price", "composite profile", "session profile", "poc", "merge profiles", "profile changes when zooming"]
---

Deep Profile is the volume-by-price indicator in DeepCharts: it plots trading activity by price rather than by time, drawing a histogram of how much volume (or delta) traded at each price level. The various profile buttons on the chart all enable this same indicator — each button is a different preset configuration of Deep Profile.

Where a candle chart answers "what happened when," a profile answers "where did the business get done" — which prices the market accepted and which it rejected.

## What it is

Deep Profile builds histograms of executed volume per price level over a period you choose — the latest session, one profile per day, a single composite over all loaded data, exactly what is visible on screen, or any custom area you select. The histogram can show total volume, ask/bid split, delta, or delta and volume together.

## When to use it

- You want to locate the prices where the most business was done — support/resistance grounded in actual traded volume, not lines drawn by eye.
- You trade session levels: prior-day POC, high-volume nodes and low-volume voids.
- You want to compare buying vs selling pressure by price (Ask/Bid or Delta profiles).
- You need a profile of one specific area — a consolidation, a swing, a news spike — via the Visible or Custom periods.

## Quick start

1. Open a chart and add **Deep Profile** from the chart's **Indicators** button (or click one of the profile buttons — they are presets of this indicator).
2. Open the settings and set **VBP Type** to **Volume Profile**.
3. Set **VBP Period** to **Multiple** with **Length Type** = Days and a **Length Value** of 1 for one profile per day.
4. Apply — each day now shows its own volume histogram.

[SCREENSHOT: A futures chart with Deep Profile in Multiple mode showing one volume histogram per day, POC highlighted on each profile | deep-profile-daily-profiles.png]

### Recommended starter configuration

Suggestions, not defaults:

| Area | Suggested start |
|---|---|
| **VBP Type** | **Volume Profile** first; add a **Delta Profile** later to see directional pressure |
| **VBP Period** | **Multiple**, Length Type = Days, Length Value = 1 |
| **Input Data** | **Volume**; try **Aggregate** when you care about reconstructed large orders (see [[different-types-of-input]]) |
| **Tick grouping** | **Automatic**; switch to Manual with Manual Tick = 1 if your levels shift when zooming |
| **POC** | Enabled, with **Show Line** on so the level extends visibly |
| **Peak and Valley** | Enable once you are comfortable — start with higher sensitivity for fewer, more significant nodes |

## How to read it

- **The histogram**: longer bars mark prices where more volume traded — areas of acceptance where the market spent time doing business. Short bars mark rejection — prices the market moved through quickly.
- **POC (Point of Control)**: the level where the highest trading volume occurred within the profile. It acts as the gravitational center of the period and is a widely watched reference.
- **Developing POC**: with Line Type set to **Developing**, you see the historical migration trail of the POC as the session built — useful for judging whether value was moving up or down.
- **Peaks and valleys**: peaks are high-volume nodes (typically shown in red) where price tends to slow; valleys are low-volume zones (typically green) that price tends to traverse quickly.
- **Delta profiles**: a positive delta at a level means aggressive buyers outnumbered aggressive sellers there; sustained negative delta into a low-volume area can flag initiative selling.

For the underlying concepts — value area, HVN/LVN, and how profiles frame a trading day — see [[understanding-volume-profile]]. If you want only the key levels (POC, value area, VWAP) without the histogram, use [[deep-profile-values]].

## Settings reference

Grouped as in the indicator dialog.

### General settings

| Setting | What it does |
|---|---|
| **VBP Type** | Profile variety: **Volume Profile** (total traded volume at each price level), **Ask/Bid Volume Profile** (buying and selling pressure separated), **Delta Profile** (difference between aggressive buyers and sellers per level), **Delta and Total Volume** (delta on the left, volume on the right) |
| **VBP Period** | Data scope: **Latest** (most recent profile only), **Multiple** (separate profiles per selected time period), **Composite** (a single profile over all loaded data), **Visible** (profile of exactly the data on screen — recalculates as you scroll and zoom), **Custom** (profile over any hand-selected chart area, with shortcuts on the left toolbar) |
| **Length Type / Length Value** | Profile frequency — e.g. Length Type = Days with Length Value = 2 creates a new profile every two days. Minute, daily, weekly and monthly units are supported |

### Data settings

| Setting | What it does |
|---|---|
| **Input Data** | Calculation basis: **Volume**, **Order**, **Aggregate**, or **Number of Trades** (individual trade counts instead of total volume). Different input types produce visibly different profile shapes — see [[different-types-of-input]] |
| **Min and Max Filter** | Size thresholds — e.g. a minimum filter of 20 excludes orders smaller than 20 |
| **Tick Grouping** | Bar height: **Automatic** (calculated by DeepCharts) or **Manual** (e.g. Manual Tick = 5 groups five ticks per bar) |

> **Note:** With Automatic tick grouping, bar heights — and therefore the exact POC/level prices — can shift as you zoom the price scale. To freeze the levels, set grouping to Manual with Manual Tick = 1.

### Filter / Split Time

| Setting | What it does |
|---|---|
| **Filter Mode: Splitted** | Draws multiple profiles within the same trading day — for example separate ETH and RTH session profiles |
| **Filter Mode: Triple + Custom Time** | Three separate profiles per day over custom time ranges |

> **Warning:** Custom filter times use the time zone of the exchange for the instrument you are trading — always, regardless of your local clock. Entering local times here silently builds profiles over the wrong hours.

### POC of Profile

| Setting | What it does |
|---|---|
| **Enable** | Toggles POC display — the level with the highest traded volume |
| **Highlight Enable / Color** | Highlights the POC bar with a custom color |
| **Show Line / Line Type** | Draws a horizontal POC line; **Developing** shows the historical POC locations as they migrated |
| **Extended Line Till End Window** | Extends the POC line across the visible chart |
| **Line Color / Width** | Styling of the POC line |

### Peak and Valley

| Setting | What it does |
|---|---|
| **Peaks / Valleys** | Highlights high-volume nodes (peaks) and low-volume zones (valleys) |
| **Sensitivity** | Higher sensitivity filters out noise — fewer but more significant detections |

[SCREENSHOT: Deep Profile settings dialog open at the General settings section showing the VBP Type and VBP Period dropdowns | deep-profile-settings-general.png]

### Merge and split profiles

Right-click any profile on the chart to combine or divide periods: merge with the previous or the next profile, split a merged profile back apart, or reset to undo all merges. Use this to combine yesterday and today into one distribution, or to isolate a single session out of a composite.

[SCREENSHOT: Right-click context menu on a profile showing the merge, split and reset options | deep-profile-merge-split-menu.png]

## Tips and common mistakes

- **"I only see one big profile / I want one per day."** VBP Period = Composite builds a single profile over everything. Switch to **Multiple** with Length Type = Days, Length Value = 1. Also note the chart's days-to-load setting caps how far back profiles can exist — increase the loaded days if older profiles are missing.
- **"The profile changes when I zoom."** Either VBP Period is **Visible** (recalculating on view is its purpose), or Automatic tick grouping is re-sizing the bars — set Manual Tick = 1 to lock levels.
- **"My profile shape differs from another platform."** Compare Input Data type, Min/Max filters, tick grouping and ETH/RTH session splitting before assuming bad data — each changes the shape legitimately.
- **Profile for one consolidation only:** VBP Period = **Custom** and select the area, or **Visible** and frame the area on screen.
- **Separate overnight and RTH profiles:** Filter Mode = **Splitted** with the RTH option (two profiles per day), or **Triple** with custom time ranges.

## Related articles

- [[understanding-volume-profile]]
- [[deep-profile-values]]
- [[deep-profile-swing]]
- [[profile-chart-window]]
- [[different-types-of-input]]
- [[indicator-layout]]
