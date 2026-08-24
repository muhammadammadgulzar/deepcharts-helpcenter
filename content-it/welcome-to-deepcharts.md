---
title: "Benvenuto in DeepCharts: tour della piattaforma"
slug: "welcome-to-deepcharts"
category: "Getting Started"
subcategory: ""
type: "concept"
difficulty: "beginner"
time: "6 min read"
description: "Un tour guidato della barra principale di DeepCharts, dei suoi menu e dei tipi di finestra, e dove andare dopo l'installazione."
keywords: ["tour della piattaforma", "primi passi", "barra principale", "panoramica", "nuovo su deepcharts", "cos'è deepcharts", "menu", "finestre"]
source_hash: "0b163fc89d6adfb7"
ai_translated: true
source_hash: "0b163fc89d6adfb7"
---
DeepCharts è una piattaforma Windows per l'analisi orderflow e il trading. Invece di un'unica schermata fissa, ti offre una piccola barra di controllo — la barra principale — da cui apri esattamente le finestre di cui hai bisogno: grafici dei prezzi, DOM, tape reader, grafici a profilo, scanner e strumenti di trading.

Questo tour percorre la barra principale menu per menu, spiega a cosa serve ogni tipo di finestra e ti indica l'articolo giusto per ogni passo successivo. Non devi memorizzare nulla qui — l'obiettivo è che, quando più avanti vedrai l'etichetta di un menu, tu sappia già cosa c'è dietro.

## L'idea in un paragrafo

Pensa a un desk di trading professionale: un trader potrebbe tenere un grafico dei prezzi sul monitor di sinistra, una scala di profondità del mercato al centro e un tape Time & Sales a destra — ogni schermo fa bene un solo lavoro. DeepCharts funziona allo stesso modo. La piattaforma in sé è un coordinatore leggero (la barra principale); tutto il resto è una finestra specializzata che apri, disponi e salvi come workspace. I dati di mercato arrivano da un feed dati che colleghi (live o gratuito in differita), e ogni finestra legge da quello stesso feed.

## Perché interessa ai trader

- **Costruisci il tuo schermo.** Nulla ti viene imposto — il workspace di uno scalper e quello di uno swing trader possono apparire completamente diversi nella stessa piattaforma.
- **Prima di tutto l'orderflow.** Oltre ai classici grafici a candele, DeepCharts include footprint, Volume Profile, DOM e strumenti per il tape progettati attorno a chi compra e chi vende — vedi [[orderflow-101]] per i concetti.
- **Un feed, molte viste.** Colleghi un feed dati una volta e ogni grafico, DOM e scanner lo usa. Il feed gratuito in differita ti permette di esplorare tutto prima di pagare per i dati — vedi [[free-delayed-data-feed]].
- **I layout persistono.** Le disposizioni delle finestre vengono salvate come workspace, così la sessione di domani riparte da dove è finita quella di oggi — vedi [[templates-workspaces]].

## Come funziona

Tutto parte dalla barra principale — la barra sottile in cima allo schermo dopo l'avvio dell'app. Qui sotto trovi una **replica funzionante**: fai clic su ogni menu, passa il mouse sulle voci e fai clic su una voce qualsiasi per saltare direttamente alla sua guida.

[WIDGET: main-bar]

### La barra principale

Da sinistra a destra la barra principale contiene i menu — **New**, **Options**, **Trading**, **Window**, **About us** e un menu di aiuto **?** — più due controlli che userai in continuazione:

- Il selettore **Workspace** — crea, salva e apri layout di finestre (**New**, **Save as**, **Open**; i layout possono essere salvati in locale, nel cloud o condivisi).
- Il selettore **Feed** — mostra la tua connessione dati attiva con un pallino di stato colorato. Verde significa connesso; quando non c'è nulla di connesso riporta **Select a connection**. Il menu a discesa elenca le tue connessioni salvate più una voce **Feed Settings** per aggiungerne di nuove — provalo nella replica qui sopra: fai clic su **● dxFeed - 15m** all'estremità destra della barra.

### Il menu New — aprire le finestre

**New** è dove nasce ogni finestra di analisi:

| Voce di menu | Cosa apre |
|---|---|
| **Price Chart** | La finestra del grafico standard — candele, indicatori, strumenti di disegno. Vedi [[chart-window]]. |
| **Book** → **Adv. Dom** / **Horizontal dom** / **Vertical dom** | Scale di profondità del mercato in tre layout. Vedi [[advanced-dom]]. |
| **Adv. Time And Sales** | Il tape — ogni scambio eseguito nel momento in cui viene stampato. Vedi [[adv-time-and-sales]]. |
| **Profile Chart** | Analisi TPO e Volume Profile. Vedi [[profile-chart-window]]. |
| **Scanner** | Scansiona il mercato alla ricerca di condizioni che definisci tu. Vedi [[scanner-window]]. |
| **Correlation Viewer** | Confronta come gli strumenti si muovono insieme. Vedi [[correlation-viewer]]. |

> **Suggerimento:** Apri il menu **New** nella replica interattiva in cima a questa pagina — ogni voce lì rimanda alla guida completa della sua finestra.

### Il menu Options — configurazione e dati

**Options** contiene la configurazione della piattaforma e la gestione dei dati: **Symbol Manage** (mappa gli exchange sul tuo feed dati — la finestra di configurazione più importante in assoluto, vedi [[symbol-manage]]), **Settings** (lingua, tema, fuso orario, suoni, scorciatoie — vedi [[customize-language-theme-sounds]] e [[keyboard-shortcuts]]), **Replay Tick Data** (esercitati su mercati registrati, vedi [[replay-data]]), **Symbols Rollover** (vedi [[symbol-rollover]]), un sottomenu **Database** (vedi [[database-optimization]]), **Show Log**, **Show Calendar** (calendario economico) e un sottomenu **Tool**.

### Il menu Trading — ordini e conti

Il menu **Trading** ospita i tuoi strumenti di esecuzione, tra cui la finestra **Orders** che elenca ogni ordine che hai inserito ([[orders-window]]), **Portfolio** con i saldi dei conti, il P/L e il responsabile del rischio integrato ([[portfolio-wallet]], [[risk-manager]]), **Signal Performance** per le statistiche sulle tue operazioni passate ([[performance-analysis]]) e il **Trade Copier** per replicare gli ordini su più conti ([[trade-copier]]). L'inserimento vero e proprio degli ordini avviene sul grafico stesso tramite il pannello di trading — vedi [[trading-from-chart]].

### Il menu Window

**Window** gestisce le finestre aperte, inclusa la voce **Position windows** — una finestra di dialogo che dispone i tuoi tipi di finestra sui monitor, utile nelle configurazioni multi-schermo. Vedi [[multi-monitor-windows]].

### About us e aiuto

**About us** contiene **Calendar events** (la finestra **Deepchart Events** — partecipa alle sessioni live o guarda le registrazioni dall'interno dell'app), **Info** e **Website**. Il menu **?** ha due voci: **Guides**, che apre questo help center nel tuo browser, e **Contact Support**, che apre la finestra di diagnostica — vedi [[get-help]] e [[diagnostic-report]].

## Vedilo in DeepCharts

Ogni tipo di finestra del tour ha il proprio articolo di riferimento:

- Grafici: [[chart-window]], [[price-chart-settings]], [[drawing-tools]]
- Finestre orderflow: [[advanced-dom]], [[adv-time-and-sales]], [[profile-chart-window]]
- Analisi: [[scanner-window]], [[correlation-viewer]]
- Trading: [[trading-from-chart]], [[orders-window]], [[portfolio-wallet]], [[risk-manager]]

## Esempio pratico

Una tipica prima ora con DeepCharts si presenta così. Installi la piattaforma e attivi la licenza ([[install-deepcharts]]). Al primo avvio parte una procedura guidata in tre passi: scegli il feed dati gratuito in differita di 15 minuti ([[free-delayed-data-feed]]), confermi la mappatura degli exchange nel passo Symbol Manage integrato e scegli un tema e un profilo di suoni per gli avvisi. Il pallino del selettore Feed diventa verde. Apri **New → Price Chart**, scegli uno strumento e le candele iniziano a disegnarsi ([[first-chart]]). Da lì aggiungi un indicatore, apri un DOM accanto al grafico e salvi il layout come tuo primo workspace. Costo totale finora: zero — il feed in differita è gratuito.

## Letture errate comuni

- **"DeepCharts include i dati di mercato live."** Non è così — la piattaforma si collega a un feed dati che porti tu (o a quello gratuito in differita). I grafici restano vuoti finché un feed non è connesso e gli exchange non sono mappati in [[symbol-manage]].
- **"DeepCharts è un broker."** No. Si collega a broker, prop firm e feed dati — vedi [[compatibility-guide]]. Puoi anche fare trading in simulazione su un conto SIM integrato senza alcun broker ([[simulation-accounts]]).
- **"Il mio simbolo manca, il feed dev'essere rotto."** Di solito l'exchange semplicemente non è sottoscritto in **Options → Symbol Manage** — il selettore degli strumenti elenca solo gli exchange sottoscritti.
- **"Ho saltato la procedura guidata, quindi devo reinstallare."** Tutto ciò che fa la procedura guidata può essere rifatto in seguito tramite **Feed Settings**, **Options → Symbol Manage** e **Options → Settings**.

## Approfondisci

Segui il percorso Getting Started in ordine: [[system-requirements]] → [[install-deepcharts]] → [[free-delayed-data-feed]] → [[first-chart]] → [[simulation-accounts]] — oppure fai il singolo walkthrough conclusivo [[quick-start-first-trade]] che li concatena tutti in un'unica sessione. Quando sei pronto per i dati live, parti da [[buy-data-feed]].

## Articoli correlati

- [[quick-start-first-trade]]
- [[install-deepcharts]]
- [[free-delayed-data-feed]]
- [[first-chart]]
- [[symbol-manage]]
- [[compatibility-guide]]