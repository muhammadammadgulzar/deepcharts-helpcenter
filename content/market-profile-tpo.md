---
title: "Market Profile (TPO)"
slug: "market-profile-tpo"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "How to add, read and configure the Market Profile (TPO) indicator, including POC, Value Area, peaks and valleys, session splitting and profile merging."
keywords: ["market profile", "TPO", "time price opportunity", "TPO chart", "letter chart", "point of control", "value area", "market profil", "tpo blocks"]
---

The Market Profile indicator — often called TPO, for Time Price Opportunity — reorganizes market activity so you can see where price spent its time, not only where it went. Price is arranged vertically and time horizontally, so quiet consolidation builds a wide bulge while fast rejection leaves a thin tail.

If you are new to profile-based analysis, read [[understanding-volume-profile]] and [[understanding-auction-theory]] first. This article covers the indicator itself: adding it, reading it, and every setting in its dialog.

## What it is

Market Profile displays the relationship between price, time and volume. Each trading period is divided into intervals — typically 30 minutes — and each interval is marked with a letter (A–Z). Every price level that traded during an interval receives that interval's letter, and the letters stack up into a distribution that reveals consolidation zones, fair-value levels and how price was distributed through the session.

DeepCharts can draw the result either as classic lettered **Blocks** or as a condensed **Profile** shape, and can build one composite profile over the whole loaded period, repeating profiles of a fixed length, or a fully custom window.

## When to use it

- To locate balance areas (fair value) and imbalance areas (trend moves) at a glance.
- To pull key reference levels — POC, Value Area boundaries, single prints — into your trade planning.
- To compare today's structure against prior days by merging profiles into composites.
- To separate overnight and regular-hours activity with the session filter.

## Quick start

1. Add **Market Profile** to your chart.
2. In the **General** section, choose the **TPO Type**: **Profile** for a compact distribution shape, or **Blocks** for classic TPO letters.
3. Set the **Period**. Repeating daily profiles (**Multiples** with a length of 1 in **Days**) are the standard starting point for intraday analysis.
4. Enable the **POC** and **Value Area** features so the highest-activity level and the fair-value zone are marked on each profile.
5. Leave **Tick Grouping** on automatic until you know the instrument — you can tighten it later.

[SCREENSHOT: A chart with the Market Profile indicator applied in Blocks mode, showing lettered TPO stacks for one full session with the POC line and Value Area visible | market-profile-tpo-blocks-chart.png]

## How to read it

Wide sections of the profile are acceptance: price rotated there long enough for many time intervals to print, which marks the market's current idea of fair value. Thin sections — single letters at an extreme — are rejection: price visited briefly and was pushed away.

Three structural elements matter most:

- **POC (Point of Control)** — the price level with the maximum volume in the profile. It acts as the gravitational center of the distribution and is a common magnet and reaction level.
- **Value Area** — the price range containing a user-defined percentage of the total volume (70% is the classic Market Profile convention). Trading back inside value after an excursion is a mean-reversion cue; acceptance outside value suggests a directional move.
- **Peaks and valleys** — local concentrations and voids of activity inside the profile. Peaks behave like high-volume support/resistance; valleys are low-volume areas price tends to cross quickly.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **TPO Base Minute** | How many minutes each TPO letter represents. 30 minutes is the classic Market Profile convention. |
| **TPO Type** | **Blocks** draws lettered TPO blocks; **Profile** draws the condensed distribution shape. |
| **Period** | **Composite** builds one profile across the loaded data; **Multiples** builds repeating profiles of a fixed length; **Custom** uses an exact window. |
| **Length** | The size of each profile when using **Multiples**, expressed in **Minutes**, **Days**, **Weeks** or **Months**. |
| **Custom date/time** | Start and end of the analysis window when **Period** is **Custom**. |

### Tick Grouping

- **Method** — **Automatic** lets the indicator decide how many price ticks merge into one profile row; manual mode gives you exact control.
- **Grouping factor** — scales the automatic grouping.
- **Manual ticks** — the exact number of ticks per row in manual mode. Increase it on instruments with a small tick size to keep the profile readable.

### Plot

- **Background / text coloring** — **None**, **Fixed**, **Fading** or **Multi Colors**.
- **Width** — how the profile width is calculated: **Automatic**, **% Period**, **Window Width** or **Fixed Bars**.
- **Opacity** and **Border width** — transparency and outline of the profile.
- **Style** — **Solid**, **Hollow**, **Line** or **Combined**.

### POC

- Highlights the price level with the maximum volume.
- Dynamic (developing) display mode shows the POC as it forms during the period.
- **Line extension** — **None**, **Till Interaction** (the line extends until price touches it) or **Till End Window**.
- Color, width and style are customizable.

### Value Area

- **Percentage** — the share of total volume the Value Area must contain.
- Developing mode plots the Value Area as it forms.
- Line extension carries the Value Area boundaries forward in time.

### Peaks and Valleys

- **Sensitivity** — how strict the detection of peaks and valleys is.
- **Minimum volume threshold** — ignores insignificant clusters.
- Highlighting with optional lines marks the detected levels on the chart.

### Summary

Displays aggregate statistics for each profile: total volume, delta, trade counts and tick information.

### Filter/Split Time

Session-based analysis using U.S. time-zone references. Modes: **None**, **Filter** (restrict the profile to a session), **Splitted** (separate profiles per session) or **Triple**.

### Right-click: merge and split

Right-click a profile on the chart to reshape it without touching the settings dialog: **Merge+** (merge forward), **Merge-** (merge backward), **Split+** (split forward), **Split-** (split backward) and **Reset All**.

[SCREENSHOT: The Market Profile settings dialog open on the General section, showing TPO Base Minute, TPO Type and Period options | market-profile-tpo-settings-general.png]

## Tips and common mistakes

- **Merging is for composites.** Use **Merge+** / **Merge-** to build multi-day composite profiles around a balance area — and remember **Reset All** exists when the structure changes.
- **Do not confuse the TPO shape with volume.** The letter count measures time at price; enable the **Summary** feature when you also want the volume, delta and trade-count numbers.
- **Match tick grouping to the instrument.** Too fine a grouping produces a jagged, unreadable profile; too coarse hides the peaks and valleys you are looking for.
- **Check the session filter against your instrument's hours.** The Filter/Split Time feature references U.S. time zones, so verify the split lands where you expect before trading off it.

## Related articles

- [[understanding-volume-profile]]
- [[understanding-auction-theory]]
- [[profile-chart-window]]
- [[deep-profile]]
- [[different-types-of-input]]
- [[indicator-layout]]
