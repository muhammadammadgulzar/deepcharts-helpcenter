---
title: "Come connettere un feed dati dxFeed"
slug: "connect-dxfeed"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Collega un conto dxFeed acquistato dal sito web DeepCharts o da dxfeed.com, inclusa la configurazione di DOM Type e Symbol Manage."
keywords: ["dxfeed", "dx feed", "connettere dxfeed", "account sito web", "dom type", "mbo", "mbp", "credenziali dxfeed"]
source_hash: "d493928e9467305f"
ai_translated: true
source_hash: "d493928e9467305f"
---
Alla fine avrai il tuo conto dxFeed connesso con il punto verde e un grafico che carica dati dxFeed in tempo reale. Questa guida copre gli abbonamenti dxFeed acquistati dal sito web DeepCharts (il caso più comune) e direttamente da dxfeed.com. Se il tuo conto dxFeed proviene da una prop firm (MFF, Aqua, Goat e simili), segui invece [[connect-dxfeed-prop-firm]] — i conti prop usano una Feed Source diversa e non hanno il campo Server.

## Prima di iniziare

- Un abbonamento dxFeed — acquistato sul sito web DeepCharts ([[buy-data-feed]]) o su dxfeed.com con DeepCharts selezionata come piattaforma.
- L'accordo sui dati di mercato firmato — vedi [[sign-market-data-agreement]]. Per gli acquisti dal sito le tue credenziali restano nascoste nella dashboard finché non firmi; dopo la firma, username e password diventano visibili nella pagina Subscriptions. Annotali.
- DeepCharts installato e in esecuzione — vedi [[install-deepcharts]].

## Passaggi

1. In DeepCharts, fai clic su **Select Connection** nella toolbar principale, poi fai clic su **Feed Settings** in fondo al menu a discesa.

[SCREENSHOT: Toolbar principale con il menu a discesa Select Connection aperto e Feed Settings evidenziato in fondo | dc-it-connect-dxfeed-01.png]

2. Nella finestra Feed Settings, fai clic su **Add Connection**.

3. Compila i campi della connessione:

| Campo | Valore |
|---|---|
| **Name** | Un nome qualsiasi per questo profilo, per esempio "My dxFeed" |
| **Feed Source** | dxFeed |
| **Username** | Lo username dxFeed dalla tua dashboard |
| **Password** | La password dxFeed dalla tua dashboard |
| **Server** | **Website Account** se acquistato sul sito web DeepCharts; **dxFeed Account** se acquistato su dxfeed.com |
| **DOM Type** | MBO o MBP — vedi sotto |

Prova il modulo dal vivo qui sotto — scegli dxFeed come Feed Source e guarda quali campi richiede.

[WIDGET: feed-navigator]

> **Nota:** **DOM Type** controlla il formato della profondità Level 2. I dati Level 2 di dxFeed per il CME Group sono MBO (market-by-order) — scegli **MBO** per la profondità completa per singolo ordine, la migliore per il DOM e gli indicatori di orderflow. **MBP** è un flusso di dati molto più leggero; sceglilo se la tua connessione è lenta o i grafici restano indietro nei periodi ad alto volume.

4. Fai clic su **Save** e chiudi la finestra.

5. Fai di nuovo clic su **Select Connection** e fai clic sul tuo nuovo profilo dxFeed per connetterti. Il cerchio accanto dovrebbe diventare verde entro circa 10 secondi.

[SCREENSHOT: Menu a discesa Select Connection con il profilo dxFeed connesso e il suo cerchio di stato verde | dc-it-connect-dxfeed-02.png]

6. Disconnetti il feed (fai di nuovo clic su di esso), poi apri **Options → Symbol Manage** e instrada i tuoi exchange verso questo feed — la guida completa è in [[symbol-manage]]. In breve: se il tuo exchange è in elenco, assicurati che la sua colonna **Data Feed** punti al profilo dxFeed (icona a catena per cambiarlo); se non è in elenco, fai clic su **Subscribe**, trova l'exchange e assegnagli il profilo dxFeed.

7. Chiudi Symbol Manage e riconnettiti. Verifica che il cerchio sia di nuovo verde.

8. Apri un grafico: **New → Price Chart**, seleziona uno strumento (per esempio ES o NQ) e aprilo.

### Se usi anche DeepDom

DeepCharts e DeepDom condividono un unico data bridge — la stessa connessione dxFeed serve entrambe le applicazioni nello stesso momento, ma le impostazioni devono corrispondere esattamente. Nelle impostazioni del feed di DeepDom inserisci le stesse credenziali dxFeed, lo stesso valore di Server (**Website Account**) e lo stesso **DOM Type**, poi connettiti. Se una applicazione non si connette mentre l'altra funziona, la prima cosa da verificare sono le impostazioni del feed non corrispondenti tra le due.

## Verifica che abbia funzionato

- Il cerchio della connessione in **Select Connection** è verde.
- Un grafico su un exchange sottoscritto disegna candele e il prezzo si aggiorna in tempo reale.

> **Nota:** dxFeed gestisce due server — Francoforte (UE) e Virginia (USA) — e ti instrada automaticamente al più vicino; non c'è una scelta di regione del server da fare. Se noti ritardi nei dati, ciò che conta è la tua velocità di download dalla regione di quel server, e passare il **DOM Type** a MBP è la soluzione abituale su una linea lenta.

## Se qualcosa è andato storto

| Sintomo | Vedi |
|---|---|
| Il cerchio resta rosso — credenziali rifiutate | [[fix-username-password]] — assicurati di usare le credenziali del feed rilasciate nella dashboard e che l'accordo sia firmato |
| Errore "Unable to load DLL DXFeed_64.dll" | [[fix-dxfeed-dll]] |
| Errore DATA_ACCESS_SUSPENDED | [[fix-data-access-suspended]] |
| Cerchio verde ma grafici che non si muovono | [[feed-connected-chart-not-moving]] |
| I grafici restano indietro nei periodi intensi | [[data-delayed-lagging]] — e valuta DOM Type = MBP |

> **Attenzione:** Le credenziali dxFeed rilasciate tramite altre piattaforme di charting (Quantower, Sierra Chart, ATAS e simili) non possono essere usate con DeepCharts, e gli acquisti su dxfeed.com funzionano solo quando al momento dell'acquisto è stata selezionata DeepCharts come piattaforma. Se hai scelto un'altra piattaforma, contatta il supporto dxFeed per farti riemettere le credenziali per DeepCharts.

## Articoli correlati

- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[connect-dxfeed-prop-firm]]
- [[connect-data-feed]]
- [[compatibility-guide]]
- [[first-chart]]