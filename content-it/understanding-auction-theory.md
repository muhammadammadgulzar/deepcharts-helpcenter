---
title: "Capire la teoria dell'asta: squilibrio, aste incompiute, assorbimento"
slug: "understanding-auction-theory"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "6 min read"
description: "Come il modello del mercato come asta spiega squilibri, aste incompiute e assorbimento, e come leggere ciascuno di essi su un grafico footprint."
keywords: ["teoria dell'asta", "auction market theory", "squilibrio", "squilibri impilati", "asta incompiuta", "assorbimento", "initiative vs responsive", "squilibrio diagonale", "squilibrio in acquisto", "squilibrio in vendita"]
source_hash: "79f8e9ad271553ad"
ai_translated: true
source_hash: "79f8e9ad271553ad"
---
La teoria dell'asta è il quadro concettuale che tiene insieme l'orderflow. Invece di trattare il prezzo come una linea che sale e scende, tratta il mercato come un'asta continua a due vie il cui compito è trovare il prezzo a cui gli affari si concludono. Squilibri, aste incompiute e assorbimento sono le tre impronte più negoziabili che quell'asta lascia dietro di sé.

Questo articolo dà per scontato che tu sappia cosa sono un aggressore e il delta — in caso contrario, parti da [[orderflow-101]].

## L'idea in un paragrafo

Un mercato funziona come un banditore d'asta che non può smettere di parlare: il prezzo sale finché i compratori si rifiutano di pagare di più, poi scende finché i venditori si rifiutano di accettare di meno, sondando all'infinito entrambe le direzioni alla ricerca dei confini del valore equo. Immagina un'asta di bestiame — il banditore alza il prezzo finché le mani continuano ad alzarsi, e il lotto non è concluso finché i rilanci non vengono accolti dal silenzio. Ogni movimento di mercato è quello stesso processo: un rialzo è "finito" quando l'interesse in acquisto si esaurisce in alto, e un ribasso è "finito" quando l'interesse in vendita si esaurisce in basso. Lo squilibrio mostra dove un lato sta sovrastando l'altro, un'asta incompiuta è un movimento terminato prima che l'esaurimento fosse dimostrato, e l'assorbimento è il momento in cui una controparte paziente mette a tacere il lato aggressivo senza che il prezzo si muova affatto. Puoi osservare quell'asta a due vie dal vivo nel ladder qui sotto — passa il mouse su ogni livello per vederne il ruolo.

[WIDGET: dom-ladder]

## Perché interessa ai trader

- **Gli squilibri mostrano chi ha il controllo in questo momento** — e gli squilibri impilati segnano zone di prezzo che spesso agiscono da supporto o resistenza a un ritest.
- **Le aste incompiute lasciano affari in sospeso.** Molti trader si aspettano che il mercato prima o poi torni a visitare un estremo dove l'asta non si è completata correttamente, il che rende quei livelli obiettivi naturali.
- **L'assorbimento è un sistema di allerta precoce.** Compare spesso nei punti di svolta prima che qualcosa sia visibile su un semplice grafico a candele.
- **Il quadro concettuale impedisce letture unilaterali.** La teoria dell'asta ti costringe a chiederti non solo "chi è aggressivo?" ma "l'aggressione sta funzionando?" — la differenza tra attività initiative che porta da qualche parte e attività responsive che la contrasta.

## Come funziona

### Squilibrio

Su un grafico footprint, ogni prezzo mostra il volume scambiato sul bid e sull'ask. Poiché gli acquisti a mercato colpiscono l'ask a un prezzo mentre le vendite a mercato colpiscono il bid un tick più in basso, gli squilibri del footprint si confrontano in diagonale: il volume ask a un prezzo contro il volume bid un tick sotto. Quando un lato supera l'altro di un multiplo elevato — una convenzione comune è 3:1 (300%), anche se la soglia è configurabile nella maggior parte degli strumenti — quella coppia di prezzi viene marcata come squilibrio in acquisto o in vendita. Un singolo squilibrio è rumore; tre o più squilibri consecutivi sullo stesso lato, detti squilibri impilati, indicano che un lato ha travolto l'altro lungo un'intera zona, e quella zona viene spesso difesa quando il prezzo vi ritorna.

Provalo qui sotto — regola il rapporto di squilibrio diagonale e passa il mouse sulle celle per vedere quali coppie diagonali si qualificano.

[WIDGET: footprint-lab]

### Aste incompiute

Un'asta è completa quando il lato aggressivo si esaurisce all'estremo. Su un footprint, un massimo pulito e finito si assottiglia: al prezzo più alto rimane poco o nessun volume lato ask, perché gli ultimi compratori si sono arresi. Quando invece il prezzo estremo di un movimento mostra ancora scambi solidi su entrambi i lati — acquisti e vendite entrambi attivi sul tick più alto senza assottigliamento — l'asta è terminata senza prova di esaurimento. Quel livello si chiama asta incompiuta, e l'aspettativa comune è che il mercato vi ritorni più tardi per concludere l'affare. Trattala come una tendenza, non come una regola: le definizioni esatte variano tra gli strumenti, e non tutti i livelli incompiuti vengono rivisitati in un dato giorno.

### Assorbimento

L'assorbimento è l'aggressione che incontra un muro paziente. Ordini a mercato aggressivi continuano a colpire un livello — volume pesante, delta fortemente unilaterale — eppure il prezzo non si muove, perché grandi ordini limit in attesa continuano a prendere l'altro lato. Sul footprint appare come un volume insolitamente alto a un estremo senza progresso del prezzo; su un grafico del delta appare come una divergenza, sforzo senza risultato. Venditori che assorbono su un massimo spesso precedono un rifiuto verso il basso; compratori che assorbono su un minimo spesso precedono un rimbalzo. L'assorbimento è trattato in profondità, insieme agli ordini iceberg che di solito lo causano, in [[understanding-icebergs-absorption]].

### La matematica (facoltativa)

Per una coppia diagonale, il rapporto di squilibrio è:

```
buy imbalance  if ask_volume(price) ≥ ratio × bid_volume(price − 1 tick)
sell imbalance if bid_volume(price) ≥ ratio × ask_volume(price + 1 tick)
```

con `ratio` comunemente impostato intorno a 3.0. La maggior parte degli strumenti richiede anche un volume minimo, così che stampe insignificanti (6 contratti contro 2) non si qualifichino.

## Vedilo in DeepCharts

- [[deep-print|Deep Print (Footprint)]] — il grafico dove squilibri, estremi che si assottigliano e assorbimento si leggono direttamente.
- [[imbalance-tracker]] — rileva e marca automaticamente gli squilibri bid/ask.
- [[imbalance-rejector]] — strumento complementare per tracciare come il prezzo si comporta ai livelli di squilibrio.
- [[session-imbalance]] — livelli di riferimento degli squilibri a livello di sessione.
- [[unfinished-auction]] — marca gli estremi delle aste incompiute così puoi verificare se vengono rivisitati.
- [[auction-gap-tracker]] — traccia i gap lasciati dall'asta.
- [[ratio-highlight]] — evidenzia rapporti bid/ask estremi all'interno delle barre.
- [[market-profile-tpo]] e [[deep-profile]] — le viste a profilo della stessa asta, che mostrano dove ha costruito valore.

## Esempio pratico

NQ sale verso il massimo di ieri (diciamo 18.600 — a titolo illustrativo). Durante la salita, il footprint stampa squilibri in acquisto impilati a 18.560–18.570: compratori initiative al comando, e quella zona diventa il supporto sul pullback da tenere d'occhio. A 18.600 il carattere cambia — il volume si espande bruscamente, il delta resta fortemente positivo, ma il prezzo si blocca per diverse barre. Sforzo senza risultato: i venditori stanno assorbendo gli acquisti. Il tick più alto del movimento mostra ancora scambi pesanti su entrambi i lati, quindi il massimo è anche una potenziale asta incompiuta. Il prezzo poi si gira. La lettura secondo la teoria dell'asta: i compratori hanno guidato il movimento (squilibri), un venditore paziente lo ha concluso (assorbimento), e il massimo non assottigliato resta sulla mappa come affare in sospeso che il mercato potrebbe rivisitare un altro giorno.

[SCREENSHOT: Una sequenza footprint su NQ annotata in tre fasi — squilibri in acquisto impilati durante il rally, una barra di assorbimento sul massimo del giorno precedente con volume alto e prezzo piatto, e il tick più alto non assottigliato cerchiato come potenziale asta incompiuta | dc-it-understanding-auction-theory-01.png]

## Letture errate comuni

- **"Ogni squilibrio è un segnale."** Squilibri isolati accadono di continuo. La posizione (a un livello che conta) e l'impilamento sono ciò che dà loro peso.
- **"Le aste incompiute devono essere rivisitate."** È una tendenza attorno a cui i trader pianificano, non una garanzia — e le definizioni differiscono tra gli strumenti, quindi due piattaforme potrebbero non marcare gli stessi livelli.
- **"Volume alto su un massimo è sempre assorbimento."** Può anche essere un genuino repricing a due lati. L'assorbimento richiede il terzo ingrediente: il prezzo che non riesce a muoversi nonostante l'aggressione.
- **"Assorbimento significa inversione immediata."** Se il lato che assorbe alla fine ritira i propri ordini, il livello assorbito può rompersi violentemente — l'assorbimento ti dice dove si combatte la battaglia, non chi la vince.

## Approfondisci

Esercitati sulla meccanica barra per barra in [[reading-a-footprint]], studia il lato degli ordini nascosti dell'assorbimento in [[understanding-icebergs-absorption]], e osserva come la costruzione di valore dell'asta si manifesta in [[understanding-volume-profile]]. I termini sono definiti nel [[glossary]].

## Articoli correlati

- [[orderflow-101]]
- [[reading-a-footprint]]
- [[understanding-icebergs-absorption]]
- [[imbalance-tracker]]
- [[unfinished-auction]]
- [[deep-print]]