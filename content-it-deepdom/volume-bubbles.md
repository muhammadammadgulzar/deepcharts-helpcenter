---
title: "Volume Bubbles"
slug: "volume-bubbles"
category: "Features"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "10 min read"
description: "Le Volume Bubbles ti offrono una registrazione visiva tick per tick di ogni esecuzione di mercato, tracciata direttamente sul grafico al prezzo e al momento esatti in cui è avvenuta."
keywords: ["volume bubbles", "volume bubbles deepdom", "deepdom", "funzionalità"]
source_hash: "59a052992f7ef6b6"
ai_translated: true
source_hash: "59a052992f7ef6b6"
---
Le Volume Bubbles (bolle di volume) ti offrono una registrazione visiva tick per tick di ogni esecuzione di mercato, tracciata direttamente sul grafico al prezzo e al momento esatti in cui è avvenuta. Ogni operazione che colpisce il mercato appare come una bolla — blu per un acquisto a mercato (eseguito sull'Ask, cioè un compratore aggressivo che colpisce l'offerta) e rosa per una vendita a mercato (eseguita sul Bid, cioè un venditore aggressivo che colpisce il bid). La dimensione di ogni bolla è proporzionale alla dimensione di quell'esecuzione — una bolla piccola indica un'operazione piccola, una bolla grande indica che a quel prezzo è appena stata eseguita un'operazione grande.

[SCREENSHOT: Volume Bubbles — panoramica (DeepDOM) | dd-it-volume-bubbles-01.png]

## Perché le Volume Bubbles sono importanti

La maggior parte degli strumenti di orderflow ti mostra numeri. Le Volume Bubbles ti mostrano le stesse informazioni in forma visiva — rendendo immediatamente evidente dove stanno avvenendo le grandi esecuzioni, in quale direzione e con quanta aggressività. Non hai bisogno di leggere una colonna di numeri per sapere che qualcosa di significativo è appena successo a un livello di prezzo. Un cluster di bolle grandi te lo dice all'istante.

La dimensione ti dice chi sta partecipando . Bolle piccole sparse sul grafico sono rumore — attività retail, ordini piccoli, niente di significativo. Ma quando vedi un cluster di bolle grandi formarsi a un livello di prezzo specifico , quello è un segnale che un partecipante rilevante sta eseguendo attivamente in quella zona. E il colore ti dice la sua direzione.

Quando vedi un cluster di grandi bolle blu , compratori aggressivi stanno entrando nel mercato con grandi dimensioni. Quando vedi un cluster di grandi bolle rosa , venditori aggressivi stanno colpendo il mercato con grandi dimensioni. Quando entrambi i colori appaiono in grandi dimensioni allo stesso livello, c'è una battaglia significativa tra compratori e venditori a quel prezzo — un livello il cui esito determinerà probabilmente il prossimo movimento direzionale.

L'uso più potente delle Volume Bubbles è osservare l'esaurimento . Se il prezzo sta spingendo al rialzo ma le bolle blu diventano più piccole e le bolle rosa iniziano ad apparire in dimensioni importanti, i compratori stanno perdendo convinzione e i venditori stanno iniziando a farsi avanti — spesso un segnale che il movimento sta finendo il carburante prima ancora che il prezzo sia girato sul grafico.

Combinate con il DOM e la Heatmap, le Volume Bubbles ti danno il quadro completo dell'orderflow — il DOM ti mostra dove gli ordini sono in attesa, la Heatmap ti mostra dove la liquidità si è accumulata e le Bubbles ti mostrano esattamente dove e con quanta aggressività il mercato sta effettivamente scambiando contro quella liquidità in tempo reale .

## Come aggiungere e configurare le Volume Bubbles sul grafico

Attiva le Volume Bubbles dalla toolbar inferiore.

Fai clic sul pulsante con il nome per visualizzare il menu delle impostazioni.

[SCREENSHOT: Volume Bubbles — Come aggiungere e configurare le Volume Bubbles sul grafico (DeepDOM) | dd-it-volume-bubbles-02.png]

## Impostazioni generali

Bubble Mode Definisce come le Volume Bubbles vengono visualizzate e colorate sul grafico. Ci sono tre opzioni:

[SCREENSHOT: Volume Bubbles — Impostazioni generali (DeepDOM) | dd-it-volume-bubbles-03.png]

Ask Bid Split — mostra ogni bolla suddivisa separatamente tra volume Ask e volume Bid, evidenziando la proporzione di acquisti e vendite all'interno di ciascuna esecuzione.

[SCREENSHOT: Volume Bubbles — Impostazioni generali (DeepDOM) | dd-it-volume-bubbles-04.png]

Delta — colora ogni bolla in base alla differenza tra volume in acquisto e volume in vendita di quell'esecuzione. Un delta fortemente positivo significa che i compratori aggressivi hanno dominato quell'operazione. Un delta fortemente negativo significa che hanno dominato i venditori aggressivi.

[SCREENSHOT: Volume Bubbles — Impostazioni generali (DeepDOM) | dd-it-volume-bubbles-05.png]

Volume — colora ogni bolla in base al volume totale dell'esecuzione indipendentemente dalla direzione. Usalo quando vuoi concentrarti puramente su dove stanno avvenendo le operazioni più grandi senza alcuna preferenza direzionale.

[SCREENSHOT: Volume Bubbles — Impostazioni generali (DeepDOM) | dd-it-volume-bubbles-06.png]

Filter Volume Imposta la soglia minima di volume perché una bolla appaia sul grafico. Qualsiasi esecuzione sotto questo valore non verrà visualizzata. Usalo per filtrare il piccolo rumore retail e concentrarti solo sulle esecuzioni che superano una soglia minima di dimensione.

[SCREENSHOT: Volume Bubbles — Impostazioni generali (DeepDOM) | dd-it-volume-bubbles-07.png]

Filter Bubble Imposta la dimensione minima perché una singola bolla appaia visivamente sul grafico. È un filtro di visualizzazione — le bolle sotto questa dimensione visiva verranno nascoste, mantenendo il grafico pulito e concentrato solo sulle esecuzioni significative.

[SCREENSHOT: Volume Bubbles — Impostazioni generali (DeepDOM) | dd-it-volume-bubbles-08.png]

Volume Mode Color Definisce come vengono colorate le bolle quando Bubble Mode è impostato su Volume. Le opzioni includono:

Delta Absolute — colora la bolla in base al valore assoluto del delta di quell'esecuzione. Più forte è lo squilibrio direzionale, più intenso è il colore.

[SCREENSHOT: Volume Bubbles — Impostazioni generali (DeepDOM) | dd-it-volume-bubbles-09.png]

Delta Percentual — colora la bolla in base al delta espresso come percentuale del volume totale. Questo normalizza il colore tra esecuzioni di dimensioni diverse, rendendo più facile confrontare la convinzione direzionale tra bolle di dimensioni molto differenti.

[SCREENSHOT: Volume Bubbles — Impostazioni generali (DeepDOM) | dd-it-volume-bubbles-10.png]

## Dimensionamento

[SCREENSHOT: Volume Bubbles — Dimensionamento (DeepDOM) | dd-it-volume-bubbles-11.png]

Questa sezione controlla come viene calcolata e scalata la dimensione di ogni bolla sul grafico. È una delle sezioni più importanti da configurare correttamente perché il modo in cui le bolle vengono dimensionate influisce direttamente su quanto l'informazione visiva risulti leggibile e utile per il tuo mercato specifico.

La dimensione di ogni bolla è calcolata rispetto alla dimensione massima di bolla presente sul grafico. Questo significa che l'esecuzione più grande visibile stabilisce il punto di riferimento e tutte le altre bolle vengono scalate rispetto a essa.

Bubble Scale Mode Definisce il metodo matematico usato per scalare le dimensioni delle bolle sul grafico. Questa impostazione ha un impatto significativo sull'aspetto delle bolle e sulla loro leggibilità. Ci sono tre opzioni:

Linear — le dimensioni delle bolle vengono scalate in modo diretto e proporzionale. Se un'esecuzione ha il doppio del volume di un'altra, la sua bolla sarà grande il doppio. È il metodo di scala più semplice e funziona bene per i mercati dei futures, dove le differenze di volume tra le esecuzioni non sono estreme. Tuttavia, in alcuni mercati la scala lineare può far sì che una o due bolle molto grandi dominino il grafico mentre tutte le altre appaiono minuscole e illeggibili.

[SCREENSHOT: Volume Bubbles — Dimensionamento (DeepDOM) | dd-it-volume-bubbles-12.png]

SQRT (Square Root) — le dimensioni delle bolle vengono scalate usando la radice quadrata, che comprime la differenza tra bolle grandi e piccole. Questo rende la distribuzione complessiva delle bolle più uniforme e visivamente bilanciata. Se noti che la scala lineare crea un grafico in cui la maggior parte delle bolle è troppo piccola per essere letta perché una o due sono estremamente grandi, passare a SQRT renderà le bolle più piccole più visibili senza perdere la relazione di dimensione relativa tra di esse. Questa modalità funziona particolarmente bene per le azioni, dove le differenze di volume tra le esecuzioni possono essere molto grandi.

[SCREENSHOT: Volume Bubbles — Dimensionamento (DeepDOM) | dd-it-volume-bubbles-13.png]

Logarithmic — le dimensioni delle bolle vengono scalate usando la matematica logaritmica, che applica la compressione più forte delle tre opzioni. Questo crea la distribuzione di bolle più uniforme, facendo apparire anche esecuzioni di dimensioni molto diverse in un intervallo visivo più bilanciato. Usala nei mercati in cui il range delle dimensioni delle esecuzioni è estremamente ampio e vuoi la visualizzazione più leggibile possibile.

[SCREENSHOT: Volume Bubbles — Dimensionamento (DeepDOM) | dd-it-volume-bubbles-14.png]

Quando usare ciascuna:

Futures → Linear funziona bene nella maggior parte dei casi, perché le dimensioni delle esecuzioni tendono a essere più uniformi.

Azioni → SQRT o Logarithmic è spesso preferibile perché il volume azionario può variare drasticamente tra le esecuzioni, rendendo la scala lineare un grafico illeggibile.

Out Std Dev Perc Definisce la percentuale di deviazione standard esterna usata per controllare il dimensionamento delle bolle. Stabilisce il limite entro cui le esecuzioni anomale — operazioni insolitamente grandi — vengono gestite nel calcolo della dimensione. Un valore più basso rende il dimensionamento più sensibile agli outlier. Un valore più alto li assorbe in modo più fluido nella scala complessiva.

Std Dev Val Definisce il valore di deviazione standard usato come riferimento per scalare le dimensioni delle bolle. Lavora insieme a Out Std Dev Perc per determinare come il range di dimensioni delle bolle viene distribuito sul grafico.

[SCREENSHOT: Volume Bubbles — Dimensionamento (DeepDOM) | dd-it-volume-bubbles-15.png]

## Impostazioni di visualizzazione

[SCREENSHOT: Volume Bubbles — Impostazioni di visualizzazione (DeepDOM) | dd-it-volume-bubbles-16.png]

Display Mode Controlla lo stile visivo delle bolle sul grafico:

2D — le bolle vengono mostrate come cerchi piatti. Un aspetto più pulito e semplice che funziona bene su grafici affollati, quando vuoi che le bolle siano visibili senza aggiungere troppo peso visivo.

[SCREENSHOT: Volume Bubbles — Impostazioni di visualizzazione (DeepDOM) | dd-it-volume-bubbles-17.png]

3D — le bolle vengono mostrate con un effetto di ombreggiatura tridimensionale, che dà loro profondità e le rende più facili da distinguere a colpo d'occhio, soprattutto quando bolle di dimensioni diverse si sovrappongono.

[SCREENSHOT: Volume Bubbles — Impostazioni di visualizzazione (DeepDOM) | dd-it-volume-bubbles-18.png]

Bid Color Imposta il colore delle bolle che rappresentano le esecuzioni sul lato Bid (ordini di vendita a mercato che colpiscono il Bid).

Ask Color Imposta il colore delle bolle che rappresentano le esecuzioni sul lato Ask (ordini di acquisto a mercato che colpiscono l'Ask).

Line Width Imposta lo spessore del contorno della bolla. Un valore più alto rende i bordi delle bolle più visibili, il che può aiutare a distinguere le singole bolle quando si raggruppano a un livello di prezzo.

Opacity Controlla la trasparenza delle bolle. Un valore di 90 significa che le bolle sono per lo più solide con una leggera trasparenza. Abbassare l'opacità rende le bolle più trasparenti, il che può aiutare quando le bolle si sovrappongono, permettendoti di vedere attraverso di esse la Heatmap o la price action sottostante.

## Raggruppamento

Questa sezione controlla come le singole esecuzioni vengono raggruppate in bolle uniche sul grafico. Poiché il mercato produce migliaia di operazioni individuali ogni minuto, raggrupparle in cluster significativi rende l'informazione visiva molto più leggibile e utilizzabile.

[SCREENSHOT: Volume Bubbles — Raggruppamento (DeepDOM) | dd-it-volume-bubbles-19.png]

Grouping Mode Definisce il metodo complessivo usato per raggruppare le esecuzioni:

Automatic — la piattaforma determina automaticamente il raggruppamento migliore in base alle condizioni di mercato correnti e al livello di zoom del grafico. È l'impostazione consigliata per la maggior parte degli utenti.

Time — le esecuzioni vengono raggruppate in base a intervalli di tempo. Tutte le operazioni che avvengono entro una finestra temporale definita vengono combinate in una singola bolla.

Price — le esecuzioni vengono raggruppate in base ai livelli di prezzo. Tutte le operazioni che avvengono allo stesso livello di prezzo o a livelli vicini vengono combinate in una singola bolla.

Price Aggr Mode Definisce come viene aggregato il prezzo durante il raggruppamento delle bolle:

Extension — raggruppa le bolle in base alla sola estensione del prezzo, in movimento in un'unica direzione. Questo significa che una bolla rappresenta una sequenza di operazioni che hanno mosso il prezzo in una sola direzione.

Extension and Retracement — raggruppa le bolle in base sia alle estensioni sia ai ritracciamenti del prezzo, catturando i movimenti in entrambe le direzioni all'interno di un singolo gruppo di bolle.

Tick Grouping Mode Definisce come i tick vengono raggruppati all'interno di ciascuna bolla:

Automatic — la piattaforma determina automaticamente il raggruppamento dei tick in base allo strumento e alle condizioni di mercato.

Fixed — definisci manualmente un numero fisso di tick da usare per il raggruppamento, ottenendo un controllo preciso su quanto granulare o ampio sia ciascun gruppo di bolle.

Tick Grouping Manual Ticks Attivo solo quando Tick Grouping Mode è impostato su Fixed. Imposta il numero esatto di tick usati per ciascun gruppo di bolle. Un numero più basso crea gruppi più granulari e piccoli. Un numero più alto crea gruppi più ampi che catturano più esecuzioni in ciascuna bolla.

NOTA - Accesso rapido: puoi anche regolare rapidamente Bubble Size e Bubble Grouping direttamente dal pannello con gli slider nella toolbar in alto sul grafico, senza aprire la finestra completa delle impostazioni.

[SCREENSHOT: Volume Bubbles — Raggruppamento (DeepDOM) | dd-it-volume-bubbles-20.png]

## Conclusione

Le Volume Bubbles sono uno degli strumenti visivamente più potenti di DeepDOM per leggere l'orderflow in tempo reale. Mostrandoti esattamente dove stanno avvenendo le grandi esecuzioni, in quale direzione e con quale livello di convinzione, ti danno una lettura immediata dell'aggressività del mercato che i numeri da soli non possono offrirti altrettanto rapidamente. Configura correttamente il Bubble Scale Mode per il tuo mercato, usa le impostazioni di raggruppamento per controllare il livello di dettaglio e combina le bolle con la Heatmap e il DOM per il quadro completo di ciò che il mercato sta facendo a ogni livello di prezzo.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu incontri.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Ticket di supporto (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.