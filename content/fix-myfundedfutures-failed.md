---
title: "Fix: dxfeed.myfundedfutures.com Failed"
slug: "fix-myfundedfutures-failed"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Fix the 'dxfeed.myfundedfutures.com failed: You need to sign the datafeed' error by signing the Market Data Agreement with your firm."
keywords: ["dxfeed.myfundedfutures.com failed", "You need to sign the datafeed", "myfundedfutures dxfeed error", "MFF data feed failed", "sign the datafeed", "market data agreement not signed"]
---
This connection error means the market data feed is not activated for your trading account. Before dxFeed grants data access, you must sign the Market Data Agreement with your trading firm — until then, the connection is blocked. This is not a DeepCharts software issue; activation is handled by the data provider and your trading firm.

## Symptom

When connecting your prop-firm dxFeed account, the connection fails with:

**dxfeed.myfundedfutures.com failed: You need to sign the datafeed**

[SCREENSHOT: The connection error dialog showing the full "dxfeed.myfundedfutures.com failed: You need to sign the datafeed" message | myfundedfutures-sign-datafeed-error.png]

The hostname in this example belongs to MyFundedFutures; if your account is with a different dxFeed prop firm, the hostname in the message may differ, but the meaning and the fix are the same.

Not to be confused with:

- [[fix-data-access-suspended]] — you already signed the agreement, but dxFeed suspended access after a Non-Professional status review.
- [[fix-username-password]] — the connection is rejected because the credentials are wrong.

## Most likely cause

The Market Data Agreement has not been signed (or has not been activated yet) for your trading account, so the data provider is blocking market data access.

Common triggers are a newly created account, market data that was never activated, and an unregistered Non-Professional status.

## Quick fix

1. Identify the trading firm your account belongs to. For the hostname above, that is MyFundedFutures.
2. Contact the firm's support and ask: **"How can I sign the Market Data Agreement (Non-Professional) for my DXFeed data?"**
3. Complete the agreement they send you, making sure you select **Non-Professional** status if you qualify. See [[sign-market-data-agreement]] for what the agreement covers and how the status choice works.
4. Wait for the activation confirmation. Activation can take anywhere from a few minutes to a few hours.
5. Restart DeepCharts and reconnect the data feed.

[SCREENSHOT: The feed connection showing a successful (green) status after the agreement was activated and DeepCharts was restarted | myfundedfutures-feed-connected-green.png]

## If that didn't work

### Cause: Activation is still propagating

If you signed the agreement recently, the activation may simply not have reached the data servers yet. Wait a while longer, then restart DeepCharts and try again.

### Cause: The agreement is signed but data is still inactive

Confirm with your trading firm that market data is actually active on your account and that your Non-Professional status was registered. Market data access stays blocked until the provider marks the agreement as complete.

## Still stuck

Generate a [[diagnostic-report]] and contact DeepCharts Support through [[get-help]] — include the exact error text and the name of your trading firm.

## Prevent this

Sign the Market Data Agreement immediately after creating a new account, and verify your Non-Professional status before launching the platform. The process is described in [[sign-market-data-agreement]], and the full prop-firm connection walkthrough is in [[connect-dxfeed-prop-firm]].

## Related articles

- [[sign-market-data-agreement]]
- [[connect-dxfeed-prop-firm]]
- [[connect-dxfeed]]
- [[fix-data-access-suspended]]
- [[fix-unable-to-establish-connection]]
