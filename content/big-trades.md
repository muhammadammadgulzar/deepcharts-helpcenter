---
title: "Big Trades"
slug: "big-trades"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Marks large aggressive market orders directly on the chart and can draw zones from them, so you see where size traded and which levels matter."
keywords: ["big trades", "large trades indicator", "big prints", "large orders on chart", "big trades analysis", "trade size filter", "whale trades", "block trades"]
---

Big Trades visualizes large, aggressive market orders in real time, highlighting significant buy and sell activity directly on the chart. Instead of scanning the tape for size, you see markers appear at the exact price and bar where big participants executed — and, optionally, horizontal zones extending from those prices.

The indicator can filter manually by trade size or use the built-in **Big Trades Analysis** algorithm to work out sensible thresholds for your symbol automatically.

## What it is

Big Trades plots a marker (circle, square, diamond, or text) every time a trade passes your size filter. Marker color separates aggressive buyers (**Ask Color**) from aggressive sellers (**Bid Color**), and marker size scales with trade size. Because large orders often define support and resistance, the indicator can also draw zones from those prices and extend them forward a set number of bars.

[SCREENSHOT: Chart window with the Big Trades indicator active — circular markers of varying size on several candles, ask-colored markers on up-moves and bid-colored on down-moves, with one horizontal zone extending right from a large trade | big-trades-chart-overview.png]

## When to use it

- You want to detect aggressive buyers or sellers the moment they hit the market with size.
- You mark high-impact price levels: prices where big trades executed often get retested and defended.
- You study order flow dynamics — whether large players are trading with or against the current move.
- You want a chart-based alternative to watching size on [[adv-time-and-sales]].

## Quick start

1. Open the **Indicator List** on your chart and add **Big Trades**.
2. Open the indicator's **Settings**.
3. In **Data Settings**, set **Filter Mode** to **Manual** and choose a **Min** size that is clearly above average for your symbol (for example, **Min = 30** plots only trades of 30 contracts or more).
4. In **Plot Settings**, keep **Marker Type** on **Circle** and leave the **Standard Deviation** size scaling at its default (recommended).
5. Confirm **Ask Color** and **Bid Color** are easy to tell apart against your chart background.
6. Once comfortable, switch **Filter Mode** to **Automatic** and run the analysis (see below) so thresholds adapt to the symbol.

[SCREENSHOT: Big Trades settings dialog open on Data Settings — Days to Load, Input Type, Filter Mode set to Manual, and the Min/Max manual filter fields visible | big-trades-settings-data.png]

## How to read it

- **Large ask-colored marker on a push up** — an aggressive buyer lifting the offer; conviction in the direction of the move.
- **Large bid-colored marker into support that fails to break it** — size sold and the level held: potential absorption (see [[understanding-icebergs-absorption]]).
- **Clusters of big trades at one price** — a level institutions care about; the optional zones make these levels persist visually.
- **Big trades against the trend near extremes** — possible position-taking for a reversal; confirm with delta and context rather than acting on a single print.

## Settings reference

### Data Settings

| Setting | What it does |
|---|---|
| **Days to Load** | How many historical days of large-trade data appear on the chart. |
| **Input Type** | Which order flow data type the indicator uses. See [[different-types-of-input]]. |
| **Filter Mode** | **Manual** filters by your own Min/Max values; **Automatic** uses the Big Trades Analysis algorithm to determine optimal thresholds. |
| **Manual Filter (Min & Max)** | Minimum and maximum trade sizes displayed. Example: with **Min = 30**, only trades of 30 contracts or more are plotted — this cuts noise and keeps focus on meaningful trades. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Marker Type** | **Circle**, **Square**, **Diamond**, or **Text**. |
| **Hollow Fill** | Draws marker outlines without fill color. |
| **Standard Deviation** | Controls how marker size scales with trade size (default recommended). |
| **Minimum Size** / **Maximum Size** | Smallest and largest marker sizes. |
| **Minimum Opacity** / **Maximum Opacity** | Transparency range for markers. |
| **Ask Color** | Marker color for aggressive buyers. |
| **Bid Color** | Marker color for aggressive sellers. |
| **Plot Only Inside Bar** | (Text marker type) Restricts the text to the candle body. |
| **Text Size** / **Text Color** | (Text marker type) Font size and color. |

### Zones Settings

When enabled, the indicator plots horizontal zones based on large trades.

| Setting | What it does |
|---|---|
| **Biggest Only** | Plots zones only for the largest trades. |
| **Shadow Mode** | Zones for trades in the candle wick: **All**, **Reverse Only** (bearish candle → aggressive buyers; bullish candle → aggressive sellers), **Trend Only** (bearish candle → aggressive sellers; bullish candle → aggressive buyers), or **None**. |
| **Body Mode** | Same four options as Shadow Mode, applied to trades inside the candle body. |
| **Bid Color / Ask Color** | Zone colors for each trade side. |
| **Opacity** | Zone transparency. |
| **Number of Bars** | How far zones extend to the right. |

### Big Trades Analysis (Automatic mode)

Big Trades Analysis is a DeepCharts algorithm that dynamically calculates optimal large-trade thresholds based on the price behavior and volatility of the selected symbol. Results are saved automatically, so you only need to run it about once per week or month — not before every session.

To use it:

1. Apply the Big Trades indicator to your chart.
2. Open the indicator **Settings** and set **Filter Mode** to **Automatic**.
3. Select an **Intensity Level**: **Low**, **Medium**, or **Strong**.
4. Save the settings.
5. Go to **Options → Tools → Big Trades Analysis** and run the analysis.
6. Reload or restart the chart if the markers do not update.

The indicator then automatically applies the optimized thresholds to your charts.

[SCREENSHOT: Options menu expanded showing Tools → Big Trades Analysis, with the analysis tool window open ready to run | big-trades-analysis-tool.png]

## Tips and common mistakes

- **Do not set Min too low.** A threshold near the average trade size floods the chart with markers and hides the actual outliers — start high and lower it gradually.
- **Re-run the analysis after volatility regime changes.** Automatic thresholds are saved, but a symbol whose volatility doubled since the last run deserves a fresh analysis.
- **Reverse Only vs. Trend Only matters.** These zone modes classify the same wick trades differently — pick the one matching what you want to study (fading pressure versus with-trend size) rather than enabling both.
- **A single big print is context, not a signal.** Combine it with the level's reaction, delta, and structure before trading it.

## Related articles

- [[adv-time-and-sales]]
- [[deep-trades]]
- [[understanding-icebergs-absorption]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
