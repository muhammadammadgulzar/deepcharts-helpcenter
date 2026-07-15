---
title: "Fix: Chart Zoom In and Out Not Working"
slug: "chart-zoom"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Restore mouse-wheel and keyboard zoom on DeepCharts charts — Windows scroll settings, price-scale options and mouse hardware checks."
keywords: ["zoom not working", "can't zoom chart", "mouse wheel zoom", "scroll inactive windows", "Ctrl + zoom", "chart zoom stuck", "price scale zoom", "trackpad zoom"]
---

You scroll the mouse wheel over a chart and nothing happens, or the keyboard zoom shortcuts have no effect. Zoom problems in DeepCharts almost always come from one of three places: a Windows mouse setting, the price-scale configuration, or the pointing hardware itself. This article works through them from most to least common.

For reference, DeepCharts zooms on two axes with two input methods:

| Action | Input |
|---|---|
| Zoom in (X-axis, time scale) | **Ctrl** + **+** |
| Zoom out (X-axis, time scale) | **Ctrl** + **-** |
| Zoom X-axis (time scale) | Mouse wheel scroll over the chart |
| Zoom Y-axis (price scale) | **Alt** + mouse wheel scroll |

## Symptom

- Scrolling the mouse wheel over a chart does not zoom the time scale.
- **Alt** + scroll does not change the price scale.
- **Ctrl** + **+** / **Ctrl** + **-** do not zoom in or out.

Not to be confused with a chart that zooms fine but shows no new price updates — that is a data-feed problem, covered in [[feed-connected-chart-not-moving]].

## Most likely cause

By default, Windows only delivers mouse-wheel events to the window that currently has focus. If the chart window is not the active window when you scroll — very common in multi-window layouts — the wheel input never reaches DeepCharts. The Windows setting **Scroll inactive windows when hovering over them** fixes this.

## Quick fix

1. Open **Windows Settings → Bluetooth & devices → Mouse**.
2. Turn on **Scroll inactive windows when hovering over them**.

[SCREENSHOT: Windows Settings, Bluetooth & devices > Mouse page with the "Scroll inactive windows when hovering over them" toggle switched On and highlighted | windows-mouse-scroll-inactive-windows.png]

3. Restart DeepCharts.
4. Hover the mouse over a chart and scroll — the time scale should zoom. Hold **Alt** and scroll to confirm the price scale zooms too.

[SCREENSHOT: DeepCharts chart window mid-zoom, with the cursor over the candles and the time axis visibly compressed compared to a second state — before/after of a mouse-wheel zoom | chart-mouse-wheel-zoom.png]

## If that didn't work

### Cause: Price-scale options are overriding the zoom

If the time axis zooms but the price axis does not respond (or snaps back), the Y-axis scale options may not be set the way you expect.

1. Right-click the price scale (the Y-axis on the right edge of the chart).
2. Review the scale options in the menu and confirm the scale mode is correct for how you want the chart to behave. [CONFIRM: exact price-scale right-click option names that affect zoom behavior]

[SCREENSHOT: Right-click context menu open on the chart's Y-axis price scale showing the available scale options | price-scale-right-click-menu.png]

See [[price-chart-settings]] for the full chart settings reference.

### Cause: Trackpad, remote desktop or mouse software is intercepting the wheel

Wheel events can be swallowed before they ever reach DeepCharts:

- **Trackpads** — laptop trackpad scroll gestures are less reliable than a physical wheel. Test with an external mouse.
- **Remote desktop sessions** — remote-access tools often forward scroll input incompletely. Test directly on the machine running DeepCharts.
- **Third-party mouse software** — vendor utilities that remap or "enhance" scrolling can intercept the wheel. Close or disable them, and keep the Windows mouse settings at their defaults.

### Cause: A keyboard shortcut was changed

DeepCharts shortcuts are configurable, so **Ctrl** + **+** / **Ctrl** + **-** may have been re-registered to something else on your installation. Open the shortcut settings and check what the zoom actions are currently bound to — see [[keyboard-shortcuts]].

## Still stuck

If none of the above restores zoom, generate a [[diagnostic-report]] and contact support through [[get-help]] — mention which axis fails and which input method (wheel, Alt + wheel, keyboard) you tested.

## Prevent this

- Keep **Scroll inactive windows when hovering over them** enabled in Windows.
- Use an external mouse rather than a trackpad for chart work.
- Avoid running DeepCharts over remote desktop when you can work locally.
- Leave Windows mouse settings at defaults and avoid third-party scroll utilities.

## Related articles

- [[chart-window]]
- [[price-chart-settings]]
- [[keyboard-shortcuts]]
- [[keyboard-shortcuts-reference]]
- [[feed-connected-chart-not-moving]]
- [[get-help]]
