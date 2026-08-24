---
title: "Big Trades"
slug: "big-trades-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "2 min read"
description: "L'indicatore Big Trades evidenzia sul grafico i grandi ordini aggregati usando marker visivi, rendendo facile vedere dove sono avvenute le transazioni di acquisto e vendita più grandi."
keywords: ["big trades", "big trades deepdom", "deepdom", "indicatori"]
source_hash: "2de0a0d9309d8cc9"
ai_translated: true
source_hash: "2de0a0d9309d8cc9"
---
L'indicatore Big Trades evidenzia sul grafico i grandi ordini aggregati usando marker visivi, rendendo facile vedere dove sono avvenute le transazioni di acquisto e vendita più grandi.

[SCREENSHOT: Big Trades — panoramica (DeepDOM) | dd-it-big-trades-deepdom-01.png]

## Impostazioni d'uso

Apri la configurazione dell'indicatore facendo clic sulla sua icona delle impostazioni. La finestra raccoglie tutte le opzioni di visualizzazione e i controlli dei livelli.

[SCREENSHOT: Big Trades — Impostazioni d'uso (DeepDOM) | dd-it-big-trades-deepdom-02.png]

## Data Settings

[SCREENSHOT: Big Trades — Data Settings (DeepDOM) | dd-it-big-trades-deepdom-03.png]

#### Input data

Scegli l'Input usato per rilevare i big trade:

Volume – volume totale a ogni livello di prezzo.

Order – quantità di ordini a ogni prezzo; utile per l'analisi orderflow.

Iceberg – si concentra sull'attività di tipo iceberg.

Aggregate Trades – raggruppa i piccoli scambi eseguiti in una breve finestra temporale allo stesso prezzo in un unico scambio più grande.

#### Min / Max Filter

Min Filter – imposta la dimensione minima richiesta perché uno scambio sia considerato un Big Trade.

Max Filter – imposta la dimensione massima. Lasciandolo a 0 il filtro massimo viene disabilitato. Usare filtri massimi diversi è utile quando esegui più indicatori Big Trades con fasce di dimensione distinte.

## Plot Settings

[SCREENSHOT: Big Trades — Plot Settings (DeepDOM) | dd-it-big-trades-deepdom-04.png]

Dev. standard – parametro di deviazione standard usato per scalare la dimensione del marker in base alla grandezza dello scambio.

Minimum opacity – limite inferiore per l'opacità dei marker; gli scambi più grandi ottengono sfondi più opachi.

Ask/Bid Color – colori applicati ai Big Trades eseguiti sul lato Ask (in acquisto) e Bid (in vendita).

Marker – scegli la forma del marker: Circle, Square, Diamond o Text.

Hollow fill – quando è abilitato, rimuove lo sfondo del marker, lasciando solo il contorno.

### Marker and Text Settings

[SCREENSHOT: Big Trades — Marker and Text Settings (DeepDOM) | dd-it-big-trades-deepdom-05.png]

Marker Settings – definisce le dimensioni minima e massima dei marker per aumentare la dimensione della bolla

Text Settings – configura dimensione e colore del carattere quando usi i marker di testo.

## Applicazioni nel trading

#### 1. Individuare l'attività dei grandi operatori

I Big Trades vicino a massimi/minimi precedenti o al VWAP mostrano dove i grandi operatori difendono un livello o avviano nuove posizioni. Quando questi marker si allineano con delta e volume forti, puoi dedurre che il flusso istituzionale sta guidando il movimento.

#### 2. Esaurimento contro iniziativa

Un cluster di Big Trades alla fine di un trend esteso può significare due cose:

Continuazione: se il prezzo attraversa il livello e si mantiene, è probabile che i grandi operatori stiano prendendo iniziativa nella direzione della rottura.

Esaurimento: se il prezzo torna rapidamente indietro, questi scambi rappresentano spesso ritardatari che inseguono il movimento e vengono assorbiti dalla liquidità passiva.

#### 3. Decisioni di scaling

I trader professionisti osservano i Big Trades contrari alla loro posizione come segnale precoce per alleggerire o spostare gli stop. Per esempio, se sei long contro una resistenza e diversi grandi scambi sul lato Bid non riescono a spingere il prezzo più in alto, potrebbe indicare assorbimento e giustificare una riduzione del rischio.