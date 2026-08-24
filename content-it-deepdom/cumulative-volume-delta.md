---
title: "Cumulative Volume Delta"
slug: "cumulative-volume-delta"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "2 min read"
description: "Il Cumulative Volume Delta (CVD) mostra il delta cumulativo tick per tick su un periodo definito dall'utente, misurando la differenza tra il volume degli acquisti a mercato e delle vendite a mercato per rivelare una pressione di acquisto o vendita sostenuta."
keywords: ["cumulative volume delta", "deepdom cumulative volume delta", "deepdom", "indicatori"]
source_hash: "d0e55a14305c06f5"
ai_translated: true
source_hash: "d0e55a14305c06f5"
---
Il Cumulative Volume Delta (CVD) mostra il delta cumulativo tick per tick su un periodo definito dall'utente, misurando la differenza tra il volume degli acquisti a mercato e delle vendite a mercato per rivelare una pressione di acquisto o vendita sostenuta.

[SCREENSHOT: Cumulative Volume Delta — panoramica (DeepDOM) | dd-it-cumulative-volume-delta-01.png]

## Impostazioni d'uso

Fai clic con il tasto destro del mouse sul grafico e seleziona Indicators.

Cerca l'indicatore desiderato e aggiungilo al tuo workspace facendo clic sul pulsante "+".

Apri il pannello delle impostazioni dell'indicatore, personalizza i parametri secondo le tue preferenze e conferma le modifiche facendo clic su Save.

[SCREENSHOT: Cumulative Volume Delta — Impostazioni d'uso (DeepDOM) | dd-it-cumulative-volume-delta-02.png]

## Impostazioni generali

[SCREENSHOT: Cumulative Volume Delta — Impostazioni generali (DeepDOM) | dd-it-cumulative-volume-delta-03.png]

#### Period Mode e Value

Il Period Mode definisce il periodo di riferimento per il calcolo del CVD. Puoi scegliere tra Days, Minutes, Seconds o Order.

Period Value imposta il parametro numerico per la modalità scelta (ad esempio, 1 giorno o 30 minuti).

#### Show volumes Bid/Ask

Attiva questa opzione per visualizzare, oltre alla linea del CVD, linee separate per il volume eseguito ad Ask e a Bid.

## Impostazioni di visualizzazione

[SCREENSHOT: Cumulative Volume Delta — Impostazioni di visualizzazione (DeepDOM) | dd-it-cumulative-volume-delta-04.png]

Personalizza l'aspetto del CVD e delle linee di volume:

Imposta i colori per il CVD negativo (delta Bid color) e per il CVD positivo (delta Ask color).

Scegli i colori per i volumi eseguiti ad Ask e a Bid.

Regola lo spessore delle linee per migliorare la leggibilità.

## Filtered CVD

[SCREENSHOT: Cumulative Volume Delta — Filtered CVD (DeepDOM) | dd-it-cumulative-volume-delta-05.png]

#### Enable Filtered CVD

Attiva il Filtered CVD per applicare filtri di volume e, facoltativamente, tracciarlo su un asse separato da quello del CVD principale.

Use separate axes – se attivata, disegna il CVD filtrato usando una scala verticale diversa.

Vol. <= filter – applica un filtro di volume minimo.

Vol. >= filter – applica un filtro di volume massimo.

Filtered Bid color – colore per il CVD filtrato negativo.

Filtered Ask color – colore per il CVD filtrato positivo.

Line Zero – imposta il colore e lo spessore della linea dello zero.

I filtri sono utili per isolare la partecipazione dei player più grandi. Ad esempio, anche se il CVD di sessione è positivo mentre il prezzo scambia vicino ai minimi di sessione, un CVD filtrato con una soglia di volume più alta può rivelare che i trader più grandi sono venditori netti.

## Interpretare il CVD nel trading

Conferma del trend: un CVD che segna massimi crescenti insieme al prezzo supporta l'idea di un interesse d'acquisto genuino; un CVD in divergenza (massimi decrescenti mentre il prezzo segna massimi crescenti) avverte di una partecipazione in indebolimento.

Assorbimento e inversione: un CVD che spinge con forza in una direzione mentre il prezzo non riesce a rompere i livelli chiave segnala spesso assorbimento e potenziali zone di inversione.

Combinazione con Volume e Deep Trades: usa Volume per il contesto dell'intensità della partecipazione e Deep Trades per vedere se le stampe di grandi dimensioni sono allineate con la direzione del CVD o vanno in senso contrario.