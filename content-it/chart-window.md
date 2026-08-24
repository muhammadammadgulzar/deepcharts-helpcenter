---
title: "La finestra del grafico"
slug: "chart-window"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "9 min read"
description: "Tour completo della finestra del grafico di DeepCharts: controlli della barra del titolo, icone della toolbar, schede, barra inferiore, navigazione e menu del tasto destro."
keywords: ["finestra grafico", "grafico dei prezzi", "schede grafico", "toolbar grafico", "riquadro OHLC", "duplicare grafico", "sempre in primo piano", "screenshot grafico", "modalità compatta", "aggiungere scheda grafico", "staccare grafico"]
source_hash: "30c98d3101c5b915"
ai_translated: true
source_hash: "30c98d3101c5b915"
---
La finestra del grafico è dove passerai la maggior parte del tuo tempo in DeepCharts. Ogni grafico dei prezzi si apre al suo interno, e ogni controllo di cui hai bisogno giorno per giorno — simbolo, timeframe, indicatori, disegni, trading — è raggiungibile dalla sua cornice senza aprire un menu separato.

Questo articolo mappa ogni area della finestra del grafico, così sai cosa fa ogni icona, menu a discesa e pulsante e dove trovare l'impostazione che c'è dietro. Per le impostazioni che controllano come viene costruita la serie dei prezzi stessa, vedi [[price-chart-settings]]; per gli stili di barra e gli interruttori di sessione, vedi [[chart-display-options]].

## Che cos'è

La finestra del grafico è il contenitore di uno o più grafici dei prezzi. Risponde alla domanda "dove cambio X sul mio grafico?" — il simbolo e il timeframe vivono nella barra del titolo, i controlli di visualizzazione e degli indicatori vivono nella fila di icone in alto a sinistra, gli strumenti di disegno vivono nella toolbar a sinistra, e i template rapidi più gli interruttori di trading vivono nella barra inferiore.

[SCREENSHOT: Una finestra grafico completa con un grafico a candele caricato (es. NQ, 5 Minute), annotata con richiami per la barra del titolo, la fila di icone in alto a sinistra, il riquadro OHLC, la toolbar di disegno a sinistra e la barra inferiore | dc-it-chart-window-01.png]

## Quando usarla

- Vuoi aprire, cambiare o confrontare strumenti su un grafico.
- Devi trovare dove vive un controllo — stile delle barre, indicatori, disegni, screenshot, interruttore di trading.
- Vuoi organizzare più grafici come schede o finestre separate.
- Vuoi collegare più grafici in modo che seguano lo stesso simbolo.

## Avvio rapido

1. Nella barra principale, scegli **New → Price Chart**.
2. Nella finestra di dialogo **Select Instrument**, scegli un exchange nella barra laterale sinistra, seleziona un simbolo (per esempio **NQ**) e fai clic su **Select**.
3. Attendi che la barra di avanzamento **Building chart** finisca — DeepCharts sta caricando o scaricando i dati tick.
4. Usa i tre menu a discesa della barra del titolo per regolare il grafico: il simbolo (apre lo stesso selettore di strumenti), l'intervallo dei dati (per esempio **10D - BT**) e il timeframe (per esempio **5 Minute**).

[SCREENSHOT: La finestra di dialogo Select Instrument con la barra laterale degli exchange a sinistra, CME selezionato, la lista dei simboli con NQ evidenziato e i pulsanti New / Cancel / Select visibili | dc-it-chart-window-02.png]

> **Nota:** Il selettore di strumenti elenca solo gli exchange che hai sottoscritto in **Options → Symbol Manage**. Se il selettore appare vuoto, sottoscrivi prima un exchange — vedi [[symbol-manage]].

## Come leggerla

**Il riquadro in alto a sinistra.** Con **Bar values** attivo (lo è per impostazione predefinita), l'angolo in alto a sinistra mostra **O: H: L: C:** più tre campi di volume per la barra su cui passi il mouse (o l'ultima barra quando il cursore è fuori dal grafico): **%V** è la variazione percentuale dalla chiusura del giorno precedente; **ΣV** e **ΔV** sono i dati di volume della barra [CONFIRM: exact definitions of ΣV and ΔV — likely bar total volume and bar delta]. I campi non mostrano valori mentre il cursore non è sopra una barra — è normale.

**Il badge di stato.** Mentre un grafico si costruisce, la barra principale mostra un badge accanto all'icona di aiuto: **LDT** significa che vengono caricati dati già presenti su disco; **DWT** significa che i dati vengono scaricati dal server del feed. Un grafico bloccato su **DWT** di solito indica un problema di connessione, non di grafico.

**Il banner dei dati ritardati.** Un banner arancione come "Connect dxFeed - 15m to see delayed data" significa che il grafico non ha una connessione in tempo reale e sta usando il feed ritardato — vedi [[free-delayed-data-feed]].

[SCREENSHOT: Angolo in alto a sinistra di un grafico ingrandito, con il riquadro OHLC con valori reali (O H L C, %V, ΣV, ΔV) mentre si passa il mouse su una candela | dc-it-chart-window-03.png]

## Riferimento impostazioni

### Controlli della barra del titolo

| Controllo | Cosa fa |
|---|---|
| Menu a discesa del simbolo (es. **NQ-202609**) | Apre **Select Instrument** per cambiare il simbolo del grafico sul posto. |
| Menu a discesa dell'intervallo dati (es. **10D - BT**) | Quanta storia caricare: 5–60 giorni su dati tick, 3 mesi–10 anni su dati a minuti, oppure **Custom**. **BT** = Based on Tick, **BM** = Based on Minute. |
| Menu a discesa del timeframe (es. **5 Minute**) | Il tipo e la dimensione della barra — secondi/minuti/giornaliero fino a Renko, Range, Volume, Trade, Point & Figure e barre Delta. Ogni riga ha un ingranaggio che apre un editor di preset (giorni da caricare, base tick/minuti, parametro della barra). Vedi [[price-chart-settings]] per il significato di ogni tipo di barra. |
| Icona apri-in-nuova-finestra | Stacca la scheda del grafico attivo in una finestra autonoma. |
| **+** verde | Aggiunge una nuova scheda grafico (apre prima **Select Instrument**). |
| Icona link (quadrato, a sinistra di riduci a icona) | Menu di collegamento dei grafici: **None link**, **Link 1–8** (gruppi di colore) e **$ Link Trading Symbol**. I grafici che condividono un colore seguono i cambi di simbolo l'uno dell'altro — solo il simbolo, non il timeframe. Vedi [[link-windows]]. |

Prova i gruppi di collegamento dal vivo qui sotto — imposta entrambi i mini grafici sullo stesso colore, cambia il simbolo su uno e guarda l'altro seguirlo.

[WIDGET: link-groups-demo]

### Fila di icone in alto a sinistra

| Icona | Cosa fa |
|---|---|
| **≡** | Mostra/nasconde la striscia della toolbar di disegno a sinistra. |
| Icona a due candele | Menu a discesa dello stile delle barre: Candlestick / Line / OHLC, modificatori Equi-Volume e Delta-Volume, ETH Session, Auction filter, Bar values, Countdown timer e la voce **Price Settings**. Riferimento completo: [[chart-display-options]]. |
| Icona a grafico a barre | Gestore degli indicatori per grafico (vedi sotto). |
| Ingranaggio | Due opzioni: **Duplicate chart** (apre una copia esatta — stesse impostazioni e indicatori — come nuovo grafico) e **Always on top** (la finestra resta sopra ogni altra applicazione finché non viene disattivata). |
| **$** | Interruttore **Trading Enabled** (Ctrl Alt T). Diventa verde quando è armato. Disattivarlo nasconde anche il pannello di trading. Vedi [[trading-from-chart]]. |
| Fotocamera | Scatta uno screenshot del grafico. Il comportamento segue **Options → Settings → General → Various → Screenshot Mode**: **Auto Save** (salva nella cartella configurata), **Save Dialog** (chiede dove), **Copy** (negli appunti) o **Copy and Auto Save**. |

[SCREENSHOT: Le sei icone in alto a sinistra del grafico ingrandite, in ordine: hamburger, due candele, grafico a barre, ingranaggio, simbolo del dollaro (stato verde/armato), fotocamera | dc-it-chart-window-04.png]

### Gestire gli indicatori

Fai clic sull'icona a grafico a barre per aprire il pannello **Indicators**. Ogni riga di indicatore attivo ha un'icona a cestino (rimuovi), un'icona a occhio (nascondi/mostra) e un'icona a ingranaggio (impostazioni). Gli indicatori sono raggruppati per **Chart Area** — la banda orizzontale in cui vengono renderizzati; ridimensiona un'area trascinando la linea di divisione tra le aree.

Fai clic sul pulsante **Indicators** in quel pannello per aprire l'**Indicator List** completa: schede di categoria a sinistra (**All, Volume, Statistics, Oscillator, Overlay, Utility, Third**), una casella di ricerca, **+** per aggiungere e **−** per rimuovere, un ingranaggio per le impostazioni e una maniglia a tre linee per riordinare tramite trascinamento. Vedi [[indicator-layout]] per disporre gli indicatori tra le aree del grafico.

[SCREENSHOT: La finestra Indicator List con le schede di categoria a sinistra, la casella di ricerca in alto, la lista scorrevole degli indicatori con le icone + e il pannello destro con gli indicatori attivi | dc-it-chart-window-05.png]

### Schede grafico (Compact View e Group Mode)

DeepCharts offre due modi per gestire più grafici, selezionabili in **Options → Settings → General → Chart → Chart tabs compact mode**:

- **Compact View** (modalità compatta attiva): i grafici appaiono come schede in cima alla finestra. Fai clic sul **+** verde per aggiungere una scheda; la scheda attiva è evidenziata in verde. Con due o più schede i tre menu a discesa della barra del titolo vengono sostituiti dalla striscia delle schede — fai clic sulla scheda attiva per aprire un popover con i menu a discesa di simbolo, intervallo dati e timeframe più **Detach** e **Close**.
- **Group Mode** (modalità compatta disattiva): tutti i grafici aperti sono elencati centralmente in un pannello di gruppo. Fai clic su **Add Chart** per aggiungerne uno, sull'icona a freccia per estrarre un grafico in una finestra dedicata, o sull'icona **X** per rimuoverlo.

Ogni scheda mantiene il proprio pannello di trading e il proprio stato di DOM Trading. Alla chiusura di una finestra grafico staccata appare la domanda "Are you sure to close the window?" prima della chiusura.

[SCREENSHOT: Una finestra grafico in modalità schede compatte con due schede ("NQ 5 m" attiva in verde, seconda scheda inattiva) e il popover della scheda aperto con i tre menu a discesa più i pulsanti Detach e Close | dc-it-chart-window-06.png]

### Barra inferiore

| Controllo | Cosa fa |
|---|---|
| Pulsante **Templates** | Scorciatoia per clic con il tasto destro → **Template → Load** — apre il selettore di file Local/Cloud/Shared. Vedi [[templates-workspaces]]. |
| Pulsanti radio dei template rapidi (**OF-VP**, **OF-B/A**, **D-VP**, **D-DP**, **D-VL**, **W-VP**, **W-DP**, **C-VP**) | Preset di indicatori integrati a un clic (non modificabili dall'utente). Analisi completa: [[quick-chart-templates]]. |
| Pulsante radio **DOM Trading** | Passa il grafico alla scala di click-trading sul grafico. Vedi [[dom-trading-chart]]. |
| Interruttore **Trading panel** | Mostra/nasconde il pannello di inserimento ordini sul lato destro del grafico. |

### Navigazione

- **Asse X:** scorri la rotella del mouse, oppure fai clic sinistro sulla timeline e trascina. Fai clic con il tasto destro del mouse sull'asse X per attivare lo scorrimento automatico, in modo che il grafico avanzi con ogni nuova barra. Torna alla barra corrente con un doppio clic o con il pulsante play in basso a destra.
- **Asse Y:** fai clic con il tasto destro del mouse sull'asse dei prezzi per le sue opzioni, incluso lo scorrimento automatico (l'asse segue il prezzo quando esce dalla vista) e la modalità di movimento: **Automatic Detection**, **Move Axis Range** (il trascinamento con clic sinistro muove il grafico verticalmente) o **Resize Axis Range** (il trascinamento con clic sinistro riscala i prezzi). La modalità di movimento predefinita si imposta in **Options → Settings → General → Chart**.

Se lo zoom smette di rispondere, vedi [[chart-zoom]].

### Menu del tasto destro

| Voce (scorciatoia) | Cosa fa |
|---|---|
| **Pointer** (Alt P) / **Crosshair** (Alt C) / **Hand** (Alt H) | Modalità del cursore: selezione, mirino, trascinamento per la panoramica. |
| **Global Crosshair** (Alt G) | Mirino sincronizzato tra i grafici dello stesso strumento. |
| **Zoom Range** (Alt R) / **Zoom Out** | Fai clic sui punti di inizio e fine per ingrandire una sezione; Zoom Out la ripristina. |
| **Crosshair Window** | Elenca tutto ciò che è attivo sul grafico con il suo chart ID (la serie dei prezzi è sempre chart ID 1), gli ID e i sotto-ID di ogni indicatore, più le statistiche del riquadro. Utile quando un indicatore richiede il chart ID di un altro indicatore. |
| **Drawing Objects ▸** / **Drawing Utilities ▸** / **Drawing Tool From Other Chart** | Gli strumenti di annotazione — riferimento completo: [[drawing-tools]]. |
| **Trading Enabled** (Ctrl Alt T) / **Show Trading Panel** (Ctrl Alt P) | Gli stessi interruttori dell'icona **$** e dell'interruttore della barra inferiore. |
| **Show Historical Orders** (Ctrl Alt H) | Contrassegna sul grafico i tuoi ingressi e uscite passati con delle frecce. |
| **Clear Historical Account Report** | Rimuove la cronologia di trading del conto selezionato nel pannello di trading. |
| **Trading Settings** | Opzioni del grafico relative al trading [CONFIRM: contents of the Trading Settings dialog]. |
| **Autotrading ▸** | **Execute Backtest / Reset Backtest / Show Report / Save Report** — il motore di backtest usato con Deep Pattern Builder. Vedi [[deep-pattern-builder]]. |
| **Rebuild Chart** (Ctrl R) | Aggiorna e ricarica il grafico — un primo passo rapido e innocuo quando la visualizzazione sembra difettosa. |
| **Template ▸** | **Load** / **Save As** del template del grafico. Vedi [[templates-workspaces]]. |
| **Indicators** (Ctrl I) | Apre il gestore degli indicatori. |
| **Properties** (Ctrl P) | Finestra di dialogo dell'aspetto per grafico (sotto). |

> **Attenzione:** **Clear Historical Account Report** elimina in modo permanente la cronologia dello Strategy Report di quel conto. Usalo solo se sei sicuro di non aver più bisogno dei dati.

### Chart Properties (Ctrl P)

Impostazioni di aspetto per grafico, raggruppate come nella finestra di dialogo:

- **CHART AREA** — **Back Color**, **Border Color**, **Text Size** (predefinito 12), **Text Color**, colore **Crosshair**, **Series Marker Margin (px)** (predefinito 6).
- **GRID** — **Enable** (predefinito disattivo), **Line Color**, **Line Style** (predefinito Dot).
- **USER ANNOTATIONS** — **Anchor Points - Enable Static Color** e il selettore di colore statico per i punti di ancoraggio dei disegni.
- **EXTRA** — **Name**: dà un nome alla finestra del grafico.

## Suggerimenti ed errori comuni

- **Nulla viene salvato automaticamente.** DeepCharts non salva automaticamente i layout dei grafici. Salva un template (un grafico) o un workspace (schermo intero) prima di chiudere, altrimenti il prossimo avvio parte dai valori predefiniti — vedi [[templates-workspaces]].
- **Duplica invece di ricostruire.** Icona a ingranaggio → **Duplicate chart** ti dà una copia esatta, indicatori inclusi — più veloce che configurare a mano un secondo grafico.
- **Selettore di strumenti vuoto?** Nessun exchange è sottoscritto in **Options → Symbol Manage** — il selettore mostra solo gli exchange sottoscritti.
- **Il grafico sembra difettoso?** Prima fai clic con il tasto destro del mouse → **Rebuild Chart** (Ctrl R). È rapido e innocuo.
- **Grafici fuori sincrono con quelli di un collega?** Controlla l'interruttore di sessione ETH/RTH e il tipo di barra prima di confrontare — vedi [[chart-display-options]].
- **Mantieni un grafico visibile sopra le altre app** con icona a ingranaggio → **Always on top** — utile su un singolo monitor. Per i layout multi-monitor vedi [[multi-monitor-windows]].

## Articoli correlati

- [[first-chart]]
- [[price-chart-settings]]
- [[chart-display-options]]
- [[drawing-tools]]
- [[templates-workspaces]]
- [[link-windows]]