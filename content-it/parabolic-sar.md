---
title: "Parabolic SAR"
slug: "parabolic-sar"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Riferimento per l'indicatore Parabolic SAR in DeepCharts: i punti stop-and-reverse, le impostazioni di accelerazione Step e Maximum e le opzioni di stile."
keywords: ["PSAR", "parabolic stop and reverse", "punti SAR", "punti di trailing stop", "parabolico di Wilder", "impostazioni parabolic sar"]
source_hash: "83bc058d2f55a327"
ai_translated: true
source_hash: "83bc058d2f55a327"
---
Il Parabolic SAR è un indicatore di analisi tecnica sviluppato da J. Welles Wilder che aiuta a identificare le inversioni di trend e a stabilire punti di ingresso e di uscita per il trading. Appare come una serie di punti posizionati sopra o sotto il prezzo, a seconda della direzione del trend: sotto i prezzi durante i trend rialzisti, sopra durante quelli ribassisti.

SAR sta per "stop and reverse" — i punti inseguono il prezzo a un ritmo crescente, e quando il prezzo li tocca l'indicatore passa al lato opposto, segnalando una potenziale inversione.

## Che cos'è

Il Parabolic SAR risponde alla domanda: dov'è il mio trailing stop, e il trend si è invertito? Questo indicatore è simile alla media mobile, con l'unica differenza che il Parabolic SAR si muove a un ritmo più accelerato e può cambiare la propria posizione rispetto al prezzo. Più a lungo dura un trend, più velocemente i punti si avvicinano al prezzo — ed è questo a dare al trail la sua forma parabolica e a forzare prima o poi un'uscita.

[SCREENSHOT: Un grafico a candele con i punti del Parabolic SAR sotto il prezzo durante un trend rialzista, che passano sopra il prezzo dopo un'inversione; il punto di flip chiaramente visibile | dc-it-parabolic-sar-01.png]

## Quando usarlo

- Per far seguire uno stop a una posizione in trend — i punti forniscono un livello di stop concreto, aggiornato meccanicamente a ogni barra.
- Per il timing delle uscite: quando il prezzo tocca i punti, il trend che sosteneva la posizione è considerato concluso.
- Per identificare i punti di inversione nei mercati che seguono trend puliti.
- Per confermare la direzione insieme a strumenti più lenti — punti sotto il prezzo concordano con una lettura rialzista, punti sopra con una ribassista.

## Guida rapida

1. Apri un grafico — vedi [[first-chart]].
2. Fai clic sull'icona a barre nella fila di icone in alto a sinistra del grafico per aprire il pannello **Indicators**, poi fai clic su **Indicators** per aprire la lista completa **Indicator List**.
3. Cerca **Parabolic SAR** e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona dell'ingranaggio per aprirne le impostazioni.
5. Configurazione iniziale: mantieni **Step** al valore predefinito 0.02 e **Maximum** al valore predefinito 0.20 — i valori originali di Wilder, e il punto di partenza standard su qualsiasi timeframe.

[SCREENSHOT: Finestra di dialogo delle impostazioni del Parabolic SAR con la sezione Parameters con Step = 0.02 e Maximum = 0.20, e la sezione di stile Subgraph sotto | dc-it-parabolic-sar-02.png]

## Come leggerlo

- **Punti sotto il prezzo** — trend rialzista. A ogni nuova barra i punti salgono, inseguendo il movimento.
- **Punti sopra il prezzo** — trend ribassista, con i punti che scendono verso il prezzo.
- **Un flip** (i punti saltano dall'altro lato) segnala uno stop-and-reverse: il trend precedente è considerato concluso. I trader aggressivi invertono la posizione sul flip; quelli prudenti lo trattano solo come un'uscita.
- **La spaziatura dei punti** mostra l'accelerazione: punti che si allontanano l'uno dall'altro significano che il fattore di accelerazione sta salendo perché il trend continua a segnare nuovi estremi.
- Nei mercati laterali i punti fanno flip continuamente — l'indicatore è esplicitamente progettato per le condizioni di trend e produce i suoi segnali peggiori nei range.

## Riferimento delle impostazioni

### Parameters

| Impostazione | Cosa fa |
|---|---|
| **Step** | Il fattore di accelerazione che determina quanto velocemente il SAR raggiunge il prezzo. Predefinito: 0.02. Alzarlo fa stringere il trail più in fretta (uscite anticipate, più falsi segnali); abbassarlo lascia più spazio al trend. |
| **Maximum** | Il valore massimo raggiungibile dal fattore di accelerazione. Predefinito: 0.20. Limita quanto aggressivamente i punti possono convergere sul prezzo nei trend prolungati. |

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| **Parabolic SAR Color** | Colore dei punti tracciati. |
| **Secondary Color** | Colore secondario facoltativo. |
| **Subgraph Style** | Stile di visualizzazione della serie. |
| **Line Style** | Definizione dell'aspetto della linea. |
| **Line Width** | Dimensione/spessore del tracciato. |
| **Use Secondary Axis** | Visualizza l'indicatore su un asse alternativo. |

## Suggerimenti ed errori comuni

- **Non operare su ogni flip.** In un range il SAR fa flip di continuo e ogni flip fallisce; usalo solo quando un trend è consolidato, o filtra con [[adx]] per confermare prima la forza del trend.
- **Adatta Step al carattere del mercato.** I valori predefiniti 0.02 / 0.20 sono gli originali di Wilder; uno **Step** più piccolo è adatto agli strumenti volatili che hanno bisogno di respiro, uno più grande ai movimenti di momentum veloci che vuoi proteggere in fretta.
- **Tratta il punto come un livello di stop, non come una previsione.** Il SAR ti dice dove il trend è invalidato — non dice nulla su dove andrà il prezzo dopo.
- Confrontalo con [[super-trend]]: entrambi inseguono il trend, ma la base ATR di Super Trend si adatta alla volatilità mentre l'accelerazione del SAR si adatta alla durata del trend.

## Articoli correlati

- [[super-trend]]
- [[moving-average]]
- [[adx]]
- [[atr]]
- [[different-types-of-input]]
- [[indicator-layout]]