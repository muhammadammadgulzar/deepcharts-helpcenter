---
title: "Volume Swing"
slug: "volume-swing"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "Analisi degli swing basata su ZigZag con etichette di volume e delta per ogni swing, marcatori automatici No Effort / No Result, un rilevatore di trend e linee di livello."
keywords: ["volume swing", "volume dello swing", "volume zigzag", "NOE", "NOR", "no effort", "no result", "delta dello swing", "sforzo vs risultato", "rilevatore di trend"]
source_hash: "9b5b917ecaff71c4"
ai_translated: true
source_hash: "9b5b917ecaff71c4"
---
Volume Swing combina la struttura del mercato con l'analisi dei volumi: rileva gli swing di prezzo con un motore ZigZag, poi etichetta ogni swing con il volume, il delta e le metriche correlate che lo hanno costruito. In aggiunta stampa marcatori automatici di sforzo-contro-risultato (NOE e NOR), può colorare lo sfondo in base al trend rilevato e può disegnare linee di livello a soglia.

L'idea è lo sforzo contro risultato di Wyckoff reso meccanico — ogni gamba del mercato viene misurata, così puoi vedere quali swing avevano una partecipazione reale alle spalle e quali giravano a vuoto.

## Cos'è

Volume Swing è uno strumento completo di volume e struttura. Lo ZigZag identifica gli swing (per inversione assoluta di prezzo o per inversione in tick), e fino a quattro etichette configurabili per swing mostrano metriche come volume, delta volume, delta trade, volume per tick ed estensione. Due marcatori vengono calcolati automaticamente: **NOE** (No Effort — un movimento privo del volume necessario a sostenerlo) e **NOR** (No Result — volume pesante che non è riuscito a muovere il prezzo). Un rilevatore di trend aggiunge bande di sfondo colorate alla sensibilità che scegli.

[SCREENSHOT: Finestra del grafico con Volume Swing applicato — linee ZigZag che collegano swing high e swing low, etichette per swing che mostrano valori di volume e delta, uno swing marcato NOE e un altro marcato NOR, con bande di sfondo del trend visibili | dc-it-volume-swing-01.png]

## Quando usarlo

- Vuoi ogni swing quantificato: quanto volume e delta hanno guidato questa gamba rispetto alla precedente.
- Fai trading su sforzo contro risultato: gambe in salita su volume in calo (NOE) o volume pesante senza progresso del prezzo (NOR) sono avvertimenti strutturali.
- Vuoi una struttura degli swing oggettiva — lo ZigZag sostituisce il tracciamento soggettivo delle gambe con regole di inversione fisse.
- Vuoi un filtro di trend: il rilevatore di trend integrato ombreggia lo sfondo così i segnali controtendenza sono evidenti.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Volume Swing** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto all'indicatore.
4. In **Data Settings**, mantieni **Input Data** su **Volume** (vedi [[different-types-of-input]]).
5. In **ZigZag Settings**, scegli una **ZigZag Mode** — **Tick Reversal** con un numero di tick adatto al tuo strumento è un buon punto di partenza intraday; **Absolute Reversal** usa invece un valore fisso di inversione di prezzo.
6. In **Label Settings**, abilita la **First Label** con **Volume** e la **Second Label** con **Delta volume** — due metriche per swing sono più che sufficienti mentre impari.
7. Facoltativamente abilita il **Trend Detector** su sensibilità **Medium**, poi applica.

[SCREENSHOT: Finestra delle impostazioni di Volume Swing aperta sulla sezione ZigZag Settings — menu a discesa ZigZag Mode che mostra Absolute Reversal e Tick Reversal, con i campi Zig Zag Rev. & Absolute e Zig Zag Tick Rev. più Color Up/Down e Line Width sotto | dc-it-volume-swing-02.png]

## Come leggerlo

- **Confronta swing consecutivi nella stessa direzione.** Massimi crescenti su volume di swing in contrazione significano che il rialzo sta perdendo partecipazione. Gambe in salita che portano ciascuna più volume della precedente sono un trend sano.
- **NOE (No Effort)** marca uno swing privo del volume necessario a sostenerne il movimento — una spinta che ha perso momentum. Aspettati un follow-through più superficiale o una rotazione indietro.
- **NOR (No Result)** marca uno swing con volume significativo ma scarso progresso del prezzo — lo sforzo è stato speso contro una forte resistenza o supporto. Questi marcano frequentemente zone di assorbimento e candidati all'inversione (vedi [[understanding-icebergs-absorption]]).
- **Le etichette del delta suddividono lo sforzo per lato.** Uno swing in salita con delta volume negativo è salito mentre i venditori erano più aggressivi — è stato guidato da acquisti passivi, un carattere molto diverso da un rally di compratori aggressivi.
- **Le bande di trend definiscono il contesto.** Prendi le letture NOE/NOR con il trend, non contro di esso, finché non hai prove che il trend stesso si sta girando.

> **Nota:** Questi segnali pesano di più nei movimenti medio-grandi al di fuori delle condizioni di alta volatilità. Con bassa liquidità il mercato produce letture meno significative e inaffidabili.

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### Data Settings

| Impostazione | Cosa fa |
|---|---|
| **Input Data** | Base dell'analisi: **Volume** (volume totale degli scambi), **Order** (numero di ordini) o **Aggregated volume** (volumi degli ordini aggregati). Vedi [[different-types-of-input]]. |
| **Filter Min** | Valore minimo di filtro per i dati selezionati — le voci sotto la soglia sono escluse. |
| **Filter Max** | Valore massimo di filtro — i dati che superano il limite sono esclusi. |

### ZigZag Settings

| Impostazione | Cosa fa |
|---|---|
| **ZigZag Mode** | **Absolute Reversal** usa un valore fisso di inversione di prezzo per determinare uno swing; **Tick Reversal** definisce l'inversione in tick, consentendo una quantità minima di movimento in tick. |
| **Zig Zag Rev. & Absolute** | Variazione minima richiesta al prezzo per definire un nuovo swing in modalità Absolute Reversal. |
| **Zig Zag Tick Rev.** | Numero di tick richiesti per un'inversione in modalità Tick Reversal. |
| **Color Up / Color Down** | Colori che differenziano gli swing al rialzo e al ribasso. |
| **Line Width** | Spessore del tracciato ZigZag. |

### Label Settings

| Impostazione | Cosa fa |
|---|---|
| **Text Size** | Dimensione delle etichette degli swing. |
| **Text Offset** | Posiziona le etichette rispetto al punto di swing. |
| **Max Bars to View** | Limita fino a quanto indietro vengono disegnate le etichette. |
| **First / Second / Third / Fourth Label** | Ogni slot di etichetta ha un interruttore **Enabled**, una metrica visualizzata (**Volume**, **Delta volume**, **Delta trade**, **Vol per tick**, **Extension**) e selezioni di **Positive/Negative Color**. |

### Marker Labels

Calcolati automaticamente — nessuna soglia da configurare.

| Marcatore | Significato |
|---|---|
| **NOE (No Effort)** | Mancanza di volume a sostegno del movimento o della spinta — il movimento ha perso momentum. |
| **NOR (No Result)** | Mancanza di risultato nel movimento del prezzo nonostante un volume significativo — suggerisce una forte resistenza o supporto. |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Display Mode** | **Lines only**, **Bars histogram** o **Lines and Bars** combinati. |
| **Histogram Value** | Metrica rappresentata dall'istogramma: **Delta Volume**, **Delta trade**, **Vol per tick** o **Extension**. |
| **All-in-one** | Combina più metriche in un unico tracciato: **None**, **Vol delta trade**, **Vol delta** o **Volume**. |
| **Show Sign** | Come vengono segnati i valori: **Positive**, **Negative** o **Based Delta**. |
| **Color Mode** | **Fixed**, **Fading colour** o **Delta fading**. |
| **Std. Dev. for Coloring** | Sensibilità della colorazione alle variazioni dei dati volumetrici. |

### All-in-one Color Settings

| Impostazione | Cosa fa |
|---|---|
| **Volume Line** | Colore della linea del volume combinata. |
| **Positive / Negative Delta Vol.** | Colori per delta volume positivo e negativo. |
| **Positive / Negative Delta Trade** | Colori per delta trade positivo e negativo. |

### High/Low Line Settings

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Mostra o nasconde le linee di swing high/low. |
| **Show End Retracement** | Visualizza la marcatura di fine ritracciamento. |
| **Line Width / Color / Style** | Aspetto delle linee high/low. |
| **End Retrace Color** | Colore usato per la marcatura di fine ritracciamento. |

### Trend Detector

| Impostazione | Cosa fa |
|---|---|
| **Enable Trend** | Visualizza bande di sfondo colorate per i trend rilevati. |
| **Mode** | Sensibilità: **Weak** (trend minori inclusi), **Medium** (intermedi) o **Strong** (solo trend maggiori). |
| **Trend Up / Trend Down Color** | Colori delle bande per direzione. |
| **Background Opacity** | Visibilità delle bande. |

### Level Settings

| Impostazione | Cosa fa |
|---|---|
| **Level Enable** | Visualizza linee di riferimento orizzontali. |
| **Level Value** | Soglia numerica del livello. |
| **Line Width / Color / Style** | Aspetto — stili: **Solid**, **Dash**, **Dot**, **Dash Dot**, **Dash Dot Dot**. |

## Suggerimenti ed errori comuni

- **Regola lo ZigZag prima di fidarti di qualsiasi etichetta.** Un'impostazione di inversione troppo piccola trasforma il rumore in "swing" e inonda il grafico di tag NOE/NOR privi di significato; una troppo grande nasconde la struttura che negozi.
- **Due etichette battono quattro.** Inizia con Volume e Delta volume; aggiungi Vol per tick o Extension solo quando li usi attivamente.
- **Rispetta l'avvertenza sulla liquidità.** Le sessioni overnight e festive producono segnali sforzo/risultato inaffidabili — la base di volume è troppo sottile.
- **L'ultimo swing si ridisegna per costruzione.** Gli strumenti basati su ZigZag finalizzano uno swing solo dopo che la condizione di inversione è soddisfatta, quindi tratta l'etichetta della gamba corrente come provvisoria.
- **NOE e NOR sono contesto, non ingressi.** Combinali con le bande di trend e un argomento di posizione (supporto, resistenza, bordo dell'area di valore) prima di agire.

## Articoli correlati

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[swing-point]]
- [[zig-zag]]
- [[volume]]