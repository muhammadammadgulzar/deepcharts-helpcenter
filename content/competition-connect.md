---
title: "DeepCharts Competition: Join and Connect"
slug: "competition-connect"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Join a DeepCharts trading competition and connect the V-Sim contest account alongside your data feed."
keywords: ["competition", "contest", "championship", "V-Sim", "vsim", "join competition", "contest credentials", "trading contest", "reset account"]
---
By the end you will have joined a DeepCharts competition and be trading on your contest account with live charts. DeepCharts runs trading competitions periodically; contest accounts run on the **V-Sim** feed source, which is **execution only** — it places your contest trades but carries no market data. That is why you connect two things at once: the contest account for trades, and your own data feed for charts.

Because V-Sim executes trades against real-time market conditions, the free 15-minute delayed feed is not supported for competitions — you need a live Rithmic or dxFeed connection.

## Before you start

- An active DeepCharts platform license — [[install-deepcharts]]
- A live data feed (Rithmic or dxFeed) connected and working — [[connect-data-feed]] (the delayed feed in [[free-delayed-data-feed]] does not qualify)
- A DeepCharts website account to register for the contest

## Steps

1. Go to `my.deepcharts.com` and log in to your dashboard.

2. Select **Contest** in the sidebar.

[SCREENSHOT: DeepCharts dashboard with the Contest entry highlighted in the sidebar and an active competition card visible | dashboard-contest-tab.png]

3. Find the active competition and click **Join Competition**. You can review the competition rules first via the rules link on the same page.

4. Confirm the prompt, then refresh the browser page.

5. Click **See Credentials**. Note the four values shown: **Username**, **Password**, **Feed Source** (V-Sim) and your competition **Account ID**.

[SCREENSHOT: Contest page after joining, showing the See Credentials button and the credentials panel with username, password, feed source V-Sim and account ID visible (values redacted) | contest-credentials.png]

> **Note:** Credentials appear only once the competition has started. If you registered but see no credentials yet, wait for the start date.

6. In DeepCharts, click **Select Connection** → **Feed Settings**, then click **Add Connection**.

7. Fill in the form:
   - **Name** — any label, for example "Contest".
   - **Feed Source** — select **V-Sim**. This is the critical field; V-Sim sits in the same dropdown as Rithmic and dxFeed.
   - **Username** and **Password** — from the credentials panel in step 5.

[SCREENSHOT: Feed Settings dialog with Feed Source set to V-Sim and the contest username entered | feed-settings-vsim.png]

8. Click **Save** and close the Feed Settings window.

9. In **Select Connection**, connect the contest feed — and make sure your data feed is **also** connected. Both must show green dots at the same time; you can hold multiple connections simultaneously (see [[manage-feed-connections]]).

[SCREENSHOT: Select Connection dropdown with both the V-Sim contest connection and a live data feed connection showing green dots | contest-and-datafeed-green.png]

10. Open **Options → Symbol Manage** and confirm every exchange is routed to your **data feed, not the V-Sim contest account**. If Symbol Manage points at V-Sim, charts show no data because the contest account carries none. Try the interactive mock below — click the chain-link icon on a row to cycle its mapped feed. See [[symbol-manage]].

[WIDGET: symbol-manage-mock]

11. Open a price chart. In the **Trading Panel** (right side of the chart), set the **Broker** field to **V-Sim** and choose your competition account from the dropdown. The starting balance displays $50,000. Explore the panel in the interactive mock below — hover any button to see what it does, and click the SIM position to watch live P/L:

[WIDGET: trading-panel-mock]

### If you want to reset your account

From the Contest page on the dashboard, click **Reset Account** and confirm. Your balance returns to $50,000. You are allowed **one reset**, and only within the **first week** of the competition — after that the option is gone, so use it deliberately.

### If no competition is open

The Contest page shows a **Join Competition** button only while registrations are open. If nothing is listed, check back — competitions run periodically.

## Verify it worked

- Both the V-Sim contest connection and your data feed show green dots.
- Charts update live from your data feed.
- The Trading Panel shows the V-Sim broker, your competition account and the $50,000 balance.

## Competition rules

Rules for each competition are published on the Contest page — review them before trading. Recent competitions used these rules:

| Rule | Value |
|---|---|
| Account type | Simulated demo only (no real money) |
| Ranking eligibility | Minimum 3 active trading days |
| Daily loss limit | 3% of account balance |
| Daily profit limit | 10% of account balance |
| Maximum position | 5 mini contracts at once |
| Overnight positions | Prohibited — auto-closed at market close |
| Resets | 1 reset, first week only |

An active platform license and a live data feed are required throughout the competition. Prize details for each competition are listed on the Contest page.

## If something went wrong

- **Charts show no data** — Symbol Manage is pointing at the V-Sim account instead of your data feed, or the data feed is not connected. Re-route in [[symbol-manage]] and check both dots are green.
- **No See Credentials button** — the competition has not started yet, or you registered without completing the join confirmation. Check the Contest page shows you as joined.
- **Contest connection stays red** — re-copy the username and password exactly from the credentials panel; see [[fix-username-password]].
- Anything else — see [[get-help]].

## Related articles

- [[connect-data-feed]]
- [[connect-rithmic]]
- [[connect-dxfeed]]
- [[symbol-manage]]
- [[manage-feed-connections]]
- [[trading-panel-reference]]
