---
title: "How to Connect a dxFeed Data Feed"
slug: "connect-dxfeed"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Connect a dxFeed account bought from the DeepCharts website or from dxfeed.com, including DOM Type and Symbol Manage setup."
keywords: ["dxfeed", "dx feed", "connect dxfeed", "website account", "dom type", "mbo", "mbp", "dxfeed credentials"]
---

By the end you will have your dxFeed account connected with a green dot and a chart loading live dxFeed data. This guide covers dxFeed subscriptions bought from the DeepCharts website (the most common case) and directly from dxfeed.com. If your dxFeed account comes from a prop firm (MFF, Aqua, Goat and similar), follow [[connect-dxfeed-prop-firm]] instead — prop accounts use a different Feed Source and have no Server field.

## Before you start

- A dxFeed subscription — bought on the DeepCharts website ([[buy-data-feed]]) or on dxfeed.com with DeepCharts selected as the platform.
- The market data agreement signed — see [[sign-market-data-agreement]]. For website purchases your credentials stay hidden in the dashboard until you sign; after signing, the username and password become visible on the Subscriptions page. Record them.
- DeepCharts installed and running — see [[install-deepcharts]].

## Steps

1. In DeepCharts, click **Select Connection** in the main toolbar, then click **Feed Settings** at the bottom of the dropdown.

[SCREENSHOT: Main toolbar with the Select Connection dropdown open and Feed Settings highlighted at the bottom | dxfeed-open-feed-settings.png]

2. In the Feed Settings window, click **Add Connection**.

3. Fill in the connection fields:

| Field | Value |
|---|---|
| **Name** | Any name for this profile, for example "My dxFeed" |
| **Feed Source** | dxFeed |
| **Username** | The dxFeed username from your dashboard |
| **Password** | The dxFeed password from your dashboard |
| **Server** | **Website Account** if bought on the DeepCharts website; **dxFeed Account** if bought on dxfeed.com |
| **DOM Type** | MBO or MBP — see below |

Try the form live below — pick dxFeed as the Feed Source and see which fields it asks for.

[WIDGET: feed-navigator]

> **Note:** **DOM Type** controls the Level 2 depth format. dxFeed's CME Group Level 2 data is MBO (market-by-order) — pick **MBO** for full per-order depth, which is best for the DOM and orderflow indicators. **MBP** is much lighter data; choose it if your connection is slow or charts lag during high-volume periods.

4. Click **Save** and close the window.

5. Click **Select Connection** again and click your new dxFeed profile to connect. The circle next to it should turn green within about 10 seconds.

[SCREENSHOT: Select Connection dropdown with the dxFeed profile connected and its status circle green | dxfeed-connected-green.png]

6. Disconnect the feed (click it again), then open **Options → Symbol Manage** and route your exchanges to this feed — the full walkthrough is in [[symbol-manage]]. In short: if your exchange is listed, make sure its **Data Feed** column points at the dxFeed profile (chain-link icon to change it); if it is not listed, click **Subscribe**, find the exchange and assign the dxFeed profile.

7. Close Symbol Manage and reconnect. Confirm the circle is green again.

8. Open a chart: **New → Price Chart**, select an instrument (for example ES or NQ) and open it.

### If you also run DeepDom

DeepCharts and DeepDom share one data bridge — the same dxFeed connection serves both applications at the same time, but the settings must match exactly. In DeepDom's feed settings enter the identical dxFeed credentials, the same Server value (**Website Account**) and the same **DOM Type**, then connect. If one application will not connect while the other works, mismatched feed settings between the two are the first thing to check.

## Verify it worked

- The connection circle in **Select Connection** is green.
- A chart on a subscribed exchange draws candles and the price updates live.

> **Note:** dxFeed runs two servers — Frankfurt (EU) and Virginia (US) — and routes you automatically to the nearest one; there is no server-region choice to make. If you see data delay, what matters is your download speed from that server's region, and switching **DOM Type** to MBP is the usual fix on a slow line.

## If something went wrong

| Symptom | See |
|---|---|
| Circle stays red — credentials rejected | [[fix-username-password]] — make sure you are using the dashboard-issued feed credentials and that the agreement is signed |
| Error "Unable to load DLL DXFeed_64.dll" | [[fix-dxfeed-dll]] |
| Error DATA_ACCESS_SUSPENDED | [[fix-data-access-suspended]] |
| Green circle but charts not moving | [[feed-connected-chart-not-moving]] |
| Charts lag during busy periods | [[data-delayed-lagging]] — and consider DOM Type = MBP |

> **Warning:** dxFeed credentials issued through other charting platforms (Quantower, Sierra Chart, ATAS and similar) cannot be used with DeepCharts, and dxfeed.com purchases only work when DeepCharts was selected as the platform at checkout. If you picked another platform, contact dxFeed support to re-issue credentials for DeepCharts.

## Related articles

- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[connect-dxfeed-prop-firm]]
- [[connect-data-feed]]
- [[compatibility-guide]]
- [[first-chart]]
