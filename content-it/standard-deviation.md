---
title: "Deviazione standard"
slug: "standard-deviation"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Guida di riferimento all'indicatore Standard Deviation in DeepCharts: come misura la dispersione dei prezzi rispetto alla media, l'impostazione Periods (predefinita 14) e le opzioni di stile."
keywords: ["deviazione standard", "std dev", "indicatore stdev", "dispersione dei prezzi", "misura di volatilità", "deviazione standart", "indicatore sigma"]
source_hash: "58015f806c14c35c"
ai_translated: true
source_hash: "58015f806c14c35c"
---
L'indicatore Standard Deviation (deviazione standard) misura la volatilità del prezzo di un asset rispetto alla sua media su un periodo dato. Mostra quanto i valori del prezzo si discostano dalla media: una deviazione standard elevata riflette una volatilità maggiore (prezzi che si allontanano dalla media), mentre un valore ridotto indica una volatilità più bassa (prezzi che restano più vicini alla media).

È il motore statistico dietro diversi altri strumenti — [[bollinger-bands]] posiziona le sue bande a un multiplo di questo valore dalla media, e [[vwap-envelopes]] può usarlo per costruire bande di deviazione attorno al VWAP — quindi leggerlo direttamente ti dà il numero grezzo di dispersione che quegli indicatori rielaborano.

## Che cos'è

La deviazione standard risponde alla domanda: quanto è stato disperso il prezzo attorno alla propria media di recente? Statisticamente, è la radice quadrata della distanza quadratica media tra ciascun prezzo e la media della finestra di osservazione. Il risultato viene tracciato come una singola linea in un pannello sotto il grafico dei prezzi — sempre positiva, che sale quando il prezzo si disperde e scende quando si concentra.

[SCREENSHOT: Grafico dei prezzi con l'indicatore Standard Deviation in un pannello inferiore, con la linea che schizza durante un breakout veloce e decade verso la sua base durante il consolidamento laterale | dc-it-standard-deviation-01.png]

## Quando usarlo

- Per misurare la volatilità direttamente, senza la componente direzionale di un indicatore a bande o a canale.
- Per rilevare le contrazioni di volatilità — una deviazione standard in calo persistente spesso precede un movimento di espansione.
- Per confrontare l'intensità di movimenti successivi sullo stesso strumento e timeframe.
- Per verificare gli indicatori a bande — quando le Bollinger Bands appaiono insolitamente larghe o strette, questa linea mostra il dato grezzo che ne è la causa.

## Avvio rapido

1. Apri un grafico dei prezzi — vedi [[first-chart]].
2. Fai clic sul pulsante verde **Indicators** (o premi **Ctrl I**) per aprire l'**Indicator List**.
3. Cerca **Standard Deviation** e fai clic su **+** per aggiungerlo. Appare nel suo pannello dedicato sotto il prezzo.
4. Fai clic sull'icona delle impostazioni dell'indicatore per aprire la sua finestra di configurazione.
5. Il valore predefinito di 14 periodi è un punto di partenza equilibrato — abbastanza lungo da essere stabile, abbastanza corto da reagire all'interno di una sessione.

[SCREENSHOT: Finestra di configurazione di Standard Deviation aperta con il campo Periods impostato a 14 e la sezione Subgraphs con le opzioni Std. Dev Color, Subgraph Style, Line Style e Line Width | dc-it-standard-deviation-02.png]

## Come leggerlo

- **Il livello è relativo.** La deviazione standard è espressa nelle unità di prezzo dello strumento, quindi valutala rispetto alla sua storia recente piuttosto che a una soglia fissa.
- **Linea in salita** — il prezzo si sta disperdendo dalla sua media: è in corso una gamba di trend, un breakout o uno scossone volatile.
- **Linea in discesa** — il prezzo si sta comprimendo attorno alla sua media. Una compressione prolungata è la classica precondizione per un'espansione del range.
- **Nessuna direzione.** Come l'[[atr]], la deviazione standard è cieca alla direzione; un crollo e un rally verticale appaiono identici su questa linea. Abbinala a una lettura di trend o di struttura per la direzione.
- **I picchi decadono lentamente.** Una singola barra enorme gonfia il valore per l'intera finestra di osservazione; aspettati un plateau, poi un gradino verso il basso quando quella barra esce dalla finestra.

## Riferimento delle impostazioni

Facendo clic sull'icona delle impostazioni dell'indicatore si apre la finestra di configurazione.

### Parametri

| Impostazione | Cosa fa | Predefinito |
|---|---|---|
| **Periods** | Il numero di periodi usati per il calcolo della deviazione standard. Meno periodi rendono la linea nervosa ma attuale; più periodi la smussano trasformandola in un indicatore di regime. | 14 |

### Subgraphs

| Impostazione | Cosa fa | Predefinito |
|---|---|---|
| **Std. Dev Color** | Imposta il colore della linea della deviazione standard. | — |
| **Secondary Color** | Colore secondario opzionale per la linea. | — |
| **Subgraph Style** | Sceglie lo stile di visualizzazione della serie. | — |
| **Line Style** | Definisce lo stile della linea. | — |
| **Line Width** | Definisce lo spessore della linea dell'indicatore. | 2 |
| **Use Secondary Axis** | Visualizza l'indicatore su un asse secondario. | — |

## Suggerimenti ed errori comuni

- **Non interpretare una lettura alta come "ipercomprato".** La deviazione standard misura la dispersione, non l'estensione in una direzione — un valore alto può accompagnare l'inizio, il centro o la fine di un movimento.
- **Adatta la finestra di osservazione al tuo orizzonte operativo.** Un valore a 14 periodi su un grafico a 1 minuto descrive l'ultimo quarto d'ora; la stessa impostazione su un grafico giornaliero descrive tre settimane. Stesso numero, significato molto diverso.
- **Attenzione agli artefatti della finestra di osservazione.** Cali improvvisi della linea spesso significano che una vecchia barra anomala è uscita dalla finestra, non che il mercato si sia appena calmato.
- **Usala insieme all'ATR, non al suo posto.** L'[[atr]] misura il range della barra inclusi i gap; la deviazione standard misura la dispersione del prezzo di input attorno alla sua media. Mercati tranquilli con gap ampi possono mostrare una deviazione standard bassa ma un ATR alto — vedere entrambi previene i punti ciechi.

## Articoli correlati

- [[bollinger-bands]]
- [[atr]]
- [[vwap-envelopes]]
- [[keltner-channel]]
- [[different-types-of-input]]
- [[indicator-layout]]