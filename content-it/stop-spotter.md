---
title: "Stop Spotter"
slug: "stop-spotter"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "Rileva potenziali eventi di caccia agli stop loss combinando filtri su delta, volume, dimensione del corpo, movimento del prezzo e squilibri in un unico marcatore sul grafico con avvisi opzionali."
keywords: ["stop spotter", "stop hunt", "stop run", "caccia agli stop loss", "liquidity grab", "cascata di stop", "indicatore stop hunting", "stop sweep"]
source_hash: "d3fc9068b2c2d234"
ai_translated: true
source_hash: "d3fc9068b2c2d234"
---
L'indicatore Stop Spotter identifica potenziali eventi di caccia agli stop loss — momenti in cui il prezzo accelera dentro un cluster di ordini stop in attesa e innesca una cascata. Analizza insieme delta, volume, price action, dimensione del corpo della candela e squilibri, e stampa un marcatore sulla barra quando tutte le tue soglie sono soddisfatte contemporaneamente.

Poiché un autentico stop run lascia un footprint molto specifico (un picco improvviso di volume, aggressione unilaterale, squilibri consecutivi e un corpo direzionale veloce), richiedere più condizioni simultanee filtra le normali barre di momentum e ti lascia i candidati che vale la pena tradare.

## Che cos'è

Stop Spotter è un indicatore di segnali orderflow a condizioni multiple. Ciascuno dei suoi parametri principali è una soglia minima — per percentuale di delta, volume totale, incremento di volume, dimensione del corpo, movimento del prezzo, delta orizzontale, e numero e dimensione degli squilibri — e una barra viene marcata solo quando ogni condizione attiva è soddisfatta. Risponde alla domanda "questa barra si è comportata come una cascata di stop, o è solo una spinta normale?"

[SCREENSHOT: Finestra del grafico con Stop Spotter applicato — una candela direzionale veloce che rompe un recente swing low con un marcatore quadrato stampato sopra, barre circostanti non marcate, a mostrare che solo il candidato stop run è segnalato | dc-it-stop-spotter-01.png]

## Quando usarlo

- Operi le inversioni dopo i liquidity grab: uno stop run dentro un livello ovvio che si arresta subito è un classico setup in fade.
- Operi la continuazione attraverso gli stop: una cascata confermata può alimentare la gamba successiva, e il marcatore ti dice che il carburante era reale.
- Vuoi una definizione oggettiva, basata su soglie, di "stop hunt" invece di valutare le ombre a occhio.
- Vuoi essere avvisato in tempo reale quando scatta una condizione di caccia agli stop, senza osservare ogni barra.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Stop Spotter** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto all'indicatore.
4. Alla prima esecuzione mantieni le soglie predefinite — **Min. delta %** 25, **Min. volume** 1500, **Min. volume increase** 500, **Min. body ticks** 6 — e osserva con quale frequenza i marcatori compaiono sul tuo strumento.
5. Se i marcatori sono troppo frequenti, aumenta prima **Min. volume** e **Min. % imbalance**; se sono troppo rari, riduci **Min. body ticks**.
6. Facoltativamente attiva il suono di avviso e il popup del messaggio nelle opzioni di avviso, così i segnali ti raggiungono anche quando non stai guardando il grafico.

[SCREENSHOT: Finestra delle impostazioni di Stop Spotter con l'elenco dei parametri principali — Min. delta %, Min. volume, Min. volume increase, Min. body ticks, Min price ticks increase, Min. horizontal delta, Min. % imbalance, Min. number imbalance, Calculation Mode e Seconds To Close — con i valori predefiniti visibili | dc-it-stop-spotter-02.png]

> **Nota:** I valori predefiniti sono soglie calibrate, non verità universali. I minimi basati sul volume in particolare (**Min. volume**, **Min. volume increase**) dipendono fortemente dallo strumento e dalla sessione che operi, quindi aspettati di doverli regolare.

## Come leggerlo

- **Direzione del marcatore.** L'impostazione **Color** marca gli stop run al rialzo e **2° Color** quelli al ribasso, quindi il colore del marcatore ti dice di quale lato sono stati colpiti gli stop.
- **La posizione è tutto.** Un marcatore stampato mentre il prezzo spazza uno swing high/low evidente, un estremo di sessione o un livello molto osservato è molto più significativo di uno nel mezzo di un range. L'indicatore trova il footprint; il contesto lo metti tu.
- **Ciò che succede dopo decide il trade.** Se il prezzo inverte bruscamente dopo il marcatore, la cascata non ha trovato seguito — un potenziale esaurimento/fade. Se il prezzo continua a estendersi con nuova aggressione, gli stop sono diventati carburante per la continuazione.
- **Segnali anticipati.** Con **Seconds To Close** al valore predefinito di 15, l'indicatore esegue i calcoli quel numero di secondi prima della chiusura della barra, quindi un marcatore può apparire leggermente prima che la barra si completi. L'avviso anticipato ha come costo l'occasionale condizione che viene meno negli ultimi secondi.

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### Main Parameters

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Min. delta %** | 25 | Differenza minima tra volume in acquisto e in vendita, in percentuale, che segnala la pressione direzionale tipica dell'attività di caccia agli stop. |
| **Min. volume** | 1500 | Volume minimo che una barra deve scambiare per essere considerata nel rilevamento della caccia agli stop; filtra i periodi di bassa attività. |
| **Min. volume increase** | 500 | Incremento minimo di volume rispetto alle barre recenti richiesto per attivare un segnale; identifica picchi improvvisi di partecipazione. |
| **Min. body ticks** | 6 | Dimensione minima del corpo della candela in tick perché una barra si qualifichi; una cascata di stop produce un corpo direzionale forte. |
| **Min price ticks increase** | 1 | Movimento minimo del prezzo in tick richiesto per identificare un evento di caccia agli stop. |
| **Min. horizontal delta** | 60 | Differenza minima tra volume bid e ask a specifici livelli di prezzo; identifica il trading aggressivo concentrato. |
| **Min. % imbalance** | 200% | Squilibrio percentuale minimo tra volume bid e ask, che indica l'orderflow unilaterale tipico delle cascate di stop. |
| **Min. number imbalance** | 2 | Numero minimo di squilibri consecutivi richiesto per confermare l'evento, per una conferma più solida. |
| **Calculation Mode** | Close | Determina quale livello di prezzo viene usato per i calcoli e dove viene posizionato il segnale sul grafico. |
| **Seconds To Close** | 15 | Numero di secondi prima della chiusura della barra in cui l'indicatore esegue i calcoli, permettendo segnali anticipati. |

### Contract Calculation

Attiva sul grafico una visualizzazione del calcolo dei contratti accanto agli eventi rilevati, così puoi tradurre un segnale in dimensione della posizione.

| Impostazione | Cosa fa |
|---|---|
| **Max loss** | La perdita massima usata come input per il dimensionamento della posizione. |
| **Tick value divider** | Divisore applicato con il valore del tick dello strumento nel calcolo della dimensione. |
| **Font size** | Dimensione del testo del calcolo. |
| **Back color / text colors** | Colori di sfondo e del testo della visualizzazione del calcolo. |

### Visual Settings

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Subgraph Style** | Square | Forma del marcatore per gli eventi rilevati: quadrato, cerchio, rombo, croce o triangolo. |
| **Color** | — | Colore del marcatore per gli stop run al rialzo. |
| **2° Color** | — | Colore del marcatore per gli stop run al ribasso. |
| **Line Style / Line Width** | — | Stile e spessore del bordo dei marcatori. |
| **Short Name** | — | Etichetta personalizzata per l'indicatore sul grafico. |

### Alert Options

| Impostazione | Cosa fa |
|---|---|
| **Alert sound** | Riproduce una notifica sonora quando le condizioni vengono rilevate. |
| **Message popup** | Mostra un popup sullo schermo quando le condizioni vengono rilevate. |

## Suggerimenti ed errori comuni

- **Regola una soglia alla volta.** Con otto minimi che interagiscono, cambiarne diversi insieme rende impossibile capire quale modifica ha cambiato il numero dei tuoi segnali. Regola, osserva una sessione, poi regola di nuovo.
- **Non trattare ogni marcatore come un segnale di inversione.** Uno stop run è un evento di liquidità, non un'indicazione di direzione. Le cascate si risolvono sia come esaurimento sia come continuazione — leggi la reazione e conferma con il tape o un footprint come [[deep-print]].
- **Le soglie di volume sono specifiche dello strumento.** 1500 contratti significano una cosa completamente diversa su un future su indice principale rispetto a un contratto sottile. Ricalibra **Min. volume** e **Min. volume increase** ogni volta che cambi strumento.
- **Osserva i segnali vicino ai pool di liquidità evidenti.** Massimi/minimi del giorno precedente, estremi overnight e numeri tondi sono i punti dove gli stop si accumulano; combina il marcatore con uno strumento di livelli come [[important-levels]] per pre-marcare i terreni di caccia.

## Articoli correlati

- [[orderflow-101]]
- [[understanding-icebergs-absorption]]
- [[big-trades]]
- [[imbalance-tracker]]
- [[different-types-of-input]]
- [[indicator-layout]]