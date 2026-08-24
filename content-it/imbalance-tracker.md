---
title: "Imbalance Tracker"
slug: "imbalance-tracker"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Riferimento per l'indicatore Imbalance Tracker: come rileva le zone di squilibrio buy/sell, come funzionano le zone fresh e triggered, e ogni impostazione spiegata."
keywords: ["imbalance tracker", "zone di squilibrio", "squilibri impilati", "squilibrio buy sell", "squilibrio orderflow", "imbalence tracker", "fresh zone", "triggered zone"]
source_hash: "ae78c233e8f7d886"
ai_translated: true
source_hash: "ae78c233e8f7d886"
---
L'Imbalance Tracker è uno strumento avanzato di analisi di mercato che identifica e monitora gli squilibri tra ordini di acquisto e di vendita — i punti in cui un lato del mercato ha scambiato in modo molto più aggressivo dell'altro. Quando diversi squilibri si impilano su livelli di prezzo consecutivi, l'indicatore marca l'area come una zona sul tuo grafico e continua a tracciarla finché il prezzo non vi ritorna.

Viene usato principalmente nel trading orderflow: le zone che disegna sono gli stessi squilibri impilati che troveresti manualmente su un grafico footprint, rilevati e gestiti per te in automatico.

## Cos'è

A ogni livello di prezzo l'indicatore confronta gli acquisti aggressivi con le vendite aggressive. Quando la differenza supera le tue soglie di percentuale e volume — e un numero sufficiente di livelli consecutivi concorda — traccia una zona di squilibrio. Le zone hanno due stati: **Fresh Zone** (il prezzo non è ancora tornato a testare l'area) e **Triggered Zone** (il prezzo vi è rientrato).

## Quando usarlo

- Per trovare supporti e resistenze da squilibri impilati senza leggere ogni footprint barra per barra.
- Per monitorare quali zone di squilibrio sono ancora non testate (fresh) e quali sono già state rivisitate.
- Per ricevere un avviso nel momento in cui si forma una nuova area di squilibrio significativa.
- Per aggiungere contesto di orderflow a un normale grafico a candele senza cambiare tipo di grafico.

## Avvio rapido

1. Aggiungi **Imbalance Tracker** al tuo grafico.
2. Nelle impostazioni degli squilibri, rivedi **Minimum Imbalance %** e **Minimum Volume Diff** — questi due filtri decidono quanto significativa deve essere una differenza prima di contare.
3. Imposta **Min. Num. Of Consecutive Imb** per richiedere squilibri impilati invece di squilibri isolati; valori più alti producono zone meno numerose ma più forti.
4. Nelle impostazioni di plot, scegli valori distinti per **Buy Color** e **Sell Color** così le zone lato acquisto e lato vendita sono inconfondibili.
5. Facoltativamente attiva gli avvisi così le nuove zone ti vengono notificate con un suono e un popup.

[SCREENSHOT: Un grafico a candele con l'Imbalance Tracker attivo, che mostra una zona di squilibrio fresh lato acquisto che si estende a destra da un impulso rialzista e una zona triggered attenuata sopra di essa | dc-it-imbalance-tracker-01.png]

## Come leggerlo

Una zona lato acquisto marca i livelli in cui i compratori aggressivi hanno sopraffatto i venditori; nella logica dell'orderflow quei livelli agiscono spesso da supporto su un retest, perché i partecipanti che vi hanno comprato potrebbero difendere l'area. Le zone lato vendita sono l'immagine speculare e agiscono spesso da resistenza.

Anche lo stato della zona porta informazione. Una **Fresh Zone** non è testata — il mercato non è ancora tornato a verificare se il lato aggressivo la difenderà. Una volta che il prezzo entra nell'area, questa diventa una **Triggered Zone** e viene ricolorata, dicendoti che il livello è già stato consumato almeno una volta. Con **Trigger Only Touch** attivo, la visualizzazione triggered è limitata alle zone che il prezzo ha ritestato almeno una volta.

Per la teoria di fondo su compratori aggressivi, venditori e delta, vedi [[orderflow-101]]; per come appaiono gli squilibri dentro le singole barre, vedi [[reading-a-footprint]] — oppure esploralo direttamente qui sotto regolando il rapporto di squilibrio diagonale e osservando quali coppie bid×ask si illuminano:

[WIDGET: footprint-lab]

## Riferimento impostazioni

### Imbalance Settings

| Impostazione | Cosa fa |
|---|---|
| **Minimum Imbalance %** | La differenza percentuale minima tra ordini di acquisto e di vendita perché un livello si qualifichi — il filtro di significatività. |
| **Minimum Volume Diff** | La soglia di volume che deve essere superata prima che uno squilibrio venga rilevato. Alzala sugli strumenti attivi per ignorare le differenze trascurabili. |
| **Include zero on imbalance** | Se i tick con volume zero su un lato vengono inclusi nel calcolo dello squilibrio. |
| **Min. Num. Of Consecutive Imb** | Quanti livelli di prezzo consecutivi in squilibrio sono richiesti prima che l'indicatore marchi un'area. |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Num. Extended Bars** | Per quante barre in avanti una zona viene disegnata sul grafico. |
| **Line Width** | Spessore delle linee di evidenziazione delle zone. |
| **Fresh Zone** | Visualizza le aree di squilibrio che il prezzo non ha ritestato, con opzioni separate **Buy Color** e **Sell Color**. |
| **Triggered Zone** | Mostra le zone che il prezzo ha attraversato, con le opzioni **Enable**, **Trigger Only Touch**, **Buy Trig Color** e **Sell Trig Color**. |

### Alert Settings

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Attiva le notifiche con suono e popup quando viene generato un segnale. |
| **Alert-Name** | Seleziona quale suono di notifica viene riprodotto. |
| **Popup-message** | Personalizza il testo mostrato nel popup. |

[SCREENSHOT: La finestra delle impostazioni dell'Imbalance Tracker che mostra il gruppo Imbalance Settings con Minimum Imbalance %, Minimum Volume Diff, Include zero on imbalance e Min. Num. Of Consecutive Imb | dc-it-imbalance-tracker-02.png]

## Suggerimenti ed errori comuni

- **Un conteggio consecutivo troppo basso significa rumore.** Un singolo livello in squilibrio è comune; richiedere diversi livelli consecutivi è ciò che rende una zona significativa.
- **Regola le soglie di volume per ogni strumento.** Un **Minimum Volume Diff** che funziona su un future su indice liquido segnalerà tutto su un contratto sottile — e viceversa.
- **Pensa ai print a zero.** **Include zero on imbalance** cambia cosa conta come squilibrio sui livelli dove un lato non ha scambiato nulla; prova entrambe le impostazioni sul tuo mercato.
- **Osserva lo stato della zona, non solo la sua posizione.** Un livello già triggerato ripetutamente non è lo stesso trade di una zona fresca e non testata.
- **Mantieni il grafico leggibile.** Valori grandi di **Num. Extended Bars** lasciano molte vecchie zone sullo schermo; accorcia l'estensione se il grafico si affolla.

## Articoli correlati

- [[orderflow-101]]
- [[reading-a-footprint]]
- [[imbalance-rejector]]
- [[deep-print]]
- [[different-types-of-input]]
- [[indicator-layout]]