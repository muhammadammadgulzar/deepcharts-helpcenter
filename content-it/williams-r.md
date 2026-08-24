---
title: "Williams %R"
slug: "williams-r"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Come il Williams %R individua la posizione della chiusura all'interno del range massimo-minimo recente per segnalare condizioni di ipercomprato e ipervenduto, con ogni impostazione in DeepCharts."
keywords: ["williams percent r", "%R", "W%R", "william r", "indicatore williams r", "ipercomprato ipervenduto"]
source_hash: "635e9f57ae6ac107"
ai_translated: true
source_hash: "635e9f57ae6ac107"
---
Il Williams %R è un oscillatore di momentum che misura le condizioni di ipercomprato e ipervenduto confrontando il prezzo di chiusura con il range massimo–minimo su un periodo di osservazione specificato. È uno degli oscillatori dalla reazione più rapida disponibili, il che lo rende popolare per il timing di breve periodo.

In DeepCharts, l'indicatore traccia valori tra 0 e 100 nella propria area del grafico, con livelli di riferimento alto, medio e basso configurabili e una media di lisciamento opzionale.

## Che cos'è

Il Williams %R risponde alla domanda: in quale punto del suo range recente sta chiudendo il prezzo in questo momento? Una chiusura vicina alla parte alta del range sul periodo di osservazione spinge la lettura verso la parte alta della scala; una chiusura vicina al fondo la spinge verso il basso. In DeepCharts, valori sopra 80 suggeriscono condizioni di ipercomprato (potenziali opportunità di vendita) e valori sotto 20 suggeriscono condizioni di ipervenduto (potenziali opportunità di acquisto).

La linea grezza è volutamente nervosa. La sezione integrata **Average** può lisciarla quando vuoi segnali meno numerosi e più puliti.

## Quando usarlo

- Ti serve un timing rapido delle inversioni ai bordi di un range di trading — il %R reagisce più velocemente della maggior parte degli oscillatori.
- Vuoi una seconda opinione che confermi un segnale di [[rsi]] o dello [[stochastic-oscillator]].
- Vuoi una lettura del momentum basata sulla pendenza — l'opzione Slope di **Auto Color** colora la linea a seconda che stia salendo o scendendo.
- Fai trading su timeframe brevi dove un oscillatore più lento segnalerebbe troppo tardi.

## Guida rapida

1. Apri un grafico e premi **Ctrl I** — oppure fai clic sull'icona a barre nella toolbar del grafico, poi su **Indicators** — per aprire l'**Indicator List**.
2. Cerca "Williams" e fai clic su **+** per aggiungere l'indicatore. Viene disegnato nella propria area del grafico sotto le barre dei prezzi (vedi [[indicator-layout]]).
3. Fai clic sull'icona dell'ingranaggio sulla riga dell'indicatore per aprire le sue impostazioni.
4. Mantieni i valori predefiniti per iniziare: **Length** 14 con **High Level** a 80, **Middle Level** a 50 e **Low Level** a 20. Se la linea è troppo rumorosa per il tuo timeframe, abilita la sezione **Average** (Simple, 20 barre) per lisciarla.

[SCREENSHOT: Un grafico con l'indicatore Williams %R nella propria area sotto il prezzo, la linea che scende sotto il livello basso 20 e risale, con le linee dei livelli 80/50/20 visibili | dc-it-williams-r-01.png]

## Come leggerlo

- **Zone estreme.** Sopra il livello alto (80 per impostazione predefinita), il prezzo sta chiudendo vicino alla parte alta del suo range recente — ipercomprato. Sotto il livello basso (20), sta chiudendo vicino al fondo — ipervenduto.
- **L'uscita conta più dell'ingresso.** La linea che lascia una zona estrema (ritornando sotto 80, o sopra 20) è un segnale di timing più forte rispetto alla linea che entra per la prima volta nella zona.
- **Il livello medio come bias.** La linea 50 è un riferimento di metà scala: letture che si mantengono sopra propendono per il rialzo, sotto per il ribasso.
- **I trend inchiodano la lettura.** In un trend forte, il %R può restare a un estremo per molte barre. Tratta gli estremi come zone di inversione solo quando il mercato è in range.

## Riferimento delle impostazioni

Apri la finestra dall'icona dell'ingranaggio sulla riga dell'indicatore nel pannello **Indicators**.

### Parameters

| Impostazione | Cosa fa |
|---|---|
| **Length** | Il periodo di osservazione per il calcolo del %R. Predefinito: 14. Periodi più brevi aumentano la sensibilità; periodi più lunghi lisciano i risultati. |

### Average

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Applica un lisciamento a media mobile alla linea del %R per ridurre il rumore e chiarire il trend. |
| **Average Type** | Metodo di lisciamento: Simple (ponderazione uguale), Exponential (enfatizza i valori recenti), Triangular (doppio lisciamento) o Weighted (ponderazione progressiva). |
| **Average Length** | Lunghezza della media di lisciamento. Predefinito: 20 barre. Valori più alti creano una linea più liscia. |

### Levels

| Impostazione | Cosa fa |
|---|---|
| **Middle Level** | Linea di riferimento di metà scala. Predefinito: 50. |
| **Low Level** | Linea della soglia di ipervenduto. Predefinito: 20. |
| **High Level** | Linea della soglia di ipercomprato. Predefinito: 80. |

Ogni linea di livello ha le proprie impostazioni di colore e spessore (spessore linea predefinito: 1).

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| **Subgraph Style** | Come viene disegnata la serie. Predefinito: Line, una linea continua dei valori. |
| **Auto Color** | L'opzione Slope cambia il colore della linea a seconda che il momentum stia salendo o scendendo. |
| **Line Style** | Predefinito: Solid; sono disponibili le alternative tratteggiata e punteggiata. |
| **Line Width** | Spessore della linea. Predefinito: 1. |
| **Short Name** | L'etichetta mostrata per l'indicatore. Predefinito: "W%R". |

[SCREENSHOT: La finestra delle impostazioni del Williams %R che mostra Length 14, la sezione Average con le opzioni di Average Type e la sezione Levels con Middle 50, Low 20 e High 80 | dc-it-williams-r-02.png]

## Suggerimenti ed errori comuni

- **Attenzione alla scala.** Le definizioni da manuale riportano il Williams %R su una scala da 0 a −100. DeepCharts mostra la stessa informazione su una scala da 0 a 100, quindi "sopra 80" qui corrisponde a "sopra −20" del manuale. I segnali sono gli stessi; cambiano solo le etichette dell'asse.
- **Il %R duplica la linea K dello Stochastic.** Entrambi misurano la posizione della chiusura all'interno del range recente — usare il Williams %R accanto allo [[stochastic-oscillator]] non aggiunge alcuna informazione nuova. Scegline uno.
- **Liscia sui grafici veloci.** Sui timeframe bassi la linea grezza oscilla in continuazione; abilitare la sezione Average è di solito meglio che allungare il periodo di osservazione.
- **Non andare contro un estremo inchiodato.** Una lettura ferma sopra 80 in un forte trend rialzista è informazione di trend, non un segnale di vendita.

## Articoli correlati

- [[stochastic-oscillator]]
- [[rsi|Relative Strength Index (RSI)]]
- [[cci|Commodity Channel Index (CCI)]]
- [[momentum]]
- [[different-types-of-input]]
- [[indicator-layout]]