---
title: "Capire la struttura del mercato e le sessioni (RTH/ETH, rollover)"
slug: "understanding-market-structure-sessions"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "beginner"
time: "8 min read"
description: "Sessioni RTH e ETH, la giornata di negoziazione dei futures, i livelli di riferimento overnight e il rollover dei contratti — la struttura su cui è costruito ogni grafico futures."
keywords: ["RTH", "ETH", "regular trading hours", "electronic trading hours", "sessione overnight", "globex", "rollover del contratto", "front month", "contratto continuo", "apertura di sessione", "perché il mio grafico è diverso"]
source_hash: "15c83f73d8059712"
ai_translated: true
source_hash: "15c83f73d8059712"
---
I mercati dei futures scambiano quasi 24 ore su 24, ma le ore non sono tutte uguali. Una manciata di fatti strutturali — quando si svolge la sessione "vera", quando inizia effettivamente la giornata dell'exchange, e quale mese contrattuale stai guardando — plasma silenziosamente ogni grafico che apri. I trader che saltano questo livello finiscono confusi da grafici che non concordano, indicatori che si azzerano a orari strani e "gap" di prezzo mai avvenuti.

Questo articolo copre le due idee che contano di più: le sessioni (RTH contro ETH) e il rollover dei contratti. Entrambe fanno parte della struttura generale dei mercati futures; le impostazioni di DeepCharts che le controllano sono linkate in Vedilo in DeepCharts.

## L'idea in un paragrafo

Pensa a un mercato futures come a un negozio che non chiude mai davvero ma ha un periodo di punta al giorno. Le porte sono aperte quasi 23 ore (la sessione elettronica), ma gli affari seri avvengono nelle poche ore in cui è presente la folla principale — fondi, istituzioni, il mercato azionario cash della porta accanto (la sessione regolare). I prezzi stampati alle 3 di notte con un equipaggio ridotto sono reali, ma pesano meno dei prezzi stampati alle 10 del mattino con tutti nella stanza. In cima a quel ritmo giornaliero, i contratti futures stessi scadono ogni pochi mesi, quindi il mercato sposta periodicamente i suoi affari dal contratto in scadenza al successivo — come il negozio che trasloca a un nuovo indirizzo qualche strada più in là, dove la folla è la stessa ma i cartellini dei prezzi differiscono leggermente.

## Perché interessa ai trader

- **Volume e convinzione differiscono per sessione.** Una deriva overnight di 40 punti su volume sottile e un movimento RTH di 40 punti su volume pesante non sono la stessa informazione. Il contesto di sessione ti dice quanto fidarti di un movimento.
- **I livelli di riferimento chiave sono livelli di sessione.** Massimo e minimo overnight, chiusura RTH precedente, apertura RTH — questi sono tra i livelli intraday più osservati proprio perché costruiti da folle di partecipanti diverse.
- **I confini di sessione guidano i tuoi strumenti.** Profili giornalieri, VWAP di sessione, statistiche "day" — tutti si azzerano a un confine di sessione. Due trader con impostazioni di sessione diverse vedranno profili diversi, VWAP diversi e livelli giornalieri diversi sullo stesso mercato ([[understanding-volume-profile]], [[understanding-vwap]]).
- **Il rollover decide quali prezzi sono reali.** In prossimità della scadenza, il vecchio contratto si spegne e il nuovo prende il suo posto a un prezzo leggermente diverso. I grafici che lo ignorano mostrano gap fantasma e dati morti.

## Come funziona

### RTH contro ETH

**ETH (Electronic Trading Hours)** è la sessione elettronica completa — quasi l'intera giornata. **RTH (Regular Trading Hours)** è la sessione diurna principale, e per i futures sugli indici azionari USA è comunemente definita per coincidere con la sessione cash azionaria USA, 09:30–16:00 ora di New York (le definizioni esatte variano per strumento e piattaforma). Tutto ciò che è fuori dall'RTH viene chiamato genericamente sessione overnight o solo-ETH.

La sessione overnight è più sottile: meno partecipanti, meno volume a ogni prezzo, quindi i movimenti viaggiano più lontano con meno affari. Molti approcci intraday trattano quindi il range overnight come *contesto* — una pubblicità irrisolta di dove il valore potrebbe dirigersi — e l'apertura RTH come il momento in cui il mercato vota su di essa a ranghi completi. Ecco perché "il minimo overnight ha tenuto dopo l'apertura?" è una domanda più significativa dello stesso test alle 4 di notte.

### La giornata di negoziazione dei futures

Per i futures sugli indici azionari del CME come ES e NQ, la settimana elettronica apre la domenica sera alle 18:00 ora di New York e prosegue fino al venerdì alle 17:00, con una pausa di manutenzione di un'ora ogni giorno dalle 17:00 alle 18:00. Verifica il calendario pubblicato dall'exchange per il tuo strumento specifico e per le sessioni festive.

Una conseguenza sorprende quasi tutti: la giornata di negoziazione dell'exchange non inizia a mezzanotte — inizia alle 18:00 della sera *precedente*. La "giornata" di negoziazione del lunedì è iniziata domenica sera. Le barre giornaliere, le linee di inizio giornata e le statistiche di sessione ancorate alla giornata dell'exchange si azzerano quindi la sera, non alle 00:00.

[SCREENSHOT: Un grafico NQ che copre due giornate complete con la porzione overnight (solo-ETH) visivamente distinta dalla porzione RTH, annotato con l'inizio di sessione alle 18:00 di New York, l'apertura RTH delle 09:30, il massimo e il minimo overnight e la pausa giornaliera 17:00–18:00 | dc-it-understanding-market-structure-sessions-01.png]

### Rollover e mesi contrattuali

Un contratto future è un accordo con una data di scadenza, quindi ogni strumento è in realtà una famiglia di contratti. I futures sugli indici azionari usano un ciclo trimestrale — marzo, giugno, settembre e dicembre, con i codici mese H, M, U e Z. Il contratto dove attualmente vive il volume si chiama **front month**, ed è quello che dovresti tracciare sul grafico e negoziare.

All'avvicinarsi della scadenza (i futures sugli indici azionari scadono tipicamente il terzo venerdì del mese contrattuale), il volume migra verso il contratto successivo nell'arco di alcuni giorni — la maggior parte intorno a una data di roll convenzionale circa una settimana prima della scadenza. Ne seguono due cose:

1. **Devi cambiare contratto.** Restare sul contratto in scadenza ti lascia a osservare un mercato che si sta spegnendo; dopo la scadenza il grafico semplicemente si ferma. In DeepCharts il cambio si fa con **Options → Symbols Rollover** — vedi [[symbol-rollover]].
2. **I due contratti scambiano a prezzi diversi.** Il divario tra il vecchio e il nuovo contratto è un artefatto di prezzo (costi di mantenimento, dividendi, interessi), non un movimento di mercato. I grafici con storico lungo cuciono insieme i contratti come *contratto continuo*, e il metodo di cucitura decide se quel gap artificiale resta visibile o viene aggiustato via.

### La matematica (facoltativa)

Qui non c'è matematica pesante, solo un'idea di aggiustamento: quando si cuciono i mesi contrattuali, le serie continue "adjusted" spostano i prezzi del contratto più vecchio della differenza di prezzo alla data di roll, così la giunzione è senza soluzione di continuità. Le serie non aggiustate mantengono ogni prezzo così come è stato realmente scambiato, al costo di un gradino visibile a ogni roll. Nessuna delle due è sbagliata — le serie aggiustate sono migliori per i livelli di lungo periodo e la continuità degli indicatori; le serie non aggiustate preservano i veri prezzi stampati.

## Vedilo in DeepCharts

- [[chart-display-options]] — l'interruttore **ETH Session** nel menu a discesa a due candele (attivo di default) commuta un grafico tra la sessione completa e il solo RTH.
- [[price-chart-settings]] — lo stesso interruttore come **RTH - only**, più **CUSTOM TIME SESSION** per la tua finestra di sessione personalizzata (per esempio solo le prime due ore dopo l'apertura), **LINE START DAY** per una linea verticale a ogni inizio di giornata dell'exchange, e **Continuous Contract** (None, Date, Volume, Adjusted Date, Adjusted Volume) per come lo storico si cuce attraverso i mesi contrattuali.
- [[symbol-rollover]] — come fare il rollover dei tuoi simboli al nuovo mese contrattuale.
- [[session-marker]] — un indicatore che marca i confini di sessione sul grafico.
- [[session-imbalance]] — analisi orderflow a livello di sessione; vedi il suo riferimento dell'indicatore.
- [[gaps-in-price]] — come distinguere un artefatto da contratto scaduto da un vero problema di dati.

## Esempio pratico

Supponi che NQ chiuda la sessione regolare a 18.500,00, poi salga lentamente overnight fino a 18.590,00 su volume leggero (numeri a titolo illustrativo). Alle 09:30 ora di New York l'apertura RTH stampa 18.575,00 e arriva volume pesante su entrambi i lati. Entro la prima ora, il prezzo rompe sotto il minimo overnight di 18.540,00 e non riesce a riconquistarlo. La lettura in chiave di struttura di sessione: il rialzo overnight era una pubblicità fatta da una folla sottile, e la folla RTH al completo l'ha rifiutata — un fatto materialmente più ribassista dello stesso break avvenuto alle 3 di notte. Un trader che usa la struttura di sessione ora osserva la chiusura RTH precedente a 18.500,00 come il prossimo livello decisionale, e pesa ogni test di livello in base a *quale sessione ha costruito il livello e quale sessione lo sta testando*.

[SCREENSHOT: Grafico intraday NQ dell'esempio pratico con il range overnight ombreggiato, annotazioni sull'apertura RTH, l'estensione fallita sopra il massimo overnight, la rottura del minimo overnight con un'impennata di volume, e la chiusura RTH precedente marcata come riferimento successivo | dc-it-understanding-market-structure-sessions-02.png]

## Letture errate comuni

- **"Un movimento è un movimento, in qualsiasi momento accada."** I movimenti overnight e RTH sono costruiti da folle diverse su volumi diversi. Pesali di conseguenza.
- **"La giornata di negoziazione inizia a mezzanotte."** Per i futures del CME la giornata dell'exchange inizia alle 18:00 ora di New York della sera precedente. Le barre giornaliere e gli strumenti ancorati alla giornata si azzerano lì, non alle 00:00.
- **"Il mio grafico è rotto — mostra candele diverse da quello del mio collega."** Controlla prima l'impostazione **ETH Session** / **RTH - only**. Un grafico solo-RTH e un grafico a sessione completa dello stesso mercato divergono legittimamente — barre diverse, massimi e minimi diversi, profili diversi.
- **"C'è un gap enorme — qualcosa è crollato."** Se il gap cade esattamente su un roll trimestrale, è probabilmente la differenza di prezzo tra i mesi contrattuali, non un evento di mercato. Una modalità di contratto continuo Adjusted lo rimuove; vedi [[price-chart-settings]].
- **"Il mio feed è morto alle 17:30."** Per gli strumenti del CME quella è la pausa di manutenzione giornaliera, non un'interruzione. I dati riprendono alle 18:00 ora di New York.

## Approfondisci

La struttura di sessione è il palcoscenico; la teoria dell'asta è lo spettacolo. Leggi [[understanding-auction-theory]] per come equilibrio, squilibrio e accettazione funzionano dentro e attraverso le sessioni, e [[understanding-volume-profile]] per gli strumenti a profilo ancorati alla sessione che rendono visibile la struttura. Quando sei pronto a mantenere i contratti aggiornati nella pratica, [[symbol-rollover]] è la guida pratica. I termini poco familiari sono raccolti nel [[glossary]].

## Articoli correlati

- [[chart-display-options]]
- [[price-chart-settings]]
- [[symbol-rollover]]
- [[understanding-auction-theory]]
- [[understanding-volume-profile]]
- [[glossary]]