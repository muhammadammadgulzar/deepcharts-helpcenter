---
title: "Fix: Could Not Find a Part of the Path"
slug: "fix-could-not-find-path"
category: "Data & Database"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Resolve the 'Could not find a part of the path' error that appears after database or symbol folders were deleted while DeepCharts was running."
keywords: ["could not find a part of the path", "could not find path", "path error", "AppData Local Deepchart Database", "file path error", "missing folder error", "error could not find"]
---

The error **"Could not find a part of the path"** — followed by a location such as `C:\Users\...\AppData\Local\Deepchart\Database\...` — appears when DeepCharts cannot locate required data folders inside its local database directory. It almost always follows a manual deletion of database or symbol folders, and the fix is usually nothing more than a full restart.

## Symptom

- An error dialog appears when opening a chart or loading data, reading "Could not find a part of the path" with a file path pointing into the local database directory (for example under `AppData\Local\Deepchart\Database`).
- It typically shows up right after you (or a cleanup tool) deleted database or symbol folders while the platform was still running, or after folder deletion without a restart.

This is a local file system issue, not a data feed or server error. Not to be confused with [[fix-system-cannot-find-file|"The System Cannot Find the File Specified"]], which is a different error with different causes.

## Most likely cause

Data folders inside the DeepCharts database directory were removed manually, DeepCharts is still referencing paths that no longer exist, and the folders were never regenerated because the platform was not restarted.

## Quick fix

Restart DeepCharts completely so it regenerates the missing directories:

1. Close DeepCharts.
2. Verify no DeepCharts process is still running in the background: open **Task Manager**, look for DeepCharts in the process list, and if it is there, right-click it and choose **End Task**.

[SCREENSHOT: Windows Task Manager processes list with the DeepCharts process selected and the right-click End Task option visible | task-manager-end-task-deepcharts.png]

3. Reopen DeepCharts — it automatically regenerates the required directories on startup.
4. Load the affected chart again. The error should now be resolved.

## If that didn't work

### Cause: The symbol's data is missing or corrupted beyond the folder structure

The restart rebuilt the folders, but the data inside is incomplete or damaged. Delete the symbol's data properly with the in-app tool and re-download it:

1. Follow [[delete-market-data]] (Method 1, the in-app Delete Data tool).
2. If history does not refill on its own, pull it manually with [[download-data]].

### Cause: Wider database corruption

If path errors keep recurring across symbols, treat it as a database-level problem and work through [[database-problems]] — up to and including rebuilding the database folder.

## Still stuck

Generate a [[diagnostic-report]] so support can see exactly which path is failing, then contact the team via [[get-help]].

## Prevent this

- Close DeepCharts before making any manual changes to database folders.
- Prefer the in-app [[delete-market-data|Delete Data tool]] over manual folder deletion.
- Always restart DeepCharts after any file-level maintenance.
- Never delete data folders while a chart is actively loading.

## Related articles

- [[delete-market-data]]
- [[download-data]]
- [[database-problems]]
- [[fix-system-cannot-find-file]]
- [[get-help]]
