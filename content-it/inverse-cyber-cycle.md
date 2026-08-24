---
title: "Inverse Cyber Cycle"
slug: "inverse-cyber-cycle"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Riferimento per l'oscillatore Inverse Cyber Cycle in DeepCharts: doppia linea di ciclo, alfa di smorzamento, lunghezze dei cicli, soglie di livello e come leggere gli incroci."
keywords: ["inverse cyber cycle", "cyber cycle", "oscillatore di ciclo", "indicatore di ciclo", "punti di svolta", "cycle a", "cycle b", "smoothing alpha", "inverse cybercycle"]
source_hash: "973c470580a97a1c"
ai_translated: true
source_hash: "973c470580a97a1c"
---
L'Inverse Cyber Cycle è un oscillatore basato sui cicli, progettato per identificare punti di svolta e variazioni cicliche del momentum. Invece di una singola linea, traccia due linee di ciclo di velocità diverse che oscillano attorno a una linea dello zero, così puoi confrontare una lettura veloce del ritmo del mercato con una più lenta e ampia.

Poiché lavora con i cicli anziché con il momentum grezzo, è più utile ai trader che conoscono già le basi degli oscillatori e vogliono una lettura più anticipata delle inversioni rispetto a quella che strumenti classici come [[rsi]] o [[stochastic-oscillator]] danno di solito.

## Che cos'è

L'indicatore risponde alla domanda: dove si trova il prezzo all'interno del suo ciclo attuale, e quel ciclo sta girando? Disegna due linee in un pannello separato sotto il grafico dei prezzi:

- **Cycle A** — il ciclo più veloce. Reagisce rapidamente ai movimenti di prezzo recenti.
- **Cycle B** — il ciclo più lento. Cattura il ritmo più ampio del mercato.

Entrambe le linee oscillano attorno a un livello centrale configurabile (tipicamente zero), con soglie superiori e inferiori che segnano le condizioni di ciclo estremamente positive ed estremamente negative.

[SCREENSHOT: Grafico dei prezzi con l'Inverse Cyber Cycle in un pannello inferiore, con Cycle A e Cycle B in colori contrastanti che si incrociano vicino a un minimo di swing, con le linee dei livelli centrale, alto e basso visibili | dc-it-inverse-cyber-cycle-01.png]

## Quando usarlo

- Per temporizzare gli ingressi vicino ai punti di svolta all'interno di un trend consolidato, invece di inseguire il movimento.
- Per individuare presto le variazioni cicliche del momentum, prima che compaiano sugli oscillatori di momentum più lenti.
- Per identificare gli estremi di ciclo in ipercomprato o ipervenduto tramite le soglie di livello alto e basso.
- Per confrontare il comportamento del ciclo veloce con quello lento — l'accordo tra Cycle A e Cycle B rafforza un segnale.

## Avvio rapido

1. Apri un grafico dei prezzi — vedi [[first-chart]].
2. Fai clic sul pulsante verde **Indicators** (o premi **Ctrl I**) per aprire l'**Indicator List**.
3. Cerca **Inverse Cyber Cycle** e fai clic su **+** per aggiungerlo. Compare in un pannello dedicato sotto il prezzo.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprirne le impostazioni.
5. Come punto di partenza, mantieni le lunghezze dei cicli e lo smorzamento predefiniti, e imposta **High Level** e **Low Level** in modo simmetrico rispetto alla linea centrale, così gli estremi vengono segnalati su entrambi i lati.

[SCREENSHOT: Finestra delle impostazioni dell'Inverse Cyber Cycle aperta, con il campo Smoothing Alpha, i parametri Cycle A Length e Cycle B Length e le impostazioni dei livelli Middle/Low/High | dc-it-inverse-cyber-cycle-02.png]

## Come leggerlo

- **Incroci tra i cicli** — osserva Cycle A che incrocia Cycle B per i segnali di momentum. Un incrocio del veloce sopra il lento suggerisce momentum ciclico al rialzo; l'inverso suggerisce momentum al ribasso.
- **Soglie di livello** — letture oltre l'**High Level** indicano condizioni di ciclo in ipercomprato o estremamente positive; letture sotto il **Low Level** indicano condizioni in ipervenduto o estremamente negative. Le svolte che partono da questi estremi hanno più peso di quelle vicino alla linea centrale.
- **Punti di svolta all'interno dei trend** — l'uso principale dell'indicatore. In un trend rialzista, cerca il ciclo che scende a un estremo basso e torna a salire come potenziale ingresso in continuazione; applica la logica speculare in un trend ribassista.

## Riferimento delle impostazioni

Raggruppate come nella finestra di configurazione dell'indicatore.

### Area di visualizzazione

| Impostazione | Cosa fa |
|---|---|
| **Horizontal** | Mostra l'indicatore in un pannello orizzontale separato. |
| **Vertical** | Mostra l'indicatore in verticale. |
| Selettore del pannello | Sceglie quale pannello ospita l'indicatore. |
| Asse secondario | Interruttore per scalare l'indicatore su un asse secondario. |

### Parametri

| Impostazione | Cosa fa |
|---|---|
| **Smoothing Alpha** | Regola quanto aggressivamente il ciclo viene smorzato. Valori più bassi producono risposte più fluide ma ritardate; valori più alti accelerano le reazioni aumentando però la sensibilità al rumore. |
| **Cycle A Length** | Stabilisce il periodo del ciclo più veloce. Lunghezze più corte reagiscono più rapidamente ai movimenti di prezzo. |
| **Cycle B Length** | Definisce il periodo del ciclo più lento, catturando il ritmo più ampio del mercato. |

### Livelli

| Impostazione | Cosa fa |
|---|---|
| **Middle Level** | La linea di riferimento neutra, tipicamente zero. |
| **Low Level** | Imposta la soglia inferiore usata per identificare condizioni di ciclo in ipervenduto o estremamente negative. |
| **High Level** | Imposta la soglia superiore usata per identificare condizioni di ciclo in ipercomprato o estremamente positive. |

I colori dei livelli, lo spessore delle linee e lo stile visivo sono completamente personalizzabili.

### Subgraphs

Sia **Cycle A** sia **Cycle B** supportano colore della linea, stile della linea, spessore della linea, comportamento di colorazione automatica e visualizzazione delle etichette personalizzabili. Le opzioni di visualizzazione includono etichette con nome e valore con personalizzazione dello sfondo, e l'inclusione nel centraggio automatico.

## Suggerimenti ed errori comuni

- **Non fare trading su ogni incrocio.** Cycle A e Cycle B si incrociano di frequente nei mercati tranquilli; i segnali di massima qualità si verificano quando un incrocio parte da oltre l'High o il Low Level.
- **Adatta le lunghezze dei cicli al tuo timeframe.** Se le linee vanno avanti e indietro senza ritmo, le lunghezze sono troppo corte per il ciclo effettivo dello strumento; allunga prima Cycle B.
- **Resisti alla tentazione di stringere troppo Smoothing Alpha.** Un alfa più alto reagisce più in fretta ma amplifica il rumore — aumentalo solo se i segnali arrivano sistematicamente troppo tardi.
- **Usalo dentro un contesto di trend.** L'indicatore identifica punti di svolta all'interno dei trend; in un movimento forte a senso unico, gli estremi contro trend possono restare bloccati molto più a lungo del previsto.

## Articoli correlati

- [[know-sure-thing]]
- [[rsi]]
- [[stochastic-oscillator]]
- [[momentum]]
- [[different-types-of-input]]
- [[indicator-layout]]