---
title: "Session Marker"
slug: "session-marker"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "beginner"
time: "6 min read"
description: "Mark the Asian, European and USA trading sessions on your chart, with each session's high, low, open, close and imbalance range drawn as levels."
keywords: ["session marker", "trading sessions", "asian session", "european session", "us session", "session high low", "session open", "initial balance", "session times", "sesion marker"]
---

Futures markets trade almost around the clock, but the market does not behave the same way at 3 AM as it does after the US open. The Session Marker splits the trading day into its three major sessions — Asian, European and USA — and draws each one directly on your chart together with its key reference levels.

Instead of memorizing session times or squinting at the time axis, you see at a glance which session produced each part of the day's price action and where each session's highs and lows sit.

## What it is

The Session Marker displays the different market sessions (Asian, European and USA) on the chart and marks their highs and lows. For each enabled session it can draw:

- The **session high and low** lines.
- The **imbalance high and low** levels — the range built during the session's opening imbalance window (60 minutes by default).
- The **open and close** levels of the session.
- Shaded **background ranges** for the full session and for the imbalance window.
- An **open marker** at the session open, with separate colors for positive (bullish) and negative (bearish) conditions.

## When to use it

- To see instantly which session — Asian, European or USA — formed each part of the overnight and daytime range.
- To trade against overnight levels: the Asian and European session highs and lows frequently act as reaction levels once the US session opens.
- To track the early-session imbalance range and watch for breakouts or rejections at its extremes.
- To keep session opens and closes visible as reference prices without drawing them by hand every day.

## Quick start

1. Open a chart and click the bar-chart icon in the top-left corner to open the **Indicators** panel.
2. Click **Indicators** to open the full **Indicator List**.
3. Search for "Session Marker" and click **+** to add it.
4. Click the gear icon next to the indicator to open its settings, enable the sessions you trade, and check each session's start time against your market. The USA session defaults to a start time of **15:30:00**. [CONFIRM: which time zone session start times are interpreted in]
5. Pick contrasting background colors per session so the three blocks are easy to tell apart.

[SCREENSHOT: A 5-minute futures chart with the Session Marker active — three color-shaded session blocks (Asian, European, USA) visible across the day, with session high/low lines and the imbalance range highlighted inside the USA session | session-marker-on-chart.png]

## How to read it

- **Session blocks**: each shaded block is one session. Comparing their sizes tells you where the day's volatility came from — a wide European block and a narrow Asian block is a common futures pattern.
- **Session highs and lows**: these are natural support and resistance references. A US-session push through the European high is a different trade than a rejection off it.
- **Imbalance range**: the high and low formed during the session's first minutes (the **Imbalance Minutes** window). Price accepting outside this early range suggests directional conviction; repeated rotation back inside it suggests balance.
- **Open and close levels**: the session open in particular is a widely watched reference — trading above the open is broadly constructive for that session, below it is broadly weak.
- **Open marker**: flags the session open, colored positive (bullish) or negative (bearish). The exact coloring rule may vary — treat it as a quick directional cue rather than a signal.

## Settings reference

### General

| Setting | What it does |
|---|---|
| **Imbalance Minutes** | Duration of each session's imbalance window, measured from the session open. The range built in this window is drawn as the imbalance levels. Default: 60. |
| **Line Width** | Thickness of the marker lines. Default: 20. |
| **Line Style** | Line appearance for the session level lines. |
| **Extended** | Extends the session markings beyond standard trading hours. |
| **Text Size** | Font size of the session labels. Default: 11.00. |
| **Text Color** | Color of the session labels. |

### Asian, European and USA sessions

Each of the three sessions has an identical settings block:

| Setting | What it does |
|---|---|
| **Enable** | Turns the session's markings on or off. |
| **Start time** | When the session begins. The USA session defaults to 15:30:00. |
| **High/low line colors** | Colors of the session high and session low lines. |
| **Imbalance high/low colors** | Colors of the imbalance window's high and low levels. |
| **Open and close colors** | Colors of the session open and session close levels. |
| **Range background colors** | Background shading for the full session range and for the imbalance range. |

### Open Marker

| Setting | What it does |
|---|---|
| **Enable** | Shows or hides the marker at the session open. |
| **Positive marker color** | Color used for the bullish case. |
| **Negative marker color** | Color used for the bearish case. |

[SCREENSHOT: The Session Marker settings dialog showing the General group (Imbalance Minutes, Line Width, Line Style, Extended, Text Size, Text Color) with the Asian, European and USA session groups collapsed below it | session-marker-settings.png]

## Tips and common mistakes

- **Verify the start times before trusting the levels.** If a session block starts an hour off, every high, low and imbalance level inherits the error — check the defaults against your instrument's actual session schedule, including around daylight-saving changes.
- **Disable sessions you don't use.** If you only trade the US morning, running all three sessions with full backgrounds and levels clutters the chart; keep the overnight sessions but reduce them to high/low lines only via their color settings.
- **The imbalance range is only as meaningful as its window.** The default 60 minutes is a common choice, but a fast product may build its opening range in far less time — tune **Imbalance Minutes** to how your market actually opens.
- **Combine with a session-aware plan.** Session levels are context, not entries; pair them with the concepts in [[understanding-market-structure-sessions]] to decide which levels matter today.

## Related articles

- [[understanding-market-structure-sessions]]
- [[session-imbalance]]
- [[important-levels]]
- [[pivot-points]]
- [[different-types-of-input]]
- [[indicator-layout]]
