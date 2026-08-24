---
title: "Regression Channel"
slug: "regression-channel"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Riferimento per l'indicatore Regression Channel in DeepCharts: linea centrale e bande di deviazione, modalità a barre e Zig Zag, e impostazioni di plot per ogni linea."
keywords: ["canale di regressione lineare", "bande di regressione", "canale deviazione standard", "indicatore canale di trend", "canale zig zag"]
source_hash: "b3aa487fe1357861"
ai_translated: true
source_hash: "b3aa487fe1357861"
---
Il Regression Channel è uno strumento usato per identificare trend e aree di supporto e resistenza. Disegna un canale derivato dalla regressione lineare: una linea di trend centrale adattata al prezzo, affiancata da bande superiore e inferiore spostate di un numero scelto di deviazioni standard.

Mentre l'indicatore [[linear-regression]] traccia una singola linea mobile, il Regression Channel inquadra l'intero movimento — mostrando la direzione del trend, il suo centro statistico e la zona in cui è rimasta la maggior parte dell'azione del prezzo.

## Che cos'è

Il Regression Channel risponde alla domanda: qual è il trend attuale, e quanto lontano da esso può vagare il prezzo prima che questo significhi qualcosa? La linea centrale è la regressione di miglior adattamento sulla finestra di osservazione; le bande si trovano un numero configurabile di deviazioni standard sopra e sotto di essa. Un prezzo vicino alla linea centrale è al fair value del trend; un prezzo su una banda è statisticamente tirato, e favorisce una reversione verso il centro oppure — se la rompe e tiene — un cambiamento di trend.

[SCREENSHOT: Un grafico a candele con il Regression Channel applicato — linea centrale inclinata verso l'alto con bande di deviazione superiore e inferiore che contengono il trend, con il prezzo che tocca la banda inferiore e ritorna verso il centro | dc-it-regression-channel-01.png]

## Quando usarlo

- Per inquadrare un trend in modo oggettivo: la pendenza del canale indica la direzione, la sua larghezza la volatilità.
- Per tradare i pullback dentro un trend — ingressi vicino alla banda inferiore del canale in pendenza rialzista, uscite o short vicino alla banda superiore in pendenza ribassista.
- Per rilevare le rotture di trend: un prezzo che chiude e resta fuori dal canale suggerisce che la regressione che definiva il movimento non è più adeguata.
- Per abbinarlo alla struttura degli swing tramite la modalità Zig Zag, così il canale si ancora agli swing rilevati invece che a un numero fisso di barre.

## Avvio rapido

1. Apri un grafico — vedi [[first-chart]].
2. Fai clic sull'icona a grafico a barre nella fila di icone in alto a sinistra del grafico per aprire il pannello **Indicators**, poi fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca **Regression Channel** e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona a ingranaggio per aprire le sue impostazioni.
5. Configurazione di partenza: mantieni **Bars** al valore predefinito 100 e **Value Dev. Std.** al valore predefinito 1.00. Allarga la deviazione (per esempio verso 2.00) se vuoi che le bande contengano una parte maggiore dell'azione del prezzo e segnalino solo gli allungamenti più grandi.

[SCREENSHOT: Finestra delle impostazioni del Regression Channel che mostra la sezione General con Mode, Value Dev. Std. = 1.00 e Bars = 100, più la sezione Zig Zag e le sezioni di plot MID/UP/DN sotto | dc-it-regression-channel-02.png]

## Come leggerlo

- **Pendenza della linea centrale** — il trend. Pendenza rialzista, favorisci i long; ribassista, favorisci gli short; quasi piatta, tratta il canale come un range.
- **Posizione dentro il canale** — un prezzo vicino alla linea centrale è al fair value del trend adattato; un prezzo su una banda è a un estremo statistico per la finestra.
- **Tocchi delle bande** — in un trend sano, i tocchi della banda dal lato del trend (banda inferiore in un uptrend) sono opportunità di pullback; ripetuti fallimenti nel raggiungere la banda opposta mostrano un trend che si indebolisce.
- **Rotture del canale** — una chiusura decisa fuori dal canale che tiene significa che il trend adattato sta fallendo; aspettati un'accelerazione nella direzione della rottura oppure un nuovo regime a cui il canale si riadatterà.
- **Colorazione del trend** — le linee MID, UP e DN hanno ciascuna un colore positivo e uno negativo, quindi la colorazione stessa del canale ti dice quale direzione ha attualmente l'adattamento.

## Riferimento impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Mode** | Seleziona come opera il canale. [CONFIRM: the exact list of Mode options and what each does — the live article names the setting without enumerating its values] |
| **Value Dev. Std.** | Numero di deviazioni standard per le bande superiore e inferiore. Predefinito: 1.00. Valori più alti collocano le bande più lontano dalla linea centrale. |
| **Bars** | Numero di barre usate per il calcolo della regressione. Predefinito: 100. |

### Zig Zag

| Impostazione | Cosa fa |
|---|---|
| **Zig Zag Mode** | Abilita il rilevamento dei pattern di swing, così il canale lavora sugli swing dello Zig Zag. |
| **Zig Zag Abs.Rev.** | Soglia di inversione in tick per il rilevamento degli swing. Predefinito: 0.50. |
| **Zig Zag Tick Rev./Highest-Lowest** | Valore di inversione per il calcolo degli swing. Predefinito: 22. |

### MID — plot della linea centrale

| Impostazione | Cosa fa |
|---|---|
| **Line Width** | Spessore della linea centrale. Predefinito: 2. |
| **Line Style** | Solid, Dashed, Dotted e altri formati. |
| **Positive Color** | Colore quando il trend adattato è rialzista. |
| **Negative Color** | Colore quando il trend adattato è ribassista. |

### UP — plot della linea superiore

| Impostazione | Cosa fa |
|---|---|
| **Line Width** | Spessore della banda superiore. Predefinito: 2. |
| **Line Style** | Solid, Dashed, Dotted e altri formati. |
| **Positive / Negative Color** | Colorazione in base al trend per la banda superiore. |

### DN — plot della linea inferiore

| Impostazione | Cosa fa |
|---|---|
| **Line Width** | Spessore della banda inferiore. Predefinito: 2. |
| **Line Style** | Opzioni di formato linea disponibili. |
| **Positive / Negative Color** | Colorazione in base al trend per la banda inferiore. |

## Suggerimenti ed errori comuni

- **Adatta Bars al movimento che stai inquadrando.** 100 barre adattate su due trend distinti producono un canale medio senza significato; accorcia la finestra, oppure usa lo **Zig Zag Mode** per ancorare il canale agli swing rilevati.
- **Una deviazione standard contiene meno di quanto ti aspetti.** Al valore predefinito 1.00, il prezzo scambierà regolarmente fuori dalle bande in condizioni normali — e questo da solo non è un segnale. Alza **Value Dev. Std.** se vuoi che i tocchi delle bande siano eventi più rari e significativi.
- **Non fare fading su ogni tocco di banda.** In un trend forte il prezzo può cavalcare la banda opposta per tratti prolungati; controlla la pendenza della linea centrale prima di trattare una banda come livello di inversione.
- Confrontalo con [[zig-zag]] per capire il rilevamento degli swing su cui si basa lo **Zig Zag Mode**, e con [[standard-deviation]] per la misura di dispersione dietro le bande.

## Articoli correlati

- [[linear-regression]]
- [[zig-zag]]
- [[standard-deviation]]
- [[bollinger-bands]]
- [[different-types-of-input]]
- [[indicator-layout]]