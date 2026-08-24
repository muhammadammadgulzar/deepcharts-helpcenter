---
title: "Connettere Apex Trader Funding"
slug: "connect-apex"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Collega il tuo conto Rithmic di Apex Trader Funding (Evaluation o Funded) a DeepCharts, dalla firma dell'accordo in R Trader Pro ai grafici in tempo reale."
keywords: ["apex", "apex trader funding", "connettere apex", "apex rithmic", "apex eval", "apex funded", "server apex", "credenziali apex"]
source_hash: "f7578a5e85f9dfbb"
ai_translated: true
source_hash: "f7578a5e85f9dfbb"
---
Alla fine di questa guida il tuo conto Apex Trader Funding sarà collegato a DeepCharts con grafici in tempo reale sullo schermo. I conti Evaluation e Funded usano un processo identico — non esiste un flusso separato riservato ai conti funded.

> **Nota:** DeepCharts supporta solo i conti **Rithmic** di Apex. Le eventuali varianti CQG, dxFeed o IBKR offerte da Apex non possono essere collegate.

## Prima di iniziare

- [ ] Un conto Apex Rithmic attivo (Evaluation o Funded). Se non ne hai ancora uno, acquistalo prima da Apex Trader Funding, poi torna qui
- [ ] Lo username e la password **Rithmic** rilasciati da Apex. Arrivano nell'email di benvenuto di Apex e **non** sono gli stessi del tuo login per il sito web di Apex — vedi [[fix-username-password]] per capire perché confonderli è la causa numero uno delle connessioni fallite
- [ ] DeepCharts installato e attivato — vedi [[install-deepcharts]]
- [ ] R Trader Pro, che installerai al passaggio 1 per firmare l'accordo sui dati di mercato — vedi [[sign-market-data-agreement]] per il contesto

> **Suggerimento:** Non trovi le tue credenziali Rithmic? Cerca "Rithmic" nella tua casella di posta tra le email di Apex — l'email di benvenuto le contiene, e hanno un aspetto diverso dal tuo login per il sito web di Apex.

## Passaggi

### Parte A — Firma l'accordo in R Trader Pro

L'accordo sui dati di mercato Rithmic deve essere firmato prima che DeepCharts possa connettersi. Senza di esso, il punto della connessione resta rosso anche con le credenziali corrette.

1. Vai su https://www.rithmic.com/rtraderpro e fai clic sul pulsante **Download R | Trader Pro**, poi esegui l'installer con le opzioni predefinite.

2. Apri R Trader Pro. La schermata di accesso mostra **due moduli di login affiancati** — è normale. Compila **entrambi** i moduli con gli stessi valori:
   - **System:** seleziona **Apex**
   - **Gateway:** seleziona la località più vicina a te (Chicago, Europe, Singapore e così via) — un gateway lontano funziona comunque ma aggiunge latenza
   - **Username / Password:** le tue credenziali Rithmic dall'email di benvenuto di Apex

[SCREENSHOT: Schermata di accesso di R Trader Pro con entrambi i moduli affiancati compilati in modo identico, il menu a discesa System impostato su Apex e il menu a discesa Gateway visibile | dc-it-connect-apex-01.png]

> **Nota:** Il campo System e il campo Server sono campi diversi — anche il campo Server elenca `Apex` insieme a `Paper Trading`. Per firmare l'accordo, ciò che conta è **System = Apex**.

3. Fai clic su **Login**. Quando ti viene chiesto il tuo status per i dati di mercato, i trader retail normalmente selezionano **Non-Professional**.

4. Leggi e accetta l'accordo sui dati di mercato che compare. Se hai chiuso R Trader Pro prima che apparisse la richiesta, accedi di nuovo — la richiesta ricomparirà.

[SCREENSHOT: Richiesta dell'accordo sui dati di mercato di R Trader Pro dopo l'accesso, con il pulsante di accettazione visibile | dc-it-connect-apex-02.png]

5. Solo alla prima configurazione: apri **Window → Preferences → Performance** e trascina entrambi i cursori — **Quotes** e **Order Book** — al massimo, poi fai clic su **Apply** e **OK**. Questo rimuove il limite di ricezione dati di Rithmic, che altrimenti ritarda i grafici durante i periodi di mercato ad alto volume.

[SCREENSHOT: Finestra Preferences di R Trader Pro, scheda Performance, cursori Quotes e Order Book entrambi al massimo | dc-it-connect-apex-03.png]

6. Chiudi R Trader Pro. L'accordo è ora memorizzato sul lato Rithmic — non serve tenere R Trader Pro in esecuzione mentre usi DeepCharts.

### Parte B — Connettiti in DeepCharts

7. In DeepCharts, fai clic su **Select Connection** nella toolbar superiore, poi fai clic su **Feed Settings** in fondo al menu a discesa.

[SCREENSHOT: Toolbar superiore di DeepCharts con il menu a discesa Select Connection aperto e Feed Settings evidenziato in fondo | dc-it-connect-apex-04.png]

8. Fai clic su **Add Connection** e compila il modulo:

| Campo | Cosa inserire |
|---|---|
| **Name** | Un'etichetta qualsiasi che riconoscerai, per esempio "Apex Live" o "Apex Eval". |
| **Feed Source** | **Rithmic RAPI** — il menu a discesa mostra anche un'opzione Rithmic beta; scegli RAPI. |
| **Username** | Il tuo username Rithmic dall'email di benvenuto di Apex — non il tuo login per il sito web di Apex. |
| **Password** | La tua password Rithmic dalla stessa email. |
| **Server** | **Apex** — non Paper Trading né altre voci. |
| **Gateway** | La località più vicina a te (per esempio Chicago Area, Europe, Singapore). |

Lascia tutti gli altri campi del modulo come sono. Usa il mock interattivo di Feed Settings qui sotto per vedere come funziona il modulo — scegli Rithmic come Feed Source e comparirà il campo Server:

[WIDGET: feed-navigator]

> **Attenzione:** Il menu a discesa Server contiene diverse opzioni, tra cui `Paper Trading`. Per Apex deve essere esattamente **Apex** — selezionare Paper Trading qui è la seconda causa più comune di un punto di connessione rosso, subito dopo le credenziali sbagliate.

9. Fai clic su **Save**.

10. Tornato nella toolbar principale, fai di nuovo clic su **Select Connection**. Il tuo nuovo feed Apex compare nel menu a discesa con il nome che gli hai dato — fai clic per connetterti.

11. Instrada i tuoi exchange verso il feed: apri **Options → Symbol Manage** e assicurati che gli exchange su cui fai trading (per esempio CME per ES e NQ) siano sottoscritti e mappati sulla connessione Apex — l'icona a catena su una riga cambia da quale feed viene caricata. Se salti questo passaggio, i grafici o non mostrano dati o caricano vecchi dati in cache e sembrano congelati, che è di gran lunga la causa più frequente delle segnalazioni "i grafici non si muovono". Provalo nel mock interattivo qui sotto — fai clic sull'icona a catena per cambiare ciclicamente il feed di una riga. La guida completa è in [[symbol-manage]].

[WIDGET: symbol-manage-mock]

## Verifica che abbia funzionato

- Entro circa 10 secondi dalla connessione, il punto della connessione diventa **verde**.
- Apri un grafico (**New → Price Chart**, scegli ES o NQ) e verifica che il prezzo si aggiorni in tempo reale.

Se un grafico era già aperto mentre sistemavi Symbol Manage e sembra ancora congelato, chiudilo e riaprilo tramite **New → Price Chart** — si ricaricherà dal feed instradato correttamente.

Una volta che i grafici si caricano, puoi inserire ordini tramite il Trading Panel in basso a destra del grafico selezionando il tuo conto Apex nei campi del pannello — vedi [[trading-from-chart]].

## Se qualcosa è andato storto

Se il punto resta rosso, verifica questi punti in ordine — coprono quasi ogni caso:

1. **Credenziali sbagliate** — hai usato il login del sito web di Apex invece delle credenziali Rithmic dall'email di benvenuto di Apex. È la causa più comune. Vedi [[fix-username-password]].
2. **Accordo non firmato** — l'accordo sui dati di mercato non è mai stato accettato in R Trader Pro. Vedi [[fix-log-in-using-rtrader]] e [[sign-market-data-agreement]].
3. **Server sbagliato** — il campo Server deve essere esattamente **Apex**, non Paper Trading. Vedi [[fix-bad-server]].
4. **Firewall o antivirus che blocca Rithmic** — vedi [[fix-unable-to-establish-connection]].

Altri sintomi:

- Il punto è verde ma i grafici non si muovono o non mostrano dati — [[feed-connected-chart-not-moving]] (ricontrolla prima Symbol Manage)
- I grafici restano indietro durante i mercati intensi — [[data-delayed-lagging]] (verifica che la Feed Source sia Rithmic RAPI e che i cursori Performance di R Trader Pro siano al massimo)

Ancora rosso dopo tutti e quattro i controlli? Apri **Options → Show Logs** in DeepCharts, copia gli eventuali messaggi di errore e includili quando contatti il supporto — vedi [[diagnostic-report]] e [[get-help]].

## Articoli correlati

- [[connect-rithmic-prop-firm]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[feed-connected-chart-not-moving]]
- [[trading-from-chart]]
- [[compatibility-guide]]