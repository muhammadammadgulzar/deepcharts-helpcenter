---
title: "Annotations Overlay"
slug: "annotations-overlay"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Import the annotations drawn by an indicator on another chart — for example Bar POC levels from a 30-minute chart — onto the current chart."
keywords: ["annotations overlay", "overlay annotations", "import indicator from another chart", "chart id", "indicator id", "mirror indicator", "finder window"]
---

The Annotations Overlay indicator (listed as **Overlay Annotations** in the indicator menu) imports the annotations produced by an indicator on *another* chart into the current chart. The classic use: run [[bar-poc|Bar POC]] on a 30-minute chart and display those 30-minute POC levels on your 5-minute execution chart.

## What it is

Many DeepCharts indicators draw annotations — levels, zones, markers — that are computed from their own chart's timeframe. Annotations Overlay mirrors those drawings onto a different chart. You point it at a source chart (by its **Chart ID**) and a specific indicator on that chart (by its **Indicator ID**), and the annotations appear on your target chart, computed exactly as the source calculates them.

This gives you true multi-timeframe levels: the source indicator keeps running on its own resolution while you watch its output where you actually trade.

## When to use it

- You want higher timeframe indicator levels (for example Bar POC or a swing indicator) shown on a lower timeframe execution chart.
- You maintain one "analysis" chart with carefully configured indicators and want its annotations mirrored to other charts without reconfiguring everything.
- You want to compare an indicator's output across timeframes side by side on a single chart.

## Quick start

1. Set up the source first: open (or identify) the chart running the indicator whose annotations you want to import — for example Bar POC on a 30-minute chart.
2. On your target chart, open the indicators menu in the upper left corner and add **Overlay Annotations**.
3. Find the source **Chart ID**: right-click and select **Finder Window**, then enable the **Mirror** function. Hover over the source chart — the chart's ID appears in the first row of the finder window.

[SCREENSHOT: Finder Window with the Mirror function enabled, positioned over the source 30-minute chart, the first row showing the chart ID value highlighted | annotations-overlay-finder-window-chart-id.png]

4. Enter that value in the **Chart ID** field of the Annotations Overlay settings.
5. Find the **Indicator ID**: open the indicator list on the source chart and locate the small number in parentheses next to the indicator you want to import.

[SCREENSHOT: The source chart's indicator list with the small ID number in parentheses next to the Bar POC entry circled/highlighted | annotations-overlay-indicator-id-list.png]

6. Enter that number in the **Indicator ID** field of the Annotations Overlay settings.
7. Select **Apply and Save** in the lower right corner. The source indicator's annotations now render on your target chart.

[SCREENSHOT: A 5-minute chart displaying imported Bar POC levels originally computed on a 30-minute chart via Annotations Overlay, with the Annotations Overlay settings dialog showing the Chart ID and Indicator ID fields filled in | annotations-overlay-imported-levels.png]

## How to read it

The imported annotations look and behave exactly like the source indicator's own drawings — same levels, same updates. Interpret them using the source indicator's documentation (for example [[bar-poc]] for imported POC levels). The only difference is context: the annotations are computed on the source chart's timeframe, so a level from a 30-minute source represents 30-minute structure even though you see it on a 5-minute chart.

## Settings reference

The indicator has two key parameters to configure:

| Setting | What it does |
|---|---|
| **Chart ID** | Identifies the source chart containing the annotations to import. Found via the **Finder Window** with **Mirror** enabled — the value in the first row while positioned on the source chart. |
| **Indicator ID** | Identifies which indicator on the source chart to import. It is the small number in parentheses next to that indicator in the source chart's indicator list. |

Confirm changes with **Apply and Save** in the lower right corner of the settings window.

## Tips and common mistakes

- **The source chart must exist and keep running** — the overlay mirrors a live indicator on another chart. If the source chart is closed, there is nothing to import.
- **Wrong ID, wrong output.** If unexpected annotations appear, you most likely entered the ID of a different indicator on the source chart — re-check the number in parentheses in the source chart's indicator list.
- Configure the source indicator fully *before* wiring the overlay: styling and parameter choices are made on the source, and the overlay reflects them.
- Works best with annotation-drawing indicators (levels, zones, markers) such as Bar POC or swing-based tools; the example in the original documentation imports a Bar POC from a 30-minute chart into a 5-minute chart.
- If you only need a plain text label rather than mirrored indicator output, use [[text-on-chart|Text on Chart]].

## Related articles

- [[bar-poc]]
- [[swing-point]]
- [[text-on-chart]]
- [[link-windows]]
- [[different-types-of-input]]
- [[indicator-layout]]
