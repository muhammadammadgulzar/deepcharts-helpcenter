---
title: "How to Add a New Connection"
slug: "how-to-add-a-new-connection"
category: "How To"
subcategory: ""
type: "how-to"
difficulty: "beginner"
time: "2 min read"
description: "DeepDom supports multiple simultaneous connections with different brokers and data providers."
keywords: ["how to add a new connection", "deepdom how to add a new connection", "deepdom", "how to"]
---
DeepDom supports multiple simultaneous connections with different brokers and data providers. This guide explains how to create a new data‑feed connection from the Select a Connection menu and how the Data Feed Settings window is structured.

## Feed Menu Overview

Use the Select a Connection item in the DeepDom menu bar to choose which data feed you want to work with. Connections to third‑party providers supply market quotes, historical data, and in many cases order‑routing for live trading.

## Open Data Feed Settings

[SCREENSHOT: How to Add a New Connection — Open Data Feed Settings (DeepDOM) | dd-en-how-to-add-a-new-connection-01.png]

1. In the main toolbar, open the Feed menu.
2. Click Settings to open the Data Feed Settings window.

The window is divided into two main columns:

Connection List – shows all existing connections.

Connection Information – displays details for the selected connection or an access form when the connection is not yet configured.

## Adding a New Connection

[SCREENSHOT: How to Add a New Connection — Adding a New Connection (DeepDOM) | dd-en-how-to-add-a-new-connection-02.png]

Click Add Connection at the bottom of the Data Feed Settings window.

In the connection form, fill out the following fields:

Name – choose a descriptive name for the connection (for example, *Rithmic – Futures*).

Data Source – select the data provider or broker from the dropdown list.

Credentials – enter the username and password supplied by your provider.

Connect on startup – tick this option if you want DeepDom to connect automatically to this data stream when the platform starts.

When all details are correct, click Save to store the new connection. DeepDom will be able to use these credentials for automatic reconnection and future sessions.

After adding a new connection, remember to associate markets and symbols correctly via Options > Manage Symbols so that your charts receive data from the intended feed.

## Connection Access Form

The layout of the access form can vary depending on the selected integration. Some connections require only a username and password, while others may include additional configuration options such as system, server, gateway, or environment (live vs. demo). In all cases, use the Save Settings or Save button to authenticate and store your configuration.

## Still Having Trouble?

Our support team is available 24/7 and ready to help you with any issue you encounter. When you reach out, please include:

A screenshot of the issue.

A brief description of what you were trying to do.

Support Ticket (fastest response): visit www.deepcharts.com and create a support ticket directly on our website.

Email Support: you can also reach us at support@deepcharts.com. Please note that email responses may take a little longer than a support ticket.
