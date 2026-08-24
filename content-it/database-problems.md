---
title: "Correzione: problemi al database"
slug: "database-problems"
category: "Data & Database"
subcategory: ""
type: "troubleshooting"
difficulty: "intermediate"
time: "15 min to complete"
description: "Risolvi i dati corrotti del database DeepCharts — dall'eliminazione dello storico danneggiato di un simbolo alla rimozione dell'intera cartella del database, più controlli su sottoscrizioni e runtime."
keywords: ["problemi database", "database corrotto", "db corrotto", "dati corrotti", "prezzi sbagliati sul grafico", "grafico bloccato in caricamento", "rimuovere cartella database", "nessun dato in tempo reale", "dati non disponibili", "visual c++"]
source_hash: "22cb96122a3a4e15"
ai_translated: true
source_hash: "22cb96122a3a4e15"
---
DeepCharts conserva tutto lo storico di mercato scaricato in un database locale. Quando una parte di esso si corrompe, i grafici iniziano a comportarsi in modi che sembrano problemi del feed ma non lo sono: prezzi sbagliati o alterati, gap, grafici che si bloccano durante il caricamento. Questo articolo percorre le correzioni lato database, dalla meno distruttiva alla più drastica.

## Sintomo

Uno o più dei seguenti, mentre il tuo feed dati si collega normalmente:

- I grafici mostrano prezzi errati, alterati o non aggiornati.
- I grafici si bloccano o impiegano moltissimo tempo a caricare lo storico.
- Nello storico dei prezzi compaiono gap che il grafico del tuo broker non mostra.
- All'apertura dei grafici compaiono errori che menzionano il database o i file di dati.

Da non confondere con:

- Un feed che non si collega proprio — vedi [[fix-unable-to-establish-connection]].
- Un feed collegato con un grafico che semplicemente non si aggiorna — vedi prima [[feed-connected-chart-not-moving]].
- Un errore "Could not find a part of the path" — vedi [[fix-could-not-find-path]].

## Causa più probabile

Storico memorizzato localmente corrotto per uno o più simboli — il database in sé è a posto, ma un tratto dei dati di un simbolo è danneggiato e deve essere eliminato e riscaricato.

## Soluzione rapida

Elimina l'intervallo corrotto dall'app e lascia che DeepCharts lo riscarichi:

1. Disconnetti il feed dati e chiudi tutti i workspace.
2. Vai su **Options → Delete Data**.
3. Nel pannello **Delete Data**, imposta la data a un punto precedente alla comparsa dell'errore — si consigliano 15 giorni o più indietro.
4. Seleziona i tipi di dati **Tick and Minute**.
5. Scegli il simbolo (o i simboli) con lo storico corrotto.

[SCREENSHOT: Il pannello Delete Data con la data impostata a 15+ giorni indietro, Tick and Minute selezionati e un simbolo interessato scelto | dc-it-database-problems-01.png]

6. Fai clic su **Delete** e attendi che termini.
7. Chiudi la piattaforma, attendi 30 secondi, poi riavvia DeepCharts.
8. Ricollegati e apri il grafico — i dati aggiornati si scaricano automaticamente.

Per la guida completa a questa procedura (inclusa l'alternativa manuale), vedi [[delete-market-data]].

## Se non ha funzionato

### Causa: l'intero database è corrotto

Se i problemi riguardano molti simboli o persistono dopo le eliminazioni mirate, rimuovi l'intera cartella del database così DeepCharts la ricostruisce da zero:

1. Vai su **Options → Settings → Various** e copia il percorso **Database Folder**.

[SCREENSHOT: La finestra Settings sulla scheda Various con il percorso Database Folder evidenziato | dc-it-database-problems-02.png]

2. Disconnetti il feed dati, chiudi tutti i workspace ed esci completamente da DeepCharts.
3. Apri Esplora risorse di Windows e incolla il percorso copiato nella barra degli indirizzi.
4. Elimina la cartella **Database**.
5. Riavvia DeepCharts.

> **Attenzione:** Questa operazione elimina TUTTO lo storico di mercato scaricato per ogni simbolo. DeepCharts riscarica i dati man mano che apri i grafici, ma ricostruire uno storico tick profondo richiede tempo. Usala solo dopo che l'eliminazione mirata è fallita. Le credenziali del tuo account e le sottoscrizioni non vengono toccate.

### Causa: sottoscrizione al mercato mancante (nessun dato in tempo reale o dati non disponibili)

Se il problema è la mancanza di dati live anziché uno storico corrotto, controlla la mappatura simbolo-feed:

1. Collega il feed dati e chiudi tutti i workspace.
2. Vai su **Options → Symbol Manage**.
3. Verifica che i mercati corretti siano aggiunti e associati al profilo di connessione del feed dati giusto.
4. Se un mercato è mappato sul feed sbagliato, fai clic con il tasto destro del mouse sulla colonna del feed dati per riassociarlo.
5. Fai clic su **Select** per salvare le modifiche.
6. Ricollega il feed dati e apri un nuovo grafico.

Puoi esercitarti sulla correzione della mappatura nel mock qui sotto — fai clic sull'icona a catena per cambiare ciclicamente su quale feed un mercato è mappato.

[WIDGET: symbol-manage-mock]

Vedi [[symbol-manage]] per il riferimento completo della finestra, e [[symbol-subscription-issue]] se viene mostrato un errore di sottoscrizione.

### Causa: runtime Visual C++ mancante (connessione al feed dati fallita)

Se i controlli del database passano ma la connessione al feed dati continua a fallire, il colpevole può essere un runtime di sistema mancante:

1. Chiudi completamente DeepCharts.
2. Scarica e installa Visual C++ (il Microsoft Visual C++ Redistributable).
3. Riavvia DeepCharts e ricollega il feed dati.

## Ancora bloccato

Genera un [[diagnostic-report]] in modo che il supporto possa vedere i tuoi log e la tua configurazione, poi contattaci tramite i canali indicati in [[get-help]].

## Come prevenirlo

- Esegui regolarmente [[database-optimization|Migrate / Compress]] — un database compatto è meno soggetto a problemi e molto più veloce.
- Usa lo strumento in-app [[delete-market-data|Delete Data]] invece di eliminare i file manualmente, e riavvia sempre DeepCharts dopo qualsiasi manutenzione manuale a livello di file.
- Non spegnere mai il computer mentre la piattaforma sta scrivendo dati o comprimendo il database.

## Articoli correlati

- [[delete-market-data]]
- [[download-data]]
- [[database-optimization]]
- [[fix-could-not-find-path]]
- [[symbol-manage]]
- [[feed-connected-chart-not-moving]]