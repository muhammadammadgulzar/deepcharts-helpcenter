---
title: "Tillson T3"
slug: "tillson-t3"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Configura e interpreta il Tillson T3, una media mobile smussata avanzata che riduce il ritardo rispetto alle medie mobili tradizionali."
keywords: ["tillson t3", "media mobile t3", "indicatore t3", "media mobile smussata", "volume factor", "tilson t3", "media mobile a basso ritardo"]
source_hash: "713ba26b5585da81"
ai_translated: true
source_hash: "713ba26b5585da81"
---
Il Tillson T3 è un indicatore di smussamento avanzato sviluppato da Tim Tillson. Si comporta come una media mobile ma applica più livelli di smussamento, il che gli conferisce una linea nettamente più fluida con meno ritardo rispetto a una media mobile semplice o esponenziale della stessa lunghezza.

Se usi già una [[moving-average|Media mobile]] standard e la trovi troppo nervosa o troppo lenta, il T3 è il passo successivo naturale: filtra il rumore senza restare altrettanto indietro rispetto al prezzo.

## Che cos'è

Il T3 risponde alla domanda "in che direzione sta andando davvero il prezzo una volta eliminato il rumore?" Traccia una singola linea smussata sul grafico dei prezzi. Per come è costruita, la linea gira insieme al prezzo prima di una media mobile convenzionale di fluidità comparabile — quella riduzione del ritardo è l'intero scopo dell'indicatore. Per percepire il compromesso sul ritardo che il T3 migliora, alterna SMA ed EMA e trascina il cursore della lunghezza nella demo qui sotto.

[WIDGET: ma-lab]

Un'impostazione **Volume Factor** controlla l'equilibrio tra reattività e fluidità, così un solo indicatore può essere regolato da "linea di segnale veloce" a "filtro di trend lento" senza cambiarne la lunghezza.

## Quando usarlo

- Come filtro di trend: opera solo nella direzione della pendenza del T3.
- Come riferimento dinamico di supporto/resistenza nei mercati in trend, in modo simile a come i trader usano una EMA.
- Come sostituto più fluido di una media mobile nei setup a incrocio, quando una MA normale genera troppi falsi segnali.
- Su strumenti volatili o timeframe intraday veloci dove una media mobile grezza produce troppo rumore.

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a forma di grafico a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "Tillson T3" e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprirne le impostazioni.

Una configurazione di partenza sensata è quella predefinita: **Length** 14, **Volume Factor** 0.618, **Input Data** Close. Con **Auto Color** impostato su **Slope**, la linea cambia colore quando cambia direzione, il che rende il trend leggibile a colpo d'occhio.

[SCREENSHOT: Un grafico dei prezzi con il Tillson T3 tracciato sopra le candele, Auto Color = Slope così la linea mostra un colore nei segmenti in salita e il colore secondario in quelli in discesa | dc-it-tillson-t3-01.png]

## Come interpretarlo

- **La pendenza** è il segnale primario. Un T3 in salita indica pressione rialzista; un T3 in discesa indica pressione ribassista. Con **Auto Color: Slope** attivo, il cambio di colore contrassegna ogni inversione di direzione.
- **Il prezzo rispetto alla linea**: un prezzo che si mantiene sopra un T3 in salita supporta un bias long; un prezzo che si mantiene sotto un T3 in discesa supporta un bias short.
- **Linea che si appiattisce**: quando il T3 diventa piatto e il prezzo lo attraversa ripetutamente, il mercato è in laterale — in quello stato i segnali di trend-following di qualsiasi media mobile sono inaffidabili.

Poiché il T3 è fortemente smussato, trattalo come uno strumento di trend e di bias piuttosto che come un trigger di ingresso preciso. Combinalo con uno strumento di momentum come l'[[rsi|RSI]] o con il contesto dell'orderflow per il timing.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Length** | Numero di barre usate nel processo di smussamento. Predefinito: 14. Accorcialo per timeframe più veloci, allungalo per il filtraggio del trend su timeframe superiori; regolalo in base alla volatilità del tuo strumento. |
| **Volume Factor** | Controlla l'intensità dello smussamento, tipicamente nell'intervallo da 0 a 1. Predefinito: 0.618 (la sezione aurea). Valori più bassi rendono la linea più reattiva con meno ritardo; valori più alti aumentano l'intensità dello smussamento, producendo una linea più fluida che filtra più rumore. |
| **Input Data** | Quale serie di prezzi alimenta il calcolo: **High** (sensibile ai movimenti al rialzo), **Low** (sensibile ai movimenti al ribasso), **Open** (prezzo iniziale della barra), **Close** (predefinito — il prezzo di chiusura della barra) o **Volume** (analisi ponderata per il volume). Vedi [[different-types-of-input]]. |

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| **Color** / **Secondary Color** | I colori della linea rialzista e ribassista usati quando la colorazione automatica è attiva. |
| **Subgraph Style** | Come viene disegnata la serie. Predefinito: **Line**. |
| **Auto Color** | Imposta su **Slope** per ricolorare automaticamente la linea in base alla direzione dell'indicatore. |
| **Line Style** | Predefinito: **Solid**; sono disponibili alternative tratteggiate. |
| **Line Width** | Spessore della linea. Predefinito: 1. Aumentalo per rendere più evidente la linea di trend. |
| **Short Name** | Etichetta personalizzata mostrata nella legenda del grafico. |

[SCREENSHOT: La finestra delle impostazioni del Tillson T3 che mostra il gruppo General (Length 14, Volume Factor 0.618, Input Data Close) e il gruppo Subgraph sotto di esso | dc-it-tillson-t3-02.png]

## Suggerimenti ed errori comuni

- **Non regolare Length e Volume Factor allo stesso tempo.** Cambia uno, osserva, poi cambia l'altro — entrambi influiscono sulla fluidità, e modificarli insieme rende difficile capire quale cambiamento abbia aiutato.
- **Una linea più fluida non è automaticamente migliore.** Alzare molto il Volume Factor rende il T3 molto pulito ma anche più lento nel confermare le inversioni. Adatta l'impostazione al tuo tempo di detenzione.
- **I mercati in laterale sconfiggono qualsiasi media mobile**, T3 incluso. Se la linea è piatta, stai fuori o passa a strumenti da range invece di prendere ogni incrocio.
- Confrontalo una volta fianco a fianco con una [[moving-average]] standard della stessa lunghezza — vedere la differenza di ritardo sul tuo strumento è il modo più rapido per capire cosa ti dà il T3.

## Articoli correlati

- [[moving-average]]
- [[super-trend]]
- [[linear-regression]]
- [[different-types-of-input]]
- [[indicator-layout]]