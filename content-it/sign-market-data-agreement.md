---
title: "Firma il contratto sui dati di mercato"
slug: "sign-market-data-agreement"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Dove e come firmare il contratto sui dati di mercato per ogni tipo di conto — obbligatorio prima che qualsiasi feed in tempo reale possa connettersi."
keywords: ["contratto dati di mercato", "firmare contratto", "firmare contratto dati di mercato", "r trader pro", "rtrader", "contratto non firmato", "credenziali nascoste", "connessione rossa"]
source_hash: "b68777438df50abd"
ai_translated: true
source_hash: "b68777438df50abd"
---
Alla fine avrai il contratto sui dati di mercato firmato per il tuo conto, che è il prerequisito per qualsiasi connessione a un feed in tempo reale. Gli exchange richiedono a ogni abbonato ai dati di accettare un contratto sui dati di mercato, e finché il tuo non è firmato il puntino di connessione in DeepCharts resta rosso — anche con credenziali perfettamente corrette. Dove firmi dipende interamente da dove proviene il tuo conto, quindi trova il tuo caso qui sotto.

## Prima di iniziare

- Sapere da dove proviene il tuo conto feed (sito web di DeepCharts, prop firm, broker, dxfeed.com) — se non sei sicuro, controlla [[compatibility-guide]].
- Avere a portata di mano le credenziali del feed per il percorso Rithmic (il nome utente e la password Rithmic dall'email di benvenuto del tuo fornitore — non il login del sito web del fornitore).

## Passaggi

1. Trova qui sotto la sezione che corrisponde a dove hai ottenuto il tuo conto e seguila. Le regole in una riga: il dxFeed acquistato sul sito web di DeepCharts si firma nella dashboard di DeepCharts; ogni conto Rithmic — indipendentemente da chi lo ha emesso — si firma dentro R Trader Pro; il dxFeed acquistato su dxfeed.com si firma sul sito di dxFeed; il dxFeed di una prop firm si firma sulla dashboard della prop firm.

### Se hai acquistato dxFeed dal sito web di DeepCharts

1. Accedi al tuo account sul sito web di DeepCharts e apri la pagina **Subscriptions**.
2. Trova il tuo abbonamento dxFeed e fai clic su **Sign Market Data Contract** accanto ad esso.
3. Leggi e accetta il contratto. Il nome utente e la password del tuo feed restano nascosti nella dashboard finché il contratto non è firmato — una volta firmato, diventano visibili. Annotali per [[connect-dxfeed|il passaggio di connessione]].

[SCREENSHOT: Pagina Subscriptions della dashboard di DeepCharts con una riga di abbonamento dxFeed e il pulsante Sign Market Data Contract evidenziato | dc-it-sign-market-data-agreement-01.png]

### Se hai un qualsiasi conto Rithmic (prop firm, broker o acquisto dal sito web)

Tutti i contratti Rithmic si firmano dentro R Trader Pro — l'applicazione di Rithmic stessa — perché è così che Rithmic gestisce il suo flusso di firma. Questo vale allo stesso modo per i conti delle prop firm (Apex, TradeFundrr e le altre), i conti broker (AMP, EdgeClear...), gli abbonamenti Rithmic acquistati sul sito web di DeepCharts e le credenziali Rithmic emesse tramite una piattaforma di terze parti.

1. Se non hai ancora R Trader Pro, scaricalo da https://www.rithmic.com/rtraderpro facendo clic sul pulsante **Download R | Trader Pro**, poi installalo con le opzioni predefinite.
2. Apri **R Trader Pro**. La schermata di accesso mostra due moduli di login affiancati — è normale. Compila entrambi i moduli con le stesse credenziali e le stesse selezioni.
3. In ciascun modulo imposta:
   - **System** — il nome del server del tuo fornitore: la voce della prop firm (per esempio Apex), **Rithmic 01** per i conti broker, oppure **Rithmic Paper Trading** per i feed acquistati sul sito web, le credenziali emesse da terze parti e qualsiasi prop firm il cui nome non è nell'elenco. I valori per fornitore si trovano in [[compatibility-guide]].
   - **Gateway** — la sede più vicina a te (Chicago, Europe, Singapore...). Un gateway lontano funziona ma aggiunge latenza.
   - **Username / Password** — le credenziali Rithmic dall'email di benvenuto del tuo fornitore.

[SCREENSHOT: Schermata di accesso di R Trader Pro con i due moduli di login affiancati, entrambi compilati, e il menu a discesa System aperto sull'elenco dei server delle prop firm | dc-it-sign-market-data-agreement-02.png]

4. Fai clic su **Login**. R Trader Pro ti presenta il contratto sui dati di mercato — leggilo e accettalo.

[SCREENSHOT: Richiesta del contratto sui dati di mercato di R Trader Pro mostrata dopo il login, con l'azione di accettazione visibile | dc-it-sign-market-data-agreement-03.png]

5. Chiudi R Trader Pro. Il contratto è ora registrato dal lato di Rithmic e puoi connetterti in DeepCharts.

> **Suggerimento:** Già che sei in R Trader Pro per la prima volta, apri **Window → Preferences → Performance** e trascina entrambi i cursori — **Quotes** e **Order Book** — al massimo, poi fai clic su **Apply** e **OK**. Questo rimuove il limite di ricezione dati di Rithmic, che altrimenti può rallentare i tuoi grafici nei periodi di mercato ad alto volume.

> **Nota:** Il campo **System** e il campo **Server** sono campi diversi, ed entrambi possono contenere valori come "Apex" e "Paper Trading". Per firmare il contratto, il valore descritto sopra va nel campo System. Se hai chiuso R Trader Pro prima che comparisse la richiesta del contratto, accedi di nuovo — la richiesta ricompare.

### Se hai acquistato dxFeed da dxfeed.com

Accedi su dxfeed.com, trova il tuo abbonamento e accetta lì il contratto sui dati di mercato. Assicurati che DeepCharts sia la tua piattaforma selezionata — le credenziali emesse per una piattaforma diversa non si connetteranno (vedi [[compatibility-guide]]).

### Se hai un conto dxFeed di una prop firm (MFF, Aqua, Goat e simili)

1. Accedi alla dashboard della tua prop firm e cerca un pulsante o un link per firmare il contratto sui dati di mercato.
2. Se non è nella dashboard, controlla l'email inviata dalla firm quando il tuo conto è stato emesso.
3. Se ancora non lo trovi, contatta il supporto della prop firm — solo loro possono reinviare il link di firma.

### Se usi il feed gratuito ritardato o CQG

Qui non serve alcun passaggio di firma. Il [[free-delayed-data-feed|feed ritardato di 15 minuti]] integrato non richiede alcun contratto, e i conti CQG non hanno un passaggio di firma separato in questo flusso — puoi passare direttamente alla [[connect-cqg|connessione]].

## Verifica che abbia funzionato

- **Sito web di DeepCharts (dxFeed):** il tuo nome utente e la tua password sono ora visibili nella pagina Subscriptions.
- **Rithmic:** l'accesso a R Trader Pro non ti presenta più il contratto e la tua connessione in DeepCharts può diventare verde.
- **Tutti i casi:** il vero test è [[connect-data-feed|connettere il feed]] — un contratto non firmato è una delle cause principali di una connessione che resta rossa.

## Se qualcosa è andato storto

| Sintomo | Vedi |
|---|---|
| La connessione resta rossa anche se le credenziali sono corrette | Il contratto è probabilmente non firmato per il tuo tipo di conto — ripeti la tua sezione qui sopra |
| Errore Rithmic che ti chiede di accedere tramite R Trader | [[fix-log-in-using-rtrader]] |
| Errore dxFeed DATA_ACCESS_SUSPENDED | [[fix-data-access-suspended]] |
| Credenziali rifiutate in R Trader Pro | Potresti stare usando il login del sito web del fornitore — vedi [[fix-username-password]] |

## Articoli correlati

- [[connect-data-feed]]
- [[compatibility-guide]]
- [[connect-dxfeed]]
- [[connect-rithmic]]
- [[connect-rithmic-prop-firm]]
- [[buy-data-feed]]