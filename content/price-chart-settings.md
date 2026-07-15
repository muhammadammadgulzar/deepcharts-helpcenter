---
title: "Price Chart Settings"
slug: "price-chart-settings"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "10 min read"
description: "Reference for the Price Settings dialog: data parameters, every bar type, volume/delta candle modes, price line, countdown, sessions and subgraph styling."
keywords: ["price settings", "days to load", "param type", "range bars", "renko", "vol bars", "point and figure", "delta bars", "continuous contract", "exclude auction", "tick grouping", "width based volume", "color based on delta", "custom time session"]
---

The **Price Settings** dialog controls how the price series itself is built and drawn: how much history loads, what kind of bars form, whether candles encode volume and delta, and the extra elements layered on the chart such as the price line, countdown and session markers.

This article covers the whole dialog, section by section, in the order it appears in the app. If you are looking for the quick display toggles (bar style, ETH session, countdown on/off), those live in the two-candle dropdown and are covered in [[chart-display-options]] — several of them are shortcuts to settings described here.

## What it is

Price Settings is the configuration dialog of the base **Price** series — the candles themselves. It answers questions like "how do I load more history", "how do I switch to Renko or Range bars", "why do my candles have different widths or colors", and "how do I restrict the chart to a custom session".

The chart visualizes the historical transactions of buyers and sellers based on the order book, and this dialog decides how those transactions are grouped into bars and rendered.

## When to use it

- Change how many days of data the chart loads, or switch between tick-based and minute-based history.
- Switch bar type: time bars, Range, Vol Bars, Volume, Trades, Renko, Point & Figure, Delta.
- Enable volume-width or delta-colored candles (and fine-tune how they are colored).
- Configure the last-price line, bar-close countdown, daily % variation display, day-start line, or a custom session window.
- Control futures rollover stitching (**Continuous Contract**) and tick filtering.

## Quick start

1. Click the two-candle icon at the top left of the chart and choose **⚙ Price Settings** at the bottom of the dropdown. (Alternatively: bar-chart icon → gear on the **Price** row.)
2. The dialog opens with two tabs: **Parameters** and **Subgraphs**. The left column of **Parameters** lists the sections: DATA, VOLUME/DELTA, PRICE LINE, COUNTDOWN, % VAR, LINE START DAY, CUSTOM TIME SESSION, DEEP RANGE.
3. Make a change — for example set **Days To Load** to 30.
4. Click **Apply** to see the result on the chart, then **Save**.

[SCREENSHOT: The Price Settings dialog open on the Parameters tab, showing the left section list (DATA, VOLUME/DELTA, PRICE LINE, COUNTDOWN, % VAR, LINE START DAY, CUSTOM TIME SESSION, DEEP RANGE) and the GENERAL fields with Days To Load=10, Param Type=Minute, Param 1=5 | price-settings-parameters-tab.png]

> **Note:** Some changes (for example toggling **Exclude Auction**) rebuild the entire chart — the **Building chart** spinner while it reloads is normal.

## How to read it

The data parameters mirror the chart's title bar: **Days To Load** is the same value as the data range dropdown (for example **10D - BT**, where BT = Based on Tick and BM = Based on Minute), and **Param Type** plus **Param 1** are the same as the timeframe dropdown (Param Type **Minute** with Param 1 **5** is a 5-minute chart). You can change these in either place — the dialog and the title bar stay in sync.

## Settings reference

### Parameters tab — DATA (GENERAL)

| Setting | What it does |
|---|---|
| **Days To Load** | Number of days of history to load into the chart. Mirrors the title-bar data range dropdown. |
| **Param Type** | The bar type — see the bar type table below. |
| **Param 1** | The bar parameter for the selected type (e.g. 5 for a 5-minute chart, ticks for Range). |
| **Param 2** | Second parameter, used by bar types that need two values — Vol Bars and Point & Figure. [CONFIRM: whether Param 2 has any effect on other bar types] |
| **Based on minute data** | Off by default: bars build from tick data for maximum accuracy. On: bars build from minute data. Long history ranges (3 months and up in the title-bar dropdown) use minute data. |
| **Continuous Contract** | How futures history stitches across contract months: **None**, **Date**, **Volume**, **Adjusted Date**, **Adjusted Volume**. Adjusted Date makes the rollover based on time expiration; the Adjusted modes remove the artificial price gap at rollover. See [[symbol-rollover]]. |
| **Exclude Auction (Tick Data)** | Default off. Removes opening/closing auction data from the chart's calculations — exact filtering behavior may vary [CONFIRM: precisely which auction prints are excluded]. Same setting as the **Auction filter** toggle in the two-candle dropdown; toggling it rebuilds the chart. |
| **Filter Bad Ticks** | Default on. Filters out bad ticks from the series [CONFIRM: what qualifies as a bad tick and when to disable]. |
| **Trade Type** | Default **All**. [CONFIRM: other Trade Type options and what each restricts] |
| **RTH - only** | Default off. Restricts the chart to Regular Trading Hours — the inverse of the **ETH Session** toggle in the two-candle dropdown (same setting, two places). |
| **Bid/Ask type** | Default **Bid ask**. [CONFIRM: other options and their effect on the chart] |

#### Bar types (Param Type)

| Type | How bars form |
|---|---|
| **Second / Minute / Daily / Weekly / Monthly** | Each bar covers a fixed time period. |
| **Range** | Not time-dependent — Param 1 defines the range in ticks of each individual bar (e.g. an 8-tick range triggers a new bar). |
| **Vol Bars** | Two parameters: **Target** — the minimum tick threshold the bar must reach — and **Reverse** — the opposite-direction ticks needed to start a new bar. |
| **Volume** | Each bar closes once a maximum volume threshold is reached — not based on time or price. |
| **Trades** | Based on the maximum number of transactions per bar, rather than contracts traded. |
| **Renko** | Like Range, but the move is measured from the body of the previous candle (e.g. a new bar when price moves 10 ticks from the previous body). |
| **Point Figure** | Two parameters: box size and reversal amount. |
| **Delta** | Each bar forms on the delta, in absolute value — the difference between aggressive buys and sells. See [[orderflow-101]]. |

> **Tip:** On non-time bar types, time-anchored features (session markers, time-based indicators) behave differently, and bar counts no longer correspond to clock time. Keep that in mind when comparing charts.

### Parameters tab — DATA (TICK GROUPING and AGGREGATED TRADES)

| Setting | What it does |
|---|---|
| **Tick Grouping — Mode** | Default **Automatic**; a **Fixed value** field (default 1) is used with the fixed mode. Groups incoming ticks before charting [CONFIRM: exact tick-grouping behavior and when a fixed value helps]. |
| **Aggregated Trades — Price Mode** | Default **Last**. [CONFIRM: available Price Mode options and their effect on aggregated trade pricing] |

### Parameters tab — VOLUME/DELTA

These settings power the volume-width and delta-colored candle modes. The **Equi-Volume Bars** and **Delta-Volume Bars** toggles in the two-candle dropdown are shortcuts to the two master switches here.

| Setting | What it does |
|---|---|
| **Width based volume** | Candle width scales with the bar's volume relative to other candles — wider = more volume. Lets you see at a glance whether a move had real volume behind it or the book was thin. |
| **% max width based volume** | Maximum candle width used by the scaling (100 as configured in the dialog). |
| **Color based on delta** | Candle color varies with the bar's delta — low intensity = low delta, high intensity = high delta. |
| **Border color mode** | **Fixed delta**, **Fading delta** or **Bar direction** — the border-coloring strategy [CONFIRM: per-option behavior]. |
| **Delta input** | **Volume**, **Trades** or **Delta volume** — what feeds the delta coloring [CONFIRM: per-option behavior]. |
| **Color mode** | **Fixed** or **Fading color** [CONFIRM: exact visual difference]. |
| **Delta fading mode** | **Delta volume** or **Delta percentual** [CONFIRM: exact difference]. |
| **Std dev for coloring** | 2.00 as configured [CONFIRM: how the standard deviation scales the coloring]. |

[SCREENSHOT: A chart with both Width based volume and Color based on delta enabled — candles of visibly different widths and green/purple color intensities — next to the VOLUME/DELTA section of the Price Settings dialog | price-settings-volume-delta.png]

### Parameters tab — PRICE LINE

The dashed line marking the current price.

| Setting | What it does |
|---|---|
| **Enable** | Shows the current price line. On by default. |
| **Line Color / Line Style / Line Width** | Styling. Styles: **Solid, Dash, Dot, Dash dot, Dash dot dot** (default Dash, width 1). |
| **Extend line to left** | Default off. When on, the line extends across the whole chart instead of only to the right of the last bar. |

### Parameters tab — COUNTDOWN

The box counting down to the current bar's close (a 5-minute chart counts down 5 minutes per candle).

| Setting | What it does |
|---|---|
| **Enable** | Shows the countdown box. Also toggled from the two-candle dropdown (**Countdown timer**). |
| **Mode** | **Axis** — attached to the price scale — or **Floating** — a free box you drag anywhere on the chart. |
| **Text Size / Text Color / BackColor** | Styling (text size 18 as configured). |

> **Note:** On a delayed or idle feed the countdown can sit at 00:00 — the feed is not delivering live ticks; nothing is broken.

### Parameters tab — % VAR

Displays the percent variation from the previous session's closing price (the same daily %-change that the **%V** readout field reports).

| Setting | What it does |
|---|---|
| **Enable** | Default off. Shows the % variation element (moveable). |
| **Text Size / Pos. Text Color / Neg. Text Color / BackColor** | Styling — positive change in the positive color (green by default), negative in the negative color (red by default). |

### Parameters tab — LINE START DAY

| Setting | What it does |
|---|---|
| **Enable** | Default off. Draws a vertical line at the start of each session/day, plotted at exchange time — on NQ that is 18:00 New York time; with a different chart timezone it still falls where 18:00 NY converts to. |
| **Line Color / Line Style / Line Width** | Styling (same five line styles as the price line). |

### Parameters tab — CUSTOM TIME SESSION (EXCHANGE TIME ZONE)

Restricts the chart to a user-defined session window — like the ETH/RTH switch, but with your own hours. Example: **Ini Time** 09:30:00 and **End Time** 11:30:00 shows only the first two hours after the open. Times are in the exchange's timezone.

| Setting | What it does |
|---|---|
| **Enable** | Default off. |
| **Ini Time / End Time** | Session start and end boundaries. |
| **Use ini time as base for minute tf.** | [CONFIRM: what this toggle changes about minute-bar anchoring] |

See [[understanding-market-structure-sessions]] for why session boundaries matter.

### Parameters tab — DEEP RANGE

Bar filters for the Deep Range feature [CONFIRM: purpose and behavior of the DEEP RANGE section]. Fields as they appear: **TIME/VOLUME** — **Mode** (**Disabled**, **Time and volume**, **Time or volume**; default Disabled), **Time-Minimum(s)**, **Time-Maximum(s)**, **Volume-Minimum**, **Volume-Maximum**; **WICK VOLUME** — **Custom mode** (default None), **Ticks** (default 1), **Minimum volume** (default 1.00).

### Subgraphs tab

Controls how the price series itself is drawn and labeled on the axis.

| Setting | What it does |
|---|---|
| **Bull/Bear Border and Fill colors** | The candle colors for up and down bars. |
| **Subgraph Style** | **Line**, **Candlestick** (default), **OHLC**, **Hidden**, **CandleBody** [CONFIRM: how CandleBody differs from Candlestick]. |
| **Auto Color** | **None** (default), **Slope**, **+/-** — automatic coloring rules [CONFIRM: exact behavior of Slope and +/- modes]. |
| **Line Style / Line Width** | **Solid** (default) or **Dash**, width 1 — used when the style is Line. |
| **Short Name** | Label text for the series. |
| **Name Label / Value Label** | Show the series name / current value on the axis (defaults: name off, value on). |
| **Name Background / Value Background** | Background fill behind those labels (defaults: name off, value on). |
| **Chart color for marker** | Default off [CONFIRM: exact effect]. |
| **Include on Auto Center** | Default on — whether this series is considered when the chart auto-centers the visible price range [CONFIRM: exact Auto Center behavior]. |

[SCREENSHOT: The Price Settings dialog on the Subgraphs tab showing the Price row selected, the Bull/Bear color swatches, Subgraph Style dropdown open with Line / Candlestick / OHLC / Hidden / CandleBody visible | price-settings-subgraphs-tab.png]

### Dialog footer

- **Chart area** selector (top): which chart area the series renders in.
- **Indicator Template** — save or load this configuration for reuse on other charts.
- **Protected** toggle [CONFIRM: what the Protected toggle protects].
- **Apply** / **Save** — Apply shows the changes on the chart; Save stores them [CONFIRM: exact difference between Apply and Save].

## Tips and common mistakes

- **Chart rebuilds after a change are normal.** Data-level settings (Exclude Auction, bar type, days to load) trigger the **Building chart** spinner — wait for it to finish.
- **Different chart than a colleague's?** Compare **RTH - only** / ETH session state, bar type, and **Days To Load** before anything else.
- **Price jumps at contract rollover on long histories** — switch **Continuous Contract** to an Adjusted mode to remove the artificial gap.
- **Candles suddenly have odd widths or washed-out colors** — **Width based volume** or **Color based on delta** is on (possibly toggled from the two-candle dropdown as Equi-Volume/Delta-Volume Bars).
- **Loading years of history?** Ranges of 3 months and longer are minute-based (BM). Tick-level detail is only available on the shorter tick-based ranges.
- Settings changed here affect this chart only. To reuse a configuration, save it via **Indicator Template** or save the whole chart as a template — see [[templates-workspaces]].

## Related articles

- [[chart-window]]
- [[chart-display-options]]
- [[understanding-market-structure-sessions]]
- [[symbol-rollover]]
- [[orderflow-101]]
- [[different-types-of-input]]
