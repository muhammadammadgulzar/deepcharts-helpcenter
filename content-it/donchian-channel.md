---
title: "Donchian Channel"
slug: "donchian-channel"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Traccia il massimo più alto e il minimo più basso su un periodo di lookback con il Donchian Channel per individuare breakout, direzione del trend ed espansione di volatilità."
keywords: ["donchian channel", "donchian", "massimo più alto minimo più basso", "canale di breakout", "canale di prezzo", "canale turtle", "donchain"]
source_hash: "37171f25cdf2750c"
ai_translated: true
source_hash: "37171f25cdf2750c"
---
Il Donchian Channel traccia due linee attorno al prezzo: il massimo più alto e il minimo più basso di un numero scelto di barre passate. Il risultato è un canale che contiene tutta l'azione recente dei prezzi, rendendo breakout e consolidamenti inconfondibili.

È uno degli indicatori più semplici da capire — c'è esattamente un parametro — il che lo rende un buon primo indicatore a canale prima di passare alle bande basate sulla volatilità.

## Che cos'è

Il canale risponde alla domanda "dove sono gli estremi recenti, e il prezzo li sta superando?". È composto da due elementi:

- **Upper Line** — il massimo più alto del periodo di lookback.
- **Lower Line** — il minimo più basso del periodo di lookback.

Quando il prezzo tocca o supera la linea superiore, sta facendo un nuovo massimo per il periodo; la stessa logica si applica alla linea inferiore per i nuovi minimi. La distanza verticale tra le linee è una lettura diretta del range recente: un canale che si allarga significa espansione di volatilità, un canale stretto significa compressione.

## Quando usarlo

- Per fare trading sui breakout: una chiusura oltre il canale significa che il prezzo ha superato ogni massimo o minimo nella finestra di lookback.
- Per leggere la direzione del trend: in un trend rialzista la linea superiore sale a gradini ripetutamente mentre la linea inferiore segue a distanza.
- Per individuare espansione e contrazione della volatilità dalla larghezza del canale.
- Per localizzare supporti e resistenze: le linee del canale marcano gli estremi del periodo, che spesso agiscono da livelli di reazione.

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a grafico a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "Donchian Channel" e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona dell'ingranaggio accanto all'indicatore per aprirne le impostazioni e imposta **Length** sul lookback contro cui vuoi operare — una lunghezza più corta segue il prezzo da vicino per segnali di breve termine, una più lunga definisce la struttura più ampia.

[SCREENSHOT: Un grafico dei prezzi con il Donchian Channel tracciato — linee superiore e inferiore che si muovono a gradini attorno alle candele, con una recente candela di breakout che chiude sopra la linea superiore | dc-it-donchian-channel-01.png]

## Come leggerlo

- **Breakout sopra la Upper Line**: il prezzo ha stampato un nuovo massimo per l'intero periodo di lookback — momentum rialzista. Un breakout sotto la Lower Line è lo specchio ribassista.
- **Linee a gradini**: una linea superiore che continua a salire a scatti mentre la linea inferiore sale dietro di essa è comportamento da trend; usa la linea inferiore come riferimento di trailing.
- **Canale piatto e stretto**: il prezzo non ha fatto un nuovo estremo nell'intera finestra — consolidamento. I canali compressi spesso precedono le espansioni, quindi uno squeeze è un motivo per attendere il prossimo breakout.
- **Larghezza del canale**: in allargamento = volatilità in espansione; in restringimento = volatilità in contrazione. Confronta con [[atr|ATR]] se vuoi la stessa informazione come singolo numero.

## Riferimento delle impostazioni

### Parametri

| Impostazione | Cosa fa |
|---|---|
| **Length** | Quante barre passate vengono usate per calcolare il massimo più alto (Upper Line) e il minimo più basso (Lower Line). Aumentare la lunghezza allarga il canale e ne rallenta la reattività; diminuirla rende il canale più sensibile ai movimenti recenti dei prezzi. |

### Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Donchian_Channel** | Controlla lo stile visivo dell'indicatore: colori delle linee, stile del subgraph, colorazione automatica, stile della linea, spessore della linea e un'etichetta breve personalizzata. |
| **+DI (Upper Line)** | Il subgraph che rappresenta il massimo più alto sul periodo selezionato. |
| **-DI (Lower Line)** | Il subgraph che rappresenta il minimo più basso sul periodo selezionato. |

> **Nota:** Le linee superiore e inferiore compaiono nella finestra delle impostazioni sotto i nomi di subgraph **+DI** e **-DI**. Sono le linee superiore e inferiore del Donchian, non le linee di movimento direzionale dell'[[adx|ADX]].

Ogni subgraph espone anche opzioni di visualizzazione: **Name Label**, **Value Label**, **Name Background**, **Value Background**, **Include on Auto Center** e **Chart color for marker** — controllano come la linea viene etichettata e se influisce sul centraggio automatico del grafico.

[SCREENSHOT: La finestra delle impostazioni del Donchian Channel che mostra il parametro Length e le righe dei subgraph Donchian_Channel, +DI (Upper Line) e -DI (Lower Line) con le loro opzioni di visualizzazione | dc-it-donchian-channel-02.png]

## Suggerimenti ed errori comuni

- **Abbina la Length al tuo orizzonte di posizione.** Un day trader che legge un grafico a 5 minuti e uno swing trader che legge un grafico giornaliero non dovrebbero usare lo stesso lookback; il canale è significativo solo in relazione all'orizzonte su cui operi.
- **Un tocco non è un breakout.** Il prezzo che tocca la linea superiore significa solo che ha eguagliato il massimo del periodo; molti trader attendono una chiusura oltre il canale per filtrare il rumore.
- **Aspettati whipsaw nei range.** Nei mercati laterali il prezzo tocca ripetutamente entrambi gli estremi; combina il canale con un filtro di forza del trend come [[adx|ADX]] prima di fare trading sui breakout.
- **Non confonderlo con le bande di volatilità.** Le [[bollinger-bands|Bollinger Bands]] e il [[keltner-channel|Keltner Channel]] sono costruiti da medie e volatilità; il Donchian Channel è puro estremo di prezzo, quindi si comporta diversamente nei periodi tranquilli.

## Articoli correlati

- [[keltner-channel]]
- [[bollinger-bands]]
- [[atr]]
- [[adx]]
- [[different-types-of-input]]
- [[indicator-layout]]