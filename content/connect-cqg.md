---
title: "How to Connect CQG (AMP, Optimus, EdgeClear, Ironbeam...)"
slug: "connect-cqg"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Connect a CQG account from AMP Futures, Optimus, EdgeClear, Ironbeam or Phillips Capital to DeepCharts."
keywords: ["CQG", "AMP Futures", "Optimus Futures", "EdgeClear", "Ironbeam", "Phillips Capital", "CQG demo", "connect CQG to DeepCharts", "CQG not connecting", "cqg feed"]
---
By the end you will have your CQG account connected to DeepCharts and charts loading live data. CQG accounts are issued by futures brokers — AMP Futures, EdgeClear, Ironbeam, Phillips Capital and Optimus Futures all work — and CQG is one of the fastest feeds to set up because there is no separate market data agreement to sign first.

One compatibility rule matters before you begin: DeepCharts can only connect CQG accounts that were issued **directly by CQG** — either through one of the brokers above, or by a prop firm that issues its CQG accounts straight from CQG. A CQG account that comes through Tradovate or NinjaTrader cannot be connected at all. If you are unsure which kind you have, check [[compatibility-guide]] or ask your broker.

## Before you start

- Confirm your broker or account type is supported — [[compatibility-guide]]
- Have your CQG username and password ready (from your broker's welcome email — not your broker website login)
- DeepCharts installed and activated — [[install-deepcharts]]

## Steps

1. In the DeepCharts main bar, click **Select Connection** → **Feed Settings**.

[SCREENSHOT: DeepCharts main bar with the Select Connection dropdown open and the Feed Settings entry highlighted | feed-settings-menu-cqg.png]

2. Click **Add Connection**. A blank connection form appears.

3. In **Name**, type a label you will recognize later, for example "AMP CQG".

4. In **Feed Source**, select **CQG**.

[SCREENSHOT: Feed Settings dialog with the Feed Source dropdown open and CQG highlighted, Name field filled in as "AMP CQG" | feed-settings-cqg-source.png]

5. Enter your CQG **Username** and **Password**. These are the CQG credentials from your broker, not your login for the broker's website.

6. Check **Use demo credentials** only if you are connecting a CQG demo account. For a live account, leave it disabled. A mismatch here (a live account with the box checked, or a demo account with it unchecked) is a common reason the connection fails even though the credentials are correct.

7. Optionally, enable **Connect on startup** if you want DeepCharts to connect this feed automatically every time the app opens.

8. Leave every other field at its default and click **Save**.

[SCREENSHOT: Completed CQG connection form showing Name, Feed Source=CQG, Username filled, Use demo credentials unchecked, Connect on startup visible, with the Save button highlighted | feed-settings-cqg-complete.png]

9. Back in the main bar, click **Select Connection** and click your new CQG feed. The connection dot should turn green within about 10 seconds.

[SCREENSHOT: Select Connection dropdown showing the new CQG feed with a green status dot | cqg-connected-green-dot.png]

10. Open **Options → Symbol Manage** and route the exchanges you trade to this CQG feed. This step is required — without it charts show no data. See [[symbol-manage]] for the full walkthrough.

[SCREENSHOT: Symbol Manage window with an exchange row showing the Data Feed column set to the CQG connection | symbol-manage-cqg-routing.png]

11. Open a chart to confirm data is flowing — see [[first-chart]].

### If you have a prop-firm CQG account

Prop-firm CQG accounts work only when the firm issues the account directly from CQG. If your prop firm delivers CQG through Tradovate or NinjaTrader, that account cannot connect to DeepCharts — you would need the firm's Rithmic or dxFeed account instead. For example, Goat Funded Futures offers CQG through another platform, so only their dxFeed account works with DeepCharts.

### If you plan to use order-flow indicators heavily

CQG does not provide MBO (market-by-order) data, and while it provides full market depth for ES, it does not provide full depth for NQ. If per-order data quality matters for your workflow (the Deep order-flow indicators, for instance), consider a Rithmic or dxFeed feed instead — see [[connect-rithmic]] and [[connect-dxfeed]].

## Verify it worked

- The status dot next to your CQG connection is green.
- A chart on an exchange you routed in **Symbol Manage** shows live, moving prices.

## If something went wrong

| Symptom | What to do |
|---|---|
| Red dot, username/password error | Re-check credentials, then verify the **Use demo credentials** box matches your account type — see [[fix-username-password]] |
| Red dot, cannot establish connection | Firewall or network is blocking CQG — see [[fix-unable-to-establish-connection]] |
| Green dot but chart is frozen or empty | Exchange not routed to this feed — see [[feed-connected-chart-not-moving]] and [[symbol-manage]] |

## Related articles

- [[compatibility-guide]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[connect-rithmic]]
- [[manage-feed-connections]]
- [[feed-connected-chart-not-moving]]
