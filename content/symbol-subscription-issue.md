---
title: "Fix: Symbol Subscription Issue"
slug: "symbol-subscription-issue"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Resolve a symbol subscription issue by checking your feed connection and remapping the market to the correct connection in Symbol Manage."
keywords: ["symbol subscription issue", "symbol not subscribed", "no data for symbol", "manage symbols", "symbol manager", "market not mapped", "wrong connection name"]
---

DeepCharts reports a symbol subscription issue when it cannot match the symbol you are opening to an active data feed connection. The fix is almost always in **Symbol Manage**: the market is either missing from the list or assigned to the wrong connection name.

## Symptom

- DeepCharts shows a symbol subscription issue when you open a chart or workspace.
- A chart cannot load data for a specific symbol even though your data feed appears to be connected.

[SCREENSHOT: DeepCharts showing the symbol subscription issue message when opening a chart, with the affected symbol visible | symbol-subscription-issue-message.png]

Not to be confused with:

- [[feed-connected-chart-not-moving]] — the chart opens but price never updates (a closely related mapping problem).
- [[fix-data-access-suspended]] — a dxFeed account-level suspension, not a mapping issue.

## Most likely cause

The market (exchange) is not listed in **Symbol Manage**, or it is assigned to the wrong connection name — so DeepCharts does not know which feed should deliver that symbol's data.

## Quick fix

1. Check that your data feed is properly connected — look for the green indicator in the DeepCharts feed bar.

[SCREENSHOT: DeepCharts feed bar with the green connection indicator visible next to the active feed name | feed-bar-green-indicator.png]

2. Confirm you actually have a data feed that covers the market you want to analyze. See [[compatibility-guide]] for which feeds cover which markets, and [[buy-data-feed]] if you still need a subscription.
3. Remove the check mark next to your data feed in the connection list to take it offline while you edit the mapping. [CONFIRM: original article says "Connect the data feed and remove the check mark" — verify whether the feed must be connected or disconnected while remapping symbols]
4. Close all workspaces.
5. Go to **Options → Symbol Manage**.
6. Verify that the markets you trade are listed and that each shows the correct connection name next to it.

[SCREENSHOT: Symbol Manage window listing subscribed markets with the connection name column visible, one market highlighted showing a wrong or empty connection | symbol-manage-connection-names.png]

7. If a market shows the wrong connection (or none), right-click the market and choose the correct connection from the dropdown menu.

[SCREENSHOT: Symbol Manage window with the right-click dropdown open on a market row, showing the list of available connections to assign | symbol-manage-reassign-connection.png]

8. Click **Select** to save the change.
9. Close the **Symbol Manage** window.
10. Reconnect your data feed.
11. Open your chart or workspace again.

## If that didn't work

### Cause: The exchange was never subscribed

If the Symbol Manage list does not contain your market at all, you need to subscribe the exchange first and link it to your feed. Follow [[symbol-manage]] for the full subscribe-and-map walkthrough.

### Cause: The market data agreement is not signed

Some feeds reject symbol subscriptions until the exchange agreement is completed. See [[sign-market-data-agreement]].

### Cause: Your feed subscription does not include that exchange

A feed only delivers the exchanges included in your data subscription. Check what your plan covers in [[compatibility-guide]], or purchase the missing feed via [[buy-data-feed]].

## Still stuck

Generate a [[diagnostic-report]] — it records which feed each exchange is routed to — then contact support through [[get-help]].

## Prevent this

Set up your exchanges and feed mapping once, correctly, using [[symbol-manage]]. After adding a new feed or account, re-check the mapping before opening charts.

## Related articles

- [[symbol-manage]]
- [[feed-connected-chart-not-moving]]
- [[connect-data-feed]]
- [[sign-market-data-agreement]]
- [[compatibility-guide]]
