---
title: "Move DeepCharts to a New Computer"
slug: "move-to-new-computer"
category: "Account & Billing"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "30 min to complete"
description: "Migrate DeepCharts to a new PC: back up workspaces and templates, reinstall and activate the license, reconnect your feed and restore your layout."
keywords: ["new computer", "new pc", "transfer license", "move license", "migrate deepcharts", "reinstall on another machine", "switch computers", "copy workspaces to new pc", "transfer settings", "second computer"]
---
By the end you will have DeepCharts running on your new computer with your license activated, your data feed connected, and your saved workspaces and templates restored.

A migration has two halves: things that follow your account automatically (your license, cloud-saved workspaces and templates, your feed subscription) and things that live only on the old machine (locally saved workspaces and templates, feed credentials entered in the app, the Symbol Manage mapping, and the local market data database). The steps below make sure nothing from the second group gets left behind.

## Before you start

- Your my.deepcharts.com login and license key at hand — see [[install-deepcharts]] for where the key lives
- Your data feed username and password — from the Subscriptions page on my.deepcharts.com, or from your broker or prop firm's welcome email ([[buy-data-feed]])
- The new machine meets the [[system-requirements]]
- Both machines available for a short while, so you can copy anything the old one still holds
- Optional but recommended: read how Local and Cloud storage differ in [[templates-workspaces]]

> **Note:** Your license allows installation on up to 5 devices, but the account can be active on one device at a time. [CONFIRM: whether the old machine must be deactivated first, or whether activating the new machine is enough]

## Steps

### Part 1: Back up on the old computer

1. Open DeepCharts on the old machine and save your current layout as a **Workspace**, choosing **Cloud** as the destination. Cloud saves are tied to your account and license, so they appear automatically on any machine running the same license — the easiest migration path. Do the same for any chart **Templates** you want to keep (right-click the chart → **Template → Save As** → **Cloud**). Full walkthrough: [[templates-workspaces]].

[SCREENSHOT: Workspace save dialog with the Cloud destination selected and a workspace name entered, illustrating a cloud backup before migration | workspace-save-cloud-before-migration.png]

2. If you prefer file copies (or have no cloud saves), copy the **Template** and **Workspace** folders from **Documents → deepchart** on the old PC to a USB drive or cloud drive. These folders hold every locally saved template and workspace.

[SCREENSHOT: Windows Explorer showing the Documents\deepchart folder with the Template and Workspace subfolders highlighted for copying | documents-deepchart-template-workspace-folders.png]

> **Warning:** DeepCharts does not auto-save layouts. Anything you configured but never saved as a Workspace or Template exists nowhere and cannot be migrated — save it now, before touching the old installation.

3. Confirm you can retrieve your feed credentials. Feed usernames and passwords are never migrated with the app — you will re-enter them on the new machine. Website-bought feeds show them on the my.deepcharts.com **Subscriptions** page ([[manage-subscriptions]]); broker and prop-firm credentials come from that provider.

4. Close DeepCharts on the old machine and leave it closed. Running the platform on both machines at the same time can cause license validation issues — see [[license-issues]].

### Part 2: Set up the new computer

5. Log in to my.deepcharts.com on the new machine and download the latest installer. If your license came from a **prop firm**, download the installer and license details from the prop firm's dashboard instead.

6. Install and activate, following [[install-deepcharts]]: temporarily disable the antivirus during installation, run the installer, then activate with your registered email and license key (paste both with no leading or trailing spaces).

[SCREENSHOT: License Key activation window on the new PC with the E-mail and License fields filled and the Login button visible | new-pc-license-activation.png]

7. Reconnect your data feed. Open **Feed Settings**, create the connection for your provider and enter the username and password you collected in step 3 — credentials always have to be re-entered on a new installation. Try it in the Feed Settings window below: pick your source and watch the fields change per provider. Provider-specific steps: [[connect-data-feed]].

[WIDGET: feed-navigator]

> **Note:** Your market data agreement is tied to your feed account, not to the computer — you do not need to sign it again for a machine change. If the connection is refused anyway, see [[fix-username-password]].

8. Map your exchanges to the new connection in **Options → Symbol Manage**, the same way the first-run wizard did on the old machine — see [[symbol-manage]]. Practice the mapping in the mock below: click the chain link to cycle which feed an exchange is mapped to. If you load a Cloud workspace in the next step, check the mapping afterwards anyway: the feed connection itself is part of the new install, not of the workspace.

[WIDGET: symbol-manage-mock]

9. Restore your layout: open the **Workspace** selector, choose the load option and pick your workspace from the **Cloud** tab. If you backed up files instead, copy them into **Documents → deepchart → Workspace** and **Template** on the new PC first, then load from the **Local** tab.

[SCREENSHOT: Workspace file picker on the new PC with the Cloud tab selected and the migrated workspace visible in the list | new-pc-load-cloud-workspace.png]

### If you want to move your market data database (optional)

Historical chart data is stored in a local database and re-downloads automatically on the new machine as you open charts, so most users skip this. If you have a large database you would rather not re-download, the database location is configurable under **Options → Settings → General**, in the **Various** section (**Database folder**). You can copy the old machine's database folder to the new one and point this setting at it. Exact behavior when swapping database folders between installations may vary — if the copied database misbehaves, clear it and let the platform re-download ([[download-data]]).

[SCREENSHOT: Options → Settings → General with the Various section visible and the Database folder location setting highlighted | database-folder-setting-migration.png]

## Verify it worked

- DeepCharts starts on the new machine without asking for the license again.
- The **Feed** selector shows your connection with a green dot.
- Loading your workspace restores every chart and window, and charts fill with data (fresh history may take a moment to download — progress is visible under **Options → Show Log → Connection Logs**).

## If something went wrong

| Symptom | What to do |
|---|---|
| "Invalid License" on the new machine | Re-paste email and key without spaces; close DeepCharts on the old PC; see [[license-issues]] |
| Feed connection stays red | [[fix-username-password]], then [[fix-unable-to-establish-connection]] |
| Cloud tab shows no workspaces | They were saved locally on the old PC — copy the **Documents → deepchart** folders across, see [[templates-workspaces]] |
| Charts open but stay empty | Check the Symbol Manage mapping ([[symbol-manage]]), then [[feed-connected-chart-not-moving]] |
| Historical data missing or patchy | Let it re-download, or force it with [[download-data]] |

## Related articles

- [[install-deepcharts]]
- [[templates-workspaces]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[manage-subscriptions]]
- [[license-issues]]
