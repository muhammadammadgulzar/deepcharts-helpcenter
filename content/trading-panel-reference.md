---
title: "Trading Panel Reference: Every Button and Field"
slug: "trading-panel-reference"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "8 min read"
description: "Complete reference for the chart trading panel: every readout, order button, exit button and OCO field, with defaults and when to change them."
keywords: ["trading panel", "order panel", "MKT BID ASK LMT STP", "ticks diff", "breakeven button", "cancel and flat", "link pending orders", "server client oco", "red exclamation oco"]
---
The trading panel is the order-entry column that docks to the right side of every price chart. This article documents every readout, button and field on it, top to bottom, so you can look up exactly what a control does before you rely on it with live orders.

If you have never traded from a chart before, start with the walkthrough in [[trading-from-chart]] — this page is the reference you come back to.

## What it is

The trading panel answers one question: how do I send, protect and close orders on a specific instrument without leaving the chart? It bundles instrument selection, position readouts, an order-type button grid, one-click exit buttons and an OCO bracket block into a single column. It appears when **Trading panel** is toggled in the chart's bottom bar (or right-click → **Show Trading Panel**, **Ctrl Alt P**) and requires **Trading Enabled** (the green **$** icon) — disabling the $ icon hides the panel automatically.

[SCREENSHOT: Full trading panel on the right edge of a chart, annotated in three zones from top to bottom: header readouts, account and quantity row, order button grid with exit buttons, OCO Strategy block | trading-panel-full-annotated.png]

## When to use it

- You execute from charts and want order entry, exits and brackets in one place.
- You need to trade a different contract than the one charted (mini chart, micro orders).
- You want one-click risk actions: **Cancel**, **Flat**, **Cancel and Flat**, **Breakeven**.
- You want automatic stop/target brackets (OCO) attached to every entry.

For ladder-style click trading at price levels, use the on-chart DOM instead — see [[dom-trading-chart]].

## Quick start

1. Open a chart and click the **$** icon so it turns green ([[trading-from-chart]] covers this step by step).
2. Toggle **Trading panel** in the chart's bottom bar.
3. Set **Broker** to **SIM** and pick a simulation account ([[simulation-accounts]]).
4. Set **Qty** to 1 and place a test order with **MKT**.
5. Close it with **Flat**.

## How to read it

The header block tells you your exposure at a glance:

- **Open Qty** — how many contracts (or shares) you currently hold on the panel's instrument. 0 means flat.
- **Open P/L** — unrealized profit or loss of the open position, updating in real time.
- **Daily P/L** — the day's total profit or loss for this instrument.

In the OCO block, watch for the **red (!)** icon next to **Mode**: it means the selected MULTI strategy's total quantity does not match the panel's **Qty** field, and execution is blocked until you match them. Green checkmarks indicate the quantities are aligned.

[SCREENSHOT: Trading panel OCO block in MULTI mode showing the red exclamation icon next to the Mode dropdown, with the panel Qty field visible showing a mismatching value | trading-panel-oco-red-exclamation.png]

## Settings reference

### Header — instrument and position

| Control | What it does |
|---|---|
| Symbol dropdown | Opens **Select Instrument** to pick the contract the panel trades. A new chart pre-selects the chart's symbol; after you change either, chart and panel are independent (view NQ, trade MNQ). Only exchanges subscribed in **Options → Symbol Manage** are listed — [[symbol-manage]]. |
| **Open Qty** | Current open position size on the panel's instrument. |
| **Open P/L** | Unrealized P/L of that position. |
| **Daily P/L** | The day's realized plus open P/L for the instrument. |

### Account row

| Control | What it does |
|---|---|
| **Qty** | Contract size for the next order. The pre-filled value and the step size when nudging it come from **Options → Settings → Trading Quantity** (per-symbol **Default Quantity** and **Increment Quantity**). It is a convenience default, not a limit — hard caps belong in the [[risk-manager]]. |
| **Broker** | Which connection executes the order — a live feed/broker connection or **SIM** for paper trading. |
| **Account** | The account under that broker connection (relevant for multi-account and prop-firm setups). |

### Ticks diff.

| Control | What it does |
|---|---|
| **Ticks diff.** checkbox + number | Modifies the **BID**/**ASK** buttons. Off (default 0): BID buys limit at the best bid, ASK sells limit at the best ask. With a difference N enabled: BID places the buy limit N ticks below the best bid, ASK places the sell limit N ticks above the best ask. Use it to rest orders a fixed distance behind the market with one click. |

### Order button grid

Each row has a buy button (left) and a sell button (right).

| Button | Order placed | When to use it |
|---|---|---|
| **MKT** | Market order | You want in or out now and accept the current price. |
| **BID / ASK** | Limit at best bid (buy) / best ask (sell), offset by **Ticks diff.** if enabled | Joining the best price passively instead of crossing the spread. |
| **LMT** | Limit at your chosen price | Buy below the market or sell above it. Placed on the wrong side it fills immediately as a market order. |
| **STP** | Stop that triggers a market order | Buy above the market or sell below it — breakout entries and protective stops. |
| **STP LMT** | Stop-limit | Avoids slippage on the trigger, at the risk of not being executed at all. |

### Exit and cancel buttons

All four act only on the symbol currently selected in the panel.

| Button | What it does |
|---|---|
| **Cancel** | Cancels all working (pending) orders — LMT/STP. Open positions are not touched. |
| **Flat** | Closes the current open position only. |
| **Cancel and Flat** | Closes the open position and cancels all remaining working orders. |
| **Breakeven** | Moves the stop to breakeven: entry price plus the **Breakeven - Ticks** buffer set in **Options → Settings → General → Trading**. 0 = exact entry; raise it to cover commissions/slippage. |

### OCO Strategy block

The bracket engine — one executed exit cancels the other. Full walkthrough: [[oco-strategies]].

| Control | What it does |
|---|---|
| **OCO Strategy** toggle | Arms automatic brackets for new entries. |
| **Mode** | **SL/TP** = one stop loss and one target, each defined in ticks or money and individually enabled. **MULTI** = named multi-bracket strategies for scaling out. |
| **SL / TP** fields | The stop-loss and take-profit distances (ticks or money) in SL/TP mode. |
| **BE** | Breakeven automation in SL/TP mode (ticks or money). |
| **Trail** | Trailing-stop automation in SL/TP mode, with trailing amount and offset fields below. |
| Gear icon (MULTI) | Opens the **Oco Strategy** editor: name the strategy, add **Stop**/**Target** brackets (each with a quantity and a **Ticks**/**Money** value, added via **Add bracket**), optionally move the stop to breakeven after a target fills, then **Save**. Saved strategies become selectable in the panel when MULTI mode is on. |
| **Server / Client** radio | Where the bracket lives. **Server**: managed on the data-feed provider's server — survives closing the platform or losing your connection. **Client**: managed inside DeepCharts — the platform must stay open and connected or the OCO is not effective. Client exists because some feed providers do not offer server-side OCO. |
| **Link pending orders** | For a take-profit and stop-loss you already placed without OCO: opens a window to select the two pending orders and links them into an OCO pair retroactively. |

> **Warning:** Rithmic does not allow server-side OCO together with copy trading. If you run the [[trade-copier]] on Rithmic, you must use **Client**-side OCO — and keep the platform open and online, or your brackets will not fire. A single Rithmic account without the copier can use Server normally.

### Related settings outside the panel

| Setting | Location | What it does |
|---|---|---|
| **Breakeven - Ticks** | **Options → Settings → General → Trading** | Buffer added to entry when the **Breakeven** button moves your stop. |
| **Frequency Limitation** | **Options → Settings → General → Trading** | Max orders per second plus a pause duration after exceeding it — protects against accidental rapid-fire submissions. |
| **Default / Increment Quantity** | **Options → Settings → Trading Quantity** | Per-symbol starting value and step size for the **Qty** field. Changing the default does not modify working orders or open positions — only future orders. Whether it also applies to DOM/chart-click order entry is not confirmed; verify on a SIM account. |

## Tips and common mistakes

- **Panel gone?** The **$** Trading Enabled icon was toggled off — it auto-hides the panel. Re-arm with **Ctrl Alt T**.
- **Limit filled instantly at market price.** It was placed on the wrong side (buy limit above / sell limit below). The click ladder in [[dom-trading-chart]] picks LMT vs STP automatically from the level you click, removing the decision entirely.
- **"Flat" vs "Cancel and Flat".** Flat only closes the position; a forgotten resting stop or target keeps working. Cancel and Flat clears both. End of session, verify in the [[orders-window]] with the **Submitted** filter that nothing is still live.
- **MULTI strategy will not execute.** Check for the red (!) — the strategy's total quantity must equal the panel **Qty**. Change one to match the other.
- **Brackets vanished after closing the platform.** They were Client-side. Only Server-side OCO survives with the platform closed.
- **Test sizing changes on SIM first.** Raising the default quantity from 1 to 2 doubles the size — and the risk — of every future order on that symbol.

## Related articles

- [[trading-from-chart]]
- [[oco-strategies]]
- [[dom-trading-chart]]
- [[orders-window]]
- [[risk-manager]]
- [[trade-copier]]
