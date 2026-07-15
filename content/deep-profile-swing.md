---
title: "Deep Profile Swing"
slug: "deep-profile-swing"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Reference for Deep Profile Swing: automatic volume profiles on every price swing, four swing-detection methods, swing VWAP and stop criteria."
keywords: ["profile swing", "swing profile", "swing volume profile", "swing vwap", "supply demand volume", "BOS volume", "swing detection"]
---

Deep Profile Swing automatically plots a volume profile on each price swing, based on custom parameters you set. Instead of profiling a fixed period like a day or week, it profiles the moves themselves — every impulse and retracement gets its own volume distribution.

That makes it a structural tool: it shows you how volume was distributed inside a leg of the move, where the swing's VWAP sits, and which levels created during the swing may act as supply or demand later — including around Break of Structure (BOS) points.

## What it is

The indicator detects swings using one of four methods (bar-count, new extremes, absolute reversal or tick reversal), then builds a profile — volume, ask/bid, delta, delta plus volume, or delta percentage — over each detected swing. It can also compute a VWAP per swing. Separate, independent stop criteria control when a swing is considered terminated.

If profile anatomy is new to you, explore the live histogram below first — hover the rows and note the POC and value area, the same structures every swing profile carries.

[WIDGET: volume-profile-lab]

## When to use it

- You trade market structure and want to see the volume that built each leg, not only the leg's shape.
- You look for supply/demand zones anchored to actual swing activity rather than arbitrary time windows.
- You want a swing-anchored VWAP that starts fresh with each new move.
- You analyze whether a breakout leg was supported by real participation (a full, well-distributed profile) or was thin (a hollow, low-volume leg).

## Quick start

1. Open a chart and add **Deep Profile Swing** from the chart's **Indicators** button.
2. In the **Main Swing Settings**, pick a **Swing Type** — **Reversal Tick** is a practical start for intraday futures: a swing ends after price moves a set number of ticks against the current direction.
3. Set the reversal threshold (**Tick Rev.**) large enough that ordinary noise does not end a swing.
4. In **General settings**, set **VBP Type** to **Volume** and **Display Mode** to **Profile And Lines**.
5. Apply — each detected swing now carries its own profile.

[SCREENSHOT: Chart with Deep Profile Swing active showing separate volume histograms drawn over three consecutive price swings, with swing level lines extending right | deep-profile-swing-on-chart.png]

If the chart gets crowded, switch **Display Mode** to **Lines Only** — you keep the key levels and lose the histograms.

## How to read it

- **Each profile = one swing.** The histogram shows where volume concentrated within that leg. A fat node mid-swing marks a battle zone; volume thinning into the swing's end suggests the move ran out of participants.
- **Swing highs/lows with heavy adjacent volume** often become supply or demand references on the next visit.
- **Swing VWAP** (Length Type = VWAP): the volume-weighted average price of the move itself. Price holding above a rising swing VWAP keeps the leg constructive; a confirmed break (see **VWAP Break Ticks**) ends the plot by design.
- **Delta and Delta Percentage types** reveal whether the swing was driven by aggressive buyers or sellers — a rally whose swing profile shows weak or negative delta was lifted on thin aggression and deserves suspicion.

## Settings reference

Grouped as in the indicator dialog.

### General settings

| Setting | What it does |
|---|---|
| **VBP Type** | Profile analysis method: **Volume** (total volume per level — the most active prices of the swing), **Ask Bid Volume** (separate ask and bid volume to assess buyer/seller balance), **Delta** (buy minus sell volume — direction of pressure), **Delta and Total Volumes** (both combined), **Delta Percentage** (delta as a percentage of total volume — relative strength of the pressure) |
| **Length Type** | Calculation basis: **Swing** (a volume profile per swing movement) or **VWAP** (volume-weighted average price within the swing) |
| **Include Reversal Bar** | Includes or excludes the reversal bar that marks a new swing's start from the profile |
| **Display Mode** | **Profile And Lines** (histogram plus key level lines) or **Lines Only** (key level lines only — clean charts) |

### Main Swing Settings

| Setting | What it does |
|---|---|
| **Swing Type** | Detection method: **Left Right Bar** (a swing is an extremum with a defined bar count on each side), **Highest Lowest** (new highs/lows relative to previous movement), **Reversal Absolute** (a fixed price movement against the trend triggers the reversal), **Reversal Tick** (a defined tick count against the trend — suited to short-term trading) |
| **Abs. Rev.** | Minimum price movement required for a reversal when using **Reversal Absolute** |
| **Tick Rev./Highest Lowest** | Tick quantity needed for reversal detection or for new high/low identification |
| **Right Bar** | With **Left Right Bar**: how many bars to the right must form before a swing is validated |

### Swing Stop Settings

These parameters mirror the Main Swing Settings but operate independently, so the criteria that end a swing can differ from the criteria that detect one.

| Setting | What it does |
|---|---|
| **Enable Stop Swing** | Toggles the separate swing-termination criteria on or off |

### VWAP Swing Settings

Applied when **Length Type** = **VWAP**:

| Setting | What it does |
|---|---|
| **Swing Min Ticks** | Minimum ticks required to initiate a swing — filters out small movements |
| **Swing Max Ticks** | Maximum ticks before the current swing closes and a new one starts — prevents one enormous move being treated as a single swing |
| **VWAP Break Ticks** | Ticks needed to confirm a VWAP break within the swing; once exceeded, the current swing VWAP stops plotting |

[SCREENSHOT: Deep Profile Swing settings dialog open at Main Swing Settings with the Swing Type dropdown expanded showing the four detection methods | deep-profile-swing-settings.png]

## Tips and common mistakes

- **Profiles appear on every wiggle?** Detection is too sensitive. Raise **Abs. Rev.**, **Tick Rev.** or **Right Bar** (whichever your Swing Type uses), and consider enabling the Stop Swing rules.
- **You want levels, not histograms:** **Display Mode** = **Lines Only**.
- **Swing VWAP line stops mid-move:** either **VWAP Break Ticks** was reached (a confirmed break stops the plot) or **Swing Max Ticks** was hit (the swing closed and a new one began). Both are by design, not a bug.
- **Detection method choice matters more than styling.** Left Right Bar confirms late but is stable; tick/absolute reversal reacts faster but flips more often in chop. Match it to your timeframe before tuning anything else.
- Different **Input Data**-style choices in the profile family change shapes — if this swing profile disagrees with your [[deep-profile]], compare configurations first.

## Related articles

- [[deep-profile]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]
