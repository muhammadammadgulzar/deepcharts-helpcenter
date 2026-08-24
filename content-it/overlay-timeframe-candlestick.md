---
title: "Overlay Timeframe Candlestick"
slug: "overlay-timeframe-candlestick"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Disegna le candele di timeframe superiori direttamente su un grafico a timeframe inferiore per l'analisi multi-timeframe in un'unica finestra."
keywords: ["overlay timeframe candlestick", "candele timeframe superiore", "candele HTF", "overlay multi timeframe", "candele MTF", "sovrapposizione timeframe"]
source_hash: "f5e3700cca9de030"
ai_translated: true
source_hash: "f5e3700cca9de030"
---
L'indicatore Overlay Timeframe Candlestick visualizza le candele di un timeframe superiore direttamente su un grafico a timeframe inferiore. Invece di passare da un grafico a 5 minuti a uno a 30 minuti, vedi le candele da 30 minuti formarsi in tempo reale dietro le tue barre da 5 minuti — struttura e dettaglio in un'unica vista.

## Che cos'è

L'indicatore aggrega i dati del timeframe inferiore del tuo grafico in candele di timeframe superiore e le disegna sul grafico corrente. Ogni candela dell'overlay si aggiorna in tempo reale finché la barra del timeframe superiore non si conclude, così vedi sempre la barra del timeframe superiore in formazione, non solo quelle completate.

Risponde alla domanda che ogni trader multi-timeframe si pone di continuo: "dove siamo dentro la candela più grande?"

## Quando usarlo

- Vuoi osservare la struttura del timeframe superiore senza cambiare grafico.
- Devi vedere quando il prezzo si sta consolidando *dentro* il range di una candela più grande oppure ne sta uscendo.
- Vuoi contesto sui breakout — una spinta sul timeframe inferiore vale di più quando rompe anche l'estremo della candela in formazione del timeframe superiore.
- Allinei gli ingressi sul timeframe inferiore con la direzione più ampia del mercato mostrata dalle barre del timeframe superiore.

## Guida rapida

1. Apri il menu degli indicatori sul tuo grafico e aggiungi **Overlay Timeframe Candlestick**.
2. Apri le impostazioni dell'indicatore.
3. Nel gruppo General, imposta **Param type** sul tipo di timeframe per l'overlay e **Param 1** sul suo valore — per esempio un overlay a 30 minuti su un grafico a 5 minuti.
4. Sotto Chart Area, scegli **Horizontal** per renderizzare le candele dell'overlay sul grafico dei prezzi, e usa il **Panel selector** se le vuoi in un altro pannello.
5. Facoltativamente abilita **Show vertical line on close** nel gruppo Plot per contrassegnare sul grafico ogni chiusura di candela del timeframe superiore.
6. Regola **Opacity** in modo che l'overlay resti visibile dietro le tue candele principali senza nasconderle, poi applica.

[SCREENSHOT: Un grafico a 5 minuti con Overlay Timeframe Candlestick che disegna candele da 30 minuti semitrasparenti dietro le barre dei prezzi, con una candela del timeframe superiore ancora in formazione sul bordo destro | dc-it-overlay-timeframe-candlestick-01.png]

## Come leggerlo

- **Posizione dentro la barra** — il punto in cui si trova il prezzo corrente dentro la candela in formazione del timeframe superiore ti dice chi sta vincendo quella barra. Un prezzo incollato al massimo della candela in formazione si legge in modo molto diverso da un prezzo a metà range.
- **Consolidamento vs. espansione** — diverse barre del timeframe inferiore intrappolate nel range di una singola candela dell'overlay indicano consolidamento; una chiusura oltre l'estremo della candela dell'overlay precedente è espansione del timeframe superiore.
- **Le chiusure delle candele contano** — la linea verticale di chiusura (se abilitata) segna i momenti in cui il timeframe superiore prende posizione. Un'ombra oltre un livello che poi richiude all'interno è un rifiuto che ti sfuggirebbe guardando solo il timeframe inferiore.
- **Filtro direzionale** — molti trader prendono ingressi sul timeframe inferiore solo nella direzione della candela corrente e di quella precedente del timeframe superiore.

L'indicatore funziona al meglio combinato con l'analisi della struttura e dei livelli di liquidità — fornisce contesto, non ingressi.

## Riferimento delle impostazioni

[SCREENSHOT: Finestra di dialogo delle impostazioni di Overlay Timeframe Candlestick con i gruppi Chart Area, General, Color e Plot e con Param type, Param 1, Param 2, Up bar, Down bar, Show filled bar, Candle width, Border width, Opacity e Show vertical line on close visibili | dc-it-overlay-timeframe-candlestick-02.png]

### Chart Area

| Impostazione | Cosa fa |
|---|---|
| **Horizontal** | Renderizza le candele dell'overlay sul grafico dei prezzi. |
| **Vertical** | Visualizza l'overlay in verticale, dove supportato. |
| **Panel selector** | Sceglie quale pannello visualizza l'overlay. |

### General

| Impostazione | Cosa fa |
|---|---|
| **Param type** | Definisce il tipo di timeframe usato per l'overlay. |
| **Param 1** | Specifica il valore primario del timeframe. |
| **Param 2** | Parametro secondario facoltativo, usato solo quando il tipo di timeframe selezionato lo richiede. |

### Color

| Impostazione | Cosa fa |
|---|---|
| **Up bar** | Colore per le candele rialziste del timeframe superiore. |
| **Down bar** | Colore per le candele ribassiste del timeframe superiore. |
| **Show filled bar** | Se le candele dell'overlay vengono disegnate piene o vuote. |

### Plot

| Impostazione | Cosa fa |
|---|---|
| **Candle width** | Controlla la larghezza delle candele dell'overlay. |
| **Border width** | Regola lo spessore dei bordi delle candele. |
| **Opacity** | Controlla la trasparenza delle candele dell'overlay — abbassala perché la serie principale resti leggibile. |
| **Show vertical line on close** | Disegna una linea verticale sul grafico quando una candela del timeframe superiore chiude. |

## Suggerimenti ed errori comuni

- **Mantieni un rapporto sensato.** Sovrapporre una candela giornaliera su un grafico a 1 minuto produce un unico enorme rettangolo che copre l'intera finestra. Rapporti come 5 minuti → 30 minuti o 15 minuti → 1 ora restano leggibili.
- **La candela dell'overlay più a destra non è finita.** Il suo colore e il suo range continuano a cambiare finché la barra del timeframe superiore non si conclude — non trattarla come un segnale completato.
- Imposta **Opacity** bassa e disattiva **Show filled bar** (candele vuote) se l'overlay compete visivamente con le tue barre dei prezzi.
- **Show vertical line on close** è facile da trascurare ma prezioso: le chiusure del timeframe superiore sono punti decisionali naturali per incrementi, uscite e invalidazioni.
- Se vuoi range evidenziati, target e riepiloghi dei volumi anziché candele disegnate, usa [[overlay-timeframe-highlight|Overlay Timeframe Highlight]] — i due indicatori sono complementari.

## Articoli correlati

- [[overlay-timeframe-highlight]]
- [[overlay-chart]]
- [[understanding-market-structure-sessions]]
- [[different-types-of-input]]
- [[indicator-layout]]