---
title: "Market Statistics"
slug: "market-statistics"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Analizza statisticamente i dati delle operazioni o delle barre — medie, deviazioni e frequenza per intervallo — così puoi scegliere soglie basate sull'evidenza per gli altri tuoi strumenti."
keywords: ["market statistics", "indicatore statistiche di mercato", "statistiche dimensione trade", "statistiche volume", "deviazione standard trade", "calibrazione soglie", "dimensione media trade"]
source_hash: "19f7054f23ac379a"
ai_translated: true
source_hash: "19f7054f23ac379a"
---
Market Statistics è uno strumento di calibrazione, non un segnale di trading. Analizza i dati delle operazioni o delle barre del tuo simbolo e riporta con quale frequenza si verificano diversi intervalli di valori, con una media e una deviazione per ciascun raggruppamento. Con quei numeri alla mano, smetti di indovinare le soglie per gli altri strumenti e inizi a impostarle sulla base dell'evidenza.

La documentazione ufficiale ne descrive direttamente lo scopo: ottenere informazioni statistiche utili per configurare strumenti come Big Trades, Volume Clusters, Significant POCs, Delta Filter Bars e Time & Sales.

## Che cos'è

L'indicatore analizza un set di dati che definisci tu — dimensioni delle operazioni, conteggi degli ordini o valori per barra come il volume del POC o il delta — e identifica i valori più frequenti e meno frequenti al suo interno. I risultati sono raggruppati in intervalli che controlli tu (**Initial Range**, **End Range**, **Step Range**) e ogni raggruppamento è riportato con **AVG** (media) e **Dev** (deviazione). Ad esempio, un intervallo "300–350" che mostra **AVG: 9** e **Dev: 17** descrive con quale frequenza si verificano i valori in quell'intervallo.

[SCREENSHOT: Grafico con l'output dell'indicatore Market Statistics — una tabella/grafico degli intervalli di valori con le cifre AVG e Dev per intervallo, su un simbolo futures attivo | dc-it-market-statistics-01.png]

## Quando usarlo

- Stai impostando il filtro **Min** per [[big-trades]] e vuoi sapere quale dimensione di trade è davvero rara sul tuo simbolo.
- Calibri i filtri di dimensione per [[adv-time-and-sales]] o per gli strumenti basati sul delta invece di copiare le soglie da un altro strumento finanziario.
- Stai cambiando simbolo o contratto e devi ricalibrare rapidamente ogni impostazione dipendente dalla dimensione.
- Vuoi capire il comportamento di base di un mercato — dimensioni tipiche delle operazioni, volume tipico per barra — prima di costruirci sopra delle regole.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico e aggiungi **Market Statistics**.
2. Apri le **Settings** (impostazioni) dell'indicatore.
3. Imposta **Stat Mode** su **Trades** per analizzare le statistiche di operazioni/contratti.
4. In **Data Settings**, scegli **Aggregate Trades** così le esecuzioni frazionate allo stesso prezzo vengono combinate (vedi [[different-types-of-input]]).
5. In **Range Trade Settings**, imposta un **Initial Range**, un **End Range** e uno **Step Range** che coprano le dimensioni che ti interessano — ad esempio scorrendo fasce di dimensione dalle piccole stampe retail fino ai grandi blocchi.
6. Leggi **AVG** e **Dev** per ciascun intervallo, e usa gli intervalli che si verificano raramente come soglie candidate per gli altri tuoi strumenti.

[SCREENSHOT: Finestra delle impostazioni di Market Statistics — Stat Mode, Font Size e % Dev. Std. in General, con le sezioni Data, Range Trade, Bar e Time visibili | dc-it-market-statistics-02.png]

## Come leggerlo

- **Intervalli ad alta frequenza** — il comportamento normale del mercato. Tutto ciò che rientra in questi intervalli è rumore ai fini della rilevazione dei grandi trade.
- **Intervalli a bassa frequenza** — i valori anomali. Le soglie per strumenti come Big Trades vanno collocate al punto in cui la frequenza crolla bruscamente, o oltre.
- **AVG per intervallo** — l'occorrenza media per quel raggruppamento; **Dev** — la deviazione attorno ad essa. Un Dev alto rispetto all'AVG significa che il comportamento di quell'intervallo è incoerente, quindi tratta le soglie vicine con più margine.
- **Modalità Bars** — la stessa logica applicata ai valori per barra (POC, Delta POC o Volume) invece che alle singole operazioni, utile quando calibri strumenti basati sulle barre.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Stat Mode** | **Trades** mostra statistiche basate sul numero di operazioni/contratti; **Bars** mostra statistiche relative a barre e candele. |
| **Font Size** | Regola la dimensione del testo per la leggibilità del grafico. |
| **% Dev. Std.** | Imposta la percentuale di deviazione standard usata nell'analisi. Valori più alti (2–3) ampliano la selezione per includere valori più lontani dalla media; valori più bassi (0,5–1,5) la restringono. [CONFIRM: whether lower % Dev. Std. values keep only values nearest the mean or exclude them — the legacy article wording is ambiguous] |

### Data Settings

| Impostazione | Cosa fa |
|---|---|
| **Data Type** | **Volume** (quantità totale scambiata in un dato periodo di tempo), **Order** (dati sugli ordini e informazioni sul loro posizionamento), oppure **Aggregate Trades** (combina le operazioni allo stesso livello di prezzo per una vista aggregata totale). |
| **Filter Min / Filter Max** | Esclude dall'analisi i valori al di fuori delle soglie specificate. |

### Range Trade Settings

| Impostazione | Cosa fa |
|---|---|
| **Initial Range** | Limite inferiore dell'intervallo di valori analizzato. |
| **End Range** | Limite superiore dell'intervallo di valori analizzato. |
| **Step Range** | Ampiezza dell'intervallo per i raggruppamenti di frequenza. |

### Bar Settings

| Impostazione | Cosa fa |
|---|---|
| **Base Data Bar** | Il valore per barra analizzato in modalità Bars: **POC** (Point of Control), **Delta POC** (differenza tra acquisti e vendite) o **Volume** (volume scambiato per barra). |

### Time Settings

| Impostazione | Cosa fa |
|---|---|
| **Initial Filter / End Filter** | Limita l'analisi a un intervallo specifico della giornata di negoziazione — utile per escludere le sessioni overnight con un comportamento delle dimensioni diverso. |

## Suggerimenti ed errori comuni

- **Analizza la sessione in cui fai trading.** Le distribuzioni delle dimensioni overnight e in orario regolare differiscono in modo sostanziale; usa i filtri delle **Time Settings** così le statistiche riflettono la tua finestra di trading.
- **Scegli lo Step Range con criterio.** Passi troppo ampi sfumano il punto di caduta dove le dimensioni diventano rare; passi troppo stretti frammentano il quadro. Parti in modo grossolano, poi affina attorno alla regione interessante.
- **Ripeti l'analisi dopo il rollover del contratto o i cambi di regime.** Le statistiche di un mese a bassa volatilità calibreranno male le soglie in uno ad alta volatilità.
- **Preferisci Aggregate Trades per le soglie di dimensione.** I dati grezzi delle operazioni contano un'esecuzione frazionata come diverse piccole operazioni, il che sottostima la dimensione reale che colpisce il book.

## Articoli correlati

- [[big-trades]]
- [[adv-time-and-sales]]
- [[deep-stats]]
- [[on-candle-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]