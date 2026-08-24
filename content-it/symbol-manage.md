---
title: "Symbol Manage: sottoscrivi gli exchange e mappa il tuo feed"
slug: "symbol-manage"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Sottoscrivi gli exchange che operi e instrada ciascuno verso il feed dati corretto, così i grafici si caricano."
keywords: ["symbol manage", "symbol manager", "sottoscrivere exchange", "mappare feed", "colonna data feed", "nessun dato", "exchange mancante", "lista strumenti vuota"]
source_hash: "1ac4ff0d01707374"
ai_translated: true
source_hash: "1ac4ff0d01707374"
---
Alla fine avrai ogni exchange che operi sottoscritto in Symbol Manage e instradato verso il feed dati corretto, così i grafici caricano dati live. Un feed connesso da solo non basta — DeepCharts deve anche sapere quali exchange vuoi e quale feed deve fornire ciascuno di essi. Quando questa mappatura manca o è sbagliata, i grafici mostrano "no data" o restano bloccati su vecchi dati in cache anche se il pallino della connessione è verde.

## Prima di iniziare

- Un feed dati salvato e funzionante — vedi [[connect-data-feed]].
- Sapere quali exchange include realmente la tua sottoscrizione al feed (per esempio CME, COMEX) — verifica cosa hai acquistato, vedi [[buy-data-feed]].

## Passaggi

1. Disconnetti prima il tuo feed: fai clic su **Select Connection** nella toolbar principale e fai clic sul feed connesso per disconnetterlo. Modificare Symbol Manage da disconnesso, e poi riconnettersi, garantisce che la nuova mappatura abbia effetto in modo pulito.

2. Apri **Options → Symbol Manage**.

[SCREENSHOT: Menu Options aperto nella barra principale di DeepCharts con la voce Symbol Manage evidenziata | dc-it-symbol-manage-01.png]

3. Apri la scheda **Subscribe List**. Elenca gli exchange a cui sei sottoscritto, ciascuno con una colonna **Data Feed** che mostra quale feed lo fornisce.

Provalo dal vivo qui sotto — sottoscrivi o annulla la sottoscrizione di un exchange, e fai clic sull'icona a catena per cambiare quale feed lo fornisce.

[WIDGET: symbol-manage-mock]

### Se il tuo exchange è già in elenco

1. Controlla la sua colonna **Data Feed**. Deve mostrare il feed da cui vuoi che i grafici carichino i dati.
2. Se mostra il feed sbagliato (o è vuota), fai clic sull'icona a catena su quella riga e scegli il feed corretto tra le tue connessioni salvate.

[SCREENSHOT: Riga della Subscribe List con l'icona a catena per cambiare feed cliccata e l'elenco delle connessioni feed salvate aperto per la selezione | dc-it-symbol-manage-02.png]

### Se il tuo exchange non è in elenco

1. Fai clic su **Subscribe**. Appare un elenco degli exchange disponibili.
2. Cerca l'exchange che desideri, seleziona il tuo feed dati per esso e conferma. [CONFIRM: exact label of the confirm button in the Subscribe dialog — sources show both "Set" and "Select"]
3. Ripeti per ogni exchange che operi.

### Se non ti serve più un exchange

Selezionalo nella Subscribe List e fai clic su **Unsubscribe**.

> **Attenzione:** Dopo l'annullamento della sottoscrizione, gli strumenti dell'exchange scompaiono dal selettore degli strumenti e i suoi grafici smettono di caricare dati. Annulla la sottoscrizione solo degli exchange di cui davvero non ti servono più i grafici.

4. Facoltativamente rivedi la scheda **Symbol List** — mostra i singoli strumenti disponibili sotto gli exchange sottoscritti. Di norma qui non devi cambiare nulla.

> **Attenzione:** Non modificare i dettagli interni di exchange o simboli (i dettagli di Modify Exchange / Modify Symbol). Quelle definizioni sono gestite dal supporto DeepCharts — cambiarle può compromettere il caricamento dei dati per l'intero exchange. Se una definizione di simbolo sembra errata, contatta invece il supporto — vedi [[get-help]].

5. Chiudi Symbol Manage.

6. Riconnetti il tuo feed tramite **Select Connection**.

7. Se un grafico era già aperto mentre facevi le modifiche, potrebbe aggiornarsi da solo dopo qualche secondo. Se resta bloccato o mostra "no data", chiudilo e riaprilo tramite **New → Price Chart** — caricherà dati freschi attraverso la mappatura corretta.

## Verifica che abbia funzionato

- Apri **New → Price Chart**. Il selettore degli strumenti mostra gli exchange che hai sottoscritto — elenca solo ed esclusivamente gli exchange sottoscritti, quindi se un exchange manca qui, non è ancora sottoscritto.
- Scegli un simbolo dell'exchange del tuo feed: il grafico disegna le candele e il prezzo si muove.

[SCREENSHOT: Selettore degli strumenti di New Price Chart che mostra solo gli exchange sottoscritti, con un simbolo selezionato | dc-it-symbol-manage-03.png]

## Se qualcosa è andato storto

| Sintomo | Vedi |
|---|---|
| Il feed è verde ma il grafico non si muove | [[feed-connected-chart-not-moving]] |
| Errore che menziona un problema di sottoscrizione dei simboli | [[symbol-subscription-issue]] |
| L'exchange che ti serve non appare mai nella lista Subscribe | La tua sottoscrizione al feed potrebbe non includerlo — vedi [[buy-data-feed]] |
| La connessione cade all'apertura di un grafico | [[connection-lost-opening-chart]] |

> **Suggerimento:** Puoi usare più feed contemporaneamente e instradare ciascun exchange verso un feed diverso — per esempio i grafici CME da un feed e i grafici COMEX da un altro. Connetti entrambi i feed, poi usa l'icona a catena per assegnare ogni exchange singolarmente. Vedi [[manage-feed-connections]].

## Articoli correlati

- [[connect-data-feed]]
- [[feed-connected-chart-not-moving]]
- [[manage-feed-connections]]
- [[first-chart]]
- [[buy-data-feed]]