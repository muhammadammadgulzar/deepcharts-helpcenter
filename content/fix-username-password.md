---
title: "Fix: Connection Failed — Check Username and Password"
slug: "fix-username-password"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Fix the Rithmic 'check username and password' connection error by using the correct Rithmic credentials and the right server for your account type."
keywords: ["Please make sure you entered the username and password correctly", "rithmic login failed", "rithmic wrong password", "rithmic credentials", "apex login not working in deepcharts", "invalid username or password", "rithmic gateway"]
---
This error appears when DeepCharts cannot authenticate your Rithmic credentials. It usually means one of two things: the login details themselves are wrong (very often because a prop-firm website login was used instead of the separate Rithmic credentials), or the wrong server was selected for your account type.

## Symptom

When connecting a Rithmic data feed or trading account, the connection fails with:

**Connection failed: Please make sure you entered the username and password correctly.**

[SCREENSHOT: The connection error dialog showing the "Please make sure you entered the username and password correctly" message after a failed Rithmic connection | rithmic-username-password-error.png]

Not to be confused with:

- [[fix-log-in-using-rtrader]] — Rithmic accepts your credentials but requires you to sign the market data agreements first.
- [[fix-bad-server]] — a dxFeed authorization error, unrelated to Rithmic.
- [[fix-unable-to-establish-connection]] — a network-level failure before authentication even happens.

## Most likely cause

The username or password is incorrect — most commonly because prop-firm traders enter their firm's website login instead of the separate Rithmic credentials the firm issued.

## Quick fix

1. Locate your actual Rithmic credentials. Prop-firm traders (Apex and others): your firm issues two sets of credentials — the website login for the firm's dashboard, and separate Rithmic credentials for the data feed. DeepCharts needs the **Rithmic** ones, which arrive in the firm's welcome email. Search your inbox for "Rithmic" if you are unsure.
2. Copy and paste the username and password rather than typing them manually.
3. Make sure no extra spaces were copied before or after either value — a trailing space is invisible but fails authentication.
4. In **Feed Settings**, edit the connection, re-enter both fields, save, and try connecting again. The interactive mock below shows the form — pick **Rithmic** as the source to see the exact fields you need to fill.

[WIDGET: feed-navigator]

## If that didn't work

### Cause: Wrong server selected for your account type

Rithmic rejects logins sent to the wrong gateway. In **Feed Settings**, edit the connection and check the **Server** field (Rithmic documentation calls this the gateway) against your account type:

| Your account type | Server to select |
|---|---|
| Live broker account (funded at a broker) | Your broker's live server entry |
| Rithmic data feed only (no broker account) | **Paper Trading** |
| Prop-firm account | Your firm's name if listed (for example **Apex**) — otherwise **Paper Trading** |

[SCREENSHOT: Feed Settings with the Server dropdown open, showing entries such as Apex and Paper Trading, with the correct one highlighted | feed-settings-server-dropdown.png]

> **Note:** The separate **Gateway** field selects a regional location (Chicago, Europe, Singapore...). A distant location adds latency but is not what causes this error — focus on the **Server** field.

Save the change and reconnect. The server table for specific prop firms is in [[connect-rithmic-prop-firm]].

### Cause: The credentials themselves are wrong or inactive

If you can rule out typos and the server is correct, verify the credentials outside DeepCharts: try logging into R Trader Pro with the same username and password. If Rithmic rejects them there too, contact your broker or prop firm to reset or reissue the credentials — DeepCharts cannot fix credentials Rithmic itself does not accept.

> **Tip:** Final checklist before reconnecting — the username matches the welcome email exactly, the password was pasted with no extra spaces, the **Server** matches your account type, and the same credentials work in R Trader Pro.

## Still stuck

Generate a [[diagnostic-report]] (never share your password itself), then contact the team through [[get-help]] with your username and a screenshot of the Feed Settings form.

## Prevent this

Set up the connection with the correct credentials and server from the start: follow [[connect-rithmic]], the prop-firm server table in [[connect-rithmic-prop-firm]], or the Apex-specific walkthrough in [[connect-apex]].

## Related articles

- [[connect-rithmic]]
- [[connect-rithmic-prop-firm]]
- [[connect-apex]]
- [[fix-log-in-using-rtrader]]
- [[rtrader-pro-plugin]]
- [[fix-bad-server]]
