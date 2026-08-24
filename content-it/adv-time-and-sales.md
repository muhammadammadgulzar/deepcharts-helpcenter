---
title: "Advanced Time And Sales (il tape)"
slug: "adv-time-and-sales"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "12 min read"
description: "Leggi il tape di DeepCharts: stampe trade per trade con colori dell'aggressore, filtri per lato e i pannelli inferiori Bid/Ask, Delta e squilibrio del book."
keywords: ["time and sales", "tape", "adv time and sales", "T&S", "time & sales", "lettura del tape", "righe verdi e rosa", "righe grigie", "pannello delta", "squilibrio del book", "time and sales vuoto"]
source_hash: "e4dea516bfb6e6e6"
ai_translated: true
source_hash: "e4dea516bfb6e6e6"
---
Advanced Time And Sales è il tape di DeepCharts: una lista in tempo reale in cui ogni trade eseguito compare come una riga nel momento in cui viene stampato. Dove un grafico comprime l'attività in barre, il tape ti mostra ogni singola transazione — l'orario, la dimensione e quale lato del mercato è stato l'aggressore.

Questo articolo copre la finestra in sé: come aprirla, cosa significano i colori delle righe, i tre pannelli inferiori opzionali (Bid/Ask, Delta, squilibrio del book) e ogni impostazione delle finestre **Chart Settings** e **TS Settings**.

## Che cos'è

La finestra risponde a una domanda: chi sta scambiando in questo momento, quanto e a quale prezzo. Ogni riga è la stampa di un singolo trade con tre colonne — **Time**, **Volume** e **Price**. La cella del prezzo è colorata in base a dove il trade è stato eseguito, così a colpo d'occhio vedi se i compratori stanno alzando l'ask o i venditori stanno colpendo il bid. Pannelli opzionali in fondo alla finestra aggregano quelle stampe in totali progressivi per lato, in una barra di delta, o in una vista live del book di negoziazione.

Se la logica del lato aggressore ti è nuova (perché un trade "all'ask" significa un compratore aggressivo), leggi prima [[orderflow-101]] — il tape ha molto più senso con quel modello in mente.

## Quando usarlo

- Per confermare se un movimento rapido è sostenuto da volume aggressivo reale o da stampe sottili.
- Per osservare la velocità di esecuzione e le dimensioni delle stampe attorno a un livello che ti interessa — si abbina bene a [[speed-of-tape]] e [[big-trades]].
- Per monitorare un solo lato (tutti gli acquisti o tutte le vendite) con il filtro per lato del trade.
- Per tenere un conteggio compatto del delta o dei volumi bid/ask senza aprire un grafico completo.
- Per osservare la pressione del book passivo con il pannello di squilibrio del book mentre gestisci un ingresso sull'[[advanced-dom]].

## Avvio rapido

1. Nella barra principale, apri **New → Adv. Time And Sales**.
2. Nella finestra **Select Instrument**, scegli il tuo strumento (per esempio NQ) e conferma. Qui compaiono solo gli exchange che hai sottoscritto in [[symbol-manage]] — un selettore vuoto significa che non c'è ancora nessuna sottoscrizione.
3. La finestra del tape si apre e inizia a riempirsi con le stampe in tempo reale.

[SCREENSHOT: Il menu New aperto nella barra principale di DeepCharts con Adv. Time And Sales evidenziato, e la finestra Select Instrument visibile con NQ selezionato | dc-it-adv-time-and-sales-01.png]

> **Nota:** Un tape appena aperto parte vuoto e si riempie solo con i nuovi trade stampati. In base al comportamento verificato su video, le finestre Time And Sales duplicate e nuove non mostravano alcun backfill storico — in un mercato tranquillo la finestra può restare scarna per un po'. Sembra essere una scelta di progetto, ma il comportamento esatto di backfill è [CONFIRM: does a new/duplicated Adv. TS window intentionally load no trade history?].

## Anatomia della finestra

[SCREENSHOT: Finestra Adv. Time And Sales completa su NQ con le icone della barra del titolo (logo, ingranaggio, link, riduci a icona, chiudi), il menu a discesa del simbolo a tutta larghezza, e un tape misto di celle prezzo verdi e rosa con i numeri di volume in blu | dc-it-adv-time-and-sales-02.png]

- **Barra del titolo**, da sinistra a destra: il logo DeepCharts, l'icona **ingranaggio** (l'hub delle impostazioni — è tutto qui), l'icona quadrata **link**, riduci a icona e chiudi. L'icona link non è stata dimostrata nel nostro materiale di riferimento; presumibilmente si tratta dei consueti gruppi di colori per il collegamento delle finestre (vedi [[link-windows]]), ma il comportamento esatto può variare.
- **Menu a discesa del simbolo** — a tutta larghezza, subito sotto la barra del titolo (per esempio NQ-202609). Cambiarlo commuta il tape su un altro strumento.
- **Il tape** — colonne **Time | Volume | Price**. Le righe compaiono dall'alto verso il basso man mano che i trade vengono eseguiti. Il volume è stampato in testo blu.
- La finestra è liberamente ridimensionabile; le colonne si allargano con essa.

## Come leggerlo

Lo sfondo della cella **Price** di ogni riga codifica il lato aggressore:

| Colore | Significato |
|---|---|
| Verde | Trade eseguito all'ask — aggressore in acquisto |
| Rosa | Trade eseguito al bid — aggressore in vendita |
| Grigio | Non confermato — probabilmente un trade eseguito tra bid e ask (dentro lo spread) |

La lettura del grigio è un'inferenza, non un fatto confermato: i campi colore di **TS Settings** includono uno sfondo **Between Bid/Ask** che è grigio di default, il che suggerisce con forza che le righe grigie siano stampe dentro lo spread — ma è in attesa di conferma, quindi trattala come probabile piuttosto che certa. Gli stessi set di colori includono anche gli sfondi **Below Bid** e **Above Ask**, il che significa che il tape può distinguere anche le stampe fuori dallo spread quotato; quando quelle colorazioni scattino è [CONFIRM: exact conditions for Below Bid / Above Ask row coloring].

Provalo sul tape live qui sotto — passa il mouse su una stampa per mettere in pausa il flusso e vedere perché è verde o rosa, e cambia i filtri All/Ask/Bid per vedere il tape diventare di un solo colore.

[WIDGET: tape-lab]

Un tape che diventa improvvisamente tutto di un colore di solito non è il mercato — è il filtro per lato del trade (sezione seguente).

## Il menu dell'ingranaggio

L'icona dell'ingranaggio apre il menu completo: **All Trades / Ask Trades / Bid Trades** (un filtro a tre vie), **Enable Bid/Ask**, **Enable Delta**, **Chart Settings**, **Enable book imbalance**, **Book imbalance settings**, **Duplicate Adv. TS**, **Always on Top**, **Template** (Load / Save As), **Rebuild TS**, **Rename TS** e **Settings TS**.

[SCREENSHOT: Menu dell'ingranaggio di Adv. Time And Sales completamente aperto con tutte le voci: il filtro All/Ask/Bid Trades con la spunta su All Trades, e le voci Enable Bid/Ask, Enable Delta, Chart Settings, Enable book imbalance, Book imbalance settings, Duplicate Adv. TS, Always on Top, Template, Rebuild TS, Rename TS e Settings TS | dc-it-adv-time-and-sales-03.png]

### Filtri per lato del trade

**All Trades** (default) mostra il tape misto. **Ask Trades** mostra solo le esecuzioni lato ask — ogni riga visibile diventa verde. **Bid Trades** mostra solo le esecuzioni lato bid — tutte rosa. La stessa scelta esiste anche dentro **Settings TS** come **TS Mode**; le due restano sincronizzate.

[SCREENSHOT: Tape con il filtro Ask Trades attivo — ogni riga verde — e il menu dell'ingranaggio aperto con la spunta spostata su Ask Trades | dc-it-adv-time-and-sales-04.png]

### Pannello Bid/Ask

**Enable Bid/Ask** (disattivato di default) aggiunge un pannello nel terzo inferiore della finestra. Parte vuoto con un pulsante verde **Reset** a tutta larghezza, poi fa crescere due riquadri: viola a sinistra e verde a destra, ciascuno con un conteggio sotto. I riquadri crescono man mano che i trade vengono stampati, e **Reset** azzera entrambi i contatori.

In base alla convenzione di colori del tape, il riquadro viola sembra tracciare il volume scambiato lato bid e quello verde il volume lato ask dall'ultimo reset — una lettura ragionevole, ma la semantica esatta è [CONFIRM: Bid/Ask panel — do the two counters equal cumulative contracts traded at bid vs at ask since last Reset?].

[SCREENSHOT: Adv. Time And Sales con il pannello inferiore Bid/Ask attivato — riquadro viola a sinistra, riquadro verde a destra, i conteggi dei contratti sotto ciascun riquadro e il pulsante verde Reset a tutta larghezza | dc-it-adv-time-and-sales-05.png]

### Pannello Delta

**Enable Delta** (disattivato di default) mostra una singola barra orizzontale nel pannello inferiore: viola mentre il delta corrente è negativo, verde quando è positivo, con due numeri impilati che crescono man mano che i trade vengono stampati (per esempio -5 / -3 che diventa -14 / -12 durante una fase di vendite). **Reset** azzera la barra.

I campi di testo di **Chart Settings** includono colori separati per "Delta Volume" e "Delta Trade", quindi i due numeri sono molto probabilmente il volume delta (sopra) e il conteggio dei trade delta (sotto) — mappatura esatta non confermata.

[SCREENSHOT: Pannello inferiore Delta con una barra viola di delta negativo e due numeri negativi impilati, poi lo stesso pannello verde dopo che il delta è diventato positivo | dc-it-adv-time-and-sales-06.png]

### Pannello di squilibrio del book

**Enable book imbalance** (disattivato di default) commuta il pannello inferiore su una vista del book passivo: un numero a sinistra (lato bid) e uno a destra (lato ask). Quando i due lati sono uguali, compaiono solo numeri semplici. Quando un lato domina, quel lato fa crescere un riquadro colorato dimensionato in base alla sua quota — un riquadro verde a sinistra quando domina il book bid, uno rosso a destra quando domina il book ask. I colori sono confermati dalla finestra **Imbalance settings** (Bid Volume = verde, Ask Volume = rosso).

A differenza degli altri due pannelli, questa modalità non ha un pulsante **Reset** — rispecchia il book corrente invece di accumulare. Cosa sommino esattamente i numeri (solo il miglior livello bid/ask, o più livelli del book) non è confermato, come non lo è se il pannello richieda dati di profondità Level 2 per popolarsi.

[SCREENSHOT: Pannello inferiore di squilibrio del book in due stati — valori uguali mostrati come numeri semplici, e un lato bid dominante con un riquadro verde a sinistra dimensionato in proporzione | dc-it-adv-time-and-sales-07.png]

### Utilità della finestra

- **Duplicate Adv. TS** — apre una seconda finestra del tape con lo stesso simbolo preselezionato. Il duplicato parte con un tape vuoto e contatori dei pannelli azzerati, e ogni finestra mantiene le proprie impostazioni.
- **Always on Top** — mantiene la finestra sopra le altre; il comportamento esatto non è stato dimostrato nel nostro materiale di riferimento, ma la voce di menu corrisponde alla consueta opzione della finestra.
- **Template → Load / Save As** — salva o carica una configurazione Time And Sales con nome, lo stesso schema dei template di grafico e DOM ([[templates-workspaces]]).
- **Rebuild TS** — svuota e ricostruisce il tape. Usalo come prima soluzione leggera quando il tape sembra difettoso o bloccato. I contatori dei pannelli si azzerano dopo una ricostruzione.
- **Rename TS** — rinomina la finestra. [CONFIRM: Rename TS dialog contents — never opened in source material]

## Riferimento impostazioni

### Chart Settings (pannelli Bid/Ask e Delta)

**Ingranaggio → Chart Settings** controlla come i due pannelli ad accumulo misurano e visualizzano.

| Sezione | Impostazione | Che cosa fa |
|---|---|---|
| GENERAL | **Period Mode** | Finestra di accumulo. Default **Resettable** — accumula finché non premi Reset. Altre opzioni: **Fixed count**, **Fixed seconds** — queste sembrano azzerarsi automaticamente usando **Period Length** come finestra, ma il comportamento esatto non è confermato. |
| GENERAL | **Period Length** | Numero usato dalle modalità Fixed. Default 10. |
| GENERAL | **Visual Mode** | Default **Pos and neg**. [CONFIRM: other Visual Mode options] |
| GENERAL | **Enable Shortcut Reset** | Disattivato di default. [CONFIRM: which shortcut this binds] |
| COLOR SETTINGS | **Bid Volume / Ask Volume / Bid Trades / Ask Trades** | Campioni di colore per i riquadri dei pannelli e la barra di delta (bid = viola, ask = verde di default). |
| COLOR SETTINGS | **Color only dominant delta** | Interruttore che influisce sulla colorazione della barra di delta. |
| TEXT SETTINGS | **Text Size / Text Color** | Stile del testo dei pannelli. Dimensione di default 14. |
| TEXT SETTINGS | **Pos./Neg. Delta Volume, Pos./Neg. Delta Trade** | Selettori di colore separati per i due numeri stampati sulla barra di delta, per ciascun segno. |

**Apply** applica senza chiudere; **OK** chiude la finestra.

[SCREENSHOT: Finestra Chart Settings aperta con la sezione GENERAL e il menu a discesa Period Mode espanso che elenca Resettable, Fixed count e Fixed seconds | dc-it-adv-time-and-sales-08.png]

### Book imbalance settings

**Ingranaggio → Book imbalance settings** apre la finestra **Imbalance settings**: COLOR SETTINGS (**Bid Volume** = verde, **Ask Volume** = rosso) e TEXT SETTINGS (**Text Size** default 14, **Bid color**, **Ask color**).

### TS Settings (il tape stesso)

**Ingranaggio → Settings TS** apre la finestra **TS Settings** con cinque sezioni comprimibili:

| Sezione | Impostazioni |
|---|---|
| GENERAL | **Back color**, **Border color**, **Font color**, **Font size** (default 12.00), **Bold font** (si applica subito con Apply), **Input data** (default **Volume**; passando a **Order** cambia l'intestazione della colonna centrale — il tape mostra allora un conteggio legato agli ordini per stampa invece del volume in contratti; semantica esatta ed eventuali ulteriori opzioni non confermate), **Show milliseconds** (la colonna Time diventa per esempio 02:03:42.382), **TS Mode** (**All trades / Ask trades / Bid trades** — lo stesso filtro dell'ingranaggio). |
| FILTER SETTINGS | **Filter 1** (numero, default 0), **Enable Filter 2** (disattivato), **Filter 2** (numero, default 0). Sembrano soglie di dimensione minima che attivano i set di colori FILTER 1 / FILTER 2 per evidenziare le stampe più grandi — non confermato. |
| FILTER 1 | Dieci campi colore: gli sfondi **Bid**, **Below Bid**, **Between Bid/Ask** (grigio di default), **Ask**, **Above Ask** più i cinque colori di testo corrispondenti. |
| FILTER 2 | Gli stessi dieci campi con un secondo set di colori più saturo. |
| ALERT SOUND | Menu a discesa dei suoni **Enable Filter 1**, **Bid Filter 1** e **Ask Filter 1** con pulsanti di anteprima, **Enable Filter 2**, **Bid/Ask Filter 2**. Presumibilmente riproduce il suono scelto quando una stampa supera il filtro su quel lato — semantica di attivazione non confermata. |

[SCREENSHOT: Finestra TS Settings aperta sulla sezione GENERAL con i campioni Back/Border/Font color, Font size 12.00, l'interruttore Bold font, il menu a discesa Input data impostato su Volume, l'interruttore Show milliseconds e il menu a discesa TS Mode | dc-it-adv-time-and-sales-09.png]

[SCREENSHOT: Finestra TS Settings scorsa fino a FILTER SETTINGS e la sezione FILTER 1 espansa con i campi di sfondo e colore testo Bid, Below Bid, Between Bid/Ask (grigio), Ask e Above Ask | dc-it-adv-time-and-sales-10.png]

## Risoluzione dei problemi

- **Il tape è vuoto o bianco.** Le finestre nuove e duplicate partono vuote e si riempiono solo con le stampe live — aspetta che arrivino trade, verifica che il feed sia connesso e il mercato aperto, poi prova **Ingranaggio → Rebuild TS**. Se il tape resta fermo mentre i grafici si muovono, vedi [[feed-connected-chart-not-moving]].
- **Solo righe verdi / solo righe rosa.** Il filtro per lato del trade è impostato su Ask Trades o Bid Trades. Torna su **All Trades** (controlla anche **Settings TS → TS Mode**).
- **La colonna centrale dice Order invece di Volume.** **Settings TS → GENERAL → Input data** è stato cambiato — riportalo su **Volume**.
- **Il tape sembra bloccato o difettoso.** Prima **Ingranaggio → Rebuild TS**; se è l'intero feed a essere fermo, segui [[data-delayed-lagging]].
- **I numeri nel pannello inferiore non si azzerano.** La modalità di squilibrio del book non ha un Reset per scelta di progetto — rispecchia il book corrente. Solo le modalità Bid/Ask e Delta hanno il controllo verde Reset.

## Suggerimenti ed errori comuni

- Il pannello inferiore mostra una modalità alla volta — Bid/Ask, Delta o squilibrio del book. Se il pannello non ha l'aspetto che ti aspetti, controlla quale dei tre interruttori dell'ingranaggio è attivo.
- Usa **Duplicate Adv. TS** più il menu a discesa del simbolo per eseguire due tape fianco a fianco su strumenti diversi; ogni finestra mantiene filtri, pannelli e impostazioni indipendenti.
- Salva il tuo tape configurato come template (**Ingranaggio → Template → Save As**) così puoi ricostruire il tuo layout in pochi secondi su un nuovo workspace.
- Non leggere le righe grigie come un segnale definitivo — l'interpretazione "dentro lo spread" è probabile ma non confermata. Se la tua strategia dipende da questo, verifica prima con il supporto ([[get-help]]).
- I millisecondi (**Show milliseconds**) valgono la pena quando studi l'attività a raffica — le stampe nello stesso secondo diventano distinguibili.

## Articoli correlati

- [[orderflow-101]]
- [[advanced-dom]]
- [[speed-of-tape]]
- [[big-trades]]
- [[deep-trades]]
- [[symbol-manage]]