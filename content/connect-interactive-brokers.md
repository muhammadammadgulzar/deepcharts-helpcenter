---
title: "Connect Interactive Brokers (Execution Only)"
slug: "connect-interactive-brokers"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "intermediate"
time: "15 min to complete"
description: "Connect Interactive Brokers through the TWS API for trade execution, paired with a real data feed for charts."
keywords: ["Interactive Brokers", "IBKR", "IB", "TWS", "Trader Workstation", "TWS API", "aggregated data", "IBKR execution only", "connect interactive brokers"]
---
By the end you will have Interactive Brokers (IBKR) connected to DeepCharts for placing trades, with a real data feed driving your charts. DeepCharts connects to IBKR through the Trader Workstation (TWS) API, which means TWS must be running and logged in the whole time you use the connection.

The single most important thing to understand: IBKR delivers **aggregated** market data, not per-tick data. Aggregated data cannot build accurate order-flow tools — no footprint, delta or volume analysis. IBKR is therefore **execution only** in DeepCharts. You pair it with a real data feed (Rithmic or dxFeed) connected at the same time, and your charts read from that feed while your orders route through IBKR.

## Before you start

- A Rithmic or dxFeed data feed already connected and working — [[connect-rithmic]] or [[connect-dxfeed]] (or the free option, [[free-delayed-data-feed]])
- Trader Workstation (TWS) installed from the official Interactive Brokers website, with your IBKR login
- DeepCharts installed and activated — [[install-deepcharts]]

## Steps

1. Open **Trader Workstation (TWS)** and log in with your Interactive Brokers credentials. Keep TWS open — DeepCharts cannot connect if TWS is closed.

2. In TWS, go to **Edit → Global Configuration → API → Settings**.

3. Enable **Enable ActiveX and Socket Clients**. Note the socket port shown in these settings — by default TWS uses 7496 for a live login and 7497 for a paper login.

[SCREENSHOT: TWS Global Configuration window, API > Settings page, with Enable ActiveX and Socket Clients checked and the Socket port field visible | tws-api-settings.png]

4. Configure the trusted IP so TWS accepts the local connection:
   - Uncheck **Allow connections from localhost only**.
   - Click **Create** and add the IP `127.0.0.1`.
   - Re-check **Allow connections from localhost only**.
   - Click **Apply**, then **Yes**, then **OK**.

[SCREENSHOT: TWS API settings Trusted IPs section showing 127.0.0.1 added to the list and the Allow connections from localhost only checkbox checked | tws-trusted-ips.png]

5. In DeepCharts, click **Select Connection** → **Feed Settings**, then click **Add Connection**.

6. Fill in the connection form:
   - **Name** — for example "IBKR Live" or "IBKR Paper".
   - **Feed Source** — select **Interactive Brokers**. [CONFIRM: exact Feed Source label — sources show it as "Interactive Brokers" and as "IBKR (TWS API)"]
   - **Host** — `127.0.0.1` (TWS runs on the same machine).
   - **Port** — 7496 for a live TWS login, 7497 for a paper TWS login. This must match the socket port from step 3.
   - **Client ID** — any unique integer (for example 1). No other app connected to TWS may use the same ID.

[SCREENSHOT: DeepCharts Feed Settings dialog with Feed Source set to Interactive Brokers, Host 127.0.0.1, Port and Client ID fields filled | feed-settings-ibkr.png]

7. Click **Save**.

8. In **Select Connection**, connect the IBKR feed **and** your data feed. Both must show a green dot at the same time — IBKR for orders, the data feed for charts.

[SCREENSHOT: Select Connection dropdown showing both the IBKR connection and a Rithmic or dxFeed connection, each with a green status dot | ibkr-plus-datafeed-connected.png]

9. Open **Options → Symbol Manage** and set the Data Feed for every exchange to your **Rithmic or dxFeed feed — never to IBKR**. If an exchange is routed to IBKR, its charts will be built from aggregated data and will look wrong. See [[symbol-manage]].

[SCREENSHOT: Symbol Manage window showing exchange rows with the Data Feed column set to the dxFeed/Rithmic connection, not IBKR | symbol-manage-route-datafeed-not-ibkr.png]

10. Open a chart, then open the **Trading Panel** (bottom-right of the chart). In the **Broker** field select **Interactive Brokers**, then select your IBKR trading account. Orders you place now route to TWS for execution while the chart keeps loading from your data feed. See [[trading-from-chart]].

[SCREENSHOT: Trading Panel at the bottom-right of a chart with the Broker field set to Interactive Brokers and an account selected | trading-panel-ibkr-broker.png]

### If you do not have a real data feed yet

Without one, your charts will be unreliable — IBKR's aggregated data is not suitable for charting or order-flow analysis. Options: the built-in free 15-minute delayed feed ([[free-delayed-data-feed]]), a paid dxFeed subscription ([[buy-data-feed]]), or a direct Rithmic feed ([[connect-rithmic]]). Connect the data feed first, then add IBKR alongside it.

## Verify it worked

- The IBKR connection dot turned green within about 10 seconds, and your data feed's dot is also green.
- Charts show live, moving prices coming from the data feed.
- The Trading Panel lists Interactive Brokers as a broker and shows your account.

## If something went wrong

| Symptom | Likely cause |
|---|---|
| IBKR dot stays red | TWS is not running or not logged in |
| IBKR dot stays red, TWS is running | API socket not enabled in TWS settings (step 3) |
| Red dot, settings look correct | Wrong port — paper vs live mismatch between TWS and DeepCharts |
| Red dot, port is correct | Client ID conflict — another app is using the same ID; pick a different integer |
| Charts look wrong or coarse | An exchange is routed to IBKR in Symbol Manage — re-route it to your data feed, see [[feed-connected-chart-not-moving]] |

Still stuck? Gather a [[diagnostic-report]] and see [[get-help]].

## Related articles

- [[compatibility-guide]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[connect-rithmic]]
- [[connect-dxfeed]]
- [[trading-panel-reference]]
