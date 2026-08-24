---
title: "Connettere i dati storici (End of Day)"
slug: "end-of-day-data"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Configura la sorgente feed Historical per caricare dati di fine giornata sui tuoi grafici."
keywords: ["end of day", "EOD", "dati storici", "feed storico", "dati di fine giornata", "dati giornalieri", "nessun feed live"]
source_hash: "cd7dd3cfe09311a7"
ai_translated: true
source_hash: "cd7dd3cfe09311a7"
---
Alla fine avrai la sorgente feed **Historical** connessa e un grafico che mostra dati di fine giornata. Questa connessione carica dati storici (di fine giornata) anziché un feed in streaming live, il che la rende utile quando vuoi rivedere l'andamento passato dei prezzi senza un abbonamento a dati live.

La configurazione segue lo stesso schema di ogni altro feed in DeepCharts: crea la connessione in **Feed Settings**, poi instrada un exchange verso di essa in **Symbol Manage**.

## Prima di iniziare

- DeepCharts installato e attivato — [[install-deepcharts]]
- Conoscere il flusso generale di connessione aiuta ma non è indispensabile — [[connect-data-feed]]

## Passaggi

1. Avvia DeepCharts.

2. Fai clic su **Select Connection** → **Feed Settings**.

[SCREENSHOT: Barra principale di DeepCharts con il menu a discesa Select Connection aperto e Feed Settings evidenziato | dc-it-end-of-day-data-01.png]

3. Fai clic su **Add Connection**.

4. In **Name**, inserisci un nome di profilo a tua scelta, per esempio "End of Day".

5. In **Feed Source**, seleziona **Historical**.

[SCREENSHOT: Finestra Feed Settings con il menu a discesa Feed Source aperto e Historical evidenziato, il campo Name compilato con "End of Day" | dc-it-end-of-day-data-02.png]

[CONFIRM: whether the Historical feed source requires any credentials or an active subscription, and which exchanges/symbols and how much history it provides]

6. Fai clic su **Save** e chiudi la finestra Feed Settings.

7. Apri **Options → Symbol Manage** e indirizza un exchange al tuo nuovo profilo — in uno di questi due modi:
   - trova l'exchange che vuoi e cambia il suo **Data Feed** con il nuovo profilo Historical (l'icona a forma di catena sulla riga cambia il feed), oppure
   - aggiungi un nuovo exchange e imposta il suo feed dati sul profilo Historical.

   Vedi [[symbol-manage]] per la guida completa a ogni stato di Symbol Manage, oppure prova il mock interattivo qui sotto — fai clic sull'icona a forma di catena su una riga per cambiare ciclicamente il feed associato.

[WIDGET: symbol-manage-mock]

8. Apri un nuovo grafico su quell'exchange — caricherà i dati storici. Vedi [[first-chart]].

[SCREENSHOT: Un grafico dei prezzi che visualizza dati storici di fine giornata caricati dal profilo feed Historical | dc-it-end-of-day-data-03.png]

## Verifica che abbia funzionato

Un grafico appena aperto sull'exchange instradato visualizza dati storici di prezzo. Trattandosi di dati di fine giornata, non aspettarti aggiornamenti intraday in tempo reale — il grafico non si muoverà tick per tick.

> **Nota:** Se in seguito vuoi dati live sullo stesso exchange, riporta il suo Data Feed su una connessione live in **Symbol Manage** — vedi [[manage-feed-connections]] per gestire più profili feed.

## Se qualcosa è andato storto

- **Il grafico non mostra dati** — l'exchange non è instradato al profilo Historical. Ricontrolla la colonna Data Feed in [[symbol-manage]].
- **Il grafico sembra bloccato** — comportamento previsto per i dati di fine giornata; non si aggiornano in tempo reale. Se ti servono prezzi live, connetti un feed live ([[connect-data-feed]]) oppure prova l'opzione gratuita in [[free-delayed-data-feed]].
- **Ti serve più storico o mancano dati su un feed live** — vedi [[download-data]].

## Articoli correlati

- [[connect-data-feed]]
- [[symbol-manage]]
- [[first-chart]]
- [[free-delayed-data-feed]]
- [[download-data]]
- [[manage-feed-connections]]