---
title: "Deep Print (Footprint)"
slug: "deep-print"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "10 min read"
description: "Riferimento completo per Deep Print, l'indicatore footprint di DeepCharts: suddivisione bid/ask, delta, squilibri, POC, area di valore, cluster e layout multi-colonna."
keywords: ["footprint", "deep print", "footprint bid ask", "grafico footprint", "candele orderflow", "footprint squilibri", "footprint delta", "footprint multi colonna"]
source_hash: "5f231fe4338e78b0"
ai_translated: true
source_hash: "5f231fe4338e78b0"
---
Deep Print è lo strumento centrale di analisi volumetrica in DeepCharts — un indicatore footprint (noto anche con il nome registrato Footprint®). Fonde prezzo, volume e orderflow in singole candele, mostrando gli ordini eseguiti a ogni tick di prezzo all'interno di ogni barra invece dei soli apertura, massimo, minimo e chiusura.

I trader lo usano per individuare accelerazioni di compratori e venditori, assorbimento, esaurimento e dominanza bid/ask a ogni livello di prezzo. È completamente personalizzabile, da che cosa conteggia a come viene colorata ogni cella.

## Che cos'è

Una candela normale ti dice dove è andato il prezzo. Deep Print ti dice che cosa è stato scambiato per portarlo lì: a ogni tick di prezzo dentro la candela vedi il volume eseguito — totale, suddiviso tra bid e ask, o come delta (la differenza tra acquisti e vendite aggressivi). Sopra questa visualizzazione di base può evidenziare squilibri, il point of control della candela, l'area di valore, i cluster di volume, i single print, i livelli con ratio estremi e i pullback.

## Quando usarlo

- Fai trading orderflow e hai bisogno di vedere chi sta aggredendo a ogni prezzo, non solo dove il prezzo ha chiuso.
- Vuoi identificare l'assorbimento (volume pesante che non riesce a muovere il prezzo) e l'esaurimento agli estremi degli swing.
- Vuoi livelli di riferimento per candela: POC del volume, POC del delta e area di valore.
- Vuoi monitorare più letture contemporaneamente — Deep Print supporta fino a 4 colonne affiancate per candela (ad esempio Bid×Ask, Delta e Volume insieme).

## Avvio rapido

1. Apri un grafico e aggiungi **Deep Print** dal pulsante **Indicators** del grafico.
2. Apri le impostazioni dell'indicatore.
3. In **General settings**, imposta **Type** sulla visualizzazione che vuoi (inizia con **Ask/Bid Split** o **Delta + Total Volume**) e **Mode** su **Profile**.
4. Applica — ogni candela mostra ora il suo volume eseguito per tick.

### Il Deep Print Studio

Lo studio qui sotto è **l'intera finestra di dialogo di Deep Print, dal vivo** — ogni gruppo di impostazioni della tabella di riferimento è collegato a candele reali. Cambia **Type** tra tutte e quattro le visualizzazioni e alterna la modalità **Profile/Box**. Filtra il nastro con **Min/Max Filter** e cambia **Input Type** in Aggregate Volume o Num Trades per vedere ogni numero ricalcolarsi. **Zooma la scala dei prezzi** (rotellina del mouse sul grafico, oppure − / +) per sentire il raggruppamento automatico dei tick unire e dividere le righe — poi imposta il raggruppamento su Manual e zooma di nuovo: le righe si bloccano. Esplora tutte e quattro le **Color Modes** di sfondo e le cinque **Color Calculations**, i single print, i ratio agli estremi della barra, i cluster di volume e le barre di pullback. Premi **▶ Replay tape** per riprodurre gli scambi uno a uno: le celle crescono, gli squilibri si accendono e si spengono, il POC migra, e gli avvisi mostrano un toast (e opzionalmente un beep) quando un print supera la tua soglia. Attiva **◇ 3D tiles** e passa il mouse su una singola candela. Quando il grafico assomiglia al tuo, premi **⬇ Download my settings** — il file elenca ogni sezione della finestra di dialogo con i tuoi valori, pronto da replicare in DeepCharts.

[WIDGET: deep-print-studio]

### Configurazione iniziale consigliata

Sono suggerimenti, non valori predefiniti — adattali al tuo mercato e al tuo stile:

| Area | Punto di partenza suggerito |
|---|---|
| **Type** | **Delta + Total Volume** — lettura del delta più attività totale in un'unica vista |
| **Mode** | **Profile** — le celle a istogramma sono più facili da scorrere rispetto ai box, all'inizio |
| **Input Type** | **Volume**; passa ad **Aggregate Volume** quando cerchi ordini istituzionali frazionati (vedi [[different-types-of-input]]) |
| **Raggruppamento dei tick** | **Automatic** per iniziare; imposta **Auto Grouping** su **Manual** con **Manual Ticks** = 1 se vuoi righe che non si spostano mai quando zoomi |
| **POC** | Abilita il Volume POC così il prezzo a maggior volume di ogni candela risalta |
| **Value Area** | Abilitata con **% Value Area** = 70% |
| **Text Format** | **K** sugli strumenti ad alto volume, così 1.000 si stampa come 1K e le celle restano leggibili |

## Come leggerlo

- **Celle**: ogni riga dentro una candela è un tick di prezzo (o gruppo di tick) con il suo volume eseguito. In modalità Ask/Bid Split il lato bid registra le vendite aggressive e il lato ask gli acquisti aggressivi.
- **Delta**: volume ask meno volume bid a un livello. Un delta positivo significa che i compratori aggressivi hanno dominato lì; negativo, che lo hanno fatto i venditori aggressivi.
- **Volume POC**: il prezzo a maggior volume della candela — dove è stata fatta la maggior parte degli affari. Il **Delta POC** marca il livello con il delta netto più grande.
- **Area di valore**: la fascia di prezzo che contiene la percentuale configurata (ad esempio il 70%) del volume della candela.
- **Squilibri**: quando la differenza di volume tra bid e ask a un livello supera la tua soglia, la cella viene evidenziata — un lato ha chiaramente sopraffatto l'altro.
- **Assorbimento ed esaurimento**: volume pesante a un livello senza progresso del prezzo suggerisce ordini passivi che assorbono l'aggressione; volume in calo verso un estremo suggerisce che il movimento sta esaurendo i partecipanti. Per esempi commentati sul grafico, vedi [[reading-a-footprint]].

[SCREENSHOT: Vista ingrandita di due o tre candele Deep Print con il bordo del Volume POC, l'evidenziazione dell'area di valore e uno squilibrio in serie annotato | dc-it-deep-print-01.png]

## Riferimento delle impostazioni

Raggruppate esattamente come nella finestra di dialogo dell'indicatore.

### General settings (Tipologia)

| Impostazione | Che cosa fa |
|---|---|
| **Type** | Base della visualizzazione: **Volume** (volume totale scambiato), **Ask/Bid Split** (volume in acquisto e in vendita a confronto), **Delta** (differenza tra ask e bid), **Delta + Total Volume** (vista combinata) |
| **Mode** | **Profile** (rappresentazione a istogramma) o **Box** (valori compatti in riquadri) |

### Data settings

| Impostazione | Che cosa fa |
|---|---|
| **Input Type** | Fonte dei dati: **Volume** (volume totale scambiato per prezzo), **Aggregate Volume** (scambi aggregati), **Order** (volume del book di negoziazione), **Num Trades** (numero di esecuzioni per prezzo). Vedi [[different-types-of-input]] per quando usare ciascuno |
| **Min/Max Filter** | Esclude i valori fuori dall'intervallo definito — riduce il rumore degli scambi molto piccoli (o di quelli molto grandi che distorcono) |

### Raggruppamento dei tick

| Impostazione | Che cosa fa |
|---|---|
| **Auto Grouping** | **Automatic** (la piattaforma ottimizza il raggruppamento) o **Manual** (lo definisci tu) |
| **Auto Group Factor** | Controlla il livello di aggregazione dei tick quando è attivo Automatic |
| **Manual Ticks** | La quantità di raggruppamento quando è attivo Manual |
| **Group Mode** | **Fixed** (raggruppamento costante) o **Based on Open/Close** (raggruppamento dinamico in base al comportamento della candela) |

> **Nota:** Il raggruppamento dei tick è un'impostazione condivisa che compare in molti indicatori DeepCharts (Deep Print, Deep Profile e altri strumenti basati su profili) con gli stessi campi. Con **Automatic**, i livelli delle righe possono spostarsi quando zoomi la scala dei prezzi — per bloccarli, imposta **Auto Grouping** su **Manual** e **Manual Ticks** su 1.

### Plot settings (Bar Style)

| Impostazione | Che cosa fa |
|---|---|
| **Bar Marker Width** | Spessore del marker della candela |
| **Outside Bar Style** | Stile a barra (con ombre) o a solo corpo |
| **Marker Alignment** | Posiziona il marker a destra o al centro |
| **Outer Edge Mode** | Disegna un bordo che delimita il corpo della candela |

### Background settings

| Impostazione | Che cosa fa |
|---|---|
| **Coloration** | Personalizza la visualizzazione per volume, delta e squilibri di mercato |
| **Border Width** | Spessore del bordo del profilo del volume, in pixel |
| **Opacity** | Livello di trasparenza dello sfondo |

### Text settings

| Impostazione | Che cosa fa |
|---|---|
| **Font Size** | Dimensione del testo dentro le celle del footprint |
| **Text Format** | **Automatic** (adattato al contesto), **Normal** (numeri per esteso, senza abbreviazioni), **K** (migliaia — 1K = 1.000) |
| **Coloration** | Personalizza la resa dei numeri per un'interpretazione più facile |
| **Dynamic Text Size** | Scala automaticamente il testo con i valori di volume/delta/squilibrio — i print grandi hanno numeri grandi |
| **Increase Dynamic Text Size** | Rafforza l'effetto di ridimensionamento dinamico |
| **Show Texts-by-Zeros** | Mostra le celle con valore zero invece di lasciarle vuote |

### Colorazione dello sfondo

| Impostazione | Che cosa fa |
|---|---|
| **Color Mode** | **None**, **Fixed** (colori predefiniti, senza gradienti), **Fading** (gradiente per intensità), **More Colors** (più colori definiti dall'utente — richiede **Range Definition** = USER) |
| **Color Calculation** | Che cosa guida il colore: **Volume**, **Delta**, **Imbalance**, **Dominant Volume** (il lato maggiore per prezzo), **Dominant Volume Delta** |
| **Min. Vol. Diff. For Imbalance** | Differenza minima bid/ask perché un livello conti come squilibrato |
| **Include Zero on Imbalance** | Include nell'analisi degli squilibri i livelli senza volume su un lato |
| **Color Only Dominant Side** | Colora solo il lato di volume dominante di ogni livello |
| **Background Inferior Side** | Colore di sfondo del lato non dominante |

### Colori

| Impostazione | Che cosa fa |
|---|---|
| **Fixed-Volume Color** | Colore unico per il volume totale |
| **Fixed-Bid Color** | Colore per il volume bid (vendita) |
| **Fixed-Ask Color** | Colore per il volume ask (acquisto) |

### Range

| Impostazione | Che cosa fa |
|---|---|
| **Range Definition** | **Automatic** (definito dalla piattaforma) o USER (intervalli personalizzati) |
| **Range (Show Settings)** | Apre la configurazione degli intervalli di valori personalizzati |

### POC

| Impostazione | Che cosa fa |
|---|---|
| **Enable** (Volume POC) | Mostra il prezzo a maggior volume della candela |
| **Border Color / Border Width** (Volume POC) | Colore dell'evidenziazione e spessore del bordo del Volume POC |
| **Enable** (Delta POC) | Mostra il livello con il delta netto più grande |
| **Minimum Delta** (Delta POC) | Valore minimo di delta richiesto perché il Delta POC venga visualizzato |
| **Ask Border Color / Bid Border Color** (Delta POC) | Colori del bordo per i delta POC lato ask e lato bid |
| **Border Width** (Delta POC) | Spessore del bordo del Delta POC |

### Value Area

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Attiva o disattiva la visualizzazione dell'area di valore |
| **% Value Area** | Percentuale del volume totale usata per il calcolo (es. 70%) |
| **Highlight** | Enfatizza visivamente l'area di valore sulle candele |
| **Outside Color** | Colore per l'area esterna all'area di valore |
| **Show Line / Line Color / Line Width** | Linea di delimitazione dell'area di valore e il suo stile |

### Avvisi

| Impostazione | Che cosa fa |
|---|---|
| **Enable Sound / Alert Sound** | Interruttore della notifica sonora e selezione del suono |
| **Enable Message / Alert Message** | Interruttore del popup e testo del messaggio personalizzato mostrato |
| **Alert Minimum Volume** | Soglia minima di volume prima che un avviso scatti |

### Single Print

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Evidenzia i livelli di prezzo stampati da un singolo ordine che soddisfa i criteri |
| **Single Print Min Value** | Volume minimo perché un single print sia rilevante |
| **Enable Only On High Or Low** | Limita l'evidenziazione ai prezzi estremi della candela |
| **Border Width / Border Color** | Stile dell'evidenziazione del single print |

### Ratio

| Impostazione | Che cosa fa |
|---|---|
| **Enabled** | Mostra il ratio bid/ask agli estremi della barra |
| **Tick Offset** | Posizione del testo del ratio rispetto al massimo/minimo della barra |
| **Text Color / Text Size** | Stile del testo del ratio |
| **Min Ratio / Maximum Ratio** | Valore minimo per la visualizzazione e limite del valore massimo |

### Vol Cluster

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Evidenzia i cluster di volume |
| **Min. Volume** | Volume minimo perché un cluster conti |
| **Increase Volume Based on Tick Grouped** | Somma il volume tra tick raggruppati adiacenti |
| **Line Width / Back Color / Opacity** | Spessore del bordo del cluster, colore di sfondo e relativa opacità |

### Pull Back

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Evidenzia le barre di ritracciamento — un aiuto per lo scalping |
| **Pullback Min Source Bar Ticks** | Tick minimi nella barra di origine |
| **Pullback Min Pullback Ticks** | Distanza minima di ritracciamento in tick |
| **Bar Color** | Colore di evidenziazione delle barre di pullback |

### Layout multi-colonna

Deep Print supporta fino a 4 colonne simultanee per candela, ognuna con una lettura diversa affiancata — ad esempio Bid×Ask, Delta e Volume insieme. Per configurarlo: aggiungi più indicatori Deep Print al grafico, apri le impostazioni di ciascuno, vai su **Sizing → Multi Column**, imposta la quantità di colonne, assegna a ogni indicatore una posizione univoca e personalizza ciascuno in modo indipendente.

[SCREENSHOT: Finestra delle impostazioni di Deep Print aperta sulla sezione Sizing con Multi Column configurato, accanto a un grafico che mostra una candela resa come tre colonne affiancate (Bid×Ask, Delta, Volume) | dc-it-deep-print-02.png]

## Suggerimenti ed errori comuni

- **Numeri illeggibili o celle troppo piccole?** Aumenta **Font Size** o abilita **Dynamic Text Size**; imposta **Text Format** su **K** per compattare i numeri grandi; allarga **Bar Marker Width**; oppure usa un raggruppamento dei tick più grossolano così le celle sono meno numerose e più alte.
- **Troppe evidenziazioni di squilibrio?** Aumenta **Min. Vol. Diff. For Imbalance**, applica un **Min Filter** sui dati di input, o abilita **Color Only Dominant Side**. Anche un raggruppamento dei tick molto fine moltiplica il rumore.
- **Le tue righe non corrispondono al grafico di un altro trader?** Confronta **Input Type**, il raggruppamento dei tick (Automatic vs Manual, fattore di gruppo) e **Group Mode** — ognuno di questi cambia le celle.
- **Vuoi i numeri bid×ask e il delta allo stesso tempo?** Imposta **Type** su **Delta + Total Volume**, oppure costruisci un layout multi-colonna.
- **POC o area di valore non visibili?** Ognuno ha il proprio interruttore **Enable**; il Delta POC richiede inoltre che la sua soglia **Minimum Delta** sia soddisfatta.
- **L'avviso non scatta?** Controlla prima **Alert Minimum Volume** — e nota che gli interruttori del suono e del messaggio sono separati.

## Articoli correlati

- [[reading-a-footprint]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[deep-profile]]
- [[deep-delta]]
- [[indicator-layout]]