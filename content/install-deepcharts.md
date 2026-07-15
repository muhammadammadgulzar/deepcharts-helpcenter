---
title: "How to Install DeepCharts and Activate Your License"
slug: "install-deepcharts"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Download the installer, install DeepCharts, activate your license key and complete the first-run startup wizard."
keywords: ["install", "installation", "setup", "license key", "activation", "invalid license", "DeepchartsInstaller", "download deepcharts", "first configuration"]
---
By the end you will have DeepCharts installed, your license activated, and the platform ready to connect a data feed.

## Before you start

- Confirm your machine meets the [[system-requirements]].
- Have your my.deepcharts.com account email and password ready — the installer download and your license key both live in that dashboard.
- Know where your license comes from: bought directly, it is in your my.deepcharts.com account; bought through a prop firm, both the installer and the license come from the **prop firm's dashboard** instead.
- Optional: data feed credentials if you already have them ([[buy-data-feed]]). If not, the free delayed feed works with no credentials — see [[free-delayed-data-feed]].

## Steps

1. Log in to your account at my.deepcharts.com with your email and password.

[SCREENSHOT: my.deepcharts.com dashboard after login with the DeepCharts installer download area visible | dashboard-installer-download.png]

2. Download the **DeepchartsInstaller.zip** file.

3. Extract the downloaded archive (right-click → **Extract All** in Windows Explorer).

4. Temporarily disable your antivirus software.

> **Warning:** This is the most commonly skipped step and the number-one cause of failed installations — antivirus products can quarantine installer components mid-install. Re-enable your antivirus as soon as installation finishes.

5. Run **DeepchartsInstaller.exe**.

6. Accept the installation terms and conditions, then click **Install**.

[SCREENSHOT: DeepCharts installer window on the terms and conditions step with the Install button visible | installer-terms-install.png]

7. Reboot your PC if the installer prompts you to.

8. Launch DeepCharts from the Desktop shortcut. A splash screen appears ("Starting Application", then "Loading Indicators") — the app version is shown in the bottom-right corner of the splash, which is useful to know when contacting support.

[SCREENSHOT: DeepCharts splash screen showing Starting Application text and the version number in the bottom-right corner | splash-screen-version.png]

9. In the **License Key** window, enter:
   - **E-mail** — the email registered at my.deepcharts.com
   - **License** — the alphanumeric license key shown in your my.deepcharts.com account

   Then click **Login**. The button shows a short countdown while the key is verified.

[SCREENSHOT: License Key activation window with the E-mail and License fields filled in, the Login button, and the Verifying License Key footer visible | license-key-dialog.png]

> **Tip:** Paste the email and key with no leading or trailing spaces. Stray whitespace from copy-paste is by far the most common cause of an "Invalid License" error.

10. Complete the three-step **Startup Wizard** that runs on first launch:
    - **Datafeed** — choose between "I want to use 15 minutes delayed data powered by dxFeed for the moment" and "I have a datafeed and I want to configure and connect it".
    - **Symbol Manage** — review the exchange-to-feed mapping table (the wizard pre-maps the main exchanges for you). This is the same window as **Options → Symbol Manage** — see [[symbol-manage]].
    - **Customize experience** — pick a **Theme** and an **Alert sound profile**, then click **Done**.

[SCREENSHOT: Startup Wizard datafeed step showing the two radio options - 15 minutes delayed data powered by dxFeed, and I have a datafeed and I want to configure and connect it | startup-wizard-feed-choice.png]

### If you do not have data feed credentials yet

Choose the delayed-data option in the wizard — it needs no username, password or market data agreement. Full walkthrough: [[free-delayed-data-feed]].

### If you already have feed credentials

Choose "I have a datafeed and I want to configure and connect it" and enter your connection details: a **Name** for the connection, the **Feed Source** (your provider), and your **Username** and **Password** from the data provider. Save and wait for the connection indicator to turn green. Details per provider: [[connect-data-feed]] and [[compatibility-guide]].

### If your license came from a prop firm

Download the setup file from your prop firm's dashboard — not from my.deepcharts.com — and activate with the license details the prop firm issued you.

### If you are updating an existing installation

Download the latest installer from the dashboard and run it — no need to uninstall first. It updates the existing installation in place and keeps your settings.

> **Note:** The BETA and STABLE versions cannot be installed together on one PC — it is one or the other.

## Verify it worked

- DeepCharts opens to the main bar without asking for the license again.
- The **Feed** selector on the main bar shows your connection name with a **green** status dot (if you configured a feed).
- **New → Price Chart** opens the instrument picker and a chart builds — see [[first-chart]].

[SCREENSHOT: Main bar after successful setup with the Feed selector showing a connection name and green status dot | main-bar-green-dot.png]

## If something went wrong

| Symptom | Where to go |
|---|---|
| Installer won't run, disappears, or the install fails | Antivirus interference is the usual cause — see [[installation-problems]] |
| "Installation Setup Failed" message | [[installation-setup-failed]] |
| Company policy blocks the app from running | [[application-control-policy]] |
| "Invalid License" at activation | Re-paste email and key without spaces; if it persists, see [[license-issues]] |
| Feed connection never turns green | [[connect-data-feed]], then [[fix-username-password]] |
| Chart opens but nothing moves | [[feed-connected-chart-not-moving]] |

## Related articles

- [[system-requirements]]
- [[quick-start-first-trade]]
- [[free-delayed-data-feed]]
- [[connect-data-feed]]
- [[first-chart]]
- [[move-to-new-computer]]
