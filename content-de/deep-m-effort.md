---
title: "Deep-M Effort (NQ)"
slug: "deep-m-effort"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Proprietärer, vorab optimierter Indikator für Nasdaq-Futures (NQ) auf 40-Range-Charts, der den Weg des geringsten Widerstands im Orderbuch farblich hervorhebt."
keywords: ["deep m effort", "deep-m effort", "effort nq", "40 range chart", "weg des geringsten widerstands", "nq indikator", "deep m effort zeigt nichts an"]
---

Deep-M Effort (NQ) ist ein proprietärer Indikator, den das DeepCharts-Team speziell für Nasdaq-Futures (NQ) entwickelt hat. Er liest das Orderbuch und hebt Zonen hervor, die den Weg des geringsten Widerstands markieren: violett, wo der leichtere Weg nach unten führt (bärischer Druck), grün, wo er nach oben führt (bullischer Druck) — plus ein integrierter dynamischer gleitender Durchschnitt für die direktionale Konfluenz.

Er wird vorab optimiert und vorkonfiguriert ausgeliefert — Sie stellen nicht die Kernlogik ein, sondern nur Darstellung und Alarme.

## Was es ist

Deep-M Effort übersetzt den Druck im Orderbuch in farbige Zonen direkt auf dem Chart. Statt Sie rohe Markttiefe oder rohes Delta interpretieren zu lassen, beantwortet er die Frage "In welche Richtung verläuft gerade der Weg des geringsten Widerstands?" Der integrierte gleitende Durchschnitt passt sich dynamisch an und bestätigt die direktionale Tendenz, wenn Preis und Zonen übereinstimmen.

> **Warnung:** Zwei zwingende Voraussetzungen. Erstens funktioniert der Indikator ausschließlich auf einem **40 Range**-Chart — stellen Sie den Chart auf Range-Bars mit Parameter 40, **bevor** Sie ihn anwenden. Zweitens ist er ausschließlich für **NQ** optimiert. Auf jedem anderen Charttyp oder Symbol arbeitet er nicht wie vorgesehen. Die Kernlogik-Einstellungen sollten nicht verändert werden — nur visuelle Anpassungen werden unterstützt.

[SCREENSHOT: NQ-40-Range-Chart mit angewendetem Deep-M Effort — grüne Zonen mit bullischem Druck und violette Zonen mit bärischem Druck rund um den Preis sichtbar, mit der Linie des integrierten gleitenden Durchschnitts durch den Chart | dc-en-deep-m-effort-01.png]

## Wann Sie es einsetzen

- Sie traden NQ und möchten den Orderbuch-Druck auf einen Blick lesen, ohne selbst rohe Markttiefe zu interpretieren.
- Sie möchten ein vorab optimiertes Werkzeug ohne einstellbare Parameter — anwenden und ablesen.
- Sie nutzen Konfluenz zwischen einem direktionalen Filter (dem integrierten gleitenden Durchschnitt) und Druckzonen für Einstiege.
- Sie traden Range-Charts und möchten eine Orderflow-Ebene, die nativ für diesen Bar-Typ gebaut wurde.

## Schnellstart

1. Stellen Sie Ihren Chart zuerst auf **40 Range**-Bars — der Indikator funktioniert nur auf diesem Charttyp (siehe [[chart-display-options]] zum Wechseln des Bar-Typs).
2. Laden Sie das Symbol **NQ**.
3. Öffnen Sie das Menü **Indicators**, suchen Sie **Deep-M Effort (NQ)** und fügen Sie ihn dem Workspace hinzu.
4. Lassen Sie die Kernlogik unverändert. Passen Sie bei Bedarf Farben, Deckkraft und den Stil des gleitenden Durchschnitts an und richten Sie Alarme ein.

[SCREENSHOT: Einstellungsdialog von Deep-M Effort (NQ) mit den visuellen Anpassungsoptionen — Bid Color, Ask Color, Opacity, Line Width sowie der Abschnitt Moving Average mit den Reglern Auto Color und Line Style | dc-en-deep-m-effort-02.png]

## So lesen Sie es

- **Grüne Zonen** — der Weg des geringsten Widerstands führt nach oben: bullischer Druck im Orderbuch. Aufwärtsbewegungen treffen auf weniger Widerstand, solange der Preis diese Zonen hält.
- **Violette Zonen** — der Weg des geringsten Widerstands führt nach unten: bärischer Druck.
- **Der gleitende Durchschnitt** — ein dynamischer direktionaler Filter. Die stärksten Signale liefert die Konfluenz: Preis über dem gleitenden Durchschnitt bei dominierenden grünen Zonen ist ein einheitlich bullisches Bild; Preis darunter innerhalb violetter Zonen ist einheitlich bärisch. Zonen gegen die Seite des gleitenden Durchschnitts sind Gegendruck und erfordern mehr Vorsicht.
- **Zonenwechsel** — wenn die dominierende Zonenfarbe kippt, hat sich der leichtere Weg des Orderbuchs geändert; managen Sie Trades in der vorherigen Richtung enger.

## Einstellungsreferenz

Nur visuelle Anpassungen, Beschriftungen und Alarme sind vom Nutzer einstellbar.

### Visuelle Einstellungen

| Einstellung | Funktion |
|---|---|
| **Bid Color** | Erscheinungsbild der bärischen (violetten) Druckzonen. |
| **Ask Color** | Erscheinungsbild der bullischen (grünen) Druckzonen. |
| **Opacity** | Transparenz der Zonen. |
| **Line Width** | Randstärke der Zonen. |

### Gleitender Durchschnitt

| Einstellung | Funktion |
|---|---|
| **Color / Color 2** | Primäre und sekundäre Farbe des gleitenden Durchschnitts. |
| **Auto Color** | **None** oder **Slope** — automatische Färbung anhand der Steigung des gleitenden Durchschnitts. |
| **Line Style** | **Solid** oder **Dashed**. |
| **Width** | Linienstärke des gleitenden Durchschnitts. |
| **Name** | Eigene Benennung der Linie. |

### Beschriftungen und Alarme

| Einstellung | Funktion |
|---|---|
| **Labels** | Namens- und Wertebeschriftungen ein- oder ausblenden. |
| **Alerts** | Eigene Alarmtöne, Nachrichten und Popup-Benachrichtigungen für Indikator-Ereignisse. |

## Tipps und häufige Fehler

- **"Er zeigt nichts an"** liegt fast immer an einer der beiden Voraussetzungen: Der Chart ist kein 40-Range-Chart, oder das Symbol ist nicht NQ. Korrigieren Sie zuerst den Charttyp.
- **Verändern Sie die Kernlogik nicht.** Der Indikator kommt vorab optimiert; nur die oben aufgeführten visuellen, Beschriftungs- und Alarmeinstellungen sind für Änderungen vorgesehen.
- **Nutzen Sie Auto Color = Slope** beim gleitenden Durchschnitt, wenn die Trendlage auf einen Blick sichtbar sein soll, ohne die Richtung der Linie zu prüfen.
- **Konfluenz statt Einzelsignale.** Zonen allein sind Kontext, keine Einstiege — das Werkzeug ist am stärksten, wenn Zonenfarbe, gleitender Durchschnitt und Ihre eigene Orderflow-Auswertung (zum Beispiel [[deep-stats]]) übereinstimmen.

## Verwandte Artikel

- [[orderflow-101]]
- [[chart-display-options]]
- [[moving-average]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]
