---
title: "Symbol Subscription Issues"
slug: "symbol-subscription-issues"
category: "Common Issues"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "2 min read"
description: "This guide helps you resolve missing real‑time data or unavailable instruments in DeepDom when the problem is caused by symbol subscription or data‑feed connection settings."
keywords: ["symbol subscription issues", "deepdom symbol subscription issues", "deepdom", "common issues"]
---
This guide helps you resolve missing real‑time data or unavailable instruments in DeepDom when the problem is caused by symbol subscription or data‑feed connection settings.

### Step 1 – Confirm Data Feed Connection

[SCREENSHOT: Symbol Subscription Issues — Step 1 – Confirm Data Feed Connection (DeepDOM) | dd-en-symbol-subscription-issues-01.png]

Make sure your data stream is correctly connected (the connection indicator in the DeepDom toolbar should be green). Also verify that you have purchased the correct data package for the markets you want to analyze, including Market Depth / Level 2 if required.

### Step 2 – Check Symbol Subscription

[SCREENSHOT: Symbol Subscription Issues — Step 2 – Check Symbol Subscription (DeepDOM) | dd-en-symbol-subscription-issues-02.png]

If the feed is connected but some instruments still show no data, check that the corresponding markets are correctly subscribed with your data provider and linked to the proper connection inside DeepDom.

#### Update symbol subscriptions

Disconnect the data feed (remove the check next to the connection name in the Feed menu).

Close all open Workspaces and charts.

Go to Options > Symbols Manage .

Verify that all required markets are added and that, next to each market name, the correct connection name is associated.

If a market is linked to the wrong connection, select it, right‑click, and choose the correct connection from the context menu.

Click Select (or the equivalent confirm button) to save the changes.

Close the Symbol Management window.

### Step 3 – Reconnect and Test

After updating subscriptions:

Reconnect the data feed from the Feed menu.

Open a chart or Work Plan that uses the affected symbols.

DeepDom should now display real‑time data and depth for all instruments contained in the subscribed markets that are associated with the connection.

## Still Having Trouble?

Our support team is available 24/7 and ready to help you with any issue you encounter. When you reach out, please include:

A screenshot of the issue.

A brief description of what you were trying to do.

Support Ticket (fastest response): visit www.deepcharts.com and create a support ticket directly on our website.

Email Support: you can also reach us at support@deepcharts.com. Please note that email responses may take a little longer than a support ticket.
