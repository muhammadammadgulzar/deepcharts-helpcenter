---
title: "Delta Bar"
slug: "delta-bar"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Disegna il delta di ogni candela — acquisti aggressivi meno vendite aggressive — come barre sotto il grafico, per confrontare la pressione del mercato barra per barra."
keywords: ["delta bar", "indicatore delta", "delta della barra", "delta acquisti vendite", "istogramma delta", "candele delta", "delta per candela", "delta orderflow"]
source_hash: "a537a166f692a20f"
ai_translated: true
source_hash: "a537a166f692a20f"
---
Delta Bar mostra il delta di ogni candela — la differenza tra l'attività di **acquisto a mercato** e di **vendita a mercato** — come barre a piè di pagina sotto il tuo grafico dei prezzi. Ogni barra ti dice quale lato è stato più aggressivo durante quella candela: i compratori a mercato che alzano l'offerta o i venditori a mercato che colpiscono il bid.

È il modo più diretto per confrontare l'aggressione barra per barra, e il compagno naturale della lettura delle candele: la candela mostra cosa ha fatto il prezzo, la barra di delta mostra chi stava spingendo.

## Che cos'è

Delta Bar è un misuratore di aggressione per candela disegnato in un pannello dedicato sotto il grafico. Un delta positivo significa più acquisti aggressivi che vendite in quella candela; un delta negativo significa il contrario. Con le opzioni di subgraph in stile candlestick, ogni barra di delta può anche riflettere l'intervallo coperto dal delta all'interno della barra — non solo dove ha chiuso, ma anche gli estremi raggiunti lungo il percorso.

Provalo dal vivo qui sotto — passa il mouse su una barra di delta per vedere quale lato stava spingendo in quella candela, e osserva come il totale progressivo tiene il punteggio.

[WIDGET: delta-lab]

## Quando usarlo

- Vuoi confermare un movimento: un rally con delta positivo in aumento è guidato da veri acquisti aggressivi.
- Cerchi divergenze: il prezzo fa un nuovo massimo ma il delta resta negativo o si riduce — alla spinta manca partecipazione aggressiva.
- Studi l'assorbimento: un delta fortemente negativo mentre il prezzo si rifiuta di scendere significa che i compratori passivi stanno assorbendo le vendite.
- Vuoi la storia dell'aggressione a colpo d'occhio senza aprire un footprint completo come [[deep-print]].

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Delta Bar** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto all'indicatore.
4. Nelle impostazioni dei dati, mantieni l'input su **Volume** — il volume totale scambiato a ogni livello di prezzo — finché non hai un motivo per cambiare (vedi [[different-types-of-input]]).
5. Lascia **Filter Min** e **Filter Max** ai valori neutri così tutto il delta viene conteggiato (un **Filter Max** a **0** non applica alcun filtro massimo).
6. In **Subgraphs**, scegli uno stile — **Candlestick**, **OHLC** o **CandleBody** — e imposta i colori toro/orso in accordo con lo schema del tuo grafico.

[SCREENSHOT: Finestra delle impostazioni di Delta Bar che mostra la sezione delle impostazioni dati con le opzioni di input (Volume, Order, Trades, Aggregate Volume, Aggregate Trades) e la sezione Subgraphs con il menu a discesa dello stile aperto su Candlestick, OHLC, CandleBody | dc-it-delta-bar-01.png]

## Come leggerlo

- **Segno e dimensione.** Una grande barra di delta positiva significa che i compratori hanno dominato aggressivamente la candela; una grande barra negativa significa che l'hanno fatto i venditori. Un delta piccolo su una candela grande significa che il movimento è avvenuto con poca aggressione netta — spesso liquidità sottile più che convinzione.
- **Delta contro direzione del prezzo.** I segnali più forti nascono dal disaccordo. Una candela rialzista con delta negativo significa che il prezzo è salito mentre i venditori erano più aggressivi — i compratori passivi li hanno assorbiti, un segnale forte. Una candela ribassista con delta positivo è l'immagine speculare.
- **Intervallo del delta intra-barra.** Con lo stile **Candlestick** o **OHLC**, la barra di delta mostra gli estremi raggiunti dal delta all'interno della candela oltre a dove ha chiuso. Una barra di delta che è schizzata fortemente in positivo ma ha chiuso quasi piatta rivela compratori che ci hanno provato e hanno fallito.
- **Le sequenze contano più delle singole barre.** Barre di delta positive che si riducono avvicinandosi a una resistenza mostrano la pressione in acquisto che svanisce prima che il prezzo lo confermi.

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### Data Setting

| Impostazione | Cosa fa |
|---|---|
| **Volume** | Calcola il delta dal volume totale scambiato a ogni livello di prezzo — la lettura standard dell'intensità di trading. |
| **Order** | Usa i dati degli ordini, come la quantità di ordini di acquisto e di vendita a ogni livello di prezzo — per valutare la pressione degli ordini e il comportamento dei partecipanti. |
| **Trades** | Usa il numero di trade eseguiti a ogni livello di prezzo, indipendentemente dalla loro dimensione. |
| **Aggregate Volume** | Usa il volume aggregato — piccoli ordini piazzati a breve distanza di tempo l'uno dall'altro e riconducibili a un singolo ordine più grande, ricombinati insieme. |
| **Aggregate Trades** | Usa i trade aggregati — la stessa ricostruzione applicata al numero di trade. Vedi [[different-types-of-input]]. |
| **Filter Min** | Filtro minimo sull'indicatore — vengono visualizzati solo i valori di delta sopra questa soglia. |
| **Filter Max** | Filtro massimo sull'indicatore. Lasciato a **0**, non viene applicato alcun filtro massimo. |

### Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Colors** | Schema di colori delle barre di delta, differenziato per delta positivo (acquisti) e negativo (vendite). |
| **Subgraph Style** | Formato di disegno: **Candlestick**, **OHLC** o **CandleBody**. |
| **Line Width** | Spessore delle barre, per la visibilità. |

## Suggerimenti ed errori comuni

- **Il delta è aggressione, non predizione.** Un delta positivo contro un muro di venditori passivi può precedere un ribasso — leggi sempre il delta rispetto a ciò che il prezzo ha fatto davvero.
- **Uniforma il tipo di input prima di confrontare i grafici.** Gli input Volume, Trades e Aggregate producono valori di delta genuinamente diversi sulle stesse candele.
- **Usa i filtri con intenzione.** Un **Filter Min** che isola i grandi trade trasforma Delta Bar in uno strumento di "delta dei grandi operatori" — utile, ma non più il quadro completo.
- **Osserva il contesto cumulativo.** Il delta per barra cambia segno di continuo; abbinalo a [[delta-cumulative-candlestick]] o [[delta-cumulative-histogram]] per vedere il totale progressivo.

## Articoli correlati

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-cumulative-candlestick]]
- [[delta-cumulative-histogram]]
- [[delta-highlight]]