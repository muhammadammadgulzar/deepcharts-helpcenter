---
title: "Beliebiges Rithmic-Prop-Firmen-Konto verbinden (Server-Tabelle)"
slug: "connect-rithmic-prop-firm"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Ein Einrichtungsablauf für jede Rithmic-Prop-Firma — finden Sie den Server-Wert Ihrer Firma in der Tabelle, unterschreiben Sie die Vereinbarung in R Trader Pro und verbinden Sie sich mit DeepCharts."
keywords: ["prop firm rithmic", "rithmic server liste", "prop firm server", "rithmic paper trading", "bulenox", "bluenox", "takeprofittrader", "earn2trade", "oneuptrader", "tradeify", "the trading pit", "funded konto einrichten"]
---
Jedes Rithmic-Prop-Firmen-Konto wird auf dieselbe Weise mit DeepCharts verbunden — der einzige Unterschied zwischen den Firmen ist der **Server**-Wert, den Sie auswählen. Am Ende dieser Anleitung ist Ihr Prop-Firmen-Feed verbunden und die Charts streamen live.

Evaluation- und Funded-Konten verwenden den identischen Ablauf — es gibt keine separate Einrichtung nur für Funded-Konten.

> **Hinweis:** Für Apex Trader Funding gibt es eine eigene Schritt-für-Schritt-Anleitung: [[connect-apex]]. Falls Ihre Prop-Firma Ihnen statt Rithmic ein dxFeed-Konto ausgestellt hat (MyFundedFutures, Aqua Futures, Goat Funded Futures und andere), folgen Sie [[connect-dxfeed-prop-firm]].

## Bevor Sie beginnen

- [ ] Ein aktives Prop-Firmen-Konto (Evaluation oder Funded — beide werden gleich verbunden) — kaufen Sie es zuerst bei Ihrer Firma, falls noch nicht geschehen
- [ ] Der Rithmic-Benutzername und das Passwort, die Ihre Firma Ihnen ausgestellt hat. Diese kommen in der Willkommens-E-Mail der Firma und sind **nicht** identisch mit Ihrem Login für die Website der Firma — siehe [[fix-username-password]], warum das wichtig ist
- [ ] R Trader Pro installiert, um die Marktdaten-Vereinbarung zu unterschreiben — siehe [[sign-market-data-agreement]]
- [ ] DeepCharts installiert und aktiviert — siehe [[install-deepcharts]]
- [ ] Bestätigt, dass Ihre Firma unterstützt wird — siehe [[compatibility-guide]]

> **Warnung:** Nicht jede Prop-Firma kann verbunden werden. TopStep, FTMO und FundedNext Futures stellen keine Zugangsdaten aus, die mit DeepCharts nutzbar sind. CQG-Konten von Prop-Firmen funktionieren nur, wenn die Firma das CQG-Konto direkt von CQG ausstellt — ein CQG-Konto, das über Tradovate oder NinjaTrader kommt, kann nicht verbunden werden (siehe [[connect-cqg]]).

## Schritte

1. Finden Sie den **Server**-Wert Ihrer Firma in der Tabelle unten. Sie verwenden denselben Wert zweimal: als **System** in R Trader Pro beim Unterschreiben der Vereinbarung und als **Server** in den DeepCharts Feed Settings.

| Prop-Firma | Server-Wert |
|---|---|
| Apex Trader Funding (siehe [[connect-apex]]) | Apex |
| 4PropTrader | 4PropTrader |
| 10X Futures | 10XFutures |
| Bulenox | Bulenox |
| DayTraders.com | DayTraders.com |
| Earn2Trade | Earn2Trade |
| FundedFuturesNetwork | FundedFuturesNetwork |
| Legends Trading | LegendsTrading |
| Lucid Trading | LucidTrading |
| MES Capital | MES Capital |
| PropShopTrader | PropShopTrader |
| The Trading Pit | TheTradingPit |
| Thrive Trading | ThriveTrading |
| TradeFundrr | TradeFundrr |
| Tradeify | Tradeify [CONFIRM: exact spelling of the Tradeify entry in the Server dropdown] |
| tradesea | tradesea (im Dropdown kleingeschrieben) |
| BlueSky Trading (Rithmic-Konten) | Rithmic Paper Trading |
| OneUpTrader | Rithmic Paper Trading |
| TakeProfitTrader | Rithmic Paper Trading |
| Jede andere Rithmic-Prop-Firma | Rithmic Paper Trading |

> **Tipp:** Achten Sie auf die Schreibweise — der korrekte Firmenname ist "Bulenox" (oft fälschlich "Bluenox" geschrieben) und der Server-Eintrag lautet "TradeFundrr" ohne zweites "e".

### Wenn Ihre Firma nicht im Server-Dropdown steht

Wählen Sie **Rithmic Paper Trading** — das ist Rithmics Standardserver für reine Datenfeed-Konten und kleinere Prop-Konten. Verwenden Sie ihn sowohl in R Trader Pro als auch in DeepCharts. Trotz des Namens sind die Daten echt und live.

2. Unterschreiben Sie die Rithmic-Marktdaten-Vereinbarung in R Trader Pro. Ohne sie bleibt die Verbindung rot, selbst mit korrekten Zugangsdaten. Laden Sie R Trader Pro von https://www.rithmic.com/rtraderpro herunter (klicken Sie auf **Download R | Trader Pro**), öffnen Sie es und füllen Sie **beide** nebeneinanderliegenden Login-Formulare mit denselben Werten aus: **System** = der Server-Wert Ihrer Firma aus der Tabelle, **Gateway** = der Ihnen nächstgelegene Standort sowie der Rithmic-Benutzername und das Passwort aus der Willkommens-E-Mail Ihrer Firma. Klicken Sie auf **Login**, wählen Sie bei der Abfrage Ihren Marktdaten-Status (Privathändler wählen normalerweise **Non-Professional**), lesen und akzeptieren Sie dann die Vereinbarungen. Alle Details in [[sign-market-data-agreement]].

[SCREENSHOT: R Trader Pro Login-Bildschirm mit beiden ausgefüllten Formularen, geöffnetem System-Dropdown mit Prop-Firmen-Server-Einträgen und sichtbarem Gateway-Feld | dc-en-connect-rithmic-prop-firm-01.png]

3. Nur bei der ersten Einrichtung: Öffnen Sie in R Trader Pro **Window → Preferences → Performance** und ziehen Sie beide Schieberegler — **Quotes** und **Order Book** — auf das Maximum, dann klicken Sie auf **Apply** und **OK**. Das entfernt Rithmics Datenempfangs-Limit; mit gesetztem Limit können Charts in Marktphasen mit hohem Volumen verzögern. Schließen Sie R Trader Pro danach.

[SCREENSHOT: R Trader Pro Preferences, Performance-Tab mit beiden Schiebereglern Quotes und Order Book auf Maximum | dc-en-connect-rithmic-prop-firm-02.png]

4. Klicken Sie in DeepCharts auf **Select Connection** in der oberen Symbolleiste, dann auf **Feed Settings** am unteren Ende des Dropdowns.

5. Klicken Sie auf **Add Connection** und füllen Sie das Formular aus:

| Feld | Was einzutragen ist |
|---|---|
| **Name** | Eine beliebige Bezeichnung, zum Beispiel "MyFirm Eval" oder "MyFirm Live". |
| **Feed Source** | **Rithmic RAPI** (das Dropdown zeigt auch **Rithmic Wss - beta** — wählen Sie RAPI). |
| **Username** | Der Rithmic-Benutzername aus der Willkommens-E-Mail Ihrer Firma — nicht der Website-Login der Firma. |
| **Password** | Das Rithmic-Passwort aus derselben E-Mail. |
| **Server** | Der Wert Ihrer Firma aus der Tabelle in Schritt 1 — exakt wie geschrieben. |
| **Gateway** | **Automatic** (Standard), oder die Ihnen nächstgelegene Region für geringere Latenz. |

Lassen Sie alle anderen Felder unverändert. Probieren Sie den interaktiven Feed-Settings-Mock unten aus — stellen Sie die Feed Source auf Rithmic und beobachten Sie, wie das Server-Feld erscheint:

[WIDGET: feed-navigator]

> **Tipp:** Wenn alte oder abgelaufene Prop-Konten Ihre Kontoliste unübersichtlich machen, aktivieren Sie den Schalter **Show only active accounts** im Bereich LOGIN INFO der Feed Settings.

6. Klicken Sie auf **Save**.

7. Klicken Sie erneut auf **Select Connection** und klicken Sie auf Ihren neuen Feed, um sich zu verbinden.

8. Leiten Sie Ihre Börsen auf den Feed: Öffnen Sie **Options → Symbol Manage** und bestätigen Sie, dass die Börsen, die Sie handeln, abonniert und dieser Verbindung zugeordnet sind (das Kettenglied-Symbol in einer Zeile ändert deren Feed). Probieren Sie es im Mock unten aus — klicken Sie auf das Kettenglied-Symbol in einer Zeile, um deren zugeordneten Feed durchzuschalten. Vollständige Anleitung in [[symbol-manage]].

[WIDGET: symbol-manage-mock]

## Prüfen, ob es funktioniert hat

- Die Verbindungsanzeige wird innerhalb von etwa 10 Sekunden nach dem Verbinden **grün**.
- Öffnen Sie **New → Price Chart**, wählen Sie ein Symbol, das Ihr Konto abdeckt (zum Beispiel ES oder NQ), und bestätigen Sie, dass der Preis live aktualisiert wird.

Sobald die Charts laden, können Sie Orders über das Trading Panel unten rechts im Chart platzieren, indem Sie Ihr Prop-Firmen-Konto auswählen — siehe [[trading-from-chart]].

## Wenn etwas schiefgelaufen ist

Die drei Ursachen unten erklären fast alle fehlgeschlagenen Prop-Firmen-Verbindungen, in dieser Reihenfolge:

1. **Falsche Zugangsdaten** — Sie haben den Website-Login der Firma statt der Rithmic-Zugangsdaten aus der Willkommens-E-Mail eingegeben. Siehe [[fix-username-password]].
2. **Vereinbarung nicht unterschrieben** — die Marktdaten-Vereinbarung wurde nie in R Trader Pro akzeptiert. Siehe [[fix-log-in-using-rtrader]] und [[sign-market-data-agreement]].
3. **Falscher Server-Wert** — das Server-Feld stimmt nicht exakt mit dem Eintrag Ihrer Firma aus der Tabelle überein. Siehe [[fix-bad-server]].

Weitere Symptome:

- Der Punkt ist grün, aber die Charts bewegen sich nicht — [[feed-connected-chart-not-moving]]
- Connection failed — unable to establish connection — [[fix-unable-to-establish-connection]]
- Charts verzögern in aktiven Marktphasen — [[data-delayed-lagging]] (prüfen Sie, dass die Feed Source Rithmic RAPI ist und die R-Trader-Pro-Schieberegler auf Maximum stehen)

Wenn nichts davon zutrifft, sammeln Sie die Details, die der Support benötigt — siehe [[diagnostic-report]].

## Verwandte Artikel

- [[connect-apex]]
- [[connect-rithmic]]
- [[connect-dxfeed-prop-firm]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[compatibility-guide]]
