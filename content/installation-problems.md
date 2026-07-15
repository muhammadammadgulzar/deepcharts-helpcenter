---
title: "Fix: Installation Problems and Basic Requirements"
slug: "installation-problems"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "What to check when the DeepCharts installer fails, disappears or won't complete: antivirus, .NET Framework, disk space and installer version."
keywords: ["installation problem", "install failed", "installer won't run", "cannot install deepcharts", "basic requirements", ".net framework 4.8", "antivirus blocking install", "not enough disk space", "instalation problem"]
---

You downloaded DeepCharts but the installation will not complete — the installer fails, closes without finishing, or the platform never appears afterwards. This guide walks through the four basic requirements that cause almost every failed installation, starting with the most common one.

## Symptom

- The DeepCharts installer fails, stops partway, or closes without installing anything.
- The installation appears to finish, but DeepCharts is missing or will not launch afterwards.

Not to be confused with:

- [[installation-setup-failed]] — you see the specific error dialog **Installation Setup Failed** with a **Log File** button.
- [[application-control-policy]] — Windows shows "An Application Control policy has blocked this file".
- [[license-issues]] — the platform installs fine but activation or licensing fails.

## Most likely cause

Third-party antivirus software interfering with the installer — antivirus products can quarantine installer components mid-install, which surfaces as a failed or half-complete installation.

## Quick fix

Run a clean installation with only Windows Defender active:

1. Close any running installer and close DeepCharts if it is open.
2. Temporarily disable **all** third-party antivirus products, leaving only **Windows Defender** active.

[SCREENSHOT: A third-party antivirus dashboard with its real-time protection toggle switched off, showing protection temporarily disabled | antivirus-disable-realtime.png]

3. Download a fresh copy of the installer from your my.deepcharts.com dashboard and run the installation again — see [[install-deepcharts]] for the full walkthrough.
4. Re-enable your antivirus as soon as the installation finishes.

> **Warning:** Do not leave your antivirus disabled longer than the installation takes. Turn it back on immediately afterwards.

If the installation still fails with antivirus disabled, work through the remaining requirements below.

## If that didn't work

### Cause: .NET Framework 4.8 or later is missing

DeepCharts requires the **.NET Framework 4.8** package or later. Recent Windows 10 builds and Windows 11 normally include it already, but older or heavily stripped-down Windows installations may not.

1. Download the .NET Framework 4.8 runtime from Microsoft's official site: https://dotnet.microsoft.com/download/dotnet-framework
2. Run the installer — if the framework is already present, the setup tells you so and you can rule this cause out.
3. Restart your PC, then run the DeepCharts installer again.

### Cause: Not enough free space on Local Disk (C:)

The installation needs available space on **Local Disk (C:)** — and DeepCharts later stores downloaded market data on the same drive by default, so a nearly full disk causes problems beyond installation.

1. Open **File Explorer → This PC** and check the free space shown under **Local Disk (C:)**.

[SCREENSHOT: File Explorer This PC view with the Local Disk C: drive bar visible showing free space remaining | this-pc-disk-space.png]

2. Free up space if the drive is close to full, then run the installer again.
3. If an old DeepCharts installation is taking up space with market data, see [[delete-market-data]].

### Cause: You are installing an outdated version

Always install the latest version of the platform. The current version number is indicated next to the download button on your my.deepcharts.com dashboard.

[SCREENSHOT: my.deepcharts.com dashboard download area with the version number next to the download button highlighted | dashboard-download-version.png]

1. Log in to your my.deepcharts.com dashboard.
2. Compare the version next to the download button with the installer you have — if they differ, download the latest installer and run it instead.

## Still stuck

Generate a [[diagnostic-report]] if the platform launches at all, take a screenshot of any error you see, and contact support through [[get-help]] — mention which of the four checks above you already tried.

## Prevent this

- Review [[system-requirements]] before installing on a new machine.
- Follow [[install-deepcharts]] step by step — it includes the antivirus step at the right moment.
- Keep enough free space on Local Disk (C:); the local market-data database grows over time.

## Related articles

- [[install-deepcharts]]
- [[system-requirements]]
- [[installation-setup-failed]]
- [[application-control-policy]]
- [[license-issues]]
- [[get-help]]
