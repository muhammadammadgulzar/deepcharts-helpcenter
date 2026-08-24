---
title: "Ri-scaricare i dati storici (strumento Download Data)"
slug: "download-data"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Usa lo strumento Download Data per riportare i dati storici di un simbolo nel tuo database locale — dopo aver eliminato dati corrotti o per pre-caricare la cronologia."
keywords: ["download data", "ri-scaricare dati", "dati storici", "backfill", "download da volserver", "cronologia mancante", "riscaricare", "download dati tick"]
source_hash: "2cdff48346bfd3e5"
ai_translated: true
source_hash: "2cdff48346bfd3e5"
---
Lo strumento **Download Data** scarica su richiesta i dati storici di un simbolo nel tuo database locale. Lo userai più spesso come seconda metà del ciclo di riparazione dei dati corrotti — prima elimini i dati danneggiati con [[delete-market-data]], poi ri-scarichi una copia pulita — ma è altrettanto utile per pre-caricare la cronologia prima di una sessione di replay o per riempire le barre di un simbolo che non grafichi da un po'. Alla fine di questa guida avrai scaricato dati storici freschi per un simbolo e confermato che sono arrivati.

## Prima di iniziare

- [[connect-data-feed|Il tuo feed dati è configurato e funzionante]].
- [[symbol-manage|Il simbolo è sottoscritto in Symbol Manage]].
- [[delete-market-data|Hai prima eliminato l'intervallo corrotto]] — necessario solo se stai riparando dati danneggiati anziché fare un semplice backfill.

## Passaggi

1. Vai su **Options → Download data**.

[SCREENSHOT: Il menu Options aperto sulla barra principale di DeepCharts con la voce Download data evidenziata | dc-it-download-data-01.png]

2. Seleziona il simbolo o i simboli che vuoi scaricare.
3. Imposta la **start date** (data di inizio) — quanto indietro deve arrivare il download. Per una riparazione da corruzione, parti almeno da dove inizia l'intervallo che hai eliminato; per la preparazione di un replay, copri l'intero intervallo di sessioni che intendi riprodurre.
4. Imposta il **Data Type**. **Tick** è l'opzione più granulare ed è ciò da cui sono costruiti gli strumenti di orderflow come footprint e profili. [CONFIRM: full list of Data Type options in the Download data window and the default selection]
5. Decidi se abilitare l'interruttore **Download From VolServer**. [CONFIRM: exact behavior of the Download From VolServer toggle — what source is used when it is on versus off, and the recommended setting for a standard repair]

[SCREENSHOT: La finestra Download data con un simbolo selezionato, una data di inizio impostata, Data Type impostato su Tick e l'interruttore Download From VolServer visibile | dc-it-download-data-02.png]

6. Avvia il download e lascia lavorare la finestra. Intervalli ampi di dati tick possono richiedere tempo, quindi evita di scaricare mesi di cronologia tick a metà sessione se ti servono solo pochi giorni. [CONFIRM: exact label of the button that starts the download]
7. Per seguire l'avanzamento, apri **Options → Show Logs** e controlla la scheda **Connection Logs** — mostra l'avanzamento del download dei dati del grafico mentre è in corso.

[SCREENSHOT: La finestra Show Logs sulla scheda Connection Logs che mostra le voci di avanzamento del download dei dati storici | dc-it-download-data-03.png]

### Se stai riparando dati corrotti

Esegui il ciclo di riparazione completo in questo ordine:

1. Elimina l'intervallo corrotto con [[delete-market-data]] (prima il metodo in-app).
2. Ri-scarica lo stesso intervallo con questo strumento.
3. Riapri il grafico e conferma che le barre danneggiate sono sparite.

### Se stai pre-caricando dati per il replay

Scarica le sessioni che intendi riprodurre prima di iniziare, poi segui [[replay-data]]. La scheda **Connection Logs** è il modo più semplice per confermare che i dati del replay hanno finito di caricarsi.

## Verifica che abbia funzionato

1. Apri un grafico per il simbolo e scorri indietro lungo l'intervallo scaricato.
2. Le barre storiche dovrebbero essere presenti e continue lungo l'intervallo che hai richiesto.
3. La scheda **Connection Logs** in **Options → Show Logs** dovrebbe mostrare l'attività di download completarsi senza errori.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| Errore "Could not find a part of the path" | Riavvia completamente DeepCharts — vedi [[fix-could-not-find-path]] |
| La cronologia scaricata mostra ancora gap | Vedi [[gaps-in-price]] — alcuni gap sono comportamento reale del mercato, non dati mancanti |
| I dati non si scaricano o i grafici restano vuoti | Verifica la sottoscrizione del simbolo in [[symbol-manage]] e il feed in [[manage-feed-connections]] |
| La corruzione ritorna dopo la riparazione | Trattala come un problema a livello di database — vedi [[database-problems]] |

## Articoli correlati

- [[delete-market-data]]
- [[database-problems]]
- [[database-optimization]]
- [[replay-data]]
- [[gaps-in-price]]
- [[fix-could-not-find-path]]