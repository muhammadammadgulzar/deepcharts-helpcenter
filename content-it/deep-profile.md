---
title: "Deep Profile (Volume / Delta Profile)"
slug: "deep-profile"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "Riferimento completo per Deep Profile, l'indicatore volume-by-price di DeepCharts: tipi di profilo, periodi, divisione per sessioni, POC, picchi e valli, unione e divisione."
keywords: ["volume profile", "delta profile", "vbp", "volume by price", "profilo composite", "profilo di sessione", "poc", "unire profili", "il profilo cambia quando zoomo"]
source_hash: "904eb27456482ca1"
ai_translated: true
source_hash: "904eb27456482ca1"
---
Deep Profile è l'indicatore volume-by-price di DeepCharts: traccia l'attività di trading per prezzo anziché per tempo, disegnando un istogramma di quanto volume (o delta) è stato scambiato a ogni livello di prezzo. I vari pulsanti di profilo sul grafico abilitano tutti questo stesso indicatore — ogni pulsante è una diversa configurazione predefinita di Deep Profile.

Dove un grafico a candele risponde a "che cosa è successo e quando", un profilo risponde a "dove sono stati fatti gli affari" — quali prezzi il mercato ha accettato e quali ha rifiutato.

## Che cos'è

Deep Profile costruisce istogrammi del volume eseguito per livello di prezzo su un periodo a tua scelta — l'ultima sessione, un profilo al giorno, un unico composite su tutti i dati caricati, esattamente ciò che è visibile sullo schermo, o qualsiasi area personalizzata che selezioni. L'istogramma può mostrare il volume totale, la suddivisione ask/bid, il delta, o delta e volume insieme.

## Quando usarlo

- Vuoi localizzare i prezzi dove è stata fatta la maggior parte degli affari — supporti/resistenze fondati sul volume effettivamente scambiato, non su linee tracciate a occhio.
- Fai trading sui livelli di sessione: POC del giorno precedente, nodi ad alto volume e vuoti a basso volume.
- Vuoi confrontare la pressione in acquisto e in vendita per prezzo (profili Ask/Bid o Delta).
- Hai bisogno del profilo di un'area specifica — una congestione, uno swing, un picco da news — tramite i periodi Visible o Custom.

## Avvio rapido

1. Apri un grafico e aggiungi **Deep Profile** dal pulsante **Indicators** del grafico (oppure fai clic su uno dei pulsanti di profilo — sono preset di questo indicatore).
2. Apri le impostazioni e imposta **VBP Type** su **Volume Profile**.
3. Imposta **VBP Period** su **Multiple** con **Length Type** = Days e un **Length Value** di 1 per un profilo al giorno.
4. Applica — ogni giorno mostra ora il proprio istogramma di volume. Prova il profilo dal vivo qui sotto: passa il mouse sulle righe e trascina la Value Area % per vedere come rispondono il POC e i confini VAH/VAL.

[WIDGET: volume-profile-lab]

### Configurazione iniziale consigliata

Suggerimenti, non valori predefiniti:

| Area | Punto di partenza suggerito |
|---|---|
| **VBP Type** | Prima **Volume Profile**; aggiungi in seguito un **Delta Profile** per vedere la pressione direzionale |
| **VBP Period** | **Multiple**, Length Type = Days, Length Value = 1 |
| **Input Data** | **Volume**; prova **Aggregate** quando ti interessano i grandi ordini ricostruiti (vedi [[different-types-of-input]]) |
| **Raggruppamento dei tick** | **Automatic**; passa a Manual con Manual Tick = 1 se i tuoi livelli si spostano quando zoomi |
| **POC** | Abilitato, con **Show Line** attivo così il livello si estende visibilmente |
| **Peak and Valley** | Abilitali quando ti senti a tuo agio — inizia con sensibilità più alta per nodi meno numerosi e più significativi |

## Come leggerlo

- **L'istogramma**: le barre più lunghe marcano i prezzi dove è stato scambiato più volume — aree di accettazione dove il mercato ha passato tempo a fare affari. Le barre corte marcano il rifiuto — prezzi che il mercato ha attraversato velocemente.
- **POC (Point of Control)**: il livello dove si è verificato il volume di scambi più alto all'interno del profilo. Agisce da centro gravitazionale del periodo ed è un riferimento molto osservato.
- **Developing POC**: con Line Type impostato su **Developing**, vedi la traccia storica della migrazione del POC durante la costruzione della sessione — utile per giudicare se il valore si stava spostando in su o in giù.
- **Picchi e valli**: i picchi sono nodi ad alto volume (tipicamente mostrati in rosso) dove il prezzo tende a rallentare; le valli sono zone a basso volume (tipicamente verdi) che il prezzo tende ad attraversare rapidamente.
- **Profili delta**: un delta positivo a un livello significa che lì i compratori aggressivi hanno superato i venditori aggressivi; un delta negativo prolungato dentro un'area a basso volume può segnalare vendite di iniziativa.

Per i concetti di base — area di valore, HVN/LVN, e come i profili inquadrano una giornata di trading — vedi [[understanding-volume-profile]]. Se vuoi solo i livelli chiave (POC, area di valore, VWAP) senza l'istogramma, usa [[deep-profile-values]].

## Riferimento delle impostazioni

Raggruppate come nella finestra di dialogo dell'indicatore.

### General settings

| Impostazione | Che cosa fa |
|---|---|
| **VBP Type** | Varietà di profilo: **Volume Profile** (volume totale scambiato a ogni livello di prezzo), **Ask/Bid Volume Profile** (pressione in acquisto e in vendita separate), **Delta Profile** (differenza tra compratori e venditori aggressivi per livello), **Delta and Total Volume** (delta a sinistra, volume a destra) |
| **VBP Period** | Ambito dei dati: **Latest** (solo il profilo più recente), **Multiple** (profili separati per periodo di tempo selezionato), **Composite** (un unico profilo su tutti i dati caricati), **Visible** (profilo di esattamente i dati sullo schermo — si ricalcola mentre scorri e zoomi), **Custom** (profilo su qualsiasi area del grafico selezionata a mano, con scorciatoie sulla toolbar sinistra) |
| **Length Type / Length Value** | Frequenza dei profili — es. Length Type = Days con Length Value = 2 crea un nuovo profilo ogni due giorni. Sono supportate unità a minuti, giornaliere, settimanali e mensili |

### Data settings

| Impostazione | Che cosa fa |
|---|---|
| **Input Data** | Base di calcolo: **Volume**, **Order**, **Aggregate**, o **Number of Trades** (conteggi delle singole transazioni invece del volume totale). Tipi di input diversi producono forme di profilo visibilmente diverse — vedi [[different-types-of-input]] |
| **Min and Max Filter** | Soglie dimensionali — es. un filtro minimo di 20 esclude gli ordini più piccoli di 20 |
| **Tick Grouping** | Altezza delle barre: **Automatic** (calcolata da DeepCharts) o **Manual** (es. Manual Tick = 5 raggruppa cinque tick per barra) |

> **Nota:** Con il raggruppamento automatico dei tick, le altezze delle barre — e quindi i prezzi esatti di POC/livelli — possono spostarsi quando zoomi la scala dei prezzi. Per bloccare i livelli, imposta il raggruppamento su Manual con Manual Tick = 1.

### Filter / Split Time

| Impostazione | Che cosa fa |
|---|---|
| **Filter Mode: Splitted** | Disegna più profili all'interno della stessa giornata di trading — ad esempio profili di sessione ETH e RTH separati |
| **Filter Mode: Triple + Custom Time** | Tre profili separati al giorno su intervalli di tempo personalizzati |

> **Attenzione:** Gli orari dei filtri personalizzati usano il fuso orario dell'exchange dello strumento su cui fai trading — sempre, indipendentemente dal tuo orologio locale. Inserire qui orari locali costruisce silenziosamente profili sulle ore sbagliate.

### POC of Profile

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Attiva o disattiva la visualizzazione del POC — il livello con il volume scambiato più alto |
| **Highlight Enable / Color** | Evidenzia la barra del POC con un colore personalizzato |
| **Show Line / Line Type** | Disegna una linea orizzontale del POC; **Developing** mostra le posizioni storiche del POC durante la sua migrazione |
| **Extended Line Till End Window** | Estende la linea del POC su tutto il grafico visibile |
| **Line Color / Width** | Stile della linea del POC |

### Peak and Valley

| Impostazione | Che cosa fa |
|---|---|
| **Peaks / Valleys** | Evidenzia i nodi ad alto volume (peaks) e le zone a basso volume (valleys) |
| **Sensitivity** | Una sensibilità più alta filtra il rumore — rilevamenti meno numerosi ma più significativi |

[SCREENSHOT: Finestra delle impostazioni di Deep Profile aperta sulla sezione General settings con i menu a discesa VBP Type e VBP Period | dc-it-deep-profile-01.png]

### Unire e dividere i profili

Fai clic con il tasto destro del mouse su qualsiasi profilo sul grafico per combinare o dividere i periodi: unisci con il profilo precedente o successivo, dividi di nuovo un profilo unito, o reimposta per annullare tutte le unioni. Usalo per combinare ieri e oggi in un'unica distribuzione, o per isolare una singola sessione da un composite.

[SCREENSHOT: Menu contestuale del tasto destro su un profilo con le opzioni di unione, divisione e reimpostazione | dc-it-deep-profile-02.png]

## Suggerimenti ed errori comuni

- **"Vedo solo un unico grande profilo / ne voglio uno al giorno."** VBP Period = Composite costruisce un unico profilo su tutto. Passa a **Multiple** con Length Type = Days, Length Value = 1. Nota anche che l'impostazione dei giorni da caricare del grafico limita quanto indietro possono esistere i profili — aumenta i giorni caricati se mancano profili più vecchi.
- **"Il profilo cambia quando zoomo."** O VBP Period è **Visible** (ricalcolare sulla vista è il suo scopo), o il raggruppamento automatico dei tick sta ridimensionando le barre — imposta Manual Tick = 1 per bloccare i livelli.
- **"La forma del mio profilo differisce da un'altra piattaforma."** Confronta il tipo di Input Data, i filtri Min/Max, il raggruppamento dei tick e la divisione delle sessioni ETH/RTH prima di presumere dati errati — ciascuno cambia legittimamente la forma.
- **Profilo di una sola congestione:** VBP Period = **Custom** e seleziona l'area, oppure **Visible** e inquadra l'area sullo schermo.
- **Profili separati per overnight e RTH:** Filter Mode = **Splitted** con l'opzione RTH (due profili al giorno), oppure **Triple** con intervalli di tempo personalizzati.

## Articoli correlati

- [[understanding-volume-profile]]
- [[deep-profile-values]]
- [[deep-profile-swing]]
- [[profile-chart-window]]
- [[different-types-of-input]]
- [[indicator-layout]]