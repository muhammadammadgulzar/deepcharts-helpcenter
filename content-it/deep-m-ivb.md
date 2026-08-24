---
title: "Deep-M IVB"
slug: "deep-m-ivb"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Indicatore algoritmico di Opening Range Breakout (ORB) che traccia livelli di proiezione, protezione e uscita derivati statisticamente, oltre a zone di reazione e un bias giornaliero."
keywords: ["deep m ivb", "deep-m ivb", "ivb", "opening range breakout", "indicatore ORB", "livelli opening range", "target orb"]
source_hash: "c16bfdf30326c0e1"
ai_translated: true
source_hash: "c16bfdf30326c0e1"
---
Deep-M IVB è un indicatore algoritmico sviluppato dal team di DeepCharts per semplificare il trading della struttura Opening Range Breakout (ORB). Invece di farti misurare l'opening range e indovinare i target, deriva i suoi livelli da anni di statistiche storiche e li traccia automaticamente: il range stesso, i livelli di protezione e uscita dopo un breakout, le zone di reazione e una lettura del bias giornaliero.

Il risultato è un framework ORB completo sul grafico — dov'è il range, fin dove un breakout tende statisticamente ad arrivare, dove tende a fermarsi e in quale direzione pende la giornata.

## Che cos'è

Deep-M IVB costruisce l'opening range RTH (High, Mid, Low) su una finestra a tua scelta, poi proietta oltre di esso livelli derivati statisticamente. Dopo un breakout traccia livelli di protezione e uscita — target ad alta probabilità e zone strutturate — ed evidenzia le zone di reazione più forti dove il prezzo può decelerare. Un pannello riepilogativo nell'angolo in alto a sinistra del grafico mostra il bias giornaliero.

[SCREENSHOT: Grafico con Deep-M IVB applicato dopo l'apertura — linee High/Mid/Low dell'opening range, livelli di proiezione sopra il range dopo un breakout, zone di reazione ombreggiate, e il Summary Panel visibile in alto a sinistra con il bias giornaliero | dc-it-deep-m-ivb-01.png]

## Quando usarlo

- Fai trading sull'Opening Range Breakout e vuoi target fondati statisticamente invece di proiezioni a multipli fissi.
- Vuoi aree di uscita parziale pre-pianificate: le zone di reazione marcano dove il momentum del breakout tende a rallentare.
- Vuoi una lettura rapida del bias giornaliero (Neutral / Positive / Negative) senza costruire un tuo modello.
- Ti servono livelli chiari di invalidazione e protezione per gestire un'operazione di breakout.

## Avvio rapido

1. Apri l'**Indicator List** sul grafico, cerca **Deep-M IVB** e fai clic su **+**.
2. Fai clic sull'icona **Settings** per configurarlo.
3. Imposta **RTH Opening Range (Min)** su **30** — le opzioni supportate sono 15, 30 e 60 minuti, e il team consiglia 30.
4. Attiva **Enable Protection** così i livelli di protezione e uscita vengono tracciati dopo la rottura del range.
5. Attiva **Enable Zones** per evidenziare le zone di reazione più forti durante un breakout.
6. Applica e attendi il completamento della finestra dell'opening range dopo l'apertura RTH.

[SCREENSHOT: Finestra delle impostazioni di Deep-M IVB con RTH Opening Range (Min) impostato su 30, Enable Protection ed Enable Zones attivati, e i controlli Range di colore/spessore/stile visibili | dc-it-deep-m-ivb-02.png]

## Come leggerlo

- **Opening range (High / Mid / Low):** la struttura da cui dipende tutto il resto. Sopra il range la giornata pende al rialzo; sotto, al ribasso; all'interno, nessun breakout ancora.
- **Proiezioni (tre livelli, per probabilità):** **Protection** è il target giornaliero a probabilità più alta, **Average** (Ext. Avg) è il secondo target, e **Projection** (Ext. Std-1) è il terzo. Un approccio comune è alleggerire la posizione man mano che ciascuno viene raggiunto.
- **Zone di reazione:** aree dove il prezzo può reagire e il momentum può rallentare durante un breakout — punti naturali per uscite parziali o rientri in caso di tenuta. Le zone **Support** colorano il lato rialzista, le zone **Resistance** il lato ribassista.
- **Summary Panel (in alto a sinistra):** il bias giornaliero — **Neutral**, **Positive** (rialzista) o **Negative** (ribassista) — per una lettura direzionale a colpo d'occhio.

Un breakout che raggiunge il livello Protection ha già centrato il suo obiettivo statisticamente più probabile; puntare alle proiezioni successive è una scommessa a probabilità inferiore, ed è per questo che sono in sequenza.

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### Range

| Impostazione | Che cosa fa |
|---|---|
| **RTH Opening Range (Min)** | Minuti usati per costruire l'opening range: 15, 30 o 60. Raccomandazione del team: 30. Definisce High, Mid e Low del range. |
| **High / Mid / Low Colors** | Colori delle linee dei tre livelli del range. |
| **Line Width / Style** | Spessore e stile delle linee del range. |

### Livelli di breakout

| Impostazione | Che cosa fa |
|---|---|
| **Enable Protection** | Traccia i livelli di protezione e uscita dopo la rottura del range — target ad alta probabilità e zone strutturate. |
| **Projection Colors** | Colori per le tre proiezioni: **Protection** (probabilità più alta), **Average** (Ext. Avg), **Projection** (Ext. Std-1). |

### Zone

| Impostazione | Che cosa fa |
|---|---|
| **Enable Zones** | Evidenzia le zone di reazione più forti durante un breakout, dove il prezzo può decelerare. |
| **Support Color / Resistance Color** | Colori per le zone rialziste (support) e ribassiste (resistance). |
| **Opacity** | Trasparenza delle zone. |
| **Bar Extension** | Per quante candele in avanti si estendono le zone (ad esempio 10). |
| **Line Width** | Spessore del bordo delle zone. |

### Summary Panel

| Impostazione | Che cosa fa |
|---|---|
| **Bias colors** | Colori per gli stati del bias giornaliero **Neutral**, **Positive** e **Negative** mostrati nel pannello in alto a sinistra. |

## Suggerimenti ed errori comuni

- **Scegli una finestra di range e mantienila.** I livelli sono statistici; passare tra 15/30/60 in intraday invalida il confronto. Il team consiglia 30 minuti.
- **Nulla viene tracciato prima del completamento del range.** L'indicatore ha bisogno dell'intera finestra dell'opening range dopo l'apertura RTH prima che i livelli compaiano.
- **Tratta le proiezioni come target in sequenza, non come garanzie.** Prima Protection, poi Average, poi Projection — la probabilità cala con ogni estensione.
- **Usa le zone per la gestione, non come soli ingressi.** Marcano dove il momentum può rallentare; combinale con una conferma di orderflow come [[deep-stats]] o [[deep-trades]] sulla zona.
- **Il contesto di sessione conta.** La logica ORB presuppone un'apertura RTH pulita — vedi [[understanding-market-structure-sessions]] per il comportamento RTH vs ETH.

## Articoli correlati

- [[understanding-market-structure-sessions]]
- [[pivot-points]]
- [[important-levels]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]