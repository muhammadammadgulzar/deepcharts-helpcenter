---
title: "Aroon Up/Down"
slug: "aroon-up-down"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Leggi il momentum del trend con l'indicatore Aroon Up/Down: due linee da 0 a 100 che misurano quanto di recente il prezzo ha segnato un nuovo massimo o minimo."
keywords: ["aroon", "aroon up down", "indicatore aroon", "momentum del trend", "indicatore nuovi massimi nuovi minimi", "indicatore arun", "crossover aroon"]
source_hash: "0443703aa31cd60d"
ai_translated: true
source_hash: "0443703aa31cd60d"
---
L'indicatore Aroon Up/Down valuta il momentum del trend misurando quanto di recente il prezzo ha segnato un nuovo massimo o un nuovo minimo all'interno di un periodo selezionato. Invece di chiedersi "quanto si è mosso il prezzo?", Aroon chiede "quanto è fresco l'ultimo estremo?" — una lettura sottilmente diversa e spesso più tempestiva della salute del trend.

L'indicatore traccia due linee in un pannello dedicato, ciascuna con valori da 0 a 100, così vedi sempre il lato rialzista e quello ribassista del mercato misurati separatamente.

## Che cos'è

Aroon è composto da due componenti:

- **Aroon Up** — misura la forza del momentum rialzista: è alto quando un nuovo massimo di periodo è stato segnato di recente e decade man mano che quel massimo invecchia.
- **Aroon Down** — misura la forza del momentum ribassista allo stesso modo, in base al minimo di periodo più recente.

Una lettura vicina a 100 significa che l'estremo corrispondente è stato segnato molto di recente; una lettura vicina a 0 significa che è avvenuto molto tempo fa all'interno della finestra di osservazione. Poiché le due linee sono indipendenti, Aroon distingue il "trend rialzista forte" (Up alto, Down basso) dal "chop volatile" (entrambe elevate) in un modo che gli strumenti a linea singola non possono fare.

## Quando usarlo

- Per individuare presto i trend emergenti: una linea incollata vicino a 100 significa che il prezzo continua a stampare estremi freschi in quella direzione.
- Per cogliere i cambi di trend con i **crossover di Aroon Up/Aroon Down**.
- Per confermare il consolidamento: entrambe le linee che scivolano in basso significano che non si stanno formando nuovi massimi né minimi — una fase laterale.
- Come complemento all'[[adx|ADX]]: l'ADX misura la forza del trend senza direzione; Aroon mostra quale lato sta producendo gli estremi freschi.

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire la lista completa **Indicator List**.
3. Cerca "Aroon Up/Down" e fai clic su **+** per aggiungerlo — viene tracciato in un pannello dedicato sotto il grafico dei prezzi.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprirne le impostazioni.

Il valore predefinito di **Length** pari a 14 con i livelli standard (75 / 50 / 25) è un solido punto di partenza. Assegna ad Aroon Up e Aroon Down colori fortemente contrastanti — i crossover sono il segnale, quindi devono essere visibili a colpo d'occhio.

[SCREENSHOT: Un grafico dei prezzi con l'indicatore Aroon Up/Down in un pannello inferiore — Aroon Up che viaggia vicino a 100 durante un trend rialzista mentre Aroon Down resta vicino a 0, con le linee di livello 75/50/25 visibili | dc-it-aroon-up-down-01.png]

## Come leggerlo

- **Aroon Up vicino a 100, Aroon Down vicino a 0**: trend rialzista forte — nuovi massimi continuano ad arrivare mentre l'ultimo minimo invecchia. Inverti la lettura per un trend ribassista.
- **Crossover**: Aroon Up che incrocia sopra Aroon Down suggerisce che il momentum rialzista sta prendendo il controllo; l'incrocio opposto suggerisce controllo ribassista. Gli incroci che avvengono vicino al **Middle Level** (50) con entrambe le linee in movimento deciso sono più puliti degli incroci nella zona bassa.
- **Sopra l'High Level (75)**: forte momentum di trend su quel lato.
- **Sotto il Lower Level (25)**: momentum debole — quel lato del mercato non segna un estremo da molto tempo.
- **Entrambe le linee basse**: consolidamento. Nessun lato sta facendo progressi, quindi i segnali di trend sono inaffidabili finché una linea non rompe verso l'alto.

## Riferimento delle impostazioni

### Parametri

| Impostazione | Che cosa fa |
|---|---|
| **Length** | Numero di barre usate nel calcolo. Predefinito: 14. Valori più bassi producono segnali più reattivi; valori più alti offrono un'analisi del trend più fluida. |

### Impostazioni dei livelli

| Impostazione | Che cosa fa |
|---|---|
| **Middle Level** | La linea di equilibrio tra forze rialziste e ribassiste. Predefinito: 50. |
| **Lower Level** | La soglia che segnala un momentum di trend debole. Predefinito: 25. |
| **High Level** | La soglia che segnala un momentum di trend forte. Predefinito: 75. |
| Colori dei livelli / **Level Width** | Il colore di ciascuna linea di livello e lo spessore delle linee sono personalizzabili. |

### Subgraphs (Aroon Up e Aroon Down)

Entrambe le linee offrono la stessa configurazione:

| Impostazione | Che cosa fa |
|---|---|
| **Color** | Colore della linea del subgraph. |
| **Line Style** | Pattern visivo. Predefinito: **Solid**. |
| **Line Width** | Spessore della linea. |
| **Short Name** | Etichetta personalizzata mostrata nella legenda del grafico. |
| **Name Label** / **Value Label** | Etichette opzionali che mostrano il nome della linea e il valore attuale, con colori di sfondo configurabili. |
| **Include on Auto Center** | Se questa linea viene considerata quando il pannello si ridimensiona automaticamente. |

[SCREENSHOT: La finestra delle impostazioni di Aroon Up/Down che mostra Length 14, i campi Middle/Lower/High Level a 50/25/75 e le due sezioni subgraph per Aroon Up e Aroon Down | dc-it-aroon-up-down-02.png]

## Suggerimenti ed errori comuni

- **Non fare trading su ogni crossover.** In una fase laterale le linee si incrociano di continuo; richiedi che una linea spinga verso l'High Level dopo l'incrocio prima di trattarlo come segnale di trend.
- **Aroon misura la recenza, non l'ampiezza.** Un nuovo massimo di un solo tick riporta Aroon Up al vertice esattamente come farebbe un breakout importante. Verifica la struttura del prezzo o il volume prima di presumere forza.
- **Length definisce che cosa conta come "recente".** Un Aroon a 14 barre su un grafico a 5 minuti descrive all'incirca l'ultima ora di estremi; la stessa impostazione su un grafico giornaliero descrive tre settimane. Impostalo sull'orizzonte che tradi davvero.
- Se preferisci la stessa informazione compressa in un'unica linea attorno allo zero, usa invece l'[[aroon-oscillator|Aroon Oscillator]].

## Articoli correlati

- [[aroon-oscillator]]
- [[adx]]
- [[donchian-channel]]
- [[different-types-of-input]]
- [[indicator-layout]]