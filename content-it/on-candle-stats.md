---
title: "On Candle Stats"
slug: "on-candle-stats"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Stampa statistiche per candela — volume, delta, conteggio delle operazioni e altro — come caselle di testo direttamente sul grafico accanto a ogni barra."
keywords: ["on candle stats", "statistiche candela", "volume sulla candela", "delta sulla candela", "statistiche per candela", "testo statistiche candela", "statistiche barra sul grafico"]
source_hash: "27b10b276355701b"
ai_translated: true
source_hash: "27b10b276355701b"
---
On Candle Stats stampa statistiche dettagliate direttamente sulle tue candele come caselle di testo: volume totale, delta, conteggio delle operazioni e altri dati di microstruttura del mercato, barra per barra. Invece di alternare lo sguardo tra il grafico e un pannello separato, i numeri stanno proprio accanto all'azione di prezzo che descrivono.

È uno dei preferiti dei trader orderflow che vogliono informazioni di livello footprint a colpo d'occhio, senza aprire un grafico footprint completo per ogni strumento.

## Che cos'è

Per ogni candela, l'indicatore calcola un insieme di serie di dati — ne sono disponibili undici, tra cui Max/Min Delta, volume totale, volume delta, operazioni totali, delta delle operazioni, extension, COT High, COT Low, COT Bar, Bid-Ask/Vol e Ratio — e disegna i valori scelti come una casella di testo compatta posizionata sopra, sotto o sulla candela. Le opzioni di colorazione e opacità legano l'aspetto del testo al segno e all'intensità del delta, così l'annotazione stessa porta una lettura direzionale.

[SCREENSHOT: Grafico con On Candle Stats attivo — piccole caselle di testo sopra ogni candela con i valori di volume e delta, le candele a delta positivo etichettate in testo verde e quelle negative in rosso | dc-it-on-candle-stats-01.png]

## Quando usarlo

- Vuoi numeri esatti per barra (volume, delta, operazioni) visibili sul grafico mentre fai trading.
- Rivedi le sessioni barra per barra e ti serve il dettaglio di microstruttura senza passare a [[deep-print]].
- Confronti l'aggressività tra candele consecutive ai livelli chiave — ad esempio un delta che si riduce mentre il prezzo preme contro una resistenza.
- Annoti i grafici per il journaling o la didattica, dove i valori devono essere leggibili in uno screenshot.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico e aggiungi **On Candle Stats**.
2. Apri le **Settings** (impostazioni) dell'indicatore.
3. Per iniziare mantieni **Input Data** su **Volume**; passa ad **Aggregate Volume** quando vuoi che gli ordini allo stesso prezzo vengano combinati per una vista dell'attività più accurata (vedi [[different-types-of-input]]).
4. Abilita le serie del subgraph di cui hai davvero bisogno — **Tot. Vol** e **Delta Vol** sono una buona coppia minima — e lascia le altre disattivate per mantenere il grafico leggibile.
5. Attiva **Color Text Based on Delta**, così le letture positive vengono stampate in un colore (di solito verde) e quelle negative in un altro (di solito rosso).
6. Imposta **Price Plot** su **High** e aggiungi un piccolo **Tick Offset** così le caselle di testo restano libere dalle ombre delle candele.

[SCREENSHOT: Finestra delle impostazioni di On Candle Stats — Data Settings in alto (Input Data, Filter Min, Filter Max), con le sezioni Text, Coloring e Price sotto, Color Text Based on Delta abilitato | dc-it-on-candle-stats-02.png]

## Come leggerlo

- **Volume con contesto di delta** — una candela ad alto volume con delta piccolo significa una battaglia a due lati; alto volume con delta fortemente sbilanciato significa convinzione.
- **Delta contro la direzione della candela** — una candela verde che stampa delta negativo (o viceversa) suggerisce assorbimento o forza passiva; merita uno sguardo più attento su un footprint.
- **Conteggio delle operazioni vs. volume** — molte operazioni con volume modesto suggeriscono partecipanti piccoli; poche operazioni che portano grande volume suggeriscono che la size è attiva.
- **Gradazione dell'opacità** — con **Opacity Based on Ratio** abilitato, le caselle più sbiadite contrassegnano le barre statisticamente ordinarie e quelle più marcate le barre che deviano, permettendoti di scorrere rapidamente una sessione.

## Riferimento delle impostazioni

### Data Settings

| Impostazione | Cosa fa |
|---|---|
| **Input Data** | Database usato per le statistiche: **Volume** (volume totale a ciascun livello di prezzo — intensità di trading), **Order** (conteggio delle transazioni a ciascun livello di prezzo — frequenza degli ordini), oppure **Aggregate Volume** (combina gli ordini allo stesso livello di prezzo per una vista dell'attività più accurata). |
| **Filter Min** | Soglia minima — vengono mostrati solo i dati sopra questo valore. |
| **Filter Max** | Soglia massima — imposta **0** per non applicare alcun filtro massimo. |

### Text Settings

| Impostazione | Cosa fa |
|---|---|
| **Font Size** | Dimensione del testo sulle candele. |
| **Smaller Font Size** | Dimensione minima del testo mantenuta per la leggibilità a scale del grafico ridotte. |
| **Auto Text Format** | Quando abilitato, i numeri sopra il migliaio vengono mostrati raggruppati (ad es. "1,234"). |
| **Absolute Sign** | Quando abilitato, i valori vengono mostrati senza segni +/-. |

### Coloring Settings

| Impostazione | Cosa fa |
|---|---|
| **Opacity Based on Ratio** | Regola l'opacità della casella di testo in base al ratio della barra, attenuando le barre ordinarie. |
| **Max Ratio** | Controlla il rapporto massimo di opacità e la visibilità delle caselle di testo. |
| **Color Text Based on Delta** | Il delta positivo viene stampato in un colore (di solito verde), quello negativo in un altro (di solito rosso). |

### Price Settings

| Impostazione | Cosa fa |
|---|---|
| **Tick Offset** | Distanza in tick tra la casella di testo e la candela, per evitare sovrapposizioni con l'azione di prezzo. |
| **Price Plot** | Posizionamento del testo: **High**, **Low**, **Center**, **Price Slope** o **Delta Sign**. |

### Subgraphs

Sono disponibili undici serie di dati da visualizzare: **Max/Min Delta**, **Tot. Vol**, **Delta Vol**, **Tot. Trade**, **Delta Trade**, **Extension**, **COT High**, **COT Low**, **COT Bar**, **Bid-Ask/Vol** e **Ratio**. Abilita solo le serie che leggi davvero — ogni serie attiva aggiunge una riga di testo a ogni candela.

## Suggerimenti ed errori comuni

- **Meno è meglio.** Abilitare molte serie del subgraph trasforma ogni candela in un paragrafo. Due o tre valori ben scelti battono undici mai letti.
- **Attento al livello di zoom.** Il testo ha bisogno di spazio orizzontale; sui grafici molto ridotti abilita **Smaller Font Size**, altrimenti le caselle si scontreranno.
- **Il posizionamento Delta Sign è contestuale.** Impostare **Price Plot** su **Delta Sign** sposta il testo con la direzione del delta, il che rende la lettura a colpo d'occhio più veloce ma sposta la posizione delle caselle da barra a barra — sceglilo con consapevolezza.
- **Usa Absolute Sign per gli screenshot da journaling**, dove il colore porta già il segno e i +/- aggiungono solo confusione.

## Articoli correlati

- [[deep-print]]
- [[deep-stats]]
- [[delta-bar]]
- [[market-statistics]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]