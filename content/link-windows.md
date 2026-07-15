---
title: "Link Windows with Color Groups"
slug: "link-windows"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "5 min to complete"
description: "Join charts into a color link group so changing the symbol on one chart changes it on every linked chart at once."
keywords: ["link charts", "color groups", "link icon", "sync symbol", "linked windows", "change symbol on all charts", "chart link", "Link Trading Symbol"]
---
By the end you will have two or more charts joined in a color link group, so switching the symbol on one chart (for example NQ → ES) switches it on all of them in a single action.

This is the fastest way to run a multi-timeframe workspace: one 1-minute chart, one 5-minute chart, one 15-minute chart — all following the same instrument, each keeping its own timeframe and settings.

## Before you start

- At least two price charts open — [[first-chart]]
- The instruments you plan to switch between subscribed in Symbol Manage — [[symbol-manage]] (the instrument picker only shows exchanges you are subscribed to)

## Steps

1. On the first chart, click the square **link** icon at the top-right of the window title bar, to the left of the minimize button.

[SCREENSHOT: Top-right corner of a chart window with the square link icon highlighted, left of the minimize/maximize/close buttons | chart-link-icon-titlebar.png]

2. The link menu opens with these options: **None link**, **Link 1** through **Link 8** (each with its own color — Link 1 red, Link 2 green, Link 3 blue, Link 4 magenta, Link 5 purple, Link 6 yellow, Link 7 cyan, Link 8 pink), and **$ Link Trading Symbol**. Select **Link 1**.

[SCREENSHOT: Chart link menu open showing None link, the eight colored Link entries and the $ Link Trading Symbol option, with Link 1 highlighted | chart-link-menu-options.png]

3. On the second chart, open the same link menu and select **Link 1** as well. Both charts now belong to the same color group.

4. Change the symbol on either chart: click the symbol dropdown in the chart title bar and pick a new instrument in the **Select Instrument** dialog.

[SCREENSHOT: Two linked charts side by side, the Select Instrument dialog open on the left chart with a new symbol selected | linked-charts-symbol-change.png]

5. Confirm the selection — every chart sharing that link color switches to the new symbol.

> **Note:** Color groups sync the symbol only. Timeframe, indicators, drawings and every other setting stay independent per chart. To mirror drawings between charts, use right-click → **Drawing Tool From Other Chart** instead — see [[drawing-tools]].

### If you want to unlink a chart

Open the chart's link menu and select **None link**. The chart keeps its current symbol but stops following the group.

### If you want several independent groups

Use different colors. With eight link groups you can, for example, keep three charts following NQ on **Link 1** and two charts following ES on **Link 2** — the groups never affect each other.

### If you are curious about "$ Link Trading Symbol"

The link menu's last entry links a trading symbol rather than a chart color group. [CONFIRM: exact behavior of the "$ Link Trading Symbol" option — what it links and across which windows/panels]

[CONFIRM: whether non-chart windows (Advanced DOM, Advanced Time And Sales, Profile Chart) can join the same color link groups]

## Verify it worked

Change the symbol on any chart in the group. All charts with the same link color redraw with the new instrument within moments, while each chart's timeframe and indicators stay exactly as they were.

## If something went wrong

- **The other chart did not switch** — the two charts are not on the same color. Open the link menu on each and confirm the identical **Link** entry is selected (not **None link**).
- **The new symbol is missing from the Select Instrument dialog** — its exchange is not subscribed. Fix the subscription in [[symbol-manage]], or see [[symbol-subscription-issue]].
- **A linked chart shows no data on the new symbol** — the feed routing for that exchange may differ. Check the exchange's data feed assignment in [[symbol-manage]] and see [[feed-connected-chart-not-moving]].

## Related articles

- [[chart-window]]
- [[first-chart]]
- [[symbol-manage]]
- [[drawing-tools]]
- [[multi-monitor-windows]]
- [[templates-workspaces]]
