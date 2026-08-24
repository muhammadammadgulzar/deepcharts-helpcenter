---
title: "Connettere un conto dxFeed di una prop firm (MFF, Aqua, Goat...)"
slug: "connect-dxfeed-prop-firm"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Collega un conto dxFeed rilasciato da una prop firm come MyFundedFutures, Aqua Futures o Goat Funded Futures usando la feed source dxFeed Prop."
keywords: ["mff", "myfundedfutures", "my funded futures", "aqua futures", "goat funded futures", "dxfeed prop", "phidias", "yrm prop", "bluesky trading", "soloclashes", "dxfeed prop firm", "dom type mbo mbp"]
source_hash: "7ccc989bdc4c05de"
ai_translated: true
source_hash: "7ccc989bdc4c05de"
---
Alla fine di questa guida, il conto dxFeed che la tua prop firm ti ha rilasciato sarà collegato a DeepCharts con grafici in tempo reale sullo schermo. Questo flusso vale per le prop firm basate su dxFeed, tra cui Aqua Futures, MyFundedFutures (MFF), Phidias, YRM Prop, BlueSky Trading, SoloClashes e Goat Funded Futures.

La configurazione differisce da una normale connessione dxFeed in due modi: selezioni **dxFeed Prop** come Feed Source (non dxFeed semplice), e l'accordo sui dati di mercato si firma sulla dashboard della tua prop firm — non in R Trader Pro né sul sito web di DeepCharts.

> **Nota:** Al momento dell'acquisto, queste firm ti chiedono quale piattaforma di trading vuoi. Scegliere DeepCharts o la piattaforma gemella DeepDom produce le stesse credenziali dxFeed — entrambe le scelte si connettono senza problemi. Solo la scelta di una piattaforma estranea (Tradovate, NinjaTrader, Quantower e simili) rende le credenziali incompatibili; in quel caso chiedi al supporto della firm di cambiare la tua selezione di piattaforma, così potranno riemettere credenziali compatibili.

## Prima di iniziare

- [ ] DeepCharts installato e attivato — vedi [[install-deepcharts]]
- [ ] Lo username e la password dxFeed che la tua firm ti ha rilasciato. Sono diversi dal tuo login per il sito web o la dashboard della firm — vedi [[fix-username-password]]
- [ ] L'accordo sui dati di mercato firmato sulla dashboard della firm (passaggio 1 qui sotto) — vedi [[sign-market-data-agreement]] per come funzionano gli accordi in base alla fonte del conto
- [ ] La conferma che la tua firm e il tuo tipo di conto siano supportati — vedi [[compatibility-guide]]

> **Attenzione:** Goat Funded Futures offre sia conti CQG sia conti dxFeed, ma con DeepCharts funziona solo il loro conto **dxFeed**. Se hai un conto CQG di Goat, chiedi a Goat di passarti al loro conto dxFeed. BlueSky Trading offre sia dxFeed sia Rithmic — se il tuo è Rithmic, segui invece [[connect-rithmic-prop-firm]].

## Passaggi

1. Firma l'accordo sui dati di mercato. Accedi alla dashboard della tua prop firm e cerca un pulsante o link per firmare l'accordo sui dati di mercato. Se non è sulla dashboard, controlla l'email che la firm ti ha inviato quando il conto è stato emesso. Se non lo trovi in nessuno dei due posti, contatta il supporto della firm — solo loro possono reinviare il link. Finché questo accordo non è firmato, la connessione fallirà anche con le credenziali corrette.

[SCREENSHOT: La dashboard di una prop firm (layout di esempio) con il pulsante per firmare l'accordo sui dati di mercato evidenziato | dc-it-connect-dxfeed-prop-firm-01.png]

2. Tieni pronti username e password dxFeed — dall'email di benvenuto della firm o dalla sezione credenziali della dashboard, non il tuo login per la dashboard stessa.

3. In DeepCharts, fai clic su **Select Connection** nella toolbar superiore, poi fai clic su **Feed Settings** in fondo al menu a discesa.

[SCREENSHOT: Toolbar superiore di DeepCharts con il menu a discesa Select Connection aperto e Feed Settings evidenziato | dc-it-connect-dxfeed-prop-firm-02.png]

4. Fai clic su **Add Connection** e compila il modulo:

| Campo | Cosa inserire |
|---|---|
| **Name** | Un'etichetta qualsiasi, per esempio "MFF dxFeed". |
| **Feed Source** | **dxFeed Prop** — proprio questa voce, non **dxFeed** semplice. |
| **Username** | Lo username dxFeed della tua firm — non il tuo login per la dashboard. |
| **Password** | La password dxFeed che lo accompagna. |
| **DOM Type** | **MBO** o **MBP** — vedi la nota qui sotto. |

Lascia gli altri campi ai valori predefiniti. Guarda tu stesso nel mock interattivo di Feed Settings qui sotto — passa la Feed Source a dxFeed Prop e nota che non c'è un campo Server:

[WIDGET: feed-navigator]

> **Nota:** Non c'è un campo **Server** quando la Feed Source è **dxFeed Prop** — non cercarlo. (Un campo Server compare solo con la fonte **dxFeed** semplice usata per i conti feed dati diretti.) L'instradamento è automatico: dxFeed ti dirige al più vicino dei suoi due server, Francoforte (UE) o Virginia (USA), e non puoi scegliere.

**Scegliere il DOM Type:** i dati Level 2 dxFeed per gli exchange del CME Group sono MBO (market-by-order). Scegli **MBO** per la profondità completa del book di negoziazione — la scelta migliore per gli indicatori Deep. **MBP** (market-by-price) è molto più leggero in termini di banda; sceglilo se la tua connessione è lenta o i tuoi grafici restano indietro nei periodi ad alto volume.

5. Fai clic su **Save**.

6. Tornato nella toolbar principale, fai di nuovo clic su **Select Connection** e fai clic sul tuo nuovo feed per connetterti.

7. Instrada i tuoi exchange verso il feed: apri **Options → Symbol Manage** e verifica che gli exchange su cui fai trading siano sottoscritti e mappati su questa connessione (l'icona a catena su una riga ne cambia il feed). Il selettore degli strumenti mostra solo gli exchange che hai sottoscritto. Provalo nel mock qui sotto — sottoscrivi un exchange e fai clic sull'icona a catena per cambiarne ciclicamente il feed. La guida completa è in [[symbol-manage]].

[WIDGET: symbol-manage-mock]

### Se al momento dell'acquisto hai scelto una piattaforma estranea

Se al momento dell'acquisto del conto hai selezionato Tradovate, NinjaTrader, Quantower o un'altra piattaforma diversa da DeepCharts, le credenziali che la firm ti ha fornito appartengono all'ecosistema di quella piattaforma e non si connetteranno. Contatta il supporto della firm e chiedi di cambiare la tua selezione di piattaforma — ti riemetteranno credenziali dxFeed compatibili.

### Se la tua firm ha incluso una licenza DeepCharts

Alcune prop firm dxFeed (tra cui Aqua Futures, MyFundedFutures, Phidias e YRM Prop) includono con il conto una licenza limitata DeepCharts edizione Prop. L'edizione Prop non ha gli indicatori Deep — solo charting di base e orderflow. Le tue credenziali dxFeed non sono legate a quell'edizione: funzionano in qualsiasi installazione DeepCharts, quindi se possiedi già una licenza Full puoi continuare a usarla con il feed della prop, oppure usarle entrambe in parallelo.

## Verifica che abbia funzionato

- L'indicatore di connessione diventa **verde** poco dopo la connessione.
- Apri un grafico (**New → Price Chart**, scegli un simbolo coperto dal tuo conto) e verifica che il prezzo si aggiorni in tempo reale.

Una volta che i grafici si caricano, inserisci gli ordini tramite il Trading Panel in basso a destra del grafico selezionando il conto della tua prop firm — vedi [[trading-from-chart]].

## Se qualcosa è andato storto

Una connessione rossa o fallita si riduce quasi sempre a una di queste cause:

1. **Credenziali sbagliate** — hai inserito il login della dashboard della firm invece delle credenziali dxFeed. Vedi [[fix-username-password]].
2. **Accordo non firmato** — l'accordo sui dati di mercato sulla dashboard della firm non è mai stato completato. Vedi [[sign-market-data-agreement]].
3. **Feed Source sbagliata** — hai selezionato **dxFeed** semplice invece di **dxFeed Prop**.
4. **Piattaforma estranea scelta all'acquisto** — la firm deve cambiare la tua selezione di piattaforma e riemettere le credenziali.

Errori specifici:

| Sintomo | Dove andare |
|---|---|
| L'errore menziona dxfeed.myfundedfutures.com failed | [[fix-myfundedfutures-failed]] |
| L'errore menziona DATA_ACCESS_SUSPENDED | [[fix-data-access-suspended]] |
| Connessione fallita — unable to establish connection | [[fix-unable-to-establish-connection]] |
| Il punto è verde ma i grafici non si muovono | [[feed-connected-chart-not-moving]] — ricontrolla l'instradamento in Symbol Manage |
| I grafici restano indietro durante i mercati intensi | [[data-delayed-lagging]] — passare il **DOM Type** a **MBP** riduce il carico dati sulle connessioni lente |

## Articoli correlati

- [[connect-dxfeed]]
- [[connect-rithmic-prop-firm]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[fix-myfundedfutures-failed]]
- [[compatibility-guide]]