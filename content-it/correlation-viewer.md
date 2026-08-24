---
title: "Correlation Viewer"
slug: "correlation-viewer"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "Confronta il movimento di più strumenti su un unico asse percentuale condiviso, configura il confronto nella finestra Correlation Properties e leggi le barre per simbolo."
keywords: ["correlation viewer", "correlazione", "confrontare simboli", "confrontare strumenti", "forza relativa", "NQ vs ES", "confronto percentuale", "corelation viewer", "select base instrument"]
source_hash: "7fca4bf718525b5f"
ai_translated: true
source_hash: "7fca4bf718525b5f"
---
Il Correlation Viewer mette più strumenti su un unico asse percentuale condiviso, così puoi vedere a colpo d'occhio quale mercato si è mosso di più nella stessa finestra temporale — per esempio NQ rispetto a ES negli ultimi 15 giorni. Invece di confrontare a occhio due grafici con scale di prezzo diverse, ottieni un unico confronto normalizzato.

Questo riferimento copre l'apertura del viewer, la finestra Correlation Properties, l'aggiunta e la rimozione dei simboli di confronto e come si legge la vista renderizzata.

## Che cos'è

Il Correlation Viewer risponde alla domanda "come si sono mossi questi mercati l'uno rispetto all'altro?" Scegli uno strumento base, aggiungi i simboli che vuoi confrontare e il viewer disegna la variazione percentuale di ogni simbolo sullo stesso asse. Poiché tutto è espresso in percentuale anziché in prezzo, strumenti con livelli di prezzo molto diversi (un future su indice contro un future su valuta, per esempio) diventano direttamente confrontabili.

Il viewer carica i propri dati dal tuo feed, come fa un grafico, e le sue impostazioni possono essere modificate in qualsiasi momento dopo la creazione.

[SCREENSHOT: Finestra del Correlation Viewer renderizzata in modalità di visualizzazione Bars con due barre per simbolo (NQ ed ES) su un asse percentuale condiviso, i nomi dei simboli visibili sotto le barre e la scala percentuale sull'asse y | dc-it-correlation-viewer-01.png]

## Quando usarlo

- Fai trading su future su indici correlati (NQ, ES) e vuoi vedere quale sta guidando e quale sta restando indietro.
- Vuoi una lettura rapida della forza relativa su una manciata di mercati senza costruire un layout multi-grafico.
- Vuoi verificare se una correlazione normalmente stretta sta divergendo nella finestra di lookback che hai scelto.
- Vuoi un confronto normalizzato (in percentuale) che ignora i livelli di prezzo assoluti.

## Avvio rapido

1. Nella barra superiore dell'applicazione, scegli **New → Correlation Viewer**.
2. Si apre la finestra **Select Base Instrument** — il selettore di strumenti standard con la barra laterale degli exchange, una casella di filtro a digitazione e una tabella **Symbol / Description / Exchange**. Scegli il tuo simbolo base e premi **Select**.

[SCREENSHOT: Finestra Select Base Instrument con la barra laterale degli exchange (All, CBOT, CME, COMEX, CRYPTO, EUREX, INDEX US e altri), la casella di filtro a digitazione e la tabella dei simboli visibile | dc-it-correlation-viewer-02.png]

3. Si apre la finestra **Correlation Properties**. Nella sezione **GENERAL**, imposta **Days to load**, **TF type** e **TF** per la finestra di confronto.
4. Nella sezione **Symbols**, premi il pulsante verde **Add symbol** per ogni strumento aggiuntivo che vuoi confrontare. Ognuno compare come chip con le proprie impostazioni di colore.

[SCREENSHOT: Finestra Correlation Properties con la sezione Symbols che mostra i chip NQ-CME ed ES-CME, ciascuno con i campioni Price Down Color, Price Up Color e Retracement Color, e il pulsante verde Add symbol | dc-it-correlation-viewer-03.png]

5. Premi **OK**. Il viewer mostra uno spinner "Building chart" mentre scarica i dati, poi renderizza una barra per simbolo sull'asse percentuale condiviso.

> **Nota:** I selettori di strumenti elencano solo gli exchange che hai sottoscritto in Symbol Manage. Se il selettore appare vuoto, configura prima le tue sottoscrizioni — vedi [[symbol-manage]].

## Anatomia della finestra

La barra del titolo contiene, da sinistra a destra:

| Elemento | Cosa fa |
|---|---|
| Logo DeepCharts | Branding della finestra |
| **Icona dell'ingranaggio** | Riapre la finestra Correlation Properties così puoi modificare il confronto dopo la creazione |
| **Icona a imbuto** | [CONFIRM: what the funnel icon does in the Correlation Viewer — it is not necessarily the same rank filter as the Market Scanner's funnel] |
| Riduci a icona / ingrandisci / chiudi | Controlli finestra standard |

[SCREENSHOT: Barra del titolo del Correlation Viewer ingrandita con le icone dell'ingranaggio e dell'imbuto visibili ed etichettate | dc-it-correlation-viewer-04.png]

Mentre il viewer si carica, il corpo della finestra mostra uno spinner "Building chart" e nella barra superiore dell'applicazione compare un badge **DWT:** con il nome del simbolo — DWT significa che i dati vengono scaricati dal server del tuo feed (LDT significherebbe che vengono caricati dati già presenti su disco).

[SCREENSHOT: Correlation Viewer con lo spinner Building chart e il badge DWT: ES-CME visibile nella barra superiore dell'applicazione | dc-it-correlation-viewer-05.png]

## Come leggerlo

Con **Display mode** impostato su **Bars** (la modalità osservata; le altre modalità di visualizzazione non sono state verificate — [CONFIRM: the full Display mode option list and how each renders]), il viewer disegna una barra verticale per simbolo su un asse percentuale condiviso, con il nome del simbolo sotto ogni barra.

Ogni barra riassume il movimento percentuale di quel simbolo nella finestra caricata. In una sessione in cui NQ è sceso molto più di ES, la barra di NQ si è estesa molto più in profondità sull'asse percentuale negativo rispetto alla barra di ES — una lettura visiva immediata della debolezza relativa. Le barre hanno un corpo e un'estensione più sottile simile a un'ombra. [CONFIRM: what the bar body versus the wick represents — for example net change versus the extremes of the loaded window]

I colori delle barre sembrano seguire i **Price Down Color** / **Price Up Color** configurati per ogni simbolo nella sezione Symbols, ma la mappatura esatta dei colori può variare — se i colori sono importanti per la tua lettura, imposta colori distinti per simbolo in modo che ogni barra sia inequivocabile.

[SCREENSHOT: Vista Bars renderizzata ingrandita sulla barra di un simbolo che mostra il corpo e l'estensione più sottile simile a un'ombra contro le etichette dell'asse percentuale | dc-it-correlation-viewer-06.png]

## Aggiungere o rimuovere simboli

Puoi cambiare il confronto in qualsiasi momento:

1. Fai clic sull'**icona dell'ingranaggio** per riaprire **Correlation Properties**.
2. Nella sezione **Symbols**, premi il pulsante verde **Add symbol** — il selettore standard **Select Instrument** si apre sopra la finestra. Scegli un simbolo e conferma; compare come nuovo chip.
3. Per rimuovere un simbolo, passa il mouse sul suo chip e fai clic sull'icona rossa di rimozione che compare.
4. Premi **OK** — il viewer si ricostruisce con il set di simboli aggiornato.

Ogni chip di simbolo ha i propri **Price Down Color** (rosso per impostazione predefinita), **Price Up Color** (verde per impostazione predefinita) e **Retracement Color** (blu per impostazione predefinita).

[SCREENSHOT: Selettore Select Instrument aperto sopra la finestra Correlation Properties dopo aver premuto Add symbol | dc-it-correlation-viewer-07.png]

## Riferimento delle impostazioni

Tutte le impostazioni si trovano nella finestra **Correlation Properties**, mostrata alla creazione e riapribile tramite l'**icona dell'ingranaggio**. **Apply** applica le modifiche in tempo reale; **OK** conferma e chiude.

### GENERAL

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Days to load** | 15 | Quanti giorni di storico copre il confronto. Più giorni = un lookback più lungo e un download iniziale più lungo. |
| **TF type** | Minutes | L'unità del timeframe per i dati sottostanti |
| **TF** | 15 | Il valore del timeframe (con TF type = Minutes, dati a 15 minuti) |
| **Display mode** | Bars | Come viene renderizzato il confronto. **Bars** disegna una barra percentuale per simbolo. [CONFIRM: other Display mode options] |

[SCREENSHOT: Sezione GENERAL di Correlation Properties con Days to load, il menu a discesa TF type, lo stepper TF e il menu a discesa Display mode | dc-it-correlation-viewer-08.png]

### CALCULATION

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Mode** | Zig zag | La modalità di calcolo della correlazione. Zig zag è l'unica modalità osservata. [CONFIRM: other Mode options] |
| **Zig Zag Abs. Rev** | 0.50 | La soglia di inversione dello zig-zag usata dal calcolo. [CONFIRM: the exact unit and semantics of the 0.50 reversal value] |

### Symbols

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Add symbol** | — | Pulsante verde; apre il selettore Select Instrument per aggiungere un simbolo di confronto |
| **Price Down Color** (per simbolo) | Rosso | Colore usato per quel simbolo quando il suo prezzo è sceso |
| **Price Up Color** (per simbolo) | Verde | Colore usato per quel simbolo quando il suo prezzo è salito |
| **Retracement Color** (per simbolo) | Blu | Colore usato per le linee dell'overlay di ritracciamento di quel simbolo |

### RETRACEMENTS

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Enable** | Off | Attiva l'overlay di ritracciamento; le linee di ogni simbolo usano il suo Retracement Color (la posizione esatta delle linee di ritracciamento può variare — attivalo e osserva sui tuoi dati) |
| **Line width** | 1 | Spessore delle linee di ritracciamento |

### REFERENCE LEVEL

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Enable** | Off | Attiva la linea del livello di riferimento. [CONFIRM: what level the reference line marks] |
| **Line width** | 1 | Spessore della linea di riferimento |
| **Line color** | Bianco | Colore della linea di riferimento |

### Aspetto della finestra

La stessa finestra contiene anche le sezioni standard sull'aspetto della finestra presenti nelle altre finestre di DeepCharts:

| Sezione | Impostazioni |
|---|---|
| **CHART AREA** | **Back Color**, **Border Color**, **Text Size** (12.00), **Text Color**, **Crosshair**, **Series Marker Margin (px)** (6) |
| **GRID** | Stile della griglia |
| **USER ANNOTATIONS** | Stile delle annotazioni |
| **EXTRA** | Opzioni aggiuntive (compresse per impostazione predefinita) |

[SCREENSHOT: Finestra Correlation Properties scorsa fino alle sezioni CHART AREA, GRID, USER ANNOTATIONS ed EXTRA con i pulsanti Apply e OK visibili | dc-it-correlation-viewer-09.png]

## Suggerimenti ed errori comuni

- **Bloccato su "Building chart"?** Il viewer scarica i dati prima di renderizzare — il badge **DWT:** nella barra superiore conferma che un download è in corso. Verifica che il puntino del badge del feed sia verde e dai tempo; se i grafici si caricano bene ma il viewer non renderizza mai, chiudilo e riaprilo, e consulta [[data-delayed-lagging]] se i download sono lenti in generale.
- **Un selettore di strumenti vuoto significa nessuna sottoscrizione agli exchange.** Sottoscrivi prima gli exchange che ti servono in [[symbol-manage]].
- **Assegna a ogni simbolo colori distinti.** Con più simboli su un unico asse, i colori **Price Down/Up** per simbolo sono l'unico modo per distinguere rapidamente le barre.
- **Adatta il lookback alla tua domanda.** **Days to load** e **TF** definiscono la finestra di confronto — una finestra di 15 giorni risponde a una domanda diversa da una finestra di 2 giorni.
- **Le impostazioni sono modificabili dopo la creazione.** Non devi mai ricostruire il viewer da zero — l'icona dell'ingranaggio riapre la finestra completa delle proprietà.

## Articoli correlati

- [[scanner-window]]
- [[symbol-manage]]
- [[connect-data-feed]]
- [[chart-window]]
- [[profile-chart-window]]
- [[data-delayed-lagging]]