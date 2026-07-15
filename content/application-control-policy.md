---
title: "Fix: Application Control Policy Blocks DeepCharts"
slug: "application-control-policy"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Fix the 'An Application Control policy has blocked this file' error by turning off Windows Smart App Control so DeepCharts and its data feeds can run."
keywords: ["application control policy", "an application control policy has blocked this file", "smart app control", "windows security blocked", "app blocked", "rithmic blocked", "dxfeed blocked", "app and browser control"]
---

Windows stops DeepCharts — or one of its data feed connections — with the message **"An Application Control policy has blocked this file."** This is almost always Smart App Control, a Windows Security feature that blocks applications Microsoft's service does not recognize, and it can interfere with legitimate trading software.

## Symptom

- Windows shows the error **"An Application Control policy has blocked this file"** when you launch DeepCharts or when the platform tries to connect a data feed such as Rithmic or dxFeed.
- The blocked file may be the DeepCharts application itself or a feed component it loads at connection time.

[SCREENSHOT: The Windows notification or dialog reading "An Application Control policy has blocked this file", shown while launching DeepCharts | application-control-policy-blocked-message.png]

Not to be confused with:

- [[installation-problems]] — the installer itself fails without this specific Windows message.
- [[fix-unable-to-establish-connection]] — the feed fails to connect for network or credential reasons, with no Windows block message.

## Most likely cause

**Smart App Control** — a Windows Security feature that blocks applications it considers unknown — is set to **On** or **Evaluation** and is blocking a DeepCharts file.

## Quick fix

Turn Smart App Control off:

1. Type **Smart App Control** into the Windows search bar and press **Enter**.

[SCREENSHOT: Windows search bar with "Smart App Control" typed in and the Smart App Control settings result highlighted | windows-search-smart-app-control.png]

2. The Smart App Control settings page opens (it lives inside Windows Security under **App & browser control**). The current status shows as **On**, **Evaluation**, or **Off**.

[SCREENSHOT: Windows Security Smart App Control settings page showing the three status radio buttons On, Evaluation and Off | smart-app-control-status-page.png]

3. Select the **Off** option and confirm any dialog prompts Windows shows.

> **Warning:** On current Windows versions, once Smart App Control is turned off it cannot be switched back on without resetting or reinstalling Windows. If that trade-off matters to you, be aware of it before confirming — but with it enabled, DeepCharts and feed components may keep getting blocked.

4. Close DeepCharts completely, wait several seconds, then launch it again. The application and its data feed connections should now work.

[SCREENSHOT: Smart App Control settings page with the Off option selected and confirmed | smart-app-control-off-selected.png]

## If that didn't work

### Cause: A managed or third-party application control policy

If Smart App Control was already **Off** — or the option is missing — and you still see the block message, another application control layer may be responsible:

- On a company-managed PC, an administrator-level application control policy can block unrecognized software. Ask your IT administrator to allow DeepCharts.
- Third-party security suites can enforce their own application control. Check your security software's blocked-applications list and add an exception for DeepCharts. See also [[installation-problems]] for general antivirus interference.

## Still stuck

Take a screenshot of the exact block message, generate a [[diagnostic-report]] if DeepCharts launches, and contact support through [[get-help]].

## Prevent this

- Check the Smart App Control status before installing DeepCharts on a new machine — see [[install-deepcharts]] and [[system-requirements]].
- After turning it off, no further action is needed; the setting persists.

## Related articles

- [[installation-problems]]
- [[install-deepcharts]]
- [[system-requirements]]
- [[fix-unable-to-establish-connection]]
- [[get-help]]
