---
title: "Aroon Oscillator"
slug: "aroon-oscillator"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Comprimi Aroon Up e Aroon Down in un'unica linea attorno allo zero con l'Aroon Oscillator per leggere forza, direzione ed esaurimento del trend."
keywords: ["aroon oscillator", "aroon osc", "differenza aroon", "oscillatore di trend", "oscillatore linea zero", "oscillatore arun"]
source_hash: "7531c3789c0e813a"
ai_translated: true
source_hash: "7531c3789c0e813a"
---
L'Aroon Oscillator misura la forza e la direzione del trend calcolando la differenza tra Aroon Up e Aroon Down. Dove [[aroon-up-down|Aroon Up/Down]] mostra due linee, l'oscillatore comprime la stessa informazione in un'unica linea che fluttua attorno a una linea zero: positiva quando sono i tori a segnare i nuovi estremi, negativa quando sono gli orsi.

Se trovi i crossover a due linee visivamente rumorosi, questo è il modo più pulito di leggere Aroon.

## Che cos'è

L'oscillatore risponde alla domanda "quale lato sta vincendo, e di quanto?" con un unico valore. Poiché Aroon Up e Aroon Down variano ciascuno da 0 a 100, la loro differenza oscilla tra gli estremi ai due lati dello zero: letture fortemente positive indicano che dominano i nuovi massimi recenti, letture fortemente negative indicano che dominano i nuovi minimi recenti, e letture vicine allo zero indicano che nessun lato ha il sopravvento.

L'indicatore aiuta i trader a identificare trend emergenti, forza del trend, potenziali inversioni e zone di esaurimento in stile ipercomprato/ipervenduto.

## Quando usarlo

- Per leggere direzione e forza del trend da un'unica linea invece di seguirne due.
- Per cogliere le transizioni di trend: l'attraversamento della linea zero è la versione dell'oscillatore del crossover di Aroon Up/Down.
- Per individuare l'esaurimento: letture estreme che si arrestano e tornano verso lo zero avvertono che il lato dominante sta perdendo la presa.
- Per confermare i segnali di strumenti basati sul prezzo come il [[donchian-channel|Donchian Channel]] — un breakout sostenuto da un oscillatore fortemente positivo ha alle spalle il momentum degli estremi freschi.

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire la lista completa **Indicator List**.
3. Cerca "Aroon Oscillator" e fai clic su **+** per aggiungerlo — viene tracciato in un pannello dedicato sotto il grafico dei prezzi.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprirne le impostazioni.

Il valore predefinito di **Length** pari a 14 corrisponde alla configurazione Aroon standard. Lo stile predefinito **Subgraph Style** è **Bars** con **Auto Color (+/-)**, quindi le letture positive e negative sono colorate in modo diverso fin da subito — un modo semplice per leggere il regime a colpo d'occhio.

[SCREENSHOT: Un grafico dei prezzi con l'Aroon Oscillator in un pannello inferiore reso come barre, barre positive di un colore durante il trend rialzista e barre negative di un altro colore dopo l'inversione, con la linea zero visibile al centro | dc-it-aroon-oscillator-01.png]

## Come leggerlo

- **Sopra lo zero**: Aroon Up supera Aroon Down — gli estremi più recenti sono massimi; regime rialzista. **Sotto lo zero** è lo specchio ribassista.
- **Distanza dallo zero = convinzione.** Letture spinte verso gli estremi significano che un lato ha segnato estremi di recente mentre l'ultimo estremo dell'altro lato è datato — un trend forte.
- **Gli attraversamenti della linea zero** segnalano potenziali cambi di trend. Come per ogni oscillatore, gli attraversamenti durante fasi laterali tranquille generano falsi segnali; quelli accompagnati da un movimento deciso del prezzo sono più affidabili.
- **Estremi che sfumano**: quando l'oscillatore raggiunge una zona estrema e poi si contrae verso lo zero mentre il prezzo rallenta, il trend sta invecchiando — stringi il rischio o cerca una struttura di inversione.

## Riferimento delle impostazioni

### Parametri

| Impostazione | Che cosa fa |
|---|---|
| **Length** | Numero di barre usate nel calcolo di Aroon. Predefinito: 14. Valori più bassi producono segnali più reattivi; valori più alti generano risultati più fluidi. |

### Impostazioni dei livelli

| Impostazione | Che cosa fa |
|---|---|
| **Middle Level** | La linea di riferimento del trend neutro. Predefinito: 0. |
| **Lower Level** | Linea di livello che segna una zona estrema. Predefinito: 80. |
| **High Level** | Linea di livello che segna la zona estrema opposta. Predefinito: -80. |
| **Middle/Lower/Higher Level Color** | Colore di ciascuna linea di livello. |
| **Level Width** | Spessore delle linee di livello. |

Questi livelli aiutano a identificare condizioni di trend forte e potenziali zone di esaurimento.

[CONFIRM: the source article lists Lower Level default as 80 and High Level default as -80 — verify in the app whether these two defaults are intentionally assigned this way or swapped.]

### Subgraphs

| Impostazione | Che cosa fa |
|---|---|
| **Color** / **2° Color** | Colori primario e secondario delle barre dell'oscillatore. |
| **Subgraph Style** | Formato di visualizzazione. Predefinito: **Bars**. |
| **Auto Color (+/-)** | Cambia automaticamente il colore in base ai valori positivi o negativi. |
| **Line Style** | Pattern visivo quando disegnato come linea (Solid e altri stili). |
| **Line Width** | Spessore della linea/barra. |
| **Short Name** | Etichetta personalizzata mostrata nella legenda del grafico. |
| **Name Label** / **Value Label** | Etichette opzionali di nome e valore, con opzioni di colore **Name Background** e **Value Background**. |
| **Chart color for marker** | Usa il colore del grafico per il marcatore del valore. |
| **Include on Auto Center** | Se la serie viene considerata quando il pannello si ridimensiona automaticamente. |

[SCREENSHOT: La finestra delle impostazioni dell'Aroon Oscillator che mostra Length 14, il gruppo delle impostazioni dei livelli con i campi Middle/Lower/High Level e il gruppo Subgraphs con Subgraph Style impostato su Bars e Auto Color (+/-) attivo | dc-it-aroon-oscillator-02.png]

## Suggerimenti ed errori comuni

- **Gli attraversamenti della linea zero ritardano leggermente rispetto alla vista a due linee** in condizioni instabili e si ripetono spesso nelle fasi laterali. Richiedi una conferma — una spinta verso una zona estrema — prima di trattare un attraversamento come un cambio di trend.
- **Una lettura estrema è forza, non un'inversione automatica.** A differenza di un vero oscillatore di ipercomprato/ipervenduto, un Aroon Oscillator incollato all'estremo spesso indica soltanto un trend sano che stampa estremo dopo estremo. Cerca la contrazione verso lo zero, non l'estremo in sé.
- **Mantieni Length coerente** con qualsiasi pannello [[aroon-up-down|Aroon Up/Down]] che usi in parallelo, altrimenti i due strumenti saranno in disaccordo e genereranno confusione anziché conferma.
- Lo stile **Bars** con **Auto Color (+/-)** è più facile da leggere a colpo d'occhio rispetto a una linea; mantienilo, a meno che tu non sovrapponga più serie nello stesso pannello (vedi [[indicator-layout]]).

## Articoli correlati

- [[aroon-up-down]]
- [[adx]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]