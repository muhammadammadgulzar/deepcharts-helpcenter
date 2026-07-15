---
title: "Fix: The System Cannot Find the File Specified"
slug: "fix-system-cannot-find-file"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Fix the 'The system cannot find the file specified' connection error caused by a missing or antivirus-blocked Volumetrica Bridge."
keywords: ["The system cannot find the file specified", "Connection Failed system cannot find", "Volumetrica Bridge", "VolumetricaBridge.exe", "McAfee quarantine deepcharts", "bridge missing", "system cant find file"]
---
This error appears when DeepCharts cannot locate or start the **Volumetrica Bridge**, a background component the platform requires for its data feed connections. During installation, DeepCharts automatically creates a `Volumetrica Bridge` folder, and when everything is working you will see the Volumetrica Bridge running in the background. If this error appears, the Bridge is either missing or being blocked.

## Symptom

When connecting a data feed, the connection fails with:

**Connection Failed: The system cannot find the file specified**

[SCREENSHOT: The connection error dialog showing the full "Connection Failed: The system cannot find the file specified" message | system-cannot-find-file-error.png]

Not to be confused with:

- [[fix-could-not-find-path]] — a different "path" error related to the local database, not the Bridge.
- [[fix-unable-to-establish-connection]] — a network-level failure where the Bridge is running but the server cannot be reached.

## Most likely cause

The Volumetrica Bridge is missing or blocked: either the installer failed to create the `Volumetrica Bridge` folder, or your antivirus (McAfee in particular) has quarantined `VolumetricaBridge.exe`.

> **Tip:** If you run McAfee or another aggressive antivirus, check its quarantine first (see below) — otherwise the antivirus may quarantine the Bridge again right after you repair the installation.

## Quick fix

Repair the installation so the installer recreates the missing Bridge:

1. Close DeepCharts completely.
2. Locate your original DeepCharts installer (`.exe`). If you no longer have it, download it again from the official source — see [[install-deepcharts]].
3. Run the installer and choose the **Repair** option.

[SCREENSHOT: The DeepCharts installer window with the Repair option visible and highlighted | deepcharts-installer-repair-option.png]

4. Let the repair process finish completely.
5. Reopen DeepCharts and reconnect the data feed.

In most cases, the error is resolved after this step.

## If that didn't work

### Cause: McAfee quarantined VolumetricaBridge.exe

McAfee can incorrectly flag `VolumetricaBridge.exe` and move it to quarantine. Restore it and exclude it from future scans:

1. Close DeepCharts entirely.
2. Open McAfee Antivirus.
3. Go to **Menu → Quarantined Items**.
4. Find `VolumetricaBridge.exe` in the list and select **Restore**.

[SCREENSHOT: McAfee Quarantined Items screen with VolumetricaBridge.exe listed and the Restore action visible | mcafee-quarantine-restore-bridge.png]

5. Add the file to the scanning exclusions: go to **Menu → Real-Time Scanning → Add File**.
6. Browse to and select `VolumetricaBridge.exe`. [CONFIRM: default installation path of the Volumetrica Bridge folder]

[SCREENSHOT: McAfee Real-Time Scanning exclusions screen after VolumetricaBridge.exe has been added | mcafee-exclusion-bridge-added.png]

7. Close McAfee and relaunch DeepCharts.

> **Note:** Only restore and exclude files you recognize. `VolumetricaBridge.exe` is a legitimate DeepCharts component.

### Cause: A different antivirus or security policy is blocking the Bridge

Other antivirus products can quarantine the Bridge in the same way. Check your product's quarantine, restore `VolumetricaBridge.exe`, and add it to the exclusion list. If a Windows application control policy is the blocker instead, see [[application-control-policy]].

## Still stuck

Generate a [[diagnostic-report]] so support can see whether the Bridge is present and running, then contact the team via [[get-help]].

## Prevent this

- Install DeepCharts with the official installer only — see [[install-deepcharts]].
- Do not force-close the installer during setup; an interrupted install can leave the Bridge folder missing.
- Whitelist the Volumetrica Bridge in your antivirus software so it is never quarantined again.

## Related articles

- [[install-deepcharts]]
- [[installation-problems]]
- [[installation-setup-failed]]
- [[application-control-policy]]
- [[fix-could-not-find-path]]
- [[fix-unable-to-establish-connection]]
