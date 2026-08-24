---
title: "Fix: Connection Failed — Bad Server"
slug: "fix-bad-server"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Risolvi l'errore di connessione dxFeed 'Bad Server' causato da accessi simultanei su più piattaforme o da un Market Data Agreement non firmato."
keywords: ["Bad Server", "Connection Failed: Bad Server", "dxfeed bad server", "dxfeed una sola connessione", "dxfeed connesso altrove", "market data agreement non firmato dxfeed"]
source_hash: "3f86affbbbf60960"
ai_translated: true
source_hash: "3f86affbbbf60960"
---
L'errore "Bad Server" proviene da dxFeed, non da DeepCharts. Segnala una restrizione di autorizzazione ai dati di mercato o di utilizzo dell'account sul lato dxFeed — in pratica, o il tuo account dxFeed è già in uso su un'altra piattaforma, oppure il suo Market Data Agreement non è ancora stato firmato.

## Sintomo

Durante la connessione di un feed dati dxFeed, la connessione fallisce con:

**Connection Failed: Bad Server**

[SCREENSHOT: La finestra di errore di connessione che mostra il messaggio "Bad Server" dopo un tentativo fallito di connessione a dxFeed | dc-it-fix-bad-server-01.png]

Da non confondere con:

- [[fix-username-password]] — un errore di credenziali Rithmic, non collegato a dxFeed.
- [[fix-unable-to-establish-connection]] — un errore a livello di rete, tipicamente legato a VPN o componenti di sistema.
- [[fix-data-access-suspended]] — un diverso errore di autorizzazione dxFeed con un proprio messaggio.

## Causa più probabile

Lo stesso account dxFeed è connesso su un'altra piattaforma nello stesso momento — dxFeed impone una sola connessione attiva per account, e un secondo accesso viene rifiutato.

## Soluzione rapida

1. Chiudi qualsiasi altra piattaforma di trading o di grafici connessa con le stesse credenziali dxFeed — inclusa un'eventuale sessione lasciata in esecuzione su un altro computer.
2. Assicurati che l'account sia ora in uso su una sola piattaforma.
3. Riavvia DeepCharts.
4. Prova a connettere di nuovo il feed.

> **Nota:** Il limite di sessione attiva unica vale universalmente — non puoi usare lo stesso account dxFeed in DeepCharts e su un'altra piattaforma contemporaneamente.

## Se non ha funzionato

### Causa: Market Data Agreement non firmato

dxFeed blocca l'accesso finché il Market Data Agreement dell'account non è stato firmato. Come firmarlo dipende dall'origine dell'account:

**Se hai acquistato il feed dati direttamente:**

1. Accedi al portale del tuo provider di dati.
2. Firma il Market Data Agreement, selezionando lo status **Non-Professional** quando applicabile.

[SCREENSHOT: La pagina del portale del provider di dati che mostra il Market Data Agreement con l'opzione di status Non-Professional selezionata | dc-it-fix-bad-server-02.png]

La guida completa è in [[sign-market-data-agreement]].

**Se l'account proviene da un broker o da una prop firm:**

1. Contatta il tuo broker o la tua prop firm.
2. Chiedi loro come attivare o firmare il Market Data Agreement per il tuo account — il percorso esatto varia da firm a firm.

Dopo la firma dell'accordo, riavvia DeepCharts e riconnetti il feed dati.

## Ancora bloccato

Genera un [[diagnostic-report]] in modo che il supporto possa vedere l'esatto rifiuto, poi contatta il team tramite [[get-help]] — indica quale provider o firm ha emesso l'account dxFeed e se l'accordo è stato firmato.

## Come prevenirlo

- Completa il Market Data Agreement subito dopo la configurazione dell'account — vedi [[sign-market-data-agreement]].
- Usa l'account dxFeed su una sola piattaforma alla volta.
- In caso di dubbi sullo stato dell'accordo, verificalo con il tuo broker o provider prima di connetterti.
- Configura il feed seguendo [[connect-dxfeed]] (oppure [[connect-dxfeed-prop-firm]] per gli account di prop firm).

## Articoli correlati

- [[connect-dxfeed]]
- [[sign-market-data-agreement]]
- [[connect-dxfeed-prop-firm]]
- [[fix-data-access-suspended]]
- [[fix-myfundedfutures-failed]]
- [[fix-dxfeed-dll]]