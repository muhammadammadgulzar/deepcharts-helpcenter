---
title: "Confluence Identifier"
slug: "confluence-identifier"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "advanced"
time: "7 min read"
description: "Automatically find high-probability support and resistance zones where volume profile levels, price swings and retracements align."
keywords: ["confluence identifier", "confluence", "support resistance zones", "volume profile levels", "poc value area", "confluence zones", "confluance"]
---

Most strong support and resistance levels are strong because several independent reasons point at the same price: a profile POC, a prior swing, a retracement level. The Confluence Identifier automates that reasoning — it identifies high-probability support and resistance zones by combining multiple sources of market data and highlighting the prices where they align.

It is one of the most configurable indicators in DeepCharts, so this reference walks through each settings group in the order the dialog presents them.

## What it is

The Confluence Identifier detects confluence areas from three families of evidence:

- **Volume Profile levels** — POC, Value Area edges, Peaks and Valleys from up to three separate Volume By Price profiles.
- **Price action swings** — swing highs and lows found by a Zig Zag engine.
- **Trend retracement levels** — 38.2%, 50%, 61.8% and 75% retracements of the main swing.

When enough of these elements land within a defined price range (your tick sensitivity), the indicator highlights that range as a potential support or resistance zone. Zones backed by more confluences are visually emphasized as stronger.

## When to use it

- To build an objective level map: instead of hand-picking levels, you define the evidence and the indicator scores every price by how much evidence stacks there.
- To rank zones by strength — a 5-confluence zone is a different trading proposition than a 2-confluence zone, and the coloring reflects that.
- To combine profile analysis and price action in one view without running half a dozen separate studies.
- To frame trades: confluence zones are natural locations for entries, stops and targets when they line up with your directional read.

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Confluence Identifier" and click **+** to add it.
4. Click the gear icon next to the indicator to open its settings. Start modestly: enable one Volume By Price profile and Zig Zag swings, and leave retracements off until you have a feel for the output.
5. As you enable more sources, raise **Minimum Number of Confluences** and reduce **Tick Sensitivity** so only the most significant zones survive. A worked configuration from the documentation uses three Volume Profiles, price swings and last-swing retracements with a minimum of 5 confluences and 3-tick sensitivity.

[SCREENSHOT: A futures chart with the Confluence Identifier active — several shaded support/resistance zones of varying color intensity, the strongest zone sitting where a profile POC, a swing low and a retracement level align | confluence-identifier-on-chart.png]

## How to read it

- **Each highlighted zone is a price range where multiple elements aligned** within your tick sensitivity. Zones above price act as candidate resistance, zones below as candidate support.
- **Color encodes strength.** The Support & Resistance Colors settings tie zone color to confluence count, so stronger zones (more confluences) stand out — treat those as the primary decision levels.
- **Fewer, wider zones vs. more, tighter zones is your trade-off.** Smaller **Tick Sensitivity** values produce more precise zones; larger values produce broader ones. A higher **Minimum Number of Confluences** yields fewer but stronger zones.
- **Zones are locations, not directions.** The indicator tells you where a reaction is likely, not which way price will break; combine it with your trend and orderflow read.

## Settings reference

### Data Settings

| Setting | What it does |
|---|---|
| **Input Data** | What the profiles measure: **Volume** (traded volume at each price level) or **Orders** (number of executed orders). See [[different-types-of-input]]. |
| **Filter Min** | Minimum threshold that filters out insignificant values. |
| **Filter Max** | Maximum threshold; 0 = no maximum filter. |

### Confluence Settings

| Setting | What it does |
|---|---|
| **Tick Sensitivity** | The price range, in ticks, within which elements count as aligned. Smaller values = more precise zones; larger values = broader zones. |
| **Minimum Number of Confluences** | How many elements must align to create a zone. Higher values yield fewer, stronger zones; lower values produce more frequent zones. |
| **Starting Mode** | Where the calculation begins: **Zig Zag** (uses price swings based on Zig Zag logic) or **Date** (starts from a specific date). |
| **Start Date** | The starting date, used when **Date** mode is selected. |
| **Absolute % of Reversal for Zig Zag Trend** | The minimum price reversal used to identify the swing points that determine the calculation start. |
| **Number of Swings** | How many swings are considered when determining the calculation start point. |

### Zig Zag Swing Settings

| Setting | What it does |
|---|---|
| **% Absolute Variation for Zig Zag Inversion** | The price-reversal percentage used to identify the swings that feed the confluence calculation. |
| **Enable Zig Zag Swing** | Includes swing highs and lows as confluence elements. |
| **Include Swings in the First Half** | Enabled: older swing points are included. Disabled: only recent swings are considered. |

> **Note:** There are two Zig Zags in this indicator, and they serve different jobs. The first (in Confluence Settings) is used only to determine the calculation start date and can use a larger percentage. The second (here) identifies the swings used for confluences and should use a **smaller percentage** so minor swings are included.

### Volume By Price Profiles

Up to three separate Volume By Price profiles can be enabled, each with its own block:

| Setting | What it does |
|---|---|
| **Enable** | Turns this profile on or off. |
| **Profile Settings** | Profile type — Daily, Weekly, Monthly or Composite — plus tick grouping and volume thresholds. |
| **Enablements** | Which profile elements participate in confluence: POC, Value Area, Peaks, Valleys, Delta Imbalances. |
| **Visual Appearance** | Colors, thickness and line style for this profile's levels. |
| **Include by Number** | Toggles between a fixed number of recent profiles and all profiles from the start date. |
| **Number of Profiles** | How many recent profiles are used when the fixed option is enabled. |

### Trend Retracement Enables

| Setting | What it does |
|---|---|
| **Enable Retracements** | Adds retracement levels (38.2%, 50%, 61.8%, 75%) of the main swing as confluence elements. |
| **Exclude Previous Retracements** | Enabled: only the most recent swing's retracements are used. Disabled: previous retracements are included as well. |

### Developing Settings

| Setting | What it does |
|---|---|
| **Zig Zag line display** | Shows the Zig Zag lines on the chart, with customizable colors for bullish and bearish swings, so you can see the market structure the indicator is working from. |

### Support & Resistance Colors

| Setting | What it does |
|---|---|
| **Zone colors by confluence count** | Sets zone colors based on how many confluences back the zone, so stronger zones are visually emphasized. |

[SCREENSHOT: The Confluence Identifier settings dialog showing the Confluence Settings group (Tick Sensitivity, Minimum Number of Confluences, Starting Mode) with the three Volume By Price profile blocks collapsed below | confluence-identifier-settings.png]

## Tips and common mistakes

- **Scale the thresholds with the evidence.** As more elements are enabled (multiple VBPs, swings, retracements), increase the **Minimum Number of Confluences** and reduce **Tick Sensitivity** — otherwise nearly every price qualifies as a zone and the tool stops discriminating.
- **Get the two Zig Zag percentages right.** A common misconfiguration is using the same percentage for both: the start-date Zig Zag should be coarser (larger %), the swing Zig Zag finer (smaller %) so minor swings can contribute to confluences.
- **Declutter with separate profile indicators.** For a cleaner chart, you can disable the VBP lines here and display the Volume Profiles using separate indicators such as [[deep-profile]] — the confluence zones still calculate from the enabled elements.
- **Validate zones against the concept.** If you are unsure why a POC or Value Area edge should act as support, read [[understanding-volume-profile]] first — the indicator is only as useful as your interpretation of the evidence it stacks.

## Related articles

- [[understanding-volume-profile]]
- [[deep-profile]]
- [[zig-zag]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]
