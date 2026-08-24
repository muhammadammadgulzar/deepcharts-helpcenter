---
title: "Oscillatore stocastico"
slug: "stochastic-oscillator"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Come le linee K e D dell'oscillatore stocastico individuano la chiusura all'interno del range recente, con ogni parametro, livello e impostazione di visualizzazione in DeepCharts."
keywords: ["stocastico", "indicatore stocastico", "%K", "%D", "linea K", "linea D", "ipercomprato ipervenduto", "stocastic"]
source_hash: "9710b1b798ce0220"
ai_translated: true
source_hash: "9710b1b798ce0220"
---
L'oscillatore stocastico misura dove si colloca il prezzo di chiusura più recente all'interno del range massimo–minimo delle ultime barre. Creato da George Lane, è uno degli strumenti classici per individuare condizioni di ipercomprato e ipervenduto e potenziali inversioni di trend.

In DeepCharts l'indicatore traccia due linee in una propria area del grafico — la linea **K** (il calcolo principale) e la linea **D** (una media mobile della K) — tra livelli configurabili di ipercomprato e ipervenduto.

## Che cos'è

L'oscillatore risponde alla domanda: il prezzo sta chiudendo vicino alla parte alta o alla parte bassa del suo range recente? Una chiusura vicina alla parte alta del range spinge la lettura verso l'estremo superiore (zona di ipercomprato); una chiusura vicina alla parte bassa la spinge verso l'estremo inferiore (zona di ipervenduto). La linea D smussa la linea K, e l'interazione tra le due — gli incroci e le visite alle zone estreme — è ciò su cui operi.

## Quando usarlo

- Operi su mercati in range e vuoi un metodo ripetibile per calibrare gli ingressi ai bordi del range.
- Vuoi un trigger di momentum anticipato — l'incrocio di K su D reagisce più velocemente della maggior parte degli indicatori di trend.
- Vai a caccia di divergenze tra gli estremi di prezzo e gli estremi di momentum.
- Vuoi confermare i segnali di un altro oscillatore come l'[[rsi]] prima di agire.

## Avvio rapido

1. Apri un grafico e premi **Ctrl I** — oppure fai clic sull'icona a barre nella toolbar del grafico, poi su **Indicators** — per aprire l'**Indicator List**.
2. Cerca "Stochastic" e fai clic su **+** per aggiungerlo. L'oscillatore viene disegnato in una propria area del grafico sotto le barre di prezzo (vedi [[indicator-layout]]).
3. Fai clic sull'icona a ingranaggio nella riga dell'indicatore per aprire le sue impostazioni.
4. All'inizio mantieni i valori predefiniti: **K Period** 14, **D Period** 3, **Smoothing Length** 3, con l'**Overbought Level** a 80 e l'**Oversold Level** a 20.

[SCREENSHOT: Un grafico con l'oscillatore stocastico in una propria area sotto il prezzo, con le linee K e D che si incrociano dentro la zona di ipervenduto sotto la linea del livello 20 | dc-it-stochastic-oscillator-01.png]

## Come leggerlo

- **Zone estreme.** Letture sopra il livello di ipercomprato (80 di default) significano che il prezzo sta chiudendo vicino alla parte alta del suo range recente; letture sotto il livello di ipervenduto (20) indicano che sta chiudendo vicino alla parte bassa. In un range, queste zone segnalano potenziali aree di inversione.
- **Incroci K/D.** K che incrocia al rialzo D è un trigger di momentum rialzista; K che incrocia al ribasso D è ribassista. Gli incroci che avvengono dentro — o mentre si esce da — una zona estrema hanno il peso maggiore.
- **I trend inchiodano l'oscillatore.** In un trend forte la lettura può restare a lungo nella zona di ipercomprato o ipervenduto. Una lettura estrema da sola non è un segnale di inversione.
- **Divergenza.** Il prezzo segna un nuovo massimo mentre l'oscillatore segna un massimo più basso (o lo speculare sui minimi) — il momentum non sta confermando il movimento.

## Riferimento delle impostazioni

Apri la finestra di dialogo dall'icona a ingranaggio nella riga dell'indicatore nel pannello **Indicators**.

### Parametri

| Impostazione | Cosa fa |
|---|---|
| **K Period** | Numero di barre usate per calcolare il range massimo–minimo della linea K. Predefinito: 14. Periodi più corti reagiscono più in fretta ma generano più falsi segnali. |
| **D Period** | Numero di periodi per la linea D — la media mobile della K. Predefinito: 3. |
| **Smoothing Length** | Smussamento aggiuntivo applicato alla linea K. Predefinito: 3. Aumentandolo, la K veloce e frastagliata diventa una linea più lenta e pulita. |

### Livelli

| Impostazione | Cosa fa |
|---|---|
| **Overbought Level** | Linea di soglia superiore. Predefinito: 80. Colore e spessore sono personalizzabili. |
| **Oversold Level** | Linea di soglia inferiore. Predefinito: 20. Colore e spessore sono personalizzabili. |

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| **K line color** | Colore della linea K. |
| **D line color** | Colore della linea D. |
| **Line style / Line width** | Stile di rendering e spessore di ciascuna linea. |
| **Display options** | Come le serie vengono disegnate nell'area del grafico. |
| **Use secondary axis** | Traccia l'oscillatore su un asse dei valori secondario. |

[SCREENSHOT: La finestra delle impostazioni dell'oscillatore stocastico con K Period 14, D Period 3, Smoothing Length 3 e le impostazioni dei livelli con Overbought 80 e Oversold 20 | dc-it-stochastic-oscillator-02.png]

## Suggerimenti ed errori comuni

- **Ipercomprato non significa vendere.** In un uptrend l'oscillatore vive sopra 80. Stabilisci prima lo stato del mercato, poi usa gli estremi come zone di inversione solo all'interno dei range.
- **Aspetta l'uscita, non l'ingresso.** Una lettura che esce dalla zona estrema (che rientra sotto 80 o risale sopra 20) è un segnale di timing più forte rispetto alla lettura che entra per la prima volta nella zona.
- **Regola lo smussamento prima del periodo.** Se la linea K è troppo rumorosa sui grafici veloci dei futures, aumenta **Smoothing Length** prima di accorciare **K Period** — mantieni la finestra di osservazione riducendo i falsi segnali.
- **Restringi i livelli sui simboli volatili.** 80/20 sono convenzioni; su strumenti che toccano costantemente gli estremi, soglie più ampie come 90/10 filtrano i segnali deboli.

## Articoli correlati

- [[rsi|Relative Strength Index (RSI)]]
- [[williams-r|Williams %R]]
- [[macd]]
- [[cci|Commodity Channel Index (CCI)]]
- [[different-types-of-input]]
- [[indicator-layout]]