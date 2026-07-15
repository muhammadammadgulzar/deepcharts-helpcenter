---
title: "Fix: Please Log In Using R Trader or R Trader Pro"
slug: "fix-log-in-using-rtrader"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Fix the Rithmic error asking you to log in with R Trader or R Trader Pro by signing the Market Data Agreement once for your account."
keywords: ["Please log in using R | Trader or R | Trader Pro and sign the agreements", "rtrader sign agreements", "rithmic agreement not signed", "r trader pro agreement", "sign market data agreement rithmic", "rithmic agreements error"]
---
This error comes from Rithmic when you try to connect a Rithmic data feed or trading account whose required Market Data Agreement has not been signed yet. Rithmic requires you to log in through R Trader or R Trader Pro (or its website) at least once and accept the agreements before any third-party platform — including DeepCharts — is allowed to connect. Your credentials can be perfectly correct and the connection will still be rejected until this is done.

## Symptom

When connecting a Rithmic feed, the connection fails with:

**Connection Failed: Please log in using R | Trader or R | Trader Pro and sign the agreements**

[SCREENSHOT: The connection error dialog showing the "Please log in using R | Trader or R | Trader Pro and sign the agreements" message | rithmic-sign-agreements-error.png]

Not to be confused with:

- [[fix-username-password]] — Rithmic rejects the credentials themselves; here the credentials are accepted but the agreement is missing.
- [[fix-rithmic-expert-not-attached]] — a different Rithmic error with its own cause.

## Most likely cause

The Rithmic Market Data Agreement for this account has never been signed — typically because you have never logged into R Trader or R Trader Pro with it.

## Quick fix

Sign the agreement through the Rithmic website — no installation needed:

1. Open the Rithmic website's trader login page. [CONFIRM: exact URL of the Rithmic web page where the Market Data Agreement is signed]
2. Log in with your Rithmic credentials (prop-firm traders: the Rithmic username and password from your firm's welcome email — not your firm's website login).
3. Review and sign the Market Data Agreement, selecting **Non-Professional** status if it applies to you.
4. Save and confirm the agreement.
5. Restart DeepCharts and reconnect the feed.

## If that didn't work

### Cause: The agreement needs to be signed in R Trader Pro

If the website route is unavailable for your account, sign through the R Trader Pro application:

1. Download R Trader Pro from https://www.rithmic.com/rtraderpro — click the **Download R | Trader Pro** button.
2. Run the installer and complete the installation with the default options.
3. Launch R Trader Pro. The login screen shows two login forms side by side — fill **both** forms with the same credentials and the same selections; this is how it is designed to work.
4. In each form, set **System** to your firm or system (Apex users select **Apex**), set **Gateway** to the location nearest to you (Chicago, Europe, Singapore...), and enter your Rithmic username and password.

[SCREENSHOT: The R Trader Pro login screen showing the two side-by-side login forms, both filled with System, Gateway, Username and Password | rtrader-pro-dual-login.png]

5. Click **Login**.
6. When prompted, read and accept the Market Data Agreement, selecting **Non-Professional** status if it applies to you.

[SCREENSHOT: The Market Data Agreement prompt inside R Trader Pro with the accept action visible | rtrader-pro-agreement-prompt.png]

7. Close R Trader Pro — the agreement is now recorded on Rithmic's side.
8. Open DeepCharts and reconnect the feed.

> **Tip:** If you closed R Trader Pro before the agreement prompt appeared, log back in — the prompt reappears until the agreement is accepted.

> **Note:** Do not confuse the **System** field with the **Server** field — both can show similar values (such as Apex), but they are different fields.

### Cause: You cannot log into R Trader Pro at all

If R Trader Pro also rejects your login, the credentials are the problem, not the agreement — most often a prop-firm website login was used instead of the separate Rithmic credentials. See [[fix-username-password]].

## Still stuck

Generate a [[diagnostic-report]], then contact the team through [[get-help]] — mention whether you were able to log into R Trader Pro and whether the agreement prompt ever appeared.

## Prevent this

The agreement only needs to be signed once per account — do it before the first connection attempt. See [[sign-market-data-agreement]] for the general process, [[rtrader-pro-plugin]] for working with R Trader Pro, and [[connect-rithmic]] for the full connection setup.

## Related articles

- [[sign-market-data-agreement]]
- [[rtrader-pro-plugin]]
- [[connect-rithmic]]
- [[connect-apex]]
- [[connect-rithmic-prop-firm]]
- [[fix-username-password]]
