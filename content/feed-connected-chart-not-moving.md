---
title: "Fix: Live Feed Connected but Chart Is Not Moving"
slug: "feed-connected-chart-not-moving"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "What to check when your data feed shows connected but the price chart is frozen, shows old data, or shows no data at all."
keywords: ["chart not moving", "chart frozen", "price not updating", "no data on chart", "green dot but chart not loading", "chart stuck", "stale chart data", "chart shows yesterday's data"]
---
Your connection dot is green, so the data feed itself is working — but the chart is not updating. In most cases this is not a feed problem at all. Work through the checks below in order, from least to most invasive.

## Symptom

- The connection dot is green (feed shows connected).
- A chart opens but the price does not update, **or** the chart shows "no data", **or** the chart shows old data from a previous session and appears frozen.

[SCREENSHOT: DeepCharts main toolbar with the connection dot green, next to an open price chart that is visibly stale (last candle timestamp from a previous session highlighted) | green-dot-chart-frozen.png]

Not to be confused with:

- [[fix-unable-to-establish-connection]] — the feed fails to connect in the first place (dot never turns green).
- [[connection-lost-opening-chart]] — the connection drops at the moment you open a chart.
- [[data-delayed-lagging]] — the chart moves, but noticeably behind the market.

## Most likely cause

The exchange for your symbol is not routed to the connected feed in Symbol Manage, so DeepCharts silently loads cached data from your local disk — which looks exactly like a frozen live chart.

## Quick fix

1. First, confirm the market is actually open — it is not a weekend or a market holiday. Prices do not update when the market is closed.
2. In DeepCharts, open **Options → Symbol Manage**.
3. Find the row for your symbol's exchange (for example CME for NQ/ES/MNQ/MES, COMEX for GC/SI, NYMEX for CL/NG).
4. Check the **Data Feed** column on that row. It must show the feed you are currently connected to. Try it in the interactive mock below — click the chain-link icon on a row to change the mapped feed.

[WIDGET: symbol-manage-mock]

5. If the value is wrong or blank, click the **link icon** on that row (next to the delete icon) and pick the correct feed from your connected feeds.

[SCREENSHOT: The feed-selection dialog that opens from the link icon in Symbol Manage, with the connected feed highlighted before confirming | symbol-manage-link-feed.png]

6. Wait a few seconds — an already-open chart sometimes refreshes on its own once the routing is fixed. If it does not, close the chart and reopen it via **New → Price Chart** and pick the symbol again.

> **Tip:** If you run multiple feeds at once (for example CME from one provider and COMEX from another), use the link icon to route each exchange to its own feed.

## If that didn't work

### Cause: The exchange was never subscribed

If the Symbol Manage table is empty, click the **Export Mode** button — a new window opens that should contain the exchanges in a table. Set the **Data Feed** per exchange with the link icon, as above. If the Export Mode window is also empty, click the **Subscribe** button, select your **Data Feed** and the exchange(s) you want to trade, then click **Select**.

[SCREENSHOT: The Subscribe dialog reached from Export Mode, with a data feed chosen and one exchange selected, Select button visible | symbol-manage-subscribe-exchange.png]

The full walkthrough of all three scenarios is in [[symbol-manage]].

### Cause: First-time feed connection glitch

If this is the first time you connect this feed, close DeepCharts completely, restart the application, and reconnect the data feed.

### Cause: Corrupted local data for the symbol

DeepCharts caches chart data on disk, and a corrupted cache can freeze a chart. Delete the recent data so the platform re-downloads it:

1. Close all charts and workspaces, and disconnect from all data feeds.
2. Click **Select Symbol** and choose the affected symbol.
3. Select a range of 2–3 days back from today and click **Delete**.
4. Reopen the chart — DeepCharts downloads fresh data automatically.

If the problem survives the in-app delete, remove the symbol's data folder manually as a last resort: copy the database folder path from DeepCharts, paste it into the File Explorer address bar, and delete only the affected symbol's folder. Then restart DeepCharts. Both methods are covered step by step in [[delete-market-data]].

> **Warning:** Delete only the folder of the affected symbol — do not remove other symbol folders unless they have the same problem. Deleting market data does not affect your account or subscriptions; the platform recreates the folders and downloads fresh data.

> **Note:** If the chart still does not move, the exchange may not be included in your market data subscription — some agreements only cover certain exchanges. Check with your feed provider, broker, or prop firm.

## Still stuck

Note the symbol, the feed name, and take a screenshot of the Symbol Manage row for that exchange. Then generate a [[diagnostic-report]] and contact the team through [[get-help]].

## Prevent this

Set up exchange routing immediately after connecting any feed — [[symbol-manage]] covers subscribing exchanges and mapping them to feeds, and [[connect-data-feed]] covers the connection itself.

## Related articles

- [[symbol-manage]]
- [[connect-data-feed]]
- [[delete-market-data]]
- [[data-delayed-lagging]]
- [[connection-lost-opening-chart]]
- [[gaps-in-price]]
