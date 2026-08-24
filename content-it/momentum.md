---
title: "Momentum"
slug: "momentum"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Come l'indicatore Momentum misura la velocità del movimento dei prezzi, come leggere accelerazione e divergenza, e ogni impostazione in DeepCharts."
keywords: ["indicatore momentum", "MOM", "velocità del prezzo", "rapidità del prezzo", "oscillatore momentum", "momentun"]
source_hash: "15b9b6b9af98049f"
ai_translated: true
source_hash: "15b9b6b9af98049f"
---
L'indicatore Momentum misura la velocità — o il ritmo — dei movimenti di prezzo di un asset: quanto rapidamente il prezzo sta cambiando rispetto ai periodi precedenti. È uno degli oscillatori più semplici disponibili, ed è proprio per questo che è utile per individuare le fasi di accelerazione e decelerazione che le candele da sole possono nascondere.

In DeepCharts, Momentum disegna una singola linea in una propria area del grafico, con una linea di media mobile opzionale che puoi abilitare come smussatore o linea di segnale.

## Che cos'è

Momentum risponde alla domanda: questo movimento sta accelerando o rallentando? L'indicatore valuta quanto il prezzo è cambiato su un lookback definito (**Length**, 14 periodi di default). Quando il prezzo avanza a un ritmo crescente la linea sale; quando l'avanzata rallenta — anche mentre il prezzo sta ancora facendo nuovi massimi — la linea si appiattisce o gira verso il basso. Quella perdita precoce di velocità è il valore principale dell'indicatore: il momentum di solito si arresta prima del prezzo.

## Quando usarlo

- Vuoi misurare la forza del trend corrente, non solo la sua direzione.
- Vuoi un avviso precoce di un'inversione — una linea di momentum che si affievolisce mentre il prezzo continua a spingere.
- Devi individuare le fasi di accelerazione e decelerazione, ad esempio attorno a un breakout.
- Vuoi una lettura del momentum grezza e non smussata da abbinare a un indicatore più lento come il [[macd]].

## Avvio rapido

1. Apri un grafico e premi **Ctrl I** — oppure fai clic sull'icona a grafico a barre nella toolbar del grafico, poi su **Indicators** — per aprire l'**Indicator List**.
2. Cerca "Momentum" e fai clic su **+** per aggiungerlo. L'indicatore viene disegnato in una propria area del grafico sotto le barre di prezzo (vedi [[indicator-layout]]).
3. Fai clic sull'icona a ingranaggio sulla riga dell'indicatore per aprirne le impostazioni.
4. Per iniziare mantieni i valori di default: **Input Data** Close, **Length** 14. Se la linea è troppo nervosa per il tuo timeframe, passa alla sezione **Average**, abilita la linea di media e lasciala su Simple con 20 periodi.

[SCREENSHOT: Un grafico con l'indicatore Momentum nella sua area sotto il prezzo, la linea del momentum che sale ripidamente durante un'avanzata del prezzo e la sua linea di media opzionale abilitata | dc-it-momentum-01.png]

## Come leggerlo

- **Prima di tutto la pendenza.** Una linea che sale significa che il prezzo sta cambiando più velocemente di quanto facesse nella finestra di lookback; una linea che scende significa che il ritmo si sta affievolendo. Direzione e pendenza portano l'informazione — il valore assoluto dipende dalla scala di prezzo del simbolo.
- **Il momentum anticipa il prezzo alle svolte.** I picchi di momentum si formano spesso prima dei picchi di prezzo. Una linea che si appiattisce mentre il prezzo sale a fatica è un avvertimento di decelerazione.
- **Incroci con la linea di media.** Con la media abilitata, l'incrocio della linea del momentum con la sua media è un trigger più pulito rispetto alla lettura delle oscillazioni grezze.
- **Divergenza.** Il prezzo fa un nuovo massimo mentre la linea del momentum fa un massimo più basso (o il caso speculare sui minimi) — il movimento sta girando con meno velocità ed è più vulnerabile a un'inversione.

## Riferimento delle impostazioni

Apri la finestra di dialogo dall'icona a ingranaggio sulla riga dell'indicatore nel pannello **Indicators**.

### Parameters — General

| Impostazione | Cosa fa |
|---|---|
| **Input Data** | La serie di dati usata nel calcolo — Close, Open, High, Low o Volume. Close è lo standard; selezionando Volume lo stesso calcolo viene applicato al volume invece che al prezzo. Vedi [[different-types-of-input]]. |
| **Length** | Numero di periodi per il calcolo del momentum. Default: 14. Lunghezze più corte reagiscono più in fretta ma aggiungono rumore; lunghezze maggiori mostrano lo swing più ampio. |

### Parameters — Average

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Attiva o disattiva la linea di media (segnale). |
| **Average Type** | Metodo di media mobile per la linea di segnale: Simple, Exponential, Triangular o Weighted. |
| **Periods** | Numero di periodi per il calcolo della media. Default: 20. |

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| **Momentum line color** | Colore della linea principale del momentum. |
| **Average line color** | Colore della linea di media opzionale. |
| **Secondary color** | Colore aggiuntivo opzionale per la visualizzazione. |
| **Display style** | Come vengono disegnate le serie nell'area del grafico. |
| **Line style / Line width** | Stile di rendering e spessore delle linee. |
| **Use secondary axis** | Traccia l'indicatore su un asse dei valori secondario. |

[SCREENSHOT: La finestra delle impostazioni di Momentum con Input Data impostato su Close, Length 14, e la sezione Average con Average Type e Periods 20 | dc-it-momentum-02.png]

## Suggerimenti ed errori comuni

- **Il momentum è illimitato.** Non esiste una soglia fissa di ipercomprato o ipervenduto — confronta la lettura corrente con gli estremi recenti del simbolo stesso, non con un numero universale.
- **Non confrontare i valori tra simboli.** La lettura scala con il prezzo dello strumento, quindi i confronti tra simboli sono privi di significato; se ti serve una versione normalizzata, usa invece [[rate-of-change]].
- **Usa la linea di media come trigger.** Il momentum grezzo genera falsi segnali sui grafici veloci; l'incrocio del momentum con la sua media abilitata filtra la maggior parte del rumore.
- **Adatta la Length al tuo periodo di detenzione.** Un momentum a 14 periodi su un grafico a 1 minuto descrive l'ultimo quarto d'ora — non leggerlo come informazione di trend per un'operazione swing.

## Articoli correlati

- [[rate-of-change|Rate of Change (ROC)]]
- [[macd]]
- [[rsi|Relative Strength Index (RSI)]]
- [[awesome-oscillator]]
- [[different-types-of-input]]
- [[indicator-layout]]