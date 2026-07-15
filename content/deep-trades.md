---
title: "Deep Trades"
slug: "deep-trades"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Marks large aggressive orders on the chart and reveals the passive liquidity that absorbed them, using four distinct marker types."
keywords: ["deep trades", "large orders", "big orders on chart", "MBO", "iceberg", "diamond marker", "deep trades no markers", "deep trades history missing"]
---

Deep Trades visualizes large aggressive market orders in real time — and, unlike a simple large-trade bubble, it also shows you what was on the other side of the trade. Four marker shapes tell you whether the order swept small resting quantities, hit a significant passive wall, or clashed head-on with another large player.

It is the successor to [[big-trades|Big Trades]]: Big Trades only marks where large trades executed; Deep Trades reveals the passive side — whether resting liquidity was there, how the trade was composed, and when two large orders collided directly.

## What it is

Deep Trades is an orderflow indicator that plots shape-coded markers on the chart wherever a large aggressive order executes. It answers the question "what was on the other side of that trade?" by connecting aggressive orders to the passive liquidity that filled them. It requires order-by-order (MBO) market data, which is why it only works on specific feeds.

> **Warning:** Feed compatibility is a hard requirement. Deep Trades works on **Rithmic Level 1**, **Rithmic Level 2**, and **dxFeed Level 2** (with **DOM Type = MBO** for CME group symbols). It does **not** work on dxFeed Level 1 or CQG, because those feeds do not provide MBO data. On an MBO-capable feed, also set **Source Type = MBO** in **Source Settings**. If your feed is not compatible, use [[big-trades]] instead with Aggregate input.

[SCREENSHOT: Chart with Deep Trades active showing several marker types at once — at least one square, one hollow circle, one filled circle and one diamond marker on recent candles, with ask-colored and bid-colored markers distinguishable | deep-trades-chart-markers.png]

## When to use it

- You trade with orderflow and want to see where institutional-size orders execute as they happen.
- You want to distinguish a large order that swept thin liquidity from one that ran into a real wall.
- You are looking for direct clashes between large aggressive and large passive orders (diamond markers) — the most significant events the tool detects.
- You use icebergs and absorption in your playbook (see [[understanding-icebergs-absorption]]).

## Quick start

1. Confirm your feed: Rithmic L1/L2 or dxFeed L2. On dxFeed L2, set **DOM Type = MBO** for CME group symbols; on any MBO-capable feed set **Source Type = MBO** in **Source Settings**.
2. Open the **Indicator List** on your chart, find **Deep Trades** and click **+**.
3. Click the **Settings** icon next to Deep Trades.
4. Under **Data Settings**, set **Filter Mode**. Starting configuration: **Automatic** with **Intensity = Medium**, or **Manual** with a **Filter** around 30 contracts on a liquid index future — then tune to your instrument.
5. Leave **Standard Dev.** at its default (recommended) so marker sizes scale sensibly.
6. Apply and watch markers appear as large trades execute.

[SCREENSHOT: Deep Trades settings dialog open on Data Settings, showing Chart Area, Days to Load, and Filter Mode set to Automatic with the Intensity dropdown expanded (Low/Medium/Strong) | deep-trades-settings-data.png]

> **Note:** Existing users must run a one-time database migration before Deep Trades history can be stored: **Options → Database → Settings → Migrate/Compress**. Disconnect your feeds and close the workspace first; the migration takes roughly 10–15 minutes.

## How to read it

| Marker | Meaning |
|---|---|
| **Square** | A large order hit significant resting passive liquidity. |
| **Hollow Circle** | A large trade composed of many small quantities combined together. |
| **Filled Circle** | A large trade filled by big individual quantities in one or few executions. |
| **Diamond** | A large aggressive order clashed directly with a large resting passive order — the most significant marker. |

Markers are colored by side (**Ask Color** for buy aggression, **Bid Color** for sell aggression), with separate "Battle" colors for diamond clashes. Marker size scales with trade size.

Reading priority: diamonds first (two large players disagreeing about price), then squares (aggression meeting a wall — potential absorption), then circles (composition detail on the aggressive side). A cluster of squares or diamonds that fails to move price is classic absorption; the same cluster followed by continuation tells you the wall broke.

Every marker starts life as prints on the tape. Watch the live Time & Sales below and filter by Ask or Bid to get a feel for the aggressive executions Deep Trades is sizing up.

[WIDGET: tape-lab]

## Settings reference

Grouped as in the settings dialog.

### Data Settings

| Setting | What it does |
|---|---|
| **Chart Area** | Where markers render: Horizontal or Vertical panel, plus the panel number. |
| **Days to Load** | How many days of stored large-trade history to display. |
| **Filter Mode** | **Manual**: you set **Filter** = minimum contracts per trade (for example 30). **Automatic**: the platform picks thresholds; you choose the **Intensity** (**Low / Medium / Strong**). |

### Plot Settings

| Setting | What it does |
|---|---|
| **Standard Dev.** | Controls marker-size scaling. Keeping the default is recommended. |
| **Minimum / Maximum Opacity** | Opacity range across marker sizes. |
| **Ask Color / Ask Color Battle** | Colors for buy-side markers and buy-side diamond clashes. |
| **Bid Color / Bid Color Battle** | Colors for sell-side markers and sell-side diamond clashes. |

### Marker Settings

| Setting | What it does |
|---|---|
| **Minimum / Maximum Size** | The size range markers scale between. |

### Alert Settings

| Setting | What it does |
|---|---|
| **Enable Alert Sound** | Turns audio alerts on. |
| **Bid Alert / Ask Alert** | Separate sounds for bid-side and ask-side detections. |

## Tips and common mistakes

- **No markers at all?** Nearly always feed-related: dxFeed L1 and CQG do not work, DOM Type is not MBO, or **Source Type** is not set to MBO in Source Settings. After that, check the Manual Filter is not set too high for the instrument.
- **No history for past days?** By design. MBO data cannot be backfilled from the provider — historical markers exist only for periods when your platform was running and connected. A week when your PC was off has no Deep Trades history.
- **Too many or too few markers:** in Manual mode adjust the minimum contracts; in Automatic mode change the Intensity.
- **Let the platform calibrate thresholds.** Run **Options → Tools → Big Trades Analysis** — it calculates optimal per-instrument thresholds (used with Automatic filter mode) and saves them automatically. Re-run it weekly or monthly as liquidity conditions change.
- **Combine with the table.** Pair the markers with [[deep-stats]] to confirm absorption numerically (COT and Effort readings) instead of trusting a single marker.

## Related articles

- [[orderflow-101]]
- [[understanding-icebergs-absorption]]
- [[big-trades]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]
