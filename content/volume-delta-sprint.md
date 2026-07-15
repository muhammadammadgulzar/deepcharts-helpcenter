---
title: "Volume/Delta Sprint"
slug: "volume-delta-sprint"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Plots cumulative volume and delta over rolling time periods as a histogram panel, so you can see bursts of activity and which side is driving them."
keywords: ["volume delta sprint", "sprint indicator", "cumulative delta histogram", "volume burst", "delta sprint", "rolling delta", "activity histogram"]
---

Volume/Delta Sprint displays cumulative volume and delta values over specified time periods as a histogram in a separate panel beneath the chart. Where a plain volume histogram tells you how much traded per bar, Sprint accumulates activity across a rolling window, making sustained bursts of participation — and the side driving them — stand out from ordinary bar-to-bar noise.

It is an advanced tool: it rewards traders who already read delta and volume individually and want a single panel that shows how pressure builds and fades over a chosen lookback.

## What it is

The indicator sums volume or delta over a configurable lookback window (**Length**, default **10** bars) and plots the result as histogram bars. Positive readings show the window was dominated by buying pressure, negative readings by selling pressure. The **Delta Color Mode** can shade each bar by the magnitude of that pressure, so a fading gradient tells you at a glance whether aggression is intensifying or draining away.

[SCREENSHOT: Chart window with the Volume/Delta Sprint indicator in a separate footer panel — price candles above, Sprint histogram below showing a cluster of tall positive (buy-colored) bars during a rally followed by shrinking bars as the move stalls | volume-delta-sprint-chart-overview.png]

## When to use it

- You want to see whether a breakout is backed by a sustained sprint of volume and positive delta, not a single-bar spike.
- You track momentum decay: histogram bars shrinking while price still grinds higher warns that the aggressive side is stepping away.
- You compare activity regimes across a session — quiet accumulation windows versus high-participation impulse windows.
- You want a smoothed, filterable view of delta instead of the raw bar-by-bar values of [[delta-bar]].

## Quick start

1. Open the **Indicator List** on your chart and add **Volume/Delta Sprint**.
2. Open the indicator's **Settings**.
3. Keep **Input Data** on **Volume** to start — switch to **Order** or **Trade** only when you have a specific reason (see [[different-types-of-input]]).
4. Leave **Length** at its default of **10** bars; shorten it later if you trade fast intraday moves.
5. Set **Delta Color Mode** to **Fading** so bar color intensity reflects delta magnitude.
6. Leave **Filter Min** and **Filter Max** untouched at first — add filters once you know the typical trade sizes on your symbol.

[SCREENSHOT: Volume/Delta Sprint settings dialog open on the General section, showing Input Data, Filter Min, Filter Max, Length = 10 and Delta Color Mode visible | volume-delta-sprint-settings-general.png]

## How to read it

- **Tall bars in one color** — a sprint: one side is committing size over the whole window. Sustained sprints in the direction of a breakout confirm participation.
- **Shrinking bars while price extends** — effort is fading; the move is running on fewer aggressive orders and becomes vulnerable to a pullback.
- **Color flip after a sprint** — the dominant side changed inside the lookback window; watch for price to follow.
- **Fading gradient (Fading mode)** — deeper color means larger delta magnitude, so the shade itself grades conviction; **Fixed** mode reduces this to a binary positive/negative read.

Because values are cumulative over the window, one large print keeps influencing the histogram for **Length** bars — expect readings to decay gradually rather than reset each bar.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Input Data** | Calculation source: **Volume** (total traded activity), **Order** (order flow data), or **Trade** (executed transactions). See [[different-types-of-input]]. |
| **Filter Min** | Minimum threshold for filtering the data — excludes low values to reduce noise. |
| **Filter Max** | Maximum threshold for filtering the data — removes outliers that distort the analysis. |
| **Length** | Lookback period for the cumulative window. Default **10** bars. Shorter lengths are more responsive; longer lengths show broader patterns. |
| **Delta Color Mode** | **Fading** applies gradient coloring based on delta magnitude; **Fixed** uses binary colors for positive and negative values. |

### Smoothing

| Setting | What it does |
|---|---|
| **Enable** | Activates smoothing to reduce noise and clarify volume trends. |
| **Average Type** | Moving average method: **Simple**, **Exponential**, **Triangular**, or **Weighted**. |
| **Length** | Period for the moving-average calculation; higher values create smoother lines. |

### Subgraphs

| Setting | What it does |
|---|---|
| **Color** | Primary bar color, used for positive delta / buying pressure. |
| **2° Color** | Secondary color, used for negative delta / selling pressure. |
| **Subgraph Style** | Drawing style. Default **Bars** (histogram). |
| **Auto Color** | Set to **+/-** for automatic positive/negative coloring. |
| **Line Style** | Default **Solid** for filled bars. |
| **Line Width** | Bar/line thickness. Default **3** pixels. |
| **Short Name** | Custom label shown in the panel legend. |

## Tips and common mistakes

- **Match Length to your timeframe.** A 10-bar window on a 1-minute chart covers 10 minutes of flow; the same setting on a 15-minute chart covers half a session. Re-tune when you change timeframes.
- **Do not stack filters blindly.** An aggressive **Filter Min** plus a short **Length** can leave the histogram nearly empty on quiet symbols. Add one constraint at a time.
- **Fading mode needs contrast.** Pick primary and secondary colors that remain distinguishable at low opacity, or magnitude grading becomes unreadable.
- **Smoothing trades speed for clarity.** Enabling a long smoothing average makes turns easier to see but delays them — momentum traders should keep smoothing short or off.

## Related articles

- [[orderflow-101]]
- [[delta-bar]]
- [[speed-of-tape]]
- [[deep-delta]]
- [[different-types-of-input]]
- [[indicator-layout]]
