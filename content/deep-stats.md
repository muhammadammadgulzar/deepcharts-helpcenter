---
title: "Deep Stats"
slug: "deep-stats"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Per-bar orderflow statistics table that shows volumes, delta, COT values, ratios and effort metrics beneath your chart."
keywords: ["deep stats", "deepstats", "orderflow statistics", "COT H", "COT L", "cumulative delta", "delta percent", "bar statistics table", "stats table under chart"]
---

Deep Stats displays a multi-level text table beneath your chart with one column per bar. Each row is an orderflow metric — total volume, delta, trade counts, COT values, ratios, effort — so you can read the numbers behind every candle instead of guessing from its shape.

Where footprint tools show you where volume traded inside the bar, Deep Stats condenses each bar into a set of comparable numbers. It is the numeric X-ray of the candle.

## What it is

Deep Stats is an orderflow statistics indicator that renders a text grid under the price chart. Every completed bar gets a column of values, and cell colors scale with statistical intensity so outliers stand out at a glance. It answers questions like "how much delta did this bar really have?", "was that push absorbed?", and "is volume drying up at these highs?"

[SCREENSHOT: Chart window with Deep Stats applied — price candles on top and the multi-level Deep Stats text table in a panel beneath, with several metric rows (Tot Vol, Delta Vol, Delta %, COT Bar) visible and one strongly colored outlier cell | deep-stats-chart-overview.png]

## When to use it

- You want per-bar confirmation of what the candle shape suggests (real delta, trade counts, intensity) before acting on it.
- You are hunting absorption: high effort or contrarian COT readings while price barely moves.
- You want exhaustion clues at highs or lows via the High Ratio and Low Ratio columns.
- You track cumulative delta (CVD) numerically alongside price rather than as a separate plot.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Deep Stats** and click **+** to add it.
3. Click the **Settings** icon next to Deep Stats.
4. Under **Data Settings**, pick your **Input Data** (**Volume**, **Order** or **Aggregate Trades** — see [[different-types-of-input]] for what each means). **Volume** is the natural starting point.
5. In the **Subgraphs** section, set the **Series style** of every metric you do not need to **Ignore**. A compact starter set: **Tot Vol**, **Delta Vol**, **Delta %**, **Delta Dly**, **COT Bar**.
6. Click apply/save and confirm the table renders under the chart.

[SCREENSHOT: Deep Stats settings dialog open on the Data Settings section, showing the Input Data dropdown expanded with Volume, Order and Aggregate Trades options, plus the Min Filter and Max Filter fields | deep-stats-settings-data.png]

## How to read it

Each column is a bar; each row is a metric. Cell color intensity is based on standard deviations, so a strongly colored cell means "statistically unusual for this instrument right now."

| Metric | What it tells you |
|---|---|
| **Tot Vol / Bid Vol / Ask Vol / Delta Vol** | The volume basics: total traded, sold at bid, bought at ask, and the net difference. |
| **Max Delta Vol / Min Delta Vol** | The delta extremes reached within the bar — a bar can close delta-flat after a violent internal swing. |
| **Tot NT / Delta NT** | Number of trades and the ask-vs-bid trade-count differential. |
| **Delta HL** | Ticks between the bar's high and low. |
| **Delta %** | Delta Vol as a percentage of Tot Vol: (Delta Vol / Tot Vol) × 100. |
| **Delta Dly** | Running cumulative volume delta (CVD). |
| **Vol(s)** | Volume per second — trading intensity. |
| **COT H** | Cumulative delta from the last low to the close. A negative COT H on a bearish bar is a bullish absorption signal. |
| **COT L** | Cumulative delta from the last high to the close. A positive COT L on a bullish bar is a bearish absorption signal. |
| **COT Bar** | Shows COT H on bullish bars and COT L on bearish bars automatically. |
| **Time(s)** | Bar duration in seconds — contextualizes the volume figures. |
| **Bar Ratio / High Ratio / Low Ratio** | Penultimate-to-final tick volume ratios. A low High Ratio flags buyer exhaustion at the highs; a low Low Ratio flags seller exhaustion at the lows. |
| **Total Effort / Delta Effort** | Volume (or delta) relative to bar width. High effort with little price movement points to absorption. |

Practical reads:

- **Absorption**: COT H negative on bearish bars (buyers absorbing the selling), COT L positive on bullish bars (sellers absorbing the buying), or high Effort while price barely advances.
- **Exhaustion**: a low High Ratio into resistance or a low Low Ratio into support suggests the aggressor is running out of orders.
- **Intensity shifts**: Vol(s) jumping while Time(s) shrinks means participation is accelerating.

## Settings reference

Grouped as in the settings dialog.

### Data Settings

| Setting | What it does |
|---|---|
| **Input Data** | Data source for the calculations: **Volume**, **Order** or **Aggregate Trades**. See [[different-types-of-input]]. |
| **Min Filter** | Minimum trade-size threshold; smaller trades are excluded from the statistics. |
| **Max Filter** | Maximum trade-size threshold; **0** means no maximum filter. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Dev. std. for Coloring** | Controls how aggressively cell colors scale with standard deviation, plus text size/color, number formatting (**Auto Text Format** compacts large numbers) and cell order. |
| **Settings-Header** | Header row visibility, colors and size. |
| **Threshold** | Highlights cells when the chosen metrics exceed thresholds you define. |

### Subgraphs

| Setting | What it does |
|---|---|
| **Series style** (per metric) | **Text** shows the metric row; **Ignore** hides it. |
| **Colors** (per metric) | Cell color used for that metric's row. |

## Tips and common mistakes

- **Start minimal.** Enabling all metrics buries the useful ones. Set everything you do not actively read to **Ignore**, then add rows back as you need them.
- **Use Auto Text Format** if long numbers get clipped — it compacts values so columns stay readable.
- **Do not read COT H/COT L in isolation.** They are absorption clues, not entry signals — confirm against structure and the tape (see [[adv-time-and-sales]]).
- **Match the Min Filter to the instrument.** A filter that isolates institutional size on one contract removes almost everything on a thinner one.
- **Threshold highlighting beats staring.** If you only care about, say, outsized Delta %, set a Threshold so the table flags it for you.

## Related articles

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[deep-print]]
- [[deep-trades]]
- [[on-candle-stats]]
