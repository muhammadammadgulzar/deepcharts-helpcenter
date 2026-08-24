---
title: "Finestra Advanced DOM"
slug: "advanced-dom"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "13 min read"
description: "La ladder Advanced DOM di DeepCharts: colonne di profondità, click-trading, la ladder P&L, le due colonne di Volume Profile e ogni finestra di impostazioni."
keywords: ["advanced dom", "adv dom", "finestra DOM", "profondità del mercato", "ladder", "click trading", "pull stack", "colonne dom", "colonna P&L", "colonna volume profile", "impostazioni dom"]
source_hash: "9d0080ac18aa1521"
ai_translated: true
source_hash: "9d0080ac18aa1521"
---
L'Advanced DOM è la ladder di prezzo indipendente di DeepCharts: profondità del mercato in tempo reale su entrambi i lati del prezzo, colonne di ordini click-to-trade, una ladder di P&L proiettato mentre mantieni una posizione, e fino a due colonne di Volume Profile — tutto in un'unica finestra.

Questo articolo mappa l'intera finestra: anatomia, ogni colonna della ladder, il menu dell'ingranaggio e le finestre di impostazioni profondamente annidate (**Chart Dom Settings** e le due finestre dei profili). Se cerchi il concetto dietro un DOM piuttosto che questa specifica finestra, parti da [[depth-of-market]]; per la ladder che vive dentro un grafico, vedi [[dom-trading-chart]].

## Che cos'è

Un DOM (Depth of Market) mostra il book di negoziazione passivo come una ladder di prezzo verticale: le dimensioni bid impilate sotto e attorno al prezzo corrente da un lato, le dimensioni ask dall'altro. La finestra Advanced DOM aggiunge colonne di trading (fai clic su un livello per lavorare un ordine lì), una colonna di profitto/perdita proiettato per livello per la tua posizione aperta, contatori di volume scambiato per livello, e profili di volume costruiti dai trade eseguiti.

Se l'idea della ladder ti è nuova, esplora il book di negoziazione vivo qui sotto — passa il mouse su un livello per vedere cosa significa la dimensione passiva lì presente.

[WIDGET: dom-ladder]

> **Nota:** La visualizzazione della profondità dipende dal tuo feed dati. Con dati Level 1 è disponibile solo il miglior bid/ask; la ladder completa delle dimensioni passive richiede dati di profondità Level 2.

## Quando usarlo

- Per lavorare ordini limit precisi ai livelli scelti invece di fare clic sui pulsanti di un pannello.
- Per osservare come la liquidità passiva si accumula o scompare attorno a un livello ([[understanding-auction-theory]] spiega perché conta).
- Per gestire una posizione aperta con una lettura di P&L proiettato per livello.
- Per combinare la profondità live con il contesto del volume eseguito tramite le due colonne di Volume Profile.
- Per far girare tape e book insieme — abbinalo a [[adv-time-and-sales]].

## Avvio rapido

1. Nella barra principale, apri **New → Book → Adv. Dom** (il sottomenu **Book** offre anche le varianti **Horizontal dom** e **Vertical dom**).
2. Scegli il tuo strumento in **Select Instrument** e conferma. Compaiono solo gli exchange sottoscritti in [[symbol-manage]].
3. La finestra si apre e la ladder inizia ad aggiornarsi in tempo reale. Mentre lo storico si scarica, la barra principale può mostrare un badge **DWT:** — è normale (DWT = download dei dati dal server del feed; LDT = caricamento di dati già su disco).

[SCREENSHOT: Menu New aperto con il sottomenu Book espanso che mostra Adv. Dom, Horizontal dom e Vertical dom, e la finestra Select Instrument dietro | dc-it-advanced-dom-01.png]

## Anatomia della finestra

[SCREENSHOT: Finestra Advanced DOM completa su NQ con tutte e quattro le sezioni visibili: barra del titolo con logo, gomma, ingranaggio, menu a discesa del simbolo e icone link; l'intestazione Broker/Account/Qty/Daily P&L; la riga di statistiche %V %O V T; la ladder con le colonne P&L, B, Bid, Price, Ask, S e VP con la riga del prezzo corrente evidenziata in arancione; e il piè di pagina con il riquadro A, il selettore Qty, Cancel - Flat All, Buy, Cancel, Flat, Sell e il blocco OCO | dc-it-advanced-dom-02.png]

Dall'alto in basso:

- **Barra del titolo** — logo DeepCharts, icona **gomma** (svuota la colonna Resettable Profile), icona **ingranaggio** (l'hub delle impostazioni), il menu a discesa del simbolo (per esempio NQ-202609), l'icona quadrata **link**, riduci a icona e chiudi. La chiusura chiede conferma ("Are you sure to close the window?").
- **Intestazione di trading** — **Broker**, **Account**, **Qty** (diventa verde con +N mentre sei long) e **Daily P/L**.
- **Riga dei fondamentali** — **%V** (variazione percentuale rispetto al giorno precedente), **%O** (variazione rispetto all'apertura di sessione), **V** (volume totale) e **T** (numero di trade).
- **La ladder** — le colonne descritte sotto; la riga del prezzo corrente è evidenziata in arancione (il marcatore **Last**).
- **Piè di pagina** — il riquadro del tipo di ordine **[A]**, il selettore **Qty**, **Cancel - Flat All** (arancione), **Buy**, **Cancel**, **Flat**, **Sell**, l'interruttore OCO con i pulsanti radio **Server/Client** e il menu a discesa delle strategie con il proprio ingranaggio.

Le quattro sezioni centrali/esterne corrispondono una a una agli interruttori **Show Fundamental**, **Show Trading Panel**, **Show Trading Buttons** e **Show OCO Panel** del menu dell'ingranaggio — togli la spunta a uno e quella sezione scompare.

### Colonne della ladder

La vista di default mostra **P&L | B | Bid | Price | Ask | S | VP**. Attivando tutto (tramite le impostazioni o il menu del tasto destro sulle intestazioni di colonna) si ottiene **P&L | #B | B.PS | B | Bid | B.T | Price | A.T | Ask | S | A.PS | #A | VP | VP**.

| Colonna | Che cosa mostra |
|---|---|
| **Price** | La ladder di prezzo stessa. La riga arancione è il prezzo corrente (marcatore Last). |
| **Bid / Ask** | Dimensioni della profondità di mercato passiva per livello (celle bid blu, celle ask viola di default), aggiornate in tempo reale. |
| **B / S** | Ampie fasce click-to-trade per i tuoi ordini — lato acquisto verde, lato vendita rosso scuro. Qui compaiono i tuoi ordini attivi. |
| **P&L** | Con una posizione aperta: il profitto/perdita proiettato di quella posizione a ogni livello di prezzo. La riga verde 0.00 marca il tuo livello di ingresso/pareggio. |
| **B.PS / A.PS** | Colonne Pull/Stack — tracciamento della variazione di liquidità per livello (verde = liquidità aggiunta, rosso = ritirata). Vuote finché non si verificano eventi pull/stack; la funzione è disattivata di default. |
| **B.T / A.T** | Contatori di volume scambiato per livello e per lato (volume venduto a mercato / comprato a mercato). |
| **#B / #A** | Colonne di conteggio ordini, legate alla funzione Offers (numero di ordini individuali per livello). Possono restare vuote sui feed che non forniscono dati a livello di ordine — requisito dati esatto non confermato. |
| **VP / VP** | Due colonne di Volume Profile: il Resettable Profile (accumula finché non lo svuoti con l'icona della gomma) e il Daily Profile (dall'inizio della sessione). Barre con numeri per livello; il valore del livello con più volume è evidenziato in rosso (il POC). |

[SCREENSHOT: Ladder dell'Advanced DOM ingrandita per mostrare le celle di profondità bid blu, le celle di profondità ask viola, un ordine di acquisto attivo verde nella colonna B, e le due colonne VP a destra con il valore POC evidenziato in rosso | dc-it-advanced-dom-03.png]

## Come leggerlo

- **Profondità (colonne Bid/Ask)** — le dimensioni si aggiornano tick per tick; osserva i livelli dove la dimensione si accumula o svanisce. Per gli schemi di interpretazione, vedi [[understanding-auction-theory]] e [[orderflow-101]].
- **La ladder P&L** — mentre sei flat resta vuota; una volta in posizione ogni livello mostra cosa significherebbe chiudere lì. La riga verde 0.00 è il tuo pareggio/ingresso; i valori sopra e sotto scalano con la distanza.
- **Le due colonne VP** — contesto di volume eseguito. Il Daily Profile mostra l'intera sessione; il Resettable Profile mostra solo ciò che è stato scambiato dall'ultima volta che hai premuto l'icona della gomma, il che lo rende utile per domande del tipo "cosa è successo dopo la notizia". Il valore evidenziato in rosso è il livello con il maggior volume scambiato (POC — vedi [[understanding-volume-profile]]).
- **Marcatori** — la ladder evidenzia i livelli di sessione: **Last** (arancione, attivo di default), **High** (verde, attivo), **Low** (rosso, attivo), **Open** (disattivato di default), più **Suspension** (ciano, attivo) e **Auction** (disattivato). Cosa indichino esattamente i marcatori Suspension e Auction è [CONFIRM: Suspension and Auction marker semantics].

[SCREENSHOT: Advanced DOM mentre sei long di 2 contratti — campo Qty verde che mostra +2, la colonna P&L riempita con valori per livello e la riga verde 0.00 al livello di ingresso, la riga del prezzo corrente arancione sotto di essa | dc-it-advanced-dom-04.png]

## Fare trading dal DOM

- **Tipo di ordine — il riquadro [A].** Il riquadro accanto a Qty seleziona il tipo di ordine: **Automatic / Limit / Market / Conditional**. In modalità Automatic la piattaforma decide in base all'azione del mouse — il clic con il tasto destro inserisce un ordine a mercato, il clic con il tasto sinistro inserisce un limit o uno stop a seconda del lato del prezzo su cui fai clic.
- **Ordini attivi.** Fai clic nella colonna **B** per lavorare un acquisto a quel livello, **S** per una vendita. Trascina un ordine per spostarlo, fai clic con il tasto destro per eliminarlo, fai doppio clic per modificarne la quantità.
- **Pulsanti del piè di pagina.** **Buy** e **Sell** inviano alla quantità del piè di pagina; **Cancel** annulla gli ordini attivi e **Flat** chiude la posizione. **Cancel - Flat All** fa entrambe le cose in un clic — il suo ambito esatto (solo questo simbolo, o tutti i conti/simboli) è [CONFIRM: scope of Cancel - Flat All in the Adv DOM footer].
- **Blocco OCO.** L'interruttore OCO del piè di pagina, i pulsanti radio **Server/Client** e il menu a discesa delle strategie rispecchiano il sistema di bracket del pannello di trading — vedi [[oco-strategies]] e [[trading-panel-reference]] per come si comportano i bracket lato server rispetto a quelli lato client.

> **Attenzione:** Le colonne B e S sono superfici di inserimento ordini reali. Un clic inserisce o lavora un ordine reale per il conto selezionato — tieni selezionato il conto di simulazione mentre impari la ladder ([[simulation-accounts]]).

### Layout compatto

Quando la finestra è stretta, il DOM si riorganizza: l'intestazione guadagna i campi **Price** e **P/L**, la ladder si divide con il prezzo al centro e colonne **X** che annullano l'ordine attivo a quel livello, e il piè di pagina diventa un ticket d'ordine esplicito (**Qty**, **Price**, menu a discesa **Type** che mostra LMT, **Buy**, **Cancel all**, **Flat**, **Sell**, più la riga OCO). Quale larghezza attivi il cambio è [CONFIRM: activation rule for the compact split layout].

[SCREENSHOT: Advanced DOM stretto in layout compatto diviso che mostra le colonne del prezzo centrate, le colonne X di annullamento e il piè di pagina a ticket d'ordine con i campi Qty, Price e Type=LMT | dc-it-advanced-dom-05.png]

## Riferimento impostazioni

Tutto parte dall'icona **ingranaggio**: **Duplicate Dom**, **Settings Column Order**, **Settings Dom**, **Resettable Profile ▸**, **Daily Profile ▸**, i quattro interruttori **Show**, **Always on Top** e **Template ▸** (Load / Save As).

[SCREENSHOT: Menu dell'ingranaggio dell'Advanced DOM aperto che mostra Duplicate Dom, Settings Column Order, Settings Dom, Resettable Profile, Daily Profile, i quattro interruttori Show spuntati, Always on Top e Template | dc-it-advanced-dom-06.png]

> **Nota:** Dopo alcune modifiche alle impostazioni o ai profili la ladder mostra brevemente uno spinner di caricamento mentre si ricostruisce. È normale — lo stesso schema di un grafico che si ricostruisce.

### Settings Column Order

Un semplice elenco degli id interni delle colonne con i pulsanti **Up / Down** più **Apply / OK** — riordina qui le colonne della ladder. L'inventario completo: ProfitLoss, BidOffer, BidPullStack, BuyOrder, BidQty, BidFilled, PriceScale, AskFilled, AskQty, SellOrder, AskPullStack, AskOffer.

Un'alternativa più rapida: fai clic con il tasto destro del mouse su una qualsiasi intestazione di colonna per il menu rapido — **Adjust column size**, **Adjust window to fit content**, e gli interruttori mostra/nascondi per **Pull/Stack**, **Trades**, **Offers**, **Profit/Loss** più i due sottomenu dei profili.

[SCREENSHOT: Menu rapido del tasto destro sull'intestazione di colonna aperto che mostra Adjust column size, Adjust window to fit content, Pull/Stack, Trades, Offers, la voce Profit/Loss spuntata e i sottomenu Resettable/Daily Profile | dc-it-advanced-dom-07.png]

### Settings Dom (finestra Chart Dom Settings)

La finestra principale, organizzata in dieci sezioni comprimibili:

| Sezione | Impostazioni |
|---|---|
| GENERAL | **Font size** (11.00), **Text format** (Automatic), **Background color**, **Number of levels to show** (0), **Tick grouping** (1), **Auto. axis margin %** (20). [CONFIRM: meaning of Number of levels to show = 0 — all levels?] |
| BID/ASK COLUMN | **Bid back color** (blu), **Ask back color** (viola), **Bid/Ask profile color** (le barre orizzontali di dimensione dentro le celle di profondità), **Text Color**. |
| PULL/STACK COLUMN | **Enable** (disattivato di default), **Calculation Mode** (Avg filter — altre opzioni non confermate), **Show As Profile** (attivo), **Text Color**, più i colori pull/stack per lato (bid pull rosso, bid stack verde, ask pull verde, ask stack rosso). |
| FILLED COLUMN | **Enable** (disattivato), **Auto reset** (attivo), **Bid Text**, **Ask Text**, **Highlight Bid/Ask** (disattivato), colori **Bid/Ask Highlight**. Cosa conti esattamente Filled rispetto alle colonne Trades, e quando scatti Auto reset, non è confermato. |
| OFFERS COLUMN | **Enable offers** (disattivato), **Bid/Ask offer back colors**, **Text Color**. |
| ORDER SETTINGS | **Text Color**, **Buy Order** (verde), **Sell Order** (rosso), **Buy/Sell BackGround**, **Buy/Sell Filled Color** — i colori degli ordini attivi nelle colonne B/S. |
| PRICE SCALE | **Price back color**, **Price text color**. |
| PL COLUMN | **Enable** (attivo), **Background**, **Gain Text Color** (verde), **Loss Text Color** (viola) — disattiva qui la ladder P&L se non la vuoi. |
| MARKER SETTINGS | Attivazione + colore per marcatore: **Last** (attivo, arancione), **Open** (disattivato), **High** (attivo, verde), **Low** (attivo, rosso), **Suspension** (attivo, ciano), **Auction** (disattivato, viola). |
| ORDER ENABLE SETTINGS | **Enable stop order** (attivo), **Enable market order** (attivo). Se questi limitino solo i clic sulla ladder o anche i pulsanti del piè di pagina non è confermato. |

[SCREENSHOT: Finestra Chart Dom Settings aperta con la sezione GENERAL espansa e l'elenco di tutte e dieci le intestazioni di sezione visibile | dc-it-advanced-dom-08.png]

### Impostazioni Resettable Profile e Daily Profile

Ognuna delle due colonne VP ha la propria finestra di impostazioni completa (struttura identica, nove sezioni): GENERAL (**Auto grouping** Manual/Automatic, **Auto group factory** 2, **Manual ticks** 1), PLOT SETTINGS (**Background → Show Settings**, **Show text**, **Text → Show Settings**, **Text format**, **Number of profile** 2), VISUAL APPEARANCE (**Vbp opacity** 90, **Show filled vbp** disattivato), POINT OF CONTROL (**Enable** attivo, **Highlight** attivo, colore di evidenziazione magenta, linea opzionale), VALUE AREA (**Enable** attivo, **% Value Area** 70, **Highlight** attivo, **Outside Color** giallo — le barre gialle che vedi nella ladder sono livelli fuori dall'area di valore, linea opzionale), PEAK AND VALLEY (**Sensitivity** 20 più una finestra di impostazioni PEAK/VALLEY annidata con attivazione, evidenziazione, volume minimo e opzioni di linea), SUMMARY, PRICE LINE e LAST FILLED QTY (ciascuna con un interruttore Enable più i colori).

La finestra annidata **Background Settings** controlla la colorazione delle barre del profilo: **Method color** (Fading color), **Color calculation** (Volume), **Min. Vol. Diff. for Imbalance**, **Include zero on imbalance**, **Color only dominant side**, campioni di colore fissi, e un sistema RANGE (**Range defining** Automatic più i livelli di colore FIRST–FOURTH RANGE). Gli elenchi completi delle opzioni e cosa definisca i quattro livelli di range non sono confermati — aspettati che quest'area premi la sperimentazione su un feed di simulazione.

Questi concetti di profilo (POC, area di valore, picchi e valli) sono gli stessi che l'indicatore [[deep-profile]] usa sui grafici.

[SCREENSHOT: Finestra delle impostazioni del Resettable Profile che mostra le nove intestazioni di sezione con GENERAL espansa, e la finestra annidata Background Settings aperta sopra con Method color=Fading color e Color calculation=Volume | dc-it-advanced-dom-09.png]

## Risoluzione dei problemi

- **La ladder mostra solo il miglior bid/ask, la maggior parte delle celle di profondità è vuota.** Il tuo feed è Level 1. La profondità completa richiede dati Level 2 — controlla cosa include il tuo abbonamento ([[buy-data-feed]]).
- **Le colonne #B/#A restano vuote.** Queste colonne di conteggio ordini possono restare vuote sui feed senza dati a livello di ordine anche mentre B.T/A.T si popolano. Requisito esatto non confermato.
- **Finestra bloccata su Loading.** Le modifiche alle impostazioni e ai profili ricostruiscono la ladder — dalle un momento. Se la barra principale mostra **DWT:** la piattaforma sta scaricando lo storico dal feed; se non finisce mai, segui [[data-delayed-lagging]].
- **La colonna Resettable Profile sembra vuota o scarna.** Accumula solo dall'ultimo clic sulla gomma — è il suo compito. La colonna Daily Profile accanto porta l'intera sessione.
- **Prezzi congelati.** Controlla il puntino del feed nella barra principale e vedi [[feed-connected-chart-not-moving]].

## Suggerimenti ed errori comuni

- **Gomma vs Daily.** Premi la gomma della barra del titolo con intenzione: svuota immediatamente il Resettable Profile. Il Daily Profile non ne è toccato.
- Usa **Duplicate Dom** per creare una seconda ladder con impostazioni identiche, poi cambia il suo simbolo — più veloce che riconfigurare da zero.
- Se una sezione della finestra è "scomparsa", controlla i quattro interruttori **Show** del menu dell'ingranaggio prima di supporre un bug.
- Salva il tuo DOM configurato come template (**Ingranaggio → Template → Save As**) e ricaricalo su qualsiasi workspace.
- Tieni a mente **Enable stop order / Enable market order**: se un clic sulla ladder si rifiuta di inserire uno stop o un ordine a mercato, questi interruttori sono il primo posto dove guardare.

## Articoli correlati

- [[depth-of-market]]
- [[dom-trading-chart]]
- [[adv-time-and-sales]]
- [[trading-panel-reference]]
- [[oco-strategies]]
- [[understanding-volume-profile]]