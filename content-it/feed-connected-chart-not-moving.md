---
title: "Fix: feed live connesso ma il grafico non si muove"
slug: "feed-connected-chart-not-moving"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Cosa controllare quando il feed dati risulta connesso ma il grafico dei prezzi è bloccato, mostra dati vecchi o non mostra alcun dato."
keywords: ["grafico non si muove", "grafico bloccato", "prezzo non si aggiorna", "nessun dato sul grafico", "pallino verde ma il grafico non carica", "grafico fermo", "dati del grafico obsoleti", "grafico mostra dati di ieri"]
source_hash: "b74681eea9e52a9e"
ai_translated: true
source_hash: "b74681eea9e52a9e"
---
Il pallino di connessione è verde, quindi il feed dati di per sé funziona — ma il grafico non si aggiorna. Nella maggior parte dei casi non si tratta affatto di un problema di feed. Esegui i controlli qui sotto in ordine, dal meno al più invasivo.

## Sintomo

- Il pallino di connessione è verde (il feed risulta connesso).
- Un grafico si apre ma il prezzo non si aggiorna, **oppure** il grafico mostra "no data", **oppure** il grafico mostra dati vecchi di una sessione precedente e appare bloccato.

[SCREENSHOT: Toolbar principale di DeepCharts con il pallino di connessione verde, accanto a un grafico dei prezzi aperto visibilmente obsoleto (timestamp dell'ultima candela di una sessione precedente evidenziato) | dc-it-feed-connected-chart-not-moving-01.png]

Da non confondere con:

- [[fix-unable-to-establish-connection]] — il feed non riesce a connettersi fin dall'inizio (il pallino non diventa mai verde).
- [[connection-lost-opening-chart]] — la connessione cade nel momento in cui apri un grafico.
- [[data-delayed-lagging]] — il grafico si muove, ma sensibilmente in ritardo rispetto al mercato.

## Causa più probabile

L'exchange del tuo simbolo non è instradato al feed connesso in Symbol Manage, quindi DeepCharts carica silenziosamente i dati in cache dal tuo disco locale — cosa che appare esattamente come un grafico live bloccato.

## Soluzione rapida

1. Per prima cosa, verifica che il mercato sia effettivamente aperto — che non sia un weekend o una festività di mercato. I prezzi non si aggiornano quando il mercato è chiuso.
2. In DeepCharts, apri **Options → Symbol Manage**.
3. Trova la riga dell'exchange del tuo simbolo (per esempio CME per NQ/ES/MNQ/MES, COMEX per GC/SI, NYMEX per CL/NG).
4. Controlla la colonna **Data Feed** su quella riga. Deve mostrare il feed a cui sei attualmente connesso. Provalo nel mock interattivo qui sotto — fai clic sull'icona a forma di catena su una riga per cambiare il feed associato.

[WIDGET: symbol-manage-mock]

5. Se il valore è sbagliato o vuoto, fai clic sull'icona a forma di **catena** su quella riga (accanto all'icona di eliminazione) e scegli il feed corretto tra quelli connessi.

[SCREENSHOT: La finestra di selezione del feed che si apre dall'icona a forma di catena in Symbol Manage, con il feed connesso evidenziato prima della conferma | dc-it-feed-connected-chart-not-moving-02.png]

6. Attendi qualche secondo — un grafico già aperto a volte si aggiorna da solo una volta corretto l'instradamento. Se non lo fa, chiudi il grafico e riaprilo tramite **New → Price Chart** scegliendo di nuovo il simbolo.

> **Suggerimento:** Se usi più feed contemporaneamente (per esempio CME da un provider e COMEX da un altro), usa l'icona a forma di catena per instradare ogni exchange al proprio feed.

## Se non ha funzionato

### Causa: l'exchange non è mai stato sottoscritto

Se la tabella di Symbol Manage è vuota, fai clic sul pulsante **Export Mode** — si apre una nuova finestra che dovrebbe contenere gli exchange in una tabella. Imposta il **Data Feed** per ciascun exchange con l'icona a forma di catena, come sopra. Se anche la finestra Export Mode è vuota, fai clic sul pulsante **Subscribe**, seleziona il tuo **Data Feed** e gli exchange su cui vuoi operare, poi fai clic su **Select**.

[SCREENSHOT: La finestra Subscribe raggiunta da Export Mode, con un feed dati scelto e un exchange selezionato, pulsante Select visibile | dc-it-feed-connected-chart-not-moving-03.png]

La guida completa a tutti e tre gli scenari è in [[symbol-manage]].

### Causa: anomalia alla prima connessione del feed

Se è la prima volta che connetti questo feed, chiudi completamente DeepCharts, riavvia l'applicazione e riconnetti il feed dati.

### Causa: dati locali corrotti per il simbolo

DeepCharts memorizza in cache i dati dei grafici su disco, e una cache corrotta può bloccare un grafico. Elimina i dati recenti in modo che la piattaforma li scarichi di nuovo:

1. Chiudi tutti i grafici e i workspace e disconnettiti da tutti i feed dati.
2. Fai clic su **Select Symbol** e scegli il simbolo interessato.
3. Seleziona un intervallo di 2–3 giorni indietro rispetto a oggi e fai clic su **Delete**.
4. Riapri il grafico — DeepCharts scarica automaticamente dati freschi.

Se il problema sopravvive all'eliminazione dall'app, rimuovi manualmente la cartella dei dati del simbolo come ultima risorsa: copia il percorso della cartella del database da DeepCharts, incollalo nella barra degli indirizzi di Esplora file ed elimina soltanto la cartella del simbolo interessato. Poi riavvia DeepCharts. Entrambi i metodi sono descritti passo passo in [[delete-market-data]].

> **Attenzione:** Elimina soltanto la cartella del simbolo interessato — non rimuovere le cartelle degli altri simboli a meno che non abbiano lo stesso problema. Eliminare i dati di mercato non influisce sul tuo account o sui tuoi abbonamenti; la piattaforma ricrea le cartelle e scarica dati freschi.

> **Nota:** Se il grafico continua a non muoversi, l'exchange potrebbe non essere incluso nel tuo abbonamento ai dati di mercato — alcuni accordi coprono solo determinati exchange. Verifica con il tuo provider di feed, il tuo broker o la tua prop firm.

## Ancora bloccato

Annota il simbolo, il nome del feed e fai uno screenshot della riga di Symbol Manage per quell'exchange. Poi genera un [[diagnostic-report]] e contatta il team tramite [[get-help]].

## Come prevenirlo

Configura l'instradamento degli exchange subito dopo aver connesso qualsiasi feed — [[symbol-manage]] copre la sottoscrizione degli exchange e la loro mappatura sui feed, mentre [[connect-data-feed]] copre la connessione stessa.

## Articoli correlati

- [[symbol-manage]]
- [[connect-data-feed]]
- [[delete-market-data]]
- [[data-delayed-lagging]]
- [[connection-lost-opening-chart]]
- [[gaps-in-price]]