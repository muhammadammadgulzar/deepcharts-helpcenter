---
title: "Overlay Timeframe Highlight"
slug: "overlay-timeframe-highlight"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Evidenzia i range delle candele di timeframe superiori su un grafico a timeframe inferiore, con proiezioni opzionali dei target massimo/minimo e riepiloghi dei volumi."
keywords: ["overlay timeframe highlight", "evidenziazione timeframe superiore", "range HTF", "evidenziazione timeframe", "massimo minimo timeframe superiore", "evidenziazione MTF"]
source_hash: "d4ae08b12844fde2"
ai_translated: true
source_hash: "d4ae08b12844fde2"
---
L'indicatore Overlay Timeframe Highlight evidenzia visivamente le candele di un timeframe superiore su un grafico a timeframe inferiore. Invece di disegnare candele complete come [[overlay-timeframe-candlestick|Overlay Timeframe Candlestick]], ombreggia ogni segmento del timeframe superiore, può proiettarne massimo/minimo come linee target e può stampare riepiloghi di volume o di scambi per segmento.

## Che cos'è

L'indicatore aggrega le barre del timeframe inferiore del tuo grafico in segmenti di timeframe superiore ed evidenzia visivamente ogni segmento. Facoltativamente proietta linee target di massimo/minimo da ogni candela del timeframe superiore e mostra statistiche di riepilogo come il volume totale del range evidenziato.

Risponde a "a quale candela più grande appartiene questa price action, dove sono gli estremi di quella candela, e quanto lavoro è stato fatto al suo interno?"

## Quando usarlo

- Vuoi la struttura del timeframe superiore visibile senza cambiare grafico.
- Segui i range massimo/minimo delle candele più grandi come livelli di riferimento intraday.
- Vuoi riepiloghi di volume o di scambi per segmento, per vedere quali candele del timeframe superiore hanno avuto partecipazione reale.
- Contrassegni i target del timeframe superiore — massimi e minimi proiettati a cui il mercato potrebbe tornare.

## Guida rapida

1. Apri il menu degli indicatori sul tuo grafico e aggiungi **Overlay Timeframe Highlight**.
2. Apri le impostazioni dell'indicatore.
3. Nel gruppo General, imposta **Param type** sul tipo di timeframe (per esempio Minute, Hour o Day) e **Param 1** sul valore — per esempio un'evidenziazione oraria su un grafico a 5 minuti.
4. Sotto Chart Area, scegli **Horizontal** per renderizzare le evidenziazioni sul grafico dei prezzi.
5. In Plot, verifica che **Enable** sia attivo e imposta **Body opacity** abbastanza bassa da mantenere leggibili le barre dei prezzi.
6. Facoltativamente attiva **Target enabled** nel gruppo Range Target per proiettare massimo/minimo di ogni candela come linee, ed **Enable Summary** per stampare i dati di volume per candela.
7. Applica le impostazioni.

[SCREENSHOT: Un grafico a 5 minuti con Overlay Timeframe Highlight che ombreggia segmenti orari alternati, linee target di massimo/minimo proiettate verso destra dall'ultima candela oraria completata, e un riepilogo dei volumi stampato sopra ogni segmento | dc-it-overlay-timeframe-highlight-01.png]

## Come leggerlo

- **Confini dei segmenti** — ogni blocco ombreggiato è una candela del timeframe superiore. Il prezzo che ruota dentro un blocco è equilibrio sul timeframe superiore; blocchi consecutivi che salgono o scendono a gradini sono trend.
- **Colore dell'evidenziazione** — la colorazione rialzista/ribassista mostra a colpo d'occhio la direzione della barra del timeframe superiore. Con **Color based on delta** abilitato, il colore riflette invece il delta dell'orderflow dentro il segmento, così un segmento con prezzo in salita ma delta in discesa segnala partecipazione debole (vedi [[orderflow-101]]).
- **Linee target** — i massimi e i minimi proiettati delle candele del timeframe superiore fungono da livelli di riferimento; il mercato rivisita spesso gli estremi dei timeframe superiori precedenti e vi reagisce.
- **Riepiloghi** — confronta il volume tra segmenti: un segmento di breakout su volume scarso merita più sospetto di uno su volume pesante.

## Riferimento delle impostazioni

[SCREENSHOT: Finestra di dialogo delle impostazioni di Overlay Timeframe Highlight con tutti i gruppi — Chart Area, General, Color, Plot, Range Target e Summary — con Target enabled ed Enable Summary attivi | dc-it-overlay-timeframe-highlight-02.png]

### Chart Area

| Impostazione | Cosa fa |
|---|---|
| **Horizontal** | Renderizza le evidenziazioni direttamente sul grafico dei prezzi. |
| **Vertical** | Visualizza l'evidenziazione in verticale, dove supportato. |
| **Panel selector** | Sceglie quale pannello del grafico visualizza l'overlay. |

### General

| Impostazione | Cosa fa |
|---|---|
| **Param type** | Definisce il tipo di timeframe usato per l'evidenziazione (per esempio Minute, Hour, Day). |
| **Param 1** | Specifica il valore primario del timeframe (per esempio 5 per un'evidenziazione a 5 minuti). |
| **Param 2** | Parametro secondario facoltativo, usato a seconda del tipo di timeframe selezionato. |

### Color

| Impostazione | Cosa fa |
|---|---|
| **Color based on delta** | Cambia dinamicamente il colore dell'evidenziazione in base al delta dell'orderflow invece che alla direzione della barra. |
| **Color mode** | Determina come si applica il colore — sfumato in base all'intensità oppure pieno. |
| **Std dev for coloring** | Controlla la sensibilità quando il colore si basa sulla deviazione statistica (modalità fade). |
| **Up bar** | Colore dell'evidenziazione per le candele rialziste del timeframe superiore. |
| **Down bar** | Colore dell'evidenziazione per le candele ribassiste del timeframe superiore. |

### Plot

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Attiva o disattiva l'overlay di evidenziazione. |
| **Border width** | Controlla lo spessore dell'evidenziazione del bordo della candela. |
| **Body opacity** | Regola la trasparenza dell'evidenziazione del corpo della candela. |
| **Shadow opacity** | Regola la trasparenza dell'evidenziazione dell'ombra della candela. |
| **Show background** | Riempie l'intero sfondo del range della candela del timeframe superiore. |

### Range Target

| Impostazione | Cosa fa |
|---|---|
| **Target enabled** | Abilita le linee di proiezione del range massimo/minimo dalla candela del timeframe superiore. |
| **High color / Low color** | Colori delle linee di massimo e minimo proiettate. |
| **Line width** | Spessore delle linee target. |
| **Line style** | Aspetto della linea (continua, tratteggiata e simili). |
| **Extend line to left** | Estende le linee target all'indietro sulle barre precedenti. |
| **Show text** | Mostra il testo delle etichette sulle linee target. |
| **Text color** | Colore del testo delle etichette. |
| **Text size** | Dimensione del carattere delle etichette. |

### Summary

| Impostazione | Cosa fa |
|---|---|
| **Enable Summary** | Mostra sul grafico le informazioni di riepilogo del timeframe superiore. |
| **Volume Summary** | Mostra il volume totale della candela evidenziata. |
| **Trade Summary** | Mostra le metriche relative agli scambi, dove disponibili. |
| **Text Color** | Colore del testo del riepilogo. |
| **Ask Color / Bid Color** | Colori usati per i valori ask e bid nel riepilogo. |
| **Summary text size** | Dimensione del carattere dei dati di riepilogo. |
| **Summary to view** | Quante candele del timeframe superiore sono incluse nella visualizzazione del riepilogo. |

## Suggerimenti ed errori comuni

- **Mantieni bassa l'opacità.** Una **Body opacity** alta con **Show background** abilitato può sbiadire le barre dei prezzi; l'evidenziazione deve incorniciare l'azione, non nasconderla.
- **Il segmento corrente è ancora in formazione** — colore, range e riepilogo continuano ad aggiornarsi finché la candela del timeframe superiore non si completa.
- Limita **Summary to view** a poche candele; stampare i riepiloghi per ogni segmento a schermo affolla rapidamente il grafico.
- La colorazione basata sul delta dipende dal fatto che il tuo feed fornisca dati classificati bid/ask — vedi [[different-types-of-input]] se la colorazione non varia mai.
- Usa questo indicatore per range, target e partecipazione; usa [[overlay-timeframe-candlestick|Overlay Timeframe Candlestick]] quando vuoi le forme reali delle candele del timeframe superiore. Molti trader li usano entrambi.

## Articoli correlati

- [[overlay-timeframe-candlestick]]
- [[understanding-market-structure-sessions]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]