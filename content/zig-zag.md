---
title: "Zig Zag"
slug: "zig-zag"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Use the Zig Zag indicator to filter out minor price movements, connect swing highs and lows, and display Fibonacci retracement levels automatically."
keywords: ["zig zag", "zigzag", "swing highs and lows", "pivot points indicator", "fibonacci retracement automatic", "zig zag retracement", "swing detection"]
---

The Zig Zag indicator filters out minor price movements and highlights the significant swings by drawing straight lines between swing highs and swing lows. Instead of watching every candle, you see the market reduced to its major legs.

It is one of the most useful indicators for learning to read structure: trend reversals, support and resistance, and larger price patterns become obvious once the noise between pivots is removed. The DeepCharts version can also label each swing with automatic Fibonacci retracement levels.

## What it is

Zig Zag answers the question "which price moves actually mattered?" It connects confirmed pivot points with straight lines, ignoring every fluctuation smaller than your chosen threshold. Three detection modes let you define a "significant" swing by extreme price over a lookback period, by a fixed percentage reversal, or by a fixed number of ticks.

The optional retracement labels then measure each pullback against the previous leg, drawing the classic 38.2%, 50%, 61.8% and 75% levels directly on the chart.

## When to use it

- To identify trend structure: a sequence of higher highs and higher lows (or the reverse) is immediately visible.
- To locate swing-based support and resistance levels for planning entries and exits.
- To measure pullbacks with the built-in Fibonacci retracement levels instead of drawing them by hand.
- As a training aid: replaying a session with Zig Zag on makes market structure much easier to internalize (see [[replay-data]]).

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Zig Zag" and click **+** to add it.
4. Click the gear icon next to the indicator to open its settings.

Start with the default configuration and adjust only the sensitivity: in **Absolute Reversal** mode the default **Zig Zag Abs. Rev** of 0.50% works as a first pass on most instruments. If the line catches too many small wiggles, raise the threshold; if it skips swings you care about, lower it.

[SCREENSHOT: A price chart with the Zig Zag indicator connecting swing highs and lows with colored lines, retracement labels showing 38.2%/50%/61.8% levels on the most recent pullback | zig-zag-on-chart.png]

## How to read it

- **Legs**: each straight segment is one significant swing. Up-swings and down-swings use the **Color Up** and **Color Down** colors, so direction reads instantly.
- **Structure**: compare consecutive pivots. Higher highs and higher lows mean an uptrend; lower highs and lower lows mean a downtrend; overlapping pivots mean a range.
- **Retracements**: the percentage labels show how deep each pullback cut into the previous leg. Shallow retracements (near 38.2%) suggest a strong trend; deep ones (61.8%–75%) suggest a weakening trend or a possible reversal.

> **Warning:** The final leg of a Zig Zag is provisional by nature — it keeps redrawing while price extends, and a pivot is only fixed once the reversal threshold is met. Never treat the last, unconfirmed leg as a signal; use Zig Zag to read completed structure, not to time entries by itself.

## Settings reference

### Main settings

| Setting | What it does |
|---|---|
| **Zig Zag Mode** | How swings are identified: **Highest Lowest** (extreme price levels over a set period), **Absolute Reversal** (a fixed percentage price reversal confirms a new swing), or **Tick Reversal** (a fixed tick count is the reversal threshold). |
| **Zig Zag Abs. Rev** | Minimum percentage change required to register a new swing in Absolute Reversal mode. Default: 0.50%. Higher values reduce sensitivity; lower values increase responsiveness. |
| **Zig Zag Tick Rev./Highest Lowest** | Dual-purpose field: in **Tick Reversal** mode, the number of ticks required (default: 10); in **Highest Lowest** mode, the lookback period in bars. |
| **Color Up** | Line color for upward swings. |
| **Color Down** | Line color for downward swings. |
| **Line Width** | Thickness of the swing lines. Default: 2. |

### Retracement settings

| Setting | What it does |
|---|---|
| **Background Color** | Background behind the retracement labels, for readability. |
| **Font Size** | Text size of the retracement labels. Default: 11.00. |
| **Font Color** | Label text color. |
| **Line Width** | Thickness of the retracement level lines. Default: 1. |
| **Line Color** | Color of the retracement level lines. |
| **Show 38.2%** | Displays the 38.2% Fibonacci retracement level. |
| **Show 50%** | Displays the midpoint retracement level. |
| **Show 61.8%** | Displays the 61.8% ("golden ratio") level. |
| **Show 75%** | Displays the deeper 75% retracement level. |
| **Extend Right** | Projects the retracement levels forward into future bars. |

### Subgraphs

| Setting | What it does |
|---|---|
| **Color** / **2° Color** | Primary and secondary colors for the zigzag line. |
| **Subgraph Style** | Display format. Default: **Ignore**. |
| **Auto Color** | Coloring logic: **+/-**, **Bars**, or **Ignore**. |
| **Line Style** | Visual pattern. Default: **Solid**. |
| **Line Width** | Main line thickness. |
| **Short Name** | Custom label shown in the chart legend. |

[SCREENSHOT: The Zig Zag settings dialog with the Main settings group visible — Zig Zag Mode dropdown open showing Highest Lowest, Absolute Reversal and Tick Reversal — and the Retracement settings group below | zig-zag-settings.png]

## Tips and common mistakes

- **Pick the mode that matches your instrument.** Percentage reversal (Absolute Reversal) scales across instruments with different prices; Tick Reversal is more natural on futures where you think in ticks.
- **Do not backtest signals off the Zig Zag line.** Because the last leg repaints until confirmed, historical charts look far cleaner than live ones. Use it for structure, not as an entry system.
- **Tune one threshold at a time** and judge it on a few sessions of data, not a single afternoon.
- Enable **Extend Right** when you want retracement levels to act as forward-looking support/resistance zones rather than historical annotations.

## Related articles

- [[swing-point]]
- [[drawing-tools]]
- [[replay-data]]
- [[different-types-of-input]]
- [[indicator-layout]]
