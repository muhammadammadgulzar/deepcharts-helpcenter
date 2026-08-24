---
title: "Spread Bid/Ask"
slug: "spread-bid-ask"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "L'indicatore Spread Bid/Ask misura e traccia la distanza in tick tra il miglior prezzo bid e il miglior prezzo ask (lo spread bid–ask)."
keywords: ["spread bid ask", "spread bid ask deepdom", "deepdom", "indicatori"]
source_hash: "3186ff7babda6589"
ai_translated: true
source_hash: "3186ff7babda6589"
---
L'indicatore Spread Bid/Ask misura e traccia la distanza in tick tra il miglior prezzo bid e il miglior prezzo ask (lo spread bid–ask). Ti aiuta a vedere quando cambiano le condizioni di liquidità – per esempio quando gli spread si allargano improvvisamente durante fasi di bassa liquidità o alta volatilità – e può generare avvisi quando lo spread supera un livello che definisci tu.

[SCREENSHOT: Spread Bid/Ask — panoramica (DeepDOM) | dd-it-spread-bid-ask-01.png]

## 1. Concetto: lo spread bid–ask

In ogni mercato esiste un bid – il prezzo più alto che i compratori sono attualmente disposti a pagare – e un ask (o offerta) – il prezzo più basso al quale i venditori sono disposti a vendere. Lo spread bid–ask è la differenza tra questi due prezzi e rappresenta sia un costo di transazione sia una misura diretta della liquidità del mercato.

Spread stretti indicano di solito un mercato liquido e competitivo in cui è facile entrare e uscire dalle posizioni, mentre spread ampi si verificano spesso in condizioni sottili o molto volatili e implicano un rischio di esecuzione maggiore per gli ordini a mercato.

Su DeepDOM puoi già vedere lo spread nella finestra Chart area 2; l'indicatore Spread Bid/Ask riassume questa informazione nel tempo in un pannello separato, rendendo evidenti i pattern anche quando il grafico è molto zoomato all'indietro.

## 2. Cosa mostra l'indicatore

Quando lo applichi, Spread Bid/Ask crea un grafico a linea in un pannello separato sotto il grafico. Ogni punto della linea mostra lo spread corrente in tick per quel momento nel tempo. Picchi improvvisi della linea corrispondono ai momenti in cui lo spread si allarga, mentre valori piatti e bassi indicano condizioni stabili e strette.

Puoi usare questo strumento visivo per rispondere rapidamente a domande come: "Gli spread sono esplosi intorno a questa candela di news?", "Il prodotto sta attualmente scambiando con uno spread costantemente ampio?", oppure "La mia strategia sta per operare in un ambiente a bassa liquidità?"

## 3. Impostazioni degli avvisi

[SCREENSHOT: Spread Bid/Ask — 3. Impostazioni degli avvisi (DeepDOM) | dd-it-spread-bid-ask-02.png]

La finestra delle impostazioni di Spread Bid/Ask si concentra su una logica di avvisi semplice ma potente.

### 3.1 Enable Alert

Enable Alert attiva o disattiva l'avviso sullo spread. Quando è attivo, DeepDOM monitora continuamente lo spread corrente e genera un avviso ogni volta che supera la soglia che hai configurato.

### 3.2 Alert Level in Tick

Alert Level in Tick definisce quanto deve allargarsi lo spread (in tick) prima che venga generato un avviso. Per esempio:

Impostare il livello a 5-6 tick evidenzia anche allargamenti modesti, utile per lo scalping o per strumenti con spread molto stretti.

Valori come 10-15 tick o più si concentrano solo su condizioni estreme, come durante notizie importanti o quando la liquidità scompare improvvisamente.

### 3.3 Inhibition Time in Seconds

Inhibition time in seconds agisce come periodo di raffreddamento. Dopo che un avviso è stato generato, DeepDOM attenderà per questo intervallo di tempo prima di consentire un nuovo avviso sullo spread. Questo evita notifiche ripetute se lo spread oscilla intorno alla tua soglia.

Per esempio, con un livello di avviso di 5 tick e un'inibizione di 20 secondi, riceverai al massimo un avviso ogni 20 secondi anche se lo spread supera ripetutamente i 5 tick in quella finestra.

## 4. Usi pratici nel trading

### 4.1 Evitare esecuzioni sfavorevoli

Spread ampi aumentano lo slippage e il costo di esecuzione degli ordini a mercato. Un avviso sullo spread può metterti in guardia dall'inseguire un movimento quando la liquidità svanisce temporaneamente – per esempio intorno a notizie macro programmate o all'inizio di sessioni illiquide.

### 4.2 Individuare il regime di mercato

Osservando la linea dello spread nel tempo puoi distinguere tra regimi "normali" e regimi "di stress" per ogni prodotto. Le strategie che si basano su spread molto stretti (scalping, mean reversion ad alta frequenza) possono essere disattivate automaticamente o manualmente quando gli spread rimangono sopra la tua soglia per lunghi periodi.

### 4.3 Combinare con gli strumenti di orderflow

Spread Bid/Ask diventa ancora più potente se combinato con strumenti di DeepDOM come Imbalance Tracker, Deep Reload o Deep Trades. Per esempio, un improvviso picco dello spread accompagnato da squilibri aggressivi e ripristini degli ordini spesso caratterizza eventi di news o prese di liquidità, che potresti voler trattare diversamente dalle rotazioni normali.

## 5. Buone pratiche

Calibra per singolo strumento: determina gli spread tipici di ciascun simbolo e imposta il livello di avviso leggermente sopra quel range normale, così vedrai solo allargamenti davvero insoliti.

Considera i cambi di sessione: alcuni prodotti scambiano naturalmente con spread più ampi nella sessione notturna; potresti voler usare template diversi per ciascuna sessione.

Usa l'inibizione con criterio: un'inibizione breve offre più dettaglio ma può generare molti avvisi; un'inibizione più lunga è preferibile nelle giornate di alta volatilità o quando monitori più mercati contemporaneamente.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu incontri.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Ticket di supporto (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.