---
title: "Annotations Overlay"
slug: "annotations-overlay"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Importa le annotazioni disegnate da un indicatore su un altro grafico — per esempio i livelli Bar POC da un grafico a 30 minuti — sul grafico corrente."
keywords: ["annotations overlay", "overlay annotazioni", "importare indicatore da un altro grafico", "chart id", "indicator id", "indicatore specchio", "finestra finder"]
source_hash: "2d38bf14a2ce8ff5"
ai_translated: true
source_hash: "2d38bf14a2ce8ff5"
---
L'indicatore Annotations Overlay (elencato come **Overlay Annotations** nel menu degli indicatori) importa le annotazioni prodotte da un indicatore su un *altro* grafico nel grafico corrente. L'uso classico: esegui [[bar-poc|Bar POC]] su un grafico a 30 minuti e visualizza quei livelli POC a 30 minuti sul tuo grafico di esecuzione a 5 minuti.

## Che cos'è

Molti indicatori di DeepCharts disegnano annotazioni — livelli, zone, marcatori — calcolate sul timeframe del proprio grafico. Annotations Overlay rispecchia quei disegni su un grafico diverso. Lo punti verso un grafico di origine (tramite il suo **Chart ID**) e verso uno specifico indicatore su quel grafico (tramite il suo **Indicator ID**), e le annotazioni compaiono sul tuo grafico di destinazione, calcolate esattamente come le calcola l'origine.

Questo ti dà veri livelli multi-timeframe: l'indicatore di origine continua a girare sulla propria risoluzione mentre tu ne osservi l'output dove fai davvero trading.

## Quando usarlo

- Vuoi livelli di indicatori di timeframe superiore (per esempio Bar POC o un indicatore di swing) mostrati su un grafico di esecuzione di timeframe inferiore.
- Mantieni un grafico di "analisi" con indicatori configurati con cura e vuoi rispecchiarne le annotazioni su altri grafici senza riconfigurare tutto.
- Vuoi confrontare l'output di un indicatore su più timeframe fianco a fianco su un unico grafico.

## Avvio rapido

1. Prepara prima l'origine: apri (o individua) il grafico che esegue l'indicatore di cui vuoi importare le annotazioni — per esempio Bar POC su un grafico a 30 minuti.
2. Sul tuo grafico di destinazione, apri il menu degli indicatori nell'angolo in alto a sinistra e aggiungi **Overlay Annotations**.
3. Trova il **Chart ID** dell'origine: fai clic con il tasto destro del mouse e seleziona **Finder Window**, poi attiva la funzione **Mirror**. Passa il mouse sul grafico di origine — l'ID del grafico compare nella prima riga della finestra del finder.

[SCREENSHOT: Finder Window con la funzione Mirror attivata, posizionata sopra il grafico di origine a 30 minuti, la prima riga con il valore dell'ID del grafico evidenziato | dc-it-annotations-overlay-01.png]

4. Inserisci quel valore nel campo **Chart ID** delle impostazioni di Annotations Overlay.
5. Trova l'**Indicator ID**: apri la lista degli indicatori sul grafico di origine e individua il piccolo numero tra parentesi accanto all'indicatore che vuoi importare.

[SCREENSHOT: La lista degli indicatori del grafico di origine con il piccolo numero ID tra parentesi accanto alla voce Bar POC cerchiato/evidenziato | dc-it-annotations-overlay-02.png]

6. Inserisci quel numero nel campo **Indicator ID** delle impostazioni di Annotations Overlay.
7. Seleziona **Apply and Save** nell'angolo in basso a destra. Le annotazioni dell'indicatore di origine ora vengono renderizzate sul tuo grafico di destinazione.

[SCREENSHOT: Un grafico a 5 minuti che mostra i livelli Bar POC importati, originariamente calcolati su un grafico a 30 minuti tramite Annotations Overlay, con la finestra delle impostazioni di Annotations Overlay con i campi Chart ID e Indicator ID compilati | dc-it-annotations-overlay-03.png]

## Come leggerlo

Le annotazioni importate hanno esattamente l'aspetto e il comportamento dei disegni dell'indicatore di origine — stessi livelli, stessi aggiornamenti. Interpretale usando la documentazione dell'indicatore di origine (per esempio [[bar-poc]] per i livelli POC importati). L'unica differenza è il contesto: le annotazioni sono calcolate sul timeframe del grafico di origine, quindi un livello da un'origine a 30 minuti rappresenta la struttura a 30 minuti anche se lo vedi su un grafico a 5 minuti.

## Riferimento impostazioni

L'indicatore ha due parametri chiave da configurare:

| Impostazione | Che cosa fa |
|---|---|
| **Chart ID** | Identifica il grafico di origine contenente le annotazioni da importare. Si trova tramite la **Finder Window** con **Mirror** attivo — il valore nella prima riga mentre sei posizionato sul grafico di origine. |
| **Indicator ID** | Identifica quale indicatore importare dal grafico di origine. È il piccolo numero tra parentesi accanto a quell'indicatore nella lista degli indicatori del grafico di origine. |

Conferma le modifiche con **Apply and Save** nell'angolo in basso a destra della finestra delle impostazioni.

## Suggerimenti ed errori comuni

- **Il grafico di origine deve esistere e restare in esecuzione** — l'overlay rispecchia un indicatore vivo su un altro grafico. Se il grafico di origine viene chiuso, non c'è nulla da importare.
- **ID sbagliato, output sbagliato.** Se compaiono annotazioni inattese, molto probabilmente hai inserito l'ID di un altro indicatore del grafico di origine — ricontrolla il numero tra parentesi nella lista degli indicatori del grafico di origine.
- Configura completamente l'indicatore di origine *prima* di collegare l'overlay: le scelte di stile e di parametri si fanno sull'origine, e l'overlay le riflette.
- Funziona al meglio con indicatori che disegnano annotazioni (livelli, zone, marcatori) come Bar POC o strumenti basati sugli swing; l'esempio nella documentazione originale importa un Bar POC da un grafico a 30 minuti in un grafico a 5 minuti.
- Se ti serve solo un'etichetta di testo semplice invece dell'output rispecchiato di un indicatore, usa [[text-on-chart|Text on Chart]].

## Articoli correlati

- [[bar-poc]]
- [[swing-point]]
- [[text-on-chart]]
- [[link-windows]]
- [[different-types-of-input]]
- [[indicator-layout]]