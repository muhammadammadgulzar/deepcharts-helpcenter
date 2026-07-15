---
title: "Templates and Workspaces"
slug: "templates-workspaces"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Save one chart's setup as a Template or your entire layout as a Workspace, locally or in the cloud, so your configuration survives every restart."
keywords: ["save chart layout", "chart template", "workspace", "save workspace", "load template", "settings reset after restart", "lost my layout", "chart setup disappeared", "cloud templates", "shared templates"]
---
By the end you will have one chart's configuration saved as a **Template** and your whole screen layout saved as a **Workspace**, and you will know how to load either one back — on this PC or any other PC where you use your DeepCharts license.

The rule of thumb: one chart's setup (indicators, styles, settings) → save a **Template**. The entire layout — multiple charts, indicators, profiles — → save a **Workspace**.

> **Warning:** DeepCharts does not auto-save chart layouts or configurations. If you close the app (or shut down the PC) without saving a Template or Workspace, the next launch starts from the default layout. Nothing is broken and nothing was "reset" — the setup was never saved. Save a Workspace before you close the app.

## Before you start

- A chart configured the way you like it — [[first-chart]]
- Any indicators you want preserved already applied — [[indicator-layout]]

## Steps

### Save a chart Template

1. Set up the chart exactly how you want it: indicators, bar style, colors, settings.

2. Right-click anywhere on the chart and choose **Template → Save As**.

[SCREENSHOT: Chart right-click context menu open with the Template submenu expanded showing Load and Save As, Save As highlighted | chart-template-save-as-menu.png]

3. Choose where to store it — **Local** (this PC) or **Cloud** (your DeepCharts account, available on any PC where you activate the same license) — and give the template a clear name, for example the strategy or layout it belongs to.

[SCREENSHOT: Template save dialog/file picker showing the Local and Cloud source options with a template name being entered | template-save-picker-local-cloud.png]

### Load a Template

1. Right-click the chart and choose **Template → Load**. The **Templates** button in the chart's bottom bar opens the same picker — it is a shortcut for this menu item.

2. In the file picker, pick a source tab:
   - **Local** — files stored in your **Documents → deepchart → Template** folder on this PC. The **Add folder** button lets you add another folder to search.
   - **Cloud** — templates saved to the DeepCharts server, tied to your account and license. Use the same license on another PC (for example while traveling) and your cloud templates appear here too.
   - **Shared** — a read-only area curated by the DeepCharts team, including the templates used in the educational videos. You can load from Shared, but you can never upload to it.

[SCREENSHOT: Template file picker with the Local, Cloud and Shared source tabs visible, a template selected, and the preview pane showing its preview | template-picker-local-cloud-shared.png]

3. Select the template and load it. The chart redraws with the saved configuration.

> **Note:** The quick-template radio buttons next to the **Templates** button (OF-VP, D-VP, C-VP and so on) are built-in presets, not your saved templates — see [[quick-chart-templates]].

### Save a Workspace

1. Arrange your full trading screen: every chart, window and panel where you want it.

2. In the main bar, open the **Workspace** selector — it shows the name of the current workspace (for example **Untitled**) — and choose the save option. [CONFIRM: exact item labels in the Workspace menu (Save as / Load / New)]

[SCREENSHOT: DeepCharts main bar with the Workspace dropdown open showing the current workspace name and the save/load options | workspace-dropdown-main-bar.png]

3. Pick **Local** or **Cloud** and name the workspace. Local workspaces live in **Documents → deepchart → Workspace** on this PC; cloud workspaces follow your license to any machine.

### Load a Workspace

1. Open the **Workspace** selector in the main bar and choose the load option.

2. Pick the source (**Local**, **Cloud** or **Shared**) and select the workspace. The entire layout is restored.

[SCREENSHOT: Workspace file picker showing a saved workspace selected in the Local tab with the preview pane visible | workspace-picker-load.png]

### If you work on more than one PC

Save your templates and workspaces to **Cloud**. They are tied to your DeepCharts account and license, so they survive reinstalls and machine changes — see [[move-to-new-computer]] for the full migration checklist. Local files can also be copied manually from the **Documents → deepchart → Template** and **Workspace** folders.

## Verify it worked

Save a Workspace, close DeepCharts completely, reopen it, and load the workspace from the **Workspace** selector. Every chart, indicator and window position should return exactly as you left it. If you saved to Cloud, the workspace also appears in the Cloud tab on any other PC running your license.

## If something went wrong

- **"All my settings reset after restart"** — this is the no-autosave behavior described above, not a fault. If the workspace list is empty, nothing was ever saved; configure your layout once more and save a Workspace before closing.
- **A template saved on another PC is missing** — Local files stay on the PC where they were saved. Save to **Cloud** instead, or copy the files from the other machine's **Documents → deepchart** folders.
- **You cannot upload to the Shared tab** — by design. Shared is read-only; only the DeepCharts team publishes there.
- **A saved workspace or template genuinely disappeared** — if it previously appeared in the list and is now gone, contact support with the details (Local or Cloud, one file or all): [[get-help]].

## Related articles

- [[quick-chart-templates]]
- [[first-chart]]
- [[indicator-layout]]
- [[multi-monitor-windows]]
- [[move-to-new-computer]]
- [[chart-window]]
