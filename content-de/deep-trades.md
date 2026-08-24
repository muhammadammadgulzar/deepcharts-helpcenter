---
title: "Deep Trades"
slug: "deep-trades"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Markiert große aggressive Orders im Chart und zeigt die passive Liquidität, die sie absorbiert hat — mit vier unterschiedlichen Markertypen."
keywords: ["deep trades", "große orders", "big orders im chart", "MBO", "iceberg", "diamant-marker", "deep trades keine marker", "deep trades historie fehlt"]
---

Deep Trades visualisiert große aggressive Market-Orders in Echtzeit — und zeigt Ihnen, anders als eine einfache Large-Trade-Bubble, auch, was auf der anderen Seite des Trades stand. Vier Markerformen verraten, ob die Order kleine ruhende Mengen aufgesammelt hat, auf eine bedeutende passive Wall traf oder frontal mit einem anderen großen Marktteilnehmer kollidierte.

Es ist der Nachfolger von [[big-trades|Big Trades]]: Big Trades markiert nur, wo große Trades ausgeführt wurden; Deep Trades enthüllt die passive Seite — ob ruhende Liquidität vorhanden war, wie sich der Trade zusammensetzte und wann zwei große Orders direkt aufeinandertrafen.

## Was es ist

Deep Trades ist ein Orderflow-Indikator, der formcodierte Marker im Chart zeichnet, wo immer eine große aggressive Order ausgeführt wird. Er beantwortet die Frage "was stand auf der anderen Seite dieses Trades?", indem er aggressive Orders mit der passiven Liquidität verbindet, die sie ausgeführt hat. Er benötigt Order-by-Order-Marktdaten (MBO), weshalb er nur mit bestimmten Datenfeeds funktioniert.

> **Warnung:** Die Feed-Kompatibilität ist eine harte Voraussetzung. Deep Trades funktioniert mit **Rithmic Level 1**, **Rithmic Level 2** und **dxFeed Level 2** (mit **DOM Type = MBO** für Symbole der CME-Gruppe). Er funktioniert **nicht** mit dxFeed Level 1 oder CQG, da diese Feeds keine MBO-Daten liefern. Setzen Sie auf einem MBO-fähigen Feed außerdem **Source Type = MBO** in den **Source Settings**. Ist Ihr Feed nicht kompatibel, verwenden Sie stattdessen [[big-trades]] mit Aggregate-Input.

[SCREENSHOT: Chart mit aktivem Deep Trades und mehreren Markertypen gleichzeitig — mindestens ein Quadrat, ein hohler Kreis, ein gefüllter Kreis und ein Diamant-Marker auf aktuellen Kerzen, mit unterscheidbaren ask- und bid-farbenen Markern | dc-en-deep-trades-01.png]

## Wann Sie es einsetzen

- Sie traden mit Orderflow und möchten sehen, wo Orders in institutioneller Größe ausgeführt werden, während sie geschehen.
- Sie möchten eine große Order, die dünne Liquidität aufgesammelt hat, von einer unterscheiden, die auf eine echte Wall traf.
- Sie suchen nach direkten Zusammenstößen zwischen großen aggressiven und großen passiven Orders (Diamant-Marker) — den bedeutendsten Ereignissen, die das Tool erkennt.
- Sie nutzen Icebergs und Absorption in Ihrem Playbook (siehe [[understanding-icebergs-absorption]]).

## Schnellstart

1. Prüfen Sie Ihren Feed: Rithmic L1/L2 oder dxFeed L2. Setzen Sie bei dxFeed L2 **DOM Type = MBO** für Symbole der CME-Gruppe; setzen Sie auf jedem MBO-fähigen Feed **Source Type = MBO** in den **Source Settings**.
2. Öffnen Sie die **Indicator List** auf Ihrem Chart, suchen Sie **Deep Trades** und klicken Sie auf **+**.
3. Klicken Sie auf das **Settings**-Symbol neben Deep Trades.
4. Stellen Sie unter **Data Settings** den **Filter Mode** ein. Startkonfiguration: **Automatic** mit **Intensity = Medium**, oder **Manual** mit einem **Filter** um 30 Kontrakte auf einem liquiden Index-Future — passen Sie dies anschließend an Ihr Instrument an.
5. Belassen Sie **Standard Dev.** auf dem Standardwert (empfohlen), damit die Markergrößen sinnvoll skalieren.
6. Übernehmen Sie die Einstellungen und beobachten Sie, wie Marker erscheinen, sobald große Trades ausgeführt werden.

[SCREENSHOT: Deep-Trades-Einstellungsdialog geöffnet auf Data Settings, mit Chart Area, Days to Load und Filter Mode auf Automatic sowie ausgeklapptem Intensity-Dropdown (Low/Medium/Strong) | dc-en-deep-trades-02.png]

> **Hinweis:** Bestandsnutzer müssen einmalig eine Datenbankmigration durchführen, bevor die Deep-Trades-Historie gespeichert werden kann: **Options → Database → Settings → Migrate/Compress**. Trennen Sie zuvor Ihre Datenfeeds und schließen Sie den Workspace; die Migration dauert etwa 10–15 Minuten.

## So lesen Sie es

| Marker | Bedeutung |
|---|---|
| **Quadrat** | Eine große Order traf auf bedeutende ruhende passive Liquidität. |
| **Hohler Kreis** | Ein großer Trade, zusammengesetzt aus vielen kleinen, kombinierten Mengen. |
| **Gefüllter Kreis** | Ein großer Trade, ausgeführt durch große Einzelmengen in einer oder wenigen Ausführungen. |
| **Diamant** | Eine große aggressive Order kollidierte direkt mit einer großen ruhenden passiven Order — der bedeutendste Marker. |

Marker werden nach Seite eingefärbt (**Ask Color** für Kaufaggression, **Bid Color** für Verkaufsaggression), mit separaten "Battle"-Farben für Diamant-Kollisionen. Die Markergröße skaliert mit der Trade-Größe.

Lesepriorität: zuerst Diamanten (zwei große Marktteilnehmer sind sich über den Preis uneinig), dann Quadrate (Aggression trifft auf eine Wall — potenzielle Absorption), dann Kreise (Kompositionsdetails auf der aggressiven Seite). Ein Cluster aus Quadraten oder Diamanten, das den Preis nicht bewegt, ist klassische Absorption; folgt auf dasselbe Cluster eine Fortsetzung, ist die Wall gebrochen.

Jeder Marker beginnt sein Leben als Prints auf dem Tape. Beobachten Sie das Live-Time-&-Sales unten und filtern Sie nach Ask oder Bid, um ein Gefühl für die aggressiven Ausführungen zu bekommen, die Deep Trades vermisst.

[WIDGET: tape-lab]

## Einstellungsreferenz

Gruppiert wie im Einstellungsdialog.

### Data Settings

| Einstellung | Was sie bewirkt |
|---|---|
| **Chart Area** | Wo Marker gerendert werden: horizontales oder vertikales Panel, plus Panel-Nummer. |
| **Days to Load** | Wie viele Tage gespeicherter Large-Trade-Historie angezeigt werden. |
| **Filter Mode** | **Manual**: Sie setzen **Filter** = Mindestanzahl Kontrakte pro Trade (zum Beispiel 30). **Automatic**: Die Plattform wählt die Schwellenwerte; Sie wählen die **Intensity** (**Low / Medium / Strong**). |

### Plot Settings

| Einstellung | Was sie bewirkt |
|---|---|
| **Standard Dev.** | Steuert die Skalierung der Markergröße. Der Standardwert wird empfohlen. |
| **Minimum / Maximum Opacity** | Deckkraftbereich über die Markergrößen hinweg. |
| **Ask Color / Ask Color Battle** | Farben für Marker auf der Kaufseite und für Diamant-Kollisionen auf der Kaufseite. |
| **Bid Color / Bid Color Battle** | Farben für Marker auf der Verkaufsseite und für Diamant-Kollisionen auf der Verkaufsseite. |

### Marker Settings

| Einstellung | Was sie bewirkt |
|---|---|
| **Minimum / Maximum Size** | Der Größenbereich, zwischen dem Marker skalieren. |

### Alert Settings

| Einstellung | Was sie bewirkt |
|---|---|
| **Enable Alert Sound** | Aktiviert Audio-Alarme. |
| **Bid Alert / Ask Alert** | Separate Töne für Erkennungen auf der Bid- und der Ask-Seite. |

## Tipps und häufige Fehler

- **Gar keine Marker?** Fast immer feed-bedingt: dxFeed L1 und CQG funktionieren nicht, DOM Type steht nicht auf MBO, oder **Source Type** ist in den Source Settings nicht auf MBO gesetzt. Prüfen Sie danach, ob der Manual Filter für das Instrument nicht zu hoch eingestellt ist.
- **Keine Historie für vergangene Tage?** Beabsichtigt. MBO-Daten können vom Anbieter nicht nachgeladen werden — historische Marker existieren nur für Zeiträume, in denen Ihre Plattform lief und verbunden war. Eine Woche, in der Ihr PC ausgeschaltet war, hat keine Deep-Trades-Historie.
- **Zu viele oder zu wenige Marker:** Passen Sie im Manual-Modus die Mindestkontrakte an; ändern Sie im Automatic-Modus die Intensity.
- **Lassen Sie die Plattform die Schwellenwerte kalibrieren.** Führen Sie **Options → Tools → Big Trades Analysis** aus — das Tool berechnet optimale Schwellenwerte pro Instrument (verwendet mit dem Automatic-Filtermodus) und speichert sie automatisch. Führen Sie es wöchentlich oder monatlich erneut aus, wenn sich die Liquiditätsbedingungen ändern.
- **Kombinieren Sie mit der Tabelle.** Ergänzen Sie die Marker mit [[deep-stats]], um Absorption numerisch zu bestätigen (COT- und Effort-Werte), statt einem einzelnen Marker zu vertrauen.

## Verwandte Artikel

- [[orderflow-101]]
- [[understanding-icebergs-absorption]]
- [[big-trades]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]
