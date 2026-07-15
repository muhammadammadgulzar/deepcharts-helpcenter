---
title: "Trading Accounts and Simulation"
slug: "simulation-accounts"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Create simulation accounts, trade them from the trading panel, and switch to a real broker account when you are ready."
keywords: ["sim account", "simulation account", "paper trading", "demo account", "practice account", "SIM broker", "add sim account", "trading account"]
---
By the end you will have a simulation account with a starting balance you chose, and a trading panel set up to trade it.

DeepCharts includes a built-in **SIM** broker that fills your orders against the market data on your charts without risking real money. You only need a data feed for prices — no broker account is required to practice. This is the safest way to learn the order tools, and it is also how traders test strategies before going live.

## Before you start

- DeepCharts installed and activated — [[install-deepcharts]]
- A data feed connected — [[connect-data-feed]] or the [[free-delayed-data-feed|free 15-minute delayed feed]]
- A chart open — [[first-chart]]

## Steps

### Create or manage a simulation account

1. Click **Options → Settings** in the main bar. The **General Settings** window opens.

2. Select the **Sim Account** tab. Existing simulation accounts are listed with their **Name** and **Balance**.

[SCREENSHOT: The General Settings window on the Sim Account tab showing the accounts table with Name and Balance columns, a SIM account row, the per-row trash icon and the Add button | general-settings-sim-account-tab.png]

3. Click **Add**. In the **Add Sim Account** dialog enter a **Name** and a starting **Balance** (default 10000), then click **Add**.

[SCREENSHOT: The Add Sim Account dialog with the Name field filled in and the Balance field showing the default 10000, Cancel and Add buttons visible | add-sim-account-dialog.png]

4. Click **Save Settings** at the bottom of the window.

> **Note:** You can create multiple simulation accounts — for example one per strategy you are testing. The balance currency follows your Windows region setting, which is why some users see Rs, € or $ on the same default number.

### If you want to delete a simulation account

Click the trash icon on the account's row, then **Save Settings**.

> **Warning:** Deleting a simulation account removes it from the trading panel's account list. [CONFIRM: whether a deleted sim account's trade history remains available in Signal Performance / reports]

### Trade with a simulation account

1. On an open chart, enable the **Trading panel** toggle in the chart's bottom bar. The trading panel opens on the right side of the chart. (You can also right-click the chart and choose **Show Trading Panel**.)

[SCREENSHOT: A price chart with the bottom-bar Trading panel toggle highlighted and the trading panel open on the right side | chart-trading-panel-toggle.png]

2. In the trading panel, set **Broker** to **SIM**.

3. Pick your simulation account in the **Account** dropdown.

[SCREENSHOT: The trading panel with Broker set to SIM and the Account dropdown open showing the created simulation accounts | trading-panel-broker-sim.png]

4. Place a test order — for example set the quantity to 1 and click **BUY MKT**. [[trading-from-chart]] walks through every order type.

### If you want to start over with a fresh balance

Add a new simulation account and switch the trading panel to it, or delete and re-create the old one. [CONFIRM: whether an existing sim account's balance can be reset directly without re-creating it]

## Switching to a real broker account

When you have credentials from a broker or prop firm, the same connection that delivers your market data also carries your orders:

1. Create the feed connection with your broker credentials — [[connect-data-feed]].
2. Check in **Options → Symbol Manage** that your exchanges are mapped to that connection — [[symbol-manage]].
3. Connect, open a chart, and open the trading panel.
4. Set **Broker** to your broker connection and pick the account.

Everything else in the panel works exactly as it does on SIM — see [[trading-panel-reference]] for every field.

## Verify it worked

With **Broker** = SIM and your account selected, place a one-contract market order: **Open Qty** changes to 1 and **Open P/L** starts ticking with the market. The order also appears in the [[orders-window]]. Close the position with **Cancel and Flat** when you are done.

## If something went wrong

| Symptom | What to do |
|---|---|
| Account dropdown is empty | The account was not saved — re-add it in **Options → Settings → Sim Account** and click **Save Settings** |
| No trading panel on the chart | Enable the **Trading panel** toggle in the chart's bottom bar |
| Orders placed but nothing fills / price frozen | The chart has no moving data — [[feed-connected-chart-not-moving]] |
| Balance shows an unexpected currency symbol | The currency follows your Windows region setting — cosmetic only |

## Related articles

- [[trading-from-chart]]
- [[trading-panel-reference]]
- [[orders-window]]
- [[portfolio-wallet]]
- [[risk-manager]]
- [[quick-start-first-trade]]
