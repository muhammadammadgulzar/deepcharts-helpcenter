---
title: "Commodity Channel Index (CCI)"
slug: "cci"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Come il Commodity Channel Index misura la deviazione del prezzo dalla sua media statistica, con indicazioni di interpretazione e ogni impostazione del CCI in DeepCharts."
keywords: ["CCI", "commodity channel index", "indicatore cci", "CCI di Lambert", "cci ipercomprato ipervenduto"]
source_hash: "c87cbeec27568a2e"
ai_translated: true
source_hash: "c87cbeec27568a2e"
---
Il Commodity Channel Index (CCI) misura quanto il prezzo di un asset si è discostato dal suo valore medio statistico. Sviluppato da Donald Lambert negli anni '80 per i mercati delle materie prime, oggi è applicato anche ad azioni, valute e indici, ed è uno strumento di riferimento per identificare condizioni di ipercomprato e ipervenduto.

In DeepCharts, il CCI disegna una singola linea in una propria area del grafico attorno a una linea dello zero, con linee di soglia di ipercomprato e ipervenduto configurabili e una media di smussamento opzionale.

## Che cos'è

Il CCI risponde alla domanda: il prezzo è insolitamente allontanato dalla propria media? Una lettura fortemente positiva significa che il prezzo sta scambiando ben al di sopra del suo livello tipico per la finestra di osservazione; una lettura fortemente negativa significa che sta scambiando ben al di sotto. Poiché l'indice misura la deviazione anziché la variazione grezza, è ugualmente a suo agio nel segnalare opportunità di ritorno alla media nei range e nel confermare la forza nei trend.

## Quando usarlo

- Fai trading su setup di ritorno alla media e vuoi una misura statistica di "sovraesteso" invece di una stima visiva.
- Vuoi confermare la forza di un breakout — una lettura che si mantiene in profondità in territorio positivo segnala una forte deviazione al rialzo che non sta rientrando immediatamente.
- Sei a caccia di divergenze tra estremi di prezzo ed estremi di deviazione.
- Fai trading su materie prime o futures e vuoi lo strumento che è stato progettato per il loro comportamento ciclico.

## Avvio rapido

1. Apri un grafico e premi **Ctrl I** — oppure fai clic sull'icona a grafico a barre nella toolbar del grafico, poi su **Indicators** — per aprire l'**Indicator List**.
2. Cerca "Commodity Channel Index" (o "CCI") e fai clic su **+** per aggiungerlo. L'indicatore viene visualizzato in una propria area del grafico sotto le barre dei prezzi (vedi [[indicator-layout]]).
3. Fai clic sull'icona dell'ingranaggio sulla riga dell'indicatore per aprirne le impostazioni.
4. Imposta **Input Data** su Close e scegli un **Period** — 14 o 20 sono i punti di partenza classici dei manuali. Imposta i livelli di ipercomprato e ipervenduto in base alla tua zona estrema; +100 e −100 sono la convenzione classica.

[SCREENSHOT: Un grafico con l'indicatore CCI nella sua area sotto il prezzo, con la linea che supera la linea di soglia di ipercomprato e ruota di nuovo verso lo zero | dc-it-cci-01.png]

## Come leggerlo

- **Linea dello zero.** Una lettura vicina allo zero significa che il prezzo si trova sulla sua media statistica per la finestra. Più la linea si allontana dallo zero, più il prezzo è sovraesteso.
- **Zone estreme.** La maggior parte dei trader considera le letture oltre ±100 come la zona estrema. In un range, un ritorno all'interno della zona è un classico trigger di ritorno alla media. In un trend, una lettura che *si mantiene* oltre +100 (o −100) è una prova della forza del trend, non un fade automatico.
- **Divergenza.** Il prezzo segna un nuovo estremo mentre il CCI ne segna uno meno profondo — la deviazione si sta riducendo e il movimento potrebbe esaurirsi.
- **Prima il regime.** La stessa lettura significa cose opposte in un range e in un trend. Decidi in quale stato di mercato ti trovi prima di agire su un estremo.

## Riferimento impostazioni

Apri la finestra di dialogo dall'icona dell'ingranaggio sulla riga dell'indicatore nel pannello **Indicators**.

### Parameters — General

| Impostazione | Cosa fa |
|---|---|
| **Input Data** | La serie di dati usata per il calcolo del CCI. Vedi [[different-types-of-input]]. |
| **Period** | Numero di periodi nel calcolo. Periodi più brevi producono più visite alla zona estrema; periodi più lunghi riservano gli estremi a movimenti genuinamente insoliti. |

### Parameters — Average

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Attiva o disattiva la linea media (di smussamento) opzionale. |
| **Average Type** | Metodo di media per la linea — Simple, Exponential e altri metodi. |
| **Periods** | Numero di periodi per il calcolo della media. |

### Levels

| Impostazione | Cosa fa |
|---|---|
| **Overbought level** | Posizione della linea di soglia superiore. ±100 è la convenzione classica. |
| **Oversold level** | Posizione della linea di soglia inferiore. |
| **Zero line color** | Colore della linea centrale (dello zero). |

### Series

| Impostazione | Cosa fa |
|---|---|
| **CCI line color** | Colore della linea principale del CCI. |
| **Secondary color** | Colore aggiuntivo opzionale per la visualizzazione. |
| **Average line color** | Colore della linea media opzionale. |
| **Display style** | Come la serie viene disegnata nell'area del grafico. |
| **Line style / Line width** | Stile di rendering e spessore delle linee. |
| **Use secondary axis** | Traccia l'indicatore su un asse dei valori secondario. |

[SCREENSHOT: La finestra di dialogo delle impostazioni del CCI con i parametri General con Input Data e Period, la sezione Average e la sezione Levels con le opzioni di ipercomprato, ipervenduto e linea dello zero | dc-it-cci-02.png]

## Suggerimenti ed errori comuni

- **Il CCI è illimitato.** Può spingersi ben oltre ±100 in un trend forte — una lettura di ipercomprato non è, di per sé, un segnale di vendita.
- **Fai fade nei range, segui nei trend.** Le letture oltre ±100 sono materiale da inversione dentro un range e materiale da continuazione dentro un trend. Applicare il copione da range a un mercato in trend è l'errore più comune con il CCI.
- **Smussa prima di accorciare.** Se la linea è troppo rumorosa, attiva la sezione Average invece di ridurre il Period — mantieni il significato statistico della finestra di osservazione ripulendo la visualizzazione.
- **Mantieni Input Data coerente.** Fai backtest e trading con lo stesso input; cambiare la sorgente del prezzo cambia dove cadono gli estremi.

## Articoli correlati

- [[rsi|Relative Strength Index (RSI)]]
- [[stochastic-oscillator]]
- [[williams-r|Williams %R]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]