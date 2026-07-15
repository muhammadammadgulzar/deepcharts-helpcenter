---
title: "How to Change the Layout of Indicators"
slug: "indicator-layout"
category: "Indicators & Analysis"
subcategory: "Indicator Basics"
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Move an indicator to a different chart area, or merge two indicators into the same pane."
keywords: ["indicator layout", "chart area", "merge indicators", "indicator pane", "move indicator", "combine indicators", "indicator on price chart"]
---

By the end of this guide you will have every indicator sitting exactly where you want it — in its own pane below the price chart, or merged into the same area as another indicator.

The DeepCharts chart window divides itself into sections based on the number of active indicators. For example, with ADX and MACD added, the window shows three distinct chart areas: one for price, one for ADX and one for MACD. Each area has a number, and every indicator is assigned to one of them.

## Before you start

- A chart open with data loaded — see [[first-chart]]
- At least one indicator added to the chart
- Optional background on the chart window itself — [[chart-window]]

## Steps

1. Add the indicators you want to arrange. The chart automatically splits into one area for price plus one per lower-pane indicator.

   [SCREENSHOT: Chart window with ADX and MACD active, showing three stacked chart areas — price on top, ADX in the middle, MACD at the bottom | indicator-layout-three-areas.png]

2. Click the **Indicators** button on the chart. A dropdown menu lists every active indicator together with the chart area it currently occupies — use this to see the current layout at a glance.

   [SCREENSHOT: The Indicators button dropdown open, listing the active indicators with the chart area number shown next to each one | indicators-dropdown-areas.png]

3. Open the settings of the indicator you want to move.

4. Select a different chart area assignment for it. [CONFIRM: exact label of the chart-area field in the indicator settings dialog]

   [SCREENSHOT: An indicator settings dialog with the chart-area assignment control visible and a different area number being selected | indicator-settings-change-area.png]

5. Apply the change. The chart re-divides and the indicator moves to its new area.

### If you want two indicators in the same pane

Assign both indicators the **same** area number. Any two or more indicators that share an area number render together in that pane. A common example is displaying Price and a Moving Average together in chart area 1, so the average draws directly on the price candles.

[SCREENSHOT: Price chart with a Moving Average merged into chart area 1, drawn over the candles instead of in a separate pane | moving-average-merged-price.png]

### If you want an indicator back in its own pane

Assign it an area number that no other indicator is using. The chart adds a new section for it.

## Verify it worked

- The chart repartitions immediately: the indicator now draws in the area you assigned.
- Click the **Indicators** button again — the dropdown shows the indicator listed with its new chart area number.

## If something went wrong

- **An indicator seems to have disappeared after merging.** Check the **Indicators** dropdown first — it will tell you which area the indicator is actually in. When two indicators with very different value scales share one pane, one of them can render as a nearly flat line; moving it back to its own area restores its visible range.
- **Your layout was gone after restarting DeepCharts.** The platform does not auto-save chart layouts. Save your arrangement as a template (single chart) or workspace (whole screen) — see [[templates-workspaces]].

> **Tip:** Once your indicator arrangement is right, save it immediately as a template or workspace. Unsaved layouts are lost when the application closes.

## Related articles

- [[different-types-of-input]]
- [[chart-window]]
- [[templates-workspaces]]
- [[moving-average]]
- [[macd]]
- [[adx]]
