---
title: "Deep Delta"
slug: "deep-delta"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Referenz für Deep Delta: gefiltertes Delta mit bis zu vier Größenbereichen zur Trennung kleiner, mittlerer und großer Marktteilnehmer, plus Schwellenwert-Linien und Absorptions-Markern."
keywords: ["deep delta", "delta filter", "delta bars", "gefiltertes delta", "multi range delta", "big player delta", "absorptions-marker", "delta bereiche"]
---

Deep Delta ist eine fortgeschrittene Weiterentwicklung des klassischen Delta-Bars-Indikators. Statt einer einzigen Delta-Zahl pro Kerze können Sie Größenfilter auf das Delta anwenden und es in bis zu vier separate Bereiche aufteilen — so beobachten Sie das Delta kleiner, mittlerer und großer Marktteilnehmer unabhängig voneinander innerhalb derselben Kerze.

Diese Trennung ist der eigentliche Zweck: Retail-Orderflow und institutioneller Orderflow widersprechen sich häufig, und Deep Delta macht diesen Widerspruch sichtbar.

## Was es ist

Delta ist aggressives Kaufvolumen minus aggressives Verkaufsvolumen. Das klassische Delta wirft alle Trade-Größen zusammen; der Multi-Range-Modus von Deep Delta filtert Trades nach Größe in bis zu vier Bereiche (jeder mit eigenem Minimum und Maximum) und stellt das Delta jedes Bereichs als eigene Serie dar. Schwellenwert-Linien und vertikale Marker kennzeichnen die Momente, in denen Delta-Extreme die von Ihnen definierten Levels erreichen.

## Wann Sie es einsetzen

- Sie möchten sehen, ob große Marktteilnehmer die aktuelle Bewegung mittragen — oder gegen sie handeln.
- Sie möchten das Rauschen kleiner Lots herausfiltern und nur Größen oberhalb eines Schwellenwerts lesen.
- Sie suchen nach Absorption: starke Delta-Schübe in eine Richtung, denen der Preis nicht folgt.
- Sie nutzen bereits Delta Bars und möchten dieselbe Auswertung mit zusätzlichem Größenkontext ([[delta-bar]] behandelt die klassische Version).

## Schnellstart

1. Öffnen Sie einen Chart und fügen Sie **Deep Delta** über den Button **Indicators** des Charts hinzu.
2. Stellen Sie **Delta Mode** auf **Multi-Range**.
3. Aktivieren Sie für den Anfang zwei Bereiche: einen mit niedrigem Minimum für kleinen Orderflow und einen mit hohem **Min**-Filter (und **Max** = 0, was das Maximum deaktiviert) ausschließlich für großen Orderflow.
4. Stellen Sie **Input Data** auf **Aggregate Trades**, damit gestückelte Ausführungen vor dem Filtern wieder zusammengeführt werden — andernfalls landet eine große Order, die als viele kleine Ausführungen gezählt wird, im falschen Bereich.
5. Übernehmen Sie die Einstellungen und geben Sie jedem Bereich im Abschnitt **Subgraph** eine eigene Farbe.

Die Live-Demo unten zeigt die zugrunde liegende Auswertung — das Delta pro Bar mit der Linie des kumulierten Deltas. Fahren Sie mit der Maus über einen Bar, um seine Geschichte zu sehen.

[WIDGET: delta-lab]

## So lesen Sie es

- **Bereiche stimmen überein** (alle positiv oder alle negativ): Die Beteiligung ist über alle Größen hinweg gleichgerichtet — der Druck ist breit abgestützt.
- **Bereiche divergieren**: der interessante Fall. Beispielsweise deutet ein positives Delta großer Größen (ein Bereich mit Min = 50) bei gleichzeitig negativem Delta kleiner Größen darauf hin, dass große Marktteilnehmer in den Retail-Verkauf hinein kaufen.
- **Marker werden ausgelöst, während der Preis dem Delta-Schub nicht folgt**: Die Aggression wird von passiven Orders absorbiert — eine klassische Warnung, dass die Bewegung ins Stocken geraten oder drehen könnte. Siehe [[understanding-icebergs-absorption]].
- **Schwellenwert-Linien**: Ihre eigenen Signifikanz-Levels — ein Delta jenseits der Linie bedeutet, dass die Aggression des Bars nach Ihrer Definition ungewöhnlich ist.

Die zugrunde liegende Bid/Ask/Aggressor-Mechanik erklärt [[orderflow-101]].

## Einstellungsreferenz

Gruppiert wie im Indikator-Dialog.

### Parameters

| Einstellung | Funktion |
|---|---|
| **Delta Mode** | **Classic** (Standard-Delta-Bars, keine Filter) oder **Multi-Range** (aktiviert die gefilterten Delta-Bereiche) |
| **Input Data** | Berechnungsbasis: **Volume** (gesamtes gehandeltes Volumen pro Preislevel — Zonen hoher Intensität), **Aggregate Trades** (am selben Preislevel zusammengeführte Trades — reduziert Rauschen durch Ausführungsfragmentierung), **Trades** (Anzahl der Transaktionen pro Level — Trade-Frequenz), **Order** (Orderdaten wie Kauf-/Verkaufsorder-Mengen — Orderdruck). Siehe [[different-types-of-input]] |
| **Range 1–4** | Jeder Bereich hat einen **Min**-Filter, einen **Max**-Filter und einen Aktivierungsschalter. Max = 0 deaktiviert den Maximalfilter |

### Threshold

| Einstellung | Funktion |
|---|---|
| **Level-settings** | Bis zu zwei anpassbare horizontale Linien auf definierten positiven/negativen Delta-Levels |
| **Marker** | Vertikale Marker, wenn sowohl das minimale als auch das maximale Delta einen festgelegten Schwellenwert erreichen — hebt gegenläufige Delta-Schübe innerhalb eines einzelnen Bars und Absorptionssituationen hervor |

### Subgraph

| Einstellung | Funktion |
|---|---|
| **Range colors** | Eine Farbe pro aktiviertem Bereich |
| **Maximum Positive/Negative Delta shadows** | Schattenfarben, die die Delta-Extreme jedes Bars markieren |
| **Line Thickness** | Passt das Erscheinungsbild von Delta-Bereichskörper und Schatten an |

[SCREENSHOT: Geöffneter Deep-Delta-Einstellungsdialog im Abschnitt Parameters mit Delta Mode auf Multi-Range und den vier Bereichszeilen mit Min/Max-Filtern | dc-en-deep-delta-01.png]

## Tipps und häufige Fehler

- **Im Multi-Range-Modus wird nichts angezeigt?** Die Bereiche müssen einzeln aktiviert werden, und die Min/Max-Filter dürfen nicht alles ausschließen — denken Sie daran, dass Max = 0 das Maximum deaktiviert, und prüfen Sie, ob Ihr Min über den tatsächlich gehandelten Delta-Größen liegt. Kontrollieren Sie außerdem die Wahl unter Input Data.
- **Sie möchten nur das Delta der großen Marktteilnehmer?** Ein aktivierter Bereich mit hohem Min-Filter, und **Input Data** = **Aggregate Trades**, damit gestückelte Ausführungen zuerst wieder zu ihrer ursprünglichen Größe zusammengeführt werden.
- **Die Bereiche sehen identisch aus?** Ihre Min/Max-Grenzen überlappen sich vermutlich stark — machen Sie die Größenbänder eindeutig unterscheidbar (zum Beispiel 1–9, 10–49, 50+).
- **Überall Marker?** Der Schwellenwert ist zu niedrig für das typische Delta des Instruments. Erhöhen Sie ihn, bis die Marker wirklich ungewöhnliche Bars kennzeichnen.
- Delta misst Aggression, nicht das Ergebnis — lesen Sie es immer im Verhältnis zum Preis. Ein stark positives Delta ohne Aufwärtsfortschritt ist eine bärische Beobachtung, keine bullische.

## Verwandte Artikel

- [[delta-bar]]
- [[orderflow-101]]
- [[deep-print]]
- [[understanding-icebergs-absorption]]
- [[different-types-of-input]]
- [[indicator-layout]]
