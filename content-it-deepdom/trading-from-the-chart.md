---
title: "Trading dal grafico"
slug: "trading-from-the-chart"
category: "Trading"
subcategory: ""
type: "how-to"
difficulty: "intermediate"
time: "5 min read"
description: "Questa guida spiega come abilitare il trading direttamente da un grafico DeepDOM, usare il pannello di trading e il Chart DOM, gestire gli ordini e personalizzare le colonne e i marcatori legati al trading."
keywords: ["trading dal grafico", "trading dal grafico deepdom", "deepdom", "trading"]
source_hash: "0613ddb99ff8b5d7"
ai_translated: true
source_hash: "0613ddb99ff8b5d7"
---
Questa guida spiega come abilitare il trading direttamente da un grafico DeepDOM, usare il pannello di trading e il Chart DOM, gestire gli ordini e personalizzare le colonne e i marcatori legati al trading.

## Abilitare il trading e mostrare il pannello di trading

[SCREENSHOT: Trading dal grafico — Abilitare il trading e mostrare il pannello di trading (DeepDOM) | dd-it-trading-from-the-chart-01.png]

### Abilitare il trading su un grafico

Per consentire l'inserimento di ordini da un grafico:

Fai clic sull'icona del dollaro nell'angolo in alto a destra del grafico, oppure

Apri il menu Settings (Impostazioni) del grafico e attiva Trading enabled .

### Mostrare il pannello di trading

Per visualizzare il pannello di trading sotto il grafico:

Attiva la casella Trading panel nell'angolo in basso a destra del grafico, oppure

Usa il menu Settings del grafico e attiva Show trading panel .

## Pannello di trading e cross trading Mini/Micro

[SCREENSHOT: Trading dal grafico — Pannello di trading e cross trading Mini/Micro (DeepDOM) | dd-it-trading-from-the-chart-02.png]

Nella parte superiore del pannello di trading puoi selezionare lo strumento usato per l'esecuzione degli ordini. DeepDOM consente il cross trading , per esempio visualizzare i dati di un contratto futures Mini eseguendo gli ordini su un contratto Micro, senza aprire grafici aggiuntivi. Per un'analisi volumetrica accurata, basa sempre le tue decisioni sul contratto futures principale.

Il pannello mostra inoltre:

Open quantity – numero di contratti o azioni attualmente a mercato.

Open P/L – profitto o perdita non realizzati sulla posizione aperta.

Daily P/L – profitto o perdita realizzati sullo strumento nella giornata di trading corrente.

## Pulsanti di trading e azioni di base

[SCREENSHOT: Trading dal grafico — Pulsanti di trading e azioni di base (DeepDOM) | dd-it-trading-from-the-chart-03.png]

Il pannello di trading include pulsanti ad accesso rapido per i diversi tipi di ordine:

MKT – invia ordini a mercato di acquisto o vendita.

BID / ASK – inserisce ordini limit al miglior Bid o miglior Ask corrente.

LMT – inserisce ordini limit manuali (buy limit sotto il prezzo di mercato o sell limit sopra il mercato).

STP – inserisce ordini stop che diventano ordini a mercato quando vengono attivati (buy stop sopra il mercato, sell stop sotto il mercato).

STP LMT – inserisce ordini stop-limit, che quando vengono attivati inviano ordini limit invece di ordini a mercato, aiutando a controllare lo slippage a rischio di mancata esecuzione.

Cancel – annulla tutti gli ordini attivi (pendenti).

Close – chiude la posizione aperta corrente e annulla tutti gli ordini attivi rimanenti.

Usa i campi Qty , Broker e Account per scegliere la dimensione dell'operazione, il broker e il conto per ciascuna operazione.

Se l'opzione Tick diff. è attiva, i pulsanti Bid e Ask inseriranno ordini limit a un numero specificato di tick di distanza dal prezzo di mercato invece che esattamente al miglior Bid/Ask.

## Strategia OCO ed esecuzioni storiche

### Strategia OCO

La funzione OCO (Order‑Cancels‑Order) ti consente di collegare due ordini di uscita a una posizione principale: un ordine limit di presa di profitto e uno stop di protezione. Quando uno di questi ordini di uscita viene eseguito, l'altro viene annullato automaticamente.

[SCREENSHOT: Trading dal grafico — Strategia OCO (DeepDOM) | dd-it-trading-from-the-chart-04.png]

### Mostrare le esecuzioni storiche

Per visualizzare le esecuzioni storiche sul grafico, apri le impostazioni del grafico e attiva Show historical executions . I marcatori delle operazioni appariranno quindi ai prezzi e agli orari corrispondenti.

[SCREENSHOT: Trading dal grafico — Mostrare le esecuzioni storiche (DeepDOM) | dd-it-trading-from-the-chart-05.png]

## Panoramica del Chart DOM

[SCREENSHOT: Trading dal grafico — Panoramica del Chart DOM (DeepDOM) | dd-it-trading-from-the-chart-06.png]

Il Chart DOM fornisce una scala verticale del book di negoziazione accanto al grafico.

Attivalo selezionando la casella DOM in basso a destra del grafico, oppure

Apri le impostazioni del grafico e attiva Enable chart DOM .

Per impostazione predefinita, il Chart DOM mostra queste colonne da sinistra a destra:

B.PS – Bid Pull Stack; quantità aggiunte o rimosse a ciascun livello Bid.

B – colonna di gestione degli ordini di acquisto (sposta o annulla).

Bid – ordini buy limit a ciascun livello di prezzo.

Ask – ordini sell limit a ciascun livello di prezzo.

S – colonna di gestione degli ordini di vendita.

A.PS – Ask Pull Stack; quantità aggiunte o rimosse a ciascun livello Ask.

## Inserimento e gestione degli ordini sul DOM

### Ordini a mercato e limit/stop

Buy Market – fai clic con il tasto destro del mouse in un punto qualsiasi della colonna Bid.

Sell Market – fai clic con il tasto destro del mouse in un punto qualsiasi della colonna Ask.

Buy Limit – fai clic con il tasto sinistro nella colonna Bid a un prezzo qualsiasi sotto il prezzo di mercato corrente.

Buy Stop – fai clic con il tasto sinistro nella colonna Bid a un prezzo qualsiasi sopra il prezzo di mercato corrente.

Sell Limit – fai clic con il tasto sinistro nella colonna Ask a un prezzo qualsiasi sopra il prezzo di mercato corrente.

Sell Stop – fai clic con il tasto sinistro nella colonna Ask a un prezzo qualsiasi sotto il prezzo di mercato corrente.

### Modificare e annullare gli ordini

Per gli ordini limit o condizionati esistenti:

Usa le colonne di gestione degli ordini ( B e S ) e trascina con il tasto sinistro del mouse per spostare un ordine a un nuovo livello di prezzo.

Fai clic con il tasto destro del mouse per annullare un ordine.

Fai doppio clic con il tasto sinistro del mouse per modificare la quantità dell'ordine.

## Impostazioni e colonne del Chart DOM

[SCREENSHOT: Trading dal grafico — Impostazioni e colonne del Chart DOM (DeepDOM) | dd-it-trading-from-the-chart-07.png]

Fai clic sull'icona Settings sul Chart DOM per aprire le impostazioni del DOM. Qui puoi regolare Font size, Text format e l'aspetto di varie colonne, tra cui:

[SCREENSHOT: Trading dal grafico — Impostazioni e colonne del Chart DOM (DeepDOM) | dd-it-trading-from-the-chart-08.png]

Bid/Ask Columns – cambia i colori di sfondo e del testo per Bid e Ask.

Pull Stack Columns – attiva il Pull Stack Bid/Ask, scegli i filtri (media o nessuno) e personalizza i colori.

Filled filter – applica un filtro alle quantità eseguite in modo da mostrare solo le operazioni significative.

Bid/Ask Filled – mostra i volumi eseguiti nelle colonne B.T (Bid Trades) e A.T (Ask Trades), formando di fatto una vista footprint. La funzione Auto‑reset può azzerarle in base alle oscillazioni del prezzo, oppure puoi azzerarle manualmente.

Last Filled – attiva la colonna dell'ultima esecuzione.

Order View – mostra/nasconde le colonne di gestione degli ordini e ne regola i colori.

Price Scale – attiva la colonna della scala dei prezzi e personalizzane l'aspetto.

P/L Column – mostra il profitto e la perdita non realizzati tick per tick quando hai una posizione aperta.

Markers – attiva i marcatori per ultimo prezzo scambiato, apertura, massimo e minimo.

Column Order – apre le impostazioni dell'ordine delle colonne per riorganizzare le colonne del DOM come preferisci.

## Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu incontri. Quando ci contatti, includi:

Uno screenshot del problema.

Una breve descrizione di ciò che stavi cercando di fare.

Ticket di supporto (risposta più rapida): visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email: puoi anche scriverci a support@deepcharts.com. Tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.