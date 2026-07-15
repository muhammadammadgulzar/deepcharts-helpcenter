---
title: "Divergence Detector"
slug: "divergence-detector"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "Detect volume and delta divergences at new highs and lows and label them on the chart as potential false breaks and reversal warnings."
keywords: ["divergence detector", "volume divergence", "delta divergence", "divergence", "false breakout", "VD label", "DV label", "VDD", "divergance"]
---

A breakout that nobody participates in is a breakout worth doubting. The Divergence Detector watches for exactly that: it highlights volume or delta divergence with labels directly on the chart, flagging moments when a new relative high or low is made without a corresponding increase in volume or delta.

Because thin-participation extremes often precede false breaks and reversals, the indicator acts as an automated skeptic — it marks the highs and lows where the effort behind the move did not match the result.

## What it is

The Divergence Detector compares price extremes against the volume and delta that produced them. When price prints a new relative high or low (identified through a built-in Zig Zag swing engine) but volume or delta fails to expand with it, the indicator prints a label at that extreme:

- **VD** — volume divergence only.
- **DV** — delta divergence only.
- **VDD** — both volume and delta divergence, with the most significant divergence prioritized.

Delta here is the difference between aggressive buying and aggressive selling — if that concept is new, read [[orderflow-101]] first. You can build an intuition for it below: hover the bars in this interactive delta histogram and watch how per-bar delta and the cumulative line behave as price pushes to new extremes.

[WIDGET: delta-lab]

## When to use it

- To fade suspect breakouts: a new high on shrinking volume or weak delta is a classic false-break setup.
- To time exits: divergence at an extreme in your favor is a reason to tighten stops or scale out, even if you don't reverse.
- To confirm swing failures: combined with a structure read from [[swing-point]] or [[zig-zag]], a labeled divergence adds evidence that a swing will not hold.
- To monitor participation in real time — the Tick calculation mode evaluates divergence the moment a previous extreme breaks, not only at bar close.

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Divergence Detector" and click **+** to add it.
4. Click the gear icon next to the indicator to open its settings. Set **Calculation Mode (1)** to **Volume and delta** so you see the full picture (VDD labels), and start with **Calculation Mode (2)** = **Close** so signals only print on completed candles.
5. Tune the Zig Zag settings so swings match the structure you actually trade — if labels appear on every minor wiggle, the reversal parameter is too small.

[SCREENSHOT: A futures chart with the Divergence Detector active — a new swing high tagged with a VDD label above the candle, showing price making a higher high while participation faded | divergence-detector-on-chart.png]

## How to read it

- **A label at a new high** means price exceeded the prior relative high without a matching increase in volume (VD), delta (DV), or both (VDD). The move lacked participation — a warning that the breakout may fail.
- **A label at a new low** is the mirror: downside extension without expanding selling effort.
- **VDD outranks a single-source label.** When both volume and delta diverge at the same extreme, the evidence is stronger; the label prioritizes the most significant divergence.
- **Timing mode changes meaning.** In **Tick** mode a label can appear intrabar the moment the prior extreme breaks — earliest signal, most noise. **Close** mode waits for the candle to finish — latest, cleanest. **Sec. to close** is the compromise, evaluating a set number of seconds before the close.
- **Divergence is a warning, not an order.** Markets can grind to new extremes on weak participation for longer than a fade position survives; require a structural trigger before acting.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Calculation Mode (1)** | Chooses which divergences display: **Volume** (VD labels only), **Delta** (DV labels only) or **Volume and delta** (VDD label, with the most significant divergence prioritized). |
| **Calculation Mode (2)** | Sets when divergence is evaluated: **Tick** (at the break of the previous high/low tick), **Sec. to close** (at a specified number of seconds before candle close) or **Close** (at candle close). |
| **Maximum Seconds To Close** | The timing parameter used by the **Sec. to close** mode. |

### Zig Zag Settings

The swing highs and lows the detector compares against are found by an internal Zig Zag.

| Setting | What it does |
|---|---|
| **Zig Zag Mode** | How reversals (swing points) are identified: **Absolute Reversal** uses a fixed price reversal value, requiring sufficient price movement in the opposite direction; **Tick Reversal** is tick-based, allowing a minimum tick movement to generate a reversal; **Highest Lowest** is based on the tick difference between the swing maximum and minimum. |
| **Absolute reversal parameter** | The reversal value used in Absolute Reversal mode. |
| **Tick Reversal / Highest Lowest parameter** | The tick value used by the Tick Reversal and Highest Lowest modes. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Text size** | Size of the divergence labels. |
| **Distance ticks** | Distance, in ticks, between the label and the candle extreme it marks. |

### Alerts and Subgraphs

| Setting | What it does |
|---|---|
| **Alert Sound** | Enables a sound notification when a divergence is detected. |
| **Subgraphs** | Customizes the label background and text colors. |

[SCREENSHOT: The Divergence Detector settings dialog showing Calculation Mode (1) and Calculation Mode (2) dropdowns, Maximum Seconds To Close, and the Zig Zag Settings group with the three reversal modes | divergence-detector-settings.png]

## Tips and common mistakes

- **Pick the calculation timing that matches your style.** Scalpers watching for immediate failure want **Tick**; if you review completed candles, **Close** avoids labels that would have disappeared by the bar's end.
- **The Zig Zag defines everything.** If swings are defined too tightly, every micro-extreme gets tested for divergence and label count explodes; too loosely, and real reversals pass unlabeled. Tune the reversal parameter per instrument and timeframe.
- **Volume and delta divergence are not interchangeable.** Volume divergence says total activity faded; delta divergence says the aggressor imbalance faded. A high on strong volume but weak delta tells a different story than one on weak volume — running **Volume and delta** mode preserves that distinction.
- **Expect divergences to fail in strong trends.** Persistent trends routinely print weak-participation extremes and keep going; use divergence as a filter against chasing, not as a standalone reversal system.

## Related articles

- [[orderflow-101]]
- [[zig-zag]]
- [[delta-bar]]
- [[volume]]
- [[different-types-of-input]]
- [[indicator-layout]]
