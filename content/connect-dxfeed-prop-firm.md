---
title: "Connect a Prop-Firm dxFeed Account (MFF, Aqua, Goat...)"
slug: "connect-dxfeed-prop-firm"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Connect a dxFeed account issued by a prop firm such as MyFundedFutures, Aqua Futures or Goat Funded Futures using the dxFeed Prop feed source."
keywords: ["mff", "myfundedfutures", "my funded futures", "aqua futures", "goat funded futures", "dxfeed prop", "phidias", "yrm prop", "bluesky trading", "soloclashes", "prop firm dxfeed", "dom type mbo mbp"]
---
By the end of this guide, the dxFeed account your prop firm issued you will be connected to DeepCharts with live charts on screen. This flow applies to dxFeed-based prop firms including Aqua Futures, MyFundedFutures (MFF), Phidias, YRM Prop, BlueSky Trading, SoloClashes and Goat Funded Futures.

The setup differs from a regular dxFeed connection in two ways: you select **dxFeed Prop** as the Feed Source (not plain dxFeed), and the market data agreement is signed on your prop firm's dashboard — not in R Trader Pro and not on the DeepCharts website.

> **Note:** At checkout, these firms ask which trading platform you want. Picking DeepCharts or its sibling platform DeepDom produces the same dxFeed credentials — either choice connects fine. Only picking an unrelated platform (Tradovate, NinjaTrader, Quantower and similar) makes the credentials incompatible; in that case ask the firm's support to switch your platform selection so they can re-issue compatible credentials.

## Before you start

- [ ] DeepCharts installed and activated — see [[install-deepcharts]]
- [ ] The dxFeed username and password your firm issued you. These are different from your login for the firm's website or dashboard — see [[fix-username-password]]
- [ ] The market data agreement signed on the firm's dashboard (step 1 below) — see [[sign-market-data-agreement]] for how agreements work per account source
- [ ] Confirmed your firm and account type are supported — see [[compatibility-guide]]

> **Warning:** Goat Funded Futures offers both CQG and dxFeed accounts, but only their **dxFeed** account works with DeepCharts. If you have a Goat CQG account, ask Goat to switch you to their dxFeed account. BlueSky Trading offers both dxFeed and Rithmic — if yours is Rithmic, follow [[connect-rithmic-prop-firm]] instead.

## Steps

1. Sign the market data agreement. Log into your prop firm's dashboard and look for a sign-market-data-agreement button or link. If it is not on the dashboard, check the email the firm sent when your account was issued. If you cannot find it in either place, contact the firm's support — only they can resend the link. Until this agreement is signed, the connection will fail even with correct credentials.

[SCREENSHOT: A prop-firm dashboard (example layout) with the market data agreement signing button highlighted | prop-dashboard-sign-agreement.png]

2. Have your dxFeed username and password ready — from the firm's welcome email or dashboard credentials section, not your dashboard login itself.

3. In DeepCharts, click **Select Connection** in the top toolbar, then click **Feed Settings** at the bottom of the dropdown.

[SCREENSHOT: DeepCharts top toolbar with the Select Connection dropdown open and Feed Settings highlighted | dxfeed-prop-select-connection.png]

4. Click **Add Connection** and fill in the form:

| Field | What to enter |
|---|---|
| **Name** | Any label, for example "MFF dxFeed". |
| **Feed Source** | **dxFeed Prop** — specifically this entry, not plain **dxFeed**. |
| **Username** | The dxFeed username from your firm — not your dashboard login. |
| **Password** | The dxFeed password that came with it. |
| **DOM Type** | **MBO** or **MBP** — see the note below. |

Leave the other fields at their defaults.

[SCREENSHOT: Feed Settings dialog with Feed Source=dxFeed Prop selected, showing the form without any Server field, DOM Type dropdown open with MBO and MBP options | feed-settings-dxfeed-prop-dom-type.png]

> **Note:** There is no **Server** field when the Feed Source is **dxFeed Prop** — do not look for one. (A Server field only appears with the plain **dxFeed** source used for direct data-feed accounts.) Routing is automatic: dxFeed sends you to the nearest of its two servers, Frankfurt (EU) or Virginia (US), and you cannot choose.

**Choosing the DOM Type:** dxFeed Level-2 data for CME Group exchanges is MBO (market-by-order). Pick **MBO** for full order-book depth — the best choice for Deep indicators. **MBP** (market-by-price) is much lighter on bandwidth; pick it if your connection is slow or your charts fall behind during high-volume periods.

5. Click **Save**.

6. Back in the main toolbar, click **Select Connection** again and click your new feed to connect.

7. Route your exchanges to the feed: open **Options → Symbol Manage** and confirm the exchanges you trade are subscribed and mapped to this connection (the chain-link icon on a row changes its feed). The instrument picker only shows exchanges you have subscribed. Full walkthrough in [[symbol-manage]].

[SCREENSHOT: Symbol Manage window with CME subscribed and mapped to the dxFeed Prop connection, chain-link icon highlighted | symbol-manage-dxfeed-prop.png]

### If you picked an unrelated platform at checkout

If you selected Tradovate, NinjaTrader, Quantower or another non-DeepCharts platform when buying the account, the credentials the firm gave you belong to that platform's ecosystem and will not connect. Contact the firm's support and ask them to switch your platform selection — they will re-issue compatible dxFeed credentials.

### If your firm bundled a DeepCharts license

Some dxFeed prop firms (including Aqua Futures, MyFundedFutures, Phidias and YRM Prop) bundle a limited DeepCharts Prop-edition license with the account. The Prop edition has no Deep indicators — basic charting and orderflow only. Your dxFeed credentials are not tied to that edition: they work in any DeepCharts installation, so if you already own a Full license you can keep using it with the prop feed, or run both side by side.

## Verify it worked

- The connection indicator turns **green** shortly after connecting.
- Open a chart (**New → Price Chart**, pick a symbol your account covers) and confirm the price is updating live.

Once charts are loading, place orders through the Trading Panel at the bottom-right of the chart by selecting your prop-firm account — see [[trading-from-chart]].

## If something went wrong

A red or failed connection almost always comes down to one of these:

1. **Wrong credentials** — you entered the firm's dashboard login instead of the dxFeed credentials. See [[fix-username-password]].
2. **Agreement not signed** — the market data agreement on the firm's dashboard was never completed. See [[sign-market-data-agreement]].
3. **Wrong Feed Source** — you selected plain **dxFeed** instead of **dxFeed Prop**.
4. **Unrelated platform picked at checkout** — the firm must switch your platform selection and re-issue credentials.

Specific errors:

| Symptom | Where to go |
|---|---|
| Error mentions dxfeed.myfundedfutures.com failed | [[fix-myfundedfutures-failed]] |
| Error mentions DATA_ACCESS_SUSPENDED | [[fix-data-access-suspended]] |
| Connection failed — unable to establish connection | [[fix-unable-to-establish-connection]] |
| Dot is green but charts are not moving | [[feed-connected-chart-not-moving]] — re-check Symbol Manage routing |
| Charts lag during busy markets | [[data-delayed-lagging]] — switching **DOM Type** to **MBP** reduces the data load on slow connections |

## Related articles

- [[connect-dxfeed]]
- [[connect-rithmic-prop-firm]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[fix-myfundedfutures-failed]]
- [[compatibility-guide]]
