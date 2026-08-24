---
title: "Capire il Volume Profile: POC, area di valore, HVN/LVN"
slug: "understanding-volume-profile"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "6 min read"
description: "Cosa mostra un profilo del volume, come si definiscono POC, area di valore, HVN e LVN, e come i trader li usano come supporto, resistenza e obiettivi."
keywords: ["volume profile", "POC", "point of control", "area di valore", "VAH", "VAL", "high volume node", "low volume node", "HVN", "LVN", "volume per prezzo", "naked POC"]
source_hash: "49649f3ae2236e4c"
ai_translated: true
source_hash: "49649f3ae2236e4c"
---
Un normale istogramma dei volumi ti dice quanto è stato scambiato in ogni barra temporale. Un profilo del volume ruota la domanda di 90 gradi: quanto è stato scambiato a ogni prezzo. Quel singolo cambio di asse trasforma il volume grezzo in una mappa di dove il mercato ha trovato accordo e dove non ne ha trovato affatto — e quella mappa è la base di alcuni dei livelli intraday più osservati nel trading sui futures.

Questo articolo copre il concetto. Per gli strumenti di DeepCharts che disegnano i profili, vedi la sezione Vedilo in DeepCharts qui sotto.

## L'idea in un paragrafo

I mercati sono aste, e le aste passano la maggior parte del tempo — e scambiano il maggior volume — ai prezzi che entrambi i lati considerano equi. Immagina un mercato di strada: il prezzo di una bancarella attira folla tutto il giorno, mentre le bancarelle con prezzi troppo alti o troppo bassi ricevono solo visite brevi e frettolose. Un profilo del volume è la mappa della folla di una sessione di trading: un istogramma orizzontale che mostra il volume scambiato a ogni prezzo. La barra più lunga è il prezzo che il mercato ha trattato come il più equo; le barre sottili sono prezzi che il mercato ha rifiutato rapidamente. I trader leggono quella mappa per giudicare quali prezzi attireranno di nuovo il mercato e quali verranno attraversati di corsa.

## Perché interessa ai trader

- **I profili classificano i prezzi in base all'evidenza.** Un livello dove sono passati di mano 40.000 contratti è strutturalmente diverso da uno che ne ha scambiati 900 — il profilo rende visibile quella differenza.
- **Il POC agisce da magnete e riferimento.** Il prezzo tende a gravitare di nuovo verso il prezzo a maggior volume della sessione, e i POC delle sessioni precedenti sono livelli di reazione comuni.
- **I bordi dell'area di valore inquadrano la giornata.** Tornare a scambiare dentro l'area di valore suggerisce rotazione; l'accettazione al di fuori suggerisce un movimento di tendenza.
- **Gli LVN segnano le corsie veloci.** Il prezzo tende ad attraversare rapidamente le zone a basso volume, il che aiuta sia nel posizionamento degli obiettivi che degli stop.

## Come funziona

### Costruire il profilo

Prendi ogni scambio in un periodo scelto — una sessione, una settimana, uno swing — e raggruppa il suo volume per prezzo. Disegnato lateralmente lungo l'asse dei prezzi, il risultato è il profilo. Tre strutture contano:

- **POC (Point of Control):** il singolo prezzo con il volume scambiato più alto nel periodo. Il prezzo equo di consenso del mercato per quel periodo.
- **Value Area (VA):** la fascia di prezzo intorno al POC che contiene una percentuale prefissata del volume totale del periodo — per convenzione di solito circa il 70%. I suoi bordi sono il **VAH** (Value Area High) e il **VAL** (Value Area Low).
- **HVN e LVN:** gli high volume node sono picchi di volume secondari — prezzi a cui il mercato ha continuato a tornare; i low volume node sono le valli tra di essi — prezzi che il mercato ha rifiutato.

Esplora tutte e tre nel profilo dal vivo qui sotto — trascina il Value Area % e passa il mouse sulle righe per vedere muoversi POC, VAH e VAL.

[WIDGET: volume-profile-lab]

### Come si negozia ciascuna struttura

- **POC:** si comporta come un magnete finché il mercato è in equilibrio. Un prezzo che si allontana dal POC su volume tranquillo spesso vi ruota di nuovo intorno. Il POC di una sessione precedente mai rivisitato dal prezzo (spesso chiamato naked POC) resta nelle watchlist di molti trader come obiettivo futuro.
- **VAH/VAL:** il confine tra prezzi accettati e rifiutati. Un approccio comune: se il prezzo apre fuori dall'area di valore precedente e rientra al suo interno, spesso ruota fino all'altro lato dell'area di valore; se il prezzo lascia l'area di valore e resta al di fuori, il mercato potrebbe essere in tendenza per costruire valore a nuovi prezzi.
- **HVN:** supporto e resistenza costruiti da partecipazione reale. Il prezzo tende a rallentare, oscillare o invertirsi dentro queste zone perché lì vivono posizioni impegnate.
- **LVN:** l'opposto — con pochi affari pregressi a quei prezzi, c'è poco a rallentare il prezzo, quindi gli LVN tendono a essere attraversati rapidamente. Sono luoghi poco adatti ad aspettarsi un rimbalzo e punti di riferimento utili per gli stop (oltre il nodo) e per gli obiettivi (il lato opposto del nodo).

### La matematica (facoltativa)

L'area di valore si calcola tipicamente partendo dal POC ed espandendosi verso l'esterno, aggiungendo ripetutamente la riga di prezzo adiacente (o coppia di righe) con il volume maggiore, finché il volume accumulato raggiunge la percentuale scelta del totale del periodo. La convenzione del 70% rispecchia grossolanamente una deviazione standard di una distribuzione normale (~68%), trattando il profilo come una campana sui prezzi. Gli algoritmi esatti e la percentuale sono configurabili nella maggior parte degli strumenti, quindi due piattaforme possono stampare VAH/VAL leggermente diversi da dati identici.

> **Nota:** Un profilo è significativo solo quanto il periodo che copre. Un profilo a 30 minuti e un composito settimanale dello stesso mercato divergeranno — decidi prima quale asta stai analizzando.

## Vedilo in DeepCharts

- [[deep-profile|Deep Profile]] — l'indicatore fondamentale del profilo volume/delta disegnato sul grafico.
- [[deep-profile-swing]] — profili ancorati agli swing invece che a sessioni fisse.
- [[deep-profile-values]] — traccia livelli derivati dal profilo come il POC e i confini dell'area di valore.
- [[profile-chart-window]] — la finestra dedicata ai profili TPO e volume.
- [[market-profile-tpo]] — la controparte basata sul tempo (TPO) del profilo del volume.
- [[dynamic-poc]] — traccia il POC in sviluppo mentre migra attraverso la sessione.
- [[bar-poc]] — marca il prezzo a maggior volume all'interno di ogni singola barra.
- [[quick-chart-templates]] — layout di grafici a profilo pronti all'uso (D-VP, W-VP e simili).

## Esempio pratico

Supponi che la sessione ES di ieri abbia costruito il suo POC a 5.290,00 con un'area di valore di 5.283,00–5.296,00, e che oggi apra a 5.302,00 — sopra il VAH di ieri (numeri a titolo illustrativo). Nella prima mezz'ora, i venditori riportano il prezzo sotto 5.296,00 e questo tiene dentro la vecchia area di valore. Quel pattern di apertura-sopra-poi-riaccettazione suggerisce che il rialzo overnight non ha trovato affari, e molti trader cercherebbero ora una rotazione verso il basso attraverso l'area di valore verso il POC a 5.290,00, per poi osservare il comportamento lì: un rimbalzo veloce tiene viva la storia della giornata in equilibrio; l'accettazione sotto il VAL a 5.283,00 apre la porta a una giornata di tendenza ribassista. Nota come ogni punto decisionale di quel piano è una struttura del profilo, non un'ipotesi.

[SCREENSHOT: Grafico intraday ES con il profilo di ieri sovrapposto, annotato con l'apertura sopra il VAH, il rientro nel valore e un percorso a freccia verso il POC etichettato con la logica della rotazione | dc-it-understanding-volume-profile-01.png]

## Letture errate comuni

- **"Il prezzo rimbalza sempre sul POC."** Il POC è un riferimento, non un muro. In una tendenza forte, il prezzo taglia i vecchi POC; è il contesto a decidere.
- **"L'area di valore è una scienza esatta."** Strumenti, percentuali e impostazioni di raggruppamento diversi spostano VAH/VAL di qualche tick. Trattali come zone, non come linee.
- **"Un profilo di un periodo qualsiasi è significativo."** I profili descrivono un'asta specifica. Un profilo che copre metà di una sessione e metà di un'altra non descrive nulla.
- **"Volume profile e profilo TPO sono la stessa cosa."** Spesso concordano ma misurano cose diverse — contratti scambiati contro tempo trascorso. Vedi [[market-profile-tpo]].

## Approfondisci

Il volume profile è la teoria dell'asta resa visibile; leggi [[understanding-auction-theory]] per il quadro dietro accettazione e rifiuto, e [[understanding-vwap]] per l'altro riferimento di "prezzo equo" ampiamente osservato e per come differisce dal POC. I confini di sessione cambiano il significato di un profilo — [[understanding-market-structure-sessions]] copre RTH contro ETH.

## Articoli correlati

- [[deep-profile]]
- [[profile-chart-window]]
- [[market-profile-tpo]]
- [[understanding-auction-theory]]
- [[understanding-vwap]]
- [[glossary]]