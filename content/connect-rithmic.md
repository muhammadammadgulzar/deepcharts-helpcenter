---
title: "How to Connect a Rithmic Data Feed"
slug: "connect-rithmic"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Connect a Rithmic data feed to DeepCharts — sign the agreement in R Trader Pro, enter your credentials with the correct Server value, and verify live charts."
keywords: ["rithmic", "rithmic rapi", "connect rithmic", "rithmic setup", "rithmic paper trading", "rythmic", "ritmic", "rithmik", "rithmic feed source missing", "rithmic wss beta"]
---
By the end of this guide you will have a Rithmic data feed connected to DeepCharts and a live chart on screen. The main walkthrough covers a Rithmic subscription bought from the DeepCharts website; the branch sections cover Rithmic accounts issued by a broker or carried over from another trading platform.

> **Note:** Rithmic does not sell data feeds directly from rithmic.com. Your Rithmic credentials always come from one of four places: the DeepCharts website, a broker, a prop firm, or another trading platform. If your account came from a prop firm, follow [[connect-rithmic-prop-firm]] instead (or [[connect-apex]] for Apex Trader Funding).

## Before you start

Make sure you have:

- [ ] DeepCharts installed and activated — see [[install-deepcharts]]
- [ ] An active Rithmic subscription with its username and password — see [[buy-data-feed]] if you have not purchased one yet
- [ ] The Rithmic market data agreement signed through R Trader Pro — see [[sign-market-data-agreement]] (steps 2–3 below summarize the process)
- [ ] Checked that your account source is supported — see [[compatibility-guide]]

## Steps

1. Get your Rithmic credentials. For a feed bought from the DeepCharts website: log in at my.deepcharts.com, open the **Subscriptions** section, and locate your Rithmic username and password. Keep them at hand — you will need them in every step that follows.

[SCREENSHOT: DeepCharts dashboard at my.deepcharts.com with the Subscriptions section open and the Rithmic subscription row visible, credentials area highlighted (blur the actual username/password) | dashboard-subscriptions-rithmic-credentials.png]

2. Sign the Rithmic market data agreement in R Trader Pro. Rithmic requires you to accept its agreements before any third-party platform can connect — with them unsigned, the connection fails even with correct credentials. Download R Trader Pro from https://www.rithmic.com/rtraderpro (click **Download R | Trader Pro**), install it, and open it. Fill in **both** login forms with the same values: your Rithmic username and password, **System** = **Rithmic Paper Trading**, and the **Gateway** nearest to you. Click **Login**, choose your market data status when prompted (retail traders normally select **Non-Professional**), then read and accept each agreement until no prompts remain. The full process is covered in [[sign-market-data-agreement]].

[SCREENSHOT: R Trader Pro login screen showing the two side-by-side login forms, both filled identically, with System set to Rithmic Paper Trading and the Gateway dropdown visible | rtrader-login-paper-trading.png]

> **Note:** The agreements are stored on Rithmic's servers, so you do not need to keep R Trader Pro open while using DeepCharts. You only repeat this if your account resets or Rithmic introduces new mandatory agreements.

3. While you are in R Trader Pro (first-time setup only), remove Rithmic's data-receive limit: open **Window → Preferences → Performance** and drag both sliders — **Quotes** and **Order Book** — to the maximum, then click **Apply** and **OK**. With a limit set, charts can lag behind during high-volume market periods. Close R Trader Pro when done.

[SCREENSHOT: R Trader Pro Preferences window on the Performance tab with the Quotes and Order Book sliders both dragged to the maximum position | rtrader-performance-sliders-max.png]

4. In DeepCharts, click **Select Connection** in the top toolbar, then click **Feed Settings** at the bottom of the dropdown. The Feed Settings window opens.

[SCREENSHOT: DeepCharts main toolbar with the Select Connection dropdown open and the Feed Settings entry at the bottom highlighted | select-connection-feed-settings.png]

5. Click **Add Connection** and fill in the form:

| Field | What to enter |
|---|---|
| **Name** | Any label you will recognize later, for example "Rithmic Live". |
| **Feed Source** | **Rithmic RAPI** — the recommended option. |
| **Username** | Your Rithmic username (not your DeepCharts website login). |
| **Password** | Your Rithmic password. |
| **Server** | **Rithmic Paper Trading** for a feed bought from the DeepCharts website. |
| **Gateway** | **Automatic** (the default), or the region nearest to you. |

Leave every other field as it is. The **Include commissions** option is on by default — it shows commissions in your P/L.

Try the form live below — set Feed Source to Rithmic RAPI and watch the Server and Gateway fields appear.

[WIDGET: feed-navigator]

> **Note:** The Feed Source dropdown shows **Rithmic RAPI** and **Rithmic Wss - beta** — there is no plain "Rithmic" option anymore, so if an older guide mentions one, pick **Rithmic RAPI**. If charts ever feel delayed or flaky, verify you are on RAPI and not the Wss beta.

> **Note:** "Paper Trading" is only Rithmic's server label for data-feed accounts — the data it delivers is real and live, identical to broker and prop-firm Rithmic feeds.

The Gateway dropdown offers: Automatic, Chicago Area, Seoul, Mumbai, Hong Kong, Sao Paolo, Singapore, Sydney, Tokyo, Frankfurt, Europe, Cape Town, NYC Area and US West. A far-away gateway still works but adds latency — if you are far from Chicago and data feels slow, pick the region closest to you (for example Europe or Frankfurt for EU users, Singapore or Mumbai for Asia) and reconnect.

### If your Rithmic account came from a broker

For Rithmic accounts issued by AMP Futures, EdgeClear, Ironbeam, Phillips Capital or Optimus Futures, the setup is identical except the **Server** field: select **Rithmic 01** instead of Rithmic Paper Trading. Use the same value as the System field when signing the agreement in R Trader Pro.

### If your Rithmic credentials came from another trading platform

Rithmic credentials issued through a different orderflow or heatmap platform (Quantower, Sierra Chart, MotiveWave, ATAS, NinjaTrader and similar) work with DeepCharts. Use **Server** = **Rithmic Paper Trading**, and make sure the agreement is signed in R Trader Pro with the same value in the System field.

> **Warning:** Only Rithmic credentials carry across from other platforms this way. dxFeed credentials issued via other platforms cannot be used with DeepCharts — for dxFeed you need to buy through the DeepCharts website or directly from dxfeed.com with DeepCharts selected as the platform (see [[connect-dxfeed]]).

### If your Rithmic account came from a prop firm

Follow [[connect-rithmic-prop-firm]] — each firm uses its own named Server value, listed in that article's table. Apex Trader Funding has a dedicated guide: [[connect-apex]].

6. Click **Save**.

7. Back in the main toolbar, click **Select Connection** again — your new Rithmic feed now appears in the dropdown under the name you gave it. Click it to connect.

8. Route your exchanges to the new feed: open **Options → Symbol Manage** and make sure the exchanges you trade are subscribed and mapped to this Rithmic connection (the chain-link icon on a row changes which feed that exchange loads from). The instrument picker only shows exchanges you have subscribed. Full details in [[symbol-manage]].

Try the mapping below — click the chain-link icon on a row to cycle which feed the exchange loads from.

[WIDGET: symbol-manage-mock]

9. Open a chart: click **New** in the top menu, then **Price Chart**, select an instrument (for example ES or NQ) and confirm.

## Verify it worked

- Within about 10 seconds of connecting, the connection indicator turns **green**.
- The chart you opened loads candles and the price updates live.

[SCREENSHOT: DeepCharts main toolbar showing the green connection indicator next to the Rithmic feed name, with a live ES chart updating in the background | rithmic-connected-green-dot.png]

## If something went wrong

| Symptom | Where to go |
|---|---|
| Connection failed — check username and password | [[fix-username-password]] — the most common cause is entering a website login instead of the Rithmic credentials |
| Connection failed — bad server | [[fix-bad-server]] — the Server value does not match your account source |
| Message asks you to log in using R Trader or R Trader Pro | [[fix-log-in-using-rtrader]] — the agreement step was skipped or incomplete |
| Indicator turns yellow with "Expert not attached" | [[fix-rithmic-expert-not-attached]] |
| Connection failed — unable to establish connection | [[fix-unable-to-establish-connection]] |
| Dot is green but the chart is not moving | [[feed-connected-chart-not-moving]] — almost always a Symbol Manage routing issue |
| Charts load but lag during busy markets | [[data-delayed-lagging]] — verify Feed Source is Rithmic RAPI and the R Trader Pro Performance sliders are at maximum |

## Related articles

- [[buy-data-feed]]
- [[sign-market-data-agreement]]
- [[connect-rithmic-prop-firm]]
- [[rtrader-pro-plugin]]
- [[symbol-manage]]
- [[manage-feed-connections]]
