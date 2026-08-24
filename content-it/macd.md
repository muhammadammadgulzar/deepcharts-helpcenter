---
title: "MACD"
slug: "macd"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Cosa mostrano la linea MACD, la signal line e l'istogramma, come leggere incroci e divergenze, e ogni impostazione del MACD in DeepCharts."
keywords: ["moving average convergence divergence", "istogramma macd", "signal line macd", "incrocio macd", "divergenza macd", "mcad"]
source_hash: "9a84d1b50cebabc9"
ai_translated: true
source_hash: "9a84d1b50cebabc9"
---
Il MACD (Moving Average Convergence Divergence) trasforma la relazione tra due medie mobili esponenziali in una rappresentazione compatta del momentum: una linea MACD, una signal line e un istogramma. Sviluppato da Gerald Appel negli anni '70, resta uno degli indicatori più utilizzati nell'analisi tecnica.

Questo riferimento copre come aggiungere il MACD a un grafico DeepCharts, come leggerne le tre componenti e ogni opzione della sua finestra di impostazioni.

## Che cos'è

Il MACD risponde a una sola domanda: il momentum di breve termine si sta rafforzando o indebolendo rispetto al trend di più lungo periodo? Confronta una media mobile esponenziale veloce (12 periodi per impostazione predefinita) con una lenta (26 periodi per impostazione predefinita). La linea MACD segue la distanza tra le due medie, la signal line è una compagna smussata della linea MACD e l'istogramma mostra il divario tra le due — un colpo d'occhio sul momentum che si accumula o si esaurisce.

Poiché è costruito interamente da medie mobili, il MACD è un indicatore ritardato: conferma i cambiamenti di momentum anziché prevederli.

## Quando usarlo

- Vuoi un unico pannello che mostri sia la direzione del trend sia la forza del momentum.
- Ti serve una conferma prima di agire su un livello di prezzo o su un pattern — un incrocio del MACD nella stessa direzione aggiunge peso.
- Stai cercando divergenze: il prezzo che segna un nuovo estremo mentre il momentum non lo fa.
- Vuoi una definizione oggettiva di "il momentum ha girato" (un incrocio di linee) invece di andare a occhio sulle candele.

## Avvio rapido

1. Apri un grafico e premi **Ctrl I** — oppure fai clic sull'icona a istogramma nella toolbar del grafico, poi su **Indicators** — per aprire l'**Indicator List**.
2. Digita "MACD" nella casella di ricerca e fai clic su **+** accanto all'indicatore. Il MACD viene disegnato in un'area del grafico dedicata sotto le barre dei prezzi (vedi [[indicator-layout]] per spostarla o ridimensionarla).
3. Fai clic sull'icona dell'ingranaggio sulla riga dell'indicatore per aprirne le impostazioni.
4. Per una prima configurazione, mantieni i valori predefiniti: **Fast EMA Period** 12, **Slow EMA Period** 26 e **Input Data** impostato su Close. Puoi provare queste scelte nel MACD interattivo qui sotto — trascina gli slider fast, slow e signal e osserva come rispondono l'istogramma e il conteggio degli incroci.

[WIDGET: macd-lab]

## Come leggerlo

- **Linea dello zero.** Un MACD sopra lo zero significa che la media veloce è sopra quella lenta — il momentum è sul lato rialzista. Sotto lo zero, sul lato ribassista.
- **Incroci.** La linea MACD che incrocia sopra la signal line segnala il momentum che gira al rialzo; l'incrocio al di sotto segnala la svolta al ribasso. Gli incroci che avvengono lontano dalla linea dello zero pesano più di quelli proprio a ridosso.
- **Istogramma.** Ogni barra è la distanza tra la linea MACD e la signal line. Barre che si accorciano indicano che il movimento sta perdendo momentum, e spesso precedono un incrocio di qualche barra.
- **Divergenza.** Il prezzo segna un nuovo massimo mentre il MACD segna un massimo più basso (o l'immagine speculare sui minimi) — il movimento procede con meno momentum ed è più vulnerabile a un'inversione.

[SCREENSHOT: Primo piano dell'area MACD del grafico con l'istogramma che si accorcia fino a un incrocio con la signal line, con la barra dell'incrocio evidenziata | dc-it-macd-01.png]

## Riferimento delle impostazioni

Apri la finestra di dialogo dall'icona dell'ingranaggio sulla riga dell'indicatore nel pannello **Indicators**.

### Parametri

| Impostazione | Cosa fa |
|---|---|
| **Fast EMA Period** | Lunghezza della media mobile veloce. Predefinito: 12. Riducila per segnali più precoci ma più rumorosi. |
| **Slow EMA Period** | Lunghezza della media mobile lenta. Predefinito: 26. Aumentala per concentrarti sugli swing più lunghi. |
| **Input Data** | La serie di dati alimentata nel calcolo — Close, Open, High, Low o Volume. Close è la scelta standard; vedi [[different-types-of-input]] per quando hanno senso le altre. |
| **Smooth** | Smussamento applicato alla linea MACD. Mantieni il valore predefinito a meno che la linea non sia troppo frastagliata da leggere sui timeframe veloci. |

[CONFIRM: whether the signal-line period is configurable in this dialog and what its default value is]

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| **Histogram color** | Colore delle barre dell'istogramma. |
| **Signal color** | Colore della signal line. |
| **MACD color** | Colore della linea MACD. |
| **Secondary color** | Colore aggiuntivo opzionale per la visualizzazione dell'indicatore. |
| **Subgraph style** | Come le serie vengono disegnate nell'area del grafico. |
| **Line style** | Stile di rendering della linea MACD e della signal line. |
| **Line width** | Spessore delle linee. |
| **Use secondary axis** | Traccia l'indicatore su un asse dei valori secondario. |

[SCREENSHOT: Finestra di dialogo delle impostazioni del MACD aperta sulla sezione Parameters, con Fast EMA Period 12, Slow EMA Period 26, il menu a discesa Input Data e l'opzione Smooth | dc-it-macd-02.png]

## Suggerimenti ed errori comuni

- **Il MACD ritarda per costruzione.** È costruito da medie mobili, quindi usalo per confermare un movimento che hai già motivo di attenderti, non per prevederlo.
- **Il mercato laterale uccide gli incroci.** In un mercato laterale il MACD si stringe intorno alla linea dello zero e genera falsi segnali. Filtra prendendo solo gli incroci dal lato dello zero coerente con il trend, oppure abbinalo a un filtro di trend con [[moving-average]].
- **Un cambio di direzione dell'istogramma non è un incrocio.** L'istogramma cambia direzione prima che le linee si incrocino davvero — trattalo come un preavviso, non come un segnale completato.
- **I valori assoluti non sono confrontabili tra simboli.** Il MACD è misurato in unità di prezzo, quindi una lettura di 5 su uno strumento non ti dice nulla su una lettura di 5 su un altro. Leggilo solo all'interno di un singolo grafico.

## Articoli correlati

- [[rsi|Relative Strength Index (RSI)]]
- [[stochastic-oscillator]]
- [[momentum]]
- [[moving-average]]
- [[different-types-of-input]]
- [[indicator-layout]]