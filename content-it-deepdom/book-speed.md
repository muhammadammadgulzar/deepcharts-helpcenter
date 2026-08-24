---
title: "Book Speed"
slug: "book-speed"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "L'indicatore Book Speed mostra istogrammi in fondo al grafico che indicano quanti livelli del book vengono consumati ogni n secondi."
keywords: ["book speed", "book speed deepdom", "deepdom", "indicatori"]
source_hash: "c4a9ba78ee7bad8e"
ai_translated: true
source_hash: "c4a9ba78ee7bad8e"
---
L'indicatore Book Speed mostra istogrammi in fondo al grafico che indicano quanti livelli del book vengono consumati ogni n secondi. Questo ti permette di visualizzare il ritmo con cui la liquidità viene assorbita sia sul lato Bid sia sul lato Ask, e di confrontarlo con il movimento del prezzo per identificare potenziali divergenze tra orderflow e direzione del prezzo.

[SCREENSHOT: Book Speed — panoramica (DeepDOM) | dd-it-book-speed-01.png]

Che cos'è un livello del book? Pensa al book di negoziazione come a una scala di prezzi. Ogni "gradino" di quella scala è un livello del book — rappresenta un prezzo al quale compratori o venditori hanno inserito i loro ordini limit. Quando arrivano ordini a mercato che spazzano via quegli ordini limit, il livello viene "consumato". Più velocemente i livelli vengono consumati, più aggressiva è la pressione in acquisto o in vendita nel mercato.

### Come aggiungere Book Speed al tuo grafico

Fai clic con il tasto destro del mouse sul grafico e seleziona Indicators.

Cerca l'indicatore desiderato e aggiungilo al tuo workspace facendo clic sul pulsante "+".

Apri il pannello delle impostazioni dell'indicatore, personalizza i parametri secondo le tue preferenze e conferma le modifiche facendo clic su Save.

[SCREENSHOT: Book Speed — Come aggiungere Book Speed al tuo grafico (DeepDOM) | dd-it-book-speed-02.png]

## General Settings

Parameter Mode Definisce come l'indicatore misura l'attività del book. Puoi scegliere tra:

Seconds — misura quanti livelli del book vengono consumati entro un numero definito di secondi. È la modalità più semplice — definisci una finestra temporale e l'indicatore conta quanta liquidità è stata assorbita in quel periodo

[SCREENSHOT: Book Speed — General Settings (DeepDOM) | dd-it-book-speed-03.png]

Tick Reversal — misura il consumo in base alle inversioni di tick del prezzo. Invece di usare il tempo, questa modalità avvia una nuova misurazione ogni volta che il prezzo inverte di un numero definito di tick. È utile per i trader che preferiscono analizzare il mercato in base al movimento del prezzo anziché a intervalli di tempo fissi

[SCREENSHOT: Book Speed — General Settings (DeepDOM) | dd-it-book-speed-04.png]

Parameter Value Imposta il valore numerico per il parametro scelto sopra. Per esempio, se hai selezionato Seconds, inserendo 10 qui l'indicatore calcola i livelli del book consumati ogni 10 secondi. Se hai selezionato Tick Reversal, questo valore definisce quanti tick di inversione servono per avviare una nuova misurazione.

[SCREENSHOT: Book Speed — General Settings (DeepDOM) | dd-it-book-speed-05.png]

## Plot Settings

Ti permette di personalizzare l'aspetto degli istogrammi:

Imposta il colore dell'istogramma Bid

Imposta il colore dell'istogramma Ask

Imposta il Line Width (spessore linea) di entrambi gli istogrammi

[SCREENSHOT: Book Speed — Plot Settings (DeepDOM) | dd-it-book-speed-06.png]

[SCREENSHOT: Book Speed — Plot Settings (DeepDOM) | dd-it-book-speed-07.png]

## Average

Abilita una linea di media mobile sull'istogramma di Book Speed sia per il Bid sia per l'Ask.

Che cos'è una media mobile qui? Una media mobile liscia le barre dell'istogramma calcolando una media scorrevole su un numero definito di periodi. Invece di vedere ogni picco e ogni calo nel consumo del book, ottieni una linea più liscia che mostra il trend complessivo — rendendo molto più facile capire se l'attività sul book sta davvero aumentando o rallentando nel tempo.

Personalizza il colore di Avg Bid e Avg Ask

Avg length — una lunghezza maggiore dà una linea più liscia, una lunghezza minore reagisce più in fretta ai cambiamenti

[SCREENSHOT: Book Speed — Average (DeepDOM) | dd-it-book-speed-08.png]

[SCREENSHOT: Book Speed — Average (DeepDOM) | dd-it-book-speed-09.png]

## Marker

Abilita una linea marker sull'istogramma per definire un livello di soglia.

[SCREENSHOT: Book Speed — Marker (DeepDOM) | dd-it-book-speed-10.png]

Che cos'è un marker? Un marker è semplicemente una linea di riferimento orizzontale che tracci a un valore specifico sull'istogramma. Decidi in anticipo quale livello di consumo del book è significativo per te — e il marker lo rende immediatamente visibile ogni volta che l'istogramma supera quel livello. Pensalo come un filo d'inciampo — quando l'attività sul book lo supera, sai che sta accadendo qualcosa di rilevante.

Abilita o disabilita il marker

Imposta un colore personalizzato per il marker Bid e Ask

Imposta il valore del marker — il livello al quale appare la linea del marker

[SCREENSHOT: Book Speed — Marker (DeepDOM) | dd-it-book-speed-11.png]

## Conclusione

L'indicatore Book Speed è uno strumento potente per leggere in tempo reale l'aggressività dei partecipanti al mercato. Confrontando il ritmo di consumo del book con il movimento del prezzo, puoi individuare divergenze che possono segnalare una potenziale inversione o continuazione prima che diventi visibile nel solo prezzo.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu incontri.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Support Ticket (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.