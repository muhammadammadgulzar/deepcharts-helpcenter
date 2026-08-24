---
title: "So verbinden Sie einen Rithmic-Datenfeed"
slug: "connect-rithmic"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Verbinden Sie einen Rithmic-Datenfeed mit DeepCharts — unterschreiben Sie die Vereinbarung in R Trader Pro, geben Sie Ihre Zugangsdaten mit dem korrekten Server-Wert ein und prüfen Sie die Live-Charts."
keywords: ["rithmic", "rithmic rapi", "rithmic verbinden", "rithmic einrichten", "rithmic paper trading", "rythmic", "ritmic", "rithmik", "rithmic feed source fehlt", "rithmic wss beta"]
---
Am Ende dieser Anleitung haben Sie einen Rithmic-Datenfeed mit DeepCharts verbunden und einen Live-Chart auf dem Bildschirm. Der Hauptteil behandelt ein Rithmic-Abonnement, das über die DeepCharts-Website gekauft wurde; die Verzweigungsabschnitte behandeln Rithmic-Konten, die von einem Broker ausgestellt oder von einer anderen Trading-Plattform übernommen wurden.

> **Hinweis:** Rithmic verkauft keine Datenfeeds direkt über rithmic.com. Ihre Rithmic-Zugangsdaten stammen immer aus einer von vier Quellen: der DeepCharts-Website, einem Broker, einer Prop-Firma oder einer anderen Trading-Plattform. Wenn Ihr Konto von einer Prop-Firma stammt, folgen Sie stattdessen [[connect-rithmic-prop-firm]] (oder [[connect-apex]] für Apex Trader Funding).

## Bevor Sie beginnen

Stellen Sie sicher, dass Sie Folgendes haben:

- [ ] DeepCharts installiert und aktiviert — siehe [[install-deepcharts]]
- [ ] Ein aktives Rithmic-Abonnement mit Benutzername und Passwort — siehe [[buy-data-feed]], falls Sie noch keines gekauft haben
- [ ] Die Rithmic-Marktdaten-Vereinbarung über R Trader Pro unterschrieben — siehe [[sign-market-data-agreement]] (die Schritte 2–3 unten fassen den Ablauf zusammen)
- [ ] Geprüft, dass Ihre Kontoquelle unterstützt wird — siehe [[compatibility-guide]]

## Schritte

1. Besorgen Sie Ihre Rithmic-Zugangsdaten. Für einen über die DeepCharts-Website gekauften Feed: Melden Sie sich bei my.deepcharts.com an, öffnen Sie den Bereich **Subscriptions** und suchen Sie Ihren Rithmic-Benutzernamen und Ihr Passwort. Halten Sie sie bereit — Sie benötigen sie in jedem folgenden Schritt.

[SCREENSHOT: DeepCharts-Dashboard auf my.deepcharts.com mit geöffnetem Subscriptions-Bereich und sichtbarer Rithmic-Abonnementzeile, Zugangsdaten-Bereich hervorgehoben (tatsächlichen Benutzernamen/Passwort unkenntlich machen) | dc-en-connect-rithmic-01.png]

2. Unterschreiben Sie die Rithmic-Marktdaten-Vereinbarung in R Trader Pro. Rithmic verlangt, dass Sie die Vereinbarungen akzeptieren, bevor sich irgendeine Drittanbieter-Plattform verbinden kann — solange sie nicht unterschrieben sind, schlägt die Verbindung selbst mit korrekten Zugangsdaten fehl. Laden Sie R Trader Pro von https://www.rithmic.com/rtraderpro herunter (klicken Sie auf **Download R | Trader Pro**), installieren und öffnen Sie es. Füllen Sie **beide** Login-Formulare mit denselben Werten aus: Ihr Rithmic-Benutzername und Passwort, **System** = **Rithmic Paper Trading** und das Ihnen nächstgelegene **Gateway**. Klicken Sie auf **Login**, wählen Sie bei der Abfrage Ihren Marktdaten-Status (Privathändler wählen normalerweise **Non-Professional**), lesen und akzeptieren Sie dann jede Vereinbarung, bis keine Abfragen mehr erscheinen. Der vollständige Ablauf ist in [[sign-market-data-agreement]] beschrieben.

[SCREENSHOT: R Trader Pro Login-Bildschirm mit den beiden nebeneinanderliegenden Login-Formularen, beide identisch ausgefüllt, System auf Rithmic Paper Trading gesetzt und das Gateway-Dropdown sichtbar | dc-en-connect-rithmic-02.png]

> **Hinweis:** Die Vereinbarungen werden auf Rithmics Servern gespeichert, Sie müssen R Trader Pro also nicht geöffnet lassen, während Sie DeepCharts verwenden. Sie wiederholen dies nur, wenn Ihr Konto zurückgesetzt wird oder Rithmic neue verpflichtende Vereinbarungen einführt.

3. Während Sie in R Trader Pro sind (nur bei der ersten Einrichtung), entfernen Sie Rithmics Datenempfangs-Limit: Öffnen Sie **Window → Preferences → Performance** und ziehen Sie beide Schieberegler — **Quotes** und **Order Book** — auf das Maximum, dann klicken Sie auf **Apply** und **OK**. Mit gesetztem Limit können Charts in Marktphasen mit hohem Volumen hinterherhinken. Schließen Sie R Trader Pro danach.

[SCREENSHOT: R Trader Pro Preferences-Fenster auf dem Performance-Tab mit den Schiebereglern Quotes und Order Book beide auf die Maximalposition gezogen | dc-en-connect-rithmic-03.png]

4. Klicken Sie in DeepCharts auf **Select Connection** in der oberen Symbolleiste, dann auf **Feed Settings** am unteren Ende des Dropdowns. Das Feed-Settings-Fenster öffnet sich.

[SCREENSHOT: DeepCharts-Hauptsymbolleiste mit geöffnetem Select-Connection-Dropdown und hervorgehobenem Feed-Settings-Eintrag am unteren Ende | dc-en-connect-rithmic-04.png]

5. Klicken Sie auf **Add Connection** und füllen Sie das Formular aus:

| Feld | Was einzutragen ist |
|---|---|
| **Name** | Eine beliebige Bezeichnung, die Sie später wiedererkennen, zum Beispiel "Rithmic Live". |
| **Feed Source** | **Rithmic RAPI** — die empfohlene Option. |
| **Username** | Ihr Rithmic-Benutzername (nicht Ihr Login für die DeepCharts-Website). |
| **Password** | Ihr Rithmic-Passwort. |
| **Server** | **Rithmic Paper Trading** für einen über die DeepCharts-Website gekauften Feed. |
| **Gateway** | **Automatic** (Standard), oder die Ihnen nächstgelegene Region. |

Lassen Sie jedes andere Feld unverändert. Die Option **Include commissions** ist standardmäßig aktiviert — sie zeigt Kommissionen in Ihrem P/L an.

Probieren Sie das Formular unten live aus — stellen Sie die Feed Source auf Rithmic RAPI und beobachten Sie, wie die Felder Server und Gateway erscheinen.

[WIDGET: feed-navigator]

> **Hinweis:** Das Feed-Source-Dropdown zeigt **Rithmic RAPI** und **Rithmic Wss - beta** — eine schlichte Option "Rithmic" gibt es nicht mehr; wenn eine ältere Anleitung eine erwähnt, wählen Sie **Rithmic RAPI**. Wenn sich Charts jemals verzögert oder instabil anfühlen, prüfen Sie, dass Sie auf RAPI und nicht auf der Wss-Beta sind.

> **Hinweis:** "Paper Trading" ist nur Rithmics Server-Bezeichnung für Datenfeed-Konten — die gelieferten Daten sind echt und live, identisch mit Broker- und Prop-Firmen-Rithmic-Feeds.

Das Gateway-Dropdown bietet: Automatic, Chicago Area, Seoul, Mumbai, Hong Kong, Sao Paolo, Singapore, Sydney, Tokyo, Frankfurt, Europe, Cape Town, NYC Area und US West. Ein weit entferntes Gateway funktioniert trotzdem, fügt aber Latenz hinzu — wenn Sie weit von Chicago entfernt sind und sich die Daten langsam anfühlen, wählen Sie die Ihnen nächstgelegene Region (zum Beispiel Europe oder Frankfurt für EU-Nutzer, Singapore oder Mumbai für Asien) und verbinden Sie sich neu.

### Wenn Ihr Rithmic-Konto von einem Broker stammt

Für Rithmic-Konten, die von AMP Futures, EdgeClear, Ironbeam, Phillips Capital oder Optimus Futures ausgestellt wurden, ist die Einrichtung identisch bis auf das Feld **Server**: Wählen Sie **Rithmic 01** statt Rithmic Paper Trading. Verwenden Sie denselben Wert im System-Feld, wenn Sie die Vereinbarung in R Trader Pro unterschreiben.

### Wenn Ihre Rithmic-Zugangsdaten von einer anderen Trading-Plattform stammen

Rithmic-Zugangsdaten, die über eine andere Orderflow- oder Heatmap-Plattform ausgestellt wurden (Quantower, Sierra Chart, MotiveWave, ATAS, NinjaTrader und ähnliche), funktionieren mit DeepCharts. Verwenden Sie **Server** = **Rithmic Paper Trading** und stellen Sie sicher, dass die Vereinbarung in R Trader Pro mit demselben Wert im System-Feld unterschrieben wurde.

> **Warnung:** Nur Rithmic-Zugangsdaten lassen sich auf diese Weise von anderen Plattformen übernehmen. dxFeed-Zugangsdaten, die über andere Plattformen ausgestellt wurden, können nicht mit DeepCharts verwendet werden — für dxFeed müssen Sie über die DeepCharts-Website kaufen oder direkt bei dxfeed.com mit DeepCharts als ausgewählter Plattform (siehe [[connect-dxfeed]]).

### Wenn Ihr Rithmic-Konto von einer Prop-Firma stammt

Folgen Sie [[connect-rithmic-prop-firm]] — jede Firma verwendet ihren eigenen benannten Server-Wert, aufgelistet in der Tabelle jenes Artikels. Für Apex Trader Funding gibt es eine eigene Anleitung: [[connect-apex]].

6. Klicken Sie auf **Save**.

7. Klicken Sie in der Hauptsymbolleiste erneut auf **Select Connection** — Ihr neuer Rithmic-Feed erscheint nun im Dropdown unter dem Namen, den Sie ihm gegeben haben. Klicken Sie darauf, um sich zu verbinden.

8. Leiten Sie Ihre Börsen auf den neuen Feed: Öffnen Sie **Options → Symbol Manage** und stellen Sie sicher, dass die Börsen, die Sie handeln, abonniert und dieser Rithmic-Verbindung zugeordnet sind (das Kettenglied-Symbol in einer Zeile ändert, von welchem Feed diese Börse lädt). Die Instrumentenauswahl zeigt nur Börsen, die Sie abonniert haben. Alle Details in [[symbol-manage]].

Probieren Sie die Zuordnung unten aus — klicken Sie auf das Kettenglied-Symbol in einer Zeile, um durchzuschalten, von welchem Feed die Börse lädt.

[WIDGET: symbol-manage-mock]

9. Öffnen Sie einen Chart: Klicken Sie im oberen Menü auf **New**, dann auf **Price Chart**, wählen Sie ein Instrument (zum Beispiel ES oder NQ) und bestätigen Sie.

## Prüfen, ob es funktioniert hat

- Innerhalb von etwa 10 Sekunden nach dem Verbinden wird die Verbindungsanzeige **grün**.
- Der geöffnete Chart lädt Kerzen und der Preis aktualisiert sich live.

[SCREENSHOT: DeepCharts-Hauptsymbolleiste mit grüner Verbindungsanzeige neben dem Rithmic-Feed-Namen, im Hintergrund ein live aktualisierender ES-Chart | dc-en-connect-rithmic-05.png]

## Wenn etwas schiefgelaufen ist

| Symptom | Wohin |
|---|---|
| Connection failed — check username and password | [[fix-username-password]] — die häufigste Ursache ist die Eingabe eines Website-Logins statt der Rithmic-Zugangsdaten |
| Connection failed — bad server | [[fix-bad-server]] — der Server-Wert passt nicht zu Ihrer Kontoquelle |
| Eine Meldung fordert Sie auf, sich über R Trader oder R Trader Pro anzumelden | [[fix-log-in-using-rtrader]] — der Vereinbarungsschritt wurde übersprungen oder unvollständig abgeschlossen |
| Die Anzeige wird gelb mit "Expert not attached" | [[fix-rithmic-expert-not-attached]] |
| Connection failed — unable to establish connection | [[fix-unable-to-establish-connection]] |
| Der Punkt ist grün, aber der Chart bewegt sich nicht | [[feed-connected-chart-not-moving]] — fast immer ein Routing-Problem in Symbol Manage |
| Charts laden, verzögern aber in aktiven Marktphasen | [[data-delayed-lagging]] — prüfen Sie, dass die Feed Source Rithmic RAPI ist und die Performance-Schieberegler in R Trader Pro auf Maximum stehen |

## Verwandte Artikel

- [[buy-data-feed]]
- [[sign-market-data-agreement]]
- [[connect-rithmic-prop-firm]]
- [[rtrader-pro-plugin]]
- [[symbol-manage]]
- [[manage-feed-connections]]
