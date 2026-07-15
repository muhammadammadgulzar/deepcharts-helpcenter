---
title: "FVG Identifier"
slug: "fvg-identifier"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Automatically detect and highlight Fair Value Gaps (FVGs) on the chart, with tick-size filters, mitigation rules and extension controls."
keywords: ["fvg identifier", "fair value gap", "fvg", "imbalance zone", "mitigation", "smart money concepts", "fvg indicator", "fair value gaps"]
---

The FVG Identifier automatically detects and highlights Fair Value Gaps (FVGs) on the chart. A Fair Value Gap forms when price moves aggressively enough to leave an imbalance between candles — a slice of prices that was skipped rather than traded through in both directions. These zones frequently act as future reaction or mitigation areas, which is why many traders keep them marked.

Instead of eyeballing three-candle sequences yourself, the indicator finds qualifying gaps, shades them, extends them forward, and can remove them automatically once price has traded back into them.

## What it is

The FVG Identifier answers the question "where did price move so fast that it left an imbalance, and which of those zones are still open?" When a gap between candles meets your minimum size (in ticks), the indicator draws a shaded zone across that price range and extends it to the right until your mitigation rule is met — for example, when price wicks into the zone or fills a set percentage of it.

FVGs are commonly read as footprints of one-sided, aggressive order flow: the market moved so fast that two-way trade never happened in that price range, and price often returns later to "rebalance" it.

## When to use it

- To mark potential reaction zones: open FVGs are popular areas for pullback entries in the direction of the original impulsive move.
- To track mitigation: the indicator can remove or update zones as price trades back into them, keeping only the still-relevant imbalances on the chart.
- To filter significance: the tick-size limits let you ignore micro-gaps and cap outsized ones, so only tradeable zones remain.
- To supplement orderflow analysis — FVGs from price action often line up with imbalance signals from volume-based tools such as [[imbalance-tracker]].

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "FVG Identifier" and click **+** to add it.
4. Click the gear icon next to the indicator to open its settings. Set **Min num ticks** high enough that routine bar-to-bar noise is excluded on your timeframe — start small and raise it until only clean zones remain.
5. Choose whether zones should disappear on a wick touch (**Remove Line On Shadow Triggered**) or only after a percentage fill (**% breakout**), depending on how strict your definition of mitigation is.

[SCREENSHOT: A price chart with the FVG Identifier active — two shaded FVG zones extending right from impulsive moves, one still open and one about to be tagged by a pullback | fvg-identifier-on-chart.png]

## How to read it

- **An open FVG below price** (left by an aggressive up-move) is a potential demand/reaction zone on a pullback; **an open FVG above price** is the mirror for down-moves.
- **First touch matters most.** The common playbook watches the first return into a fresh zone; a zone that has been entered repeatedly has already done most of its rebalancing.
- **Mitigation is your cleanup rule.** With a strict rule (any wick removes the zone) your chart stays minimal; with a percentage-fill rule, partially filled zones survive and you can trade the unfilled remainder.
- **Size is information.** Very small gaps are mostly noise — that is what **Min num ticks** is for — while extremely large gaps often come from news events and behave less predictably, which is why a **Max num ticks** cap exists.

## Settings reference

### Display

| Setting | What it does |
|---|---|
| **Horizontal** | Draws the FVG highlights directly on the price chart. |
| **Vertical** | Displays the indicator vertically, where supported. |
| **Panel** | Selects which chart panel receives the overlay. |

### General Parameters

| Setting | What it does |
|---|---|
| **Min num ticks** | The minimum size, in ticks, required for a gap to be considered a valid FVG. Smaller values detect more gaps; larger values filter out minor imbalances. |
| **Max num ticks** | The maximum gap size allowed to qualify as an FVG. Filters out excessively large moves. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Line Width** | Thickness of the FVG zone borders. |
| **Color** | Color of the highlighted FVG area. |
| **Back Opacity** | Transparency of the zone background — higher is more solid, lower is more transparent. |

### Extension

| Setting | What it does |
|---|---|
| **Reset Start Day** | Resets FVG tracking at the start of each trading day. |
| **Remove Line On Shadow Triggered** | Removes an FVG zone as soon as price wicks into it. |
| **Max bars extension** | Limits how many bars a zone extends forward. 0 = extends indefinitely. |
| **% breakout** | The percentage of the gap that must be filled for the zone to count as mitigated. |

[SCREENSHOT: The FVG Identifier settings dialog showing the General Parameters (Min num ticks, Max num ticks), Plot Settings and the Extension group with Reset Start Day, Remove Line On Shadow Triggered, Max bars extension and % breakout | fvg-identifier-settings.png]

## Tips and common mistakes

- **Don't run a 0-tick minimum on fast charts.** Low-timeframe futures charts produce constant tiny imbalances; without a sensible **Min num ticks** the chart becomes wallpaper.
- **Decide what "mitigated" means before you trade it.** A wick-touch rule and a 50% fill rule produce different charts and different trades — set **Remove Line On Shadow Triggered** and **% breakout** to match your playbook, not the defaults of whatever tutorial you last watched.
- **Use Reset Start Day deliberately.** Enabling it keeps the chart focused on today's imbalances; disabling it preserves multi-day zones, which matter more on higher timeframes.
- **FVGs are a price-action proxy for imbalance, not proof of it.** Volume-based tools measure aggression directly; when an FVG and a volume imbalance coincide, the zone deserves more weight. See [[understanding-auction-theory]] for the underlying logic.

## Related articles

- [[gap-detector]]
- [[imbalance-tracker]]
- [[understanding-auction-theory]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]
