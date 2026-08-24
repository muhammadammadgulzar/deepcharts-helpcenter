---
title: "Gap Detector"
slug: "gap-detector"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Evidenzia automaticamente i gap di prezzo sul grafico, filtrati per percentuale o dimensione in tick, e tracciali finché non vengono riempiti."
keywords: ["gap detector", "gap di prezzo", "riempimento del gap", "gap di apertura", "gap up", "gap down", "gap non riempito", "indicatore gap"]
source_hash: "cc6357e1fbe5a33c"
ai_translated: true
source_hash: "cc6357e1fbe5a33c"
---
Un gap di prezzo — un'area che il mercato ha saltato senza scambiare — è uno dei livelli di riferimento più antichi dell'analisi tecnica. Il Gap Detector evidenzia automaticamente qualsiasi gap di prezzo sul grafico, così non dovrai mai più scorrere indietro alla ricerca dell'area non scambiata che il prezzo potrebbe tornare a riempire.

Sei tu a definire cosa conta come gap (per percentuale o per tick), e l'indicatore marca i gap qualificati con colori distinti per i casi rialzisti e ribassisti.

## Cos'è

Il Gap Detector analizza il grafico alla ricerca dei punti in cui il prezzo è saltato da una barra alla successiva, lasciando in mezzo una zona non scambiata, ed evidenzia quelle zone. Poiché sui grafici intraday veloci i gap minuscoli sono continui, l'indicatore include un filtro di dimensione minima: scegli se un gap deve coprire almeno una data **percentuale** del prezzo o un dato **numero di tick** prima di essere marcato.

> **Nota:** Questo indicatore marca i gap di mercato autentici. Se il tuo grafico mostra candele mancanti o tratti vuoti causati da problemi di dati, si tratta di un problema diverso — vedi [[gaps-in-price]].

## Quando usarlo

- Per tracciare i gap aperti (non riempiti) come target di prezzo — il "riempimento del gap" è un'idea di trade molto seguita, specialmente per i gap di apertura.
- Per marcare i bordi dei gap come supporti e resistenze: i confini di una zona non scambiata spesso producono reazioni su un retest.
- Per filtrare la significatività: con un minimo in tick o in percentuale vedi solo i gap abbastanza grandi da contare per la tua strategia.
- Per rivedere rapidamente le aperture di sessione — con l'indicatore attivo i gap overnight e del fine settimana risaltano immediatamente.

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a forma di grafico a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "Gap Detector" e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprirne le impostazioni. Scegli il tuo **Gap Mode**: **Tick** è la scelta naturale per i futures (imposta **Tick Value** su una dimensione significativa per il tuo strumento), mentre **Percentual** scala con il prezzo e funziona su strumenti diversi.
5. Imposta colori chiaramente diversi per i gap rialzisti e ribassisti e regola l'opacità in modo che le evidenziazioni non nascondano le candele.

[SCREENSHOT: Un grafico intraday sui futures con il Gap Detector attivo — una zona di gap rialzista evidenziata da un'apertura di sessione, mostrata come rettangolo ombreggiato che si estende a destra finché non viene riempita | dc-it-gap-detector-01.png]

## Come leggerlo

- **Un gap rialzista** (gap up) è una zona in cui il prezzo è saltato più in alto senza scambiare; **un gap ribassista** (gap down) è il caso speculare. L'indicatore li colora separatamente.
- **I gap aperti sono calamite e riferimenti.** Molti trader trattano un gap non riempito come potenziale target, e i suoi bordi come livelli di reazione. Nessuna delle due cose è garantita — un gap che corre con forte momentum può restare aperto a lungo.
- **Un gap che sparisce dal grafico significa che è stato riempito.** Con **Trigger Whole Bar** attivo, un gap viene rimosso solo una volta chiuso completamente — i riempimenti parziali lasciano il gap marcato, così puoi ancora tradare la porzione non scambiata rimanente.
- **La dimensione conta.** I gap che superano appena il tuo filtro minimo sono rumore di routine; i gap più grandi di diverse volte il minimo di solito portano informazioni sul repricing overnight o sulle news.

## Riferimento impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Gap Mode** | Determina come i gap vengono identificati e misurati. **Percentual** calcola i gap in base a un valore percentuale; **Tick** calcola i gap in base a un valore in tick. |
| **Perc Value** | Il valore percentuale minimo per il calcolo del gap — valori più piccoli rilevano gap più piccoli. Usato in modalità Percentual. |
| **Tick Value** | Il numero minimo di tick per il calcolo del gap. Usato in modalità Tick. |
| **Trigger Whole Bar** | Quando è attivo, l'indicatore elimina solo i gap chiusi completamente; i gap riempiti parzialmente restano evidenziati. |

### Colors

| Impostazione | Cosa fa |
|---|---|
| **Bullish / bearish gap colors** | Colori separati per le zone di gap up e gap down, così la direzione è leggibile a colpo d'occhio. |
| **Opacity** | Trasparenza delle zone di gap evidenziate. |

[SCREENSHOT: La finestra delle impostazioni del Gap Detector che mostra Gap Mode con le opzioni Percentual e Tick, i campi Perc Value e Tick Value, l'interruttore Trigger Whole Bar e i controlli di colore/opacità | dc-it-gap-detector-02.png]

## Suggerimenti ed errori comuni

- **Regola il minimo sul tuo strumento.** Un gap da 4 tick è significativo su alcuni prodotti e rumore costante su altri. Se il grafico è coperto di evidenziazioni, il tuo **Tick Value** o **Perc Value** è troppo piccolo per lo strumento e il timeframe.
- **Decidi come gestire i riempimenti parziali.** Con **Trigger Whole Bar** disattivato, il comportamento di rimozione dei gap è diverso — se tradi i riempimenti parziali dei gap, tienilo attivo così la zona rimanente resta visibile.
- **Distingui i gap di sessione dai salti intrabar.** Nei movimenti veloci a livello di tick possono comparire piccoli gap intraday; quelli con le statistiche di follow-through più forti sono di solito i gap di apertura di sessione. Considera il contesto di sessione di [[session-marker]] quando li classifichi.
- **Un gap è contesto, non un segnale.** Combina le zone di gap con l'orderflow o con il contesto d'asta — [[understanding-auction-theory]] spiega perché le aree non scambiate attirano il prezzo — invece di andare automaticamente contro ogni gap.

## Articoli correlati

- [[fvg-identifier]]
- [[auction-gap-tracker]]
- [[unfinished-auction]]
- [[understanding-auction-theory]]
- [[different-types-of-input]]
- [[indicator-layout]]