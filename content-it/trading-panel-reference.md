---
title: "Riferimento del pannello di trading: ogni pulsante e campo"
slug: "trading-panel-reference"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "8 min read"
description: "Riferimento completo del pannello di trading dal grafico: ogni valore, pulsante di ordine, pulsante di uscita e campo OCO, con i valori predefiniti e quando cambiarli."
keywords: ["pannello di trading", "pannello ordini", "MKT BID ASK LMT STP", "ticks diff", "pulsante breakeven", "cancel and flat", "link pending orders", "oco server client", "punto esclamativo rosso oco"]
source_hash: "a480ce839fd38efb"
ai_translated: true
source_hash: "a480ce839fd38efb"
---
Il pannello di trading è la colonna di inserimento ordini agganciata al lato destro di ogni grafico dei prezzi. Questo articolo documenta ogni valore, pulsante e campo, dall'alto verso il basso, così puoi verificare esattamente cosa fa un controllo prima di affidargli ordini reali.

Se non hai mai fatto trading da un grafico, comincia dalla guida passo passo in [[trading-from-chart]] — questa pagina è il riferimento a cui tornare.

## Che cos'è

Il pannello di trading risponde a una sola domanda: come invio, proteggo e chiudo ordini su uno strumento specifico senza lasciare il grafico? Raggruppa in un'unica colonna la selezione dello strumento, i valori della posizione, una griglia di pulsanti per tipo di ordine, pulsanti di uscita a un clic e un blocco di bracket OCO. Compare quando **Trading panel** è attivato nella barra inferiore del grafico (oppure tasto destro → **Show Trading Panel**, **Ctrl Alt P**) e richiede **Trading Enabled** (l'icona **$** verde) — disattivare l'icona $ nasconde automaticamente il pannello.

Esplora il pannello live qui sotto — passa il mouse su ogni pulsante e valore per vedere cosa fa, e fai clic sulla posizione SIM per osservare il P/L aggiornarsi.

[WIDGET: trading-panel-mock]

## Quando usarlo

- Esegui dai grafici e vuoi inserimento ordini, uscite e bracket in un unico posto.
- Devi fare trading su un contratto diverso da quello nel grafico (grafico del mini, ordini sul micro).
- Vuoi azioni di rischio a un clic: **Cancel**, **Flat**, **Cancel and Flat**, **Breakeven**.
- Vuoi bracket automatici di stop/target (OCO) collegati a ogni ingresso.

Per il trading a clic in stile ladder sui livelli di prezzo, usa invece il DOM sul grafico — vedi [[dom-trading-chart]].

## Avvio rapido

1. Apri un grafico e fai clic sull'icona **$** finché diventa verde ([[trading-from-chart]] spiega questo passaggio nel dettaglio).
2. Attiva **Trading panel** nella barra inferiore del grafico.
3. Imposta **Broker** su **SIM** e scegli un conto di simulazione ([[simulation-accounts]]).
4. Imposta **Qty** su 1 e inserisci un ordine di prova con **MKT**.
5. Chiudilo con **Flat**.

## Come interpretarlo

Il blocco di intestazione ti mostra la tua esposizione a colpo d'occhio:

- **Open Qty** — quanti contratti (o azioni) detieni attualmente sullo strumento del pannello. 0 significa flat.
- **Open P/L** — profitto o perdita non realizzati della posizione aperta, aggiornati in tempo reale.
- **Daily P/L** — il profitto o la perdita totale della giornata per questo strumento.

Nel blocco OCO, fai attenzione all'icona **rossa (!)** accanto a **Mode**: significa che la quantità totale della strategia MULTI selezionata non corrisponde al campo **Qty** del pannello, e l'esecuzione è bloccata finché non le fai corrispondere. I segni di spunta verdi indicano che le quantità sono allineate.

[SCREENSHOT: Blocco OCO del pannello di trading in modalità MULTI che mostra l'icona rossa con punto esclamativo accanto al menu a discesa Mode, con il campo Qty del pannello visibile con un valore non corrispondente | dc-it-trading-panel-reference-01.png]

## Riferimento delle impostazioni

### Intestazione — strumento e posizione

| Controllo | Cosa fa |
|---|---|
| Menu a discesa del simbolo | Apre **Select Instrument** per scegliere il contratto su cui il pannello opera. Un grafico nuovo preseleziona il simbolo del grafico; dopo che modifichi uno dei due, grafico e pannello sono indipendenti (osservi NQ, operi su MNQ). Sono elencati solo gli exchange sottoscritti in **Options → Symbol Manage** — [[symbol-manage]]. |
| **Open Qty** | Dimensione della posizione aperta corrente sullo strumento del pannello. |
| **Open P/L** | P/L non realizzato di quella posizione. |
| **Daily P/L** | P/L realizzato più aperto della giornata per lo strumento. |

### Riga del conto

| Controllo | Cosa fa |
|---|---|
| **Qty** | Dimensione in contratti del prossimo ordine. Il valore precompilato e il passo di incremento derivano da **Options → Settings → Trading Quantity** (per simbolo: **Default Quantity** e **Increment Quantity**). È un valore predefinito di comodo, non un limite — i tetti rigidi vanno nel [[risk-manager]]. |
| **Broker** | Quale connessione esegue l'ordine — una connessione feed/broker reale o **SIM** per il trading in simulazione. |
| **Account** | Il conto sotto quella connessione broker (rilevante per configurazioni multi-conto e prop firm). |

### Ticks diff.

| Controllo | Cosa fa |
|---|---|
| Casella **Ticks diff.** + numero | Modifica i pulsanti **BID**/**ASK**. Disattivata (predefinito 0): BID acquista limit al miglior bid, ASK vende limit al miglior ask. Con una differenza N attivata: BID piazza il limit di acquisto N tick sotto il miglior bid, ASK piazza il limit di vendita N tick sopra il miglior ask. Usala per appoggiare ordini a una distanza fissa dietro il mercato con un solo clic. |

### Griglia dei pulsanti di ordine

Ogni riga ha un pulsante di acquisto (a sinistra) e uno di vendita (a destra).

| Pulsante | Ordine inserito | Quando usarlo |
|---|---|---|
| **MKT** | Ordine a mercato | Vuoi entrare o uscire subito e accetti il prezzo corrente. |
| **BID / ASK** | Limit al miglior bid (acquisto) / miglior ask (vendita), con offset **Ticks diff.** se attivo | Ti unisci passivamente al miglior prezzo invece di attraversare lo spread. |
| **LMT** | Limit al prezzo che scegli | Acquista sotto il mercato o vendi sopra. Piazzato sul lato sbagliato viene eseguito immediatamente come ordine a mercato. |
| **STP** | Stop che attiva un ordine a mercato | Acquista sopra il mercato o vendi sotto — ingressi in breakout e stop protettivi. |
| **STP LMT** | Stop-limit | Evita lo slippage al trigger, con il rischio di non essere eseguito affatto. |

### Pulsanti di uscita e annullamento

Tutti e quattro agiscono solo sul simbolo attualmente selezionato nel pannello.

| Pulsante | Cosa fa |
|---|---|
| **Cancel** | Annulla tutti gli ordini attivi (pendenti) — LMT/STP. Le posizioni aperte non vengono toccate. |
| **Flat** | Chiude solo la posizione aperta corrente. |
| **Cancel and Flat** | Chiude la posizione aperta e annulla tutti gli ordini attivi rimanenti. |
| **Breakeven** | Sposta lo stop al breakeven: prezzo di ingresso più il margine **Breakeven - Ticks** impostato in **Options → Settings → General → Trading**. 0 = esattamente all'ingresso; alzalo per coprire commissioni/slippage. |

### Blocco OCO Strategy

Il motore dei bracket — l'esecuzione di un'uscita annulla l'altra. Guida completa: [[oco-strategies]].

| Controllo | Cosa fa |
|---|---|
| Interruttore **OCO Strategy** | Arma i bracket automatici per i nuovi ingressi. |
| **Mode** | **SL/TP** = uno stop loss e un target, ciascuno definito in tick o in denaro e attivabile individualmente. **MULTI** = strategie multi-bracket con nome per lo scaling out. |
| Campi **SL / TP** | Le distanze di stop loss e take profit (tick o denaro) in modalità SL/TP. |
| **BE** | Automazione del breakeven in modalità SL/TP (tick o denaro). |
| **Trail** | Automazione del trailing stop in modalità SL/TP, con i campi di importo di trailing e offset sottostanti. |
| Icona a ingranaggio (MULTI) | Apre l'editor **Oco Strategy**: dai un nome alla strategia, aggiungi bracket **Stop**/**Target** (ognuno con una quantità e un valore **Ticks**/**Money**, aggiunti tramite **Add bracket**), facoltativamente sposta lo stop a breakeven dopo l'esecuzione di un target, poi **Save**. Le strategie salvate diventano selezionabili nel pannello quando la modalità MULTI è attiva. |
| Radio **Server / Client** | Dove risiede il bracket. **Server**: gestito sul server del provider del feed dati — sopravvive alla chiusura della piattaforma o alla perdita di connessione. **Client**: gestito dentro DeepCharts — la piattaforma deve restare aperta e connessa altrimenti l'OCO non è effettivo. Client esiste perché alcuni provider di feed non offrono OCO lato server. |
| **Link pending orders** | Per un take profit e uno stop loss che hai già piazzato senza OCO: apre una finestra per selezionare i due ordini pendenti e collegarli retroattivamente in una coppia OCO. |

> **Attenzione:** Rithmic non consente gli OCO lato server insieme al copy trading. Se usi il [[trade-copier]] su Rithmic, devi usare gli OCO lato **Client** — e mantenere la piattaforma aperta e online, altrimenti i tuoi bracket non scatteranno. Un singolo conto Rithmic senza il copier può usare normalmente Server.

### Impostazioni correlate fuori dal pannello

| Impostazione | Posizione | Cosa fa |
|---|---|---|
| **Breakeven - Ticks** | **Options → Settings → General → Trading** | Margine aggiunto all'ingresso quando il pulsante **Breakeven** sposta il tuo stop. |
| **Frequency Limitation** | **Options → Settings → General → Trading** | Numero massimo di ordini al secondo più una durata di pausa dopo il superamento — protegge da invii accidentali a raffica. |
| **Default / Increment Quantity** | **Options → Settings → Trading Quantity** | Valore iniziale e passo di incremento per simbolo del campo **Qty**. Cambiare il valore predefinito non modifica gli ordini attivi o le posizioni aperte — solo gli ordini futuri. Non è confermato se si applichi anche all'inserimento ordini con clic su DOM/grafico; verifica su un conto SIM. |

## Suggerimenti ed errori comuni

- **Pannello scomparso?** L'icona **$** di Trading Enabled è stata disattivata — nasconde automaticamente il pannello. Riarmala con **Ctrl Alt T**.
- **Limit eseguito istantaneamente al prezzo di mercato.** È stato piazzato sul lato sbagliato (limit di acquisto sopra / limit di vendita sotto). Il ladder a clic in [[dom-trading-chart]] sceglie automaticamente tra LMT e STP in base al livello su cui fai clic, eliminando del tutto la decisione.
- **"Flat" vs "Cancel and Flat".** Flat chiude solo la posizione; uno stop o un target dimenticato resta attivo. Cancel and Flat elimina entrambi. A fine sessione, verifica nella [[orders-window|finestra Ordini]] con il filtro **Submitted** che non sia rimasto nulla di attivo.
- **La strategia MULTI non viene eseguita.** Controlla il punto esclamativo rosso (!) — la quantità totale della strategia deve essere uguale al **Qty** del pannello. Modifica uno dei due per farli corrispondere.
- **I bracket sono spariti dopo la chiusura della piattaforma.** Erano lato Client. Solo gli OCO lato Server sopravvivono con la piattaforma chiusa.
- **Testa le modifiche di dimensione prima su SIM.** Alzare la quantità predefinita da 1 a 2 raddoppia la dimensione — e il rischio — di ogni ordine futuro su quel simbolo.

## Articoli correlati

- [[trading-from-chart]]
- [[oco-strategies]]
- [[dom-trading-chart]]
- [[orders-window]]
- [[risk-manager]]
- [[trade-copier]]