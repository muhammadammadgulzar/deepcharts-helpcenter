---
title: "Fix: dxFeed DATA_ACCESS_SUSPENDED"
slug: "fix-data-access-suspended"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Restore dxFeed market data access after a DATA_ACCESS_SUSPENDED error caused by a Non-Professional status review."
keywords: ["DATA_ACCESS_SUSPENDED", "Dxfeed: DATA_ACCESS_SUSPENDED", "data access suspended", "dxfeed suspended", "non-professional status", "market data suspended"]
---
The **Dxfeed: DATA_ACCESS_SUSPENDED** error means dxFeed has suspended your market data access because of a mismatch in your **Non-Professional** status. You may have signed the Market Data Agreement as Non-Professional, but dxFeed's compliance review determined that the information you submitted does not meet the Non-Professional criteria.

This is a compliance-related issue, not a software bug — the suspension decision is made by dxFeed, not by DeepCharts.

## Symptom

- Your dxFeed data feed stops connecting, or market data stops arriving.
- The error **Dxfeed: DATA_ACCESS_SUSPENDED** is shown.

[SCREENSHOT: The feed connection error showing the exact "Dxfeed: DATA_ACCESS_SUSPENDED" message text | dxfeed-data-access-suspended-error.png]

Not to be confused with:

- [[fix-myfundedfutures-failed]] — the agreement was never signed in the first place ("You need to sign the datafeed").
- [[fix-username-password]] — a plain credentials failure, unrelated to compliance status.

## Most likely cause

You signed the Market Data Agreement as Non-Professional, and dxFeed's compliance review concluded that your submitted information does not qualify as Non-Professional, so market data access was suspended.

## Quick fix

Verify your Non-Professional status with dxFeed through DeepCharts Support:

1. Contact DeepCharts Support (see [[get-help]]) and report the exact error: **DATA_ACCESS_SUSPENDED**.
2. Request the **Non-Professional Verification Form**. Support will provide a form used to confirm your Non-Professional status.
3. Complete the form accurately. The information must clearly confirm that you are a Non-Professional trader.

> **Warning:** Providing accurate and truthful information is essential. Inconsistent or incorrect answers can lead to the suspension being upheld.

4. Submit the completed form back to DeepCharts Support. Support forwards it to dxFeed for review as proof of your Non-Professional status.
5. Once dxFeed approves the form, market data access is re-enabled. Restart DeepCharts and reconnect the data feed.

## If that didn't work

### Cause: The review is still in progress

Approval time depends on dxFeed's review process. If the feed still shows the error shortly after submitting the form, the review has likely not completed yet — contact DeepCharts Support for a status update rather than resubmitting.

### Cause: dxFeed determined you do not qualify as Non-Professional

If dxFeed upholds the decision after reviewing the form, your account cannot use Non-Professional data terms. Contact DeepCharts Support to discuss the available options for your situation — the exact handling depends on dxFeed's determination.

## Still stuck

Attach a [[diagnostic-report]] when you write in — it helps support confirm the exact error state — and use the contact options in [[get-help]].

## Prevent this

When you complete the agreement described in [[sign-market-data-agreement]]:

- Fill out every field of the Market Data Agreement carefully.
- Make sure your details match the Non-Professional eligibility requirements.
- Avoid inconsistencies in your employment or trading activity information.

## Related articles

- [[sign-market-data-agreement]]
- [[connect-dxfeed]]
- [[fix-myfundedfutures-failed]]
- [[connect-dxfeed-prop-firm]]
- [[get-help]]
