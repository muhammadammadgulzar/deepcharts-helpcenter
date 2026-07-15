---
title: "Connect Any Rithmic Prop-Firm Account (Server Table)"
slug: "connect-rithmic-prop-firm"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "One setup flow for every Rithmic prop firm — find your firm's Server value in the table, sign the agreement in R Trader Pro, and connect to DeepCharts."
keywords: ["prop firm rithmic", "rithmic server list", "prop firm server", "rithmic paper trading", "bulenox", "bluenox", "takeprofittrader", "earn2trade", "oneuptrader", "tradeify", "the trading pit", "funded account setup"]
---
Every Rithmic prop-firm account connects to DeepCharts the same way — the only thing that differs between firms is the **Server** value you select. By the end of this guide your prop-firm feed will be connected and charts will be streaming live.

Evaluation and Funded accounts use the identical flow — there is no separate funded-only setup.

> **Note:** Apex Trader Funding has its own dedicated walkthrough: [[connect-apex]]. If your prop firm issued you a dxFeed account instead of Rithmic (MyFundedFutures, Aqua Futures, Goat Funded Futures and others), follow [[connect-dxfeed-prop-firm]].

## Before you start

- [ ] An active prop-firm account (Evaluation or Funded — both connect the same way) — purchase it from your firm first if you have not
- [ ] The Rithmic username and password your firm issued you. These come in the firm's welcome email and are **not** the same as your login for the firm's website — see [[fix-username-password]] for why this matters
- [ ] R Trader Pro installed for signing the market data agreement — see [[sign-market-data-agreement]]
- [ ] DeepCharts installed and activated — see [[install-deepcharts]]
- [ ] Confirmed your firm is supported — see [[compatibility-guide]]

> **Warning:** Not every prop firm can be connected. TopStep, FTMO and FundedNext Futures do not issue credentials usable with DeepCharts. Prop-firm CQG accounts work only when the firm issues the CQG account directly from CQG — a CQG account that comes through Tradovate or NinjaTrader cannot be connected (see [[connect-cqg]]).

## Steps

1. Find your firm's **Server** value in the table below. You will use this same value twice: as the **System** in R Trader Pro when signing the agreement, and as the **Server** in DeepCharts Feed Settings.

| Prop firm | Server value |
|---|---|
| Apex Trader Funding (see [[connect-apex]]) | Apex |
| 4PropTrader | 4PropTrader |
| 10X Futures | 10XFutures |
| Bulenox | Bulenox |
| DayTraders.com | DayTraders.com |
| Earn2Trade | Earn2Trade |
| FundedFuturesNetwork | FundedFuturesNetwork |
| Legends Trading | LegendsTrading |
| Lucid Trading | LucidTrading |
| MES Capital | MES Capital |
| PropShopTrader | PropShopTrader |
| The Trading Pit | TheTradingPit |
| Thrive Trading | ThriveTrading |
| TradeFundrr | TradeFundrr |
| Tradeify | Tradeify [CONFIRM: exact spelling of the Tradeify entry in the Server dropdown] |
| tradesea | tradesea (lowercase in the dropdown) |
| BlueSky Trading (Rithmic accounts) | Rithmic Paper Trading |
| OneUpTrader | Rithmic Paper Trading |
| TakeProfitTrader | Rithmic Paper Trading |
| Any other Rithmic prop firm | Rithmic Paper Trading |

> **Tip:** Watch the spelling — the correct firm name is "Bulenox" (often mistyped as "Bluenox") and the server entry is "TradeFundrr" with no second "e".

### If your firm is not in the Server dropdown

Select **Rithmic Paper Trading** — that is Rithmic's default server for data-feed-only and smaller prop accounts. Use it in both R Trader Pro and DeepCharts. Despite the name, the data is real and live.

2. Sign the Rithmic market data agreement in R Trader Pro. Without it, the connection stays red even with correct credentials. Download R Trader Pro from https://www.rithmic.com/rtraderpro (click **Download R | Trader Pro**), open it, and fill **both** side-by-side login forms with the same values: **System** = your firm's server value from the table, **Gateway** = the location nearest to you, and the Rithmic username and password from your firm's welcome email. Click **Login**, select your market data status when prompted (retail traders normally select **Non-Professional**), then read and accept the agreements. Full details in [[sign-market-data-agreement]].

[SCREENSHOT: R Trader Pro login screen with both forms filled, the System dropdown open showing prop-firm server entries, and the Gateway field visible | rtrader-login-prop-firm-system.png]

3. First-time setup only: while in R Trader Pro, open **Window → Preferences → Performance** and drag both sliders — **Quotes** and **Order Book** — to the maximum, then click **Apply** and **OK**. This removes Rithmic's data-receive limit; with a limit set, charts can lag during high-volume market periods. Close R Trader Pro when done.

[SCREENSHOT: R Trader Pro Preferences Performance tab with both Quotes and Order Book sliders at maximum | rtrader-performance-max-prop.png]

4. In DeepCharts, click **Select Connection** in the top toolbar, then **Feed Settings** at the bottom of the dropdown.

5. Click **Add Connection** and fill in the form:

| Field | What to enter |
|---|---|
| **Name** | Any label, for example "MyFirm Eval" or "MyFirm Live". |
| **Feed Source** | **Rithmic RAPI** (the dropdown also shows **Rithmic Wss - beta** — pick RAPI). |
| **Username** | The Rithmic username from your firm's welcome email — not the firm's website login. |
| **Password** | The Rithmic password from the same email. |
| **Server** | Your firm's value from the table in step 1 — exactly as written. |
| **Gateway** | **Automatic** (default), or the region nearest to you for lower latency. |

Leave all other fields as they are. Try the interactive Feed Settings mock below — switch the Feed Source to Rithmic and watch the Server field appear:

[WIDGET: feed-navigator]

> **Tip:** If old or expired prop accounts clutter your account list, enable the **Show only active accounts** toggle in the LOGIN INFO section of Feed Settings.

6. Click **Save**.

7. Click **Select Connection** again and click your new feed to connect.

8. Route your exchanges to the feed: open **Options → Symbol Manage** and confirm the exchanges you trade are subscribed and mapped to this connection (the chain-link icon on a row changes its feed). Try it in the mock below — click the chain-link icon on a row to cycle its mapped feed. Full walkthrough in [[symbol-manage]].

[WIDGET: symbol-manage-mock]

## Verify it worked

- The connection indicator turns **green** within about 10 seconds of connecting.
- Open **New → Price Chart**, pick a symbol your account covers (for example ES or NQ), and confirm the price is updating live.

Once charts are loading you can place orders through the Trading Panel at the bottom-right of the chart by selecting your prop-firm account — see [[trading-from-chart]].

## If something went wrong

The three causes below account for nearly all failed prop-firm connections, in this order:

1. **Wrong credentials** — you entered the firm's website login instead of the Rithmic credentials from the welcome email. See [[fix-username-password]].
2. **Agreement not signed** — the market data agreement was never accepted inside R Trader Pro. See [[fix-log-in-using-rtrader]] and [[sign-market-data-agreement]].
3. **Wrong Server value** — the Server field does not exactly match your firm's entry from the table. See [[fix-bad-server]].

Other symptoms:

- Dot is green but charts are not moving — [[feed-connected-chart-not-moving]]
- Connection failed — unable to establish connection — [[fix-unable-to-establish-connection]]
- Charts lag during busy markets — [[data-delayed-lagging]] (verify Feed Source is Rithmic RAPI and the R Trader Pro sliders are at maximum)

If none of these match, collect the details support needs — see [[diagnostic-report]].

## Related articles

- [[connect-apex]]
- [[connect-rithmic]]
- [[connect-dxfeed-prop-firm]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[compatibility-guide]]
