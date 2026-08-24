---
title: "Absolute Levels"
slug: "absolute-levels"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Zeichnet zwei feste horizontale Preislevels, die Sie selbst definieren, jeweils mit eigener Farbe, eigenem Stil und eigener Dicke — ein leichtgewichtiger Weg, wichtige Preise im Chart zu behalten."
keywords: ["absolute levels", "festes Preislevel", "horizontales Level", "eigene Levels", "Preislinie", "statische Levels", "wichtige Preislinie", "manueller Level-Indikator"]
---

Der Indikator Absolute Levels zeichnet horizontale Linien an Preiswerten, die Sie selbst eingeben. Er ist ein Werkzeug der technischen Analyse, um wichtige Unterstützungs- und Widerstandslevels im Preischart eines Instruments zu markieren — anders als bei automatischen Level-Indikatoren wählen Sie jedoch die exakten Preise selbst, und der Indikator hält sie mit der von Ihnen gewählten Formatierung im Chart.

Damit ist er das richtige Werkzeug für Levels, die aus Ihrer eigenen Analyse oder ganz von außerhalb des Charts stammen: ein Settlement-Preis, eine runde Zahl, ein Level aus einer Analyse auf höherer Zeitebene oder ein im Trading-Plan markierter Preis.

## Was es ist

Absolute Levels ist ein manueller Level-Indikator. Sie geben bis zu zwei feste Preiswerte ein — **First Value** und **Second Value** — und der Indikator zeichnet jeden als horizontale Linie mit unabhängig konfigurierbarer Farbe, Stil und Dicke. Er beantwortet die Frage: "Wo liegen meine vorab festgelegten Preise im Verhältnis zum aktuellen Markt?"

[SCREENSHOT: Chartfenster mit angewendetem Absolute Levels — zwei horizontale Linien an benutzerdefinierten Preisen in unterschiedlichen Farben und Stilen, eine über und eine unter dem aktuellen Preis, deutlich über die gesamte Chartbreite verlaufend | dc-en-absolute-levels-01.png]

## Wann Sie es verwenden

- Sie haben exakte Preise aus Ihrem Trading-Plan (Einstiege, Invalidierungslevels, Ziele) und möchten sie fest im Chart verankern.
- Sie verfolgen Preise, die kein automatischer Indikator liefert — runde Zahlen, Settlement, ein Level aus einem Nachrichtenereignis.
- Sie möchten Levels, die sich nie bewegen: anders als berechnete Levels bleiben absolute Levels exakt dort, wo Sie sie platziert haben, bis Sie sie ändern.
- Sie möchten ein Paar Referenzlinien mit unterschiedlicher Formatierung — zum Beispiel eine grüne Ziellinie und eine rote Risikolinie.

## Schnellstart

1. Öffnen Sie die **Indicator List** in Ihrem Chart.
2. Suchen Sie **Absolute Levels** und klicken Sie auf **+**, um den Indikator hinzuzufügen.
3. Klicken Sie auf das **Settings**-Symbol neben dem Indikator.
4. Geben Sie den Preis Ihres ersten Levels in **First Value** und den Preis Ihres zweiten Levels in **Second Value** ein.
5. Geben Sie den beiden Linien eine kontrastierende Formatierung — zum Beispiel eine durchgezogene Linie für das wichtigere Level und eine gestrichelte für das sekundäre — über die Einstellungen **Color**, **Style** und **Thickness** jeder Linie.
6. Übernehmen Sie die Einstellungen und prüfen Sie, dass beide Linien exakt an den eingegebenen Preisen liegen.

[SCREENSHOT: Einstellungsdialog von Absolute Levels mit dem Abschnitt Parameters, in dem die Felder First Value und Second Value ausgefüllt sind, sowie den Formatierungsgruppen First Line und Second Line mit den Reglern Color, Style und Thickness | dc-en-absolute-levels-02.png]

## So lesen Sie es

Absolute Levels fügt keine eigene Berechnung hinzu — die Interpretation ist die Bedeutung, die Ihre Preise tragen:

- **Preis nähert sich einem Level:** Ihr Signal, aufmerksam zu werden. Beobachten Sie, wie sich der Markt an Ihrem vorab markierten Preis verhält, statt im Moment zu entscheiden.
- **Eine saubere Abweisung an einem Level** bestätigt die Analyse, aus der der Preis stammt; ein entschlossener Schlusskurs jenseits des Levels invalidiert diese Idee und macht die Linie zu einer potenziellen Retest-Referenz von der anderen Seite.
- **Zwei Levels bilden eine Klammer.** Mit einem Wert über und einem unter dem Preis haben Sie eine einfache Range-Karte: Außerhalb der Klammer tut der Markt etwas, das Ihr Plan berücksichtigen sollte.

## Einstellungsreferenz

Gruppiert wie im Einstellungsdialog.

### Parameters

| Einstellung | Was sie bewirkt |
|---|---|
| **First Value** | Preis des ersten absoluten Levels, das in Ihrem Chart angezeigt wird. |
| **Second Value** | Preis des zweiten absoluten Levels, das in Ihrem Chart angezeigt wird. |

### First Line

| Einstellung | Was sie bewirkt |
|---|---|
| **First Line Color** | Farbe der ersten gezeichneten Linie. |
| **First Line Style** | Visueller Stil der ersten gezeichneten Linie. |
| **First Line Thickness** | Breite der ersten gezeichneten Linie. |

### Second Line

| Einstellung | Was sie bewirkt |
|---|---|
| **Second Line Color** | Farbe der zweiten gezeichneten Linie. |
| **Second Line Style** | Visueller Stil der zweiten gezeichneten Linie. |
| **Second Line Thickness** | Breite der zweiten gezeichneten Linie. |

## Tipps und häufige Fehler

- **Aktualisieren Sie die Werte, wenn sich Ihr Plan ändert.** Absolute Levels rollen nicht über und berechnen sich nicht neu; eine veraltete Linie aus dem Plan der Vorwoche ist schlechter als gar keine Linie. Prüfen Sie die Werte im Rahmen Ihrer Session-Vorbereitung.
- **Verwenden Sie den Indikator zusätzlich zu — nicht anstelle von — berechneten Levels.** Automatische Werkzeuge wie [[important-levels]] und [[pivot-points]] decken die Standard-Referenzpreise ab; reservieren Sie Absolute Levels für die wenigen Preise, die nur Sie verfolgen.
- **Unterscheiden Sie die beiden Linien visuell.** Wenn beide Linien Farbe und Stil teilen, verlieren Sie die Information, welches Level welches ist; kodieren Sie die Bedeutung in der Formatierung.
- **Bevorzugen Sie diesen Indikator gegenüber einer gezeichneten Linie, wenn Präzision zählt.** Die Eingabe des exakten Werts in **First Value** vermeidet die kleinen Platzierungsfehler beim Ziehen einer Zeichnung von Hand — siehe [[drawing-tools]] dazu, wann eine freihändige Linie besser passt.

## Verwandte Artikel

- [[important-levels]]
- [[pivot-points]]
- [[price-movement-levels]]
- [[drawing-tools]]
- [[different-types-of-input]]
- [[indicator-layout]]
