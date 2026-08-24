---
title: "Stop Run"
slug: "stop-run"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "9 min read"
description: "L'indicatore Stop Run ti mostra sul grafico quando un gran numero di ordini stop è stato attivato nel mercato."
keywords: ["stop run", "stop run deepdom", "deepdom", "indicatori"]
source_hash: "36f7927344111b29"
ai_translated: true
source_hash: "36f7927344111b29"
---
L'indicatore Stop Run ti mostra sul grafico quando un gran numero di ordini stop è stato attivato nel mercato. Questo ti aiuta a capire perché il prezzo si è improvvisamente mosso velocemente — e se quel movimento era vero acquisto o vendita, oppure solo un'ondata di ordini stop spazzati via tutti in una volta.

[SCREENSHOT: Stop Run — panoramica (DeepDOM) | dd-it-stop-run-01.png]

### Che cos'è uno Stop Run?

Prima di tutto, capiamo che cos'è un ordine stop.

Quando un trader compra o vende sul mercato, di solito imposta un livello di prezzo al quale la sua operazione si chiuderà automaticamente se le cose vanno male. Questo si chiama ordine stop. Per esempio, un trader compra NQ a 26.800 e imposta uno stop a 26.750 — significa che se il prezzo scende a 26.750, l'operazione si chiude automaticamente per evitare una perdita maggiore.

Ed ecco la parte importante. La maggior parte dei trader posiziona i propri ordini stop sugli stessi livelli di prezzo ovvi — appena sotto un supporto o appena sopra una resistenza. Questo significa che centinaia o migliaia di ordini stop si trovano tutti allo stesso prezzo nello stesso momento.

I grandi operatori del mercato — come le grandi banche e le istituzioni — sanno esattamente dove si trovano questi ordini stop. Spingono il prezzo in quelle aree di proposito. Nel momento in cui il prezzo tocca quel livello, tutti quegli ordini stop scattano contemporaneamente — creando un'enorme ondata di ordini che spinge il prezzo ancora più in quella direzione. Questo è uno Stop Run.

[SCREENSHOT: Stop Run — Che cos'è uno Stop Run? (DeepDOM) | dd-it-stop-run-02.png]

Una volta che lo Stop Run è terminato e tutti gli stop sono stati attivati, il prezzo molto spesso inverte nella direzione opposta — perché il movimento non era guidato da veri compratori o venditori, era solo l'attivazione di ordini stop.

### Quando si verifica uno Stop Run?

Gli Stop Run avvengono più spesso su livelli di prezzo molto evidenti sul grafico — come il massimo o il minimo del giorno precedente, o un livello su cui il prezzo ha rimbalzato più volte in passato. Sono i punti in cui la maggior parte dei trader posiziona gli stop, il che li rende il bersaglio perfetto per i grandi operatori.

Per esempio — se NQ ha tenuto un supporto a 26.700 per diversi giorni, la maggior parte dei trader long avrà i propri ordini stop posizionati appena sotto 26.700. Un grande operatore che spinge il prezzo appena sotto quel livello attiverà tutti quegli stop in una volta sola, creando un rapido movimento al ribasso — prima che il prezzo, poco dopo, spesso recuperi sopra il livello.

Gli Stop Run avvengono spesso anche durante grandi eventi di news come i report CPI o gli annunci della Federal Reserve. In quei momenti ci sono meno ordini nel mercato, il che rende più facile spingere rapidamente il prezzo attraverso i cluster di stop.

### Cosa osservare durante uno Stop Run

Picco improvviso di volume — quando molti ordini stop scattano contemporaneamente, vedrai un grande balzo del volume sul grafico. Se il volume schizza improvvisamente molto sopra il normale senza un motivo evidente legato alle news, è probabile che sia avvenuto uno Stop Run

[SCREENSHOT: Stop Run — Cosa osservare durante uno Stop Run (DeepDOM) | dd-it-stop-run-03.png]

Movimento rapido del prezzo — durante uno Stop Run il prezzo attraversa un livello molto velocemente — molto più velocemente di un movimento normale. Un trader che osserva il grafico noterà che il prezzo sembra quasi saltare invece di muoversi

[SCREENSHOT: Stop Run — Cosa osservare durante uno Stop Run (DeepDOM) | dd-it-stop-run-04.png]

Rapida inversione dopo il movimento — dopo uno Stop Run, il prezzo molto spesso torna indietro nella direzione opposta quasi immediatamente. Un trader che ha visto il movimento rapido ed è entrato in quella direzione si ritroverà improvvisamente dalla parte sbagliata del mercato

[SCREENSHOT: Stop Run — Cosa osservare durante uno Stop Run (DeepDOM) | dd-it-stop-run-05.png]

Segnali dal book di negoziazione e dal Footprint — un trader che osserva il DOM noterà certi livelli di prezzo svuotarsi improvvisamente mentre gli ordini stop vengono colpiti. Nel grafico Footprint, ordini aggressivi molto grandi che appaiono tutti insieme in poco tempo sono un'ulteriore conferma che uno Stop Run è appena avvenuto

[SCREENSHOT: Stop Run — Cosa osservare durante uno Stop Run (DeepDOM) | dd-it-stop-run-06.png]

### Perché è importante

Capire gli Stop Run ti dà due vantaggi importanti come trader.

Il primo è l'opportunità. Immagina che un trader veda il prezzo rompere sotto il supporto a 26.700, l'indicatore Stop Run mostri 1.500 contratti attivati, il volume schizzi bruscamente e poi il prezzo inizi immediatamente a recuperare sopra 26.700. È un segnale forte che la rottura era uno Stop Run — non una vera rottura ribassista. Il trader può ora cercare di comprare mentre il prezzo recupera, con un livello chiaro e logico sotto cui posizionare il suo stop loss.

Il secondo è la protezione. Senza conoscere gli Stop Run, un trader che vede una rapida rottura aggressiva del supporto potrebbe vendere, aspettandosi che il prezzo continui a scendere — solo per essere stoppato pochi secondi dopo quando il prezzo inverte bruscamente al rialzo. Riconoscere uno Stop Run ti dice di aspettare e di non reagire al movimento. Nel trading, evitare le operazioni sbagliate è prezioso quanto trovare quelle buone.

### Come configurare l'indicatore Stop Run

Fai clic sull'icona Indicators (Indicatori) sul grafico

Trova Stop Run nell'elenco e fai clic su + per aggiungerlo

Fai clic sull'icona delle impostazioni sull'indicatore per aprire la sua finestra di configurazione

[SCREENSHOT: Stop Run — Come configurare l'indicatore Stop Run (DeepDOM) | dd-it-stop-run-07.png]

## Impostazioni generali

Minimum Tick Un tick è il più piccolo movimento di prezzo possibile in un mercato. Questa impostazione indica all'indicatore il numero minimo di tick di cui il prezzo deve muoversi — come conseguenza dell'attivazione di ordini stop — prima che l'evento venga contrassegnato come Stop Run.

[SCREENSHOT: Stop Run — Impostazioni generali (DeepDOM) | dd-it-stop-run-08.png]

Se lo imposti troppo basso, l'indicatore contrassegnerà ogni piccolo movimento di prezzo come Stop Run, rendendo il grafico molto rumoroso e difficile da leggere. Impostarlo al livello giusto significa che vengono contrassegnati solo i movimenti abbastanza grandi da contare davvero — mantenendo il grafico pulito e utile. Esempi - Min Tick - 3

[SCREENSHOT: Stop Run — Impostazioni generali (DeepDOM) | dd-it-stop-run-09.png]

Min Tick - 10 Come puoi vedere, in questo caso tutti gli ordini sono stati filtrati quando abbiamo aggiunto un filtro Min Tick - 10

[SCREENSHOT: Stop Run — Impostazioni generali (DeepDOM) | dd-it-stop-run-10.png]

Maximum Ord Num Limita il numero massimo di ordini che l'indicatore considera durante uno Stop Run. Nei momenti di mercato estremamente frenetici — come subito dopo il rilascio di una news importante — possono esserci così tanti ordini in circolazione che quasi tutto sembra uno Stop Run. Questa impostazione impedisce all'indicatore di reagire in modo eccessivo in quei momenti insoliti e lo mantiene concentrato su condizioni di mercato normali e realistiche.

[SCREENSHOT: Stop Run — Impostazioni generali (DeepDOM) | dd-it-stop-run-11.png]

Max MS MS sta per millisecondi. Un millisecondo è un millesimo di secondo. Questa impostazione definisce quanto velocemente devono scattare gli ordini stop per contare come un unico evento di Stop Run.

[SCREENSHOT: Stop Run — Impostazioni generali (DeepDOM) | dd-it-stop-run-12.png]

Esempi - Max MS - 50

[SCREENSHOT: Stop Run — Impostazioni generali (DeepDOM) | dd-it-stop-run-13.png]

Max MS - 5 Come puoi vedere, alcuni ordini sono stati filtrati quando abbiamo aggiunto un filtro Max MS - 5

[SCREENSHOT: Stop Run — Impostazioni generali (DeepDOM) | dd-it-stop-run-14.png]

Un vero Stop Run avviene quasi istantaneamente — tutti quegli ordini stop scattano in una minuscola frazione di secondo. Se gli ordini arrivano lentamente su un periodo più lungo, si tratta solo di normale attività di mercato. Questa impostazione assicura che l'indicatore contrassegni solo gli eventi in cui tutto è avvenuto abbastanza velocemente da essere un vero Stop Run.

Min. Stop Run Vol Imposta il volume minimo necessario perché qualcosa si qualifichi come Stop Run. Un piccolo numero di stop attivati non muoverà il mercato in modo significativo. Questa impostazione filtra quegli eventi piccoli e irrilevanti e ti mostra solo quelli abbastanza grandi da avere un impatto reale sul prezzo — quelli a cui vale la pena prestare attenzione.

[SCREENSHOT: Stop Run — Impostazioni generali (DeepDOM) | dd-it-stop-run-15.png]

Esempi - Min. Stop Run Vol. - 20

[SCREENSHOT: Stop Run — Impostazioni generali (DeepDOM) | dd-it-stop-run-16.png]

Min. Stop Run Vol. - 80 Come puoi vedere, alcuni ordini sono stati filtrati quando abbiamo aggiunto un filtro Min. Stop Run Vol. - 80

[SCREENSHOT: Stop Run — Impostazioni generali (DeepDOM) | dd-it-stop-run-17.png]

## Impostazioni di visualizzazione

Display Mode Controlla l'aspetto del marcatore di Stop Run sul grafico. Hai tre opzioni:

[SCREENSHOT: Stop Run — Impostazioni di visualizzazione (DeepDOM) | dd-it-stop-run-18.png]

Text — mostra un riquadro colorato con il numero di ordini stop attivati

[SCREENSHOT: Stop Run — Impostazioni di visualizzazione (DeepDOM) | dd-it-stop-run-19.png]

Diamond — contrassegna lo Stop Run con un'icona a forma di diamante, con il numero di contratti mostrato sopra o sotto di essa

[SCREENSHOT: Stop Run — Impostazioni di visualizzazione (DeepDOM) | dd-it-stop-run-20.png]

Square — contrassegna lo Stop Run con un'icona a forma di quadrato, con il numero di contratti mostrato sopra o sotto di essa

[SCREENSHOT: Stop Run — Impostazioni di visualizzazione (DeepDOM) | dd-it-stop-run-21.png]

Ask Color / Bid Color Imposta il colore usato per mostrare gli Stop Run sul lato Ask / Bid del mercato.

[SCREENSHOT: Stop Run — Impostazioni di visualizzazione (DeepDOM) | dd-it-stop-run-22.png]

Marker Width Imposta lo spessore della linea usata per contrassegnare lo Stop Run sul grafico.

[SCREENSHOT: Stop Run — Impostazioni di visualizzazione (DeepDOM) | dd-it-stop-run-23.png]

[SCREENSHOT: Stop Run — Impostazioni di visualizzazione (DeepDOM) | dd-it-stop-run-24.png]

## Impostazioni del testo

Enable Text Attiva o disattiva le etichette di testo sul grafico.

[SCREENSHOT: Stop Run — Impostazioni del testo (DeepDOM) | dd-it-stop-run-25.png]

Text Color Imposta il colore del testo mostrato nelle etichette.

[SCREENSHOT: Stop Run — Impostazioni del testo (DeepDOM) | dd-it-stop-run-26.png]

Text Size Imposta la dimensione del testo mostrato nelle etichette.

[SCREENSHOT: Stop Run — Impostazioni del testo (DeepDOM) | dd-it-stop-run-27.png]

[SCREENSHOT: Stop Run — Impostazioni del testo (DeepDOM) | dd-it-stop-run-28.png]

## Avvisi

C'è anche una sezione dedicata agli avvisi sonori per i segnali generati dall'indicatore

[SCREENSHOT: Stop Run — Avvisi (DeepDOM) | dd-it-stop-run-29.png]

## Conclusione

L'indicatore Stop Run ti aiuta a capire una delle cose più comuni che accadono nel mercato ogni singolo giorno. I grandi operatori attivano gli ordini stop per creare movimenti rapidi e catturare liquidità — e molto spesso il prezzo inverte subito dopo. Imparando a individuare questi eventi e combinandoli con il volume, il DOM e gli altri strumenti di DeepDOM, ottieni un quadro molto più chiaro di ciò che sta davvero guidando il prezzo e di dove è probabile che il mercato vada in seguito.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu incontri.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Ticket di supporto (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.