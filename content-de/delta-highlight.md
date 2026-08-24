---
title: "Delta % Highlight"
slug: "delta-highlight"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Markiert Candles, deren Delta-Prozentsatz Ihren Schwellenwert erreicht, sodass extreme einseitige Aggression sofort im Chart auffällt."
keywords: ["delta % highlight", "delta prozent highlight", "delta-prozentsatz", "candles hervorheben delta", "delta-marker", "unausgeglichene candles", "extremes delta"]
---

Delta % Highlight markiert die Candles in Ihrem Chart, deren Delta-Prozentsatz — Kauf- gegenüber Verkaufsdruck im Verhältnis zum Volumen der Candle — einen von Ihnen definierten Schwellenwert erreicht. Statt das Delta jeder einzelnen Bar manuell zu prüfen, lassen Sie den Chart die Candles mit signifikanter einseitiger Aggression kennzeichnen.

Es ist ein Screening-Werkzeug: Es berechnet nichts Neues, sondern macht die extremen Orderflow-Candles unübersehbar.

## Was es ist

Der Indikator hebt Candles hervor, bei denen der Delta-Prozentsatz Ihre Kriterien erfüllt. Eine Candle, deren Volumen fast vollständig aus aggressiven Käufen bestand, wird in der **Ask Color** markiert; eine von aggressiven Verkäufen dominierte Candle wird in der **Bid Color** markiert. Alles dazwischen bleibt unmarkiert, sodass Ihr Chart übersichtlich bleibt.

[SCREENSHOT: Chartfenster mit aktiviertem Delta % Highlight — eine Reihe gewöhnlicher Candles, wobei zwei oder drei Candles sichtbar in der Ask-Farbe und eine in der Bid-Farbe eingefärbt sind, was zeigt, wie Candles mit extremem Delta hervorstechen | dc-en-delta-highlight-01.png]

## Wann Sie es verwenden

- Sie möchten Candles mit extremem Ungleichgewicht automatisch markieren lassen, während Sie sich auf die Struktur konzentrieren.
- Sie werten Sessions nach Handelsschluss aus und möchten die einseitigen Candles schnell finden.
- Sie traden Initiativbewegungen: Eine hervorgehobene Candle, die ein wichtiges Level durchbricht, zeigt echte aggressive Beteiligung.
- Sie suchen nach Erschöpfung: Eine Candle mit extremem Delta, auf die keine Folgebewegung folgt, ist ein klassisches Zeichen dafür, dass der Aggressor gefangen ist.

## Schnellstart

1. Öffnen Sie die **Indicator List** in Ihrem Chart.
2. Suchen Sie **Delta % Highlight** und klicken Sie auf **+**, um ihn hinzuzufügen.
3. Klicken Sie auf das **Settings**-Symbol neben dem Indikator.
4. Setzen Sie **Min Value** auf einen sinnvollen Schwellenwert — das ist der minimale Delta-Prozentsatz, den eine Candle erreichen muss, um markiert zu werden. Beginnen Sie hoch genug, sodass nur wenige Candles pro Session qualifizieren, und justieren Sie dann nach unten.
5. Lassen Sie **Max Value** auf **0**, um den Maximalfilter zu deaktivieren, sodass jede Candle über dem Minimum markiert wird.
6. Wählen Sie eine **Bid Color** und **Ask Color**, die sich von Ihren normalen Candles abheben, und stellen Sie die **Opacity** so ein, dass die Hervorhebung sichtbar ist, ohne die darunterliegende Candle zu verdecken.

[SCREENSHOT: Einstellungsdialog von Delta % Highlight mit den Feldern Min Value und Max Value, den Farbwählern Bid Color und Ask Color und dem Opacity-Regler | dc-en-delta-highlight-02.png]

## So lesen Sie es

- **Candle in der Ask-Farbe (positives Delta %):** Aggressive Käufer dominierten das Volumen der Candle. Innerhalb eines Trends ist das eine Bestätigung; in eine Widerstandszone nach einem ausgedehnten Lauf kann es der Kaufklimax sein.
- **Candle in der Bid-Farbe (negatives Delta %):** Aggressive Verkäufer dominierten — das Spiegelbild.
- **Was danach passiert, zählt am meisten.** Eine hervorgehobene Candle, auf die eine Fortsetzung folgt, bestätigt die Aggression. Eine hervorgehobene Candle, die sofort abgelehnt wird — der Preis schließt wieder durch sie hindurch — deutet darauf hin, dass die aggressive Seite absorbiert wurde, eines der stärkeren Umkehrsignale im Orderflow (siehe [[understanding-icebergs-absorption]]).
- **Die Häufigkeit ist ein Hinweis auf das Marktregime.** Sessions mit vielen Hervorhebungen sind einseitig und trendstark; Sessions ohne Hervorhebungen sind ausgeglichen und rotierend.

## Einstellungsreferenz

| Einstellung | Funktion |
|---|---|
| **Min Value** | Minimaler Delta-Prozentsatz-Schwellenwert — nur Candles, die dieses Level erreichen oder überschreiten, werden markiert. |
| **Max Value** | Maximalfilter für den Delta-Prozentsatz. Auf **0** setzen, um die Maximalfilterung zu deaktivieren, sodass alle Candles über dem Minimum markiert werden. |
| **Bid Color** | Markerfarbe für negative Delta-Prozentsätze — Dominanz des Verkaufsdrucks. |
| **Ask Color** | Markerfarbe für positive Delta-Prozentsätze — Dominanz des Kaufdrucks. |
| **Opacity** | Transparenz des Markers: Niedrigere Werte machen die Hervorhebung transparenter, höhere Werte machen sie deckender und sichtbarer. |

## Tipps und häufige Fehler

- **Kalibrieren Sie pro Instrument.** Ein Delta-Prozentsatz, der bei einem Kontrakt selten ist, kann bei einem dünneren Kontrakt Routine sein. Justieren Sie **Min Value**, bis Hervorhebungen für den Markt, den Sie traden, wirklich außergewöhnlich sind.
- **Der Prozentsatz verbirgt die Größe.** Eine winzige Candle mit drei Kontrakten kann einen extremen Delta-Prozentsatz aufweisen. Prüfen Sie das tatsächliche Volumen — kombinieren Sie die Hervorhebung mit [[volume]] oder [[deep-stats]], bevor Sie sie als signifikant behandeln.
- **Traden Sie nicht die Farbe, sondern die Reaktion.** Die Hervorhebung identifiziert die Kandidaten-Candle; die Einstiegslogik ergibt sich daraus, was der Preis an und nach ihr tut.
- **Nutzen Sie beide Grenzen für ein Bandpass-Screening.** Ein **Max Value** oberhalb des Minimums markiert nur die Ungleichgewichte im mittleren Bereich und überspringt die Blow-off-Extreme, was manche Mean-Reversion-Stile bevorzugen.

## Verwandte Artikel

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-bar]]
- [[deep-stats]]
- [[ratio-highlight]]
