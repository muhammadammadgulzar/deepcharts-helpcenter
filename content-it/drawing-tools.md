---
title: "Strumenti di disegno e annotazioni"
slug: "drawing-tools"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Tutti gli strumenti di disegno di DeepCharts con le rispettive scorciatoie, più modifica, aggancio, occultamento, importazione/esportazione e sincronizzazione delle annotazioni tra grafici."
keywords: ["strumenti di disegno", "annotazioni", "linea orizzontale", "trend line", "ritracciamento di fibonacci", "calcolatore buy", "calcolatore sell", "esportare annotazioni", "importare annotazioni", "cancellare tutti i disegni", "magnete", "aggancio annotazioni", "disegni scomparsi"]
source_hash: "7e1e4d040319257d"
ai_translated: true
source_hash: "7e1e4d040319257d"
---
I disegni — linee, livelli, rettangoli, strumenti di Fibonacci, note di testo — sono il modo in cui annoti un grafico DeepCharts. Ogni strumento è disponibile da due punti: la barra degli strumenti sul lato sinistro del grafico e il menu del tasto destro sotto **Drawing Objects**, quasi sempre con una scorciatoia da tastiera.

Questo articolo elenca ogni oggetto di disegno con la sua scorciatoia, poi copre i flussi di lavoro intorno ai disegni: modificare e riutilizzare gli stili, agganciare, nascondere, cancellare in blocco, spostare le annotazioni tra grafici e computer, e mantenere i disegni sincronizzati tra grafici dello stesso strumento.

## Che cos'è

Il sistema di annotazione della finestra del grafico. Risponde a "come disegno X", "come cambio il colore di un disegno", "dove sono finiti i miei disegni" e "come porto i miei disegni su un altro grafico o un altro PC".

[SCREENSHOT: Un grafico con diverse annotazioni posizionate — una linea orizzontale su un livello, una trend line, una zona rettangolare e una nota di testo — con la barra degli strumenti di disegno a sinistra visibile e il sottomenu Drawing Objects del tasto destro aperto | dc-it-drawing-tools-01.png]

## Quando usarlo

- Segna livelli di supporto/resistenza, zone ed estremi di sessione.
- Misura i movimenti e pianifica le operazioni (Ruler, calcolatore Buy/Sell).
- Annota i grafici per un diario di trading o per condividerli come screenshot.
- Mantieni gli stessi livelli visibili su più grafici di uno stesso strumento.

## Avvio rapido

1. Fai clic con il tasto destro del mouse sul grafico e apri **Drawing Objects**, oppure usa la barra degli strumenti a sinistra (attivala/disattivala con l'icona **≡** in alto a sinistra).
2. Scegli uno strumento — per esempio **Horizontal Line** (Shift H) — e fai clic sul grafico per posizionarlo.
3. Per modificare un disegno, fai doppio clic sinistro su di esso (oppure fai clic sinistro per selezionarlo, poi tasto destro → **Settings**) e cambia colori e stili nelle Annotation Settings.
4. Per rimuovere un singolo disegno, selezionalo ed eliminalo; per cancellare tutto, usa tasto destro → **Drawing Utilities → Erase All Drawing** (vedi l'avviso più sotto).

[SCREENSHOT: La finestra Annotation Settings aperta per una linea orizzontale, con le opzioni di colore, stile della linea e spessore | dc-it-drawing-tools-02.png]

## Riferimento delle impostazioni

### Drawing Objects (tasto destro → Drawing Objects)

| Strumento (scorciatoia) | Cosa fa |
|---|---|
| **Horizontal Line** (Shift H) | Livello di prezzo che attraversa tutto il grafico. |
| **Vertical Line** | Segna un punto nel tempo. |
| **Horizontal Ray** | Livello di prezzo che parte da un punto e si estende verso destra. |
| **Line** (Shift L) | Trend line libera tra due punti. |
| **Parallel Lines** (Shift P) | Canale parallelo. |
| **Ruler** | Misura tra due punti del grafico. |
| **Rectangle** (Shift R) | Zona di prezzo/tempo. Se smette di rispondere, vedi [[rectangle-drawing-tool]]. |
| **Ellipse** | Zona ellittica. |
| **Text** (Shift T) | Nota di testo sul grafico. |
| **Pencil** | Disegno a mano libera. |
| **Price Retracement** (Shift F) | Ritracciamento di Fibonacci. |
| **Price Projection** | Proiezione di Fibonacci. |
| **Price Fan** | Strumento fan — corrisponde al fan di Fibonacci elencato in **Options → Settings → Toolbar**. |
| **Volume Profile** (Shift V) | Disegna un profilo del volume su un intervallo selezionato. Concetto: [[understanding-volume-profile]]. |
| **VWAP** | Strumento di disegno VWAP. Concetto: [[understanding-vwap]]. |
| **Buy calculator** (Shift B) | Calcolatore di posizione per i long: posizionalo, poi trascina l'area dello stop loss e l'area del take profit verso l'alto o verso il basso — mostra il rapporto rischio/rendimento, il prezzo di entrambi i livelli e la distanza in tick di ciascun livello dall'ingresso. |
| **Sell calculator** (Shift S) | Lo stesso calcolatore di posizione per gli short. |

[SCREENSHOT: Un disegno Buy calculator posizionato su un grafico con l'area SL sotto l'ingresso e l'area TP sopra, che mostra il rapporto rischio/rendimento e le distanze in tick | dc-it-drawing-tools-03.png]

> **Suggerimento:** Vale la pena memorizzare le voci delle modalità cursore nello stesso menu del tasto destro: **Pointer** (Alt P), **Crosshair** (Alt C), **Global Crosshair** (Alt G — crosshair su tutti i grafici dello stesso strumento), **Hand** (Alt H). Le scorciatoie sono configurabili — vedi [[keyboard-shortcuts]].

### Extra della toolbar sinistra

La barra a sinistra riproduce gli strumenti di disegno (quali strumenti compaiono lì è configurabile in **Options → Settings → Toolbar**), più:

| Icona | Cosa fa |
|---|---|
| **Eye** | Nasconde/mostra TUTTI i disegni sul grafico. |
| **Magnet** | Quando è attivo, i nuovi disegni si agganciano al livello principale più vicino — il massimo/minimo dell'ombra della candela più vicina oppure l'apertura/chiusura. Disattivato = posizionamento completamente libero. |
| **Eraser** | Rimuove i disegni. |

### Modificare e riutilizzare gli stili

- **Modificare:** fai doppio clic sinistro su un disegno, oppure selezionalo e tasto destro → **Settings**.
- **Salvare una configurazione:** memorizza le impostazioni di stile di un disegno per riutilizzarle in futuro dalla sua finestra di impostazioni.
- **Richiamare una configurazione:** fai clic con il tasto destro del mouse sul disegno e apri **Tool Config**.

### Drawing Utilities (tasto destro → Drawing Utilities)

| Voce | Cosa fa |
|---|---|
| **Import Annotations** | Carica i disegni da un file. |
| **Export Annotations** | Salva i disegni in un file — formato selezionabile: CSV oppure il formato Volumetrica (specifico delle app DeepCharts). È così che sposti i disegni tra computer o li condividi. [CONFIRM: whether export covers all drawings or only selected ones] |
| **Snap annotation** (Ctrl S) | Interruttore di aggancio per le annotazioni [CONFIRM: whether this is the same toggle as the magnet icon]. |
| **Hide/Show annotations** | Attiva/disattiva la visibilità delle annotazioni sul grafico. |
| **Erase All Drawing** | Rimuove ogni disegno dal grafico. |

> **Attenzione:** **Erase All Drawing** elimina tutti i disegni sul grafico con un'unica azione. Esporta prima le tue annotazioni se c'è anche solo la possibilità che tu voglia recuperarle.

### Disegni tra più grafici

- **Drawing Tool From Other Chart** (menu del tasto destro) sincronizza i disegni tra grafici — impostalo, per esempio, tra un grafico a 1 minuto e uno a 5 minuti dello stesso simbolo, e un disegno fatto su uno compare anche sull'altro.
- Per portare un'intera configurazione di grafico (contesto dei disegni incluso) su un altro grafico o PC, usa template e workspace — vedi [[templates-workspaces]].

## Suggerimenti ed errori comuni

- **"I miei disegni sono scomparsi."** Prima di darli per persi, controlla l'icona **eye** sulla toolbar sinistra e tasto destro → **Drawing Utilities → Hide/Show annotations** — la causa è quasi sempre uno dei due interruttori di visibilità.
- **I disegni non si posizionano esattamente sui massimi/minimi delle candele** — attiva l'icona **magnet** in modo che i nuovi disegni si aggancino all'ombra o all'apertura/chiusura più vicina.
- **Stai passando a un nuovo PC?** Tasto destro → **Drawing Utilities → Export Annotations**, copia il file sull'altra macchina, poi **Import Annotations**.
- **Pianifica l'operazione prima di inserirla:** il **Buy/Sell calculator** mostra rischio/rendimento e distanze in tick mentre trascini i livelli — più veloce che calcolarli a mano.
- Opzioni correlate a livello di grafico: **Options → Settings → General → Chart** include comportamenti delle annotazioni come **Editable copied annotation** e **Annotations stop on last bar**.

## Articoli correlati

- [[chart-window]]
- [[rectangle-drawing-tool]]
- [[keyboard-shortcuts-reference]]
- [[templates-workspaces]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]