---
title: "Fix: App Crashes When Saving Feed Settings"
slug: "app-crashes-saving-feed"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Fix DeepCharts crashing when you click Save in Feed Settings — permissions, Windows language, or corrupted configuration files."
keywords: ["crash on save", "app crashes when saving feed settings", "feed settings crash", "config.settings", "connProp.settings", "DPC_Log", "DeepCharts closes when saving"]
---

You fill in your feed details, click **Save** in **Feed Settings** — and DeepCharts crashes. There are three known causes: missing administrator permissions, a non-English Windows system language, and corrupted configuration files. Work through them in that order; each fix is more involved than the last.

## Symptom

- DeepCharts crashes (closes unexpectedly) the moment you click **Save** in **Feed Settings**.
- The crash may happen every time or only when saving a specific connection.

The exact cause is usually visible in the latest application log file — look for the most recently created file following the `DPC_Log_Date.txt` naming pattern. [CONFIRM: exact folder where DPC_Log files are stored]

[SCREENSHOT: Feed Settings dialog filled in with a connection, cursor on the Save button — the state immediately before the crash occurs | feed-settings-before-save-crash.png]

## Most likely cause

DeepCharts needs permission to read and write its configuration files (such as `config.settings`) when saving a feed. Without administrator privileges, the save can crash the application.

## Quick fix

Run DeepCharts as administrator:

1. Close DeepCharts completely.
2. Locate `DeepChart.exe` on your system.
3. Right-click it and select **Run as administrator**.

[SCREENSHOT: Windows Explorer context menu on DeepChart.exe with "Run as administrator" highlighted | run-deepcharts-as-administrator.png]

4. Open **Feed Settings** again and click **Save**.

> **Tip:** Running DeepCharts as administrator is recommended in general, particularly during initial setup, so the app can always write its configuration files.

## If that didn't work

### Cause: Windows system language is not English

A non-English Windows system language can prevent DeepCharts from correctly reading or writing configuration values during the save.

1. Change the Windows display and system language to **English** (Windows Settings → Time & Language → Language).
2. Restart your PC.
3. Launch DeepCharts and try saving the feed settings again.

### Cause: Corrupted configuration files

If `config.settings` or `connProp.settings` are corrupted, the app crashes whenever it tries to save or update them. The fix is to remove the stored configuration so DeepCharts recreates it.

> **Warning:** Deleting the AppData folder resets your local settings. You will need to re-configure your data feed afterward — keep your credentials at hand and see [[connect-data-feed]].

1. Open File Explorer and go to **Local Disk (C:) → Users → [your user folder]**.
2. Enable hidden files: **View → Show → Hidden items**.

[SCREENSHOT: File Explorer View menu open with Show > Hidden items checked, in the user profile folder | file-explorer-show-hidden-items.png]

3. Open the **AppData** location and delete the DeepCharts application folder. [CONFIRM: exact AppData subpath (Local or Roaming) and exact folder name]

[SCREENSHOT: AppData folder in File Explorer with the DeepCharts application folder selected before deletion | appdata-deepcharts-folder.png]

4. Relaunch DeepCharts as administrator and configure your feed settings again.

> **Note:** Avoid force-closing the application while settings are being saved — an interrupted write is one way these files get corrupted in the first place.

## Still stuck

Review the latest `DPC_Log_Date.txt` file for detailed crash information — if you cannot interpret it, generate a [[diagnostic-report]] and contact support through [[get-help]], attaching the log.

## Prevent this

- Run DeepCharts as administrator, especially during initial setup.
- Never force-close the app while it is saving settings.
- Follow [[connect-data-feed]] when configuring feeds so every field is saved in one pass.

## Related articles

- [[connect-data-feed]]
- [[manage-feed-connections]]
- [[fix-system-cannot-find-file]]
- [[installation-problems]]
- [[get-help]]
