---
title: "Confluence Identifier"
slug: "confluence-identifier"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "advanced"
time: "7 min read"
description: "Trova automaticamente zone di supporto e resistenza ad alta probabilità dove livelli del profilo del volume, swing di prezzo e ritracciamenti si allineano."
keywords: ["confluence identifier", "confluenza", "zone di supporto e resistenza", "livelli del volume profile", "poc value area", "zone di confluenza", "confluance"]
source_hash: "7bc29a5f36f1b302"
ai_translated: true
source_hash: "7bc29a5f36f1b302"
---
La maggior parte dei livelli di supporto e resistenza forti è forte perché più ragioni indipendenti puntano allo stesso prezzo: un POC del profilo, uno swing precedente, un livello di ritracciamento. Il Confluence Identifier automatizza questo ragionamento — identifica zone di supporto e resistenza ad alta probabilità combinando più fonti di dati di mercato ed evidenziando i prezzi dove queste si allineano.

È uno degli indicatori più configurabili di DeepCharts, quindi questo riferimento esamina ogni gruppo di impostazioni nell'ordine in cui la finestra di dialogo li presenta.

## Che cos'è

Il Confluence Identifier rileva aree di confluenza a partire da tre famiglie di evidenze:

- **Livelli del Volume Profile** — POC, bordi della Value Area, Peaks e Valleys da un massimo di tre profili Volume By Price separati.
- **Swing di price action** — massimi e minimi di swing individuati da un motore Zig Zag.
- **Livelli di ritracciamento del trend** — ritracciamenti del 38,2%, 50%, 61,8% e 75% dello swing principale.

Quando un numero sufficiente di questi elementi cade all'interno di un intervallo di prezzo definito (la tua sensibilità in tick), l'indicatore evidenzia quell'intervallo come potenziale zona di supporto o resistenza. Le zone sostenute da più confluenze vengono enfatizzate visivamente come più forti.

Se i livelli del profilo sono la famiglia che conosci meno, prova il volume profile interattivo qui sotto — passa il mouse sulle righe e trascina la percentuale della Value Area per vedere da dove nascono POC, VAH e VAL:

[WIDGET: volume-profile-lab]

## Quando usarlo

- Per costruire una mappa oggettiva dei livelli: invece di scegliere i livelli a mano, definisci le evidenze e l'indicatore assegna a ogni prezzo un punteggio in base a quante evidenze vi si accumulano.
- Per classificare le zone in base alla forza — una zona con 5 confluenze è una proposta di trading diversa da una zona con 2 confluenze, e la colorazione lo riflette.
- Per combinare analisi del profilo e price action in un'unica vista senza eseguire mezza dozzina di studi separati.
- Per inquadrare le operazioni: le zone di confluenza sono posizioni naturali per ingressi, stop e target quando si allineano con la tua lettura direzionale.

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a istogramma nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "Confluence Identifier" e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprire le sue impostazioni. Inizia con moderazione: abilita un solo profilo Volume By Price e gli swing dello Zig Zag, e lascia disattivati i ritracciamenti finché non hai preso confidenza con l'output.
5. Man mano che abiliti più fonti, aumenta **Minimum Number of Confluences** e riduci **Tick Sensitivity**, così sopravvivono solo le zone più significative. Una configurazione di esempio tratta dalla documentazione usa tre Volume Profile, gli swing di prezzo e i ritracciamenti dell'ultimo swing, con un minimo di 5 confluenze e sensibilità di 3 tick.

[SCREENSHOT: Un grafico futures con il Confluence Identifier attivo — diverse zone di supporto/resistenza ombreggiate con intensità di colore variabile, la zona più forte situata dove si allineano un POC del profilo, un minimo di swing e un livello di ritracciamento | dc-it-confluence-identifier-01.png]

## Come leggerlo

- **Ogni zona evidenziata è un intervallo di prezzo in cui più elementi si sono allineati** entro la tua sensibilità in tick. Le zone sopra il prezzo agiscono da resistenza candidata, quelle sotto da supporto candidato.
- **Il colore codifica la forza.** Le impostazioni Support & Resistance Colors legano il colore della zona al numero di confluenze, così le zone più forti (più confluenze) risaltano — trattale come i livelli decisionali primari.
- **Meno zone più ampie oppure più zone più strette: il compromesso è tuo.** Valori più piccoli di **Tick Sensitivity** producono zone più precise; valori più grandi zone più ampie. Un **Minimum Number of Confluences** più alto genera zone meno numerose ma più forti.
- **Le zone sono posizioni, non direzioni.** L'indicatore ti dice dove è probabile una reazione, non da che parte romperà il prezzo; combinalo con la tua lettura di trend e orderflow.

## Riferimento delle impostazioni

### Data Settings

| Impostazione | Cosa fa |
|---|---|
| **Input Data** | Cosa misurano i profili: **Volume** (volume scambiato a ogni livello di prezzo) o **Orders** (numero di ordini eseguiti). Vedi [[different-types-of-input]]. |
| **Filter Min** | Soglia minima che filtra i valori insignificanti. |
| **Filter Max** | Soglia massima; 0 = nessun filtro massimo. |

### Confluence Settings

| Impostazione | Cosa fa |
|---|---|
| **Tick Sensitivity** | L'intervallo di prezzo, in tick, entro cui gli elementi contano come allineati. Valori più piccoli = zone più precise; valori più grandi = zone più ampie. |
| **Minimum Number of Confluences** | Quanti elementi devono allinearsi per creare una zona. Valori più alti generano zone meno numerose ma più forti; valori più bassi producono zone più frequenti. |
| **Starting Mode** | Da dove inizia il calcolo: **Zig Zag** (usa gli swing di prezzo basati sulla logica Zig Zag) o **Date** (parte da una data specifica). |
| **Start Date** | La data di partenza, usata quando è selezionata la modalità **Date**. |
| **Absolute % of Reversal for Zig Zag Trend** | L'inversione minima di prezzo usata per identificare i punti di swing che determinano l'inizio del calcolo. |
| **Number of Swings** | Quanti swing vengono considerati nel determinare il punto di partenza del calcolo. |

### Zig Zag Swing Settings

| Impostazione | Cosa fa |
|---|---|
| **% Absolute Variation for Zig Zag Inversion** | La percentuale di inversione di prezzo usata per identificare gli swing che alimentano il calcolo delle confluenze. |
| **Enable Zig Zag Swing** | Include massimi e minimi di swing come elementi di confluenza. |
| **Include Swings in the First Half** | Abilitato: i punti di swing più vecchi vengono inclusi. Disabilitato: vengono considerati solo gli swing recenti. |

> **Nota:** In questo indicatore ci sono due Zig Zag, e svolgono compiti diversi. Il primo (in Confluence Settings) serve solo a determinare la data di inizio del calcolo e può usare una percentuale più grande. Il secondo (qui) identifica gli swing usati per le confluenze e dovrebbe usare una **percentuale più piccola**, così anche gli swing minori vengono inclusi.

### Volume By Price Profiles

È possibile abilitare fino a tre profili Volume By Price separati, ciascuno con il proprio blocco:

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Attiva o disattiva questo profilo. |
| **Profile Settings** | Tipo di profilo — Daily, Weekly, Monthly o Composite — più raggruppamento in tick e soglie di volume. |
| **Enablements** | Quali elementi del profilo partecipano alla confluenza: POC, Value Area, Peaks, Valleys, Delta Imbalances. |
| **Visual Appearance** | Colori, spessore e stile di linea per i livelli di questo profilo. |
| **Include by Number** | Alterna tra un numero fisso di profili recenti e tutti i profili dalla data di inizio. |
| **Number of Profiles** | Quanti profili recenti vengono usati quando l'opzione fissa è abilitata. |

### Trend Retracement Enables

| Impostazione | Cosa fa |
|---|---|
| **Enable Retracements** | Aggiunge i livelli di ritracciamento (38,2%, 50%, 61,8%, 75%) dello swing principale come elementi di confluenza. |
| **Exclude Previous Retracements** | Abilitato: vengono usati solo i ritracciamenti dello swing più recente. Disabilitato: vengono inclusi anche i ritracciamenti precedenti. |

### Developing Settings

| Impostazione | Cosa fa |
|---|---|
| **Zig Zag line display** | Mostra le linee dello Zig Zag sul grafico, con colori personalizzabili per gli swing rialzisti e ribassisti, così puoi vedere la struttura di mercato da cui parte l'indicatore. |

### Support & Resistance Colors

| Impostazione | Cosa fa |
|---|---|
| **Zone colors by confluence count** | Imposta i colori delle zone in base a quante confluenze le sostengono, così le zone più forti sono enfatizzate visivamente. |

[SCREENSHOT: La finestra delle impostazioni del Confluence Identifier che mostra il gruppo Confluence Settings (Tick Sensitivity, Minimum Number of Confluences, Starting Mode) con i tre blocchi dei profili Volume By Price compressi sotto | dc-it-confluence-identifier-02.png]

## Suggerimenti ed errori comuni

- **Adegua le soglie alle evidenze.** Man mano che abiliti più elementi (più VBP, swing, ritracciamenti), aumenta il **Minimum Number of Confluences** e riduci la **Tick Sensitivity** — altrimenti quasi ogni prezzo si qualifica come zona e lo strumento smette di discriminare.
- **Imposta correttamente le due percentuali dello Zig Zag.** Un errore di configurazione comune è usare la stessa percentuale per entrambi: lo Zig Zag della data di inizio dovrebbe essere più grossolano (% più grande), lo Zig Zag degli swing più fine (% più piccola), così gli swing minori possono contribuire alle confluenze.
- **Riduci il disordine con indicatori di profilo separati.** Per un grafico più pulito, puoi disabilitare qui le linee VBP e visualizzare i Volume Profile con indicatori separati come [[deep-profile]] — le zone di confluenza vengono comunque calcolate dagli elementi abilitati.
- **Convalida le zone rispetto al concetto.** Se non ti è chiaro perché un POC o un bordo della Value Area dovrebbe agire da supporto, leggi prima [[understanding-volume-profile]] — l'indicatore è utile solo quanto la tua interpretazione delle evidenze che accumula.

## Articoli correlati

- [[understanding-volume-profile]]
- [[deep-profile]]
- [[zig-zag]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]