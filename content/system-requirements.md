---
title: "System Requirements"
slug: "system-requirements"
category: "Getting Started"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Hardware, operating system and software requirements for running DeepCharts, plus antivirus and disk-space guidance."
keywords: ["system requirements", "minimum requirements", "specs", "windows 10", "windows 11", "ram", "will it run", "hardware", "requirements"]
---
DeepCharts is a Windows desktop application that processes live tick data, so it benefits from a reasonably modern machine — but it does not require exotic hardware. This page lists what you need before installing, and explains which components actually matter for performance.

The authoritative minimum requirements are published on your my.deepcharts.com dashboard alongside the installer download. Check there before purchasing hardware; the figures below are practical guidance.

## What it is

A checklist of the operating system, hardware and software environment DeepCharts needs to install and run well. It answers "will DeepCharts run on my machine?" and "what should I upgrade if it feels slow?".

## When to use it

- Before installing DeepCharts for the first time — see [[install-deepcharts]].
- Before buying or renting a new PC, laptop or VPS for trading.
- When diagnosing performance problems (slow charts, laggy data) — see [[data-delayed-lagging]].
- Before moving your installation — see [[move-to-new-computer]].

## Quick start

Don't compare tables by hand — dial your machine into the checker below and it verdicts every component live. Notice how the RAM requirement moves when you change how many windows you plan to keep open: requirements depend on workload, not just the app.

[WIDGET: spec-check]

1. Press **Windows key + Pause** (or open **Settings → System → About**) to see your Windows edition, processor and installed RAM, then set the sliders to match.
2. Fix anything the checker flags red before installing; orange items will run but cost you smoothness.
3. Confirm you have several GB of free disk space on the system drive — the market-data database lives there by default and grows over time.
4. Check the official minimums listed on your my.deepcharts.com dashboard, then continue to [[install-deepcharts]].

## How to read it

"Minimum" means the platform installs and runs for light use — a couple of charts on a delayed or live feed. "Recommended" is what you want for a realistic orderflow workstation: several chart windows, a DOM, tick-level data loading and a trading panel active during fast markets. If you fall between the two, DeepCharts will run, but load times and refresh smoothness scale with your hardware — especially CPU and RAM.

## Settings reference

> **Note:** Exact published figures should be verified against the my.deepcharts.com dashboard. [CONFIRM: exact minimum specs with team]

### Operating system and software

| Requirement | Detail |
|---|---|
| Operating system | Windows 10 or Windows 11, 64-bit. DeepCharts is a Windows-only application. |
| .NET runtime | Required by the platform. [CONFIRM: exact .NET version and whether the installer bundles it] |
| macOS / Linux | Not supported natively. [CONFIRM: official stance on virtual machines and macOS virtualization] |

### Hardware

| Component | Minimum (practical) | Recommended | Why it matters |
|---|---|---|---|
| CPU | Modern 64-bit multi-core processor | Recent-generation quad-core or better | Tick processing and indicator calculation are CPU-bound; more cores keep charts responsive during volatile periods. |
| RAM | 8 GB | 16 GB or more | Each open chart holds its loaded days of tick data in memory; multiple charts and DOMs add up. |
| Disk | Several GB free, SSD strongly preferred | SSD with generous free space | Historical tick data is stored locally and read back on every chart load; an SSD dramatically shortens chart build times. |
| GPU | Any GPU capable of running Windows 10/11 | Dedicated GPU is helpful for many windows across large monitors | Chart rendering uses the GPU; DeepCharts even exposes a **Parallel gpu count** setting under **Options → Settings → General**. |
| Display | 1920×1080 | One or more large/high-resolution monitors | Orderflow work is screen-hungry; multi-monitor layouts are supported via **Window → Position windows** — see [[multi-monitor-windows]]. |
| Network | Stable broadband | Low-latency wired connection | Live feeds stream continuously; download speed and latency to the feed server directly affect data delay. |

### Disk space and the local database

DeepCharts stores downloaded market data in a local database, by default under `%LocalAppData%\Deepchart\Database`. This folder grows as you load more symbols and more days of tick history. Two things follow:

- Keep meaningful free space on the drive that hosts it, or move the folder: **Options → Settings → General → VARIOUS → Database Folder**.
- You can reclaim space later — see [[delete-market-data]] and [[database-optimization]].

### Antivirus and security software

Antivirus interference is the single most common installation blocker.

> **Warning:** Temporarily disable your antivirus before running the installer and re-enable it afterwards. Some products silently quarantine installer components, which surfaces later as a failed or half-complete installation.

If your machine is managed by a company policy, application-control software can also block DeepCharts from launching — see [[application-control-policy]].

## Tips and common mistakes

- **Do not skip the antivirus step.** "The installer ran and nothing happened" is almost always antivirus — see [[installation-problems]].
- **Laptops on power-saving plans** throttle the CPU, which shows up as laggy charts. Use a high-performance power plan while trading.
- **More days of loaded data = more RAM and CPU.** If the platform feels heavy, reduce the days-to-load on your charts before blaming hardware — see [[data-delayed-lagging]].
- **VPS users:** the same requirements apply to virtual machines; under-provisioned VPS plans (2 GB RAM, shared vCPU) will struggle with tick data.
- **Internet quality matters as much as the PC.** If charts lag only during busy market periods, test your connection with the built-in diagnostic — see [[diagnostic-report]].

## Related articles

- [[install-deepcharts]]
- [[installation-problems]]
- [[application-control-policy]]
- [[move-to-new-computer]]
- [[data-delayed-lagging]]
- [[database-optimization]]
