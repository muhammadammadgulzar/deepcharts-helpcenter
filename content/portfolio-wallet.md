---
title: "Portfolio (Wallet)"
slug: "portfolio-wallet"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Monitor every connected broker, account balance and P/L in one window — and pause or flatten accounts from the same cards."
keywords: ["portfolio", "wallet", "show portfolio", "account balance", "daily p/l", "open p/l", "account overview", "pause account", "flatten account", "close all positions"]
---
The Portfolio window (sometimes called the Wallet) is your account dashboard: every connected broker, every account under it, and their balances and profit/loss — all updating in real time. It is also the control surface for account-level actions: pausing trading on an account or flattening everything with one click, and it is where the [[risk-manager|Risk Manager]] rules are configured.

You open it from the main bar: **Trading → Show Portfolio**.

## What it is

One window that answers "how are all my accounts doing right now?". Each feed connection (SIM, Rithmic, dxFeed, and so on) appears as its own card, with the individual accounts under that connection listed inside it. Balances and P/L update live across all sub-accounts, so prop traders running several accounts can watch them side by side without switching windows.

[SCREENSHOT: The Portfolio window opened via Trading → Show Portfolio, showing connection cards for SIM and a live feed, each with Daily Profit and Open Profit figures and account rows underneath | portfolio-overview-cards.png]

## When to use it

- **Start of day** — confirm every connection is up and balances look right before trading.
- **While trading multiple accounts** — watch Daily P/L and Open P/L across all of them at a glance.
- **Emergency flat** — the connection-level **Close** button flattens every position under that connection at once.
- **Enforcing discipline** — the **Pause** button locks accounts for a set time; full automated rules live in the [[risk-manager|Risk Manager]].

## Quick start

1. Click **Trading → Show Portfolio** in the main bar.
2. Find the card for the connection you care about — the connection name is in the top-left corner of the card.
3. Read the connection totals: **Daily Profit** (total daily PnL across all accounts on the connection) and **Open Profit** (current unrealized PnL).
4. Expand into individual accounts to see per-account **Balance**, **Daily PnL** and **Open PnL**.

## How to read it

The window has two levels:

**Connection cards** — one per feed/broker connection. The header shows the connection name; the card totals aggregate all accounts under it. The controls on the right side of the card act on *every* account of that connection.

**Account cards** — one per account inside a connection. Each shows **Balance**, **Daily PnL** and **Open PnL**, plus its own three buttons: **Eye** (opens the detailed view with positions and account risk information), **Pause** (locks only that account) and **Close** (flattens only that account).

[SCREENSHOT: A single account card zoomed in, with the Eye, Pause and Close buttons visible next to the Balance, Daily PnL and Open PnL figures | portfolio-account-card-buttons.png]

The overview also lists **Connected Brokers**, **Sales**, **Daily P/L** and **Open P/L** per account. [CONFIRM: what exactly the Sales field reports]

When an account is paused or a Risk Manager rule triggers, its status shows **Lockout** with a countdown timer until trading resumes.

## Settings reference

| Control | Level | What it does |
|---|---|---|
| **Pause** | Connection | Locks all accounts under the connection for **1**, **10**, **30** or **60 minutes**, or the **entire session**. Locked accounts show **Lockout** status with a countdown. |
| **Close** | Connection | Instantly flattens all open positions across every account under that connection. |
| **Eye** | Account | Opens the detailed risk view for that account: positions and account risk information. |
| **Pause** | Account | Locks only that account (same duration options). |
| **Close** | Account | Flattens only that account's open positions. |
| **Settings** | Connection or account | Opens the Risk Manager (money management) rules for that level — see [[risk-manager]]. |

> **Warning:** **Close** sends real closing orders immediately — every open position under the chosen scope is flattened at market. There is no additional confirmation step described in the current documentation, so treat it as a live kill switch, not a preview.

## Tips and common mistakes

- **Pause is a lockout, not a pause button for the market** — while locked, the account cannot place trades until the countdown ends. If a Risk Manager rule caused the lockout, early unlock is only possible through DeepCharts support; see [[risk-manager]].
- **Connection-level vs account-level** — the same button name acts on very different scopes depending on which card it sits on. Check which card you are on before clicking **Close**.
- **P/L looks frozen** — the Portfolio updates from the live connection. If nothing moves, verify the feed is connected in [[manage-feed-connections]].
- **Testing the buttons safely** — use a SIM account first; see [[simulation-accounts]].

## Related articles

- [[risk-manager]]
- [[orders-window]]
- [[trading-panel-reference]]
- [[performance-analysis]]
- [[simulation-accounts]]
- [[manage-feed-connections]]
