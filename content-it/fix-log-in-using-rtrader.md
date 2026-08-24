---
title: "Correzione: Please Log In Using R Trader or R Trader Pro"
slug: "fix-log-in-using-rtrader"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Risolvi l'errore Rithmic che ti chiede di accedere con R Trader o R Trader Pro firmando una sola volta il Market Data Agreement per il tuo conto."
keywords: ["Please log in using R | Trader or R | Trader Pro and sign the agreements", "rtrader firmare accordi", "accordo rithmic non firmato", "accordo r trader pro", "firmare market data agreement rithmic", "errore accordi rithmic"]
source_hash: "b498bb7fbb32f5f9"
ai_translated: true
source_hash: "b498bb7fbb32f5f9"
---
Questo errore proviene da Rithmic quando provi a collegare un feed dati o un conto di trading Rithmic il cui Market Data Agreement obbligatorio non è ancora stato firmato. Rithmic richiede di accedere tramite R Trader o R Trader Pro (o il suo sito web) almeno una volta e di accettare gli accordi prima che qualsiasi piattaforma di terze parti — inclusa DeepCharts — possa connettersi. Le tue credenziali possono essere perfettamente corrette e la connessione verrà comunque rifiutata finché questo passaggio non è completato.

## Sintomo

Quando colleghi un feed Rithmic, la connessione fallisce con:

**Connection Failed: Please log in using R | Trader or R | Trader Pro and sign the agreements**

[SCREENSHOT: La finestra di errore di connessione con il messaggio "Please log in using R | Trader or R | Trader Pro and sign the agreements" | dc-it-fix-log-in-using-rtrader-01.png]

Da non confondere con:

- [[fix-username-password]] — Rithmic rifiuta le credenziali stesse; qui le credenziali vengono accettate ma manca l'accordo.
- [[fix-rithmic-expert-not-attached]] — un errore Rithmic diverso, con una causa propria.

## Causa più probabile

Il Market Data Agreement di Rithmic per questo conto non è mai stato firmato — di solito perché non hai mai effettuato l'accesso a R Trader o R Trader Pro con quel conto.

## Soluzione rapida

Firma l'accordo tramite il sito web di Rithmic — nessuna installazione necessaria:

1. Apri la pagina di login per trader del sito web di Rithmic. [CONFIRM: exact URL of the Rithmic web page where the Market Data Agreement is signed]
2. Accedi con le tue credenziali Rithmic (trader di prop firm: il nome utente e la password Rithmic che trovi nell'email di benvenuto della tua firm — non il login del sito web della firm).
3. Leggi e firma il Market Data Agreement, selezionando lo status **Non-Professional** se rientra nel tuo caso.
4. Salva e conferma l'accordo.
5. Riavvia DeepCharts e ricollega il feed.

## Se non ha funzionato

### Causa: l'accordo va firmato in R Trader Pro

Se il percorso via sito web non è disponibile per il tuo conto, firma tramite l'applicazione R Trader Pro:

1. Scarica R Trader Pro da https://www.rithmic.com/rtraderpro — fai clic sul pulsante **Download R | Trader Pro**.
2. Esegui l'installer e completa l'installazione con le opzioni predefinite.
3. Avvia R Trader Pro. La schermata di login mostra due moduli di accesso affiancati — compila **entrambi** i moduli con le stesse credenziali e le stesse selezioni; è così che è progettato per funzionare.
4. In ciascun modulo, imposta **System** sulla tua firm o sul tuo sistema (gli utenti Apex selezionano **Apex**), imposta **Gateway** sulla località più vicina a te (Chicago, Europe, Singapore...) e inserisci il tuo nome utente e la tua password Rithmic.

[SCREENSHOT: La schermata di login di R Trader Pro con i due moduli di accesso affiancati, entrambi compilati con System, Gateway, Username e Password | dc-it-fix-log-in-using-rtrader-02.png]

5. Fai clic su **Login**.
6. Quando richiesto, leggi e accetta il Market Data Agreement, selezionando lo status **Non-Professional** se rientra nel tuo caso.

[SCREENSHOT: La richiesta del Market Data Agreement all'interno di R Trader Pro con l'azione di accettazione visibile | dc-it-fix-log-in-using-rtrader-03.png]

7. Chiudi R Trader Pro — l'accordo è ora registrato sul lato Rithmic.
8. Apri DeepCharts e ricollega il feed.

> **Suggerimento:** Se hai chiuso R Trader Pro prima che apparisse la richiesta dell'accordo, accedi di nuovo — la richiesta continua a comparire finché l'accordo non viene accettato.

> **Nota:** Non confondere il campo **System** con il campo **Server** — entrambi possono mostrare valori simili (come Apex), ma sono campi diversi.

### Causa: non riesci ad accedere a R Trader Pro

Se anche R Trader Pro rifiuta il tuo login, il problema sono le credenziali, non l'accordo — molto spesso è stato usato il login del sito web della prop firm invece delle credenziali Rithmic separate. Vedi [[fix-username-password]].

## Ancora bloccato

Genera un [[diagnostic-report]], poi contatta il team tramite [[get-help]] — indica se sei riuscito ad accedere a R Trader Pro e se la richiesta dell'accordo è mai apparsa.

## Come prevenirlo

L'accordo va firmato una sola volta per conto — fallo prima del primo tentativo di connessione. Vedi [[sign-market-data-agreement]] per la procedura generale, [[rtrader-pro-plugin]] per lavorare con R Trader Pro e [[connect-rithmic]] per la configurazione completa della connessione.

## Articoli correlati

- [[sign-market-data-agreement]]
- [[rtrader-pro-plugin]]
- [[connect-rithmic]]
- [[connect-apex]]
- [[connect-rithmic-prop-firm]]
- [[fix-username-password]]