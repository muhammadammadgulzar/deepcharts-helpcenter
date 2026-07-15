---
title: "Fix: Unable to Load DLL DXFeed_64.dll"
slug: "fix-dxfeed-dll"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Fix the 'Unable to load DLL DXFeed_64.dll' connection error by installing the Microsoft Visual C++ Redistributable."
keywords: ["Unable to load DLL 'DXFeed_64.dll'", "DXFeed_64.dll", "HRESULT: 0x8007007E", "dxfeed dll error", "visual c++ redistributable", "dxfeed dll missing", "connection failed dll"]
---
This error appears when DeepCharts cannot load the dxFeed DLL file that the data feed needs to run. It is a Windows system dependency issue — not a DeepCharts software bug — and it is fixed by installing the Microsoft Visual C++ Redistributable.

## Symptom

When connecting a dxFeed data feed, the connection fails with:

**Connection Failed: Unable to load DLL 'DXFeed_64.dll' (Exception from HRESULT: 0x8007007E)**

[SCREENSHOT: The connection error dialog showing the full "Unable to load DLL 'DXFeed_64.dll' (Exception from HRESULT: 0x8007007E)" message | dxfeed-dll-error-message.png]

Not to be confused with:

- [[fix-unable-to-establish-connection]] — a network-level connection failure without any DLL mention.
- [[fix-system-cannot-find-file]] — a different "file" error caused by the Volumetrica Bridge component.

## Most likely cause

The Microsoft Visual C++ Redistributable packages that `DXFeed_64.dll` depends on are missing, outdated, or corrupted on your Windows system, so the DLL cannot load its runtime libraries.

## Quick fix

Install (or reinstall) the Visual C++ Redistributable:

1. Close DeepCharts completely.
2. Download the Microsoft Visual C++ Redistributable that matches your system — **X64**, **X86**, or **ARM64**. [CONFIRM: official Microsoft download link to include here]

> **Tip:** Installing both the X86 and X64 versions is safe and recommended — many trading platforms require these runtimes, so this fixes other software too.

3. Run the installer (or installers).

[SCREENSHOT: The Microsoft Visual C++ Redistributable installer window on the setup screen, before clicking Install | vc-redist-installer.png]

4. Restart your computer.
5. Reopen DeepCharts and reconnect your data feed.

> **Note:** You do not need to reinstall DeepCharts for this fix.

## If that didn't work

### Cause: The installed redistributable is corrupted

If the redistributable was already present, the installed copy may be damaged. Run the downloaded installer again — if it offers a **Repair** option, use it — then restart your computer and try the connection again.

### Cause: Only one architecture is installed

If you installed a single package, add the other one as well (both X86 and X64 on a standard 64-bit Windows PC; ARM64 on ARM-based devices). Restart the computer afterwards.

## Still stuck

Generate a [[diagnostic-report]] so support can see the exact exception, then contact the team through [[get-help]].

## Prevent this

Keep your Windows runtimes current and set up the feed by following [[connect-dxfeed]]. Checking your machine against [[system-requirements]] before installing DeepCharts avoids most missing-dependency errors.

## Related articles

- [[connect-dxfeed]]
- [[system-requirements]]
- [[fix-unable-to-establish-connection]]
- [[fix-system-cannot-find-file]]
- [[fix-data-access-suspended]]
