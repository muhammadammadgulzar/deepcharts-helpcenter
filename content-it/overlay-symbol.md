---
title: "Overlay Symbol"
slug: "overlay-symbol"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Aggiungi al tuo grafico un secondo strumento che segue automaticamente il timeframe del grafico principale, con stili opzionali per volume e delta."
keywords: ["overlay symbol", "confrontare simboli", "aggiungere un secondo simbolo", "sovrapposizione di simboli", "due strumenti su un grafico", "overlaysymbol"]
source_hash: "2861a6da2611b5f2"
ai_translated: true
source_hash: "2861a6da2611b5f2"
---
L'indicatore Overlay Symbol visualizza un altro strumento finanziario sul tuo grafico principale, così puoi monitorare più mercati contemporaneamente. Il suo comportamento distintivo: la serie sovrapposta sincronizza automaticamente il proprio timeframe con il grafico principale — cambia la risoluzione del grafico principale e l'overlay la segue.

## Che cos'è

Overlay Symbol risponde alla domanda "come si sta muovendo quell'altro mercato accanto al mio?" senza alcuna gestione dei timeframe. Scegli un simbolo, e DeepCharts disegna le sue candele accanto (o sopra) alla tua serie principale alla stessa risoluzione, aggiornandole ogni volta che cambi il grafico principale.

Se ti serve lo strumento sovrapposto su un timeframe o un tipo di grafico *diverso* dal grafico principale, usa invece [[overlay-chart|Overlay Chart]] — questa è la differenza chiave tra i due indicatori.

## Quando usarlo

- Vuoi un confronto sempre sincronizzato di due mercati correlati mentre cambi timeframe liberamente.
- Segui la forza relativa tra uno strumento e la sua controparte di settore o di indice durante una sessione.
- Vuoi contesto di orderflow sul secondo strumento — l'overlay supporta la colorazione basata sul delta e larghezze delle candele basate sul volume.
- Stai osservando le divergenze (un mercato segna un nuovo massimo, l'altro no) senza gestire una seconda finestra grafico.

## Guida rapida

1. Apri il menu degli indicatori sul tuo grafico e aggiungi **Overlay Symbol**.
2. Fai clic sull'icona delle impostazioni dell'indicatore per aprire la finestra di configurazione.
3. Sotto General, usa **Select** per scegliere il simbolo da sovrapporre.
4. Per disegnare l'overlay sopra la tua serie di prezzi principale, seleziona **chart area 1**; altrimenti viene renderizzato in un pannello proprio.
5. Se i due strumenti scambiano a livelli di prezzo diversi, abilita **Use sec. axis** così l'overlay ottiene una propria scala di prezzi.
6. Applica le impostazioni. Da questo momento, cambiare il timeframe del grafico principale aggiorna l'overlay automaticamente.

[SCREENSHOT: Grafico principale con Overlay Symbol attivo — le candele di un secondo strumento renderizzate in chart area 1 su un asse secondario, con il timeframe che corrisponde al grafico principale | dc-it-overlay-symbol-01.png]

## Come leggerlo

Tratta l'overlay come contesto per il tuo mercato primario:

- **Conferma** — entrambi i mercati che spingono nella stessa direzione supportano le letture di continuazione del trend.
- **Divergenza** — il mercato sovrapposto che non conferma un nuovo massimo o minimo del tuo mercato principale è un avviso precoce che il movimento potrebbe mancare di partecipazione.
- **Scale indipendenti** — con **Use sec. axis** abilitato le due serie sono su assi separati: confronta forma e timing, non la distanza verticale o gli incroci.

Con **Color based on Delta** abilitato, le candele dell'overlay vengono colorate in base agli acquisti aggressivi netti rispetto alle vendite, invece che alla direzione apertura/chiusura, e **Width based on volume** rende fisicamente più larghe le candele con più scambi — insieme mostrano dove si concentra l'attività nel secondo mercato. Vedi [[orderflow-101]] per i concetti alla base.

## Riferimento delle impostazioni

[SCREENSHOT: Finestra delle impostazioni di Overlay Symbol con la sezione General con il campo Select e la sezione Volume/Delta con Width based on volume, Color based on Delta, % Max Width Based on Volume, Border based on Open/close, Delta input, Color mode e Std. dev. for coloring | dc-it-overlay-symbol-02.png]

### General

| Impostazione | Cosa fa |
|---|---|
| **Select** | Scegli quale simbolo sovrapporre al grafico principale. |

### Volume/Delta

| Impostazione | Cosa fa |
|---|---|
| **Width based on volume** | Varia la larghezza delle candele con il volume scambiato — le candele più attive vengono disegnate più larghe. |
| **Color based on Delta** | Colora le candele dell'overlay in base al valore del delta invece che alla direzione apertura/chiusura. |
| **% Max Width Based on Volume** | La larghezza massima, in percentuale, che una candela regolata sul volume può raggiungere. |
| **Border based on Open/close** | Colora il bordo della candela in base allo stato rialzista/ribassista (apertura vs chiusura) — utile quando il corpo è colorato in base al delta. |
| **Delta input** | Fonte dati per il calcolo del delta: **Volume** o **Trades**. Vedi [[different-types-of-input]]. |
| **Color mode** | **Fade** gradua l'intensità del colore in base all'entità del delta; **Fixed** usa un colore pieno per direzione. |
| **Std. dev. for coloring** | Il valore di deviazione standard che scala l'intensità della sfumatura quando **Color mode** è impostato su fade. |

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| **Border color** | Colore del bordo delle candele dell'overlay. |
| **Fill color** | Colore di riempimento del corpo delle candele dell'overlay. |
| **Chart style** | Come viene disegnata la serie: **Line**, **Candlestick**, **OHLC**, **Hidden** o **Candlebody**. |
| **Border width** | Spessore dei bordi delle candele. |

### Placement

| Impostazione | Cosa fa |
|---|---|
| **Chart area** | Seleziona **chart area 1** per sovrapporre direttamente nell'area del grafico principale; altrimenti la serie viene renderizzata in un pannello proprio. |
| **Use sec. axis** | Assegna all'overlay un asse dei prezzi proprio. Abilitalo quando le scale di prezzo degli strumenti differiscono. |

## Suggerimenti ed errori comuni

- **Abilita "Use sec. axis" per strumenti su scale di prezzo diverse** — altrimenti la serie con il prezzo più basso si comprime in una linea piatta e l'overlay è illeggibile.
- Ricorda che il timeframe è vincolato al grafico principale. Se l'overlay sembra "cambiare da solo", sta seguendo la risoluzione del tuo grafico principale — è così per progettazione. Usa [[overlay-chart|Overlay Chart]] per un timeframe indipendente.
- Lo stile di grafico **Line** è spesso la scelta più pulita quando ti interessa solo il confronto direzionale; candele complete su entrambe le serie possono affollare la finestra.
- La colorazione del delta richiede dati di scambio classificati bid/ask dal tuo feed. Se i colori non variano mai, controlla i tipi di dati forniti dal tuo feed in [[different-types-of-input]].

## Articoli correlati

- [[overlay-chart]]
- [[overlay-timeframe-candlestick]]
- [[correlation-viewer]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[orderflow-101]]