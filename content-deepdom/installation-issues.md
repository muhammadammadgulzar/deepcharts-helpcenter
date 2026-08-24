---
title: "Installation Issues"
slug: "installation-issues"
category: "Common Issues"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "3 min read"
description: "This article provides troubleshooting steps if you encounter errors while installing the desktop version of DeepDom."
keywords: ["installation issues", "deepdom installation issues", "deepdom", "common issues"]
---
This article provides troubleshooting steps if you encounter errors while installing the desktop version of DeepDom. Most installation problems are related to missing system requirements, security software blocking the installer, or using an outdated setup package. Follow the checklist below before opening a support ticket.

## Check Minimum System Requirements

Before installing DeepDom, make sure that your PC meets the minimum hardware and software requirements specified on the download page. If the machine does not satisfy these requirements, the platform may fail during installation or may not run correctly after installation.

## Step‑by‑Step Troubleshooting

### Temporarily Disable Third‑Party Antivirus

Some antivirus products can block the DeepDom installer or quarantine essential files during setup. To avoid this, either:

Temporarily disable all third‑party antivirus and security suites while you install DeepDom, leaving only Windows Defender active, or

Add an exception for the DeepDom installation folder in your antivirus settings.

The default installation path is typically:

C:\Program Files\Volumetric Trading

Ensure this folder (and any sub‑folders used by DeepDom) is fully trusted by your security software.

### 2. Confirm .NET Framework 4.8 or Later

DeepDom requires .NET Framework 4.8 or later to run. On most modern versions of Windows this component is either pre‑installed or available as an optional Windows feature. If the required framework is missing or corrupted, the installer may stop with a generic error.

Open Apps > Optional features or Turn Windows features on or off and verify that .NET 4.8 (or a later version) is enabled. If not, install or repair the framework and then run the DeepDom installer again.

### 3. Verify Free Space on Local Disk (C:)

Make sure there is enough free space on your Local Disk (C:) to store the DeepDom application files, logs, and cache. Low disk space can cause incomplete installations or unexpected errors while writing files.

As a guideline, keep several gigabytes of free space available on drive C: before starting the installation, especially if you plan to record large amounts of market data.

### 4. Use the Latest DeepDom Installer

Always download the latest version of DeepDom from the official site. The current version number is displayed next to the download button. If you attempt to install an outdated package, it may fail on newer versions of Windows or miss critical fixes.

If you still have an older installer on your machine, delete it and download the newest setup file before trying again.

### 5. Perform a Clean Re‑installation

If DeepDom was previously installed and is now failing to update or reinstall, try a clean installation:

Uninstall DeepDom from Apps > Installed apps (or Programs and Features on older Windows versions).

Manually check that the main installation folder under C:\Program Files\Volumetric Trading has been removed. If not, delete any remaining DeepDom files.

Restart Windows to clear any locked files.

Run the latest DeepDom installer again with antivirus disabled or with the proper exceptions configured.

## Still Having Trouble?

Our support team is available 24/7 and ready to help you with any issue you encounter. When you reach out, please include:

A screenshot of the issue.

A brief description of what you were trying to do.

Support Ticket (fastest response): visit www.deepcharts.com and create a support ticket directly on our website.

Email Support: you can also reach us at support@deepcharts.com. Please note that email responses may take a little longer than a support ticket.
