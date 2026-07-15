---
title: "Database Optimization"
slug: "database-optimization"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "advanced"
time: "15 min to complete"
description: "Run the Migrate/Compress utility to shrink the DeepCharts local database by up to 90% and speed up startup and overall performance."
keywords: ["database optimization", "migrate compress", "compress database", "shrink database", "database too big", "slow startup", "disk space", "optimize database", "parallels mac performance"]
---

DeepCharts stores tick and bar history in a local database that grows with every session. Over time a large database slows startup and eats disk space. By the end of this guide you will have run the **Migrate / Compress** utility, which can reduce the database size by up to 90% and noticeably speed up the platform.

The gains are largest after extended usage and on machines where disk and memory are at a premium — virtual machines in particular (for example, Parallels on a Mac) benefit the most. Alongside the size reduction you get faster startup times, reduced storage usage, and improved overall platform performance.

## Before you start

- [[manage-feed-connections|You know how to disconnect your data feeds]] — all feeds must be disconnected before the utility runs.
- [[templates-workspaces|Your workspace layout is saved]] — you will close the workspace before starting.
- Pick a quiet time. The process can take several minutes (longer for very large databases), so run it after your trading session or on a weekend — never mid-session.
- On a laptop, connect the power adapter before you begin.

> **Warning:** Do not shut down or restart your computer while Migrate / Compress is running. Interrupting the process can corrupt the database. Laptops must stay plugged in for the duration.

## Steps

1. Close your workspace using the workspace dropdown at the top of the main bar (labelled with the current workspace name, for example **Untitled**).

[SCREENSHOT: The workspace dropdown at the top of the DeepCharts main bar expanded, showing the option to close the current workspace | workspace-dropdown-close.png]

2. Disconnect all data feeds using the **Feed** dropdown at the top.

[SCREENSHOT: The Feed dropdown at the top of the main bar expanded with the disconnect option visible | feed-dropdown-disconnect.png]

3. Go to **Options → Database → Settings**.
4. Select **Migrate / Compress**.

[SCREENSHOT: The Database Settings dialog with the Migrate / Compress option highlighted | database-settings-migrate-compress.png]

5. Click **Yes** on the confirmation dialog. The dialog itself warns that the operation may take a while and suggests running it after the session or on a weekend.
6. Click **OK**.
7. Wait for the process to complete. Expect several minutes; a database that has grown for months can take longer. Do not close the platform or power off the machine while it runs.

[SCREENSHOT: The Migrate / Compress progress state while the utility is running | migrate-compress-in-progress.png]

## Verify it worked

1. The utility finishes without errors and the platform is responsive again.
2. To measure the gain, compare the database folder size before and after: **Options → Settings → Various** shows the **Database Folder** path — check that folder's size in File Explorer.
3. Startup should be noticeably faster the next time you launch DeepCharts, especially on a virtual machine.

> **Tip:** Make Migrate / Compress part of your routine maintenance — for example, on weekends after heavy data weeks. Regular compression keeps the database small enough that you rarely need more drastic fixes.

## If something went wrong

| Symptom | What to do |
|---|---|
| The process was interrupted (power loss, forced shutdown) and charts now misbehave | Treat the database as possibly corrupted — see [[database-problems]] |
| A single symbol shows bad data after compression | Delete and re-download that symbol's data — see [[delete-market-data]] and [[download-data]] |
| Platform is still slow after compressing | Work through the performance checklist in [[data-delayed-lagging]] |

## Related articles

- [[database-problems]]
- [[delete-market-data]]
- [[download-data]]
- [[data-delayed-lagging]]
