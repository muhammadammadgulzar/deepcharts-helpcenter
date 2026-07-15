---
title: "Risk Manager"
slug: "risk-manager"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "15 min to complete"
description: "Set automated daily loss/profit limits, trailing drawdown and trading-hour rules that lock the account when breached."
keywords: ["risk manager", "money management", "daily loss limit", "daily profit limit", "trailing drawdown", "trailing stop", "lockout", "account locked", "unlock account", "trading hours limit", "exclude not listed"]
---
By the end you will have automated risk rules on an account — daily loss and profit limits, an optional trailing drawdown, trading hours and a symbol allow-list — that pause or flatten the account the moment a rule is breached, so the decision to stop is made before the tilt, not during it.

The Risk Manager lives inside the Portfolio window and works on any connected account, including SIM.

> **Warning:** The Risk Manager operates on the client side — it runs inside DeepCharts on your PC. If the platform is closed, the rules are not enforced. Treat it as a discipline tool, not a guarantee.

## Before you start

- A connected feed/broker account — [[connect-data-feed]]
- Know your way around the Portfolio window — [[portfolio-wallet]]
- A SIM account to test the rules on before trusting them live — [[simulation-accounts]]

## Steps

### Open the risk settings

1. Click **Trading → Show Portfolio** in the main bar.

2. Find the card for the connection or account you want to protect. Rules can be configured at either level — connection-wide or per account.

3. Click the **Settings** button on that card. The money management settings open.

[SCREENSHOT: The Portfolio window with a connection card visible and the Settings button highlighted, about to open the risk management settings | portfolio-risk-settings-button.png]

4. Turn on **Enable** — the master switch that activates the money manager for this scope.

### Set your daily limits

5. Under **Daily Loss Limit**, turn on **Enable**, enter the **Value**, and pick the **Unit** — money (**$**) or percentage (**%**). When the daily loss breaches this value, the configured action triggers.

6. Under **Daily Profit Limit**, do the same. Optionally turn on **Include Open Position** — with it enabled, open trades are closed the moment the limit is reached, counting unrealized profit toward the limit.

[SCREENSHOT: The risk settings dialog showing Daily Loss Limit and Daily Profit Limit sections, each with Enable toggle, Value field and $/% unit selector, and the Include Open Position option on the profit limit | risk-manager-daily-limits.png]

> **Note:** Why a profit limit? Prop-firm rules often cap daily gains, and many traders give back a green morning in the afternoon. A profit limit banks the day.

### If you want a trailing drawdown

7. Under **Trailing Stop** (daily trailing drawdown), turn on **Enable** and set the **Value** and **Unit** ($ or %).

8. Pick the **Action** that fires on breach:
   - **Daily Pause** — locks the account for the rest of the session.
   - **Time Pause** — locks the account for the number of minutes you select.
   - **Flat** — closes the positions without locking the account.

9. Optionally enable **Include Open Position** so the trailing rule also watches unrealized PnL — if open gains retrace beyond the limit, the action triggers.

> **Note:** This trailing rule is DeepCharts' own engine. It does not read or mirror your prop firm's official trailing-drawdown metric — every firm calculates its own rules on its own side. Use this as an independent self-discipline approximation, not as a monitor of the firm's number.

### If you want portfolio and per-position limits

10. **Portfolio Loss Limit / Portfolio Profit Limit** — the same enable/action/value/unit pattern, applied to the combined result of all open positions together (for example ES + NQ as one number).

11. **Position Loss Limit / Position Profit Limit** — per-trade thresholds. A position that exceeds its loss limit is automatically flattened, then the configured action triggers.

### If you want to restrict when and what you trade

12. Under **Limit Trading Hours**, set the **Begin Time** and **End Time** window. Time is based on the **EST timezone**, independent of your PC or chart timezone.

13. Turn on **Symbol – Exclude Not Listed** to block every symbol you have not explicitly allowed, then use **Add Symbol** to build the allow-list. Typical use: allow only Micro contracts so a mis-click can never open a Mini position.

[SCREENSHOT: The risk settings dialog scrolled to Limit Trading Hours with Begin/End time fields and the Symbol – Exclude Not Listed toggle with the Add Symbol list below it | risk-manager-hours-symbols.png]

### If you want to protect the rules from yourself

14. Turn on **Inhibit Changes Until Next Session**. Any edit to the risk settings only takes effect starting the next trading day — so you cannot raise your own loss limit mid-tilt.

## Verify it worked

Test on SIM before relying on it live: set a small **Daily Loss Limit** on a SIM account, place a losing trade past the limit, and watch the account card in the Portfolio window switch to **Lockout** with a countdown timer. That status is the observable proof the rule engine is armed and enforcing.

[SCREENSHOT: A Portfolio account card showing Lockout status with the countdown timer after a risk rule triggered | risk-manager-lockout-status.png]

## If something went wrong

- **"My account is locked — unlock me"** — a locked account unlocks automatically at **18:00 EST** (the CME session reset). The only way to unlock earlier is the DeepCharts support team doing it from the backend, which takes time — see [[get-help]].
- **"I changed my limits but nothing changed"** — **Inhibit Changes Until Next Session** is on; edits apply next trading day by design.
- **"I can't place a trade on some symbol"** — **Symbol – Exclude Not Listed** is enabled and the symbol is not on the allow-list, or you are outside the configured trading hours (remember: EST, not local time).
- **"Why did it close my winning trade?"** — a profit limit with **Include Open Position** counts unrealized PnL and closes on trigger.
- **"The Risk Manager didn't stop me yesterday"** — was DeepCharts running? It is client-side: closed platform means no enforcement. Also confirm the rule was **Enabled** and configured at the right level (connection vs account).
- **Resets seem to happen at a strange hour** — all resets and trading-hour rules follow EST (CME timezone). For EU/Asia traders that is the most common source of confusion.

## Related articles

- [[portfolio-wallet]]
- [[trading-panel-reference]]
- [[simulation-accounts]]
- [[oco-strategies]]
- [[get-help]]
