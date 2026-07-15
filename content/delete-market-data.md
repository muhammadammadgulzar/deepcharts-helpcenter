---
title: "Delete Market Data (In-App and Manual Methods)"
slug: "delete-market-data"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Clear a symbol's corrupted local market data so DeepCharts re-downloads it fresh — using the recommended in-app Delete Data tool or, if that fails, by deleting the symbol's database folder manually."
keywords: ["delete market data", "delete data", "clear data", "corrupted data", "chart frozen", "wrong prices", "gaps in chart", "database folder", "re-download data", "delete symbol data"]
---

When a symbol's locally stored history becomes corrupted, the chart misbehaves even though your feed is healthy: prices stop updating, gaps appear, or values look plainly wrong. By the end of this guide you will have deleted the bad data for that symbol and let DeepCharts automatically re-download a fresh copy.

There are two methods. **Method 1 (in-app)** is the recommended first step and resolves most cases. **Method 2 (manual folder deletion)** is the fallback for deeper corruption that survives the in-app delete.

## Before you start

- [[connect-data-feed|Your data feed is configured]] — DeepCharts needs it to re-download the data afterwards.
- [[symbol-manage|The symbol is subscribed in Symbol Manage]] so fresh data can flow in.
- [[feed-connected-chart-not-moving|You have confirmed the feed itself is fine]] — if the connection is broken, deleting data will not help.

Use this guide when:

- A price chart is not updating even though the feed is connected.
- Gaps or incorrect prices appear on the chart.
- The chart is frozen or unresponsive.
- You suspect minor data corruption for a specific symbol.

## Steps

### Method 1 — Delete data in the app (recommended)

1. Close all charts and workspaces.
2. Disconnect all data feeds.
3. Go to **Options → Delete Data**.

[SCREENSHOT: The Options menu open on the main DeepCharts bar with the Delete Data entry highlighted | options-menu-delete-data.png]

4. In the **Delete Data** panel, click **Select Symbol** and choose the affected symbol.
5. Set the date range to start **2–3 days before today**. If the corruption has been visible for longer, go back further — for stubborn or older corruption, 15 days or more is recommended.
6. If the panel offers data-type choices, select **Tick and Minute** so both data sets are cleared.

[SCREENSHOT: The Delete Data panel with a symbol selected, the date set a few days back, and the Tick and Minute data types selected, Delete button visible | delete-data-panel-configured.png]

7. Click **Delete** and wait for the operation to finish.
8. Reopen the chart. DeepCharts automatically downloads fresh data and the chart should update normally.

> **Note:** Method 1 does not delete your entire database — only the selected symbol's data in the chosen range. It is safe to use regularly and has no effect on your account or subscriptions.

### Method 2 — Delete the symbol's database folder manually

Use this method **only if Method 1 fails**: the chart stays static after the in-app delete, you see recurring data or file-path errors, or data files are missing or corrupted.

1. In DeepCharts, go to **Options → Settings → Various** and copy the **Database Folder** path.

[SCREENSHOT: The Settings dialog on the Various tab with the Database Folder path field highlighted | settings-various-database-folder.png]

2. Close DeepCharts completely. Make sure no DeepCharts process is still running in the background (check Task Manager) — deleting folders while the platform is running causes file-path errors.
3. Open **File Explorer** and paste the copied path into the address bar.
4. Locate the folder for the affected symbol.

[SCREENSHOT: File Explorer showing the DeepCharts database folder contents with one symbol folder selected | database-folder-symbol-selected.png]

5. Delete **only that symbol's folder**.

> **Warning:** Deleting a symbol folder permanently removes that symbol's locally stored history. DeepCharts re-downloads current data automatically, but do not delete other symbols' folders unless necessary, and never delete anything outside the database folder.

6. Restart DeepCharts and open the chart. The platform regenerates the folder and retrieves current data without further action from you.

> **Warning:** The restart is mandatory. If you skip it, DeepCharts keeps referencing folders that no longer exist and you will see the error covered in [[fix-could-not-find-path]].

## Verify it worked

1. Reconnect your data feed and open a chart for the symbol.
2. Historical bars should fill back in and the chart should track live prices normally.
3. The gaps, frozen candles, or wrong prices you saw before should be gone.

Neither method affects your account credentials or data subscriptions.

## If something went wrong

| Symptom | What to do |
|---|---|
| "Could not find a part of the path" error after manual deletion | Restart DeepCharts completely — see [[fix-could-not-find-path]] |
| Chart is still frozen after deleting and re-downloading | See [[feed-connected-chart-not-moving]] |
| Gaps remain in the re-downloaded history | See [[gaps-in-price]] — the gap may be real (rollover, session close) rather than corruption |
| History did not re-download automatically | Trigger it manually with the Download Data tool — see [[download-data]] |
| Problems affect many symbols or keep coming back | Treat it as a database-level issue — see [[database-problems]] and consider [[database-optimization]] |

## Related articles

- [[download-data]]
- [[database-problems]]
- [[database-optimization]]
- [[fix-could-not-find-path]]
- [[gaps-in-price]]
- [[feed-connected-chart-not-moving]]
