---
title: "Profile Chart Window (TPO and Volume Profiles)"
slug: "profile-chart-window"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "11 min read"
description: "The dedicated Profile Chart window in DeepCharts: TPO letters, daily and weekly volume/delta profiles, ticks grouping and the Indicators panel behind it all."
keywords: ["profile chart", "TPO chart", "market profile window", "volume profile window", "tpo letters", "ticks grouping", "D-VP", "W-VP", "composite profile", "profile chart blank"]
---

The Profile Chart is a dedicated window for profile-style analysis: TPO (Market Profile) letter profiles, daily and weekly volume profiles, delta profiles and a composite profile — stackable as overlays on one time axis. It shares the price chart's toolbar, drawing tools, right-click menu and trading panel, but its whole rendering engine is built around profiles instead of candles.

This article covers the window: opening it, the header controls, the profile-type toggle row, the Indicators panel that actually drives it, and what to do when the chart goes blank. For the theory of profiles, start with [[understanding-volume-profile]]; for the TPO indicator you can add to a normal price chart, see [[market-profile-tpo]].

## What it is

Instead of asking "where did price go over time" (a candle chart), a profile chart asks "how much time and volume did the market spend at each price". Each session renders as a distribution: TPO letters mark which time periods touched each price, and volume-profile bars show how many contracts traded there. The window can layer several profile types side by side per session — for example TPO letters plus a daily volume profile — and adds weekly and composite profiles in their own areas at the right edge.

## When to use it

- Reading session structure: value areas, points of control, single prints and unfinished business ([[understanding-auction-theory]]).
- Comparing today's developing value against prior sessions at a glance.
- Separating RTH and ETH activity — the toggle row has dedicated RTH/ETH variants of both TPO and volume profiles.
- Zooming out to weekly and composite profiles for higher-timeframe levels.
- Trading directly off profile levels — the window docks the same trading panel as a price chart.

## Quick start

1. In the main bar, open **New → Profile Chart**.
2. Pick your instrument in **Select Instrument** and confirm. Only exchanges subscribed in [[symbol-manage]] appear.
3. Wait while the window shows **Building chart** (or **Downloading data from connection**). The main bar shows an **LDT:** badge when data is loading from disk, or **DWT:** when it is downloading from the feed server — both are normal loading states.
4. The chart renders with TPO profiles per session. Enable more profile types from the bottom toggle row as needed.

[SCREENSHOT: Profile Chart window freshly opened on NQ showing the Building chart spinner with progress bar, and the main bar LDT badge visible at the top | profile-chart-building.png]

## Window anatomy

[SCREENSHOT: Fully rendered Profile Chart on NQ in TPO mode showing the header with symbol dropdown, 30D - BT dropdown and ticks-grouping dropdown, the top toolbar icons, the left drawing rail, per-session TPO letter profiles with magenta POC lines and dashed value-area lines, and the bottom profile-type toggle row | profile-chart-overview.png]

- **Header controls** — the symbol dropdown (for example NQ-202609), a history dropdown reading like **30D - BT** (30 days of history loaded; BT stands for Based on Tick, the same label family as on price charts — the full option list of this dropdown on the Profile Chart is [CONFIRM: options offered by the Profile Chart history dropdown]), the ticks-grouping dropdown (**N T** — see below), an open-in-new icon and a green plus icon, then the standard link/minimize/maximize/close controls.
- **Top toolbar** — the same family as the price chart: hamburger, link-charts, the indicators icon, gear, **$** (trading) and camera.
- **Left drawing rail** — pointer, hand, add, crosshair, zoom, eye, eraser, horizontal/vertical line, ray, rectangle, ellipse, text and position-calculator tools; see [[drawing-tools]].
- **Top-left readout** — O H L C plus **%V** (percent change versus the previous day), **ΣV** and **ΔV** for the hovered session. ΣV and ΔV read as total volume and delta of the session, but their exact definitions are [CONFIRM: precise ΣV and ΔV definitions in the readout].
- **Bottom toggle row** — the profile types (next section) with a **Trading panel** toggle at the right end.

### Ticks grouping (the N T dropdown)

The **N T** dropdown sets the ticks grouping, with presets such as **1 T**, **20 T** and **100 T** plus a **Set Ticks Grouping** dialog (numeric field with **Cancel**, **Apply** and **Set** buttons) for custom values. Larger values group more ticks per profile row, which appears to control the row height — exact semantics unconfirmed. Changing the value rebuilds the chart; a **Building chart** spinner in between is normal.

[SCREENSHOT: The ticks-grouping dropdown open showing the 1 T, 20 T and 100 T presets, with the Set Ticks Grouping dialog open showing the numeric field and Cancel, Apply and Set buttons | profile-chart-ticks-grouping.png]

## Profile types: the bottom toggle row

The row along the bottom lists every profile type: **TPO | Dly Vol. Profile | Dly Vol. Profile (ETH) | TPO (ETH) | TPO (RTH) | Dly Vol. Profile (RTH) | Dly Delta Profile | Wkly Vol. Profile | Wkly Delta Profile | Comp. Vol. Profile**. When the window is narrow the labels abbreviate to **TPO | D-VP | D-VP (ETH) | TPO (ETH) | TPO (RTH) | D-VP (RTH) | D-DP | W-VP | W-DP | C-VP** — the same abbreviation family as the chart's quick templates ([[quick-chart-templates]]): D-VP = daily volume profile, D-DP = daily delta profile, W-VP/W-DP = weekly volume/delta profile, C-VP = composite profile of all loaded data.

> **Tip:** The row looks like radio buttons but is multi-select. Each enabled type adds an overlay — TPO letters plus a daily volume profile plus an RTH variant can all draw at once, side by side per session.

Two placement rules:

- **Daily types** (TPO and Dly profiles, including ETH/RTH variants) draw per-session inside the main chart area.
- **Weekly and Composite types** each get their own full-height vertical area at the right edge of the chart, axis-labeled **W-VP**, **W-DP** or **C-VP**, with one histogram each.

[SCREENSHOT: Profile Chart with several toggles enabled at once — TPO letters plus daily volume-profile bars per session in the main area, and three vertical areas labeled W-VP, W-DP and C-VP at the right edge each holding a full-height histogram | profile-chart-multi-overlays.png]

## The Indicators panel

The toolbar's indicators icon opens the **Indicators** panel — the real state behind the toggle row. Every profile type is an indicator instance with a systematic name: **DT:** = TPO letters, **DP: Vol** = volume profile, **DP: Delta** = delta profile; **Multiple 1 D** = one per day, **Multiple 1 W** = weekly, **Composite** = the whole loaded range. Instances live in **Chart Area 1** (the main area) or **Vertical Chart Area 1/2/3** (the right-edge columns). Each row has a trash icon (delete), an eye icon (show/hide, applies live) and a gear icon (settings), plus a green **Indicators** button.

The toggle row and this panel can briefly fall out of step after rapid toggling — when in doubt, trust the Indicators panel; it reflects what is actually drawn. Whether you can add further profile instances beyond the toggle presets via the green button is [CONFIRM: adding extra DT/DP instances through the Indicators button].

[SCREENSHOT: Indicators panel open over the Profile Chart listing Chart Area 1 with Price and several DT and DP: Vol instances, plus Vertical Chart Areas 1-3 each holding one weekly or composite instance, with the trash, eye and gear icons visible per row | profile-chart-indicators-panel.png]

## How to read it

In TPO mode each session draws as a letter profile: every letter marks a time period of the session, so a price row with many letters held trading interest through many periods, while single letters at the extremes mark brief excursions. A magenta line marks each session's POC (the most-traded/most-visited level) and dashed lines mark the value-area boundaries, following standard Market Profile conventions — see [[market-profile-tpo]] for the full interpretation toolkit.

Several visual details of this window are not yet documented and their exact meaning may vary: the letter color groups, the underlined rows, and the green, purple and yellow vertical bars flanking each session. The same applies to the heat-style colors (yellow/orange/red/green/magenta) on volume-profile bars. Describe levels by their structure (POC, value area, singles) rather than relying on these colors until they are confirmed. [CONFIRM: legend for TPO letter colors, underlined rows, per-session vertical range bars, and volume-profile heat colors]

[SCREENSHOT: Close-up of one session's TPO letter profile at 100 T grouping showing letter columns, the magenta POC row, dashed value-area boundary lines and the green/purple/yellow vertical bars at the session edges | profile-chart-tpo-closeup.png]

## Trading from the Profile Chart

The **Trading panel** toggle (right end of the bottom row) docks the same right-side trading panel as the price chart: symbol, open quantity and P/L readouts, **Qty**, **Broker/Account**, the **MKT | BID-ASK | LMT | STP | STP LMT** button grid, **Cancel + Breakeven**, **Cancel and Flat**, the OCO strategy block with **Server/Client** radios and **Link pending orders**. The **$** toolbar icon turns green when trading is enabled.

The right-click menu is the same family as the price chart — pointer/crosshair/hand/zoom modes, **Drawing Objects** and **Drawing Utilities**, **Trading Enabled** (Ctrl Alt T), **Show Trading Panel** (Ctrl Alt P), **Show Historical Orders**, **Trading Settings**, **Rebuild Chart**, **Template**, **Indicators** (Ctrl I) and **Properties** (Ctrl P) — plus one extra entry at the bottom for the indicator under the cursor (for example "DT: Multiple 1 D (2)"), a shortcut into that instance's settings.

See [[trading-from-chart]] and [[trading-panel-reference]] for the full trading workflow — everything there applies here.

[SCREENSHOT: Profile Chart with the trading panel docked on the right showing the Qty field, MKT/BID-ASK/LMT/STP/STP LMT grid, Breakeven and Cancel and Flat buttons and the OCO block, with the $ toolbar icon green | profile-chart-trading-panel.png]

## Settings reference

| Control | Where | What it does |
|---|---|---|
| Symbol dropdown | Header | Switches instrument or contract month; the chart re-downloads data (**DWT:** badge). |
| History dropdown (e.g. **30D - BT**) | Header | How much history is loaded (30D = 30 days) and its base (BT = Based on Tick). Full option list unconfirmed. |
| **N T** dropdown | Header | Ticks grouping presets plus **Set Ticks Grouping** for custom values; rebuilds the chart. |
| Profile-type toggles | Bottom row | Multi-select; each adds/removes one profile overlay. |
| **Trading panel** toggle | Bottom row, right end | Shows/hides the docked trading panel. |
| **Indicators** (Ctrl I) | Toolbar icon / right-click | The panel managing every profile instance (trash/eye/gear per row). |
| **Properties** (Ctrl P) | Right-click | Window properties dialog, as on the price chart. |
| **Rebuild Chart** | Right-click | Clears and redraws the chart — light first fix for rendering glitches. |
| **Template** | Right-click | Save or load the window configuration ([[templates-workspaces]]). |
| Per-indicator gear | Indicators panel | Opens that profile instance's own settings dialog. |

## Troubleshooting

- **The chart is blank (only a dashed price line).** Every profile type is switched off. Enable one in the bottom row (start with **TPO**), or open the Indicators panel and check whether the DT/DP instances were hidden (eye) or deleted (trash). If it still will not draw, right-click → **Rebuild Chart**.
- **Stuck on Building chart / Downloading data.** The window downloads history before rendering. **LDT:** in the main bar means it is loading data from disk; **DWT:** means it is downloading from the feed server. Large history windows and tick data take time. If it never finishes while other charts load fine, see [[data-delayed-lagging]] and consider re-downloading the data ([[download-data]]).
- **Rows are too thin, letters unreadable.** Increase the ticks grouping (**N T** dropdown — try 20 T or 100 T, or a custom value via **Set Ticks Grouping**). The chart rebuilds with taller rows.
- **Toggles look off but overlays still draw.** A brief desync between the toggle row and the Indicators panel — open the Indicators panel and manage the instances there directly.
- **Empty instrument picker.** Nothing subscribed in [[symbol-manage]].

## Tips and common mistakes

- Do not treat the toggle row as either/or — layering TPO with a daily volume profile per session is one of the window's main strengths.
- Keep the number of enabled overlays reasonable; five or more per session gets visually dense fast. Use the Indicators panel's eye icons to park overlays instead of deleting them.
- The RTH/ETH variants are separate overlays, not filters on the main TPO — enabling **TPO (RTH)** adds an RTH-only profile next to the full-session one.
- Contract months matter: the symbol dropdown loads older contracts too, and each switch re-downloads data. See [[symbol-rollover]] if your symbol seems stuck on an old contract.
- The window supports the full drawing rail — profile levels you mark with horizontal lines can be managed like any chart drawing ([[drawing-tools]]).

## Related articles

- [[market-profile-tpo]]
- [[understanding-volume-profile]]
- [[understanding-auction-theory]]
- [[deep-profile]]
- [[quick-chart-templates]]
- [[trading-panel-reference]]
