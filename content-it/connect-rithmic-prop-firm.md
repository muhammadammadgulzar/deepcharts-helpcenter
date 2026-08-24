---
title: "Collega qualsiasi conto prop firm Rithmic (tabella dei server)"
slug: "connect-rithmic-prop-firm"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Un unico flusso di configurazione per ogni prop firm Rithmic — trova il valore Server della tua firm nella tabella, firma il contratto in R Trader Pro e collegati a DeepCharts."
keywords: ["prop firm rithmic", "lista server rithmic", "server prop firm", "rithmic paper trading", "bulenox", "bluenox", "takeprofittrader", "earn2trade", "oneuptrader", "tradeify", "the trading pit", "configurazione conto funded"]
source_hash: "7a075c9c54643bc2"
ai_translated: true
source_hash: "7a075c9c54643bc2"
---
Ogni conto prop firm Rithmic si collega a DeepCharts nello stesso modo — l'unica cosa che cambia da una firm all'altra è il valore **Server** da selezionare. Alla fine di questa guida il feed della tua prop firm sarà collegato e i grafici saranno in streaming live.

I conti Evaluation e Funded usano un flusso identico — non esiste una configurazione separata solo per i conti funded.

> **Nota:** Apex Trader Funding ha una guida dedicata: [[connect-apex]]. Se la tua prop firm ti ha fornito un account dxFeed invece di Rithmic (MyFundedFutures, Aqua Futures, Goat Funded Futures e altre), segui [[connect-dxfeed-prop-firm]].

## Prima di iniziare

- [ ] Un conto prop firm attivo (Evaluation o Funded — si collegano entrambi allo stesso modo) — acquistalo prima dalla tua firm se non l'hai già fatto
- [ ] Il nome utente e la password Rithmic che la tua firm ti ha fornito. Arrivano nell'email di benvenuto della firm e **non** sono gli stessi del login per il sito web della firm — vedi [[fix-username-password]] per capire perché è importante
- [ ] R Trader Pro installato per firmare il contratto sui dati di mercato — vedi [[sign-market-data-agreement]]
- [ ] DeepCharts installato e attivato — vedi [[install-deepcharts]]
- [ ] Verificato che la tua firm sia supportata — vedi [[compatibility-guide]]

> **Attenzione:** Non tutte le prop firm possono essere collegate. TopStep, FTMO e FundedNext Futures non rilasciano credenziali utilizzabili con DeepCharts. I conti CQG delle prop firm funzionano solo quando la firm rilascia il conto CQG direttamente da CQG — un conto CQG che arriva tramite Tradovate o NinjaTrader non può essere collegato (vedi [[connect-cqg]]).

## Passaggi

1. Trova il valore **Server** della tua firm nella tabella qui sotto. Userai questo stesso valore due volte: come **System** in R Trader Pro quando firmi il contratto e come **Server** nelle Feed Settings di DeepCharts.

| Prop firm | Valore Server |
|---|---|
| Apex Trader Funding (vedi [[connect-apex]]) | Apex |
| 4PropTrader | 4PropTrader |
| 10X Futures | 10XFutures |
| Bulenox | Bulenox |
| DayTraders.com | DayTraders.com |
| Earn2Trade | Earn2Trade |
| FundedFuturesNetwork | FundedFuturesNetwork |
| Legends Trading | LegendsTrading |
| Lucid Trading | LucidTrading |
| MES Capital | MES Capital |
| PropShopTrader | PropShopTrader |
| The Trading Pit | TheTradingPit |
| Thrive Trading | ThriveTrading |
| TradeFundrr | TradeFundrr |
| Tradeify | Tradeify [CONFIRM: exact spelling of the Tradeify entry in the Server dropdown] |
| tradesea | tradesea (in minuscolo nel menu a discesa) |
| BlueSky Trading (conti Rithmic) | Rithmic Paper Trading |
| OneUpTrader | Rithmic Paper Trading |
| TakeProfitTrader | Rithmic Paper Trading |
| Qualsiasi altra prop firm Rithmic | Rithmic Paper Trading |

> **Suggerimento:** Occhio all'ortografia — il nome corretto della firm è "Bulenox" (spesso scritto per errore "Bluenox") e la voce del server è "TradeFundrr" senza la seconda "e".

### Se la tua firm non compare nel menu a discesa Server

Seleziona **Rithmic Paper Trading** — è il server predefinito di Rithmic per i conti solo feed dati e per le prop firm più piccole. Usalo sia in R Trader Pro sia in DeepCharts. Nonostante il nome, i dati sono reali e live.

2. Firma il contratto sui dati di mercato Rithmic in R Trader Pro. Senza di esso, la connessione resta rossa anche con credenziali corrette. Scarica R Trader Pro da https://www.rithmic.com/rtraderpro (fai clic su **Download R | Trader Pro**), aprilo e compila **entrambi** i moduli di login affiancati con gli stessi valori: **System** = il valore server della tua firm dalla tabella, **Gateway** = la località più vicina a te, e il nome utente e la password Rithmic dall'email di benvenuto della tua firm. Fai clic su **Login**, seleziona il tuo status per i dati di mercato quando richiesto (i trader retail normalmente selezionano **Non-Professional**), poi leggi e accetta i contratti. Tutti i dettagli in [[sign-market-data-agreement]].

[SCREENSHOT: Schermata di login di R Trader Pro con entrambi i moduli compilati, il menu a discesa System aperto che mostra le voci server delle prop firm e il campo Gateway visibile | dc-it-connect-rithmic-prop-firm-01.png]

3. Solo alla prima configurazione: mentre sei in R Trader Pro, apri **Window → Preferences → Performance** e trascina entrambi i cursori — **Quotes** e **Order Book** — al massimo, poi fai clic su **Apply** e **OK**. Questo rimuove il limite di ricezione dati di Rithmic; con un limite impostato, i grafici possono rallentare durante i periodi di mercato ad alto volume. Chiudi R Trader Pro quando hai finito.

[SCREENSHOT: Scheda Performance delle Preferences di R Trader Pro con entrambi i cursori Quotes e Order Book al massimo | dc-it-connect-rithmic-prop-firm-02.png]

4. In DeepCharts, fai clic su **Select Connection** nella toolbar superiore, poi su **Feed Settings** in fondo al menu a discesa.

5. Fai clic su **Add Connection** e compila il modulo:

| Campo | Cosa inserire |
|---|---|
| **Name** | Un'etichetta qualsiasi, per esempio "MyFirm Eval" o "MyFirm Live". |
| **Feed Source** | **Rithmic RAPI** (il menu a discesa mostra anche **Rithmic Wss - beta** — scegli RAPI). |
| **Username** | Il nome utente Rithmic dall'email di benvenuto della tua firm — non il login del sito web della firm. |
| **Password** | La password Rithmic dalla stessa email. |
| **Server** | Il valore della tua firm dalla tabella del passaggio 1 — esattamente come scritto. |
| **Gateway** | **Automatic** (predefinito), oppure la regione più vicina a te per una latenza inferiore. |

Lascia tutti gli altri campi come sono. Prova il mock interattivo delle Feed Settings qui sotto — imposta la Feed Source su Rithmic e guarda comparire il campo Server:

[WIDGET: feed-navigator]

> **Suggerimento:** Se conti prop vecchi o scaduti affollano il tuo elenco conti, attiva l'interruttore **Show only active accounts** nella sezione LOGIN INFO delle Feed Settings.

6. Fai clic su **Save**.

7. Fai di nuovo clic su **Select Connection** e fai clic sul tuo nuovo feed per collegarti.

8. Instrada gli exchange verso il feed: apri **Options → Symbol Manage** e verifica che gli exchange su cui fai trading siano sottoscritti e mappati su questa connessione (l'icona a forma di catena su una riga ne cambia il feed). Provalo nel mock qui sotto — fai clic sull'icona a catena su una riga per cambiare ciclicamente il feed mappato. Guida completa in [[symbol-manage]].

[WIDGET: symbol-manage-mock]

## Verifica che abbia funzionato

- L'indicatore di connessione diventa **verde** entro circa 10 secondi dalla connessione.
- Apri **New → Price Chart**, scegli un simbolo coperto dal tuo conto (per esempio ES o NQ) e verifica che il prezzo si aggiorni live.

Una volta che i grafici si caricano, puoi inserire ordini tramite il Trading Panel in basso a destra del grafico selezionando il conto della tua prop firm — vedi [[trading-from-chart]].

## Se qualcosa è andato storto

Le tre cause qui sotto coprono quasi tutte le connessioni prop firm fallite, in quest'ordine:

1. **Credenziali sbagliate** — hai inserito il login del sito web della firm invece delle credenziali Rithmic dell'email di benvenuto. Vedi [[fix-username-password]].
2. **Contratto non firmato** — il contratto sui dati di mercato non è mai stato accettato dentro R Trader Pro. Vedi [[fix-log-in-using-rtrader]] e [[sign-market-data-agreement]].
3. **Valore Server sbagliato** — il campo Server non corrisponde esattamente alla voce della tua firm nella tabella. Vedi [[fix-bad-server]].

Altri sintomi:

- Il puntino è verde ma i grafici non si muovono — [[feed-connected-chart-not-moving]]
- Connection failed — unable to establish connection — [[fix-unable-to-establish-connection]]
- I grafici rallentano nei momenti di mercato intenso — [[data-delayed-lagging]] (verifica che la Feed Source sia Rithmic RAPI e che i cursori di R Trader Pro siano al massimo)

Se nessuno di questi casi corrisponde, raccogli i dettagli che servono al supporto — vedi [[diagnostic-report]].

## Articoli correlati

- [[connect-apex]]
- [[connect-rithmic]]
- [[connect-dxfeed-prop-firm]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[compatibility-guide]]