---
title: "Gestire e passare da una connessione feed all'altra"
slug: "manage-feed-connections"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Salva più connessioni feed, passa dall'una all'altra, eseguine diverse contemporaneamente, connetti automaticamente all'avvio e rimuovi quelle vecchie."
keywords: ["cambiare feed", "più feed", "selettore feed", "connessione all'avvio", "connessione automatica", "rimuovere connessione", "due feed dati", "cambiare feed dati"]
source_hash: "a14e53ecaf210621"
ai_translated: true
source_hash: "a14e53ecaf210621"
---
Alla fine sarai in grado di mantenere salvate in DeepCharts diverse connessioni feed, passare dall'una all'altra, eseguirne più di una contemporaneamente, connettere automaticamente il tuo feed principale all'avvio e rimuovere le connessioni che non ti servono più.

DeepCharts memorizza ogni connessione che crei in **Feed Settings** come profilo salvato separato. Tutte compaiono nel selettore dei feed nella barra principale, e il puntino di stato accanto a ciascuna ti dice a colpo d'occhio il suo stato di connessione. La cosa fondamentale da tenere a mente per tutto il percorso: quale feed usa effettivamente un grafico è deciso dall'instradamento di **Symbol Manage**, non dal feed a cui ti sei connesso più di recente.

## Prima di iniziare

- Almeno una connessione feed funzionante — [[connect-data-feed]]
- Se prevedi di combinare più feed, verifica a cosa serve ciascuno — [[compatibility-guide]]

## Passaggi

### Leggere il selettore dei feed

1. Guarda il controllo **Select Connection** nella barra principale. Mostra le tue connessioni e un puntino di stato per ciascuna — verde significa connesso.

[SCREENSHOT: Barra principale di DeepCharts con il menu a discesa Select Connection aperto, che elenca diverse connessioni salvate, una con il puntino verde e le altre disconnesse | dc-it-manage-feed-connections-01.png]

> **Nota:** Un puntino giallo su una connessione Rithmic che usa il plugin R Trader significa che DeepCharts sta aspettando R Trader — vedi [[rtrader-pro-plugin]].

### Aggiungere un'altra connessione

2. Fai clic su **Select Connection** → **Feed Settings**.

3. Fai clic su **Add Connection**, compila il modulo per la nuova sorgente feed e fai clic su **Save**. Ogni sorgente ha i propri campi obbligatori — provalo nel mock interattivo di Feed Settings qui sotto: cambia la Feed Source e osserva i campi cambiare, poi segui la guida corrispondente ([[connect-rithmic]], [[connect-dxfeed]], [[connect-cqg]], [[connect-interactive-brokers]], [[competition-connect]], [[end-of-day-data]]).

[WIDGET: feed-navigator]

Alcune sorgenti feed espongono opzioni aggiuntive di comodo nel loro modulo:

| Sorgente feed | Opzione | Cosa fa |
|---|---|---|
| CQG | **Use demo credentials** | Accede con un conto demo CQG invece che con il conto reale |
| CQG | **Connect on startup** | Connette automaticamente questo feed all'apertura di DeepCharts |
| Rithmic | **Include commissions** | Mostra le commissioni nel P/L (attivo per impostazione predefinita) |
| dxFeed | **DOM Type** | Dati di profondità MBO o MBP — MBP è molto più leggero su connessioni lente |

### Passare a un feed diverso

4. Fai clic su **Select Connection** e fai clic sul feed che vuoi. Attendi che il suo puntino diventi verde.

5. Apri **Options → Symbol Manage** e reindirizza i tuoi exchange verso il feed a cui sei passato (icona a catena su ogni riga di exchange). I grafici continuano a leggere dal feed a cui è instradato il loro exchange — se quel feed ora è disconnesso, non mostrano dati. Fai clic sull'icona a catena nel mock interattivo qui sotto per vedere il ciclo dei feed. Vedi [[symbol-manage]].

[WIDGET: symbol-manage-mock]

6. Se un grafico era già aperto, potrebbe aggiornarsi da solo entro pochi secondi. In caso contrario, chiudilo e riaprilo in modo che carichi dal feed appena instradato.

### Eseguire più feed contemporaneamente

7. Connetti ciascun feed da **Select Connection** — puoi mantenere più connessioni verdi contemporaneamente.

8. In **Symbol Manage**, instrada ogni exchange verso il feed che deve servirlo. Combinazioni tipiche:
   - **Esecuzione + dati**: IBKR o un conto contest V-Sim per gli ordini, Rithmic/dxFeed per i grafici — instrada ogni exchange verso il feed dati ([[connect-interactive-brokers]], [[competition-connect]]).
   - **Divisione per exchange**: un feed per il CME, un altro per il COMEX — instrada ogni exchange verso il proprio feed.

> **Attenzione:** In qualsiasi configurazione multi-feed, tutti i feed coinvolti devono essere connessi (verdi) prima di aprire un grafico. Se ne è connesso solo uno, i grafici sugli exchange instradati verso l'altro feed non mostrano dati anche se l'instradamento è corretto.

### Connessione automatica all'avvio

9. In **Feed Settings**, apri la tua connessione principale e attiva **Connect on startup** se l'opzione è presente, poi fai clic su **Save**. DeepCharts connetterà quel feed automaticamente ogni volta che l'app si apre. Questa opzione è stata confermata sul modulo CQG; l'esatta disponibilità può variare in base alla sorgente feed. [CONFIRM: which feed sources besides CQG offer Connect on startup]

### Rimuovere una connessione

10. In **Feed Settings**, seleziona la connessione e fai clic su **Remove**, poi su **Save**.

> **Attenzione:** Rimuovere una connessione elimina le sue credenziali salvate dal modulo — dovrai reinserirle per ricrearla. Dopo, ricontrolla anche **Symbol Manage**: gli exchange che erano instradati verso il feed rimosso hanno bisogno di una nuova assegnazione di Data Feed, altrimenti i loro grafici smetteranno di caricarsi.

### Se usi anche DeepDOM

DeepCharts e DeepDOM condividono **un unico bridge**: una singola connessione al feed dati serve entrambe le app contemporaneamente, ma il bridge non può contenere due configurazioni diverse. Inserisci le impostazioni del feed in modo **identico** in entrambe le app. Se le usi entrambe e una delle due non si connette, verifica innanzitutto che le impostazioni del feed delle due app coincidano esattamente.

## Verifica che abbia funzionato

- Ogni feed che intendi usare mostra un puntino verde in **Select Connection**.
- Ogni exchange in **Symbol Manage** punta a un feed attualmente connesso.
- I grafici si caricano e si muovono su ogni exchange su cui operi.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| Il feed non si connette dopo il cambio | Problema di credenziali o di server su quel profilo — vedi [[fix-username-password]] e [[fix-unable-to-establish-connection]] |
| Puntino verde ma grafici congelati dopo un cambio | L'exchange è ancora instradato verso il vecchio feed — vedi [[feed-connected-chart-not-moving]] |
| Un'app si connette, l'altra no (configurazione DeepDOM) | Le impostazioni del feed differiscono tra le app — rendile identiche |
| L'app va in crash salvando una connessione | Vedi [[app-crashes-saving-feed]] |

## Articoli correlati

- [[connect-data-feed]]
- [[symbol-manage]]
- [[compatibility-guide]]
- [[connect-cqg]]
- [[connect-interactive-brokers]]
- [[feed-connected-chart-not-moving]]