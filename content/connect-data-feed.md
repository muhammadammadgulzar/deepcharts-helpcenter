---
title: "How to Connect a Data Feed (Feed Settings)"
slug: "connect-data-feed"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Add a data feed connection in Feed Settings, connect it, and get live data on a chart."
keywords: ["feed settings", "add connection", "select connection", "data feed setup", "connect feed", "green dot", "feed source", "server field"]
---

By the end you will have your data feed saved in Feed Settings, connected with a green dot, and a chart loading live data. This is the generic walkthrough that applies to every feed source — provider-specific guides ([[connect-dxfeed]], [[connect-rithmic]], [[connect-cqg]] and others) follow the same shape with their exact values filled in.

## Before you start

- Your feed credentials (username and password issued for the feed — not your provider's website login). If you have no feed yet, see [[buy-data-feed]] or start with the [[free-delayed-data-feed]].
- The market data agreement signed for your account type — see [[sign-market-data-agreement]]. Without it the connection stays red even with correct credentials.
- The exact **Feed Source** and **Server** values for your provider — look them up in [[compatibility-guide]].

## Steps

1. In DeepCharts, click **Select Connection** in the main toolbar.

2. Click **Feed Settings** at the bottom of the dropdown. The Feed Settings window opens.

[SCREENSHOT: DeepCharts main toolbar with the Select Connection dropdown open and the Feed Settings entry at the bottom of the dropdown highlighted | select-connection-feed-settings.png]

3. Click **Add Connection**. A form with several fields appears.

4. In **Name**, type any name you will recognize later — for example "Apex Eval" or "My dxFeed". This is only a label; it appears in the Select Connection dropdown.

5. In **Feed Source**, pick the source that matches your account:

| Your account | Feed Source |
|---|---|
| dxFeed bought from the DeepCharts website or from dxfeed.com | dxFeed |
| dxFeed from a prop firm (MFF, Aqua, Goat...) | dxFeed Prop |
| Any Rithmic account (prop firm, broker, website purchase) | Rithmic RAPI |
| CQG account from a broker or directly from CQG | CQG |
| Free built-in delayed feed | 15 min delayed |
| DeepCharts Competition account | V-Sim |
| Interactive Brokers | IBKR (TWS API) |

> **Note:** The Rithmic dropdown entries are **Rithmic RAPI** and **Rithmic Wss - beta** — there is no plain "Rithmic" option. Pick **Rithmic RAPI**; it is the recommended source.

[SCREENSHOT: Add Connection form in Feed Settings with the Feed Source dropdown open showing the full list of sources | add-connection-feed-source.png]

6. Enter your **Username** and **Password**.

> **Warning:** These are the credentials issued for the feed itself, usually delivered in a welcome email from your broker or prop firm. They are not the login for the provider's website or dashboard — using the website login is the single most common cause of a failed connection.

7. If a **Server** field appears, set it to the exact value for your provider from [[compatibility-guide]]. Rithmic prop firms each have a named entry (for example "Apex"); firms without one use "Rithmic Paper Trading"; broker Rithmic accounts use "Rithmic 01"; website-bought dxFeed uses "Website Account". When Feed Source is **dxFeed Prop** no Server field exists — that is normal.

### If you picked Rithmic RAPI

- Set **Gateway** to the region closest to you. The options are Automatic, Chicago Area, Seoul, Mumbai, Hong Kong, Sao Paolo, Singapore, Sydney, Tokyo, Frankfurt, Europe, Cape Town, NYC Area and US West; the default is Automatic. A distant gateway still works but adds latency.
- **Include commissions** is on by default — it shows commissions in your P/L.
- Enable **Show only active accounts** if old or expired prop accounts clutter your account list.
- Leave the **Use R Trader** button alone unless you want to run R Trader alongside DeepCharts on the same feed — that setup is covered in [[rtrader-pro-plugin]].

[SCREENSHOT: Rithmic RAPI connection form filled in, with the Gateway dropdown open showing the region list and Automatic selected | rithmic-rapi-gateway-options.png]

### If you picked dxFeed or dxFeed Prop

- Set **DOM Type** to **MBO** or **MBP**. MBO delivers full market-by-order Level 2 depth (best for orderflow tools); MBP is much lighter data and is the right choice if your connection is slow or charts lag during busy periods.

### If you picked CQG

- Enable **Use demo credentials** only if you have a CQG demo account; leave it off for a live account.
- Enable **Connect on startup** if you want this feed to connect automatically every time DeepCharts opens.

8. Leave every other field at its default and click **Save**.

9. Back in the main toolbar, click **Select Connection** again — your new feed now appears under the name you gave it. Click it to connect. Within about 10 seconds the connection indicator should turn green.

[SCREENSHOT: Select Connection dropdown showing the newly saved feed with a green status dot next to it | feed-connected-green-dot.png]

10. Disconnect the feed (click it again), then set up your exchanges in **Options → Symbol Manage** — follow [[symbol-manage]]. This step routes each exchange to your new feed; skipping it is the biggest cause of "connected but charts not moving" tickets.

11. Reconnect the feed, then open a chart via **New → Price Chart** — see [[first-chart]].

## Verify it worked

- The dot next to your connection in **Select Connection** is green.
- A chart opened on a subscribed exchange draws candles and the price updates (live, or with a 15-minute lag if you chose the delayed feed).

## If something went wrong

| Symptom | See |
|---|---|
| Dot stays red — "check username and password" | [[fix-username-password]] |
| Dot stays red — "bad server" | [[fix-bad-server]] |
| Dot stays red — "unable to establish connection" | [[fix-unable-to-establish-connection]] |
| Rithmic asks you to log in using R Trader | [[fix-log-in-using-rtrader]] |
| Dot is green but the chart does not move | [[feed-connected-chart-not-moving]] |
| Charts lag behind during busy periods | [[data-delayed-lagging]] |

> **Note:** If you also run DeepDom, both applications share one data bridge — a single connection serves both at the same time, but the feed settings must be entered identically in both applications. Mismatched settings in one application can stop the other from connecting.

## Related articles

- [[compatibility-guide]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[manage-feed-connections]]
- [[first-chart]]
