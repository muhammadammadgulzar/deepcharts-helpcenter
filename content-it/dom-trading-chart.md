---
title: "DOM Trading sul grafico (ladder con click-trading)"
slug: "dom-trading-chart"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Attiva il ladder DOM sul grafico e inserisci ordini di acquisto e vendita con un singolo clic nelle colonne di prezzo verde e rossa."
keywords: ["dom trading", "chart dom", "click trading", "trading su ladder", "colonne verde rossa", "cancel all", "flat all", "smart dom", "mini dom", "trading con un clic"]
source_hash: "0a897e57b1f65e9d"
ai_translated: true
source_hash: "0a897e57b1f65e9d"
---
Alla fine avrai il ladder di click-trading attivo sul tuo grafico e saprai esattamente cosa fanno un clic sinistro e un clic con il tasto destro nelle colonne verde e rossa.

**DOM Trading** sovrappone due colonne verticali al bordo destro del grafico dei prezzi — una colonna verde di acquisto e una rossa di vendita — così puoi inserire ordini a livelli di prezzo esatti con un solo clic. Il suo più grande vantaggio rispetto alla griglia di pulsanti: la piattaforma sceglie il tipo di ordine corretto (limit o stop) in base al livello su cui fai clic, così un errore tipo "buy limit sopra il mercato" diventa impossibile.

## Prima di iniziare

- Un grafico aperto con un feed dati connesso — [[first-chart]], [[connect-data-feed]]
- Trading attivato sul grafico (icona **$** verde) e pannello di trading disponibile — [[trading-from-chart]]
- Quantità dell'ordine impostata nel campo **Qty** del pannello di trading — il ladder la usa per ogni clic
- Consigliato: esercitati prima su un conto SIM — [[simulation-accounts]]

## Passaggi

1. Nella barra inferiore del grafico, seleziona il pulsante di scelta **DOM Trading**. Al bordo destro del grafico compaiono due colonne a tutta altezza — una colonna verde di acquisto e una rossa di vendita — con un'etichetta **D:** in alto e i pulsanti arancioni **CANCEL ALL** / **FLAT ALL** in basso.

[SCREENSHOT: Grafico dei prezzi con DOM Trading abilitato — colonna verde di acquisto e colonna rossa di vendita al bordo destro, l'etichetta D: 0.00 $ in cima al ladder e i pulsanti arancioni CANCEL ALL e FLAT ALL in basso, con il pulsante DOM Trading della barra inferiore evidenziato | dc-it-dom-trading-chart-01.png]

2. Imposta la tua dimensione nel campo **Qty** del pannello di trading. Ogni clic sul ladder invia questa quantità.

3. Per comprare, fai clic sinistro sulla colonna **verde** al prezzo che vuoi. La piattaforma sceglie il tipo di ordine in base a dove si trova il livello rispetto al prezzo corrente:

| Fai clic su | Ordine inserito |
|---|---|
| Colonna verde sotto il prezzo corrente | Buy Limit |
| Colonna verde sopra il prezzo corrente | Buy Stop |
| Colonna rossa sopra il prezzo corrente | Sell Limit |
| Colonna rossa sotto il prezzo corrente | Sell Stop |

Per vendere, fai lo stesso nella colonna **rossa**. Questa selezione automatica significa che l'ordine finisce sempre sul lato corretto del mercato.

Prendi confidenza con la logica dei livelli sul ladder dal vivo qui sotto — i sell limit stanno in viola sopra il mercato, i buy limit in verde sotto; passa il mouse su un livello per vedere perché quel lato riceve quel tipo di ordine.

[WIDGET: dom-ladder]

4. Per operare a mercato, **fai clic con il tasto destro del mouse** nella colonna: il clic destro nella colonna verde invia un ordine Buy Market, il clic destro nella colonna rossa invia un ordine Sell Market, indipendentemente dal livello (comportamento predefinito).

5. Gestisci gli ordini attivi direttamente sul ladder: **clic sinistro** su un ordine esistente per spostarlo a un altro livello, **clic con il tasto destro** per annullarlo.

6. Leggi le informazioni del ladder. L'etichetta **D:** in cima al ladder è la lettura del profitto e perdita della tua posizione. Se il tuo feed fornisce la profondità Level 2, il ladder mostra anche la liquidità in attesa a ciascun livello di prezzo — fai zoom sul grafico per vedere i numeri. Con i dati Level 1 vengono mostrati solo il miglior bid e il miglior ask.

[SCREENSHOT: Ladder del DOM ingrandito su un feed Level 2 che mostra le quantità di liquidità in attesa nei livelli di prezzo delle colonne verde e rossa | dc-it-dom-trading-chart-02.png]

7. Usa i pulsanti di emergenza arancioni in fondo al ladder: **CANCEL ALL** annulla gli ordini attivi, **FLAT ALL** chiude le posizioni.

> **Attenzione:** Non è confermato se **CANCEL ALL** e **FLAT ALL** agiscano solo sul simbolo del pannello o su tutti i simboli e i conti — l'ambito esatto può variare. [CONFIRM: scope of the ladder's CANCEL ALL / FLAT ALL buttons — panel symbol only, or all symbols/accounts] Finché non lo avrai verificato su un conto SIM, trattali come interruttori di emergenza a livello di piattaforma.

### Se vuoi personalizzare il ladder

Apri il menu a discesa accanto al pulsante **DOM Trading** nella barra inferiore:

- **Enable Chart Trading** — attiva o disattiva l'inserimento degli ordini dal grafico stesso.
- **Chart Trading Width** — definisce la larghezza delle colonne del Chart DOM.
- **Trading Colors** — personalizza i colori delle colonne.
- **Line Bid/Ask** — mostra o nasconde la linea bid/ask.
- **DOM Settings** — mostra la profondità del mercato con personalizzazione dei colori.
- **Text Settings** — abilita il testo sul grafico e ne regola colore e aspetto.

[SCREENSHOT: Il menu a discesa DOM Trading aperto nella barra inferiore del grafico che mostra Enable Chart Trading, Chart Trading Width, Trading Colors, Line Bid/Ask, DOM Settings e Text Settings | dc-it-dom-trading-chart-03.png]

### Se vuoi bracket collegati agli ingressi dal ladder

Abilita il blocco **OCO Strategy** nel pannello di trading prima di fare clic — gli ingressi ricevono automaticamente uno stop e un target. Vedi [[oco-strategies]].

## Verifica che abbia funzionato

Fai clic sinistro sulla colonna verde qualche tick sotto il prezzo corrente su un conto SIM: un Buy Limit appare a quel livello sul ladder e nella [[orders-window|finestra Ordini]]. Trascinalo di un livello — si sposta. Fai clic con il tasto destro — si annulla. Dopo un trade di prova eseguito, l'etichetta **D:** si aggiorna con il tuo P/L.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| I clic nelle colonne non fanno nulla | Verifica **Trading Enabled** (icona **$** verde) e l'interruttore **Enable Chart Trading** nel menu a discesa DOM Trading — [[trading-from-chart]] |
| Nessun numero di liquidità nel ladder | Il tuo feed fornisce solo Level 1 — il ladder ha bisogno dei dati Level 2 per mostrare la liquidità in attesa per livello; prova anche a fare zoom in modo che le righe siano abbastanza alte per i numeri |
| Ordine inserito con la dimensione sbagliata | Il ladder usa il campo **Qty** del pannello di trading — controllalo prima di fare clic |
| Ordini bloccati dopo diversi clic rapidi | La protezione **Frequency Limitation** in **Options → Settings → General → Trading** ha messo in pausa gli invii — vedi [[trading-panel-reference]] |
| Il grafico non si aggiorna affatto | [[feed-connected-chart-not-moving]] |

## Articoli correlati

- [[trading-from-chart]]
- [[trading-panel-reference]]
- [[depth-of-market]]
- [[advanced-dom]]
- [[oco-strategies]]
- [[orders-window]]