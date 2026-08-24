---
title: "Correzione: connessione persa all'apertura di un grafico"
slug: "connection-lost-opening-chart"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Cosa fare quando il feed dati si collega senza problemi ma la connessione cade nel momento in cui un grafico inizia a caricare i dati."
keywords: ["connessione persa", "connessione persa all'apertura di un grafico", "feed si disconnette quando si apre il grafico", "grafico fa cadere la connessione", "impostazioni area geografica windows", "formato regionale", "lingua non inglese"]
source_hash: "5c3b757ac1808109"
ai_translated: true
source_hash: "5c3b757ac1808109"
---
Il tuo feed dati si collega senza alcun problema — ma nel momento in cui apri un grafico, la connessione cade e DeepCharts mostra avvisi o messaggi di errore. Questa guida copre le due cause note: una connessione internet instabile e impostazioni di lingua o area geografica di Windows che compromettono l'elaborazione dei dati del grafico.

## Sintomo

- Il feed dati si collega correttamente e l'indicatore di connessione appare normale.
- Non appena apri un grafico — precisamente quando i dati del grafico iniziano a caricarsi — la connessione cade e compaiono uno o più avvisi o messaggi di errore.

[SCREENSHOT: Finestra principale di DeepCharts nel momento in cui la connessione cade dopo l'apertura di un grafico, con l'avviso di disconnessione o il messaggio di errore visibile sullo schermo | dc-it-connection-lost-opening-chart-01.png]

Da non confondere con:

- [[fix-unable-to-establish-connection]] — il feed non si collega proprio.
- [[feed-connected-chart-not-moving]] — il feed resta collegato ma il grafico non si aggiorna.

## Causa più probabile

Una breve interruzione di rete mentre il grafico scarica i suoi dati — oppure, se succede ogni singola volta, impostazioni di lingua e area geografica di Windows diverse da English (US), che cambiano il formato di date, numeri e decimali e causano errori di elaborazione durante il caricamento dei dati del grafico.

## Soluzione rapida

Rinnova prima la tua connessione internet — è la causa più veloce da escludere:

1. Disconnettiti dalla rete attuale.
2. Ricollegati a internet. Una connessione cablata stabile è preferibile al Wi-Fi.
3. Riavvia DeepCharts.
4. Collega il feed dati e apri di nuovo il grafico.

Se la connessione cade ancora quando il grafico si carica, continua qui sotto.

## Se non ha funzionato

### Causa: la lingua o l'area geografica di Windows non è English (US)

Il feed dati e i componenti di charting richiedono una lingua di visualizzazione inglese e formati regionali US o basati sull'inglese. Altri formati regionali possono causare errori di elaborazione esattamente nel punto in cui i dati del grafico iniziano a caricarsi — ecco perché il feed si collega bene ma cade all'apertura del grafico.

1. Apri **Windows Settings → Time & Language → Language** e imposta la lingua di visualizzazione di Windows su **English**.

[SCREENSHOT: Impostazioni di Windows, pagina Time & Language, Language con il menu a discesa della lingua di visualizzazione di Windows aperto ed English selezionato | dc-it-connection-lost-opening-chart-02.png]

2. Apri **Windows Settings → Time & Language → Region** e imposta **Country or region** su **United States** (o un'altra area geografica supportata in inglese).

[SCREENSHOT: Impostazioni di Windows, pagina Time & Language, Region con Country or region impostato su United States | dc-it-connection-lost-opening-chart-03.png]

3. Riavvia il computer.
4. Avvia DeepCharts, collega il feed dati e apri di nuovo il grafico.

> **Nota:** Il riavvio del passaggio 3 è obbligatorio — Windows applica le modifiche ai formati regionali a livello di sistema solo dopo un riavvio. Cambiare l'impostazione senza riavviare non risolverà il problema.

## Ancora bloccato

Genera un [[diagnostic-report]] in modo che il supporto possa vedere i dettagli del tuo sistema e della connessione, poi contattaci tramite [[get-help]].

## Come prevenirlo

- Mantieni Windows impostato su inglese con formati regionali US o basati sull'inglese.
- Assicurati che la tua connessione internet sia stabile prima di aprire i grafici — idealmente cablata.
- Segui [[connect-data-feed]] quando configuri un feed, così la connessione sarà configurata correttamente fin dall'inizio.

## Articoli correlati

- [[connect-data-feed]]
- [[fix-unable-to-establish-connection]]
- [[feed-connected-chart-not-moving]]
- [[data-delayed-lagging]]
- [[get-help]]