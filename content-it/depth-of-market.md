---
title: "Indicatore Depth of Market (DOM)"
slug: "depth-of-market"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Riferimento per il price ladder DOM di DeepCharts: colonne, regole di inserimento ordini, colonne pull/stack e trades, profili e impostazioni della profondità."
keywords: ["profondità del mercato", "DOM", "price ladder", "adv dom", "book di negoziazione", "level 2", "pull stack", "ladder bid ask", "colonne dom"]
source_hash: "4ec9994f37a66f40"
ai_translated: true
source_hash: "4ec9994f37a66f40"
---
Il Depth of Market (DOM) è la vista a scala di prezzi (price ladder) del book di negoziazione: una colonna verticale di prezzi con la liquidità in acquisto in attesa (bid) da un lato e la liquidità in vendita in attesa (ask) dall'altro. In DeepCharts il DOM completo è la finestra **Advanced DOM**, e una versione compatta può essere sovrapposta direttamente al grafico.

Questo articolo è il riferimento per l'interfaccia del DOM — le sue colonne, le regole dei clic e le impostazioni. Per la guida completa della finestra vedi [[advanced-dom]]; per il ladder sul grafico vedi [[dom-trading-chart]].

[CONFIRM: whether "Depth of Market" also exists as a standalone chart indicator in the Indicator List, separate from the Advanced DOM window and the on-chart DOM Trading mode — adjust the intro if so]

## Che cos'è

Il DOM risponde alla domanda: chi è in attesa di comprare e vendere a ciascun prezzo, e come faccio a operare contro questa liquidità? Ogni riga è un livello di prezzo. Le quantità bid si accumulano sotto il mercato, le quantità ask sopra, e la visualizzazione si aggiorna in tempo reale man mano che gli ordini vengono aggiunti, ritirati ed eseguiti. Poiché gli ordini si inseriscono facendo clic direttamente su una riga di prezzo, il DOM è lo strumento preferito dai trader che tengono al livello esatto di ingresso e alla posizione in coda più che agli ingressi dal grafico.

Guarda un ladder dal vivo qui sotto — la liquidità in acquisto si accumula in verde sotto il mercato, quella in vendita in viola sopra; passa il mouse su una riga per vedere cosa ti sta dicendo quel livello.

[WIDGET: dom-ladder]

## Quando usarlo

- Scalping o trading di breve termine dove conta il tick esatto di ingresso.
- Osservare come la liquidità in attesa si accumula o scompare attorno a un livello prima di impegnarti.
- Gestire visivamente gli ordini attivi — trascina per spostare, fai clic con il tasto destro del mouse per eliminare.
- Leggere il volume eseguito per livello insieme a un Volume Profile in tempo reale.

## Avvio rapido

1. Apri DeepCharts e collega il tuo feed dati — [[connect-data-feed]].
2. Vai su **New → Book → ADV DOM**.
3. Scegli il tuo strumento dall'elenco dei simboli sottoscritti (ad esempio **ES**) e fai clic su **Select**.
4. Imposta la quantità dell'ordine nel campo in fondo al DOM.
5. Imposta il menu del tipo di ordine (il menu **A**) su **Automatic** — i tipi di ordine vengono così scelti in base a dove fai clic (vedi la tabella qui sotto).

[SCREENSHOT: Menu New aperto con il sottomenu Book e ADV DOM evidenziato, con la finestra Select Instrument visibile dietro | dc-it-depth-of-market-01.png]

> **Nota:** Il DOM ha bisogno dei dati Level 2 (profondità) dal tuo feed per popolare i ladder bid e ask. Con i dati Level 1 è disponibile solo il miglior bid/ask.

## Come leggerlo

Il layout predefinito mostra, da sinistra a destra:

| Colonna | Significato |
|---|---|
| **P&L** | Il tuo profitto o perdita a ogni tick — quanto varrebbe la posizione se il prezzo scambiasse a quel livello |
| **B** | Gestione degli ordini di acquisto |
| **Bid** | Liquidità in acquisto in attesa; fai clic qui per inserire ordini di acquisto |
| **Price** | La scala centrale dei prezzi |
| **Ask** | Liquidità in vendita in attesa; fai clic qui per inserire ordini di vendita |
| **S** | Gestione degli ordini di vendita |
| **VP** | Volume Profile giornaliero — volume eseguito per livello di prezzo |

L'intestazione mostra lo strumento selezionato, il broker connesso, il conto di trading attivo, la quantità della posizione aperta e il P&L giornaliero. Sotto, la tabella dei fondamentali fornisce il contesto di sessione: variazione percentuale rispetto alla chiusura precedente, variazione rispetto all'apertura di sessione, volume totale scambiato, numero di scambi (azioni) e i prezzi di sospensione superiore e inferiore.

Con **Automatic** selezionato nel menu **A**, la posizione del clic decide il tipo di ordine:

| Clic | Ordine |
|---|---|
| Clic sinistro su **Bid** sotto il prezzo corrente | Buy Limit |
| Clic sinistro su **Bid** sopra il prezzo corrente | Buy Stop |
| Clic sinistro su **Ask** sopra il prezzo corrente | Sell Limit |
| Clic sinistro su **Ask** sotto il prezzo corrente | Sell Stop |
| Clic con il tasto destro su **Bid** | Buy Market |
| Clic con il tasto destro su **Ask** | Sell Market |

Gli ordini attivi si gestiscono direttamente sul ladder: **clic sinistro e trascina** per spostare un ordine, **clic con il tasto destro del mouse** per eliminarlo, **doppio clic sinistro** per modificarne la quantità.

[SCREENSHOT: Ladder del DOM con un ordine buy limit attivo nella colonna B trascinato verso una riga di prezzo inferiore, cursore visibile durante il trascinamento | dc-it-depth-of-market-02.png]

### Colonne di analisi opzionali

Fai clic con il tasto destro del mouse sulla riga di intestazione delle colonne per abilitare altre colonne (o ridimensionare automaticamente quelle esistenti):

- **Pull/Stack** (**B.PS** / **A.PS**) — la variazione della liquidità in attesa per livello. Sul lato bid, il verde indica quantità aggiunta (stacked), il rosso quantità rimossa (pulled); il lato ask inverte la logica dei colori.
- **Trades** (**BT** / **AT**) — volume eseguito per livello: BT è il volume venduto a mercato (che colpisce il bid), AT è il volume comprato a mercato (che alza l'ask).
- **Offers** — il conteggio dei singoli ordini in attesa a ciascun livello bid e ask.

[SCREENSHOT: Menu del tasto destro sull'intestazione delle colonne aperto sull'Advanced DOM che mostra l'elenco delle colonne aggiuntive tra cui Pull/Stack, Trades e Offers con i segni di spunta | dc-it-depth-of-market-03.png]

### Profili

Il DOM può disegnare profili accanto al ladder usando i dati **Volume**, **Delta** o **Bid/Ask**. Esistono due modalità di registrazione: il **Resettable Profile** inizia a registrare nel momento in cui lo abiliti e si azzera con l'icona della gomma; il **Daily Profile** mostra i dati dall'inizio della sessione di trading. I concetti alla base della lettura dei profili sono trattati in [[understanding-volume-profile]].

## Riferimento delle impostazioni

Apri le impostazioni del DOM con l'**icona dell'ingranaggio** (in alto a sinistra).

| Gruppo di impostazioni | Cosa fa |
|---|---|
| Interruttori di sezione | Abilita o disabilita intere sezioni del DOM per semplificare il layout |
| **Order Column Settings** | Riordina le colonne |
| **Chart DOM Settings** | Personalizza testo, colori e sfondo |
| Marcatori | Abilita i marcatori di livello per i prezzi **High**, **Low**, **Open** e **Suspension** |
| **DOM Settings → Number of Levels Show** | Limita quanti livelli di profondità vengono visualizzati — imposta 20 per mostrare 20 livelli; lascia senza limite per la profondità completa che il tuo provider invia |
| Sezione **Model** | Salva il tuo layout personalizzato come template e carica in seguito i template salvati |

In fondo alla finestra si trovano il campo della quantità dell'ordine, i classici pulsanti di trading e l'abilitazione **OCO**; l'icona dell'ingranaggio in basso a destra crea, salva e richiama le strategie OCO da un menu a discesa — lo stesso sistema di bracket descritto in [[oco-strategies]].

Scala verticale: sulla colonna **Price**, fare clic vicino al prezzo corrente scorre la vista, mentre fare clic vicino alla parte superiore o inferiore espande o comprime la scala dei prezzi (la colonna usa una modalità di riconoscimento automatico, quindi il comportamento esatto dipende da dove la afferri).

## Suggerimenti ed errori comuni

- **Ladder bid/ask vuoti ma la riga del prezzo si aggiorna** — il tuo feed è solo Level 1. Verifica quale profondità include il tuo piano feed ([[compatibility-guide]]).
- **Tipi di ordine inattesi** — in modalità **Automatic** il tipo deriva dalla posizione del clic rispetto al prezzo corrente. Se vuoi forzare un tipo, passa il menu **A** su **Limit**, **Market** o **Conditional**.
- **Troppo sfarfallio sui mercati veloci** — limita **Number of Levels Show** e disabilita le colonne che non leggi; meno profondità significa una visualizzazione più calma e veloce.
- **Layout perso dopo averlo ricostruito** — salvalo nella sezione **Model** così puoi ricaricarlo su qualsiasi DOM.
- **Osservare la liquidità senza voler operare** — ricorda che ogni clic sinistro su Bid/Ask inserisce un ordine reale quando c'è un conto attivo. Esercitati prima a leggere il ladder su un conto SIM ([[simulation-accounts]]).

## Articoli correlati

- [[advanced-dom]]
- [[dom-trading-chart]]
- [[trading-panel-reference]]
- [[oco-strategies]]
- [[orderflow-101]]
- [[understanding-volume-profile]]