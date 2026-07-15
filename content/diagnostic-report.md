---
title: "Diagnostic Report: Before You Contact Support"
slug: "diagnostic-report"
category: "Troubleshooting & Support"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Generate DeepCharts' built-in diagnostic report and send it to support — plus where to find the log files if support asks for them."
keywords: ["diagnostic report", "contact support", "send diagnostics", "log files", "platform slow", "delay", "RAM usage", "performance report"]
---

By the end you will have generated DeepCharts' built-in diagnostic report — a snapshot of your system, connectivity and platform state — and sent it to support. Attaching this report to your first message is the single best way to shorten a support conversation: it answers most of the questions support would otherwise have to ask you one by one.

Use it whenever you experience performance issues, delays, or connectivity problems that the troubleshooting articles have not resolved.

## Before you start

- Have DeepCharts running, ideally shortly after the problem occurred, so the report reflects the problem state — see [[install-deepcharts]] if the platform will not start at all.
- Know which data feed and broker or prop firm you use — see [[compatibility-guide]] — so you can mention them in your message.
- If your issue is lag or delayed data, run through the checklist in [[data-delayed-lagging]] first; it resolves many cases without a ticket.

## Steps

1. Glance at the **RAM** indicator on the toolbar before you start. It shows two values: the first is total system RAM usage, and the value in brackets is DeepCharts' own memory usage. If your total RAM usage is consistently high, it may affect platform performance — worth mentioning in your support message.

[SCREENSHOT: DeepCharts main toolbar with the RAM indicator highlighted, showing the total system RAM value and the bracketed DeepCharts memory value | toolbar-ram-indicator.png]

2. Click the **?** (question mark) icon in the toolbar.
3. Select **Contact Support**.

[SCREENSHOT: The ? (question mark) menu open on the DeepCharts toolbar with the Contact Support entry highlighted | question-mark-contact-support.png]

4. Choose **I have a problem or delay with the platform**.
5. Review the diagnostic window. It collects and displays: platform version, operating system, CPU details, memory statistics, network connectivity, server ping times, and download speeds.

[SCREENSHOT: The diagnostic window showing version, OS, CPU, memory, network connectivity, server ping times and download speed results | diagnostic-report-window.png]

6. Click **Click Here to Confirm** to let the platform collect additional data.
7. Click **Contact Support and Send Information** to send the results to the support team, together with a short description of your issue.

> **Note:** No username or credentials are collected during this process. The report covers system and connectivity data only.

### If support asks for log files

DeepCharts also writes daily log files that support may request for deeper analysis:

1. Open **My PC → Documents → DeepCharts → Logs**.
2. Identify the file support asked for. There are four log types — **General**, **Trade Copier**, **Trading** and **Various** — and each file is named with its date, for example `trading_2026-06-22`.

[SCREENSHOT: File Explorer open at Documents > DeepCharts > Logs showing the General, Trade Copier, Trading and Various log files with date-stamped names | deepcharts-logs-folder.png]

3. Attach the file for the day the issue occurred to your support conversation.

## Verify it worked

The diagnostic window completes its checks (ping times and download speeds show results rather than running), and the report is submitted after you click **Contact Support and Send Information**. [CONFIRM: exact confirmation the app shows after the report is sent]

When support replies, they will already have your platform version, system specs and connectivity results — expect fewer back-and-forth questions.

## If something went wrong

| Symptom | What to do |
|---|---|
| You cannot find the **?** icon | It sits in the main toolbar; if the platform will not open at all, see [[installation-problems]] and contact support through the website instead — see [[get-help]] |
| The connectivity checks fail or never finish | Your machine may be offline or blocked by security software; note the failure (screenshot it) and report through the website chat — see [[get-help]] |
| The problem is data lag specifically | Include the report, then follow [[data-delayed-lagging]] |
| The problem is database errors | See [[database-problems]] before sending — it may resolve the issue directly |

## Related articles

- [[get-help]]
- [[data-delayed-lagging]]
- [[database-problems]]
- [[installation-problems]]
- [[license-issues]]
