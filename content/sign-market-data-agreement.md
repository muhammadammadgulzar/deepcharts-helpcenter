---
title: "Sign Your Market Data Agreement"
slug: "sign-market-data-agreement"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Where and how to sign the market data agreement for each account type — required before any live feed will connect."
keywords: ["market data agreement", "sign agreement", "sign market data contract", "r trader pro", "rtrader", "agreement not signed", "credentials hidden", "connection red"]
---

By the end you will have the market data agreement signed for your account, which is the precondition for any live feed connection. Exchanges require every data subscriber to accept a market data agreement, and until yours is signed the connection dot in DeepCharts stays red — even with perfectly correct credentials. Where you sign depends entirely on where your account comes from, so find your case below.

## Before you start

- Know where your feed account comes from (DeepCharts website, prop firm, broker, dxfeed.com) — if unsure, check [[compatibility-guide]].
- Your feed credentials at hand for the Rithmic path (the Rithmic username and password from your provider's welcome email — not the provider's website login).

## Steps

1. Find the section below that matches where you got your account, and follow it. The rules in one line: dxFeed bought on the DeepCharts website is signed in the DeepCharts dashboard; every Rithmic account — no matter who issued it — is signed inside R Trader Pro; dxFeed bought on dxfeed.com is signed on the dxFeed site; prop-firm dxFeed is signed on the prop firm's dashboard.

### If you bought dxFeed from the DeepCharts website

1. Log in to your account on the DeepCharts website and open the **Subscriptions** page.
2. Find your dxFeed subscription and click **Sign Market Data Contract** next to it.
3. Read and accept the agreement. Your feed username and password remain hidden in the dashboard until the agreement is signed — once you sign, they become visible. Record them for [[connect-dxfeed|the connection step]].

[SCREENSHOT: DeepCharts dashboard Subscriptions page with a dxFeed subscription row and the Sign Market Data Contract button highlighted | dashboard-sign-market-data-contract.png]

### If you have any Rithmic account (prop firm, broker, or website purchase)

All Rithmic agreements are signed inside R Trader Pro — Rithmic's own application — because that is how Rithmic delivers its agreement flow. This applies equally to prop-firm accounts (Apex, TradeFundrr and the rest), broker accounts (AMP, EdgeClear...), Rithmic subscriptions bought on the DeepCharts website, and Rithmic credentials issued via a third-party platform.

1. If you do not have R Trader Pro yet, download it from https://www.rithmic.com/rtraderpro by clicking the **Download R | Trader Pro** button, then install it with default options.
2. Open **R Trader Pro**. The login screen shows two login forms side by side — this is normal. Fill in both forms with the same credentials and the same selections.
3. In each form set:
   - **System** — your provider's server name: the prop firm's entry (for example Apex), **Rithmic 01** for broker accounts, or **Rithmic Paper Trading** for website-bought feeds, third-party-issued credentials, and any prop firm whose name is not in the list. The per-provider values are in [[compatibility-guide]].
   - **Gateway** — the location nearest to you (Chicago, Europe, Singapore...). A distant gateway works but adds latency.
   - **Username / Password** — the Rithmic credentials from your provider's welcome email.

[SCREENSHOT: R Trader Pro login screen showing the two side-by-side login forms, both filled, with the System dropdown open on the prop-firm server list | rtrader-pro-two-login-forms.png]

4. Click **Login**. R Trader Pro prompts you with the market data agreement — read and accept it.

[SCREENSHOT: R Trader Pro market data agreement prompt shown after login, with the accept action visible | rtrader-pro-agreement-prompt.png]

5. Close R Trader Pro. The agreement is now recorded on Rithmic's side and you can connect in DeepCharts.

> **Tip:** While you are in R Trader Pro for the first time, open **Window → Preferences → Performance** and drag both sliders — **Quotes** and **Order Book** — to maximum, then click **Apply** and **OK**. This removes Rithmic's data-receive limit, which otherwise can delay your charts during high-volume market periods.

> **Note:** The **System** field and the **Server** field are different fields, and both can contain values like "Apex" and "Paper Trading". For signing the agreement, the value described above goes in the System field. If you closed R Trader Pro before the agreement prompt appeared, log back in — the prompt reappears.

### If you bought dxFeed from dxfeed.com

Sign in on dxfeed.com, find your subscription, and accept the market data agreement there. Make sure DeepCharts is your selected platform — credentials issued for a different platform will not connect (see [[compatibility-guide]]).

### If you have a prop-firm dxFeed account (MFF, Aqua, Goat and similar)

1. Log in to your prop firm's dashboard and look for a sign-market-data-agreement button or link.
2. If it is not on the dashboard, check the email the firm sent when your account was issued.
3. If you still cannot find it, contact the prop firm's support — only they can resend the signing link.

### If you use the free delayed feed or CQG

No agreement step is needed here. The built-in [[free-delayed-data-feed|15-minute delayed feed]] requires no agreement at all, and CQG accounts have no separate agreement step in this flow — you can go straight to [[connect-cqg|connecting]].

## Verify it worked

- **DeepCharts website (dxFeed):** your username and password are now visible on the Subscriptions page.
- **Rithmic:** logging in to R Trader Pro no longer prompts you with the agreement, and your DeepCharts connection can turn green.
- **All cases:** the real test is [[connect-data-feed|connecting the feed]] — an unsigned agreement is one of the main reasons a connection stays red.

## If something went wrong

| Symptom | See |
|---|---|
| Connection stays red although credentials are correct | The agreement is likely unsigned for your account type — redo your section above |
| Rithmic error asking you to log in using R Trader | [[fix-log-in-using-rtrader]] |
| dxFeed error DATA_ACCESS_SUSPENDED | [[fix-data-access-suspended]] |
| Credentials rejected in R Trader Pro | You may be using the provider's website login — see [[fix-username-password]] |

## Related articles

- [[connect-data-feed]]
- [[compatibility-guide]]
- [[connect-dxfeed]]
- [[connect-rithmic]]
- [[connect-rithmic-prop-firm]]
- [[buy-data-feed]]
