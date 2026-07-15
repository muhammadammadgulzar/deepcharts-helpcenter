---
title: "The Chart Window"
slug: "chart-window"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "9 min read"
description: "Complete tour of the DeepCharts chart window: title-bar controls, toolbar icons, tabs, the bottom bar, navigation and the right-click menu."
keywords: ["chart window", "price chart", "chart tabs", "chart toolbar", "OHLC readout", "duplicate chart", "always on top", "chart screenshot", "compact mode", "add chart tab", "detach chart"]
---

The chart window is where you will spend most of your time in DeepCharts. Every price chart opens inside one, and every control you need day to day — symbol, timeframe, indicators, drawings, trading — is reachable from its frame without opening a separate menu.

This article maps out every area of the chart window so you know what each icon, dropdown and button does and where to find the setting behind it. For the settings that control how the price series itself is built, see [[price-chart-settings]]; for bar styles and session toggles, see [[chart-display-options]].

## What it is

The chart window is the container for one or more price charts. It answers the question "where do I change X on my chart?" — the symbol and timeframe live in the title bar, display and indicator controls live in the top-left icon row, drawing tools live in the left toolbar, and quick templates plus trading toggles live in the bottom bar.

[SCREENSHOT: A full chart window with a candlestick chart loaded (e.g. NQ, 5 Minute), annotated with callouts for the title bar, top-left icon row, OHLC readout, left drawing toolbar, and bottom bar | chart-window-overview.png]

## When to use it

- You want to open, switch or compare instruments on a chart.
- You need to find where a control lives — bar style, indicators, drawings, screenshot, trading toggle.
- You want to organize multiple charts as tabs or separate windows.
- You want to link several charts so they follow the same symbol.

## Quick start

1. In the main bar, choose **New → Price Chart**.
2. In the **Select Instrument** dialog, pick an exchange in the left sidebar, select a symbol (for example **NQ**) and click **Select**.
3. Wait while the **Building chart** progress bar finishes — DeepCharts is loading or downloading the tick data.
4. Use the three title-bar dropdowns to adjust the chart: the symbol (opens the same instrument picker), the data range (for example **10D - BT**) and the timeframe (for example **5 Minute**).

[SCREENSHOT: The Select Instrument dialog with the exchange sidebar on the left, CME selected, the symbol list showing NQ highlighted, and the New / Cancel / Select buttons visible | chart-window-select-instrument.png]

> **Note:** The instrument picker only lists exchanges you have subscribed in **Options → Symbol Manage**. If the picker looks empty, subscribe an exchange first — see [[symbol-manage]].

## How to read it

**The top-left readout.** With **Bar values** enabled (it is by default), the top-left corner shows **O: H: L: C:** plus three volume fields for the hovered bar (or the last bar when the cursor is off the chart): **%V** is the percent change from the previous day's close; **ΣV** and **ΔV** are the bar's volume figures [CONFIRM: exact definitions of ΣV and ΔV — likely bar total volume and bar delta]. The fields show no values while the cursor is not over a bar — that is normal.

**The status badge.** While a chart builds, the main bar shows a badge next to the help icon: **LDT** means data already on disk is being loaded; **DWT** means data is being downloaded from the feed server. A chart stuck on **DWT** usually points at the connection, not the chart.

**The delayed-data banner.** An orange banner such as "Connect dxFeed - 15m to see delayed data" means the chart has no live connection and is using the delayed feed — see [[free-delayed-data-feed]].

[SCREENSHOT: Top-left corner of a chart zoomed in, showing the OHLC readout with real values (O H L C, %V, ΣV, ΔV) while hovering a candle | chart-window-ohlc-readout.png]

## Settings reference

### Title bar controls

| Control | What it does |
|---|---|
| Symbol dropdown (e.g. **NQ-202609**) | Opens **Select Instrument** to change the chart's symbol in place. |
| Data range dropdown (e.g. **10D - BT**) | How much history to load: 5–60 days on tick data, 3 months–10 years on minute data, or **Custom**. **BT** = Based on Tick, **BM** = Based on Minute. |
| Timeframe dropdown (e.g. **5 Minute**) | The bar type and size — seconds/minutes/daily up to Renko, Range, Volume, Trade, Point & Figure and Delta bars. Each row has a gear that opens a preset editor (days to load, tick/minute base, bar parameter). See [[price-chart-settings]] for what each bar type means. |
| Open-in-new-window icon | Detaches the active chart tab into its own standalone window. |
| Green **+** | Adds a new chart tab (opens **Select Instrument** first). |
| Link icon (square, left of minimize) | Chart link menu: **None link**, **Link 1–8** (color groups) and **$ Link Trading Symbol**. Charts sharing a color follow each other's symbol changes — symbol only, not timeframe. See [[link-windows]]. |

Try link groups live below — set both mini charts to the same color, change the symbol on one, and watch the other follow.

[WIDGET: link-groups-demo]

### Top-left icon row

| Icon | What it does |
|---|---|
| **≡** | Shows/hides the left drawing toolbar strip. |
| Two-candle icon | Bar style dropdown: Candlestick / Line / OHLC, Equi-Volume and Delta-Volume modifiers, ETH Session, Auction filter, Bar values, Countdown timer, and the **Price Settings** entry. Full reference: [[chart-display-options]]. |
| Bar-chart icon | Per-chart indicator manager (see below). |
| Gear | Two options: **Duplicate chart** (opens an exact copy — same settings and indicators — as a new chart) and **Always on top** (the window stays above every other application until disabled). |
| **$** | **Trading Enabled** toggle (Ctrl Alt T). Turns green when armed. Disabling it also hides the trading panel. See [[trading-from-chart]]. |
| Camera | Takes a chart screenshot. Behavior follows **Options → Settings → General → Various → Screenshot Mode**: **Auto Save** (saves to the configured folder), **Save Dialog** (asks where), **Copy** (to clipboard), or **Copy and Auto Save**. |

[SCREENSHOT: The six top-left chart icons zoomed in, in order: hamburger, two-candle, bar-chart, gear, dollar sign (green/armed state), camera | chart-window-topleft-icons.png]

### Managing indicators

Click the bar-chart icon to open the **Indicators** panel. Each active indicator row has a recycle-bin icon (remove), an eye icon (hide/show) and a gear icon (settings). Indicators are grouped by **Chart Area** — the horizontal band they render in; resize an area by dragging the dividing line between areas.

Click the **Indicators** button in that panel to open the full **Indicator List**: category tabs on the left (**All, Volume, Statistics, Oscillator, Overlay, Utility, Third**), a search box, **+** to add and **−** to remove, a gear for settings, and a three-line drag handle to reorder. See [[indicator-layout]] for arranging indicators across chart areas.

[SCREENSHOT: The Indicator List window with the category tabs on the left, the search box at the top, the scrollable indicator list with + icons, and the right panel showing active indicators | chart-window-indicator-list.png]

### Chart tabs (Compact View and Group Mode)

DeepCharts offers two ways to manage multiple charts, switched at **Options → Settings → General → Chart → Chart tabs compact mode**:

- **Compact View** (compact mode on): charts appear as tabs at the top of the window. Click the green **+** to add a tab; the active tab is highlighted green. With two or more tabs the three title-bar dropdowns are replaced by the tab strip — click the active tab to open a popover with the symbol, data range and timeframe dropdowns plus **Detach** and **Close**.
- **Group Mode** (compact mode off): all open charts are listed centrally in a group panel. Click **Add Chart** to add one, the arrow icon to pop a chart out into a dedicated window, or the **X** icon to remove it.

Each tab keeps its own trading panel and DOM Trading state. Closing a detached chart window asks "Are you sure to close the window?" before closing.

[SCREENSHOT: A chart window in compact tab mode with two tabs ("NQ 5 m" active in green, second tab inactive) and the tab popover open showing the three dropdowns plus Detach and Close buttons | chart-window-tabs-popover.png]

### Bottom bar

| Control | What it does |
|---|---|
| **Templates** button | Shortcut for right-click → **Template → Load** — opens the Local/Cloud/Shared file picker. See [[templates-workspaces]]. |
| Quick template radios (**OF-VP**, **OF-B/A**, **D-VP**, **D-DP**, **D-VL**, **W-VP**, **W-DP**, **C-VP**) | Built-in one-click indicator presets (not user-editable). Full breakdown: [[quick-chart-templates]]. |
| **DOM Trading** radio | Switches the chart into the on-chart click-trading ladder. See [[dom-trading-chart]]. |
| **Trading panel** toggle | Shows/hides the order-entry panel on the right side of the chart. |

### Navigation

- **X-axis:** scroll the mouse wheel, or left-click the timeline and drag. Right-click the x-axis to enable auto-scroll so the chart advances with each new bar. Return to the current bar with a double-click or the play button at the bottom right.
- **Y-axis:** right-click the price axis for its options, including auto-scroll (the axis follows price when it moves out of view) and the move mode: **Automatic Detection**, **Move Axis Range** (left-click drag moves the chart vertically) or **Resize Axis Range** (left-click drag rescales prices). The default move mode is set in **Options → Settings → General → Chart**.

If zooming stops responding, see [[chart-zoom]].

### Right-click menu

| Item (hotkey) | What it does |
|---|---|
| **Pointer** (Alt P) / **Crosshair** (Alt C) / **Hand** (Alt H) | Cursor modes: select, crosshair, drag-to-pan. |
| **Global Crosshair** (Alt G) | Crosshair synchronized across charts of the same instrument. |
| **Zoom Range** (Alt R) / **Zoom Out** | Click start and end points to zoom a section; Zoom Out resets it. |
| **Crosshair Window** | Lists everything active on the chart with its chart ID (the price series is always chart ID 1), each indicator's IDs and sub-IDs, plus the readout stats. Useful when an indicator asks for another indicator's chart ID. |
| **Drawing Objects ▸** / **Drawing Utilities ▸** / **Drawing Tool From Other Chart** | The annotation tools — full reference: [[drawing-tools]]. |
| **Trading Enabled** (Ctrl Alt T) / **Show Trading Panel** (Ctrl Alt P) | Same toggles as the **$** icon and the bottom-bar switch. |
| **Show Historical Orders** (Ctrl Alt H) | Marks your past entries and exits on the chart with arrows. |
| **Clear Historical Account Report** | Removes the trading history of the account selected in the trading panel. |
| **Trading Settings** | Trading-related chart options [CONFIRM: contents of the Trading Settings dialog]. |
| **Autotrading ▸** | **Execute Backtest / Reset Backtest / Show Report / Save Report** — the backtest engine used with Deep Pattern Builder. See [[deep-pattern-builder]]. |
| **Rebuild Chart** (Ctrl R) | Refreshes and reloads the chart — a quick, harmless first step when the display looks glitched. |
| **Template ▸** | **Load** / **Save As** the chart's template. See [[templates-workspaces]]. |
| **Indicators** (Ctrl I) | Opens the indicator manager. |
| **Properties** (Ctrl P) | Per-chart appearance dialog (below). |

> **Warning:** **Clear Historical Account Report** permanently deletes that account's Strategy Report history. Only use it if you are sure you no longer need the data.

### Chart Properties (Ctrl P)

Per-chart appearance settings, grouped as in the dialog:

- **CHART AREA** — **Back Color**, **Border Color**, **Text Size** (default 12), **Text Color**, **Crosshair** color, **Series Marker Margin (px)** (default 6).
- **GRID** — **Enable** (default off), **Line Color**, **Line Style** (default Dot).
- **USER ANNOTATIONS** — **Anchor Points - Enable Static Color** and the static color swatch for drawing anchor points.
- **EXTRA** — **Name**: names the chart window.

## Tips and common mistakes

- **Nothing is auto-saved.** DeepCharts does not auto-save chart layouts. Save a template (one chart) or a workspace (whole screen) before closing, or the next launch starts from defaults — see [[templates-workspaces]].
- **Duplicate instead of rebuilding.** Gear icon → **Duplicate chart** gives you an exact copy, indicators included — faster than configuring a second chart by hand.
- **Empty instrument picker?** No exchanges are subscribed in **Options → Symbol Manage** — the picker only shows subscribed exchanges.
- **Chart looks glitched?** Right-click → **Rebuild Chart** (Ctrl R) first. It is quick and harmless.
- **Charts out of sync with a colleague's?** Check the ETH/RTH session toggle and the bar type before comparing — see [[chart-display-options]].
- **Keep a chart visible over other apps** with gear icon → **Always on top** — useful on a single monitor. For multi-monitor layouts see [[multi-monitor-windows]].

## Related articles

- [[first-chart]]
- [[price-chart-settings]]
- [[chart-display-options]]
- [[drawing-tools]]
- [[templates-workspaces]]
- [[link-windows]]
