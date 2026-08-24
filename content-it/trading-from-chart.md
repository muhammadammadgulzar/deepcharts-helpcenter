---
title: "Trading dal grafico"
slug: "trading-from-chart"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Attiva il trading dal grafico, apri il pannello di trading e inserisci, sposta e annulla i tuoi primi ordini direttamente su un grafico dei prezzi di DeepCharts."
keywords: ["trading dal grafico", "trading enabled", "pannello di trading", "icona dollaro", "inserire ordine sul grafico", "ctrl alt t", "comprare vendere dal grafico", "come fare trading in deepcharts"]
source_hash: "cdad8a0234831ff6"
ai_translated: true
source_hash: "cdad8a0234831ff6"
---
Alla fine avrai il trading armato su un grafico, il pannello di trading aperto, e saprai come inserire, spostare e annullare ordini senza lasciare il grafico.

Ogni grafico dei prezzi in DeepCharts può fungere anche da schermata di inserimento ordini. Sono coinvolti due controlli distinti: **Trading Enabled** (l'icona del dollaro) arma il grafico per il trading, e il **Trading panel** (pannello di trading) è la colonna di pulsanti e campi che compare sul lato destro. Sono collegati — disattivare l'icona del dollaro nasconde automaticamente il pannello — quindi conviene capire entrambi prima di fare clic su qualsiasi cosa.

## Prima di iniziare

- DeepCharts installato e attivato — [[install-deepcharts]]
- Un feed dati con trading (esecuzione) connesso — [[connect-data-feed]]
- Un grafico aperto sullo strumento su cui vuoi fare trading — [[first-chart]]
- Fortemente consigliato per il tuo primo tentativo: un conto SIM così nessun denaro reale è a rischio — [[simulation-accounts]]

## Passaggi

1. Attiva il trading sul grafico. Fai clic sull'icona **$** nella riga di icone in alto a sinistra del grafico — diventa **verde** quando il trading è armato. Alternative: fai clic con il tasto destro del mouse sul grafico e scegli **Trading Enabled** (**Ctrl Alt T**).

[SCREENSHOT: Riga di icone in alto a sinistra del grafico con l'icona del dollaro evidenziata nel suo stato verde (armato), accanto alle icone della toolbar, dello stile delle barre, degli indicatori, dell'ingranaggio e della fotocamera | dc-it-trading-from-chart-01.png]

2. Mostra il pannello di trading. Attiva **Trading panel** nella barra inferiore del grafico, oppure fai clic con il tasto destro del mouse sul grafico e scegli **Show Trading Panel** (**Ctrl Alt P**). Il pannello si apre sul lato destro del grafico.

[SCREENSHOT: Grafico dei prezzi con il pannello di trading aperto sul lato destro, che mostra il menu a discesa del simbolo, i valori Open Qty / Open P/L / Daily P/L, il selettore Qty, i menu a discesa Broker e Account e la griglia di pulsanti BUY/SELL | dc-it-trading-from-chart-02.png]

> **Nota:** L'icona del dollaro e il pannello sono collegati. Se il tuo pannello di trading è "scomparso", la causa più comune è che **Trading Enabled** è stato disattivato — riarmalo e il pannello ricompare.

3. Controlla lo strumento in cima al pannello. Un grafico nuovo preseleziona qui il proprio simbolo, ma il pannello ha un menu a discesa **Select Instrument** indipendente — dopo che modifichi uno dei due, grafico e pannello sono indipendenti. È così che puoi osservare il contratto mini (per esempio NQ) mentre fai trading sul micro (MNQ) dallo stesso grafico.

[SCREENSHOT: Menu a discesa del simbolo del pannello di trading aperto che mostra la finestra Select Instrument con la barra laterale degli exchange e la casella di filtro | dc-it-trading-from-chart-03.png]

> **Nota:** Il selettore di strumenti del pannello elenca solo gli exchange sottoscritti in **Options → Symbol Manage** — se è vuoto, vedi [[symbol-manage]].

4. Imposta la dimensione dell'ordine nel selettore **Qty** e scegli il **Broker** e l'**Account** su cui operare. Per un test senza rischi, imposta **Broker** su **SIM** e scegli il tuo conto di simulazione.

5. Inserisci un ordine con la griglia di pulsanti. Ogni tipo di ordine ha un pulsante di acquisto e uno di vendita:

| Pulsante | Cosa inserisce |
|---|---|
| **MKT** | Ordine a mercato — eseguito immediatamente al miglior prezzo disponibile |
| **BID / ASK** | Ordine limit al miglior bid corrente (acquisto) o al miglior ask (vendita) |
| **LMT** | Ordine limit a un prezzo che scegli tu — acquista sotto il mercato, vendi sopra |
| **STP** | Ordine stop che attiva un ordine a mercato — acquista sopra il mercato, vendi sotto |
| **STP LMT** | Ordine stop-limit — evita lo slippage, con il rischio di non essere eseguito |

Prova il pannello live qui sotto — passa il mouse su qualsiasi pulsante per vedere esattamente cosa inserisce e fai clic sulla posizione SIM per osservare il P/L aggiornarsi.

[WIDGET: trading-panel-mock]

> **Attenzione:** Un limit di acquisto piazzato sopra il mercato (o un limit di vendita sotto) viene eseguito immediatamente come ordine a mercato — il book contiene solo liquidità in vendita sopra il prezzo e liquidità in acquisto sotto. Gli stop sono l'immagine speculare. Se lo piazzi sul lato sbagliato, aspettati un'esecuzione istantanea.

6. Gestisci gli ordini attivi direttamente sul grafico: **fai clic con il tasto sinistro e trascina** un ordine limit o stop per spostarlo su un nuovo prezzo; **fai clic con il tasto destro del mouse** su un ordine per annullarlo.

[SCREENSHOT: Un ordine limit di acquisto attivo mostrato sul grafico mentre viene trascinato su un nuovo livello di prezzo con il cursore visibile | dc-it-trading-from-chart-04.png]

7. Esci o fai pulizia con i pulsanti del pannello — tutti agiscono solo sul simbolo attualmente selezionato nel pannello:

- **Cancel** — annulla tutti gli ordini attivi (pendenti); le posizioni aperte non vengono toccate.
- **Flat** — chiude solo la posizione aperta corrente.
- **Cancel and Flat** — chiude la posizione aperta e annulla tutti gli ordini attivi rimanenti.
- **Breakeven** — sposta il tuo stop al prezzo di ingresso, più il margine **Breakeven - Ticks** impostato in **Options → Settings → General → Trading** (0 significa esattamente all'ingresso; alzalo per coprire commissioni e slippage).

### Se vuoi ingressi limit a una distanza fissa dal mercato

Attiva la casella **Ticks diff.** sopra la griglia di pulsanti e imposta un numero N. **BID** piazzerà allora il limit di acquisto N tick sotto il miglior bid, e **ASK** piazzerà il limit di vendita N tick sopra il miglior ask, invece che esattamente al miglior bid/ask.

### Se vuoi bracket automatici di stop loss e take profit

Attiva la casella **OCO Strategy** nel pannello prima di entrare. Ogni nuovo ingresso riceve allora un limit di take profit e uno stop protettivo collegati — quando uno viene eseguito, l'altro viene annullato. La configurazione completa, incluse le strategie multi-contratto e la scelta Server/Client, è in [[oco-strategies]].

### Se vuoi vedere i trade passati sul grafico

Fai clic con il tasto destro del mouse sul grafico e scegli **Show Historical Orders** (**Ctrl Alt H**) per tracciare le esecuzioni storiche sul grafico. L'aspetto della visualizzazione degli ordini sul grafico (dimensione del testo, colori) si personalizza in **Trading Settings** nel menu del tasto destro.

## Verifica che abbia funzionato

L'icona **$** è verde, il pannello è visibile, e dopo aver inserito un piccolo ordine SIM lo vedi attivo sul grafico e i valori del pannello si aggiornano: **Open Qty** mostra la dimensione della tua posizione, **Open P/L** il profitto o la perdita in corso della posizione, e **Daily P/L** il totale della giornata per quello strumento. L'ordine compare anche nella [[orders-window|finestra Ordini]].

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| Il pannello di trading è scomparso | **Trading Enabled** (icona $) è stato disattivato — nasconde automaticamente il pannello; riattivalo (**Ctrl Alt T**) |
| Ordine limit eseguito istantaneamente a mercato | Piazzato sul lato sbagliato del prezzo — vedi l'Attenzione al passaggio 5, oppure usa il ladder a clic in [[dom-trading-chart]] che sceglie automaticamente il tipo corretto |
| Ordini bloccati con un errore tipo "troppi ordini" | La sicurezza **Frequency Limitation** in **Options → Settings → General → Trading** limita gli ordini al secondo e mette in pausa l'invio dopo il superamento del limite — regola la soglia o il tempo di pausa |
| Impossibile fare trading su un simbolo, oppure il conto risulta bloccato | Potrebbe essere scattata una regola del Risk Manager — vedi [[risk-manager]] |
| L'elenco degli strumenti del pannello è vuoto | Nulla di sottoscritto in **Options → Symbol Manage** — [[symbol-manage]] |

## Articoli correlati

- [[trading-panel-reference]]
- [[dom-trading-chart]]
- [[oco-strategies]]
- [[orders-window]]
- [[simulation-accounts]]
- [[risk-manager]]