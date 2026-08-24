---
title: "Deep Profile Values"
slug: "deep-profile-values"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "8 min read"
description: "Riferimento per Deep Profile Values: traccia POC, area di valore, VWAP con deviazioni, picchi e valli come linee di livello pulite — inclusi i POC naked (vergini)."
keywords: ["profile values", "vbp values", "naked poc", "poc vergine", "linee value area", "deviazioni vwap", "developing poc", "linea poc"]
source_hash: "78422ac7afc4caac"
ai_translated: true
source_hash: "78422ac7afc4caac"
---
Deep Profile Values (chiamato anche VBP Values) traccia sul grafico i valori chiave dell'analisi volume-by-price — Volume POC, Value Area, VWAP con deviazioni standard, Peaks e Valleys — senza disegnare le distribuzioni di volume stesse. Ottieni i livelli che contano su un grafico pulito.

Dove [[deep-profile]] mostra l'istogramma completo, questo indicatore ne estrae solo gli output, e aggiunge una logica di estensione delle linee abbastanza potente da tracciare i POC naked (vergini) — livelli che il prezzo non è mai tornato a toccare.

## Che cos'è

L'indicatore calcola un profilo del volume su un periodo che definisci tu (composite, multipli, visibile o personalizzato) e poi disegna solo i livelli di riferimento risultanti come linee: il point of control, i confini dell'area di valore, il VWAP e le sue bande di deviazione, e i nodi ad alto/basso volume. Ogni famiglia di linee ha i propri controlli di visualizzazione, estensione e stile, più un riepilogo dati opzionale per profilo.

Il profilo dal vivo qui sotto mostra da dove provengono quei livelli — il POC e i confini dell'area di valore poggiano sull'istogramma da cui sono calcolati. Trascina la Value Area % per vedere muoversi VAH e VAL.

[WIDGET: volume-profile-lab]

## Quando usarlo

- Fai trading sui livelli del profilo (POC, VAH/VAL, VWAP) ma vuoi candele leggibili — nessun istogramma sovrapposto.
- Tracci i POC naked/vergini attraverso i giorni: livelli mai toccati che spesso agiscono da calamite alla rivisitazione.
- Vuoi il VWAP con bande a ±1/±2/±3 deviazioni standard ancorate a un periodo di profilo.
- Vuoi i livelli chiave di più periodi sullo schermo contemporaneamente (l'impostazione **Number of Profiles**).

## Avvio rapido

1. Apri un grafico e aggiungi **Deep Profile Values** dal pulsante **Indicators** del grafico.
2. Imposta **VBP Period** su **Multiples** con **Length Type** = Days e **Length Value** = 1 così ogni giorno produce il proprio set di livelli.
3. Nella sezione **POC**, attiva **Enable** e imposta **Extend Line** su **Till Interaction**.
4. In **Value Area**, abilita le linee con **% Value Area** = 70.
5. Applica — il POC e i confini dell'area di valore di ogni giorno vengono ora disegnati come linee, e le linee del POC che il prezzo non ha ancora rivisitato continuano a estendersi: quelli sono i tuoi POC naked.

[SCREENSHOT: Grafico con Deep Profile Values attivo che mostra le linee dei POC giornalieri e dei confini dell'area di valore; una linea POC più vecchia si estende intatta per diversi giorni, annotata come POC naked | dc-it-deep-profile-values-01.png]

## Come leggerlo

- **POC** — il prezzo a maggior volume del periodo. Può essere mostrato fisso, developing (aggiornato in tempo reale al variare del volume), o con evidenziazione delle zone di spostamento.
- **Value Area** — la fascia di prezzo che contiene la percentuale configurata del volume del periodo (il 70% è la scelta convenzionale). I suoi confini alto e basso sono i classici riferimenti VAH/VAL.
- **VWAP** — il prezzo medio ponderato per il volume. Scambiare sopra di esso significa pagare più della media ponderata per il volume — "caro" rispetto agli affari della sessione; sotto è "conveniente". Le istituzioni lo usano come benchmark di esecuzione.
- **Deviazioni standard del VWAP** — ±1 è l'intervallo tipico in cui il prezzo di solito rimane; ±2 marca condizioni significativamente tirate; ±3 è raro e segnala un movimento estremo.
- **Peaks e Valleys** — i peaks sono aree concentrate ad alto volume (forte interesse del mercato); le valleys sono vuoti a basso volume che il prezzo tende ad attraversare rapidamente.
- **Livelli naked (vergini)** — con **Extend Line** = **Till Interaction**, una linea si ferma nel momento in cui il prezzo la tocca. Qualsiasi linea che continua a estendersi non è mai stata rivisitata: un POC naked o un livello non testato. Questa è la meccanica chiave dell'indicatore.

Vedi [[understanding-volume-profile]] e [[understanding-vwap]] per i concetti alla base di questi livelli.

## Riferimento delle impostazioni

Raggruppate come nella finestra di dialogo dell'indicatore.

> **Nota:** L'opzione di estensione continua della linea è indicata come **Till End Window** in alcune sezioni e **Till End Interaction** in altre. [CONFIRM: exact label of the continuous Extend Line option in each section of the Deep Profile Values dialog]

### General settings

| Impostazione | Che cosa fa |
|---|---|
| **VBP Period** | Intervallo di riferimento: **Composite** (tutti i dati caricati in un unico profilo), **Multiples** (profili separati per intervallo di tempo), **Visible** (basato sulla porzione di grafico attualmente visibile), **Personalized** (periodo manuale da date/orari specifici) |
| **Length Type** | Unità di misura del profilo: Minutes, Days, Weeks, Months o Volume |
| **Length Value** | Quante unità di Length Type copre ogni profilo |

### Custom Period

| Impostazione | Che cosa fa |
|---|---|
| **Start Date/Time** | Inizio del periodo quando VBP Period è impostato sulla modalità personalizzata |

### Data settings

| Impostazione | Che cosa fa |
|---|---|
| **Input Data** | Base di calcolo: **Volume** (volume totale per livello), **Order** (quantità di ordini in acquisto/vendita), **Aggregate Trades** (scambi combinati allo stesso prezzo), **Number of Trades** (frequenza delle transazioni per livello). Vedi [[different-types-of-input]] |
| **Filter Min** | Soglia minima di volume per l'inclusione |
| **Max Filter** | Tetto massimo, che esclude i volumi molto grandi che distorcono |

### Auto Grouping

| Impostazione | Che cosa fa |
|---|---|
| **Type** | **Automatic** (adatta il raggruppamento dei tick al mercato) o **Manual** (lo specifichi tu) |
| **Grouping Factor** | Intensità dell'aggregazione in modalità Automatic — più alto significa più aggregazione |
| **Tick in Manual** | Quantità di tick raggruppati in modalità Manual |

### Plot settings

| Impostazione | Che cosa fa |
|---|---|
| **Number of Profiles** | Quanti profili mostrano i propri valori simultaneamente per il periodo selezionato |

### POC

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Mostra il POC — il livello di prezzo a maggior volume |
| **Show Line** | Metodo di visualizzazione: **Show** (linea fissa al livello di volume massimo), **Developing** (linea dinamica che si aggiorna al muoversi del POC), **Extend Shifted** (evidenzia le zone in cui il POC si è spostato durante la sua evoluzione) |
| **Extend Line** | **None** (nessuna estensione oltre il periodo), **Till Interaction** (si estende finché il prezzo tocca o supera il livello — le linee sopravvissute sono i POC naked), **Till End Window** (continua su tutto il grafico) |
| **Line-Color / Line Width** | Stile della linea del POC |
| **Dev. POC Start Time** | Quando inizia il calcolo del POC dinamico (developing) |
| **Shifted POC Tick Grouping** | Quanti tick si raggruppano prima che una posizione del POC conti come spostata |
| **Opacity POC Grouping** | Visibilità della visualizzazione del POC raggruppato — più alto è più visibile |

### Value Area

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Mostra l'area di valore — la fascia che contiene la percentuale impostata di volume |
| **% Value Area** | La soglia percentuale (es. 70% disegna la fascia che contiene il 70% del volume totale) |
| **Show Line** | Disegna le linee che delimitano il Value Area High e Low |
| **Developing** | Modalità dinamica — traccia gli spostamenti dell'area di valore al variare del volume scambiato |
| **Extend Line** | **None**, **Till Interaction**, o continua su tutto il grafico |
| **Line Color / Line Width** | Stile delle linee dell'area di valore |

### Peaks e Valleys

| Impostazione | Che cosa fa |
|---|---|
| **Sensitivity** | Precisione del rilevamento — più alta dà meno rilevamenti (più significativi), più bassa ne dà di più |
| **Exclude High/Low** | Rimuove automaticamente picchi/valli nelle zone estreme superiore e inferiore del profilo |
| **Peak: Enable / Minimum Volume / Extend Line / Line Width / Line Color** | Visualizzazione delle linee dei picchi, la loro soglia di volume, modalità di estensione (None, Till Interaction, Till End Window) e stile |
| **Valley: Enable / Minimum Volume / Extend Line / Line Width / Line Color** | Gli stessi controlli per le linee delle valli |

### VWAP

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Mostra la linea del VWAP |
| **Extend Line** | **None**, **Till Interaction**, o continua su tutto il grafico |
| **Line Color / Line Width** | Stile della linea del VWAP |
| **Developing VWAP** | VWAP dinamico in tempo reale che si aggiorna con ogni nuovo volume |
| **Enable Bands** | Mostra l'inviluppo di deviazioni standard attorno al VWAP |
| **Envelope Settings** | Apre la personalizzazione delle bande, incluso quante deviazioni standard disegnare |

### Summary

| Impostazione | Che cosa fa |
|---|---|
| **Enable-Summary** | Mostra un riepilogo dati per profilo — volume totale, delta, scambi, tick e statistiche correlate |
| **Volume Summary** | Mostra il volume totale scambiato |
| **Trade Summary** | Mostra il conteggio totale delle transazioni per il periodo del profilo |
| **Text Color / Ask Color / Bid Color** | Colori per il testo del riepilogo e per i suoi valori di volume ask/bid |

### Customized Timetable

| Impostazione | Che cosa fa |
|---|---|
| **Filter Mode** | **None** (tutti i dati, senza filtri), **Filter** (un filtro temporale personalizzato su un periodo specifico), **Split** (divide il profilo per sessioni, es. mattina/pomeriggio) |
| **Ini Session / End Session** | Orari di inizio e fine della sessione di trading |

> **Attenzione:** Gli orari di sessione della Customized Timetable fanno riferimento esclusivamente al fuso orario statunitense. Se fai trading da un'altra regione, converti i confini delle tue sessioni prima di inserirli, altrimenti i profili copriranno le ore sbagliate.

[SCREENSHOT: Finestra delle impostazioni di Deep Profile Values aperta sulla sezione POC con i menu a discesa Show Line ed Extend Line, con Till Interaction selezionato | dc-it-deep-profile-values-02.png]

## Suggerimenti ed errori comuni

- **A caccia di POC naked:** imposta l'**Extend Line** del POC su **Till Interaction** — le linee che sopravvivono sono i livelli mai toccati. Con **Till End Window** ogni linea si estende per sempre e la distinzione naked/testato scompare.
- **Troppe linee di picchi/valli:** aumenta **Sensitivity** — valori più alti danno rilevamenti meno numerosi ma più significativi — e usa la soglia **Minimum Volume** di ogni famiglia di linee.
- **I livelli si spostano quando zoomi:** il raggruppamento Automatic ricalcola le altezze delle barre; imposta il raggruppamento su Manual (Tick in Manual = 1) per bloccare i prezzi dei livelli.
- **I valori non concordano con il tuo istogramma Deep Profile:** confronta VBP Period, Input Data e raggruppamento tra i due indicatori — calcolano in modo indipendente con le proprie impostazioni.
- **Schermo sovraccarico:** questo indicatore può disegnare POC, VA, VWAP, bande, picchi e valli allo stesso tempo. Abilita una famiglia alla volta e mantieni solo quello su cui fai davvero trading.

## Articoli correlati

- [[deep-profile]]
- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[vwap-envelopes]]
- [[dynamic-poc]]
- [[different-types-of-input]]