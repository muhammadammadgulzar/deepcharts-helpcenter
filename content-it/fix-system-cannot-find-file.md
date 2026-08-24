---
title: "Correzione: The System Cannot Find the File Specified"
slug: "fix-system-cannot-find-file"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Risolvi l'errore di connessione 'The system cannot find the file specified' causato da un Volumetrica Bridge mancante o bloccato dall'antivirus."
keywords: ["The system cannot find the file specified", "Connection Failed system cannot find", "Volumetrica Bridge", "VolumetricaBridge.exe", "quarantena McAfee deepcharts", "bridge mancante", "il sistema non trova il file"]
source_hash: "99cdd4d6b4e4eb6e"
ai_translated: true
source_hash: "99cdd4d6b4e4eb6e"
---
Questo errore appare quando DeepCharts non riesce a individuare o avviare il **Volumetrica Bridge**, un componente in background di cui la piattaforma ha bisogno per le connessioni al feed dati. Durante l'installazione, DeepCharts crea automaticamente una cartella `Volumetrica Bridge` e, quando tutto funziona, vedrai il Volumetrica Bridge in esecuzione in background. Se questo errore appare, il Bridge è mancante oppure viene bloccato.

## Sintomo

Quando colleghi un feed dati, la connessione fallisce con:

**Connection Failed: The system cannot find the file specified**

[SCREENSHOT: La finestra di errore di connessione con il messaggio completo "Connection Failed: The system cannot find the file specified" | dc-it-fix-system-cannot-find-file-01.png]

Da non confondere con:

- [[fix-could-not-find-path]] — un errore di "percorso" diverso, legato al database locale, non al Bridge.
- [[fix-unable-to-establish-connection]] — un errore a livello di rete in cui il Bridge è in esecuzione ma il server non è raggiungibile.

## Causa più probabile

Il Volumetrica Bridge è mancante o bloccato: o l'installer non è riuscito a creare la cartella `Volumetrica Bridge`, oppure il tuo antivirus (McAfee in particolare) ha messo in quarantena `VolumetricaBridge.exe`.

> **Suggerimento:** Se usi McAfee o un altro antivirus aggressivo, controlla prima la sua quarantena (vedi sotto) — altrimenti l'antivirus potrebbe mettere di nuovo in quarantena il Bridge subito dopo il ripristino dell'installazione.

## Soluzione rapida

Ripara l'installazione così che l'installer ricrei il Bridge mancante:

1. Chiudi completamente DeepCharts.
2. Individua il tuo installer originale di DeepCharts (`.exe`). Se non lo hai più, scaricalo di nuovo dalla fonte ufficiale — vedi [[install-deepcharts]].
3. Esegui l'installer e scegli l'opzione **Repair** (Ripristina).

[SCREENSHOT: La finestra dell'installer di DeepCharts con l'opzione Repair visibile ed evidenziata | dc-it-fix-system-cannot-find-file-02.png]

4. Lascia che il processo di riparazione finisca completamente.
5. Riapri DeepCharts e ricollega il feed dati.

Nella maggior parte dei casi, l'errore si risolve dopo questo passaggio.

## Se non ha funzionato

### Causa: McAfee ha messo in quarantena VolumetricaBridge.exe

McAfee può segnalare erroneamente `VolumetricaBridge.exe` e spostarlo in quarantena. Ripristinalo ed escludilo dalle scansioni future:

1. Chiudi completamente DeepCharts.
2. Apri McAfee Antivirus.
3. Vai su **Menu → Quarantined Items** (elementi in quarantena).
4. Trova `VolumetricaBridge.exe` nell'elenco e seleziona **Restore** (Ripristina).

[SCREENSHOT: Schermata Quarantined Items di McAfee con VolumetricaBridge.exe nell'elenco e l'azione Restore visibile | dc-it-fix-system-cannot-find-file-03.png]

5. Aggiungi il file alle esclusioni della scansione: vai su **Menu → Real-Time Scanning → Add File**.
6. Naviga fino a `VolumetricaBridge.exe` e selezionalo. [CONFIRM: default installation path of the Volumetrica Bridge folder]

[SCREENSHOT: Schermata delle esclusioni Real-Time Scanning di McAfee dopo l'aggiunta di VolumetricaBridge.exe | dc-it-fix-system-cannot-find-file-04.png]

7. Chiudi McAfee e riavvia DeepCharts.

> **Nota:** Ripristina ed escludi solo file che riconosci. `VolumetricaBridge.exe` è un componente legittimo di DeepCharts.

### Causa: un altro antivirus o una policy di sicurezza sta bloccando il Bridge

Anche altri prodotti antivirus possono mettere in quarantena il Bridge allo stesso modo. Controlla la quarantena del tuo prodotto, ripristina `VolumetricaBridge.exe` e aggiungilo all'elenco delle esclusioni. Se invece il blocco proviene da una policy di controllo delle applicazioni di Windows, vedi [[application-control-policy]].

## Ancora bloccato

Genera un [[diagnostic-report]] così il supporto potrà vedere se il Bridge è presente e in esecuzione, poi contatta il team tramite [[get-help]].

## Come prevenirlo

- Installa DeepCharts solo con l'installer ufficiale — vedi [[install-deepcharts]].
- Non forzare la chiusura dell'installer durante il setup; un'installazione interrotta può lasciare la cartella del Bridge mancante.
- Inserisci il Volumetrica Bridge nella whitelist del tuo software antivirus, così non verrà più messo in quarantena.

## Articoli correlati

- [[install-deepcharts]]
- [[installation-problems]]
- [[installation-setup-failed]]
- [[application-control-policy]]
- [[fix-could-not-find-path]]
- [[fix-unable-to-establish-connection]]