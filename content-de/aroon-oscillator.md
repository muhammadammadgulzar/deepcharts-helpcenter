---
title: "Aroon Oscillator"
slug: "aroon-oscillator"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Verdichten Sie Aroon Up und Aroon Down mit dem Aroon Oscillator zu einer einzigen Linie um die Nulllinie, um Trendstärke, Richtung und Erschöpfung abzulesen."
keywords: ["aroon oscillator", "aroon osc", "aroon differenz", "trend oszillator", "nulllinien oszillator", "arun oszillator"]
---

Der Aroon Oscillator misst Trendstärke und Trendrichtung, indem er die Differenz zwischen Aroon Up und Aroon Down berechnet. Wo [[aroon-up-down|Aroon Up/Down]] zwei Linien zeigt, verdichtet der Oszillator dieselbe Information zu einer einzigen Linie, die um eine Nulllinie schwankt: positiv, wenn die Bullen die frischen Extreme setzen, negativ, wenn es die Bären sind.

Wenn Sie Kreuzungen zweier Linien visuell als unruhig empfinden, ist dies die übersichtlichere Art, Aroon zu nutzen.

## Was es ist

Der Oszillator beantwortet die Frage "Welche Seite gewinnt, und mit welchem Vorsprung?" in einem einzigen Wert. Da Aroon Up und Aroon Down jeweils von 0 bis 100 reichen, bewegt sich ihre Differenz zwischen den Extremen beiderseits der Null: stark positive Werte bedeuten, dass jüngste neue Hochs dominieren, stark negative Werte bedeuten, dass jüngste neue Tiefs dominieren, und Werte nahe null bedeuten, dass keine Seite einen Vorteil hat.

Der Indikator hilft Tradern, entstehende Trends, Trendstärke, mögliche Umkehrungen und überkauft/überverkauft-artige Erschöpfungszonen zu identifizieren.

## Wann Sie ihn einsetzen

- Um Trendrichtung und -stärke aus einer einzigen Linie abzulesen, statt zwei Linien zu verfolgen.
- Um Trendwechsel zu erfassen: Der Nulllinien-Cross ist die Oszillator-Variante der Aroon-Up/Down-Kreuzung.
- Um Erschöpfung zu erkennen: Extreme Werte, die ins Stocken geraten und zurück Richtung null drehen, warnen davor, dass die dominierende Seite ihren Griff verliert.
- Um Signale preisbasierter Werkzeuge wie des [[donchian-channel|Donchian Channel]] zu bestätigen — ein Ausbruch, der von einem stark positiven Oszillator gestützt wird, hat das Momentum frischer Extreme hinter sich.

## Schnellstart

1. Öffnen Sie einen Chart und klicken Sie auf das Balkendiagramm-Symbol in der oberen linken Ecke, um das Panel **Indicators** zu öffnen.
2. Klicken Sie auf **Indicators**, um die vollständige **Indicator List** zu öffnen.
3. Suchen Sie nach "Aroon Oscillator" und klicken Sie auf **+**, um ihn hinzuzufügen — er wird in einem eigenen Panel unter dem Preischart dargestellt.
4. Klicken Sie auf das Zahnrad-Symbol neben dem Indikator, um seine Einstellungen zu öffnen.

Die Standardeinstellung **Length** von 14 entspricht dem üblichen Aroon-Setup. Der Standard-**Subgraph Style** ist **Bars** mit **Auto Color (+/-)**, sodass positive und negative Werte von Anfang an unterschiedlich eingefärbt sind — eine einfache Möglichkeit, das Regime auf einen Blick abzulesen.

[SCREENSHOT: Ein Preischart mit dem Aroon Oscillator in einem unteren Panel als Balken dargestellt, positive Balken in einer Farbe während des Aufwärtstrends und negative Balken in einer anderen nach der Umkehr, Nulllinie in der Mitte sichtbar | dc-en-aroon-oscillator-01.png]

## So lesen Sie ihn

- **Über null**: Aroon Up übersteigt Aroon Down — die jüngsten Extreme sind Hochs; bullisches Regime. **Unter null** ist das bärische Spiegelbild.
- **Abstand zur Null = Überzeugung.** Werte, die Richtung Extrem gedrückt werden, bedeuten, dass eine Seite zuletzt Extreme gesetzt hat, während das letzte Extrem der anderen Seite veraltet ist — ein starker Trend.
- **Nulllinien-Crosses** markieren mögliche Trendwechsel. Wie bei jedem Oszillator führen Crosses in ruhigen Seitwärtsphasen zu Fehlsignalen; Crosses, die von einer entschlossenen Preisbewegung begleitet werden, sind zuverlässiger.
- **Abklingende Extreme**: Wenn der Oszillator eine Extremzone erreicht und sich dann Richtung null zurückzieht, während der Preis ins Stocken gerät, altert der Trend — verringern Sie das Risiko oder suchen Sie nach Umkehrstrukturen.

## Referenz der Einstellungen

### Parameter

| Einstellung | Was sie bewirkt |
|---|---|
| **Length** | Anzahl der in der Aroon-Berechnung verwendeten Bars. Standard: 14. Niedrigere Werte erzeugen reaktionsschnellere Signale; höhere Werte liefern glattere Ergebnisse. |

### Level-Einstellungen

| Einstellung | Was sie bewirkt |
|---|---|
| **Middle Level** | Die Referenzlinie für den neutralen Trend. Standard: 0. |
| **Lower Level** | Level-Linie, die eine Extremzone markiert. Standard: 80. |
| **High Level** | Level-Linie, die die gegenüberliegende Extremzone markiert. Standard: -80. |
| **Middle/Lower/Higher Level Color** | Farbe der jeweiligen Level-Linie. |
| **Level Width** | Dicke der Level-Linien. |

Diese Levels helfen, starke Trendbedingungen und mögliche Erschöpfungszonen zu identifizieren.

[CONFIRM: the source article lists Lower Level default as 80 and High Level default as -80 — verify in the app whether these two defaults are intentionally assigned this way or swapped.]

### Subgraphs

| Einstellung | Was sie bewirkt |
|---|---|
| **Color** / **2° Color** | Primäre und sekundäre Farbe der Oszillator-Balken. |
| **Subgraph Style** | Darstellungsformat. Standard: **Bars**. |
| **Auto Color (+/-)** | Ändert die Farbe automatisch je nach positiven oder negativen Werten. |
| **Line Style** | Visuelles Muster bei Darstellung als Linie (Solid und weitere Stile). |
| **Line Width** | Linien-/Balkendicke. |
| **Short Name** | Benutzerdefiniertes Label in der Chart-Legende. |
| **Name Label** / **Value Label** | Optionale Namens- und Wertelabels, mit Farboptionen für **Name Background** und **Value Background**. |
| **Chart color for marker** | Verwendet die Chartfarbe für den Wertemarker. |
| **Include on Auto Center** | Ob die Serie bei der automatischen Skalierung des Panels berücksichtigt wird. |

[SCREENSHOT: Der Einstellungsdialog des Aroon Oscillator mit Length 14, der Gruppe Level settings mit den Feldern Middle/Lower/High Level und der Gruppe Subgraphs mit Subgraph Style auf Bars und aktiviertem Auto Color (+/-) | dc-en-aroon-oscillator-02.png]

## Tipps und häufige Fehler

- **Nulllinien-Crosses hinken der Zwei-Linien-Ansicht leicht hinterher** in unruhigen Phasen und wiederholen sich in Seitwärtsmärkten häufig. Verlangen Sie Anschlussbewegung — einen Vorstoß Richtung Extremzone —, bevor Sie einen Cross als Trendwechsel behandeln.
- **Ein extremer Wert ist Stärke, keine automatische Umkehr.** Anders als bei einem echten Überkauft/Überverkauft-Oszillator bedeutet ein am Extrem festgenagelter Aroon Oscillator oft einfach nur einen gesunden Trend, der Extrem um Extrem druckt. Achten Sie auf die Kontraktion zurück Richtung null, nicht auf das Extrem selbst.
- **Halten Sie Length konsistent** mit jedem [[aroon-up-down|Aroon Up/Down]]-Panel, das Sie parallel nutzen — sonst widersprechen sich die beiden und stiften Verwirrung statt Bestätigung.
- Der Stil **Bars** mit **Auto Color (+/-)** ist auf einen Blick leichter zu lesen als eine Linie; behalten Sie ihn bei, sofern Sie nicht mehrere Serien im selben Panel überlagern (siehe [[indicator-layout]]).

## Verwandte Artikel

- [[aroon-up-down]]
- [[adx]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]
