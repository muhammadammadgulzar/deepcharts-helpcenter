---
title: "Bande di Bollinger"
slug: "bollinger-bands"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Riferimento per l'indicatore Bande di Bollinger in DeepCharts: media centrale, bande superiore e inferiore a deviazione standard, tutte le impostazioni e come leggere lo squeeze e i tocchi delle bande."
keywords: ["bande di bollinger", "bollinger", "indicatore a bande", "bande deviazione standard", "bande di volatilità", "squeeze di bollinger", "boilinger bands", "bolinger bands"]
source_hash: "7f36345f1a73f5a6"
ai_translated: true
source_hash: "7f36345f1a73f5a6"
---
Le Bande di Bollinger, sviluppate da John Bollinger negli anni '80, misurano la volatilità del mercato e aiutano a identificare potenziali opportunità di trading. L'indicatore disegna tre linee direttamente sopra il prezzo: una media mobile centrale con una banda superiore e una inferiore collocate a un numero impostato di deviazioni standard da essa.

Poiché le bande sono costruite sulla deviazione standard, si allargano automaticamente quando il mercato diventa volatile e si stringono quando si calma — ed è questo che le rende utili in qualsiasi condizione di mercato senza doverle ricalibrare.

## Che cos'è

Le Bande di Bollinger rispondono alla domanda: il prezzo è alto o basso rispetto al proprio comportamento recente? I tre componenti sono:

- **Bollinger Avg** — la linea centrale, tipicamente una media mobile semplice dell'input di prezzo selezionato.
- **Bollinger Up** — la banda superiore, la media più un multiplo della deviazione standard.
- **Bollinger Down** — la banda inferiore, la media meno lo stesso multiplo.

Poiché in condizioni normali quasi tutta l'azione recente del prezzo è contenuta tra le bande, un tocco o una rottura di una banda è un'affermazione sugli estremi aggiustati per la volatilità, non un segnale di per sé.

[SCREENSHOT: Grafico a candele con le Bande di Bollinger in overlay, che mostra la media centrale e le bande superiore e inferiore, con uno squeeze visibile (bande che si restringono) seguito da un'espansione | dc-it-bollinger-bands-01.png]

## Quando usarlo

- Valutare se il prezzo è tirato rispetto alla sua media recente prima di entrare o uscire.
- Individuare le contrazioni di volatilità (lo "squeeze") che spesso precedono forti movimenti direzionali.
- Inquadrare operazioni di ritorno alla media nei mercati laterali — fade dalle bande esterne verso la media.
- Contesto di trailing nei trend — i trend forti tendono a camminare lungo una banda mentre la media agisce da supporto o resistenza nei pullback.

## Avvio rapido

1. Apri un grafico dei prezzi — vedi [[first-chart]].
2. Fai clic sul pulsante verde **Indicators** (o premi **Ctrl I**) per aprire l'**Indicator List**.
3. Cerca **Bollinger Bands** e fai clic su **+** per aggiungerlo. Le tre linee vengono disegnate sopra le candele del prezzo.
4. Fai clic sull'icona a ingranaggio (l'icona delle impostazioni dell'indicatore) per aprire la sua finestra di configurazione.
5. La configurazione classica descritta da John Bollinger è una media a 20 periodi con un valore di deviazione standard pari a 2, calcolata sulla Close — un solido punto di partenza su qualsiasi timeframe.

[SCREENSHOT: Finestra di configurazione delle Bande di Bollinger aperta, che mostra il menu a discesa Input Data, il campo Periods e il campo Std Dev Value, con la sezione di stile Subgraphs sotto | dc-it-bollinger-bands-02.png]

## Come leggerlo

- **Larghezza delle bande = volatilità.** Bande larghe significano un mercato attivo; bande strette un mercato tranquillo. Un restringimento pronunciato (squeeze) segnala energia accumulata — aspettati un'espansione, ma lascia che sia il prezzo a scegliere la direzione.
- **I tocchi delle bande sono contesto, non trigger.** In una fase laterale, il prezzo che tocca la banda superiore è un candidato fade verso la media. In un trend, il prezzo che cavalca la banda superiore è forza, non una vendita automatica.
- **La linea centrale è la media.** I pullback che tengono la Bollinger Avg mantengono intatto il trend; una rottura netta di essa sposta il bias verso la banda opposta.
- **Le chiusure fuori da una banda sono rare per costruzione.** Chiusure ripetute fuori da una banda indicano un movimento insolitamente forte — stringi la gestione del rischio invece di andargli contro alla cieca.

## Riferimento delle impostazioni

Facendo clic sull'icona delle impostazioni dell'indicatore si apre la finestra di configurazione.

### Parametri

| Impostazione | Che cosa fa |
|---|---|
| **Input Data** | La sorgente di prezzo usata per il calcolo della media — High, Low, Open o Close. Close è la scelta convenzionale. |
| **Periods** | Il numero di periodi usati per calcolare la linea centrale. Meno periodi aderiscono di più al prezzo; più periodi rendono le bande più fluide. |
| **Std Dev Value** | Il coefficiente applicato alla deviazione standard, che controlla quanto lontano le bande superiore e inferiore si collocano dalla media. Valori più alti contengono più azione del prezzo ma segnalano meno spesso. |

### Subgraphs

Ciascuna delle tre linee può essere stilizzata individualmente — colore, stile (continuo o tratteggiato) e spessore:

| Linea | Che cos'è |
|---|---|
| **Bollinger Avg** | La linea centrale (la media). |
| **Bollinger Up** | La banda superiore. |
| **Bollinger Down** | La banda inferiore. |

## Suggerimenti ed errori comuni

- **Un tocco della banda non è un segnale di inversione.** L'errore più comune tra i principianti è vendere ogni tocco della banda superiore; in un trend, il prezzo può cavalcare una banda per decine di barre.
- **Abbina lo squeeze a un filtro di direzione.** Lo squeeze predice l'espansione, non la direzione — combinalo con la struttura, il [[volume]] o uno strumento di trend prima di posizionarti.
- **Non ridurre Periods per "vedere più segnali".** Un periodo di osservazione corto fa inseguire alle bande ogni candela e distrugge il significato statistico della deviazione standard.
- **Confrontale con i Keltner Channel.** Le Bande di Bollinger costruite sulla deviazione standard reagiscono alla dispersione del prezzo, mentre le bande del [[keltner-channel]] costruite sull'ATR reagiscono all'escursione — usarle entrambe rende gli squeeze più facili da individuare.

## Articoli correlati

- [[keltner-channel]]
- [[standard-deviation]]
- [[atr]]
- [[moving-average]]
- [[different-types-of-input]]
- [[indicator-layout]]