---
title: "Quick Start: From Install to Your First Trade"
slug: "quick-start-first-trade"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "30 min to complete"
description: "One guided path from a fresh install to a simulated bracket order: license, wizard, feed, chart, indicator, and the trading panel."
keywords: ["quick start", "getting started", "first trade", "setup guide", "new user", "install to trade", "beginner tutorial", "bracket order"]
---
By the end you will have DeepCharts installed, connected to market data, showing a chart with an indicator, and you will have placed your first simulated bracket order — entry, stop loss and take profit — without risking any money.

This is the capstone of the Getting Started series. Each step is short and links to a full article if you want more depth or hit a problem. You do not need a broker or a paid data feed to complete it — the free delayed feed and the built-in SIM broker are enough.

## Before you start

- A Windows PC that meets the [[system-requirements]]
- A DeepCharts account at my.deepcharts.com with your license key — [[install-deepcharts]] shows where to find it
- No data feed credentials needed — this guide uses the [[free-delayed-data-feed|free 15-minute delayed feed]]

## Steps

### 1. Install and activate

1. Temporarily deactivate your antivirus — it is the most common cause of failed installs. Re-enable it after installation.
2. Download the installer from your my.deepcharts.com dashboard and run it. (If your license came through a **prop firm**, both the installer and the license key come from the prop firm's dashboard instead.)
3. On first launch, enter the **email** registered at my.deepcharts.com and your **license key**. Paste both without leading or trailing spaces — stray whitespace is the usual cause of "Invalid License".

Full detail: [[install-deepcharts]]. Activation trouble: [[license-issues]].

[SCREENSHOT: The DeepCharts License Key dialog on first launch with the Email and License fields visible and the version number in the footer | license-activation-dialog.png]

### 2. Run the startup wizard

After activation a three-step wizard runs:

1. **Feed choice** — select **I want to use 15 minutes delayed data powered by dxFeed for the moment**. (If you already own feed credentials, pick the other option and see [[buy-data-feed]] and [[connect-data-feed]].)
2. **Symbol Manage** — the wizard pre-maps the main exchanges (CME, CBOT, COMEX, EUREX, NYMEX) to your chosen feed. Leave the defaults and click **Next**.
3. **Customize experience** — pick a **Theme** and an **Alert sound profile**, then click **Done**.

[SCREENSHOT: Startup wizard step 1 with the 15 minutes delayed data powered by dxFeed radio option selected | startup-wizard-feed-choice.png]

> **Note:** Skipped or misclicked the wizard? Nothing is lost — Feed Settings, **Options → Symbol Manage** and **Options → Settings** cover the same ground later. See [[free-delayed-data-feed]].

### 3. Connect the feed

Open the feed selector at the top right of the main bar and click your connection. Wait for the **green dot** — that means data is flowing.

[SCREENSHOT: The main bar feed selector dropdown with the delayed-feed connection selected and a green status dot showing | quick-start-feed-green-dot.png]

### 4. Check Symbol Manage

Open **Options → Symbol Manage**. Each exchange row's **Data Feed** column should show your connection. If an exchange you want is missing, click **Subscribe** and add it. Details: [[symbol-manage]].

[SCREENSHOT: The Symbol Manage window showing the exchange mapping table with the Data Feed column populated by the delayed feed connection | quick-start-symbol-manage.png]

### 5. Open your first chart

Click **New → Price Chart**, pick **CME** in the Select Instrument dialog, choose a symbol — **MES** (Micro S&P) or **MNQ** (Micro Nasdaq) are good beginner contracts — and click **Select**. Wait a few seconds while the chart builds. Full walkthrough: [[first-chart]].

[SCREENSHOT: The Select Instrument dialog with CME selected and MES MICRO SP highlighted | quick-start-select-instrument.png]

### 6. Add your first indicator

1. Click the bar-graph icon in the chart's upper-left toolbar to open the Indicators panel.
2. Click the green **Indicators** button. The Indicator List opens with category tabs (All, Volume, Statistics, Oscillator, Overlay, Utility, Third) and a search box.
3. Search for **Volume** and click the **+** icon next to it. The indicator appears under the chart.

[SCREENSHOT: The Indicator List window with the search box showing Volume and the + icon next to the Volume indicator highlighted | quick-start-add-volume-indicator.png]

How indicators are arranged and configured: [[indicator-layout]] and [[volume]].

### 7. Turn on the trading panel with a SIM account

1. Enable the **Trading panel** toggle in the chart's bottom bar. The panel opens on the right side of the chart.
2. Set **Broker** to **SIM** and pick a simulation account in **Account**. If none exists, create one in **Options → Settings → Sim Account** — see [[simulation-accounts]].

[SCREENSHOT: The chart trading panel with Broker set to SIM, an account selected, and quantity set to 1 | quick-start-trading-panel-sim.png]

### 8. Place your first bracket order

1. Set the quantity field to **1**.
2. Enable the **OCO Strategy** toggle and set **Mode** to **SL/TP**.
3. Enter the **SL** (stop loss) and **TP** (take profit) distances in ticks — start wide while you are learning.
4. Click **BUY MKT**. Your entry fills on the SIM account and the stop-loss and take-profit orders are attached as a bracket — when one fills, the other is cancelled.

[SCREENSHOT: The trading panel with OCO Strategy enabled, Mode set to SL/TP, SL and TP tick values entered, and the BUY MKT button highlighted | quick-start-bracket-order.png]

> **Note:** On the free delayed feed your fills are based on prices 15 minutes behind the live market — fine for learning the platform, not for judging a strategy. See [[oco-strategies]] for what every bracket setting does, and [[trading-from-chart]] for placing orders directly on the chart.

To close everything at once, click **Cancel and Flat** — it flattens the position and cancels the remaining bracket orders.

## Verify it worked

After clicking **BUY MKT**: **Open Qty** shows 1, **Open P/L** ticks with the market, and your stop and target are visible as working orders in the [[orders-window]]. After **Cancel and Flat**, Open Qty returns to 0 and no working orders remain.

You have now touched every core part of the platform: install, data, charts, indicators and orders.

## If something went wrong

| Symptom | What to do |
|---|---|
| Installer will not run or fails | [[installation-problems]] |
| "Invalid License" at activation | [[license-issues]] |
| Select Instrument list is empty | [[symbol-manage]] |
| Chart open but price not moving | [[feed-connected-chart-not-moving]] |
| Everything works but data seems old | Expected on the delayed feed — [[free-delayed-data-feed]]; for live data see [[buy-data-feed]] |

## Related articles

- [[welcome-to-deepcharts]]
- [[install-deepcharts]]
- [[free-delayed-data-feed]]
- [[simulation-accounts]]
- [[trading-from-chart]]
- [[oco-strategies]]
