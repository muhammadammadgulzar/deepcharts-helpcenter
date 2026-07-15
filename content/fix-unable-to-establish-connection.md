---
title: "Fix: Connection Failed — Unable to Establish Connection"
slug: "fix-unable-to-establish-connection"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Resolve the 'Unable to establish connection' data feed error caused by VPNs, missing Visual C++ components, or non-English Windows settings."
keywords: ["Unable to establish connection", "Connection Failed: Unable to Establish Connection", "please check your internet connection", "vpn blocking data feed", "visual c++ redistributable", "vc_redist", "windows language english", "feed won't connect"]
---
This error means DeepCharts is unable to establish a stable connection to the data feed. It is almost always caused by something on the system side — network restrictions, a missing Windows component, or a Windows language/region incompatibility — rather than by your feed credentials. Work through the fixes below in order.

## Symptom

When connecting a data feed, the connection fails with:

**Connection Failed: Unable to establish connection. Please check your internet connection.**

[SCREENSHOT: The connection error dialog showing the full "Unable to establish connection" message after a failed feed connection attempt | unable-to-establish-connection-error.png]

Not to be confused with:

- [[fix-username-password]] — the feed reaches the server but rejects your credentials.
- [[fix-bad-server]] — a dxFeed authorization error, not a network failure.
- [[fix-dxfeed-dll]] — a DLL loading error that names `DXFeed_64.dll` explicitly.

## Most likely cause

An unstable internet connection, or a VPN/proxy service blocking or rerouting the data feed traffic.

## Quick fix

1. Verify your internet connection is stable and fast (load a few websites, or run a speed test).
2. If you use a VPN or proxy, disconnect it. VPN usage is a common cause of this error.
3. Close DeepCharts completely.
4. Reopen DeepCharts and try connecting the feed again.

## If that didn't work

### Cause: Missing or outdated Microsoft Visual C++ Redistributable

DeepCharts requires the latest supported Microsoft Visual C++ Redistributable — it is a mandatory system dependency, and a missing or outdated version prevents the feed from connecting.

Download and run the installer that matches your system:

| Architecture | Download link | Notes |
|---|---|---|
| X64 (64-bit) | https://aka.ms/vc14/vc_redist.x64.exe | Standard for most modern PCs |
| X86 (32-bit) | https://aka.ms/vc14/vc_redist.x86.exe | Required on some 64-bit systems |
| ARM64 | https://aka.ms/vc14/vc_redist.arm64.exe | For ARM-based Windows devices |

[SCREENSHOT: The Microsoft Visual C++ Redistributable installer window on the setup screen, before clicking Install | vc-redist-setup-screen.png]

After installation:

1. Restart your computer.
2. Launch DeepCharts.
3. Try connecting the feed again.

### Cause: Windows language or region is not set to English

A non-English system language or regional format can cause connection and parsing issues, and is a known cause of feed initialization failures.

1. Open **Windows Settings → Time & Language → Language** and set the Windows display language to **English**.

[SCREENSHOT: Windows Settings Time & Language > Language page with the display language dropdown set to English | windows-language-english.png]

2. Open **Windows Settings → Time & Language → Region** and set **Country or region** to **United States** (or another English-supported region).

[SCREENSHOT: Windows Settings Time & Language > Region page with Country or region set to United States | windows-region-united-states.png]

3. Restart your PC, open DeepCharts, connect the data feed, and open a chart.

> **Note:** Always restart the computer after changing system-level settings — the change does not take effect for DeepCharts until you do.

## Still stuck

Generate a [[diagnostic-report]] so support can see the connection attempt details, then contact the team through [[get-help]].

## Prevent this

- Avoid running a VPN while DeepCharts is connected to a feed.
- Keep the Visual C++ Redistributables updated.
- Keep the Windows system language and region English-compatible (English/US recommended).
- Check your machine against [[system-requirements]], and follow [[connect-data-feed]] when setting up feeds.

## Related articles

- [[connect-data-feed]]
- [[system-requirements]]
- [[fix-username-password]]
- [[fix-bad-server]]
- [[connection-lost-opening-chart]]
- [[fix-dxfeed-dll]]
