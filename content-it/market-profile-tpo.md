---
title: "Market Profile (TPO)"
slug: "market-profile-tpo"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Come aggiungere, leggere e configurare l'indicatore Market Profile (TPO), inclusi POC, Value Area, picchi e valli, suddivisione per sessione e unione dei profili."
keywords: ["market profile", "TPO", "time price opportunity", "grafico TPO", "grafico a lettere", "point of control", "value area", "market profil", "blocchi tpo"]
source_hash: "997af6aec9083266"
ai_translated: true
source_hash: "997af6aec9083266"
---
L'indicatore Market Profile — spesso chiamato TPO, da Time Price Opportunity — riorganizza l'attività del mercato in modo che tu possa vedere dove il prezzo ha trascorso il suo tempo, non solo dove è andato. Il prezzo è disposto in verticale e il tempo in orizzontale, così una consolidazione tranquilla costruisce un rigonfiamento ampio, mentre un rifiuto rapido lascia una coda sottile.

Se sei nuovo all'analisi basata sui profili, leggi prima [[understanding-volume-profile]] e [[understanding-auction-theory]]. Questo articolo copre l'indicatore in sé: come aggiungerlo, come leggerlo e ogni impostazione della sua finestra di dialogo.

## Che cos'è

Market Profile mostra la relazione tra prezzo, tempo e volume. Ogni periodo di negoziazione è suddiviso in intervalli — tipicamente di 30 minuti — e ogni intervallo è contrassegnato da una lettera (A–Z). Ogni livello di prezzo scambiato durante un intervallo riceve la lettera di quell'intervallo, e le lettere si accumulano in una distribuzione che rivela le zone di consolidamento, i livelli di fair value e come il prezzo si è distribuito durante la sessione.

DeepCharts può disegnare il risultato sia come classici **Blocks** con lettere sia come una forma **Profile** condensata, e può costruire un unico profilo composito sull'intero periodo caricato, profili ripetuti di lunghezza fissa, oppure una finestra completamente personalizzata.

## Quando usarlo

- Per individuare a colpo d'occhio le aree di bilanciamento (fair value) e le aree di squilibrio (movimenti di trend).
- Per portare i livelli di riferimento chiave — POC, confini della Value Area, single print — nella pianificazione delle tue operazioni.
- Per confrontare la struttura di oggi con quella dei giorni precedenti unendo i profili in compositi.
- Per separare l'attività overnight da quella dell'orario regolare con il filtro di sessione.

## Avvio rapido

1. Aggiungi **Market Profile** al tuo grafico.
2. Nella sezione **General**, scegli il **TPO Type**: **Profile** per una forma di distribuzione compatta, oppure **Blocks** per le classiche lettere TPO.
3. Imposta il **Period**. I profili giornalieri ripetuti (**Multiples** con lunghezza 1 in **Days**) sono il punto di partenza standard per l'analisi intraday.
4. Abilita le funzioni **POC** e **Value Area**, così il livello di massima attività e la zona di fair value vengono contrassegnati su ogni profilo.
5. Lascia il **Tick Grouping** in automatico finché non conosci lo strumento — potrai affinarlo in seguito.

Guarda un profilo TPO costruirsi da solo qui sotto — premi play per vedere le lettere accumularsi in una distribuzione, e passa il mouse sulle righe per ispezionare quali periodi hanno scambiato a ciascun prezzo:

[WIDGET: tpo-lab]

## Come leggerlo

Le sezioni ampie del profilo sono accettazione: il prezzo ha ruotato lì abbastanza a lungo da far stampare molti intervalli temporali, il che segna l'idea corrente di fair value del mercato. Le sezioni sottili — singole lettere a un estremo — sono rifiuto: il prezzo ha fatto una breve visita ed è stato respinto.

Tre elementi strutturali contano più di tutti:

- **POC (Point of Control)** — il livello di prezzo con il volume massimo nel profilo. Agisce come centro gravitazionale della distribuzione ed è un comune magnete e livello di reazione.
- **Value Area** — l'intervallo di prezzo che contiene una percentuale del volume totale definita dall'utente (il 70% è la convenzione classica del Market Profile). Il rientro nell'area di valore dopo un'escursione è un segnale di ritorno alla media; l'accettazione al di fuori del valore suggerisce un movimento direzionale.
- **Picchi e valli** — concentrazioni e vuoti locali di attività all'interno del profilo. I picchi si comportano come supporti/resistenze ad alto volume; le valli sono aree a basso volume che il prezzo tende ad attraversare rapidamente.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **TPO Base Minute** | Quanti minuti rappresenta ogni lettera TPO. 30 minuti è la convenzione classica del Market Profile. |
| **TPO Type** | **Blocks** disegna blocchi TPO con lettere; **Profile** disegna la forma di distribuzione condensata. |
| **Period** | **Composite** costruisce un unico profilo sull'intero set di dati caricato; **Multiples** costruisce profili ripetuti di lunghezza fissa; **Custom** usa una finestra esatta. |
| **Length** | La dimensione di ciascun profilo quando usi **Multiples**, espressa in **Minutes**, **Days**, **Weeks** o **Months**. |
| **Custom date/time** | Inizio e fine della finestra di analisi quando **Period** è **Custom**. |

### Tick Grouping

- **Method** — **Automatic** lascia decidere all'indicatore quanti tick di prezzo vengono uniti in una riga del profilo; la modalità manuale ti dà un controllo esatto.
- **Grouping factor** — scala il raggruppamento automatico.
- **Manual ticks** — il numero esatto di tick per riga in modalità manuale. Aumentalo sugli strumenti con tick di dimensione ridotta per mantenere il profilo leggibile.

### Plot

- **Background / text coloring** — **None**, **Fixed**, **Fading** o **Multi Colors**.
- **Width** — come viene calcolata la larghezza del profilo: **Automatic**, **% Period**, **Window Width** o **Fixed Bars**.
- **Opacity** e **Border width** — trasparenza e contorno del profilo.
- **Style** — **Solid**, **Hollow**, **Line** o **Combined**.

### POC

- Evidenzia il livello di prezzo con il volume massimo.
- La modalità di visualizzazione dinamica (in sviluppo) mostra il POC mentre si forma durante il periodo.
- **Line extension** — **None**, **Till Interaction** (la linea si estende finché il prezzo non la tocca) o **Till End Window**.
- Colore, spessore e stile sono personalizzabili.

### Value Area

- **Percentage** — la quota del volume totale che la Value Area deve contenere.
- La modalità in sviluppo traccia la Value Area mentre si forma.
- L'estensione della linea porta avanti nel tempo i confini della Value Area.

### Peaks and Valleys

- **Sensitivity** — quanto è rigorosa la rilevazione di picchi e valli.
- **Minimum volume threshold** — ignora i cluster insignificanti.
- L'evidenziazione, con linee opzionali, contrassegna sul grafico i livelli rilevati.

### Summary

Mostra statistiche aggregate per ciascun profilo: volume totale, delta, conteggio delle operazioni e informazioni sui tick.

### Filter/Split Time

Analisi basata sulle sessioni con riferimenti ai fusi orari statunitensi. Modalità: **None**, **Filter** (limita il profilo a una sessione), **Splitted** (profili separati per sessione) o **Triple**.

### Clic con il tasto destro: unire e dividere

Fai clic con il tasto destro del mouse su un profilo nel grafico per rimodellarlo senza toccare la finestra delle impostazioni: **Merge+** (unisci in avanti), **Merge-** (unisci all'indietro), **Split+** (dividi in avanti), **Split-** (dividi all'indietro) e **Reset All**.

[SCREENSHOT: La finestra delle impostazioni di Market Profile aperta sulla sezione General, con le opzioni TPO Base Minute, TPO Type e Period | dc-it-market-profile-tpo-01.png]

## Suggerimenti ed errori comuni

- **L'unione serve per i compositi.** Usa **Merge+** / **Merge-** per costruire profili compositi multi-giorno attorno a un'area di bilanciamento — e ricorda che esiste **Reset All** quando la struttura cambia.
- **Non confondere la forma del TPO con il volume.** Il conteggio delle lettere misura il tempo al prezzo; abilita la funzione **Summary** quando vuoi anche i numeri di volume, delta e conteggio delle operazioni.
- **Adatta il raggruppamento dei tick allo strumento.** Un raggruppamento troppo fine produce un profilo frastagliato e illeggibile; uno troppo grossolano nasconde i picchi e le valli che stai cercando.
- **Verifica il filtro di sessione rispetto agli orari del tuo strumento.** La funzione Filter/Split Time fa riferimento ai fusi orari statunitensi, quindi verifica che la suddivisione cada dove ti aspetti prima di operare sulla base di essa.

## Articoli correlati

- [[understanding-volume-profile]]
- [[understanding-auction-theory]]
- [[profile-chart-window]]
- [[deep-profile]]
- [[different-types-of-input]]
- [[indicator-layout]]