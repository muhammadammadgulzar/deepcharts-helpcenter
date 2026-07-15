---
title: "Orders Window"
slug: "orders-window"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "3 min read"
description: "View, filter and audit every order on a broker connection — and catch forgotten working orders before the session ends."
keywords: ["orders window", "show orders", "order list", "pending orders", "working orders", "submitted orders", "unfilled orders", "order history", "order status"]
---
The Orders window is the master list of every order DeepCharts knows about on a broker connection — the ones still working in the market, the ones that filled, and the ones you cancelled. When you need to answer "do I still have an order out there?", this is the window that answers it.

You open it from the main bar: **Trading → Show Orders**.

## What it is

A single table of your orders per broker, with filters for order state. While the trading panel shows what is happening on one symbol right now, the Orders window shows everything the connection has done — which makes it the place to audit fills, review cancellations, and above all find working orders you may have forgotten about.

[SCREENSHOT: The Orders window opened via Trading → Show Orders, showing the Broker dropdown at the top and a populated order list with a mix of executed and submitted orders | orders-window-overview.png]

## When to use it

- **End of session** — confirm no working order is still resting in the market before you walk away.
- **After a fill you did not expect** — check when and at what state an order executed.
- **When a limit or stop seems to have vanished** — it may still be working, or it may have been cancelled; the filters tell you which.
- **When positions and orders do not match your mental picture** — reconcile against the actual list instead of guessing.

## Quick start

1. Click **Trading → Show Orders** in the main bar.
2. Select the connection you want to inspect in the **Broker** dropdown.
3. Pick a filter view: **Placed**, **Executed**, **Cancelled**, or **All**.
4. To see only orders that are still active and unfilled, go to the **Status** section and choose **Submitted**.

[SCREENSHOT: The Orders window with the Status filter set to Submitted, showing only active unfilled working orders in the list | orders-window-status-submitted.png]

## How to read it

The status is the key column:

| Status | Meaning |
|---|---|
| **Submitted** | The order is active and unfilled — a limit or stop still resting in the market. It can execute at any moment. |
| **Executed** | The order filled. |
| **Cancelled** | The order was withdrawn (by you, an OCO pairing, or the platform) and can no longer execute. |

[CONFIRM: full column list of the Orders window table (time, symbol, side, quantity, price, etc.)]

> **Tip:** Make the **Submitted** check part of your shutdown routine. A forgotten working stop or limit can fill hours later in an illiquid market — the Orders window filtered to Submitted is the fastest way to prove you are truly flat and order-free.

## Settings reference

The window has no settings dialog; its controls are the filters at the top.

| Control | What it does |
|---|---|
| **Broker** | Selects which connection's orders are listed. Orders from other connections are not shown — switch here if orders seem to be "missing". |
| **Placed** | Shows orders that were submitted to the market. |
| **Executed** | Shows filled orders only. |
| **Cancelled** | Shows cancelled orders only. |
| **All** | Shows every order regardless of state. |
| **Status: Submitted** | Narrows the list to active, unfilled working orders. |

## Tips and common mistakes

- **"My order isn't in the list"** — check the **Broker** dropdown first. The window shows one connection at a time.
- **Cancelling from here vs. the panel** — the trading panel's **Cancel** button cancels all working orders for the panel's selected symbol only. Use the Orders window to see what is working across symbols before you rely on it. See [[trading-panel-reference]] for exact button scopes.
- **Submitted is not a problem state** — a resting limit far from price is Submitted by design. The question is whether you *intended* it to still be working.
- **OCO pairs** — when one side of an OCO fills, the other is cancelled automatically; you will see one Executed and one Cancelled entry. See [[oco-strategies]].

Not sure what the panel's cancel buttons actually touch? Hover them on the live panel below — then prove the result here with the **Submitted** filter.

[WIDGET: trading-panel-mock]

## Related articles

- [[trading-panel-reference]]
- [[trading-from-chart]]
- [[oco-strategies]]
- [[portfolio-wallet]]
- [[performance-analysis]]
