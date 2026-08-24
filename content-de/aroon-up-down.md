---
title: "Aroon Up/Down"
slug: "aroon-up-down"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Lesen Sie Trend-Momentum mit dem Aroon Up/Down-Indikator: zwei Linien von 0–100, die messen, wie kürzlich der Preis ein neues Hoch oder Tief markiert hat."
keywords: ["aroon", "aroon up down", "aroon indikator", "trend momentum", "neues hoch neues tief indikator", "arun indikator", "aroon crossover"]
---

Der Aroon Up/Down-Indikator bewertet das Trend-Momentum, indem er misst, wie kürzlich der Preis innerhalb eines gewählten Zeitraums ein neues Hoch oder ein neues Tief markiert hat. Statt zu fragen "Wie weit hat sich der Preis bewegt?", fragt Aroon "Wie frisch ist das jüngste Extrem?" — eine subtil andere und oft frühere Einschätzung der Trendgesundheit.

Der Indikator zeichnet zwei Linien in einem eigenen Panel, jede von 0 bis 100 reichend, sodass Sie die bullische und die bärische Seite des Marktes stets getrennt gemessen sehen.

## Was es ist

Aroon besteht aus zwei Komponenten:

- **Aroon Up** — misst die Stärke des bullischen Momentums: Er ist hoch, wenn ein neues Periodenhoch kürzlich markiert wurde, und fällt ab, je älter dieses Hoch wird.
- **Aroon Down** — misst die Stärke des bärischen Momentums auf dieselbe Weise, basierend auf dem jüngsten Periodentief.

Ein Wert nahe 100 bedeutet, dass das entsprechende Extrem erst vor sehr kurzer Zeit gesetzt wurde; ein Wert nahe 0 bedeutet, dass es innerhalb des Rückblickfensters lange zurückliegt. Da die beiden Linien unabhängig sind, unterscheidet Aroon "starker Aufwärtstrend" (Up hoch, Down niedrig) von "volatilem Hin und Her" (beide erhöht) — auf eine Weise, die einlinige Werkzeuge nicht leisten können.

## Wann Sie ihn einsetzen

- Um entstehende Trends früh zu erkennen: Eine Linie, die nahe 100 festhängt, bedeutet, dass der Preis in dieser Richtung fortlaufend frische Extreme druckt.
- Um Trendwechsel mit **Aroon Up/Aroon Down-Crossovers** zu timen.
- Um Konsolidierung zu bestätigen: Wenn beide Linien niedrig dahintreiben, werden keine neuen Hochs oder Tiefs markiert — eine Range.
- Als Ergänzung zu [[adx|ADX]]: ADX misst Trendstärke ohne Richtung; Aroon zeigt, welche Seite die frischen Extreme produziert.

## Schnellstart

1. Öffnen Sie einen Chart und klicken Sie auf das Balkendiagramm-Symbol in der oberen linken Ecke, um das Panel **Indicators** zu öffnen.
2. Klicken Sie auf **Indicators**, um die vollständige **Indicator List** zu öffnen.
3. Suchen Sie nach "Aroon Up/Down" und klicken Sie auf **+**, um ihn hinzuzufügen — er wird in einem eigenen Panel unter dem Preischart dargestellt.
4. Klicken Sie auf das Zahnrad-Symbol neben dem Indikator, um seine Einstellungen zu öffnen.

Die Standardeinstellung **Length** von 14 mit den Standard-Levels (75 / 50 / 25) ist ein solider Ausgangspunkt. Geben Sie Aroon Up und Aroon Down stark kontrastierende Farben — die Crossovers sind das Signal, daher müssen sie auf einen Blick sichtbar sein.

[SCREENSHOT: Ein Preischart mit dem Aroon Up/Down-Indikator in einem unteren Panel — Aroon Up läuft während eines Aufwärtstrends nahe 100, während Aroon Down nahe 0 liegt, mit sichtbaren Level-Linien bei 75/50/25 | dc-en-aroon-up-down-01.png]

## So lesen Sie ihn

- **Aroon Up nahe 100, Aroon Down nahe 0**: starker Aufwärtstrend — neue Hochs treffen laufend ein, während das letzte Tief altert. Für einen Abwärtstrend kehren Sie die Lesart um.
- **Crossovers**: Kreuzt Aroon Up über Aroon Down, deutet das darauf hin, dass bullisches Momentum die Kontrolle übernimmt; der umgekehrte Cross deutet auf bärische Kontrolle. Crosses nahe dem **Middle Level** (50), bei denen sich beide Linien entschlossen bewegen, sind sauberer als Crosses in der niedrigen Zone.
- **Über dem High Level (75)**: starkes Trend-Momentum auf dieser Seite.
- **Unter dem Lower Level (25)**: schwaches Momentum — diese Marktseite hat seit langer Zeit kein Extrem mehr gesetzt.
- **Beide Linien niedrig**: Konsolidierung. Keine Seite macht Fortschritte, daher sind Trendsignale unzuverlässig, bis eine Linie nach oben ausbricht.

## Referenz der Einstellungen

### Parameter

| Einstellung | Was sie bewirkt |
|---|---|
| **Length** | Anzahl der in der Berechnung verwendeten Bars. Standard: 14. Niedrigere Werte erzeugen schneller reagierende Signale; höhere Werte liefern eine glattere Trendanalyse. |

### Level-Einstellungen

| Einstellung | Was sie bewirkt |
|---|---|
| **Middle Level** | Die Gleichgewichtslinie zwischen bullischen und bärischen Kräften. Standard: 50. |
| **Lower Level** | Der Schwellenwert, der schwaches Trend-Momentum signalisiert. Standard: 25. |
| **High Level** | Der Schwellenwert, der starkes Trend-Momentum signalisiert. Standard: 75. |
| Level-Farben / **Level Width** | Die Farbe jeder Level-Linie und die Liniendicke sind anpassbar. |

### Subgraphs (Aroon Up und Aroon Down)

Beide Linien bieten identische Konfigurationsmöglichkeiten:

| Einstellung | Was sie bewirkt |
|---|---|
| **Color** | Linienfarbe des Subgraphen. |
| **Line Style** | Visuelles Muster. Standard: **Solid**. |
| **Line Width** | Liniendicke. |
| **Short Name** | Benutzerdefiniertes Label in der Chart-Legende. |
| **Name Label** / **Value Label** | Optionale Labels mit Name und aktuellem Wert der Linie, mit konfigurierbaren Hintergrundfarben. |
| **Include on Auto Center** | Ob diese Linie bei der automatischen Skalierung des Panels berücksichtigt wird. |

[SCREENSHOT: Der Einstellungsdialog von Aroon Up/Down mit Length 14, den Feldern Middle/Lower/High Level bei 50/25/75 und den beiden Subgraph-Abschnitten für Aroon Up und Aroon Down | dc-en-aroon-up-down-02.png]

## Tipps und häufige Fehler

- **Traden Sie nicht jeden Crossover.** In einer Range kreuzen sich die Linien ständig; verlangen Sie, dass eine Linie nach dem Cross Richtung High Level vorstößt, bevor Sie ihn als Trendsignal behandeln.
- **Aroon misst Aktualität, nicht Ausmaß.** Ein neues Hoch um einen Tick setzt Aroon Up genauso an die Spitze zurück wie ein großer Ausbruch. Prüfen Sie Preisstruktur oder Volumen, bevor Sie Stärke unterstellen.
- **Length definiert, was als "kürzlich" gilt.** Ein 14-Bar-Aroon auf einem 5-Minuten-Chart beschreibt ungefähr die Extreme der letzten Stunde; dieselbe Einstellung auf einem Tageschart beschreibt drei Wochen. Stellen Sie ihn auf den Horizont ein, den Sie tatsächlich handeln.
- Wenn Sie dieselbe Information lieber zu einer einzigen Linie um die Null verdichtet sehen möchten, verwenden Sie stattdessen den [[aroon-oscillator|Aroon Oscillator]].

## Verwandte Artikel

- [[aroon-oscillator]]
- [[adx]]
- [[donchian-channel]]
- [[different-types-of-input]]
- [[indicator-layout]]
