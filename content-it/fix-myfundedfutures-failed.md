---
title: "Correzione: dxfeed.myfundedfutures.com Failed"
slug: "fix-myfundedfutures-failed"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Risolvi l'errore 'dxfeed.myfundedfutures.com failed: You need to sign the datafeed' firmando il Market Data Agreement con la tua firm."
keywords: ["dxfeed.myfundedfutures.com failed", "You need to sign the datafeed", "errore dxfeed myfundedfutures", "feed dati MFF fallito", "sign the datafeed", "market data agreement non firmato"]
source_hash: "e8ba5010e90d60ca"
ai_translated: true
source_hash: "e8ba5010e90d60ca"
---
Questo errore di connessione significa che il feed di dati di mercato non è attivato per il tuo conto di trading. Prima che dxFeed conceda l'accesso ai dati, devi firmare il Market Data Agreement con la tua firm di trading — fino ad allora, la connessione è bloccata. Non si tratta di un problema del software DeepCharts; l'attivazione è gestita dal fornitore dei dati e dalla tua firm di trading.

## Sintomo

Quando colleghi il tuo conto dxFeed della prop firm, la connessione fallisce con:

**dxfeed.myfundedfutures.com failed: You need to sign the datafeed**

[SCREENSHOT: La finestra di errore di connessione con il messaggio completo "dxfeed.myfundedfutures.com failed: You need to sign the datafeed" | dc-it-fix-myfundedfutures-failed-01.png]

Il nome host in questo esempio appartiene a MyFundedFutures; se il tuo conto è presso un'altra prop firm dxFeed, il nome host nel messaggio può essere diverso, ma il significato e la soluzione sono gli stessi.

Da non confondere con:

- [[fix-data-access-suspended]] — hai già firmato l'accordo, ma dxFeed ha sospeso l'accesso dopo una verifica dello status Non-Professional.
- [[fix-username-password]] — la connessione viene rifiutata perché le credenziali sono errate.

## Causa più probabile

Il Market Data Agreement non è stato firmato (o non è ancora stato attivato) per il tuo conto di trading, quindi il fornitore dei dati blocca l'accesso ai dati di mercato.

I casi più comuni sono un conto appena creato, dati di mercato mai attivati e uno status Non-Professional non registrato.

## Soluzione rapida

1. Individua la firm di trading a cui appartiene il tuo conto. Per il nome host qui sopra, è MyFundedFutures.
2. Contatta il supporto della firm e chiedi: **"How can I sign the Market Data Agreement (Non-Professional) for my DXFeed data?"**
3. Completa l'accordo che ti invieranno, assicurandoti di selezionare lo status **Non-Professional** se ne hai i requisiti. Vedi [[sign-market-data-agreement]] per capire cosa copre l'accordo e come funziona la scelta dello status.
4. Attendi la conferma dell'attivazione. L'attivazione può richiedere da pochi minuti a qualche ora.
5. Riavvia DeepCharts e ricollega il feed dati.

Se devi reinserire i dettagli della connessione durante il ricollegamento, prova il mock interattivo di Feed Settings qui sotto — scegli **dxFeed Prop** come sorgente e nota che non c'è alcun campo server da compilare.

[WIDGET: feed-navigator]

[SCREENSHOT: La connessione del feed con stato di successo (verde) dopo l'attivazione dell'accordo e il riavvio di DeepCharts | dc-it-fix-myfundedfutures-failed-02.png]

## Se non ha funzionato

### Causa: l'attivazione si sta ancora propagando

Se hai firmato l'accordo da poco, l'attivazione potrebbe semplicemente non aver ancora raggiunto i server dei dati. Attendi ancora un po', poi riavvia DeepCharts e riprova.

### Causa: l'accordo è firmato ma i dati sono ancora inattivi

Verifica con la tua firm di trading che i dati di mercato siano effettivamente attivi sul tuo conto e che il tuo status Non-Professional sia stato registrato. L'accesso ai dati di mercato resta bloccato finché il fornitore non contrassegna l'accordo come completato.

## Ancora bloccato

Genera un [[diagnostic-report]] e contatta il supporto DeepCharts tramite [[get-help]] — includi il testo esatto dell'errore e il nome della tua firm di trading.

## Come prevenirlo

Firma il Market Data Agreement subito dopo la creazione di un nuovo conto e verifica il tuo status Non-Professional prima di avviare la piattaforma. La procedura è descritta in [[sign-market-data-agreement]], mentre la guida completa alla connessione per le prop firm è in [[connect-dxfeed-prop-firm]].

## Articoli correlati

- [[sign-market-data-agreement]]
- [[connect-dxfeed-prop-firm]]
- [[connect-dxfeed]]
- [[fix-data-access-suspended]]
- [[fix-unable-to-establish-connection]]