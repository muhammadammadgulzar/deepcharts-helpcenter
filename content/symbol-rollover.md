---
title: "Symbol Rollover (Change Contract Month)"
slug: "symbol-rollover"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Roll a futures symbol to the next contract month in DeepCharts so your chart tracks the active front-month contract."
keywords: ["rollover", "symbols rollover", "contract month", "front month", "expiry", "chart shows no volume", "price different from broker", "perform rollover", "perform rollback", "roll over", "rolover"]
---

Futures contracts expire. As each expiry approaches, trading activity migrates to the next contract month, and a chart that is still tracking the old contract shows thin volume and prices that no longer match your broker. By the end of this guide you will have rolled a symbol to its new front-month contract using the **Manage Rollover** window — and you will know how to undo a rollover if you pick the wrong symbol.

If you are not sure why contracts roll in the first place, read [[understanding-market-structure-sessions|Understanding Market Structure and Sessions]] first — it explains the rollover cycle in plain language.

## Before you start

- [[connect-data-feed|A data feed is already configured]] — you will disconnect it during the rollover, then reconnect.
- [[manage-feed-connections|You know how to disconnect and reconnect your feed]].
- [[understanding-market-structure-sessions|You understand what a contract roll is]] (optional background reading).

> **Note:** Rollover changes which contract month the symbol points to locally. It does not touch your account, your subscriptions, or your broker settings.

## Steps

1. Close the price chart for the symbol you want to roll (close any chart window that uses it).
2. Disconnect from your data feed.
3. Go to **Options → Symbols Rollover**.

[SCREENSHOT: The Options menu open on the main DeepCharts bar with the Symbols Rollover entry highlighted | options-menu-symbols-rollover.png]

4. The **Manage Rollover** window opens. It has two panes: **Contracts in Roll-window** (symbols that are due to roll) and **Contracts Rolled** (symbols that have already been rolled).

[SCREENSHOT: The Manage Rollover window showing both panes — Contracts in Roll-window with at least one symbol listed, and Contracts Rolled — with the Perform Rollover and Perform Rollback buttons visible | manage-rollover-window.png]

5. Click the symbol you want to roll in the **Contracts in Roll-window** pane.
6. Press **Perform Rollover**. The symbol moves to the new contract month.

[SCREENSHOT: The Manage Rollover window immediately after a rollover, with the rolled symbol now listed in the Contracts Rolled pane | manage-rollover-after-rollover.png]

### If you rolled the wrong symbol

The same window includes a **Perform Rollback** button. Select the symbol in the **Contracts Rolled** pane and press **Perform Rollback** to undo the rollover and return the symbol to its previous contract month.

## Verify it worked

1. Reconnect your data feed.
2. Open a new chart for the symbol.
3. The chart should now show the current front-month contract: live prices that match your broker's platform and normal trading volume. If the old chart looked "dead" — barely any volume, price drifting away from your broker — that is exactly the symptom the rollover fixes.

> **Tip:** If you prefer not to roll manually every cycle, check the continuous-contract options in [[price-chart-settings|Price Chart Settings]] — they control how the chart stitches contract months together.

## If something went wrong

| Symptom | What to do |
|---|---|
| Chart still shows old prices or stale data after the rollover | Delete the symbol's local data so it re-downloads fresh — see [[delete-market-data]] |
| Gaps appear in price around the roll date | See [[gaps-in-price]] — rollover dates are a common cause of apparent gaps |
| Feed is connected but the chart is not moving at all | See [[feed-connected-chart-not-moving]] |
| Symbol is missing or not subscribed | Check your exchange subscriptions in [[symbol-manage|Symbol Manage]] |

## Related articles

- [[price-chart-settings]]
- [[gaps-in-price]]
- [[delete-market-data]]
- [[download-data]]
- [[understanding-market-structure-sessions]]
- [[symbol-manage]]
