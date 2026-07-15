---
title: "Connect Apex Trader Funding"
slug: "connect-apex"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Connect your Apex Trader Funding Rithmic account (Evaluation or Funded) to DeepCharts, from signing the agreement in R Trader Pro to live charts."
keywords: ["apex", "apex trader funding", "connect apex", "apex rithmic", "apex eval", "apex funded", "apex server", "apex credentials"]
---
By the end of this guide your Apex Trader Funding account will be connected to DeepCharts with live charts on screen. Evaluation and Funded accounts use the identical process — there is no separate funded-only flow.

> **Note:** DeepCharts supports Apex **Rithmic** accounts only. Any CQG, dxFeed or IBKR account variants Apex may offer cannot be connected.

## Before you start

- [ ] An active Apex Rithmic account (Evaluation or Funded). If you do not have one yet, purchase it from Apex Trader Funding first, then return here
- [ ] Your Apex-issued **Rithmic** username and password. These arrive in the Apex welcome email and are **not** the same as your Apex website login — see [[fix-username-password]] for why mixing them up is the number-one cause of failed connections
- [ ] DeepCharts installed and activated — see [[install-deepcharts]]
- [ ] R Trader Pro, which you will install in step 1 to sign the market data agreement — see [[sign-market-data-agreement]] for background

> **Tip:** Cannot find your Rithmic credentials? Search your inbox for "Rithmic" in emails from Apex — the welcome email contains them, and they look different from your Apex website login.

## Steps

### Part A — Sign the agreement in R Trader Pro

The Rithmic market data agreement must be signed before DeepCharts can connect. Without it, the connection dot stays red even with correct credentials.

1. Go to https://www.rithmic.com/rtraderpro and click the **Download R | Trader Pro** button, then run the installer with default options.

2. Open R Trader Pro. The login screen shows **two login forms side by side** — this is normal. Fill **both** forms with the same values:
   - **System:** select **Apex**
   - **Gateway:** select the location nearest to you (Chicago, Europe, Singapore, and so on) — a far-away gateway works but adds latency
   - **Username / Password:** your Rithmic credentials from the Apex welcome email

[SCREENSHOT: R Trader Pro login screen with both side-by-side forms filled identically, System dropdown set to Apex and Gateway dropdown visible | rtrader-login-apex-system.png]

> **Note:** The System field and the Server field are different fields — the Server field also lists `Apex` alongside `Paper Trading`. For signing the agreement, what matters is **System = Apex**.

3. Click **Login**. When prompted for your market data status, retail traders normally select **Non-Professional**.

4. Read and accept the market data agreement that appears. If you closed R Trader Pro before the prompt appeared, log back in — the prompt will reappear.

[SCREENSHOT: R Trader Pro market data agreement prompt after login, with the accept button visible | rtrader-apex-agreement-prompt.png]

5. First-time setup only: open **Window → Preferences → Performance** and drag both sliders — **Quotes** and **Order Book** — to the maximum, then click **Apply** and **OK**. This removes Rithmic's data-receive limit, which otherwise delays charts during high-volume market periods.

[SCREENSHOT: R Trader Pro Preferences window, Performance tab, Quotes and Order Book sliders both at maximum | rtrader-apex-performance-sliders.png]

6. Close R Trader Pro. The agreement is now stored on Rithmic's side — you do not need R Trader Pro running while using DeepCharts.

### Part B — Connect in DeepCharts

7. In DeepCharts, click **Select Connection** in the top toolbar, then click **Feed Settings** at the bottom of the dropdown.

[SCREENSHOT: DeepCharts top toolbar with the Select Connection dropdown open and Feed Settings highlighted at the bottom | apex-select-connection-menu.png]

8. Click **Add Connection** and fill in the form:

| Field | What to enter |
|---|---|
| **Name** | Any label you will recognize, for example "Apex Live" or "Apex Eval". |
| **Feed Source** | **Rithmic RAPI** — the dropdown also shows a Rithmic beta option; pick RAPI. |
| **Username** | Your Rithmic username from the Apex welcome email — not your Apex website login. |
| **Password** | Your Rithmic password from the same email. |
| **Server** | **Apex** — not Paper Trading or any other entry. |
| **Gateway** | The location nearest to you (for example Chicago Area, Europe, Singapore). |

Leave all other fields in the form as they are. Use the interactive Feed Settings mock below to see how the form works — pick Rithmic as the Feed Source and the Server field appears:

[WIDGET: feed-navigator]

> **Warning:** The Server dropdown contains multiple options including `Paper Trading`. For Apex it must be exactly **Apex** — selecting Paper Trading here is the second most common cause of a red connection dot, right after wrong credentials.

9. Click **Save**.

10. Back in the main toolbar, click **Select Connection** again. Your new Apex feed appears in the dropdown under the name you gave it — click it to connect.

11. Route your exchanges to the feed: open **Options → Symbol Manage** and make sure the exchanges you trade (for example CME for ES and NQ) are subscribed and mapped to the Apex connection — the chain-link icon on a row changes which feed it loads from. If this step is skipped, charts either show no data or load old cached data and appear frozen, which is the single biggest cause of "charts not moving" reports. Try it in the interactive mock below — click the chain-link icon to cycle a row's feed. Full walkthrough in [[symbol-manage]].

[WIDGET: symbol-manage-mock]

## Verify it worked

- Within about 10 seconds of connecting, the connection dot turns **green**.
- Open a chart (**New → Price Chart**, pick ES or NQ) and confirm the price is updating live.

If a chart was already open while you fixed Symbol Manage and it still looks frozen, close it and re-open it via **New → Price Chart** — it will reload from the correctly-routed feed.

Once charts are loading, you can place orders through the Trading Panel at the bottom-right of the chart by selecting your Apex account in the panel's fields — see [[trading-from-chart]].

## If something went wrong

If the dot stays red, check these in order — they cover almost every case:

1. **Wrong credentials** — you used your Apex website login instead of the Rithmic credentials from the Apex welcome email. This is the most common cause. See [[fix-username-password]].
2. **Agreement not signed** — the market data agreement was never accepted inside R Trader Pro. See [[fix-log-in-using-rtrader]] and [[sign-market-data-agreement]].
3. **Wrong Server** — the Server field must be exactly **Apex**, not Paper Trading. See [[fix-bad-server]].
4. **Firewall or antivirus blocking Rithmic** — see [[fix-unable-to-establish-connection]].

Other symptoms:

- Dot is green but charts are not moving or show no data — [[feed-connected-chart-not-moving]] (re-check Symbol Manage first)
- Charts lag behind during busy markets — [[data-delayed-lagging]] (verify Feed Source is Rithmic RAPI and the R Trader Pro Performance sliders are at maximum)

Still red after all four checks? Open **Options → Show Logs** in DeepCharts, copy any error messages, and include them when you contact support — see [[diagnostic-report]] and [[get-help]].

## Related articles

- [[connect-rithmic-prop-firm]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[feed-connected-chart-not-moving]]
- [[trading-from-chart]]
- [[compatibility-guide]]
