---
title: "Conti di trading e simulazione"
slug: "simulation-accounts"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Crea conti di simulazione, usali per fare trading dal pannello di trading e passa a un conto broker reale quando sei pronto."
keywords: ["conto sim", "conto di simulazione", "paper trading", "conto demo", "conto di prova", "broker SIM", "aggiungere conto sim", "conto di trading"]
source_hash: "e9652caf67b71078"
ai_translated: true
source_hash: "e9652caf67b71078"
---
Alla fine avrai un conto di simulazione con un saldo iniziale scelto da te e un pannello di trading configurato per usarlo.

DeepCharts include un broker **SIM** integrato che esegue i tuoi ordini contro i dati di mercato dei tuoi grafici senza rischiare denaro reale. Ti serve solo un feed dati per i prezzi — non è richiesto alcun conto broker per esercitarti. È il modo più sicuro per imparare gli strumenti di trading, ed è anche il modo in cui i trader testano le strategie prima di passare al reale.

## Prima di iniziare

- DeepCharts installato e attivato — [[install-deepcharts]]
- Un feed dati connesso — [[connect-data-feed]] oppure il [[free-delayed-data-feed|feed gratuito ritardato di 15 minuti]]
- Un grafico aperto — [[first-chart]]

## Passaggi

### Creare o gestire un conto di simulazione

1. Fai clic su **Options → Settings** nella barra principale. Si apre la finestra **General Settings**.

2. Seleziona la scheda **Sim Account**. I conti di simulazione esistenti sono elencati con il loro **Name** e **Balance**.

[SCREENSHOT: La finestra General Settings sulla scheda Sim Account con la tabella dei conti con le colonne Name e Balance, una riga di conto SIM, l'icona del cestino per riga e il pulsante Add | dc-it-simulation-accounts-01.png]

3. Fai clic su **Add**. Nella finestra **Add Sim Account** inserisci un **Name** e un **Balance** iniziale (predefinito 10000), poi fai clic su **Add**.

[SCREENSHOT: La finestra Add Sim Account con il campo Name compilato e il campo Balance con il valore predefinito 10000, pulsanti Cancel e Add visibili | dc-it-simulation-accounts-02.png]

4. Fai clic su **Save Settings** in fondo alla finestra.

> **Nota:** Puoi creare più conti di simulazione — per esempio uno per ogni strategia che stai testando. La valuta del saldo segue l'impostazione internazionale di Windows, motivo per cui alcuni utenti vedono Rs, € o $ sullo stesso numero predefinito.

### Se vuoi eliminare un conto di simulazione

Fai clic sull'icona del cestino sulla riga del conto, poi su **Save Settings**.

> **Attenzione:** L'eliminazione di un conto di simulazione lo rimuove dall'elenco dei conti del pannello di trading. [CONFIRM: whether a deleted sim account's trade history remains available in Signal Performance / reports]

### Fare trading con un conto di simulazione

1. Su un grafico aperto, abilita l'interruttore **Trading panel** nella barra inferiore del grafico. Il pannello di trading si apre sul lato destro del grafico. (Puoi anche fare clic con il tasto destro del mouse sul grafico e scegliere **Show Trading Panel**.)

[SCREENSHOT: Un grafico dei prezzi con l'interruttore Trading panel della barra inferiore evidenziato e il pannello di trading aperto sul lato destro | dc-it-simulation-accounts-03.png]

2. Nel pannello di trading, imposta **Broker** su **SIM**.

3. Scegli il tuo conto di simulazione nel menu a discesa **Account**. Il pannello di trading interattivo qui sotto ti mostra cosa ottieni — passa il mouse su qualsiasi pulsante per scoprire cosa fa, e fai clic sulla posizione SIM per osservare il P/L in tempo reale e chiuderla.

[WIDGET: trading-panel-mock]

4. Inserisci un ordine di prova — per esempio imposta la quantità a 1 e fai clic su **BUY MKT**. [[trading-from-chart]] illustra ogni tipo di ordine.

### Se vuoi ripartire con un saldo nuovo

Aggiungi un nuovo conto di simulazione e passa il pannello di trading a quello, oppure elimina e ricrea quello vecchio. [CONFIRM: whether an existing sim account's balance can be reset directly without re-creating it]

## Passare a un conto broker reale

Quando hai le credenziali di un broker o di una prop firm, la stessa connessione che fornisce i tuoi dati di mercato trasporta anche i tuoi ordini:

1. Crea la connessione al feed con le credenziali del tuo broker — [[connect-data-feed]].
2. Verifica in **Options → Symbol Manage** che i tuoi exchange siano mappati su quella connessione — [[symbol-manage]].
3. Connettiti, apri un grafico e apri il pannello di trading.
4. Imposta **Broker** sulla connessione del tuo broker e scegli il conto.

Tutto il resto nel pannello funziona esattamente come su SIM — vedi [[trading-panel-reference]] per ogni campo.

## Verifica che abbia funzionato

Con **Broker** = SIM e il tuo conto selezionato, inserisci un ordine a mercato da un contratto: **Open Qty** passa a 1 e **Open P/L** inizia a muoversi con il mercato. L'ordine appare anche nella [[orders-window]]. Chiudi la posizione con **Cancel and Flat** quando hai finito.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| Il menu a discesa Account è vuoto | Il conto non è stato salvato — aggiungilo di nuovo in **Options → Settings → Sim Account** e fai clic su **Save Settings** |
| Nessun pannello di trading sul grafico | Abilita l'interruttore **Trading panel** nella barra inferiore del grafico |
| Ordini inseriti ma nessuna esecuzione / prezzo congelato | Il grafico non ha dati in movimento — [[feed-connected-chart-not-moving]] |
| Il saldo mostra un simbolo di valuta inatteso | La valuta segue l'impostazione internazionale di Windows — solo estetica |

## Articoli correlati

- [[trading-from-chart]]
- [[trading-panel-reference]]
- [[orders-window]]
- [[portfolio-wallet]]
- [[risk-manager]]
- [[quick-start-first-trade]]