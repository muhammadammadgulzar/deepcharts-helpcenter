---
title: "Avvio rapido: dall'installazione alla tua prima operazione"
slug: "quick-start-first-trade"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "30 min to complete"
description: "Un unico percorso guidato da un'installazione pulita a un ordine bracket simulato: licenza, wizard, feed, grafico, indicatore e il pannello di trading."
keywords: ["avvio rapido", "primi passi", "prima operazione", "guida alla configurazione", "nuovo utente", "dall'installazione al trading", "tutorial per principianti", "ordine bracket"]
source_hash: "9d0e547100215c4d"
ai_translated: true
source_hash: "9d0e547100215c4d"
---
Alla fine avrai DeepCharts installato, connesso ai dati di mercato, con un grafico e un indicatore visualizzati, e avrai inserito il tuo primo ordine bracket simulato — ingresso, stop loss e take profit — senza rischiare denaro.

Questo è il coronamento della serie Getting Started. Ogni passaggio è breve e rimanda a un articolo completo se vuoi approfondire o incontri un problema. Non ti servono un broker né un feed dati a pagamento per completarlo — il feed gratuito ritardato e il broker SIM integrato bastano.

## Prima di iniziare

- Un PC Windows che soddisfi i [[system-requirements]]
- Un account DeepCharts su my.deepcharts.com con la tua chiave di licenza — [[install-deepcharts]] mostra dove trovarla
- Nessuna credenziale per il feed dati necessaria — questa guida usa il [[free-delayed-data-feed|feed gratuito ritardato di 15 minuti]]

## Passaggi

### 1. Installa e attiva

1. Disattiva temporaneamente il tuo antivirus — è la causa più comune di installazioni fallite. Riattivalo dopo l'installazione.
2. Scarica l'installer dalla tua dashboard su my.deepcharts.com ed eseguilo. (Se la tua licenza è arrivata tramite una **prop firm**, sia l'installer sia la chiave di licenza provengono invece dalla dashboard della prop firm.)
3. Al primo avvio, inserisci l'**email** registrata su my.deepcharts.com e la tua **chiave di licenza**. Incolla entrambe senza spazi iniziali o finali — gli spazi vaganti sono la causa più comune di "Invalid License".

Tutti i dettagli: [[install-deepcharts]]. Problemi di attivazione: [[license-issues]].

[SCREENSHOT: La finestra License Key di DeepCharts al primo avvio con i campi Email e License visibili e il numero di versione nel piè di pagina | dc-it-quick-start-first-trade-01.png]

### 2. Esegui il wizard di avvio

Dopo l'attivazione parte un wizard in tre passaggi:

1. **Scelta del feed** — seleziona **I want to use 15 minutes delayed data powered by dxFeed for the moment**. (Se possiedi già credenziali per un feed, scegli l'altra opzione e vedi [[buy-data-feed]] e [[connect-data-feed]].)
2. **Symbol Manage** — il wizard pre-mappa i principali exchange (CME, CBOT, COMEX, EUREX, NYMEX) sul feed scelto. Lascia le impostazioni predefinite e fai clic su **Next**.
3. **Customize experience** — scegli un **Theme** (tema) e un **Alert sound profile** (profilo suoni di avviso), poi fai clic su **Done**.

[SCREENSHOT: Passaggio 1 del wizard di avvio con l'opzione radio 15 minutes delayed data powered by dxFeed selezionata | dc-it-quick-start-first-trade-02.png]

> **Nota:** Hai saltato il wizard o fatto clic sbagliato? Non è perso nulla — Feed Settings, **Options → Symbol Manage** e **Options → Settings** coprono le stesse cose in seguito. Vedi [[free-delayed-data-feed]].

### 3. Connetti il feed

Apri il selettore del feed in alto a destra della barra principale e fai clic sulla tua connessione. Attendi il **pallino verde** — significa che i dati stanno arrivando. Curioso di sapere com'è fatta una connessione dietro le quinte? Esplora il mock di Feed Settings qui sotto — il menu a discesa della sorgente cambia quali campi richiede ogni provider.

[WIDGET: feed-navigator]

### 4. Controlla Symbol Manage

Apri **Options → Symbol Manage**. La colonna **Data Feed** di ogni riga di exchange dovrebbe mostrare la tua connessione. Se manca un exchange che ti interessa, fai clic su **Subscribe** e aggiungilo. Provalo nel mock qui sotto — sottoscrivi un exchange e usa l'icona a catena per cambiarne il feed. Dettagli: [[symbol-manage]].

[WIDGET: symbol-manage-mock]

### 5. Apri il tuo primo grafico

Fai clic su **New → Price Chart**, scegli **CME** nella finestra Select Instrument, seleziona un simbolo — **MES** (Micro S&P) o **MNQ** (Micro Nasdaq) sono buoni contratti per iniziare — e fai clic su **Select**. Attendi qualche secondo mentre il grafico si costruisce. Guida completa: [[first-chart]].

[SCREENSHOT: La finestra Select Instrument con CME selezionato e MES MICRO SP evidenziato | dc-it-quick-start-first-trade-03.png]

### 6. Aggiungi il tuo primo indicatore

1. Fai clic sull'icona a grafico a barre nella toolbar in alto a sinistra del grafico per aprire il pannello Indicators.
2. Fai clic sul pulsante verde **Indicators**. Si apre l'Indicator List con le schede per categoria (All, Volume, Statistics, Oscillator, Overlay, Utility, Third) e una casella di ricerca.
3. Cerca **Volume** e fai clic sull'icona **+** accanto ad esso. L'indicatore appare sotto il grafico.

[SCREENSHOT: La finestra Indicator List con la casella di ricerca che mostra Volume e l'icona + accanto all'indicatore Volume evidenziata | dc-it-quick-start-first-trade-04.png]

Come gli indicatori vengono disposti e configurati: [[indicator-layout]] e [[volume]].

### 7. Attiva il pannello di trading con un conto SIM

1. Attiva l'interruttore **Trading panel** nella barra inferiore del grafico. Il pannello si apre sul lato destro del grafico.
2. Imposta **Broker** su **SIM** e scegli un conto di simulazione in **Account**. Se non ne esiste nessuno, creane uno in **Options → Settings → Sim Account** — vedi [[simulation-accounts]].

[SCREENSHOT: Il pannello di trading del grafico con Broker impostato su SIM, un conto selezionato e la quantità impostata a 1 | dc-it-quick-start-first-trade-05.png]

### 8. Inserisci il tuo primo ordine bracket

1. Imposta il campo quantità a **1**.
2. Attiva l'interruttore **OCO Strategy** e imposta **Mode** su **SL/TP**.
3. Inserisci le distanze in tick di **SL** (stop loss) e **TP** (take profit) — parti larghe mentre stai imparando.
4. Fai clic su **BUY MKT**. Il tuo ingresso viene eseguito sul conto SIM e gli ordini di stop loss e take profit vengono agganciati come bracket — quando uno viene eseguito, l'altro viene cancellato.

[SCREENSHOT: Il pannello di trading con OCO Strategy attivo, Mode impostato su SL/TP, i valori in tick di SL e TP inseriti e il pulsante BUY MKT evidenziato | dc-it-quick-start-first-trade-06.png]

> **Nota:** Sul feed gratuito ritardato le tue esecuzioni si basano su prezzi di 15 minuti indietro rispetto al mercato live — va bene per imparare la piattaforma, non per giudicare una strategia. Vedi [[oco-strategies]] per il significato di ogni impostazione del bracket, e [[trading-from-chart]] per inserire ordini direttamente sul grafico.

Per chiudere tutto in una volta, fai clic su **Cancel and Flat** — appiattisce la posizione e cancella gli ordini bracket rimanenti.

## Verifica che abbia funzionato

Dopo il clic su **BUY MKT**: **Open Qty** mostra 1, **Open P/L** si muove con il mercato, e il tuo stop e il tuo target sono visibili come ordini attivi nella [[orders-window]]. Dopo **Cancel and Flat**, Open Qty torna a 0 e non rimane alcun ordine attivo.

Hai ora toccato ogni parte fondamentale della piattaforma: installazione, dati, grafici, indicatori e ordini.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| L'installer non parte o fallisce | [[installation-problems]] |
| "Invalid License" all'attivazione | [[license-issues]] |
| L'elenco Select Instrument è vuoto | [[symbol-manage]] |
| Grafico aperto ma il prezzo non si muove | [[feed-connected-chart-not-moving]] |
| Tutto funziona ma i dati sembrano vecchi | Normale sul feed ritardato — [[free-delayed-data-feed]]; per i dati live vedi [[buy-data-feed]] |

## Articoli correlati

- [[welcome-to-deepcharts]]
- [[install-deepcharts]]
- [[free-delayed-data-feed]]
- [[simulation-accounts]]
- [[trading-from-chart]]
- [[oco-strategies]]