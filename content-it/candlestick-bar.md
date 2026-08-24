---
title: "Candlestick Bar"
slug: "candlestick-bar"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Sovrapponi candele giapponesi costruite da un tipo di barra diverso — minuti, barre a volume o range — sopra il tuo grafico principale."
keywords: ["candlestick bar", "overlay candele", "candele giapponesi", "sovrapporre candele", "overlay barre a volume", "overlay barre range", "indicatore candlestick"]
source_hash: "87e37759989acc28"
ai_translated: true
source_hash: "87e37759989acc28"
---
A volte vuoi due viste dello stesso mercato su un unico grafico: il tuo grafico di lavoro in un tipo di barra, e sopra di esso candele giapponesi classiche costruite da un'altra aggregazione. L'indicatore Candlestick Bar fa esattamente questo — sovrappone candele giapponesi sul grafico principale, con la costruzione delle candele (minuti, barre a volume o range) scelta in modo indipendente dal grafico sottostante.

Questo rende possibile, per esempio, mantenere come base un grafico veloce orientato all'orderflow continuando a vedere nello stesso pannello la struttura di candele più grandi basate sul tempo o sul range.

## Che cos'è

Il Candlestick Bar è un overlay del grafico che costruisce e disegna le proprie candele a partire dal tipo di parametro che selezioni — **Minutes**, **Vol Bars** o **Range** — e le dipinge sopra la visualizzazione dei prezzi esistente. Colore del corpo, riempimento, bordo, opacità e larghezza sono tutti configurabili, così l'overlay può essere tanto evidente o tanto discreto quanto ti serve per l'analisi della price action.

Poiché l'overlay è indipendente dal tipo di barra del grafico di base, appartiene alla stessa famiglia di strumenti di [[overlay-timeframe-candlestick]] e [[overlay-chart]] — scegli quello che corrisponde al confronto che vuoi fare.

## Quando usarlo

- Per vedere la struttura delle candele basate sul tempo su un grafico le cui barre di base non sono basate sul tempo (guidate da tick, volume o range).
- Per sovrapporre candele costruite a volume o a range su un grafico temporale, rivelando come le barre basate sull'attività inquadrano lo stesso movimento.
- Per leggere i classici pattern candlestick a una seconda aggregazione senza aprire e collegare un'altra finestra grafico.
- Per mantenere visibile una lettura strutturale di livello superiore mentre operi da un grafico di base più veloce.

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a grafico a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "Candlestick Bar" e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona dell'ingranaggio accanto all'indicatore per aprirne le impostazioni. Scegli un **Parameter Type** e imposta **Parameter 1** — per esempio, Minutes con un valore maggiore del timeframe del tuo grafico di base ti dà un classico overlay di timeframe superiore.
5. Riduci l'**Opacity** del corpo o disattiva **Show Filled Bar** in modo che il grafico sottostante resti leggibile sotto l'overlay.

[SCREENSHOT: Un grafico intraday veloce con l'overlay Candlestick Bar attivo — candele più grandi semi-trasparenti disegnate sopra le barre di base, entrambe chiaramente distinguibili | dc-it-candlestick-bar-01.png]

## Come leggerlo

Sei nuovo alla lettura delle candele giapponesi, o vuoi un rapido ripasso? Passa il mouse sulla candela interattiva qui sotto — ogni zona (corpo, ombre, apertura, massimo, minimo, chiusura) si spiega da sola, e puoi alternarla tra rialzista e ribassista — poi applica la stessa lettura a ogni candela dell'overlay.

[WIDGET: candle-anatomy]

- **Ogni candela dell'overlay riassume diverse barre di base** (o un quanto di scambi in volume/range) come una singola unità apertura-massimo-minimo-chiusura — leggila esattamente come leggeresti qualsiasi candela giapponese: direzione del corpo per il controllo, ombre per il rifiuto.
- **Il disaccordo tra overlay e base è informazione.** Quando le barre di base veloci oscillano avanti e indietro ma le candele dell'overlay restano unidirezionali, il rumore è al di sotto della risoluzione del tuo overlay; quando i due si allineano, i movimenti tendono a essere più puliti.
- **Le candele costruite a volume equalizzano l'attività.** Con **Vol Bars**, ogni candela si chiude dopo una quantità target di volume, quindi i periodi tranquilli si comprimono e quelli intensi si espandono — i confronti candela per candela diventano normalizzati rispetto all'attività.
- **Le candele range equalizzano il movimento.** Con **Range**, ogni candela copre una distanza di prezzo fissa, il che elimina completamente il tempo dalla lettura del pattern.

## Riferimento impostazioni

### General Parameters

| Impostazione | Cosa fa |
|---|---|
| **Parameter Type** | Come vengono costruite le candele dell'overlay: **Minutes**, **Vol Bars** o **Range**. |
| **Parameter 1** | Il valore principale di costruzione — si applica alle candele Minute e Range, e imposta il target per Vol Bars. |
| **Parameter 2** | Controlla il valore di inversione per Vol Bars. |

### Colors

| Impostazione | Cosa fa |
|---|---|
| **Positive Bar** | Colore delle candele rialziste dell'overlay. |
| **Negative Bar** | Colore delle candele ribassiste dell'overlay. |
| **Show Filled Bar** | Attiva o disattiva il riempimento dello sfondo del corpo della candela. |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Candle Width** | Spessore delle candele dell'overlay. |
| **Border Width** | Spessore dei bordi delle candele. |
| **Opacity** | Trasparenza dello sfondo del corpo della candela. |
| **Show Vertical Line on Close** | Quando è attiva, disegna una linea verticale sulle candele in chiusura. |

[SCREENSHOT: La finestra di dialogo delle impostazioni di Candlestick Bar con Parameter Type impostato su Minutes, i campi Parameter 1 e Parameter 2, più i gruppi Colors e Plot Settings | dc-it-candlestick-bar-02.png]

## Suggerimenti ed errori comuni

- **Mantieni l'overlay visivamente subordinato.** Se le candele dell'overlay sono completamente opache e larghe, seppelliscono il grafico di base; abbassa l'**Opacity**, riduci la **Candle Width**, oppure disattiva **Show Filled Bar** e leggi l'overlay dai soli bordi.
- **Scegli un'aggregazione che sia significativamente diversa.** Sovrapporre candele a 5 minuti su un grafico a 3 minuti aggiunge confusione senza dare informazioni; l'overlay si guadagna il suo posto quando riassume molte barre di base o una logica di costruzione delle barre genuinamente diversa.
- **Ricorda da quali candele arrivano i tuoi pattern.** Un pattern candlestick sull'overlay si completa solo quando la candela dell'overlay chiude — agire su di esso a metà candela, perché il grafico di base ha già chiuso diverse barre, è un errore comune.
- **Considera le alternative per viste tra simboli o tra timeframe.** Se vuoi sovrapporre un altro strumento, usa [[overlay-symbol]]; per un overlay di candele di timeframe superiore dedicato, confronta [[overlay-timeframe-candlestick]] prima di decidere.

## Articoli correlati

- [[overlay-timeframe-candlestick]]
- [[overlay-chart]]
- [[overlay-symbol]]
- [[chart-display-options]]
- [[different-types-of-input]]
- [[indicator-layout]]