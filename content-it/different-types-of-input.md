---
title: "Diversi tipi di dati di input per gli indicatori"
slug: "different-types-of-input"
category: "Indicators & Analysis"
subcategory: "Indicator Basics"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Cosa significano i tipi di dati di input Volume, Order e Aggregate e come cambiano ciò che i tuoi indicatori di orderflow contano."
keywords: ["dati di input", "impostazioni dati", "volume vs aggregate", "aggregate trades", "MBO", "market by order", "big trades ordine mancato", "tipo di input"]
source_hash: "ae79b4c0f77e8c25"
ai_translated: true
source_hash: "ae79b4c0f77e8c25"
---
Quasi ogni indicatore di orderflow in DeepCharts — Deep Print, la famiglia Deep Profile, Big Trades, gli strumenti di delta e altri — ha un'impostazione **Input Data** nella sezione **Data Settings**. Questo singolo menu a discesa decide cosa l'indicatore conta effettivamente, ed è la ragione più comune per cui due trader che guardano "lo stesso" indicatore vedono numeri diversi.

Capire i tipi di input richiede cinque minuti e ti farà risparmiare ore di confusione in seguito.

## Che cos'è

**Input Data** seleziona i dati di origine da cui un indicatore è costruito. La stessa candela può essere misurata come transazioni grezze dell'exchange (**Volume**), come eventi del book di negoziazione (**Order**) o come scambi ricostruiti da DeepCharts nella loro dimensione originale (**Aggregate**). Molti indicatori offrono anche **Number of Trades**, che conta le esecuzioni invece dei contratti.

La scelta è importante perché gli exchange non riportano gli scambi come la maggior parte delle persone immagina. Quando un compratore prende 30 contratti offerti da tre venditori separati da 10 contratti ciascuno, il feed grezzo registra tre transazioni separate da 10 — non un unico scambio da 30.

Puoi osservare dal vivo questo flusso grezzo di esecuzioni qui sotto — ogni print è una transazione registrata, esattamente ciò che il tipo di input **Volume** conta.

[WIDGET: tape-lab]

## Quando usarlo

- Un indicatore ha "mancato" uno scambio evidentemente grande — l'ordine era probabilmente suddiviso in più esecuzioni e ogni pezzo è caduto sotto la tua soglia.
- I tuoi numeri differiscono dal grafico di un altro trader — confronta sempre prima i tipi di **Input Data**.
- Vuoi il dettaglio a livello di ordine (quali ordini passivi sono stati consumati) — richiede il tipo **Order** e un feed compatibile MBO.
- Vuoi individuare le istituzioni che suddividono deliberatamente ordini grandi in molti piccoli — è esattamente ciò per cui **Aggregate** è stato creato.

## Avvio rapido

1. Apri le impostazioni di un qualsiasi indicatore di orderflow (Deep Print, Deep Profile, Big Trades e così via).
2. Vai alla sezione **Data Settings**.
3. Apri il menu a discesa **Input Data** e scegli un tipo usando la tabella qui sotto.
4. Applica e confronta — tipi di input diversi possono produrre risultati visibilmente diversi sulle stesse candele.

[SCREENSHOT: Una finestra di impostazioni di un indicatore (es. Deep Print) aperta sulla sezione Data Settings con il menu a discesa Input Data espanso, che mostra le voci Volume, Order e Aggregate | dc-it-different-types-of-input-01.png]

## Come leggerlo

**Volume** è il record grezzo per transazione dell'exchange. Ogni singola esecuzione è memorizzata separatamente, coprendo sia la partecipazione passiva sia quella aggressiva. L'esempio dei 30 contratti di cui sopra diventa tre transazioni da 10 — quindi un indicatore Big Trades con una dimensione minima di 30 lo salta del tutto, perché nessuna singola transazione raggiunge la soglia.

**Order** funziona solo con feed dati MBO (Market by Order) ed espone la granularità a livello di ordine. Nella finestra [[adv-time-and-sales|Advanced Time And Sales]], la colonna **List** mostra i due ordini passivi più grandi consumati da un aggressore. Anche i dati Order hanno però un punto cieco: le grandi istituzioni spesso suddividono intenzionalmente — ad esempio inviando 100 ordini separati da 5 contratti invece di un ordine da 500 — proprio per restare invisibili a strumenti come questo.

**Aggregate** non viene fornito da alcun feed dati; è calcolato da DeepCharts stesso. La piattaforma analizza il flusso di transazioni e ricostruisce gli ordini grandi nascosti collegando le esecuzioni che condividono lo stesso ID aggressore attraverso tempo e prezzo. Poiché è calcolato in locale, funziona con qualsiasi feed dati e non richiede MBO.

[SCREENSHOT: Due grafici footprint identici affiancati, uno con Input Data = Volume e uno con Input Data = Aggregate, che mostrano valori di cella visibilmente diversi sulle stesse candele | dc-it-different-types-of-input-02.png]

## Riferimento delle impostazioni

| Tipo di input | Cosa conta | Requisito del feed | Ideale per |
|---|---|---|---|
| **Volume** | Transazioni grezze dell'exchange; ogni esecuzione registrata separatamente | Qualsiasi feed | Attività totale per prezzo; la lettura "classica" |
| **Order** | Dati a livello di book di negoziazione — es. i più grandi ordini passivi consumati da un aggressore | Solo feed compatibile MBO | Vedere quali ordini in attesa sono stati colpiti |
| **Aggregate** | Esecuzioni ricollegate tramite lo stesso ID aggressore nella dimensione originale dell'ordine | Qualsiasi feed (calcolato da DeepCharts) | Individuare ordini istituzionali suddivisi deliberatamente |
| **Number of Trades** | Il conteggio delle esecuzioni per prezzo, non il volume in contratti (offerto da molti indicatori) | Qualsiasi feed | Analisi della frequenza degli scambi |

## Suggerimenti ed errori comuni

- **"Big Trades non ha contrassegnato un ordine enorme."** Con Input Data = Volume, un ordine suddiviso viene contato come le sue esecuzioni componenti, ciascuna sotto il tuo minimo. Passa ad **Aggregate** così DeepCharts ricostruisce la dimensione originale.
- **"L'input Order non mostra nulla."** Il tuo feed non sta fornendo dati MBO. I feed CQG non forniscono MBO; dxFeed richiede che il tipo DOM sia impostato su MBO; i feed Rithmic lo forniscono. Vedi [[connect-data-feed]] per la configurazione del feed.
- **Confronti i grafici con un altro trader?** Chiedi dell'Input Data prima di ogni altra cosa — poi i filtri, poi il raggruppamento dei tick.
- Tipi di input diversi producono forme genuinamente diverse sugli indicatori a profilo. Nessuna è "sbagliata"; misurano cose diverse.

## Articoli correlati

- [[indicator-layout]]
- [[orderflow-101]]
- [[deep-print]]
- [[big-trades]]
- [[adv-time-and-sales]]
- [[deep-profile]]