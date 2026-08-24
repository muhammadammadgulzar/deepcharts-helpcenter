---
title: "Capire gli iceberg e l'assorbimento"
slug: "understanding-icebergs-absorption"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "advanced"
time: "6 min read"
description: "Come gli ordini iceberg nascondono le dimensioni istituzionali, come appare l'assorbimento sul tape, sul DOM e sul footprint, e come evitare le classiche letture errate."
keywords: ["ordine iceberg", "liquidità nascosta", "assorbimento", "ripristino degli ordini", "bid che si ricarica", "dimensione nascosta", "battaglia passivi aggressori", "assorbimento con divergenza del delta", "spoofing vs iceberg"]
source_hash: "0820f76a299b2d01"
ai_translated: true
source_hash: "0820f76a299b2d01"
---
I grandi trader hanno un problema: mostrare tutta la loro dimensione muoverebbe il mercato contro di loro prima che finiscano di eseguire. L'ordine iceberg è la loro soluzione standard, e l'assorbimento è l'ombra che esso proietta sul tape. Imparare a riconoscere entrambi è una delle competenze di maggior valore nel trading orderflow, perché rivela dove il denaro serio è disposto a combattere.

Questo è un argomento avanzato. Presuppone che tu abbia familiarità con aggressore, delta e book di negoziazione da [[orderflow-101]], e con il quadro dell'asta da [[understanding-auction-theory]].

## L'idea in un paragrafo

Un ordine iceberg è un grande ordine limit che mostra solo una piccola porzione visibile — la punta — mentre il resto rimane nascosto e si ricarica automaticamente man mano che la punta viene eseguita. Immagina un acquirente all'ingrosso a un mercato del pesce che vuole 5.000 chili ma ne chiede solo 50 alla volta, così nessuno si accorge della scala della sua domanda e gli alza i prezzi; ogni volta che la sua cassa si riempie, ne ordina silenziosamente altri 50. L'assorbimento è ciò che il resto del mercato sperimenta mentre lui lavora: i venditori continuano a scaricare in quello che sembra un piccolo bid, eppure il prezzo si rifiuta di scendere, perché l'ordine nascosto ingoia — assorbe — tutto ciò che gli viene lanciato contro.

## Perché interessa ai trader

- **Gli iceberg segnano un impegno reale.** La dimensione visibile nel book può essere ritirata in un millisecondo; un iceberg che ha già eseguito migliaia di contratti è la prova di un intento genuino a quel prezzo.
- **L'assorbimento spesso precede le inversioni.** Quando i venditori aggressivi si esauriscono contro un compratore nascosto, la via di minor resistenza si inverte verso l'alto — e viceversa.
- **Ridefiniscono supporto e resistenza.** Un livello difeso da un iceberg è strutturalmente più forte di uno tracciato da un pattern grafico, e il suo cedimento è proporzionalmente più significativo.
- **Ti proteggono dalle trappole.** Riconoscere l'assorbimento ti impedisce di unirti a un movimento aggressivo esattamente nel punto in cui un giocatore più grande sta prendendo l'altro lato.

## Come funziona

### La meccanica di un iceberg

Un trader invia un ordine limit per, diciamo, 500 contratti con una dimensione visualizzata di 10. Il book mostra 10. Quando quei 10 vengono eseguiti, l'ordine mostra automaticamente altri 10 dalla riserva nascosta, allo stesso prezzo, finché i 500 non sono completati o l'ordine viene cancellato. Alcuni iceberg sono nativi (gestiti dall'exchange); altri sono sintetici (un algoritmo di esecuzione che reinvia piccoli ordini) — sul tape appaiono simili. La firma osservabile è sempre la stessa: **il volume eseguito a un prezzo supera enormemente la dimensione che vi era mai stata visibile.**

### Come appare l'assorbimento

L'assorbimento è l'effetto a livello di mercato: volume aggressivo pesante su un prezzo, delta fortemente unilaterale, e nessun progresso del prezzo. Le tre viste concordano tra loro:

- **Sul tape:** un flusso rapido di stampe a un prezzo, stesso lato, di gran lunga superiore a quanto mostrato dal book.
- **Sul DOM:** la dimensione visibile del livello incassa colpo dopo colpo ma continua a ricaricarsi su un numero simile invece di ridursi a zero.
- **Sul footprint:** una cella di volume fuori misura all'estremo del movimento senza follow-through oltre di essa, e un delta che spinge forte in una direzione in cui il prezzo si rifiuta di andare.

[SCREENSHOT: Una vista composita annotata dello stesso momento in tre pannelli — tape che mostra vendite ripetute a un prezzo, DOM che mostra il bid a quel prezzo che si ricarica su una dimensione simile dopo ogni colpo, e una barra footprint con un'enorme cella di volume bid sul minimo senza prezzi inferiori stampati, con la didascalia "un iceberg, tre viste" | dc-it-understanding-icebergs-absorption-01.png]

### Il rilevamento in pratica

Raramente vedi un iceberg direttamente; lo deduci. I segnali più forti, in ordine approssimativo di affidabilità:

1. **Ricarica:** lo stesso prezzo mostra ripetutamente una dimensione simile mentre gli scambi continuano a stamparvisi contro.
2. **Discrepanza eseguito-vs-visualizzato:** il volume scambiato cumulativo al livello è un multiplo elevato di qualsiasi cosa il book abbia mai mostrato.
3. **Divergenza del delta:** il delta cumulativo scende con forza mentre il prezzo tiene (compratore nascosto), o sale con forza mentre il prezzo si blocca (venditore nascosto) — vedi [[delta-cumulative-candlestick]].
4. **Il tempo:** un assorbimento genuino richiede colpi ripetuti nel tempo; una singola stampa grande non prova nulla.

I primi due segnali vivono sul tape — esercitati a leggere le stampe grezze nel Time & Sales dal vivo qui sotto; passa il mouse su una stampa qualsiasi per mettere in pausa il flusso e decodificarla.

[WIDGET: tape-lab]

> **Nota:** La qualità del rilevamento dipende dai tuoi dati di mercato. I dati di profondità ordine per ordine (MBO) permettono agli strumenti di tracciare le ricariche dei singoli ordini; la profondità aggregata rende l'inferenza degli iceberg meno precisa, e i dati top-of-book (Level 1) supportano solo la lettura in stile divergenza del delta. Vedi [[compatibility-guide]] per cosa fornisce ciascun feed.

### La matematica (facoltativa)

Un rapporto mentale utile per un livello sospettato di essere un iceberg:

```
absorption ratio = volume executed at the level ÷ maximum size ever displayed there
```

Non esiste una soglia magica, ma più alto è il multiplo (e più breve il tempo in cui si accumula), più difficile diventa spiegare l'attività come normale traffico di coda da molti piccoli ordini in attesa.

## Vedilo in DeepCharts

- [[adv-time-and-sales|Advanced Time And Sales]] — il tape, dove le stampe ripetute su un prezzo si vedono per prime.
- [[advanced-dom|Advanced DOM]] — osserva un livello ricaricarsi in tempo reale mentre assorbe.
- [[deep-print|Deep Print (Footprint)]] — celle di volume fuori misura agli estremi senza follow-through.
- [[deep-wall]] — traccia la grande liquidità in attesa nel book.
- [[deep-trades]] e [[big-trades]] — fanno emergere scambi eseguiti insolitamente grandi e i loro cluster.
- [[delta-cumulative-candlestick]] e [[delta-cumulative-histogram]] — la vista a divergenza dell'assorbimento.
- [[speed-of-tape]] — picchi di urgenza che spesso accompagnano una battaglia a un livello iceberg.

## Esempio pratico

ES scende verso 5.270,00 (a titolo illustrativo), un livello senza evidente significato grafico. Il DOM mostra lì un bid di circa 60 contratti. Nei quattro minuti successivi il tape stampa circa 2.400 contratti venduti a 5.270,00 — quaranta volte la dimensione visualizzata — e dopo ogni raffica il bid si rimostra vicino a 60. Il delta cumulativo scende bruscamente; il prezzo non fa un solo nuovo minimo. Questo è un compratore nascosto da manuale: i venditori stanno riversando sforzo su un livello e non ottengono nulla. Quando le ondate di vendita si accorciano visibilmente e appaiono i primi acquisti aggressivi, gli short assorbiti sono intrappolati sotto un compratore dimostrato — carburante per il rimbalzo. Se invece 5.270,00 si fosse rotto dopo tutta quella difesa, la stessa logica si inverte: il grande giocatore ha finito o è stato sopraffatto, e il movimento attraverso il livello tende a essere veloce.

[SCREENSHOT: Grafico ES dell'esempio pratico annotato con la linea del livello 5.270,00, un pannello del delta cumulativo sotto che scende bruscamente mentre il prezzo resta piatto sul livello, e un richiamo con il testo "2.400 venduti su un bid da 60 lotti — compratore nascosto" | dc-it-understanding-icebergs-absorption-02.png]

## Letture errate comuni

- **"Una grande dimensione visibile sul DOM è un iceberg."** Il contrario — gli iceberg nascondono la dimensione. Una grande dimensione visualizzata che svanisce quando viene avvicinata è più vicina allo spoofing che all'assorbimento. Giudica da ciò che viene eseguito, non da ciò che viene mostrato.
- **"Ogni livello che si ricarica è un iceberg."** I prezzi trafficati attirano nuovi ordini limit da molti trader indipendenti. Sospetta un iceberg solo quando la discrepanza eseguito-vs-visualizzato è estrema e concentrata.
- **"L'assorbimento garantisce un'inversione."** Segna una battaglia, non il vincitore. Se l'ordine nascosto si completa o viene cancellato, il livello può cedere violentemente — un assorbimento che fallisce è di per sé un segnale di breakout.
- **"Posso individuare gli iceberg su qualsiasi feed dati."** Senza dati di profondità granulari la firma della ricarica è sfocata; sii più conservativo nelle tue letture su feed aggregati o top-of-book.

## Approfondisci

L'assorbimento è uno dei tre eventi fondamentali dell'asta — vedi [[understanding-auction-theory]] per il quadro completo, e [[reading-a-footprint]] per esercitarti a individuare lo sforzo-contro-risultato barra per barra. [[orderflow-101]] copre la meccanica del delta su cui tutto questo si fonda, e il [[glossary]] definisce ogni termine usato qui.

## Articoli correlati

- [[understanding-auction-theory]]
- [[orderflow-101]]
- [[reading-a-footprint]]
- [[advanced-dom]]
- [[deep-wall]]
- [[adv-time-and-sales]]