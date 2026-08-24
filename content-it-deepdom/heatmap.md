---
title: "Heatmap"
slug: "heatmap"
category: "Features"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "10 min read"
description: "La Heatmap è il cuore di DeepDOM e il motivo stesso per cui la piattaforma esiste. Ogni altro strumento — il DOM, le Bubbles, il CVD, il VWAP — aggiunge contesto e conferma."
keywords: ["heatmap", "heatmap deepdom", "deepdom", "funzionalità"]
source_hash: "4f9f33c81d8c5b61"
ai_translated: true
source_hash: "4f9f33c81d8c5b61"
---
La Heatmap è il cuore di DeepDOM e il motivo stesso per cui la piattaforma esiste. Ogni altro strumento — il DOM, le Bubbles, il CVD, il VWAP — aggiunge contesto e conferma. Ma la Heatmap è il luogo in cui vedi il quadro completo delle intenzioni del mercato disposto visivamente su prezzo e tempo simultaneamente.

La maggior parte dei trader guarda un grafico dei prezzi e vede ciò che è già accaduto. La Heatmap ti permette di vedere cosa il mercato sta pianificando prima che accada — ogni banda orizzontale di colore è una concentrazione di ordini limit presenti nel book di negoziazione a quel livello di prezzo. Denaro reale. Posizioni reali. Intenzioni reali. Più il colore è spesso e intenso, più la liquidità in quella zona è impegnata.

Ciò che la rende unicamente potente è che combina in un'unica vista due flussi di dati completamente diversi — i dati degli ordini a mercato eseguiti dal Time and Sales e i dati degli ordini limit in tempo reale dal DOM. Questo significa che non stai vedendo solo dove il prezzo è stato o dove gli ordini sono in attesa. Li stai vedendo entrambi allo stesso tempo, il che ti permette di capire come il prezzo interagisce con la liquidità mentre accade.

[SCREENSHOT: Heatmap — panoramica (DeepDOM) | dd-it-heatmap-01.png]

L'intensità del colore è una misura diretta della concentrazione di ordini. Il rosso indica la liquidità più pesante, l'arancione la seconda più alta e, man mano che i colori tendono al giallo, al bianco, al blu e al nero, la liquidità diventa progressivamente più sottile. Quando una banda spessa rossa o arancione si forma a un livello, il prezzo reagirà quasi sempre quando lo raggiunge. La Heatmap ti permette di vedere queste zone formarsi in anticipo — spesso minuti prima che il prezzo si avvicini.

Poiché DeepDOM salva e registra questi dati nel tempo, puoi anche vedere esattamente come si è sviluppata una zona. Una liquidità che si accumula gradualmente in 30 o 40 minuti racconta una storia molto diversa da un ordine di grandi dimensioni apparso all'improvviso proprio mentre il prezzo si avvicinava. Il primo è una posizione deliberata e pianificata in anticipo. Il secondo è una posizione reattiva. Capire come si è formata la liquidità — non solo dove si trova — è ciò che distingue un trader che legge la Heatmap in modo superficiale da uno che comprende davvero l'orderflow.

## Aprire una Heatmap

Dopo aver connesso il tuo feed dati, segui questi passaggi per aprire un nuovo grafico:

Connetti prima il feed dati e assicurati che sia verde (connesso). Se la connessione è gialla (sta ancora cercando la connessione) e rossa (la connessione è disconnessa)

[SCREENSHOT: Heatmap — Aprire una Heatmap (DeepDOM) | dd-it-heatmap-02.png]

Fai clic su New in DeepDOM

Seleziona lo strumento finanziario che vuoi visualizzare dal tuo elenco di simboli sottoscritti (assicurati di aver configurato correttamente le impostazioni del Symbol Manager)

Fai clic su Select in basso a destra per confermare

[SCREENSHOT: Heatmap — Aprire una Heatmap (DeepDOM) | dd-it-heatmap-03.png]

## Configurare la sorgente dati MBO / MBP

Source Settings ti consente di configurare la sorgente dati per ogni singolo grafico. È qui che definisci se il grafico usa dati MBP o MBO — il che influisce direttamente su quali funzionalità di DeepDOM sono disponibili per te.

Per accedere a Source Settings, fai clic con il tasto destro del mouse in un punto qualsiasi del grafico e seleziona Source Settings dal menu.

[SCREENSHOT: Heatmap — Configurare la sorgente dati MBO / MBP (DeepDOM) | dd-it-heatmap-04.png]

#### Cosa sono MBP e MBO?

MBP (Market By Price) MBP ti mostra il volume totale disponibile a ogni livello di prezzo nel book di negoziazione — combinando tutti i singoli ordini a quel prezzo in un unico numero. È la vista standard della profondità del mercato con cui la maggior parte dei trader ha familiarità. Ti mostra cosa c'è a ogni livello di prezzo ma non ti dice nulla sui singoli ordini dietro quel numero.

MBO (Market By Order) MBO scende un livello più in profondità. Invece di mostrare i totali combinati a ogni livello di prezzo, MBO ti mostra i dati di ogni singolo ordine nel book — inclusi la sua dimensione, il suo stato e come cambia nel tempo. È questo che rende possibile a DeepDOM identificare ordini iceberg, ordini stop e altre funzionalità avanzate di orderflow.

In parole semplici — MBP ti dice quanto c'è a un livello di prezzo. MBO ti dice chi c'è a quel livello di prezzo e come si sta comportando.

### Quali feed dati supportano MBO?

I dati MBO sono disponibili solo su feed dati specifici. Attualmente in DeepDOM:

dxFeed Market Depth — supporta MBO

Rithmic Market Depth — supporta MBO

Se il tuo feed dati supporta MBO, passare a questa modalità sbloccherà tutta la potenza degli strumenti avanzati di orderflow di DeepDOM.

#### General

Source Type Definisce il tipo di sorgente dati usato per il grafico. Puoi scegliere tra:

MBP — usa dati Market By Price. Profondità del mercato standard che mostra il volume combinato a ogni livello di prezzo

MBO — usa dati Market By Order. Dati granulari a livello di singolo ordine che abilitano funzionalità avanzate come il rilevamento degli ordini iceberg

[SCREENSHOT: Heatmap — General (DeepDOM) | dd-it-heatmap-05.png]

Passa a MBO se il tuo feed dati lo supporta e vuoi usare la suite completa di strumenti di orderflow di DeepDOM.

Note - Se selezioni MBO ma il tuo feed dati non lo supporta: alcune informazioni potrebbero non essere disponibili o non essere visualizzate correttamente sul grafico. Gli indicatori si basano sui dati MBO, quindi potrebbero non mostrare i dati o comportarsi in modo inatteso. Se succede, riporta il Source Type su MBP o contatta il tuo fornitore di dati per verificare se MBO è incluso nella tua sottoscrizione.

#### MBO Filters

Questi filtri si applicano quando il grafico è impostato in modalità MBO e ti permettono di controllare quali singoli ordini vengono inclusi nell'analisi:

Min. Volume Imposta il volume minimo che un singolo ordine deve avere per essere incluso nell'analisi MBO. Impostarlo sopra lo zero filtra gli ordini molto piccoli — mantenendo il focus sugli ordini abbastanza grandi da essere significativi. Ad esempio, impostandolo a 10 verranno tracciati dall'indicatore solo i singoli ordini di 10 contratti o più.

Exclude Market Maker Quando è attivo, gli ordini identificati come provenienti da market maker vengono esclusi dall'analisi MBO. I market maker piazzano e annullano ordini costantemente come parte della loro normale attività — questo può creare molto rumore nei dati. Escluderli ti aiuta a concentrarti sull'attività genuina di istituzionali e trader anziché sul market making di routine.

[SCREENSHOT: Heatmap — MBO Filters (DeepDOM) | dd-it-heatmap-06.png]

Note - Se non sei sicuro di quale usare: inizia con MBP — funziona con tutti i feed dati e copre la maggior parte degli scenari di trading. Passa a MBO solo quando vuoi usare specificamente le funzionalità avanzate di orderflow che lo richiedono, e solo se il tuo feed dati lo supporta.

## Capire la liquidità

La maggior parte dei trader vede solo ciò che è già accaduto su un grafico dei prezzi. La Heatmap ti mostra qualcosa di molto più prezioso — dove il denaro è in attesa prima ancora che il prezzo arrivi lì. Per impostazione predefinita, il grafico si carica con un'ora di storico della liquidità, il che significa che non stai vedendo solo dove gli ordini si trovano in questo momento — puoi vedere come quella liquidità si è accumulata, spostata e dissolta nel tempo. Questo ti offre una visione prospettica che nessun grafico dei prezzi standard può darti.

Gli ordini limit dal DOM vengono visualizzati direttamente sul grafico:

Ordini Sell Limit - Viola

Ordini Buy Limit - Verde

[SCREENSHOT: Heatmap — Capire la liquidità (DeepDOM) | dd-it-heatmap-07.png]

La Heatmap non mostra solo gli ordini limit attuali — salva e traccia queste informazioni nel tempo, così puoi vedere come la liquidità si è accumulata, è aumentata, è diminuita o è stata rimossa a qualsiasi livello di prezzo. Questo è importante perché un ordine limit rimasto a lungo su un livello è molto più significativo di uno appena apparso — ti dice che qualcuno è realmente impegnato su quel prezzo.

Come leggere l'intensità della Heatmap:

DeepDOM usa una scala di intensità visiva per mostrare la concentrazione di ordini limit a ogni livello di prezzo:

Più l'area appare chiara e nitida, maggiore è la concentrazione di ordini limit sul book.

Più l'area appare scura o meno visibile, minore è la concentrazione di ordini limit sul book.

Questa intensità si adatta automaticamente alle condizioni di mercato attuali. Se appare un nuovo ordine limit di grandi dimensioni, l'intera scala si sposta per riflettere il nuovo contesto. Questo dice immediatamente al tuo occhio dove si trovano gli ordini più pesanti senza dover leggere un singolo numero — e il prezzo reagisce quasi sempre quando raggiunge quelle zone.

#### Come leggere i limit di acquisto e di vendita:

La separazione tra ordini verdi (Buy Limit) e viola (Sell Limit) è altrettanto importante. Le bande verdi sotto il prezzo ti dicono dove i compratori hanno piazzato i loro ordini limit e sono in attesa. Le bande viola sopra il prezzo ti dicono dove sono posizionati i venditori. Quando il prezzo entra in una spessa banda verde, lo stai guardando entrare in una zona di forte interesse passivo all'acquisto — i compratori lì o difenderanno quel livello causando un rimbalzo, o verranno sopraffatti, facendo accelerare il prezzo oltre.

Entrambi gli esiti sono informazioni su cui puoi fare trading.

[SCREENSHOT: Heatmap — Come leggere i limit di acquisto e di vendita: (DeepDOM) | dd-it-heatmap-08.png]

#### Come leggere la liquidità fresca rispetto a quella persistente:

Non tutti gli ordini limit nel book hanno lo stesso peso — e questa è una delle distinzioni più importanti che puoi fare quando leggi la Heatmap.

La liquidità fresca si riferisce agli ordini limit appena apparsi nel book. Sono ordini piazzati da poco — trader che hanno appena deciso di posizionarsi a un prezzo specifico. La liquidità fresca ti parla di nuove intenzioni che entrano nel mercato in questo momento. Tuttavia, poiché questi ordini sono appena apparsi, è anche più probabile che vengano annullati o spostati se il prezzo non li raggiunge rapidamente. Un'apparizione improvvisa di liquidità fresca a un livello chiave mentre il prezzo si avvicina può segnalare un ordine reattivo e difensivo — piazzato in risposta a ciò che il prezzo sta facendo piuttosto che come posizione pianificata in anticipo.

La liquidità persistente si riferisce agli ordini limit rimasti nel book per un periodo di tempo significativo senza essere annullati o eseguiti. Sono ordini in attesa e impegnati — trader che hanno piazzato il loro ordine a un prezzo specifico e lo hanno mantenuto lì attraverso molteplici movimenti di prezzo e condizioni di mercato. La liquidità persistente è molto più significativa perché ti dice che qualcuno crede realmente che quel livello di prezzo valga la pena di essere difeso. Ha avuto molteplici opportunità di annullare o spostare il suo ordine e ha scelto di non farlo. Quando il prezzo raggiunge finalmente una zona di liquidità persistente, è molto più probabile che la reazione sia forte e sostenuta.

[SCREENSHOT: Heatmap — Come leggere la liquidità fresca rispetto a quella persistente: (DeepDOM) | dd-it-heatmap-09.png]

[SCREENSHOT: Heatmap — Come leggere la liquidità fresca rispetto a quella persistente: (DeepDOM) | dd-it-heatmap-10.png]

#### Come usarle insieme:

Quando vedi liquidità persistente a un livello, quella è una zona che vale la pena segnare e osservare. Più a lungo è rimasta lì, più il partecipante dietro di essa è impegnato.

Quando vedi liquidità fresca apparire improvvisamente a un livello mentre il prezzo si avvicina, sii più cauto — potrebbe essere un ordine reattivo che viene ritirato prima ancora che il prezzo lo raggiunga.

La configurazione più potente è quando liquidità persistente e liquidità fresca si accumulano entrambe allo stesso livello — significa che sia i partecipanti impegnati e pazienti sia i nuovi partecipanti aggressivi si stanno posizionando su quel prezzo simultaneamente, aumentando in modo significativo la probabilità di una reazione forte.

#### Come leggere lo storico:

Poiché DeepDOM salva e traccia questi dati nel tempo anziché mostrare solo un'istantanea attuale, puoi guardare indietro e vedere esattamente come si è sviluppato un livello. Una spessa banda di liquidità rimasta a lungo su un livello ti dice che qualcuno è impegnato e in attesa. Un ordine di grandi dimensioni apparso all'improvviso proprio mentre il prezzo si avvicinava racconta una storia molto diversa. Leggere la storia di come si forma la liquidità — non solo dove si trova in questo momento — è ciò che ti dà il quadro completo.

Nota: per accedere ai dati di profondità del mercato ti serve il Level 2 dal tuo feed dati. DeepDOM supporta l'analisi di oltre 1.000 livelli di book.