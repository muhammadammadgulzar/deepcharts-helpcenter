---
title: "Risoluzione: problemi di installazione e requisiti di base"
slug: "installation-problems"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Cosa controllare quando il programma di installazione di DeepCharts fallisce, scompare o non si completa: antivirus, .NET Framework, spazio su disco e versione del programma di installazione."
keywords: ["problema di installazione", "installazione fallita", "il programma di installazione non si avvia", "impossibile installare deepcharts", "requisiti di base", ".net framework 4.8", "antivirus blocca installazione", "spazio su disco insufficiente", "problema installazione"]
source_hash: "d89766648cf9ddb7"
ai_translated: true
source_hash: "d89766648cf9ddb7"
---
Hai scaricato DeepCharts ma l'installazione non si completa — il programma di installazione fallisce, si chiude senza terminare, oppure la piattaforma non compare dopo. Questa guida passa in rassegna i quattro requisiti di base che causano quasi tutte le installazioni fallite, iniziando dal più comune.

## Sintomo

- Il programma di installazione di DeepCharts fallisce, si ferma a metà o si chiude senza installare nulla.
- L'installazione sembra completarsi, ma DeepCharts manca o non si avvia dopo.

Da non confondere con:

- [[installation-setup-failed]] — vedi la finestra di errore specifica **Installation Setup Failed** con un pulsante **Log File**.
- [[application-control-policy]] — Windows mostra "An Application Control policy has blocked this file".
- [[license-issues]] — la piattaforma si installa correttamente ma l'attivazione o la licenza falliscono.

## Causa più probabile

Un software antivirus di terze parti che interferisce con il programma di installazione — i prodotti antivirus possono mettere in quarantena componenti del programma di installazione durante l'installazione, il che si manifesta come un'installazione fallita o completata a metà.

## Soluzione rapida

Esegui un'installazione pulita con solo Windows Defender attivo:

1. Chiudi qualsiasi programma di installazione in esecuzione e chiudi DeepCharts se è aperto.
2. Disattiva temporaneamente **tutti** i prodotti antivirus di terze parti, lasciando attivo solo **Windows Defender**.

[SCREENSHOT: La dashboard di un antivirus di terze parti con l'interruttore della protezione in tempo reale disattivato, che mostra la protezione temporaneamente disabilitata | dc-it-installation-problems-01.png]

3. Scarica una copia nuova del programma di installazione dalla tua dashboard my.deepcharts.com ed esegui di nuovo l'installazione — vedi [[install-deepcharts]] per la guida completa.
4. Riattiva l'antivirus non appena l'installazione termina.

> **Attenzione:** Non lasciare l'antivirus disattivato più a lungo del necessario per l'installazione. Riattivalo subito dopo.

Se l'installazione fallisce ancora con l'antivirus disattivato, procedi con i requisiti rimanenti qui sotto.

## Se non ha funzionato

### Causa: manca .NET Framework 4.8 o successivo

DeepCharts richiede il pacchetto **.NET Framework 4.8** o successivo. Le build recenti di Windows 10 e Windows 11 di norma lo includono già, ma installazioni di Windows più vecchie o fortemente ridotte potrebbero non averlo.

1. Scarica il runtime .NET Framework 4.8 dal sito ufficiale di Microsoft: https://dotnet.microsoft.com/download/dotnet-framework
2. Esegui il programma di installazione — se il framework è già presente, il setup te lo comunica e puoi escludere questa causa.
3. Riavvia il PC, poi esegui di nuovo il programma di installazione di DeepCharts.

### Causa: spazio libero insufficiente sul Disco locale (C:)

L'installazione richiede spazio disponibile sul **Disco locale (C:)** — e DeepCharts in seguito memorizza per impostazione predefinita i dati di mercato scaricati sulla stessa unità, quindi un disco quasi pieno causa problemi anche oltre l'installazione.

1. Apri **Esplora file → Questo PC** e controlla lo spazio libero mostrato sotto **Disco locale (C:)**.

[SCREENSHOT: Vista Questo PC di Esplora file con la barra dell'unità Disco locale C: visibile che mostra lo spazio libero rimanente | dc-it-installation-problems-02.png]

2. Libera spazio se l'unità è quasi piena, poi esegui di nuovo il programma di installazione.
3. Se una vecchia installazione di DeepCharts occupa spazio con i dati di mercato, vedi [[delete-market-data]].

### Causa: stai installando una versione obsoleta

Installa sempre l'ultima versione della piattaforma. Il numero di versione corrente è indicato accanto al pulsante di download nella tua dashboard my.deepcharts.com.

[SCREENSHOT: Area di download della dashboard di my.deepcharts.com con il numero di versione accanto al pulsante di download evidenziato | dc-it-installation-problems-03.png]

1. Accedi alla tua dashboard my.deepcharts.com.
2. Confronta la versione accanto al pulsante di download con il programma di installazione che hai — se differiscono, scarica l'ultimo programma di installazione ed esegui quello.

## Ancora bloccato

Genera un [[diagnostic-report]] se la piattaforma si avvia almeno in parte, fai uno screenshot di qualsiasi errore che vedi e contatta il supporto tramite [[get-help]] — indica quali dei quattro controlli qui sopra hai già provato.

## Come prevenirlo

- Rivedi i [[system-requirements]] prima di installare su una nuova macchina.
- Segui [[install-deepcharts]] passo dopo passo — include il passaggio sull'antivirus al momento giusto.
- Mantieni abbastanza spazio libero sul Disco locale (C:); il database locale dei dati di mercato cresce nel tempo.

## Articoli correlati

- [[install-deepcharts]]
- [[system-requirements]]
- [[installation-setup-failed]]
- [[application-control-policy]]
- [[license-issues]]
- [[get-help]]