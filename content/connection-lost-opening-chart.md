---
title: "Fix: Connection Lost When Opening a Chart"
slug: "connection-lost-opening-chart"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "What to do when your data feed connects fine but the connection drops the moment a chart starts loading data."
keywords: ["connection lost", "connection lost when opening a chart", "feed disconnects when chart opens", "chart drops connection", "windows region settings", "regional format", "language not english"]
---

Your data feed connects without any problem — but the moment you open a chart, the connection drops and DeepCharts shows warnings or error messages. This guide covers the two known causes: an unstable internet connection and Windows language or region settings that break chart data parsing.

## Symptom

- The data feed connects successfully and the connection indicator looks normal.
- As soon as you open a chart — specifically when the chart data starts loading — the connection drops and one or more warnings or error messages appear.

[SCREENSHOT: DeepCharts main window at the moment the connection drops after opening a chart, with the disconnect warning or error message visible on screen | connection-lost-opening-chart-error.png]

Not to be confused with:

- [[fix-unable-to-establish-connection]] — the feed never connects in the first place.
- [[feed-connected-chart-not-moving]] — the feed stays connected but the chart does not update.

## Most likely cause

A brief network interruption while the chart downloads its data — or, if it happens every single time, Windows language and region settings that are not English (US), which change how dates, numbers and decimals are formatted and cause parsing errors during chart data loading.

## Quick fix

Refresh your internet connection first — it is the fastest cause to rule out:

1. Disconnect from your current network.
2. Reconnect to the internet. A stable wired connection is preferable to Wi-Fi.
3. Restart DeepCharts.
4. Connect your data feed and open the chart again.

If the connection still drops when the chart loads, continue below.

## If that didn't work

### Cause: Windows language or region is not English (US)

The data feed and charting components require an English display language and US or English-based region formats. Other regional formats can cause parsing errors exactly at the point where chart data starts loading — which is why the feed connects fine but drops on chart open.

1. Open **Windows Settings → Time & Language → Language** and set the Windows display language to **English**.

[SCREENSHOT: Windows Settings, Time & Language, Language page with the Windows display language dropdown open and English selected | windows-display-language-english.png]

2. Open **Windows Settings → Time & Language → Region** and set **Country or region** to **United States** (or another English-supported region).

[SCREENSHOT: Windows Settings, Time & Language, Region page with Country or region set to United States | windows-region-united-states.png]

3. Restart your computer.
4. Launch DeepCharts, connect the data feed and open the chart again.

> **Note:** The restart in step 3 is mandatory — Windows only applies regional format changes system-wide after a reboot. Changing the setting without restarting will not fix the issue.

## Still stuck

Generate a [[diagnostic-report]] so support can see your system and connection details, then contact us through [[get-help]].

## Prevent this

- Keep Windows set to English with US or English-based regional formats.
- Make sure your internet connection is stable before opening charts — ideally wired.
- Follow [[connect-data-feed]] when setting up a feed so the connection is configured correctly from the start.

## Related articles

- [[connect-data-feed]]
- [[fix-unable-to-establish-connection]]
- [[feed-connected-chart-not-moving]]
- [[data-delayed-lagging]]
- [[get-help]]
