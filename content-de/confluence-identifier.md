---
title: "Confluence Identifier"
slug: "confluence-identifier"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "advanced"
time: "7 min read"
description: "Finden Sie automatisch Support- und Resistance-Zonen mit hoher Wahrscheinlichkeit, an denen Volumenprofil-Levels, Preis-Swings und Retracements zusammentreffen."
keywords: ["confluence identifier", "Konfluenz", "Support-Resistance-Zonen", "Volumenprofil-Levels", "POC Value Area", "Konfluenzzonen", "confluance"]
---

Die meisten starken Support- und Resistance-Levels sind deshalb stark, weil mehrere unabhängige Gründe auf denselben Preis zeigen: ein Profil-POC, ein früherer Swing, ein Retracement-Level. Der Confluence Identifier automatisiert diese Überlegung — er identifiziert Support- und Resistance-Zonen mit hoher Wahrscheinlichkeit, indem er mehrere Marktdatenquellen kombiniert und die Preise hervorhebt, an denen sie zusammentreffen.

Er ist einer der am umfangreichsten konfigurierbaren Indikatoren in DeepCharts, daher geht diese Referenz jede Einstellungsgruppe in der Reihenfolge durch, in der der Dialog sie anzeigt.

## Was es ist

Der Confluence Identifier erkennt Konfluenzbereiche anhand von drei Evidenz-Familien:

- **Volumenprofil-Levels** — POC, Value-Area-Ränder, Peaks und Valleys aus bis zu drei separaten Volume-By-Price-Profilen.
- **Price-Action-Swings** — Swing-Hochs und -Tiefs, ermittelt von einer Zig-Zag-Engine.
- **Trend-Retracement-Levels** — 38,2%-, 50%-, 61,8%- und 75%-Retracements des Haupt-Swings.

Wenn genügend dieser Elemente innerhalb einer definierten Preisspanne (Ihrer Tick-Sensitivität) liegen, hebt der Indikator diese Spanne als potenzielle Support- oder Resistance-Zone hervor. Zonen, die von mehr Konfluenzen gestützt werden, werden visuell als stärker hervorgehoben.

Wenn Ihnen die Profil-Levels am wenigsten vertraut sind, probieren Sie das interaktive Volumenprofil unten aus — fahren Sie mit der Maus über die Zeilen und ziehen Sie den Value-Area-Prozentsatz, um zu sehen, woher POC, VAH und VAL kommen:

[WIDGET: volume-profile-lab]

## Wann Sie ihn verwenden

- Um eine objektive Level-Karte aufzubauen: Statt Levels von Hand auszuwählen, definieren Sie die Evidenz, und der Indikator bewertet jeden Preis danach, wie viel Evidenz sich dort stapelt.
- Um Zonen nach Stärke zu ordnen — eine Zone mit 5 Konfluenzen ist ein anderes Trading-Angebot als eine Zone mit 2 Konfluenzen, und die Farbgebung spiegelt das wider.
- Um Profilanalyse und Price Action in einer Ansicht zu kombinieren, ohne ein halbes Dutzend separater Studien laufen zu lassen.
- Um Trades zu rahmen: Konfluenzzonen sind natürliche Stellen für Einstiege, Stops und Ziele, wenn sie mit Ihrer Richtungseinschätzung übereinstimmen.

## Schnellstart

1. Öffnen Sie einen Chart und klicken Sie auf das Balkendiagramm-Symbol in der oberen linken Ecke, um das Panel **Indicators** zu öffnen.
2. Klicken Sie auf **Indicators**, um die vollständige **Indicator List** zu öffnen.
3. Suchen Sie nach "Confluence Identifier" und klicken Sie auf **+**, um ihn hinzuzufügen.
4. Klicken Sie auf das Zahnrad-Symbol neben dem Indikator, um seine Einstellungen zu öffnen. Beginnen Sie bescheiden: Aktivieren Sie ein Volume-By-Price-Profil und Zig-Zag-Swings, und lassen Sie Retracements deaktiviert, bis Sie ein Gefühl für die Ausgabe haben.
5. Wenn Sie mehr Quellen aktivieren, erhöhen Sie **Minimum Number of Confluences** und reduzieren Sie **Tick Sensitivity**, damit nur die bedeutendsten Zonen übrig bleiben. Eine ausgearbeitete Konfiguration aus der Dokumentation verwendet drei Volumenprofile, Preis-Swings und Retracements des letzten Swings mit mindestens 5 Konfluenzen und einer Sensitivität von 3 Ticks.

[SCREENSHOT: Ein Futures-Chart mit aktivem Confluence Identifier — mehrere schattierte Support-/Resistance-Zonen unterschiedlicher Farbintensität, wobei die stärkste Zone dort liegt, wo ein Profil-POC, ein Swing-Tief und ein Retracement-Level zusammentreffen | dc-en-confluence-identifier-01.png]

## Wie Sie ihn lesen

- **Jede hervorgehobene Zone ist eine Preisspanne, in der mehrere Elemente** innerhalb Ihrer Tick-Sensitivität zusammentrafen. Zonen oberhalb des Preises fungieren als Resistance-Kandidaten, Zonen unterhalb als Support-Kandidaten.
- **Farbe kodiert Stärke.** Die Einstellungen unter Support & Resistance Colors koppeln die Zonenfarbe an die Konfluenzanzahl, sodass stärkere Zonen (mehr Konfluenzen) hervorstechen — behandeln Sie diese als primäre Entscheidungslevels.
- **Weniger, breitere Zonen vs. mehr, engere Zonen ist Ihr Kompromiss.** Kleinere Werte bei **Tick Sensitivity** erzeugen präzisere Zonen; größere Werte erzeugen breitere. Ein höherer Wert bei **Minimum Number of Confluences** liefert weniger, aber stärkere Zonen.
- **Zonen sind Orte, keine Richtungen.** Der Indikator sagt Ihnen, wo eine Reaktion wahrscheinlich ist, nicht in welche Richtung der Preis ausbrechen wird; kombinieren Sie ihn mit Ihrer Trend- und Orderflow-Einschätzung.

## Einstellungsreferenz

### Data Settings

| Einstellung | Funktion |
|---|---|
| **Input Data** | Was die Profile messen: **Volume** (gehandeltes Volumen auf jedem Preislevel) oder **Orders** (Anzahl ausgeführter Orders). Siehe [[different-types-of-input]]. |
| **Filter Min** | Minimaler Schwellenwert, der unbedeutende Werte herausfiltert. |
| **Filter Max** | Maximaler Schwellenwert; 0 = kein Maximalfilter. |

### Confluence Settings

| Einstellung | Funktion |
|---|---|
| **Tick Sensitivity** | Die Preisspanne in Ticks, innerhalb derer Elemente als übereinstimmend zählen. Kleinere Werte = präzisere Zonen; größere Werte = breitere Zonen. |
| **Minimum Number of Confluences** | Wie viele Elemente zusammentreffen müssen, um eine Zone zu erzeugen. Höhere Werte liefern weniger, stärkere Zonen; niedrigere Werte erzeugen häufigere Zonen. |
| **Starting Mode** | Wo die Berechnung beginnt: **Zig Zag** (verwendet Preis-Swings auf Basis der Zig-Zag-Logik) oder **Date** (beginnt ab einem bestimmten Datum). |
| **Start Date** | Das Startdatum, das im Modus **Date** verwendet wird. |
| **Absolute % of Reversal for Zig Zag Trend** | Die minimale Preisumkehr, die zur Identifikation der Swing-Punkte verwendet wird, die den Berechnungsstart bestimmen. |
| **Number of Swings** | Wie viele Swings bei der Bestimmung des Berechnungsstartpunkts berücksichtigt werden. |

### Zig Zag Swing Settings

| Einstellung | Funktion |
|---|---|
| **% Absolute Variation for Zig Zag Inversion** | Der Preisumkehr-Prozentsatz, mit dem die Swings identifiziert werden, die in die Konfluenzberechnung einfließen. |
| **Enable Zig Zag Swing** | Nimmt Swing-Hochs und -Tiefs als Konfluenzelemente auf. |
| **Include Swings in the First Half** | Aktiviert: ältere Swing-Punkte werden einbezogen. Deaktiviert: nur jüngste Swings werden berücksichtigt. |

> **Hinweis:** In diesem Indikator gibt es zwei Zig Zags, und sie erfüllen unterschiedliche Aufgaben. Das erste (in Confluence Settings) dient nur zur Bestimmung des Berechnungsstartdatums und kann einen größeren Prozentsatz verwenden. Das zweite (hier) identifiziert die für Konfluenzen verwendeten Swings und sollte einen **kleineren Prozentsatz** verwenden, damit auch kleinere Swings einbezogen werden.

### Volume By Price Profiles

Bis zu drei separate Volume-By-Price-Profile können aktiviert werden, jedes mit eigenem Block:

| Einstellung | Funktion |
|---|---|
| **Enable** | Schaltet dieses Profil ein oder aus. |
| **Profile Settings** | Profiltyp — Daily, Weekly, Monthly oder Composite — plus Tick-Gruppierung und Volumen-Schwellenwerte. |
| **Enablements** | Welche Profilelemente an der Konfluenz teilnehmen: POC, Value Area, Peaks, Valleys, Delta Imbalances. |
| **Visual Appearance** | Farben, Dicke und Linienstil für die Levels dieses Profils. |
| **Include by Number** | Wechselt zwischen einer festen Anzahl aktueller Profile und allen Profilen ab dem Startdatum. |
| **Number of Profiles** | Wie viele aktuelle Profile verwendet werden, wenn die feste Option aktiviert ist. |

### Trend Retracement Enables

| Einstellung | Funktion |
|---|---|
| **Enable Retracements** | Fügt Retracement-Levels (38,2%, 50%, 61,8%, 75%) des Haupt-Swings als Konfluenzelemente hinzu. |
| **Exclude Previous Retracements** | Aktiviert: Nur die Retracements des jüngsten Swings werden verwendet. Deaktiviert: Frühere Retracements werden ebenfalls einbezogen. |

### Developing Settings

| Einstellung | Funktion |
|---|---|
| **Zig Zag line display** | Zeigt die Zig-Zag-Linien im Chart, mit anpassbaren Farben für bullische und bärische Swings, sodass Sie die Marktstruktur sehen, mit der der Indikator arbeitet. |

### Support & Resistance Colors

| Einstellung | Funktion |
|---|---|
| **Zone colors by confluence count** | Legt die Zonenfarben danach fest, wie viele Konfluenzen die Zone stützen, sodass stärkere Zonen visuell hervorgehoben werden. |

[SCREENSHOT: Der Einstellungsdialog des Confluence Identifier mit der Gruppe Confluence Settings (Tick Sensitivity, Minimum Number of Confluences, Starting Mode) und den drei darunter eingeklappten Volume-By-Price-Profilblöcken | dc-en-confluence-identifier-02.png]

## Tipps und häufige Fehler

- **Skalieren Sie die Schwellenwerte mit der Evidenz.** Je mehr Elemente aktiviert sind (mehrere VBPs, Swings, Retracements), desto mehr sollten Sie **Minimum Number of Confluences** erhöhen und **Tick Sensitivity** reduzieren — andernfalls qualifiziert sich fast jeder Preis als Zone und das Werkzeug verliert seine Trennschärfe.
- **Stellen Sie die beiden Zig-Zag-Prozentsätze richtig ein.** Eine häufige Fehlkonfiguration ist, denselben Prozentsatz für beide zu verwenden: Das Startdatum-Zig-Zag sollte gröber sein (größerer %), das Swing-Zig-Zag feiner (kleinerer %), damit kleinere Swings zu Konfluenzen beitragen können.
- **Entrümpeln Sie mit separaten Profil-Indikatoren.** Für einen aufgeräumteren Chart können Sie die VBP-Linien hier deaktivieren und die Volumenprofile über separate Indikatoren wie [[deep-profile]] anzeigen — die Konfluenzzonen werden weiterhin aus den aktivierten Elementen berechnet.
- **Validieren Sie Zonen gegen das Konzept.** Wenn Sie unsicher sind, warum ein POC oder ein Value-Area-Rand als Support wirken sollte, lesen Sie zuerst [[understanding-volume-profile]] — der Indikator ist nur so nützlich wie Ihre Interpretation der Evidenz, die er stapelt.

## Verwandte Artikel

- [[understanding-volume-profile]]
- [[deep-profile]]
- [[zig-zag]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]
