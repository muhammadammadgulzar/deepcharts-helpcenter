---
title: "Deep Iceberg (Rilevatore di ordini Iceberg)"
slug: "deep-iceberg"
category: "Deep Indicators"
subcategory: ""
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "L'indicatore Deep Iceberg evidenzia la liquidità istituzionale nascosta rilevando gli ordini iceberg – grandi ordini limit di cui in ogni momento è visibile nel DOM solo una piccola porzione, mentre il resto rimane nascosto."
keywords: ["deep iceberg rilevatore di ordini iceberg", "deepdom deep iceberg rilevatore di ordini iceberg", "deepdom", "deep indicators"]
source_hash: "91a7fce0f5a60a16"
ai_translated: true
source_hash: "91a7fce0f5a60a16"
---
L'indicatore Deep Iceberg evidenzia la liquidità istituzionale nascosta rilevando gli ordini iceberg – grandi ordini limit di cui in ogni momento è visibile nel DOM solo una piccola porzione, mentre il resto rimane nascosto.

[SCREENSHOT: Deep Iceberg (Rilevatore di ordini Iceberg) — panoramica (DeepDOM) | dd-it-deep-iceberg-01.png]

## 1. Che cos'è un ordine iceberg?

Sugli exchange di futures come il CME, un ordine iceberg è un ordine limit che specifica una dimensione totale e una dimensione visibile più piccola (chiamata anche peak o display quantity).

Solo la porzione visibile appare nel book di negoziazione come un normale ordine limit.

Quando quella fetta visibile viene eseguita, l'Iceberg Algo la ricarica automaticamente dalla quantità nascosta, mantenendo lo stesso ID dell'ordine ma con una priorità di coda aggiornata.

Questo processo si ripete finché l'intera dimensione totale non viene eseguita oppure la quantità nascosta rimanente non viene cancellata.

L'effetto nel DOM è che un piccolo ordine in attesa sembra *ricaricarsi ancora e ancora* esattamente allo stesso prezzo, anche se in realtà lì vengono scambiati molti più contratti di quanto la dimensione visualizzata lascerebbe intendere in una candela Footprint.

## 2. Come Deep Iceberg rileva la dimensione nascosta

Deep Iceberg utilizza i dati MBO (Market By Order) per tracciare la ricarica ripetuta degli ordini in attesa allo stesso prezzo e identificare dove è stato scambiato molto più volume di quanto sia mai stato visibile nel book.

Monitora l'ID dell'ordine: tutti quei piccoli ordini passivi che continuano a riapparire hanno una cosa in comune, l'ID passivo, e Deep Iceberg traccia proprio quell'ID.

Ti mostra il totale dei contratti e l'Highest Visible Limit Order (ordine limit visibile più alto) che è stato visibile nel book durante la vita dell'iceberg.

Questo rende possibile vedere dove un grande partecipante sta accumulando o distribuendo dimensioni significative mantenendo la maggior parte del suo interesse nascosta dalla normale vista del DOM.

## 3. Visualizzazione sul grafico

Ogni iceberg rilevato viene disegnato come un marker al prezzo in cui la liquidità nascosta è stata scambiata. L'etichetta accanto al marker mostra due valori:

[SCREENSHOT: Deep Iceberg (Rilevatore di ordini Iceberg) — 3. Visualizzazione sul grafico (DeepDOM) | dd-it-deep-iceberg-02.png]

Volume iceberg totale eseguito – il totale dei contratti scambiati come parte dell'iceberg a quel prezzo (ad esempio, 1.000 contratti).

Dimensione visibile massima – la fetta visualizzata più grande che sia mai stata visibile nel book durante la vita di quell'iceberg (ad esempio, 10 contratti).

Quando attivi le linee degli iceberg attivi, una linea orizzontale viene tracciata attraverso il marker finché l'iceberg è ancora in attesa nel book e non è stato completamente eseguito o cancellato. Questo crea una fascia visiva di "supporto" o "resistenza" che mostra dove un grande player è ancora presente.

## 4. Impostazioni dei dati

[SCREENSHOT: Deep Iceberg (Rilevatore di ordini Iceberg) — 4. Impostazioni dei dati (DeepDOM) | dd-it-deep-iceberg-03.png]

Il gruppo Data Settings ti consente di controllare quali eventi iceberg vengono visualizzati e quanto è sensibile il rilevatore:

Filter min / Filter max – filtri inferiore e superiore sulla dimensione degli iceberg rilevati. Usali per ignorare gli iceberg molto piccoli o per concentrarti solo su eventi eccezionalmente grandi.

Iceberg timeout seconds – per quanto tempo Deep Iceberg continua a trattare l'attività in corso allo stesso prezzo come parte dello stesso iceberg. Se entro questo periodo non avviene alcuna nuova ricarica, l'iceberg viene considerato concluso.

## 5. Impostazioni di visualizzazione

[SCREENSHOT: Deep Iceberg (Rilevatore di ordini Iceberg) — 5. Impostazioni di visualizzazione (DeepDOM) | dd-it-deep-iceberg-04.png]

La sezione Plot Settings controlla come i marker degli iceberg appaiono sul grafico:

Marker – scegli la forma usata per ogni iceberg rilevato: *Circle*, *Square*, *Diamond*, *Triangle* o *Text*.

Size unit –

Automatic – la dimensione del marker viene scalata automaticamente in base al volume dell'iceberg.

Tick – la dimensione del marker è definita in tick di prezzo, così rimane coerente rispetto alla scala dei prezzi.

Standard Dev. – controlla quanto un iceberg deve discostarsi dalla dimensione media per essere evidenziato con più forza. Valori più alti rendono la visualizzazione più selettiva.

Opacity – trasparenza dei marker degli iceberg.

Ask color / Bid color – colori usati per gli iceberg sul lato vendita e sul lato acquisto.

## 6. Iceberg attivi

[SCREENSHOT: Deep Iceberg (Rilevatore di ordini Iceberg) — 6. Iceberg attivi (DeepDOM) | dd-it-deep-iceberg-05.png]

La sezione Active Icebergs gestisce le linee orizzontali per gli iceberg che sono ancora in attesa nel book:

Enable line – attiva o disattiva il disegno della linea degli iceberg attivi.

Line width – spessore della linea orizzontale.

Line style – scegli tra gli stili *Solid*, *Dash*, *Dot*, *Dash dot* o *Dash dot dot*.

Line remove mode – determina cosa succede quando l'iceberg non è più attivo:

Stop – la linea smette di estendersi ma rimane sul grafico nella sua ultima posizione.

Disappear – la linea viene rimossa quando l'iceberg è completamente eseguito o cancellato.

Una linea continua ti dice che il grande partecipante sta ancora quotando a quel prezzo. Quando la linea si ferma o scompare, quella liquidità è stata completamente scambiata oppure si è ritirata.

## 7. Impostazioni di visualizzazione

[SCREENSHOT: Deep Iceberg (Rilevatore di ordini Iceberg) — 7. Impostazioni di visualizzazione (DeepDOM) | dd-it-deep-iceberg-06.png]

Minimum size / Maximum size – impostano la dimensione minima e massima dei marker che Deep Iceberg userà per disegnare gli eventi iceberg. Usa un intervallo stretto se preferisci un aspetto più uniforme, oppure un intervallo più ampio così che gli iceberg molto grandi risaltino con marker più grandi.

## 8. Impostazioni del testo

[SCREENSHOT: Deep Iceberg (Rilevatore di ordini Iceberg) — 8. Impostazioni del testo (DeepDOM) | dd-it-deep-iceberg-07.png]

Usa il gruppo Text Settings per controllare le etichette collegate ai marker degli iceberg:

Plot only if inside – quando è attivata, le etichette di testo vengono disegnate solo quando rientrano nella vista corrente del grafico, aiutando a evitare etichette sovrapposte.

Text size – dimensione del carattere delle etichette degli iceberg.

Text color – colore usato per il testo, indipendente dal colore del marker.

Il formato dell'etichetta è pensato per rendere la struttura dell'iceberg facile da leggere a colpo d'occhio, mostrando tipicamente la dimensione totale eseguita e la fetta visibile massima.

## 9. Alert Iceberg

[SCREENSHOT: Deep Iceberg (Rilevatore di ordini Iceberg) — 9. Alert Iceberg (DeepDOM) | dd-it-deep-iceberg-08.png]

La sezione Alert Iceberg ti consente di attivare avvisi quando vengono rilevati iceberg particolarmente grandi:

Enable – attiva o disattiva gli avvisi sugli iceberg.

Threshold – volume minimo dell'iceberg rilevato necessario per far scattare un avviso. Impostalo alto per ricevere notifiche solo per gli ordini nascosti più significativi del mercato.

Gli avvisi possono essere combinati con i marker visivi, così non ti perdi gli eventi chiave di liquidità nascosta anche quando sei concentrato su un'altra parte del grafico.

## 10. Casi d'uso pratici

Deep Iceberg è particolarmente utile per individuare dove un grande player sta assorbendo ordini a mercato o sta alimentando il mercato con un'offerta nascosta.

Per usare Iceberg in DeepDom è necessario un feed dati MBO

Iceberg ripetuti sul lato acquisto vicino ai minimi spesso segnalano un accumulo silenzioso e una potenziale base.

Iceberg sul lato vendita impilati sopra il prezzo possono indicare distribuzione o un venditore nascosto che difende un livello.

Quando un'importante linea iceberg finalmente scompare e il prezzo la attraversa, ciò segna spesso un cambiamento significativo nel controllo del mercato.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24 ore su 24, 7 giorni su 7, pronto ad aiutarti con qualsiasi problema tu possa incontrare.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Ticket di supporto (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.