---
title: "Customize Language, Theme and Notification Sounds"
slug: "customize-language-theme-sounds"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Change the DeepCharts interface language, time zone, color theme and alert notification voice from the General settings."
keywords: ["change language", "language settings", "dark mode", "light theme", "platform appearance", "time zone", "timezone", "notification sounds", "alert voice", "deepchart settings", "deepcharts settings"]
---

By the end of this guide you will have DeepCharts running in your preferred language, time zone, color theme and alert notification voice. All four settings live in one place — the **General** section of the settings window — so this is a single short trip through the menus.

You may already have picked a theme and an alert sound profile in the Startup Wizard on first launch. Everything the wizard set can be changed again at any time using the steps below.

## Before you start

- [[install-deepcharts|DeepCharts is installed and your license is activated]]
- No data feed connection is required — these are local platform settings
- Be ready to restart DeepCharts: language and time zone changes only apply after a restart

## Steps

1. In the main menu bar, click **Options**.

   [SCREENSHOT: DeepCharts main menu bar with the Options menu open, showing the Settings item about to be clicked | options-menu-settings.png]

2. Select **Settings**. The **General Settings** window opens. Make sure the **General** tab is selected (the other tabs are **Toolbar**, **Alert**, **Sim Account**, **Trading Quantity** and **Shortcuts**).

   [SCREENSHOT: General Settings window on the General tab, with the Language, Time Zone, Theme and Notification Sounds settings visible near the top | general-settings-general-tab.png]

3. Change any of the settings below, then continue with step 4.

   ### If you want to change the language

   Open the **Language** dropdown and pick one of the five available interface languages: **English**, **Italian**, **Spanish**, **German** or **Chinese**.

   [SCREENSHOT: General Settings window with the Language dropdown open, showing all five entries: English, Italian, Spanish, German, Chinese | general-settings-language-dropdown.png]

   > **Note:** The platform supports five languages, but the my.deepcharts.com account dashboard currently supports only English and Italian. Changing the platform language does not change the dashboard.

   ### If you want to change the time zone

   Open the **Time Zone** dropdown and pick your time zone from the list. This controls how chart times are displayed. Like the language, the change needs a restart to apply — if your chart time axis looks unchanged right after saving, that is expected.

   ### If you want to change the theme

   Open the **Theme: Platform Appearance** dropdown and pick one of the six themes: **Dark**, **Dark (Standard)**, **Blue**, **Light**, **Light (Standard)** or **Purple**.

   [SCREENSHOT: General Settings window with the Theme dropdown open listing Dark, Dark (Standard), Blue, Light, Light (Standard), Purple | general-settings-theme-dropdown.png]

   ### If you want to change the notification voice

   Under **Notification Sounds**, choose the voice profile used for alert notifications. The available options are **Female - Emily**, **Female - Daniela**, **Male** and **Warzone**.

   [SCREENSHOT: General Settings window showing the Notification Sounds setting with its four options: Female - Emily, Female - Daniela, Male, Warzone | general-settings-notification-sounds.png]

   > **Tip:** This setting picks the voice for notifications. Custom sound files for indicator and drawing-tool alerts are managed separately on the **Alert** tab of the same window (add .wav or .mp3 files there), and the order-execution sound is enabled under **Options → Alerts → Trading Sounds**.

4. Click **Save Settings** at the bottom of the window.

   [SCREENSHOT: Bottom of the General Settings window with the Cancel and Save Settings buttons, Save Settings highlighted | general-settings-save-button.png]

5. Close and reopen DeepCharts if you changed the language or the time zone. Both require a restart to take effect.

## Verify it worked

- **Language** — after the restart, the menus (for example **Options** and its entries) display in the language you selected.
- **Time zone** — after the restart, the time axis on an open chart shows times in your selected zone.
- **Theme** — the platform colors match the theme you picked.
- **Notification voice** — the next alert that fires uses the voice profile you selected.

## If something went wrong

- **The language or chart time zone did not change** — the two most common causes are clicking the window's close button instead of **Save Settings**, and not restarting the app. Repeat the steps, save, then restart.
- **The my.deepcharts.com dashboard is still in English** — expected. The dashboard supports only English and Italian and is set independently of the platform.
- **An indicator alert plays no sound** — the notification voice is not the issue. Indicator and drawing-tool alerts use sound files from **Options → Settings → Alert**; if no sounds were added there, the sound list inside indicator alert settings is empty.
- **No sound when an order executes** — enable **Options → Alerts → Trading Sounds**.

## Related articles

- [[keyboard-shortcuts]]
- [[keyboard-shortcuts-reference]]
- [[templates-workspaces]]
- [[chart-display-options]]
- [[welcome-to-deepcharts]]
