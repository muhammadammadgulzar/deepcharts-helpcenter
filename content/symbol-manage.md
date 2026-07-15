---
title: "Symbol Manage: Subscribe Exchanges and Map Your Feed"
slug: "symbol-manage"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Subscribe the exchanges you trade and route each one to the right data feed so charts load."
keywords: ["symbol manage", "symbol manager", "subscribe exchange", "map feed", "data feed column", "no data", "exchange missing", "instrument list empty"]
---

By the end you will have every exchange you trade subscribed in Symbol Manage and routed to the correct data feed, so charts load live data. A connected feed alone is not enough — DeepCharts also needs to know which exchanges you want and which feed should deliver each of them. When this mapping is missing or wrong, charts show "no data" or sit frozen on old cached data even though the connection dot is green.

## Before you start

- A data feed saved and working — see [[connect-data-feed]].
- Know which exchanges your feed subscription actually includes (for example CME, COMEX) — check what you purchased, see [[buy-data-feed]].

## Steps

1. Disconnect your feed first: click **Select Connection** in the main toolbar and click the connected feed to disconnect it. Making Symbol Manage changes while disconnected, then reconnecting, ensures the new mapping takes effect cleanly.

2. Open **Options → Symbol Manage**.

[SCREENSHOT: Options menu open in the DeepCharts main bar with the Symbol Manage entry highlighted | options-menu-symbol-manage.png]

3. Open the **Subscribe List** tab. It lists the exchanges you are subscribed to, each with a **Data Feed** column showing which feed delivers it.

[SCREENSHOT: Symbol Manage window on the Subscribe List tab showing subscribed exchanges with their Data Feed column, and the Subscribe, Unsubscribe and chain-link icons visible | symbol-manage-subscribe-list.png]

### If your exchange is already listed

1. Check its **Data Feed** column. It must show the feed you want charts to load from.
2. If it shows the wrong feed (or is blank), click the chain-link icon on that row and pick the correct feed from your saved connections.

[SCREENSHOT: Subscribe List row with the chain-link change-feed icon clicked and the list of saved feed connections open for selection | symbol-manage-change-feed.png]

### If your exchange is not listed

1. Click **Subscribe**. A list of available exchanges appears.
2. Search for the exchange you want, select your data feed for it, and confirm. [CONFIRM: exact label of the confirm button in the Subscribe dialog — sources show both "Set" and "Select"]
3. Repeat for each exchange you trade.

### If you no longer need an exchange

Select it in the Subscribe List and click **Unsubscribe**.

> **Warning:** After unsubscribing, the exchange's instruments disappear from the instrument picker and its charts stop loading data. Only unsubscribe exchanges you genuinely no longer chart.

4. Optionally review the **Symbol List** tab — it shows the individual instruments available under your subscribed exchanges. You normally do not need to change anything here.

> **Warning:** Do not edit exchange or symbol internals (the Modify Exchange / Modify Symbol details). Those definitions are managed by DeepCharts support — changing them can break data loading for the whole exchange. If a symbol definition looks wrong, contact support instead — see [[get-help]].

5. Close Symbol Manage.

6. Reconnect your feed via **Select Connection**.

7. If a chart was already open while you made changes, it may refresh on its own after a few seconds. If it stays frozen or shows "no data", close it and reopen it via **New → Price Chart** — it will load fresh data through the corrected mapping.

## Verify it worked

- Open **New → Price Chart**. The instrument picker shows the exchanges you subscribed — it only ever lists subscribed exchanges, so if an exchange is missing here, it is not subscribed yet.
- Pick a symbol from your feed's exchange: the chart draws candles and the price moves.

[SCREENSHOT: New Price Chart instrument picker showing only the subscribed exchanges, with a symbol selected | instrument-picker-subscribed-exchanges.png]

## If something went wrong

| Symptom | See |
|---|---|
| Feed is green but the chart is not moving | [[feed-connected-chart-not-moving]] |
| Error mentioning a symbol subscription issue | [[symbol-subscription-issue]] |
| The exchange you need never appears in the Subscribe list | Your feed subscription may not include it — see [[buy-data-feed]] |
| Connection drops when opening a chart | [[connection-lost-opening-chart]] |

> **Tip:** You can run several feeds at once and route each exchange to a different one — for example CME charts from one feed and COMEX charts from another. Connect both feeds, then use the chain-link icon to assign each exchange individually. See [[manage-feed-connections]].

## Related articles

- [[connect-data-feed]]
- [[feed-connected-chart-not-moving]]
- [[manage-feed-connections]]
- [[first-chart]]
- [[buy-data-feed]]
