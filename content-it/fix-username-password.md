---
title: "Correzione: Connection Failed — Check Username and Password"
slug: "fix-username-password"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Risolvi l'errore di connessione Rithmic 'check username and password' usando le credenziali Rithmic corrette e il server giusto per il tuo tipo di conto."
keywords: ["Please make sure you entered the username and password correctly", "login rithmic fallito", "password rithmic errata", "credenziali rithmic", "login apex non funziona in deepcharts", "nome utente o password non validi", "gateway rithmic"]
source_hash: "f8fc52b8452913b5"
ai_translated: true
source_hash: "f8fc52b8452913b5"
---
Questo errore appare quando DeepCharts non riesce ad autenticare le tue credenziali Rithmic. Di solito significa una di due cose: i dati di accesso sono sbagliati (molto spesso perché è stato usato il login del sito web della prop firm invece delle credenziali Rithmic separate), oppure è stato selezionato il server sbagliato per il tuo tipo di conto.

## Sintomo

Quando colleghi un feed dati o un conto di trading Rithmic, la connessione fallisce con:

**Connection failed: Please make sure you entered the username and password correctly.**

[SCREENSHOT: La finestra di errore di connessione con il messaggio "Please make sure you entered the username and password correctly" dopo una connessione Rithmic fallita | dc-it-fix-username-password-01.png]

Da non confondere con:

- [[fix-log-in-using-rtrader]] — Rithmic accetta le tue credenziali ma ti chiede prima di firmare i market data agreement.
- [[fix-bad-server]] — un errore di autorizzazione dxFeed, non legato a Rithmic.
- [[fix-unable-to-establish-connection]] — un errore a livello di rete che avviene prima ancora dell'autenticazione.

## Causa più probabile

Il nome utente o la password sono errati — molto spesso perché i trader di prop firm inseriscono il login del sito web della loro firm invece delle credenziali Rithmic separate rilasciate dalla firm.

## Soluzione rapida

1. Individua le tue vere credenziali Rithmic. Trader di prop firm (Apex e altre): la tua firm rilascia due set di credenziali — il login del sito web per la dashboard della firm e credenziali Rithmic separate per il feed dati. DeepCharts ha bisogno di quelle **Rithmic**, che arrivano nell'email di benvenuto della firm. Cerca "Rithmic" nella tua casella di posta se non sei sicuro.
2. Copia e incolla il nome utente e la password invece di digitarli manualmente.
3. Assicurati di non aver copiato spazi extra prima o dopo i valori — uno spazio finale è invisibile ma fa fallire l'autenticazione.
4. In **Feed Settings**, modifica la connessione, reinserisci entrambi i campi, salva e riprova a connetterti. Il mock interattivo qui sotto mostra il modulo — scegli **Rithmic** come sorgente per vedere i campi esatti da compilare.

[WIDGET: feed-navigator]

## Se non ha funzionato

### Causa: server sbagliato per il tuo tipo di conto

Rithmic rifiuta i login inviati al gateway sbagliato. In **Feed Settings**, modifica la connessione e verifica il campo **Server** (la documentazione di Rithmic lo chiama gateway) rispetto al tuo tipo di conto:

| Il tuo tipo di conto | Server da selezionare |
|---|---|
| Conto live presso un broker (finanziato presso un broker) | La voce del server live del tuo broker |
| Solo feed dati Rithmic (nessun conto broker) | **Paper Trading** |
| Conto di prop firm | Il nome della tua firm se presente in elenco (per esempio **Apex**) — altrimenti **Paper Trading** |

[SCREENSHOT: Feed Settings con il menu a discesa Server aperto, con voci come Apex e Paper Trading e quella corretta evidenziata | dc-it-fix-username-password-02.png]

> **Nota:** Il campo separato **Gateway** seleziona una località regionale (Chicago, Europe, Singapore...). Una località distante aggiunge latenza ma non è la causa di questo errore — concentrati sul campo **Server**.

Salva la modifica e riconnettiti. La tabella dei server per le prop firm specifiche è in [[connect-rithmic-prop-firm]].

### Causa: le credenziali stesse sono errate o inattive

Se puoi escludere errori di battitura e il server è corretto, verifica le credenziali al di fuori di DeepCharts: prova ad accedere a R Trader Pro con lo stesso nome utente e la stessa password. Se anche lì Rithmic le rifiuta, contatta il tuo broker o la tua prop firm per reimpostare o riemettere le credenziali — DeepCharts non può correggere credenziali che Rithmic stesso non accetta.

> **Suggerimento:** Checklist finale prima di riconnetterti — il nome utente corrisponde esattamente all'email di benvenuto, la password è stata incollata senza spazi extra, il **Server** corrisponde al tuo tipo di conto e le stesse credenziali funzionano in R Trader Pro.

## Ancora bloccato

Genera un [[diagnostic-report]] (non condividere mai la tua password), poi contatta il team tramite [[get-help]] indicando il tuo nome utente e uno screenshot del modulo Feed Settings.

## Come prevenirlo

Configura la connessione con le credenziali e il server corretti fin dall'inizio: segui [[connect-rithmic]], la tabella dei server per le prop firm in [[connect-rithmic-prop-firm]] o la guida specifica per Apex in [[connect-apex]].

## Articoli correlati

- [[connect-rithmic]]
- [[connect-rithmic-prop-firm]]
- [[connect-apex]]
- [[fix-log-in-using-rtrader]]
- [[rtrader-pro-plugin]]
- [[fix-bad-server]]