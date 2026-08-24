---
title: "Super Trend"
slug: "super-trend"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Guida di riferimento all'indicatore Super Trend in DeepCharts: lunghezza e moltiplicatore dell'ATR, opzioni dell'area del grafico, avvisi, colorazione delle candele e stile della linea."
keywords: ["supertrend", "indicatore super trend", "trend following", "bande ATR", "indicatore trailing stop", "impostazioni super trend"]
source_hash: "2f4d6c9ac39aa619"
ai_translated: true
source_hash: "2f4d6c9ac39aa619"
---
Super Trend è un indicatore trend-following che identifica la direzione del trend di mercato disegnando una linea dinamica di supporto o resistenza basata sul movimento del prezzo e sulla volatilità. La linea sta sotto il prezzo in un uptrend e sopra il prezzo in un downtrend, cambiando lato quando il trend cambia.

Poiché la sua distanza dal prezzo deriva dall'Average True Range (ATR), la linea si allarga automaticamente in condizioni volatili e si restringe in quelle tranquille — ed è questo che la rende popolare sia come filtro di trend sia come guida per il trailing stop.

## Che cos'è

Super Trend risponde alla domanda: da quale lato del mercato mi trovo, e dov'è il livello che invaliderebbe questa lettura? Combina una misura di volatilità ATR (**Length**) con un **Multiplier** che stabilisce a che distanza dal prezzo viene tracciata la linea. Finché il prezzo resta da un lato della linea, il trend è considerato intatto; una chiusura attraverso la linea fa passare l'indicatore dall'altro lato.

[SCREENSHOT: Un grafico a candele con la linea del Super Trend tracciata sotto il prezzo in un uptrend, che poi passa sopra il prezzo dopo un'inversione; entrambi i colori della linea visibili attraverso il flip | dc-it-super-trend-01.png]

## Quando usarlo

- Per stabilire rapidamente la direzione del trend su qualsiasi timeframe — il lato e il colore della linea la dichiarano direttamente.
- Per gestire un trailing stop dietro una posizione in guadagno: la linea avanza con il trend e si distanzia con la volatilità.
- Per filtrare i segnali di strumenti più veloci — per esempio prendere solo i long mentre il Super Trend è sotto il prezzo.
- Per individuare i cambi di trend: il momento in cui la linea cambia lato è un evento definito e oggettivo a cui puoi collegare avvisi.

## Avvio rapido

1. Apri un grafico — vedi [[first-chart]].
2. Fai clic sull'icona a barre nella fila di icone in alto a sinistra del grafico per aprire il pannello **Indicators**, poi fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca **Super Trend** e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona a ingranaggio per aprire le sue impostazioni.
5. Configurazione di partenza: mantieni **Length** al valore predefinito 10 e **Multiplier** al valore predefinito 3.00. Questi predefiniti vanno bene per la maggior parte dei timeframe; allarga il moltiplicatore se subisci troppi falsi segnali, accorcia la lunghezza se la linea reagisce troppo lentamente.

[SCREENSHOT: Finestra delle impostazioni di Super Trend con la sezione General con Length = 10 e Multiplier = 3.00, e le sezioni Chart Settings e Alert visibili sotto | dc-it-super-trend-02.png]

## Come leggerlo

- **Linea sotto il prezzo** — contesto di uptrend. La linea agisce da supporto dinamico; i pullback che tengono sopra di essa mantengono il trend intatto.
- **Linea sopra il prezzo** — contesto di downtrend. La linea agisce da resistenza dinamica.
- **Un flip** (la linea salta dall'altro lato del prezzo) segnala un potenziale cambio di trend. I flip nei trend forti sono significativi; quelli in un mercato laterale e nervoso avvengono di continuo ed è meglio ignorarli o filtrarli.
- **La distanza tra il prezzo e la linea** riflette la volatilità, non la forza: un divario ampio significa che l'ATR è elevato, non che il trend sia "più forte".
- Con **Chart Color for Marker** attivato, le candele stesse si ricolorano con la direzione del trend, rendendo lo stato corrente leggibile a colpo d'occhio.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Length** | Periodo per il calcolo dell'ATR. Predefinito: 10. Valori più alti riducono la sensibilità alle fluttuazioni di breve termine; valori più bassi rendono la linea più reattiva. |
| **Multiplier** | Moltiplica l'ATR per stabilire la distanza della linea dal prezzo. Predefinito: 3.00. Aumentandolo si creano bande più larghe — meno falsi segnali ma ingressi più tardivi; diminuendolo le bande si restringono. |

### Chart Settings

| Impostazione | Cosa fa |
|---|---|
| **Chart Area** | **Horizontal** visualizza l'indicatore sul grafico principale dei prezzi; **Vertical** lo visualizza in un pannello separato. |
| **Use Sec. Axis** | Traccia l'indicatore su un asse secondario, permettendoti di sovrapporre indicatori con scale diverse. |

### Alerts

| Impostazione | Cosa fa |
|---|---|
| **Enable Alert Sound** | Riproduce una notifica sonora quando viene generato un segnale. |
| **Alert Name** | Identificatore personalizzato — utile quando gestisci più avvisi. |
| **Enable Message** | Visualizza una notifica visiva. |

### Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Color / 2° Color** | Colore della linea rispettivamente negli stati rialzista e ribassista. |
| **Subgraph Style** | Stile di visualizzazione. Predefinito: Line. |
| **Line Style** | Predefinito: Solid. |
| **Line Width** | Predefinito: 1. Aumentalo per maggiore visibilità. |
| **Name Label / Name Background / Value Label / Value Background** | Mostra o personalizza l'identificatore dell'indicatore e il valore numerico sul grafico. |
| **Auto Color** | Scegli tra colore manuale o regolazione automatica del colore. |
| **Chart Color for Marker** | Ricolora le candele stesse in base alla direzione corrente del trend. |
| **Include on Auto Center** | Include l'indicatore quando il grafico si autoscala, così la linea resta visibile. |

## Suggerimenti ed errori comuni

- **Non scalpare i flip in un range.** Super Trend è uno strumento di trend; nei mercati laterali cambia lato di continuo e ogni flip sembra un segnale. Controlla prima un timeframe superiore o un filtro di forza del trend come l'[[adx]].
- **Regola con il moltiplicatore, non solo con la lunghezza.** Allargare il **Multiplier** è di solito il modo più efficace per ridurre i falsi segnali, al costo di ingressi più tardivi.
- **Ritarda per costruzione.** Il flip conferma un movimento già in corso — abbinalo a un contesto più veloce (per esempio l'[[atr]] per il regime di volatilità) invece di aspettarti che catturi massimi e minimi.
- Usa [[super-trend-difference]] insieme ad esso per vedere quanto il prezzo si è esteso dalla linea sotto forma di istogramma.

## Articoli correlati

- [[super-trend-difference]]
- [[atr]]
- [[moving-average]]
- [[parabolic-sar]]
- [[different-types-of-input]]
- [[indicator-layout]]