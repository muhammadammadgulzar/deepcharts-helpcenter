---
title: "Come connettere CQG (AMP, Optimus, EdgeClear, Ironbeam...)"
slug: "connect-cqg"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Collega a DeepCharts un conto CQG di AMP Futures, Optimus, EdgeClear, Ironbeam o Phillips Capital."
keywords: ["CQG", "AMP Futures", "Optimus Futures", "EdgeClear", "Ironbeam", "Phillips Capital", "demo CQG", "connettere CQG a DeepCharts", "CQG non si connette", "feed cqg"]
source_hash: "950e637d393f50a7"
ai_translated: true
source_hash: "950e637d393f50a7"
---
Alla fine avrai il tuo conto CQG collegato a DeepCharts e grafici che caricano dati in tempo reale. I conti CQG sono rilasciati dai broker futures — AMP Futures, EdgeClear, Ironbeam, Phillips Capital e Optimus Futures funzionano tutti — e CQG è uno dei feed più rapidi da configurare perché non c'è un accordo sui dati di mercato separato da firmare prima.

Una regola di compatibilità conta prima di iniziare: DeepCharts può collegare solo conti CQG rilasciati **direttamente da CQG** — tramite uno dei broker qui sopra, oppure da una prop firm che emette i suoi conti CQG direttamente da CQG. Un conto CQG che passa da Tradovate o NinjaTrader non può essere collegato in alcun modo. Se non sei sicuro di quale tipo hai, controlla [[compatibility-guide]] o chiedi al tuo broker.

## Prima di iniziare

- Verifica che il tuo broker o tipo di conto sia supportato — [[compatibility-guide]]
- Tieni pronti username e password CQG (dall'email di benvenuto del tuo broker — non il login per il sito web del broker)
- DeepCharts installato e attivato — [[install-deepcharts]]

## Passaggi

1. Nella barra principale di DeepCharts, fai clic su **Select Connection** → **Feed Settings**.

[SCREENSHOT: Barra principale di DeepCharts con il menu a discesa Select Connection aperto e la voce Feed Settings evidenziata | dc-it-connect-cqg-01.png]

2. Fai clic su **Add Connection**. Compare un modulo di connessione vuoto.

3. In **Name**, digita un'etichetta che riconoscerai in seguito, per esempio "AMP CQG".

4. In **Feed Source**, seleziona **CQG**. Puoi esplorare come si comporta il modulo Feed Settings nel mock interattivo qui sotto — cambiando la Feed Source cambiano i campi visualizzati:

[WIDGET: feed-navigator]

5. Inserisci il tuo **Username** e la tua **Password** CQG. Sono le credenziali CQG fornite dal tuo broker, non il tuo login per il sito web del broker.

6. Spunta **Use demo credentials** solo se stai collegando un conto demo CQG. Per un conto live, lasciala disattivata. Un disallineamento qui (un conto live con la casella spuntata, o un conto demo senza spunta) è una ragione comune per cui la connessione fallisce anche se le credenziali sono corrette.

7. Facoltativamente, abilita **Connect on startup** se vuoi che DeepCharts connetta automaticamente questo feed a ogni avvio dell'app.

8. Lascia ogni altro campo al valore predefinito e fai clic su **Save**.

[SCREENSHOT: Modulo di connessione CQG completato con Name, Feed Source=CQG, Username compilato, Use demo credentials non spuntato, Connect on startup visibile, con il pulsante Save evidenziato | dc-it-connect-cqg-02.png]

9. Tornato nella barra principale, fai clic su **Select Connection** e fai clic sul tuo nuovo feed CQG. Il punto della connessione dovrebbe diventare verde entro circa 10 secondi.

[SCREENSHOT: Menu a discesa Select Connection che mostra il nuovo feed CQG con il punto di stato verde | dc-it-connect-cqg-03.png]

10. Apri **Options → Symbol Manage** e instrada gli exchange su cui fai trading verso questo feed CQG. Questo passaggio è obbligatorio — senza di esso i grafici non mostrano dati. Prova il mock interattivo qui sotto — fai clic sull'icona a catena su una riga per cambiarne il feed. Vedi [[symbol-manage]] per la guida completa.

[WIDGET: symbol-manage-mock]

11. Apri un grafico per confermare che i dati stanno arrivando — vedi [[first-chart]].

### Se hai un conto CQG di una prop firm

I conti CQG delle prop firm funzionano solo quando la firm emette il conto direttamente da CQG. Se la tua prop firm fornisce CQG tramite Tradovate o NinjaTrader, quel conto non può connettersi a DeepCharts — ti servirebbe invece il conto Rithmic o dxFeed della firm. Per esempio, Goat Funded Futures offre CQG tramite un'altra piattaforma, quindi con DeepCharts funziona solo il loro conto dxFeed.

### Se prevedi di usare intensamente gli indicatori di orderflow

CQG non fornisce dati MBO (market-by-order) e, sebbene fornisca la profondità di mercato completa per ES, non la fornisce per NQ. Se la qualità dei dati per singolo ordine conta per il tuo flusso di lavoro (per esempio gli indicatori di orderflow Deep), valuta invece un feed Rithmic o dxFeed — vedi [[connect-rithmic]] e [[connect-dxfeed]].

## Verifica che abbia funzionato

- Il punto di stato accanto alla tua connessione CQG è verde.
- Un grafico su un exchange che hai instradato in **Symbol Manage** mostra prezzi in movimento, in tempo reale.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| Punto rosso, errore di username/password | Ricontrolla le credenziali, poi verifica che la casella **Use demo credentials** corrisponda al tuo tipo di conto — vedi [[fix-username-password]] |
| Punto rosso, impossibile stabilire la connessione | Il firewall o la rete sta bloccando CQG — vedi [[fix-unable-to-establish-connection]] |
| Punto verde ma grafico congelato o vuoto | Exchange non instradato verso questo feed — vedi [[feed-connected-chart-not-moving]] e [[symbol-manage]] |

## Articoli correlati

- [[compatibility-guide]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[connect-rithmic]]
- [[manage-feed-connections]]
- [[feed-connected-chart-not-moving]]