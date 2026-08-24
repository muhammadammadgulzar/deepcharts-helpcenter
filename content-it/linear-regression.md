---
title: "Regressione lineare"
slug: "linear-regression"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Riferimento per l'indicatore Linear Regression in DeepCharts: la linea di trend best-fit, le impostazioni dei dati di input e della lunghezza, e le opzioni di stile della linea."
keywords: ["linea di regressione lineare", "minimi quadrati", "indicatore di regressione", "linea di best fit", "LSMA", "impostazioni regressione lineare"]
source_hash: "d8d0bfb3e9c0aa6f"
ai_translated: true
source_hash: "d8d0bfb3e9c0aa6f"
---
L'indicatore Linear Regression calcola e visualizza una linea di trend basata sul metodo della regressione lineare — una retta che minimizza la distanza dai punti di prezzo su un periodo specifico. Invece di mediare i prezzi passati come una media mobile, adatta ad essi la retta statisticamente migliore e traccia dove tale retta si trova al momento.

Il risultato è una curva fluida che aderisce al trend più da vicino di una media mobile della stessa lunghezza, aiutandoti a identificare la direzione del trend e a prevedere il movimento dei prezzi tramite supporti e resistenze dinamici.

## Che cos'è

La regressione lineare risponde alla domanda: se le ultime N barre fossero riassunte da un'unica retta, dove si troverebbe quella retta adesso? A ogni barra, l'indicatore riadatta una retta ai minimi quadrati alla finestra di osservazione e ne traccia il punto finale. Poiché l'adattamento reagisce alla pendenza del trend anziché restare indietro rispetto a una media, la linea gira più in fretta alle inversioni pur continuando a smussare il rumore da barra a barra.

[SCREENSHOT: Un grafico a candele con la linea Linear Regression tracciata sopra il prezzo, che segue da vicino un trend rialzista e si curva all'inversione | dc-it-linear-regression-01.png]

## Quando usarlo

- Per leggere la direzione del trend con meno ritardo rispetto a una media mobile di lunghezza comparabile.
- Per identificare zone dinamiche di supporto e resistenza mentre il prezzo oscilla intorno al suo fair value statistico.
- Per individuare l'eccessiva estensione: un prezzo molto sopra o sotto la linea di regressione tende a ritornarvi.
- Per costruire regole basate su incroci o pendenza dove la reattività conta più dello smussamento massimo.

## Avvio rapido

1. Apri un grafico — vedi [[first-chart]].
2. Fai clic sull'icona a istogramma nella riga di icone in alto a sinistra del grafico per aprire il pannello **Indicators**, poi fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca **Linear Regression** e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona dell'ingranaggio per aprirne le impostazioni.
5. Configurazione di partenza: lascia **Input Data** su Close e **Length** al valore predefinito 21. Aumenta la lunghezza per un adattamento più fluido e più lento; riducila per seguire gli swing brevi.

[SCREENSHOT: Finestra di dialogo delle impostazioni di Linear Regression con la sezione Parameters con Input Data impostato su Close e Length = 21, e la sezione di stile Subgraph sotto | dc-it-linear-regression-02.png]

## Come leggerlo

- **La pendenza** è il segnale principale: una linea inclinata verso l'alto significa che il trend best-fit della finestra è rialzista. Una pendenza che si appiattisce è spesso il primo indizio che un trend sta rallentando.
- **Prezzo vs linea**: chiusure costantemente da un lato della linea confermano il trend; il prezzo che la riattraversa di scatto segnala un possibile cambio di carattere.
- **La distanza dalla linea** misura lo stiramento. La linea di regressione è il centro statistico della finestra, quindi divari insolitamente ampi tra prezzo e linea spesso precedono un ritorno verso la media.
- **Rispetto a una media mobile**: a parità di lunghezza, la linea di regressione gira prima alle inversioni ma può eccedere in condizioni laterali agitate — scambia fluidità per reattività.

## Riferimento delle impostazioni

### Parametri

| Impostazione | Cosa fa |
|---|---|
| **Input Data** | La fonte di prezzo per la regressione: Close, Open, High, Low o Volume. Close è lo standard. |
| **Length** | Numero di periodi nella finestra di regressione. Predefinito: 21. Finestre più brevi seguono da vicino gli swing recenti; finestre più lunghe descrivono il trend più ampio. |

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| **Regression Line Color** | Colore della linea tracciata. |
| **Secondary Color** | Assegnazione opzionale di un colore secondario. |
| **Subgraph Style** | Stile di visualizzazione della serie. |
| **Line Style** | Definizione dell'aspetto della linea. |
| **Line Width** | Spessore della linea. |
| **Use Secondary Axis** | Visualizza l'indicatore su un asse alternativo. |

## Suggerimenti ed errori comuni

- **Non confonderlo con una trendline di regressione disegnata.** Questo indicatore riadatta la retta e ne traccia il punto finale scorrevole a ogni barra; se vuoi un canale completo con bande di deviazione su un intervallo fisso, usa invece [[regression-channel]].
- **Le lunghezze brevi oscillano nelle fasi laterali.** Un adattamento stretto al rumore laterale fa invertire la pendenza in continuazione; allunga la finestra oppure richiedi conferme aggiuntive prima di agire sui cambi di pendenza.
- **Estrapola con cautela.** La linea riassume la finestra passata — proiettarne la pendenza in avanti presuppone che il trend prosegua, il che è un'ipotesi, non una previsione.
- Volume come **Input Data** produce una regressione del volume, non del prezzo — utile come studio del trend del volume in un pannello separato, non come overlay del prezzo.

## Articoli correlati

- [[regression-channel]]
- [[moving-average]]
- [[tillson-t3]]
- [[standard-deviation]]
- [[different-types-of-input]]
- [[indicator-layout]]