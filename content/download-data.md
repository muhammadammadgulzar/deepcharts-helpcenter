---
title: "Re-download Historical Data (Download Data Tool)"
slug: "download-data"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Use the Download Data tool to pull historical data for a symbol back into your local database — after deleting corrupted data or to pre-load history."
keywords: ["download data", "re-download data", "historical data", "backfill", "download from volserver", "missing history", "redownload", "tick data download"]
---

The **Download Data** tool pulls historical data for a symbol into your local database on demand. You will use it most often as the second half of the corrupt-data repair loop — first delete the bad data with [[delete-market-data]], then re-download a clean copy — but it is equally useful for pre-loading history before a replay session or filling in bars for a symbol you have not charted in a while. By the end of this guide you will have downloaded fresh historical data for a symbol and confirmed it arrived.

## Before you start

- [[connect-data-feed|Your data feed is configured and working]].
- [[symbol-manage|The symbol is subscribed in Symbol Manage]].
- [[delete-market-data|You have deleted the corrupted range first]] — only needed if you are repairing bad data rather than simply backfilling.

## Steps

1. Go to **Options → Download data**.

[SCREENSHOT: The Options menu open on the main DeepCharts bar with the Download data entry highlighted | options-menu-download-data.png]

2. Select the symbol or symbols you want to download.
3. Set the **start date** — how far back the download should reach. For a corruption repair, start at least as far back as the range you deleted; for replay preparation, cover the full session range you plan to replay.
4. Set the **Data Type**. **Tick** is the most granular option and is what orderflow tools such as footprints and profiles are built from. [CONFIRM: full list of Data Type options in the Download data window and the default selection]
5. Decide whether to enable the **Download From VolServer** toggle. [CONFIRM: exact behavior of the Download From VolServer toggle — what source is used when it is on versus off, and the recommended setting for a standard repair]

[SCREENSHOT: The Download data window with a symbol selected, a start date set, Data Type set to Tick, and the Download From VolServer toggle visible | download-data-window-configured.png]

6. Start the download and leave the window to work. Large tick-data ranges can take a while, so avoid downloading months of tick history mid-session if you only need a few days. [CONFIRM: exact label of the button that starts the download]
7. To watch progress, open **Options → Show Logs** and check the **Connection Logs** tab — it shows chart-data download progress as it runs.

[SCREENSHOT: The Show Logs window on the Connection Logs tab showing historical data download progress entries | show-logs-connection-logs-download.png]

### If you are repairing corrupted data

Run the full repair loop in this order:

1. Delete the corrupted range with [[delete-market-data]] (in-app method first).
2. Re-download the same range with this tool.
3. Reopen the chart and confirm the bad bars are gone.

### If you are pre-loading data for replay

Download the sessions you plan to replay before you start, then follow [[replay-data]]. The **Connection Logs** tab is the easiest way to confirm the replay data has finished loading.

## Verify it worked

1. Open a chart for the symbol and scroll back through the downloaded range.
2. Historical bars should be present and continuous across the range you requested.
3. The **Connection Logs** tab in **Options → Show Logs** should show the download activity completing without errors.

## If something went wrong

| Symptom | What to do |
|---|---|
| "Could not find a part of the path" error | Restart DeepCharts completely — see [[fix-could-not-find-path]] |
| Downloaded history still shows gaps | See [[gaps-in-price]] — some gaps are real market behavior, not missing data |
| Data will not download or charts stay empty | Check the symbol subscription in [[symbol-manage]] and the feed in [[manage-feed-connections]] |
| Corruption returns after repair | Treat it as a database-level issue — see [[database-problems]] |

## Related articles

- [[delete-market-data]]
- [[database-problems]]
- [[database-optimization]]
- [[replay-data]]
- [[gaps-in-price]]
- [[fix-could-not-find-path]]
