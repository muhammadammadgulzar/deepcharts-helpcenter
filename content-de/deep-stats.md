---
title: "Deep Stats"
slug: "deep-stats"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Orderflow-Statistiktabelle pro Bar, die Volumen, Delta, COT-Werte, Ratios und Effort-Metriken unter Ihrem Chart anzeigt."
keywords: ["deep stats", "deepstats", "orderflow-statistiken", "COT H", "COT L", "kumuliertes delta", "delta prozent", "bar-statistiktabelle", "statistiktabelle unter chart"]
---

Deep Stats zeigt eine mehrzeilige Texttabelle unter Ihrem Chart mit einer Spalte pro Bar. Jede Zeile ist eine Orderflow-Metrik — Gesamtvolumen, Delta, Trade-Anzahl, COT-Werte, Ratios, Effort — sodass Sie die Zahlen hinter jeder Kerze ablesen können, statt sie aus ihrer Form zu erraten.

Während Footprint-Tools Ihnen zeigen, wo das Volumen innerhalb des Bars gehandelt wurde, verdichtet Deep Stats jeden Bar zu einem Satz vergleichbarer Zahlen. Es ist das numerische Röntgenbild der Kerze.

## Was es ist

Deep Stats ist ein Orderflow-Statistik-Indikator, der ein Textraster unter dem Preischart rendert. Jeder abgeschlossene Bar erhält eine Wertespalte, und die Zellenfarben skalieren mit der statistischen Intensität, sodass Ausreißer auf einen Blick hervorstechen. Er beantwortet Fragen wie "wie viel Delta hatte dieser Bar wirklich?", "wurde dieser Vorstoß absorbiert?" und "trocknet das Volumen an diesen Hochs aus?"

[SCREENSHOT: Chartfenster mit angewendetem Deep Stats — Preiskerzen oben und die mehrzeilige Deep-Stats-Texttabelle in einem Panel darunter, mit mehreren sichtbaren Metrikzeilen (Tot Vol, Delta Vol, Delta %, COT Bar) und einer stark eingefärbten Ausreißerzelle | dc-en-deep-stats-01.png]

## Wann Sie es einsetzen

- Sie möchten pro Bar eine Bestätigung dessen, was die Kerzenform nahelegt (echtes Delta, Trade-Anzahl, Intensität), bevor Sie danach handeln.
- Sie suchen nach Absorption: hoher Effort oder konträre COT-Werte, während sich der Preis kaum bewegt.
- Sie möchten Erschöpfungshinweise an Hochs oder Tiefs über die Spalten High Ratio und Low Ratio.
- Sie verfolgen das kumulierte Delta (CVD) numerisch neben dem Preis statt als separaten Plot.

## Schnellstart

1. Öffnen Sie die **Indicator List** auf Ihrem Chart.
2. Suchen Sie **Deep Stats** und klicken Sie auf **+**, um es hinzuzufügen.
3. Klicken Sie auf das **Settings**-Symbol neben Deep Stats.
4. Wählen Sie unter **Data Settings** Ihre **Input Data** (**Volume**, **Order** oder **Aggregate Trades** — siehe [[different-types-of-input]] für die Bedeutung der einzelnen Optionen). **Volume** ist der natürliche Ausgangspunkt.
5. Setzen Sie im Abschnitt **Subgraphs** den **Series style** jeder Metrik, die Sie nicht benötigen, auf **Ignore**. Ein kompaktes Starter-Set: **Tot Vol**, **Delta Vol**, **Delta %**, **Delta Dly**, **COT Bar**.
6. Klicken Sie auf Anwenden/Speichern und prüfen Sie, dass die Tabelle unter dem Chart gerendert wird.

[SCREENSHOT: Deep-Stats-Einstellungsdialog geöffnet im Abschnitt Data Settings, mit ausgeklapptem Input-Data-Dropdown mit den Optionen Volume, Order und Aggregate Trades sowie den Feldern Min Filter und Max Filter | dc-en-deep-stats-02.png]

## So lesen Sie es

Jede Spalte ist ein Bar; jede Zeile eine Metrik. Die Farbintensität der Zellen basiert auf Standardabweichungen — eine stark eingefärbte Zelle bedeutet also "statistisch ungewöhnlich für dieses Instrument im Moment".

| Metrik | Was sie Ihnen sagt |
|---|---|
| **Tot Vol / Bid Vol / Ask Vol / Delta Vol** | Die Volumen-Grundlagen: insgesamt gehandelt, am Bid verkauft, am Ask gekauft und die Nettodifferenz. |
| **Max Delta Vol / Min Delta Vol** | Die innerhalb des Bars erreichten Delta-Extreme — ein Bar kann nach einem heftigen internen Umschwung delta-neutral schließen. |
| **Tot NT / Delta NT** | Anzahl der Trades und die Differenz der Trade-Anzahl zwischen Ask und Bid. |
| **Delta HL** | Ticks zwischen Hoch und Tief des Bars. |
| **Delta %** | Delta Vol als Prozentsatz von Tot Vol: (Delta Vol / Tot Vol) × 100. |
| **Delta Dly** | Laufendes kumuliertes Volumen-Delta (CVD). |
| **Vol(s)** | Volumen pro Sekunde — Handelsintensität. |
| **COT H** | Kumuliertes Delta vom letzten Tief bis zum Schlusskurs. Ein negativer COT H auf einem bärischen Bar ist ein bullisches Absorptionssignal. |
| **COT L** | Kumuliertes Delta vom letzten Hoch bis zum Schlusskurs. Ein positiver COT L auf einem bullischen Bar ist ein bärisches Absorptionssignal. |
| **COT Bar** | Zeigt automatisch COT H auf bullischen Bars und COT L auf bärischen Bars. |
| **Time(s)** | Bar-Dauer in Sekunden — setzt die Volumenzahlen in Kontext. |
| **Bar Ratio / High Ratio / Low Ratio** | Volumenverhältnisse zwischen vorletztem und letztem Tick. Eine niedrige High Ratio signalisiert Käufererschöpfung an den Hochs; eine niedrige Low Ratio Verkäufererschöpfung an den Tiefs. |
| **Total Effort / Delta Effort** | Volumen (bzw. Delta) im Verhältnis zur Bar-Spannweite. Hoher Effort bei geringer Preisbewegung deutet auf Absorption hin. |

Praktische Lesarten:

- **Absorption**: COT H negativ auf bärischen Bars (Käufer absorbieren den Verkaufsdruck), COT L positiv auf bullischen Bars (Verkäufer absorbieren den Kaufdruck) oder hoher Effort, während der Preis kaum vorankommt.
- **Erschöpfung**: eine niedrige High Ratio in einen Widerstand hinein oder eine niedrige Low Ratio in eine Unterstützung hinein deutet darauf, dass dem Aggressor die Orders ausgehen.
- **Intensitätswechsel**: springt Vol(s) nach oben, während Time(s) schrumpft, beschleunigt sich die Marktbeteiligung.

## Einstellungsreferenz

Gruppiert wie im Einstellungsdialog.

### Data Settings

| Einstellung | Was sie bewirkt |
|---|---|
| **Input Data** | Datenquelle für die Berechnungen: **Volume**, **Order** oder **Aggregate Trades**. Siehe [[different-types-of-input]]. |
| **Min Filter** | Mindestschwelle für die Trade-Größe; kleinere Trades werden aus den Statistiken ausgeschlossen. |
| **Max Filter** | Maximalschwelle für die Trade-Größe; **0** bedeutet kein Maximalfilter. |

### Plot Settings

| Einstellung | Was sie bewirkt |
|---|---|
| **Dev. std. for Coloring** | Steuert, wie stark die Zellenfarben mit der Standardabweichung skalieren, außerdem Textgröße/-farbe, Zahlenformatierung (**Auto Text Format** kürzt große Zahlen) und Zellenreihenfolge. |
| **Settings-Header** | Sichtbarkeit, Farben und Größe der Kopfzeile. |
| **Threshold** | Hebt Zellen hervor, wenn die gewählten Metriken die von Ihnen definierten Schwellenwerte überschreiten. |

### Subgraphs

| Einstellung | Was sie bewirkt |
|---|---|
| **Series style** (pro Metrik) | **Text** zeigt die Metrikzeile an; **Ignore** blendet sie aus. |
| **Colors** (pro Metrik) | Zellenfarbe für die Zeile der jeweiligen Metrik. |

## Tipps und häufige Fehler

- **Beginnen Sie minimal.** Alle Metriken zu aktivieren, begräbt die nützlichen. Setzen Sie alles, was Sie nicht aktiv lesen, auf **Ignore** und fügen Sie Zeilen bei Bedarf wieder hinzu.
- **Verwenden Sie Auto Text Format**, wenn lange Zahlen abgeschnitten werden — es kürzt Werte, damit die Spalten lesbar bleiben.
- **Lesen Sie COT H/COT L nicht isoliert.** Sie sind Absorptionshinweise, keine Einstiegssignale — bestätigen Sie sie gegen die Marktstruktur und das Tape (siehe [[adv-time-and-sales]]).
- **Passen Sie den Min Filter an das Instrument an.** Ein Filter, der auf einem Kontrakt institutionelle Größen isoliert, entfernt auf einem dünneren fast alles.
- **Threshold-Hervorhebung schlägt Anstarren.** Wenn Sie etwa nur außergewöhnliche Delta-%-Werte interessieren, setzen Sie einen Threshold, damit die Tabelle sie für Sie markiert.

## Verwandte Artikel

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[deep-print]]
- [[deep-trades]]
- [[on-candle-stats]]
