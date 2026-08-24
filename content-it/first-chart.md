---
title: "Apri il tuo primo grafico"
slug: "first-chart"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Apri un nuovo grafico dei prezzi, scegli uno strumento e capisci cosa fa il grafico mentre si carica."
keywords: ["aprire grafico", "nuovo grafico", "grafico dei prezzi", "selezionare strumento", "building chart", "il grafico non si apre", "nuovo price chart"]
source_hash: "a5072e958eca0e50"
ai_translated: true
source_hash: "a5072e958eca0e50"
---
Alla fine avrai un grafico dei prezzi live aperto, che si aggiorna, impostato sul timeframe che desideri.

Aprire un grafico in DeepCharts richiede due clic, ma la prima volta che lo fai ci sono alcune cose che vale la pena capire: da dove arriva la lista degli strumenti, perché il grafico impiega qualche secondo a costruirsi e cosa controllano i tre menu a discesa nella barra del titolo del grafico.

## Prima di iniziare

- DeepCharts installato e attivato — [[install-deepcharts]]
- Un feed dati connesso — [[connect-data-feed]], oppure il [[free-delayed-data-feed|feed gratuito ritardato di 15 minuti]] se non hai ancora credenziali. (I grafici funzionano anche con dati registrati tramite [[replay-data]].)
- Gli exchange su cui operi mappati sul tuo feed — normalmente ci pensa la procedura guidata di avvio; [[symbol-manage]] lo copre in dettaglio

## Passaggi

1. Verifica che il tuo feed sia connesso: il selettore del feed in alto a destra nella barra principale mostra il nome della tua connessione con un **pallino verde**. Se riporta **Select a connection**, apri il menu a discesa e fai clic sulla tua connessione salvata.

[SCREENSHOT: Il selettore del feed in alto a destra nella barra principale che mostra il nome di un feed connesso con un pallino di stato verde, con il menu a discesa aperto che elenca le connessioni salvate e la voce Feed Settings | dc-it-first-chart-01.png]

2. Fai clic su **New → Price Chart** nella barra principale.

[SCREENSHOT: Il menu New aperto sulla barra principale con Price Chart evidenziato (altre voci visibili: Adv. Time And Sales, Book, Correlation Viewer, Profile Chart, Scanner) | dc-it-first-chart-02.png]

3. Si apre la finestra **Select Instrument**. Scegli un exchange nella barra laterale sinistra (per esempio **CME**), oppure usa il campo **Type to filter** per cercare. Fai clic sul tuo simbolo — per esempio **NQ** (MINI NASDAQ) — poi fai clic su **Select**.

[SCREENSHOT: La finestra Select Instrument con l'exchange CME selezionato nella barra laterale, la lista dei simboli con NQ MINI NASDAQ evidenziato, e il campo Type to filter e il pulsante Select visibili | dc-it-first-chart-03.png]

> **Nota:** La finestra elenca solo gli exchange sottoscritti in **Options → Symbol Manage**. Se la lista è vuota o manca il tuo exchange, sistemalo lì — vedi [[symbol-manage]].

4. Attendi mentre il grafico si costruisce. Per qualche secondo compare uno spinner **Building chart** e nella barra principale appare un badge di stato che indica da dove arrivano i dati: **LDT** significa che sta caricando dal tuo disco, **DWT** che sta scaricando dal server del feed.

[SCREENSHOT: Una nuova finestra grafico che mostra lo spinner Building chart, con il badge di stato LDT/DWT visibile nella barra principale | dc-it-first-chart-04.png]

5. Il grafico si apre. La barra del titolo ha tre menu a discesa che controllano cosa stai guardando:

| Controllo | Esempio | Cosa fa |
|---|---|---|
| Simbolo | **NQ-202609** | Apre Select Instrument per passare il grafico a un altro contratto |
| Intervallo di caricamento dati | **10D - BT** | Quanto storico viene caricato — "10 Days, Based on Tick" (BM = Based on Minute) |
| Timeframe | **5 Minute** | Il tipo e la dimensione delle barre che il grafico disegna |

[SCREENSHOT: Un grafico dei prezzi completato con i tre menu a discesa della barra del titolo (simbolo, intervallo 10D - BT, timeframe 5 Minute) annotati | dc-it-first-chart-05.png]

### Se vuoi un timeframe diverso

Fai clic sul menu a discesa del timeframe. Ogni tipo di barra ha la sua riga con preset rapidi: **Second**, **Minute**, **Time** (giornaliero/settimanale/mensile), **Vol Bars**, **Range**, **Volume**, **Trade**, **Renko**, **P/F** e **Delta**. Fai clic su un preset per ricostruire il grafico con esso.

[SCREENSHOT: Il menu a discesa del timeframe aperto che mostra tutte le righe dei tipi di barra (Second, Minute, Time, Vol Bars, Range, Volume, Trade, Renko, P/F, Delta) con i loro preset rapidi | dc-it-first-chart-06.png]

### Se vuoi più storico sul grafico

Fai clic sul menu a discesa dell'intervallo di caricamento dati. Gli intervalli brevi caricano dati tick (5/10/15/30/60 giorni); quelli lunghi caricano dati minuto (3/6 mesi, 1/2/5/10 anni); **Custom** apre una finestra dove imposti un numero di giorni qualsiasi più una casella **Based on minute**. Il valore predefinito è 5 giorni.

> **Attenzione:** Caricare molti più giorni rende il grafico più pesante — più RAM e CPU, caricamento più lento. Aumenta gradualmente e per intervalli di più mesi preferisci i dati basati sui minuti. Ogni indicatore può calcolare solo sui giorni che il grafico ha caricato.

## Verifica che abbia funzionato

Le candele vengono disegnate e l'ultimo prezzo si muove. Il riepilogo nell'angolo in alto a sinistra mostra i valori O/H/L/C quando passi il mouse su una barra. Se sei sul feed gratuito ritardato, un banner arancione segnala che i dati sono ritardati — è normale, i prezzi si aggiornano con 15 minuti di ritardo (vedi [[free-delayed-data-feed]]).

Non sai bene cosa significhino quei valori O/H/L/C su una candela? Passa il mouse sull'anatomia qui sotto — ogni zona si spiega da sola, e puoi passare dalla versione rialzista a quella ribassista.

[WIDGET: candle-anatomy]

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| La finestra Select Instrument è vuota | Non c'è nulla di sottoscritto in Symbol Manage — [[symbol-manage]] |
| Il grafico si apre ma il prezzo non si muove | [[feed-connected-chart-not-moving]] |
| Compare "Connection lost" all'apertura del grafico | [[connection-lost-opening-chart]] |
| Grafico bloccato su Building chart / caricamento molto lento | [[data-delayed-lagging]] |

## Articoli correlati

- [[chart-window]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[free-delayed-data-feed]]
- [[chart-display-options]]
- [[quick-chart-templates]]