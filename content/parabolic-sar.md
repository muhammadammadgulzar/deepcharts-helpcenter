---
title: "Parabolic SAR"
slug: "parabolic-sar"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Reference for the Parabolic SAR indicator in DeepCharts: the stop-and-reverse dots, Step and Maximum acceleration settings, and styling options."
keywords: ["PSAR", "parabolic stop and reverse", "SAR dots", "trailing stop dots", "wilder parabolic", "parabolic sar settings"]
---
The Parabolic SAR is a technical analysis indicator developed by J. Welles Wilder that helps identify trend reversals and establish entry and exit points for trading. It appears as a series of points positioned above or below price, depending on the direction of the trend: below prices during uptrends, above them during downtrends.

SAR stands for "stop and reverse" — the dots trail price at an accelerating pace, and when price touches them the indicator flips to the opposite side, marking a potential reversal.

## What it is

Parabolic SAR answers the question: where is my trailing stop, and has the trend reversed? This indicator is similar to the moving average, the only difference being that the Parabolic SAR moves at a more accelerated pace and can change its position relative to price. The longer a trend runs, the faster the dots close in on price — which is what gives the trail its parabolic shape and forces an eventual exit.

[SCREENSHOT: A candlestick chart with Parabolic SAR dots below price during an uptrend, flipping above price after a reversal; the flip point clearly visible | parabolic-sar-on-chart.png]

## When to use it

- Trailing a stop behind a trending position — the dots give a concrete, mechanically updated stop level each bar.
- Timing exits: when price touches the dots, the trend that carried the position is considered over.
- Identifying reversal points in markets that trend cleanly.
- Confirming direction alongside slower tools — dots below price agree with a bullish read, dots above with a bearish one.

## Quick start

1. Open a chart — see [[first-chart]].
2. Click the bar-chart icon in the chart's top-left icon row to open the **Indicators** panel, then click **Indicators** to open the full **Indicator List**.
3. Search for **Parabolic SAR** and click **+** to add it.
4. Click the gear icon to open its settings.
5. Starter configuration: keep **Step** at the default 0.02 and **Maximum** at the default 0.20 — Wilder's original values, and the standard starting point on any timeframe.

[SCREENSHOT: Parabolic SAR settings dialog showing the Parameters section with Step = 0.02 and Maximum = 0.20, and the Subgraph styling section below | parabolic-sar-settings.png]

## How to read it

- **Dots below price** — uptrend. Each new bar the dots rise, trailing the move.
- **Dots above price** — downtrend, with the dots descending toward price.
- **A flip** (dots jump to the other side) signals a stop-and-reverse: the prior trend is considered finished. Aggressive traders reverse position on the flip; conservative traders treat it as an exit only.
- **Dot spacing** shows acceleration: dots pulling away from each other mean the acceleration factor is climbing because the trend keeps making new extremes.
- In sideways markets the dots flip constantly — the indicator is explicitly designed for trending conditions and produces its worst signals in ranges.

## Settings reference

### Parameters

| Setting | What it does |
|---|---|
| **Step** | The acceleration factor that determines how quickly the SAR catches up to price. Default: 0.02. Raising it makes the trail tighten faster (earlier exits, more whipsaws); lowering it gives the trend more room. |
| **Maximum** | The maximum acceleration factor value that can be reached. Default: 0.20. Caps how aggressively the dots can converge on price in extended trends. |

### Subgraph

| Setting | What it does |
|---|---|
| **Parabolic SAR Color** | Color of the plotted dots. |
| **Secondary Color** | Optional secondary color. |
| **Subgraph Style** | Display style of the series. |
| **Line Style** | Line appearance definition. |
| **Line Width** | Size/thickness of the plot. |
| **Use Secondary Axis** | Displays the indicator on an alternative axis. |

## Tips and common mistakes

- **Do not trade every flip.** In a range the SAR flips repeatedly and each flip fails; use it only when a trend is established, or filter with [[adx]] to confirm trend strength first.
- **Tune Step to the market's character.** The 0.02 / 0.20 defaults are Wilder's originals; a smaller **Step** suits volatile instruments that need breathing room, a larger one suits fast momentum moves you want to protect quickly.
- **Treat the dot as a stop level, not a prediction.** The SAR tells you where the trend is invalidated — it says nothing about where price goes next.
- Compare it with [[super-trend]]: both trail the trend, but Super Trend's ATR basis adapts to volatility while SAR's acceleration adapts to trend duration.

## Related articles

- [[super-trend]]
- [[moving-average]]
- [[adx]]
- [[atr]]
- [[different-types-of-input]]
- [[indicator-layout]]
