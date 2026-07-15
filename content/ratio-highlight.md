---
title: "Ratio Highlight"
slug: "ratio-highlight"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Marks bars whose Ratio High or Ratio Low falls inside your thresholds, flagging potential buyer or seller absorption at bar extremes."
keywords: ["ratio highlight", "ratio high", "ratio low", "absorption", "buyer exhaustion", "seller exhaustion", "bid absorption", "ask absorption", "footprint ratio"]
---

The Ratio Highlight indicator places markers on bars whose **Ratio High** and **Ratio Low** values meet your user-defined thresholds. It works by analyzing the ratio of trading activity between consecutive price ticks at the extremes of a bar, which makes it a fast way to spot potential buyer and seller absorption without reading every footprint column by hand.

An extreme ratio at the top or bottom of a bar suggests that one side pressed hard into the extreme and got little price movement for it — the classic signature of exhaustion or absorption.

## What it is

Ratio Highlight is an orderflow exhaustion detector. For each bar it evaluates the Ratio High (activity ratio at the top of the bar) and Ratio Low (activity ratio at the bottom of the bar) and highlights the bar with a colored marker when the value falls between your **Min Ratio** and **Maximum Ratio** thresholds. It answers the question "did buying or selling get absorbed at this bar's extreme?"

[CONFIRM: the exact Ratio High / Ratio Low formula — which consecutive price levels of the bar are compared and in which direction the ratio is taken]

[SCREENSHOT: Chart window with Ratio Highlight applied — a swing high where a bearish bar carries an Ask Absorption marker at its top, and a swing low where a bullish bar carries a Bid Absorption marker, both colors clearly distinguishable | ratio-highlight-chart-overview.png]

## When to use it

- You trade reversals at exhaustion points and want bars with extreme top/bottom ratios flagged automatically.
- You read footprints and want a pre-filter that tells you which bars are worth opening in [[deep-print]].
- You look for absorption — aggressive market orders being swallowed by passive limit orders — at swing highs and lows.
- You want a visually light overlay: the indicator adds only colored markers, not a full data pane.

## Quick start

1. Open the **Indicator List** on your chart.
2. Find **Ratio Highlight** and click **+** to add it.
3. Click the **Settings** icon next to the indicator to open its configuration window.
4. Leave the ratio selection in its default mode, which highlights **Ratio High** in bearish bars and **Ratio Low** in bullish bars — the combination that surfaces both buyer and seller exhaustion signals.
5. Set **Min Ratio** high enough that ordinary bars stop qualifying; raise it further if your chart shows markers on most bars.
6. Pick clearly contrasting **Bid Absorption Color** and **Ask Absorption Color** values, then apply.

[SCREENSHOT: Ratio Highlight settings dialog showing the Ratio section with the ratio selection, Min Ratio and Maximum Ratio fields, and the Plot section with Bid Absorption Color, Ask Absorption Color and Opacity | ratio-highlight-settings-dialog.png]

## How to read it

- **Ratio High marker (Ask Absorption Color) — buyer exhaustion.** Buyers pushed into the top of the bar but their aggression produced an extreme activity ratio at the high: buying was absorbed and the level held. Near a resistance level or after an extended run-up, this is a warning that the upside push is running out of participants.
- **Ratio Low marker (Bid Absorption Color) — seller exhaustion.** The mirror image at the bar's low: significant sell-side weakness, sellers pressing into the low and getting absorbed. At support after a decline, this flags a potential bounce.
- **Context decides the trade.** A single marker inside a rotating range is noise; a marker printed exactly at a prior high, session extreme or heavy profile level is information. Combine with a levels tool and the surrounding delta picture.
- **Confirmation still matters.** Absorption tells you an attempt failed; it does not guarantee the reversal. Wait for the market to actually turn — a strong opposing bar or a shift in delta — before acting.

## Settings reference

Grouped as in the settings dialog.

### Ratio Settings

| Setting | What it does |
|---|---|
| **Ratio selection** | Controls which ratios are highlighted. In default mode it highlights **Ratio High** in bearish bars and **Ratio Low** in bullish bars, displaying both buyer and seller exhaustion signals. |
| **Min Ratio** | Minimum value of the ratio threshold. Only bars with ratio values at or above this minimum are highlighted. |
| **Maximum Ratio** | Maximum value of the ratio threshold. Only bars with ratio values at or below this maximum are highlighted. |

### Plot Settings

| Setting | What it does |
|---|---|
| **Bid Absorption Color** | Color of the marker for **Ratio Low** (seller exhaustion), displayed on bars showing significant sell-side weakness. |
| **Ask Absorption Color** | Color of the marker for **Ratio High** (buyer exhaustion), displayed on bars showing significant buy-side weakness. |
| **Opacity** | Transparency of the markers. Lower values make markers more transparent; higher values make them more opaque and visible. |

## Tips and common mistakes

- **Use both thresholds as a band.** **Min Ratio** and **Maximum Ratio** together define a window, letting you exclude both unremarkable ratios and pathological outliers (for example, levels where almost nothing traded on one side and the ratio explodes without meaning).
- **Calibrate per instrument.** Ratio distributions differ between thick and thin markets; thresholds that are selective on one contract may flag every other bar on another. Re-tune when you switch symbols.
- **Do not fade every marker.** Exhaustion signals against a strong trend fail frequently. Treat markers as locations to start watching, and require confirmation from structure or the tape.
- **Verify in the footprint.** When a marker prints at a level you care about, open the bar in [[deep-print]] and check the actual bid/ask volumes at the extreme — the ratio summarizes the footprint, it does not replace it.

## Related articles

- [[understanding-icebergs-absorption]]
- [[orderflow-101]]
- [[reading-a-footprint]]
- [[deep-print]]
- [[different-types-of-input]]
- [[indicator-layout]]
