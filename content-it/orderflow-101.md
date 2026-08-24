---
title: "Orderflow 101: bid, ask, aggressore e delta"
slug: "orderflow-101"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "beginner"
time: "6 min read"
description: "I quattro elementi fondamentali del trading orderflow — bid, ask, aggressore e delta — spiegati da zero, con un esempio pratico sui futures."
keywords: ["order flow", "basi dell'orderflow", "cos'è il delta", "bid vs ask", "aggressore", "ordine a mercato vs ordine limit", "delta cumulativo", "divergenza del delta", "scambiato sull'ask", "scambiato sul bid"]
source_hash: "1396b075f88fd1ac"
ai_translated: true
source_hash: "1396b075f88fd1ac"
---
Una candela ti dice cosa ha fatto il prezzo. L'orderflow ti dice chi lo ha fatto muovere e con quanta forza ha spinto. Una volta che sai leggere il bid, l'ask, l'aggressore e il delta, ogni strumento avanzato di DeepCharts — i footprint, i grafici delta, il DOM, il tape — diventa una variazione delle stesse quattro idee.

Questo articolo è la base per il resto della sezione Concetti. Leggilo prima di [[reading-a-footprint]] o [[understanding-auction-theory]].

## L'idea in un paragrafo

Ogni scambio in un mercato futures è un incontro tra qualcuno disposto ad aspettare e qualcuno che non lo è. I trader pazienti inseriscono ordini limit — "comprerò a questo prezzo o meglio" — e quegli ordini restano nel book sul bid e sull'ask. I trader impazienti inviano ordini a mercato che colpiscono qualunque cosa sia in attesa. Il lato impaziente si chiama aggressore, ed è lui a decidere dove viene stampato lo scambio: un acquisto a mercato viene eseguito contro l'ask, una vendita a mercato viene eseguita contro il bid. Pensa a un mercato del pesce: i bancarellisti espongono i loro prezzi (ordini limit); un cliente che paga il prezzo richiesto senza contrattare è un compratore aggressivo; un pescatore che svende il suo pescato al prezzo che i compratori sono disposti a pagare è un venditore aggressivo. Conta gli acquisti aggressivi, sottrai le vendite aggressive, e ottieni il delta — un punteggio progressivo di quale lato ha più urgenza.

## Perché interessa ai trader

- **Separa la convinzione dalla deriva.** Il prezzo può salire su forti acquisti aggressivi o sul nulla. Il delta ti mostra quale dei due stai guardando.
- **Rivela l'assorbimento.** Quando gli ordini aggressivi affluiscono in massa ma il prezzo non si muove, qualcuno di grosso sta passivamente prendendo il lato opposto — spesso il primo segnale visibile di un'inversione (vedi [[understanding-icebergs-absorption]]).
- **Conferma o smentisce i breakout.** Un breakout con un forte delta nella stessa direzione ha carburante; uno senza è sospetto.
- **Affina il timing.** I pattern grafici ti dicono dove qualcosa potrebbe accadere; l'orderflow ti dice se sta davvero accadendo, scambio per scambio.

## Come funziona

### Bid, ask e lo spread

In ogni momento il book di negoziazione ha due prezzi in prima linea. Il **bid** è il prezzo più alto a cui i compratori in attesa sono disposti a comprare. L'**ask** (chiamato anche offer) è il prezzo più basso a cui i venditori in attesa sono disposti a vendere. Il divario tra i due è lo spread — nei futures liquidi come ES è di solito un tick. Dietro quei prezzi in prima linea ci sono code di ulteriori ordini limit a ogni livello; quella pila di ordini in attesa è la profondità del mercato (vedi [[depth-of-market]] e [[advanced-dom]]). Passa il mouse sul ladder live qui sotto per vedere cosa significa ogni livello in attesa — ordini limit di vendita impilati sopra lo spread, ordini limit di acquisto sotto.

[WIDGET: dom-ladder]

### L'aggressore

Gli ordini in attesa non si scambiano tra loro — qualcuno deve attraversare lo spread. Un ordine a mercato (o un ordine limit aggressivo con prezzo oltre lo spread) fa esattamente questo:

- Uno scambio stampato **sull'ask** è stato avviato da un **compratore** aggressivo.
- Uno scambio stampato **sul bid** è stato avviato da un **venditore** aggressivo.

Un punto inganna quasi tutti i principianti: ogni singolo scambio ha esattamente un compratore e un venditore, quindi "più compratori che venditori" non significa nulla. Ciò che l'orderflow misura è quale lato è stato aggressivo — chi ha pagato lo spread per essere eseguito subito.

### Il delta

Il delta condensa il conteggio degli aggressori in un unico numero per barra:

- Il volume scambiato sull'ask conta come pressione in acquisto.
- Il volume scambiato sul bid conta come pressione in vendita.
- **Delta = volume scambiato sull'ask − volume scambiato sul bid.**

Un delta positivo significa che i compratori sono stati il lato più aggressivo durante quella barra; un delta negativo che lo sono stati i venditori. Il **delta cumulativo** somma il delta di ogni barra a un totale progressivo lungo la sessione, così puoi confrontare il trend dell'aggressività con il trend del prezzo. Quando il prezzo segna un nuovo massimo ma il delta cumulativo no (o l'opposto sui minimi), quel disaccordo si chiama divergenza del delta e merita attenzione.

Guardalo in azione nel pannello live qui sotto — passa il mouse su ogni barra per vedere come il suo delta alimenta la linea cumulativa.

[WIDGET: delta-lab]

### La matematica (facoltativa)

Per una singola barra:

```
delta        = volume_at_ask − volume_at_bid
total volume = volume_at_ask + volume_at_bid
```

Il delta cumulativo alla barra *n* è la somma dei delta di tutte le barre dall'inizio della sessione fino alla barra *n*. Nota che il delta può essere piccolo mentre il volume totale è enorme — quella combinazione (volume pesante su entrambi i lati, poca aggressività netta) è essa stessa un'informazione: una battaglia, non una parata.

> **Nota:** Il delta dipende dal fatto che il tuo feed dati classifichi correttamente ogni scambio come lato bid o lato ask. I feed con dati più granulari producono un delta più preciso; vedi [[compatibility-guide]] per sapere cosa fornisce ogni feed.

## Vedilo in DeepCharts

- [[adv-time-and-sales|Advanced Time And Sales]] — il tape grezzo: ogni singolo scambio con prezzo, dimensione e lato.
- [[advanced-dom|Advanced DOM]] e l'indicatore [[depth-of-market|Depth of Market]] — la liquidità in attesa sul bid e sull'ask contro cui gli aggressori scambiano.
- [[deep-print|Deep Print (Footprint)]] — volume scambiato sul bid vs sull'ask a ogni prezzo dentro ogni barra.
- [[deep-delta]] e [[delta-bar]] — il delta per barra tracciato come studio a sé.
- [[delta-cumulative-candlestick]] e [[delta-cumulative-histogram]] — il delta cumulativo per la lettura delle divergenze.
- [[delta-highlight|Delta % Highlight]] — segnala le barre in cui il delta è una quota insolitamente grande del volume.
- [[big-trades]] — isola le stampe aggressive insolitamente grandi.
- [[speed-of-tape]] — la velocità con cui gli scambi colpiscono il mercato, un indicatore indiretto di urgenza.

## Esempio pratico

Supponiamo che ES stia scambiando a 5.300,00 e una barra da 5 minuti stampi 12.400 contratti sull'ask e 9.900 sul bid (i numeri sono illustrativi). Il delta è +2.500 su 22.300 di volume totale: i compratori sono stati chiaramente il lato aggressivo, e la barra chiude vicino al suo massimo — l'aggressività ha prodotto progresso. Acquisti d'iniziativa sani.

La barra successiva stampa un altro delta di +3.000, eppure chiude piatta, vicino alla chiusura precedente. I compratori aggressivi hanno speso 3.000 contratti di sforzo netto e non hanno ottenuto nulla. Qualcuno stava vendendo passivamente contro di loro sui massimi — assorbimento. Se le barre seguenti mostrano il delta che diventa negativo mentre il prezzo inizia a scivolare, lo sforzo d'acquisto fallito diventa l'inizio di una storia di inversione.

[SCREENSHOT: Due barre footprint consecutive annotate fianco a fianco — la prima con delta fortemente positivo che chiude sul massimo, la seconda con delta positivo simile ma chiusura piatta, testo dell'annotazione "same buying effort, no result = absorption" | dc-it-orderflow-101-01.png]

## Errori di lettura comuni

- **"Delta positivo significa che il prezzo deve salire."** No — il delta misura lo sforzo, non il risultato. Un delta positivo senza progresso al rialzo è una prova ribassista, non rialzista.
- **"Il delta mi dice quanti compratori vs venditori ci sono."** Ogni scambio li ha entrambi. Il delta misura solo l'aggressività.
- **"Una singola grande barra di delta è un segnale."** Una singola barra significa poco senza contesto — conta la posizione (a un livello chiave, agli estremi della sessione) e conta come il prezzo ha reagito.
- **"Il delta è identico su ogni feed."** La qualità della classificazione varia con la granularità del feed, quindi i valori assoluti del delta possono differire tra fonti dati. Leggi il pattern, non la cifra precisa.

## Approfondisci

Quando bid, ask, aggressore e delta ti sembrano naturali, passa a [[reading-a-footprint]] per esercitarti barra per barra, a [[understanding-auction-theory]] per squilibrio e assorbimento nel contesto, e a [[understanding-icebergs-absorption]] per capire come i grandi operatori nascondono i loro ordini. I termini poco familiari sono raccolti nel [[glossary]].

## Articoli correlati

- [[reading-a-footprint]]
- [[understanding-auction-theory]]
- [[understanding-icebergs-absorption]]
- [[deep-print]]
- [[deep-delta]]
- [[glossary]]