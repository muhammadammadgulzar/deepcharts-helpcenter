---
title: "Template rapidi del grafico (OF-VP, D-VP, W-VP...)"
slug: "quick-chart-templates"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Cosa caricano i radio button OF-VP, OF-B/A, D-VP, D-DP, D-VL, W-VP, W-DP e C-VP nella barra inferiore del grafico, e quando usare ciascun preset."
keywords: ["OF-VP", "OF-B/A", "D-VP", "D-DP", "D-VL", "W-VP", "W-DP", "C-VP", "template rapidi", "pulsanti barra inferiore", "preset del grafico", "preset footprint", "preset volume profile"]
source_hash: "e35a08ca183c3161"
ai_translated: true
source_hash: "e35a08ca183c3161"
---
Ogni grafico dei prezzi in DeepCharts ha una riga di radio button nella sua barra inferiore: **OF-VP**, **OF-B/A**, **D-VP**, **D-DP**, **D-VL**, **W-VP**, **W-DP** e **C-VP**. Un solo clic applica al grafico un layout orderflow completo e configurato in modo professionale — nessuna configurazione di indicatori richiesta.

Questo articolo spiega cosa carica ogni preset e in cosa differisce dai template che salvi tu stesso.

## Che cos'è

I radio dei template rapidi sono preset integrati, a un clic, degli indicatori di casa DeepCharts — **Deep Print** e **Deep Profile** — con impostazioni predefinite, così non devi configurare tu le basi. Rispondono alla domanda "come metto subito un footprint o un volume profile sul mio grafico?"

Non sono modificabili dall'utente. Se vuoi una versione modificata di uno di questi layout, aggiungi tu stesso l'indicatore sottostante ([[deep-print]] o [[deep-profile]]), configuralo e salva il tuo template — vedi [[templates-workspaces]].

Il pulsante **Templates** accanto ai radio è una funzione diversa: è una scorciatoia per tasto destro → **Template → Load** e apre il selettore di file **Local / Cloud / Shared** per i tuoi template salvati.

[SCREENSHOT: Barra inferiore di un grafico dei prezzi con il pulsante Templates seguito dai radio button OF-VP, OF-B/A, D-VP, D-DP, D-VL, W-VP, W-DP e C-VP, con il radio DOM Trading e l'interruttore Trading panel all'estremità destra | dc-it-quick-chart-templates-01.png]

## Quando usarli

- Vuoi una vista footprint (orderflow) di ogni candela senza configurare Deep Print da zero.
- Vuoi il profilo di volume o delta del giorno o della settimana in un clic.
- Stai valutando quale layout orderflow si adatta al tuo trading prima di impegnarti in un template personalizzato.
- Stai seguendo un video didattico che parte da uno di questi preset.

## Avvio rapido

1. Apri un grafico dei prezzi — vedi [[first-chart]].
2. Guarda la barra inferiore del grafico e fai clic su **OF-VP**.
3. Attendi che il grafico si ridisegni: ogni candela ora mostra il proprio volume profile (Deep Print in stile profilo).

[SCREENSHOT: Grafico dei prezzi subito dopo il clic su OF-VP, con il radio OF-VP selezionato nella barra inferiore e ogni candela renderizzata come volume profile per barra | dc-it-quick-chart-templates-02.png]

4. Fai clic sugli altri radio per confrontare i layout, poi scegli quello che si adatta al tuo flusso di lavoro.

> **Nota:** [CONFIRM: whether selecting a quick-template radio replaces the chart's existing indicators or layers on top of them, and how to return the chart to its previous state afterwards]

## Come leggerli

Ogni preset è una vista degli stessi dati orderflow sottostanti a una diversa aggregazione:

| Preset | Cosa carica | Basato su |
|---|---|---|
| **OF-VP** | Deep Print in stile profilo — ogni candela mostra il proprio volume profile | [[deep-print]] |
| **OF-B/A** | Deep Print in stile colonne Bid/Ask, con gli squilibri in grassetto e intensità di colore | [[deep-print]] |
| **D-VP** | Profilo di volume giornaliero | [[deep-profile]] |
| **D-DP** | Profilo delta giornaliero | [[deep-profile]] |
| **D-VL** | VWAP giornaliero con 3 bande di deviazione standard sopra e sotto | [[deep-profile]] |
| **W-VP** | Profilo di volume settimanale | [[deep-profile]] |
| **W-DP** | Profilo delta settimanale | [[deep-profile]] |
| **C-VP** | Profilo composito di tutti i dati caricati nel grafico | [[deep-profile]] |

I preset **OF-** trasformano ogni candela in una vista orderflow per barra — prova il footprint qui sotto: passa il mouse sulle celle bid×ask e regola il rapporto di squilibrio per vedere cosa OF-B/A evidenzia in grassetto.

[WIDGET: footprint-lab]

Indicazioni di lettura:

- I preset **OF-** sono viste orderflow per barra. Parti da [[reading-a-footprint]] per interpretare le colonne bid/ask e gli squilibri, e da [[orderflow-101]] per i concetti di base.
- I preset **D-** e **W-** aggregano un giorno o una settimana per profilo. POC, area di valore e nodi ad alto/basso volume sono spiegati in [[understanding-volume-profile]].
- **D-VL** è l'eccezione: invece di un profilo traccia il VWAP giornaliero con tre bande di deviazione standard su ciascun lato — vedi [[understanding-vwap]] per come i trader usano quelle bande.
- **C-VP** costruisce un unico profilo da tutto ciò che è attualmente caricato nel grafico, quindi la sua forma cambia se cambi quanta storia carica il grafico.

Esercitati a leggere i preset a profilo sul profilo live qui sotto — trascina la Value Area % e passa il mouse sulle righe per vedere come funzionano POC, VAH e VAL in D-VP, W-VP e C-VP.

[WIDGET: volume-profile-lab]

## Riferimento impostazioni

I preset in sé non espongono impostazioni — sono configurazioni fisse. La barra inferiore contiene:

| Controllo | Cosa fa |
|---|---|
| Pulsante **Templates** | Apre il selettore di file dei template (Local / Cloud / Shared) — scorciatoia per tasto destro → **Template → Load**. Vedi [[templates-workspaces]]. |
| Radio **OF-VP** ... **C-VP** | Applicano il preset integrato corrispondente (tabella sopra). Non modificabili dall'utente. |
| Radio **DOM Trading** | Passa il grafico alla ladder di trading con clic sul grafico — vedi [[dom-trading-chart]]. |
| Interruttore **Trading panel** | Mostra o nasconde il pannello di trading del grafico — vedi [[trading-panel-reference]]. |

Per regolare qualsiasi cosa un preset mostri (raggruppamento tick, soglie di squilibrio, colori), apri le impostazioni dell'indicatore dal gestore indicatori del grafico e configura direttamente [[deep-print]] o [[deep-profile]].

## Suggerimenti ed errori comuni

- **Provare a modificare un preset.** I radio sono fissi. Ricrea invece il layout con le tue impostazioni di Deep Print / Deep Profile e salvalo come template — poi caricalo dal pulsante **Templates**.
- **Confondere i preset con i template salvati.** Radio = integrati e fissi; pulsante **Templates** = i tuoi file più la libreria **Shared** del team in sola lettura.
- **Aspettarsi che C-VP corrisponda al composito di un altro trader.** C-VP profila tutti i dati caricati nel *tuo* grafico; due grafici che caricano quantità di storia diverse producono compositi diversi.
- **Giudicare un preset su un feed in ritardo.** Gli squilibri e la colorazione del delta hanno più senso su un feed live; sul feed gratuito ritardato i dati sono in ritardo di 15 minuti — vedi [[free-delayed-data-feed]].

## Articoli correlati

- [[templates-workspaces]]
- [[deep-print]]
- [[deep-profile]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[reading-a-footprint]]