---
title: "Gestire abbonamenti e fatturazione"
slug: "manage-subscriptions"
category: "Account & Billing"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Visualizza la tua licenza della piattaforma DeepCharts e gli abbonamenti ai feed dati su my.deepcharts.com, aggiungi o modifica i prodotti di dati di mercato, interrompi il rinnovo automatico e aggiorna i dati di fatturazione."
keywords: ["annullare abbonamento", "annullare il mio abbonamento", "interrompere rinnovo automatico", "rinnovo automatico", "fatturazione", "data di rinnovo", "pending cancel", "aggiungere exchange", "modificare prodotti dati di mercato", "rimborso", "annullare feed dati", "abbonamento scaduto", "addebitato di nuovo", "gestire abbonamento"]
source_hash: "3447eabc428c0022"
ai_translated: true
source_hash: "3447eabc428c0022"
---
Alla fine saprai esattamente a cosa sei abbonato, quando si rinnova ciascun abbonamento e come aggiungere prodotti di dati, interrompere un rinnovo o aggiornare i dati di fatturazione — tutto dalla dashboard di my.deepcharts.com.

Sotto "abbonamenti" vivono due cose diverse, e si comportano diversamente: la tua **licenza della piattaforma** (DeepCharts stesso) e i tuoi **abbonamenti ai feed dati** (i dati di mercato che alimentano i tuoi grafici). Le licenze della piattaforma non si rinnovano automaticamente — quando il periodo termina, riacquisti manualmente. Gli abbonamenti ai feed dati acquistati sul sito DeepCharts si rinnovano invece automaticamente finché non li annulli. La maggior parte della confusione sulla fatturazione nasce dal confondere queste due cose.

## Prima di iniziare

- Un account DeepCharts su my.deepcharts.com — l'account usato al momento dell'acquisto (vedi [[install-deepcharts]])
- Se la tua licenza o il tuo feed proviene da una **prop firm**, viene gestito sulla dashboard della prop firm, non qui — vedi [[compatibility-guide]] per come funzionano i conti prop firm

## Passaggi

1. Accedi a my.deepcharts.com.

2. Apri la pagina **Subscriptions**. Elenca tutto ciò che il tuo account possiede: la tua licenza della piattaforma DeepCharts, eventuali corsi o bootcamp, e una sezione **Data Feeds** con una scheda per ciascun fornitore di feed (dxFeed e Rithmic).

[SCREENSHOT: Pagina Subscriptions di my.deepcharts.com dopo il login con la voce della licenza della piattaforma e la sezione Data Feeds con le schede dxFeed e Rithmic | dc-it-manage-subscriptions-01.png]

3. Esamina ogni voce. Ogni scheda di feed dati mostra il tuo **nome utente e la password** del feed (le credenziali che inserisci in DeepCharts — vedi [[connect-data-feed]]), un pulsante **Add Exchange** e i controlli dello stato dell'abbonamento.

[SCREENSHOT: Una scheda di feed dati sulla pagina Subscriptions con i campi nome utente/password (valori oscurati), il pulsante Add Exchange e il controllo dello stato dell'abbonamento tutti visibili | dc-it-manage-subscriptions-02.png]

> **Nota:** L'interfaccia della dashboard è attualmente disponibile in inglese e in italiano — il selettore della lingua si trova in fondo alla pagina.

### Se vuoi aggiungere o modificare prodotti di dati di mercato

1. Sulla scheda del feed, fai clic su **Add Exchange**. Si apre un elenco di prodotti di dati acquistabili — ogni exchange è offerto come **Top of Book** o **Market Depth**, ed è disponibile un bundle CME. I prezzi correnti sono mostrati in tempo reale su quella pagina, quindi è sempre il luogo di riferimento per verificare quanto costa un prodotto.

[SCREENSHOT: La pagina Add Exchange aperta da una scheda feed, con l'elenco degli exchange con le opzioni Top of Book e Market Depth e la voce del bundle CME | dc-it-manage-subscriptions-03.png]

2. Seleziona i prodotti che ti servono e completa il pagamento — [[buy-data-feed]] spiega come scegliere tra Top of Book e Market Depth.

3. Firma di nuovo il contratto sui dati di mercato quando richiesto. L'accordo copre l'esatto insieme di prodotti di dati a cui sei abbonato, quindi modificare i prodotti significa firmarlo di nuovo — vedi [[sign-market-data-agreement]]. Per dxFeed questo avviene direttamente sulla dashboard; gli accordi Rithmic si firmano invece sempre dentro R Trader Pro.

### Se vuoi annullare un feed dati

1. Sulla scheda del feed, imposta lo stato dell'abbonamento su **Pending Cancel**.

[SCREENSHOT: Una scheda di feed dati con il controllo dello stato aperto e Pending Cancel selezionato | dc-it-manage-subscriptions-04.png]

2. Comprendi cosa significano i due stati:

| Stato | Significato |
|---|---|
| **Active** | L'abbonamento si rinnova e addebita di nuovo al ciclo di fatturazione successivo |
| **Pending Cancel** | La cancellazione è registrata; il feed resta utilizzabile fino alla fine del periodo già pagato, poi termina senza ulteriori addebiti |

3. Sappi quando arriva il prossimo addebito, così i tempi hanno senso:
   - **dxFeed** addebita lo stesso giorno del mese successivo, contato dalla data di acquisto.
   - **Rithmic** fattura per mese di calendario — l'addebito arriva alla fine di ogni mese di calendario, indipendentemente dalla tua data di acquisto. Acquistare il 20 significa che il prossimo addebito arriva a fine mese, prima che siano trascorsi 30 giorni. È il calendario di Rithmic, non qualcosa che DeepCharts controlla.

### Se vuoi annullare l'abbonamento alla piattaforma

Le licenze della piattaforma non si rinnovano automaticamente, quindi non c'è alcun interruttore di cancellazione da azionare. Quando il periodo della licenza termina, non viene addebitato nient'altro — semplicemente riacquisti se vuoi continuare. Il periodo della licenza inizia dalla data di acquisto, indipendentemente da quando hai installato la piattaforma per la prima volta.

> **Attenzione:** Gli abbonamenti ai feed dati si rinnovano indipendentemente dalla licenza della piattaforma. Se stai smettendo del tutto, imposta anche i tuoi feed dati su **Pending Cancel** — altrimenti il feed continua ad addebitare anche se la licenza della piattaforma è scaduta.

### Se vuoi aggiornare i dati di fatturazione

1. Sulla pagina Subscriptions, fai clic su **Edit data**. Questo modulo contiene le informazioni di fatturazione inviate al fornitore del feed dati per gestire il tuo conto feed: nome, telefono, indirizzo, paese, codice postale, data di nascita e le caselle **Company** e **Professional user**.

[SCREENSHOT: Il modulo Edit data sulla pagina Subscriptions con i campi personali/di fatturazione e la casella Professional user | dc-it-manage-subscriptions-05.png]

> **Attenzione:** Lascia **Professional user** deselezionato a meno che tu non sia davvero qualificabile come professionista (operi con fondi di terzi, lavori come trader per un'istituzione o rappresenti una società di investimento). La classificazione come professionista rende gli stessi dati di mercato notevolmente più costosi, e il ritorno alla classificazione precedente ha effetto solo dopo la scadenza del periodo feed in corso.

### Se vuoi richiedere un rimborso

- **Feed dati:** dxFeed e Rithmic sono fornitori di terze parti e gli addebiti del feed non sono rimborsabili. Quello che puoi fare è interrompere tutti gli addebiti futuri impostando il feed su **Pending Cancel**.
- **Licenza della piattaforma e tutto il resto:** consulta la politica sui rimborsi [CONFIRM: refund policy link] e contatta il supporto tramite [[get-help]] indicando il motivo della richiesta.

## Verifica che abbia funzionato

La pagina Subscriptions riflette immediatamente ogni modifica: un feed annullato mostra **Pending Cancel** sulla sua scheda (e nessun addebito arriva dopo la fine del periodo pagato), i prodotti di dati appena aggiunti compaiono sulla scheda del feed una volta rifirmato il contratto, e i dati di fatturazione aggiornati compaiono nel modulo **Edit data**.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| Nome utente/password del feed non visibili dopo l'aggiunta dei prodotti | Il contratto sui dati di mercato non è firmato completamente — completalo, vedi [[sign-market-data-agreement]] |
| La piattaforma ha smesso di attivarsi dopo la fine del periodo | La licenza è scaduta — riacquista, poi attiva di nuovo; vedi [[license-issues]] |
| Addebito Rithmic prima che siano passati 30 giorni | Normale — Rithmic fattura alla fine di ogni mese di calendario, non da data a data |
| Feed annullato ma vuoi continuare a usare i grafici | Il [[free-delayed-data-feed]] integrato funziona senza abbonamento |
| Un addebito che non riconosci o una contestazione di fatturazione | Contatta il supporto con i dettagli della fattura — [[get-help]] |

## Articoli correlati

- [[buy-data-feed]]
- [[sign-market-data-agreement]]
- [[license-issues]]
- [[move-to-new-computer]]
- [[free-delayed-data-feed]]
- [[get-help]]