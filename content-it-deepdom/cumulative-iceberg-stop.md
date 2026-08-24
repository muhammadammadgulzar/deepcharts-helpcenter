---
title: "Cumulative Iceberg/Stop"
slug: "cumulative-iceberg-stop"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "L'indicatore Cumulative Iceberg/Stop monitora e identifica due tipi specifici di attività di mercato — gli ordini iceberg e gli ordini stop — utilizzando la tecnologia MBO (Market By Order)."
keywords: ["cumulative iceberg stop", "deepdom cumulative iceberg stop", "deepdom", "indicatori"]
source_hash: "31e666dfa1aec40f"
ai_translated: true
source_hash: "31e666dfa1aec40f"
---
L'indicatore Cumulative Iceberg/Stop monitora e identifica due tipi specifici di attività di mercato — gli ordini iceberg e gli ordini stop — utilizzando la tecnologia MBO (Market By Order). Traccia la presenza e l'esecuzione di questi ordini in tempo reale, mostrando come influenzano il movimento del prezzo e aiutandoti a capire dove potrebbe verificarsi un'attività nascosta significativa.

[SCREENSHOT: Cumulative Iceberg/Stop — panoramica (DeepDOM) | dd-it-cumulative-iceberg-stop-01.png]

### Che cos'è un ordine iceberg?

Un ordine iceberg è un grande ordine di acquisto o di vendita che viene deliberatamente suddiviso in porzioni visibili più piccole per nascondere al mercato la sua dimensione reale. In ogni momento nel book di negoziazione è visibile solo una piccola parte — la "punta". Una volta eseguita la porzione visibile, la parte nascosta rimanente entra gradualmente nel mercato.

Vediamola così — immagina che una grande istituzione voglia comprare 10.000 contratti di NQ. Se inserisse l'intero ordine in una volta sola, ogni trader che osserva il book di negoziazione lo vedrebbe immediatamente, i prezzi si muoverebbero contro di lei e il suo prezzo medio di ingresso peggiorerebbe. Invece, lo suddivide in pezzi più piccoli — mostrando nel book solo 50 contratti alla volta. Ogni volta che quei 50 contratti vengono comprati, ne appaiono altri 50 — facendo sembrare il tutto normale attività di mercato mentre riempie silenziosamente la sua grande posizione.

Esistono due tipi di ordini iceberg:

Ordine iceberg nativo Supportato direttamente dal motore di matching dell'exchange. È l'exchange stesso a gestire le porzioni visibili e nascoste, rivelando gradualmente il volume man mano che la punta visibile viene consumata. Questi possono essere identificati tramite i dati MBO.

Ordine iceberg sintetico Creato da software di trading esterni che suddividono un grande ordine in diversi ordini più piccoli e li immettono progressivamente nel book. Questi non sono gestiti dall'exchange e non possono essere identificati tramite MBO — appaiono indistinguibili dagli ordini normali.

Che cos'è l'MBO (Market By Order)? L'MBO è una tecnologia che ti fornisce dati dettagliati a livello di singolo ordine dal book — inclusi l'identificativo di ciascun ordine, la quantità iniziale, il volume residuo e lo stato di esecuzione. Questo livello di dettaglio rende possibile individuare il caratteristico comportamento di "ricarica" degli ordini iceberg — dove una nuova porzione visibile continua ad apparire ogni volta che la precedente viene eseguita per intero. L'MBO può identificare gli ordini iceberg nativi ma non quelli sintetici.

### Che cos'è un ordine stop?

Un ordine stop è un'istruzione che attiva automaticamente un ordine a mercato quando il prezzo raggiunge un livello specifico. I trader li usano in due modi principali — per proteggere una posizione aperta da una perdita rilevante, oppure per entrare nel mercato quando il prezzo rompe un livello chiave.

Ad esempio — un trader è long su NQ da 26.800 e inserisce un ordine stop a 26.750. Se il prezzo scende a 26.750, la sua posizione si chiude automaticamente — limitando la perdita senza che debba fissare lo schermo di continuo.

Con feed dati come Rithmic (Market Depth), DeepDom può ricostruire e quantificare gli ordini stop utilizzando algoritmi proprietari. Quando il prezzo raggiunge un livello in cui si sono accumulati molti ordini stop, questi possono attivarsi tutti simultaneamente — generando un picco significativo di volume e potenzialmente causando una rapida continuazione o inversione del movimento.

### Come configurare l'indicatore Cumulative Iceberg/Stop

Fai clic sull'icona Indicators sul grafico

Trova Cumulative Iceberg/Stop nell'elenco e fai clic su + per aggiungerlo

Fai clic sull'icona delle impostazioni sull'indicatore per aprire la sua finestra di configurazione

[SCREENSHOT: Cumulative Iceberg/Stop — Come configurare l'indicatore Cumulative Iceberg/Stop (DeepDOM) | dd-it-cumulative-iceberg-stop-02.png]

## Impostazioni generali

Input Data Seleziona il tipo di dati che l'indicatore usa per i suoi calcoli:

Volume — basato sul volume degli ordini

Order — basato sul numero di singoli ordini

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni generali (DeepDOM) | dd-it-cumulative-iceberg-stop-03.png]

Filter Minimum Imposta il volume o il numero minimo di ordini necessario perché un evento sia considerato rilevante. Filtra l'attività insignificante e concentra l'indicatore sull'orderflow che conta davvero.

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni generali (DeepDOM) | dd-it-cumulative-iceberg-stop-04.png]

Esempi - Filter Minimum - a 1

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni generali (DeepDOM) | dd-it-cumulative-iceberg-stop-05.png]

Filter Minimum - a 10

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni generali (DeepDOM) | dd-it-cumulative-iceberg-stop-06.png]

Filter Maximum Imposta il volume o il numero massimo di ordini da includere nel calcolo. Utile per escludere dalla visualizzazione gli eventi anomali.

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni generali (DeepDOM) | dd-it-cumulative-iceberg-stop-07.png]

Esempi - Filter Max - a 0

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni generali (DeepDOM) | dd-it-cumulative-iceberg-stop-08.png]

Filter Max - a 10

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni generali (DeepDOM) | dd-it-cumulative-iceberg-stop-09.png]

## Impostazioni Iceberg

Iceberg Ask Color Imposta il colore usato per identificare gli ordini iceberg sul lato Ask (vendita) del mercato.

Iceberg Bid Color Imposta il colore usato per identificare gli ordini iceberg sul lato Bid (acquisto) del mercato.

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni Iceberg (DeepDOM) | dd-it-cumulative-iceberg-stop-10.png]

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni Iceberg (DeepDOM) | dd-it-cumulative-iceberg-stop-11.png]

## Impostazioni Stop

Stop Bid Color Imposta il colore usato per visualizzare gli ordini stop attivati sul lato acquisto. Stop Ask Color Imposta il colore usato per visualizzare gli ordini stop attivati sul lato vendita.

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni Stop (DeepDOM) | dd-it-cumulative-iceberg-stop-12.png]

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni Stop (DeepDOM) | dd-it-cumulative-iceberg-stop-13.png]

## Impostazioni di visualizzazione

Per impostazione predefinita, l'indicatore Stop Iceberg mostra sia i dati Iceberg che quelli Stop nella stessa area del grafico, utilizzando due assi:

Stop Axis — mostra la quantità di ordini stop identificati

Iceberg Axis — mostra la quantità di ordini iceberg identificati

Puoi anche aggiungere più indicatori Stop Iceberg allo stesso grafico e configurarli in modo indipendente — ad esempio dedicando un indicatore agli Iceberg e un altro agli Stop — ottenendo una vista più personalizzata e dettagliata.

[SCREENSHOT: Cumulative Iceberg/Stop — Impostazioni di visualizzazione (DeepDOM) | dd-it-cumulative-iceberg-stop-14.png]

Display Mode Definisce come i dati sugli ordini vengono aggregati e visualizzati. Le opzioni includono:

Sum — mostra il totale cumulativo degli ordini durante un movimento di mercato. Non richiede impostazioni temporali

Last Minutes — mostra gli ordini eseguiti negli ultimi minuti, secondo il numero definito dall'utente

Last Seconds — mostra gli ordini eseguiti negli ultimi secondi, secondo il numero definito dall'utente

Display Parameters Quando usi la modalità Last Minutes o Last Seconds, imposta il numero esatto di minuti o secondi usati per il calcolo.

Line Width Imposta lo spessore delle linee usate per rappresentare l'attività degli ordini sul grafico.

Use Separate Axes Quando è attivata, i dati Iceberg e Stop vengono visualizzati su assi separati per distinguerli più facilmente.

## Alert Stop

Enable — attiva le notifiche per l'attività degli ordini stop

Threshold — imposta il numero minimo di ordini stop che l'indicatore deve identificare prima che venga attivata una notifica

Enable Popup — quando è attivata, un avviso popup appare sullo schermo al raggiungimento della soglia

[SCREENSHOT: Cumulative Iceberg/Stop — Alert Stop (DeepDOM) | dd-it-cumulative-iceberg-stop-15.png]

## Alert Iceberg

Enable — attiva le notifiche per l'attività degli ordini iceberg

Threshold — imposta il numero minimo di ordini iceberg che l'indicatore deve identificare prima che venga attivata una notifica

Enable Popup — quando è attivata, un avviso popup appare sullo schermo al superamento della soglia

[SCREENSHOT: Cumulative Iceberg/Stop — Alert Iceberg (DeepDOM) | dd-it-cumulative-iceberg-stop-16.png]

## Conclusione

L'indicatore Cumulative Iceberg/Stop ti offre una finestra unica su due dei tipi di ordini nascosti più impattanti del mercato. Capendo dove gli ordini iceberg stanno assorbendo la pressione e dove gli ordini stop si stanno accumulando, puoi ottenere un vantaggio significativo nell'anticipare le potenziali reazioni del prezzo e nel comprendere il comportamento dei player istituzionali sui livelli chiave.

#### Hai ancora problemi?

Il nostro team di supporto è disponibile 24 ore su 24, 7 giorni su 7, pronto ad aiutarti con qualsiasi problema tu possa incontrare.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Ticket di supporto (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.