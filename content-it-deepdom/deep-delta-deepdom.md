---
title: "Deep Delta"
slug: "deep-delta-deepdom"
category: "Deep Indicators"
subcategory: ""
type: "reference"
difficulty: "advanced"
time: "2 min read"
description: "Deep Delta è una versione avanzata del Delta Bar che ti consente di applicare filtri al delta ed evidenziare fino a quattro intervalli configurabili, rendendo più facile concentrarsi sugli squilibri di acquisto o vendita significativi."
keywords: ["deep delta", "deepdom deep delta", "deepdom", "deep indicators"]
source_hash: "c861012bbd343d5e"
ai_translated: true
source_hash: "c861012bbd343d5e"
---
Deep Delta è una versione avanzata del Delta Bar che ti consente di applicare filtri al delta ed evidenziare fino a quattro intervalli configurabili, rendendo più facile concentrarsi sugli squilibri di acquisto o vendita significativi.

[SCREENSHOT: Deep Delta — panoramica (DeepDOM) | dd-it-deep-delta-deepdom-01.png]

## Impostazioni d'uso

Fai clic con il tasto destro del mouse sul grafico e seleziona Indicators.

Cerca l'indicatore desiderato e aggiungilo al tuo workspace facendo clic sul pulsante "+".

Apri il pannello delle impostazioni dell'indicatore, personalizza i parametri secondo le tue preferenze e conferma le modifiche facendo clic su Save.

[SCREENSHOT: Deep Delta — Impostazioni d'uso (DeepDOM) | dd-it-deep-delta-deepdom-02.png]

## Impostazioni generali

[SCREENSHOT: Deep Delta — Impostazioni generali (DeepDOM) | dd-it-deep-delta-deepdom-03.png]

#### Input Data

[SCREENSHOT: Deep Delta — Input Data (DeepDOM) | dd-it-deep-delta-deepdom-04.png]

Seleziona il database utilizzato per calcolare il delta:

Volume – volume totale scambiato a ciascun prezzo.

Aggregate Trades – volume aggregato delle operazioni raggruppate allo stesso livello di prezzo.

Trades – numero di operazioni eseguite a ciascun prezzo.

Order – quantità degli ordini a ciascun prezzo, utile per valutare la pressione degli ordini.

#### Delta Mode

[SCREENSHOT: Deep Delta — Delta Mode (DeepDOM) | dd-it-deep-delta-deepdom-05.png]

Scegli come viene calcolato il delta:

Classic – si comporta come il Delta Bar standard.

Multi Range – abilita tutte le funzionalità del Delta Filter Bar con più intervalli filtrati.

#### Bars grouped

Imposta quante barre vengono raggruppate insieme. Un valore più basso produce informazioni più dettagliate; un valore più alto rende l'output più uniforme.

## Idea di fondo

Le Delta Bar standard mostrano tutti gli squilibri con lo stesso peso visivo. Il Delta Filter Bar aggiunge una logica in più:

Definisci intervalli di entità del delta (ad es. 0–100, 100–300, 300–600, 600+).

Ogni intervallo può usare colori diversi per i delta Bid e Ask.

Gli intervalli più piccoli forniscono contesto, mentre quelli più grandi evidenziano una vera aggressività di livello istituzionale.

## Configurazione dei Range 1–4

[SCREENSHOT: Deep Delta — Configurazione dei Range 1–4 (DeepDOM) | dd-it-deep-delta-deepdom-06.png]

Ogni intervallo si configura in modo indipendente e include:

Un interruttore Enable.

Campi filtro Min e Max (valori del delta).

Scelte di colore per i delta Bid e Ask in quell'intervallo.

Impostare *Max = 0* per un intervallo rimuove il limite superiore, così tutti i delta sopra il minimo rientrano in quella fascia.

#### Esempio – Mappa del delta a quattro livelli

Range 1: 50–150 contratti (colori chiari), Range 2: 150–350 (medi), Range 3: 350–700 (forti), Range 4: 700+ (molto forti, colori saturi). Sul grafico vedi immediatamente dove si è verificata un'aggressività estrema, perché solo quelle barre usano la palette del Range 4.