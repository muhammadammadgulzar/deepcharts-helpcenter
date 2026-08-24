---
title: "Eliminare i dati di mercato (metodo in-app e manuale)"
slug: "delete-market-data"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Cancella i dati di mercato locali corrotti di un simbolo così DeepCharts li riscarica da zero — usando lo strumento in-app Delete Data consigliato o, se fallisce, eliminando manualmente la cartella del database del simbolo."
keywords: ["eliminare dati di mercato", "delete data", "cancellare dati", "dati corrotti", "grafico bloccato", "prezzi errati", "buchi nel grafico", "cartella del database", "riscaricare dati", "eliminare dati simbolo"]
source_hash: "c27cdc853f40ccdd"
ai_translated: true
source_hash: "c27cdc853f40ccdd"
---
Quando lo storico memorizzato localmente di un simbolo si corrompe, il grafico si comporta male anche se il tuo feed è sano: i prezzi smettono di aggiornarsi, compaiono buchi o i valori sembrano palesemente sbagliati. Alla fine di questa guida avrai eliminato i dati danneggiati di quel simbolo e lasciato che DeepCharts ne riscarichi automaticamente una copia fresca.

Ci sono due metodi. Il **Metodo 1 (in-app)** è il primo passo consigliato e risolve la maggior parte dei casi. Il **Metodo 2 (eliminazione manuale della cartella)** è il ripiego per corruzioni più profonde che sopravvivono all'eliminazione in-app.

## Prima di iniziare

- [[connect-data-feed|Il tuo feed dati è configurato]] — DeepCharts ne ha bisogno per riscaricare i dati in seguito.
- [[symbol-manage|Il simbolo è sottoscritto in Symbol Manage]] così i dati freschi possono arrivare.
- [[feed-connected-chart-not-moving|Hai verificato che il feed di per sé funzioni]] — se la connessione è interrotta, eliminare i dati non servirà.

Usa questa guida quando:

- Un grafico dei prezzi non si aggiorna anche se il feed è connesso.
- Sul grafico compaiono buchi o prezzi errati.
- Il grafico è bloccato o non risponde.
- Sospetti una lieve corruzione dei dati per un simbolo specifico.

## Passaggi

### Metodo 1 — Elimina i dati nell'app (consigliato)

1. Chiudi tutti i grafici e i workspace.
2. Disconnetti tutti i feed dati.
3. Vai su **Options → Delete Data**.

[SCREENSHOT: Il menu Options aperto sulla barra principale di DeepCharts con la voce Delete Data evidenziata | dc-it-delete-market-data-01.png]

4. Nel pannello **Delete Data**, fai clic su **Select Symbol** e scegli il simbolo interessato.
5. Imposta l'intervallo di date in modo che inizi **2–3 giorni prima di oggi**. Se la corruzione è visibile da più tempo, torna più indietro — per corruzioni ostinate o più vecchie si consigliano 15 giorni o più.
6. Se il pannello offre la scelta del tipo di dati, seleziona **Tick and Minute** così vengono cancellati entrambi i set di dati.

[SCREENSHOT: Il pannello Delete Data con un simbolo selezionato, la data impostata qualche giorno indietro e i tipi di dati Tick and Minute selezionati, pulsante Delete visibile | dc-it-delete-market-data-02.png]

7. Fai clic su **Delete** e attendi che l'operazione termini.
8. Riapri il grafico. DeepCharts scarica automaticamente i dati freschi e il grafico dovrebbe aggiornarsi normalmente.

> **Nota:** Il Metodo 1 non elimina l'intero database — solo i dati del simbolo selezionato nell'intervallo scelto. Puoi usarlo regolarmente in tutta sicurezza e non ha alcun effetto sul tuo account o sulle tue sottoscrizioni.

### Metodo 2 — Elimina manualmente la cartella del database del simbolo

Usa questo metodo **solo se il Metodo 1 fallisce**: il grafico resta statico dopo l'eliminazione in-app, vedi errori ricorrenti sui dati o sui percorsi file, oppure i file di dati sono mancanti o corrotti.

1. In DeepCharts, vai su **Options → Settings → Various** e copia il percorso **Database Folder**.

[SCREENSHOT: La finestra Settings sulla scheda Various con il campo del percorso Database Folder evidenziato | dc-it-delete-market-data-03.png]

2. Chiudi completamente DeepCharts. Assicurati che nessun processo DeepCharts sia ancora in esecuzione in background (controlla il Task Manager) — eliminare cartelle mentre la piattaforma è in esecuzione causa errori di percorso file.
3. Apri **Esplora file** e incolla il percorso copiato nella barra degli indirizzi.
4. Individua la cartella del simbolo interessato.

[SCREENSHOT: Esplora file che mostra il contenuto della cartella del database di DeepCharts con una cartella di simbolo selezionata | dc-it-delete-market-data-04.png]

5. Elimina **solo la cartella di quel simbolo**.

> **Attenzione:** Eliminare la cartella di un simbolo rimuove in modo permanente lo storico memorizzato localmente di quel simbolo. DeepCharts riscarica automaticamente i dati correnti, ma non eliminare le cartelle di altri simboli se non necessario, e non eliminare mai nulla al di fuori della cartella del database.

6. Riavvia DeepCharts e apri il grafico. La piattaforma rigenera la cartella e recupera i dati correnti senza ulteriori azioni da parte tua.

> **Attenzione:** Il riavvio è obbligatorio. Se lo salti, DeepCharts continua a fare riferimento a cartelle che non esistono più e vedrai l'errore trattato in [[fix-could-not-find-path]].

## Verifica che abbia funzionato

1. Riconnetti il tuo feed dati e apri un grafico per il simbolo.
2. Le barre storiche dovrebbero ripopolarsi e il grafico dovrebbe seguire normalmente i prezzi live.
3. I buchi, le candele bloccate o i prezzi errati che vedevi prima dovrebbero essere spariti.

Nessuno dei due metodi influisce sulle credenziali del tuo account o sulle sottoscrizioni dati.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| Errore "Could not find a part of the path" dopo l'eliminazione manuale | Riavvia completamente DeepCharts — vedi [[fix-could-not-find-path]] |
| Il grafico è ancora bloccato dopo l'eliminazione e il riscaricamento | Vedi [[feed-connected-chart-not-moving]] |
| I buchi restano nello storico riscaricato | Vedi [[gaps-in-price]] — il buco potrebbe essere reale (rollover, chiusura di sessione) e non corruzione |
| Lo storico non si è riscaricato automaticamente | Avvialo manualmente con lo strumento Download Data — vedi [[download-data]] |
| I problemi riguardano molti simboli o continuano a ripresentarsi | Trattalo come un problema a livello di database — vedi [[database-problems]] e valuta [[database-optimization]] |

## Articoli correlati

- [[download-data]]
- [[database-problems]]
- [[database-optimization]]
- [[fix-could-not-find-path]]
- [[gaps-in-price]]
- [[feed-connected-chart-not-moving]]