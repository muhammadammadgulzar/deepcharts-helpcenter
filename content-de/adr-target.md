---
title: "Average Daily Range Target (ADR Target)"
slug: "adr-target"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Projiziert Intraday-Preisziele aus der durchschnittlichen Tagesrange der letzten Sessions, damit Sie statistisch fundierte Gewinnziele setzen und Erschöpfungszonen erkennen."
keywords: ["ADR", "ADR Target", "durchschnittliche Tagesrange", "Tagesrange-Projektion", "Range-Ziel", "Intraday-Ziele", "Expansionsziel", "Average-Range-Indikator"]
---

Das Average Daily Range Target (ADR Target) berechnet die durchschnittliche Preisbewegung — von Hoch zu Tief — eines Instruments über eine festgelegte Anzahl von Tagen und projiziert diese Range als potenzielle Intraday-Preisziele nach vorn. Statt zu raten, wie weit die heutige Bewegung tragen kann, messen Sie sie an dem, was das Instrument zuletzt tatsächlich geleistet hat.

Das macht den Indikator zu einem Volatilitätsmaßstab: Hat der Preis seine typische Tagesdistanz bereits zurückgelegt, sinkt die Wahrscheinlichkeit weiterer Expansion — und Ihre Gewinnziele und Risikoentscheidungen können das widerspiegeln.

## Was es ist

ADR Target ist ein statistischer Level-Indikator. Er mittelt die Hoch-Tief-Range der letzten N Perioden (standardmäßig Tagesbars, mit Wochen- und Monatsoptionen) und zeichnet diese erwartete Range als beschriftete Ziellevels in Ihren Chart. Er beantwortet die Fragen "Wie weit bewegt sich dieser Markt üblicherweise an einem Tag?" und "Wie viel dieser Bewegung ist bereits passiert?"

[SCREENSHOT: Chartfenster mit angewendetem ADR Target — Intraday-Kerzen mit den projizierten ADR-Ziellevels und ihren Textlabels im Chart, der Preis notiert etwa auf halbem Weg zum oberen Ziel | dc-en-adr-target-01.png]

## Wann Sie es verwenden

- Sie möchten realistische tägliche Expansionsziele statt willkürlicher Rundzahl-Ziele.
- Sie möchten Intraday-Erschöpfungszonen abschätzen — Bereiche, in denen der Tag seine statistisch typische Distanz bereits zurückgelegt hat.
- Sie steuern Gewinnziele über Statistik: Gewinnmitnahme innerhalb der durchschnittlichen Range, statt auf einen Ausreißertag zu hoffen.
- Sie neigen dazu, spät am Tag zu viel zu traden — die ADR zeigt, wann der Markt sein typisches Volatilitätsbudget wahrscheinlich verbraucht hat.

## Schnellstart

1. Öffnen Sie die **Indicator List** in Ihrem Chart.
2. Suchen Sie **ADR Target** und klicken Sie auf **+**, um den Indikator hinzuzufügen.
3. Klicken Sie auf das **Settings**-Symbol neben dem Indikator.
4. Setzen Sie **Length Type** auf **Daily** — damit wird die ADR aus Tagesbars berechnet, die Standardlesart.
5. Setzen Sie **Length** auf **10**, damit der Durchschnitt die letzten 10 Handelstage verwendet.
6. Passen Sie **Font Size**, **Text Align**, **Background** und **Text Color** in den Plot-Einstellungen an, bis die Labels auf Ihrem Farbschema gut lesbar sind, und übernehmen Sie dann die Einstellungen.

[SCREENSHOT: Einstellungsdialog von ADR Target mit geöffnetem Length-Type-Dropdown und den Optionen Daily, Weekly und Monthly, dem Length-Feld auf 10 und den Plot-Einstellungen (Font Size, Text Align, Background, Text Color) darunter | dc-en-adr-target-02.png]

## So lesen Sie es

Die projizierten Levels stehen für die Distanz, die das Instrument an einem durchschnittlichen Tag zurücklegt. [CONFIRM: which price the ADR targets are projected from — session open, current day high/low, or previous close]

- **Preis deutlich innerhalb der ADR:** Der Tag hat statistisch noch Raum zur Expansion. Trendfortsetzungsziele innerhalb der verbleibenden Range sind vernünftig.
- **Preis nähert sich einer vollen ADR-Ausdehnung:** Der Tag hat seine typische Distanz zurückgelegt. Das ist eine natürliche Gewinnmitnahmezone und ein schlechter Ort, um frische Breakout-Trades zu eröffnen — die meisten Tage überschreiten ihre durchschnittliche Range nicht.
- **Preis überschreitet die ADR:** Sie befinden sich in einer Ausreißer-Session, meist getrieben von Nachrichten oder einem echten Regimewechsel. Behandeln Sie die Levels als Information, nicht als harte Obergrenze.

Der Length Type ändert den Horizont: **Weekly** und **Monthly** mitteln die Range von Wochen- und Monatsbars und erzeugen breitere Ziele, die eher für die Swing-Planung als für die Intraday-Ausführung geeignet sind.

## Einstellungsreferenz

Gruppiert wie im Einstellungsdialog.

### Calculation

| Einstellung | Was sie bewirkt |
|---|---|
| **Length Type** | Bargröße für den Range-Durchschnitt: **Daily** (berechnet die ADR aus Tagesbars), **Weekly** oder **Monthly**. |
| **Length** | Anzahl der vergangenen Perioden zur Berechnung der durchschnittlichen Range. Beispiel: **Length = 10** mit Daily verwendet die letzten 10 Handelstage. |

### Plot Settings

| Einstellung | Was sie bewirkt |
|---|---|
| **Font Size** | Passt die Größe des ADR-Labeltexts im Chart an. |
| **Text Align** | Richtet die Labels **Left** (links) oder **Right** (rechts) am Level aus. |
| **Background** | Hintergrundfarbe des Labels. |
| **Text Color** | Farbe des Labeltexts. |

## Tipps und häufige Fehler

- **Passen Sie Length an das aktuelle Regime an.** Eine kurze Length (5–10 Tage) passt sich nach einem Volatilitätswechsel schnell an; eine längere Length glättet einmalige Nachrichtentage. Hat der Markt kürzlich seinen Charakter geändert, hinkt ein langer Durchschnitt der Realität hinterher.
- **ADR ist eine Wahrscheinlichkeit, keine Mauer.** Der Preis überschreitet seine durchschnittliche Range an Ausreißertagen per Definition. Handeln Sie niemals gegen eine starke Bewegung, nur weil die ADR "voll" ist — kombinieren Sie sie mit Marktstruktur und Orderflow-Bestätigung.
- **Verwenden Sie Weekly-/Monthly-Ziele nicht zum Scalpen.** Sie beschreiben mehrtägige Ranges; auf einem Intraday-Chart liegen sie weit vom Preis entfernt und verleiten zu überdimensionierten Zielen.
- **Prüfen Sie den Session-Kontext.** Feiertags-Sessions und halbe Handelstage komprimieren die Ranges und ziehen den Durchschnitt für die Folgetage nach unten. Siehe [[understanding-market-structure-sessions]] dazu, wie Sessions die Zahlen prägen.

## Verwandte Artikel

- [[atr]]
- [[standard-deviation]]
- [[understanding-market-structure-sessions]]
- [[different-types-of-input]]
- [[indicator-layout]]
