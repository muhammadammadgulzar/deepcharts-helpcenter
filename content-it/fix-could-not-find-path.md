---
title: "Fix: Could Not Find a Part of the Path"
slug: "fix-could-not-find-path"
category: "Data & Database"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Risolvi l'errore 'Could not find a part of the path' che compare dopo l'eliminazione di cartelle del database o dei simboli mentre DeepCharts era in esecuzione."
keywords: ["could not find a part of the path", "could not find path", "errore percorso", "AppData Local Deepchart Database", "errore percorso file", "errore cartella mancante", "errore could not find"]
source_hash: "8defb060ecbcb430"
ai_translated: true
source_hash: "8defb060ecbcb430"
---
L'errore **"Could not find a part of the path"** — seguito da una posizione come `C:\Users\...\AppData\Local\Deepchart\Database\...` — compare quando DeepCharts non riesce a trovare le cartelle di dati necessarie all'interno della sua directory di database locale. Segue quasi sempre un'eliminazione manuale di cartelle del database o dei simboli, e la soluzione di solito non è altro che un riavvio completo.

## Sintomo

- Una finestra di errore compare all'apertura di un grafico o durante il caricamento dei dati, con il testo "Could not find a part of the path" e un percorso file che punta alla directory di database locale (per esempio sotto `AppData\Local\Deepchart\Database`).
- Tipicamente si presenta subito dopo che tu (o uno strumento di pulizia) avete eliminato cartelle del database o dei simboli mentre la piattaforma era ancora in esecuzione, oppure dopo un'eliminazione di cartelle senza riavvio.

Si tratta di un problema del file system locale, non di un errore del feed dati o del server. Da non confondere con [[fix-system-cannot-find-file|"The System Cannot Find the File Specified"]], che è un errore diverso con cause diverse.

## Causa più probabile

Le cartelle di dati all'interno della directory del database di DeepCharts sono state rimosse manualmente, DeepCharts sta ancora facendo riferimento a percorsi che non esistono più e le cartelle non sono mai state rigenerate perché la piattaforma non è stata riavviata.

## Soluzione rapida

Riavvia completamente DeepCharts in modo che rigeneri le directory mancanti:

1. Chiudi DeepCharts.
2. Verifica che nessun processo DeepCharts sia ancora in esecuzione in background: apri **Task Manager**, cerca DeepCharts nell'elenco dei processi e, se è presente, fai clic con il tasto destro del mouse su di esso e scegli **End Task**.

[SCREENSHOT: Elenco dei processi del Task Manager di Windows con il processo DeepCharts selezionato e l'opzione End Task del tasto destro visibile | dc-it-fix-could-not-find-path-01.png]

3. Riapri DeepCharts — all'avvio rigenera automaticamente le directory necessarie.
4. Carica di nuovo il grafico interessato. L'errore dovrebbe essere risolto.

## Se non ha funzionato

### Causa: i dati del simbolo mancano o sono corrotti oltre la struttura delle cartelle

Il riavvio ha ricostruito le cartelle, ma i dati al loro interno sono incompleti o danneggiati. Elimina correttamente i dati del simbolo con lo strumento integrato nell'app e scaricali di nuovo:

1. Segui [[delete-market-data]] (Metodo 1, lo strumento Delete Data integrato nell'app).
2. Se lo storico non si ripopola da solo, scaricalo manualmente con [[download-data]].

### Causa: corruzione più estesa del database

Se gli errori di percorso continuano a ripresentarsi su più simboli, trattalo come un problema a livello di database e segui [[database-problems]] — fino ad arrivare, se necessario, alla ricostruzione della cartella del database.

## Ancora bloccato

Genera un [[diagnostic-report]] in modo che il supporto possa vedere esattamente quale percorso sta fallendo, poi contatta il team tramite [[get-help]].

## Come prevenirlo

- Chiudi DeepCharts prima di apportare qualsiasi modifica manuale alle cartelle del database.
- Preferisci lo strumento [[delete-market-data|Delete Data integrato nell'app]] all'eliminazione manuale delle cartelle.
- Riavvia sempre DeepCharts dopo qualsiasi manutenzione a livello di file.
- Non eliminare mai le cartelle di dati mentre un grafico è in fase di caricamento.

## Articoli correlati

- [[delete-market-data]]
- [[download-data]]
- [[database-problems]]
- [[fix-system-cannot-find-file]]
- [[get-help]]