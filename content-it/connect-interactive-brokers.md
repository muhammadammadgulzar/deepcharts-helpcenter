---
title: "Connettere Interactive Brokers (solo esecuzione)"
slug: "connect-interactive-brokers"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "intermediate"
time: "15 min to complete"
description: "Collega Interactive Brokers tramite l'API di TWS per l'esecuzione delle operazioni, abbinato a un vero feed dati per i grafici."
keywords: ["Interactive Brokers", "IBKR", "IB", "TWS", "Trader Workstation", "TWS API", "dati aggregati", "IBKR solo esecuzione", "connettere interactive brokers"]
source_hash: "23e4244de06da50d"
ai_translated: true
source_hash: "23e4244de06da50d"
---
Alla fine avrai Interactive Brokers (IBKR) collegato a DeepCharts per inserire operazioni, con un vero feed dati ad alimentare i tuoi grafici. DeepCharts si collega a IBKR tramite l'API di Trader Workstation (TWS), il che significa che TWS deve restare in esecuzione e con l'accesso effettuato per tutto il tempo in cui usi la connessione.

La cosa più importante da capire: IBKR fornisce dati di mercato **aggregati**, non dati per singolo tick. I dati aggregati non possono costruire strumenti di orderflow accurati — niente footprint, delta o analisi dei volumi. IBKR è quindi **solo esecuzione** in DeepCharts. Lo abbini a un vero feed dati (Rithmic o dxFeed) connesso nello stesso momento: i tuoi grafici leggono da quel feed mentre i tuoi ordini vengono instradati tramite IBKR.

## Prima di iniziare

- Un feed dati Rithmic o dxFeed già connesso e funzionante — [[connect-rithmic]] o [[connect-dxfeed]] (o l'opzione gratuita, [[free-delayed-data-feed]])
- Trader Workstation (TWS) installato dal sito web ufficiale di Interactive Brokers, con il tuo login IBKR
- DeepCharts installato e attivato — [[install-deepcharts]]

## Passaggi

1. Apri **Trader Workstation (TWS)** e accedi con le tue credenziali Interactive Brokers. Tieni TWS aperto — DeepCharts non può connettersi se TWS è chiuso.

2. In TWS, vai su **Edit → Global Configuration → API → Settings**.

3. Abilita **Enable ActiveX and Socket Clients**. Prendi nota della porta socket mostrata in queste impostazioni — per impostazione predefinita TWS usa la 7496 per un accesso live e la 7497 per un accesso paper.

[SCREENSHOT: Finestra Global Configuration di TWS, pagina API > Settings, con Enable ActiveX and Socket Clients spuntato e il campo Socket port visibile | dc-it-connect-interactive-brokers-01.png]

4. Configura l'IP fidato in modo che TWS accetti la connessione locale:
   - Togli la spunta a **Allow connections from localhost only**.
   - Fai clic su **Create** e aggiungi l'IP `127.0.0.1`.
   - Rimetti la spunta a **Allow connections from localhost only**.
   - Fai clic su **Apply**, poi su **Yes**, poi su **OK**.

[SCREENSHOT: Sezione Trusted IPs delle impostazioni API di TWS con 127.0.0.1 aggiunto all'elenco e la casella Allow connections from localhost only spuntata | dc-it-connect-interactive-brokers-02.png]

5. In DeepCharts, fai clic su **Select Connection** → **Feed Settings**, poi fai clic su **Add Connection**.

6. Compila il modulo di connessione:
   - **Name** — per esempio "IBKR Live" o "IBKR Paper".
   - **Feed Source** — seleziona **Interactive Brokers**. [CONFIRM: exact Feed Source label — sources show it as "Interactive Brokers" and as "IBKR (TWS API)"]
   - **Host** — `127.0.0.1` (TWS gira sulla stessa macchina).
   - **Port** — 7496 per un accesso TWS live, 7497 per un accesso TWS paper. Deve corrispondere alla porta socket del passaggio 3.
   - **Client ID** — un intero univoco qualsiasi (per esempio 1). Nessun'altra app connessa a TWS può usare lo stesso ID.

[SCREENSHOT: Finestra Feed Settings di DeepCharts con Feed Source impostata su Interactive Brokers, Host 127.0.0.1, campi Port e Client ID compilati | dc-it-connect-interactive-brokers-03.png]

7. Fai clic su **Save**.

8. In **Select Connection**, connetti il feed IBKR **e** il tuo feed dati. Entrambi devono mostrare il punto verde nello stesso momento — IBKR per gli ordini, il feed dati per i grafici.

[SCREENSHOT: Menu a discesa Select Connection con la connessione IBKR e una connessione Rithmic o dxFeed, ciascuna con il punto di stato verde | dc-it-connect-interactive-brokers-04.png]

9. Apri **Options → Symbol Manage** e imposta il Data Feed di ogni exchange sul tuo **feed Rithmic o dxFeed — mai su IBKR**. Se un exchange è instradato verso IBKR, i suoi grafici verranno costruiti da dati aggregati e appariranno sbagliati. Esercitati nel mock interattivo qui sotto — l'icona a catena su una riga cambia ciclicamente il feed mappato. Vedi [[symbol-manage]].

[WIDGET: symbol-manage-mock]

10. Apri un grafico, poi apri il **Trading Panel** (in basso a destra del grafico). Nel campo **Broker** seleziona **Interactive Brokers**, poi seleziona il tuo conto di trading IBKR. Gli ordini che inserisci ora vengono instradati a TWS per l'esecuzione mentre il grafico continua a caricarsi dal tuo feed dati. Vedi [[trading-from-chart]].

[SCREENSHOT: Trading Panel in basso a destra di un grafico con il campo Broker impostato su Interactive Brokers e un conto selezionato | dc-it-connect-interactive-brokers-05.png]

### Se non hai ancora un vero feed dati

Senza uno, i tuoi grafici saranno inaffidabili — i dati aggregati di IBKR non sono adatti al charting né all'analisi dell'orderflow. Le opzioni: il feed gratuito integrato ritardato di 15 minuti ([[free-delayed-data-feed]]), un abbonamento dxFeed a pagamento ([[buy-data-feed]]) o un feed Rithmic diretto ([[connect-rithmic]]). Connetti prima il feed dati, poi aggiungi IBKR al suo fianco.

## Verifica che abbia funzionato

- Il punto della connessione IBKR è diventato verde entro circa 10 secondi, e anche il punto del tuo feed dati è verde.
- I grafici mostrano prezzi in movimento, in tempo reale, provenienti dal feed dati.
- Il Trading Panel elenca Interactive Brokers come broker e mostra il tuo conto.

## Se qualcosa è andato storto

| Sintomo | Causa probabile |
|---|---|
| Il punto IBKR resta rosso | TWS non è in esecuzione o non ha effettuato l'accesso |
| Il punto IBKR resta rosso, TWS è in esecuzione | Socket API non abilitato nelle impostazioni di TWS (passaggio 3) |
| Punto rosso, le impostazioni sembrano corrette | Porta sbagliata — disallineamento paper/live tra TWS e DeepCharts |
| Punto rosso, la porta è corretta | Conflitto di Client ID — un'altra app sta usando lo stesso ID; scegli un intero diverso |
| I grafici appaiono sbagliati o grossolani | Un exchange è instradato verso IBKR in Symbol Manage — reinstradalo verso il tuo feed dati, vedi [[feed-connected-chart-not-moving]] |

Ancora bloccato? Raccogli un [[diagnostic-report]] e vedi [[get-help]].

## Articoli correlati

- [[compatibility-guide]]
- [[connect-data-feed]]
- [[symbol-manage]]
- [[connect-rithmic]]
- [[connect-dxfeed]]
- [[trading-panel-reference]]