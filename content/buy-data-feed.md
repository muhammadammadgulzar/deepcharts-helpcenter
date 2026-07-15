---
title: "How to Buy a Data Feed and Get Your Credentials"
slug: "buy-data-feed"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Buy a data feed subscription on my.deepcharts.com, sign the market data contract, and collect the username and password DeepCharts uses to connect."
keywords: ["buy data feed", "buying data feed", "data feed subscription", "getting credential", "data feed username and password", "sign market data contract", "purchase market data", "add data feed subscription"]
---
By the end you will have an active data feed subscription and the username and password DeepCharts needs to connect to live market data.

DeepCharts draws its charts from a real-time market data feed. If you do not already have feed credentials from a broker or a prop firm, you can buy a feed subscription directly from your account dashboard at my.deepcharts.com — the credentials are issued right there once the market data contract is signed.

## Before you start

- A DeepCharts account at my.deepcharts.com — the same account that holds your license (see [[install-deepcharts]])
- A decision on which feed you want — [[compatibility-guide]] compares the supported options
- A payment card
- A few minutes to complete the market data contract (it asks for personal details and your subscriber status)

> **Note:** If your account comes from a **prop firm**, do not buy a feed here — your feed credentials come from the prop firm's own dashboard. See [[connect-rithmic-prop-firm]] or [[connect-dxfeed-prop-firm]] instead.

> **Tip:** Only exploring the platform for now? You do not need to buy anything — the built-in [[free-delayed-data-feed|free 15-minute delayed feed]] works without credentials or a contract.

## Steps

1. Log in to your dashboard at my.deepcharts.com.

2. Click **Data Feed** in the left menu.

[SCREENSHOT: my.deepcharts.com dashboard after login with the left menu visible and the Data Feed entry highlighted | dashboard-data-feed-menu.png]

3. Select **Add data feed subscription**.

[SCREENSHOT: The Data Feed section showing the Add data feed subscription button highlighted | dashboard-add-data-feed-subscription.png]

4. Choose the data feed you want and proceed with the order. During the order you pick the specific market data products — which exchanges you need (CME, COMEX, and so on) and the data level (top of book versus market depth). Choose market depth if you plan to use the DOM and orderflow tools; top of book is enough for plain candlestick charting.

[SCREENSHOT: The data feed order page with the feed selected and the list of market data products (exchanges, top of book / market depth options) visible | dashboard-feed-product-selection.png]

5. Enter your card information and complete the payment.

6. After the payment succeeds, return to the **Data Feed** section of the dashboard.

7. Sign the market data contract. The contract asks you to:
   - Select your subscription status. Most individual traders qualify as **Non-Professional** — the exchanges define the exact criteria, so read the descriptions on the form carefully before choosing.
   - Enter your personal information.

[SCREENSHOT: The market data contract signing flow on the dashboard with the Non-Professional subscription status option visible | dashboard-market-data-contract.png]

8. When the contract is complete, go back to the **Data Feed** section. Your feed **username and password** are now displayed there — these are the credentials you enter in DeepCharts Feed Settings.

[SCREENSHOT: The Data Feed section showing an active subscription with the username and password fields visible (values redacted) | dashboard-feed-credentials.png]

### If you bought a Rithmic feed

Rithmic delivers its credentials through its own system, so the market data agreement for a Rithmic subscription is completed in **R Trader Pro** rather than on the dashboard. Follow [[sign-market-data-agreement]] first, then connect using [[connect-rithmic]].

### If you bought your feed on dxfeed.com instead

Buying directly from dxfeed.com also works, but you must select **DeepChart** as the platform during checkout — otherwise the credentials will not be compatible with DeepCharts. See [[connect-dxfeed]] for the connection steps.

## Verify it worked

In the **Data Feed** section of my.deepcharts.com your subscription shows as active and a username and password are visible. That is everything DeepCharts needs — the next step is entering them in Feed Settings, covered in [[connect-data-feed]].

## If something went wrong

| Symptom | What to do |
|---|---|
| No username/password shown after payment | The market data contract is not fully signed — reopen the Data Feed section and complete every contract step |
| Credentials rejected when connecting | [[fix-username-password]] |
| Not sure this feed covers your market or broker | [[compatibility-guide]] |
| You have a prop-firm account | Get credentials from the prop firm's dashboard — [[connect-rithmic-prop-firm]] or [[connect-dxfeed-prop-firm]] |

## Related articles

- [[connect-data-feed]]
- [[connect-dxfeed]]
- [[connect-rithmic]]
- [[sign-market-data-agreement]]
- [[free-delayed-data-feed]]
- [[compatibility-guide]]
