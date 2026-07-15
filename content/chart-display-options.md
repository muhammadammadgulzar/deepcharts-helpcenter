---
title: "Chart Display Options (Bar Styles, Sessions, Countdown)"
slug: "chart-display-options"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "The two-candle dropdown explained: candlestick/line/OHLC styles, equi-volume and delta-volume candles, ETH/RTH session toggle, auction filter, bar values and countdown."
keywords: ["bar style", "line chart", "OHLC", "equi-volume bars", "delta-volume bars", "ETH session", "RTH", "auction filter", "countdown timer", "bar values", "candle colors", "candle width"]
---

The fastest way to change how a chart looks in DeepCharts is the two-candle icon at the top left of every chart window. Its dropdown holds the bar style (candlestick, line, OHLC), two visual modifiers that encode volume and delta into the candles, the ETH/RTH session switch, the auction filter, the bar-values readout and the bar-close countdown.

Several of these toggles are shortcuts to settings that also live in the **Price Settings** dialog — this article tells you which, so you always know where the "real" setting is. For the full dialog, see [[price-chart-settings]].

## What it is

The bar style dropdown is the chart's quick display menu. It answers "how do I switch to a line chart", "why are my candles different widths or strange colors", "how do I hide overnight data", and "how do I get a countdown to the bar close" — all without opening a settings dialog.

[SCREENSHOT: The two-candle icon dropdown open on a chart, showing Candlestick highlighted as active, Line, OHLC, the Equi-Volume Bars and Delta-Volume Bars checkboxes, ETH Session checked, Auction filter, Bar values checked, Countdown timer, and the Price Settings entry at the bottom | display-options-dropdown.png]

## When to use it

- Switch between candlestick, line and OHLC rendering.
- Turn on volume-width candles (Equi-Volume) or delta-colored candles (Delta-Volume).
- Show only Regular Trading Hours, or the full ETH session including overnight.
- Toggle the top-left OHLC readout and the bar-close countdown.
- Jump into the full **Price Settings** dialog.

## Quick start

1. Click the two-candle icon at the top left of the chart.
2. Pick a base style: **Candlestick** (default), **Line** or **OHLC** — these are exclusive, and the active one is highlighted.
3. Optionally tick **Equi-Volume Bars** and/or **Delta-Volume Bars** — these are checkboxes layered on top of the base style, and both can be on at once.
4. The chart redraws immediately (the auction filter is the one item that triggers a full rebuild).

## How to read it

**Equi-Volume candles:** width encodes the bar's volume relative to other candles — a wide candle traded a lot, a thin one very little. The point is to see instantly whether a big move had real volume behind it or whether a thin book let a small aggressive order move price a long way — judging that mentally from a volume histogram in real time is hard.

**Delta-Volume candles:** color intensity encodes delta. Pale color = low delta; intense color = high delta. Darker green = more aggressive buyers (positive delta); darker red = more aggressive sellers (negative delta). New to delta? Start with [[orderflow-101]].

**Bar values readout:** the top-left **O: H: L: C:** fields plus **%V** (percent change from the previous day's close), **ΣV** and **ΔV** (the bar's volume figures [CONFIRM: exact definitions of ΣV and ΔV]). Values populate for the hovered bar, or the last bar when the cursor is off the chart.

[SCREENSHOT: Side-by-side comparison of the same price move as standard candlesticks vs with Equi-Volume + Delta-Volume enabled, showing variable candle widths and green/purple intensity differences | display-options-equi-delta-compare.png]

## Settings reference

Items in the order they appear in the dropdown:

| Item | What it does |
|---|---|
| **Candlestick** | Standard candles. Default base style. |
| **Line** | A continuous line connecting the closing prices of each candle. |
| **OHLC** | Open/high/low/close bars — vertical bars with open and close ticks. |
| **Equi-Volume Bars** | Checkbox modifier: candle width = traded volume. Shortcut to **Price Settings → VOLUME → Width based volume** (same setting, two places). |
| **Delta-Volume Bars** | Checkbox modifier: candle color intensity = delta. Shortcut to **Price Settings → DELTA → Color based on delta**. Can be combined with Equi-Volume. |
| **ETH Session** | Default on: the chart shows full Electronic Trading Hours including overnight. Off: ETH bars are hidden and only Regular Trading Hours price action shows. Inverse of **Price Settings → DATA → RTH - only** (same switch). |
| **Auction filter** | Default off. Removes opening/closing auction data from the calculations — exact behavior may vary [CONFIRM: precisely which auction prints are excluded]. Same setting as **Price Settings → Exclude Auction (Tick Data)**. Toggling it rebuilds the whole chart. |
| **Bar values** | Default on. Shows/hides the top-left readout (O H L C, %V, ΣV, ΔV). |
| **Countdown timer** | Shows a 00:00 box counting down to the current candle's close, at the bottom of the price scale (a 5-minute chart counts down 5 minutes per candle). The box position is configurable in **Price Settings → COUNTDOWN**: **Axis** mode pins it to the scale, **Floating** mode makes it a free box you can drag anywhere. |
| **⚙ Price Settings** | Opens the full Price Settings dialog — see [[price-chart-settings]]. |

> **Note:** Toggling **Auction filter** shows the **Building chart** spinner while the whole chart rebuilds. The short wait is normal — nothing is broken.

### Related display controls elsewhere

- **Bar type and timeframe** (minutes, Range, Renko, Volume, Delta bars...) are chosen in the title-bar timeframe dropdown or **Price Settings → Param Type** — see [[price-chart-settings]].
- **Custom session windows** (e.g. only the first two hours after the open) and the vertical day-start line are configured in **Price Settings → CUSTOM TIME SESSION** and **LINE START DAY**.
- Chart background, grid and text colors live in right-click → **Properties** — see [[chart-window]].

## Tips and common mistakes

- **"My candles look washed out / the colors are strange"** — Delta-Volume mode is on. Intensity encodes delta; it is not a broken theme. Untick **Delta-Volume Bars** to go back.
- **"My candles have different widths"** — Equi-Volume mode is on; width encodes volume.
- **"My chart shows different candles than my colleague's"** — check the **ETH Session** toggle first: one of you is likely on RTH-only. Session basics: [[understanding-market-structure-sessions]].
- **"The countdown sits at 00:00"** — on a delayed or idle feed there are no live ticks driving it; see [[free-delayed-data-feed]].
- **"My OHLC readout is empty"** — the fields only populate while hovering bars (or from the last bar); if they never populate, check that **Bar values** is ticked.
- The two checkbox modifiers and the base styles are independent: switching Candlestick → Line keeps Equi-Volume/Delta-Volume ticked.

## Related articles

- [[price-chart-settings]]
- [[chart-window]]
- [[understanding-market-structure-sessions]]
- [[orderflow-101]]
- [[quick-chart-templates]]
