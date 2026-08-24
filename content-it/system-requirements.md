---
title: "Requisiti di sistema"
slug: "system-requirements"
category: "Getting Started"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Requisiti hardware, di sistema operativo e software per eseguire DeepCharts, con indicazioni su antivirus e spazio su disco."
keywords: ["requisiti di sistema", "requisiti minimi", "specifiche", "windows 10", "windows 11", "ram", "funzionerà sul mio pc", "hardware", "requisiti"]
source_hash: "68366ba77933c649"
ai_translated: true
source_hash: "68366ba77933c649"
---
DeepCharts è un'applicazione desktop per Windows che elabora dati tick in tempo reale, quindi trae vantaggio da una macchina ragionevolmente moderna — ma non richiede hardware esotico. Questa pagina elenca ciò di cui hai bisogno prima dell'installazione e spiega quali componenti contano davvero per le prestazioni.

I requisiti minimi ufficiali sono pubblicati nella tua dashboard my.deepcharts.com accanto al download dell'installer. Controlla lì prima di acquistare hardware; le cifre qui sotto sono indicazioni pratiche.

## Che cos'è

Una checklist del sistema operativo, dell'hardware e dell'ambiente software di cui DeepCharts ha bisogno per installarsi e funzionare bene. Risponde a "DeepCharts funzionerà sulla mia macchina?" e "cosa dovrei potenziare se mi sembra lento?".

## Quando usarlo

- Prima di installare DeepCharts per la prima volta — vedi [[install-deepcharts]].
- Prima di acquistare o noleggiare un nuovo PC, laptop o VPS per il trading.
- Quando diagnostichi problemi di prestazioni (grafici lenti, dati che laggano) — vedi [[data-delayed-lagging]].
- Prima di spostare la tua installazione — vedi [[move-to-new-computer]].

## Avvio rapido

Non confrontare le tabelle a mano — inserisci i dati della tua macchina nel verificatore qui sotto e otterrai un verdetto in tempo reale su ogni componente. Nota come il requisito di RAM cambia quando modifichi il numero di finestre che prevedi di tenere aperte: i requisiti dipendono dal carico di lavoro, non solo dall'app.

[WIDGET: spec-check]

1. Premi **Windows key + Pause** (oppure apri **Settings → System → About**) per vedere la tua edizione di Windows, il processore e la RAM installata, poi imposta i cursori di conseguenza.
2. Correggi tutto ciò che il verificatore segnala in rosso prima di installare; gli elementi in arancione funzioneranno, ma a scapito della fluidità.
3. Verifica di avere diversi GB di spazio libero sul disco di sistema — il database dei dati di mercato risiede lì per impostazione predefinita e cresce nel tempo.
4. Controlla i minimi ufficiali indicati nella tua dashboard my.deepcharts.com, poi prosegui con [[install-deepcharts]].

## Come interpretarlo

"Minimo" significa che la piattaforma si installa e funziona per un uso leggero — un paio di grafici su un feed in tempo reale o in differita. "Consigliato" è ciò che vuoi per una postazione orderflow realistica: diverse finestre di grafici, un DOM, caricamento di dati a livello di tick e un pannello di trading attivo durante mercati veloci. Se ti trovi a metà strada, DeepCharts funzionerà, ma i tempi di caricamento e la fluidità di aggiornamento scalano con il tuo hardware — soprattutto CPU e RAM.

## Riferimento delle impostazioni

> **Nota:** Le cifre esatte pubblicate vanno verificate sulla dashboard my.deepcharts.com. [CONFIRM: exact minimum specs with team]

### Sistema operativo e software

| Requisito | Dettaglio |
|---|---|
| Sistema operativo | Windows 10 o Windows 11, 64 bit. DeepCharts è un'applicazione solo per Windows. |
| Runtime .NET | Richiesto dalla piattaforma. [CONFIRM: exact .NET version and whether the installer bundles it] |
| macOS / Linux | Non supportati nativamente. [CONFIRM: official stance on virtual machines and macOS virtualization] |

### Hardware

| Componente | Minimo (pratico) | Consigliato | Perché è importante |
|---|---|---|---|
| CPU | Processore multi-core moderno a 64 bit | Quad-core di generazione recente o superiore | L'elaborazione dei tick e il calcolo degli indicatori dipendono dalla CPU; più core mantengono i grafici reattivi nei periodi volatili. |
| RAM | 8 GB | 16 GB o più | Ogni grafico aperto tiene in memoria i giorni di dati tick caricati; più grafici e DOM si sommano. |
| Disco | Diversi GB liberi, SSD fortemente preferito | SSD con abbondante spazio libero | I dati tick storici sono archiviati in locale e riletti a ogni caricamento del grafico; un SSD abbrevia drasticamente i tempi di costruzione dei grafici. |
| GPU | Qualsiasi GPU in grado di eseguire Windows 10/11 | Una GPU dedicata è utile con molte finestre su monitor grandi | Il rendering dei grafici usa la GPU; DeepCharts espone perfino un'impostazione **Parallel gpu count** in **Options → Settings → General**. |
| Display | 1920×1080 | Uno o più monitor grandi/ad alta risoluzione | Il lavoro sull'orderflow richiede molto spazio a schermo; i layout multi-monitor sono supportati tramite **Window → Position windows** — vedi [[multi-monitor-windows]]. |
| Rete | Banda larga stabile | Connessione cablata a bassa latenza | I feed in tempo reale trasmettono in modo continuo; velocità di download e latenza verso il server del feed influenzano direttamente il ritardo dei dati. |

### Spazio su disco e database locale

DeepCharts memorizza i dati di mercato scaricati in un database locale, per impostazione predefinita in `%LocalAppData%\Deepchart\Database`. Questa cartella cresce man mano che carichi più simboli e più giorni di storico tick. Ne seguono due cose:

- Mantieni uno spazio libero significativo sul disco che la ospita, oppure sposta la cartella: **Options → Settings → General → VARIOUS → Database Folder**.
- Puoi recuperare spazio in seguito — vedi [[delete-market-data]] e [[database-optimization]].

### Antivirus e software di sicurezza

L'interferenza dell'antivirus è di gran lunga il blocco di installazione più comune.

> **Attenzione:** Disattiva temporaneamente l'antivirus prima di eseguire l'installer e riattivalo dopo. Alcuni prodotti mettono silenziosamente in quarantena componenti dell'installer, il che si manifesta in seguito come un'installazione fallita o incompleta.

Se la tua macchina è gestita da una policy aziendale, anche i software di controllo delle applicazioni possono impedire l'avvio di DeepCharts — vedi [[application-control-policy]].

## Suggerimenti ed errori comuni

- **Non saltare il passaggio dell'antivirus.** "L'installer è partito e non è successo nulla" è quasi sempre colpa dell'antivirus — vedi [[installation-problems]].
- **I laptop con piani di risparmio energetico** limitano la CPU, il che si manifesta come grafici che laggano. Usa un piano energetico ad alte prestazioni mentre fai trading.
- **Più giorni di dati caricati = più RAM e CPU.** Se la piattaforma sembra pesante, riduci i giorni da caricare sui tuoi grafici prima di incolpare l'hardware — vedi [[data-delayed-lagging]].
- **Utenti VPS:** gli stessi requisiti valgono per le macchine virtuali; i piani VPS sottodimensionati (2 GB di RAM, vCPU condivisa) faranno fatica con i dati tick.
- **La qualità della connessione conta quanto il PC.** Se i grafici laggano solo nei periodi di mercato intensi, testa la tua connessione con il diagnostico integrato — vedi [[diagnostic-report]].

## Articoli correlati

- [[install-deepcharts]]
- [[installation-problems]]
- [[application-control-policy]]
- [[move-to-new-computer]]
- [[data-delayed-lagging]]
- [[database-optimization]]