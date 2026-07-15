---
title: "Fix: Connection Failed — Bad Server"
slug: "fix-bad-server"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Resolve the dxFeed 'Bad Server' connection error caused by simultaneous logins on multiple platforms or an unsigned market data agreement."
keywords: ["Bad Server", "Connection Failed: Bad Server", "dxfeed bad server", "dxfeed only one connection", "dxfeed logged in elsewhere", "market data agreement not signed dxfeed"]
---
The "Bad Server" error originates from dxFeed, not from DeepCharts itself. It signals a market data authorization or account usage restriction on dxFeed's side — in practice, either your dxFeed account is already in use on another platform, or its Market Data Agreement has not been signed yet.

## Symptom

When connecting a dxFeed data feed, the connection fails with:

**Connection Failed: Bad Server**

[SCREENSHOT: The connection error dialog showing the "Bad Server" message after a failed dxFeed connection attempt | dxfeed-bad-server-error.png]

Not to be confused with:

- [[fix-username-password]] — a Rithmic credentials error, unrelated to dxFeed.
- [[fix-unable-to-establish-connection]] — a network-level failure, typically VPN or system-component related.
- [[fix-data-access-suspended]] — a different dxFeed authorization error with its own message.

## Most likely cause

The same dxFeed account is logged in on another platform at the same time — dxFeed enforces only one active connection per account, and a second login is rejected.

## Quick fix

1. Close any other trading or charting platform that is logged in with the same dxFeed credentials — including a session left running on another computer, if any.
2. Make sure the account is now in use on one platform only.
3. Restart DeepCharts.
4. Try connecting the feed again.

> **Note:** The single-active-session limitation applies universally — you cannot run the same dxFeed account in DeepCharts and another platform simultaneously.

## If that didn't work

### Cause: Market Data Agreement not signed

dxFeed blocks access until the Market Data Agreement for the account has been signed. How you sign it depends on where the account came from:

**If you purchased the data feed directly:**

1. Log into your data provider's portal.
2. Sign the Market Data Agreement, selecting **Non-Professional** status when applicable.

[SCREENSHOT: The data provider portal page showing the Market Data Agreement with the Non-Professional status option selected | dxfeed-agreement-non-professional.png]

The full walkthrough is in [[sign-market-data-agreement]].

**If the account came from a broker or prop firm:**

1. Contact your broker or prop firm.
2. Ask them how to activate or sign the Market Data Agreement for your account — the exact path varies by firm.

After the agreement is signed, restart DeepCharts and reconnect the data feed.

## Still stuck

Generate a [[diagnostic-report]] so support can see the exact rejection, then contact the team through [[get-help]] — mention which provider or firm issued the dxFeed account and whether the agreement is signed.

## Prevent this

- Complete the Market Data Agreement immediately after the account is set up — see [[sign-market-data-agreement]].
- Run the dxFeed account on one platform at a time.
- When in doubt about agreement status, verify it with your broker or provider before connecting.
- Set the feed up by following [[connect-dxfeed]] (or [[connect-dxfeed-prop-firm]] for prop-firm accounts).

## Related articles

- [[connect-dxfeed]]
- [[sign-market-data-agreement]]
- [[connect-dxfeed-prop-firm]]
- [[fix-data-access-suspended]]
- [[fix-myfundedfutures-failed]]
- [[fix-dxfeed-dll]]
