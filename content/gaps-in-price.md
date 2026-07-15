---
title: "Fix: Gaps in Price on Charts"
slug: "gaps-in-price"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "intermediate"
time: "10 min to complete"
description: "Remove price gaps caused by corrupted local data, and learn to tell them apart from real market gaps and expired contract months."
keywords: ["gaps in price", "missing candles", "holes in chart", "missing bars", "corrupted data", "price gap on chart", "chart missing data"]
---

Gaps in your price history have three possible origins: corrupted data in the local database, legitimate market gaps, or an expired or invalid futures contract month. Only the first one is a problem you can fix by re-downloading data — so before deleting anything, take a minute to rule out the other two.

## Symptom

- A chart shows a gap: missing candles or a hole in the price history where data should be.
- The gap persists after scrolling away and back, or reappears on new charts of the same symbol.

[SCREENSHOT: A price chart with a visible gap in the candle history — missing bars in the middle of a session, gap area highlighted | gaps-in-price-example.png]

Not to be confused with [[feed-connected-chart-not-moving]] — there the chart stops updating entirely; here history is loaded but has holes in it.

## Most likely cause

Corrupted historical data for that symbol in DeepCharts' local database — the chart faithfully renders the broken data it finds on disk.

## Quick fix

Before deleting anything, check the two cases that are not data corruption:

1. Look at the timestamps around the gap. If it sits at a session break, over a weekend, or in a low-liquidity period, it is a real market gap — normal trading behavior that cannot and should not be "fixed". See [[understanding-market-structure-sessions]].
2. For futures, confirm the chart is on the correct, active contract expiry month before assuming a data problem. An expired or invalid contract produces thin, gap-filled history — see [[symbol-rollover]].

If neither applies, delete the affected symbol's stored data so DeepCharts re-downloads it:

3. Use the in-app delete tool (**Options → Delete data**): pick the affected symbol and a date range covering the gap. This removes only that slice of data — the full walkthrough is in [[delete-market-data]].
4. Restart DeepCharts and open the chart again. The software automatically downloads fresh data for the deleted range.

[SCREENSHOT: In-app delete data dialog with a symbol selected and a date range covering the gap | delete-data-symbol-date-range.png]

## If that didn't work

### Cause: Deeper corruption in the symbol's database folder

If the gap survives an in-app delete, remove the symbol's entire data folder manually:

1. Open **General Settings** and locate the **Database Folder Path**.

[SCREENSHOT: General Settings dialog with the Database Folder Path field highlighted | general-settings-database-folder-path.png]

2. Navigate to that folder in File Explorer.
3. Delete only the affected symbol's folder.

> **Warning:** Always delete only the affected symbol's folder — never the entire database. Deleting everything wipes the stored history for all symbols.

[SCREENSHOT: File Explorer inside the database folder with a single symbol's subfolder selected for deletion, other symbol folders visible untouched | database-folder-delete-symbol.png]

4. Restart DeepCharts. It automatically downloads fresh data for that symbol.

### Cause: The gap is real market activity

Session breaks, weekend gaps and low-liquidity periods leave genuine holes in price. These reflect actual trading activity, so no amount of re-downloading will fill them.

### Cause: Expired or invalid contract month

If the symbol still points at an old futures contract, roll it to the active month — see [[symbol-rollover]] — then reload the chart.

## Still stuck

If gaps keep reappearing across symbols, the database itself may need attention — see [[database-problems]]. Otherwise generate a [[diagnostic-report]] and contact support via [[get-help]].

## Prevent this

- Keep contracts current with [[symbol-rollover]] so charts never load a dead contract month.
- Run [[database-optimization]] periodically to keep the local database healthy.

## Related articles

- [[delete-market-data]]
- [[download-data]]
- [[symbol-rollover]]
- [[database-problems]]
- [[database-optimization]]
- [[understanding-market-structure-sessions]]
