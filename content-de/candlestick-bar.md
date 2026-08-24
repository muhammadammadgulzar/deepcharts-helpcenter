---
title: "Candlestick Bar"
slug: "candlestick-bar"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Legen Sie japanische Candlesticks, die aus einem anderen Bar-Typ gebildet werden — Minuten, Volumen-Bars oder Range — über Ihren Hauptchart."
keywords: ["candlestick bar", "candle overlay", "japanische kerzen", "kerzen overlay", "volumen-bars overlay", "range-bars overlay", "candlestick indikator"]
---

Manchmal möchten Sie zwei Ansichten desselben Marktes in einem Chart: Ihren Arbeitschart in einem Bar-Typ und klassische japanische Kerzen aus einer anderen Aggregation darübergelegt. Genau das leistet der Indikator Candlestick Bar — er legt japanische Kerzen über den Hauptchart, wobei die Kerzenkonstruktion (Minuten, Volumen-Bars oder Range) unabhängig vom darunterliegenden Chart gewählt wird.

Damit ist es zum Beispiel möglich, einen schnellen, Orderflow-orientierten Chart als Basis zu behalten und gleichzeitig die Struktur größerer zeit- oder rangebasierter Kerzen im selben Panel zu sehen.

## Was es ist

Der Candlestick Bar ist ein Chart-Overlay, das aus dem gewählten Parametertyp — **Minutes**, **Vol Bars** oder **Range** — eigene Kerzen bildet und zeichnet und sie über die bestehende Kursdarstellung legt. Körperfarbe, Füllung, Rand, Deckkraft und Breite sind konfigurierbar, sodass das Overlay so auffällig oder so dezent sein kann, wie Sie es für die Price-Action-Analyse benötigen.

Da das Overlay unabhängig vom Bar-Typ des Basischarts ist, gehört es zur selben Werkzeugfamilie wie [[overlay-timeframe-candlestick]] und [[overlay-chart]] — wählen Sie dasjenige, das zum gewünschten Vergleich passt.

## Wann Sie es verwenden

- Um zeitbasierte Kerzenstruktur auf einem Chart zu sehen, dessen Basis-Bars nicht zeitbasiert sind (Tick-, Volumen- oder Range-getrieben).
- Um volumen- oder rangebasierte Kerzen über einen Zeitchart zu legen und zu sehen, wie aktivitätsbasierte Bars dieselbe Bewegung rahmen.
- Um klassische Candlestick-Muster in einer zweiten Aggregation zu lesen, ohne ein weiteres Chartfenster zu öffnen und zu verknüpfen.
- Um einen übergeordneten strukturellen Blick sichtbar zu halten, während Sie aus einem schnelleren Basischart heraus handeln.

## Schnellstart

1. Öffnen Sie einen Chart und klicken Sie auf das Balkendiagramm-Symbol oben links, um das Panel **Indicators** zu öffnen.
2. Klicken Sie auf **Indicators**, um die vollständige **Indicator List** zu öffnen.
3. Suchen Sie nach "Candlestick Bar" und klicken Sie auf **+**, um den Indikator hinzuzufügen.
4. Klicken Sie auf das Zahnrad-Symbol neben dem Indikator, um seine Einstellungen zu öffnen. Wählen Sie einen **Parameter Type** und setzen Sie **Parameter 1** — zum Beispiel Minutes mit einem Wert größer als der Timeframe Ihres Basischarts ergibt ein klassisches Overlay eines höheren Timeframes.
5. Reduzieren Sie die **Opacity** des Kerzenkörpers oder deaktivieren Sie **Show Filled Bar**, damit der darunterliegende Chart unter dem Overlay lesbar bleibt.

[SCREENSHOT: Ein schneller Intraday-Chart mit aktivem Candlestick-Bar-Overlay — größere halbtransparente Kerzen über den Basis-Bars, beide klar unterscheidbar | dc-en-candlestick-bar-01.png]

## So lesen Sie es

Neu im Lesen japanischer Kerzen oder Lust auf eine kurze Auffrischung? Fahren Sie mit der Maus über die interaktive Kerze unten — jede Zone (Körper, Dochte, Open, High, Low, Close) erklärt sich selbst, und Sie können zwischen Bullen- und Bärenkerze umschalten — und übertragen Sie dieselbe Lesart dann auf jede Overlay-Kerze.

[WIDGET: candle-anatomy]

- **Jede Overlay-Kerze fasst mehrere Basis-Bars zusammen** (oder ein Volumen-/Range-Quantum an Handel) als eine Open-High-Low-Close-Einheit — lesen Sie sie genau wie jede japanische Kerze: Körperrichtung für Kontrolle, Dochte für Ablehnung.
- **Widerspruch zwischen Overlay und Basis ist Information.** Wenn die schnellen Basis-Bars hin- und herspringen, die Overlay-Kerzen aber eindirektional bleiben, liegt das Rauschen unterhalb der Auflösung Ihres Overlays; stimmen beide überein, verlaufen Bewegungen tendenziell sauberer.
- **Volumenbasierte Kerzen normalisieren Aktivität.** Mit **Vol Bars** schließt jede Kerze nach einer Zielmenge an Volumen — ruhige Phasen werden komprimiert, geschäftige Phasen gedehnt; Kerze-zu-Kerze-Vergleiche werden aktivitätsnormalisiert.
- **Range-Kerzen normalisieren Bewegung.** Mit **Range** umfasst jede Kerze eine feste Preisdistanz, was die Zeit vollständig aus der Musterlesart entfernt.

## Einstellungsreferenz

### General Parameters

| Einstellung | Was sie bewirkt |
|---|---|
| **Parameter Type** | Wie die Overlay-Kerzen gebildet werden: **Minutes**, **Vol Bars** oder **Range**. |
| **Parameter 1** | Der zentrale Konstruktionswert — gilt für Minuten- und Range-Kerzen und setzt das Ziel für Vol Bars. |
| **Parameter 2** | Steuert den Umkehrwert für Vol Bars. |

### Colors

| Einstellung | Was sie bewirkt |
|---|---|
| **Positive Bar** | Farbe bullischer Overlay-Kerzen. |
| **Negative Bar** | Farbe bärischer Overlay-Kerzen. |
| **Show Filled Bar** | Schaltet die Hintergrundfüllung des Kerzenkörpers ein oder aus. |

### Plot Settings

| Einstellung | Was sie bewirkt |
|---|---|
| **Candle Width** | Dicke der Overlay-Kerzen. |
| **Border Width** | Dicke der Kerzenränder. |
| **Opacity** | Transparenz der Hintergrundfüllung des Kerzenkörpers. |
| **Show Vertical Line on Close** | Zeichnet bei Aktivierung eine vertikale Linie auf schließenden Kerzen. |

[SCREENSHOT: Der Einstellungsdialog des Candlestick Bar mit Parameter Type auf Minutes samt den Feldern Parameter 1 und Parameter 2 sowie den Gruppen Colors und Plot Settings | dc-en-candlestick-bar-02.png]

## Tipps und häufige Fehler

- **Halten Sie das Overlay visuell untergeordnet.** Vollständig deckende, breite Overlay-Kerzen begraben den Basischart; senken Sie die **Opacity**, verschmälern Sie die **Candle Width** oder schalten Sie **Show Filled Bar** aus und lesen Sie das Overlay allein an den Rändern ab.
- **Wählen Sie eine Aggregation, die sich sinnvoll unterscheidet.** 5-Minuten-Kerzen über einem 3-Minuten-Chart erzeugen Unordnung ohne Erkenntnisgewinn; das Overlay lohnt sich, wenn es viele Basis-Bars oder eine wirklich andere Bar-Konstruktionslogik zusammenfasst.
- **Behalten Sie im Kopf, aus welchen Kerzen Ihre Muster stammen.** Ein Candlestick-Muster im Overlay ist erst vollständig, wenn die Overlay-Kerze schließt — mitten in der Kerze zu handeln, weil der Basischart bereits mehrere Bars geschlossen hat, ist ein häufiger Fehler.
- **Prüfen Sie die Alternativen für Symbol- oder Timeframe-übergreifende Ansichten.** Wenn Sie ein anderes Instrument überlagern möchten, nutzen Sie [[overlay-symbol]]; für ein dediziertes Kerzen-Overlay eines höheren Timeframes vergleichen Sie [[overlay-timeframe-candlestick]], bevor Sie sich entscheiden.

## Verwandte Artikel

- [[overlay-timeframe-candlestick]]
- [[overlay-chart]]
- [[overlay-symbol]]
- [[chart-display-options]]
- [[different-types-of-input]]
- [[indicator-layout]]
