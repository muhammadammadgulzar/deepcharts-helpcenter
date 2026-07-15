---
title: "How to Get Help (Chat, Diagnostic Report, Support)"
slug: "get-help"
category: "Troubleshooting & Support"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Every way to reach DeepCharts support — in-app Contact Support with diagnostics, the website chat — and what to include so your ticket is answered on the first pass."
keywords: ["contact support", "get help", "support chat", "live chat", "submit ticket", "customer support", "help center", "talk to an agent"]
---

By the end you will know every way to reach DeepCharts support and have sent a request that contains everything support needs to answer on the first pass.

There are two main channels. Which one to use depends on where the problem lives: if the platform runs and the problem is inside it (delays, connections, crashes mid-session), use the in-app **Contact Support** flow, because it attaches a diagnostic report automatically. If the platform will not open, or your question is about accounts, billing or setup, use the chat on the DeepCharts website.

## Before you start

- Search this help center for your exact error message first — most connection errors have a dedicated fix article, for example [[fix-unable-to-establish-connection]] or [[fix-username-password]].
- If the issue is performance, delay or connectivity, generate a [[diagnostic-report]] — it is the single most useful attachment.
- Note your data feed provider and your broker or prop firm name — see [[compatibility-guide]] — since most feed issues are provider-specific.
- Take screenshots of the error or unexpected behavior while it is on screen.

## Steps

1. Decide which channel fits your situation using the branches below.
2. Prepare your description before you open the channel. A first message that gets a fast, accurate answer includes:
   - What you were doing when the problem appeared, and what you expected to happen.
   - The exact error text, word for word (paste it, do not paraphrase).
   - Screenshots of the error or the affected window.
   - Your data feed and broker/prop firm name (for example "Rithmic through a prop firm" or "dxFeed bought on the website").
   - The diagnostic report — sent automatically by the in-app flow — and any log file support has asked for (see [[diagnostic-report]] for where logs live).
3. Send it through the chosen channel and keep the conversation open for follow-up questions.

### If the problem is inside the platform (delay, connection, crash)

Use the in-app flow — it bundles a diagnostic snapshot of your system and connectivity with your message:

1. Click the **?** (question mark) icon in the DeepCharts toolbar.
2. Select **Contact Support**.
3. Choose **I have a problem or delay with the platform**.
4. Let the diagnostic checks run, click **Click Here to Confirm**, then **Contact Support and Send Information** together with your description.

[SCREENSHOT: The ? menu open in the DeepCharts toolbar with Contact Support highlighted, and the diagnostic window visible behind it | get-help-in-app-contact-support.png]

The full walkthrough, including what the report contains and where log files are stored, is in [[diagnostic-report]].

> **Note:** The diagnostic report collects system and connectivity data only — no username or credentials are included.

### If DeepCharts will not open, or the question is about accounts or billing

Use the chat widget on the DeepCharts website:

1. Open the DeepCharts website and click the chat widget in the corner of the page.
2. Describe your issue. The assistant resolves common setup, feed and platform questions immediately, and forwards the conversation to a human agent when the issue needs one.
3. Attach your screenshots and paste the exact error text into the chat.

[SCREENSHOT: The DeepCharts website with the support chat widget open in the corner, showing the conversation input field | get-help-website-chat-widget.png]

For billing and subscription questions specifically, [[manage-subscriptions]] covers the self-service options.

### If you were asked to email support

[CONFIRM: support email + hours]

## Verify it worked

- In-app: the diagnostic flow completes and your information is submitted after **Contact Support and Send Information**.
- Website chat: you receive a response in the conversation — either an immediate answer or a hand-off to an agent.

Response times depend on support availability. [CONFIRM: expected support hours and response-time expectations]

## If something went wrong

| Symptom | What to do |
|---|---|
| The in-app diagnostic cannot run or send | Your machine may be offline; use the website chat instead and mention that the diagnostic failed |
| The chat widget does not appear on the website | Try a different browser or disable content blockers for the site |
| Your issue is a specific connection error | Check the dedicated fix articles first, for example [[fix-unable-to-establish-connection]], [[fix-bad-server]] or [[fix-username-password]] |
| The platform will not install or start | See [[installation-problems]] before contacting support — it covers the most common blockers |

## Related articles

- [[diagnostic-report]]
- [[installation-problems]]
- [[license-issues]]
- [[manage-subscriptions]]
- [[data-delayed-lagging]]
- [[compatibility-guide]]
