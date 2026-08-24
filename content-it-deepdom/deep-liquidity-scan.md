---
title: "Deep Liquidity Scan"
slug: "deep-liquidity-scan"
category: "Deep Indicators"
subcategory: ""
type: "reference"
difficulty: "advanced"
time: "15 min read"
description: "Il Deep Liquidity Scan monitora e visualizza in tempo reale il livello di liquidità passiva sia sul lato Bid (domanda) che sul lato Ask (offerta) del mercato."
keywords: ["deep liquidity scan", "deepdom deep liquidity scan", "deepdom", "deep indicators"]
source_hash: "99efb62234e0497d"
ai_translated: true
source_hash: "99efb62234e0497d"
---
Il Deep Liquidity Scan monitora e visualizza in tempo reale il livello di liquidità passiva sia sul lato Bid (domanda) che sul lato Ask (offerta) del mercato. Ti mostra dove gli ordini limit sono concentrati nel DOM (Depth of Market, profondità del mercato) e come l'equilibrio tra compratori e venditori si sta spostando nel tempo.

Usando colori distinti per Bid, Ask e Delta, l'indicatore ti aiuta a individuare rapidamente i momenti di massimo interesse e le potenziali reazioni del prezzo prima che diventino visibili nel prezzo da solo.

[SCREENSHOT: Deep Liquidity Scan — panoramica (DeepDOM) | dd-it-deep-liquidity-scan-01.png]

Che cos'è la liquidità passiva? La liquidità passiva è costituita dagli ordini limit che restano nel book di negoziazione in attesa di essere eseguiti. Ad esempio, un trader inserisce un ordine limit di acquisto a 26.750 — quell'ordine resta nel book come liquidità passiva sul lato Bid. Non sta colpendo attivamente il mercato — sta aspettando che il prezzo venga da lui. Il Liquidity Tracker misura quanta di questa liquidità passiva è presente su ciascun lato del mercato in ogni momento e come quell'equilibrio cambia nel tempo.

### Come leggere l'indicatore a colpo d'occhio

Capire cosa ti stanno dicendo le linee è il primo passo per usare questo strumento in modo efficace:

La liquidità Bid aumenta: più ordini limit di acquisto si stanno accumulando sotto il prezzo corrente. I compratori si stanno posizionando e possono sostenere il prezzo o causare un rimbalzo.

La liquidità Ask aumenta: più ordini limit di vendita si stanno impilando sopra il prezzo. I venditori si stanno posizionando e possono frenare il prezzo o spingerlo verso il basso.

Delta positivo: la liquidità Bid supera la liquidità Ask — i compratori sono più aggressivi nel loro posizionamento passivo.

Delta negativo: la liquidità Ask supera la liquidità Bid — i venditori hanno il sopravvento nel posizionamento passivo.

Il Delta attraversa lo zero: sta avvenendo un cambio di dominanza tra compratori e venditori — presta molta attenzione alla reazione del prezzo in quel momento.

### Usare Deep Liquidity Scan con la Heatmap / il DOM

Il Deep Liquidity Scan funziona al meglio in combinazione con la Heatmap o il pannello DOM (Depth of Market). Ecco un flusso di lavoro semplice:

Osserva la Heatmap o il DOM alla ricerca di grandi cluster di ordini limit a livelli di prezzo specifici.

Monitora il Deep Liquidity Scan per confermare se la liquidità complessiva su Bid o Ask sta crescendo o diminuendo.

Una linea Bid in crescita sull'indicatore, combinata con un grande cluster visibile di ordini limit di acquisto sulla Heatmap, rafforza l'ipotesi di una potenziale reazione di supporto a quel livello.

Un picco nel Delta seguito da un movimento del prezzo può indicare che un lato ha assorbito l'altro — utile per scegliere il momento di ingressi o uscite.

Suggerimento: usa le opzioni di smussamento dell'indicatore per ridurre il rumore e concentrarti sugli spostamenti di liquidità sostenuti anziché sui picchi momentanei.

### Come configurare il Deep Liquidity Scan

Segui questi passaggi per aggiungere l'indicatore al tuo grafico:

Fai clic con il tasto destro del mouse sul grafico e seleziona Indicators.

Cerca l'indicatore desiderato e aggiungilo al tuo workspace facendo clic sul pulsante "+".

Apri il pannello delle impostazioni dell'indicatore, personalizza i parametri secondo le tue preferenze e conferma le modifiche facendo clic su Save.

[SCREENSHOT: Deep Liquidity Scan — Come configurare il Deep Liquidity Scan (DeepDOM) | dd-it-deep-liquidity-scan-02.png]

## Impostazioni generali

1. Num Lev Depth - Questa impostazione controlla quanto in profondità nel book di negoziazione l'indicatore guarda quando misura la liquidità. Il book ha molti livelli di prezzo — alcuni molto vicini al prezzo corrente e altri lontani. Questa impostazione dice all'indicatore quanti di quei livelli includere nel suo calcolo.

Un valore basso (ad esempio 20) significa che l'indicatore guarda solo i 20 livelli più vicini al prezzo corrente. Ti dà una vista stretta e focalizzata della liquidità proprio intorno a dove il prezzo sta scambiando.

Un valore alto (ad esempio 200) significa che l'indicatore guarda molto più in profondità nel book, catturando la liquidità che si trova lontano dal prezzo corrente.

[SCREENSHOT: Deep Liquidity Scan — Impostazioni generali (DeepDOM) | dd-it-deep-liquidity-scan-03.png]

Quando usare un valore basso: se vuoi vedere la pressione di liquidità immediata — gli ordini che potrebbero essere colpiti molto presto.

Quando usare un valore alto: se vuoi un quadro più ampio dell'interesse complessivo del mercato e di dove si trovano grandi ordini in attesa più lontani dal prezzo.

#### Esempi - Num Lev Depth - 20

#### Num Lev Depth - 200

[SCREENSHOT: Deep Liquidity Scan — Num Lev Depth - 200 (DeepDOM) | dd-it-deep-liquidity-scan-04.png]

2. Calc Mode - Questa impostazione controlla il metodo usato per calcolare la liquidità su tutti i livelli di profondità selezionati con Num Lev Depth.

Normal: ogni livello di profondità viene trattato allo stesso modo. Che un ordine si trovi a 1 livello dal prezzo o a 100 livelli di distanza, conta lo stesso. Ottieni così un totale semplice e non ponderato di tutta la liquidità nell'intervallo selezionato.

Exponential: ai livelli più vicini al prezzo corrente viene dato più peso rispetto ai livelli lontani. Questo significa che la liquidità appena accanto al prezzo ha un'influenza maggiore sulla lettura dell'indicatore rispetto alla liquidità in profondità nel book.

[SCREENSHOT: Deep Liquidity Scan — Num Lev Depth - 200 (DeepDOM) | dd-it-deep-liquidity-scan-05.png]

Quando usare Normal: quando vuoi una vista semplice e paritaria di tutta la liquidità disponibile nella profondità selezionata.

Quando usare Exponential: quando ritieni che la liquidità più vicina al prezzo corrente sia più rilevante e debba avere un impatto maggiore sulla lettura. È utile nei mercati veloci, dove la liquidità vicina conta di più.

3. Value Reference - Questa impostazione definisce il riferimento che l'indicatore usa quando confronta e visualizza i livelli di liquidità

Last: l'indicatore confronta la liquidità corrente con la lettura più recente. Mantiene la visualizzazione reattiva e in movimento con i cambiamenti in tempo reale del book.

Peak: l'indicatore confronta la liquidità corrente con il livello di liquidità più alto mai registrato. Questo significa che la visualizzazione è sempre relativa alla lettura più grande registrata, rendendo più facile vedere come la liquidità corrente si confronta con il massimo.

[SCREENSHOT: Deep Liquidity Scan — Num Lev Depth - 200 (DeepDOM) | dd-it-deep-liquidity-scan-06.png]

Quando usare Last: quando vuoi una vista live, momento per momento, di come la liquidità sta cambiando in questo istante.

Quando usare Peak: quando vuoi vedere se la liquidità corrente si sta avvicinando o allontanando da un massimo storico.

4. Exp Half-Weight Lev - Questa impostazione si applica solo quando Calc Mode è impostato su Exponential. Controlla la rapidità con cui l'influenza dei livelli più profondi del book svanisce rispetto ai livelli vicini al prezzo corrente.

Pensala come una manopola che controlla quanto ripidamente la ponderazione decresce man mano che si scende in profondità nel book:

Un valore basso significa che il peso decresce molto rapidamente. Solo i livelli vicinissimi al prezzo hanno un'influenza significativa. Tutto ciò che è più in profondità nel book viene in gran parte ignorato.

Un valore alto significa che il peso decresce più gradualmente. Anche i livelli più profondi del book contribuiscono in misura apprezzabile alla lettura complessiva.

[SCREENSHOT: Deep Liquidity Scan — Num Lev Depth - 200 (DeepDOM) | dd-it-deep-liquidity-scan-07.png]

Esempio semplice: se questo valore è impostato a 5, significa che una volta arrivati al livello 5 del book il peso di quel livello è già la metà di quello del livello 1. Più si va in profondità, meno conta.

5. Value Smooth - I dati grezzi del book di negoziazione possono essere molto rumorosi — cambiano rapidamente e in continuazione, e questo può far saltellare le linee dell'indicatore rendendole difficili da leggere. Questa impostazione applica uno smussamento ai dati, così le linee appaiono più pulite e facili da seguire.

None — nessuno smussamento. Vedi ogni cambiamento grezzo nel momento in cui avviene. Ideale per gli scalper che hanno bisogno del segnale più rapido possibile.

One Sec — smussamento su 1 secondo.

Three Secs — smussamento su 3 secondi.

Five Secs — smussamento su 5 secondi.

Ten Secs — smussamento su 10 secondi.

Thirty Secs — smussamento su 30 secondi.

One Min — smussamento su 1 minuto. Ideale per timeframe più lenti, dove vuoi vedere solo gli spostamenti sostenuti e significativi.

[SCREENSHOT: Deep Liquidity Scan — Num Lev Depth - 200 (DeepDOM) | dd-it-deep-liquidity-scan-08.png]

Quando non usare lo smussamento: mercati veloci, scalping, o quando devi reagire istantaneamente ai cambiamenti in tempo reale.

Quando usare lo smussamento: swing trading, trend following, o quando i dati grezzi sono troppo rumorosi per essere letti chiaramente.

6. Level Mode - Questa impostazione filtra quali tipi di livelli del book vengono inclusi nel calcolo della liquidità. Non tutti gli ordini limit nel book si comportano allo stesso modo — alcuni sono nuovissimi e altri sono lì da molto tempo. Questa impostazione ti consente di scegliere quali misurare.

All: l'indicatore include ogni livello entro la profondità selezionata, indipendentemente dal fatto che l'ordine sia appena apparso o sia lì da un po'. È la vista più ampia e l'impostazione predefinita.

Fresh Only: vengono inclusi solo i livelli apparsi di recente nel book. Sono ordini appena inseriti. È utile per rilevare un posizionamento nuovo e aggressivo — quando i trader iniziano improvvisamente a inserire grandi ordini, lo vedrai qui.

Persistent Only: vengono inclusi solo i livelli che sono nel book da un po' di tempo. Sono ordini in attesa e determinati — liquidità che non è stata cancellata e che sta genuinamente aspettando di essere eseguita. È utile per trovare zone di supporto o resistenza forti, sostenute da trader pazienti e determinati.

[SCREENSHOT: Deep Liquidity Scan — Num Lev Depth - 200 (DeepDOM) | dd-it-deep-liquidity-scan-09.png]

Quando usare Fresh Only: quando vuoi individuare il nuovo orderflow e rilevare quando i partecipanti si stanno improvvisamente posizionando.

Quando usare Persistent Only: quando vuoi identificare dove si trova la liquidità in attesa forte e determinata — questi livelli hanno più probabilità di agire come veri supporti o resistenze.

## Impostazioni di visualizzazione

Queste impostazioni controllano l'aspetto visivo delle linee Bid e Ask sul pannello dell'indicatore.

1. Bid Color - Imposta il colore della linea che rappresenta la liquidità Bid (il lato della domanda). Scegli un colore che risalti chiaramente sul tuo grafico. Il verde è il colore predefinito ed è comunemente usato per rappresentare l'interesse d'acquisto.

2. Ask Color - Imposta il colore della linea che rappresenta la liquidità Ask (il lato dell'offerta). Scegli un colore che contrasti con quello del Bid, così le due linee sono facili da distinguere a colpo d'occhio. Viola o rosso sono comunemente usati per rappresentare l'interesse di vendita.

3. Line Width - Imposta lo spessore delle linee Bid e Ask. Un numero più alto rende le linee più spesse e più facili da vedere. Un numero più basso le mantiene sottili e meno invasive sul grafico. Regolalo in base alla dimensione del tuo schermo e alle tue preferenze personali.

[SCREENSHOT: Deep Liquidity Scan — Impostazioni di visualizzazione (DeepDOM) | dd-it-deep-liquidity-scan-10.png]

## Impostazioni del Delta

Il Delta è una delle letture più importanti che l'indicatore fornisce. Ti mostra la differenza tra la liquidità Bid e la liquidità Ask in ogni momento — in altre parole, quale lato del mercato ha attualmente più ordini passivi nel book, e di quanto.

1. Delta Enable

È un semplice interruttore on/off per la visualizzazione del Delta. Quando è attivato, il Delta viene mostrato come linea o come istogramma accanto alle linee Bid e Ask. Quando è disattivato, vengono visualizzate solo le linee Bid e Ask.

Attivalo se vuoi monitorare attivamente lo squilibrio tra compratori e venditori. Disattivalo se preferisci un grafico più pulito che mostri solo la liquidità grezza di Bid e Ask.

[SCREENSHOT: Deep Liquidity Scan — Impostazioni del Delta (DeepDOM) | dd-it-deep-liquidity-scan-11.png]

2. Delta Value

Questa impostazione definisce esattamente cosa misura il Delta e come viene calcolato. Ci sono tre opzioni:

Delta: è la differenza grezza e assoluta tra la liquidità Bid e la liquidità Ask. Se ci sono 500 unità di liquidità Bid e 300 unità di liquidità Ask, il Delta segna +200. È il modo più diretto per vedere lo squilibrio in numeri reali.

Percentual Delta: invece di mostrare la differenza grezza, esprime lo squilibrio come percentuale della liquidità totale. Usando lo stesso esempio, il totale è 800 unità e il Bid ne ha 200 in più dell'Ask, quindi il Percentual Delta mostrerebbe +25%. È utile quando vuoi confrontare lo squilibrio relativo anziché la dimensione assoluta.

Percentual Value: mostra la liquidità Bid o Ask espressa come percentuale della liquidità totale combinata. Ad esempio, se il Bid è 500 su un totale di 800, mostrerebbe circa il 62,5%. Ti dà una vista in proporzione di quanto ciascun lato rappresenta.

[SCREENSHOT: Deep Liquidity Scan — Impostazioni del Delta (DeepDOM) | dd-it-deep-liquidity-scan-12.png]

Quando usare Delta: quando vuoi vedere la dimensione grezza dello squilibrio in termini di mercato.

Quando usare Percentual Delta: quando vuoi normalizzare lo squilibrio e confrontarlo tra condizioni di mercato o strumenti diversi.

Quando usare Percentual Value: quando vuoi vedere quale quota della liquidità totale rappresenta ciascun lato in ogni momento. 3. Delta as Histogram

Questo interruttore cambia il modo in cui il Delta viene visualizzato sul grafico.

Istogramma (attivato): il Delta viene mostrato come un grafico a barre. Ogni barra cresce verso l'alto (positivo) o verso il basso (negativo) rispetto alla linea dello zero, a seconda di quale lato ha più liquidità. Più alta è la barra, più forte è lo squilibrio. Questo rende molto facile vedere a colpo d'occhio picchi improvvisi e inversioni nell'equilibrio della liquidità.

Linea (disattivato): il Delta viene mostrato come una linea continua che si muove su e giù intorno alla linea dello zero. È più adatto per seguire il trend regolare e la direzione dello squilibrio nel tempo — ad esempio, se la dominanza del Bid si sta gradualmente costruendo o affievolendo.

[SCREENSHOT: Deep Liquidity Scan — Impostazioni del Delta (DeepDOM) | dd-it-deep-liquidity-scan-13.png]

Quando usare l'istogramma: quando stai osservando attivamente cambi improvvisi o picchi nello squilibrio della liquidità e vuoi un segnale visivo chiaro e immediato.

Quando usare la linea: quando vuoi seguire il trend complessivo dello squilibrio e vedere se sta crescendo o diminuendo costantemente in una direzione. 4. Delta Positive Color

Imposta il colore usato per il Delta quando è positivo — cioè quando la liquidità Bid è maggiore della liquidità Ask. Questo colore riempie le barre dell'istogramma o colora la linea quando i compratori hanno più ordini passivi nel book rispetto ai venditori.

5. Delta Negative Color

Imposta il colore usato per il Delta quando è negativo — cioè quando la liquidità Ask è maggiore della liquidità Bid. Questo colore riempie le barre dell'istogramma o colora la linea quando i venditori hanno più ordini passivi nel book rispetto ai compratori.

[SCREENSHOT: Deep Liquidity Scan — Impostazioni del Delta (DeepDOM) | dd-it-deep-liquidity-scan-14.png]

## Linea dello zero

La linea dello zero è la linea orizzontale al centro della visualizzazione del Delta. Segna il punto esatto in cui la liquidità Bid e la liquidità Ask sono uguali — nessun lato ha più dell'altro. Quando il Delta è sopra la linea dello zero, domina la liquidità Bid. Quando è sotto, domina la liquidità Ask. Quando la attraversa, l'equilibrio si è appena spostato.

#### 1. Zero Line Color

Imposta il colore della linea dello zero. Scegli un colore visibile ma che non distragga dalle linee Bid, Ask e Delta. Un colore neutro come il bianco o il grigio funziona bene con la maggior parte dei temi grafici.

[SCREENSHOT: Deep Liquidity Scan — 1. Zero Line Color (DeepDOM) | dd-it-deep-liquidity-scan-15.png]

#### Zero Line Style

Definisce lo stile visivo della linea dello zero. Le opzioni includono:

Solid — una linea continua ininterrotta.

Dash — una linea tratteggiata.

Dot — una linea punteggiata.

Dash Dot — alterna un trattino e un punto.

Dash Dot Dot — alterna un trattino e due punti.

3. Zero Line Width

Imposta lo spessore della linea dello zero. Mantienila abbastanza sottile da non competere visivamente con la linea o l'istogramma del Delta. Uno spessore di 1 è di solito sufficiente.

[SCREENSHOT: Deep Liquidity Scan — Zero Line Style (DeepDOM) | dd-it-deep-liquidity-scan-16.png]

#### Zero Line View -

[SCREENSHOT: Deep Liquidity Scan — Zero Line View - (DeepDOM) | dd-it-deep-liquidity-scan-17.png]

## Assi

Queste impostazioni controllano su quale scala viene misurata ciascuna parte dell'indicatore. È importante perché i valori di Bid e Ask possono essere numeri molto grandi, mentre il Delta è una differenza più piccola tra loro. Metterli sulla stessa scala può far apparire uno dei due piatto o illeggibile.

#### 1. Bid Ask Axis

Definisce su quale asse vengono scalate le linee Bid e Ask:

Primary: le linee Bid e Ask vengono tracciate rispetto all'asse destro, con una scala indipendente propria.

Secondary: le linee Bid e Ask vengono tracciate rispetto all'asse sinistro.

#### 2. Delta Axis

Definisce su quale asse viene scalata la linea o l'istogramma del Delta:

Primary: il Delta viene tracciato rispetto all'asse destro con una scala propria.

Secondary: il Delta viene tracciato rispetto all'asse sinistro.

Suggerimento: come mostrato nell'esempio sopra, la configurazione consigliata è impostare il Bid Ask Axis su Secondary (asse sinistro) e il Delta Axis su Primary (asse destro). In questo modo il Delta rimane chiaramente leggibile sul lato destro, mentre le linee Bid e Ask si scalano indipendentemente sulla sinistra. Questo evita che i grandi valori di Bid e Ask comprimano il Delta in una linea piatta illeggibile.

[SCREENSHOT: Deep Liquidity Scan — 2. Delta Axis (DeepDOM) | dd-it-deep-liquidity-scan-18.png]

#### Axis View -

Bid Ask Axis - Secondary

Delta Axis - Primary

[SCREENSHOT: Deep Liquidity Scan — Axis View - (DeepDOM) | dd-it-deep-liquidity-scan-19.png]

## Conclusione

Il Deep Liquidity Scan ti offre una vista in tempo reale di dove la liquidità passiva si sta accumulando e spostando nel DOM. Monitorando l'equilibrio tra la liquidità Bid e Ask e osservando i cambiamenti significativi nel Delta — soprattutto quando attraversa la linea dello zero — puoi ottenere un'indicazione precoce delle potenziali reazioni del prezzo prima che diventino visibili nella sola price action.

Combinato con la Heatmap o con il pannello DOM, questo indicatore diventa uno strumento potente per capire il quadro completo dell'orderflow e delle intenzioni del mercato.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24 ore su 24, 7 giorni su 7, pronto ad aiutarti con qualsiasi problema tu possa incontrare.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Ticket di supporto (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.