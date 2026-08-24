---
title: "Session Imbalance"
slug: "session-imbalance-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "L'indicatore Session Imbalance evidenzia i livelli di prezzo chiave della prima ora di trading, nota come Initial Balance."
keywords: ["session imbalance", "session imbalance deepdom", "deepdom", "indicatori"]
source_hash: "7f3bbe969065488f"
ai_translated: true
source_hash: "7f3bbe969065488f"
---
L'indicatore Session Imbalance evidenzia i livelli di prezzo chiave della prima ora di trading, nota come Initial Balance. Questi livelli sono considerati significativi perché la maggior parte del volume di trading di ogni sessione entra proprio durante questa prima ora di apertura.

[SCREENSHOT: Session Imbalance — panoramica (DeepDOM) | dd-it-session-imbalance-deepdom-01.png]

Per i futures statunitensi, questo corrisponde alle 9:30 – 10:30 ora del mercato. Nel corso della sessione, questi livelli agiscono spesso come importanti zone di supporto, resistenza o reazione.

L'indicatore traccia i seguenti livelli:

IBH (Imbalance High) — il massimo del periodo di initial balance

IBL (Imbalance Low) — il minimo del periodo di initial balance

IBM (Mid Point) — il punto medio tra IBH e IBL

IB50% — estensioni del 50% sopra e sotto l'initial balance

IB100% — estensioni del 100% sopra e sotto l'initial balance

## Quando usare questo indicatore

L'indicatore Session Imbalance è particolarmente utile durante le sessioni di trading regolari in cui esiste un periodo di apertura definito — in particolare nei mercati dei futures come NQ, ES, CL e strumenti simili che hanno un'apertura di sessione chiara con alta partecipazione.

Ecco le situazioni più comuni in cui questo indicatore aggiunge reale valore:

All'inizio della giornata di trading Non appena la sessione apre, l'indicatore inizia a costruire il range dell'Initial Balance. Osservare come il prezzo si comporta all'interno di questo range durante la prima ora ti offre un contesto importante per il resto della giornata. Un range stretto suggerisce indecisione. Un range ampio suggerisce una forte convinzione direzionale già a inizio sessione.

Quando il prezzo ritorna nell'Initial Balance dopo un breakout Uno degli usi più affidabili di questo indicatore è osservare il prezzo che rompe sopra l'IBH o sotto l'IBL e poi ritorna su quei livelli. Quando questo accade, IBH e IBL spesso invertono il loro ruolo — una vecchia resistenza diventa supporto e un vecchio supporto diventa resistenza. Questi re-test possono offrire opportunità di ingresso di alta qualità.

Usare il Midpoint come riferimento intraday L'IBM (punto medio) è uno dei livelli più osservati dai trader istituzionali durante l'intera sessione. Un prezzo che gravita verso il punto medio spesso segnala un movimento di bilanciamento o di ritorno alla media. Un forte rifiuto del punto medio, al contrario, può segnalare una continuazione nella direzione del breakout.

Usare le estensioni del 50% e 100% come target Una volta che il prezzo rompe il range dell'Initial Balance, i livelli di estensione del 50% e 100% diventano target naturali del movimento. Se il prezzo rompe sopra l'IBH, l'estensione IB50% superiore diventa il primo target e l'estensione IB100% il secondo. Lo stesso vale al contrario per una rottura sotto l'IBL.

Quando lo combini con strumenti di orderflow e volume I livelli del Session Imbalance diventano molto più potenti se combinati con strumenti come la Heatmap o il DOM. Se un grande cluster di ordini limit è posizionato esattamente sul livello IBH o IBL, quella confluenza rende molto più probabile che il livello agisca come una forte zona di reazione.

## Come aggiungere il Session Imbalance al grafico

Fai clic sull'icona Indicators (Indicatori) sul grafico

Trova Session Imbalance nell'elenco e fai clic su + per aggiungerlo

Fai clic sull'icona delle impostazioni sull'indicatore per aprire la sua finestra di configurazione

[SCREENSHOT: Session Imbalance — Come aggiungere il Session Imbalance al grafico (DeepDOM) | dd-it-session-imbalance-deepdom-02.png]

## Impostazioni generali

Number of Minutes Definisce quanti minuti vengono usati per calcolare l'Initial Balance. Il valore predefinito è 60 minuti, per catturare la prima ora completa di trading. Puoi comunque modificarlo — per esempio, impostalo su 15 per usare solo i primi 15 minuti. Puoi anche applicare più indicatori Session Imbalance con intervalli di tempo diversi sullo stesso grafico.

Custom Timeframe Quando è attivo, ti consente di definire manualmente un orario di inizio sessione personalizzato invece di usare quello predefinito.

Start Session – Market Time Definisce l'orario di inizio della sessione. Importante — inserisci sempre l'ora del mercato di riferimento, non quella del tuo fuso orario locale.

Futures USA → 9:30

Futures europei → 9:00

[SCREENSHOT: Session Imbalance — Impostazioni generali (DeepDOM) | dd-it-session-imbalance-deepdom-03.png]

## Impostazioni di visualizzazione

High Color Imposta il colore della linea IBH (Imbalance High).

[SCREENSHOT: Session Imbalance — Impostazioni di visualizzazione (DeepDOM) | dd-it-session-imbalance-deepdom-04.png]

Mid Color Imposta il colore della linea IBM (Mid Point).

[SCREENSHOT: Session Imbalance — Impostazioni di visualizzazione (DeepDOM) | dd-it-session-imbalance-deepdom-05.png]

Low Color Imposta il colore della linea IBL (Imbalance Low).

[SCREENSHOT: Session Imbalance — Impostazioni di visualizzazione (DeepDOM) | dd-it-session-imbalance-deepdom-06.png]

Line Width Imposta lo spessore di tutte le linee del Session Imbalance.

[SCREENSHOT: Session Imbalance — Impostazioni di visualizzazione (DeepDOM) | dd-it-session-imbalance-deepdom-07.png]

Line Style Imposta lo stile delle linee — per esempio continua, tratteggiata o punteggiata.

[SCREENSHOT: Session Imbalance — Impostazioni di visualizzazione (DeepDOM) | dd-it-session-imbalance-deepdom-08.png]

Text Size Imposta la dimensione del carattere delle etichette mostrate accanto a ogni livello.

[SCREENSHOT: Session Imbalance — Impostazioni di visualizzazione (DeepDOM) | dd-it-session-imbalance-deepdom-09.png]

Extend Controlla fino a dove le linee del Session Imbalance vengono disegnate sul grafico. Ci sono tre opzioni:

None: le linee vengono disegnate solo all'interno del periodo di initial balance. Una volta terminato il periodo, le linee si fermano e non si estendono più verso destra.

Till Interaction: le linee si estendono verso destra finché il prezzo non interagisce con esse — cioè non appena il prezzo tocca o attraversa un livello, la linea smette di estendersi in quel punto. È utile se vuoi vedere solo i livelli non ancora testati dal prezzo.

Till End: le linee si estendono fino al bordo destro del grafico, indipendentemente dal fatto che il prezzo abbia interagito o meno con esse. È l'impostazione predefinita e ti offre un riferimento visivo completo di tutti i livelli per l'intera sessione.

[SCREENSHOT: Session Imbalance — Impostazioni di visualizzazione (DeepDOM) | dd-it-session-imbalance-deepdom-10.png]

Text Align Imposta dove appaiono le etichette rispetto alle linee. Puoi scegliere tra:

Left

Center

Right

[SCREENSHOT: Session Imbalance — Impostazioni di visualizzazione (DeepDOM) | dd-it-session-imbalance-deepdom-11.png]

[SCREENSHOT: Session Imbalance — Impostazioni di visualizzazione (DeepDOM) | dd-it-session-imbalance-deepdom-12.png]

Plot Once Ended Quando questa impostazione è attiva, i livelli del Session Imbalance vengono disegnati sul grafico solo quando il periodo di initial balance si è completamente chiuso e concluso. Questo significa che non vedrai le linee formarsi o aggiornarsi in tempo reale mentre il periodo di apertura è ancora attivo — appariranno solo alla fine del periodo.

Quando questa impostazione è disattivata, i livelli vengono disegnati e aggiornati in tempo reale mentre il periodo di initial balance si sta formando, così puoi osservare IBH, IBL e punto medio svilupparsi in diretta fin dall'inizio della sessione.

Usa Plot Once Ended su ON se vuoi operare solo sui livelli confermati e definitivi e preferisci un grafico pulito durante il periodo di apertura.

Usa Plot Once Ended su OFF se vuoi monitorare i livelli mentre si sviluppano e reagire alla price action durante il periodo di apertura stesso.

[SCREENSHOT: Session Imbalance — Impostazioni di visualizzazione (DeepDOM) | dd-it-session-imbalance-deepdom-13.png]

## Livelli di estensione 50% / 100%

Attiva le linee di estensione 50% e 100% per tracciare livelli proiettati sopra e sotto il range dell'Initial Balance. Una volta attivate, puoi impostare un colore personalizzato per ciascuna estensione.

Queste estensioni vengono comunemente usate per identificare potenziali target o zone di reazione se il prezzo rompe oltre il massimo o il minimo dell'initial balance.

[SCREENSHOT: Session Imbalance — Livelli di estensione 50% / 100% (DeepDOM) | dd-it-session-imbalance-deepdom-14.png]

[SCREENSHOT: Session Imbalance — Livelli di estensione 50% / 100% (DeepDOM) | dd-it-session-imbalance-deepdom-15.png]

## Conclusione

L'indicatore Session Imbalance ti offre un riferimento visivo immediato per i livelli di prezzo più importanti stabiliti nella prima ora di trading. Combinati con l'analisi del volume e dell'orderflow, questi livelli possono migliorare in modo significativo la precisione dei tuoi ingressi e delle tue uscite durante la sessione.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu incontri.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Ticket di supporto (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.