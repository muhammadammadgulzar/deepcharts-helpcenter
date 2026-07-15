---
title: "Fix: Installation Setup Failed"
slug: "installation-setup-failed"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Resolve the Installation Setup Failed error when installing DeepCharts on Windows: read the installer log, install the Visual C++ Redistributable, fix language and graphics issues."
keywords: ["installation setup failed", "setup failed", "installer error", "visual c++ redistributable", "vc_redist", "slimdx", "system components missing", "install error windows", "instalation setup failed"]
---

While installing DeepCharts on Windows, some users hit an error dialog that reads **Installation Setup Failed**. It is typically caused by required system components that are missing or incompatible on your Windows installation — and the installer tells you exactly which one, if you know where to look.

## Symptom

- The DeepCharts installer stops with an **Installation Setup Failed** error window.
- The error window includes a **Log File** button that opens a detailed log of what failed.

[SCREENSHOT: The Installation Setup Failed error dialog during DeepCharts installation with the Log File button visible and highlighted | installation-setup-failed-dialog.png]

Not to be confused with:

- [[installation-problems]] — the installer fails or disappears without this specific error dialog.
- [[application-control-policy]] — Windows reports "An Application Control policy has blocked this file".

## Most likely cause

A required system component is missing or incompatible — most commonly the Microsoft Visual C++ Redistributable. The installer log identifies the exact failure, so read it first.

## Quick fix

1. Click the **Log File** button in the installation error window and review the logged details — they identify the cause of the failure. Keep this file; support will ask for it if you need help later.

[SCREENSHOT: The installer log file open in Notepad with the failure lines near the end of the log visible | installer-log-file-notepad.png]

2. Download and install the latest **Microsoft Visual C++ Redistributable** for your system architecture — DeepCharts requires the latest version to function correctly:

| Architecture | Download link | Notes |
|---|---|---|
| ARM64 | https://aka.ms/vc14/vc_redist.arm64.exe | Latest supported ARM64 version |
| X86 (32-bit) | https://aka.ms/vc14/vc_redist.x86.exe | Required even on some 64-bit systems |
| X64 (64-bit) | https://aka.ms/vc14/vc_redist.x64.exe | Includes both ARM64 and X64 binaries |

3. Restart your PC. This step is not optional — Windows only finishes registering system components after a reboot.
4. Run the DeepCharts installer again.

## If that didn't work

### Cause: Windows system language is not English

DeepCharts and its dependencies require the Windows system language to be set to **English**. On systems with a non-English language, the installer may fail in unexpected ways.

1. Open **Windows Settings → Time & Language → Language** and set the Windows display and system language to **English**.

[SCREENSHOT: Windows Settings Time & Language page with the Windows display language dropdown open and English selected | windows-language-english-setup.png]

2. Restart your PC.
3. Run the DeepCharts installer again.

### Cause: Graphics rendering (SlimDX) issue

DeepCharts uses SlimDX for graphical rendering. In rare cases, a system-level graphics or DirectX issue prevents the installation from completing. There is no targeted in-place fix for this one — your options are:

- **Option 1:** Install DeepCharts on another Windows machine, if one is available.
- **Option 2:** Perform a fresh Windows installation, install all system updates and the required components above, then reinstall DeepCharts.

> **Warning:** A fresh Windows installation erases the programs and settings on that PC. Back up your files first, and treat this as the last resort after every other cause is ruled out.

## Still stuck

Collect the installer log file (the **Log File** button in the error window), then contact support through [[get-help]] and attach the log so the team can investigate the exact failure. If DeepCharts partially installed and launches, also include a [[diagnostic-report]].

## Prevent this

- Always restart your PC after installing system dependencies, before running the DeepCharts installer.
- Avoid running multiple installers at the same time.
- Keep Windows and your graphics drivers up to date.
- Follow [[install-deepcharts]] for the full, correctly-ordered installation procedure, and check [[system-requirements]] first on a new machine.

## Related articles

- [[install-deepcharts]]
- [[installation-problems]]
- [[system-requirements]]
- [[application-control-policy]]
- [[get-help]]
