---
title: "Quick Chart Templates (OF-VP, D-VP, W-VP...)"
slug: "quick-chart-templates"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "What the OF-VP, OF-B/A, D-VP, D-DP, D-VL, W-VP, W-DP and C-VP radio buttons in the chart's bottom bar load, and when to use each preset."
keywords: ["OF-VP", "OF-B/A", "D-VP", "D-DP", "D-VL", "W-VP", "W-DP", "C-VP", "quick templates", "bottom bar buttons", "chart presets", "footprint preset", "volume profile preset"]
---
Every price chart in DeepCharts has a row of radio buttons in its bottom bar: **OF-VP**, **OF-B/A**, **D-VP**, **D-DP**, **D-VL**, **W-VP**, **W-DP** and **C-VP**. One click applies a complete, professionally configured orderflow layout to the chart — no indicator setup required.

This article explains what each preset loads and how it differs from the templates you save yourself.

## What it is

The quick-template radios are built-in, one-click presets of DeepCharts' house indicators — **Deep Print** and **Deep Profile** — with predefined settings, so you do not have to configure the basics yourself. They answer the question "how do I get a footprint or a volume profile on my chart right now?"

They are not user-editable. If you want a modified version of one of these layouts, add the underlying indicator yourself ([[deep-print]] or [[deep-profile]]), configure it, and save your own template — see [[templates-workspaces]].

The **Templates** button sitting next to the radios is a different feature: it is a shortcut for right-click → **Template → Load** and opens the **Local / Cloud / Shared** file picker for your own saved templates.

[SCREENSHOT: Bottom bar of a price chart showing the Templates button followed by the OF-VP, OF-B/A, D-VP, D-DP, D-VL, W-VP, W-DP and C-VP radio buttons, with the DOM Trading radio and Trading panel toggle at the right end | chart-bottom-bar-quick-templates.png]

## When to use it

- You want a footprint (orderflow) view of each candle without configuring Deep Print from scratch.
- You want the day's or week's volume or delta profile in one click.
- You are evaluating which orderflow layout suits your trading before committing to a custom template.
- You are following an educational video that starts from one of these presets.

## Quick start

1. Open a price chart — see [[first-chart]].
2. Look at the chart's bottom bar and click **OF-VP**.
3. Wait for the chart to redraw: each candle now displays its own volume profile (Deep Print in profile style).

[SCREENSHOT: Price chart immediately after clicking OF-VP, with the OF-VP radio selected in the bottom bar and each candle rendered as a per-bar volume profile | quick-template-of-vp-applied.png]

4. Click through the other radios to compare layouts, then settle on the one that matches your workflow.

> **Note:** [CONFIRM: whether selecting a quick-template radio replaces the chart's existing indicators or layers on top of them, and how to return the chart to its previous state afterwards]

## How to read it

Each preset is a view of the same underlying orderflow data at a different aggregation:

| Preset | What it loads | Based on |
|---|---|---|
| **OF-VP** | Deep Print in profile style — each candle shows its own volume profile | [[deep-print]] |
| **OF-B/A** | Deep Print in Bid/Ask columns style, with imbalance prints in bold and color intensity | [[deep-print]] |
| **D-VP** | Daily volume profile | [[deep-profile]] |
| **D-DP** | Daily delta profile | [[deep-profile]] |
| **D-VL** | Daily VWAP with 3 standard-deviation bands above and below | [[deep-profile]] |
| **W-VP** | Weekly volume profile | [[deep-profile]] |
| **W-DP** | Weekly delta profile | [[deep-profile]] |
| **C-VP** | Composite profile of all the data loaded in the chart | [[deep-profile]] |

The **OF-** presets turn each candle into a per-bar orderflow view — try the footprint below: hover the bid×ask cells and adjust the imbalance ratio to see what OF-B/A highlights in bold.

[WIDGET: footprint-lab]

Reading pointers:

- The **OF-** presets are per-bar orderflow views. Start with [[reading-a-footprint]] to interpret the bid/ask columns and imbalance prints, and [[orderflow-101]] for the underlying concepts.
- The **D-** and **W-** presets aggregate one day or one week per profile. POC, value area and high/low-volume nodes are explained in [[understanding-volume-profile]].
- **D-VL** is the exception: instead of a profile it plots the daily VWAP with three standard-deviation bands on each side — see [[understanding-vwap]] for how traders use those bands.
- **C-VP** builds a single profile from everything currently loaded in the chart, so its shape changes if you change how much history the chart loads.

Practice reading the profile presets on the live profile below — drag the Value Area % and hover the rows to see how POC, VAH and VAL work in D-VP, W-VP and C-VP.

[WIDGET: volume-profile-lab]

## Settings reference

The presets themselves expose no settings — they are fixed configurations. The bottom bar contains:

| Control | What it does |
|---|---|
| **Templates** button | Opens the template file picker (Local / Cloud / Shared) — shortcut for right-click → **Template → Load**. See [[templates-workspaces]]. |
| **OF-VP** ... **C-VP** radios | Apply the corresponding built-in preset (table above). Not user-editable. |
| **DOM Trading** radio | Switches the chart into the on-chart click-trading ladder — see [[dom-trading-chart]]. |
| **Trading panel** toggle | Shows or hides the chart's trading panel — see [[trading-panel-reference]]. |

To adjust anything a preset shows (tick grouping, imbalance thresholds, colors), open the indicator's own settings from the per-chart indicator manager and configure [[deep-print]] or [[deep-profile]] directly.

## Tips and common mistakes

- **Trying to edit a preset.** The radios are fixed. Recreate the layout with your own Deep Print / Deep Profile settings and save it as a template instead — then load it from the **Templates** button.
- **Confusing the presets with saved templates.** Radios = built-in and fixed; **Templates** button = your own files plus the team's read-only **Shared** library.
- **Expecting C-VP to match another trader's composite.** C-VP profiles all data loaded in *your* chart; two charts loading different amounts of history produce different composites.
- **Judging a preset on a delayed feed.** Imbalance prints and delta coloring are most meaningful on a live feed; on the free delayed feed the data lags 15 minutes — see [[free-delayed-data-feed]].

## Related articles

- [[templates-workspaces]]
- [[deep-print]]
- [[deep-profile]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[reading-a-footprint]]
