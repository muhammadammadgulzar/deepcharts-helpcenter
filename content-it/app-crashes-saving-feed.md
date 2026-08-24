---
title: "Fix: l'app va in crash salvando le impostazioni del feed"
slug: "app-crashes-saving-feed"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Risolvi i crash di DeepCharts quando fai clic su Save in Feed Settings — permessi, lingua di Windows o file di configurazione corrotti."
keywords: ["crash al salvataggio", "l'app va in crash salvando le impostazioni del feed", "crash impostazioni feed", "config.settings", "connProp.settings", "DPC_Log", "DeepCharts si chiude durante il salvataggio"]
source_hash: "9272d8d542ee0829"
ai_translated: true
source_hash: "9272d8d542ee0829"
---
Compili i dettagli del tuo feed, fai clic su **Save** in **Feed Settings** — e DeepCharts va in crash. Ci sono tre cause note: permessi di amministratore mancanti, una lingua di sistema Windows diversa dall'inglese e file di configurazione corrotti. Affrontale in quest'ordine; ogni soluzione è più impegnativa della precedente.

## Sintomo

- DeepCharts va in crash (si chiude in modo inatteso) nel momento in cui fai clic su **Save** in **Feed Settings**.
- Il crash può verificarsi ogni volta o solo salvando una connessione specifica.

La causa esatta è di solito visibile nel file di log più recente dell'applicazione — cerca il file creato più di recente che segue lo schema di denominazione `DPC_Log_Date.txt`. [CONFIRM: exact folder where DPC_Log files are stored]

Questa è la finestra in cui avviene il crash — il mock interattivo qui sotto mostra gli stessi campi di Feed Settings che stavi compilando prima di fare clic su **Save**.

[WIDGET: feed-navigator]

## Causa più probabile

DeepCharts ha bisogno del permesso di leggere e scrivere i propri file di configurazione (come `config.settings`) quando salva un feed. Senza privilegi di amministratore, il salvataggio può far crashare l'applicazione.

## Soluzione rapida

Esegui DeepCharts come amministratore:

1. Chiudi completamente DeepCharts.
2. Individua `DeepChart.exe` sul tuo sistema.
3. Fai clic con il tasto destro del mouse e seleziona **Run as administrator** (Esegui come amministratore).

[SCREENSHOT: Menu contestuale di Esplora file di Windows su DeepChart.exe con "Run as administrator" evidenziato | dc-it-app-crashes-saving-feed-01.png]

4. Apri di nuovo **Feed Settings** e fai clic su **Save**.

> **Suggerimento:** Eseguire DeepCharts come amministratore è consigliato in generale, in particolare durante la configurazione iniziale, così l'app può sempre scrivere i propri file di configurazione.

## Se non ha funzionato

### Causa: la lingua di sistema di Windows non è l'inglese

Una lingua di sistema Windows diversa dall'inglese può impedire a DeepCharts di leggere o scrivere correttamente i valori di configurazione durante il salvataggio.

1. Cambia la lingua di visualizzazione e di sistema di Windows in **English** (Impostazioni di Windows → Time & Language → Language).
2. Riavvia il PC.
3. Avvia DeepCharts e prova di nuovo a salvare le impostazioni del feed.

### Causa: file di configurazione corrotti

Se `config.settings` o `connProp.settings` sono corrotti, l'app va in crash ogni volta che prova a salvarli o aggiornarli. La soluzione è rimuovere la configurazione salvata così DeepCharts la ricrea.

> **Attenzione:** Eliminare la cartella AppData reimposta le tue impostazioni locali. Dovrai riconfigurare il tuo feed dati in seguito — tieni a portata di mano le tue credenziali e vedi [[connect-data-feed]].

1. Apri Esplora file e vai su **Local Disk (C:) → Users → [la tua cartella utente]**.
2. Attiva i file nascosti: **View → Show → Hidden items**.

[SCREENSHOT: Menu View di Esplora file aperto con Show > Hidden items spuntato, nella cartella del profilo utente | dc-it-app-crashes-saving-feed-02.png]

3. Apri la posizione **AppData** ed elimina la cartella dell'applicazione DeepCharts. [CONFIRM: exact AppData subpath (Local or Roaming) and exact folder name]

[SCREENSHOT: Cartella AppData in Esplora file con la cartella dell'applicazione DeepCharts selezionata prima dell'eliminazione | dc-it-app-crashes-saving-feed-03.png]

4. Riavvia DeepCharts come amministratore e configura di nuovo le impostazioni del feed.

> **Nota:** Evita di forzare la chiusura dell'applicazione mentre le impostazioni vengono salvate — una scrittura interrotta è uno dei modi in cui questi file si corrompono in primo luogo.

## Ancora bloccato

Esamina il file `DPC_Log_Date.txt` più recente per informazioni dettagliate sul crash — se non riesci a interpretarlo, genera un [[diagnostic-report]] e contatta il supporto tramite [[get-help]], allegando il log.

## Come prevenirlo

- Esegui DeepCharts come amministratore, soprattutto durante la configurazione iniziale.
- Non forzare mai la chiusura dell'app mentre sta salvando le impostazioni.
- Segui [[connect-data-feed]] quando configuri i feed, così ogni campo viene salvato in un unico passaggio.

## Articoli correlati

- [[connect-data-feed]]
- [[manage-feed-connections]]
- [[fix-system-cannot-find-file]]
- [[installation-problems]]
- [[get-help]]