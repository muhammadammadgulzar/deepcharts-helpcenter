---
title: "DOM Trading on the Chart (Click-Trading Ladder)"
slug: "dom-trading-chart"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Turn on the on-chart DOM ladder and place buy and sell orders with single clicks in the green and red price columns."
keywords: ["dom trading", "chart dom", "click trading", "ladder trading", "green red columns", "cancel all", "flat all", "smart dom", "mini dom", "one click trading"]
---
By the end you will have the click-trading ladder active on your chart and know exactly what a left-click and a right-click in the green and red columns do.

**DOM Trading** overlays two vertical columns on the right edge of the price chart — a green buy column and a red sell column — so you can place orders at exact price levels with one click. Its biggest advantage over the button grid: the platform picks the correct order type (limit or stop) from the level you click, so a "buy limit above the market" mistake becomes impossible.

## Before you start

- A chart open with a data feed connected — [[first-chart]], [[connect-data-feed]]
- Trading armed on the chart (green **$** icon) and the trading panel available — [[trading-from-chart]]
- Order quantity set in the trading panel's **Qty** field — the ladder uses it for every click
- Recommended: practice on a SIM account first — [[simulation-accounts]]

## Steps

1. In the chart's bottom bar, select the **DOM Trading** radio button. Two full-height columns appear at the right edge of the chart — a green buy column and a red sell column — with a **D:** label at the top and orange **CANCEL ALL** / **FLAT ALL** buttons at the bottom.

[SCREENSHOT: Price chart with DOM Trading enabled — green buy column and red sell column at the right edge, the D: 0.00 $ label at the top of the ladder and the orange CANCEL ALL and FLAT ALL buttons at the bottom, with the bottom-bar DOM Trading radio highlighted | dom-trading-ladder-enabled.png]

2. Set your size in the trading panel's **Qty** field. Each ladder click submits this quantity.

3. To buy, left-click the **green** column at the price you want. The platform picks the order type from where the level sits relative to the current price:

| You click | Order placed |
|---|---|
| Green column below the current price | Buy Limit |
| Green column above the current price | Buy Stop |
| Red column above the current price | Sell Limit |
| Red column below the current price | Sell Stop |

To sell, do the same in the **red** column. This auto-selection means the order always lands on the correct side of the market.

Get a feel for the level logic on the live ladder below — sell limits sit violet above the market, buy limits green below it; hover any level to see why that side gets that order type.

[WIDGET: dom-ladder]

4. To trade at market, **right-click** in the column: right-click in the green column sends a Buy Market order, right-click in the red column sends a Sell Market order, regardless of the level (default behavior).

5. Manage working orders directly on the ladder: **left-click** an existing order to move it to another level, **right-click** it to cancel.

6. Read the ladder readouts. The **D:** label at the top of the ladder is your profit-and-loss readout for the position. If your feed provides Level 2 depth, the ladder also shows the resting liquidity at each price level — zoom in on the chart to see the numbers. With Level 1 data only the best bid and ask are shown.

[SCREENSHOT: DOM ladder zoomed in on a Level 2 feed showing resting liquidity quantities in the price levels of the green and red columns | dom-ladder-level2-liquidity.png]

7. Use the orange emergency buttons at the bottom of the ladder: **CANCEL ALL** cancels working orders, **FLAT ALL** closes positions.

> **Warning:** Whether **CANCEL ALL** and **FLAT ALL** act on the panel's symbol only or on all symbols and accounts is not confirmed — exact scope may vary. [CONFIRM: scope of the ladder's CANCEL ALL / FLAT ALL buttons — panel symbol only, or all symbols/accounts] Until you have verified it on a SIM account, treat them as platform-wide kill switches.

### If you want to customize the ladder

Open the dropdown menu next to the **DOM Trading** radio in the bottom bar:

- **Enable Chart Trading** — toggles chart-based order placement itself.
- **Chart Trading Width** — defines the width of the Chart DOM columns.
- **Trading Colors** — customize the column colors.
- **Line Bid/Ask** — show or hide the bid/ask line.
- **DOM Settings** — show the depth of market with color customization.
- **Text Settings** — enable on-chart text and adjust its color and appearance.

[SCREENSHOT: The DOM Trading dropdown menu open in the chart bottom bar showing Enable Chart Trading, Chart Trading Width, Trading Colors, Line Bid/Ask, DOM Settings and Text Settings | dom-trading-dropdown-options.png]

### If you want brackets attached to ladder entries

Enable the **OCO Strategy** block in the trading panel before clicking — entries get an automatic stop and target. See [[oco-strategies]].

## Verify it worked

Left-click the green column a few ticks below the current price on a SIM account: a Buy Limit appears at that level on the ladder and in the [[orders-window]]. Drag it one level — it moves. Right-click it — it cancels. After a filled test trade, the **D:** label updates with your P/L.

## If something went wrong

| Symptom | What to do |
|---|---|
| Clicks in the columns do nothing | Check **Trading Enabled** (green **$** icon) and the **Enable Chart Trading** toggle in the DOM Trading dropdown — [[trading-from-chart]] |
| No liquidity numbers in the ladder | Your feed delivers Level 1 only — the ladder needs Level 2 data to show per-level resting liquidity; also try zooming in so the rows are tall enough for the numbers |
| Order placed with the wrong size | The ladder uses the trading panel's **Qty** field — check it before clicking |
| Orders blocked after several fast clicks | The **Frequency Limitation** safety in **Options → Settings → General → Trading** paused submissions — see [[trading-panel-reference]] |
| Chart is not updating at all | [[feed-connected-chart-not-moving]] |

## Related articles

- [[trading-from-chart]]
- [[trading-panel-reference]]
- [[depth-of-market]]
- [[advanced-dom]]
- [[oco-strategies]]
- [[orders-window]]
