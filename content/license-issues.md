---
title: "Fix: License and Activation Issues"
slug: "license-issues"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Fix Invalid License and license validation errors in DeepCharts — credentials, expired subscriptions, multiple devices and hosts-file blocks."
keywords: ["invalid license", "license key not working", "license validation", "activation failed", "license code", "can't activate", "license error", "expired subscription"]
---

DeepCharts activates with two values: the email registered at my.deepcharts.com and the alphanumeric license key shown in that account. When activation fails — an "Invalid License" message, a rejected login, or validation errors during a session — the cause is almost always one of four things: a typo in the credentials, an expired subscription, the platform running on more than one device, or (rarely) a system-level block on the license server connection. Work through them in that order.

> **Note:** If you bought your license through a prop firm, both the installer and the license details come from the prop firm's dashboard, not from my.deepcharts.com. Make sure you are using the credentials from the right place.

## Symptom

- The **License Key** window rejects your email and license key at startup, typically with an "Invalid License" error.
- DeepCharts asks for the license again after previously working.
- License validation errors appear while the platform is running.

[SCREENSHOT: DeepCharts License Key activation window with the E-mail and License fields visible and an Invalid License error state shown | license-key-invalid-license.png]

## Most likely cause

Stray whitespace in the pasted credentials. Copy-pasting the email or license key often picks up a leading or trailing space, and the license check rejects it.

## Quick fix

1. Log in to your my.deepcharts.com account (or your prop firm's dashboard) and locate your exact registered email and license key.

[SCREENSHOT: my.deepcharts.com account dashboard with the license key section visible, key partially blurred | mydeepcharts-license-key.png]

2. Copy each value and paste it into the **License Key** window. Copy-paste rather than typing by hand — but check that no space was carried along at the start or end of either field.
3. Click **Login** and wait while the key is verified.

> **Tip:** If pasting keeps failing, paste the value into a plain text editor first, delete any surrounding spaces, then copy it again.

## If that didn't work

### Cause: Your subscription has expired

License validation fails when the subscription behind it is no longer active.

1. Log in to my.deepcharts.com and check that your DeepCharts subscription is still valid.
2. If it has expired, renew it, then activate again. See [[manage-subscriptions]].

### Cause: DeepCharts is running on more than one device

The platform should only run on one device at a time. Running it on several machines simultaneously with the same license may cause license validation issues.

1. Close DeepCharts on every other computer where it might still be running (including machines left on at another location).
2. Activate again on the machine you want to use.

Moving permanently to a new machine? Follow [[move-to-new-computer]].

### Cause: The hosts file is blocking the license server

The Windows hosts file (`C:\Windows\System32\drivers\etc\hosts`) associates domain names with IP addresses. An entry added by security software, an ad blocker, or a previous manual edit can prevent DeepCharts from reaching the license server, so activation fails even with correct credentials.

> **Warning:** The hosts file is a system file — an incorrect edit can break other applications' connectivity. Review documentation for editing the hosts file on your Windows version before changing it, or ask support to guide you.

1. Open the hosts file and look for any entry that references a DeepCharts domain.
2. Remove or comment out such entries, save the file, and try activating again.

## Still stuck

Generate a [[diagnostic-report]] — it captures network connectivity information that helps support see whether the license server is reachable from your machine — then contact support through [[get-help]] with the exact error text and a screenshot of the License Key window.

## Prevent this

- Activate by following [[install-deepcharts]], which walks through the license window step by step.
- Keep DeepCharts installed and running on one machine at a time; use [[move-to-new-computer]] when switching hardware.
- Keep your subscription renewal date in view — see [[manage-subscriptions]].

## Related articles

- [[install-deepcharts]]
- [[manage-subscriptions]]
- [[move-to-new-computer]]
- [[diagnostic-report]]
- [[get-help]]
