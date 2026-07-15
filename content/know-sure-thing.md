---
title: "Know Sure Thing (KST)"
slug: "know-sure-thing"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Reference for the Know Sure Thing (KST) oscillator in DeepCharts: four smoothed ROC components, signal-line crossovers, and every setting in the dialog."
keywords: ["know sure thing", "KST", "kst indicator", "pring kst", "rate of change oscillator", "kst signal line", "kst crossover", "smoothed roc"]
---
The Know Sure Thing (KST) is a momentum oscillator based on multiple smoothed Rate of Change (ROC) calculations. It combines short-, medium- and long-term momentum into one indicator and includes a signal line for crossover analysis.

Where a single [[rate-of-change]] reading only tells you about one lookback window, KST blends four of them — each individually smoothed and weighted — so a genuine momentum shift has to show up across several horizons before the line turns. That makes it slower than a raw ROC but considerably harder to whipsaw.

## What it is

KST answers the question: is momentum turning across multiple timeframes at once, or only on one? It plots two lines in a separate panel:

- **KST** — the composite momentum line built from four smoothed ROC components.
- **Signal** — a smoothed copy of KST used for crossover signals.

The zero line separates bullish from bearish momentum bias. The indicator is widely credited to Martin Pring.

[SCREENSHOT: Price chart with the KST indicator in a lower panel, KST and Signal lines in contrasting colors, a bullish KST-over-Signal crossover below the zero line highlighted | kst-on-chart.png]

## When to use it

- Identifying momentum shifts that are confirmed across short, medium and long lookbacks simultaneously.
- Confirming a trend — KST holding above zero supports a bullish bias, below zero a bearish one.
- Spotting divergences between KST and price at swing highs and lows.
- Flagging overextended conditions when KST stretches far from the zero line.

## Quick start

1. Open a price chart — see [[first-chart]].
2. Click the green **Indicators** button (or press **Ctrl I**) to open the **Indicator List**.
3. Search for **Know Sure Thing** and click **+** to add it. It appears in its own panel below the price.
4. Click the gear icon to open its settings.
5. A widely used starting configuration is Martin Pring's classic setup: ROC lengths of 10, 15, 20 and 30, average lengths of 10, 10, 10 and 15, and a signal period of 9. Adjust from there for your timeframe.

[SCREENSHOT: KST settings dialog open showing the General group with Use percent, the Average group with Average Type, Avg Length 1-4 and Signal Period, and the ROC group with ROC Length 1-4 | kst-settings-dialog.png]

## How to read it

The core reads, from the indicator's own logic:

| Observation | Interpretation |
|---|---|
| KST above zero | Bullish momentum bias |
| KST below zero | Bearish momentum bias |
| KST crossing above Signal | Potential bullish shift |
| KST crossing below Signal | Potential bearish shift |

The strongest signals combine both: a KST/Signal crossover that also crosses the zero line, or a crossover in the direction of the side of zero you are already on (a bullish cross above zero is a continuation signal, not a reversal call). Divergence — price making a new extreme while KST does not — warns that the multi-timeframe momentum behind the move is fading.

## Settings reference

Grouped as in the indicator's configuration window.

### Chart area

| Setting | What it does |
|---|---|
| **Horizontal** | Displays KST in a separate panel. |
| **Vertical** | Displays the indicator vertically (if supported). |
| Panel selector | Chooses which panel the indicator appears in. |
| **Use sec. axis** | Enables secondary scaling. |

### Parameters — General

| Setting | What it does |
|---|---|
| **Use percent** | Switches the ROC calculation between raw values and percentage-based momentum. Percentage mode makes readings comparable across instruments with different price scales. |

### Parameters — Average

| Setting | What it does |
|---|---|
| **Average Type** | Defines the smoothing method applied to each ROC component. |
| **Avg Length 1–4** | Controls the smoothing of each individual ROC calculation. Higher values produce a smoother but slower response. |
| **Signal Period** | Defines the smoothing length of the signal line used for crossover signals. |

### Parameters — ROC

| Setting | What it does |
|---|---|
| **ROC Length 1–4** | Defines the lookback period for each Rate of Change component. Shorter lengths react faster; longer lengths capture broader momentum trends. |

### Levels

| Setting | What it does |
|---|---|
| **Middle Level** | Defines the neutral (zero) reference line. |
| **Middle Level Color** | Customizes the zero-line color. |
| **Level Width** | Adjusts the thickness of the reference line. |

### Subgraphs

- **KST** — controls the appearance of the main momentum line: color, line style, width, auto-color behavior and label display.
- **Signal** — controls the appearance of the signal line: color, line style, width and label display.

Display options available for both lines: **Name Label**, **Value Label**, **Name Background**, **Value Background**, **Include on Auto Center**, and **Chart color for marker**.

## Tips and common mistakes

- **Keep the four ROC lengths staggered.** The indicator's value comes from blending different horizons; setting the lengths close together collapses it into an expensive single ROC.
- **Signal crossovers lag by design.** KST is built from smoothed components, so crossovers confirm turns rather than predict them — pair it with structure or level analysis for entry timing.
- **Zero-line context first, crossover second.** A bearish crossover far above zero often marks only a pause in an uptrend, not a reversal.
- **Scale the lengths to your chart.** Pring's classic values were designed around longer-term analysis; intraday traders typically shorten all four ROC and average lengths proportionally.

## Related articles

- [[rate-of-change]]
- [[macd]]
- [[momentum]]
- [[inverse-cyber-cycle]]
- [[different-types-of-input]]
- [[indicator-layout]]
