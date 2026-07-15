---
title: "Supported Brokers, Prop Firms and Data Feeds"
slug: "compatibility-guide"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "reference"
difficulty: "beginner"
time: "7 min read"
description: "Every broker, prop firm and data feed that connects to DeepCharts, with the exact Feed Source and Server values for each."
keywords: ["compatibility", "supported brokers", "supported prop firms", "is my prop firm supported", "apex", "topstep", "tradovate", "rithmic paper trading", "dxfeed prop", "server list", "which feed", "ninjatrader"]
---

DeepCharts connects to live market data through a small set of feed technologies — Rithmic, dxFeed, CQG and the Interactive Brokers TWS API — but dozens of brokers and prop firms issue accounts on top of those technologies. This page is the master list: who is supported, which **Feed Source** to pick, and which **Server** value belongs to each provider.

If your provider is listed here, the connection takes a few minutes in [[connect-data-feed|Feed Settings]]. If it is in the unsupported table at the bottom, DeepCharts cannot connect to it directly — but you can still chart on a supported feed and execute trades on the provider's own platform.

## What it is

A compatibility matrix. It answers three questions before you touch any settings: "Can my account connect to DeepCharts at all?", "Which Feed Source do I select?", and "What exactly goes in the Server field?" Wrong answers to the last two are the most common causes of a connection that stays red, so treat the tables below as the reference of record.

## When to use it

- You are choosing a broker or prop firm and want to know it will work with DeepCharts before you pay.
- You already have an account and need the exact **Feed Source** and **Server** values for [[connect-data-feed|Feed Settings]].
- Your connection dot stays red and you suspect a wrong Server value — see [[fix-bad-server]].
- Someone told you a platform "works with everything" and you want to check before buying.

## Quick start

1. Find your provider in the tables under Settings reference below.
2. Note its **Feed Source** value and, where one exists, its **Server** value.
3. Sign the market data agreement for that account type — see [[sign-market-data-agreement]].
4. Enter the values in **Select Connection → Feed Settings** — see [[connect-data-feed]].
5. Route your exchanges to the new feed in **Options → Symbol Manage** — see [[symbol-manage]].

[SCREENSHOT: Feed Settings dialog with the Feed Source dropdown open, showing the available sources including dxFeed, dxFeed Prop, Rithmic RAPI, Rithmic Wss - beta, CQG and 15 min delayed | feed-source-dropdown-all-options.png]

## How to read it

- **Feed Source** is the dropdown value in Feed Settings. Note that Rithmic appears as **Rithmic RAPI** and **Rithmic Wss - beta** — there is no plain "Rithmic" entry. Pick **Rithmic RAPI**; it is the recommended source.
- **Server** is a separate field that only appears for some sources. It must match the table exactly. When Feed Source is **dxFeed Prop**, no Server field appears at all — do not look for one.
- **Agreement** tells you where the market data agreement is signed for that account type. Every live feed requires one before it will connect; see [[sign-market-data-agreement]].

## Settings reference

### Prop firms — Rithmic accounts

All Rithmic prop-firm accounts use **Feed Source = Rithmic RAPI**. Evaluation and Funded accounts connect the same way. The agreement is signed inside R Trader Pro for every Rithmic account.

| Prop firm | Server value |
|---|---|
| Apex Trader Funding | Apex |
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
| Tradeify | Tradeify [CONFIRM: exact Tradeify server spelling in the dropdown] |
| tradesea | tradesea (lowercase in the dropdown) |
| TakeProfitTrader | Rithmic Paper Trading |
| OneUpTrader | Rithmic Paper Trading |

> **Note:** If your Rithmic prop firm is not in this table and its name does not appear in the Server dropdown, select **Rithmic Paper Trading** — that is Rithmic's default server for data-feed-only and smaller prop accounts. The same value is used in R Trader Pro. See [[connect-rithmic-prop-firm]] for the full walkthrough, or [[connect-apex]] for the Apex-specific guide.

### Prop firms — dxFeed accounts

These firms issue dxFeed credentials. Use **Feed Source = dxFeed Prop** — this source has no Server field. The agreement is signed on the prop firm's own dashboard (or via their email link), never in R Trader Pro. Full walkthrough: [[connect-dxfeed-prop-firm]].

| Prop firm | Notes |
|---|---|
| Aqua Futures | Bundles a DeepCharts platform license |
| MyFundedFutures (MFF) | Bundles a DeepCharts platform license |
| Phidias | Issues dxFeed (not Rithmic, despite some older documentation) |
| YRM Prop | Bundles a DeepCharts platform license |
| BlueSky Trading | Offers both dxFeed and Rithmic accounts — check which you bought; the Rithmic variant uses Server = Rithmic Paper Trading |
| SoloClashes | — |
| Goat Funded Futures | Offers both CQG and dxFeed — only the dxFeed account works with DeepCharts |

> **Note:** At checkout these firms ask you to pick a trading platform. Picking DeepCharts or DeepDom produces the same working dxFeed credentials — either choice connects. Only an unrelated platform choice (Tradovate, NinjaTrader, Quantower and similar) breaks compatibility; in that case ask the firm's support to switch your platform selection so they can re-issue credentials.

### Futures brokers

| Broker | Account types | Rithmic Server value |
|---|---|---|
| AMP Futures | CQG or Rithmic | Rithmic 01 |
| EdgeClear | CQG or Rithmic | Rithmic 01 |
| Ironbeam | CQG or Rithmic | Rithmic 01 |
| Phillips Capital | CQG or Rithmic | Rithmic 01 |
| Optimus Futures | CQG or Rithmic | Rithmic 01 |
| Interactive Brokers (IBKR) | TWS API — execution only | — |

CQG broker accounts use **Feed Source = CQG**; see [[connect-cqg]]. CQG accounts work in exactly two cases: issued by one of these brokers, or issued by a prop firm directly from CQG. A CQG account that comes through Tradovate or NinjaTrader cannot be connected.

IBKR returns aggregated data, so it is useful for trade execution only — you must pair it with a real data feed (Rithmic or dxFeed) and route your charts to that feed in [[symbol-manage|Symbol Manage]]. See [[connect-interactive-brokers]].

### Direct data feeds (no broker or prop firm)

| Where you bought it | Feed Source | Server | Agreement signed |
|---|---|---|---|
| dxFeed from the DeepCharts website | dxFeed | Website Account | DeepCharts dashboard — Sign Market Data Contract |
| Rithmic from the DeepCharts website | Rithmic RAPI | Rithmic Paper Trading | Inside R Trader Pro |
| dxFeed from dxfeed.com | dxFeed | dxFeed Account | On the dxFeed site |
| Rithmic issued via another platform (Quantower, Sierra Chart, MotiveWave, ATAS, NinjaTrader...) | Rithmic RAPI | Rithmic Paper Trading | Inside R Trader Pro |
| Free 15-minute delayed feed (built in) | 15 min delayed | — | None required |
| DeepCharts Competition account | V-Sim | — | See [[competition-connect]] |

> **Warning:** dxFeed credentials issued through other charting platforms cannot be used with DeepCharts — only Rithmic credentials carry across that way. And when buying on dxfeed.com you must select DeepCharts as your platform at purchase, or the credentials will not be compatible.

> **Note:** Rithmic does not sell data feeds from rithmic.com. If you believe you bought "Rithmic from Rithmic", the account actually came from a broker, a prop firm, a third-party platform or the DeepCharts website — find that row above.

### Market depth by feed

Depth capability matters if you trade with the DOM or orderflow indicators.

| Feed | Level 2 depth |
|---|---|
| dxFeed (CME Group exchanges) | MBO — a DOM Type field lets you choose MBO or the lighter MBP |
| Rithmic (CME Group exchanges) | Always MBO — no MBO/MBP choice |
| dxFeed (stocks and non-CME exchanges such as Eurex) | Not MBO |
| CQG | Not MBO; full depth for ES but not full depth for NQ |

### Not supported

These providers do not issue credentials DeepCharts can use. The workaround is the same for all of them: connect any supported feed (the free 15-minute delayed feed works for a start — see [[free-delayed-data-feed]]), analyze on DeepCharts, and place your trades manually on the provider's own platform.

| Provider | Type |
|---|---|
| TopStep | Prop firm |
| Tradovate | Broker |
| TradeStation | Broker |
| Charles Schwab | Broker |
| Tastytrade | Broker |
| FundedNext Futures | Prop firm |
| FTMO | CFD prop firm |
| FP Markets | CFD broker |
| IC Markets | CFD broker |
| HankoTrade | CFD broker |
| Vantage Markets | CFD broker |

## Tips and common mistakes

- **The Server value is exact.** "Apex" is not "Paper Trading", and a firm's dedicated entry is not interchangeable with the fallback. A wrong Server is the second most common cause of a red connection dot after wrong credentials — see [[fix-bad-server]].
- **CQG must come directly from CQG.** Broker-issued CQG (AMP, EdgeClear, Ironbeam, Phillips Capital, Optimus) and prop-firm CQG issued directly by CQG both work. CQG via Tradovate or NinjaTrader never does. The same split applies to NinjaTrader accounts: NinjaTrader Rithmic credentials connect (Server = Rithmic Paper Trading); NinjaTrader CQG credentials do not.
- **Feed credentials are not website logins.** Prop firms and brokers issue separate Rithmic or dxFeed credentials, usually in a welcome email. Entering your firm's dashboard login is the number one cause of connection failures — see [[fix-username-password]].
- **Bulenox is spelled Bulenox** — users often type "Bluenox" and then fail to find the server entry.
- **You can save several connections** and switch between them from the main-bar feed selector — see [[manage-feed-connections]].

## Related articles

- [[connect-data-feed]]
- [[sign-market-data-agreement]]
- [[connect-rithmic-prop-firm]]
- [[connect-dxfeed-prop-firm]]
- [[connect-cqg]]
- [[symbol-manage]]
