---
title: "Depth of Market (DOM) Indikator"
slug: "depth-of-market"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Referenz für das DeepCharts DOM-Preis-Ladder: Spalten, Regeln zur Orderplatzierung, Pull/Stack- und Trades-Spalten, Profile und Tiefeneinstellungen."
keywords: ["depth of market", "DOM", "preis-ladder", "adv dom", "orderbuch", "level 2", "pull stack", "bid ask ladder", "dom spalten"]
---
Das Depth of Market (DOM) ist die Preis-Ladder-Ansicht des Orderbuchs: eine vertikale Preisspalte mit der ruhenden Kaufliquidität (Bids) auf der einen und der ruhenden Verkaufsliquidität (Asks) auf der anderen Seite. In DeepCharts ist das voll ausgestattete DOM das Fenster **Advanced DOM**, und eine kompakte Version kann direkt über den Chart gelegt werden.

Dieser Artikel ist die Referenz für die DOM-Oberfläche — ihre Spalten, Klickregeln und Einstellungen. Für die vollständige Fensterbeschreibung siehe [[advanced-dom]]; für das On-Chart-Ladder siehe [[dom-trading-chart]].

[CONFIRM: whether "Depth of Market" also exists as a standalone chart indicator in the Indicator List, separate from the Advanced DOM window and the on-chart DOM Trading mode — adjust the intro if so]

## Was es ist

Das DOM beantwortet die Frage: Wer wartet zu welchem Preis darauf, zu kaufen und zu verkaufen, und wie trade ich dagegen? Jede Zeile ist ein Preislevel. Bid-Mengen stapeln sich unterhalb des Marktes, Ask-Mengen darüber, und die Anzeige aktualisiert sich in Echtzeit, während Orders hinzugefügt, gezogen und ausgeführt werden. Da Orders durch direktes Klicken auf eine Preiszeile platziert werden, ist das DOM das Werkzeug der Wahl für Trader, denen exakte Einstiegslevels und die Warteschlangenposition wichtiger sind als chartbasierte Einstiege.

Beobachten Sie unten ein Live-Ladder in Aktion — Kaufliquidität stapelt sich grün unterhalb des Marktes, Verkaufsliquidität violett darüber; fahren Sie mit der Maus über eine Zeile, um zu sehen, was dieses Level Ihnen sagt.

[WIDGET: dom-ladder]

## Wann Sie es verwenden

- Scalping oder kurzfristiges Trading, bei dem der exakte Tick des Einstiegs zählt.
- Beobachten, wie sich ruhende Liquidität um ein Level herum aufbaut oder verschwindet, bevor Sie sich festlegen.
- Aktive Orders visuell verwalten — ziehen zum Verschieben, Rechtsklick zum Löschen.
- Ausgeführtes Volumen pro Level zusammen mit einem Live-Volumenprofil lesen.

## Schnellstart

1. Öffnen Sie DeepCharts und verbinden Sie Ihren Datenfeed — [[connect-data-feed]].
2. Gehen Sie zu **New → Book → ADV DOM**.
3. Wählen Sie Ihr Instrument aus der Liste der abonnierten Symbole (zum Beispiel **ES**) und klicken Sie auf **Select**.
4. Legen Sie die Orderstückzahl im Feld am unteren Rand des DOM fest.
5. Stellen Sie das Ordertyp-Menü (das **A**-Menü) auf **Automatic** — Ordertypen werden dann danach gewählt, wohin Sie klicken (siehe Tabelle unten).

[SCREENSHOT: Geöffnetes New-Menü mit dem Book-Untermenü und hervorgehobenem ADV DOM, dahinter sichtbar der Dialog Select Instrument | dc-en-depth-of-market-01.png]

> **Hinweis:** Das DOM benötigt Level-2-Daten (Markttiefe) von Ihrem Feed, um die Bid- und Ask-Ladder zu füllen. Mit Level-1-Daten ist nur das beste Bid/Ask verfügbar.

## So lesen Sie es

Das Standardlayout zeigt von links nach rechts:

| Spalte | Bedeutung |
|---|---|
| **P&L** | Ihr Gewinn oder Verlust je Tick — was die Position wert wäre, wenn der Preis dort gehandelt würde |
| **B** | Verwaltung von Kauforders |
| **Bid** | Ruhende Kaufliquidität; klicken Sie hier, um Kauforders zu platzieren |
| **Price** | Das zentrale Preis-Ladder |
| **Ask** | Ruhende Verkaufsliquidität; klicken Sie hier, um Verkaufsorders zu platzieren |
| **S** | Verwaltung von Verkaufsorders |
| **VP** | Tages-Volumenprofil — ausgeführtes Volumen pro Preislevel |

Die Kopfzeile zeigt das ausgewählte Instrument, den verbundenen Broker, das aktive Trading-Konto, die Stückzahl der offenen Position und das Tages-P&L. Darunter liefert die Fundamentaldaten-Tabelle Session-Kontext: prozentuale Veränderung zum Vortagesschluss, Veränderung zur Session-Eröffnung, gehandeltes Gesamtvolumen, Anzahl der Trades (Aktien) sowie die oberen und unteren Aussetzungspreise.

Ist im **A**-Menü **Automatic** gewählt, entscheidet die Klickposition über den Ordertyp:

| Klick | Order |
|---|---|
| Linksklick auf **Bid** unter dem aktuellen Preis | Buy Limit |
| Linksklick auf **Bid** über dem aktuellen Preis | Buy Stop |
| Linksklick auf **Ask** über dem aktuellen Preis | Sell Limit |
| Linksklick auf **Ask** unter dem aktuellen Preis | Sell Stop |
| Rechtsklick auf **Bid** | Buy Market |
| Rechtsklick auf **Ask** | Sell Market |

Aktive Orders werden direkt auf dem Ladder verwaltet: **Linksklick und ziehen**, um eine Order zu verschieben, **Rechtsklick**, um sie zu löschen, **doppelter Linksklick**, um ihre Stückzahl zu ändern.

[SCREENSHOT: DOM-Ladder mit einer aktiven Buy-Limit-Order in der B-Spalte, die auf eine tiefere Preiszeile gezogen wird, Cursor mitten im Ziehvorgang sichtbar | dc-en-depth-of-market-02.png]

### Optionale Analysespalten

Klicken Sie mit der rechten Maustaste auf die Spaltenkopfzeile, um weitere Spalten zu aktivieren (oder die vorhandenen automatisch anzupassen):

- **Pull/Stack** (**B.PS** / **A.PS**) — die Veränderung der ruhenden Liquidität pro Level. Auf der Bid-Seite bedeutet Grün, dass Menge hinzugefügt wurde (gestackt), Rot, dass Menge entfernt wurde (gepullt); die Ask-Seite kehrt die Farblogik um.
- **Trades** (**BT** / **AT**) — ausgeführtes Volumen pro Level: BT ist per Market verkauftes Volumen (Hitting the Bid), AT ist per Market gekauftes Volumen (Lifting the Ask).
- **Offers** — die Anzahl der einzelnen Orders, die auf jedem Bid- und Ask-Level ruhen.

[SCREENSHOT: Geöffnetes Rechtsklick-Menü der Spaltenkopfzeile über dem Advanced DOM mit der Liste zusätzlicher Spalten, darunter Pull/Stack, Trades und Offers mit Häkchen | dc-en-depth-of-market-03.png]

### Profile

Das DOM kann neben dem Ladder Profile auf Basis von **Volume**-, **Delta**- oder **Bid/Ask**-Daten zeichnen. Es gibt zwei Aufzeichnungsmodi: Das **Resettable Profile** beginnt die Aufzeichnung in dem Moment, in dem Sie es aktivieren, und wird mit dem Radiergummi-Symbol geleert; das **Daily Profile** zeigt Daten ab Beginn der Handels-Session. Die Konzepte hinter dem Lesen von Profilen behandelt [[understanding-volume-profile]].

## Einstellungsreferenz

Öffnen Sie die DOM-Einstellungen über das **Zahnrad-Symbol** (oben links).

| Einstellungsgruppe | Funktion |
|---|---|
| Bereichs-Schalter | Ganze Bereiche des DOM aktivieren oder deaktivieren, um das Layout zu vereinfachen |
| **Order Column Settings** | Spalten neu anordnen |
| **Chart DOM Settings** | Text, Farben und Hintergrund anpassen |
| Marker | Level-Marker für **High**, **Low**, **Open** und **Suspension**-Preise aktivieren |
| **DOM Settings → Number of Levels Show** | Begrenzt, wie viele Tiefen-Levels angezeigt werden — 20 einstellen, um 20 Levels zu zeigen; unbeschränkt lassen für die volle Tiefe, die Ihr Anbieter sendet |
| **Model**-Bereich | Ihr angepasstes Layout als Vorlage speichern und gespeicherte Vorlagen später laden |

Am unteren Rand des Fensters sitzen das Feld für die Orderstückzahl, die klassischen Trading-Buttons und der **OCO**-Schalter; das Zahnrad-Symbol unten rechts erstellt, speichert und lädt OCO-Strategien aus einem Dropdown — dasselbe Bracket-System, das in [[oco-strategies]] beschrieben ist.

Vertikale Skala: In der **Price**-Spalte scrollt ein Klick nahe dem aktuellen Preis die Ansicht, während ein Klick nahe dem oberen oder unteren Rand die Preisskala dehnt oder staucht (die Spalte nutzt einen automatischen Erkennungsmodus, das genaue Verhalten hängt also davon ab, wo Sie greifen).

## Tipps und häufige Fehler

- **Leere Bid/Ask-Ladder, aber die Preiszeile aktualisiert sich** — Ihr Feed liefert nur Level 1. Prüfen Sie, welche Markttiefe Ihr Feed-Tarif enthält ([[compatibility-guide]]).
- **Überraschungen beim Ordertyp** — im **Automatic**-Modus ergibt sich der Typ aus der Klickposition relativ zum aktuellen Preis. Wenn Sie einen Typ erzwingen möchten, stellen Sie das **A**-Menü auf **Limit**, **Market** oder **Conditional**.
- **Zu viel Flackern in schnellen Märkten** — begrenzen Sie **Number of Levels Show** und deaktivieren Sie Spalten, die Sie nicht lesen; weniger Tiefe bedeutet eine ruhigere, schnellere Anzeige.
- **Layout nach dem Neuaufbau verloren** — speichern Sie es im **Model**-Bereich, damit Sie es auf jedem DOM neu laden können.
- **Liquidität beobachten, ohne traden zu wollen** — denken Sie daran, dass jeder Linksklick in Bid/Ask eine echte Order platziert, sobald ein Konto aktiv ist. Üben Sie das Lesen des Ladders zuerst auf einem SIM-Konto ([[simulation-accounts]]).

## Verwandte Artikel

- [[advanced-dom]]
- [[dom-trading-chart]]
- [[trading-panel-reference]]
- [[oco-strategies]]
- [[orderflow-101]]
- [[understanding-volume-profile]]
