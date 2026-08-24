---
title: "Delta Bar"
slug: "delta-bar-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "3 min read"
description: "The Delta Bar indicator in DeepDom displays the delta (difference between buy‑market and sell‑market volume) as bars plotted beneath the chart, helping you see where aggressive buyers or sellers dominated each period."
keywords: ["delta bar", "deepdom delta bar", "deepdom", "indicators"]
---
The Delta Bar indicator in DeepDom displays the delta (difference between buy‑market and sell‑market volume) as bars plotted beneath the chart, helping you see where aggressive buyers or sellers dominated each period.

[SCREENSHOT: Delta Bar — overview (DeepDOM) | dd-en-delta-bar-deepdom-01.png]

## Settings of Use

Right-click on the chart and select Indicators.

Search for the desired indicator and add it to your workspace by clicking the "+" button.

Open the indicator's settings panel, customize the parameters according to your preferences, and confirm the changes by clicking Save.

[SCREENSHOT: Delta Bar — Settings of Use (DeepDOM) | dd-en-delta-bar-deepdom-02.png]

## General Settings

[SCREENSHOT: Delta Bar — General Settings (DeepDOM) | dd-en-delta-bar-deepdom-03.png]

#### Input data

[SCREENSHOT: Delta Bar — Input data (DeepDOM) | dd-en-delta-bar-deepdom-04.png]

Choose which Input to use for the delta calculation:

Volume – total traded volume at each price level; useful for gauging trade intensity and key price zones.

Aggregate Trades – groups trades executed at the same price within a short time window to show aggregated volume linked to larger orders.

Trades – counts the number of transactions at each price level.

Order – uses order data (buy and sell quantities) to evaluate order‑flow pressure.

#### Bar grouping

[SCREENSHOT: Delta Bar — Bar grouping (DeepDOM) | dd-en-delta-bar-deepdom-05.png]

Defines how many bars are grouped together in each Delta Bar. A lower value provides more granular data, while a higher value smooths the series.

#### Filters

[SCREENSHOT: Delta Bar — Filters (DeepDOM) | dd-en-delta-bar-deepdom-06.png]

Filter min – applies a minimum threshold to the chosen database, hiding bars below that value.

Filter max – applies a maximum threshold. Leaving this set to 0 disables the maximum filter.

### Plot Settings

[SCREENSHOT: Delta Bar — Plot Settings (DeepDOM) | dd-en-delta-bar-deepdom-07.png]

Bid Color - Selects the Bid color

Ask Color - Selects the Ask color

## Reading Patterns with Delta Bar

#### 1. Trend Confirmation

In a healthy up‑trend you typically see sequences of positive Delta Bars aligned with price making higher highs. Pullbacks within the trend often show smaller or even slightly negative delta, but these should be shallow compared to the dominant positive bars.

If price continues to push higher while positive delta becomes weaker or turns negative, it can signal hidden selling or reduced participation, warning of a possible reversal.

#### 2. Absorption at Levels

When price tests a prior high and Delta Bars show strong positive spikes but price fails to break and instead rotates lower, this often means limit sellers are absorbing aggressive buyers at that level. Similar logic applies for lows with strong negative delta that fail to extend.

#### 3. Exhaustion and Climaxes

Very large one‑off Delta Bars after an extended move frequently mark capitulation – all late traders jump in just as professionals take the other side. Watching what happens in the next few bars helps you decide whether to fade such extremes or wait for confirmation.

## Best Practices and Common Mistakes

Do not trade delta in isolation: always anchor it to structure (support/resistance, Day high/low, VWAP).

Avoid over‑filtering: very high *Filter min * values can hide early signs of initiative that later develop into major moves.

Watch product specifics: Micro contracts and thin products require smaller thresholds than highly liquid index futures.
