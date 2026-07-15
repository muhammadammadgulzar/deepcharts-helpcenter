---
title: "Advanced DOM Window"
slug: "advanced-dom"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "13 min read"
description: "The Advanced DOM ladder in DeepCharts: depth columns, click-trading, the P&L ladder, the two volume-profile columns and every settings dialog."
keywords: ["advanced dom", "adv dom", "DOM window", "depth of market", "ladder", "click trading", "pull stack", "dom columns", "P&L column", "volume profile column", "dom settings"]
---

The Advanced DOM is the standalone price ladder in DeepCharts: live market depth on both sides of price, click-to-trade order columns, a projected P&L ladder while you hold a position, and up to two volume-profile columns — all in one window.

This article maps the whole window: anatomy, every ladder column, the gear menu, and the deeply nested settings dialogs (**Chart Dom Settings** and the two profile dialogs). If you want the concept behind a DOM rather than this specific window, start with [[depth-of-market]]; for the ladder that lives inside a chart, see [[dom-trading-chart]].

## What it is

A DOM (Depth of Market) shows the resting order book as a vertical price ladder: bid sizes stacked below and around the current price on one side, ask sizes on the other. The Advanced DOM window adds trading columns (click a level to work an order there), a per-level projected profit/loss column for your open position, per-level traded-volume counters, and volume profiles built from executed trades.

If the ladder idea is new to you, explore the living order book below — hover any level to see what the resting size there means.

[WIDGET: dom-ladder]

> **Note:** Depth display depends on your data feed. With Level 1 data only the best bid/ask is available; the full ladder of resting sizes needs Level 2 depth data.

## When to use it

- Working precise limit orders at chosen levels instead of clicking buttons on a panel.
- Watching how resting liquidity builds or disappears around a level ([[understanding-auction-theory]] explains why that matters).
- Managing an open position with a per-level projected P&L readout.
- Combining live depth with executed-volume context via the two volume-profile columns.
- Running the tape and the book together — pair it with [[adv-time-and-sales]].

## Quick start

1. In the main bar, open **New → Book → Adv. Dom** (the **Book** submenu also offers **Horizontal dom** and **Vertical dom** variants).
2. Pick your instrument in **Select Instrument** and confirm. Only exchanges subscribed in [[symbol-manage]] appear.
3. The window opens and the ladder starts updating live. While history downloads, the main bar may show a **DWT:** badge — that is normal (DWT = downloading data from the feed server; LDT = loading data already on disk).

[SCREENSHOT: New menu open with the Book submenu expanded showing Adv. Dom, Horizontal dom and Vertical dom, and the Select Instrument dialog behind it | adv-dom-open-flow.png]

## Window anatomy

[SCREENSHOT: Full Advanced DOM window on NQ with all four sections visible: title bar with logo, eraser, gear, symbol dropdown and link icons; the Broker/Account/Qty/Daily P&L header; the %V %O V T stats row; the ladder with P&L, B, Bid, Price, Ask, S and VP columns with the current-price row highlighted orange; and the footer with the A box, Qty spinner, Cancel - Flat All, Buy, Cancel, Flat, Sell and the OCO block | adv-dom-window-overview.png]

Top to bottom:

- **Title bar** — DeepCharts logo, **eraser** icon (clears the Resettable Profile column), **gear** icon (the settings hub), the symbol dropdown (for example NQ-202609), the square **link** icon, minimize and close. Closing asks for confirmation ("Are you sure to close the window?").
- **Trading header** — **Broker**, **Account**, **Qty** (turns green with +N while you are long) and **Daily P/L**.
- **Fundamentals row** — **%V** (percent change versus the previous day), **%O** (change versus the session open), **V** (total volume) and **T** (number of trades).
- **The ladder** — the columns described below; the current-price row is highlighted orange (the **Last** marker).
- **Footer** — the **[A]** order-type box, **Qty** spinner, **Cancel - Flat All** (orange), **Buy**, **Cancel**, **Flat**, **Sell**, the OCO toggle with **Server/Client** radios and the strategy dropdown with its own gear.

The four middle/outer sections map one-to-one to the gear menu's **Show Fundamental**, **Show Trading Panel**, **Show Trading Buttons** and **Show OCO Panel** toggles — uncheck one and that section disappears.

### Ladder columns

The default view shows **P&L | B | Bid | Price | Ask | S | VP**. Enabling everything (via the settings or the column-header right-click menu) yields **P&L | #B | B.PS | B | Bid | B.T | Price | A.T | Ask | S | A.PS | #A | VP | VP**.

| Column | What it shows |
|---|---|
| **Price** | The price ladder itself. The orange row is the current price (Last marker). |
| **Bid / Ask** | Resting market-depth sizes per level (bid cells blue, ask cells purple by default), updating live. |
| **B / S** | Wide click-to-trade bands for your own orders — buy side green, sell side dark red. Your working orders appear here. |
| **P&L** | With an open position: the projected profit/loss of that position at every price level. The green 0.00 row marks your entry/breakeven level. |
| **B.PS / A.PS** | Pull/Stack columns — per-level liquidity change tracking (green = liquidity added, red = pulled). Empty until pull/stack events occur; the feature is off by default. |
| **B.T / A.T** | Per-level traded-volume counters per side (market-sold / market-bought volume). |
| **#B / #A** | Order-count columns, tied to the Offers feature (count of individual orders per level). They can stay empty on feeds that do not deliver order-level data — exact data requirement unconfirmed. |
| **VP / VP** | Two volume-profile columns: the Resettable Profile (accumulates until you clear it with the eraser icon) and the Daily Profile (from session start). Bars with numbers per level; the highest-volume level's value is highlighted red (the POC). |

[SCREENSHOT: Advanced DOM ladder zoomed to show blue bid depth cells, purple ask depth cells, a green working buy order in the B column, and the two VP columns on the right with the red-highlighted POC value | adv-dom-ladder-columns.png]

## How to read it

- **Depth (Bid/Ask columns)** — the sizes update tick by tick; watch levels where size stacks or vanishes. For interpretation patterns, see [[understanding-auction-theory]] and [[orderflow-101]].
- **The P&L ladder** — while flat it stays empty; once you hold a position every level shows what closing there would mean. The green 0.00 row is your breakeven/entry; values above and below scale with distance.
- **The two VP columns** — executed-volume context. The Daily Profile shows the full session; the Resettable Profile shows only what traded since you last pressed the eraser icon, which makes it useful for "what happened since the news" style questions. The red-highlighted value is the level with the most traded volume (POC — see [[understanding-volume-profile]]).
- **Markers** — the ladder highlights session levels: **Last** (orange, on by default), **High** (green, on), **Low** (red, on), **Open** (off by default), plus **Suspension** (cyan, on) and **Auction** (off). What the Suspension and Auction markers indicate exactly is [CONFIRM: Suspension and Auction marker semantics].

[SCREENSHOT: Advanced DOM while long 2 contracts — Qty field green showing +2, the P&L column filled with per-level values and the green 0.00 row at the entry level, current-price row orange below it | adv-dom-pl-ladder.png]

## Trading from the DOM

- **Order type — the [A] box.** The box next to Qty selects the order type: **Automatic / Limit / Market / Conditional**. In Automatic mode the platform decides from your mouse action — right-click places a market order, left-click places a limit or stop depending on which side of price you click.
- **Working orders.** Click in the **B** column to work a buy at that level, **S** for a sell. Drag an order to move it, right-click it to delete it, double-click to edit its quantity.
- **Footer buttons.** **Buy** and **Sell** submit at the footer quantity; **Cancel** cancels working orders and **Flat** closes the position. **Cancel - Flat All** does both in one click — its exact scope (this symbol only, or all accounts/symbols) is [CONFIRM: scope of Cancel - Flat All in the Adv DOM footer].
- **OCO block.** The footer's OCO toggle, **Server/Client** radios and strategy dropdown mirror the trading panel's bracket system — see [[oco-strategies]] and [[trading-panel-reference]] for how server-side versus client-side brackets behave.

> **Warning:** The B and S columns are live order-entry surfaces. A click places or works a real order for the selected account — keep the simulation account selected while you learn the ladder ([[simulation-accounts]]).

### Compact layout

When the window is narrow, the DOM re-arranges itself: the header gains **Price** and **P/L** fields, the ladder splits with price in the center and **X** columns that cancel the working order at that level, and the footer becomes an explicit order ticket (**Qty**, **Price**, **Type** dropdown showing LMT, **Buy**, **Cancel all**, **Flat**, **Sell**, plus the OCO row). What width triggers the switch is [CONFIRM: activation rule for the compact split layout].

[SCREENSHOT: Narrow Advanced DOM in compact split layout showing the centered price columns, X cancel columns, and the order-ticket footer with Qty, Price and Type=LMT fields | adv-dom-compact-layout.png]

## Settings reference

Everything starts at the **gear** icon: **Duplicate Dom**, **Settings Column Order**, **Settings Dom**, **Resettable Profile ▸**, **Daily Profile ▸**, the four **Show** toggles, **Always on Top** and **Template ▸** (Load / Save As).

[SCREENSHOT: Advanced DOM gear menu open showing Duplicate Dom, Settings Column Order, Settings Dom, Resettable Profile, Daily Profile, the four checked Show toggles, Always on Top and Template | adv-dom-gear-menu.png]

> **Note:** After some settings or profile changes the ladder briefly shows a Loading spinner while it rebuilds. This is normal — the same pattern as a chart rebuilding.

### Settings Column Order

A simple list of the internal column ids with **Up / Down** buttons plus **Apply / OK** — reorder the ladder columns here. The full inventory: ProfitLoss, BidOffer, BidPullStack, BuyOrder, BidQty, BidFilled, PriceScale, AskFilled, AskQty, SellOrder, AskPullStack, AskOffer.

A faster alternative: right-click any column header for the quick menu — **Adjust column size**, **Adjust window to fit content**, and show/hide toggles for **Pull/Stack**, **Trades**, **Offers**, **Profit/Loss** plus the two profile submenus.

[SCREENSHOT: Column-header right-click quick menu open showing Adjust column size, Adjust window to fit content, Pull/Stack, Trades, Offers, the checked Profit/Loss entry and the Resettable/Daily Profile submenus | adv-dom-column-quick-menu.png]

### Settings Dom (Chart Dom Settings dialog)

The main dialog, organized in ten collapsible sections:

| Section | Settings |
|---|---|
| GENERAL | **Font size** (11.00), **Text format** (Automatic), **Background color**, **Number of levels to show** (0), **Tick grouping** (1), **Auto. axis margin %** (20). [CONFIRM: meaning of Number of levels to show = 0 — all levels?] |
| BID/ASK COLUMN | **Bid back color** (blue), **Ask back color** (purple), **Bid/Ask profile color** (the horizontal size bars inside the depth cells), **Text Color**. |
| PULL/STACK COLUMN | **Enable** (off by default), **Calculation Mode** (Avg filter — other options unconfirmed), **Show As Profile** (on), **Text Color**, plus per-side pull/stack colors (bid pull red, bid stack green, ask pull green, ask stack red). |
| FILLED COLUMN | **Enable** (off), **Auto reset** (on), **Bid Text**, **Ask Text**, **Highlight Bid/Ask** (off), **Bid/Ask Highlight** colors. Exactly what Filled counts versus the Trades columns, and when Auto reset fires, is unconfirmed. |
| OFFERS COLUMN | **Enable offers** (off), **Bid/Ask offer back colors**, **Text Color**. |
| ORDER SETTINGS | **Text Color**, **Buy Order** (green), **Sell Order** (red), **Buy/Sell BackGround**, **Buy/Sell Filled Color** — the working-order colors in the B/S columns. |
| PRICE SCALE | **Price back color**, **Price text color**. |
| PL COLUMN | **Enable** (on), **Background**, **Gain Text Color** (green), **Loss Text Color** (purple) — turn the P&L ladder off here if you do not want it. |
| MARKER SETTINGS | Per-marker enable + color: **Last** (on, orange), **Open** (off), **High** (on, green), **Low** (on, red), **Suspension** (on, cyan), **Auction** (off, purple). |
| ORDER ENABLE SETTINGS | **Enable stop order** (on), **Enable market order** (on). Whether these gate ladder clicks only or also the footer buttons is unconfirmed. |

[SCREENSHOT: Chart Dom Settings dialog open with the GENERAL section expanded and the list of all ten section headers visible | adv-dom-settings-dialog.png]

### Resettable Profile and Daily Profile settings

Each of the two VP columns has its own full settings dialog (identical structure, nine sections): GENERAL (**Auto grouping** Manual/Automatic, **Auto group factory** 2, **Manual ticks** 1), PLOT SETTINGS (**Background → Show Settings**, **Show text**, **Text → Show Settings**, **Text format**, **Number of profile** 2), VISUAL APPEARANCE (**Vbp opacity** 90, **Show filled vbp** off), POINT OF CONTROL (**Enable** on, **Highlight** on, magenta highlight color, optional line), VALUE AREA (**Enable** on, **% Value Area** 70, **Highlight** on, **Outside Color** yellow — the yellow bars you see in the ladder are outside-value-area levels, optional line), PEAK AND VALLEY (**Sensitivity** 20 plus a nested PEAK/VALLEY settings window with enable, highlight, minimum volume and line options), SUMMARY, PRICE LINE and LAST FILLED QTY (each with an Enable toggle plus colors).

The nested **Background Settings** window controls profile-bar coloring: **Method color** (Fading color), **Color calculation** (Volume), **Min. Vol. Diff. for Imbalance**, **Include zero on imbalance**, **Color only dominant side**, fixed color swatches, and a RANGE system (**Range defining** Automatic plus FIRST–FOURTH RANGE color tiers). The full option lists and what defines the four range tiers are unconfirmed — expect this area to reward experimentation on a simulation feed.

These profile concepts (POC, value area, peaks and valleys) are the same ones the [[deep-profile]] indicator uses on charts.

[SCREENSHOT: Resettable Profile settings dialog showing the nine section headers with GENERAL expanded, and the nested Background Settings window open on top showing Method color=Fading color and Color calculation=Volume | adv-dom-profile-settings.png]

## Troubleshooting

- **Ladder shows only best bid/ask, most depth cells empty.** Your feed is Level 1. Full depth needs Level 2 data — check what your subscription includes ([[buy-data-feed]]).
- **#B/#A columns stay empty.** These order-count columns can stay empty on feeds without order-level data even while B.T/A.T populate. Exact requirement unconfirmed.
- **Window stuck on Loading.** Settings and profile changes rebuild the ladder — give it a moment. If the main bar shows **DWT:** the platform is downloading history from the feed; if it never finishes, work through [[data-delayed-lagging]].
- **Resettable Profile column looks empty or sparse.** It only accumulates since the last eraser click — that is its job. The Daily Profile column next to it carries the full session.
- **Prices frozen.** Check the feed dot in the main bar and see [[feed-connected-chart-not-moving]].

## Tips and common mistakes

- **Eraser vs Daily.** Press the title-bar eraser deliberately: it clears the Resettable Profile immediately. The Daily Profile is unaffected.
- Use **Duplicate Dom** to spin up a second ladder with identical settings, then switch its symbol — faster than reconfiguring from scratch.
- If a section of the window "disappeared", check the gear menu's four **Show** toggles before assuming a bug.
- Save your configured DOM as a template (**Gear → Template → Save As**) and reload it on any workspace.
- Keep **Enable stop order / Enable market order** in mind: if a ladder click refuses to place a stop or market order, these toggles are the first place to look.

## Related articles

- [[depth-of-market]]
- [[dom-trading-chart]]
- [[adv-time-and-sales]]
- [[trading-panel-reference]]
- [[oco-strategies]]
- [[understanding-volume-profile]]
