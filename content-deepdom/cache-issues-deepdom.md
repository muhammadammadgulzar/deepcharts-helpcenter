---
title: "Cache Issues"
slug: "cache-issues-deepdom"
category: "Common Issues"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "3 min read"
description: "This article explains how to resolve Data Gap errors in DeepDom by clearing the local cache database."
keywords: ["cache issues", "deepdom cache issues", "deepdom", "common issues"]
---
This article explains how to resolve Data Gap errors in DeepDom by clearing the local cache database. These issues are usually caused by connection failures, platform blackouts, or abrupt shutdowns that leave incomplete data in the cache. Following the steps below forces DeepDom to rebuild its database from the data provider.

## Possible Causes of Data Gap Errors

The most common reasons are:

- Loss of connection to the data feed while the platform is running.
- Power outage, operating system crash, or forced restart of the computer.
- Sudden DeepDom shutdown, such as killing the process or closing Windows before the platform can finish writing data.

In these cases, some cached files may become corrupted or incomplete, and the safest fix is to remove the cache folder so DeepDom can recreate it from scratch on the next start.

## Step‑by‑Step – Remove Cache Folder

[SCREENSHOT: Cache Issues — Step‑by‑Step – Remove Cache Folder (DeepDOM) | cache-issues-deepdom-01.png]

### 1. Open the Database Folder Path

1. In DeepDom, go to Options > Settings > Various .
2. Locate the field labeled Database Folder .
3. Click inside the field and copy the complete path shown (for example, using *Ctrl + C*).

### 2. Safely Close DeepDom and Data Flow

1. Disconnect the data flow or data feed connection inside DeepDom so no new data is being written.
2. Close all open Work Plans and charts.
3. Exit DeepDom completely, ensuring the platform is no longer running in the taskbar or system tray.

### 3. Delete the Local Database Folder

[SCREENSHOT: Cache Issues — 3. Delete the Local Database Folder (DeepDOM) | cache-issues-deepdom-02.png]

1. Open Windows Explorer (File Explorer).
2. Click in the address bar and paste the previously copied Database Folder path, then press Enter .
3. When the folder opens, select and delete the corrupted files/symbols.
4. Confirm the deletion in the recycle bin if Windows asks for administrator permission.

Deleting these files removes all cached data for DeepDom, allowing the platform to recreate a fresh database the next time it starts.

### 4. Restart DeepDom

1. Launch DeepDom again.
2. Reconnect your data flow or feed.
3. Open your usual Work Plans and charts. DeepDom will now begin downloading and rebuilding the database from the provider, filling in the missing history and clearing previous Data Gap errors.

## Additional Tips

To minimize the chance of future cache issues, always disconnect the data feed and close DeepDom normally before shutting down Windows. Avoid killing the application from Task Manager unless absolutely necessary, and ensure a stable Internet connection when running long sessions or recording heavy historical data.

## Still Having Trouble?

Our support team is available 24/7 and ready to help you with any issue you encounter. When you reach out, please include:

A screenshot of the issue.

A brief description of what you were trying to do.

Support Ticket (fastest response): visit www.deepcharts.com and create a support ticket directly on our website.

Email Support: you can also reach us at support@deepcharts.com. Please note that email responses may take a little longer than a support ticket.
