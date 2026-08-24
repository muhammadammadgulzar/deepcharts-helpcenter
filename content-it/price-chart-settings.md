---
title: "Impostazioni del grafico dei prezzi"
slug: "price-chart-settings"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "10 min read"
description: "Riferimento per la finestra Price Settings: parametri dei dati, ogni tipo di barra, modalità candele volume/delta, linea del prezzo, conto alla rovescia, sessioni e stile dei subgraph."
keywords: ["price settings", "days to load", "param type", "barre range", "renko", "vol bars", "point and figure", "barre delta", "contratto continuo", "exclude auction", "raggruppamento tick", "volume in larghezza", "colore basato sul delta", "sessione temporale personalizzata"]
source_hash: "72d46d62ee6f48ee"
ai_translated: true
source_hash: "72d46d62ee6f48ee"
---
La finestra **Price Settings** controlla come la serie dei prezzi stessa viene costruita e disegnata: quanta storia viene caricata, che tipo di barre si formano, se le candele codificano volume e delta, e gli elementi aggiuntivi sovrapposti al grafico come la linea del prezzo, il conto alla rovescia e i marcatori di sessione.

Questo articolo copre l'intera finestra, sezione per sezione, nell'ordine in cui appare nell'app. Se cerchi gli interruttori rapidi di visualizzazione (stile delle barre, sessione ETH, conto alla rovescia on/off), quelli vivono nel menu a discesa con le due candele e sono descritti in [[chart-display-options]] — molti di essi sono scorciatoie verso le impostazioni descritte qui.

## Che cos'è

Price Settings è la finestra di configurazione della serie **Price** di base — le candele stesse. Risponde a domande come "come carico più storia", "come passo a barre Renko o Range", "perché le mie candele hanno larghezze o colori diversi" e "come limito il grafico a una sessione personalizzata".

Il grafico visualizza le transazioni storiche di compratori e venditori sulla base del book di negoziazione, e questa finestra decide come quelle transazioni vengono raggruppate in barre e renderizzate.

## Quando usarla

- Cambiare quanti giorni di dati carica il grafico, o passare tra storia basata su tick e basata su minuti.
- Cambiare il tipo di barra: barre temporali, Range, Vol Bars, Volume, Trades, Renko, Point & Figure, Delta.
- Attivare candele con larghezza basata sul volume o colorate in base al delta (e regolarne finemente la colorazione).
- Configurare la linea dell'ultimo prezzo, il conto alla rovescia di chiusura barra, la visualizzazione della variazione % giornaliera, la linea di inizio giornata o una finestra di sessione personalizzata.
- Controllare la cucitura del rollover dei futures (**Continuous Contract**) e il filtraggio dei tick.

## Avvio rapido

1. Fai clic sull'icona con le due candele in alto a sinistra del grafico e scegli **⚙ Price Settings** in fondo al menu a discesa. (In alternativa: icona a grafico a barre → ingranaggio sulla riga **Price**.)
2. La finestra si apre con due schede: **Parameters** e **Subgraphs**. La colonna sinistra di **Parameters** elenca le sezioni: DATA, VOLUME/DELTA, PRICE LINE, COUNTDOWN, % VAR, LINE START DAY, CUSTOM TIME SESSION, DEEP RANGE.
3. Fai una modifica — per esempio imposta **Days To Load** a 30.
4. Fai clic su **Apply** per vedere il risultato sul grafico, poi su **Save**.

[SCREENSHOT: La finestra Price Settings aperta sulla scheda Parameters, con l'elenco delle sezioni a sinistra (DATA, VOLUME/DELTA, PRICE LINE, COUNTDOWN, % VAR, LINE START DAY, CUSTOM TIME SESSION, DEEP RANGE) e i campi GENERAL con Days To Load=10, Param Type=Minute, Param 1=5 | dc-it-price-chart-settings-01.png]

> **Nota:** Alcune modifiche (per esempio attivare/disattivare **Exclude Auction**) ricostruiscono l'intero grafico — lo spinner **Building chart** durante il ricaricamento è normale.

## Come leggerla

I parametri dei dati rispecchiano la barra del titolo del grafico: **Days To Load** è lo stesso valore del menu a discesa dell'intervallo dati (per esempio **10D - BT**, dove BT = Based on Tick e BM = Based on Minute), e **Param Type** più **Param 1** sono gli stessi del menu a discesa del timeframe (Param Type **Minute** con Param 1 **5** è un grafico a 5 minuti). Puoi modificarli in entrambi i punti — la finestra e la barra del titolo restano sincronizzate.

## Riferimento impostazioni

### Scheda Parameters — DATA (GENERAL)

| Impostazione | Cosa fa |
|---|---|
| **Days To Load** | Numero di giorni di storia da caricare nel grafico. Rispecchia il menu a discesa dell'intervallo dati nella barra del titolo. |
| **Param Type** | Il tipo di barra — vedi la tabella dei tipi di barra più sotto. |
| **Param 1** | Il parametro della barra per il tipo selezionato (es. 5 per un grafico a 5 minuti, tick per Range). |
| **Param 2** | Secondo parametro, usato dai tipi di barra che richiedono due valori — Vol Bars e Point & Figure. [CONFIRM: whether Param 2 has any effect on other bar types] |
| **Based on minute data** | Disattivato per impostazione predefinita: le barre si costruiscono dai dati tick per la massima accuratezza. Attivato: le barre si costruiscono dai dati a minuti. Gli intervalli di storia lunghi (da 3 mesi in su nel menu a discesa della barra del titolo) usano dati a minuti. |
| **Continuous Contract** | Come la storia dei futures viene cucita tra le scadenze contrattuali: **None**, **Date**, **Volume**, **Adjusted Date**, **Adjusted Volume**. Adjusted Date basa il rollover sulla scadenza temporale; le modalità Adjusted rimuovono il gap artificiale di prezzo al rollover. Vedi [[symbol-rollover]]. |
| **Exclude Auction (Tick Data)** | Disattivato per impostazione predefinita. Rimuove i dati delle aste di apertura/chiusura dai calcoli del grafico — il comportamento esatto del filtro può variare [CONFIRM: precisely which auction prints are excluded]. Stessa impostazione dell'interruttore **Auction filter** nel menu a discesa con le due candele; attivarlo/disattivarlo ricostruisce il grafico. |
| **Filter Bad Ticks** | Attivato per impostazione predefinita. Filtra i tick errati dalla serie [CONFIRM: what qualifies as a bad tick and when to disable]. |
| **Trade Type** | Predefinito **All**. [CONFIRM: other Trade Type options and what each restricts] |
| **RTH - only** | Disattivato per impostazione predefinita. Limita il grafico alle Regular Trading Hours — l'inverso dell'interruttore **ETH Session** nel menu a discesa con le due candele (stessa impostazione, due punti di accesso). |
| **Bid/Ask type** | Predefinito **Bid ask**. [CONFIRM: other options and their effect on the chart] |

#### Tipi di barra (Param Type)

| Tipo | Come si formano le barre |
|---|---|
| **Second / Minute / Daily / Weekly / Monthly** | Ogni barra copre un periodo di tempo fisso. |
| **Range** | Non dipende dal tempo — Param 1 definisce il range in tick di ogni singola barra (es. un range di 8 tick genera una nuova barra). |
| **Vol Bars** | Due parametri: **Target** — la soglia minima in tick che la barra deve raggiungere — e **Reverse** — i tick in direzione opposta necessari per avviare una nuova barra. |
| **Volume** | Ogni barra si chiude al raggiungimento di una soglia massima di volume — non in base a tempo o prezzo. |
| **Trades** | Basato sul numero massimo di transazioni per barra, invece che sui contratti scambiati. |
| **Renko** | Come Range, ma il movimento è misurato dal corpo della candela precedente (es. una nuova barra quando il prezzo si muove di 10 tick dal corpo precedente). |
| **Point Figure** | Due parametri: dimensione del box e ammontare di inversione. |
| **Delta** | Ogni barra si forma sul delta, in valore assoluto — la differenza tra acquisti e vendite aggressivi. Vedi [[orderflow-101]]. |

> **Suggerimento:** Sui tipi di barra non temporali, le funzioni ancorate al tempo (marcatori di sessione, indicatori basati sul tempo) si comportano diversamente, e il numero di barre non corrisponde più al tempo dell'orologio. Tienilo a mente quando confronti i grafici.

### Scheda Parameters — DATA (TICK GROUPING e AGGREGATED TRADES)

| Impostazione | Cosa fa |
|---|---|
| **Tick Grouping — Mode** | Predefinito **Automatic**; un campo **Fixed value** (predefinito 1) si usa con la modalità fissa. Raggruppa i tick in arrivo prima della visualizzazione [CONFIRM: exact tick-grouping behavior and when a fixed value helps]. |
| **Aggregated Trades — Price Mode** | Predefinito **Last**. [CONFIRM: available Price Mode options and their effect on aggregated trade pricing] |

### Scheda Parameters — VOLUME/DELTA

Queste impostazioni alimentano le modalità candele con larghezza basata sul volume e colorate in base al delta. Gli interruttori **Equi-Volume Bars** e **Delta-Volume Bars** nel menu a discesa con le due candele sono scorciatoie verso i due interruttori principali qui.

| Impostazione | Cosa fa |
|---|---|
| **Width based volume** | La larghezza della candela scala con il volume della barra rispetto alle altre candele — più larga = più volume. Ti fa vedere a colpo d'occhio se dietro un movimento c'era volume reale o se il book era sottile. |
| **% max width based volume** | Larghezza massima della candela usata dalla scalatura (100 come configurato nella finestra). |
| **Color based on delta** | Il colore della candela varia con il delta della barra — bassa intensità = delta basso, alta intensità = delta alto. |
| **Border color mode** | **Fixed delta**, **Fading delta** o **Bar direction** — la strategia di colorazione del bordo [CONFIRM: per-option behavior]. |
| **Delta input** | **Volume**, **Trades** o **Delta volume** — che cosa alimenta la colorazione a delta [CONFIRM: per-option behavior]. |
| **Color mode** | **Fixed** o **Fading color** [CONFIRM: exact visual difference]. |
| **Delta fading mode** | **Delta volume** o **Delta percentual** [CONFIRM: exact difference]. |
| **Std dev for coloring** | 2.00 come configurato [CONFIRM: how the standard deviation scales the coloring]. |

[SCREENSHOT: Un grafico con Width based volume e Color based on delta entrambi attivi — candele di larghezze visibilmente diverse e intensità di colore verde/viola — accanto alla sezione VOLUME/DELTA della finestra Price Settings | dc-it-price-chart-settings-02.png]

### Scheda Parameters — PRICE LINE

La linea tratteggiata che segna il prezzo corrente.

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Mostra la linea del prezzo corrente. Attiva per impostazione predefinita. |
| **Line Color / Line Style / Line Width** | Stile. Stili: **Solid, Dash, Dot, Dash dot, Dash dot dot** (predefinito Dash, larghezza 1). |
| **Extend line to left** | Disattivato per impostazione predefinita. Se attivo, la linea si estende su tutto il grafico invece che solo a destra dell'ultima barra. |

### Scheda Parameters — COUNTDOWN

Il riquadro con il conto alla rovescia verso la chiusura della barra corrente (un grafico a 5 minuti conta 5 minuti per candela).

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Mostra il riquadro del conto alla rovescia. Attivabile anche dal menu a discesa con le due candele (**Countdown timer**). |
| **Mode** | **Axis** — agganciato alla scala dei prezzi — o **Floating** — un riquadro libero che trascini ovunque sul grafico. |
| **Text Size / Text Color / BackColor** | Stile (dimensione testo 18 come configurato). |

> **Nota:** Su un feed in ritardo o inattivo il conto alla rovescia può restare a 00:00 — il feed non sta consegnando tick live; non c'è nulla di rotto.

### Scheda Parameters — % VAR

Mostra la variazione percentuale rispetto al prezzo di chiusura della sessione precedente (la stessa variazione % giornaliera riportata dal campo **%V**).

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Disattivato per impostazione predefinita. Mostra l'elemento di variazione % (spostabile). |
| **Text Size / Pos. Text Color / Neg. Text Color / BackColor** | Stile — variazione positiva nel colore positivo (verde per impostazione predefinita), negativa in quello negativo (rosso per impostazione predefinita). |

### Scheda Parameters — LINE START DAY

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Disattivato per impostazione predefinita. Disegna una linea verticale all'inizio di ogni sessione/giornata, tracciata nell'orario dell'exchange — su NQ sono le 18:00 ora di New York; con un fuso orario del grafico diverso cade comunque dove le 18:00 di NY vengono convertite. |
| **Line Color / Line Style / Line Width** | Stile (gli stessi cinque stili di linea della linea del prezzo). |

### Scheda Parameters — CUSTOM TIME SESSION (EXCHANGE TIME ZONE)

Limita il grafico a una finestra di sessione definita dall'utente — come l'interruttore ETH/RTH, ma con i tuoi orari. Esempio: **Ini Time** 09:30:00 e **End Time** 11:30:00 mostra solo le prime due ore dopo l'apertura. Gli orari sono nel fuso orario dell'exchange.

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Disattivato per impostazione predefinita. |
| **Ini Time / End Time** | Confini di inizio e fine della sessione. |
| **Use ini time as base for minute tf.** | [CONFIRM: what this toggle changes about minute-bar anchoring] |

Vedi [[understanding-market-structure-sessions]] per capire perché i confini di sessione contano.

### Scheda Parameters — DEEP RANGE

Filtri sulle barre per la funzione Deep Range [CONFIRM: purpose and behavior of the DEEP RANGE section]. I campi come appaiono: **TIME/VOLUME** — **Mode** (**Disabled**, **Time and volume**, **Time or volume**; predefinito Disabled), **Time-Minimum(s)**, **Time-Maximum(s)**, **Volume-Minimum**, **Volume-Maximum**; **WICK VOLUME** — **Custom mode** (predefinito None), **Ticks** (predefinito 1), **Minimum volume** (predefinito 1.00).

### Scheda Subgraphs

Controlla come la serie dei prezzi stessa viene disegnata ed etichettata sull'asse.

| Impostazione | Cosa fa |
|---|---|
| **Bull/Bear Border and Fill colors** | I colori delle candele per le barre rialziste e ribassiste. |
| **Subgraph Style** | **Line**, **Candlestick** (predefinito), **OHLC**, **Hidden**, **CandleBody** [CONFIRM: how CandleBody differs from Candlestick]. |
| **Auto Color** | **None** (predefinito), **Slope**, **+/-** — regole di colorazione automatica [CONFIRM: exact behavior of Slope and +/- modes]. |
| **Line Style / Line Width** | **Solid** (predefinito) o **Dash**, larghezza 1 — usati quando lo stile è Line. |
| **Short Name** | Testo dell'etichetta per la serie. |
| **Name Label / Value Label** | Mostra il nome della serie / il valore corrente sull'asse (predefiniti: nome disattivato, valore attivato). |
| **Name Background / Value Background** | Riempimento di sfondo dietro quelle etichette (predefiniti: nome disattivato, valore attivato). |
| **Chart color for marker** | Disattivato per impostazione predefinita [CONFIRM: exact effect]. |
| **Include on Auto Center** | Attivato per impostazione predefinita — se questa serie viene considerata quando il grafico centra automaticamente l'intervallo di prezzo visibile [CONFIRM: exact Auto Center behavior]. |

[SCREENSHOT: La finestra Price Settings sulla scheda Subgraphs con la riga Price selezionata, i campioni colore Bull/Bear, il menu a discesa Subgraph Style aperto con Line / Candlestick / OHLC / Hidden / CandleBody visibili | dc-it-price-chart-settings-03.png]

### Piè di pagina della finestra

- Selettore **Chart area** (in alto): in quale area del grafico viene renderizzata la serie.
- **Indicator Template** — salva o carica questa configurazione per riutilizzarla su altri grafici.
- Interruttore **Protected** [CONFIRM: what the Protected toggle protects].
- **Apply** / **Save** — Apply mostra le modifiche sul grafico; Save le memorizza [CONFIRM: exact difference between Apply and Save].

## Suggerimenti ed errori comuni

- **Le ricostruzioni del grafico dopo una modifica sono normali.** Le impostazioni a livello di dati (Exclude Auction, tipo di barra, giorni da caricare) attivano lo spinner **Building chart** — aspetta che finisca.
- **Grafico diverso da quello di un collega?** Confronta prima di tutto lo stato di **RTH - only** / sessione ETH, il tipo di barra e **Days To Load**.
- **Salti di prezzo al rollover del contratto su storie lunghe** — imposta **Continuous Contract** su una modalità Adjusted per rimuovere il gap artificiale.
- **Le candele hanno all'improvviso larghezze strane o colori slavati** — è attivo **Width based volume** o **Color based on delta** (magari attivato dal menu a discesa con le due candele come Equi-Volume/Delta-Volume Bars).
- **Carichi anni di storia?** Gli intervalli da 3 mesi in su sono basati sui minuti (BM). Il dettaglio a livello di tick è disponibile solo sugli intervalli più brevi basati sui tick.
- Le impostazioni modificate qui riguardano solo questo grafico. Per riutilizzare una configurazione, salvala tramite **Indicator Template** o salva l'intero grafico come template — vedi [[templates-workspaces]].

## Articoli correlati

- [[chart-window]]
- [[chart-display-options]]
- [[understanding-market-structure-sessions]]
- [[symbol-rollover]]
- [[orderflow-101]]
- [[different-types-of-input]]