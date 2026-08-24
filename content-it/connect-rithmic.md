---
title: "Come collegare un feed dati Rithmic"
slug: "connect-rithmic"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Collega un feed dati Rithmic a DeepCharts — firma il contratto in R Trader Pro, inserisci le tue credenziali con il valore Server corretto e verifica i grafici live."
keywords: ["rithmic", "rithmic rapi", "collegare rithmic", "configurazione rithmic", "rithmic paper trading", "rythmic", "ritmic", "rithmik", "feed source rithmic mancante", "rithmic wss beta"]
source_hash: "4514d3418e8deedc"
ai_translated: true
source_hash: "4514d3418e8deedc"
---
Alla fine di questa guida avrai un feed dati Rithmic collegato a DeepCharts e un grafico live sullo schermo. La procedura principale riguarda un abbonamento Rithmic acquistato dal sito web di DeepCharts; le sezioni alternative coprono i conti Rithmic rilasciati da un broker o provenienti da un'altra piattaforma di trading.

> **Nota:** Rithmic non vende feed dati direttamente da rithmic.com. Le tue credenziali Rithmic arrivano sempre da una di queste quattro fonti: il sito web di DeepCharts, un broker, una prop firm o un'altra piattaforma di trading. Se il tuo conto proviene da una prop firm, segui invece [[connect-rithmic-prop-firm]] (oppure [[connect-apex]] per Apex Trader Funding).

## Prima di iniziare

Assicurati di avere:

- [ ] DeepCharts installato e attivato — vedi [[install-deepcharts]]
- [ ] Un abbonamento Rithmic attivo con il suo nome utente e la sua password — vedi [[buy-data-feed]] se non ne hai ancora acquistato uno
- [ ] Il contratto sui dati di mercato Rithmic firmato tramite R Trader Pro — vedi [[sign-market-data-agreement]] (i passaggi 2–3 qui sotto riassumono la procedura)
- [ ] Verificato che la fonte del tuo conto sia supportata — vedi [[compatibility-guide]]

## Passaggi

1. Recupera le tue credenziali Rithmic. Per un feed acquistato dal sito web di DeepCharts: accedi su my.deepcharts.com, apri la sezione **Subscriptions** e individua il tuo nome utente e la tua password Rithmic. Tienili a portata di mano — ti serviranno in tutti i passaggi successivi.

[SCREENSHOT: Dashboard DeepCharts su my.deepcharts.com con la sezione Subscriptions aperta e la riga dell'abbonamento Rithmic visibile, area delle credenziali evidenziata (sfocare nome utente/password reali) | dc-it-connect-rithmic-01.png]

2. Firma il contratto sui dati di mercato Rithmic in R Trader Pro. Rithmic richiede che tu accetti i suoi contratti prima che qualsiasi piattaforma di terze parti possa collegarsi — con i contratti non firmati, la connessione fallisce anche con credenziali corrette. Scarica R Trader Pro da https://www.rithmic.com/rtraderpro (fai clic su **Download R | Trader Pro**), installalo e aprilo. Compila **entrambi** i moduli di login con gli stessi valori: il tuo nome utente e la tua password Rithmic, **System** = **Rithmic Paper Trading**, e il **Gateway** più vicino a te. Fai clic su **Login**, scegli il tuo status per i dati di mercato quando richiesto (i trader retail normalmente selezionano **Non-Professional**), poi leggi e accetta ogni contratto finché non compaiono più richieste. La procedura completa è descritta in [[sign-market-data-agreement]].

[SCREENSHOT: Schermata di login di R Trader Pro con i due moduli di login affiancati, entrambi compilati in modo identico, con System impostato su Rithmic Paper Trading e il menu a discesa Gateway visibile | dc-it-connect-rithmic-02.png]

> **Nota:** I contratti sono memorizzati sui server di Rithmic, quindi non devi tenere aperto R Trader Pro mentre usi DeepCharts. Dovrai ripetere l'operazione solo se il tuo conto viene resettato o se Rithmic introduce nuovi contratti obbligatori.

3. Mentre sei in R Trader Pro (solo alla prima configurazione), rimuovi il limite di ricezione dati di Rithmic: apri **Window → Preferences → Performance** e trascina entrambi i cursori — **Quotes** e **Order Book** — al massimo, poi fai clic su **Apply** e **OK**. Con un limite impostato, i grafici possono restare indietro durante i periodi di mercato ad alto volume. Chiudi R Trader Pro quando hai finito.

[SCREENSHOT: Finestra Preferences di R Trader Pro sulla scheda Performance con i cursori Quotes e Order Book entrambi trascinati alla posizione massima | dc-it-connect-rithmic-03.png]

4. In DeepCharts, fai clic su **Select Connection** nella toolbar superiore, poi su **Feed Settings** in fondo al menu a discesa. Si apre la finestra Feed Settings.

[SCREENSHOT: Toolbar principale di DeepCharts con il menu a discesa Select Connection aperto e la voce Feed Settings in fondo evidenziata | dc-it-connect-rithmic-04.png]

5. Fai clic su **Add Connection** e compila il modulo:

| Campo | Cosa inserire |
|---|---|
| **Name** | Un'etichetta che riconoscerai in seguito, per esempio "Rithmic Live". |
| **Feed Source** | **Rithmic RAPI** — l'opzione consigliata. |
| **Username** | Il tuo nome utente Rithmic (non il login del sito web di DeepCharts). |
| **Password** | La tua password Rithmic. |
| **Server** | **Rithmic Paper Trading** per un feed acquistato dal sito web di DeepCharts. |
| **Gateway** | **Automatic** (il predefinito), oppure la regione più vicina a te. |

Lascia ogni altro campo com'è. L'opzione **Include commissions** è attiva per impostazione predefinita — mostra le commissioni nel tuo P/L.

Prova il modulo dal vivo qui sotto — imposta la Feed Source su Rithmic RAPI e guarda comparire i campi Server e Gateway.

[WIDGET: feed-navigator]

> **Nota:** Il menu a discesa Feed Source mostra **Rithmic RAPI** e **Rithmic Wss - beta** — non esiste più un'opzione "Rithmic" semplice, quindi se una guida più vecchia ne menziona una, scegli **Rithmic RAPI**. Se i grafici ti sembrano in ritardo o instabili, verifica di essere su RAPI e non sulla beta Wss.

> **Nota:** "Paper Trading" è solo l'etichetta server di Rithmic per i conti feed dati — i dati che fornisce sono reali e live, identici ai feed Rithmic dei broker e delle prop firm.

Il menu a discesa Gateway offre: Automatic, Chicago Area, Seoul, Mumbai, Hong Kong, Sao Paolo, Singapore, Sydney, Tokyo, Frankfurt, Europe, Cape Town, NYC Area e US West. Un gateway lontano funziona comunque ma aggiunge latenza — se sei lontano da Chicago e i dati sembrano lenti, scegli la regione più vicina a te (per esempio Europe o Frankfurt per gli utenti UE, Singapore o Mumbai per l'Asia) e ricollegati.

### Se il tuo conto Rithmic proviene da un broker

Per i conti Rithmic rilasciati da AMP Futures, EdgeClear, Ironbeam, Phillips Capital o Optimus Futures, la configurazione è identica tranne il campo **Server**: seleziona **Rithmic 01** invece di Rithmic Paper Trading. Usa lo stesso valore nel campo System quando firmi il contratto in R Trader Pro.

### Se le tue credenziali Rithmic provengono da un'altra piattaforma di trading

Le credenziali Rithmic rilasciate tramite un'altra piattaforma di orderflow o Heatmap (Quantower, Sierra Chart, MotiveWave, ATAS, NinjaTrader e simili) funzionano con DeepCharts. Usa **Server** = **Rithmic Paper Trading** e assicurati che il contratto sia firmato in R Trader Pro con lo stesso valore nel campo System.

> **Attenzione:** Solo le credenziali Rithmic si trasferiscono in questo modo dalle altre piattaforme. Le credenziali dxFeed rilasciate tramite altre piattaforme non possono essere usate con DeepCharts — per dxFeed devi acquistare tramite il sito web di DeepCharts o direttamente da dxfeed.com selezionando DeepCharts come piattaforma (vedi [[connect-dxfeed]]).

### Se il tuo conto Rithmic proviene da una prop firm

Segui [[connect-rithmic-prop-firm]] — ogni firm usa il proprio valore Server dedicato, elencato nella tabella di quell'articolo. Apex Trader Funding ha una guida dedicata: [[connect-apex]].

6. Fai clic su **Save**.

7. Tornato nella toolbar principale, fai di nuovo clic su **Select Connection** — il tuo nuovo feed Rithmic compare ora nel menu a discesa con il nome che gli hai dato. Fai clic per collegarti.

8. Instrada gli exchange verso il nuovo feed: apri **Options → Symbol Manage** e assicurati che gli exchange su cui fai trading siano sottoscritti e mappati su questa connessione Rithmic (l'icona a forma di catena su una riga cambia da quale feed quell'exchange carica i dati). Il selettore degli strumenti mostra solo gli exchange che hai sottoscritto. Tutti i dettagli in [[symbol-manage]].

Prova la mappatura qui sotto — fai clic sull'icona a catena su una riga per cambiare ciclicamente da quale feed l'exchange carica i dati.

[WIDGET: symbol-manage-mock]

9. Apri un grafico: fai clic su **New** nel menu superiore, poi su **Price Chart**, seleziona uno strumento (per esempio ES o NQ) e conferma.

## Verifica che abbia funzionato

- Entro circa 10 secondi dalla connessione, l'indicatore di connessione diventa **verde**.
- Il grafico che hai aperto carica le candele e il prezzo si aggiorna live.

[SCREENSHOT: Toolbar principale di DeepCharts con l'indicatore di connessione verde accanto al nome del feed Rithmic, con un grafico ES live che si aggiorna sullo sfondo | dc-it-connect-rithmic-05.png]

## Se qualcosa è andato storto

| Sintomo | Dove andare |
|---|---|
| Connection failed — check username and password | [[fix-username-password]] — la causa più comune è l'inserimento di un login del sito web al posto delle credenziali Rithmic |
| Connection failed — bad server | [[fix-bad-server]] — il valore Server non corrisponde alla fonte del tuo conto |
| Un messaggio ti chiede di accedere con R Trader o R Trader Pro | [[fix-log-in-using-rtrader]] — il passaggio del contratto è stato saltato o è incompleto |
| L'indicatore diventa giallo con "Expert not attached" | [[fix-rithmic-expert-not-attached]] |
| Connection failed — unable to establish connection | [[fix-unable-to-establish-connection]] |
| Il puntino è verde ma il grafico non si muove | [[feed-connected-chart-not-moving]] — quasi sempre un problema di instradamento in Symbol Manage |
| I grafici si caricano ma rallentano nei momenti di mercato intenso | [[data-delayed-lagging]] — verifica che la Feed Source sia Rithmic RAPI e che i cursori Performance di R Trader Pro siano al massimo |

## Articoli correlati

- [[buy-data-feed]]
- [[sign-market-data-agreement]]
- [[connect-rithmic-prop-firm]]
- [[rtrader-pro-plugin]]
- [[symbol-manage]]
- [[manage-feed-connections]]