---
title: "Fix: Rectangle Drawing Tool Not Working"
slug: "rectangle-drawing-tool"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Fix the Rectangle drawing tool (and other drawing tools) by deleting the corrupted tool_config file so DeepCharts regenerates it."
keywords: ["rectangle drawing tool not working", "rectangle tool broken", "drawing tool not working", "tool_config", "cannot draw rectangle", "drawing tools stopped working", "corrupted configuration"]
---

The **Rectangle** drawing tool stops working on your charts — you select it, but it will not draw. This issue is usually caused by a corrupted configuration file related to drawing tools. Deleting that file lets DeepCharts regenerate it automatically, which restores the tool.

## Symptom

- The **Rectangle** drawing tool does not work when you try to use it on a chart.
- Other drawing tools may misbehave at the same time — the same corrupted file affects them too.

Not to be confused with:

- [[chart-zoom]] — chart zooming in and out does not respond; a different issue with its own fix.
- [[drawing-tools]] — the general reference if you are unsure how the drawing tools are meant to work.

## Most likely cause

A corrupted drawing-tool configuration file named `tool_config` in the DeepCharts settings folder. Removing it forces DeepCharts to generate a fresh one on the next launch.

## Quick fix

Reset the drawing tool configuration:

1. Fully **close the DeepCharts application** before proceeding.
2. Open **File Explorer** and go to your **Documents** folder.
3. Navigate to the DeepCharts settings folder:

```
Documents → DeepChart → Settings
```

[SCREENSHOT: File Explorer showing the Settings folder inside the DeepChart folder in Documents, with the folder path visible in the address bar | deepchart-settings-folder.png]

4. Locate the file named `tool_config` and **delete** it.

[SCREENSHOT: File Explorer inside the Settings folder with the tool_config file selected and the right-click context menu open on Delete | delete-tool-config-file.png]

> **Warning:** This file stores your drawing tool settings, so deleting it resets those settings to their defaults. It does not affect your market data, charts, or account settings.

5. Launch DeepCharts again — the application automatically generates a new `tool_config` file.
6. Test the **Rectangle** drawing tool on a chart. It should now work correctly.

[SCREENSHOT: A DeepCharts chart with the Rectangle drawing tool selected and a rectangle successfully drawn over a price area | rectangle-tool-working.png]

## If that didn't work

### Cause: DeepCharts was still running when you deleted the file

If the application was still running in the background, it may have rewritten the corrupted file on exit. Repeat the fix, making sure DeepCharts is fully closed first — check Windows Task Manager for any remaining DeepCharts process before you delete `tool_config`.

### Cause: The problem affects other drawing tools too

The same configuration file covers other drawing tools, so if several tools misbehave, the reset above resolves them as well. If a single different tool still fails after the reset, note which one before contacting support.

## Still stuck

Generate a [[diagnostic-report]] and contact support through [[get-help]] — mention that you already reset the `tool_config` file and which tools are still affected.

## Prevent this

There is no user setting that causes this corruption — it can happen to any installation. Two habits reduce the risk of corrupted configuration files in general:

- Close DeepCharts normally rather than killing the process, since settings files are written on exit.
- Avoid shutting the PC down while DeepCharts is still saving or closing.

For day-to-day usage of the tools themselves, see [[drawing-tools]].

## Related articles

- [[drawing-tools]]
- [[chart-zoom]]
- [[chart-window]]
- [[diagnostic-report]]
- [[get-help]]
