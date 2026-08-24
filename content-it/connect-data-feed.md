---
title: "Come connettere un feed dati (Feed Settings)"
slug: "connect-data-feed"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Aggiungi una connessione al feed dati in Feed Settings, connettila e ottieni dati in tempo reale su un grafico."
keywords: ["feed settings", "aggiungere connessione", "select connection", "configurazione feed dati", "connettere feed", "punto verde", "feed source", "campo server"]
source_hash: "995ff39503399f26"
ai_translated: true
source_hash: "995ff39503399f26"
---
Alla fine avrai il tuo feed dati salvato in Feed Settings, connesso con il punto verde, e un grafico che carica dati in tempo reale. Questa è la guida generica che vale per ogni feed source — le guide specifiche per provider ([[connect-dxfeed]], [[connect-rithmic]], [[connect-cqg]] e altre) seguono la stessa struttura con i loro valori esatti già compilati.

## Prima di iniziare

- Le tue credenziali del feed (username e password rilasciati per il feed — non il login per il sito web del provider). Se non hai ancora un feed, vedi [[buy-data-feed]] oppure inizia con il [[free-delayed-data-feed]].
- L'accordo sui dati di mercato firmato per il tuo tipo di conto — vedi [[sign-market-data-agreement]]. Senza di esso la connessione resta rossa anche con le credenziali corrette.
- I valori esatti di **Feed Source** e **Server** per il tuo provider — cercali in [[compatibility-guide]].

## Passaggi

1. In DeepCharts, fai clic su **Select Connection** nella toolbar principale.

2. Fai clic su **Feed Settings** in fondo al menu a discesa. Si apre la finestra Feed Settings.

[SCREENSHOT: Toolbar principale di DeepCharts con il menu a discesa Select Connection aperto e la voce Feed Settings in fondo al menu evidenziata | dc-it-connect-data-feed-01.png]

3. Fai clic su **Add Connection**. Compare un modulo con diversi campi.

4. In **Name**, digita un nome qualsiasi che riconoscerai in seguito — per esempio "Apex Eval" o "My dxFeed". È solo un'etichetta; compare nel menu a discesa Select Connection.

5. In **Feed Source**, scegli la fonte che corrisponde al tuo conto:

| Il tuo conto | Feed Source |
|---|---|
| dxFeed acquistato dal sito web DeepCharts o da dxfeed.com | dxFeed |
| dxFeed da una prop firm (MFF, Aqua, Goat...) | dxFeed Prop |
| Qualsiasi conto Rithmic (prop firm, broker, acquisto dal sito) | Rithmic RAPI |
| Conto CQG da un broker o direttamente da CQG | CQG |
| Feed gratuito integrato ritardato | 15 min delayed |
| Conto della Competizione DeepCharts | V-Sim |
| Interactive Brokers | IBKR (TWS API) |

> **Nota:** Le voci Rithmic del menu a discesa sono **Rithmic RAPI** e **Rithmic Wss - beta** — non esiste un'opzione "Rithmic" semplice. Scegli **Rithmic RAPI**; è la fonte consigliata.

Prova lo stesso modulo dal vivo qui sotto — scegli ogni Feed Source e osserva i campi trasformarsi di conseguenza.

[WIDGET: feed-navigator]

6. Inserisci il tuo **Username** e la tua **Password**.

> **Attenzione:** Sono le credenziali rilasciate per il feed stesso, di solito consegnate in un'email di benvenuto dal tuo broker o dalla tua prop firm. Non sono il login per il sito web o la dashboard del provider — usare il login del sito è la singola causa più comune di connessione fallita.

7. Se compare un campo **Server**, impostalo sul valore esatto per il tuo provider indicato in [[compatibility-guide]]. Ogni prop firm Rithmic ha una voce dedicata (per esempio "Apex"); le firm senza voce usano "Rithmic Paper Trading"; i conti Rithmic dei broker usano "Rithmic 01"; il dxFeed acquistato dal sito usa "Website Account". Quando la Feed Source è **dxFeed Prop** non esiste un campo Server — è normale.

### Se hai scelto Rithmic RAPI

- Imposta **Gateway** sulla regione più vicina a te. Le opzioni sono Automatic, Chicago Area, Seoul, Mumbai, Hong Kong, Sao Paolo, Singapore, Sydney, Tokyo, Frankfurt, Europe, Cape Town, NYC Area e US West; il valore predefinito è Automatic. Un gateway lontano funziona comunque ma aggiunge latenza.
- **Include commissions** è attiva per impostazione predefinita — mostra le commissioni nel tuo P/L.
- Abilita **Show only active accounts** se vecchi conti prop scaduti ingombrano il tuo elenco conti.
- Lascia stare il pulsante **Use R Trader**, a meno che tu non voglia eseguire R Trader accanto a DeepCharts sullo stesso feed — quella configurazione è trattata in [[rtrader-pro-plugin]].

[SCREENSHOT: Modulo di connessione Rithmic RAPI compilato, con il menu a discesa Gateway aperto che mostra l'elenco delle regioni e Automatic selezionato | dc-it-connect-data-feed-02.png]

### Se hai scelto dxFeed o dxFeed Prop

- Imposta **DOM Type** su **MBO** o **MBP**. MBO fornisce la profondità Level 2 completa market-by-order (la migliore per gli strumenti di orderflow); MBP è un flusso di dati molto più leggero ed è la scelta giusta se la tua connessione è lenta o i grafici restano indietro nei periodi intensi.

### Se hai scelto CQG

- Abilita **Use demo credentials** solo se hai un conto demo CQG; lasciala disattivata per un conto live.
- Abilita **Connect on startup** se vuoi che questo feed si connetta automaticamente a ogni avvio di DeepCharts.

8. Lascia ogni altro campo al valore predefinito e fai clic su **Save**.

9. Tornato nella toolbar principale, fai di nuovo clic su **Select Connection** — il tuo nuovo feed compare ora con il nome che gli hai dato. Fai clic per connetterlo. Entro circa 10 secondi l'indicatore di connessione dovrebbe diventare verde.

[SCREENSHOT: Menu a discesa Select Connection che mostra il feed appena salvato con il punto di stato verde accanto | dc-it-connect-data-feed-03.png]

10. Disconnetti il feed (fai di nuovo clic su di esso), poi configura i tuoi exchange in **Options → Symbol Manage** — segui [[symbol-manage]]. Questo passaggio instrada ogni exchange verso il tuo nuovo feed; saltarlo è la principale causa dei ticket "connesso ma i grafici non si muovono".

11. Riconnetti il feed, poi apri un grafico tramite **New → Price Chart** — vedi [[first-chart]].

## Verifica che abbia funzionato

- Il punto accanto alla tua connessione in **Select Connection** è verde.
- Un grafico aperto su un exchange sottoscritto disegna candele e il prezzo si aggiorna (in tempo reale, o con 15 minuti di ritardo se hai scelto il feed ritardato).

## Se qualcosa è andato storto

| Sintomo | Vedi |
|---|---|
| Il punto resta rosso — "check username and password" | [[fix-username-password]] |
| Il punto resta rosso — "bad server" | [[fix-bad-server]] |
| Il punto resta rosso — "unable to establish connection" | [[fix-unable-to-establish-connection]] |
| Rithmic ti chiede di accedere tramite R Trader | [[fix-log-in-using-rtrader]] |
| Il punto è verde ma il grafico non si muove | [[feed-connected-chart-not-moving]] |
| I grafici restano indietro nei periodi intensi | [[data-delayed-lagging]] |

> **Nota:** Se usi anche DeepDom, le due applicazioni condividono un unico data bridge — una sola connessione serve entrambe nello stesso momento, ma le impostazioni del feed devono essere inserite in modo identico in entrambe le applicazioni. Impostazioni non corrispondenti in una applicazione possono impedire all'altra di connettersi.

## Articoli correlati

- [[compatibility-guide]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[manage-feed-connections]]
- [[first-chart]]