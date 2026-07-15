---
title: "Text on Chart"
slug: "text-on-chart"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "beginner"
time: "3 min read"
description: "Display a custom text message directly on your chart for notes, reminders and trading plan cues."
keywords: ["text on chart", "chart note", "add text to chart", "chart label", "notes on chart", "chart reminder"]
---

Text on Chart displays a custom text message directly on your chart. Traders use it for notes, reminders, trading ideas and market observations they want visible at a glance during analysis — a trading plan cue, a news warning, or the identifying label of a workspace layout.

## What it is

It is a lightweight annotation indicator: you type a message once in its settings, and DeepCharts renders that text on the chart. Unlike freehand annotations, the text is part of the indicator, so it persists with the chart configuration and travels with saved layouts (see [[templates-workspaces]]).

## When to use it

- Keep your trading plan or risk rules visible on the chart while you trade ("no entries before 9:45", "max 2 attempts").
- Mark a chart with the scenario or bias you prepared during pre-market analysis.
- Label charts in a multi-chart workspace so you can identify each at a glance.
- Leave yourself reminders about upcoming events relevant to the instrument.

## Quick start

1. Open the indicator menu on your chart and add **Text on Chart**.
2. Open the indicator settings.
3. Type your message in the **Text** field.
4. Set **Font Size** large enough to read at a glance, and pick a **Text Color** that contrasts with your chart background.
5. Optionally set a **Back Color** to place the text on a solid background block for readability.
6. Apply the settings.

[SCREENSHOT: A chart with the Text on Chart indicator displaying a short trading-plan note in large text with a contrasting background block, clearly readable over the candles | text-on-chart-note-example.png]

## Settings reference

[SCREENSHOT: Text on Chart settings dialog showing the Font Size, Text Color, Back Color and Text fields, with a sample message entered in the Text field | text-on-chart-settings.png]

| Setting | What it does |
|---|---|
| **Font Size** | Adjusts the size of the text on the chart. Larger sizes increase visibility and prominence; smaller sizes create subtle annotations that use less space. |
| **Text Color** | The color of the displayed text. Choose a color with sufficient contrast against your chart background. |
| **Back Color** | The background color behind the text. A solid background significantly improves readability by creating contrast between the text and the chart elements behind it. |
| **Text** | The main text input field — the custom message or information to display on the chart. |

## Tips and common mistakes

- **Contrast is everything.** Light text on a light theme (or dark on dark) disappears — set **Back Color** rather than hunting for a text color that works over candles.
- Keep messages short. The indicator is for glanceable cues, not paragraphs; long text competes with price for attention.
- For arrows, boxes and price-anchored notes, use [[drawing-tools]] instead — Text on Chart is a fixed message, not a price-level annotation.
- Add the indicator to a saved template so recurring notes (like session rules) appear on every chart you open from it — see [[templates-workspaces]].

## Related articles

- [[drawing-tools]]
- [[annotations-overlay]]
- [[templates-workspaces]]
- [[different-types-of-input]]
- [[indicator-layout]]
