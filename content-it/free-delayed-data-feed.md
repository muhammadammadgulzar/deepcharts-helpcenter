---
title: "Usa il feed dati gratuito ritardato di 15 minuti"
slug: "free-delayed-data-feed"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Configura il feed dati dxFeed gratuito ritardato di 15 minuti — senza credenziali, abbonamento o market data agreement."
keywords: ["feed dati gratuito", "dati ritardati", "ritardo 15 min", "ritardati di 15 minuti", "dxFeed - 15m delayed", "feed demo", "dati gratuiti", "senza abbonamento"]
source_hash: "ceaaf05d34227cc0"
ai_translated: true
source_hash: "ceaaf05d34227cc0"
---
Alla fine avrai dati di mercato gratuiti che fluiscono in DeepCharts attraverso la sorgente dxFeed integrata ritardata di 15 minuti — senza nome utente, password, abbonamento a pagamento o market data agreement.

Tutto ciò che vedi su questo feed è 15 minuti indietro rispetto al mercato live. Questo lo rende ideale per imparare la piattaforma, esplorare gli indicatori ed esercitarti su un conto SIM, e inadatto per prendere decisioni di trading in tempo reale. Quando ti servono dati live, vedi [[buy-data-feed]].

## Prima di iniziare

- DeepCharts installato e licenza attivata — vedi [[install-deepcharts]].
- Nient'altro. Questo feed non richiede credenziali né accordi — è proprio questo il suo scopo.

## Passaggi

### Se sei nello Startup Wizard del primo avvio

1. Nel passaggio del datafeed della procedura guidata, seleziona **I want to use 15 minutes delayed data powered by dxFeed for the moment** e fai clic su **Next**.

[SCREENSHOT: Passaggio del datafeed dello Startup Wizard con l'opzione I want to use 15 minutes delayed data powered by dxFeed for the moment selezionata | dc-it-free-delayed-data-feed-01.png]

2. Nel passaggio **Symbol Manage**, controlla la tabella che mappa ogni exchange sul feed ritardato. La procedura guidata pre-mappa per te i principali exchange di futures (CME, CBOT, COMEX, EUREX, NYMEX e altri) — puoi lasciarla così com'è. Fai clic su **Next**, completa il passaggio di personalizzazione e fai clic su **Done**.

[SCREENSHOT: Passaggio Symbol Manage dello Startup Wizard con le colonne Exchange, Description e Data Feed e le righe mappate sulla connessione dxFeed ritardata | dc-it-free-delayed-data-feed-02.png]

Hai finito — passa direttamente a Verifica che abbia funzionato qui sotto.

### Se hai già completato la procedura guidata (aggiungi il feed in seguito)

1. Fai clic sul selettore **Feed** nella barra principale e scegli **Feed Settings**.

[SCREENSHOT: Menu a discesa del selettore Feed nella barra principale con la voce Feed Settings evidenziata | dc-it-free-delayed-data-feed-03.png]

2. Fai clic su **Add Connection**.

3. In **Name**, digita un nome visualizzato per la connessione — per esempio `dxFeed - 15m`.

4. In **Feed Source**, seleziona **dxFeed - 15m delayed**. Per questa sorgente non servono nome utente né password. Provalo nella finestra Feed Settings interattiva qui sotto — il menu a discesa Feed Source cambia i campi richiesti da ciascuna sorgente.

[WIDGET: feed-navigator]

5. Fai clic su **Save** e attendi la conferma del salvataggio.

6. Apri di nuovo il selettore **Feed** nella barra principale e seleziona la tua nuova connessione. Il punto di stato diventa **verde** quando la connessione è attiva.

7. Apri **Options → Symbol Manage** e assicurati che gli exchange che vuoi siano mappati sulla tua connessione ritardata nella colonna **Data Feed**. Per aggiungerne uno, fai clic su **Subscribe**, scegli la tua connessione ritardata nel menu a discesa **Data feed source** e seleziona gli exchange. Per re-indirizzare una riga esistente, usa la sua icona a catena (**Change connection**). Prova entrambe le operazioni nel mock interattivo qui sotto. Riferimento completo: [[symbol-manage]].

[WIDGET: symbol-manage-mock]

8. Apri il tuo primo grafico: **New → Price Chart** — vedi [[first-chart]].

## Verifica che abbia funzionato

- Il selettore **Feed** mostra la tua connessione ritardata con un punto **verde**.
- Un grafico dei prezzi si costruisce e si aggiorna — durante gli orari di mercato i prezzi che vedi sono circa 15 minuti indietro rispetto al mercato live, e la piattaforma segnala i dati come ritardati anziché in tempo reale. [CONFIRM: exact wording and placement of the delayed-data banner shown with the 15-minute feed]

[SCREENSHOT: Un grafico dei prezzi che riceve dati dal feed ritardato con l'indicazione di dati ritardati visibile e il punto verde del feed nella barra principale | dc-it-free-delayed-data-feed-04.png]

> **Nota:** Cosa rinunci rispetto a un feed live: ogni prezzo, livello del DOM e stampa sul tape arriva con 15 minuti di ritardo, quindi il lavoro sensibile al timing (pratica di scalping sul mercato corrente, decisioni di trade live) è escluso. Cosa continua a funzionare pienamente: ogni finestra e indicatore, i layout dei grafici, il replay e il trading in simulazione su un conto SIM — vedi [[simulation-accounts]]. Quando lo avrai superato, un feed live si aggiunge attraverso la stessa finestra Feed Settings: [[buy-data-feed]].

## Se qualcosa è andato storto

| Sintomo | Dove andare |
|---|---|
| Il feed è verde ma il grafico non si muove mai | [[feed-connected-chart-not-moving]] — con il feed ritardato, ricorda anche che le barre avanzano solo con 15 minuti di ritardo rispetto all'orologio |
| Il selettore degli strumenti è vuoto quando apri un grafico | Nessun exchange è sottoscritto — mappali in [[symbol-manage]] |
| La connessione non diventa mai verde | [[fix-unable-to-establish-connection]] |
| Ti aspettavi prezzi live | Questo feed è ritardato per progettazione — per i dati in tempo reale vedi [[buy-data-feed]] |

## Articoli correlati

- [[install-deepcharts]]
- [[buy-data-feed]]
- [[symbol-manage]]
- [[first-chart]]
- [[simulation-accounts]]
- [[quick-start-first-trade]]