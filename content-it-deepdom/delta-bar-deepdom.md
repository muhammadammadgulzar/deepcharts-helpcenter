---
title: "Delta Bar"
slug: "delta-bar-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "3 min read"
description: "L'indicatore Delta Bar di DeepDom mostra il delta (differenza tra il volume degli acquisti a mercato e delle vendite a mercato) come barre tracciate sotto il grafico, aiutandoti a vedere dove i compratori o i venditori aggressivi hanno dominato ciascun periodo."
keywords: ["delta bar", "deepdom delta bar", "deepdom", "indicatori"]
source_hash: "f0a2fae2d9512fd5"
ai_translated: true
source_hash: "f0a2fae2d9512fd5"
---
L'indicatore Delta Bar di DeepDom mostra il delta (differenza tra il volume degli acquisti a mercato e delle vendite a mercato) come barre tracciate sotto il grafico, aiutandoti a vedere dove i compratori o i venditori aggressivi hanno dominato ciascun periodo.

[SCREENSHOT: Delta Bar — panoramica (DeepDOM) | dd-it-delta-bar-deepdom-01.png]

## Impostazioni d'uso

Fai clic con il tasto destro del mouse sul grafico e seleziona Indicators.

Cerca l'indicatore desiderato e aggiungilo al tuo workspace facendo clic sul pulsante "+".

Apri il pannello delle impostazioni dell'indicatore, personalizza i parametri secondo le tue preferenze e conferma le modifiche facendo clic su Save.

[SCREENSHOT: Delta Bar — Impostazioni d'uso (DeepDOM) | dd-it-delta-bar-deepdom-02.png]

## Impostazioni generali

[SCREENSHOT: Delta Bar — Impostazioni generali (DeepDOM) | dd-it-delta-bar-deepdom-03.png]

#### Input data

[SCREENSHOT: Delta Bar — Input data (DeepDOM) | dd-it-delta-bar-deepdom-04.png]

Scegli quale Input usare per il calcolo del delta:

Volume – volume totale scambiato a ciascun livello di prezzo; utile per valutare l'intensità degli scambi e le zone di prezzo chiave.

Aggregate Trades – raggruppa le operazioni eseguite allo stesso prezzo in una breve finestra temporale per mostrare il volume aggregato collegato agli ordini più grandi.

Trades – conta il numero di transazioni a ciascun livello di prezzo.

Order – usa i dati degli ordini (quantità in acquisto e in vendita) per valutare la pressione dell'orderflow.

#### Bar grouping

[SCREENSHOT: Delta Bar — Bar grouping (DeepDOM) | dd-it-delta-bar-deepdom-05.png]

Definisce quante barre vengono raggruppate in ciascuna Delta Bar. Un valore più basso fornisce dati più granulari, mentre un valore più alto rende la serie più uniforme.

#### Filtri

[SCREENSHOT: Delta Bar — Filtri (DeepDOM) | dd-it-delta-bar-deepdom-06.png]

Filter min – applica una soglia minima al database scelto, nascondendo le barre sotto quel valore.

Filter max – applica una soglia massima. Lasciandolo impostato a 0 il filtro massimo viene disattivato.

### Impostazioni di visualizzazione

[SCREENSHOT: Delta Bar — Impostazioni di visualizzazione (DeepDOM) | dd-it-delta-bar-deepdom-07.png]

Bid Color - Seleziona il colore del Bid

Ask Color - Seleziona il colore dell'Ask

## Leggere i pattern con il Delta Bar

#### 1. Conferma del trend

In un trend rialzista sano vedi tipicamente sequenze di Delta Bar positive allineate con un prezzo che segna massimi crescenti. I pullback all'interno del trend mostrano spesso un delta più piccolo o addirittura leggermente negativo, ma dovrebbero restare contenuti rispetto alle barre positive dominanti.

Se il prezzo continua a spingere verso l'alto mentre il delta positivo si indebolisce o diventa negativo, può segnalare vendite nascoste o una partecipazione ridotta, avvertendo di una possibile inversione.

#### 2. Assorbimento sui livelli

Quando il prezzo testa un massimo precedente e le Delta Bar mostrano forti picchi positivi ma il prezzo non riesce a rompere e ruota invece verso il basso, spesso significa che i venditori limit stanno assorbendo i compratori aggressivi a quel livello. Una logica simile si applica ai minimi con un forte delta negativo che non riesce a estendersi.

#### 3. Esaurimento e climax

Delta Bar isolate molto grandi dopo un movimento esteso segnano spesso la capitolazione – tutti i trader ritardatari entrano proprio mentre i professionisti prendono la parte opposta. Osservare cosa succede nelle barre successive ti aiuta a decidere se andare contro questi estremi o attendere una conferma.

## Buone pratiche ed errori comuni

Non fare trading sul delta in isolamento: ancoralo sempre alla struttura (supporti/resistenze, massimo/minimo di giornata, VWAP).

Evita di filtrare troppo: valori di *Filter min* molto alti possono nascondere i primi segnali di iniziativa che poi si sviluppano in movimenti importanti.

Presta attenzione alle specificità del prodotto: i contratti Micro e i prodotti sottili richiedono soglie più piccole rispetto ai futures su indici molto liquidi.