---
title: "Relative Strength Index (RSI)"
slug: "rsi"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Configura e interpreta il Relative Strength Index (RSI), il classico oscillatore di momentum su scala 0–100 per individuare condizioni di ipercomprato e ipervenduto."
keywords: ["rsi", "relative strength index", "ipercomprato ipervenduto", "rsi 70 30", "oscillatore di momentum", "rsi di wilder", "divergenza rsi", "impostazioni rsi"]
source_hash: "76577f355dd9e068"
ai_translated: true
source_hash: "76577f355dd9e068"
---
Il Relative Strength Index (RSI) è uno degli indicatori di analisi tecnica più popolari per valutare la forza o la debolezza di un asset in un periodo di tempo. Sviluppato da J. Welles Wilder, è un oscillatore di momentum che si muove su una scala 0–100 ed è usato principalmente per identificare condizioni di ipercomprato o ipervenduto, che possono indicare un'inversione o un consolidamento del prezzo.

Se devi imparare un solo oscillatore per primo, che sia questo — la maggior parte degli altri strumenti di momentum è una variazione sullo stesso tema.

## Che cos'è

L'RSI confronta l'entità dei recenti aumenti di prezzo con quella dei recenti ribassi sulla stessa finestra ed esprime il risultato come una singola curva tra 0% e 100%. Quando i guadagni hanno dominato, la curva sale verso la parte alta della scala; quando hanno dominato le perdite, scende verso il basso.

La versione di DeepCharts aggiunge una linea **Average** smussata opzionale sopra l'RSI stesso, che puoi usare come linea di segnale, oltre a linee di livello di ipercomprato/ipervenduto configurabili.

## Quando usarlo

- Per segnalare condizioni di ipercomprato (RSI sopra il livello di ipercomprato) e ipervenduto (sotto il livello di ipervenduto) che possono precedere un'inversione o una pausa.
- Per leggere il bias di momentum: un RSI che si mantiene nella metà superiore del suo range sostiene un momentum rialzista, la metà inferiore uno ribassista.
- Per individuare le divergenze: il prezzo che segna un nuovo estremo mentre l'RSI non lo fa è un avvertimento precoce che il momentum si sta affievolendo (vedi [[divergence-detector]]).
- Nei range, come strumento di timing per la mean reversion — l'ambiente in cui i classici segnali 70/30 funzionano meglio.

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a grafico a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "Relative Strength Index" e fai clic su **+** per aggiungerlo — viene tracciato in un pannello dedicato sotto il grafico dei prezzi.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprire le sue impostazioni.

I valori predefiniti sono la configurazione da manuale: **Length** 14 con l'**Overbought Level** a 70 e l'**Oversold Level** a 30. Lasciali così mentre impari l'indicatore; sono anche quelli che la maggior parte degli altri trader sta osservando, il che conta per livelli che funzionano in parte per consenso. Provalo dal vivo qui sotto — trascina i cursori di Length e dei livelli, passa il mouse sulla curva per le letture e osserva come si muovono i punti di segnale.

[WIDGET: rsi-lab]

## Come leggerlo

- **Sopra il livello di ipercomprato (predefinito 70)**: i guadagni recenti hanno superato di molto le perdite. Segnala un momentum tirato — è un segnale di cautela, non una vendita automatica.
- **Sotto il livello di ipervenduto (predefinito 30)**: la condizione speculare al ribasso.
- **La linea mediana a 50**: un RSI che passa il suo tempo sopra 50 indica un regime di momentum rialzista; sotto 50, ribassista. Molti trader di trend usano la mediana invece dei 70/30.
- **Divergenza**: il prezzo stampa un massimo più alto mentre l'RSI stampa un massimo più basso (divergenza ribassista), oppure il prezzo un minimo più basso mentre l'RSI un minimo più alto (divergenza rialzista). Le divergenze avvertono che il momentum del movimento si sta assottigliando.
- **Con la linea Average abilitata**: l'RSI che incrocia al rialzo la propria media è un segnale di momentum in ripresa, l'incrocio al ribasso l'opposto — simile a una linea di segnale sul [[macd|MACD]].

> **Attenzione:** In un trend forte, l'RSI può restare in ipercomprato o ipervenduto a lungo mentre il prezzo continua a correre. Fare fading su ogni tocco di 70/30 in un mercato in trend è il modo più costoso di usare questo indicatore.

## Riferimento impostazioni

### Parametri — General

| Impostazione | Cosa fa |
|---|---|
| **Input data** | Quali dati di prezzo alimentano il calcolo. Vedi [[different-types-of-input]]. |
| **Length** | Numero di periodi usati nel calcolo dell'RSI. Predefinito: 14. Lunghezze più brevi rendono la curva più veloce e rumorosa; lunghezze maggiori la smussano. |

### Parametri — Average

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Attiva o disattiva la linea media (di segnale) aggiuntiva calcolata sull'RSI. |
| **Average Type** | La metodologia di media usata per la linea di segnale. |
| **Length** | Numero di periodi per la media. Predefinito: 20. |

### Parametri — Level settings

| Impostazione | Cosa fa |
|---|---|
| **Overbought Level** | La linea di soglia superiore. Predefinito: 70. Alzala (ad es. verso 80) per richiedere letture più estreme nei mercati in trend forte. |
| **Oversold Level** | La linea di soglia inferiore. Predefinito: 30. |
| **Overbought Color** / **Oversold Color** | Colori delle due linee di soglia. |
| **Level Width** | Impostazione della larghezza per le linee di livello. Predefinito: 10. |

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| Colore linea RSI / colore linea media / colore secondario | Colori per la curva RSI, la sua linea media e l'opzione di colore secondario. |
| Stile di visualizzazione / stile linea / spessore linea | Come vengono disegnate le curve e con quale spessore. |
| Visualizzazione asse secondario | Opzione per visualizzare l'indicatore su un asse secondario. |

[SCREENSHOT: La finestra delle impostazioni dell'RSI che mostra il gruppo General (Input data, Length 14), il gruppo Average (Enable, Average Type, Length 20) e il gruppo Level settings (Overbought 70, Oversold 30) | dc-it-rsi-01.png]

## Suggerimenti ed errori comuni

- **Prima il contesto.** La stessa lettura di RSI a 75 è un candidato al fading in un range e una conferma di forza in un breakout appena partito. Decidi in che regime ti trovi — un filtro di trend come l'[[adx|ADX]] aiuta — prima di applicare la logica ipercomprato/ipervenduto.
- **La divergenza ha bisogno di conferma.** Una divergenza è un avvertimento, non un ingresso; aspetta che la struttura del prezzo (la rottura di un livello di swing) confermi prima di agire.
- **Non accorciare Length per "vedere i segnali prima".** Un RSI a 5 periodi produce letture estreme continue che significano ben poco; se ti servono segnali più veloci, accorcia piuttosto il timeframe del grafico e mantieni significativa la finestra dell'RSI.
- **Usa la linea Average per tagliare il rumore**: richiedere che l'RSI sia sopra/sotto la propria media filtra un numero sorprendente di falsi incroci della mediana.

## Articoli correlati

- [[stochastic-oscillator]]
- [[macd]]
- [[williams-r]]
- [[divergence-detector]]
- [[different-types-of-input]]
- [[indicator-layout]]