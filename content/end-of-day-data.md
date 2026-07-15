---
title: "Connect Historical Data (End of Day)"
slug: "end-of-day-data"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Set up the Historical feed source to load end-of-day data on your charts."
keywords: ["end of day", "EOD", "historical data", "historical feed", "end-of-day data", "daily data", "no live feed"]
---
By the end you will have the **Historical** feed source connected and a chart showing end-of-day data. This connection loads historical (end-of-day) data rather than a live streaming feed, which makes it useful when you want to review past price action without a live data subscription.

The setup follows the same pattern as every other feed in DeepCharts: create the connection in **Feed Settings**, then route an exchange to it in **Symbol Manage**.

## Before you start

- DeepCharts installed and activated — [[install-deepcharts]]
- Familiarity with the general connection flow helps but is not required — [[connect-data-feed]]

## Steps

1. Launch DeepCharts.

2. Click **Select Connection** → **Feed Settings**.

[SCREENSHOT: DeepCharts main bar with the Select Connection dropdown open and Feed Settings highlighted | feed-settings-menu-historical.png]

3. Click **Add Connection**.

4. In **Name**, enter any profile name you like, for example "End of Day".

5. In **Feed Source**, select **Historical**.

[SCREENSHOT: Feed Settings dialog with the Feed Source dropdown open and Historical highlighted, Name filled in as "End of Day" | feed-settings-historical-source.png]

[CONFIRM: whether the Historical feed source requires any credentials or an active subscription, and which exchanges/symbols and how much history it provides]

6. Click **Save** and close the Feed Settings window.

7. Open **Options → Symbol Manage** and point an exchange at your new profile — either:
   - find the exchange you want and change its **Data Feed** to the new Historical profile (the chain-link icon on the row changes the feed), or
   - add a new exchange and set its data feed to the Historical profile.

   See [[symbol-manage]] for the full walkthrough of every Symbol Manage state.

[SCREENSHOT: Symbol Manage window with an exchange row whose Data Feed column is set to the "End of Day" Historical profile | symbol-manage-historical-routing.png]

8. Open a new chart on that exchange — it loads the historical data. See [[first-chart]].

[SCREENSHOT: A price chart displaying end-of-day historical data loaded from the Historical feed profile | chart-end-of-day-data.png]

## Verify it worked

A newly opened chart on the routed exchange displays historical price data. Because this is end-of-day data, do not expect live intraday updates — the chart will not tick in real time.

> **Note:** If you later want live data on the same exchange, switch its Data Feed back to a live connection in **Symbol Manage** — see [[manage-feed-connections]] for juggling multiple feed profiles.

## If something went wrong

- **Chart shows no data** — the exchange is not routed to the Historical profile. Re-check the Data Feed column in [[symbol-manage]].
- **Chart looks frozen** — expected behavior for end-of-day data; it does not update live. If you need live prices, connect a live feed ([[connect-data-feed]]) or try the free option in [[free-delayed-data-feed]].
- **You need more or missing history on a live feed** — see [[download-data]].

## Related articles

- [[connect-data-feed]]
- [[symbol-manage]]
- [[first-chart]]
- [[free-delayed-data-feed]]
- [[download-data]]
- [[manage-feed-connections]]
