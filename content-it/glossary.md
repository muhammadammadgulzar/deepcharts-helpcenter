---
title: "Glossario dei termini di orderflow e della piattaforma"
slug: "glossary"
category: "Concepts"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "7 min read"
description: "Definizioni brevi di ogni termine di orderflow, asta, struttura di mercato e piattaforma DeepCharts usato nel Centro assistenza, con link agli articoli completi."
keywords: ["glossario", "definizioni", "cos'è il delta", "cos'è il POC", "termini orderflow", "termini footprint", "dizionario di trading", "cosa significa squilibrio", "MBO vs MBP", "significato RTH ETH"]
source_hash: "1a0becd3424438ac"
ai_translated: true
source_hash: "1a0becd3424438ac"
---
Ogni campo specialistico comprime le proprie idee in sigle e abbreviazioni, e il trading orderflow è peggio della maggior parte. Questa pagina definisce in una o due frasi ciascuno i termini usati nel Centro assistenza DeepCharts, raggruppati per tema, con un link all'articolo che spiega ogni idea come si deve.

Usala come strumento di consultazione, non come un corso — la sostanza sta negli articoli collegati. Se parti da zero, leggi prima [[orderflow-101]] e torna qui ogni volta che un termine ti blocca.

## Come usare questo glossario

I termini sono raggruppati in cinque sezioni: basi dell'orderflow, footprint e squilibrio, profili e struttura d'asta, struttura di mercato e dati, e termini della piattaforma. All'interno di ogni gruppo i termini correlati sono uno accanto all'altro, così puoi leggere un gruppo dall'alto in basso come un micro-corso introduttivo.

## Basi dell'orderflow

- **Orderflow** — Lo studio degli ordini reali dietro il movimento del prezzo: i trade eseguiti, il loro lato aggressore e la liquidità passiva contro cui vengono scambiati. Articolo di base: [[orderflow-101]].
- **Bid** — Il prezzo più alto al quale i compratori passivi sono attualmente disposti a comprare. Un trade stampato al bid è stato iniziato da un venditore aggressivo.
- **Ask (offer)** — Il prezzo più basso al quale i venditori passivi sono attualmente disposti a vendere. Un trade stampato all'ask è stato iniziato da un compratore aggressivo.
- **Spread** — La distanza tra il miglior bid e il miglior ask; nei futures liquidi come ES è di solito un tick.
- **Ordine limit** — Un ordine passivo di acquisto o vendita a un prezzo dichiarato o migliore; gli ordini limit compongono il book contro cui gli aggressori scambiano.
- **Ordine a mercato** — Un ordine che viene eseguito immediatamente contro ciò che è in attesa al miglior prezzo disponibile, attraversando lo spread per farlo.
- **Aggressore** — Il lato impaziente di un trade — il partecipante il cui ordine a mercato ha attraversato lo spread. Gli strumenti di orderflow classificano ogni trade in base al suo aggressore; vedi [[orderflow-101]].
- **Delta** — Il volume scambiato in ask meno il volume scambiato in bid per una barra: il saldo netto dell'aggressività. Tracciato per barra da [[delta-bar]] e [[deep-delta]].
- **Delta cumulativo** — Il delta di ogni barra sommato a un totale progressivo di sessione, usato per confrontare il trend dell'aggressività con il trend del prezzo. Vedi [[delta-cumulative-candlestick]].
- **Divergenza di delta** — Il prezzo che segna un nuovo estremo che il delta cumulativo non conferma (o viceversa) — un disaccordo tra sforzo e risultato che merita attenzione.
- **Liquidità** — Gli ordini passivi disponibili contro cui scambiare. Un prezzo liquido assorbe ordini grandi con poco movimento; uno illiquido si muove su ordini piccoli.
- **Tape (Time and Sales)** — L'elenco cronologico grezzo di ogni trade eseguito con prezzo, dimensione e lato. In DeepCharts è la finestra [[adv-time-and-sales|Advanced Time And Sales]].
- **Velocità del tape** — Quanto velocemente vengono stampati i trade — un proxy di urgenza e partecipazione. Misurata dall'indicatore [[speed-of-tape]].
- **Sweep** — Un singolo ordine aggressivo abbastanza grande da consumare in una volta la liquidità passiva su più livelli di prezzo. I grandi print aggressivi vengono isolati da [[big-trades]].
- **Iceberg** — Un grande ordine limit che mostra solo una piccola porzione alla volta, ricaricandosi automaticamente man mano che viene eseguito così che la sua vera dimensione resti nascosta. Vedi [[understanding-icebergs-absorption]].
- **Assorbimento** — Un pesante volume aggressivo che non riesce a muovere il prezzo perché un grande operatore passivo sta prendendo l'altro lato — spesso il primo segnale visibile di un'inversione. Vedi [[understanding-icebergs-absorption]].
- **Esaurimento** — Un movimento che sta finendo i partecipanti: volume e aggressività in calo mentre il prezzo preme verso un nuovo estremo, lasciandolo vulnerabile all'inversione.
- **Iniziativa vs risposta** — L'attività di iniziativa attacca allontanandosi dal valore stabilito (acquisti in breakout sopra il valore); l'attività responsiva difende il valore (acquisti su un ribasso che vi torna). Articolo di riferimento: [[understanding-auction-theory]].

## Footprint e squilibrio

- **Footprint** — Uno stile di grafico che apre ogni barra per mostrare il volume scambiato a ogni prezzo, suddiviso tra scambiato in bid e scambiato in ask. Concetto e pratica di lettura: [[reading-a-footprint]]; l'indicatore di DeepCharts è [[deep-print]].
- **Squilibrio** — Una cella del footprint in cui il volume di un lato supera quello dell'altro di un rapporto prestabilito, confrontato in diagonale (volume ask a un prezzo contro volume bid un tick più in basso). Rilevato da [[imbalance-tracker]].
- **Squilibri impilati** — Diversi squilibri su prezzi consecutivi nella stessa direzione — una zona in cui un lato è stato sopraffatto, che spesso agisce da supporto o resistenza alla rivisitazione. Vedi [[reading-a-footprint]].
- **Asta incompiuta** — Una barra o un estremo di swing che ha scambiato sia in bid sia in ask (nessun print a zero), suggerendo che l'asta a quel prezzo non si è mai completata; questi livelli sono candidati comuni a una rivisitazione. Segnalata dall'indicatore [[unfinished-auction]].

## Profili e struttura d'asta

- **TPO (Time Price Opportunity)** — Il mattone del Market Profile: ogni prezzo riceve un segno per ogni intervallo temporale in cui ha scambiato, così il profilo mostra dove il mercato ha speso *tempo*. Vedi [[market-profile-tpo]] e la [[profile-chart-window]].
- **Single print** — In un profilo TPO, un prezzo visitato durante un solo intervallo temporale — un segno di movimento rapido e non accettato che i trader osservano per rivisitazioni successive.
- **POC (Point of Control)** — Il singolo prezzo con il maggior volume scambiato (o il maggior numero di TPO) in un periodo — il prezzo equo di consenso del mercato. Concetto: [[understanding-volume-profile]]; tracciato in tempo reale da [[dynamic-poc]].
- **Naked POC** — Il POC di una sessione precedente attraverso il quale il prezzo non è più ripassato da allora — un target futuro comunemente osservato.
- **Value area (VA), VAH, VAL** — La fascia di prezzo intorno al POC che contiene una quota prestabilita del volume del periodo (circa il 70% per convenzione); i suoi bordi sono il Value Area High e il Value Area Low. Vedi [[understanding-volume-profile]].
- **HVN / LVN (high / low volume node)** — I picchi di volume secondari (prezzi a cui il mercato ha continuato a tornare) e le valli sottili tra di essi (prezzi rifiutati rapidamente). Gli LVN tendono a essere attraversati velocemente; gli HVN rallentano il prezzo.
- **VWAP** — Il Volume Weighted Average Price della sessione: il prezzo medio pagato, ponderato per la dimensione, di solito disegnato con bande di deviazione standard. Vedi [[understanding-vwap]] e [[vwap-envelopes]].

## Struttura di mercato, contratti e dati

- **RTH / ETH** — Regular Trading Hours (la sessione diurna principale) contro Electronic Trading Hours (la sessione completa, quasi di 24 ore). Concetto: [[understanding-market-structure-sessions]]; l'interruttore sul grafico si trova in [[chart-display-options]].
- **Sessione** — Un periodo di trading definito (RTH, overnight o una finestra personalizzata) usato per ancorare profili, VWAP e statistiche giornaliere; le finestre personalizzate si impostano in [[price-chart-settings]].
- **Front month** — Il mese di contratto in cui vive attualmente il volume — quello che dovresti mettere sul grafico e tradare.
- **Rollover** — Il passaggio dal contratto futures in scadenza al successivo man mano che il volume migra in anticipo sulla scadenza. In DeepCharts: [[symbol-rollover]].
- **Contratto continuo** — Una lunga cronologia di grafico cucita insieme attraverso i mesi di contratto; le modalità aggiustate rimuovono il gradino di prezzo artificiale a ogni rollover. Riferimento impostazioni: [[price-chart-settings]].
- **Dati EOD (di fine giornata)** — Dati storici giornalieri caricati senza un feed in streaming dal vivo, utili per rivedere la price action passata. Vedi [[end-of-day-data]].
- **Barre tick / volume / range** — Tipi di barra che chiudono dopo un numero prestabilito di trade, un volume scambiato prestabilito o un intervallo di prezzo prestabilito, invece che dopo un tempo fisso. Configurate in [[price-chart-settings]].
- **Level 1 vs Level 2** — I dati Level 1 portano solo i trade e il miglior bid/ask; il Level 2 aggiunge la scala di profondità degli ordini passivi ai prezzi oltre il migliore. Il DOM e le funzioni di profondità richiedono il Level 2 — vedi [[advanced-dom]].
- **MBO vs MBP** — Due formati di Level 2: Market By Order consegna ogni singolo ordine passivo (più pesante, il migliore per gli strumenti di orderflow), Market By Price consegna solo i totali per livello (più leggero sulla banda). La scelta compare come **DOM Type** nelle connessioni dxFeed — vedi [[connect-dxfeed]].
- **DOM (Depth of Market)** — La scala della liquidità passiva bid e ask a ogni prezzo. In DeepCharts: la finestra [[advanced-dom]] e l'indicatore [[depth-of-market]].

## Termini della piattaforma

- **Template** — La configurazione salvata di un grafico — indicatori, stili, impostazioni — ricaricabile su qualsiasi grafico. Vedi [[templates-workspaces]]; i preset integrati a un clic sono trattati in [[quick-chart-templates]].
- **Workspace** — L'intero layout dello schermo salvato: più finestre, grafici e le loro configurazioni. Vedi [[templates-workspaces]].
- **Conto Sim** — Un conto di simulazione sul broker integrato **SIM** che esegue gli ordini contro i dati live del grafico senza denaro reale. Vedi [[simulation-accounts]].
- **Prop firm** — Una società di trading proprietario che finanzia i trader con il proprio capitale, tipicamente tramite una valutazione; i conti prop firm si connettono a DeepCharts attraverso feed come Rithmic o dxFeed. Vedi [[compatibility-guide]] e [[connect-rithmic-prop-firm]].
- **Feed dati** — La connessione ai dati di mercato che trasmette i prezzi nella piattaforma; ogni grafico ne ha bisogno di una. Panoramica della configurazione: [[connect-data-feed]].

## Articoli correlati

- [[orderflow-101]]
- [[understanding-volume-profile]]
- [[understanding-auction-theory]]
- [[understanding-market-structure-sessions]]
- [[reading-a-footprint]]
- [[welcome-to-deepcharts]]