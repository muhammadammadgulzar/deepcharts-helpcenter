---
title: "How to Configure Keyboard Shortcuts"
slug: "keyboard-shortcuts"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Bind, change or delete keyboard shortcuts for platform and chart actions from the Shortcuts tab in DeepCharts settings."
keywords: ["keyboard shortcuts", "hotkeys", "key bindings", "shortcut keys", "rebind keys", "configure shortcuts", "hot keys", "keybord shortcuts"]
---

By the end of this guide you will have your own keyboard shortcut bound to a DeepCharts action — and you will know how to change or remove any of the existing ones. Every shortcut in DeepCharts is re-mappable, so if a default combination clashes with muscle memory from another platform, you can fix that here in under a minute.

## Before you start

- [[install-deepcharts|DeepCharts is installed and running]]
- Skim the [[keyboard-shortcuts-reference|default shortcuts]] first — the action you want may already have a combination you can simply learn instead of re-mapping

## Steps

1. In the main menu bar, click **Options**, then select **Settings**. The **General Settings** window opens.

2. Switch to the **Shortcuts** tab.

   [SCREENSHOT: General Settings window on the Shortcuts tab showing the shortcuts table with the Category, Type, Description and Combination columns and the per-row Delete and Register buttons | shortcuts-tab-overview.png]

3. Find the action you want in the table. Each row has four columns that help you locate it:

   | Column | What it shows |
   |---|---|
   | **Category** | **General** (platform-wide functions) or **Chart** (chart functions) |
   | **Type** | The kind of action: **Action**, **Control**, **Drawing and Annotation**, **Scroll** or **Trading** |
   | **Description** | What the shortcut does |
   | **Combination** | The key combination currently assigned to it |

4. Click **Register** on that row. The row is now recording.

   [SCREENSHOT: A single row in the shortcuts table with the Register button highlighted, ready to record a new key combination | shortcuts-register-button.png]

5. Press the key combination you want to assign (for example Ctrl Alt D). The combination appears in the **Combination** column of the row.

6. Click **Save Settings** at the bottom of the window. The new shortcut is now active — no restart is needed.

   [SCREENSHOT: Shortcuts tab with a newly recorded combination visible in the Combination column and the Save Settings button highlighted at the bottom | shortcuts-save-settings.png]

   ### If you want to remove a shortcut

   1. Click **Delete** on the row of the shortcut you want to remove. The saved combination is cleared.
   2. Click **Save Settings**.

   ### If you want to replace an existing shortcut

   1. Click **Register** on the row and press the new combination — you do not need to delete the old one first.
   2. Click **Save Settings**.

## Verify it worked

Press your new combination in the context it belongs to. For a **Chart**-category shortcut, click a chart window first so it has focus, then press the keys — for example, a combination bound to **Indicators** should open the chart's indicator manager. For a **General**-category shortcut, it should work anywhere in the platform.

## If something went wrong

- **The shortcut does nothing** — the most common cause is skipping **Save Settings** after registering. Reopen **Options → Settings → Shortcuts** and check the **Combination** column: if your combination is not shown on the row, register it again and save.
- **A Chart shortcut does nothing** — make sure a chart window is focused when you press the keys. Chart-category shortcuts operate on charts, not on the platform as a whole.
- **The keys trigger the wrong action** — scan the **Combination** column for the same combination assigned to more than one row. Delete it from the row you do not want, pick a different combination for one of them, and save.
- **You cannot remember what you changed** — the [[keyboard-shortcuts-reference]] lists the default combinations, so you can compare your table against it and re-register anything you want back.

## Related articles

- [[keyboard-shortcuts-reference]]
- [[customize-language-theme-sounds]]
- [[chart-window]]
- [[drawing-tools]]
- [[templates-workspaces]]
