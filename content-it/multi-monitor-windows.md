---
title: "Disporre le finestre su più monitor (e recuperare le finestre fuori schermo)"
slug: "multi-monitor-windows"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Distribuisci grafici, DOM e altre finestre di DeepCharts su più monitor, salva il layout come workspace e recupera le finestre bloccate fuori schermo."
keywords: ["più monitor", "multi monitor", "secondo schermo", "finestra fuori schermo", "finestra scomparsa", "recuperare finestra", "posizionare finestre", "staccare grafico", "configurazione doppio monitor"]
source_hash: "b188b53375c6a173"
ai_translated: true
source_hash: "b188b53375c6a173"
---
Alla fine di questa guida avrai le tue finestre di DeepCharts disposte su tutti i tuoi monitor, salvate come workspace così il layout sopravvive a un riavvio — e saprai come recuperare una finestra che si apre fuori schermo dopo che un monitor è stato scollegato o una risoluzione è cambiata.

Le finestre di DeepCharts (grafici, DOM, Time and Sales, Scanner e tutte le altre) sono finestre flottanti libere, quindi un layout multi-monitor è per lo più questione di trascina e rilascia. Le due parti che sfuggono di solito sono lo sganciamento delle schede dei grafici in finestre autonome e il salvataggio del risultato come workspace.

## Prima di iniziare

- [[first-chart|Sai aprire un grafico]] e ne hai almeno uno aperto
- [[templates-workspaces|Conosci la differenza tra template e workspace]] — un workspace è ciò che salva un layout multi-finestra
- Tutti i monitor sono collegati e rilevati da Windows (compaiono nelle impostazioni dello schermo di Windows)

## Passaggi

1. Apri ogni finestra di cui hai bisogno dal menu **New** nella barra dei menu principale: **Price Chart**, **Book** (per **Adv. Dom** e le varianti orizzontale/verticale del DOM), **Adv. Time And Sales**, **Correlation Viewer**, **Profile Chart** o **Scanner**. Ognuna si apre come finestra a sé.

   [SCREENSHOT: Barra dei menu principale di DeepCharts con il menu New aperto, che mostra Adv. Time And Sales, il sottomenu Book, Correlation Viewer, Price Chart, Profile Chart e Scanner | new-menu-window-types.png]

2. Trascina ogni finestra per la sua barra del titolo sul monitor dove la vuoi, e lì ridimensionala. Le finestre di DeepCharts si comportano come normali finestre di applicazione, quindi anche la scorciatoia di Windows Win+Shift+freccia sinistra/destra sposta la finestra attiva sul monitor successivo.

   [SCREENSHOT: Due monitor affiancati con un grafico DeepCharts trascinato dal monitor principale a quello secondario | drag-window-between-monitors.png]

   ### Se i tuoi grafici sono schede dentro un'unica finestra grafico

   Una finestra grafico può contenere più grafici come schede (il **+** verde nella barra del titolo ne aggiunge una). Le schede non possono stare su monitor diversi, quindi sgancia quelle che vuoi altrove:

   1. Con una sola scheda visibile, fai clic sull'icona apri-in-nuova-finestra nella barra del titolo del grafico (a sinistra del **+** verde). Con più schede, fai clic sulla scheda attiva e scegli **Detach** nel popover che compare.
   2. La scheda diventa una finestra grafico autonoma — con il proprio simbolo, timeframe, pannello di trading e stato del DOM — che puoi trascinare su qualsiasi monitor.

   [SCREENSHOT: Popover della scheda grafico aperto su una scheda attiva, con i menu a discesa di simbolo, range e timeframe più i pulsanti Detach verde e Close rosso | chart-tab-detach-popover.png]

   ### Se vuoi che i grafici su monitor diversi seguano un unico simbolo

   Usa i gruppi di colori di collegamento: fai clic sull'icona quadrata di collegamento in alto a destra di ogni grafico (a sinistra di riduci a icona) e assegna ai grafici lo stesso colore **Link** (1–8). Cambiare il simbolo su un grafico lo cambia allora su tutti i grafici del gruppo — il collegamento sincronizza solo il simbolo, non il timeframe né i disegni. Provalo qui sotto: assegna a entrambi i mini grafici lo stesso colore e cambia il simbolo su uno di essi. Vedi [[link-windows]].

[WIDGET: link-groups-demo]

   ### Se vuoi che una finestra resti visibile sopra le altre applicazioni

   Su un grafico, fai clic sull'icona a ingranaggio nella fila di icone in alto a sinistra e abilita **Always on top**; la finestra resterà allora sopra ogni altra finestra del sistema operativo finché non la disabiliti. Per la barra di controllo principale esiste un interruttore separato **Control bar always on top** in **Options → Settings → General**, nella sezione **VARIOUS**.

3. Facoltativamente, usa lo strumento di disposizione integrato: **Window → Position windows**. La finestra di dialogo elenca gli interruttori per tipo di finestra (**Adv Dom**, **Adv Time And Sales**, **Correlation Viewer**, **Chart**, **Scanner**, **Compact Dom**), un elenco dei tuoi monitor con le loro risoluzioni e un interruttore **Position only windows inside selected monitors**. Seleziona i tipi di finestra e i monitor di destinazione, poi fai clic su **Position**. [CONFIRM: exact placement behavior of the Position windows dialog — how positioned windows are arranged on the selected monitors]

   [SCREENSHOT: Menu Window aperto con Position windows selezionato, e la finestra Position windows che mostra gli interruttori per tipo di finestra, l'elenco dei monitor con le risoluzioni, l'interruttore Position only windows inside selected monitors e i pulsanti Close e Position | position-windows-dialog.png]

4. Salva il layout come workspace: premi Ctrl Alt S (**Workspace save**) oppure usa l'opzione di salvataggio del pannello workspace, e scegli l'archiviazione **Local** o **Cloud**. I workspace Cloud sono legati alla tua licenza e ti seguono sugli altri PC.

   > **Attenzione:** DeepCharts non salva automaticamente i layout. Se chiudi l'app senza salvare un workspace, l'avvio successivo parte dal layout predefinito e la tua disposizione è persa — non si è rotto nulla, semplicemente non era mai stata salvata.

## Verifica che abbia funzionato

- Ogni monitor mostra le finestre che vi hai collocato, e ogni grafico sganciato mantiene il proprio simbolo, timeframe e pannello di trading.
- Riavvia DeepCharts e carica il tuo workspace (Ctrl Alt O, oppure il pannello workspace). L'intero layout torna. Se la configurazione dei monitor è cambiata tra le sessioni (uno schermo rimosso o una risoluzione modificata), le posizioni delle finestre potrebbero non essere ripristinate esattamente — risistemale una volta e salva di nuovo.

## Se qualcosa è andato storto

- **Una finestra si apre fuori schermo** (tipico dopo aver scollegato il monitor su cui viveva). Prova questi rimedi in ordine, dal meno invasivo:
  1. Spostamento nativo di Windows: porta a fuoco la finestra con Alt+Tab, premi Alt+Barra spaziatrice, scegli **Sposta** (o premi M), premi i tasti freccia finché la finestra non compare, poi fai clic per rilasciarla. Anche Win+Shift+freccia sinistra/destra riporta la finestra attiva sul monitor successivo.
  2. **Window → Position windows**: abilita **Position only windows inside selected monitors**, seleziona solo i monitor che hai ancora e il tipo di finestra interessato, poi fai clic su **Position**. Il comportamento esatto può variare — vedi la nota di conferma al passaggio 3.
  3. La scorciatoia predefinita Ctrl Alt R (**Reset open windows**) è pensata per reimpostare le finestre aperte; il comportamento esatto può variare. Vedi [[keyboard-shortcuts-reference]].
- **Ti viene chiesto "Are you sure to close the window?"** — la chiusura di una finestra grafico sganciata mostra questa conferma. Scegli **No** se hai fatto clic sulla X per errore; il grafico resta.
- **L'intero layout è sparito dopo un riavvio** — il workspace non era mai stato salvato (non esiste il salvataggio automatico). Ricostruisci il layout una volta e salvalo: [[templates-workspaces]].
- **Cambiare un simbolo ha cambiato più grafici insieme** — quei grafici condividono un gruppo di colori di collegamento. Imposta il menu di collegamento su **None link** sui grafici che vuoi indipendenti: [[link-windows]].

## Articoli correlati

- [[templates-workspaces]]
- [[link-windows]]
- [[chart-window]]
- [[keyboard-shortcuts-reference]]
- [[advanced-dom]]
- [[adv-time-and-sales]]