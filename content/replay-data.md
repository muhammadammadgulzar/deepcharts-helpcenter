---
title: "Replay Market Data"
slug: "replay-data"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Replay recorded market data on a chart at any date, time and speed — practice and review sessions without a live data feed."
keywords: ["replay", "tick replay", "replay tick data", "market replay", "replay manage", "backtest", "practice trading weekend", "replay wont start", "replay my trades"]
---
By the end you will be replaying recorded market data on a chart — at the date, time and speed of your choice — with no live data feed required. Replay is how you practice on weekends, review a session bar by bar, or study a past trade in real market conditions.

Replay and a live feed are mutually exclusive: the platform replays recorded tick data instead of streaming live data, so you must disconnect the feed and close your charts before starting.

## Before you start

- DeepCharts installed and activated — [[install-deepcharts]]
- No active data feed connection — the feed selector at the top-right must not show a green connected dot; see [[manage-feed-connections]]
- All open price charts closed
- A rough idea of the exchange and date you want to replay

## Steps

1. Disconnect from any data feed and close every open price chart. Replay will not start while a chart is open or a feed is connected.

2. Open **Options → Replay Tick Data**. The **Replay Manage** window opens.

[SCREENSHOT: Options menu open on the main bar with Replay Tick Data highlighted | options-replay-tick-data-menu.png]

3. Press **Select Symbols** and choose the exchange you want to replay.

[SCREENSHOT: Replay Manage window with the exchange/symbol selection open and an exchange chosen | replay-manage-select-symbols.png]

4. Click the calendar icon, pick the date and time where the replay should begin, then press **Set**.

[SCREENSHOT: Replay Manage window with the calendar picker open, a date and start time selected, and the Set button visible | replay-manage-calendar-set.png]

5. If you want Depth of Market data during the replay, enable the Level 2 option in the replay window while the data loads — the Advanced DOM is then usable during the session. [CONFIRM: exact label and location of the Level 2 / DOM option in the Replay Manage window] See [[advanced-dom]].

6. Leave the **Replay Manage** window open and return to the main window. Open a new chart for that exchange via **New → Price Chart** — see [[first-chart]].

7. Press **Play** in Replay Manage. The chart starts building bars from the selected date and time.

[SCREENSHOT: Replay Manage window during playback showing the Play control, the speed scroll bar and the preset speed options, with a chart replaying in the background | replay-manage-playback-controls.png]

8. Adjust the pace with the speed scroll bar or the preset speed options.

> **Warning:** Keep the Replay Manage window open for the entire session. Closing it ends the replay.

> **Note:** Replay has no indicator or template settings of its own — Replay Manage controls only the exchange, date/time and speed. Charts opened during replay use the same chart template and indicator list as your live charts. If an unwanted indicator appears on a replay chart, it comes from the chart's indicator list or saved template, not from replay.

### If you want to replay one of your own past trades

There is no one-click "replay my trade" button, but the workflow is straightforward:

1. On a chart of the instrument you traded, right-click and enable **Show Historical Orders** (Ctrl Alt H). Arrows appear marking your past entries and exits.
2. Note the entry and exit times from the arrows.
3. Start a replay (steps above) at that exact date and time and watch the market around your trade.

For the statistics side of reviewing your trading, see [[performance-analysis]].

### If you chart a mini but execute on its micro

Replaying the mini contract is the recommended, most accurate option — the server's historical micro data is not as clean as mini data, so expect sync issues if you mix them. If you still need a mini chart with micro execution in replay, the workaround is:

1. Connect a live data feed.
2. Open the micro contract's chart from the backtest date — its tick data downloads from the live feed and is stored locally. Progress is visible under **Options → Show Log → Connection Logs**; large ranges take a while.
3. Once loaded, close the chart and disconnect the feed.
4. Open Replay Manage, select both the mini and the micro contract, and start the replay.

## Verify it worked

After pressing **Play**, the chart draws new bars at your chosen speed from the selected start time, and pausing or changing speed in Replay Manage takes effect immediately. Your indicators calculate on the replayed data exactly as they would live.

## If something went wrong

- **Play does nothing or replay will not start** — a price chart was still open or a data feed was still connected when you opened Replay Manage. Close all charts, disconnect the feed, and start again from step 2.
- **The chart stays empty** — the selected date has no recorded data for that exchange. Pick a different date or exchange in Replay Manage.
- **The replay stopped by itself** — the Replay Manage window was closed. Reopen **Options → Replay Tick Data** and set up the session again; keep the window open.
- **An indicator you never added shows on the replay chart** — it comes from the chart's saved template or indicator list (replay adds nothing). Remove it via the chart's indicator manager or load a clean template — see [[templates-workspaces]].
- **You only need end-of-day review, not tick playback** — the Historical feed source may be a better fit; see [[end-of-day-data]].

## Related articles

- [[manage-feed-connections]]
- [[first-chart]]
- [[advanced-dom]]
- [[templates-workspaces]]
- [[performance-analysis]]
- [[simulation-accounts]]
