---
title: "Market Scanner"
slug: "scanner-window"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "8 min read"
description: "Osserva più simboli in un'unica tabella con Open, High, Low, Close e variazione percentuale, gestisci l'elenco dei simboli scansionati e filtra la tabella per vedere solo i maggiori movimenti."
keywords: ["scanner", "market scanner", "scaner", "watchlist", "lista di osservazione", "simboli scanner", "elenco simboli", "rank top", "rank worst", "tabella OHLC", "tabella variazione percentuale", "quadro quotazioni"]
source_hash: "3748d8e93a218fa9"
ai_translated: true
source_hash: "3748d8e93a218fa9"
---
Il Market Scanner è una tabella di quotazioni compatta: una riga per simbolo, con **Open**, **High**, **Low**, **Close** e una cella di variazione percentuale che si aggiorna dal tuo feed dati in tempo reale. Ti offre una panoramica del mercato senza dover aprire un grafico separato per ogni strumento che segui.

Questo riferimento copre l'apertura dello Scanner, la gestione del suo elenco di simboli, il lavoro con le risoluzioni, il filtro di ranking e ogni impostazione delle sue finestre di dialogo.

## Che cos'è

Lo Scanner risponde alla domanda "come stanno andando tutti i miei mercati in questo momento?" in un'unica finestra. Ogni simbolo che aggiungi diventa una riga che mostra **Symbol**, **Open**, **High**, **Low**, **Close** e **%** (variazione percentuale) di quello strumento per la risoluzione configurata. La finestra è liberamente ridimensionabile, quindi funziona bene sia come striscia sottile su un monitor laterale sia come quadro quotazioni a schermo intero.

Lo Scanner legge dallo stesso feed in tempo reale dei tuoi grafici. Se il feed si disconnette, la tabella smette di aggiornarsi — vedi le note di risoluzione dei problemi qui sotto.

[SCREENSHOT: Finestra dello Scanner con due righe (ES e NQ) che mostrano le colonne Symbol, Open, High, Low, Close e %, con le celle di variazione percentuale evidenziate | dc-it-scanner-window-01.png]

## Quando usarlo

- Fai trading su un solo strumento ma vuoi tenere il resto della tua watchlist visibile a colpo d'occhio.
- Vuoi una panoramica rapida della sessione (OHLC e variazione percentuale) su più mercati senza caricare grafici completi.
- Vuoi individuare i movimenti più forti e più deboli di un elenco usando il filtro di ranking.
- Vuoi una striscia di quotazioni leggera e sempre in primo piano accanto al layout principale dei tuoi grafici.

## Avvio rapido

1. Nella barra superiore dell'applicazione, scegli **New → Scanner**.
2. Si apre la finestra **Select Instrument** — lo stesso selettore di strumenti usato per i grafici, con una barra laterale degli exchange, una casella di filtro con digitazione e una tabella con **Symbol**, **Description** ed **Exchange**. Scegli il tuo primo simbolo e premi **Select**.

[SCREENSHOT: Selettore Select Instrument aperto da New → Scanner, con la barra laterale degli exchange a sinistra, la casella di filtro con digitazione e una riga di simbolo evidenziata prima di premere Select | dc-it-scanner-window-02.png]

3. La finestra dello Scanner si apre con una riga per quel simbolo. Ridimensiona la finestra liberamente — le colonne si adattano di conseguenza.
4. Per aggiungere altri simboli, fai clic sull'**icona a ingranaggio** nella barra del titolo e scegli **Symbol List**, poi premi **Add** (vedi "Gestire l'elenco dei simboli" più avanti).
5. La risoluzione predefinita è giornaliera ("1 Daily"). Se è quella che vuoi, hai finito — la tabella si aggiorna in tempo reale dal tuo feed.

> **Nota:** Il selettore Select Instrument elenca solo gli exchange che hai sottoscritto in Symbol Manage. Se il selettore appare vuoto, configura prima le tue sottoscrizioni degli exchange — vedi [[symbol-manage]].

## Anatomia della finestra

La barra del titolo contiene, da sinistra a destra:

| Elemento | Cosa fa |
|---|---|
| Logo DeepCharts | Marchio della finestra |
| **Icona a imbuto** | Mostra o nasconde la striscia del filtro di ranking sopra la tabella |
| **Icona a ingranaggio** | Apre il menu delle impostazioni dello Scanner (risoluzioni, elenco simboli, grafica, template) |
| Icona di collegamento (quadrato) | Controllo di collegamento delle finestre, corrispondente al controllo di collegamento delle altre finestre di DeepCharts — vedi [[link-windows]] (il comportamento esatto nello Scanner può variare) |
| Riduci a icona / ingrandisci / chiudi | Controlli standard della finestra |

Sotto la barra del titolo si trova la tabella stessa: **Symbol | Open | High | Low | Close | %**.

[SCREENSHOT: Barra del titolo dello Scanner ingrandita con le icone a imbuto, a ingranaggio e di collegamento visibili ed etichettate | dc-it-scanner-window-03.png]

## Come leggerlo

Ogni riga è un simbolo scansionato sulla risoluzione configurata:

- **Open / High / Low / Close** — i valori OHLC della barra corrente della risoluzione configurata (per la risoluzione predefinita "1 Daily", il giorno corrente).
- **%** — la variazione percentuale, mostrata in una cella evidenziata a colori. [CONFIRM: what the % column is measured against (previous close vs session open) and the exact rule for when the cell shows green vs red]

I simboli appena aggiunti compaiono in cima alla tabella.

> **Nota:** Lo Scanner è una finestra in tempo reale — dipende da una connessione al feed attiva. Osserva il puntino del badge del feed nella barra superiore dell'applicazione: verde significa connesso, rosso significa disconnesso.

## Gestire l'elenco dei simboli

Lo Scanner parte con il solo simbolo che hai scelto alla creazione. Tutto il resto si gestisce in una finestra dedicata:

1. Fai clic sull'**icona a ingranaggio** e scegli **Symbol List**.
2. Si apre la finestra **Scanner Symbols** con le colonne **Symbol**, **Description** ed **Exchange**.
3. Premi il pulsante verde **Add** per aprire il selettore **Select Instrument** e aggiungere un altro simbolo. La tabella dello Scanner si aggiorna immediatamente — nessun riavvio necessario.
4. Seleziona una riga e premi il pulsante rosso **Remove** per rimuovere un simbolo dalla scansione.

[SCREENSHOT: Finestra di gestione Scanner Symbols con le righe NQ ed ES e i pulsanti Remove rosso e Add verde visibili | dc-it-scanner-window-04.png]

Anche i simboli di indici e ampiezza di mercato (gli strumenti con prefisso $ nel selettore) possono essere scansionati, purché il loro gruppo di exchange sia sottoscritto in [[symbol-manage]].

## Risoluzioni

Lo Scanner supporta risoluzioni configurabili, gestite da **icona a ingranaggio → Resolutions**. Il sottomenu elenca la risoluzione corrente — per esempio **1 Daily** — più una voce **Add Resolution**.

Facendo clic su una voce di risoluzione si apre la finestra **Resolution Settings**. Il nome della risoluzione si costruisce da **Param 1** più **Param Type**: Param 1 = 1 con Param Type = Daily si legge "1 Daily"; Param 1 = 5 con Param Type = Minute si legge "5 Minute".

[SCREENSHOT: Finestra Resolution Settings aperta dal menu a ingranaggio dello Scanner, con Days To Load, Param 1, Param 2, il menu a discesa Param Type, l'interruttore Based on minute data, il menu a discesa Continuos contract e gli interruttori Exclude Auction(Tick Data), Filter Bad Ticks ed Extended market hour | dc-it-scanner-window-05.png]

Dopo aver premuto **OK**, la tabella si svuota e si ricarica con la nuova risoluzione — un breve indicatore di caricamento è normale, esattamente come un grafico si ricostruisce dopo un cambio di timeframe.

**Add Resolution** crea una risoluzione aggiuntiva per lo Scanner. [CONFIRM: how the table presents multiple resolutions at once — extra column sets per resolution, or another layout]

## Filtrare i maggiori movimenti (filtro di ranking)

Fai clic sull'**icona a imbuto** nella barra del titolo per mostrare una striscia di filtro sopra la tabella con due controlli:

- **Rank top** — casella di spunta più un selettore numerico (predefinito 0)
- **Rank worst** — casella di spunta più un selettore numerico (predefinito 0)

In base alle loro etichette, questi controlli sembrano limitare la tabella ai primi N e agli ultimi N movimenti per variazione percentuale, ma il comportamento esatto del ranking può variare. [CONFIRM: exact Rank top / Rank worst semantics, and whether 0 means the filter is disabled]

Fai di nuovo clic sull'icona a imbuto per nascondere la striscia.

[SCREENSHOT: Finestra dello Scanner con la striscia del filtro a imbuto visibile sopra la tabella, con le caselle Rank top e Rank worst e i loro selettori numerici | dc-it-scanner-window-06.png]

## Riferimento delle impostazioni

Tutte le impostazioni dello Scanner si trovano dietro l'**icona a ingranaggio** nella barra del titolo.

### Menu a ingranaggio

| Voce | Cosa fa |
|---|---|
| **Resolutions** ▸ | Elenca le risoluzioni configurate e **Add Resolution**; facendo clic su una risoluzione si apre Resolution Settings |
| **Always on Top** | Mantiene lo Scanner sopra le altre finestre — utile per una striscia di quotazioni compatta |
| **Symbol List** | Apre la finestra di gestione Scanner Symbols (aggiunta/rimozione dei simboli scansionati) |
| **Graphics Settings** | Aspetto della tabella: colori di celle e intestazioni e dimensioni del testo |
| **Template** ▸ | Salva o carica una configurazione dello Scanner con un nome, lo stesso schema di template usato nelle finestre di DeepCharts — vedi [[templates-workspaces]] |

[SCREENSHOT: Menu a ingranaggio dello Scanner aperto con le voci Resolutions, Always on Top, Symbol List, Graphics Settings e Template | dc-it-scanner-window-07.png]

### Finestra Resolution Settings

| Impostazione | Cosa fa |
|---|---|
| **Days To Load** | Quanti giorni di storico vengono caricati per questa risoluzione (4 era il valore osservato con 1 Daily; 10 con 5 Minute). Più giorni = ricaricamento più lungo. |
| **Param 1** | Il valore numerico della risoluzione (1 per "1 Daily", 5 per "5 Minute") |
| **Param 2** | Predefinito 0. [CONFIRM: what Param 2 controls] |
| **Param Type** | L'unità della risoluzione — nel menu a discesa sono stati osservati **Daily** e **Minute** |
| **Based on minute data** | Interruttore, attivo per impostazione predefinita — costruisce la risoluzione dai dati a minuti anziché dai dati tick (lo stesso concetto della base BT/BM sui grafici; vedi [[price-chart-settings]]) |
| **Continuos contract** (così etichettato nell'app) | Menu a discesa, predefinito **None** — cucitura del contratto continuo tra le scadenze contrattuali, come l'impostazione dati del grafico; vedi [[symbol-rollover]] |
| **Exclude Auction(Tick Data)** | Interruttore, disattivo per impostazione predefinita — filtra le stampe d'asta dai dati basati sui tick (il comportamento esatto del filtro può variare) |
| **Filter Bad Ticks** | Interruttore, attivo per impostazione predefinita — filtra i tick errati dai dati |
| **Extended market hour** | Interruttore, disattivo per impostazione predefinita — include gli orari della sessione estesa (ETH) quando abilitato |

### Finestra Graphics Settings

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Cell back color** | — | Colore di sfondo delle celle della tabella |
| **Cell selection back color** | Verde | Sfondo della cella evidenziata (l'evidenziazione della cella %) |
| **Cell selection text color** | — | Colore del testo nella cella evidenziata |
| **Cell text color** | — | Colore del testo delle celle normali |
| **Cell text size** | 12.00 | Dimensione del carattere delle celle della tabella |
| **Header back color** | — | Sfondo della riga di intestazione delle colonne |
| **Headers text color** | — | Colore del testo delle intestazioni delle colonne |
| **Header text size** | 14.00 | Dimensione del carattere delle intestazioni delle colonne |

**Apply** mostra le modifiche in tempo reale; **OK** conferma e chiude.

[SCREENSHOT: Finestra Graphics Settings dello Scanner con tutti i selettori di colore di celle e intestazioni e i due campi delle dimensioni del testo | dc-it-scanner-window-08.png]

## Suggerimenti ed errori comuni

- **Lo Scanner parte con un solo simbolo per scelta progettuale.** Scansiona solo ciò che aggiungi — se la tabella appare vuota, apri **icona a ingranaggio → Symbol List** e aggiungi i simboli.
- **Un selettore Select Instrument vuoto significa nessuna sottoscrizione degli exchange**, non uno Scanner guasto. Sottoscrivi prima gli exchange in [[symbol-manage]].
- **Numeri congelati sono quasi sempre un problema di feed.** Controlla il puntino del badge del feed nella barra superiore; se è rosso, sistema prima la connessione — vedi [[connect-data-feed]] e [[feed-connected-chart-not-moving]].
- **Un ricaricamento dopo il cambio di risoluzione è normale.** La tabella si svuota e si ripopola come un grafico che si ricostruisce.
- **Usa Always on Top e una finestra stretta** per una striscia di quotazioni permanente accanto ai tuoi grafici.
- **Salva la tua configurazione come template** (**icona a ingranaggio → Template**) per ripristinare in seguito lo stesso elenco di simboli e lo stesso stile.

## Articoli correlati

- [[correlation-viewer]]
- [[symbol-manage]]
- [[connect-data-feed]]
- [[feed-connected-chart-not-moving]]
- [[price-chart-settings]]
- [[templates-workspaces]]