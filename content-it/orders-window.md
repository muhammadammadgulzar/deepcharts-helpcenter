---
title: "Finestra Ordini"
slug: "orders-window"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "3 min read"
description: "Visualizza, filtra e verifica ogni ordine su una connessione broker — e individua gli ordini attivi dimenticati prima della fine della sessione."
keywords: ["finestra ordini", "mostra ordini", "elenco ordini", "ordini pendenti", "ordini attivi", "ordini inviati", "ordini non eseguiti", "cronologia ordini", "stato ordine"]
source_hash: "fc892badc5b861d2"
ai_translated: true
source_hash: "fc892badc5b861d2"
---
La finestra Ordini è l'elenco principale di ogni ordine che DeepCharts conosce su una connessione broker — quelli ancora attivi nel mercato, quelli eseguiti e quelli che hai annullato. Quando devi rispondere alla domanda "ho ancora un ordine là fuori?", questa è la finestra che ti risponde.

La apri dalla barra principale: **Trading → Show Orders**.

## Che cos'è

Un'unica tabella dei tuoi ordini per broker, con filtri per stato dell'ordine. Mentre il pannello di trading mostra cosa sta accadendo su un simbolo in questo momento, la finestra Ordini mostra tutto ciò che la connessione ha fatto — il che la rende il posto giusto per verificare le esecuzioni, rivedere gli annullamenti e, soprattutto, trovare ordini attivi che potresti aver dimenticato.

[SCREENSHOT: La finestra Ordini aperta da Trading → Show Orders, con il menu a discesa Broker in alto e un elenco ordini popolato con un misto di ordini eseguiti e inviati | dc-it-orders-window-01.png]

## Quando usarla

- **A fine sessione** — conferma che nessun ordine attivo sia ancora in attesa nel mercato prima di allontanarti.
- **Dopo un'esecuzione inattesa** — verifica quando e in quale stato un ordine è stato eseguito.
- **Quando un limit o uno stop sembra scomparso** — potrebbe essere ancora attivo, o potrebbe essere stato annullato; i filtri ti dicono quale dei due.
- **Quando posizioni e ordini non corrispondono alla tua idea mentale** — riconcilia con l'elenco reale invece di tirare a indovinare.

## Guida rapida

1. Fai clic su **Trading → Show Orders** nella barra principale.
2. Seleziona la connessione da ispezionare nel menu a discesa **Broker**.
3. Scegli una vista filtro: **Placed**, **Executed**, **Cancelled** o **All**.
4. Per vedere solo gli ordini ancora attivi e non eseguiti, vai alla sezione **Status** e scegli **Submitted**.

[SCREENSHOT: La finestra Ordini con il filtro Status impostato su Submitted, che mostra nell'elenco solo gli ordini attivi non eseguiti | dc-it-orders-window-02.png]

## Come leggerla

Lo stato è la colonna chiave:

| Stato | Significato |
|---|---|
| **Submitted** | L'ordine è attivo e non eseguito — un limit o uno stop ancora in attesa nel mercato. Può essere eseguito in qualsiasi momento. |
| **Executed** | L'ordine è stato eseguito. |
| **Cancelled** | L'ordine è stato ritirato (da te, da un abbinamento OCO o dalla piattaforma) e non può più essere eseguito. |

[CONFIRM: full column list of the Orders window table (time, symbol, side, quantity, price, etc.)]

> **Suggerimento:** Rendi il controllo **Submitted** parte della tua routine di chiusura. Uno stop o un limit attivo dimenticato può essere eseguito ore dopo in un mercato illiquido — la finestra Ordini filtrata su Submitted è il modo più rapido per dimostrare che sei davvero flat e senza ordini.

## Riferimento delle impostazioni

La finestra non ha una finestra di dialogo delle impostazioni; i suoi controlli sono i filtri in alto.

| Controllo | Cosa fa |
|---|---|
| **Broker** | Seleziona di quale connessione elencare gli ordini. Gli ordini delle altre connessioni non vengono mostrati — cambia qui se gli ordini sembrano "mancare". |
| **Placed** | Mostra gli ordini inviati al mercato. |
| **Executed** | Mostra solo gli ordini eseguiti. |
| **Cancelled** | Mostra solo gli ordini annullati. |
| **All** | Mostra ogni ordine indipendentemente dallo stato. |
| **Status: Submitted** | Restringe l'elenco agli ordini attivi non eseguiti. |

## Suggerimenti ed errori comuni

- **"Il mio ordine non è nell'elenco"** — controlla prima il menu a discesa **Broker**. La finestra mostra una connessione alla volta.
- **Annullare da qui vs. dal pannello** — il pulsante **Cancel** del pannello di trading annulla tutti gli ordini attivi solo per il simbolo selezionato nel pannello. Usa la finestra Ordini per vedere cosa è attivo sui vari simboli prima di farci affidamento. Vedi [[trading-panel-reference]] per l'esatta portata di ogni pulsante.
- **Submitted non è uno stato problematico** — un limit in attesa lontano dal prezzo è Submitted per definizione. La domanda è se *intendevi* che fosse ancora attivo.
- **Coppie OCO** — quando un lato di un OCO viene eseguito, l'altro viene annullato automaticamente; vedrai una voce Executed e una Cancelled. Vedi [[oco-strategies]].

Non sei sicuro di cosa tocchino davvero i pulsanti di annullamento del pannello? Passaci sopra il mouse nel pannello live qui sotto — poi verifica il risultato qui con il filtro **Submitted**.

[WIDGET: trading-panel-mock]

## Articoli correlati

- [[trading-panel-reference]]
- [[trading-from-chart]]
- [[oco-strategies]]
- [[portfolio-wallet]]
- [[performance-analysis]]