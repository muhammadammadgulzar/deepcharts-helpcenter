---
title: "Fix: Charts Lagging or Data Delayed (Checklist)"
slug: "data-delayed-lagging"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "intermediate"
time: "15 min to complete"
description: "A step-by-step checklist to diagnose delayed or lagging chart data — delayed-feed routing, regional download speed, DOM Type, Rithmic gateway and system resources."
keywords: ["charts lagging", "data delayed", "chart behind the market", "delay label", "900 seconds delay", "lag during market open", "slow data feed", "network test"]
---

Your charts are moving, but prices arrive late — a few seconds behind the market, or worse during the open and news releases. Delay has several independent causes, so this article is a checklist: work through it top to bottom and stop at the first check that explains your case.

## Symptom

- The chart updates, but visibly behind the live market.
- A red delay label appears in the chart's top-left corner showing how many seconds the data is behind.
- Lag is worst during high-volume periods (the market open, major news).

[SCREENSHOT: A chart with the red delay label visible in the top-left corner showing a delay value in seconds | chart-red-delay-label.png]

Not to be confused with [[feed-connected-chart-not-moving]] — there nothing updates at all. Check the feed connection dot first: if the feed is disconnected, this article does not apply.

## Most likely cause

Either the symbol is routed to the free 15-minute delayed feed in Symbol Manage, or your download speed from the feed server's region cannot keep up during high-volume periods.

## Quick fix

Read the red delay label — it tells you which problem you have:

1. If the label reads exactly **900 seconds** (15 minutes), the exchange is routed to the [[free-delayed-data-feed|free delayed feed]], not your live subscription. Open **Options → Symbol Manage**, re-map that exchange to your live feed connection (see [[symbol-manage]]), then reopen the chart.
2. If the label fluctuates randomly (3s, 15s, 20s...), it is a live-feed performance issue — continue with the checklist below.

The interactive Symbol Manage mock below shows how the remap works — click the chain-link icon on an exchange to cycle which feed it is mapped to.

[WIDGET: symbol-manage-mock]

## If that didn't work

### Cause: Slow download speed from the feed server's region

What matters is not your general internet speed but the download speed from the feed server's region — you can have 100 Mbps globally and still lag. Run the built-in network test:

1. Click the **?** icon on the main bar.
2. Click **Contact Support**, then **I have a problem or delay with the platform**.
3. In the Diagnostic Tools window, confirm to run the network test.
4. When it finishes, use the copy-to-clipboard button to save the results.

[SCREENSHOT: Diagnostic Tools window after the network test has completed, showing ping and download speed results per region with the copy-to-clipboard button visible | diagnostic-tools-network-test-results.png]

Reading the results: the US values correspond to the Virginia server, the EU values to Frankfurt. As a rule of thumb, if the download speed for the region you connect to is below roughly 10 Mbps, expect delay during high-volume periods. A detected VPN or proxy can also add latency — test without it.

### Cause: dxFeed MBO stream is too heavy for your connection

dxFeed Level-2 data for CME Group exchanges is MBO (market-by-order), much heavier than MBP. dxFeed auto-routes you to its nearest server (Frankfurt or Virginia) — you cannot choose — so if your line cannot keep up, switch the **DOM Type** field in your dxFeed feed settings from **MBO** to **MBP**. MBP usually eliminates the delay on slower lines; the trade-off is losing order-level MBO detail. See [[connect-dxfeed]].

[SCREENSHOT: dxFeed feed settings with the DOM Type field open showing the MBO and MBP options, MBP selected | dxfeed-dom-type-mbp.png]

### Cause: Rithmic gateway or throttle settings

Rithmic users can act on three settings:

1. **Gateway** is user-selectable — run the network test above and pick the fastest gateway location in your feed settings.
2. Verify the feed source is **Rithmic RAPI**, not **Rithmic Beta**.
3. In R Trader Pro, open **Window → Preferences → Performance** and set both the **Quotes** and **Order Book** sliders to maximum, then **Apply → OK**. A limit here throttles high-volume data and delays charts.

[SCREENSHOT: R Trader Pro Preferences Performance tab with both Quotes and Order Book sliders dragged to maximum | rtrader-performance-sliders-max.png]

See [[connect-rithmic]] and [[rtrader-pro-plugin]].

### Cause: Your computer is out of RAM or CPU

The diagnostic results include free RAM and CPU usage. Very low free RAM or very high overall CPU usage causes lag regardless of the network — close other applications and re-test.

### Cause: Charts are slow to load when opened (not live delay)

If the problem is slow loading rather than live lag, check the status badge in the main bar while the chart builds. **LDT** means data is loading from your disk — stuck there points to a local data problem, so delete the symbol's data ([[delete-market-data]]) and reload. **DWT** means data is downloading from the feed server — watch **Options → Show Log → Connection log** to see ticks arriving. DWT with an empty Connection log means the feed server is not sending data at all.

## Still stuck

If routing, region speed, settings and system resources all check out and the delay persists, generate a [[diagnostic-report]], include the copied network test results, and contact support through [[get-help]].

## Prevent this

- Map every exchange to your live feed in [[symbol-manage]] after any feed change.
- Set the R Trader Pro performance sliders during initial Rithmic setup — see [[connect-rithmic]].
- Pick your Rithmic gateway by speed test, not by guess, when following [[connect-data-feed]].

## Related articles

- [[free-delayed-data-feed]]
- [[feed-connected-chart-not-moving]]
- [[connect-dxfeed]]
- [[connect-rithmic]]
- [[symbol-manage]]
- [[gaps-in-price]]
