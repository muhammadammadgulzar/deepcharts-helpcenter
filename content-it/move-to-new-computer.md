---
title: "Spostare DeepCharts su un nuovo computer"
slug: "move-to-new-computer"
category: "Account & Billing"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "30 min to complete"
description: "Migra DeepCharts su un nuovo PC: fai il backup di workspace e template, reinstalla e attiva la licenza, ricollega il feed e ripristina il tuo layout."
keywords: ["nuovo computer", "nuovo pc", "trasferire licenza", "spostare licenza", "migrare deepcharts", "reinstallare su un'altra macchina", "cambiare computer", "copiare workspace su nuovo pc", "trasferire impostazioni", "secondo computer"]
source_hash: "6d058399e1fa2c4b"
ai_translated: true
source_hash: "6d058399e1fa2c4b"
---
Alla fine avrai DeepCharts in esecuzione sul tuo nuovo computer con la licenza attivata, il feed dati connesso e i tuoi workspace e template salvati ripristinati.

Una migrazione ha due metà: le cose che seguono automaticamente il tuo account (la licenza, i workspace e i template salvati nel cloud, l'abbonamento al feed) e le cose che vivono solo sulla vecchia macchina (workspace e template salvati localmente, le credenziali del feed inserite nell'app, la mappatura di Symbol Manage e il database locale dei dati di mercato). I passaggi qui sotto assicurano che nulla del secondo gruppo venga lasciato indietro.

## Prima di iniziare

- Le credenziali di accesso a my.deepcharts.com e la chiave di licenza a portata di mano — vedi [[install-deepcharts]] per sapere dove si trova la chiave
- Il nome utente e la password del tuo feed dati — dalla pagina Subscriptions su my.deepcharts.com, oppure dall'email di benvenuto del tuo broker o della tua prop firm ([[buy-data-feed]])
- La nuova macchina soddisfa i [[system-requirements]]
- Entrambe le macchine disponibili per un po', così puoi copiare tutto ciò che la vecchia conserva ancora
- Facoltativo ma consigliato: leggi come differiscono l'archiviazione Local e Cloud in [[templates-workspaces]]

> **Nota:** La tua licenza consente l'installazione su un massimo di 5 dispositivi, ma l'account può essere attivo su un solo dispositivo alla volta. [CONFIRM: whether the old machine must be deactivated first, or whether activating the new machine is enough]

## Passaggi

### Parte 1: Backup sul vecchio computer

1. Apri DeepCharts sulla vecchia macchina e salva il tuo layout attuale come **Workspace**, scegliendo **Cloud** come destinazione. I salvataggi nel cloud sono legati al tuo account e alla tua licenza, quindi compaiono automaticamente su qualsiasi macchina che esegue la stessa licenza — il percorso di migrazione più semplice. Fai lo stesso per tutti i **Templates** dei grafici che vuoi conservare (fai clic con il tasto destro del mouse sul grafico → **Template → Save As** → **Cloud**). Guida completa: [[templates-workspaces]].

[SCREENSHOT: Finestra di salvataggio del workspace con la destinazione Cloud selezionata e un nome di workspace inserito, a illustrare un backup nel cloud prima della migrazione | dc-it-move-to-new-computer-01.png]

2. Se preferisci copiare i file (o non hai salvataggi nel cloud), copia le cartelle **Template** e **Workspace** da **Documenti → deepchart** sul vecchio PC su una chiavetta USB o un'unità cloud. Queste cartelle contengono ogni template e workspace salvato localmente.

[SCREENSHOT: Esplora file di Windows con la cartella Documents\deepchart e le sottocartelle Template e Workspace evidenziate per la copia | dc-it-move-to-new-computer-02.png]

> **Attenzione:** DeepCharts non salva automaticamente i layout. Tutto ciò che hai configurato ma non hai mai salvato come Workspace o Template non esiste da nessuna parte e non può essere migrato — salvalo adesso, prima di toccare la vecchia installazione.

3. Verifica di poter recuperare le credenziali del tuo feed. I nomi utente e le password del feed non vengono mai migrati con l'app — li reinserirai sulla nuova macchina. I feed acquistati sul sito li mostrano nella pagina **Subscriptions** di my.deepcharts.com ([[manage-subscriptions]]); le credenziali di broker e prop firm arrivano da quel provider.

4. Chiudi DeepCharts sulla vecchia macchina e lasciala chiusa. Eseguire la piattaforma su entrambe le macchine contemporaneamente può causare problemi di convalida della licenza — vedi [[license-issues]].

### Parte 2: Configura il nuovo computer

5. Accedi a my.deepcharts.com sulla nuova macchina e scarica l'installer più recente. Se la tua licenza proviene da una **prop firm**, scarica invece l'installer e i dettagli della licenza dal pannello della prop firm.

6. Installa e attiva, seguendo [[install-deepcharts]]: disabilita temporaneamente l'antivirus durante l'installazione, esegui l'installer, poi attiva con la tua email registrata e la chiave di licenza (incolla entrambe senza spazi iniziali o finali).

[SCREENSHOT: Finestra di attivazione License Key sul nuovo PC con i campi E-mail e License compilati e il pulsante Login visibile | dc-it-move-to-new-computer-03.png]

7. Ricollega il tuo feed dati. Apri **Feed Settings**, crea la connessione per il tuo provider e inserisci il nome utente e la password che hai raccolto al passaggio 3 — le credenziali devono sempre essere reinserite su una nuova installazione. Provalo nella finestra Feed Settings qui sotto: scegli la tua sorgente e guarda i campi cambiare in base al provider. Passaggi specifici per provider: [[connect-data-feed]].

[WIDGET: feed-navigator]

> **Nota:** Il tuo accordo sui dati di mercato è legato al tuo account del feed, non al computer — non devi firmarlo di nuovo per un cambio di macchina. Se la connessione viene comunque rifiutata, vedi [[fix-username-password]].

8. Mappa i tuoi exchange sulla nuova connessione in **Options → Symbol Manage**, allo stesso modo in cui la procedura guidata del primo avvio ha fatto sulla vecchia macchina — vedi [[symbol-manage]]. Esercitati con la mappatura nel mock qui sotto: fai clic sull'icona a catena per cambiare ciclicamente il feed a cui un exchange è mappato. Se al passaggio successivo carichi un workspace Cloud, controlla comunque la mappatura in seguito: la connessione al feed fa parte della nuova installazione, non del workspace.

[WIDGET: symbol-manage-mock]

9. Ripristina il tuo layout: apri il selettore **Workspace**, scegli l'opzione di caricamento e seleziona il tuo workspace dalla scheda **Cloud**. Se invece hai fatto un backup dei file, copiali prima in **Documenti → deepchart → Workspace** e **Template** sul nuovo PC, poi carica dalla scheda **Local**.

[SCREENSHOT: Selettore dei file workspace sul nuovo PC con la scheda Cloud selezionata e il workspace migrato visibile nell'elenco | dc-it-move-to-new-computer-04.png]

### Se vuoi spostare il tuo database dei dati di mercato (facoltativo)

I dati storici dei grafici sono archiviati in un database locale e si scaricano di nuovo automaticamente sulla nuova macchina man mano che apri i grafici, quindi la maggior parte degli utenti salta questo passaggio. Se hai un database di grandi dimensioni che preferiresti non riscaricare, la posizione del database è configurabile in **Options → Settings → General**, nella sezione **Various** (**Database folder**). Puoi copiare la cartella del database della vecchia macchina sulla nuova e puntare questa impostazione ad essa. Il comportamento esatto quando si scambiano le cartelle del database tra installazioni può variare — se il database copiato dà problemi, svuotalo e lascia che la piattaforma riscarichi i dati ([[download-data]]).

[SCREENSHOT: Options → Settings → General con la sezione Various visibile e l'impostazione della posizione Database folder evidenziata | dc-it-move-to-new-computer-05.png]

## Verifica che abbia funzionato

- DeepCharts si avvia sulla nuova macchina senza chiedere di nuovo la licenza.
- Il selettore **Feed** mostra la tua connessione con un punto verde.
- Il caricamento del tuo workspace ripristina ogni grafico e finestra, e i grafici si riempiono di dati (lo storico fresco può richiedere un momento per il download — l'avanzamento è visibile in **Options → Show Log → Connection Logs**).

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| "Invalid License" sulla nuova macchina | Incolla di nuovo email e chiave senza spazi; chiudi DeepCharts sul vecchio PC; vedi [[license-issues]] |
| La connessione al feed resta rossa | [[fix-username-password]], poi [[fix-unable-to-establish-connection]] |
| La scheda Cloud non mostra alcun workspace | Erano stati salvati localmente sul vecchio PC — copia le cartelle **Documenti → deepchart**, vedi [[templates-workspaces]] |
| I grafici si aprono ma restano vuoti | Controlla la mappatura di Symbol Manage ([[symbol-manage]]), poi [[feed-connected-chart-not-moving]] |
| Dati storici mancanti o incompleti | Lascia che si riscarichino, oppure forza il download con [[download-data]] |

## Articoli correlati

- [[install-deepcharts]]
- [[templates-workspaces]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[manage-subscriptions]]
- [[license-issues]]