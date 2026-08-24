---
title: "Impostazioni generali"
slug: "general-settings"
category: "How To"
subcategory: ""
type: "how-to"
difficulty: "beginner"
time: "12 min read"
description: "Il pannello General Settings (Impostazioni generali) è il centro di configurazione di DeepDOM."
keywords: ["impostazioni generali", "impostazioni generali deepdom", "deepdom", "guida"]
source_hash: "fd4d9fd1de729bdc"
ai_translated: true
source_hash: "fd4d9fd1de729bdc"
---
Il pannello General Settings (Impostazioni generali) è il centro di configurazione di DeepDOM. È qui che controlli tutto ciò che influenza il comportamento globale della piattaforma — dalle preferenze di visualizzazione e dalle prestazioni del grafico ai valori predefiniti di trading, ai conti di simulazione, ai suoni di avviso e alle scorciatoie da tastiera.

## Come aprire le impostazioni generali

Fai clic su Options nella barra dei menu in alto.

Seleziona Settings dal menu a discesa.

[SCREENSHOT: Impostazioni generali — Come aprire le impostazioni generali (DeepDOM) | dd-it-general-settings-01.png]

Si aprirà la finestra General Settings con cinque schede — General, Alert, Sim Account, Trading Quantity e Shortcuts.

[SCREENSHOT: Impostazioni generali — Come aprire le impostazioni generali (DeepDOM) | dd-it-general-settings-02.png]

## Scheda 1 — General

Questa scheda contiene tutte le impostazioni principali a livello di piattaforma, organizzate in quattro sezioni.

[SCREENSHOT: Impostazioni generali — Scheda 1 — General (DeepDOM) | dd-it-general-settings-03.png]

### General

[SCREENSHOT: Impostazioni generali — General (DeepDOM) | dd-it-general-settings-04.png]

Language Imposta la lingua di visualizzazione della piattaforma. Opzioni disponibili:

Inglese

Italiano

Spagnolo

Tedesco

Cinese

Time Zone List Imposta il fuso orario usato in tutta la piattaforma per tutte le visualizzazioni basate sull'orario, incluso il grafico, il Time and Sales e gli avvisi. Imposta sempre il fuso orario dell'exchange su cui fai trading, così tutti gli orari di sessione e i timestamp saranno accurati.

Theme Imposta il tema visivo della piattaforma. Opzioni disponibili:

Dark

Dark (Standard)

Blue

Light

Light (Standard)

Purple

Notification Sounds Imposta la voce predefinita usata per le notifiche della piattaforma. Opzioni disponibili:

Warzone

Female - Emily

Female - Daniela

Male

Always on Top Quando è attivo, la finestra di DeepDOM rimarrà sempre in primo piano rispetto a tutte le altre finestre aperte sul tuo schermo. Utile se usi più applicazioni contemporaneamente e vuoi che DeepDOM resti sempre visibile.

### Refresh Time (MS)

[SCREENSHOT: Impostazioni generali — Refresh Time (MS) (DeepDOM) | dd-it-general-settings-05.png]

Questa sezione controlla la frequenza con cui la piattaforma aggiorna le sue visualizzazioni di dati. I valori sono in millisecondi — più basso è il numero, più rapida è la frequenza di aggiornamento.

Chart Imposta la frequenza con cui il grafico aggiorna la sua visualizzazione. Il valore predefinito è 50 ms, il che significa che il grafico si aggiorna 20 volte al secondo. Abbassando questo valore il grafico diventa più reattivo ai cambiamenti in tempo reale. Aumentandolo si riduce l'uso della CPU se riscontri problemi di prestazioni.

Time Sales Imposta la frequenza con cui si aggiorna il pannello Time and Sales. Il valore predefinito è 300 ms. Un valore più basso ti offre un flusso di esecuzioni più rapido e vicino al tempo reale. Un valore più alto è più facile da leggere nei mercati più lenti.

Nota: ridurre i tempi di aggiornamento aumenta la reattività della piattaforma ma anche l'uso di CPU e memoria. Se il tuo sistema è lento, prova ad aumentare leggermente questi valori.

[SCREENSHOT: Impostazioni generali — Refresh Time (MS) (DeepDOM) | dd-it-general-settings-06.png]

Daily P/L — Display Mode Imposta come viene visualizzato il tuo profitto e perdita giornaliero sul pannello di trading. Opzioni disponibili:

Money — mostra il P/L in valore di valuta.

Ticks — mostra il P/L in tick.

Open P/L — Display Mode Imposta come viene visualizzato il profitto e perdita della tua posizione aperta. Si aggiorna in tempo reale man mano che la tua posizione aperta si muove. Opzioni disponibili:

Money — mostra il P/L in valore di valuta.

Ticks — mostra il P/L in tick.

Ticks per Contract — mostra il P/L in tick calcolati per singolo contratto.

Breakeven — Ticks Imposta il numero di tick usato per calcolare il tuo livello di breakeven. Se impostato a 0, il breakeven viene calcolato esattamente al prezzo di ingresso. Aumentando questo valore aggiungi un margine di tick per tenere conto di commissioni o slippage nel calcolo del breakeven.

Trading Panel — Show Balance Quando è attivo, il saldo del tuo conto viene mostrato sul pannello di trading. Disattivalo se preferisci non vedere il saldo mentre fai trading.

Trading Panel — Show Equity Quando è attivo, l'equity del tuo conto viene mostrata sul pannello di trading. Disattivalo se preferisci non vedere la tua equity mentre fai trading.

### Various

[SCREENSHOT: Impostazioni generali — Various (DeepDOM) | dd-it-general-settings-07.png]

​Simulation — Stop Order Condition Definisce come vengono attivati gli ordini stop in modalità simulazione. Questa impostazione esiste perché alcuni feed dati possono avere problemi con i dati Bid/Ask storici — avere due opzioni ti permette di evitare esecuzioni errate degli ordini a seconda della qualità del tuo feed dati. Opzioni disponibili:

Last — l'ordine stop si attiva in base all'ultimo prezzo scambiato. È l'impostazione predefinita ed è consigliata se riscontri problemi con i dati Bid/Ask storici, perché evita qualsiasi dipendenza dall'accuratezza del feed Bid/Ask.

Bid Ask — l'ordine stop si attiva in base al prezzo Bid o Ask. Gli ordini stop di acquisto si attivano sul prezzo Ask e gli ordini stop di vendita sul prezzo Bid, il che rispecchia più fedelmente il comportamento degli ordini stop nelle condizioni di mercato reali.

Nota: se noti esecuzioni errate o inattese degli ordini durante la simulazione, prova a passare alla modalità Last. Il problema è spesso causato da lacune o incongruenze nei dati Bid/Ask storici del tuo feed dati.

Strategy Report — Text Size Imposta la dimensione del carattere usata nella visualizzazione del report di strategia.

Database Folder Mostra il percorso locale in cui DeepDOM memorizza i dati dell'applicazione. È importante capire che i dati della Heatmap non vengono salvati sul tuo disco rigido — funzionano interamente sulla RAM del tuo computer. Questo significa che ogni volta che apri un grafico e carichi la Heatmap per un simbolo, DeepDOM scarica i dati da zero e li carica direttamente in memoria. La quantità di dati caricata in RAM dipende dalla tua impostazione Historical Depth — più ore di storico carichi, più RAM viene utilizzata.

Quando chiudi la Heatmap o il grafico, i dati in cache vengono cancellati automaticamente dalla RAM. Nulla viene memorizzato in modo permanente sul tuo disco rigido. Ecco perché ogni volta che riapri un grafico la Heatmap impiega qualche istante a ricaricarsi — riparte sempre da uno stato pulito.

Suggerimento: se riscontri tempi di caricamento lenti o un uso elevato della memoria, prova a ridurre l'impostazione Historical Depth per caricare meno dati in RAM.

Nota: se riscontri problemi legati alla cache con DeepDOM, consulta l'articolo dedicato: Problemi di cache - DeepDom

Screenshot Save Dialog Quando è attivo, DeepDOM ti chiederà di scegliere una posizione di salvataggio ogni volta che catturi uno screenshot. Quando è disattivato, gli screenshot vengono salvati automaticamente nella posizione predefinita.

Screenshot Monitor Quando è attivo, DeepDOM cattura negli screenshot l'intero monitor anziché soltanto la finestra dell'applicazione.

Check Real Time Delay Quando è attivo, DeepDOM monitora il ritardo tra il tuo feed dati e il tempo reale e ti avviserà se il feed rimane indietro. Utile per rilevare problemi di connessione o di latenza durante il trading dal vivo.

### Alert Trading

Questa sezione controlla quali eventi di trading attivano avvisi audio e quale suono viene usato per ciascuno.

[SCREENSHOT: Impostazioni generali — Alert Trading (DeepDOM) | dd-it-general-settings-08.png]

Enable Order Submitted: quando è attivo, un avviso audio viene riprodotto ogni volta che un ordine viene inviato con successo al mercato.

Order Submitted Alert: fai clic su Select per scegliere il file audio riprodotto quando un ordine viene inviato.

Enable Order Filled: quando è attivo, un avviso audio viene riprodotto ogni volta che uno dei tuoi ordini viene eseguito.

Order Filled Alert: fai clic su Select per scegliere il file audio riprodotto quando un ordine viene eseguito.

Enable Order Cancelled: quando è attivo, un avviso audio viene riprodotto ogni volta che uno dei tuoi ordini viene annullato.

Order Cancelled Alert: fai clic su Select per scegliere il file audio riprodotto quando un ordine viene annullato.

Enable Order Rejected: quando è attivo, un avviso audio viene riprodotto ogni volta che uno dei tuoi ordini viene rifiutato dal broker o dall'exchange.

Order Rejected Alert: fai clic su Select per scegliere il file audio riprodotto quando un ordine viene rifiutato.

Discard Nearly Sounds: quando è attivo, i suoni di avviso duplicati che si attivano in rapidissima successione vengono scartati, così non senti lo stesso avviso ripetersi più volte a distanza di millisecondi. Utile nei mercati veloci, dove più eventi ordine possono verificarsi quasi simultaneamente.

## Scheda 2 — Alert

Questa scheda gestisce i suoni di avviso personalizzati disponibili in tutta la piattaforma. Prima di poter assegnare un suono a un avviso di un indicatore o di un'annotazione, devi prima aggiungere il suono qui nella scheda Alert. Una volta aggiunto qui, il suono diventerà selezionabile nelle opzioni audio di qualsiasi indicatore o annotazione in tutta la piattaforma. Se qui non è stato aggiunto alcun suono, la selezione dei suoni nei tuoi indicatori e nelle tue annotazioni apparirà vuota.

DeepDOM include un set di suoni di avviso predefiniti già pronti all'uso. Puoi anche aggiungere i tuoi suoni personalizzati in qualsiasi momento.

[SCREENSHOT: Impostazioni generali — Scheda 2 — Alert (DeepDOM) | dd-it-general-settings-09.png]

Ogni avviso nell'elenco mostra il suo Name e il percorso del file audio sul tuo computer.

Fai clic sul pulsante Play (freccia verde) per ascoltare in anteprima il suono prima di assegnarlo.

Fai clic sull'icona Settings per rinominare o riconfigurare l'avviso.

Fai clic sull'icona Delete (cestino rosso) per rimuovere l'avviso dall'elenco.

Fai clic su Add per aggiungere un nuovo file audio personalizzato dal tuo computer.

Nota: DeepDOM supporta file audio .wav. Se vuoi usare un suono personalizzato per qualsiasi avviso nella piattaforma, aggiungilo prima qui — apparirà poi come opzione ovunque sia possibile assegnare i suoni. Per ricevere gli avvisi, assicurati che i tipi di avviso siano abilitati andando su Options → Alerts e verificando che Alert Sound, Message Popup, Webinar e Trading Sound siano selezionati. Per una guida passo passo completa sulla configurazione delle notifiche sonore, consulta l'articolo dedicato: Come inserire le notifiche sonore

[SCREENSHOT: Impostazioni generali — Scheda 2 — Alert (DeepDOM) | dd-it-general-settings-10.png]

## Scheda 3 — Sim Account

La scheda Sim Account ti consente di creare e gestire conti di simulazione per il trading in simulazione. I conti di simulazione ti permettono di esercitarti a fare trading in DeepDOM usando dati di mercato reali in tempo reale senza rischiare denaro vero.

[SCREENSHOT: Impostazioni generali — Scheda 3 — Sim Account (DeepDOM) | dd-it-general-settings-11.png]

Come aggiungere un conto SIM:

Fai clic sul pulsante Add.

Inserisci un Name per il conto.

Imposta il Balance — il capitale virtuale iniziale del conto.

Fai clic su Add per confermare.

Puoi creare più conti di simulazione con saldi diversi per testare strategie o dimensioni di posizione differenti. I tuoi conti di simulazione appaiono nel selettore dei conti sul pannello di trading, permettendoti di passare in qualsiasi momento dal trading reale a quello in simulazione.

Nota: per una guida completa all'uso dell'ambiente di simulazione in DeepDOM, consulta l'articolo dedicato: Ambiente di simulazione

## Scheda 4 — Trading Quantity

La scheda Trading Quantity ti consente di impostare le quantità di ordine predefinite per ogni strumento su cui fai trading. Questo ti fa risparmiare tempo durante il trading dal vivo, precompilando automaticamente la dimensione dell'ordine quando passi a un simbolo specifico.

[SCREENSHOT: Impostazioni generali — Scheda 4 — Trading Quantity (DeepDOM) | dd-it-general-settings-12.png]

Come aggiungere una Trading Quantity:

Fai clic sul pulsante Add.

Apparirà una finestra che ti chiederà di selezionare lo strumento. Una volta selezionato il simbolo, si apriranno le impostazioni di configurazione della Trading Quantity.

Imposta la Default Quantity — il numero di contratti che verrà precompilato per impostazione predefinita quando fai trading su questo strumento.

Imposta la Increment Quantity — l'importo di cui la quantità aumenta o diminuisce ogni volta che fai clic sulle frecce della quantità sul pannello di trading.

Imposta il BidAsk Tick Diff — definisce la differenza in tick tra Bid e Ask usata nei calcoli di inserimento degli ordini su questo strumento.

Fai clic su OK per salvare.

Una volta salvate le impostazioni, dovrai riavviare la piattaforma perché le modifiche abbiano effetto.

[SCREENSHOT: Impostazioni generali — Scheda 4 — Trading Quantity (DeepDOM) | dd-it-general-settings-13.png]

Questo è particolarmente utile per i trader che passano da uno strumento all'altro con dimensioni predefinite diverse — invece di regolare manualmente la quantità ogni volta, questa viene impostata automaticamente quando selezioni il simbolo.

## Scheda 5 — Shortcuts

La scheda Shortcuts ti offre un elenco completo di tutte le scorciatoie da tastiera disponibili in DeepDOM, organizzate per categoria e tipo. Puoi registrare nuove combinazioni o rimuovere quelle esistenti per adattarle al tuo flusso di lavoro personale.

[SCREENSHOT: Impostazioni generali — Scheda 5 — Shortcuts (DeepDOM) | dd-it-general-settings-14.png]

General

Replay Play/Pause

Reset open windows — Ctrl Alt R

Take screenshot — Ctrl Alt I

Workspace close — Ctrl Alt C

Workspace next — Ctrl Alt +

Workspace open — Ctrl Alt O

Workspace previous — Ctrl Alt -

Workspace save — Ctrl Alt S

Chart — Actions

Annotation Export

Annotation Import

Annotation snap — Ctrl S

Change symbol — Ctrl C

Erase All — Ctrl Backspace

Indicators — Ctrl I

Properties — Ctrl P

Chart — Controls

Crosshair — Alt C

Hand — Alt H

Pointer — Alt P

Zoom Range — Alt R

Chart — Drawing Tools

Fibo Projection

Fibo Retracement — Shift R

Horizontal Line — Shift H

Line — Shift L

Parallel Line — Shift P

Ray

Rectangle — Shift R

Chart — Scroll

Move last — Ctrl Z

Move left — Ctrl ←

Move right — Ctrl →

Zoom — Ctrl -

Zoom + — Ctrl +

Chart — Tool Config

TC1 (Default) — F1

TC2 — F2

TC3 — F3

TC4 — F4

TC5 — F5

TC6 — F6

TC7 — F7

TC8 — F8

TC9 — F9

Chart — Trading

B/E — Add or Move orders

B/E — Move existing orders

Enable/Disable — Ctrl Alt T

Enable/Disable OCO

Order Buy Bid

Order Buy Limit

Order Buy Market

Order Buy Stop

Order Buy Stop Limit

Order Cancel and Flat

Order Cancel All

Order Sell Ask

Order Sell Limit

Order Sell Market

Order Sell Stop

Order Sell Stop Limit

Show/Hide Historical — Ctrl Alt H

Show/Hide Panel — Ctrl Alt P

Nota: alcune scorciatoie non hanno una combinazione di tasti assegnata per impostazione predefinita. Puoi registrare e assegnare la tua combinazione a qualsiasi scorciatoia non assegnata in qualsiasi momento.

Per ogni scorciatoia nell'elenco:

Fai clic sull'icona Record per assegnare o modificare la combinazione di tasti di quella scorciatoia.

Fai clic sull'icona Delete per rimuovere la combinazione assegnata a quella scorciatoia.

[SCREENSHOT: Impostazioni generali — Scheda 5 — Shortcuts (DeepDOM) | dd-it-general-settings-15.png]

Nota: per una guida passo passo completa alla configurazione e personalizzazione delle scorciatoie da tastiera, consulta l'articolo dedicato: Come configurare le scorciatoie da tastiera

## Conclusione

Il pannello General Settings ti dà pieno controllo sul comportamento di DeepDOM come piattaforma. Dedicare qualche minuto a configurare correttamente queste impostazioni — soprattutto fuso orario, frequenze di aggiornamento, valori predefiniti di trading e scorciatoie da tastiera — renderà il tuo flusso di lavoro molto più veloce e affidabile durante le sessioni di trading dal vivo.

## Hai ancora problemi?

Il nostro team di supporto è disponibile 24 ore su 24, 7 giorni su 7, pronto ad aiutarti con qualsiasi problema tu possa incontrare. Quando ci contatti, includi:

Uno screenshot del problema.

Una breve descrizione di ciò che stavi cercando di fare.

Ticket di supporto (risposta più rapida): visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email: puoi anche scriverci a support@deepcharts.com. Tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.