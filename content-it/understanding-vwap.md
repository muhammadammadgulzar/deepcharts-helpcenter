---
title: "Capire il VWAP"
slug: "understanding-vwap"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "6 min read"
description: "Cosa misura il VWAP, perché le istituzioni lo usano come benchmark, come funzionano le bande a deviazione standard e come fare trading intorno a esso senza gli errori classici."
keywords: ["VWAP", "volume weighted average price", "bande vwap", "bande a deviazione standard", "vwap vs media mobile", "vwap vs poc", "D-VL", "vwap di sessione", "pullback sul vwap"]
source_hash: "898979238857fc81"
ai_translated: true
source_hash: "898979238857fc81"
---
Il VWAP — il Volume Weighted Average Price — è una delle poche linee sul grafico che i desk di esecuzione professionali, le strategie algoritmiche e i trader intraday discrezionali osservano tutti allo stesso tempo. Quell'attenzione condivisa è esattamente ciò che lo rende utile: è meno uno strumento di previsione che un punto d'incontro.

Questo articolo spiega cosa misura davvero il VWAP, perché si comporta diversamente da una media mobile, e come sono costruite e lette le bande a deviazione standard intorno a esso. Per gli strumenti che lo disegnano, vedi la sezione Vedilo in DeepCharts.

## L'idea in un paragrafo

Il VWAP è il prezzo medio di tutto ciò che è stato scambiato finora nella sessione, dove ogni scambio conta in proporzione alla sua dimensione. Immagina una bancarella di un mercato contadino che vende mele tutta la mattina: qualche vendita iniziale a 2,10, una grande ondata di vendite a 2,00, una manciata in ritardo a 2,30. La media semplice di quei prezzi sovrappesa le vendite sporadiche; la media ponderata per il volume — l'incasso totale diviso per le mele vendute — ti dice cosa la folla ha pagato davvero. Il VWAP è quel numero per un mercato, aggiornato scambio dopo scambio. Prezzo sopra il VWAP significa che il partecipante medio che ha scambiato oggi è in guadagno lato long; prezzo sotto significa che il compratore medio è in perdita. Quel singolo fatto dà a ogni movimento intraday un punto di riferimento.

## Perché interessa ai trader

- **È il benchmark istituzionale.** Gli algoritmi di esecuzione vengono valutati di routine sul fatto di aver eseguito meglio o peggio del VWAP, quindi grandi flussi di ordini passivi si concentrano intorno a esso — ecco perché il prezzo vi reagisce così spesso.
- **Fornisce un bias di sessione in un colpo d'occhio.** Scambi persistenti sopra un VWAP in salita indicano una giornata a controllo dei compratori; scambi persistenti sotto un VWAP in discesa il contrario. Oscillazioni avanti e indietro attraverso un VWAP piatto indicano una giornata di rotazione.
- **Le bande misurano l'allungamento.** Le bande a deviazione standard intorno al VWAP si adattano alla volatilità propria della giornata, quindi "esteso" significa la stessa cosa in una giornata tranquilla e in una selvaggia.
- **Si abbina naturalmente all'orderflow.** Un pullback sul VWAP è una posizione; quello che il delta e il footprint fanno in quella posizione è il trade — vedi [[orderflow-101]] e [[reading-a-footprint]].

## Come funziona

### Ancoraggio e reset di sessione

Il VWAP è sempre calcolato *da un ancoraggio*. L'ancoraggio più comune è l'inizio della giornata di negoziazione, quindi la linea si azzera a ogni sessione e all'inizio le prime stampe dominano. Quel reset conta: pochi minuti dopo l'apertura, il VWAP è costruito su pochissimo volume e oscilla a ogni raffica di scambi; a metà sessione ha così tanto volume alle spalle che si muove appena. Tratta il VWAP di inizio sessione come provvisorio e quello di fine sessione come pesante.

### Le bande

Poiché il VWAP è una media, il prezzo oscilla naturalmente intorno a esso. Le bande a deviazione standard quantificano quell'oscillazione: la prima banda contiene il vagare "normale", mentre la seconda e la terza segnano prezzi statisticamente allungati per la distribuzione di *questa* giornata. I trader usano le bande esterne in due modi — come zone di fade nelle giornate di rotazione (il prezzo allungato rispetto a un VWAP piatto tende a rientrare) e come conferma di tendenza nelle giornate di spinta (il prezzo che cavalca una banda esterna con il VWAP in forte pendenza è forza, non uno short automatico).

Provalo qui sotto — regola le bande sigma e passa il mouse sul grafico per una lettura dal vivo di quanto il prezzo è allungato rispetto alla media.

[WIDGET: vwap-lab]

### La matematica (facoltativa)

Dopo *n* scambi (o barre), con prezzo *P* e volume *V*:

```
VWAP = Σ(Pi × Vi) / Σ(Vi)
```

Le implementazioni basate sulle barre usano tipicamente il prezzo tipico di ogni barra ((high + low + close) / 3) al posto dei prezzi dei singoli scambi. Le bande sono VWAP ± k × σ, dove σ è la deviazione standard ponderata per il volume del prezzo intorno al VWAP e k è 1, 2 o 3. Poiché sia la media che σ sono cumulative dall'ancoraggio, le bande si allargano nelle sessioni volatili e si stringono in quelle tranquille.

> **Nota:** Due piattaforme possono stampare valori di VWAP leggermente diversi dallo stesso mercato se ancorano a orari di inizio sessione diversi o calcolano dalle barre invece che dai tick. La forma e le reazioni contano più del decimale esatto.

## Vedilo in DeepCharts

- **Il quick template D-VL** — un clic nella barra inferiore del grafico traccia il VWAP giornaliero con tre bande a deviazione standard sopra e sotto, preconfigurato sull'indicatore [[deep-profile]]. Vedi [[quick-chart-templates]].
- [[vwap-envelopes|VWAP Envelopes]] — l'indicatore dedicato per una linea VWAP con bande envelope circostanti; vedi il suo riferimento per le impostazioni disponibili.
- **Strumento di disegno VWAP** — la toolbox **Drawing Objects** del grafico include uno strumento VWAP per posizionare un VWAP direttamente sul grafico. Vedi [[drawing-tools]].
- [[deep-profile|Deep Profile]] — l'indicatore a profilo su cui è costruito il preset D-VL.

## Esempio pratico

Supponi che ES apra a 5.300,00, spinga fino a 5.312,00 nella prima mezz'ora, e il VWAP di sessione si assesti vicino a 5.305,00 (numeri a titolo illustrativo). A metà mattina, il prezzo ritraccia fino a 5.305,50 — il primo tocco del VWAP dalla spinta iniziale. Questo è il classico punto decisionale: se compratori responsive difendono la media e il footprint mostra le vendite esaurirsi verso il tocco, il playbook della giornata di tendenza dice che la spinta può continuare, con la prima banda superiore come obiettivo iniziale. Supponi invece che il prezzo tagli il VWAP su forte delta negativo e poi *lo ritesti dal basso* a 5.304,75, si blocchi e si giri. La linea è passata da supporto a resistenza, la pendenza del VWAP si appiattisce, e il carattere della giornata passa da spinta a rotazione — ora il gioco è fare fade delle bande esterne verso la media, non inseguire i break. Stessa linea, due regimi diversi; la pendenza e la reazione, non il tocco in sé, ti hanno detto in quale ti trovavi.

[SCREENSHOT: L'esempio pratico come grafico ES annotato — spinta mattutina sopra il VWAP, primo tocco sul pullback etichettato "punto decisionale", il ritest fallito dal basso etichettato "il supporto diventa resistenza", e la rotazione pomeridiana tra le bande con frecce | dc-it-understanding-vwap-01.png]

## Letture errate comuni

- **"Il VWAP è un supporto."** Il VWAP è un *riferimento*, non un muro. Segna dove è probabile che si decida una reazione; è l'orderflow al tocco a deciderla.
- **"Le bande sono livelli di ipercomprato/ipervenduto."** In una giornata di tendenza, il prezzo può cavalcare una banda esterna per ore. Leggi prima la pendenza del VWAP: fai fade dell'allungamento rispetto a un VWAP piatto, rispetta l'allungamento lungo uno ripido.
- **"Il VWAP alle 9:35 significa qualcosa."** Il VWAP di inizio sessione è costruito su volume cumulativo sottile ed è instabile. Dagli il tempo di accumulare peso prima di appoggiartici.
- **"VWAP e POC sono la stessa cosa."** Il VWAP è il prezzo medio ponderato per il volume; il POC è il singolo prezzo con il maggior volume ([[understanding-volume-profile]]). Spesso stanno vicini nelle giornate in equilibrio e lontani in quelle di tendenza — la distanza tra i due è essa stessa un'informazione.
- **"Un solo VWAP va bene per tutti i timeframe."** Un VWAP ancorato alla sessione non dice nulla di diretto su uno swing multi-giorno. Se la tua idea copre più giorni, ti serve un ancoraggio diverso, non la stessa linea.

## Approfondisci

Il VWAP risponde a "cosa ha pagato il partecipante medio"; il volume profile risponde a "a quali prezzi sono avvenuti gli affari" — leggi [[understanding-volume-profile]] per combinare le due viste del prezzo equo. [[understanding-auction-theory]] spiega il quadro equilibrio/squilibrio dietro le giornate di rotazione e di spinta, e [[orderflow-101]] copre gli strumenti sul delta di cui hai bisogno per giudicare ogni tocco del VWAP. I termini poco familiari sono raccolti nel [[glossary]].

## Articoli correlati

- [[vwap-envelopes]]
- [[quick-chart-templates]]
- [[deep-profile]]
- [[understanding-volume-profile]]
- [[drawing-tools]]
- [[glossary]]