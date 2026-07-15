---
title: "Overlay Timeframe Candlestick"
slug: "overlay-timeframe-candlestick"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Draw higher timeframe candles directly on a lower timeframe chart for multi-timeframe analysis in one window."
keywords: ["overlay timeframe candlestick", "higher timeframe candles", "HTF candles", "multi timeframe overlay", "MTF candlestick", "timeframe overlay"]
---

The Overlay Timeframe Candlestick indicator displays higher timeframe candles directly on a lower timeframe chart. Instead of flipping between a 5-minute and a 30-minute chart, you see the 30-minute candles forming in real time behind your 5-minute bars — structure and detail in one view.

## What it is

The indicator aggregates your chart's lower timeframe data into higher timeframe candles and draws them on the current chart. Each overlay candle updates in real time until its higher timeframe bar concludes, so you always see the developing higher timeframe bar, not just completed ones.

It answers the question every multi-timeframe trader asks constantly: "where are we inside the bigger candle?"

## When to use it

- You want to observe higher timeframe structure without switching charts.
- You need to see when price is consolidating *inside* a larger candle's range versus breaking out of it.
- You want breakout context — a lower timeframe push means more when it also breaks the developing higher timeframe candle's extreme.
- You align lower timeframe entries with the broader market direction shown by the higher timeframe bars.

## Quick start

1. Open the indicator menu on your chart and add **Overlay Timeframe Candlestick**.
2. Open the indicator settings.
3. In the General group, set **Param type** to the timeframe type for the overlay and **Param 1** to its value — for example a 30-minute overlay on a 5-minute chart.
4. Under Chart Area, choose **Horizontal** to render the overlay candles on the price chart, and use the **Panel selector** if you want them in a different panel.
5. Optionally enable **Show vertical line on close** in the Plot group to mark each higher timeframe candle close on your chart.
6. Adjust **Opacity** so the overlay sits visibly behind your main candles without hiding them, then apply.

[SCREENSHOT: A 5-minute chart with Overlay Timeframe Candlestick drawing semi-transparent 30-minute candles behind the price bars, one higher timeframe candle still forming at the right edge | overlay-timeframe-candlestick-chart.png]

## How to read it

- **Position inside the bar** — where current price sits within the developing higher timeframe candle tells you who is winning that bar. Price pinned at the high of the developing candle reads very differently from price mid-range.
- **Consolidation vs. expansion** — several lower timeframe bars trapped inside one overlay candle's range is consolidation; a close beyond the prior overlay candle's extreme is higher timeframe expansion.
- **Candle closes matter** — the vertical close line (if enabled) marks the moments where the higher timeframe commits. A wick beyond a level that closes back inside is a rejection you would miss looking only at the lower timeframe.
- **Direction filter** — many traders only take lower timeframe entries in the direction of the current and prior higher timeframe candles.

The indicator works best combined with structure and liquidity level analysis — it supplies context, not entries.

## Settings reference

[SCREENSHOT: Overlay Timeframe Candlestick settings dialog showing the Chart Area, General, Color and Plot groups with Param type, Param 1, Param 2, Up bar, Down bar, Show filled bar, Candle width, Border width, Opacity and Show vertical line on close visible | overlay-timeframe-candlestick-settings.png]

### Chart Area

| Setting | What it does |
|---|---|
| **Horizontal** | Renders the overlay candles on the price chart. |
| **Vertical** | Displays the overlay vertically, where supported. |
| **Panel selector** | Chooses which panel displays the overlay. |

### General

| Setting | What it does |
|---|---|
| **Param type** | Defines the timeframe type used for the overlay. |
| **Param 1** | Specifies the primary timeframe value. |
| **Param 2** | Optional secondary parameter, used only when the selected timeframe type requires it. |

### Color

| Setting | What it does |
|---|---|
| **Up bar** | Color for bullish higher timeframe candles. |
| **Down bar** | Color for bearish higher timeframe candles. |
| **Show filled bar** | Whether overlay candles are drawn filled or hollow. |

### Plot

| Setting | What it does |
|---|---|
| **Candle width** | Controls the width of the overlay candles. |
| **Border width** | Adjusts the thickness of the candle borders. |
| **Opacity** | Controls the transparency of the overlay candles — lower it so the main series stays readable. |
| **Show vertical line on close** | Draws a vertical line on the chart when a higher timeframe candle closes. |

## Tips and common mistakes

- **Keep the ratio sensible.** Overlaying a daily candle on a 1-minute chart produces one enormous rectangle spanning the whole window. Ratios like 5-minute → 30-minute or 15-minute → 1-hour stay readable.
- **The rightmost overlay candle is unfinished.** Its color and range keep changing until the higher timeframe bar concludes — do not treat it as a completed signal.
- Set **Opacity** low and **Show filled bar** off (hollow) if the overlay competes visually with your price bars.
- **Show vertical line on close** is easy to overlook but valuable: higher timeframe closes are natural decision points for adds, exits and invalidation.
- If you want highlighted ranges, targets and volume summaries rather than drawn candles, use [[overlay-timeframe-highlight|Overlay Timeframe Highlight]] — the two indicators are complementary.

## Related articles

- [[overlay-timeframe-highlight]]
- [[overlay-chart]]
- [[understanding-market-structure-sessions]]
- [[different-types-of-input]]
- [[indicator-layout]]
