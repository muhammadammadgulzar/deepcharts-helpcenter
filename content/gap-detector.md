---
title: "Gap Detector"
slug: "gap-detector"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Highlight price gaps on the chart automatically, filtered by percentage or tick size, and track them until they are filled."
keywords: ["gap detector", "price gap", "gap fill", "opening gap", "gap up", "gap down", "unfilled gap", "gap indicator"]
---

A price gap — an area the market jumped over without trading — is one of the oldest reference levels in technical analysis. The Gap Detector highlights any price gaps on the chart automatically, so you never have to scroll back looking for the untraded area price might return to fill.

You define what counts as a gap (by percentage or by ticks), and the indicator marks qualifying gaps with distinct colors for bullish and bearish cases.

## What it is

The Gap Detector scans the chart for places where price jumped from one bar to the next, leaving an untraded zone in between, and highlights those zones. Because tiny gaps happen constantly on fast intraday charts, the indicator includes a minimum-size filter: you choose whether a gap must span at least a given **percentage** of price or a given **number of ticks** before it is marked.

> **Note:** This indicator marks genuine market gaps. If your chart shows missing candles or blank stretches caused by data problems, that is a different issue — see [[gaps-in-price]].

## When to use it

- To track open (unfilled) gaps as price targets — "gap fill" is a widely followed trade idea, especially for opening gaps.
- To mark gap edges as support and resistance: the boundaries of an untraded zone often produce reactions on a retest.
- To filter significance: with a tick or percentage minimum you only see gaps large enough to matter for your strategy.
- To review session opens quickly — overnight and weekend gaps stand out immediately when the indicator is on.

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Gap Detector" and click **+** to add it.
4. Click the gear icon next to the indicator to open its settings. Choose your **Gap Mode**: **Tick** is the natural choice for futures (set **Tick Value** to a size that is meaningful for your instrument), while **Percentual** scales with price and works across instruments.
5. Set clearly different colors for bullish and bearish gaps and adjust the opacity so the highlights don't hide the candles.

[SCREENSHOT: An intraday futures chart with the Gap Detector active — a highlighted bullish gap zone from a session open, shown as a shaded rectangle extending to the right until filled | gap-detector-on-chart.png]

## How to read it

- **A bullish gap** (gap up) is a zone where price jumped higher without trading; **a bearish gap** (gap down) is the mirror. The indicator colors them separately.
- **Open gaps are magnets and markers.** Many traders treat an unfilled gap as a potential target, and its edges as reaction levels. Neither is guaranteed — a gap that runs with strong momentum can stay open for a long time.
- **A gap disappearing from the chart means it was filled.** With **Trigger Whole Bar** enabled, a gap is only removed once it has been closed completely — partial fills leave the gap marked, so you can still trade the remaining untraded portion.
- **Size matters.** Gaps that barely clear your minimum filter are routine noise; gaps several times the minimum usually carry information about overnight repricing or news.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Gap Mode** | Determines how gaps are identified and measured. **Percentual** calculates gaps based on a percentage value; **Tick** calculates gaps based on a tick value. |
| **Perc Value** | The minimum percentage value for gap calculation — smaller values detect smaller gaps. Used in Percentual mode. |
| **Tick Value** | The minimum number of ticks for gap calculation. Used in Tick mode. |
| **Trigger Whole Bar** | When activated, the indicator only deletes gaps that are closed completely; partially filled gaps remain highlighted. |

### Colors

| Setting | What it does |
|---|---|
| **Bullish / bearish gap colors** | Separate colors for gap-up and gap-down zones so direction is readable at a glance. |
| **Opacity** | Transparency of the highlighted gap zones. |

[SCREENSHOT: The Gap Detector settings dialog showing Gap Mode with Percentual and Tick options, the Perc Value and Tick Value fields, the Trigger Whole Bar toggle and the color/opacity controls | gap-detector-settings.png]

## Tips and common mistakes

- **Tune the minimum to your instrument.** A 4-tick gap is meaningful on some products and constant noise on others. If the chart is covered in highlights, your **Tick Value** or **Perc Value** is too small for the instrument and timeframe.
- **Decide how you want partial fills handled.** With **Trigger Whole Bar** off, gap-removal behavior differs — if you trade partial gap fills, keep it on so the remaining zone stays visible.
- **Distinguish session gaps from intrabar jumps.** On fast tick-level moves, small gaps can appear intraday; the ones with the strongest follow-through statistics are usually session-open gaps. Consider the session context from [[session-marker]] when ranking them.
- **A gap is context, not a signal.** Combine gap zones with orderflow or auction context — [[understanding-auction-theory]] explains why untraded areas attract price — instead of fading every gap automatically.

## Related articles

- [[fvg-identifier]]
- [[auction-gap-tracker]]
- [[unfinished-auction]]
- [[understanding-auction-theory]]
- [[different-types-of-input]]
- [[indicator-layout]]
