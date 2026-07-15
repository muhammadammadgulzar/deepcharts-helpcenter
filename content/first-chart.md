---
title: "Open Your First Chart"
slug: "first-chart"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Open a new price chart, pick an instrument, and understand what the chart is doing while it loads."
keywords: ["open chart", "new chart", "price chart", "select instrument", "building chart", "chart won't open", "new price chart"]
---
By the end you will have a live price chart open, updating, and set to the timeframe you want.

Opening a chart in DeepCharts takes two clicks, but the first time you do it there are a few things worth understanding: where the instrument list comes from, why the chart takes a few seconds to build, and what the three dropdowns in the chart's title bar control.

## Before you start

- DeepCharts installed and activated — [[install-deepcharts]]
- A data feed connected — [[connect-data-feed]], or the [[free-delayed-data-feed|free 15-minute delayed feed]] if you have no credentials yet. (Charts also work with recorded data via [[replay-data]].)
- The exchanges you trade mapped to your feed — the startup wizard normally does this for you; [[symbol-manage]] covers it in detail

## Steps

1. Check that your feed is connected: the feed selector at the top right of the main bar shows your connection name with a **green dot**. If it reads **Select a connection**, open the dropdown and click your saved connection.

[SCREENSHOT: The main bar feed selector at top right showing a connected feed name with a green status dot, with the dropdown open listing saved connections and the Feed Settings item | main-bar-feed-selector-connected.png]

2. Click **New → Price Chart** in the main bar.

[SCREENSHOT: The New menu open on the main bar with Price Chart highlighted (other items visible: Adv. Time And Sales, Book, Correlation Viewer, Profile Chart, Scanner) | new-menu-price-chart.png]

3. The **Select Instrument** dialog opens. Pick an exchange in the left sidebar (for example **CME**), or use the **Type to filter** box to search. Click your symbol — for example **NQ** (MINI NASDAQ) — then click **Select**.

[SCREENSHOT: The Select Instrument dialog with the CME exchange selected in the sidebar, the symbol list showing NQ MINI NASDAQ highlighted, and the Type to filter box and Select button visible | select-instrument-cme-nq.png]

> **Note:** The dialog only lists exchanges that are subscribed in **Options → Symbol Manage**. If the list is empty or your exchange is missing, fix it there — see [[symbol-manage]].

4. Wait while the chart builds. A **Building chart** spinner shows for a few seconds, and a status badge appears in the main bar telling you where the data is coming from: **LDT** means it is loading from your disk, **DWT** means it is downloading from the feed server.

[SCREENSHOT: A new chart window showing the Building chart spinner, with the LDT/DWT status badge visible in the main bar | building-chart-status-badge.png]

5. The chart opens. The title bar has three dropdowns that control what you are looking at:

| Control | Example | What it does |
|---|---|---|
| Symbol | **NQ-202609** | Opens Select Instrument to switch the chart to another contract |
| Data-load range | **10D - BT** | How much history is loaded — "10 Days, Based on Tick" (BM = Based on Minute) |
| Timeframe | **5 Minute** | The bar type and size the chart draws |

[SCREENSHOT: A finished price chart with the three title-bar dropdowns (symbol, 10D - BT range, 5 Minute timeframe) annotated | chart-title-bar-dropdowns.png]

### If you want a different timeframe

Click the timeframe dropdown. Every bar type has its own row with quick presets: **Second**, **Minute**, **Time** (daily/weekly/monthly), **Vol Bars**, **Range**, **Volume**, **Trade**, **Renko**, **P/F** and **Delta**. Click a preset to rebuild the chart with it.

[SCREENSHOT: The timeframe dropdown open showing all bar-type rows (Second, Minute, Time, Vol Bars, Range, Volume, Trade, Renko, P/F, Delta) with their quick presets | timeframe-dropdown-bar-types.png]

### If you want more history on the chart

Click the data-load range dropdown. Short ranges load tick data (5/10/15/30/60 days); long ranges load minute data (3/6 months, 1/2/5/10 years); **Custom** opens a dialog where you set any day count plus a **Based on minute** checkbox. The default is 5 days.

> **Warning:** Loading many more days makes the chart heavier — more RAM and CPU, slower loading. Increase gradually, and prefer minute-based data for multi-month ranges. Every indicator can only compute on the days the chart has loaded.

## Verify it worked

Candles are drawn and the last price is moving. The readout in the top-left corner shows O/H/L/C values when you hover a bar. If you are on the free delayed feed, an orange banner notes the data is delayed — that is normal, prices update with a 15-minute lag (see [[free-delayed-data-feed]]).

Not sure what those O/H/L/C values mean on a candle? Hover the anatomy below — each zone explains itself, and you can flip it between bull and bear.

[WIDGET: candle-anatomy]

## If something went wrong

| Symptom | What to do |
|---|---|
| Select Instrument dialog is empty | Nothing is subscribed in Symbol Manage — [[symbol-manage]] |
| Chart opens but price does not move | [[feed-connected-chart-not-moving]] |
| "Connection lost" appears when opening the chart | [[connection-lost-opening-chart]] |
| Chart stuck on Building chart / loads very slowly | [[data-delayed-lagging]] |

## Related articles

- [[chart-window]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[free-delayed-data-feed]]
- [[chart-display-options]]
- [[quick-chart-templates]]
