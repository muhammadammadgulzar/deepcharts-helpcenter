---
title: "Manage and Switch Between Feed Connections"
slug: "manage-feed-connections"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Save multiple feed connections, switch between them, run several at once, auto-connect on startup and remove old ones."
keywords: ["switch feed", "multiple feeds", "feed selector", "connect on startup", "auto connect", "remove connection", "two data feeds", "change data feed"]
---
By the end you will be able to keep several feed connections saved in DeepCharts, switch between them, run more than one at the same time, auto-connect your main feed on startup and remove connections you no longer need.

DeepCharts stores every connection you create in **Feed Settings** as a separate saved profile. All of them appear in the main-bar feed selector, and the status dot next to each one tells you its connection state at a glance. The key thing to keep in mind throughout: which feed a chart actually uses is decided by **Symbol Manage** routing, not by which feed you connected most recently.

## Before you start

- At least one working feed connection — [[connect-data-feed]]
- If you plan to combine feeds, check what each one is good for — [[compatibility-guide]]

## Steps

### Read the feed selector

1. Look at the **Select Connection** control in the main bar. It shows your connections and a status dot for each — green means connected.

[SCREENSHOT: DeepCharts main bar with the Select Connection dropdown open, listing several saved connections, one with a green dot and the others disconnected | feed-selector-multiple-connections.png]

> **Note:** A yellow dot on a Rithmic connection that uses the R Trader plugin means DeepCharts is waiting for R Trader — see [[rtrader-pro-plugin]].

### Add another connection

2. Click **Select Connection** → **Feed Settings**.

3. Click **Add Connection**, fill in the form for the new feed source and click **Save**. Each source has its own required fields — try it in the interactive Feed Settings mock below: switch the Feed Source and watch the fields change, then follow the matching guide ([[connect-rithmic]], [[connect-dxfeed]], [[connect-cqg]], [[connect-interactive-brokers]], [[competition-connect]], [[end-of-day-data]]).

[WIDGET: feed-navigator]

Some feed sources expose extra convenience options on their form:

| Feed source | Option | What it does |
|---|---|---|
| CQG | **Use demo credentials** | Logs in with a CQG demo account instead of live |
| CQG | **Connect on startup** | Auto-connects this feed when DeepCharts opens |
| Rithmic | **Include commissions** | Shows commissions in P/L (on by default) |
| dxFeed | **DOM Type** | MBO or MBP depth data — MBP is much lighter on slow connections |

### Switch to a different feed

4. Click **Select Connection** and click the feed you want. Wait for its dot to turn green.

5. Open **Options → Symbol Manage** and re-point your exchanges to the feed you switched to (chain-link icon on each exchange row). Charts keep reading from whatever feed their exchange is routed to — if that feed is now disconnected, they show no data. Click the chain-link icon in the interactive mock below to see the feed cycle. See [[symbol-manage]].

[WIDGET: symbol-manage-mock]

6. If a chart was already open, it may refresh on its own within a few seconds. If not, close it and reopen it so it loads from the newly routed feed.

### Run several feeds at once

7. Connect each feed from **Select Connection** — you can hold multiple green connections simultaneously.

8. In **Symbol Manage**, route each exchange to the feed that should serve it. Typical combinations:
   - **Execution + data**: IBKR or a V-Sim contest account for orders, Rithmic/dxFeed for charts — route every exchange to the data feed ([[connect-interactive-brokers]], [[competition-connect]]).
   - **Exchange split**: one feed for CME, another for COMEX — route each exchange to its own feed.

> **Warning:** In any multi-feed setup, all involved feeds must be connected (green) before you open a chart. If only one is connected, charts on exchanges routed to the other feed show no data even though the routing is correct.

### Auto-connect on startup

9. In **Feed Settings**, open your main connection and enable **Connect on startup** if the option is present, then click **Save**. DeepCharts will connect that feed automatically every time the app opens. This option has been confirmed on the CQG form; exact availability may vary by feed source. [CONFIRM: which feed sources besides CQG offer Connect on startup]

### Remove a connection

10. In **Feed Settings**, select the connection and click **Remove**, then **Save**.

> **Warning:** Removing a connection deletes its saved credentials from the form — you will need to re-enter them to recreate it. Also re-check **Symbol Manage** afterwards: exchanges that were routed to the removed feed need a new Data Feed assignment or their charts will stop loading.

### If you also run DeepDom

DeepCharts and DeepDom share **one bridge**: a single data-feed connection serves both apps at the same time, but the bridge cannot hold two different configurations. Enter the feed settings **identically** in both apps. If you run both and one of them will not connect, first check that both apps' feed settings match exactly.

## Verify it worked

- Every feed you intend to use shows a green dot in **Select Connection**.
- Each exchange in **Symbol Manage** points at a currently connected feed.
- Charts load and move on every exchange you trade.

## If something went wrong

| Symptom | What to do |
|---|---|
| Feed will not connect after switching | Credentials or server issue on that profile — see [[fix-username-password]] and [[fix-unable-to-establish-connection]] |
| Green dot but charts frozen after a switch | Exchange still routed to the old feed — see [[feed-connected-chart-not-moving]] |
| One app connects, the other does not (DeepDom setup) | Feed settings differ between the apps — make them identical |
| App crashes when saving a connection | See [[app-crashes-saving-feed]] |

## Related articles

- [[connect-data-feed]]
- [[symbol-manage]]
- [[compatibility-guide]]
- [[connect-cqg]]
- [[connect-interactive-brokers]]
- [[feed-connected-chart-not-moving]]
