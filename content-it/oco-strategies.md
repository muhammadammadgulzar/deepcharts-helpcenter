---
title: "Strategie OCO (One-Cancels-the-Other)"
slug: "oco-strategies"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "intermediate"
time: "15 min to complete"
description: "Collega automaticamente bracket di stop loss e take profit ai tuoi ingressi con le modalità SL/TP e Multi OCO, e scegli tra gestione lato server e lato client."
keywords: ["oco", "one cancels the other", "ordine cancella ordine", "ordini bracket", "stop loss take profit", "sl tp", "modalità multi", "oco server client", "move be", "collegare ordini pendenti", "punto esclamativo rosso"]
source_hash: "a6296f498e8414e4"
ai_translated: true
source_hash: "a6296f498e8414e4"
---
Alla fine avrai bracket automatici di stop loss e take profit collegati a ogni ingresso, e saprai se vivono sul server del broker o dentro la tua piattaforma — una distinzione che decide se la tua protezione sopravvive a un crash.

Una strategia OCO (One-Cancels-the-Other) collega due ordini di uscita a una posizione: un ordine limit che prende profitto e un ordine stop che limita la perdita. Quando uno dei due viene eseguito, l'altro viene cancellato automaticamente — non potrai mai ritrovarti con un'uscita orfana attiva contro una posizione che non esiste più.

I controlli dei bracket vivono sul pannello di trading del grafico — prendici confidenza qui sotto; passa il mouse sul controllo OCO e sui pulsanti di uscita per vedere come interagiscono.

[WIDGET: trading-panel-mock]

## Prima di iniziare

- Trading dal grafico attivato e pannello di trading aperto — [[trading-from-chart]]
- Conosci i campi e i pulsanti del pannello — [[trading-panel-reference]]
- Un conto SIM per testare il comportamento dei bracket senza rischi — [[simulation-accounts]]
- Se copi le operazioni tra conti, leggi prima l'avvertenza su Rithmic qui sotto — [[trade-copier]]

## Passaggi

1. Apri il **Trading Panel** sul tuo grafico.

2. Abilita la casella **OCO Strategy**. Il blocco OCO sottostante diventa attivo.

[SCREENSHOT: Pannello di trading con la casella OCO Strategy abilitata, con il menu a discesa Mode, i campi in tick SL e TP, gli interruttori BE e Trail e i pulsanti radio Server/Client | dc-it-oco-strategies-01.png]

3. Scegli una modalità nel menu a discesa **Mode**. **SL/TP** copre le uscite semplici a contratto singolo; **MULTI** costruisce strategie multi-bracket con nome per uscire a scaglioni. I passaggi seguenti coprono SL/TP; il flusso di lavoro Multi è nel ramo più in basso.

4. In modalità **SL/TP**, imposta i tuoi valori di **SL** (stop loss) e **TP** (target price) — ciascuno può essere definito in **tick o denaro**, e ciascuno è abilitabile singolarmente. Facoltativamente abilita:
   - **BE** — sposta automaticamente lo stop a breakeven (tick o denaro).
   - **Trail** — fa seguire lo stop al prezzo, con i campi di importo di trailing e offset sottostanti.

5. Scegli dove il bracket viene gestito con i pulsanti radio **Server / Client**:
   - **Server** — il bracket vive sull'infrastruttura del provider del feed dati. Continua a funzionare se il tuo PC, la rete o la piattaforma si guastano. L'OCO lato server è supportato con Rithmic e dxFeed.
   - **Client** — il bracket è gestito localmente da DeepCharts. La piattaforma deve restare aperta e connessa, altrimenti l'OCO non è efficace. La modalità Client esiste perché alcuni provider di feed non offrono l'OCO lato server.

> **Attenzione:** Rithmic non consente l'OCO lato server insieme al copy trading. Se usi il [[trade-copier]] su Rithmic, seleziona **Client** — e tieni DeepCharts aperto e online, altrimenti i tuoi stop e target non scatteranno. Un singolo conto Rithmic senza il copier può usare **Server** normalmente.

6. Inserisci il tuo ordine di ingresso come al solito (griglia di pulsanti o il [[dom-trading-chart|ladder DOM sul grafico]]). Lo stop e il target vengono collegati automaticamente; quando uno viene eseguito, l'altro si cancella.

[SCREENSHOT: Grafico con un ingresso eseguito e il suo bracket OCO collegato — ordine stop sotto e limit di target sopra il prezzo della posizione | dc-it-oco-strategies-02.png]

### Se esci a scaglioni con più contratti (modalità Multi)

1. Imposta **Mode** su **MULTI** e fai clic sull'**icona a ingranaggio**. Si apre l'editor **Oco Strategy**.
2. Fai clic su **New Strategy** e dai un nome alla strategia.
3. Aggiungi i bracket uno alla volta: scegli **Stop** o **Target**, imposta la quantità e il valore in **Ticks** o **Money**, poi fai clic su **Add bracket**. Ripeti finché ogni contratto ha un'uscita.
4. Abilita **Move BE** su un target se vuoi che lo stop rimanente venga spostato a breakeven una volta eseguito quel target.
5. Fai clic su **Save**. Le strategie salvate compaiono nel menu a discesa del pannello ogni volta che la modalità MULTI è attiva.

Esempio pratico — tre contratti: uno Stop a 12 tick che copre l'intera posizione, tre Target a 8, 12 e 20 tick (un contratto ciascuno), con lo stop che si sposta a breakeven dopo l'esecuzione del Target 2.

[SCREENSHOT: L'editor Oco Strategy con una strategia a tre contratti con nome, un bracket Stop a 12 tick e tre bracket Target a 8, 12 e 20 tick, l'opzione Move BE impostata sul secondo target e i pulsanti Add bracket e Save | dc-it-oco-strategies-03.png]

> **Nota:** Un **segno di spunta verde** accanto alla strategia selezionata significa che la sua quantità totale corrisponde al campo **Qty** del pannello. Un **(!) rosso** significa che differiscono — l'esecuzione è bloccata finché non cambi la Qty del pannello o non modifichi la strategia perché coincidano.

### Se la tua posizione è già aperta senza un bracket (Quick OCO)

Le posizioni aperte mostrano i riquadri interattivi **Stop Loss (SL)** e **Target Price (TP)**. Fai clic con il tasto sinistro su uno dei due riquadri per creare quell'ordine di uscita per la posizione; le due uscite possono poi essere collegate in una coppia OCO.

### Se hai inserito TP e SL separatamente e vuoi collegarli

Fai clic su **Link pending orders** in fondo al blocco OCO. Si apre una finestra dove selezioni i due ordini pendenti — il tuo take profit e il tuo stop — e li collega retroattivamente in una coppia OCO, così l'uno cancella l'altro.

[SCREENSHOT: La finestra Link pending orders con l'elenco degli ordini pendenti del conto e un limit di take profit e un ordine stop selezionati per il collegamento | dc-it-oco-strategies-04.png]

## Verifica che abbia funzionato

Entra in un'operazione SIM da un contratto con la modalità SL/TP attiva. Compaiono subito due ordini attivi — uno stop e un limit — visibili sul grafico e nella [[orders-window]]. Fai il test di cancellazione: chiudi la posizione con **Flat** oppure lascia che una delle due uscite venga eseguita, e verifica che l'altro ordine scompaia da solo. Per la modalità Multi, verifica che il segno di spunta verde sia visibile prima di entrare.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| (!) rosso accanto a Mode, gli ordini non vengono eseguiti | La quantità totale della strategia MULTI non è uguale alla **Qty** del pannello — falle coincidere (cambia la Qty o modifica la strategia) |
| Stop/target spariti dopo la chiusura della piattaforma | Il bracket era lato **Client** — solo l'OCO lato server sopravvive con la piattaforma chiusa; passa a **Server** se il tuo provider lo supporta |
| I bracket non compaiono sui conti copiati (figli) | Il tuo broker non supporta l'OCO lato server con il copier — passa alla modalità **Client** e tieni la piattaforma aperta; vedi [[trade-copier]] |
| Nessun bracket collegato a un nuovo ingresso | La casella **OCO Strategy** non era abilitata prima dell'ingresso — usa i riquadri Quick OCO o **Link pending orders** per proteggere subito la posizione aperta |
| Un'uscita è stata eseguita ma l'altra è rimasta attiva | I due ordini erano stati inseriti indipendentemente e mai collegati — usa **Link pending orders** per le coppie inserite manualmente |

## Articoli correlati

- [[trading-panel-reference]]
- [[trading-from-chart]]
- [[dom-trading-chart]]
- [[orders-window]]
- [[trade-copier]]
- [[risk-manager]]