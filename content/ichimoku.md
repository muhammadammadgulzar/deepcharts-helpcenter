---
title: "Ichimoku"
slug: "ichimoku"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Reference for the Ichimoku indicator in DeepCharts: Tenkan-sen, Kijun-sen, Chikou Span, Senkou Span and the cloud, with period settings and styling."
keywords: ["ichimoku kinko hyo", "ichimoku cloud", "kumo", "tenkan", "kijun", "senkou span", "chikou span", "conversion line", "baseline"]
---
The Ichimoku indicator, formally known as Ichimoku Kinko Hyo, is a comprehensive technical analysis tool developed in the 1930s by the Japanese journalist Goichi Hosoda. From a single indicator you get support and resistance levels, trend direction, and a momentum read — the name translates roughly as "one glance equilibrium chart."

It plots several lines and a shaded cloud (the Kumo) directly on the price chart. Each line answers a different question, and their positions relative to price and to each other build the overall picture.

## What it is

Ichimoku answers the question: what is the trend, where is equilibrium, and where are the levels that matter — all at one glance? Rather than averaging closes like a moving average, its lines are built from the midpoint of highs and lows over fixed lookbacks, then some are projected forward or shifted backward in time. That time displacement is what creates the cloud ahead of price and the lagging comparison line behind it.

[SCREENSHOT: A candlestick chart with the full Ichimoku indicator applied — Tenkan-sen and Kijun-sen lines on price, the shaded Kumo cloud projected ahead of the last candle, and the Chikou Span trailing behind price | ichimoku-on-chart.png]

## When to use it

- Reading trend direction and its quality in one view — price above a rising cloud is a healthy uptrend; price inside the cloud is a market in transition.
- Finding dynamic support and resistance: the Kijun-sen and the cloud edges are widely watched levels.
- Timing with line crossovers — Tenkan-sen crossing the Kijun-sen is the classic Ichimoku signal.
- Confirming momentum with the Chikou Span's position relative to past price.

## Quick start

1. Open a chart — see [[first-chart]].
2. Click the bar-chart icon in the chart's top-left icon row to open the **Indicators** panel, then click **Indicators** to open the full **Indicator List**.
3. Search for **Ichimoku** and click **+** to add it.
4. Click the gear icon to open its settings.
5. Starter configuration: keep the defaults — **Conversion Line Period** 9, **Baseline Period** 26, **Lagging Span Period** 26. These are Hosoda's original values and the ones virtually all Ichimoku literature assumes.

[SCREENSHOT: Ichimoku settings dialog showing Conversion Line Period = 9, Baseline Period = 26 and Lagging Span Period = 26, with the Subgraph color options for each line visible | ichimoku-settings.png]

## How to read it

The indicator's components:

| Component | Construction | Role |
|---|---|---|
| **Tenkan-sen** (Conversion Line) | Average of the highs and lows of the last 9 periods | Short-term trend direction |
| **Kijun-sen** (Baseline) | Average of the highs and lows of the last 26 periods | Support/resistance; potential trend-change level |
| **Chikou Span** (Delay Line) | The closing price shifted back 26 periods | Compares current price with past price action |
| **Senkou Span** | Average of Tenkan-sen and Kijun-sen, projected forward 26 periods | One of the two lines forming the cloud (Kumo) |

Reading the picture:

- **Price vs. cloud**: above the cloud = bullish context, below = bearish, inside = no man's land. The cloud ahead of price maps future support/resistance.
- **Tenkan/Kijun cross**: Tenkan-sen crossing above Kijun-sen is bullish (stronger when it happens above the cloud); crossing below is bearish.
- **Kijun-sen as the anchor**: price tends to mean-revert toward the Baseline; a steep distance from it warns of an extended move.
- **Chikou Span confirmation**: the lagging line sitting above the price bars of 26 periods ago confirms bullish momentum; below them, bearish.
- **Cloud thickness**: a thick cloud implies strong support/resistance; a thin cloud is easier for price to pierce.

## Settings reference

### Parameters

| Setting | What it does |
|---|---|
| **Conversion Line Period** | Lookback for the Tenkan-sen midpoint. Default: 9. Shorter = faster, noisier signal line. |
| **Baseline Period** | Lookback for the Kijun-sen midpoint. Default: 26. |
| **Lagging Span Period** | Displacement of the Chikou Span (close shifted back). Default: 26. |

[CONFIRM: whether the settings dialog also exposes a separate period for the second cloud line (Senkou Span B) — the live article documents one Senkou Span and three period parameters only]

### Subgraph

Colors and styles are adjustable per line — **Tenkan-sen**, **Kijun-sen**, **Chikou Span**, and **Senkou Span** — plus:

| Setting | What it does |
|---|---|
| **Line Style** | Appearance of each plotted line. |
| **Line Width** | Thickness of each line. |
| **Use Secondary Axis** | Displays the indicator on an alternative axis. |

## Tips and common mistakes

- **Do not cherry-pick one line.** Ichimoku is a system — a bullish Tenkan/Kijun cross below a bearish cloud is a conflicted signal, not a buy.
- **Resist re-tuning the periods first.** The 9/26 structure is the shared language of every Ichimoku reference; change it only once you understand what each displacement does.
- **Respect the "inside the cloud" state.** It is the indicator's way of saying the market is in equilibrium — most Ichimoku strategies stand aside there.
- **Declutter if needed.** Five overlapping plots can bury price action; thin the line widths or recolor components in the Subgraph section, and see [[indicator-layout]] for arranging busy charts.

## Related articles

- [[moving-average]]
- [[super-trend]]
- [[donchian-channel]]
- [[adx]]
- [[different-types-of-input]]
- [[indicator-layout]]
