---
title: "Connect Rithmic Using the RTrader Pro Plugin"
slug: "rtrader-pro-plugin"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Run R Trader Pro as a data gateway so DeepCharts and other platforms can share one Rithmic account at the same time without session conflicts."
keywords: ["rtrader pro plugin", "r trader pro", "use r trader", "allow plugins", "share rithmic account", "rithmic plugin mode", "run rtrader and deepcharts together", "rithmic yellow dot"]
---
By the end of this guide, DeepCharts will receive its Rithmic data through R Trader Pro running in the background — which lets R Trader Pro, DeepCharts and other Rithmic-connected applications share one Rithmic login at the same time without session conflicts.

In this mode R Trader Pro works as a data gateway: it holds the connection to Rithmic, pulls the live data, and feeds it into DeepCharts. This is also the only way to share a single Rithmic feed with applications outside DeepCharts (dxFeed feeds cannot be shared with third-party applications at all).

> **Note:** If you only use DeepCharts and do not need R Trader Pro running alongside it, use the standard direct connection instead — see [[connect-rithmic]]. The plugin route adds a moving part: R Trader Pro must stay open the whole session.

## Before you start

- [ ] Your Rithmic username and password at hand — see [[connect-rithmic]] for where credentials come from
- [ ] The Rithmic market data agreement signed — see [[sign-market-data-agreement]]
- [ ] R Trader Pro installed (download from https://www.rithmic.com/rtraderpro via the **Download R | Trader Pro** button)
- [ ] Your account's Server value known — **Rithmic Paper Trading** for direct data feeds, or your prop firm's entry from the table in [[connect-rithmic-prop-firm]]

## Steps

### Part A — Set up R Trader Pro

1. Open R Trader Pro. You will see two login forms side by side — fill **both** with the same values: your Rithmic username and password, **System** = your account's server value (for example **Rithmic Paper Trading**), and the **Gateway** nearest to you.

2. Before logging in, enable the **Allow Plugins** toggle on the login form. This is the switch that lets DeepCharts attach to R Trader Pro — without it, the DeepCharts connection stays yellow and never turns green.

[SCREENSHOT: R Trader Pro login screen with both forms filled identically and the Allow Plugins toggle enabled and highlighted | rtrader-login-allow-plugins.png]

3. Click **Login** and leave R Trader Pro running in the background.

4. Remove Rithmic's data-receive limits: open **Window → Preferences** and go to the **Performance** tab. Under **Max Market Data Updates/Second**, drag both the **Quotes** and **Order Book** sliders to the maximum (**No Max**), confirm the **Adjust to keep up with market data inflow** checkbox is enabled, then click **Apply** and **OK**.

[SCREENSHOT: R Trader Pro Preferences window, Performance tab, with Quotes and Order Book sliders at No Max and the "Adjust to keep up with market data inflow" checkbox ticked | rtrader-preferences-no-max.png]

> **Warning:** Keep the sliders at maximum permanently. With a lower limit set, Rithmic caps how much data reaches you per second, and charts fall behind during high-volatility periods when data inflow spikes.

### Part B — Set up DeepCharts

5. In DeepCharts, click **Select Connection** in the top toolbar, then **Feed Settings** at the bottom of the dropdown.

6. Click **Add Connection**.

7. Under **Feed Source**, select **Rithmic RAPI**. The plugin route only works with this source — not with **Rithmic Wss - beta**.

8. Enter the same Rithmic username and password, and select the **same Server and Gateway** you used in R Trader Pro. The two applications must match exactly — a mismatch prevents the plugin link from establishing.

9. Enable the **Use R|Trader** option in the connection form (some versions label it **Use RTrader Pro Plugin**, in the Advanced section).

[SCREENSHOT: DeepCharts Feed Settings dialog with Feed Source=Rithmic RAPI, Server and Gateway matching R Trader Pro, and the Use R|Trader option enabled and highlighted | feed-settings-use-rtrader-enabled.png]

10. Click **Save**, then connect the feed from the **Select Connection** dropdown.

> **Warning:** Keep R Trader Pro open the entire time you use DeepCharts in this mode. Closing R Trader Pro instantly terminates the data connection.

## Verify it worked

- The DeepCharts connection indicator turns **green** (a persistent **yellow** dot means R Trader Pro is not running, was logged in without **Allow Plugins**, or the Server/Gateway values do not match).
- Open a chart via **New → Price Chart** — the price updates live.
- R Trader Pro is still running in the background.

[SCREENSHOT: DeepCharts with a green connection dot and a live chart, with R Trader Pro visible running in the background | rtrader-plugin-connected-green.png]

## If something went wrong

| Symptom | Where to go |
|---|---|
| Dot stays yellow, "Expert not attached" | [[fix-rithmic-expert-not-attached]] — R Trader Pro is not running or plugins are not allowed |
| Message asks you to log in using R Trader or R Trader Pro | [[fix-log-in-using-rtrader]] |
| Connection failed — check username and password | [[fix-username-password]] |
| Connection failed — bad server | [[fix-bad-server]] — remember the Server must match R Trader Pro exactly |
| Charts lag during busy markets | [[data-delayed-lagging]] — re-check the Performance sliders are at No Max |
| Dot is green but charts are not moving | [[feed-connected-chart-not-moving]] — check your [[symbol-manage]] routing |

## Related articles

- [[connect-rithmic]]
- [[connect-rithmic-prop-firm]]
- [[sign-market-data-agreement]]
- [[fix-rithmic-expert-not-attached]]
- [[fix-log-in-using-rtrader]]
- [[data-delayed-lagging]]
