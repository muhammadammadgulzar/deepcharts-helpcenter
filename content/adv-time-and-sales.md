---
title: "Advanced Time And Sales (The Tape)"
slug: "adv-time-and-sales"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "12 min read"
description: "Read the DeepCharts tape: trade-by-trade prints with aggressor colors, side filters, and the Bid/Ask, Delta and book-imbalance bottom panels."
keywords: ["time and sales", "tape", "adv time and sales", "T&S", "time & sales", "tape reading", "green and pink rows", "gray rows", "delta panel", "book imbalance", "time and sales empty"]
---

Advanced Time And Sales is the DeepCharts tape: a live list where every executed trade appears as one row the moment it prints. Where a chart compresses activity into bars, the tape shows you each individual transaction — its time, its size, and which side of the market was the aggressor.

This article covers the window itself: how to open it, what the row colors mean, the three optional bottom panels (Bid/Ask, Delta, book imbalance), and every setting in the **Chart Settings** and **TS Settings** dialogs.

## What it is

The window answers one question: who is trading right now, how much, and at what price. Each row is a single trade print with three columns — **Time**, **Volume** and **Price**. The price cell is color-coded by where the trade executed, so at a glance you can see whether buyers are lifting the ask or sellers are hitting the bid. Optional panels at the bottom of the window aggregate those prints into running per-side totals, a delta bar, or a live view of the resting order book.

If you are new to aggressor-side logic (why a trade "at the ask" means an aggressive buyer), read [[orderflow-101]] first — the tape makes much more sense with that model in mind.

## When to use it

- Confirming whether a fast move is backed by real aggressive volume or thin prints.
- Watching execution speed and print sizes around a level you care about — pairs well with [[speed-of-tape]] and [[big-trades]].
- Monitoring one side only (all buys or all sells) with the trade-side filter.
- Keeping a compact running delta or bid/ask volume tally without opening a full chart.
- Watching resting-book pressure with the book-imbalance panel while you manage an entry on the [[advanced-dom]].

## Quick start

1. In the main bar, open **New → Adv. Time And Sales**.
2. In the **Select Instrument** window, pick your instrument (for example NQ) and confirm. Only exchanges you subscribed in [[symbol-manage]] appear here — an empty picker means nothing is subscribed yet.
3. The tape window opens and starts filling with live prints.

[SCREENSHOT: The New menu open in the DeepCharts main bar with Adv. Time And Sales highlighted, and the Select Instrument dialog visible with NQ selected | adv-ts-open-flow.png]

> **Note:** A freshly opened tape starts empty and fills only as new trades print. On video-verified behavior, duplicated and new Time And Sales windows showed no historical backfill — in a quiet market the window can stay sparse for a while. This appears to be by design, though exact backfill behavior is [CONFIRM: does a new/duplicated Adv. TS window intentionally load no trade history?].

## Window anatomy

[SCREENSHOT: Full Adv. Time And Sales window on NQ showing the title bar icons (logo, gear, link, minimize, close), the full-width symbol dropdown, and a mixed tape of green and pink price cells with blue volume numbers | adv-ts-window-overview.png]

- **Title bar**, left to right: the DeepCharts logo, the **gear** icon (the settings hub — everything lives here), the square **link** icon, minimize and close. The link icon was not demonstrated in our source material; it is presumably the standard window-link color groups (see [[link-windows]]), but exact behavior may vary.
- **Symbol dropdown** — full width, directly under the title bar (for example NQ-202609). Changing it switches the tape to another instrument.
- **The tape** — columns **Time | Volume | Price**. Rows appear top-down as trades execute. Volume prints in blue text.
- The window is freely resizable; columns stretch with it.

## How to read it

Each row's **Price** cell background encodes the aggressor side:

| Color | Meaning |
|---|---|
| Green | Trade executed at the ask — buy aggressor |
| Pink | Trade executed at the bid — sell aggressor |
| Gray | Unconfirmed — likely a trade executed between the bid and ask (inside the spread) |

The gray reading is an inference, not a confirmed fact: the **TS Settings** color fields include a **Between Bid/Ask background** that is gray by default, which strongly suggests gray rows are inside-spread prints — but this is pending confirmation, so treat it as likely rather than certain. The same color sets also include **Below Bid** and **Above Ask** backgrounds, meaning the tape can distinguish prints outside the quoted spread as well; when those colorings trigger is [CONFIRM: exact conditions for Below Bid / Above Ask row coloring].

[SCREENSHOT: Close-up of tape rows showing green (ask-side) and pink (bid-side) price cells with a burst of gray price cells in between, volume values in blue | adv-ts-row-colors.png]

A tape that is suddenly all one color usually is not the market — it is the trade-side filter (next section).

## The gear menu

The gear icon opens the full menu: **All Trades / Ask Trades / Bid Trades** (a three-way filter), **Enable Bid/Ask**, **Enable Delta**, **Chart Settings**, **Enable book imbalance**, **Book imbalance settings**, **Duplicate Adv. TS**, **Always on Top**, **Template** (Load / Save As), **Rebuild TS**, **Rename TS** and **Settings TS**.

[SCREENSHOT: Adv. Time And Sales gear menu fully open showing all items: the All/Ask/Bid Trades filter with checkmark on All Trades, the Enable Bid/Ask, Enable Delta, Chart Settings, Enable book imbalance, Book imbalance settings, Duplicate Adv. TS, Always on Top, Template, Rebuild TS, Rename TS and Settings TS entries | adv-ts-gear-menu.png]

### Trade-side filters

**All Trades** (default) shows the mixed tape. **Ask Trades** shows only ask-side executions — every visible row turns green. **Bid Trades** shows only bid-side executions — all pink. The same choice also exists inside **Settings TS** as **TS Mode**; the two stay in step.

[SCREENSHOT: Tape with the Ask Trades filter active — every row green — and the gear menu open showing the checkmark moved to Ask Trades | adv-ts-ask-filter.png]

### Bid/Ask panel

**Enable Bid/Ask** (off by default) adds a panel to the lower third of the window. It starts empty with a full-width green **Reset** button, then grows two boxes: purple on the left and green on the right, each with a count underneath. The boxes grow as trades print, and **Reset** zeroes both counters.

Based on the tape's color convention, the purple box appears to track bid-side traded volume and the green box ask-side volume since the last reset — a reasonable reading, but the exact semantics are [CONFIRM: Bid/Ask panel — do the two counters equal cumulative contracts traded at bid vs at ask since last Reset?].

[SCREENSHOT: Adv. Time And Sales with the Bid/Ask bottom panel enabled — purple box on the left, green box on the right, contract counts under each box and the full-width green Reset button | adv-ts-bid-ask-panel.png]

### Delta panel

**Enable Delta** (off by default) shows a single horizontal bar in the bottom panel: purple while the running delta is negative, green when positive, with two stacked numbers that grow as trades print (for example -5 / -3 growing to -14 / -12 during selling). **Reset** zeroes the bar.

The **Chart Settings** text fields include separate colors for "Delta Volume" and "Delta Trade", so the two numbers are most likely delta volume (top) and delta trade count (bottom) — exact mapping unconfirmed.

[SCREENSHOT: Delta bottom panel showing a purple negative delta bar with two stacked negative numbers, then the same panel green after delta turned positive | adv-ts-delta-panel.png]

### Book imbalance panel

**Enable book imbalance** (off by default) switches the bottom panel to a resting-book view: one number on the left (bid side) and one on the right (ask side). When both sides are equal, only plain numbers show. When one side dominates, that side grows a colored box sized by its share — a green box on the left when the bid book dominates, a red box on the right when the ask book dominates. The colors are confirmed by the **Imbalance settings** dialog (Bid Volume = green, Ask Volume = red).

Unlike the other two panels this mode has no **Reset** button — it mirrors the current book rather than accumulating. What exactly the numbers sum (best bid/ask level only, or several book levels) is unconfirmed, as is whether the panel needs Level 2 depth data to populate.

[SCREENSHOT: Book imbalance bottom panel in two states — equal values shown as plain numbers, and a dominant bid side with a green box on the left sized proportionally | adv-ts-book-imbalance.png]

### Window utilities

- **Duplicate Adv. TS** — opens a second tape window with the same symbol preselected. The duplicate starts with an empty tape and fresh panel counters, and each window keeps its own settings.
- **Always on Top** — keeps the window above others; exact behavior was not demonstrated in our source material but the menu item matches the standard window option.
- **Template → Load / Save As** — save or load a named Time And Sales configuration, the same pattern as chart and DOM templates ([[templates-workspaces]]).
- **Rebuild TS** — clears and rebuilds the tape. Use it as a light first fix when the tape looks glitched or frozen. Panel counters reset to zero after a rebuild.
- **Rename TS** — renames the window. [CONFIRM: Rename TS dialog contents — never opened in source material]

## Settings reference

### Chart Settings (Bid/Ask and Delta panels)

**Gear → Chart Settings** controls how the two accumulating panels measure and display.

| Section | Setting | What it does |
|---|---|---|
| GENERAL | **Period Mode** | Accumulation window. Default **Resettable** — accumulate until you press Reset. Other options: **Fixed count**, **Fixed seconds** — these appear to auto-reset using **Period Length** as the window, but exact behavior is unconfirmed. |
| GENERAL | **Period Length** | Number used by the Fixed modes. Default 10. |
| GENERAL | **Visual Mode** | Default **Pos and neg**. [CONFIRM: other Visual Mode options] |
| GENERAL | **Enable Shortcut Reset** | Off by default. [CONFIRM: which shortcut this binds] |
| COLOR SETTINGS | **Bid Volume / Ask Volume / Bid Trades / Ask Trades** | Color swatches for the panel boxes and delta bar (bid = purple, ask = green by default). |
| COLOR SETTINGS | **Color only dominant delta** | Toggle affecting the delta bar coloring. |
| TEXT SETTINGS | **Text Size / Text Color** | Panel text styling. Default size 14. |
| TEXT SETTINGS | **Pos./Neg. Delta Volume, Pos./Neg. Delta Trade** | Separate color pickers for the two numbers printed on the delta bar, per sign. |

**Apply** applies without closing; **OK** closes the dialog.

[SCREENSHOT: Chart Settings dialog open showing the GENERAL section with Period Mode dropdown expanded listing Resettable, Fixed count and Fixed seconds | adv-ts-chart-settings.png]

### Book imbalance settings

**Gear → Book imbalance settings** opens the **Imbalance settings** dialog: COLOR SETTINGS (**Bid Volume** = green, **Ask Volume** = red) and TEXT SETTINGS (**Text Size** default 14, **Bid color**, **Ask color**).

### TS Settings (the tape itself)

**Gear → Settings TS** opens the **TS Settings** dialog with five collapsible sections:

| Section | Settings |
|---|---|
| GENERAL | **Back color**, **Border color**, **Font color**, **Font size** (default 12.00), **Bold font** (applies live on Apply), **Input data** (default **Volume**; switching to **Order** changes the middle column header — the tape then shows an order-related count per print instead of contract volume; exact semantics and any further options unconfirmed), **Show milliseconds** (Time column becomes e.g. 02:03:42.382), **TS Mode** (**All trades / Ask trades / Bid trades** — same as the gear filter). |
| FILTER SETTINGS | **Filter 1** (number, default 0), **Enable Filter 2** (off), **Filter 2** (number, default 0). These look like minimum-size thresholds that gate the FILTER 1 / FILTER 2 color sets for highlighting larger prints — unconfirmed. |
| FILTER 1 | Ten color fields: **Bid**, **Below Bid**, **Between Bid/Ask** (gray by default), **Ask**, **Above Ask** backgrounds plus the five matching text colors. |
| FILTER 2 | The same ten fields with a second, more saturated color set. |
| ALERT SOUND | **Enable Filter 1**, **Bid Filter 1** and **Ask Filter 1** sound dropdowns with play-preview buttons, **Enable Filter 2**, **Bid/Ask Filter 2**. Presumably plays the chosen sound when a print passes the filter on that side — trigger semantics unconfirmed. |

[SCREENSHOT: TS Settings dialog open on the GENERAL section showing Back/Border/Font color swatches, Font size 12.00, Bold font toggle, Input data dropdown set to Volume, Show milliseconds toggle and TS Mode dropdown | adv-ts-settings-general.png]

[SCREENSHOT: TS Settings dialog scrolled to FILTER SETTINGS and the expanded FILTER 1 section showing the Bid, Below Bid, Between Bid/Ask (gray), Ask and Above Ask background and text color fields | adv-ts-settings-filters.png]

## Troubleshooting

- **Tape is empty or blank.** New and duplicated windows start empty and fill only from live prints — wait for trades, confirm the feed is connected and the market is open, then try **Gear → Rebuild TS**. If the tape stays dead while charts tick, see [[feed-connected-chart-not-moving]].
- **Only green rows / only pink rows.** The trade-side filter is set to Ask Trades or Bid Trades. Switch back to **All Trades** (also check **Settings TS → TS Mode**).
- **Middle column says Order instead of Volume.** **Settings TS → GENERAL → Input data** was switched — set it back to **Volume**.
- **Tape looks frozen or glitched.** **Gear → Rebuild TS** first; if the whole feed is down, work through [[data-delayed-lagging]].
- **Numbers in the bottom panel will not reset.** The book-imbalance mode has no Reset by design — it mirrors the current book. Only the Bid/Ask and Delta modes have the green Reset control.

## Tips and common mistakes

- The bottom panel shows one mode at a time — Bid/Ask, Delta, or book imbalance. If the panel does not look like you expect, check which of the three gear toggles is active.
- Use **Duplicate Adv. TS** plus the symbol dropdown to run two tapes side by side on different instruments; each window keeps independent filters, panels and settings.
- Save your configured tape as a template (**Gear → Template → Save As**) so you can rebuild your layout in seconds on a new workspace.
- Do not read the gray rows as a definitive signal — the inside-spread interpretation is likely but not confirmed. If your strategy depends on it, verify with support first ([[get-help]]).
- Milliseconds (**Show milliseconds**) are worth enabling when you study burst activity — same-second prints become distinguishable.

## Related articles

- [[orderflow-101]]
- [[advanced-dom]]
- [[speed-of-tape]]
- [[big-trades]]
- [[deep-trades]]
- [[symbol-manage]]
