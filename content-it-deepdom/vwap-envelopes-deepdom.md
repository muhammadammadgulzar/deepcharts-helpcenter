---
title: "VWAP + Envelopes"
slug: "vwap-envelopes-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "L'indicatore VWAP (Volume Weighted Average Price) mostra il prezzo medio degli scambi ponderato per il volume in un periodo di tempo scelto, insieme a bande di deviazione standard sopra e sotto di esso."
keywords: ["vwap envelopes", "vwap envelopes deepdom", "deepdom", "indicatori"]
source_hash: "9886aaf17ac0b55c"
ai_translated: true
source_hash: "9886aaf17ac0b55c"
---
L'indicatore VWAP (Volume Weighted Average Price) mostra il prezzo medio degli scambi ponderato per il volume in un periodo di tempo scelto, insieme a bande di deviazione standard sopra e sotto di esso.

[SCREENSHOT: VWAP + Envelopes — panoramica (DeepDOM) | dd-it-vwap-envelopes-deepdom-01.png]

Che cos'è il VWAP? Pensa al VWAP come al "vero prezzo medio" del mercato — ma più intelligente di una media normale. Invece di trattare ogni scambio allo stesso modo, dà più peso ai livelli di prezzo in cui è stato scambiato più volume. Questo lo rende una rappresentazione molto più accurata di dove il mercato ha svolto la maggior parte della sua attività. I trader lo usano come riferimento per il fair value — se il prezzo è sopra il VWAP, sta scambiando a premio; se è sotto, sta scambiando a sconto.

Le bande di deviazione standard misurano quanto il prezzo si sta allontanando dalla media. Aiutano i trader a identificare le zone di Premium e Discount — aree in cui il prezzo scambia sopra o sotto il fair value — e possono essere usate per prendere decisioni di ingresso e uscita più informate.

Ecco cosa rappresenta ciascuna banda:

Prima deviazione standard (+1 / -1) — l'intervallo di volatilità principale; dove il prezzo trascorre la maggior parte del tempo. È considerata la zona "normale" intorno al fair value

Seconda deviazione standard (+2 / -2) — segnala maggiore volatilità e potenziali movimenti di prezzo significativi. Il prezzo che arriva qui è meno comune e può indicare un movimento eccessivamente esteso

Terza deviazione standard (+3 / -3) — rappresenta movimenti di prezzo rari ed estremi. Un prezzo a questo livello è statisticamente insolito e può segnalare un forte potenziale di pullback verso il VWAP

## Come aggiungere il VWAP al tuo grafico

Ci sono due modi per aggiungere l'indicatore VWAP:

Fai clic con il tasto destro del mouse sul grafico -> Indicators

Cerca l'indicatore VWAP Envelopes e fai clic sul simbolo "+"

Apri il pannello delle impostazioni per personalizzarle -> Save

Una volta aggiunto, fai clic sull'icona delle impostazioni dell'indicatore per aprire la sua finestra di configurazione.

[SCREENSHOT: VWAP + Envelopes — Come aggiungere il VWAP al tuo grafico (DeepDOM) | dd-it-vwap-envelopes-deepdom-02.png]

## Impostazioni generali

Period Mode Definisce il periodo di tempo usato per calcolare il VWAP. Puoi scegliere tra:

Day — calcola il VWAP dall'inizio della giornata di trading corrente, azzerandosi all'apertura di ogni nuova sessione

Minutes — calcola il VWAP su un numero definito di minuti, offrendoti una visione di più breve termine del fair value

Seconds — calcola il VWAP su un numero definito di secondi, utile per analisi di brevissimo termine

Orders — calcola il VWAP in base a un numero definito di ordini anziché a un periodo di tempo

Period Value Imposta il valore numerico per il periodo scelto sopra. Ad esempio, se hai selezionato Minutes, qui inserirai 30 per un VWAP a 30 minuti.

Envelope Mode Definisce come vengono calcolate le bande. Puoi scegliere tra:

Standard Deviation — le bande si basano sulla deviazione statistica dal VWAP, adattandosi automaticamente alla volatilità del mercato

Percentage — le bande si basano su una variazione percentuale fissa rispetto al prezzo del VWAP, restando costanti indipendentemente dalla volatilità

[SCREENSHOT: VWAP + Envelopes — Impostazioni generali (DeepDOM) | dd-it-vwap-envelopes-deepdom-03.png]

## Impostazioni di visualizzazione

Line Color Imposta il colore della linea del VWAP sul grafico.

Line Width Imposta lo spessore della linea del VWAP.

Envelope Width Imposta lo spessore delle bande di deviazione standard.

Envelope Style Imposta lo stile delle linee delle bande — per esempio continua, tratteggiata o punteggiata.

[SCREENSHOT: VWAP + Envelopes — Impostazioni di visualizzazione (DeepDOM) | dd-it-vwap-envelopes-deepdom-04.png]

## Impostazioni delle bande — prima, seconda e terza banda

Ciascuna delle tre bande può essere configurata individualmente:

Attiva o disattiva ogni banda in modo indipendente

[SCREENSHOT: VWAP + Envelopes — Impostazioni delle bande — prima, seconda e terza banda (DeepDOM) | dd-it-vwap-envelopes-deepdom-05.png]

Imposta il valore di deviazione standard per ogni banda

[SCREENSHOT: VWAP + Envelopes — Impostazioni delle bande — prima, seconda e terza banda (DeepDOM) | dd-it-vwap-envelopes-deepdom-06.png]

Scegli un colore personalizzato per ogni banda

[SCREENSHOT: VWAP + Envelopes — Impostazioni delle bande — prima, seconda e terza banda (DeepDOM) | dd-it-vwap-envelopes-deepdom-07.png]

Questo ti permette di mostrare solo le bande rilevanti per il tuo stile di trading — per esempio, attivando solo la prima e la seconda banda e lasciando disattivata la terza. Mantenere attive meno bande può rendere il grafico più facile da leggere, soprattutto nei mercati in rapido movimento.

[SCREENSHOT: VWAP + Envelopes — Impostazioni delle bande — prima, seconda e terza banda (DeepDOM) | dd-it-vwap-envelopes-deepdom-08.png]

[SCREENSHOT: VWAP + Envelopes — Impostazioni delle bande — prima, seconda e terza banda (DeepDOM) | dd-it-vwap-envelopes-deepdom-09.png]

## Usare più VWAP

Puoi applicare più di un indicatore VWAP allo stesso grafico contemporaneamente. Un esempio comune è combinare un VWAP giornaliero con un VWAP di periodo più breve per ottenere una visione sia macro sia micro del fair value.

Per esempio — un VWAP giornaliero in giallo e un VWAP a 30 minuti in ciano applicati allo stesso grafico. Il VWAP giornaliero ti mostra il quadro generale di dove si trova il fair value per l'intera sessione, mentre il VWAP a 30 minuti ti mostra dove si trova il fair value in questo momento all'interno di quella sessione.

[SCREENSHOT: VWAP + Envelopes — Usare più VWAP (DeepDOM) | dd-it-vwap-envelopes-deepdom-10.png]

## Conclusione

L'indicatore VWAP è uno degli strumenti più utilizzati nel trading orderflow. Combinando la linea del VWAP con le sue bande di deviazione standard, puoi identificare rapidamente se il prezzo sta scambiando al fair value, a premio o a sconto — ottenendo un quadro strutturato per i tuoi ingressi e le tue uscite.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu possa incontrare.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Support Ticket (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.