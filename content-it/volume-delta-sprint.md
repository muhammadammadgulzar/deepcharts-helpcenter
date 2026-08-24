---
title: "Volume/Delta Sprint"
slug: "volume-delta-sprint"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Traccia volume e delta cumulativi su periodi temporali mobili come pannello a istogramma, così puoi vedere le esplosioni di attività e quale lato le sta guidando."
keywords: ["volume delta sprint", "indicatore sprint", "istogramma delta cumulativo", "esplosione di volume", "delta sprint", "delta mobile", "istogramma di attività"]
source_hash: "1c65ecc28b1a5b94"
ai_translated: true
source_hash: "1c65ecc28b1a5b94"
---
Volume/Delta Sprint visualizza i valori cumulativi di volume e delta su periodi temporali specificati come un istogramma in un pannello separato sotto il grafico. Dove un semplice istogramma dei volumi ti dice quanto è stato scambiato per barra, Sprint accumula l'attività lungo una finestra mobile, facendo risaltare le esplosioni sostenute di partecipazione — e il lato che le guida — rispetto al normale rumore barra per barra.

È uno strumento avanzato: premia i trader che già leggono delta e volume singolarmente e vogliono un unico pannello che mostri come la pressione si costruisce e si dissolve su un lookback scelto.

## Cos'è

L'indicatore somma volume o delta su una finestra di lookback configurabile (**Length**, di default **10** barre) e traccia il risultato come barre di istogramma. Letture positive mostrano che la finestra è stata dominata dalla pressione in acquisto, letture negative dalla pressione in vendita. Il **Delta Color Mode** può colorare ogni barra in base all'intensità di quella pressione, così un gradiente che sfuma ti dice a colpo d'occhio se l'aggressione si sta intensificando o prosciugando.

[SCREENSHOT: Finestra del grafico con l'indicatore Volume/Delta Sprint in un pannello separato in basso — candele di prezzo sopra, istogramma Sprint sotto che mostra un cluster di barre positive alte (colorate lato acquisto) durante un rally seguite da barre che si riducono mentre il movimento si blocca | dc-it-volume-delta-sprint-01.png]

## Quando usarlo

- Vuoi vedere se un breakout è sostenuto da uno sprint prolungato di volume e delta positivo, non da un picco su una singola barra.
- Tieni traccia del decadimento del momentum: barre dell'istogramma che si riducono mentre il prezzo continua a salire lentamente avvertono che il lato aggressivo si sta ritirando.
- Confronti regimi di attività attraverso una sessione — finestre di accumulazione tranquilla contro finestre di impulso ad alta partecipazione.
- Vuoi una vista del delta smussata e filtrabile invece dei valori grezzi barra per barra di [[delta-bar]].

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico e aggiungi **Volume/Delta Sprint**.
2. Apri le **Settings** (impostazioni) dell'indicatore.
3. Mantieni **Input Data** su **Volume** per iniziare — passa a **Order** o **Trade** solo quando hai un motivo specifico (vedi [[different-types-of-input]]).
4. Lascia **Length** al suo default di **10** barre; accorcialo più avanti se fai trading su movimenti intraday veloci.
5. Imposta **Delta Color Mode** su **Fading** così l'intensità del colore delle barre riflette l'intensità del delta.
6. Lascia **Filter Min** e **Filter Max** intatti all'inizio — aggiungi i filtri quando conosci le dimensioni tipiche degli scambi sul tuo simbolo.

[SCREENSHOT: Finestra delle impostazioni di Volume/Delta Sprint aperta sulla sezione General, che mostra Input Data, Filter Min, Filter Max, Length = 10 e Delta Color Mode visibili | dc-it-volume-delta-sprint-02.png]

## Come leggerlo

- **Barre alte in un solo colore** — uno sprint: un lato sta impegnando dimensione lungo l'intera finestra. Sprint sostenuti nella direzione di un breakout confermano la partecipazione.
- **Barre che si riducono mentre il prezzo si estende** — lo sforzo sta svanendo; il movimento gira su meno ordini aggressivi e diventa vulnerabile a un pullback.
- **Cambio di colore dopo uno sprint** — il lato dominante è cambiato dentro la finestra di lookback; osserva se il prezzo lo segue.
- **Gradiente che sfuma (modalità Fading)** — un colore più intenso significa maggiore intensità del delta, quindi la tonalità stessa gradua la convinzione; la modalità **Fixed** riduce tutto a una lettura binaria positivo/negativo.

Poiché i valori sono cumulativi sulla finestra, una singola grande stampa continua a influenzare l'istogramma per **Length** barre — aspettati letture che decadono gradualmente invece di azzerarsi a ogni barra.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Input Data** | Sorgente del calcolo: **Volume** (attività totale scambiata), **Order** (dati di flusso ordini) o **Trade** (transazioni eseguite). Vedi [[different-types-of-input]]. |
| **Filter Min** | Soglia minima per filtrare i dati — esclude i valori bassi per ridurre il rumore. |
| **Filter Max** | Soglia massima per filtrare i dati — rimuove gli outlier che distorcono l'analisi. |
| **Length** | Periodo di lookback per la finestra cumulativa. Default **10** barre. Lunghezze più brevi sono più reattive; lunghezze maggiori mostrano pattern più ampi. |
| **Delta Color Mode** | **Fading** applica una colorazione a gradiente basata sull'intensità del delta; **Fixed** usa colori binari per valori positivi e negativi. |

### Smoothing

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Attiva lo smussamento per ridurre il rumore e chiarire i trend del volume. |
| **Average Type** | Metodo di media mobile: **Simple**, **Exponential**, **Triangular** o **Weighted**. |
| **Length** | Periodo per il calcolo della media mobile; valori più alti creano linee più smussate. |

### Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Color** | Colore primario delle barre, usato per delta positivo / pressione in acquisto. |
| **2° Color** | Colore secondario, usato per delta negativo / pressione in vendita. |
| **Subgraph Style** | Stile di disegno. Default **Bars** (istogramma). |
| **Auto Color** | Imposta su **+/-** per la colorazione automatica positivo/negativo. |
| **Line Style** | Default **Solid** per barre piene. |
| **Line Width** | Spessore di barre/linee. Default **3** pixel. |
| **Short Name** | Etichetta personalizzata mostrata nella legenda del pannello. |

## Suggerimenti ed errori comuni

- **Adatta Length al tuo timeframe.** Una finestra di 10 barre su un grafico a 1 minuto copre 10 minuti di flusso; la stessa impostazione su un grafico a 15 minuti copre mezza sessione. Ritara quando cambi timeframe.
- **Non impilare i filtri alla cieca.** Un **Filter Min** aggressivo più un **Length** corto possono lasciare l'istogramma quasi vuoto su simboli tranquilli. Aggiungi un vincolo alla volta.
- **La modalità Fading ha bisogno di contrasto.** Scegli colori primario e secondario che restino distinguibili a bassa opacità, o la graduazione per intensità diventa illeggibile.
- **Lo smussamento scambia velocità per chiarezza.** Abilitare una media di smussamento lunga rende le svolte più facili da vedere ma le ritarda — i trader di momentum dovrebbero tenere lo smussamento corto o disattivato.

## Articoli correlati

- [[orderflow-101]]
- [[delta-bar]]
- [[speed-of-tape]]
- [[deep-delta]]
- [[different-types-of-input]]
- [[indicator-layout]]