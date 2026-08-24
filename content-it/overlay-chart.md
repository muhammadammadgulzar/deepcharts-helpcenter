---
title: "Overlay Chart"
slug: "overlay-chart"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Visualizza un secondo strumento sul tuo grafico principale con tipo di grafico e timeframe propri, inclusa la colorazione delle candele basata sul delta."
keywords: ["overlay chart", "confrontare due simboli", "secondo simbolo sul grafico", "grafico multi simbolo", "asse secondario", "indicatore overlay", "overlaychart"]
source_hash: "99cfc7d1d0777c7f"
ai_translated: true
source_hash: "99cfc7d1d0777c7f"
---
L'indicatore Overlay Chart disegna il grafico di un secondo strumento finanziario sopra il tuo grafico principale, così puoi monitorare due mercati in un'unica finestra. È il fratello più configurabile di [[overlay-symbol|Overlay Symbol]]: invece di rispecchiare il timeframe del grafico principale, Overlay Chart ti consente di scegliere un tipo di grafico e parametri completamente indipendenti per lo strumento sovrapposto.

## Che cos'è

Overlay Chart risponde alla domanda "cosa sta facendo quell'altro mercato in questo momento, alla risoluzione che scelgo io?" senza aprire una seconda finestra grafico. Selezioni un simbolo qualsiasi dal tuo feed, gli assegni un tipo di grafico proprio (tempo, range, volume, Renko e altri), e DeepCharts lo disegna in un pannello separato oppure direttamente sopra la tua serie di prezzi principale.

Poiché la serie sovrapposta può usare una scala diversa dal tuo strumento principale, l'indicatore include un'opzione per un asse dei prezzi secondario, così entrambe le serie restano leggibili.

## Quando usarlo

- Fai trading su uno strumento ma prendi spunti da uno correlato — per esempio osservando un future su indice mentre operi su un mercato collegato.
- Vuoi una vista a risoluzione più alta o più bassa di un altro simbolo rispetto a quella del tuo grafico principale (Overlay Symbol non può farlo — si sincronizza sempre con il timeframe del grafico principale).
- Stai studiando comportamenti di anticipo/ritardo o di divergenza tra due mercati in un'unica finestra.
- Vuoi candele colorate in base al delta sulla serie sovrapposta per confrontare l'orderflow tra strumenti.

## Guida rapida

1. Apri il menu degli indicatori sul tuo grafico e aggiungi **Overlay Chart**.
2. Apri le impostazioni dell'indicatore.
3. Fai clic su **Select Symbol** e scegli lo strumento da sovrapporre.
4. Imposta **Parameter Type** sul tipo di grafico che vuoi per l'overlay (per esempio **Minutes**) e inserisci il suo valore in **Param 1** (per esempio 15 per una serie a 15 minuti).
5. Per disegnare l'overlay sopra la tua serie di prezzi principale, seleziona **Chart Area 1** in cima alla finestra dell'indicatore. Lasciandolo nella propria area, le due serie restano in pannelli separati.
6. Se i due strumenti scambiano a livelli di prezzo diversi, abilita **Use Secondary Axis** così l'overlay ottiene la propria scala.
7. Applica le impostazioni.

[SCREENSHOT: Grafico principale di uno strumento futures con Overlay Chart attivo che mostra le candele di un secondo strumento renderizzate in Chart Area 1 su un asse secondario, entrambe le serie chiaramente distinguibili per colore | dc-it-overlay-chart-01.png]

## Come leggerlo

Leggi l'overlay come contesto, non come segnale a sé stante. Gli usi più comuni:

- **Correlazione e divergenza** — quando due mercati normalmente correlati smettono di muoversi insieme, quello in ritardo spesso si riallinea verso il leader. L'overlay rende questi momenti visibili barra per barra.
- **Forza relativa** — confronta la forma delle due serie nella stessa sessione: quale ha segnato per prima un nuovo massimo, quale ha tenuto il proprio minimo.
- **Attenzione alla scala** — con **Use Secondary Axis** abilitato, le due serie sono disegnate su scale indipendenti. Confronta forme e timing, non la distanza verticale; un incrocio visivo tra le due linee non ha significato su assi diversi.

Se abiliti **Delta-based Color**, le candele sovrapposte vengono colorate in base al loro delta (aggressività in acquisto vs in vendita) invece che alla direzione apertura/chiusura, permettendoti di confrontare l'orderflow tra i due mercati. Vedi [[orderflow-101]] per come viene calcolato il delta.

## Riferimento delle impostazioni

[SCREENSHOT: Finestra di dialogo delle impostazioni di Overlay Chart aperta, con la sezione dei parametri General e il menu a discesa Parameter Type espanso che elenca Minutes, Days, Weekly, Monthly, Vol Bars, Range, Volume, Trade, Renko, Seconds, Point Figure e Delta | dc-it-overlay-chart-02.png]

### General

| Impostazione | Cosa fa |
|---|---|
| **Select Symbol** | Fai clic per scegliere il simbolo da sovrapporre al grafico principale. |
| **Parameter Type** | Il tipo di grafico per la serie sovrapposta: **Minutes**, **Days**, **Weekly**, **Monthly**, **Vol Bars**, **Range**, **Volume**, **Trade**, **Renko**, **Seconds**, **Point Figure** o **Delta**. |
| **Param 1** | Il parametro di riferimento per i grafici basati sul tempo e per i tipi Range, Volume, Trade, Renko e Delta; è anche il primo parametro per i grafici Vol Bars e Point Figure. |
| **Param 2** | Il secondo parametro, usato solo dai tipi di grafico Vol Bars e Point Figure. |

### Volume/Delta

| Impostazione | Cosa fa |
|---|---|
| **Delta-based Color** | Colora le candele dell'overlay in base al loro delta invece che alla direzione apertura/chiusura. |
| **Open/Close Based Border** | Colora il bordo della candela in base allo stato rialzista/ribassista (apertura vs chiusura), utile in abbinamento al corpo colorato in base al delta. |
| **Delta Input** | Da quale database legge il calcolo del delta: **Volume** o **Trades**. Vedi [[different-types-of-input]]. |
| **Color Mode** | **Fade** gradua l'intensità del colore in base all'entità del delta; **Fixed** usa un singolo colore pieno per direzione. |
| **Std. Dev. for Coloring** | Il valore di deviazione standard che scala l'intensità della sfumatura quando **Color Mode** è impostato su Fade. |

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| **Border color** | Colore del bordo delle candele dell'overlay. |
| **Fill color** | Colore di riempimento del corpo delle candele dell'overlay. |
| **Chart Style** | Come viene disegnata la serie sovrapposta: **Line**, **Candlestick**, **OHLC**, **Hidden** o **Candlebody**. |
| **Border width** | Spessore dei bordi delle candele. |

### Placement

| Impostazione | Cosa fa |
|---|---|
| **Chart Area** | Seleziona **Chart Area 1** in cima alla finestra dell'indicatore per disegnare l'overlay nell'area del grafico principale; altrimenti viene renderizzato in un pannello proprio. |
| **Use Secondary Axis** | Assegna alla serie sovrapposta un asse dei prezzi proprio. Abilitalo ogni volta che i due strumenti scambiano su scale di prezzo diverse. |

## Suggerimenti ed errori comuni

- **Dimenticare l'asse secondario** è il problema più comune: con due strumenti a livelli di prezzo molto diversi che condividono un solo asse, una serie si appiattisce in una linea illeggibile. Abilita **Use Secondary Axis**.
- Se vuoi soltanto lo stesso timeframe del tuo grafico principale, usa invece [[overlay-symbol|Overlay Symbol]] — si sincronizza automaticamente e richiede meno configurazione.
- Mescolare tipi di grafico molto diversi (per esempio un overlay Renko su un grafico principale basato sul tempo) è potente ma può ingannare sul timing, perché le barre Renko non chiudono su un orologio. Interpreta l'allineamento barra per barra con elasticità.
- La colorazione basata sul delta dipende dai dati di scambio bid/ask del tuo feed; se il delta appare vuoto o piatto, controlla il tipo di dati del tuo feed in [[different-types-of-input]].
- Usa gli stili di grafico **Line** o **Candlebody** quando l'overlay affolla la serie principale — una rappresentazione più sottile mantiene leggibile lo strumento principale.

## Articoli correlati

- [[overlay-symbol]]
- [[overlay-timeframe-candlestick]]
- [[correlation-viewer]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[orderflow-101]]