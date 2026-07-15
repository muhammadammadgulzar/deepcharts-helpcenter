---
title: "Arrange Windows Across Monitors (and Recover Off-Screen Windows)"
slug: "multi-monitor-windows"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Spread DeepCharts charts, DOMs and other windows across multiple monitors, save the layout as a workspace, and bring back windows stuck off-screen."
keywords: ["multiple monitors", "multi monitor", "second screen", "window off screen", "window disappeared", "recover window", "position windows", "detach chart", "dual monitor setup"]
---

By the end of this guide you will have your DeepCharts windows arranged across all of your monitors, saved as a workspace so the layout survives a restart — and you will know how to recover a window that opens off-screen after a monitor is unplugged or a resolution changes.

DeepCharts windows (charts, DOMs, Time and Sales, Scanner and the rest) are free-floating windows, so a multi-monitor layout is mostly drag and drop. The two parts people miss are detaching chart tabs into standalone windows and saving the result as a workspace.

## Before you start

- [[first-chart|You can open a chart]] and have at least one open
- [[templates-workspaces|Understand templates vs workspaces]] — a workspace is what saves a multi-window layout
- All monitors are connected and detected by Windows (they appear in Windows display settings)

## Steps

1. Open every window you need from the **New** menu in the main menu bar: **Price Chart**, **Book** (for **Adv. Dom** and the horizontal/vertical DOM variants), **Adv. Time And Sales**, **Correlation Viewer**, **Profile Chart** or **Scanner**. Each opens as its own window.

   [SCREENSHOT: DeepCharts main menu bar with the New menu open, showing Adv. Time And Sales, Book submenu, Correlation Viewer, Price Chart, Profile Chart and Scanner | new-menu-window-types.png]

2. Drag each window by its title bar onto the monitor where you want it, and resize it there. DeepCharts windows behave like normal application windows, so the Windows shortcut Win+Shift+Left/Right arrow also moves the focused window to the next monitor.

   [SCREENSHOT: Two monitors side by side with a DeepCharts chart being dragged from the primary monitor to the secondary one | drag-window-between-monitors.png]

   ### If your charts are tabs inside one chart window

   A chart window can hold several charts as tabs (the green **+** in the title bar adds one). Tabs cannot sit on different monitors, so detach the ones you want elsewhere:

   1. With a single visible tab, click the open-in-new-window icon in the chart title bar (left of the green **+**). With multiple tabs, click the active tab and choose **Detach** in the popover that appears.
   2. The tab becomes a standalone chart window — with its own symbol, timeframe, trading panel and DOM state — that you can drag to any monitor.

   [SCREENSHOT: Chart tab popover open on an active tab showing the symbol, range and timeframe dropdowns plus the green Detach and red Close buttons | chart-tab-detach-popover.png]

   ### If you want charts on different monitors to follow one symbol

   Use link color groups: click the square link icon at each chart's top-right (left of minimize) and give the charts the same **Link** color (1–8). Changing the symbol on one chart then changes it on all charts in the group — the link syncs the symbol only, not the timeframe or drawings. See [[link-windows]].

   ### If you want a window to stay visible over other applications

   On a chart, click the gear icon in the top-left icon row and enable **Always on top**; the window then stays above every other OS window until you disable it. For the main control bar, there is a separate **Control bar always on top** toggle under **Options → Settings → General**, in the **VARIOUS** section.

3. Optionally, use the built-in arranger: **Window → Position windows**. The dialog lists window-type toggles (**Adv Dom**, **Adv Time And Sales**, **Correlation Viewer**, **Chart**, **Scanner**, **Compact Dom**), a list of your monitors with their resolutions, and a **Position only windows inside selected monitors** toggle. Select the window types and target monitors, then click **Position**. [CONFIRM: exact placement behavior of the Position windows dialog — how positioned windows are arranged on the selected monitors]

   [SCREENSHOT: Window menu open with Position windows selected, and the Position windows dialog showing the window-type toggles, the monitor list with resolutions, the Position only windows inside selected monitors toggle and the Close and Position buttons | position-windows-dialog.png]

4. Save the layout as a workspace: press Ctrl Alt S (**Workspace save**) or use the workspace panel's save option, and choose **Local** or **Cloud** storage. Cloud workspaces are tied to your license and follow you to other PCs.

   > **Warning:** DeepCharts does not auto-save layouts. If you close the app without saving a workspace, the next launch starts from default and your arrangement is gone — nothing is broken, it was never saved.

## Verify it worked

- Each monitor shows the windows you placed there, and each detached chart keeps its own symbol, timeframe and trading panel.
- Restart DeepCharts and load your workspace (Ctrl Alt O, or the workspace panel). The full layout comes back. If your monitor setup changed between sessions (a screen removed or resolution changed), window positions may not be restored exactly — rearrange once and save again.

## If something went wrong

- **A window opens off-screen** (typical after unplugging the monitor it lived on). Try these in order, least invasive first:
  1. Windows-native move: focus the window with Alt+Tab, press Alt+Space, choose **Move** (or press M), tap the arrow keys until the window appears, then click to drop it. Win+Shift+Left/Right arrow also pulls the focused window to the next monitor.
  2. **Window → Position windows**: enable **Position only windows inside selected monitors**, select only the monitors you still have and the affected window type, then click **Position**. Exact behavior may vary — see the confirm note in step 3.
  3. The default shortcut Ctrl Alt R (**Reset open windows**) is designed to reset your open windows; exact behavior may vary. See [[keyboard-shortcuts-reference]].
- **You are asked "Are you sure to close the window?"** — closing a detached chart window shows this confirmation. Choose **No** if you clicked the X by mistake; the chart stays.
- **Your whole layout was gone after a restart** — the workspace was never saved (there is no auto-save). Rebuild the layout once and save it: [[templates-workspaces]].
- **Changing a symbol changed several charts at once** — those charts share a link color group. Set the link menu to **None link** on the charts you want independent: [[link-windows]].

## Related articles

- [[templates-workspaces]]
- [[link-windows]]
- [[chart-window]]
- [[keyboard-shortcuts-reference]]
- [[advanced-dom]]
- [[adv-time-and-sales]]
