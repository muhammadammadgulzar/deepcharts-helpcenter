---
title: "Fix: Rithmic — Expert Not Attached"
slug: "fix-rithmic-expert-not-attached"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Resolve the 'Rithmic: Expert not attached' error that keeps your Rithmic feed connection yellow instead of green."
keywords: ["Rithmic: Expert not attached", "expert not attached", "rithmic yellow dot", "connection stays yellow", "Use R|Trader", "rtrader plugin", "rithmic wont turn green"]
---
The **Rithmic: Expert not attached** error appears when DeepCharts is waiting for an external Rithmic component that is not running on your computer. The connection is not broken — DeepCharts is simply configured to expect R Trader Pro in the background, and it cannot find it.

## Symptom

- You connect a Rithmic data feed and the connection indicator turns **yellow** — and stays yellow instead of turning green.
- The error message **Rithmic: Expert not attached** is shown.

[SCREENSHOT: Rithmic feed connection showing the yellow status indicator together with the "Rithmic: Expert not attached" error message | rithmic-expert-not-attached-yellow.png]

A yellow indicator means the connection is waiting or only partially established; green confirms a successful data feed connection.

Not to be confused with:

- [[fix-log-in-using-rtrader]] — a different message that asks you to log in using R Trader or R Trader Pro.
- [[fix-username-password]] — the connection fails outright with a credentials error.
- [[fix-bad-server]] — the connection fails because the wrong server is selected.

## Most likely cause

The **Use R|Trader** option is enabled in your Rithmic feed settings, so DeepCharts expects R Trader Pro to be running in the background with the required plugins enabled — and it is not.

## Quick fix

Disabling **Use R|Trader** is the simplest approach and resolves the issue for most users:

1. Open DeepCharts.
2. Open the **Feed Settings** for your Rithmic connection (see [[manage-feed-connections]] if you are unsure where to find it).
3. Find the **Use R|Trader** option.
4. Untick (disable) the option.

[SCREENSHOT: Rithmic Feed Settings dialog with the Use R|Trader checkbox visible and highlighted in its unchecked state | feed-settings-use-rtrader-unchecked.png]

5. Click **Save**.
6. Restart DeepCharts.

After the restart, the connection should turn green.

## If that didn't work

### Cause: You intentionally use R Trader Pro

If you specifically need the R Trader Pro route — for example because your account is set up that way — keep **Use R|Trader** enabled and make sure the external component is actually running:

1. Open R Trader Pro.
2. Log in with the **same Rithmic credentials** you entered in DeepCharts.
3. Enable the required plugins.
4. Keep R Trader Pro running in the background.
5. Launch DeepCharts.

The full plugin setup is covered in [[rtrader-pro-plugin]].

> **Note:** In most cases this method is not required. Only enable **Use R|Trader** if you specifically need it.

### Cause: A different connection problem

If the indicator still does not turn green after disabling **Use R|Trader**, the remaining problem is likely unrelated to this error. Re-check your credentials and server selection against the setup guide in [[connect-rithmic]], and see [[fix-username-password]] and [[fix-bad-server]] for the two most common follow-up errors.

## Still stuck

Generate a [[diagnostic-report]] so support can see your connection state, then reach out through the channels listed in [[get-help]].

## Prevent this

Follow the Rithmic setup guide in [[connect-rithmic]] and leave **Use R|Trader** disabled unless you deliberately use the plugin workflow described in [[rtrader-pro-plugin]].

## Related articles

- [[connect-rithmic]]
- [[rtrader-pro-plugin]]
- [[fix-log-in-using-rtrader]]
- [[fix-username-password]]
- [[fix-bad-server]]
- [[manage-feed-connections]]
