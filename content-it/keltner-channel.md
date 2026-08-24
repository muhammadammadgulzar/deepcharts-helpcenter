---
title: "Keltner Channel"
slug: "keltner-channel"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Riferimento per l'indicatore Keltner Channel in DeepCharts: linea centrale EMA, bande basate sull'ATR, le impostazioni ATR Multiplier e Length con i valori predefiniti, e come fare trading sul canale."
keywords: ["keltner channel", "keltner", "bande di keltner", "canale atr", "bande atr", "chester keltner", "kelter channel", "canali keltner"]
source_hash: "7995f161ecf54bdd"
ai_translated: true
source_hash: "7995f161ecf54bdd"
---
Il Keltner Channel è un classico indicatore di analisi tecnica sviluppato da Chester Keltner nel 1960, usato per identificare trend, volatilità e aree di inversione. Disegna tre linee sopra il prezzo: una linea centrale basata su una media mobile esponenziale, con una banda superiore e una inferiore posizionate a una distanza proporzionale all'Average True Range (ATR).

Poiché la distanza delle bande deriva dall'ATR anziché dalla deviazione standard, il canale si espande e si contrae con il range di scambio effettivo del mercato — gap inclusi — il che gli conferisce un inviluppo più fluido e stabile rispetto alle [[bollinger-bands]].

## Che cos'è

Il Keltner Channel risponde alla domanda: quanto è lontano il prezzo dalla sua media aggiustata per la volatilità, misurato in unità di range tipico? Le sue tre linee sono:

- **Keltner Avg** — la linea centrale, una media mobile esponenziale dell'input selezionato.
- **Keltner Up** — la banda superiore, la linea centrale più l'ATR moltiplicato per l'ATR Multiplier.
- **Keltner Down** — la banda inferiore, la linea centrale meno la stessa distanza.

[SCREENSHOT: Grafico a candele con il Keltner Channel sovrapposto, linea centrale EMA con bande superiore e inferiore, prezzo in trend lungo la banda superiore con pullback che tengono la linea centrale | dc-it-keltner-channel-01.png]

## Quando usarlo

- Identificazione del trend — un prezzo che si mantiene sopra la linea centrale con il canale inclinato verso l'alto è una lettura pulita di trend rialzista (e viceversa).
- Individuazione degli ingressi in pullback in un trend, dove la linea centrale funge spesso da supporto o resistenza dinamica.
- Individuazione delle aree di inversione quando il prezzo si spinge oltre una banda in un mercato senza trend.
- Inquadramento della volatilità — la larghezza del canale scala con l'ATR, quindi resta affidabile sia nei mercati tranquilli sia in quelli veloci.

## Avvio rapido

1. Apri un grafico dei prezzi — vedi [[first-chart]].
2. Fai clic sul pulsante verde **Indicators** (o premi **Ctrl I**) per aprire l'**Indicator List**.
3. Cerca **Keltner Channel** e fai clic su **+** per aggiungerlo. Le tre linee vengono tracciate sopra le candele.
4. Fai clic sull'icona a ingranaggio per aprire la finestra di configurazione dell'indicatore.
5. I valori predefiniti — **Length** 21 e **ATR Multiplier Value** 2.00 — sono una configurazione di partenza solida; allarga il moltiplicatore se il tuo strumento tocca le bande troppo spesso per il tuo stile.

[SCREENSHOT: Finestra di configurazione del Keltner Channel aperta con il campo ATR Multiplier Value impostato su 2.00, il menu a discesa Input e il campo Length impostato su 21, con le opzioni colore dei Subgraphs sotto | dc-it-keltner-channel-02.png]

## Come leggerlo

- **Pendenza e lato.** La pendenza del canale dà il trend; il lato della linea centrale su cui il prezzo si mantiene dà il bias. Insieme sono più forti di ciascuno preso da solo.
- **Pullback sulla linea centrale.** In un mercato in trend, i ritracciamenti sulla Keltner Avg che tengono sono classici ingressi in continuazione.
- **Cavalcate della banda vs. punture della banda.** Chiusure sostenute lungo una banda indicano un trend forte (non andare contro). Un'isolata puntura oltre una banda in un canale piatto è più probabilmente un'area di esaurimento o inversione.
- **Larghezza del canale.** Un canale che si restringe visibilmente significa true range in contrazione — la stessa logica della "quiete prima del movimento" di uno squeeze di Bollinger, ma misurata in termini di ATR.

## Riferimento delle impostazioni

Le impostazioni sono accessibili tramite la finestra di configurazione dell'indicatore.

### Parametri

| Impostazione | Cosa fa | Predefinito |
|---|---|---|
| **ATR Multiplier Value** | Moltiplica l'ATR per determinare quanto lontano le bande esterne stanno dalla linea centrale. Valori più alti contengono più azione di prezzo; valori più bassi segnalano prima ma più spesso. | 2.00 |
| **Input** | I dati di prezzo usati per la media del canale — Close, Open, High, Low o volume. | — |
| **Length** | Il numero di periodi usati per calcolare la media del canale. | 21 |

### Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Keltner Avg Color** | Colore della linea centrale. |
| Colore secondario | Colore secondario facoltativo per la linea. |
| **Keltner Up Color** | Colore della banda superiore. |
| **Keltner Down Color** | Colore della banda inferiore. |
| Stile di visualizzazione / stile della linea / spessore della linea | Stile visivo di ciascuna linea. |
| Asse secondario | Opzione per scalare su un asse secondario. |

## Suggerimenti ed errori comuni

- **Non andare contro i tocchi delle bande in un canale in trend.** Le letture di inversione più affidabili arrivano quando il canale è piatto; in un canale inclinato, un tocco della banda è di solito forza del trend.
- **Regola prima il moltiplicatore, non la lunghezza.** La Length cambia il carattere della linea centrale; l'ATR Multiplier cambia solo quanto tolleranti sono le bande. La maggior parte dei problemi di adattamento sono problemi di moltiplicatore.
- **Combinalo con le Bollinger Bands per rilevare gli squeeze.** Quando le Bollinger Bands si contraggono dentro il Keltner Channel, la volatilità è insolitamente compressa — un setup di espansione molto usato.
- **Ricorda che le bande sono basate sull'ATR.** Dopo un picco di volatilità, il canale resta ampio per un po' anche se il prezzo si calma; è lo smorzamento dell'ATR, non un segnale.

## Articoli correlati

- [[bollinger-bands]]
- [[atr]]
- [[moving-average]]
- [[standard-deviation]]
- [[different-types-of-input]]
- [[indicator-layout]]