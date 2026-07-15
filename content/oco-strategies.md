---
title: "OCO (One-Cancels-the-Other) Strategies"
slug: "oco-strategies"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "15 min to complete"
description: "Attach automatic stop-loss and take-profit brackets to your entries with SL/TP and Multi OCO modes, and choose between server-side and client-side management."
keywords: ["oco", "one cancels the other", "order cancel order", "bracket orders", "stop loss take profit", "sl tp", "multi mode", "server client oco", "move be", "link pending orders", "red exclamation"]
---
By the end you will have automatic stop-loss and take-profit brackets attached to every entry, and you will know whether they live on the broker's server or inside your platform — a distinction that decides whether your protection survives a crash.

An OCO (One-Cancels-the-Other) strategy attaches two exit orders to a position: a limit order that takes profit and a stop order that limits the loss. When either one executes, the other is cancelled automatically — you can never be left with a stray exit working against a position that no longer exists.

The bracket controls live on the chart trading panel — get familiar with it below; hover the OCO control and the exit buttons to see how they interact.

[WIDGET: trading-panel-mock]

## Before you start

- Chart trading armed and the trading panel open — [[trading-from-chart]]
- You know the panel's fields and buttons — [[trading-panel-reference]]
- A SIM account for testing bracket behavior risk-free — [[simulation-accounts]]
- If you copy trades between accounts, read the Rithmic warning below first — [[trade-copier]]

## Steps

1. Open the **Trading Panel** on your chart.

2. Enable the **OCO Strategy** checkbox. The OCO block below it becomes active.

[SCREENSHOT: Trading panel with the OCO Strategy checkbox enabled, showing the Mode dropdown, SL and TP tick fields, BE and Trail toggles, and the Server/Client radio buttons | oco-block-enabled.png]

3. Pick a mode in the **Mode** dropdown. **SL/TP** covers simple, single-contract exits; **MULTI** builds named multi-bracket strategies for scaling out. The steps below cover SL/TP; the Multi workflow is in the branch further down.

4. In **SL/TP** mode, set your **SL** (stop loss) and **TP** (target price) values — each can be defined in **ticks or money**, and each is individually enabled. Optionally enable:
   - **BE** — moves the stop to breakeven automatically (ticks or money).
   - **Trail** — trails the stop behind price, with trailing amount and offset fields below.

5. Choose where the bracket is managed with the **Server / Client** radio:
   - **Server** — the bracket lives on the data-feed provider's infrastructure. It keeps working if your PC, network or platform fails. Server-side OCO is supported with Rithmic and dxFeed.
   - **Client** — the bracket is managed locally by DeepCharts. The platform must stay open and connected, or the OCO is not effective. Client mode exists because some feed providers do not offer server-side OCO.

> **Warning:** Rithmic does not allow server-side OCO together with copy trading. If you run the [[trade-copier]] on Rithmic, select **Client** — and keep DeepCharts open and online, or your stops and targets will not fire. A single Rithmic account without the copier can use **Server** normally.

6. Place your entry order as usual (button grid or the [[dom-trading-chart|on-chart DOM ladder]]). The stop and target are attached automatically; when one fills, the other cancels.

[SCREENSHOT: Chart showing a filled entry with its attached OCO bracket — stop order below and target limit above the position price | oco-bracket-on-chart.png]

### If you scale out with multiple contracts (Multi mode)

1. Set **Mode** to **MULTI** and click the **gear icon**. The **Oco Strategy** editor opens.
2. Click **New Strategy** and give the strategy a name.
3. Add brackets one by one: pick **Stop** or **Target**, set the quantity and the value in **Ticks** or **Money**, then click **Add bracket**. Repeat until every contract has an exit.
4. Enable **Move BE** on a target if you want the remaining stop moved to breakeven once that target fills.
5. Click **Save**. Saved strategies appear in the panel's dropdown whenever MULTI mode is on.

Worked example — three contracts: one Stop at 12 ticks covering the full position, three Targets at 8, 12 and 20 ticks (one contract each), with the stop moving to breakeven after Target 2 fills.

[SCREENSHOT: The Oco Strategy editor showing a named three-contract strategy with one Stop bracket at 12 ticks and three Target brackets at 8, 12 and 20 ticks, the Move BE option set on the second target, and the Add bracket and Save buttons | oco-multi-strategy-editor.png]

> **Note:** A **green checkmark** next to the selected strategy means its total quantity matches the panel's **Qty** field. A **red (!)** means they differ — execution is blocked until you change the panel Qty or edit the strategy so they match.

### If your position is already open without a bracket (Quick OCO)

Open positions display interactive **Stop Loss (SL)** and **Target Price (TP)** squares. Left-click either square to create that exit order for the position; the two exits can then be linked into an OCO pair.

### If you placed a TP and SL separately and want them linked

Click **Link pending orders** at the bottom of the OCO block. A window opens where you select the two pending orders — your take-profit and your stop — and links them retroactively into an OCO pair, so one cancels the other.

[SCREENSHOT: The Link pending orders window listing the account's pending orders with a take-profit limit and a stop order selected for linking | oco-link-pending-orders.png]

## Verify it worked

Enter a one-contract SIM trade with SL/TP mode active. Two working orders appear immediately — a stop and a limit — visible on the chart and in the [[orders-window]]. Cancel-test it: close the position with **Flat** or let one exit fill, and confirm the other order disappears on its own. For Multi mode, confirm the green checkmark shows before entering.

## If something went wrong

| Symptom | What to do |
|---|---|
| Red (!) next to Mode, orders will not execute | The MULTI strategy's total quantity does not equal the panel **Qty** — match them (change Qty or edit the strategy) |
| Stop/target vanished after closing the platform | The bracket was **Client**-side — only server-side OCO survives with the platform closed; switch to **Server** if your provider supports it |
| Brackets do not appear on copied (child) accounts | Your broker does not support server-side OCO with the copier — switch to **Client** mode and keep the platform open; see [[trade-copier]] |
| No bracket attached to a new entry | The **OCO Strategy** checkbox was not enabled before the entry — use Quick OCO squares or **Link pending orders** to protect the open position now |
| One exit filled but the other kept working | The two orders were placed independently and never linked — use **Link pending orders** for manually placed pairs |

## Related articles

- [[trading-panel-reference]]
- [[trading-from-chart]]
- [[dom-trading-chart]]
- [[orders-window]]
- [[trade-copier]]
- [[risk-manager]]
