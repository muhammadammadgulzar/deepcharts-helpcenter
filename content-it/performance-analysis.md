---
title: "Analisi delle performance (Signal Performance)"
slug: "performance-analysis"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Genera statistiche di trading per conto: curva equity, drawdown, dettaglio per singolo trade, ripartizione per simbolo e redditività per ora."
keywords: ["analisi delle performance", "signal performance", "strategy report", "mostra report", "statistiche di trading", "curva equity", "drawdown", "run-up", "elenco trade", "analisi temporale", "esporta csv", "percentuale di vincita"]
source_hash: "f3821e0fa6b492b8"
ai_translated: true
source_hash: "f3821e0fa6b492b8"
---
Lo Strategy Report trasforma la cronologia dei trade di un conto in statistiche: profitto totale e drawdown, un elenco per singolo trade, una ripartizione per simbolo, una curva equity e una vista di redditività per ora che ti mostra quali ore della giornata ti fanno davvero guadagnare.

Una stranezza di denominazione da chiarire subito: lo apri dal menu come **Strategy Report**, ma la finestra stessa è intitolata **Signal Performance**. È la stessa funzione — non cercare un secondo strumento.

## Che cos'è

Un generatore di report per qualsiasi conto connesso (incluso il SIM). Scegli broker, conto, intervallo di date e simboli, fai clic su **Generate Report** e ottieni cinque sezioni di analisi esattamente su quei trade. Poiché lavora per conto, è utile sia per rivedere un conto prop reale sia per misurare una strategia che stai testando su SIM.

[SCREENSHOT: La finestra Signal Performance aperta da Trading → Strategy Report, con i selettori Broker e Account, i filtri di intervallo date e simboli in alto a destra e il pulsante Generate Report | dc-it-performance-analysis-01.png]

## Quando usarlo

- **Revisione settimanale o mensile** — misura percentuale di vincita, drawdown e commissioni su un periodo invece di fidarti della memoria.
- **Confronto tra strumenti** — la sezione Symbol Performance mostra quali mercati ti pagano e quali ti dissanguano.
- **Trovare le tue ore** — Time Analysis rivela le ore della giornata in cui il tuo trading è redditizio e quelle in cui dovresti stare fuori.
- **Validare una strategia SIM** — genera lo stesso report sul conto SIM prima di portare una strategia in reale; vedi [[simulation-accounts]].

## Guida rapida

1. Fai clic su **Trading → Strategy Report** nella barra principale. Si apre la finestra **Signal Performance**.
2. Scegli il **Broker** e l'**Account** da analizzare.
3. Usa la rotellina di scorrimento nell'angolo in alto a destra per scegliere l'intervallo di date e i simboli da includere.
4. Fai clic su **Generate Report**.
5. Per portare i dati altrove (foglio di calcolo, journal), fai clic su **Export CSV**.

[SCREENSHOT: L'area dei filtri in alto a destra della finestra Signal Performance con i controlli di selezione dell'intervallo di date e dei simboli visibili | dc-it-performance-analysis-02.png]

## Come leggerlo

Il report generato è organizzato in cinque sezioni:

### Strategy Performance

Il riepilogo del periodo: **Balance**, **Profit** realizzato, **Losses** subite, numero di trade eseguiti, **Commissions** (quando il tracciamento delle commissioni è abilitato [CONFIRM: where commissions are configured]), **DrawDown** e **Run-up**, e la percentuale di trade vincenti. Le cifre sono suddivise in **Long Executes**, **Short Executes** e **All Executes** — così vedi immediatamente se una sola direzione sta sostenendo il conto.

[SCREENSHOT: La sezione Strategy Performance di un report generato con Balance, Profit, Losses, numero di trade, DrawDown, Run-up e percentuale di vincita suddivisi nelle colonne Long/Short/All Executes | dc-it-performance-analysis-03.png]

### Trade List

Ogni trade del periodo con ora di ingresso e di uscita, prezzo di ingresso e di uscita, quantità, e per singolo trade **Profit**, **DrawDown** e **Run-up**. Il drawdown/run-up per trade è la colonna sottovalutata: mostra quanta sofferenza ha attraversato ogni vincitore e quanto ogni perdente è stato a un certo punto in profitto — la materia prima per calibrare stop e target.

### Symbol Performance

Il saldo per ogni simbolo negoziato nel periodo — il modo più rapido per identificare i tuoi strumenti più e meno redditizi.

### Chart

Analisi visiva degli stessi dati: la **curva equity**, il grafico del **drawdown** e viste dei singoli trade.

[SCREENSHOT: La sezione Chart di un report con la curva equity e il grafico del drawdown sotto | dc-it-performance-analysis-04.png]

### Time Analysis

La redditività per ora della giornata — quali ore sono le più e le meno favorevoli — con viste anche giornaliere, mensili e annuali. Usala per adattare quando fai trading, per esempio evitando le tue ore costantemente poco performanti.

[SCREENSHOT: La sezione Time Analysis con l'istogramma di redditività per ora e le ore chiaramente redditizie e non redditizie | dc-it-performance-analysis-05.png]

## Riferimento delle impostazioni

| Controllo | Cosa fa |
|---|---|
| **Broker** | Su quale connessione basare la cronologia del report. |
| **Account** | Quale conto sotto quel broker. |
| **Date range / symbol filters** (rotellina di scorrimento, in alto a destra) | Limitano il report a un periodo e a un insieme di strumenti. |
| **Generate Report** | Costruisce il report dalla selezione corrente. |
| **Export CSV** | Esporta i dati del report in un file CSV. |

## Suggerimenti ed errori comuni

- **"Strategy Report" vs "Signal Performance"** — la voce di menu e il titolo della finestra differiscono; è un'unica funzione.
- **Report vuoto** — controlla la selezione Broker/Account e amplia l'intervallo di date; il report copre solo il conto selezionato, non tutti i conti insieme.
- **Prima la suddivisione Long/Short** — prima di cambiare qualcosa in una strategia, verifica se le perdite si concentrano in una sola direzione. Spesso è quella l'intera diagnosi.

> **Attenzione:** Il menu del tasto destro sul grafico contiene **Clear Historical Account Report**, che rimuove permanentemente la cronologia di trading memorizzata del conto selezionato nel pannello di trading. Dopo la cancellazione, lo Strategy Report non ha più dati per quel conto e non è possibile recuperarli. Non usarlo come pulsante di "aggiornamento".

## Articoli correlati

- [[orders-window]]
- [[portfolio-wallet]]
- [[trading-panel-reference]]
- [[trading-from-chart]]
- [[simulation-accounts]]