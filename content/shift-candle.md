---
title: "Shift Candle"
slug: "shift-candle"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "Detect reversal 'Shift' candles using Trinity logic with optional stacked-imbalance confirmation, plotted as markers and fresh zones on the chart."
keywords: ["shift candle", "trinity logic", "reversal candle indicator", "imbalance confirmation", "reversal detection", "shift candles", "fresh imbalance zone"]
---

Shift Candle identifies reversal "Shift" candles using Trinity logic and optional imbalance confirmation, plotting markers and imbalance zones directly on the chart. It is an advanced order-flow reversal tool: instead of a simple pattern match, it validates a potential reversal against breakout distance, delta behavior and point-of-control location before marking it.

## What it is

The indicator scans for candles where the market shifts direction under specific structural and order-flow conditions — the Trinity criteria — such as a minimum tick breakout beyond prior structure, a minimum delta difference between compared bars and a maximum distance from the bar's point of control. When a candle qualifies, Shift Candle plots a marker at it. An optional imbalance filter requires stacked bid/ask imbalances to confirm the signal, and confirmed fresh imbalance zones can be drawn as colored areas that act as reference zones on later revisits.

Stacked diagonal imbalances are the confirmation layer here — to get a feel for what one looks like in the bid×ask data, adjust the imbalance ratio and hover the highlighted cells in the footprint below.

[WIDGET: footprint-lab]

## When to use it

- You trade reversals and want candidates filtered by order-flow conditions rather than shape alone.
- You already read footprints and imbalances and want the platform to flag qualifying candles automatically, with alerts.
- You want fresh imbalance zones marked at reversal points, to watch how price behaves when it returns to them.
- You want to codify a reversal checklist (breakout distance, delta shift, POC proximity, stacked imbalances) into one configurable tool.

## Quick start

1. Open the indicator menu on your chart and add **Shift Candle**.
2. Open the indicator settings.
3. Start with the Trinity group: set **Minimum tick breakout** and the delta requirements (**Minimum delta % difference**, **Minimum delta value difference**) to levels appropriate for your instrument's tick size and typical volume.
4. Optionally set **Enable** in the Imbalance group to require stacked-imbalance confirmation — fewer but higher-conviction signals.
5. Pick distinct **Buy color** and **Sell color** in the Imbalance Fresh Zone group so the zones are easy to distinguish.
6. Enable the alert sound or message popup if you want to be notified when a Shift candle prints, then apply.

Because thresholds are instrument-specific (a sensible tick breakout on one contract is noise on another), expect to iterate on the Trinity values while observing signals on your market.

[SCREENSHOT: A futures chart with Shift Candle active — a reversal marker plotted below a qualifying bullish reversal bar and a colored fresh imbalance zone extending to the right from the signal candle | shift-candle-signal-on-chart.png]

## How to read it

- **A marker is a candidate, not an entry.** It means the candle satisfied the configured Trinity conditions (and the imbalance filter, if enabled). Read it in context: location relative to session structure, higher timeframe levels and preceding trend.
- **Fresh imbalance zones** mark where confirmed aggressive imbalances occurred at the reversal. Many order-flow traders watch how price behaves on a *return* to these zones — holding suggests the responsible party is still defending; slicing through suggests the reversal has failed. See [[understanding-auction-theory]] for the reasoning behind imbalance and absorption reads.
- **Delta conditions** in the Trinity logic exist to ensure the reversal is backed by a real change in aggression, not only a price wick — see [[orderflow-101]] for how delta is calculated.
- Tighter thresholds produce fewer, stronger signals; looser thresholds surface more candidates with more noise. There is no universally correct setting — calibrate per instrument and timeframe.

## Settings reference

[SCREENSHOT: Shift Candle settings dialog showing the Trinity Settings, Marker Settings, Imbalance Settings, Imbalance Fresh Zone and Alert sections | shift-candle-settings-dialog.png]

### Trinity Settings

| Setting | What it does |
|---|---|
| **Maximum number of bars after reversal** | Upper limit of bars permitted to validate the reversal. |
| **Minimum tick breakout** | Required tick movement beyond prior structure for the candle to qualify. |
| **Minimum delta % difference** | Required percentage delta variance between the compared bars. |
| **Minimum delta value difference** | Required absolute delta difference between the compared bars. |
| **Maximum tick of POC distance** | Restricts how far (in ticks) the candle may be from its point of control. |
| **Highest/Lowest reversal bar** | Lookback period used to identify the swing high or low being reversed. |

### Marker Settings

| Setting | What it does |
|---|---|
| **Tick offset** | Vertical positioning, in ticks, of the plotted marker relative to the candle. |
| **Plot price** | The price reference the marker is anchored to. |

### Imbalance Settings

| Setting | What it does |
|---|---|
| **Enable** | Activates the imbalance confirmation filter. |
| **Minimum Imbalance %** | Required imbalance strength threshold (for example 150%). |
| **Minimum Volume Diff.** | Minimum volume difference for an imbalance to count. |
| **Include zero on imbalance** | Includes zero prints in the imbalance calculation. |
| **Min. Num. of Consecutive Imb.** | How many stacked (consecutive) imbalance levels are required for confirmation. |

### Imbalance Fresh Zone

| Setting | What it does |
|---|---|
| **Buy color** | Color for fresh buy-side imbalance zones. |
| **Sell color** | Color for fresh sell-side imbalance zones. |

### Alert Sound & Message Popup

Both sections include enable/disable toggles plus customization options for the alert sound and the popup notification shown when a Shift candle is detected.

## Tips and common mistakes

- **Do not run default-style thresholds across different instruments.** Tick-based settings (**Minimum tick breakout**, **Maximum tick of POC distance**) must reflect each contract's tick size and volatility; delta thresholds must reflect its typical volume.
- **Start with the imbalance filter enabled.** Unfiltered Trinity signals are more frequent; requiring stacked imbalances (via **Min. Num. of Consecutive Imb.**) cuts noise substantially.
- Delta and imbalance conditions require bid/ask classified data from your feed — verify what your feed delivers in [[different-types-of-input]].
- A marker against a strong higher timeframe trend is a fade attempt; treat those with extra caution and demand confluence from levels or absorption behavior.
- Exact internal Trinity evaluation details beyond the exposed settings are not documented; tune by observation rather than assumption.

## Related articles

- [[imbalance-tracker]]
- [[understanding-auction-theory]]
- [[orderflow-101]]
- [[bar-poc]]
- [[different-types-of-input]]
- [[indicator-layout]]
