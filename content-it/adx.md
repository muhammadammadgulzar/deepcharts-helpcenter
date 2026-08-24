---
title: "Average Directional Index (ADX)"
slug: "adx"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Misura la forza del trend con l'Average Directional Index (ADX) e le sue linee +DI/−DI per distinguere i mercati in trend da quelli laterali."
keywords: ["adx", "average directional index", "indicatore forza del trend", "plus di", "minus di", "movimento direzionale", "dmi", "il mercato è in trend"]
source_hash: "82d8e4b25c3f49e1"
ai_translated: true
source_hash: "82d8e4b25c3f49e1"
---
L'Average Directional Index (ADX) è un indicatore di analisi tecnica usato per misurare la forza di un trend nel prezzo di uno strumento. Aspetto cruciale: misura solo la forza — un ADX in salita ti dice che il mercato è in trend, non in quale direzione.

Questo lo rende uno dei filtri più utili nella cassetta degli attrezzi di un trader di trend: risponde alla domanda a cui ogni strategia trend-following deve rispondere per prima — c'è davvero un trend da seguire, o il mercato si sta muovendo lateralmente?

## Che cos'è

L'ADX viene tracciato in un proprio pannello sotto il grafico dei prezzi. Insieme alla linea ADX principale, l'indicatore include le due linee direzionali da cui deriva: il **Plus Directional Indicator (+DI)** e il **Minus Directional Indicator (−DI)**. La linea +DI traccia il movimento direzionale al rialzo, la linea −DI quello al ribasso, e la linea ADX smussa la differenza tra le due in un'unica lettura di forza del trend.

Il risultato: la direzione viene da quale linea DI sta sopra, e la convinzione viene dall'altezza della linea ADX.

## Quando usarlo

- Come filtro di regime: prendi segnali trend-following solo quando l'ADX conferma un mercato in trend, e stai da parte (o passa a tattiche da range) quando non lo fa.
- Per confermare i breakout: un breakout accompagnato da un ADX in salita ha forza direzionale alle spalle; uno con un ADX piatto ha più probabilità di fallire.
- Per leggere il bias direzionale dagli incroci **+DI/−DI**.
- Per rilevare un trend che matura: un ADX che si piega da una lettura elevata avverte che la forza del trend si sta esaurendo.

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a grafico a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "Average Directional Index" e fai clic su **+** per aggiungerlo — si apre in una propria area del grafico sotto il pannello dei prezzi.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprirne le impostazioni.

Il **Period** di default pari a 14 è la configurazione standard e un punto di partenza sensato su qualsiasi timeframe. Dai alla linea ADX e alle due linee DI colori chiaramente distinti, così gli incroci si leggono all'istante.

[SCREENSHOT: Un grafico dei prezzi con l'indicatore ADX in un pannello inferiore con tre linee — la linea ADX in salita durante un movimento in trend, con +DI sopra −DI — mentre il pannello dei prezzi sopra mostra il corrispondente trend rialzista | dc-it-adx-01.png]

## Come leggerlo

- **Altezza della linea ADX = forza del trend.** Per convenzione comune, letture sopra circa 25 indicano un mercato in trend e letture sotto circa 20 un mercato debole o laterale; la zona intermedia è ambigua. Queste soglie sono convenzioni, non regole — calibrale sul tuo strumento e timeframe.
- **La direzione dell'ADX conta più del suo livello.** Un ADX in salita significa che il trend si sta rafforzando; un ADX in discesa significa che si sta indebolendo — anche se il prezzo continua a scivolare nella direzione del trend.
- **L'ADX è agnostico alla direzione.** Un forte trend ribassista produce un ADX alto esattamente come un forte trend rialzista. Leggi la direzione dalle linee DI o dal prezzo stesso.
- **Incroci DI**: +DI che incrocia sopra −DI segnala che il movimento direzionale rialzista prende il sopravvento; −DI che incrocia sopra +DI segnala il lato ribassista. Gli incroci sono più significativi quando l'ADX è elevato o in salita.

## Riferimento impostazioni

### Parameters

| Impostazione | Che cosa fa |
|---|---|
| **Period** | Il periodo usato per il calcolo dell'ADX. Default: 14. Periodi più brevi rendono l'indicatore più reattivo ma con più falsi segnali; periodi più lunghi smussano la lettura per l'analisi di regime su timeframe superiori. |

### Subgraphs

| Impostazione | Che cosa fa |
|---|---|
| **Line Color** | Colore della linea ADX principale. |
| **Line Style** | Stile della linea ADX (continua, tratteggiata). |
| **Line Width** | Spessore della linea ADX. |
| **Plus DI Color** | Colore della linea Plus Directional Indicator (+DI). |
| **Minus DI Color** | Colore della linea Minus Directional Indicator (−DI). |

[SCREENSHOT: La finestra delle impostazioni dell'ADX con il parametro Period impostato a 14 e le opzioni dei subgraph Line Color, Line Style, Line Width, Plus DI Color e Minus DI Color | dc-it-adx-02.png]

## Suggerimenti ed errori comuni

- **L'errore più comune: leggere l'ADX come direzione.** Un ADX in discesa durante un trend rialzista non significa "vendi" — significa che il trend sta perdendo forza. La direzione viene sempre dalle linee DI o dalla struttura del prezzo.
- **L'ADX è in ritardo per costruzione.** È una derivata smussata di input smussati, quindi conferma i trend invece di prevederli. Usalo per qualificare i segnali di strumenti più rapidi, non per generare ingressi da solo.
- **Un ADX basso è informazione, non assenza di informazione.** Un lungo tratto di ADX basso marca un range — l'ambiente in cui gli strumenti di mean reversion come l'[[rsi|RSI]] funzionano meglio e gli ingressi di breakout falliscono più spesso.
- Abbinalo al [[donchian-channel|Donchian Channel]] o al [[super-trend|Super Trend]]: il canale o la linea di trend fornisce la logica di ingresso, l'ADX fornisce il filtro "vale la pena prenderlo".

## Articoli correlati

- [[aroon-up-down]]
- [[aroon-oscillator]]
- [[super-trend]]
- [[donchian-channel]]
- [[different-types-of-input]]
- [[indicator-layout]]