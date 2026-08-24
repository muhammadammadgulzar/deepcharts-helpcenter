---
title: "Average True Range (ATR)"
slug: "atr"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Riferimento per l'indicatore Average True Range (ATR) in DeepCharts: che cosa misura, le impostazioni Display Mode e Periods e come dimensionare gli stop con la volatilità."
keywords: ["ATR", "average true range", "true range", "indicatore di volatilità", "stop atr", "atr di wilder", "avarage true range", "indicatore atr"]
source_hash: "f76fd591fb4d7afe"
ai_translated: true
source_hash: "f76fd591fb4d7afe"
---
L'ATR (Average True Range) è un indicatore di analisi tecnica sviluppato da J. Welles Wilder negli anni '70 per misurare la volatilità di un asset. Mostra l'ampiezza della variazione di prezzo in un intervallo temporale specificato — in parole semplici, quanto si muove tipicamente lo strumento per barra.

L'ATR non dice nulla sulla direzione. Un ATR in salita significa barre più grandi (in entrambe le direzioni); un ATR in discesa significa che il mercato si sta calmando. Quel singolo numero è la spina dorsale del posizionamento degli stop e del dimensionamento delle posizioni consapevoli della volatilità.

## Che cos'è

L'ATR risponde alla domanda: quanto si muove davvero questo mercato in questo momento? Fa la media del "true range" di ogni barra — una misura di escursione che tiene conto anche dei gap tra le barre, non solo dell'escursione massimo-minimo della barra stessa — su un numero di periodi scelto, e traccia il risultato come linea in un pannello sotto il grafico dei prezzi.

[SCREENSHOT: Grafico dei prezzi con l'indicatore ATR in un pannello inferiore, linea ATR in forte salita durante un sell-off volatile e in lenta discesa durante un consolidamento tranquillo | dc-it-atr-01.png]

## Quando usarlo

- Dimensionare gli stop — collocare uno stop a un multiplo dell'ATR lo mantiene fuori dal normale rumore per la volatilità corrente.
- Dimensionare le posizioni — rischiare un importo fisso per unità di ATR normalizza il rischio tra mercati tranquilli e veloci.
- Consapevolezza del regime — un'occhiata all'ATR ti dice se il mercato di oggi giustifica i tuoi target abituali.
- Filtrare i segnali — molte strategie saltano gli ingressi quando l'ATR è insolitamente basso (nessuna continuazione) o insolitamente alto (rischio incontrollabile).

## Avvio rapido

1. Apri un grafico dei prezzi — vedi [[first-chart]].
2. Fai clic sul pulsante verde **Indicators** (o premi **Ctrl I**) per aprire l'**Indicator List**.
3. Cerca **Average True Range** e fai clic su **+** per aggiungerlo. Appare in un pannello dedicato sotto il prezzo.
4. Fai clic sull'icona a ingranaggio per aprirne le impostazioni.
5. Il classico periodo di osservazione di Wilder di 14 periodi è il punto di partenza convenzionale; accorcialo per una lettura più rapida delle condizioni correnti, allungalo per una base più fluida.

[SCREENSHOT: Finestra delle impostazioni dell'ATR aperta che mostra la selezione Display Mode (Tick o Periods), il campo dei periodi e le opzioni di stile Subgraph sotto | dc-it-atr-02.png]

## Come leggerlo

- **Livello assoluto.** L'ATR è espresso nelle unità di prezzo dello strumento stesso, quindi un ATR di 12 su uno strumento e di 0,5 su un altro non sono direttamente confrontabili — confronta ogni strumento con la propria storia.
- **ATR in salita** — barre in espansione, spesso in prossimità di notizie, breakout o momenti di panico. Sono appropriati stop più larghi e dimensioni più piccole.
- **ATR in discesa** — escursione in contrazione. Mercati più compressi spesso precedono le espansioni, ma un ATR basso di per sé non è un segnale direzionale.
- **Multipli di ATR come distanza.** "2 × ATR" è una distanza di stop comune e "1 × ATR" una comune unità di target intraday — il multiplo conta meno dell'essere coerenti nel suo utilizzo.

## Riferimento delle impostazioni

### Parametri

| Impostazione | Che cosa fa |
|---|---|
| **Display Mode** | Seleziona tra le opzioni di visualizzazione **Tick** e **Periods**. [CONFIRM: exact behavior of Tick vs Periods display mode] |
| Periods | Il numero di periodi usati nel calcolo dell'ATR. Meno periodi seguono da vicino la volatilità corrente; più periodi rendono la linea più fluida. |
| **Indicator Model** | Configurazione del modello per il calcolo dell'indicatore. [CONFIRM: available Indicator Model options and default] |

### Subgraphs

| Impostazione | Che cosa fa |
|---|---|
| Colore | Colore primario della linea dell'ATR. |
| Colore secondario | Applicazione opzionale di un colore secondario. |
| **Subgraph Style** | Stile di visualizzazione della serie. [CONFIRM: exact Subgraph Style option names in the dialog] |
| **Line Style** | Resa della linea — Solid, Dashed, Dotted e variazioni simili. |
| **Line Width** | Spessore della linea dell'indicatore. |

## Suggerimenti ed errori comuni

- **Non leggere mai l'ATR come direzione.** L'ATR sale sia nei crolli sia nei rally; misura solo l'ampiezza del movimento.
- **Ricalibra gli stop quando l'ATR cambia.** Una distanza di stop scelta in un regime tranquillo diventa un'esca per il rumore dopo che la volatilità è raddoppiata — ricavala di nuovo dall'ATR corrente, non dalla memoria.
- **Non confrontare l'ATR grezzo tra strumenti diversi.** Normalizza (per esempio, ATR come percentuale del prezzo) prima di confrontare la volatilità tra mercati.
- **L'ATR alimenta altri strumenti.** Le bande del [[keltner-channel]] e il [[super-trend]] si basano entrambi direttamente sull'ATR — capire prima l'ATR rende quegli indicatori molto più facili da regolare.

## Articoli correlati

- [[keltner-channel]]
- [[bollinger-bands]]
- [[standard-deviation]]
- [[super-trend]]
- [[different-types-of-input]]
- [[indicator-layout]]