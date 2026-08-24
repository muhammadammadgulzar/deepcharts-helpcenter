---
title: "Come configurare il Trade Copier"
slug: "trade-copier"
category: "Trading & Orders"
subcategory: ""
type: "howto"
difficulty: "advanced"
time: "25 min to complete"
description: "Replica i trade da un conto parent a più conti child in tempo reale — modalità di copia, resync, tempistiche e la regola della modalità client per gli OCO."
keywords: ["trade copier", "copy trading", "trade copier beta", "conti parent child", "replicare trade", "OrdersToOrders", "OrdersToMarket", "resync", "desincronizzato", "moltiplicatore contratti", "prop firm più conti"]
source_hash: "067fda07311bbbaf"
ai_translated: true
source_hash: "067fda07311bbbaf"
---
Alla fine avrai un gruppo Trade Copier che replica ogni trade da un conto Parent a uno o più conti Child in tempo reale — la configurazione standard per i trader di prop firm che eseguono la stessa strategia su più conti finanziati.

Il copier è una funzione beta con modalità di fallimento reali (ordini child non eseguiti, ordini a mercato da resync, bracket OCO che richiedono la modalità client); questa guida affronta ciascuna di queste decisioni in ordine.

> **Attenzione:** Testa sempre un nuovo gruppo su un conto SIM prima di andare live. Un copier configurato male può inviare ordini reali a tutti i conti child contemporaneamente.

## Prima di iniziare

- Tutti i conti (parent e child) connessi in DeepCharts — [[connect-data-feed]] e [[manage-feed-connections]]
- Dimestichezza con il pannello di trading e i tipi di ordine — [[trading-panel-reference]]
- Un conto SIM per la prova a secco — [[simulation-accounts]]
- Se operi con bracket di stop loss/take profit, leggi prima la sezione OCO qui sotto — [[oco-strategies]]

## Passaggi

### Crea il gruppo

1. Fai clic su **Trading → Trade Copier - Beta** nella barra principale.

[SCREENSHOT: Il menu Trading aperto con la voce Trade Copier - Beta evidenziata | dc-it-trade-copier-01.png]

2. Fai clic su **Add New Group**.

3. Dai al gruppo un **Name** che riconoscerai — puoi eseguire più gruppi con impostazioni diverse allo stesso tempo.

[SCREENSHOT: La finestra Trade Copier con la configurazione Add New Group aperta, il campo Name compilato e l'elenco delle impostazioni visibile | dc-it-trade-copier-02.png]

### Scegli la modalità di copia

4. Imposta **Copy Mode** — l'impostazione più determinante del gruppo:

| Modalità | Come funziona | Compromesso |
|---|---|---|
| **OrdersToOrders** (predefinita) | Replica i tuoi ordini limit sui child come ordini limit | Nessuno slippage, ma il limit di un child può restare **non eseguito** mentre il parent viene eseguito |
| **OrdersToMarket** | Attende che l'ordine del parent venga **eseguito**, poi invia ordini a mercato ai child | Esecuzioni e sincronizzazione garantite, ma lo slippage è possibile |

Scegli in base a cosa fa più male alla tua strategia: un'esecuzione mancata sul child (OrdersToOrders) o un prezzo peggiore sul child (OrdersToMarket).

### Configura i child

5. Assegna il conto **Parent** e aggiungi i conti **Child** al gruppo.

6. Imposta il **Contracts Multiplier** di ogni child — il rapporto tra la dimensione del child e quella del parent (per esempio, un child su un conto finanziato più grande può negoziare un multiplo della quantità del parent).

7. Aggiungi i simboli specifici che il gruppo deve copiare — i simboli si configurano per gruppo.

[SCREENSHOT: La configurazione del gruppo che mostra il conto parent, le righe dei conti child con i rispettivi valori di Contracts Multiplier e l'elenco dei simboli del gruppo | dc-it-trade-copier-03.png]

### Imposta tempistiche e comportamento di recupero

8. Esamina le impostazioni di tempistica:

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Copy Delay** | 5 ms | Pausa prima della replica sui child |
| **Synchronization Timeout** | 15 s | Per quanto tempo le posizioni possono differire prima che il gruppo risulti fuori sincronia. Un valore troppo basso causa **falsi allarmi di desincronizzazione** dovuti ai normali ritardi di esecuzione |
| **Resynchronization Attempt Delay** | 20 s | Attesa tra i tentativi automatici di resync |

9. Imposta **Resync Mode** — cosa fa il copier quando parent e child si disallineano:

| Modalità | Comportamento |
|---|---|
| **None** | Nessuna azione automatica — correggi gli squilibri manualmente |
| **FullMarketAtBestPrice** (predefinita) | Invia automaticamente gli ordini necessari a correggere lo squilibrio |
| **CloseOnlyAtBestPrice** | Chiude solo le posizioni child in eccesso; non ne apre mai di nuove forzatamente |

> **Attenzione:** Il resync automatico può inviare ordini a mercato non voluti ai conti child. Monitora manualmente il gruppo ogni volta che viene eseguita una risincronizzazione, soprattutto nelle prime sessioni.

10. Imposta **Expiration Logic** — cosa succede a un ordine child ancora pendente quando il parent è già stato eseguito:
    - **None** (predefinita) — l'ordine child resta attivo.
    - **ToMarketAfterMs** — converte l'ordine child pendente in un ordine a mercato dopo i millisecondi impostati.
    - **CancelAfterMs** — annulla l'ordine child pendente dopo i millisecondi impostati.

11. Lascia le impostazioni di fallback OCO ai valori predefiniti a meno che il supporto non ti consigli diversamente: **Child Brackets Tick Margin** (25), **OCO Bracket Fallback Insert** (15 s), **OCO Order Cancel Fallback** (60 s), **OCO Trailing Stop Fallback** (3 s).

### Se usi bracket OCO (stop loss / take profit)

Alcuni broker non supportano gli OCO lato server insieme al Trade Copier. Nel blocco OCO del pannello di trading, sposta il radio da **Server** a **Client** così i bracket vengono replicati sui child.

> **Attenzione:** Rithmic non consente gli OCO lato server insieme al copy trading — Rithmic + Trade Copier significa sempre OCO lato **Client**. Gli OCO lato client sono attivi solo finché DeepCharts resta **aperto e connesso**: chiudi la piattaforma o perdi la rete e i tuoi stop e target pendenti non verranno eseguiti. (Un singolo conto Rithmic senza il copier può usare normalmente gli OCO lato server.) Vedi [[oco-strategies]] per la spiegazione completa di Server vs Client.

### Avvia il gruppo

12. Fai clic su **Start** e accetta il disclaimer.

13. Controlla lo stato del parent: mostra **Ready** quando il suo feed è connesso, oppure **Waiting Connection** in caso contrario.

[SCREENSHOT: La finestra Trade Copier con un gruppo in esecuzione, lo stato del parent che mostra Ready e i conti child elencati con il rispettivo stato di sincronizzazione | dc-it-trade-copier-04.png]

> **Suggerimento:** La configurazione di partenza suggerita dalla documentazione ufficiale è: Copy Mode **OrdersToOrders**, Copy Delay **0 ms**, Resync Mode **None**, Expiration Logic **None**, Synchronization Timeout **15 s**, Resynchronization Attempt Delay **20 s** — impostazioni prudenti, senza ordini automatici di resync mentre impari a usare lo strumento.

## Verifica che abbia funzionato

Con il gruppo avviato e il parent che mostra **Ready**, inserisci un piccolo trade di prova sul parent (su SIM). In pochi istanti lo stesso ordine compare su ogni child, dimensionato dal suo Contracts Multiplier, e chiudere la posizione del parent chiude quelle dei child. Controlla la [[orders-window|finestra Ordini]] su una connessione child per confermare gli ordini replicati, e verifica che non compaia alcun allarme di desincronizzazione.

## Se qualcosa è andato storto

- **Il child ha mancato un trade / le posizioni non corrispondono** — modalità OrdersToOrders: il limit del child non è stato eseguito. Valuta **OrdersToMarket** (accettando lo slippage) oppure una **Expiration Logic** di tipo **ToMarketAfterMs**. Un Resync Mode **FullMarketAtBestPrice** corregge automaticamente gli squilibri.
- **Il copier continua a segnalare desincronizzazione ma i trade sembrano a posto** — il **Synchronization Timeout** è troppo aggressivo; alzalo. I normali ritardi di esecuzione generano falsi allarmi con valori bassi.
- **Bracket/OCO non compaiono sui conti child** — il broker non supporta gli OCO lato server con il copier; sposta il pannello di trading in modalità **Client** (e mantieni la piattaforma aperta e online).
- **Ordini a mercato inattesi sui child** — è scattato un resync automatico. Rivedi il **Resync Mode**; usa **CloseOnlyAtBestPrice** o **None** se vuoi meno interventi automatici.
- **Parent bloccato su Waiting Connection** — il feed del parent non è connesso; vedi [[manage-feed-connections]].

Gestione quotidiana: ogni gruppo può essere fermato con **Stopped**, riaperto tramite **Settings** o rimosso con **Removed**; i singoli conti child possono essere esclusi dalla sincronizzazione senza fermare l'intero gruppo.

## Articoli correlati

- [[oco-strategies]]
- [[trading-panel-reference]]
- [[orders-window]]
- [[simulation-accounts]]
- [[manage-feed-connections]]
- [[risk-manager]]