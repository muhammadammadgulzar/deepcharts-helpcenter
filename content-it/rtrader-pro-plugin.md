---
title: "Connettere Rithmic con il plugin RTrader Pro"
slug: "rtrader-pro-plugin"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "intermediate"
time: "10 min to complete"
description: "Usa R Trader Pro come gateway dati così DeepCharts e altre piattaforme possono condividere un solo conto Rithmic in contemporanea senza conflitti di sessione."
keywords: ["plugin rtrader pro", "r trader pro", "usare r trader", "allow plugins", "condividere conto rithmic", "modalità plugin rithmic", "usare rtrader e deepcharts insieme", "puntino giallo rithmic"]
source_hash: "5ee0ebd67a97bbd4"
ai_translated: true
source_hash: "5ee0ebd67a97bbd4"
---
Alla fine di questa guida, DeepCharts riceverà i suoi dati Rithmic tramite R Trader Pro in esecuzione in background — il che permette a R Trader Pro, DeepCharts e altre applicazioni connesse a Rithmic di condividere un solo login Rithmic in contemporanea senza conflitti di sessione.

In questa modalità R Trader Pro funziona come gateway dati: mantiene la connessione a Rithmic, scarica i dati live e li inoltra a DeepCharts. È anche l'unico modo per condividere un singolo feed Rithmic con applicazioni esterne a DeepCharts (i feed dxFeed non possono essere condivisi affatto con applicazioni di terze parti).

> **Nota:** Se usi solo DeepCharts e non hai bisogno di R Trader Pro in esecuzione accanto, usa invece la connessione diretta standard — vedi [[connect-rithmic]]. La via del plugin aggiunge una parte in movimento: R Trader Pro deve restare aperto per tutta la sessione.

## Prima di iniziare

- [ ] Nome utente e password Rithmic a portata di mano — vedi [[connect-rithmic]] per sapere da dove arrivano le credenziali
- [ ] L'accordo sui dati di mercato Rithmic firmato — vedi [[sign-market-data-agreement]]
- [ ] R Trader Pro installato (scaricalo da https://www.rithmic.com/rtraderpro tramite il pulsante **Download R | Trader Pro**)
- [ ] Il valore Server del tuo conto noto — **Rithmic Paper Trading** per i feed dati diretti, oppure la voce della tua prop firm dalla tabella in [[connect-rithmic-prop-firm]]

## Passaggi

### Parte A — Configura R Trader Pro

1. Apri R Trader Pro. Vedrai due moduli di login affiancati — compilali **entrambi** con gli stessi valori: nome utente e password Rithmic, **System** = il valore server del tuo conto (per esempio **Rithmic Paper Trading**) e il **Gateway** più vicino a te.

2. Prima di accedere, abilita l'interruttore **Allow Plugins** nel modulo di login. È l'interruttore che permette a DeepCharts di agganciarsi a R Trader Pro — senza di esso, la connessione di DeepCharts resta gialla e non diventa mai verde.

[SCREENSHOT: Schermata di login di R Trader Pro con entrambi i moduli compilati in modo identico e l'interruttore Allow Plugins abilitato ed evidenziato | dc-it-rtrader-pro-plugin-01.png]

3. Fai clic su **Login** e lascia R Trader Pro in esecuzione in background.

4. Rimuovi i limiti di ricezione dati di Rithmic: apri **Window → Preferences** e vai alla scheda **Performance**. Sotto **Max Market Data Updates/Second**, trascina entrambi i cursori **Quotes** e **Order Book** al massimo (**No Max**), verifica che la casella **Adjust to keep up with market data inflow** sia abilitata, poi fai clic su **Apply** e **OK**.

[SCREENSHOT: Finestra Preferences di R Trader Pro, scheda Performance, con i cursori Quotes e Order Book su No Max e la casella "Adjust to keep up with market data inflow" spuntata | dc-it-rtrader-pro-plugin-02.png]

> **Attenzione:** Tieni i cursori al massimo in modo permanente. Con un limite più basso impostato, Rithmic limita quanti dati ti raggiungono al secondo, e i grafici restano indietro nei periodi di alta volatilità quando l'afflusso di dati si impenna.

### Parte B — Configura DeepCharts

5. In DeepCharts, fai clic su **Select Connection** nella toolbar in alto, poi su **Feed Settings** in fondo al menu a discesa.

6. Fai clic su **Add Connection**.

7. Sotto **Feed Source**, seleziona **Rithmic RAPI**. La via del plugin funziona solo con questa sorgente — non con **Rithmic Wss - beta**.

8. Inserisci gli stessi nome utente e password Rithmic e seleziona **gli stessi Server e Gateway** che hai usato in R Trader Pro. Le due applicazioni devono coincidere esattamente — una discrepanza impedisce al collegamento plugin di stabilirsi.

9. Abilita l'opzione **Use R|Trader** nel modulo di connessione (alcune versioni la etichettano **Use RTrader Pro Plugin**, nella sezione Advanced).

[SCREENSHOT: Finestra Feed Settings di DeepCharts con Feed Source=Rithmic RAPI, Server e Gateway coincidenti con R Trader Pro, e l'opzione Use R|Trader abilitata ed evidenziata | dc-it-rtrader-pro-plugin-03.png]

10. Fai clic su **Save**, poi connetti il feed dal menu a discesa **Select Connection**.

> **Attenzione:** Tieni R Trader Pro aperto per tutto il tempo in cui usi DeepCharts in questa modalità. Chiudere R Trader Pro termina istantaneamente la connessione dati.

## Verifica che abbia funzionato

- L'indicatore di connessione di DeepCharts diventa **verde** (un puntino **giallo** persistente significa che R Trader Pro non è in esecuzione, che l'accesso è avvenuto senza **Allow Plugins** oppure che i valori di Server/Gateway non coincidono).
- Apri un grafico tramite **New → Price Chart** — il prezzo si aggiorna in tempo reale.
- R Trader Pro è ancora in esecuzione in background.

[SCREENSHOT: DeepCharts con un puntino di connessione verde e un grafico live, con R Trader Pro visibile in esecuzione in background | dc-it-rtrader-pro-plugin-04.png]

## Se qualcosa è andato storto

| Sintomo | Dove andare |
|---|---|
| Il puntino resta giallo, "Expert not attached" | [[fix-rithmic-expert-not-attached]] — R Trader Pro non è in esecuzione o i plugin non sono consentiti |
| Un messaggio ti chiede di accedere usando R Trader o R Trader Pro | [[fix-log-in-using-rtrader]] |
| Connessione fallita — controlla nome utente e password | [[fix-username-password]] |
| Connessione fallita — server errato | [[fix-bad-server]] — ricorda che il Server deve coincidere esattamente con R Trader Pro |
| I grafici sono in ritardo nei mercati affollati | [[data-delayed-lagging]] — ricontrolla che i cursori in Performance siano su No Max |
| Il puntino è verde ma i grafici non si muovono | [[feed-connected-chart-not-moving]] — controlla il routing in [[symbol-manage]] |

## Articoli correlati

- [[connect-rithmic]]
- [[connect-rithmic-prop-firm]]
- [[sign-market-data-agreement]]
- [[fix-rithmic-expert-not-attached]]
- [[fix-log-in-using-rtrader]]
- [[data-delayed-lagging]]