---
title: "Deep Stats"
slug: "deep-stats"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Tabella di statistiche orderflow per barra che mostra volumi, delta, valori COT, ratio e metriche di sforzo sotto il tuo grafico."
keywords: ["deep stats", "deepstats", "statistiche orderflow", "COT H", "COT L", "delta cumulativo", "delta percentuale", "tabella statistiche barre", "tabella statistiche sotto il grafico"]
source_hash: "2aa5068d0ff48d0b"
ai_translated: true
source_hash: "2aa5068d0ff48d0b"
---
Deep Stats mostra sotto il tuo grafico una tabella di testo multilivello con una colonna per ogni barra. Ogni riga è una metrica orderflow — volume totale, delta, numero di trade, valori COT, ratio, sforzo — così puoi leggere i numeri dietro ogni candela invece di indovinarli dalla sua forma.

Mentre gli strumenti footprint ti mostrano dove il volume è stato scambiato all'interno della barra, Deep Stats condensa ogni barra in un insieme di numeri confrontabili. È la radiografia numerica della candela.

## Che cos'è

Deep Stats è un indicatore di statistiche orderflow che disegna una griglia di testo sotto il grafico dei prezzi. Ogni barra completata riceve una colonna di valori, e i colori delle celle si scalano con l'intensità statistica, così i valori anomali risaltano a colpo d'occhio. Risponde a domande come "quanto delta ha avuto davvero questa barra?", "quella spinta è stata assorbita?" e "il volume si sta esaurendo su questi massimi?"

[SCREENSHOT: Finestra del grafico con Deep Stats applicato — candele di prezzo in alto e la tabella di testo multilivello di Deep Stats in un pannello sottostante, con diverse righe di metriche (Tot Vol, Delta Vol, Delta %, COT Bar) visibili e una cella anomala fortemente colorata | dc-it-deep-stats-01.png]

## Quando usarlo

- Vuoi una conferma per barra di ciò che la forma della candela suggerisce (delta reale, numero di trade, intensità) prima di agire.
- Stai cercando assorbimento: sforzo elevato o letture COT contrarie mentre il prezzo si muove appena.
- Vuoi indizi di esaurimento sui massimi o sui minimi tramite le colonne High Ratio e Low Ratio.
- Segui il delta cumulativo (CVD) numericamente accanto al prezzo, invece che come grafico separato.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Deep Stats** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** (impostazioni) accanto a Deep Stats.
4. In **Data Settings**, scegli l'**Input Data** (**Volume**, **Order** o **Aggregate Trades** — vedi [[different-types-of-input]] per il significato di ciascuno). **Volume** è il punto di partenza naturale.
5. Nella sezione **Subgraphs**, imposta su **Ignore** lo **Series style** di ogni metrica che non ti serve. Un set iniziale compatto: **Tot Vol**, **Delta Vol**, **Delta %**, **Delta Dly**, **COT Bar**.
6. Fai clic su applica/salva e verifica che la tabella venga visualizzata sotto il grafico.

[SCREENSHOT: Finestra delle impostazioni di Deep Stats aperta sulla sezione Data Settings, con il menu a discesa Input Data espanso con le opzioni Volume, Order e Aggregate Trades, più i campi Min Filter e Max Filter | dc-it-deep-stats-02.png]

## Come leggerlo

Ogni colonna è una barra; ogni riga è una metrica. L'intensità del colore delle celle si basa sulle deviazioni standard, quindi una cella fortemente colorata significa "statisticamente insolito per questo strumento in questo momento".

| Metrica | Cosa ti dice |
|---|---|
| **Tot Vol / Bid Vol / Ask Vol / Delta Vol** | Le basi del volume: totale scambiato, venduto sul bid, comprato sull'ask e la differenza netta. |
| **Max Delta Vol / Min Delta Vol** | Gli estremi di delta raggiunti all'interno della barra — una barra può chiudere con delta piatto dopo una violenta oscillazione interna. |
| **Tot NT / Delta NT** | Numero di trade e differenziale del numero di trade ask contro bid. |
| **Delta HL** | Tick tra il massimo e il minimo della barra. |
| **Delta %** | Delta Vol come percentuale del Tot Vol: (Delta Vol / Tot Vol) × 100. |
| **Delta Dly** | Delta cumulativo del volume (CVD) progressivo. |
| **Vol(s)** | Volume al secondo — intensità del trading. |
| **COT H** | Delta cumulativo dall'ultimo minimo alla chiusura. Un COT H negativo su una barra ribassista è un segnale rialzista di assorbimento. |
| **COT L** | Delta cumulativo dall'ultimo massimo alla chiusura. Un COT L positivo su una barra rialzista è un segnale ribassista di assorbimento. |
| **COT Bar** | Mostra automaticamente COT H sulle barre rialziste e COT L su quelle ribassiste. |
| **Time(s)** | Durata della barra in secondi — contestualizza i valori di volume. |
| **Bar Ratio / High Ratio / Low Ratio** | Rapporti tra il volume del penultimo e dell'ultimo tick. Un High Ratio basso segnala esaurimento dei compratori sui massimi; un Low Ratio basso segnala esaurimento dei venditori sui minimi. |
| **Total Effort / Delta Effort** | Volume (o delta) in rapporto all'ampiezza della barra. Sforzo elevato con poco movimento di prezzo indica assorbimento. |

Letture pratiche:

- **Assorbimento**: COT H negativo su barre ribassiste (i compratori assorbono le vendite), COT L positivo su barre rialziste (i venditori assorbono gli acquisti), oppure Effort elevato mentre il prezzo avanza appena.
- **Esaurimento**: un High Ratio basso su una resistenza o un Low Ratio basso su un supporto suggerisce che l'aggressore sta finendo gli ordini.
- **Variazioni di intensità**: Vol(s) che sale mentre Time(s) si riduce significa che la partecipazione sta accelerando.

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### Data Settings

| Impostazione | Cosa fa |
|---|---|
| **Input Data** | Fonte dei dati per i calcoli: **Volume**, **Order** o **Aggregate Trades**. Vedi [[different-types-of-input]]. |
| **Min Filter** | Soglia minima di dimensione dei trade; i trade più piccoli sono esclusi dalle statistiche. |
| **Max Filter** | Soglia massima di dimensione dei trade; **0** significa nessun filtro massimo. |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Dev. std. for Coloring** | Controlla quanto aggressivamente i colori delle celle si scalano con la deviazione standard, oltre a dimensione/colore del testo, formattazione dei numeri (**Auto Text Format** compatta i numeri lunghi) e ordine delle celle. |
| **Settings-Header** | Visibilità, colori e dimensione della riga di intestazione. |
| **Threshold** | Evidenzia le celle quando le metriche scelte superano soglie definite da te. |

### Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Series style** (per metrica) | **Text** mostra la riga della metrica; **Ignore** la nasconde. |
| **Colors** (per metrica) | Colore della cella usato per la riga di quella metrica. |

## Suggerimenti ed errori comuni

- **Parti dal minimo.** Attivare tutte le metriche seppellisce quelle utili. Imposta su **Ignore** tutto ciò che non leggi attivamente, poi aggiungi le righe man mano che ti servono.
- **Usa Auto Text Format** se i numeri lunghi vengono tagliati — compatta i valori così le colonne restano leggibili.
- **Non leggere COT H/COT L in isolamento.** Sono indizi di assorbimento, non segnali di ingresso — confermali con la struttura e con il tape (vedi [[adv-time-and-sales]]).
- **Adatta il Min Filter allo strumento.** Un filtro che isola le dimensioni istituzionali su un contratto elimina quasi tutto su uno più sottile.
- **L'evidenziazione con Threshold batte lo sguardo fisso.** Se ti interessa solo, per esempio, un Delta % fuori misura, imposta un Threshold così è la tabella a segnalartelo.

## Articoli correlati

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[deep-print]]
- [[deep-trades]]
- [[on-candle-stats]]