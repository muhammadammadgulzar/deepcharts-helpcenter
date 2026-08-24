---
title: "Come gestire il rollover dei simboli"
slug: "how-to-manage-symbol-rollover"
category: "How To"
subcategory: ""
type: "how-to"
difficulty: "beginner"
time: "2 min read"
description: "Questo articolo spiega cos'è il rollover dei contratti future e come gestire il rollover dei simboli in DeepDOM, così che i tuoi grafici e strumenti facciano sempre riferimento alla scadenza corretta."
keywords: ["come gestire il rollover dei simboli", "gestire il rollover dei simboli deepdom", "deepdom", "guida"]
source_hash: "891cdba0b91d2342"
ai_translated: true
source_hash: "891cdba0b91d2342"
---
Questo articolo spiega cos'è il rollover dei contratti future e come gestire il rollover dei simboli in DeepDOM, così che i tuoi grafici e strumenti facciano sempre riferimento alla scadenza corretta.

## Che cos'è il rollover?

Nei mercati dei futures, il rollover è il processo di trasferimento di una posizione aperta da un contratto in scadenza a un contratto con una data di scadenza successiva. I trader rollano le posizioni in avanti per evitare la liquidazione automatica o la consegna che avviene alla scadenza.

### Rollover tecnico

Il rollover tecnico avviene in corrispondenza o in prossimità della data di scadenza ufficiale definita dall'exchange. È legato all'ultimo giorno di negoziazione del contratto.

### Rollover per volume

Il rollover per volume avviene prima, quando il volume di scambi sul contratto successivo supera quello sul contratto in scadenza. Molti trader passano al nuovo contratto in questo momento per beneficiare di una migliore liquidità e di spread più stretti.

## Procedura per eseguire il rollover in DeepDOM

[SCREENSHOT: Come gestire il rollover dei simboli — Procedura per eseguire il rollover in DeepDOM (DeepDOM) | dd-it-how-to-manage-symbol-rollover-01.png]

Vai su Options > Symbol Rollover .

Esegui il rollover solo per i mercati evidenziati nel Symbol Rollover

[SCREENSHOT: Come gestire il rollover dei simboli — Procedura per eseguire il rollover in DeepDOM (DeepDOM) | dd-it-how-to-manage-symbol-rollover-02.png]

Esegui il rollover per tutti i mercati correlati, inclusi i contratti minori come MINI e MICRO .

Se un contratto MICRO non è elencato automaticamente, apri una Heatmap o un'altra finestra di DeepDOM per quello strumento e ricontrolla la finestra Symbol Rollover.

Dopo questi passaggi, la scadenza del contratto usata da DeepDOM per i simboli selezionati viene aggiornata correttamente.

### Ripristinare una scadenza precedente

[SCREENSHOT: Come gestire il rollover dei simboli — Ripristinare una scadenza precedente (DeepDOM) | dd-it-how-to-manage-symbol-rollover-03.png]

Disconnetti il tuo feed e chiudi il workspace

Vai su Options > Symbol Management .

Fai clic su Expert Mode .

[SCREENSHOT: Come gestire il rollover dei simboli — Ripristinare una scadenza precedente (DeepDOM) | dd-it-how-to-manage-symbol-rollover-04.png]

Nella Symbol List (colonna centrale), individua i mercati con la scadenza errata (MAJOR, MINI, MICRO).

[SCREENSHOT: Come gestire il rollover dei simboli — Ripristinare una scadenza precedente (DeepDOM) | dd-it-how-to-manage-symbol-rollover-05.png]

Seleziona lo strumento con la scadenza sbagliata e fai clic su Modify .

Nella sezione Advanced, riporta il mese di scadenza al contratto precedente.

Chiudi la finestra Symbol Management.

Riavvia DeepDOM senza connettere alcun flusso di dati.

Quando riconnetterai i feed dati dopo il riavvio, DeepDOM userà il mese di scadenza ripristinato per quei simboli.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24 ore su 24, 7 giorni su 7, pronto ad aiutarti con qualsiasi problema tu possa incontrare. Quando ci contatti, includi:

Uno screenshot del problema.

Una breve descrizione di ciò che stavi cercando di fare.

Ticket di supporto (risposta più rapida): visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email: puoi anche scriverci a support@deepcharts.com. Tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.