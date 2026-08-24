---
title: "Come installare DeepCharts e attivare la tua licenza"
slug: "install-deepcharts"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Scarica il programma di installazione, installa DeepCharts, attiva la tua chiave di licenza e completa la procedura guidata al primo avvio."
keywords: ["installare", "installazione", "configurazione", "chiave di licenza", "attivazione", "licenza non valida", "DeepchartsInstaller", "scaricare deepcharts", "prima configurazione"]
source_hash: "063b0288cd7a1b8f"
ai_translated: true
source_hash: "063b0288cd7a1b8f"
---
Alla fine avrai DeepCharts installato, la licenza attivata e la piattaforma pronta per connettere un feed dati.

## Prima di iniziare

- Verifica che la tua macchina soddisfi i [[system-requirements]].
- Tieni a portata di mano email e password del tuo account my.deepcharts.com — sia il download del programma di installazione sia la tua chiave di licenza si trovano in quella dashboard.
- Sappi da dove proviene la tua licenza: acquistata direttamente, si trova nel tuo account my.deepcharts.com; acquistata tramite una prop firm, sia il programma di installazione sia la licenza provengono invece dalla **dashboard della prop firm**.
- Facoltativo: le credenziali del feed dati se le hai già ([[buy-data-feed]]). In caso contrario, il feed gratuito ritardato funziona senza credenziali — vedi [[free-delayed-data-feed]].

## Passaggi

1. Accedi al tuo account su my.deepcharts.com con la tua email e la tua password.

[SCREENSHOT: Dashboard di my.deepcharts.com dopo l'accesso con l'area di download del programma di installazione di DeepCharts visibile | dc-it-install-deepcharts-01.png]

2. Scarica il file **DeepchartsInstaller.zip**.

3. Estrai l'archivio scaricato (fai clic con il tasto destro del mouse → **Extract All** (Estrai tutto) in Esplora file di Windows).

4. Disattiva temporaneamente il tuo software antivirus.

> **Attenzione:** Questo è il passaggio più spesso saltato e la causa numero uno delle installazioni non riuscite — i prodotti antivirus possono mettere in quarantena componenti del programma di installazione durante l'installazione. Riattiva l'antivirus non appena l'installazione termina.

5. Esegui **DeepchartsInstaller.exe**.

6. Accetta i termini e le condizioni di installazione, poi fai clic su **Install**.

[SCREENSHOT: Finestra del programma di installazione di DeepCharts al passaggio dei termini e condizioni con il pulsante Install visibile | dc-it-install-deepcharts-02.png]

7. Riavvia il PC se il programma di installazione te lo chiede.

8. Avvia DeepCharts dal collegamento sul Desktop. Compare una schermata di avvio ("Starting Application", poi "Loading Indicators") — la versione dell'app è mostrata nell'angolo in basso a destra della schermata, un'informazione utile quando contatti il supporto.

[SCREENSHOT: Schermata di avvio di DeepCharts con il testo Starting Application e il numero di versione nell'angolo in basso a destra | dc-it-install-deepcharts-03.png]

9. Nella finestra **License Key**, inserisci:
   - **E-mail** — l'email registrata su my.deepcharts.com
   - **License** — la chiave di licenza alfanumerica mostrata nel tuo account my.deepcharts.com

   Poi fai clic su **Login**. Il pulsante mostra un breve conto alla rovescia mentre la chiave viene verificata.

[SCREENSHOT: Finestra di attivazione License Key con i campi E-mail e License compilati, il pulsante Login e il messaggio Verifying License Key in basso | dc-it-install-deepcharts-04.png]

> **Suggerimento:** Incolla l'email e la chiave senza spazi iniziali o finali. Gli spazi residui dal copia-incolla sono di gran lunga la causa più comune dell'errore "Invalid License".

10. Completa la procedura guidata **Startup Wizard** in tre passaggi che si avvia al primo lancio:
    - **Datafeed** — scegli tra "I want to use 15 minutes delayed data powered by dxFeed for the moment" e "I have a datafeed and I want to configure and connect it".
    - **Symbol Manage** — controlla la tabella di mappatura tra exchange e feed (la procedura guidata pre-mappa per te i principali exchange). È la stessa finestra di **Options → Symbol Manage** — vedi [[symbol-manage]].
    - **Customize experience** — scegli un **Theme** e un **Alert sound profile**, poi fai clic su **Done**.

[SCREENSHOT: Passaggio del datafeed della Startup Wizard con le due opzioni radio - 15 minutes delayed data powered by dxFeed, e I have a datafeed and I want to configure and connect it | dc-it-install-deepcharts-05.png]

### Se non hai ancora le credenziali del feed dati

Scegli l'opzione dei dati ritardati nella procedura guidata — non richiede nome utente, password né accordi sui dati di mercato. Guida completa: [[free-delayed-data-feed]].

### Se hai già le credenziali del feed

Scegli "I have a datafeed and I want to configure and connect it" e inserisci i dettagli di connessione: un **Name** (nome) per la connessione, il **Feed Source** (il tuo fornitore) e il tuo **Username** e la tua **Password** ricevuti dal fornitore di dati. Salva e attendi che l'indicatore di connessione diventi verde. La finestra interattiva Feed Settings qui sotto mostra quegli stessi campi — cambia il menu a discesa Feed Source per vedere cosa richiede ciascun fornitore. Dettagli per ciascun fornitore: [[connect-data-feed]] e [[compatibility-guide]].

[WIDGET: feed-navigator]

### Se la tua licenza proviene da una prop firm

Scarica il file di installazione dalla dashboard della tua prop firm — non da my.deepcharts.com — e attiva con i dati di licenza che la prop firm ti ha rilasciato.

### Se stai aggiornando un'installazione esistente

Scarica l'ultimo programma di installazione dalla dashboard ed eseguilo — non serve disinstallare prima. Aggiorna l'installazione esistente sul posto e conserva le tue impostazioni.

> **Nota:** Le versioni BETA e STABLE non possono essere installate insieme sullo stesso PC — o l'una o l'altra.

## Verifica che abbia funzionato

- DeepCharts si apre sulla barra principale senza chiedere di nuovo la licenza.
- Il selettore **Feed** sulla barra principale mostra il nome della tua connessione con un punto di stato **verde** (se hai configurato un feed).
- **New → Price Chart** apre il selettore degli strumenti e un grafico si costruisce — vedi [[first-chart]].

[SCREENSHOT: Barra principale dopo una configurazione riuscita con il selettore Feed che mostra un nome di connessione e un punto di stato verde | dc-it-install-deepcharts-06.png]

## Se qualcosa è andato storto

| Sintomo | Dove andare |
|---|---|
| Il programma di installazione non si avvia, scompare o l'installazione fallisce | L'interferenza dell'antivirus è la causa abituale — vedi [[installation-problems]] |
| Messaggio "Installation Setup Failed" | [[installation-setup-failed]] |
| Una policy aziendale impedisce l'esecuzione dell'app | [[application-control-policy]] |
| "Invalid License" all'attivazione | Reincolla email e chiave senza spazi; se persiste, vedi [[license-issues]] |
| La connessione al feed non diventa mai verde | [[connect-data-feed]], poi [[fix-username-password]] |
| Il grafico si apre ma non si muove nulla | [[feed-connected-chart-not-moving]] |

## Articoli correlati

- [[system-requirements]]
- [[quick-start-first-trade]]
- [[free-delayed-data-feed]]
- [[connect-data-feed]]
- [[first-chart]]
- [[move-to-new-computer]]