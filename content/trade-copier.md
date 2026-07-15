---
title: "How to Set Up the Trade Copier"
slug: "trade-copier"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "advanced"
time: "25 min to complete"
description: "Replicate trades from one parent account to multiple child accounts in real time — copy modes, resync, timings and the OCO client-mode rule."
keywords: ["trade copier", "copy trading", "trade copier beta", "parent child accounts", "replicate trades", "OrdersToOrders", "OrdersToMarket", "resync", "desynchronized", "contracts multiplier", "prop firm multiple accounts"]
---
By the end you will have a Trade Copier group replicating every trade from one Parent account to one or more Child accounts in real time — the standard setup for prop-firm traders running the same strategy across multiple funded accounts.

The copier is a beta feature with real failure modes (unfilled child orders, resync market orders, OCO brackets that need client mode); this guide walks through each of those decisions in order.

> **Warning:** Always test a new group on a SIM account before going live. A misconfigured copier can send real orders to every child account at once.

## Before you start

- All accounts (parent and children) connected in DeepCharts — [[connect-data-feed]] and [[manage-feed-connections]]
- Comfortable with the trading panel and order types — [[trading-panel-reference]]
- A SIM account for the dry run — [[simulation-accounts]]
- If you trade with stop-loss/take-profit brackets, read the OCO section below first — [[oco-strategies]]

## Steps

### Create the group

1. Click **Trading → Trade Copier - Beta** in the main bar.

[SCREENSHOT: The Trading menu open with the Trade Copier - Beta entry highlighted | trading-menu-trade-copier.png]

2. Click **Add New Group**.

3. Give the group a **Name** you will recognize — you can run multiple groups with different settings at the same time.

[SCREENSHOT: The Trade Copier window with the Add New Group configuration open, Name field filled in and the settings list visible | trade-copier-new-group.png]

### Choose the copy mode

4. Set **Copy Mode** — the most consequential setting in the group:

| Mode | How it works | Trade-off |
|---|---|---|
| **OrdersToOrders** (default) | Replicates your limit orders to the children as limit orders | No slippage, but a child's limit can go **unfilled** while the parent fills |
| **OrdersToMarket** | Waits for the parent order to **fill**, then sends market orders to the children | Guaranteed fills and synchronization, but slippage is possible |

Pick based on what hurts more in your strategy: a missed child fill (OrdersToOrders) or a worse child price (OrdersToMarket).

### Configure the children

5. Assign the **Parent** account and add the **Child** accounts to the group.

6. Set each child's **Contracts Multiplier** — the ratio of child size to parent size (for example, a child on a larger funded account can trade a multiple of the parent's quantity).

7. Add the specific symbols the group should copy — symbols are configured per group.

[SCREENSHOT: The group configuration showing the parent account, child account rows with their Contracts Multiplier values, and the symbol list for the group | trade-copier-children-multiplier.png]

### Set the timing and recovery behavior

8. Review the timing settings:

| Setting | Default | What it does |
|---|---|---|
| **Copy Delay** | 5 ms | Pause before replicating to children |
| **Synchronization Timeout** | 15 s | How long positions may differ before the group counts as out of sync. Too low causes **false desync alerts** from normal execution delays |
| **Resynchronization Attempt Delay** | 20 s | Wait between automatic resync attempts |

9. Set **Resync Mode** — what the copier does when parent and children drift apart:

| Mode | Behavior |
|---|---|
| **None** | No automatic action — you fix imbalances manually |
| **FullMarketAtBestPrice** (default) | Automatically sends whatever orders are needed to correct the imbalance |
| **CloseOnlyAtBestPrice** | Only closes excess child positions; never forces new ones open |

> **Warning:** Automatic resync can send unintended market orders to child accounts. Monitor the group manually whenever a resynchronization runs, especially in the first sessions.

10. Set **Expiration Logic** — what happens to a still-pending child order when the parent has already filled:
    - **None** (default) — the child order stays working.
    - **ToMarketAfterMs** — converts the pending child order to a market order after the set milliseconds.
    - **CancelAfterMs** — cancels the pending child order after the set milliseconds.

11. Leave the OCO fallback settings at their defaults unless support advises otherwise: **Child Brackets Tick Margin** (25), **OCO Bracket Fallback Insert** (15 s), **OCO Order Cancel Fallback** (60 s), **OCO Trailing Stop Fallback** (3 s).

### If you use OCO brackets (stop loss / take profit)

Some brokers do not support server-side OCO together with the Trade Copier. In the trading panel's OCO block, switch the radio from **Server** to **Client** so brackets replicate to the children.

> **Warning:** Rithmic does not allow server-side OCO together with copy trading — Rithmic + Trade Copier always means **Client**-side OCO. Client-side OCO is only enforced while DeepCharts stays **open and connected**: close the platform or lose the network and your pending stops and targets will not execute. (A single Rithmic account without the copier can use server-side OCO normally.) See [[oco-strategies]] for the full Server vs Client explanation.

### Start the group

12. Click **Start** and accept the disclaimer.

13. Check the parent status: it shows **Ready** when its feed is connected, or **Waiting Connection** if not.

[SCREENSHOT: The Trade Copier window with a running group, parent status showing Ready and child accounts listed with their sync state | trade-copier-group-running.png]

> **Tip:** The live documentation's suggested starting configuration is: Copy Mode **OrdersToOrders**, Copy Delay **0 ms**, Resync Mode **None**, Expiration Logic **None**, Synchronization Timeout **15 s**, Resynchronization Attempt Delay **20 s** — conservative settings with no automatic resync orders while you learn the tool.

## Verify it worked

With the group started and the parent showing **Ready**, place a small test trade on the parent (on SIM). Within moments the same order appears on every child, sized by its Contracts Multiplier, and closing the parent position closes the children. Check the [[orders-window]] on a child connection to confirm the replicated orders, and confirm no desync alert appears.

## If something went wrong

- **Child missed a trade / positions don't match** — OrdersToOrders mode: the child's limit went unfilled. Consider **OrdersToMarket** (accepting slippage) or an **Expiration Logic** of **ToMarketAfterMs**. A Resync Mode of **FullMarketAtBestPrice** auto-corrects imbalances.
- **Copier keeps flagging desynchronized but trades look fine** — **Synchronization Timeout** is too aggressive; raise it. Normal execution delays trigger false alerts at low values.
- **Brackets/OCO don't appear on child accounts** — the broker does not support server-side OCO with the copier; switch the trading panel to **Client** mode (and keep the platform open and online).
- **Unexpected market orders on children** — an automatic resync fired. Review the **Resync Mode**; use **CloseOnlyAtBestPrice** or **None** if you want less automatic intervention.
- **Parent stuck on Waiting Connection** — the parent's feed is not connected; see [[manage-feed-connections]].

Day-to-day management: each group can be **Stopped**, reopened via **Settings**, or **Removed**; individual child accounts can be toggled out of synchronization without stopping the whole group.

## Related articles

- [[oco-strategies]]
- [[trading-panel-reference]]
- [[orders-window]]
- [[simulation-accounts]]
- [[manage-feed-connections]]
- [[risk-manager]]
