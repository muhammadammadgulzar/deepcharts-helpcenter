---
title: "Trading from the Chart"
slug: "trading-from-chart"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Enable chart trading, open the trading panel, and place, move and cancel your first orders directly on a DeepCharts price chart."
keywords: ["chart trading", "trading enabled", "trading panel", "dollar icon", "place order on chart", "ctrl alt t", "buy sell from chart", "how to trade in deepcharts"]
---
By the end you will have trading armed on a chart, the trading panel open, and you will know how to place, move and cancel orders without leaving the chart.

Every price chart in DeepCharts can double as an order-entry screen. Two separate controls are involved: **Trading Enabled** (the dollar icon) arms the chart for trading, and the **Trading panel** is the button-and-field column that appears on the right side. They are linked — turning the dollar icon off automatically hides the panel — so it helps to understand both before you click anything.

## Before you start

- DeepCharts installed and activated — [[install-deepcharts]]
- A data feed with trading (execution) connected — [[connect-data-feed]]
- A chart open on the instrument you want to trade — [[first-chart]]
- Strongly recommended for your first attempt: a SIM account so no real money is at risk — [[simulation-accounts]]

## Steps

1. Enable trading on the chart. Click the **$** icon in the chart's top-left icon row — it turns **green** when trading is armed. Alternatives: right-click the chart and choose **Trading Enabled** (**Ctrl Alt T**).

[SCREENSHOT: Chart top-left icon row with the dollar icon highlighted in its green (armed) state, next to the toolbar, bar-style, indicator, gear and camera icons | chart-dollar-icon-trading-enabled.png]

2. Show the trading panel. Toggle **Trading panel** in the chart's bottom bar, or right-click the chart and choose **Show Trading Panel** (**Ctrl Alt P**). The panel opens on the right side of the chart.

[SCREENSHOT: Price chart with the trading panel open on the right side, showing the symbol dropdown, Open Qty / Open P/L / Daily P/L readouts, Qty selector, Broker and Account dropdowns, and the BUY/SELL button grid | chart-trading-panel-open.png]

> **Note:** The dollar icon and the panel are linked. If your trading panel "disappeared", the most common cause is that **Trading Enabled** was toggled off — re-arm it and the panel comes back.

3. Check the instrument at the top of the panel. A new chart pre-selects the chart's own symbol here, but the panel has its own **Select Instrument** dropdown — after you change either one, chart and panel are independent. This is how you watch the mini contract (for example NQ) while trading the micro (MNQ) from the same chart.

[SCREENSHOT: Trading panel symbol dropdown open showing the Select Instrument dialog with the exchange sidebar and filter box | trading-panel-select-instrument.png]

> **Note:** The panel's instrument picker only lists exchanges subscribed in **Options → Symbol Manage** — if it is empty, see [[symbol-manage]].

4. Set your order size in the **Qty** selector, and pick the **Broker** and **Account** to trade on. For a risk-free test, set **Broker** to **SIM** and pick your simulation account.

5. Place an order with the button grid. Each order type has a buy and a sell button:

| Button | What it places |
|---|---|
| **MKT** | Market order — fills immediately at the best available price |
| **BID / ASK** | Limit order at the current best bid (buy) or best ask (sell) |
| **LMT** | Limit order at a price you choose — buy below the market, sell above it |
| **STP** | Stop order that triggers a market order — buy above the market, sell below it |
| **STP LMT** | Stop-limit order — avoids slippage, with the risk of not being executed |

Try the live panel below — hover any button to see exactly what it places, and click the SIM position to watch the P/L update.

[WIDGET: trading-panel-mock]

> **Warning:** A buy limit placed above the market (or a sell limit below it) executes immediately as a market order — the book only has sell liquidity above price and buy liquidity below. Stops are the mirror image. If you place at the wrong side, expect an instant fill.

6. Manage working orders directly on the chart: **left-click and drag** a limit or stop order to move it to a new price; **right-click** an order to cancel it.

[SCREENSHOT: A working buy limit order shown on the chart being dragged to a new price level with the cursor visible | chart-drag-working-order.png]

7. Exit or clean up with the panel buttons — all of them act only on the symbol currently selected in the panel:

- **Cancel** — cancels all working (pending) orders; open positions are not touched.
- **Flat** — closes the current open position only.
- **Cancel and Flat** — closes the open position and cancels all remaining working orders.
- **Breakeven** — moves your stop to the entry price, plus the **Breakeven - Ticks** buffer from **Options → Settings → General → Trading** (0 means exact entry; raise it to cover commissions and slippage).

### If you want limit entries a fixed distance from the market

Enable the **Ticks diff.** checkbox above the button grid and set a number N. **BID** then places the buy limit N ticks below the best bid, and **ASK** places the sell limit N ticks above the best ask, instead of exactly at the best bid/ask.

### If you want automatic stop-loss and take-profit brackets

Enable the **OCO Strategy** checkbox in the panel before entering. Every new entry then gets a linked take-profit limit and protective stop — when one executes, the other cancels. Full setup, including multi-contract strategies and the Server/Client choice, is in [[oco-strategies]].

### If you want to see past trades on the chart

Right-click the chart and choose **Show Historical Orders** (**Ctrl Alt H**) to plot historical executions on the chart. Appearance of the on-chart order display (text size, colors) is customized under the right-click menu's **Trading Settings**.

## Verify it worked

The **$** icon is green, the panel is visible, and after placing a small SIM order you can see it working on the chart and the panel readouts update: **Open Qty** shows your position size, **Open P/L** the position's running profit or loss, and **Daily P/L** the day's total for that instrument. The order also appears in the [[orders-window]].

## If something went wrong

| Symptom | What to do |
|---|---|
| Trading panel disappeared | **Trading Enabled** ($ icon) was toggled off — it auto-hides the panel; re-enable it (**Ctrl Alt T**) |
| Limit order filled instantly at market | Placed on the wrong side of the price — see the Warning in step 5, or use the click ladder in [[dom-trading-chart]] which picks the correct type automatically |
| Orders blocked with a "too many orders" style error | The **Frequency Limitation** safety in **Options → Settings → General → Trading** limits orders per second and pauses submission after the limit is exceeded — adjust the threshold or pause time |
| Cannot trade a symbol at all, or account shows locked | A Risk Manager rule may have triggered — see [[risk-manager]] |
| Panel's instrument list is empty | Nothing subscribed in **Options → Symbol Manage** — [[symbol-manage]] |

## Related articles

- [[trading-panel-reference]]
- [[dom-trading-chart]]
- [[oco-strategies]]
- [[orders-window]]
- [[simulation-accounts]]
- [[risk-manager]]
