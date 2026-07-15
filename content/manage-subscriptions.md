---
title: "Manage Your Subscriptions and Billing"
slug: "manage-subscriptions"
category: "Account & Billing"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "View your DeepCharts platform license and data feed subscriptions on my.deepcharts.com, add or change market data products, stop auto-renewal, and update billing details."
keywords: ["cancel subscription", "cancel my subscription", "stop auto renewal", "auto-renew", "billing", "renewal date", "pending cancel", "add exchange", "change market data products", "refund", "cancel data feed", "subscription expired", "charged again", "manage subscription"]
---
By the end you will know exactly what you are subscribed to, when each subscription renews, and how to add data products, stop a renewal, or update your billing details — all from the my.deepcharts.com dashboard.

Two different things live under "subscriptions", and they behave differently: your **platform license** (DeepCharts itself) and your **data feed subscriptions** (the market data that powers your charts). Platform licenses do not renew automatically — when the term ends you re-purchase manually. Data feed subscriptions bought on the DeepCharts website do renew automatically until you cancel them. Most billing confusion comes from mixing these two up.

## Before you start

- A DeepCharts account at my.deepcharts.com — the account you used when purchasing (see [[install-deepcharts]])
- If your license or feed came from a **prop firm**, it is managed on the prop firm's dashboard, not here — see [[compatibility-guide]] for how prop-firm accounts work

## Steps

1. Log in at my.deepcharts.com.

2. Open the **Subscriptions** page. It lists everything your account owns: your DeepCharts platform license, any courses or bootcamps, and a **Data Feeds** section with a card for each feed provider (dxFeed and Rithmic).

[SCREENSHOT: my.deepcharts.com Subscriptions page after login showing the platform license entry and the Data Feeds section with the dxFeed and Rithmic cards | dashboard-subscriptions-overview.png]

3. Review each entry. Each data feed card shows your feed **username and password** (the credentials you enter in DeepCharts — see [[connect-data-feed]]), an **Add Exchange** button, and the subscription status controls.

[SCREENSHOT: A data feed card on the Subscriptions page with the username/password fields (values redacted), the Add Exchange button and the subscription status control all visible | dashboard-feed-card-controls.png]

> **Note:** The dashboard interface is currently available in English and Italian — the language switch is at the bottom of the page.

### If you want to add or change market data products

1. On the feed card, click **Add Exchange**. A list of purchasable data products opens — each exchange is offered as **Top of Book** or **Market Depth**, and a CME bundle is available. Current prices are shown live on that page, so it is always the authoritative place to check what a product costs.

[SCREENSHOT: The Add Exchange page opened from a feed card, showing the list of exchanges with Top of Book and Market Depth options and the CME bundle entry | dashboard-add-exchange-list.png]

2. Select the products you need and complete the payment — [[buy-data-feed]] explains how to choose between Top of Book and Market Depth.

3. Sign the market data contract again when prompted. The agreement covers the exact set of data products you subscribe to, so changing your products means re-signing it — see [[sign-market-data-agreement]]. For dxFeed this happens right on the dashboard; Rithmic agreements are always signed inside R Trader Pro instead.

### If you want to cancel a data feed

1. On the feed card, set the subscription status to **Pending Cancel**.

[SCREENSHOT: A data feed card with the status control open and Pending Cancel selected | dashboard-feed-pending-cancel.png]

2. Understand what the two statuses mean:

| Status | Meaning |
|---|---|
| **Active** | The subscription renews and charges again on the next billing cycle |
| **Pending Cancel** | Cancellation is recorded; the feed stays usable until the end of the already-paid period, then ends with no further charge |

3. Know when the next charge lands, so the timing makes sense:
   - **dxFeed** charges on the same day of the next month, counted from your purchase date.
   - **Rithmic** bills by calendar month — the charge lands at the end of each calendar month regardless of your purchase date. Buying on the 20th means the next charge arrives at month-end, before 30 days have passed. This is Rithmic's schedule, not something DeepCharts controls.

### If you want to cancel your platform subscription

Platform licenses do not auto-renew, so there is no cancellation switch to flip. When the license term ends, nothing further is charged — you simply re-purchase if you want to continue. Your license term starts on the purchase date, independent of when you first installed the platform.

> **Warning:** Data feed subscriptions renew independently of the platform license. If you are stopping altogether, also set your data feeds to **Pending Cancel** — otherwise the feed keeps charging even though the platform license has lapsed.

### If you want to update your billing details

1. On the Subscriptions page, click **Edit data**. This form holds the billing information that is sent to the data feed provider to run your feed account: name, phone, address, country, postal code, date of birth, and the **Company** and **Professional user** checkboxes.

[SCREENSHOT: The Edit data form on the Subscriptions page showing the personal/billing fields and the Professional user checkbox | dashboard-edit-data-form.png]

> **Warning:** Leave **Professional user** unchecked unless you genuinely qualify as a professional (you trade other people's funds, work as a trader for an institution, or represent an investment firm). Professional classification makes the same market data substantially more expensive, and switching back takes effect only after the current feed period expires.

### If you want to request a refund

- **Data feeds:** dxFeed and Rithmic are third-party providers and feed charges cannot be refunded. What you can do is stop all future charges by setting the feed to **Pending Cancel**.
- **Platform license and everything else:** review the refund policy [CONFIRM: refund policy link] and contact support through [[get-help]] with the reason for your request.

## Verify it worked

The Subscriptions page reflects every change immediately: a cancelled feed shows **Pending Cancel** on its card (and no charge arrives after the paid period ends), newly added data products appear on the feed card once the contract is re-signed, and updated billing details show in the **Edit data** form.

## If something went wrong

| Symptom | What to do |
|---|---|
| Feed username/password not visible after adding products | The market data contract is not fully signed — complete it, see [[sign-market-data-agreement]] |
| Platform stopped activating after the term ended | The license expired — re-purchase, then activate again; see [[license-issues]] |
| Charged for Rithmic before 30 days passed | Normal — Rithmic bills at the end of each calendar month, not date-to-date |
| Feed cancelled but you want to keep charting | The built-in [[free-delayed-data-feed]] works without a subscription |
| A charge you do not recognize or a billing dispute | Contact support with the invoice details — [[get-help]] |

## Related articles

- [[buy-data-feed]]
- [[sign-market-data-agreement]]
- [[license-issues]]
- [[move-to-new-computer]]
- [[free-delayed-data-feed]]
- [[get-help]]
