---
title: "Market Scanner"
slug: "scanner-window"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "8 min read"
description: "Watch several symbols in one table with Open, High, Low, Close and percent change, manage the scanned symbol list, and filter the table down to the biggest movers."
keywords: ["scanner", "market scanner", "scaner", "watchlist", "watch list", "scanner symbols", "symbol list", "rank top", "rank worst", "OHLC table", "percent change table", "quote board"]
---

The Market Scanner is a compact quote table: one row per symbol, with **Open**, **High**, **Low**, **Close** and a percent-change cell that updates from your live data feed. It gives you a market overview without opening a separate chart for every instrument you follow.

This reference covers opening the Scanner, managing its symbol list, working with resolutions, the rank filter, and every setting in its dialogs.

## What it is

The Scanner answers the question "how are all my markets doing right now?" in a single window. Each symbol you add becomes a row showing that instrument's **Symbol**, **Open**, **High**, **Low**, **Close** and **%** (percent change) for the configured resolution. The window is freely resizable, so it works equally well as a thin strip on a side monitor or a full-screen quote board.

The Scanner reads from the same live feed as your charts. If the feed disconnects, the table stops updating — see the troubleshooting notes below.

[SCREENSHOT: Scanner window with two rows (ES and NQ) showing the Symbol, Open, High, Low, Close and % columns, with the highlighted percent-change cells visible | scanner-window-overview.png]

## When to use it

- You trade one instrument but want the rest of your watchlist visible at a glance.
- You want a quick session overview (OHLC and percent change) across several markets without loading full charts.
- You want to spot the strongest and weakest movers in a list using the rank filter.
- You want a lightweight always-on-top quote strip next to your main chart layout.

## Quick start

1. In the top application bar, choose **New → Scanner**.
2. The **Select Instrument** window opens — the same instrument picker used for charts, with an exchange sidebar, a type-to-filter box and a table of **Symbol**, **Description** and **Exchange**. Pick your first symbol and press **Select**.

[SCREENSHOT: Select Instrument picker opened from New → Scanner, with the exchange sidebar on the left, the type-to-filter box, and a symbol row highlighted before pressing Select | scanner-select-instrument.png]

3. The Scanner window opens with one row for that symbol. Resize the window freely — the columns stretch with it.
4. To add more symbols, click the **gear icon** in the title bar and choose **Symbol List**, then press **Add** (see "Manage the symbol list" below).
5. The default resolution is daily ("1 Daily"). If that is what you want, you are done — the table updates live from your feed.

> **Note:** The Select Instrument picker only lists exchanges you have subscribed in Symbol Manage. If the picker looks empty, set up your exchange subscriptions first — see [[symbol-manage]].

## Window anatomy

The title bar contains, from left to right:

| Element | What it does |
|---|---|
| DeepCharts logo | Window branding |
| **Funnel icon** | Shows or hides the rank-filter strip above the table |
| **Gear icon** | Opens the Scanner settings menu (resolutions, symbol list, graphics, templates) |
| Link (square) icon | Window-link control, matching the link control on other DeepCharts windows — see [[link-windows]] (exact behavior in the Scanner may vary) |
| Minimize / maximize / close | Standard window controls |

Below the title bar sits the table itself: **Symbol | Open | High | Low | Close | %**.

[SCREENSHOT: Scanner title bar zoomed in with the funnel, gear and link icons visible and labeled | scanner-title-bar-icons.png]

## How to read it

Each row is one scanned symbol on the configured resolution:

- **Open / High / Low / Close** — the OHLC values for the current bar of the configured resolution (for the default "1 Daily" resolution, the current day).
- **%** — the percent change, shown in a color-highlighted cell. [CONFIRM: what the % column is measured against (previous close vs session open) and the exact rule for when the cell shows green vs red]

Newly added symbols appear at the top of the table.

> **Note:** The Scanner is a live window — it depends on an active feed connection. Watch the feed badge dot in the top application bar: green means connected, red means disconnected.

## Manage the symbol list

The Scanner starts with only the symbol you picked at creation. Everything else is managed in a dedicated window:

1. Click the **gear icon** and choose **Symbol List**.
2. The **Scanner Symbols** window opens with columns **Symbol**, **Description** and **Exchange**.
3. Press the green **Add** button to open the **Select Instrument** picker and add another symbol. The Scanner table updates immediately — no restart needed.
4. Select a row and press the red **Remove** button to drop a symbol from the scan.

[SCREENSHOT: Scanner Symbols manager window listing NQ and ES rows with the red Remove and green Add buttons visible | scanner-symbols-manager.png]

Index and breadth symbols (the $-prefixed instruments in the picker) can be scanned too, as long as their exchange group is subscribed in [[symbol-manage]].

## Resolutions

The Scanner supports configurable resolutions, managed from **gear icon → Resolutions**. The submenu lists the current resolution — for example **1 Daily** — plus an **Add Resolution** entry.

Clicking a resolution entry opens the **Resolution Settings** dialog. The resolution's name is built from **Param 1** plus **Param Type**: Param 1 = 1 with Param Type = Daily reads "1 Daily"; Param 1 = 5 with Param Type = Minute reads "5 Minute".

[SCREENSHOT: Resolution Settings dialog opened from the Scanner gear menu, showing Days To Load, Param 1, Param 2, Param Type dropdown, Based on minute data toggle, Continuos contract dropdown, Exclude Auction(Tick Data), Filter Bad Ticks and Extended market hour toggles | scanner-resolution-settings.png]

After you press **OK**, the table clears and reloads with the new resolution — a brief loading spinner is normal, the same way a chart rebuilds after a timeframe change.

**Add Resolution** creates an additional resolution for the Scanner. [CONFIRM: how the table presents multiple resolutions at once — extra column sets per resolution, or another layout]

## Filter the biggest movers (rank filter)

Click the **funnel icon** in the title bar to show a filter strip above the table with two controls:

- **Rank top** — checkbox plus a number stepper (default 0)
- **Rank worst** — checkbox plus a number stepper (default 0)

Based on their labels, these appear to limit the table to the top-N and worst-N movers by percent change, but the exact ranking behavior may vary. [CONFIRM: exact Rank top / Rank worst semantics, and whether 0 means the filter is disabled]

Click the funnel icon again to hide the strip.

[SCREENSHOT: Scanner window with the funnel filter strip visible above the table, showing the Rank top and Rank worst checkboxes with their number steppers | scanner-rank-filter-strip.png]

## Settings reference

All Scanner settings live behind the **gear icon** in the title bar.

### Gear menu

| Entry | What it does |
|---|---|
| **Resolutions** ▸ | Lists the configured resolution(s) and **Add Resolution**; clicking a resolution opens Resolution Settings |
| **Always on Top** | Keeps the Scanner above other windows — useful for a compact quote strip |
| **Symbol List** | Opens the Scanner Symbols manager window (add/remove scanned symbols) |
| **Graphics Settings** | Table cosmetics: cell and header colors and text sizes |
| **Template** ▸ | Save or load a named Scanner configuration, the same template pattern used across DeepCharts windows — see [[templates-workspaces]] |

[SCREENSHOT: Scanner gear menu open showing Resolutions, Always on Top, Symbol List, Graphics Settings and Template entries | scanner-gear-menu.png]

### Resolution Settings dialog

| Setting | What it does |
|---|---|
| **Days To Load** | How many days of history load for this resolution (4 was the value seen with 1 Daily; 10 with 5 Minute). More days = longer reload. |
| **Param 1** | The resolution's numeric value (1 for "1 Daily", 5 for "5 Minute") |
| **Param 2** | Default 0. [CONFIRM: what Param 2 controls] |
| **Param Type** | The resolution's unit — **Daily** and **Minute** were observed in the dropdown |
| **Based on minute data** | Toggle, on by default — builds the resolution from minute data rather than tick data (the same concept as the BT/BM basis on charts; see [[price-chart-settings]]) |
| **Continuos contract** (as labeled in the app) | Dropdown, default **None** — continuous-contract stitching across contract months, mirroring the chart data setting; see [[symbol-rollover]] |
| **Exclude Auction(Tick Data)** | Toggle, off by default — filters auction prints from tick-based data (exact filtering behavior may vary) |
| **Filter Bad Ticks** | Toggle, on by default — filters out bad ticks from the data |
| **Extended market hour** | Toggle, off by default — includes extended (ETH) session hours when enabled |

### Graphics Settings dialog

| Setting | Default | What it does |
|---|---|---|
| **Cell back color** | — | Background color of table cells |
| **Cell selection back color** | Green | Background of the highlighted cell (the % cell highlight) |
| **Cell selection text color** | — | Text color inside the highlighted cell |
| **Cell text color** | — | Text color of regular cells |
| **Cell text size** | 12.00 | Font size of table cells |
| **Header back color** | — | Background of the column header row |
| **Headers text color** | — | Text color of the column headers |
| **Header text size** | 14.00 | Font size of the column headers |

**Apply** shows changes live; **OK** confirms and closes.

[SCREENSHOT: Scanner Graphics Settings dialog showing all cell and header color swatches and the two text-size fields | scanner-graphics-settings.png]

## Tips and common mistakes

- **The Scanner starts with one symbol by design.** It only scans what you add — if the table looks empty, open **gear icon → Symbol List** and add symbols.
- **An empty Select Instrument picker means no exchange subscriptions**, not a broken Scanner. Subscribe exchanges in [[symbol-manage]] first.
- **Frozen numbers are almost always a feed issue.** Check the feed badge dot in the top bar; if it is red, fix the connection first — see [[connect-data-feed]] and [[feed-connected-chart-not-moving]].
- **A reload after changing a resolution is normal.** The table clears and repopulates the same way a chart rebuilds.
- **Use Always on Top plus a narrow window** for a persistent quote strip beside your charts.
- **Save your setup as a template** (**gear icon → Template**) so you can restore the same symbol list and styling later.

## Related articles

- [[correlation-viewer]]
- [[symbol-manage]]
- [[connect-data-feed]]
- [[feed-connected-chart-not-moving]]
- [[price-chart-settings]]
- [[templates-workspaces]]
