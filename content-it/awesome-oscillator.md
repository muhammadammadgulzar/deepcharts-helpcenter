---
title: "Awesome Oscillator"
slug: "awesome-oscillator"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Come l'Awesome Oscillator confronta una media mobile veloce e una lenta per mostrare i cambi di momentum come istogramma, con ogni impostazione dell'AO in DeepCharts."
keywords: ["AO", "indicatore awesome oscillator", "awesome oscillator bill williams", "istogramma ao", "awsome oscillator"]
source_hash: "8e43ddfe0701fafe"
ai_translated: true
source_hash: "8e43ddfe0701fafe"
---
L'Awesome Oscillator (AO), reso popolare dal trader Bill Williams, valuta il momentum del mercato contrapponendo una media mobile a breve termine a una a più lungo termine — 5 e 34 periodi per impostazione predefinita. Il risultato è disegnato come un istogramma che fluttua attorno a una linea zero, rendendo visibili a colpo d'occhio i cambi di momentum.

In DeepCharts, l'AO viene reso in un'area del grafico dedicata con auto-colorazione basata sulla pendenza e una linea media (di segnale) opzionale.

## Che cos'è

L'AO risponde: da che parte pende il momentum, e sta accelerando o svanendo? Quando la media corta sale sopra quella lunga, l'istogramma è sopra lo zero — momentum rialzista. Quando scende sotto, l'istogramma è sotto lo zero — momentum ribassista. Le variazioni barra su barra mostrano l'accelerazione: barre che crescono allontanandosi dallo zero significano che il movimento sta guadagnando velocità, barre che si riducono verso lo zero significano che la sta perdendo. I trader lo usano per identificare cambi di momentum, forza del trend, potenziali inversioni e accelerazioni rialziste o ribassiste.

## Quando usarlo

- Vuoi il momentum come istogramma da leggere con la coda dell'occhio mentre ti concentri sul prezzo.
- Ti serve un marcatore oggettivo del regime di momentum — su quale lato dello zero si trova l'istogramma.
- Vuoi informazioni sull'accelerazione: se la spinta attuale è più forte o più debole della precedente.
- Segui i setup in stile Bill Williams (attraversamento della linea zero, twin peaks, saucer) definiti proprio su questo indicatore.

## Avvio rapido

1. Apri un grafico e premi **Ctrl I** — oppure fai clic sull'icona a barre nella toolbar del grafico, poi su **Indicators** — per aprire l'**Indicator List**.
2. Cerca "Awesome" e fai clic su **+** per aggiungere l'oscillatore. Viene reso in un'area del grafico dedicata sotto le barre dei prezzi (vedi [[indicator-layout]]).
3. Fai clic sull'icona a ingranaggio nella riga dell'indicatore per aprirne le impostazioni.
4. Per iniziare mantieni i valori predefiniti: **Average Type** Simple, **AO Length 1** 5, **AO Length 2** 34. Lascia attiva l'auto-colorazione basata sulla pendenza, così le barre in salita e in discesa sono colorate in modo diverso.

[SCREENSHOT: Un grafico con l'istogramma dell'Awesome Oscillator in un'area dedicata sotto il prezzo, barre colorate in base alla pendenza, che passa da sotto a sopra la linea zero durante un rally | dc-it-awesome-oscillator-01.png]

## Come leggerlo

- **Linea zero.** Istogramma sopra lo zero: la media veloce è sopra quella lenta e il momentum è sul lato rialzista. Sotto lo zero: ribassista. Un attraversamento della linea zero segna un cambio di regime del momentum.
- **Colore e pendenza delle barre.** Una barra in salita (colorata come tale dall'auto-colorazione a pendenza) significa che il momentum si sta costruendo in quella direzione; una barra in discesa significa che sta svanendo — anche mentre l'istogramma resta sullo stesso lato dello zero.
- **Twin peaks.** Due picchi dell'istogramma sullo stesso lato dello zero, il secondo meno profondo del primo, avvertono che la spinta si sta indebolendo — un classico pattern di divergenza dell'AO.
- **Saucer.** Un breve avvallamento di barre in discesa seguito da una ripresa di barre in salita, tutto su un lato dello zero, è un segnale di continuazione nella direzione del momentum prevalente.

[SCREENSHOT: Primo piano dell'area del grafico dell'AO che mostra un pattern twin peaks — due picchi sopra lo zero con il secondo più basso, seguiti da un attraversamento sotto la linea zero | dc-it-awesome-oscillator-02.png]

## Riferimento delle impostazioni

Apri la finestra dall'icona a ingranaggio nella riga dell'indicatore nel pannello **Indicators**.

### Parametri delle medie

| Impostazione | Che cosa fa |
|---|---|
| **Average Type** | Il metodo di media mobile usato nel calcolo. Predefinito: Simple. |
| **AO Length 1** | Il periodo corto. Predefinito: 5. |
| **AO Length 2** | Il periodo lungo. Predefinito: 34. |
| **Average Length** | Lunghezza dello smussamento per la linea media (di segnale) opzionale quando è attivata. |

### Livelli

| Impostazione | Che cosa fa |
|---|---|
| **Middle Level** | Posizione della linea di riferimento centrale. Predefinito: 50. |
| **Lower Level** | Posizione della linea di riferimento inferiore. Predefinito: 20. |
| **High Level** | Posizione della linea di riferimento superiore. Predefinito: 80. |

I colori e lo spessore delle linee di livello sono personalizzabili. I valori dell'AO sono misurati in unità di prezzo e variano per strumento, quindi regola queste linee di riferimento sulla scala del simbolo che tradi.

### Subgraphs

| Impostazione | Che cosa fa |
|---|---|
| **Awesome Oscillator** | La serie principale, disegnata in formato istogramma. Le opzioni includono il colore, un colore secondario, l'auto-colorazione basata sulla direzione della pendenza e lo stile della linea. |
| **Average** | La linea di segnale opzionale, disegnata come linea con le proprie opzioni di aspetto. |

### Altre opzioni di visualizzazione

| Impostazione | Che cosa fa |
|---|---|
| **Name and value labels** | Mostra o nasconde il nome dell'indicatore e il valore attuale nell'area del grafico. |
| **Background settings** | Stile dello sfondo dell'area del grafico dell'indicatore. |
| **Auto-center** | Include l'indicatore nel centraggio automatico dell'area del grafico. |

[SCREENSHOT: La finestra delle impostazioni dell'Awesome Oscillator che mostra Average Type Simple, AO Length 1 = 5, AO Length 2 = 34 e la sezione subgraph con lo stile a istogramma e l'opzione di auto-colorazione a pendenza | dc-it-awesome-oscillator-03.png]

## Suggerimenti ed errori comuni

- **Leggi la pendenza, non la dimensione.** I valori dell'AO sono in unità di prezzo e differiscono enormemente tra strumenti. La direzione barra su barra (che la colorazione a pendenza mostra) porta il segnale; l'altezza assoluta non è trasferibile tra simboli.
- **L'accoppiata 5/34 è la definizione.** I classici pattern dell'AO — twin peaks, saucer, attraversamento della linea zero — sono stati definiti sulle impostazioni 5/34 a media semplice. Cambia le lunghezze e cambi il significato di ciascuno di quei pattern.
- **Gli attraversamenti della linea zero generano falsi segnali nel chop.** In un mercato laterale l'istogramma staziona attorno allo zero e si inverte ripetutamente. Usa gli attraversamenti come marcatori di regime nei mercati in movimento, non come ingressi autonomi nelle fasi laterali.
- **Attiva la linea media per trigger più puliti.** Se le inversioni dell'istogramma grezzo sono troppo rapide per il tuo stile, la linea media opzionale offre un riferimento più fluido da incrociare.

## Articoli correlati

- [[macd]]
- [[momentum]]
- [[rsi|Relative Strength Index (RSI)]]
- [[stochastic-oscillator]]
- [[different-types-of-input]]
- [[indicator-layout]]