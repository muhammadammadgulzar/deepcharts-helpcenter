---
title: "Riferimento delle scorciatoie da tastiera"
slug: "keyboard-shortcuts-reference"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Scorciatoie da tastiera predefinite in DeepCharts per workspace, navigazione dei grafici, strumenti di disegno e trading, raggruppate come nella scheda Shortcuts delle impostazioni."
keywords: ["elenco scorciatoie da tastiera", "hotkey", "scorciatoie predefinite", "cheat sheet scorciatoie", "combinazioni di tasti", "elenco hotkey", "keybindings", "scorciatoie"]
source_hash: "cf17b93b068ec12b"
ai_translated: true
source_hash: "cf17b93b068ec12b"
---
Questa pagina elenca le scorciatoie da tastiera predefinite fornite con DeepCharts, raggruppate nello stesso modo della tabella **Shortcuts** integrata nell'app. Tienila aperta mentre impari la piattaforma — la manciata di combinazioni per le modalità del mouse, gli strumenti di disegno e i workspace copre la maggior parte del lavoro quotidiano.

Ogni scorciatoia è rimappabile, quindi se le tue combinazioni differiscono da questa pagina, qualcuno le ha cambiate in **Options → Settings → Shortcuts**. Vedi [[keyboard-shortcuts]] per come cambiare o ripristinare un'associazione.

## Che cos'è

DeepCharts associa combinazioni di tasti ad azioni della piattaforma (workspace, screenshot) e ad azioni del grafico (modalità del mouse, strumenti di disegno, interruttori di trading). L'elenco autoritativo è la scheda **Shortcuts** in **Options → Settings** — contiene circa 70 azioni associabili, organizzate per **Category** (**General** o **Chart**) e per **Type** (**Action**, **Control**, **Drawing and Annotation**, **Scroll**, **Trading**). Questa pagina documenta le combinazioni predefinite delle voci più usate; le azioni non elencate qui possono essere consultate (e associate) nella stessa scheda.

[SCREENSHOT: Finestra General Settings sulla scheda Shortcuts con la tabella delle scorciatoie con le colonne Category, Type, Description e Combination, scorsa fino in cima | dc-it-keyboard-shortcuts-reference-01.png]

## Quando usarlo

- Vuoi lavorare più velocemente sui grafici senza cercare nel menu del tasto destro
- Hai premuto qualcosa per sbaglio e devi capire che cosa hai attivato
- Stai per rimappare i tasti e vuoi sapere quali erano i valori predefiniti
- Vieni da un'altra piattaforma e vuoi confrontare le convenzioni prima di rimappare

## Avvio rapido

1. Impara prima le cinque modalità del mouse del grafico (**Alt P / Alt C / Alt G / Alt H / Alt R**) — sostituiscono i clic più frequenti sulla toolbar.
2. Aggiungi gli strumenti di disegno che usi ogni giorno (ad esempio **Shift H** per una linea orizzontale, **Shift R** per un rettangolo).
3. Salva il tuo layout con **Ctrl Alt S** (**Workspace save**) alla fine di ogni sessione — DeepCharts non salva automaticamente i layout.
4. Per cambiare qualsiasi associazione, apri **Options → Settings → Shortcuts**, fai clic su **Register** sulla riga, premi i nuovi tasti, poi fai clic su **Save Settings** ([[keyboard-shortcuts|guida completa]]).

## Riferimento delle impostazioni

Le scorciatoie del grafico agiscono sulla finestra del grafico attiva. Molte di esse sono mostrate anche accanto ai loro comandi nel menu del tasto destro del grafico, quindi il menu funge anche da promemoria integrato nell'app.

[SCREENSHOT: Menu contestuale del tasto destro del grafico aperto, con le hotkey visibili accanto alle voci (Pointer Alt P, Crosshair Alt C, Trading Enabled Ctrl Alt T, Indicators Ctrl I, Properties Ctrl P) | dc-it-keyboard-shortcuts-reference-02.png]

### General (a livello di piattaforma)

| Azione | Combinazione predefinita |
|---|---|
| Workspace open | Ctrl Alt O |
| Workspace save | Ctrl Alt S |
| Workspace close | Ctrl Alt C |
| Workspace next | Ctrl Alt + |
| Workspace previous | Ctrl Alt - |
| Reset open windows | Ctrl Alt R |
| Take screenshot | Ctrl Alt I |
| Replay Play/Pause | [CONFIRM: default combination — none captured] |

### Grafico — modalità del mouse (Control)

| Azione | Combinazione predefinita |
|---|---|
| Pointer | Alt P |
| Crosshair | Alt C |
| Global Crosshair | Alt G |
| Hand | Alt H |
| Zoom Range | Alt R |
| Crosshair Window | [CONFIRM: default combination — none captured] |

### Grafico — azioni

| Azione | Combinazione predefinita |
|---|---|
| Indicators | Ctrl I |
| Properties | Ctrl P |
| Rebuild chart | Ctrl R |
| Change symbol | Ctrl C |
| Change timeframe | Space |
| Annotation snap | Ctrl S |
| Annotation import / export / hide-show / erase all | [CONFIRM: default combinations — none captured] |

### Grafico — strumenti di disegno (Drawing and Annotation)

| Strumento di disegno | Combinazione predefinita |
|---|---|
| Horizontal Line | Shift H |
| Line | Shift L |
| Parallel Lines | Shift P |
| Rectangle | Shift R |
| Text | Shift T |
| Price Retracement (ritracciamento di Fibonacci) | Shift F |
| Volume Profile | Shift V |
| Buy calculator | Shift B |
| Sell calculator | Shift S |

Vertical Line, Horizontal Ray, Ruler, Ellipse, Pencil, Price Projection, Price Fan e VWAP non mostrano alcuna combinazione nel menu **Drawing Objects** del grafico e sembrano essere forniti senza associazione. [CONFIRM: whether these drawing tools have default bindings] Puoi associarne una qualsiasi tu stesso dalla scheda **Shortcuts**.

### Grafico — trading

| Azione | Combinazione predefinita |
|---|---|
| Trading Enabled | Ctrl Alt T |
| Show Trading Panel | Ctrl Alt P |
| Show Historical Orders | Ctrl Alt H |

> **Nota:** Nella scheda Shortcuts esiste anche il tipo **Scroll** per le funzioni di navigazione e scorrimento. [CONFIRM: default Scroll bindings — none captured]

## Suggerimenti ed errori comuni

- **Ctrl C su un grafico cambia il simbolo — non copia.** È il valore predefinito più sorprendente per i nuovi utenti. Se continui ad aprire il selettore degli strumenti mentre provi a copiare, abituati oppure rimappa **Change symbol**.
- **Space cambia il timeframe.** Premendo la barra spaziatrice con un grafico attivo si apre la selezione del timeframe, il che all'inizio può sembrare accidentale.
- **Alt C vs Ctrl Alt C.** Alt C passa il cursore del grafico al mirino; aggiungendo Ctrl si chiude il workspace corrente. Se il tuo layout è "sparito" dopo un tentativo maldestro di attivare il mirino, il motivo è questo — riaprilo con Ctrl Alt O.
- **Fai di Ctrl Alt S un'abitudine.** DeepCharts non salva automaticamente i layout dei grafici; **Workspace save** è la differenza tra un setup che sopravvive a un riavvio e uno che non lo fa. Vedi [[templates-workspaces]].
- **Le scorciatoie del grafico richiedono che il grafico sia attivo.** Fai prima clic sul grafico — una combinazione della categoria Chart premuta mentre è attiva un'altra finestra non fa nulla.
- **Questa pagina mostra i valori predefiniti.** Tutte le combinazioni sono rimappabili, quindi la piattaforma di un collega (o una piattaforma configurata mesi fa) può differire. La scheda **Shortcuts** è sempre la fonte di verità per la macchina che hai davanti.

## Articoli correlati

- [[keyboard-shortcuts]]
- [[chart-window]]
- [[drawing-tools]]
- [[templates-workspaces]]
- [[trading-from-chart]]
- [[replay-data]]