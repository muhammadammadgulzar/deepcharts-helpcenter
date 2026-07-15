---
title: "Depth of Market (DOM) Indicator"
slug: "depth-of-market"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Reference for the DeepCharts DOM price ladder: columns, order placement rules, pull/stack and trades columns, profiles, and depth settings."
keywords: ["depth of market", "DOM", "price ladder", "adv dom", "order book", "level 2", "pull stack", "bid ask ladder", "dom columns"]
---
The Depth of Market (DOM) is the price-ladder view of the order book: a vertical column of prices with the resting buy liquidity (bids) on one side and the resting sell liquidity (asks) on the other. In DeepCharts the full-featured DOM is the **Advanced DOM** window, and a compact version can be overlaid directly on the chart.

This article is the reference for the DOM interface — its columns, click rules and settings. For the complete window walkthrough see [[advanced-dom]]; for the on-chart ladder see [[dom-trading-chart]].

[CONFIRM: whether "Depth of Market" also exists as a standalone chart indicator in the Indicator List, separate from the Advanced DOM window and the on-chart DOM Trading mode — adjust the intro if so]

## What it is

The DOM answers the question: who is waiting to buy and sell at each price, and how do I trade against that? Each row is one price level. Bid quantities stack below the market, ask quantities above it, and the display updates in real time as orders are added, pulled and filled. Because orders are placed by clicking directly on a price row, the DOM is the tool of choice for traders who care about exact entry levels and queue position rather than chart-based entries.

Watch a live ladder in action below — buy liquidity stacks green below the market, sell liquidity violet above it; hover any row to see what that level is telling you.

[WIDGET: dom-ladder]

## When to use it

- Scalping or short-term trading where the exact tick of entry matters.
- Watching how resting liquidity builds or disappears around a level before committing.
- Managing working orders visually — drag to move, right-click to delete.
- Reading executed volume per level alongside a live volume profile.

## Quick start

1. Open DeepCharts and connect your data feed — [[connect-data-feed]].
2. Go to **New → Book → ADV DOM**.
3. Pick your instrument from the list of subscribed symbols (for example **ES**) and click **Select**.
4. Set the order quantity in the field at the bottom of the DOM.
5. Set the order-type menu (the **A** menu) to **Automatic** — order types are then chosen by where you click (see the table below).

[SCREENSHOT: New menu open with Book submenu and ADV DOM highlighted, Select Instrument dialog visible behind it | new-book-adv-dom.png]

> **Note:** The DOM needs Level 2 (depth) data from your feed to populate the bid and ask ladders. With Level 1 data only the best bid/ask is available.

## How to read it

The default layout shows, left to right:

| Column | Meaning |
|---|---|
| **P&L** | Your profit or loss at each tick — what the position would be worth if price traded there |
| **B** | Buy order management |
| **Bid** | Resting buy liquidity; click here to place buy orders |
| **Price** | The central price ladder |
| **Ask** | Resting sell liquidity; click here to place sell orders |
| **S** | Sell order management |
| **VP** | Daily volume profile — executed volume per price level |

The header shows the selected instrument, connected broker, active trading account, open position quantity and daily P&L. Below it, the fundamentals table gives session context: percentage change from the previous close, change from the session open, total traded volume, number of trades (stocks), and the upper and lower suspension prices.

With **Automatic** selected in the **A** menu, click position decides the order type:

| Click | Order |
|---|---|
| Left-click **Bid** below the current price | Buy Limit |
| Left-click **Bid** above the current price | Buy Stop |
| Left-click **Ask** above the current price | Sell Limit |
| Left-click **Ask** below the current price | Sell Stop |
| Right-click **Bid** | Buy Market |
| Right-click **Ask** | Sell Market |

Working orders are managed on the ladder itself: **left-click and drag** to move an order, **right-click** to delete it, **double left-click** to modify its quantity.

[SCREENSHOT: DOM ladder with a working buy limit order in the B column being dragged to a lower price row, cursor visible mid-drag | adv-dom-drag-order.png]

### Optional analysis columns

Right-click the column header row to enable more columns (or auto-resize the existing ones):

- **Pull/Stack** (**B.PS** / **A.PS**) — the change in resting liquidity per level. On the bid side, green means quantity was added (stacked), red means quantity was removed (pulled); the ask side reverses the color logic.
- **Trades** (**BT** / **AT**) — executed volume per level: BT is volume sold at market (hitting the bid), AT is volume bought at market (lifting the ask).
- **Offers** — the count of individual orders resting at each bid and ask level.

[SCREENSHOT: Column header right-click menu open over the Advanced DOM showing the list of additional columns including Pull/Stack, Trades and Offers with checkmarks | adv-dom-column-menu.png]

### Profiles

The DOM can draw profiles next to the ladder using **Volume**, **Delta** or **Bid/Ask** data. Two recording modes exist: the **Resettable Profile** starts recording the moment you enable it and clears with the eraser icon; the **Daily Profile** shows data from the start of the trading session. Concepts behind profile reading are covered in [[understanding-volume-profile]].

## Settings reference

Open the DOM settings with the **gear icon** (top left).

| Setting group | What it does |
|---|---|
| Section toggles | Enable or disable whole sections of the DOM to simplify the layout |
| **Order Column Settings** | Reorder the columns |
| **Chart DOM Settings** | Customize text, colors and background |
| Markers | Enable level markers for **High**, **Low**, **Open** and **Suspension** prices |
| **DOM Settings → Number of Levels Show** | Limits how many depth levels are displayed — set 20 to show 20 levels; leave unrestricted for the full depth your provider sends |
| **Model** section | Save your customized layout as a template and load saved templates later |

At the bottom of the window sit the order quantity field, the classic trading buttons and the **OCO** enable; the gear icon at the bottom right creates, saves and recalls OCO strategies from a dropdown — the same bracket system described in [[oco-strategies]].

Vertical scale: on the **Price** column, clicking near the current price scrolls the view, while clicking near the top or bottom expands or compresses the price scale (the column uses an auto-recognition mode, so exact behavior depends on where you grab it).

## Tips and common mistakes

- **Empty bid/ask ladders but the price row updates** — your feed is Level 1 only. Check what depth your feed plan includes ([[compatibility-guide]]).
- **Order type surprises** — in **Automatic** mode the type comes from the click position relative to the current price. If you want to force a type, switch the **A** menu to **Limit**, **Market** or **Conditional**.
- **Too much flicker on fast markets** — limit **Number of Levels Show** and disable columns you do not read; less depth means a calmer, faster display.
- **Layout lost after rebuilding it** — save it in the **Model** section so you can reload it on any DOM.
- **Watching liquidity without wanting to trade** — remember every left-click in Bid/Ask places a real order when an account is active. Practice reading the ladder on a SIM account first ([[simulation-accounts]]).

## Related articles

- [[advanced-dom]]
- [[dom-trading-chart]]
- [[trading-panel-reference]]
- [[oco-strategies]]
- [[orderflow-101]]
- [[understanding-volume-profile]]
