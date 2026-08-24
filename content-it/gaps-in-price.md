---
title: "Correzione: gap di prezzo sui grafici"
slug: "gaps-in-price"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "intermediate"
time: "10 min to complete"
description: "Rimuovi i gap di prezzo causati da dati locali corrotti e impara a distinguerli dai gap di mercato reali e dai mesi di contratto scaduti."
keywords: ["gap di prezzo", "candele mancanti", "buchi nel grafico", "barre mancanti", "dati corrotti", "gap di prezzo sul grafico", "dati mancanti nel grafico"]
source_hash: "4af630875a44fa4d"
ai_translated: true
source_hash: "4af630875a44fa4d"
---
I gap nella tua cronologia dei prezzi hanno tre possibili origini: dati corrotti nel database locale, gap di mercato legittimi, oppure un mese di contratto futures scaduto o non valido. Solo il primo è un problema che puoi risolvere riscaricando i dati — quindi prima di cancellare qualsiasi cosa, prenditi un minuto per escludere gli altri due.

## Sintomo

- Un grafico mostra un gap: candele mancanti o un buco nella cronologia dei prezzi dove i dati dovrebbero esserci.
- Il gap persiste dopo aver scorso via e poi indietro, o ricompare su nuovi grafici dello stesso simbolo.

[SCREENSHOT: Un grafico dei prezzi con un gap visibile nella cronologia delle candele — barre mancanti nel mezzo di una sessione, area del gap evidenziata | dc-it-gaps-in-price-01.png]

Da non confondere con [[feed-connected-chart-not-moving]] — lì il grafico smette del tutto di aggiornarsi; qui la cronologia viene caricata ma contiene dei buchi.

## Causa più probabile

Dati storici corrotti per quel simbolo nel database locale di DeepCharts — il grafico riproduce fedelmente i dati danneggiati che trova su disco.

## Soluzione rapida

Prima di cancellare qualsiasi cosa, verifica i due casi che non sono corruzione dei dati:

1. Guarda i timestamp intorno al gap. Se si trova in una pausa di sessione, in un fine settimana o in un periodo di bassa liquidità, è un gap di mercato reale — un comportamento di trading normale che non può e non deve essere "corretto". Vedi [[understanding-market-structure-sessions]].
2. Per i futures, verifica che il grafico sia sul mese di scadenza corretto e attivo del contratto prima di ipotizzare un problema di dati. Un contratto scaduto o non valido produce una cronologia sottile e piena di gap — vedi [[symbol-rollover]].

Se nessuno dei due casi si applica, elimina i dati memorizzati del simbolo interessato così DeepCharts li riscarica:

3. Usa lo strumento di eliminazione integrato (**Options → Delete data**): scegli il simbolo interessato e un intervallo di date che copra il gap. Questo rimuove solo quella porzione di dati — la procedura completa è in [[delete-market-data]].
4. Riavvia DeepCharts e apri di nuovo il grafico. Il software scarica automaticamente dati freschi per l'intervallo eliminato.

[SCREENSHOT: La finestra di eliminazione dati integrata con un simbolo selezionato e un intervallo di date che copre il gap | dc-it-gaps-in-price-02.png]

## Se non ha funzionato

### Causa: corruzione più profonda nella cartella del database del simbolo

Se il gap sopravvive a un'eliminazione dall'app, rimuovi manualmente l'intera cartella dei dati del simbolo:

1. Apri **General Settings** e individua il **Database Folder Path**.

[SCREENSHOT: La finestra General Settings con il campo Database Folder Path evidenziato | dc-it-gaps-in-price-03.png]

2. Vai a quella cartella in Esplora file.
3. Elimina solo la cartella del simbolo interessato.

> **Attenzione:** Elimina sempre solo la cartella del simbolo interessato — mai l'intero database. Cancellare tutto azzera la cronologia memorizzata di tutti i simboli.

[SCREENSHOT: Esplora file all'interno della cartella del database con la sottocartella di un singolo simbolo selezionata per l'eliminazione, le altre cartelle dei simboli visibili e intatte | dc-it-gaps-in-price-04.png]

4. Riavvia DeepCharts. Scarica automaticamente dati freschi per quel simbolo.

### Causa: il gap è reale attività di mercato

Le pause di sessione, i gap del fine settimana e i periodi di bassa liquidità lasciano buchi autentici nel prezzo. Riflettono attività di trading reale, quindi nessun riscaricamento potrà riempirli.

### Causa: mese di contratto scaduto o non valido

Se il simbolo punta ancora a un vecchio contratto futures, effettuane il rollover al mese attivo — vedi [[symbol-rollover]] — e poi ricarica il grafico.

## Ancora bloccato

Se i gap continuano a ricomparire su più simboli, il database stesso potrebbe aver bisogno di attenzione — vedi [[database-problems]]. Altrimenti genera un [[diagnostic-report]] e contatta il supporto tramite [[get-help]].

## Come prevenirlo

- Mantieni i contratti aggiornati con [[symbol-rollover]] così i grafici non caricheranno mai un mese di contratto scaduto.
- Esegui periodicamente [[database-optimization]] per mantenere in salute il database locale.

## Articoli correlati

- [[delete-market-data]]
- [[download-data]]
- [[symbol-rollover]]
- [[database-problems]]
- [[database-optimization]]
- [[understanding-market-structure-sessions]]