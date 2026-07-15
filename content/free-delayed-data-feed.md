---
title: "Use the Free 15-Minute Delayed Data Feed"
slug: "free-delayed-data-feed"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Set up the free 15-minute delayed dxFeed data feed — no credentials, subscription or market data agreement required."
keywords: ["free data feed", "delayed data", "15 min delayed", "15 minutes delayed", "dxFeed - 15m delayed", "demo feed", "free data", "no subscription"]
---
By the end you will have free market data flowing into DeepCharts through the built-in 15-minute delayed dxFeed source — no username, password, paid subscription or market data agreement needed.

Everything you see on this feed is 15 minutes behind the live market. That makes it ideal for learning the platform, exploring indicators and practicing on a SIM account, and unsuitable for making real-time trading decisions. When you need live data, see [[buy-data-feed]].

## Before you start

- DeepCharts installed and your license activated — see [[install-deepcharts]].
- Nothing else. This feed requires no credentials and no agreement — that is the point of it.

## Steps

### If you are on the first-run Startup Wizard

1. On the wizard's datafeed step, select **I want to use 15 minutes delayed data powered by dxFeed for the moment** and click **Next**.

[SCREENSHOT: Startup Wizard datafeed step with the radio option I want to use 15 minutes delayed data powered by dxFeed for the moment selected | wizard-delayed-feed-selected.png]

2. On the **Symbol Manage** step, review the table mapping each exchange to the delayed feed. The wizard pre-maps the main futures exchanges (CME, CBOT, COMEX, EUREX, NYMEX and others) for you — you can leave it as is. Click **Next**, finish the customize step, and click **Done**.

[SCREENSHOT: Startup Wizard Symbol Manage step showing the Exchange, Description and Data Feed columns with rows mapped to the delayed dxFeed connection | wizard-symbol-manage-delayed.png]

You are done — skip to Verify it worked below.

### If you already finished the wizard (add the feed later)

1. Click the **Feed** selector on the main bar and choose **Feed Settings**.

[SCREENSHOT: Feed selector dropdown on the main bar with the Feed Settings item highlighted | feed-selector-feed-settings.png]

2. Click **Add Connection**.

3. In **Name**, type a display name for the connection — for example `dxFeed - 15m`.

4. In **Feed Source**, select **dxFeed - 15m delayed**. No username or password is required for this source.

[SCREENSHOT: Feed Settings dialog with the Feed Source dropdown open and dxFeed - 15m delayed highlighted in the source list | feed-settings-delayed-source.png]

5. Click **Save** and wait for the saving confirmation.

6. Open the **Feed** selector on the main bar again and select your new connection. The status dot turns **green** when connected.

7. Open **Options → Symbol Manage** and make sure the exchanges you want are mapped to your delayed connection in the **Data Feed** column. To add one, click **Subscribe**, pick your delayed connection in the **Data feed source** dropdown, and select the exchanges. To re-point an existing row, use its chain-link (**Change connection**) icon. Full reference: [[symbol-manage]].

[SCREENSHOT: Symbol Manage window with the Subscribe List tab showing exchanges mapped to the dxFeed - 15m delayed connection in the Data Feed column, with the Subscribe and Change connection buttons visible | symbol-manage-delayed-mapping.png]

8. Open your first chart: **New → Price Chart** — see [[first-chart]].

## Verify it worked

- The **Feed** selector shows your delayed connection with a **green** dot.
- A price chart builds and updates — during market hours the prices you see are roughly 15 minutes behind the live market, and the platform flags the data as delayed rather than real time. [CONFIRM: exact wording and placement of the delayed-data banner shown with the 15-minute feed]

[SCREENSHOT: A price chart receiving data from the delayed feed with the delayed-data indication visible and the green feed dot in the main bar | delayed-feed-chart-running.png]

> **Note:** What you give up versus a live feed: every price, DOM level and tape print arrives 15 minutes late, so timing-sensitive work (scalping practice against the current market, live trade decisions) is off the table. What still works fully: every window and indicator, chart layouts, replay, and paper trading on a SIM account — see [[simulation-accounts]]. When you outgrow it, a live feed drops in through the same Feed Settings dialog: [[buy-data-feed]].

## If something went wrong

| Symptom | Where to go |
|---|---|
| Feed is green but the chart never moves | [[feed-connected-chart-not-moving]] — with the delayed feed, also remember bars only progress 15 minutes behind the clock |
| The instrument picker is empty when opening a chart | No exchanges are subscribed — map them in [[symbol-manage]] |
| The connection never turns green | [[fix-unable-to-establish-connection]] |
| You expected live prices | This feed is delayed by design — for real-time data see [[buy-data-feed]] |

## Related articles

- [[install-deepcharts]]
- [[buy-data-feed]]
- [[symbol-manage]]
- [[first-chart]]
- [[simulation-accounts]]
- [[quick-start-first-trade]]
