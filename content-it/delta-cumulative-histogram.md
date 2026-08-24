---
title: "Delta Cumulative Histogram"
slug: "delta-cumulative-histogram"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Mostra il delta cumulativo come barre o come linea alla base del grafico — un totale progressivo compatto dell'aggressione in acquisto contro quella in vendita."
keywords: ["delta cumulative histogram", "istogramma delta cumulativo", "istogramma CVD", "linea delta cumulativo", "barre delta cumulative", "cumulative volume delta"]
source_hash: "c8216c9948966d33"
ai_translated: true
source_hash: "c8216c9948966d33"
---
Delta Cumulative Histogram mostra la somma cumulativa del delta di ogni candela — la differenza tra acquisti a mercato aggressivi e vendite a mercato — come barre o come linea posizionate alla base del grafico. Risponde di continuo a una sola domanda: quale lato è stato più aggressivo finora, e quel vantaggio sta crescendo o si sta riducendo?

È il fratello compatto di [[delta-cumulative-candlestick]]: lo stesso totale progressivo, reso come semplice istogramma o linea invece che come candlestick complete.

## Che cos'è

Il delta di ogni barra viene aggiunto a un totale progressivo. Un delta cumulativo positivo (disegnato in verde) significa che l'aggressione dei compratori è in vantaggio; un delta cumulativo negativo (disegnato in rosso) significa che comanda l'aggressione dei venditori. Poiché vive in un pannello sottile alla base del grafico, funziona bene come compagno sempre attivo di qualsiasi layout, senza occupare lo spazio di un pannello CVD a candlestick completo.

Provalo qui sotto — passa il mouse lungo l'istogramma per seguire come il delta di ogni barra alimenta il totale progressivo, e cerca il momento in cui il totale si appiattisce mentre il prezzo continua a spingere.

[WIDGET: delta-lab]

## Quando usarlo

- Vuoi una lettura persistente e a basso ingombro dell'aggressione netta sotto ogni grafico.
- Confermi i trend: delta cumulativo in salita insieme al prezzo in salita mostra compratori aggressivi che guidano il movimento.
- Individui le divergenze: il prezzo fa un nuovo estremo, l'istogramma non lo segue.
- Confronti le sessioni: con il reset di sessione attivo, ogni giornata parte da zero e l'istogramma diventa un tabellone intraday.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Delta Cumulative Histogram** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto all'indicatore.
4. Imposta **Input Data** su **Volumes** così il delta viene calcolato dalla quantità di contratti o azioni scambiati (vedi [[different-types-of-input]]).
5. Attiva **Restore at Start Session** così il totale si azzera all'inizio di ogni sessione invece di accumulare indefinitamente.
6. In **Subgraphs**, scegli **Bars** o **Line**, imposta i colori e applica.

[SCREENSHOT: Finestra delle impostazioni di Delta Cumulative Histogram che mostra le opzioni di Input Data (Volumes, Trades), i campi Filter Min e Filter Max, l'interruttore Restore at Start Session e le opzioni di stile dei Subgraphs Bars / Line | dc-it-delta-cumulative-histogram-01.png]

## Come leggerlo

- **Istogramma verde (positivo):** l'aggressione cumulativa dei compratori guida il periodo. **Rosso (negativo):** comandano i venditori.
- **La pendenza prima del segno.** Un istogramma positivo ma che si appiattisce significa che il vantaggio dei compratori ha smesso di crescere — il momentum dell'aggressione sta svanendo anche se il totale è ancora verde.
- **La divergenza con il prezzo** è il segnale classico: il prezzo che macina nuovi massimi mentre l'istogramma resta piatto significa che il movimento non è guidato da nuovi acquisti aggressivi. Trattalo come un avvertimento per stringere il rischio, non come un fade automatico.
- **L'input Volumes contro Trades cambia la storia.** I trade mostrano quanto spesso lo strumento viene scambiato, i volumi mostrano quanto. Più trade senza più volume indica molti ordini piccoli; più volume senza più trade indica meno partecipanti che eseguono ordini grandi. Leggerli l'uno contro l'altro rivela chi è attivo — la folla o la dimensione.

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### Parametri

| Impostazione | Cosa fa |
|---|---|
| **Input Data** | Base dati per il calcolo del delta: **Volumes** (quantità di contratti o azioni scambiati) o **Trades** (numero di trade eseguiti, indipendentemente dalla dimensione). Vedi [[different-types-of-input]]. |
| **Filter Min** | Soglia minima — i valori al di sotto vengono ignorati. |
| **Filter Max** | Soglia massima. Impostala a **0** per disabilitare questo filtro. |
| **Restore at Start Session** | Quando è attivo, l'indicatore si azzera all'inizio di ogni sessione di trading invece di accumulare indefinitamente. |

### Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Style** | Resa come **Bars** o **Line**. |
| **Line Style** | **Solid** o **Hatch**. |
| **Line Width** | Spessore del tracciato. |
| **Colors** | Colori del tracciato — verde per il delta cumulativo positivo (aggressione dei compratori), rosso per quello negativo (aggressione dei venditori). |
| **Show Name / Value** | Attiva/disattiva la visualizzazione del nome dell'indicatore e del suo valore corrente. |
| **Custom Name** | Rinomina l'etichetta dell'indicatore sul grafico. |

## Suggerimenti ed errori comuni

- **Scegli una convenzione di reset e mantienila.** Un istogramma che accumula e uno che si azzera a ogni sessione, allo stesso valore, significano cose completamente diverse.
- **Il numero assoluto dipende da feed e filtri.** Confronta la forma e la pendenza dell'istogramma con il prezzo, non il suo valore grezzo con altre piattaforme o con i grafici di altri trader.
- **I filtri cambiano il significato di "delta".** Con un **Filter Min** alto stai tracciando il delta cumulativo dei grandi trade — potente, ma documentalo prima di confrontarlo con un grafico senza filtri.
- **Usa la variante a candlestick quando ti serve il dettaglio intra-barra.** L'istogramma mostra solo i totali di chiusura per barra; [[delta-cumulative-candlestick]] mostra il percorso che il delta ha compiuto all'interno di ogni barra.

## Articoli correlati

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-cumulative-candlestick]]
- [[delta-bar]]
- [[volume]]