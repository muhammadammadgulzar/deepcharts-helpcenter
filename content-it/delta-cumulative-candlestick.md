---
title: "Delta Cumulative Candlestick"
slug: "delta-cumulative-candlestick"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Disegna il delta cumulativo come candlestick, così puoi leggere il totale progressivo dell'aggressione in acquisto contro quella in vendita con il dettaglio completo di apertura-massimo-minimo-chiusura."
keywords: ["delta cumulative candlestick", "delta cumulativo", "CVD", "cumulative volume delta", "candele delta", "candlestick CVD", "divergenza delta cumulativo"]
source_hash: "fd84c146b2eed0ae"
ai_translated: true
source_hash: "fd84c146b2eed0ae"
---
Delta Cumulative Candlestick disegna la somma progressiva del delta di ogni candela — la differenza tra acquisti a mercato aggressivi e vendite a mercato — come una serie di candlestick dedicata sotto il grafico. Dove uno strumento di delta per barra mostra l'aggressione di ogni candela in isolamento, questo indicatore mostra il punteggio accumulato dell'intera battaglia, così puoi vedere quale lato è stato più aggressivo nel tempo.

Poiché il delta cumulativo è disegnato come candlestick anziché come singola linea, ne vedi anche apertura, massimo, minimo e chiusura per ogni barra — il percorso che l'aggressione ha compiuto all'interno di ogni candela.

## Che cos'è

L'indicatore visualizza la somma cumulativa del delta di ogni candela. Ogni nuova barra aggiunge il proprio delta al totale progressivo: acquisti aggressivi sostenuti inclinano la serie verso l'alto, vendite sostenute la inclinano verso il basso. I trader lo chiamano comunemente cumulative volume delta (CVD). Il suo uso principale è confrontare la forma della serie di delta con la forma del prezzo — le concordanze confermano il movimento, le divergenze mettono in guardia.

Esplora il totale progressivo qui sotto — passa il mouse sulle barre per vedere il delta di ogni candela che si aggiunge alla linea cumulativa.

[WIDGET: delta-lab]

## Quando usarlo

- Vuoi una conferma del trend: il prezzo che fa massimi crescenti mentre anche il delta cumulativo fa massimi crescenti mostra una reale partecipazione aggressiva.
- Vai a caccia di divergenze: il prezzo rompe verso un nuovo massimo ma il delta cumulativo non lo fa — al breakout mancano compratori aggressivi.
- Studi l'assorbimento: il delta cumulativo cade con forza mentre il prezzo tiene — i compratori passivi stanno assorbendo l'aggressione in vendita.
- Vuoi il dettaglio intra-barra sul percorso del delta stesso, che una semplice versione a linea non può mostrare.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Delta Cumulative Candlestick** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto all'indicatore.
4. Imposta **Input Data** su **Volumes** — delta calcolato dalle quantità di contratti/azioni scambiati — la scelta standard (vedi [[different-types-of-input]]).
5. Attiva **Reset to Start Session** così l'accumulo riparte a ogni sessione di trading e la lettura di oggi non viene inquinata dal totale di ieri.
6. In **Subgraphs**, scegli lo stile **Candlestick** e i colori che si abbinano al tuo grafico, poi applica.

[SCREENSHOT: Finestra delle impostazioni di Delta Cumulative Candlestick che mostra il menu a discesa Input Data aperto con le opzioni Volumes, Order e Aggregates Trades, più le impostazioni Filter Min, Filter Max, Reset to Start Session, Average e Zero Line | dc-it-delta-cumulative-candlestick-01.png]

## Come leggerlo

- **La linea dello zero è il punto di equilibrio.** Sopra di essa, l'aggressione cumulativa in acquisto è in vantaggio; sotto, comanda l'aggressione in vendita. Con il reset di sessione attivo, la linea dello zero si legge come "chi ha vinto la sessione finora".
- **Conferma:** il trend del prezzo e il trend del delta cumulativo che si muovono insieme sono lo stato sano — l'aggressione sta producendo risultato.
- **Divergenza:** prezzo in salita, delta cumulativo piatto o in calo significa che il rally corre su domanda passiva o offerta sottile invece che su acquisti aggressivi. Spesso precede degli stalli, anche se le divergenze possono persistere nei trend forti — trattale come cautela, non come un segnale in sé.
- **Assorbimento:** il delta cumulativo che scende bruscamente mentre il prezzo si muove appena significa che i venditori aggressivi vengono assorbiti dai compratori passivi. Vedi [[understanding-icebergs-absorption]].
- **La linea della media** smussa il delta cumulativo e ti aiuta a leggerne il trend con pulizia; le sue bande di deviazione aggiungono un inviluppo di volatilità attorno al percorso del delta.

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### Parametri

| Impostazione | Cosa fa |
|---|---|
| **Input Data** | Base dati per il calcolo: **Volumes** (le quantità di contratti/azioni scambiati), **Order** (dati degli ordini, come la quantità di ordini di acquisto e di vendita) o **Aggregates Trades** (il numero di scambi o transazioni eseguiti). I trade indicano quanto spesso uno strumento viene scambiato, i volumi indicano quanto. Vedi [[different-types-of-input]]. |
| **Filter Min** | Vengono conteggiati solo i contributi al delta cumulativo sopra questa soglia. |
| **Filter Max** | Filtro massimo. Lasciato a **0**, non viene applicato alcun filtro massimo. |
| **Reset to Start Session** | Riavvia il calcolo del delta cumulativo all'inizio di ogni sessione di trading invece di accumulare indefinitamente. |
| **Average** | Aggiunge una media di smussamento alla linea del delta cumulativo, aiutando a identificarne il trend più chiaramente. |
| **Zero Line** | La linea di separazione tra delta cumulativo positivo (più aggressione in acquisto) e delta cumulativo negativo (più aggressione in vendita). |

### Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Cumulative Delta** | Colori, stile del subgraph (**Candlestick**, **OHLC** o **CandleBody**) e spessore di linea della serie del delta cumulativo. |
| **Average** | Colore, stile di linea, spessore e impostazioni di deviazione — le deviazioni disegnano bande di volatilità attorno alla media. |

## Suggerimenti ed errori comuni

- **Decidi consapevolmente sul reset di sessione.** Con il reset attivo confronti l'aggressione intraday; disattivato, segui un totale di più lungo periodo il cui livello assoluto dipende da quando l'accumulo è iniziato. Mescolare le due letture porta a conclusioni sbagliate.
- **Le divergenze sono contesto, non trigger.** I trend forti possono ignorare diverse divergenze del CVD di fila. Aspetta la conferma del prezzo.
- **Confronta cose confrontabili.** Il delta cumulativo costruito da **Volumes** e quello da **Aggregates Trades** possono divergere tra loro — scegli un input e resta coerente all'interno di un'analisi.
- **Usa gli stoppini delle candele.** Una candela di delta cumulativo con un lungo stoppino inferiore mostra aggressione in vendita recuperata all'interno della stessa barra — un'informazione che un grafico a linea butta via.

## Articoli correlati

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-cumulative-histogram]]
- [[delta-bar]]
- [[deep-delta]]