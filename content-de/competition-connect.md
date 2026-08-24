---
title: "DeepCharts Competition: Teilnehmen und verbinden"
slug: "competition-connect"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Nehmen Sie an einem DeepCharts-Trading-Wettbewerb teil und verbinden Sie das V-Sim-Wettbewerbskonto zusammen mit Ihrem Datenfeed."
keywords: ["Wettbewerb", "Contest", "Championship", "V-Sim", "vsim", "Wettbewerb beitreten", "Contest-Zugangsdaten", "Trading-Wettbewerb", "Konto zurücksetzen"]
---
Am Ende haben Sie an einem DeepCharts-Wettbewerb teilgenommen und traden auf Ihrem Wettbewerbskonto mit Live-Charts. DeepCharts veranstaltet regelmäßig Trading-Wettbewerbe; Wettbewerbskonten laufen über die Feed-Quelle **V-Sim**, die **nur für die Ausführung** zuständig ist — sie platziert Ihre Wettbewerbs-Trades, liefert aber keine Marktdaten. Deshalb verbinden Sie zwei Dinge gleichzeitig: das Wettbewerbskonto für Trades und Ihren eigenen Datenfeed für die Charts.

Da V-Sim Trades gegen reale Echtzeit-Marktbedingungen ausführt, wird der kostenlose, um 15 Minuten verzögerte Feed für Wettbewerbe nicht unterstützt — Sie benötigen eine Live-Verbindung über Rithmic oder dxFeed.

## Bevor Sie beginnen

- Eine aktive DeepCharts-Plattformlizenz — [[install-deepcharts]]
- Ein verbundener und funktionierender Live-Datenfeed (Rithmic oder dxFeed) — [[connect-data-feed]] (der verzögerte Feed aus [[free-delayed-data-feed]] genügt nicht)
- Ein DeepCharts-Website-Konto, um sich für den Wettbewerb zu registrieren

## Schritte

1. Rufen Sie `my.deepcharts.com` auf und melden Sie sich in Ihrem Dashboard an.

2. Wählen Sie **Contest** in der Seitenleiste.

[SCREENSHOT: DeepCharts-Dashboard mit hervorgehobenem Contest-Eintrag in der Seitenleiste und sichtbarer Karte eines aktiven Wettbewerbs | dc-en-competition-connect-01.png]

3. Suchen Sie den aktiven Wettbewerb und klicken Sie auf **Join Competition**. Über den Regel-Link auf derselben Seite können Sie zuvor die Wettbewerbsregeln einsehen.

4. Bestätigen Sie die Abfrage und aktualisieren Sie anschließend die Browserseite.

5. Klicken Sie auf **See Credentials**. Notieren Sie die vier angezeigten Werte: **Username**, **Password**, **Feed Source** (V-Sim) und Ihre Wettbewerbs-**Account ID**.

[SCREENSHOT: Contest-Seite nach dem Beitritt mit der Schaltfläche See Credentials und dem Zugangsdaten-Panel mit Benutzername, Passwort, Feed-Quelle V-Sim und Konto-ID (Werte geschwärzt) | dc-en-competition-connect-02.png]

> **Hinweis:** Die Zugangsdaten erscheinen erst, sobald der Wettbewerb begonnen hat. Wenn Sie sich registriert haben, aber noch keine Zugangsdaten sehen, warten Sie auf das Startdatum.

6. Klicken Sie in DeepCharts auf **Select Connection** → **Feed Settings** und dann auf **Add Connection**.

7. Füllen Sie das Formular aus:
   - **Name** — eine beliebige Bezeichnung, zum Beispiel "Contest".
   - **Feed Source** — wählen Sie **V-Sim**. Dies ist das entscheidende Feld; V-Sim steht im selben Dropdown wie Rithmic und dxFeed.
   - **Username** und **Password** — aus dem Zugangsdaten-Panel aus Schritt 5.

[SCREENSHOT: Feed-Settings-Dialog mit Feed Source auf V-Sim und eingetragenem Wettbewerbs-Benutzernamen | dc-en-competition-connect-03.png]

8. Klicken Sie auf **Save** und schließen Sie das Fenster Feed Settings.

9. Verbinden Sie in **Select Connection** den Wettbewerbs-Feed — und stellen Sie sicher, dass Ihr Datenfeed **ebenfalls** verbunden ist. Beide müssen gleichzeitig grüne Punkte anzeigen; Sie können mehrere Verbindungen parallel halten (siehe [[manage-feed-connections]]).

[SCREENSHOT: Select-Connection-Dropdown, in dem sowohl die V-Sim-Wettbewerbsverbindung als auch eine Live-Datenfeed-Verbindung grüne Punkte zeigen | dc-en-competition-connect-04.png]

10. Öffnen Sie **Options → Symbol Manage** und bestätigen Sie, dass jede Börse auf Ihren **Datenfeed und nicht auf das V-Sim-Wettbewerbskonto** geroutet ist. Zeigt Symbol Manage auf V-Sim, bleiben die Charts leer, weil das Wettbewerbskonto keine Daten liefert. Probieren Sie den interaktiven Mock unten aus — klicken Sie auf das Kettenglied-Symbol einer Zeile, um den zugeordneten Feed zu wechseln. Siehe [[symbol-manage]].

[WIDGET: symbol-manage-mock]

11. Öffnen Sie einen Preischart. Setzen Sie im **Trading Panel** (rechte Seite des Charts) das Feld **Broker** auf **V-Sim** und wählen Sie Ihr Wettbewerbskonto aus dem Dropdown. Der Startsaldo beträgt $50.000. Erkunden Sie das Panel im interaktiven Mock unten — fahren Sie mit der Maus über eine Schaltfläche, um ihre Funktion zu sehen, und klicken Sie auf die SIM-Position, um das Live-P/L zu beobachten:

[WIDGET: trading-panel-mock]

### Wenn Sie Ihr Konto zurücksetzen möchten

Klicken Sie auf der Contest-Seite im Dashboard auf **Reset Account** und bestätigen Sie. Ihr Saldo kehrt auf $50.000 zurück. Es ist **ein Reset** erlaubt, und zwar nur innerhalb der **ersten Woche** des Wettbewerbs — danach verschwindet die Option, setzen Sie sie also mit Bedacht ein.

### Wenn kein Wettbewerb offen ist

Die Contest-Seite zeigt die Schaltfläche **Join Competition** nur, solange Registrierungen offen sind. Wird nichts angezeigt, schauen Sie später wieder vorbei — Wettbewerbe finden regelmäßig statt.

## Prüfen, ob es funktioniert hat

- Sowohl die V-Sim-Wettbewerbsverbindung als auch Ihr Datenfeed zeigen grüne Punkte.
- Die Charts aktualisieren sich live über Ihren Datenfeed.
- Das Trading Panel zeigt den V-Sim-Broker, Ihr Wettbewerbskonto und den Saldo von $50.000.

## Wettbewerbsregeln

Die Regeln jedes Wettbewerbs werden auf der Contest-Seite veröffentlicht — lesen Sie sie vor dem Trading. Bei den letzten Wettbewerben galten diese Regeln:

| Regel | Wert |
|---|---|
| Kontotyp | Nur simuliertes Demokonto (kein echtes Geld) |
| Ranking-Berechtigung | Mindestens 3 aktive Handelstage |
| Tagesverlustlimit | 3% des Kontostands |
| Tagesgewinnlimit | 10% des Kontostands |
| Maximale Position | 5 Mini-Kontrakte gleichzeitig |
| Overnight-Positionen | Verboten — automatische Schließung zum Börsenschluss |
| Resets | 1 Reset, nur in der ersten Woche |

Eine aktive Plattformlizenz und ein Live-Datenfeed sind während des gesamten Wettbewerbs erforderlich. Die Preisdetails jedes Wettbewerbs sind auf der Contest-Seite aufgeführt.

## Wenn etwas schiefgelaufen ist

- **Charts zeigen keine Daten** — Symbol Manage zeigt auf das V-Sim-Konto statt auf Ihren Datenfeed, oder der Datenfeed ist nicht verbunden. Routen Sie in [[symbol-manage]] um und prüfen Sie, dass beide Punkte grün sind.
- **Keine Schaltfläche See Credentials** — der Wettbewerb hat noch nicht begonnen, oder Sie haben sich registriert, ohne die Beitrittsbestätigung abzuschließen. Prüfen Sie, ob die Contest-Seite Sie als beigetreten anzeigt.
- **Wettbewerbsverbindung bleibt rot** — kopieren Sie Benutzername und Passwort exakt aus dem Zugangsdaten-Panel; siehe [[fix-username-password]].
- Alles andere — siehe [[get-help]].

## Verwandte Artikel

- [[connect-data-feed]]
- [[connect-rithmic]]
- [[connect-dxfeed]]
- [[symbol-manage]]
- [[manage-feed-connections]]
- [[trading-panel-reference]]
