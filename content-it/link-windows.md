---
title: "Collegare le finestre con i gruppi colore"
slug: "link-windows"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "5 min to complete"
description: "Unisci i grafici in un gruppo di collegamento colorato, così cambiando il simbolo su un grafico lo cambi su tutti i grafici collegati in una sola azione."
keywords: ["collegare grafici", "gruppi colore", "icona link", "sincronizzare simbolo", "finestre collegate", "cambiare simbolo su tutti i grafici", "collegamento grafici", "Link Trading Symbol"]
source_hash: "f5cd91ade79a4361"
ai_translated: true
source_hash: "f5cd91ade79a4361"
---
Alla fine avrai due o più grafici uniti in un gruppo di collegamento colorato, così cambiando il simbolo su un grafico (per esempio NQ → ES) lo cambi su tutti in un'unica azione.

È il modo più veloce per gestire un workspace multi-timeframe: un grafico a 1 minuto, uno a 5 minuti, uno a 15 minuti — tutti che seguono lo stesso strumento, ciascuno mantenendo il proprio timeframe e le proprie impostazioni.

## Prima di iniziare

- Almeno due grafici dei prezzi aperti — [[first-chart]]
- Gli strumenti tra cui intendi passare sottoscritti in Symbol Manage — [[symbol-manage]] (il selettore degli strumenti mostra solo gli exchange a cui sei sottoscritto)

## Passaggi

1. Sul primo grafico, fai clic sull'icona quadrata **link** in alto a destra nella barra del titolo della finestra, a sinistra del pulsante di riduzione a icona.

[SCREENSHOT: Angolo in alto a destra di una finestra grafico con l'icona quadrata link evidenziata, a sinistra dei pulsanti riduci/ingrandisci/chiudi | dc-it-link-windows-01.png]

2. Si apre il menu di collegamento con queste opzioni: **None link**, da **Link 1** a **Link 8** (ognuno con il proprio colore — Link 1 rosso, Link 2 verde, Link 3 blu, Link 4 magenta, Link 5 viola, Link 6 giallo, Link 7 ciano, Link 8 rosa) e **$ Link Trading Symbol**. Seleziona **Link 1**.

[SCREENSHOT: Menu di collegamento del grafico aperto con None link, le otto voci Link colorate e l'opzione $ Link Trading Symbol, con Link 1 evidenziato | dc-it-link-windows-02.png]

3. Sul secondo grafico, apri lo stesso menu di collegamento e seleziona anche lì **Link 1**. Entrambi i grafici appartengono ora allo stesso gruppo colore.

4. Cambia il simbolo su uno dei due grafici: fai clic sul menu a discesa del simbolo nella barra del titolo del grafico e scegli un nuovo strumento nella finestra di dialogo **Select Instrument**. Puoi provare l'intero flusso dal vivo qui sotto — imposta entrambi i mini grafici sullo stesso colore di collegamento, poi cambia il simbolo su uno e osserva l'altro seguirlo con un lampeggio.

[WIDGET: link-groups-demo]

5. Conferma la selezione — ogni grafico che condivide quel colore di collegamento passa al nuovo simbolo.

> **Nota:** I gruppi colore sincronizzano solo il simbolo. Timeframe, indicatori, disegni e ogni altra impostazione restano indipendenti per ciascun grafico. Per replicare i disegni tra i grafici, usa invece clic con il tasto destro del mouse → **Drawing Tool From Other Chart** — vedi [[drawing-tools]].

### Se vuoi scollegare un grafico

Apri il menu di collegamento del grafico e seleziona **None link**. Il grafico mantiene il simbolo attuale ma smette di seguire il gruppo.

### Se vuoi più gruppi indipendenti

Usa colori diversi. Con otto gruppi di collegamento puoi, per esempio, tenere tre grafici che seguono NQ su **Link 1** e due grafici che seguono ES su **Link 2** — i gruppi non si influenzano mai a vicenda.

### Se sei curioso di "$ Link Trading Symbol"

L'ultima voce del menu di collegamento collega un simbolo di trading anziché un gruppo colore di grafici. [CONFIRM: exact behavior of the "$ Link Trading Symbol" option — what it links and across which windows/panels]

[CONFIRM: whether non-chart windows (Advanced DOM, Advanced Time And Sales, Profile Chart) can join the same color link groups]

## Verifica che abbia funzionato

Cambia il simbolo su un qualsiasi grafico del gruppo. Tutti i grafici con lo stesso colore di collegamento si ridisegnano con il nuovo strumento in pochi istanti, mentre il timeframe e gli indicatori di ciascun grafico restano esattamente com'erano.

## Se qualcosa è andato storto

- **L'altro grafico non è passato al nuovo simbolo** — i due grafici non sono sullo stesso colore. Apri il menu di collegamento su ciascuno e conferma che sia selezionata la stessa identica voce **Link** (non **None link**).
- **Il nuovo simbolo manca dalla finestra di dialogo Select Instrument** — il suo exchange non è sottoscritto. Correggi la sottoscrizione in [[symbol-manage]], oppure vedi [[symbol-subscription-issue]].
- **Un grafico collegato non mostra dati sul nuovo simbolo** — l'instradamento del feed per quell'exchange potrebbe essere diverso. Controlla l'assegnazione del feed dati dell'exchange in [[symbol-manage]] e vedi [[feed-connected-chart-not-moving]].

## Articoli correlati

- [[chart-window]]
- [[first-chart]]
- [[symbol-manage]]
- [[drawing-tools]]
- [[multi-monitor-windows]]
- [[templates-workspaces]]