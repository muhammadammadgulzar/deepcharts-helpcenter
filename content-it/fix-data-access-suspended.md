---
title: "Fix: dxFeed DATA_ACCESS_SUSPENDED"
slug: "fix-data-access-suspended"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Ripristina l'accesso ai dati di mercato dxFeed dopo un errore DATA_ACCESS_SUSPENDED causato da una revisione dello status Non-Professional."
keywords: ["DATA_ACCESS_SUSPENDED", "Dxfeed: DATA_ACCESS_SUSPENDED", "accesso ai dati sospeso", "dxfeed sospeso", "status non-professional", "dati di mercato sospesi"]
source_hash: "60a407687aebb43a"
ai_translated: true
source_hash: "60a407687aebb43a"
---
L'errore **Dxfeed: DATA_ACCESS_SUSPENDED** significa che dxFeed ha sospeso il tuo accesso ai dati di mercato a causa di una discrepanza nel tuo status **Non-Professional**. Potresti aver firmato il Market Data Agreement come Non-Professional, ma la revisione di conformità di dxFeed ha stabilito che le informazioni da te inviate non soddisfano i criteri Non-Professional.

Si tratta di una questione di conformità, non di un bug del software — la decisione di sospensione è presa da dxFeed, non da DeepCharts.

## Sintomo

- Il tuo feed dati dxFeed smette di connettersi, oppure i dati di mercato smettono di arrivare.
- Viene mostrato l'errore **Dxfeed: DATA_ACCESS_SUSPENDED**.

[SCREENSHOT: L'errore di connessione del feed che mostra il testo esatto del messaggio "Dxfeed: DATA_ACCESS_SUSPENDED" | dc-it-fix-data-access-suspended-01.png]

Da non confondere con:

- [[fix-myfundedfutures-failed]] — l'accordo non è mai stato firmato ("You need to sign the datafeed").
- [[fix-username-password]] — un semplice errore di credenziali, non collegato allo status di conformità.

## Causa più probabile

Hai firmato il Market Data Agreement come Non-Professional e la revisione di conformità di dxFeed ha concluso che le informazioni inviate non si qualificano come Non-Professional, quindi l'accesso ai dati di mercato è stato sospeso.

## Soluzione rapida

Verifica il tuo status Non-Professional con dxFeed tramite il supporto DeepCharts:

1. Contatta il supporto DeepCharts (vedi [[get-help]]) e segnala l'errore esatto: **DATA_ACCESS_SUSPENDED**.
2. Richiedi il **Non-Professional Verification Form**. Il supporto ti fornirà un modulo usato per confermare il tuo status Non-Professional.
3. Compila il modulo in modo accurato. Le informazioni devono confermare chiaramente che sei un trader Non-Professional.

> **Attenzione:** Fornire informazioni accurate e veritiere è essenziale. Risposte incoerenti o errate possono portare alla conferma della sospensione.

4. Invia il modulo compilato al supporto DeepCharts. Il supporto lo inoltra a dxFeed per la revisione come prova del tuo status Non-Professional.
5. Una volta che dxFeed approva il modulo, l'accesso ai dati di mercato viene riattivato. Riavvia DeepCharts e riconnetti il feed dati.

## Se non ha funzionato

### Causa: la revisione è ancora in corso

Il tempo di approvazione dipende dal processo di revisione di dxFeed. Se il feed mostra ancora l'errore poco dopo l'invio del modulo, la revisione probabilmente non è ancora conclusa — contatta il supporto DeepCharts per un aggiornamento sullo stato invece di inviare di nuovo il modulo.

### Causa: dxFeed ha stabilito che non ti qualifichi come Non-Professional

Se dxFeed conferma la decisione dopo aver esaminato il modulo, il tuo conto non può usare le condizioni dati Non-Professional. Contatta il supporto DeepCharts per discutere le opzioni disponibili per la tua situazione — la gestione esatta dipende dalla determinazione di dxFeed.

## Ancora bloccato

Allega un [[diagnostic-report]] quando scrivi — aiuta il supporto a confermare l'esatto stato dell'errore — e usa le opzioni di contatto in [[get-help]].

## Come prevenirlo

Quando completi l'accordo descritto in [[sign-market-data-agreement]]:

- Compila con attenzione ogni campo del Market Data Agreement.
- Assicurati che i tuoi dati corrispondano ai requisiti di idoneità Non-Professional.
- Evita incoerenze nelle informazioni sulla tua occupazione o attività di trading.

## Articoli correlati

- [[sign-market-data-agreement]]
- [[connect-dxfeed]]
- [[fix-myfundedfutures-failed]]
- [[connect-dxfeed-prop-firm]]
- [[get-help]]