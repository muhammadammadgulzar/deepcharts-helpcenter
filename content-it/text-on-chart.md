---
title: "Testo sul grafico"
slug: "text-on-chart"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "beginner"
time: "3 min read"
description: "Mostra un messaggio di testo personalizzato direttamente sul tuo grafico per note, promemoria e richiami al piano di trading."
keywords: ["testo sul grafico", "nota sul grafico", "aggiungere testo al grafico", "etichetta grafico", "note sul grafico", "promemoria grafico"]
source_hash: "7658bfcfa2b08577"
ai_translated: true
source_hash: "7658bfcfa2b08577"
---
Text on Chart mostra un messaggio di testo personalizzato direttamente sul tuo grafico. I trader lo usano per note, promemoria, idee di trading e osservazioni di mercato che vogliono avere sott'occhio durante l'analisi — un richiamo al piano di trading, un avviso di notizie o l'etichetta identificativa di un layout di workspace.

## Che cos'è

È un indicatore di annotazione leggero: digiti un messaggio una volta nelle sue impostazioni e DeepCharts rende quel testo sul grafico. A differenza delle annotazioni a mano libera, il testo fa parte dell'indicatore, quindi persiste con la configurazione del grafico e viaggia con i layout salvati (vedi [[templates-workspaces]]).

## Quando usarlo

- Tieni visibile sul grafico il tuo piano di trading o le tue regole di rischio mentre operi ("nessun ingresso prima delle 9:45", "massimo 2 tentativi").
- Contrassegna un grafico con lo scenario o il bias preparato durante l'analisi pre-market.
- Etichetta i grafici in un workspace multi-grafico per identificarli tutti a colpo d'occhio.
- Lasciati promemoria su eventi imminenti rilevanti per lo strumento.

## Avvio rapido

1. Apri il menu degli indicatori sul tuo grafico e aggiungi **Text on Chart**.
2. Apri le impostazioni dell'indicatore.
3. Digita il tuo messaggio nel campo **Text**.
4. Imposta un **Font Size** abbastanza grande da leggere a colpo d'occhio e scegli un **Text Color** che contrasti con lo sfondo del grafico.
5. Facoltativamente imposta un **Back Color** per collocare il testo su un blocco di sfondo pieno per una migliore leggibilità.
6. Applica le impostazioni.

[SCREENSHOT: Un grafico con l'indicatore Text on Chart che mostra una breve nota di piano di trading a caratteri grandi con un blocco di sfondo contrastante, chiaramente leggibile sopra le candele | dc-it-text-on-chart-01.png]

## Riferimento delle impostazioni

[SCREENSHOT: Finestra delle impostazioni di Text on Chart che mostra i campi Font Size, Text Color, Back Color e Text, con un messaggio di esempio inserito nel campo Text | dc-it-text-on-chart-02.png]

| Impostazione | Cosa fa |
|---|---|
| **Font Size** | Regola la dimensione del testo sul grafico. Dimensioni maggiori aumentano visibilità e risalto; dimensioni più piccole creano annotazioni discrete che occupano meno spazio. |
| **Text Color** | Il colore del testo visualizzato. Scegli un colore con contrasto sufficiente rispetto allo sfondo del grafico. |
| **Back Color** | Il colore di sfondo dietro il testo. Uno sfondo pieno migliora significativamente la leggibilità creando contrasto tra il testo e gli elementi del grafico sottostanti. |
| **Text** | Il campo di inserimento principale — il messaggio o l'informazione personalizzata da mostrare sul grafico. |

## Suggerimenti ed errori comuni

- **Il contrasto è tutto.** Testo chiaro su un tema chiaro (o scuro su scuro) scompare — imposta **Back Color** invece di cercare un colore di testo che funzioni sopra le candele.
- Mantieni i messaggi brevi. L'indicatore è pensato per richiami colti a colpo d'occhio, non per paragrafi; un testo lungo compete con il prezzo per l'attenzione.
- Per frecce, riquadri e note ancorate al prezzo, usa invece gli [[drawing-tools|strumenti di disegno]] — Text on Chart è un messaggio fisso, non un'annotazione a livello di prezzo.
- Aggiungi l'indicatore a un template salvato così le note ricorrenti (come le regole di sessione) compaiono su ogni grafico che apri da esso — vedi [[templates-workspaces]].

## Articoli correlati

- [[drawing-tools]]
- [[annotations-overlay]]
- [[templates-workspaces]]
- [[different-types-of-input]]
- [[indicator-layout]]