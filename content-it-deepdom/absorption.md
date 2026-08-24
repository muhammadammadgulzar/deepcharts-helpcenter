---
title: "Absorption"
slug: "absorption"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "L'indicatore Absorption identifica le aree di prezzo in cui il mercato mostra una forte capacità di assorbire ordini di acquisto o di vendita. Questo suggerisce la presenza di liquidità significativa che sta rallentando o fermando temporaneamente il movimento del prezzo."
keywords: ["absorption", "assorbimento deepdom", "deepdom", "indicatori"]
source_hash: "7407259b45f61773"
ai_translated: true
source_hash: "7407259b45f61773"
---
L'indicatore Absorption identifica le aree di prezzo in cui il mercato mostra una forte capacità di assorbire ordini di acquisto o di vendita. Questo suggerisce la presenza di liquidità significativa che sta rallentando o fermando temporaneamente il movimento del prezzo. Sebbene l'assorbimento non porti sempre a un'inversione, fornisce informazioni preziose su dove si concentra la liquidità e su come il mercato potrebbe reagire a quei livelli.

## Che cos'è l'assorbimento?

Immagina che a un determinato livello di prezzo ci siano numerosi ordini di vendita. Se vengono eseguiti diversi grandi ordini di acquisto e il prezzo rimane comunque invariato a quel livello, questo potrebbe indicare assorbimento — i venditori stanno assorbendo la pressione in acquisto senza permettere al prezzo di salire.

[SCREENSHOT: Absorption — Che cos'è l'assorbimento? (DeepDOM) | dd-it-absorption-01.png]

Pensala come una spugna. Il lato in vendita sta assorbendo tutta la pressione in acquisto in arrivo, impedendo al prezzo di salire. Più acquisti vengono assorbiti senza che il prezzo si muova, più forte è la presenza dei venditori a quel livello.

È importante notare che l'assorbimento non blocca sempre il prezzo sul posto. In alcuni casi, dopo un assorbimento iniziale, il prezzo può continuare nella sua direzione originaria. Combinando l'indicatore Absorption con l'analisi del DOM e del Time & Sales, puoi capire meglio la partecipazione dei trader e la loro potenziale influenza sul prezzo a quei livelli.

L'indicatore Absorption di DeepDOM evidenzia queste situazioni direttamente sul grafico, rendendole facili da individuare in tempo reale.

### Come configurare l'indicatore Absorption

Fai clic con il tasto destro del mouse sul grafico e seleziona Indicators.

Cerca l'indicatore desiderato e aggiungilo al tuo workspace facendo clic sul pulsante "+".

Apri il pannello delle impostazioni dell'indicatore, personalizza i parametri secondo le tue preferenze e conferma le modifiche facendo clic su Save.

[SCREENSHOT: Absorption — Come configurare l'indicatore Absorption (DeepDOM) | dd-it-absorption-02.png]

## General Settings

1. Max Tick Imposta il numero massimo di tick entro cui un'area di assorbimento è considerata valida. Se il prezzo si muove oltre questo numero di tick, l'area non sarà più trattata come zona di assorbimento attiva.

In parole semplici — se il prezzo si allontana troppo dal punto in cui è stato rilevato l'assorbimento, l'evento non è più considerato rilevante e l'indicatore smette di segnalarlo.

[SCREENSHOT: Absorption — General Settings (DeepDOM) | dd-it-absorption-03.png]

Esempi - Max Tick - 1

[SCREENSHOT: Absorption — General Settings (DeepDOM) | dd-it-absorption-04.png]

Max Tick - 15

[SCREENSHOT: Absorption — General Settings (DeepDOM) | dd-it-absorption-05.png]

2. Max Orders Number Imposta il numero massimo di ordini usati nel calcolo dell'assorbimento. Questo determina il peso del trader o dei trader coinvolti nella risposta del mercato a quel livello.

Ti aiuta a concentrarti sugli eventi di assorbimento che coinvolgono un numero realistico di ordini — filtrando le situazioni in cui un numero anormalmente alto di piccoli ordini potrebbe generare una lettura falsa.

[SCREENSHOT: Absorption — General Settings (DeepDOM) | dd-it-absorption-06.png]

3. Max MS Imposta la durata massima in millisecondi entro cui un evento di assorbimento viene rilevato. Più velocemente l'assorbimento avviene nel mercato, più è probabile che rappresenti una risposta significativa a quel livello di prezzo.

In parole semplici — se l'assorbimento avviene molto rapidamente, è più probabile che si tratti di un'azione deliberata e significativa di un grande partecipante, piuttosto che di rumore di mercato casuale.

[SCREENSHOT: Absorption — General Settings (DeepDOM) | dd-it-absorption-07.png]

Esempi - Max MS - 2050

[SCREENSHOT: Absorption — General Settings (DeepDOM) | dd-it-absorption-08.png]

Max MS - 10 Come puoi vedere, alcuni degli ordini sono stati filtrati quando abbiamo aggiunto un filtro Max MS - 10

[SCREENSHOT: Absorption — General Settings (DeepDOM) | dd-it-absorption-09.png]

4. Min. Absorption Vol. Imposta il volume minimo richiesto perché un'area si qualifichi come assorbita. Questo filtra gli assorbimenti minori e si concentra solo su quelli che superano una soglia di volume significativa. Impostare un valore più basso può anche essere utile per gli scalper ad alta frequenza che cercano piccoli segnali di assorbimento basati su una risposta di pochi tick.

[SCREENSHOT: Absorption — General Settings (DeepDOM) | dd-it-absorption-10.png]

Esempi - Min. Absorption Vol. - 20

[SCREENSHOT: Absorption — General Settings (DeepDOM) | dd-it-absorption-11.png]

Min. Absorption Vol. - 50 Come puoi vedere, alcuni degli ordini sono stati filtrati quando abbiamo aggiunto un filtro Min. Absorption Vol. - 50

[SCREENSHOT: Absorption — General Settings (DeepDOM) | dd-it-absorption-12.png]

## Plot Settings

1. Display Mode Definisce come l'assorbimento viene rappresentato sul grafico. Puoi scegliere tra Square, Diamond e Text

[SCREENSHOT: Absorption — Plot Settings (DeepDOM) | dd-it-absorption-13.png]

Text — mostra l'assorbimento come etichetta di testo al livello di prezzo interessato

[SCREENSHOT: Absorption — Plot Settings (DeepDOM) | dd-it-absorption-14.png]

Diamond — mostra l'assorbimento come marker a forma di rombo

[SCREENSHOT: Absorption — Plot Settings (DeepDOM) | dd-it-absorption-15.png]

Square — mostra l'assorbimento come marker a forma di quadrato

[SCREENSHOT: Absorption — Plot Settings (DeepDOM) | dd-it-absorption-16.png]

2. Ask Color Imposta il colore usato per evidenziare l'assorbimento sul lato Ask — dove la pressione in acquisto viene assorbita dai venditori.

[SCREENSHOT: Absorption — Plot Settings (DeepDOM) | dd-it-absorption-17.png]

3. Bid Color Imposta il colore usato per evidenziare l'assorbimento sul lato Bid — dove la pressione in vendita viene assorbita dai compratori.

[SCREENSHOT: Absorption — Plot Settings (DeepDOM) | dd-it-absorption-18.png]

4. Marker Width aumenta la dimensione del marker che mostra l'assorbimento; funziona solo quando il Display Mode è impostato su Square o Diamond

[SCREENSHOT: Absorption — Plot Settings (DeepDOM) | dd-it-absorption-19.png]

Esempi - Marker Width - 3

[SCREENSHOT: Absorption — Plot Settings (DeepDOM) | dd-it-absorption-20.png]

Marker Width - 10 Come puoi vedere, quando il valore di Marker Width è impostato a 10, la dimensione del quadrato aumenta

[SCREENSHOT: Absorption — Plot Settings (DeepDOM) | dd-it-absorption-21.png]

## Text Settings

[SCREENSHOT: Absorption — Text Settings (DeepDOM) | dd-it-absorption-22.png]

1. Enable Text Abilita o disabilita l'etichetta di testo associata a ogni evento di assorbimento sul grafico.

2. Text Color Imposta il colore del testo visualizzato.

3. Text Size Regola la dimensione dell'etichetta di testo per la leggibilità.

### Plot Settings

Hai anche la possibilità di impostare avvisi per i segnali di Absorption

[SCREENSHOT: Absorption — Plot Settings (DeepDOM) | dd-it-absorption-23.png]

## Conclusione

L'indicatore Absorption è uno strumento potente per identificare dove è presente liquidità significativa nel mercato. Usato insieme al DOM e al Time & Sales, ti offre un quadro più completo della partecipazione al mercato ai livelli di prezzo chiave — aiutandoti a prendere decisioni più informate su potenziali ingressi, uscite e aree di interesse.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu incontri.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Support Ticket (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.