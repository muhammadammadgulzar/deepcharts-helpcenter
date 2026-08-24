---
title: "Auction Gap Tracker"
slug: "auction-gap-tracker"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Riferimento per l'indicatore Auction Gap Tracker: come evidenzia gli zero print e i gap a bassa partecipazione nell'asta, con ogni impostazione spiegata."
keywords: ["auction gap tracker", "zero print", "gap d'asta", "mancanza di partecipazione", "tracciamento unfinished", "indicatore zero print", "auction gap traker"]
source_hash: "d5a4c2a8188d7cbe"
ai_translated: true
source_hash: "d5a4c2a8188d7cbe"
---
L'Auction Gap Tracker identifica i gap nel processo d'asta — aree del grafico in cui manca la partecipazione di compratori o venditori — ed evidenzia questi squilibri con rettangoli colorati. Dove [[unfinished-auction]] si concentra sulle anomalie agli estremi delle barre, questo strumento traccia gli zero print e la partecipazione quasi nulla ovunque tu lo configuri per guardare, incluso all'interno delle barre.

Questo è uno strumento avanzato di orderflow: presuppone che tu comprenda gli acquisti e le vendite aggressivi sul Bid e sull'Ask. Se ti servono le basi, parti da [[orderflow-101]] e [[understanding-auction-theory]].

## Che cos'è

Ai livelli di prezzo dove un lato del nastro non ha scambiato nulla (uno zero print) o quasi nulla, l'asta ha saltato un passaggio — la partecipazione è mancata. L'Auction Gap Tracker scansiona alla ricerca di sequenze di tali livelli e, quando ne compaiono abbastanza consecutivi, disegna un rettangolo che segna il gap sul lato buy o sul lato sell. Quando in seguito il prezzo attraversa un livello evidenziato, l'opacità dell'evidenziazione diminuisce, indicando che il livello è stato attraversato.

Per vedere come appare uno zero print all'interno di una barra, passa il mouse sulle celle bid×ask nel footprint interattivo qui sotto:

[WIDGET: footprint-lab]

## Quando usarlo

- Per mappare le aree a bassa partecipazione che il prezzo potrebbe rivisitare per completare l'asta.
- Per tracciare gli zero print all'interno delle barre, non solo sui massimi e sui minimi.
- Per separare i gap non testati dai gap che sono già stati ritestati (zone attivate).
- Per ricevere un avviso sonoro quando viene rilevato un nuovo gap.

## Avvio rapido

1. Aggiungi **Auction Gap Tracker** al tuo grafico.
2. Parti in modo rigoroso: mantieni **Threshold-max. unfinished** a 0 in modo che vengano tracciati solo i veri zero print.
3. Imposta **Min. Num. Of Consecutive Zero** per richiedere una sequenza di livelli — per esempio, 5 evidenzia solo le aree con cinque o più livelli di prezzo consecutivi privi di un lato aggressivo.
4. Scegli il tuo **Include Mode**: **Intrabar** per ignorare massimi e minimi, oppure **All** per tracciare ogni gap qualificato.
5. Scegli colori distinti per buy e sell e attiva la visualizzazione delle zone attivate se vuoi mantenere sul grafico i gap ritestati.

[SCREENSHOT: Un grafico con l'Auction Gap Tracker attivo, che mostra un rettangolo di gap sul lato sell completamente opaco esteso verso destra e un rettangolo a opacità ridotta dove il prezzo ha già attraversato il livello | dc-it-auction-gap-tracker-01.png]

## Come leggerlo

Ogni rettangolo segna una sequenza di livelli di prezzo in cui un lato del mercato non ha partecipato. Un gap sul lato buy significa che i compratori aggressivi sono stati assenti su quei livelli; un gap sul lato sell significa che lo sono stati i venditori aggressivi. La logica dell'asta li considera aree incomplete che il mercato potrebbe rivisitare — simili al lavoro non finito a un estremo, ma rilevabili in qualsiasi punto della barra.

L'opacità è l'indicatore di stato: opacità piena significa che il gap è intatto dal rilevamento, mentre opacità ridotta significa che il prezzo ha attraversato il livello almeno una volta. Con **Enable Triggered Zone** attivo, i gap attraversati restano visibili nei loro colori di attivazione; con **Trigger Only Touch** attivo, vengono tracciati solo i gap che sono stati ritestati almeno una volta.

## Riferimento delle impostazioni

### Unfinished Settings

| Impostazione | Che cosa fa |
|---|---|
| **Minimum Tick Vol** | Il volume minimo richiesto sui tick in cui si verifica lo zero. |
| **Threshold-max. unfinished** | Soglia massima per il tracciamento degli Unfinished. 0 traccia solo gli zero print; 1 traccia anche i livelli in cui è stato scambiato un solo contratto sul lato Ask o Bid, e così via. |
| **Include Mode** | **Intrabar** traccia gli Unfinished solo all'interno delle barre, escludendo massimi e minimi; **All** traccia ogni livello Unfinished che soddisfa i tuoi parametri. |
| **Min. Num. Of Consecutive Zero** | Numero minimo di zeri consecutivi richiesti per attivare un'evidenziazione — per esempio, 5 evidenzia solo sequenze di cinque o più livelli di prezzo consecutivi privi di compratori o venditori aggressivi. |

### Plot Settings

| Impostazione | Che cosa fa |
|---|---|
| **Num. Extended Bars** | Per quante barre in avanti si estendono le linee dell'indicatore. |
| **Line Width** | Spessore delle linee. |
| **Buy Color** / **Sell Color** | Colori per i gap sul lato buy e sul lato sell. |
| **Enable Triggered Zone** | Quando attivo, traccia anche i gap che il prezzo ha già ritestato. |
| **Trigger Only Touch** | Quando attivo, traccia solo i gap che sono stati ritestati almeno una volta. |
| **Buy Trig Color** / **Sell Trig Color** | Colori per le zone Unfinished attraversate (attivate). |

### Alert Settings

Avvisi sonori per i segnali generati, configurabili dall'utente.

[SCREENSHOT: La finestra delle impostazioni dell'Auction Gap Tracker che mostra il gruppo Unfinished Settings con Minimum Tick Vol, Threshold-max. unfinished, Include Mode e Min. Num. Of Consecutive Zero | dc-it-auction-gap-tracker-02.png]

## Suggerimenti ed errori comuni

- **Alza la soglia in modo deliberato.** Portare **Threshold-max. unfinished** sopra 0 ridefinisce che cosa conta come gap — dai veri zero print alla partecipazione sottile. Sappi su quale definizione si basa la tua strategia.
- **Gli zeri consecutivi sono il filtro del rumore.** Gli zero print isolati sono routine; le loro sequenze sono il segnale. Aumenta **Min. Num. Of Consecutive Zero** se il grafico si riempie di evidenziazioni banali.
- **Scegli l'Include Mode con consapevolezza.** **Intrabar** esclude deliberatamente massimi e minimi — se vuoi anche le aste incompiute basate sugli estremi, usa **All** o abbina questo strumento a [[unfinished-auction]].
- **Leggi l'opacità prima di agire.** Un rettangolo sbiadito è già stato attraversato; il suo contenuto informativo è diverso da quello di un gap intatto.

## Articoli correlati

- [[understanding-auction-theory]]
- [[unfinished-auction]]
- [[imbalance-tracker]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]