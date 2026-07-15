---
title: "Deep Print (Footprint)"
slug: "deep-print"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "10 min read"
description: "Complete reference for Deep Print, the DeepCharts footprint indicator: bid/ask split, delta, imbalances, POC, value area, clusters and multi-column layouts."
keywords: ["footprint", "deep print", "bid ask footprint", "footprint chart", "orderflow candles", "imbalance footprint", "delta footprint", "multi column footprint"]
---

Deep Print is the core volumetric analysis tool in DeepCharts — a footprint indicator (also known by the registered name Footprint®). It merges price, volume and orderflow into single candles, showing the executed orders at each price tick inside every bar instead of only the bar's open, high, low and close.

Traders use it to spot buyer and seller acceleration, absorption, depletion and bid/ask dominance at each price level. It is fully customizable, from what it counts to how every cell is colored.

## What it is

A normal candle tells you where price went. Deep Print tells you what traded to make it go there: at every price tick inside the candle you see the executed volume — total, split by bid and ask, or as delta (the difference between aggressive buying and selling). On top of that base display it can highlight imbalances, the candle's point of control, the value area, volume clusters, single prints, extreme-ratio levels and pullbacks.

## When to use it

- You trade orderflow and need to see who is aggressing at each price, not only where price closed.
- You want to identify absorption (heavy volume that fails to move price) and depletion at swing extremes.
- You want per-candle reference levels: volume POC, delta POC and value area.
- You want to monitor several readings at once — Deep Print supports up to 4 side-by-side columns per candle (for example Bid×Ask, Delta and Volume simultaneously).

## Quick start

1. Open a chart and add **Deep Print** from the chart's **Indicators** button.
2. Open the indicator settings.
3. In **General settings**, set **Type** to the display you want (start with **Ask/Bid Split** or **Delta + Total Volume**) and **Mode** to **Profile**.
4. Apply — every candle now shows its per-tick executed volume.

### The Deep Print Studio

Below is a full working editor for this indicator. Every setting group from the real dialog is live: switch the **Type** between all four displays, flip **Profile/Box** mode, tune the diagonal-imbalance thresholds, style the POC and value area, and watch the candles re-render as you type. Hover any cell to have it decode itself. When the footprint looks the way you want, press **⬇ Download my settings** — you get a file listing every choice, organized by the exact sections of the in-app dialog, ready to replicate in DeepCharts. Try **▶ Replay candles** to watch the prints build the candle, and **◇ 3D view** to tilt the stage.

[WIDGET: deep-print-studio]

### Recommended starter configuration

These are suggestions, not defaults — adjust to your market and style:

| Area | Suggested start |
|---|---|
| **Type** | **Delta + Total Volume** — delta reading plus total activity in one view |
| **Mode** | **Profile** — histogram-style cells are easier to scan than boxes at first |
| **Input Type** | **Volume**; switch to **Aggregate Volume** when hunting split institutional orders (see [[different-types-of-input]]) |
| **Tick grouping** | **Automatic** to begin; set **Auto Grouping** to **Manual** with **Manual Ticks** = 1 if you want rows that never shift when zooming |
| **POC** | Enable the Volume POC so each candle's highest-volume price stands out |
| **Value Area** | Enable with **% Value Area** = 70% |
| **Text Format** | **K** on high-volume instruments so 1,000 prints as 1K and cells stay readable |

## How to read it

- **Cells**: each row inside a candle is one price tick (or group of ticks) with its executed volume. In Ask/Bid Split mode the bid side records aggressive selling and the ask side aggressive buying.
- **Delta**: ask volume minus bid volume at a level. Positive delta means aggressive buyers dominated there; negative means aggressive sellers did.
- **Volume POC**: the highest-volume price of the candle — where the most business was done. **Delta POC** marks the level with the largest net delta.
- **Value area**: the price band containing the configured percentage (for example 70%) of the candle's volume.
- **Imbalances**: when the volume difference between bid and ask at a level exceeds your threshold, the cell is highlighted — one side clearly overpowered the other.
- **Absorption and depletion**: heavy volume at a level with no price progress suggests passive orders absorbing the aggression; shrinking volume into an extreme suggests the move is running out of participants. For worked chart examples, see [[reading-a-footprint]].

[SCREENSHOT: Zoomed view of two or three Deep Print candles with the Volume POC border, the value area highlight and one stacked imbalance annotated | deep-print-poc-value-area.png]

## Settings reference

Grouped exactly as in the indicator dialog.

### General settings (Typology)

| Setting | What it does |
|---|---|
| **Type** | Display basis: **Volume** (total traded volume), **Ask/Bid Split** (buy vs sell volume compared), **Delta** (difference between ask and bid), **Delta + Total Volume** (combined view) |
| **Mode** | **Profile** (histogram-style representation) or **Box** (compact boxed values) |

### Data settings

| Setting | What it does |
|---|---|
| **Input Type** | Data source: **Volume** (total traded volume per price), **Aggregate Volume** (aggregated trades), **Order** (order-book volume), **Num Trades** (number of executions per price). See [[different-types-of-input]] for when each is right |
| **Min/Max Filter** | Excludes values outside the defined range — reduces noise from very small (or distorting very large) trades |

### Tick grouping

| Setting | What it does |
|---|---|
| **Auto Grouping** | **Automatic** (platform optimizes the grouping) or **Manual** (you define it) |
| **Auto Group Factor** | Controls the tick aggregation level when Automatic is used |
| **Manual Ticks** | The grouping quantity when Manual is used |
| **Group Mode** | **Fixed** (constant grouping) or **Based on Open/Close** (dynamic grouping per candle behavior) |

> **Note:** Tick grouping is a shared setting that appears in many DeepCharts indicators (Deep Print, Deep Profile and other profile-based tools) with the same fields. With **Automatic**, row levels can shift when you zoom the price scale — to freeze them, set **Auto Grouping** to **Manual** and **Manual Ticks** to 1.

### Plot settings (Bar Style)

| Setting | What it does |
|---|---|
| **Bar Marker Width** | Thickness of the candle marker |
| **Outside Bar Style** | Bar (with shadows) or body-only style |
| **Marker Alignment** | Positions the marker to the right or center |
| **Outer Edge Mode** | Draws a border outlining the candle body |

### Background settings

| Setting | What it does |
|---|---|
| **Coloration** | Customizes the visualization for volume, delta and market imbalances |
| **Border Width** | Edge thickness of the volume profile, in pixels |
| **Opacity** | Background transparency level |

### Text settings

| Setting | What it does |
|---|---|
| **Font Size** | Text size inside footprint cells |
| **Text Format** | **Automatic** (context-adapted), **Normal** (full numbers, no abbreviation), **K** (thousands — 1K = 1,000) |
| **Coloration** | Customizes how the numbers are rendered for easier interpretation |
| **Dynamic Text Size** | Auto-scales text with volume/delta/imbalance amounts — big prints get big numbers |
| **Increase Dynamic Text Size** | Strengthens the dynamic sizing effect |
| **Show Texts-by-Zeros** | Displays zero-value cells instead of leaving them blank |

### Background coloration

| Setting | What it does |
|---|---|
| **Color Mode** | **None**, **Fixed** (predefined colors, no gradients), **Fading** (gradient by intensity), **More Colors** (multiple user-defined colors — requires **Range Definition** = USER) |
| **Color Calculation** | What drives the color: **Volume**, **Delta**, **Imbalance**, **Dominant Volume** (largest side per price), **Dominant Volume Delta** |
| **Min. Vol. Diff. For Imbalance** | Minimum bid/ask difference for a level to count as imbalanced |
| **Include Zero on Imbalance** | Includes levels with no volume on one side in imbalance analysis |
| **Color Only Dominant Side** | Colors only the dominant volume side of each level |
| **Background Inferior Side** | Background color of the non-dominant side |

### Colors

| Setting | What it does |
|---|---|
| **Fixed-Volume Color** | Single color for total volume |
| **Fixed-Bid Color** | Color for the bid (sell) volume |
| **Fixed-Ask Color** | Color for the ask (buy) volume |

### Range

| Setting | What it does |
|---|---|
| **Range Definition** | **Automatic** (platform-defined) or USER (custom ranges) |
| **Range (Show Settings)** | Opens the custom value-range configuration |

### POC

| Setting | What it does |
|---|---|
| **Enable** (Volume POC) | Shows the candle's highest-volume price |
| **Border Color / Border Width** (Volume POC) | Highlight color and edge thickness of the Volume POC |
| **Enable** (Delta POC) | Shows the level with the largest net delta |
| **Minimum Delta** (Delta POC) | Minimum delta value required before the Delta POC displays |
| **Ask Border Color / Bid Border Color** (Delta POC) | Border colors for ask-side and bid-side delta POCs |
| **Border Width** (Delta POC) | Edge thickness of the Delta POC |

### Value Area

| Setting | What it does |
|---|---|
| **Enable** | Toggles the value area display |
| **% Value Area** | Percentage of total volume used for the calculation (e.g. 70%) |
| **Highlight** | Visually emphasizes the value area on the candles |
| **Outside Color** | Color for the area outside the value area |
| **Show Line / Line Color / Line Width** | Delimiting line of the value area and its styling |

### Alerts

| Setting | What it does |
|---|---|
| **Enable Sound / Alert Sound** | Sound notification toggle and sound selection |
| **Enable Message / Alert Message** | Popup toggle and the custom message text shown |
| **Alert Minimum Volume** | Minimum volume threshold before an alert fires |

### Single Print

| Setting | What it does |
|---|---|
| **Enable** | Highlights price levels printed by a single order meeting the criteria |
| **Single Print Min Value** | Minimum volume for a single print to be relevant |
| **Enable Only On High Or Low** | Restricts highlighting to the candle's extreme prices |
| **Border Width / Border Color** | Styling of the single-print highlight |

### Ratio

| Setting | What it does |
|---|---|
| **Enabled** | Shows the bid/ask ratio at the bar extremes |
| **Tick Offset** | Position of the ratio text relative to the bar high/low |
| **Text Color / Text Size** | Ratio text styling |
| **Min Ratio / Maximum Ratio** | Minimum value for display and maximum value limit |

### Vol Cluster

| Setting | What it does |
|---|---|
| **Enable** | Highlights volume clusters |
| **Min. Volume** | Minimum volume for a cluster to count |
| **Increase Volume Based on Tick Grouped** | Sums volume across neighboring grouped ticks |
| **Line Width / Back Color / Opacity** | Cluster edge thickness, background color and its opacity |

### Pull Back

| Setting | What it does |
|---|---|
| **Enable** | Highlights retracement bars — a scalping aid |
| **Pullback Min Source Bar Ticks** | Minimum ticks in the source bar |
| **Pullback Min Pullback Ticks** | Minimum retracement distance in ticks |
| **Bar Color** | Highlight color of pullback bars |

### Multi-column layouts

Deep Print supports up to 4 simultaneous columns per candle, each showing a different reading side by side — for example Bid×Ask, Delta and Volume at once. To set it up: add multiple Deep Print indicators to the chart, open each one's settings, go to **Sizing → Multi Column**, set the column quantity, assign each indicator a unique position, and customize each independently.

[SCREENSHOT: Deep Print settings dialog open at the Sizing section with Multi Column configured, next to a chart showing a candle rendered as three side-by-side columns (Bid×Ask, Delta, Volume) | deep-print-multi-column.png]

## Tips and common mistakes

- **Numbers unreadable or cells too small?** Raise **Font Size** or enable **Dynamic Text Size**; set **Text Format** to **K** to compact big numbers; widen **Bar Marker Width**; or use coarser tick grouping so cells are fewer and taller.
- **Too many imbalance highlights?** Raise **Min. Vol. Diff. For Imbalance**, apply a **Min Filter** on the input data, or enable **Color Only Dominant Side**. Very fine tick grouping also multiplies noise.
- **Your rows don't match another trader's chart?** Compare **Input Type**, tick grouping (Automatic vs Manual, group factor) and **Group Mode** — any of these changes the cells.
- **Want bid×ask numbers and delta at the same time?** Either set **Type** to **Delta + Total Volume**, or build a multi-column layout.
- **POC or value area not visible?** Each has its own **Enable** toggle; the Delta POC additionally requires its **Minimum Delta** threshold to be met.
- **Alert not firing?** Check **Alert Minimum Volume** first — and note that the sound and message toggles are separate.

## Related articles

- [[reading-a-footprint]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[deep-profile]]
- [[deep-delta]]
- [[indicator-layout]]
