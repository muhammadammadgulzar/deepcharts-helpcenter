---
title: "Fix: Database Problems"
slug: "database-problems"
category: "Data & Database"
subcategory: ""
type: "troubleshooting"
difficulty: "intermediate"
time: "15 min to complete"
description: "Resolve corrupted DeepCharts database data — from deleting a symbol's bad history to removing the whole database folder, plus subscription and runtime checks."
keywords: ["database problems", "database corrupted", "db corrupted", "corrupt data", "wrong prices on chart", "chart stuck loading", "remove database folder", "no realtime data", "data unavailable", "visual c++"]
---

DeepCharts keeps all downloaded market history in a local database. When part of it becomes corrupted, charts start behaving in ways that look like feed problems but are not: wrong or garbled prices, gaps, charts that hang while loading. This article walks through the database-side fixes, from the least destructive to the most.

## Symptom

One or more of the following, while your data feed itself connects normally:

- Charts show incorrect, garbled, or stale prices.
- Charts hang or take very long while loading history.
- Gaps appear in price history that your broker's chart does not show.
- Errors mentioning the database or data files appear when opening charts.

Not to be confused with:

- A feed that will not connect at all — see [[fix-unable-to-establish-connection]].
- A connected feed with a chart that simply is not ticking — see [[feed-connected-chart-not-moving]] first.
- A "Could not find a part of the path" error — see [[fix-could-not-find-path]].

## Most likely cause

Corrupted locally stored history for one or more symbols — the database itself is fine, but a stretch of a symbol's data is bad and needs to be deleted and re-downloaded.

## Quick fix

Delete the corrupted range in-app and let DeepCharts re-download it:

1. Disconnect the data feed and close all workspaces.
2. Go to **Options → Delete Data**.
3. In the **Delete Data** panel, set the date to a point before the error appeared — 15 days or more back is recommended.
4. Select the **Tick and Minute** data types.
5. Choose the symbol (or symbols) with the corrupted history.

[SCREENSHOT: The Delete Data panel with the date set 15+ days back, Tick and Minute selected, and an affected symbol chosen | delete-data-panel-db-corruption.png]

6. Click **Delete** and wait for it to finish.
7. Close the platform, wait 30 seconds, then restart DeepCharts.
8. Reconnect and open the chart — fresh data downloads automatically.

For the full walkthrough of this procedure (including the manual fallback), see [[delete-market-data]].

## If that didn't work

### Cause: The whole database is corrupted

If problems affect many symbols or persist after targeted deletes, remove the entire database folder so DeepCharts rebuilds it from scratch:

1. Go to **Options → Settings → Various** and copy the **Database Folder** path.

[SCREENSHOT: The Settings dialog on the Various tab with the Database Folder path highlighted | settings-various-database-folder-path.png]

2. Disconnect the data feed, close all workspaces, and exit DeepCharts completely.
3. Open Windows Explorer and paste the copied path into the address bar.
4. Delete the **Database** folder.
5. Restart DeepCharts.

> **Warning:** This deletes ALL downloaded market history for every symbol. DeepCharts re-downloads data as you open charts, but re-building deep tick history takes time. Use this only after the targeted delete has failed. Your account credentials and subscriptions are not affected.

### Cause: Missing market subscription (no realtime or unavailable data)

If the problem is missing live data rather than corrupt history, check the symbol-to-feed mapping:

1. Connect the data feed and close all workspaces.
2. Go to **Options → Symbol Manage**.
3. Verify the correct markets are added and associated with the right data feed connection profile.
4. If a market is mapped to the wrong feed, right-click the data feed column to re-associate it.
5. Click **Select** to save the changes.
6. Reconnect the data feed and open a new chart.

You can rehearse the mapping fix in the mock below — click the chain-link icon to cycle which feed a market is mapped to.

[WIDGET: symbol-manage-mock]

See [[symbol-manage]] for the full window reference, and [[symbol-subscription-issue]] if a subscription error is shown.

### Cause: Missing Visual C++ runtime (data feed connection failed)

If the database checks pass but the data feed connection itself keeps failing, a missing system runtime can be the culprit:

1. Close DeepCharts completely.
2. Download and install Visual C++ (the Microsoft Visual C++ Redistributable).
3. Restart DeepCharts and reconnect the data feed.

## Still stuck

Generate a [[diagnostic-report]] so support can see your logs and configuration, then reach out through the channels in [[get-help]].

## Prevent this

- Run [[database-optimization|Migrate / Compress]] regularly — a compact database is less prone to problems and much faster.
- Use the in-app [[delete-market-data|Delete Data tool]] instead of deleting files manually, and always restart DeepCharts after any manual file-level maintenance.
- Never shut the computer down while the platform is writing data or compressing the database.

## Related articles

- [[delete-market-data]]
- [[download-data]]
- [[database-optimization]]
- [[fix-could-not-find-path]]
- [[symbol-manage]]
- [[feed-connected-chart-not-moving]]
