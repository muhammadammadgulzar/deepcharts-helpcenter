---
title: "Portfolio-Risk Manager"
slug: "portfolio-risk-manager"
category: "Trading"
subcategory: ""
type: "how-to"
difficulty: "intermediate"
time: "6 min read"
description: "Manage and track active orders, positions, and execution history through the dedicated Orders window interface"
keywords: ["portfolio risk manager", "deepdom portfolio risk manager", "deepdom", "trading"]
---
Manage and track active orders, positions, and execution history through the dedicated Orders window interface

## Risk Manager

The Deepdom Risk Manager enables traders to apply professional, automated risk controls directly within the platform.

By defining strict risk management rules, traders can enforce discipline in real time. If any predefined rule is breached, the account is automatically locked for the day (or for a specified duration), ensuring adherence to the trading plan and preventing emotional decision-making.

## 1. How to Access Risk Manager

1. Go to Trading in the main navigation bar.
2. Click Show Portfolio .

[SCREENSHOT: Portfolio-Risk Manager — 1. How to Access Risk Manager (DeepDOM) | dd-en-portfolio-risk-manager-01.png]

## 2. Overview Section

In the Overview tab, you can see all accounts connected to Deepdom.

[SCREENSHOT: Portfolio-Risk Manager — 2. Overview Section (DeepDOM) | dd-en-portfolio-risk-manager-02.png]

You will see one main card per connection (for example: SIM, Rithmic, Dxfeed).

[SCREENSHOT: Portfolio-Risk Manager — 2. Overview Section (DeepDOM) | dd-en-portfolio-risk-manager-03.png]

#### Connection Card Information

Connection Name (top-left, e.g., SIM)

Daily Profit – Total daily PnL across all accounts under that connection

Open Profit – Current unrealized PnL

[SCREENSHOT: Portfolio-Risk Manager — Connection Card Information (DeepDOM) | dd-en-portfolio-risk-manager-04.png]

#### Connection-Level Controls

On the right side of the connection card:

#### Pause Button

Allows you to pause trading for:

1 minute

10 minutes

30 minutes

60 minutes

Entire session

#### When paused:

All accounts under the connection are locked

"Lockout" status appears

A countdown timer shows when trading will resume

[SCREENSHOT: Portfolio-Risk Manager — When paused: (DeepDOM) | dd-en-portfolio-risk-manager-05.png]

#### Close Button

Closes (flattens) all open positions across every account under that connection instantly.

## 3. Individual Account Cards

Each account under a connection has its own control panel.

[SCREENSHOT: Portfolio-Risk Manager — 3. Individual Account Cards (DeepDOM) | dd-en-portfolio-risk-manager-06.png]

#### Account-Level Buttons

• Eye Button – Opens detailed risk management view of that account

• Pause Button – Pauses only that specific account

• Close Button – Flattens only that account

#### Account Information

• Balance

• Daily PnL

• Open PnL

## 4. Money Management Settings (Client Side)

Click the Settings button to configure risk rules.

You will be prompted to choose:

• Account-level settings

• Connection-level settings

[SCREENSHOT: Portfolio-Risk Manager — 4. Money Management Settings (Client Side) (DeepDOM) | dd-en-portfolio-risk-manager-07.png]

Important: The Risk Manager operates on the client side. If the platform is closed, the money manager will not function.

## 5. General Settings

[SCREENSHOT: Portfolio-Risk Manager — 5. General Settings (DeepDOM) | dd-en-portfolio-risk-manager-08.png]

#### Enable

Activate or deactivate the money manager.

#### Symbol – Exclude Not Listed

If enabled, you can only trade symbols that you manually add.

Example: If you want to avoid accidentally trading the Mini instead of the Micro contract, add only the Micro symbol. All other symbols will be blocked.

## 6. Daily Loss Limit

[SCREENSHOT: Portfolio-Risk Manager — 6. Daily Loss Limit (DeepDOM) | dd-en-portfolio-risk-manager-09.png]

• Enable – Activate daily loss protection

• Value – Maximum loss allowed

• Unit – Money ($) or Percentage (%)

Once breached, the selected action will be triggered.

## 7. Daily Profit Limit

[SCREENSHOT: Portfolio-Risk Manager — 7. Daily Profit Limit (DeepDOM) | dd-en-portfolio-risk-manager-10.png]

• Enable: Activate daily Profit protection

• Value: Maximum Profit allowed

• Unit – Money ($) or Percentage (%)

• Include Open Position – If enabled, open trades will be closed once the limit is reached.

## 8. Trailing Stop (Daily Trailing Drawdown)

#### Enable

Activate trailing limit.

#### Action Options:

[SCREENSHOT: Portfolio-Risk Manager — Action Options: (DeepDOM) | dd-en-portfolio-risk-manager-11.png]

• Daily Pause – Lock account for the session

• Time Pause – Lock account for selected minutes

[SCREENSHOT: Portfolio-Risk Manager — Action Options: (DeepDOM) | dd-en-portfolio-risk-manager-12.png]

• Flat – Close positions but do not lock

#### Value & Unit

Set in money or percentage.

#### Include Open Position

If enabled, trailing stop applies to unrealized PnL as well.

Example: If open profit retraces more than the trailing limit, the system triggers the selected action.

## 9. Portfolio-Based Limits

#### Portfolio Loss Limit

Controls total loss across all open positions (e.g., ES + NQ combined).

[SCREENSHOT: Portfolio-Risk Manager — Portfolio Loss Limit (DeepDOM) | dd-en-portfolio-risk-manager-13.png]

#### Same configuration options:

• Enable

• Action

• Value

• Unit

#### Portfolio Profit Limit

Same logic as Daily Profit Limit but applied across the entire portfolio.

[SCREENSHOT: Portfolio-Risk Manager — Portfolio Profit Limit (DeepDOM) | dd-en-portfolio-risk-manager-14.png]

## 10. Position-Based Limits

#### Position Loss Limit

Applies to individual trades. If exceeded, the position is automatically flattened and action triggered.

#### Position Profit Limit

Same logic but for profit targets on individual positions.

[SCREENSHOT: Portfolio-Risk Manager — Position Profit Limit (DeepDOM) | dd-en-portfolio-risk-manager-15.png]

## 11. Limit Trading Hours (EST Timezone)

[SCREENSHOT: Portfolio-Risk Manager — 11. Limit Trading Hours (EST Timezone) (DeepDOM) | dd-en-portfolio-risk-manager-16.png]

You can restrict trading to specific time windows.

#### Important:

• Time is based on EST timezone

• Independent of your PC timezone or chart timezone

#### Set:

• Begin Time

• End Time

## 12. Add Symbol

[SCREENSHOT: Portfolio-Risk Manager — 12. Add Symbol (DeepDOM) | dd-en-portfolio-risk-manager-17.png]

Add or remove symbols allowed for trading.

If Symbol – Exclude Not Listed is enabled, only added symbols can be traded.

## 13. Inhibit Changes Until Next Session

[SCREENSHOT: Portfolio-Risk Manager — 13. Inhibit Changes Until Next Session (DeepDOM) | dd-en-portfolio-risk-manager-18.png]

If enabled:

• Any changes made to risk settings will only apply on the next trading day.

## 14. Status

Status may show:

Lockout – The account is locked due to rule violation. A countdown timer shows when trading will resume.

[SCREENSHOT: Portfolio-Risk Manager — 14. Status (DeepDOM) | dd-en-portfolio-risk-manager-19.png]

## 15. Detailed Account View

Click the Eye button to see detailed positions and account risk information.

#### Important Note

The Risk Manager follows CME timezone (EST) for daily resets.

#### If locked for the day:

• The account automatically unlocks at 18:00 EST.

• The only way to unlock the account after the timeout of Risk Manager is triggered is to ask the Deepdom Support team to unlock it from the backend, and it can take some time.

[SCREENSHOT: Portfolio-Risk Manager — If locked for the day: (DeepDOM) | dd-en-portfolio-risk-manager-20.png]

## Summary

The Deepdom Risk Manager provides:

• Daily loss & profit limits

• Trailing drawdown protection

• Portfolio-level risk controls

• Position-based limits

• Time-restricted trading

• Symbol-based protection

• Automatic lockout enforcement

It transforms risk management from a discretionary decision into an automated discipline system—ensuring traders strictly follow their predefined risk plan.

## Still Having Trouble?

Our support team is available 24/7 and ready to help you with any issue you encounter. When you reach out, please include:

A screenshot of the issue.

A brief description of what you were trying to do.

Support Ticket (fastest response): visit www.deepcharts.com and create a support ticket directly on our website.

Email Support: you can also reach us at support@deepcharts.com. Please note that email responses may take a little longer than a support ticket.
