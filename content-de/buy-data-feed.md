---
title: "So kaufen Sie einen Datenfeed und erhalten Ihre Zugangsdaten"
slug: "buy-data-feed"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Kaufen Sie ein Datenfeed-Abonnement auf my.deepcharts.com, unterzeichnen Sie den Marktdatenvertrag und erhalten Sie den Benutzernamen und das Passwort, mit denen sich DeepCharts verbindet."
keywords: ["datenfeed kaufen", "datenfeed erwerben", "datenfeed-abonnement", "zugangsdaten erhalten", "datenfeed benutzername und passwort", "marktdatenvertrag unterzeichnen", "marktdaten kaufen", "datenfeed-abonnement hinzufügen"]
---
Am Ende haben Sie ein aktives Datenfeed-Abonnement sowie den Benutzernamen und das Passwort, die DeepCharts für die Verbindung mit Echtzeit-Marktdaten benötigt.

DeepCharts bezieht seine Charts aus einem Echtzeit-Marktdatenfeed. Wenn Sie noch keine Feed-Zugangsdaten von einem Broker oder einer Prop-Firma haben, können Sie ein Feed-Abonnement direkt über Ihr Konto-Dashboard auf my.deepcharts.com kaufen — die Zugangsdaten werden dort ausgestellt, sobald der Marktdatenvertrag unterzeichnet ist. Hier landen diese Zugangsdaten am Ende — im Fenster "Feed Settings" innerhalb von DeepCharts. Wählen Sie im Mock unten eine Quelle aus, um zu sehen, welche Felder die einzelnen Anbieter abfragen:

[WIDGET: feed-navigator]

## Bevor Sie beginnen

- Ein DeepCharts-Konto auf my.deepcharts.com — dasselbe Konto, das Ihre Lizenz enthält (siehe [[install-deepcharts]])
- Eine Entscheidung, welchen Feed Sie möchten — [[compatibility-guide]] vergleicht die unterstützten Optionen
- Eine Zahlungskarte
- Ein paar Minuten Zeit für den Marktdatenvertrag (er fragt persönliche Angaben und Ihren Abonnentenstatus ab)

> **Hinweis:** Wenn Ihr Konto von einer **Prop-Firma** stammt, kaufen Sie hier keinen Feed — Ihre Feed-Zugangsdaten kommen aus dem Dashboard der Prop-Firma. Siehe stattdessen [[connect-rithmic-prop-firm]] oder [[connect-dxfeed-prop-firm]].

> **Tipp:** Sie erkunden die Plattform vorerst nur? Dann müssen Sie nichts kaufen — der integrierte [[free-delayed-data-feed|kostenlose, 15 Minuten verzögerte Feed]] funktioniert ohne Zugangsdaten und ohne Vertrag.

## Schritte

1. Melden Sie sich in Ihrem Dashboard auf my.deepcharts.com an.

2. Klicken Sie im linken Menü auf **Data Feed**.

[SCREENSHOT: Das Dashboard von my.deepcharts.com nach dem Login mit sichtbarem linken Menü und hervorgehobenem Eintrag Data Feed | dc-en-buy-data-feed-01.png]

3. Wählen Sie **Add data feed subscription**.

[SCREENSHOT: Der Bereich Data Feed mit hervorgehobener Schaltfläche Add data feed subscription | dc-en-buy-data-feed-02.png]

4. Wählen Sie den gewünschten Datenfeed und fahren Sie mit der Bestellung fort. Während der Bestellung wählen Sie die konkreten Marktdatenprodukte aus — welche Börsen Sie benötigen (CME, COMEX und so weiter) und die Datentiefe (Top of Book oder Markttiefe). Wählen Sie Markttiefe, wenn Sie das DOM und die Orderflow-Werkzeuge nutzen möchten; Top of Book reicht für einfache Candlestick-Charts aus.

[SCREENSHOT: Die Bestellseite für den Datenfeed mit ausgewähltem Feed und sichtbarer Liste der Marktdatenprodukte (Börsen, Optionen Top of Book / Markttiefe) | dc-en-buy-data-feed-03.png]

5. Geben Sie Ihre Karteninformationen ein und schließen Sie die Zahlung ab.

6. Kehren Sie nach erfolgreicher Zahlung in den Bereich **Data Feed** des Dashboards zurück.

7. Unterzeichnen Sie den Marktdatenvertrag. Der Vertrag verlangt von Ihnen:
   - Wählen Sie Ihren Abonnementstatus. Die meisten Einzelhändler-Trader qualifizieren sich als **Non-Professional** — die Börsen definieren die genauen Kriterien, lesen Sie die Beschreibungen im Formular daher sorgfältig, bevor Sie wählen.
   - Geben Sie Ihre persönlichen Daten ein.

[SCREENSHOT: Der Unterzeichnungsprozess des Marktdatenvertrags im Dashboard mit sichtbarer Option Non-Professional als Abonnementstatus | dc-en-buy-data-feed-04.png]

8. Wenn der Vertrag abgeschlossen ist, gehen Sie zurück in den Bereich **Data Feed**. Ihr Feed-**Benutzername und -Passwort** werden dort nun angezeigt — das sind die Zugangsdaten, die Sie in den DeepCharts Feed Settings eingeben.

[SCREENSHOT: Der Bereich Data Feed mit einem aktiven Abonnement und sichtbaren Feldern für Benutzername und Passwort (Werte unkenntlich gemacht) | dc-en-buy-data-feed-05.png]

### Wenn Sie einen Rithmic-Feed gekauft haben

Rithmic liefert seine Zugangsdaten über sein eigenes System, daher wird die Marktdatenvereinbarung für ein Rithmic-Abonnement in **R Trader Pro** abgeschlossen statt im Dashboard. Folgen Sie zuerst [[sign-market-data-agreement]] und verbinden Sie sich dann über [[connect-rithmic]].

### Wenn Sie Ihren Feed stattdessen auf dxfeed.com gekauft haben

Der Direktkauf auf dxfeed.com funktioniert ebenfalls, aber Sie müssen beim Checkout **DeepChart** als Plattform auswählen — andernfalls sind die Zugangsdaten nicht mit DeepCharts kompatibel. Die Verbindungsschritte finden Sie unter [[connect-dxfeed]].

## Erfolg überprüfen

Im Bereich **Data Feed** auf my.deepcharts.com wird Ihr Abonnement als aktiv angezeigt, und Benutzername und Passwort sind sichtbar. Mehr braucht DeepCharts nicht — der nächste Schritt ist die Eingabe in den Feed Settings, beschrieben in [[connect-data-feed]].

## Wenn etwas schiefgelaufen ist

| Symptom | Was zu tun ist |
|---|---|
| Kein Benutzername/Passwort nach der Zahlung sichtbar | Der Marktdatenvertrag ist nicht vollständig unterzeichnet — öffnen Sie den Bereich Data Feed erneut und schließen Sie jeden Vertragsschritt ab |
| Zugangsdaten werden beim Verbinden abgelehnt | [[fix-username-password]] |
| Unsicher, ob dieser Feed Ihren Markt oder Broker abdeckt | [[compatibility-guide]] |
| Sie haben ein Prop-Firmen-Konto | Beziehen Sie die Zugangsdaten aus dem Dashboard der Prop-Firma — [[connect-rithmic-prop-firm]] oder [[connect-dxfeed-prop-firm]] |

## Verwandte Artikel

- [[connect-data-feed]]
- [[connect-dxfeed]]
- [[connect-rithmic]]
- [[sign-market-data-agreement]]
- [[free-delayed-data-feed]]
- [[compatibility-guide]]
