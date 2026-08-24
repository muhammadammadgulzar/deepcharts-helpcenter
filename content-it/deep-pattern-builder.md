---
title: "Deep Pattern Builder"
slug: "deep-pattern-builder"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "7 min read"
description: "Costruisci logiche di trading personalizzate da condizioni relazionali su prezzo, volume, delta e altri indicatori, poi mettile alla prova con il motore di simulazione integrato."
keywords: ["deep pattern builder", "pattern builder", "condizioni personalizzate", "backtest", "execute backtest", "backtest autotrading", "indicator id subgraph id", "calculate on close"]
source_hash: "741da509b2b402bc"
ai_translated: true
source_hash: "741da509b2b402bc"
---
Deep Pattern Builder è l'indicatore più avanzato della suite DeepCharts. Ti consente di costruire logiche di trading personalizzate a partire da condizioni relazionali — confronti come A + B > C + D su valori delle candele, volume, delta, riferimenti al POC o output di altri indicatori — e poi di eseguire backtest automatizzati su quella logica con il motore di simulazione integrato.

In pratica sono due strumenti in uno: un motore di segnali che traccia marker o evidenziazioni di sfondo ovunque le tue condizioni siano vere, e un backtester che trasforma quei segnali in ingressi simulati con stop, target e logica di trailing.

## Che cos'è

Ogni condizione nel builder accetta fino a quattro input (**A**, **B**, **C**, **D**), unisce A con B e C con D tramite operatori matematici, e confronta il blocco AB con il blocco CD con un operatore logico. Le condizioni possono essere combinate con logica AND/OR, filtrate da un filtro di squilibrio integrato, visualizzate sul grafico, collegate ad avvisi e alimentate in un modello simulato di ingresso/uscita per il backtesting.

[SCREENSHOT: Grafico con Deep Pattern Builder applicato — marker di segnale tracciati sulle candele dove le condizioni personalizzate sono scattate, con un paio di barre con sfondo evidenziato visibili | dc-it-deep-pattern-builder-01.png]

## Quando usarlo

- Hai un'idea ripetibile ("chiusura sopra il POC con delta positivo") e vuoi che la piattaforma la marchi su ogni barra, dal vivo e storicamente.
- Vuoi fare riferimento ai valori di altri indicatori (ad esempio una media mobile) all'interno delle tue condizioni.
- Vuoi evidenze statistiche: il backtest integrato simula ingressi, stop e target sui dati storici.
- Vuoi avvisi su logiche a più parti che nessun singolo indicatore standard copre.

## Avvio rapido

1. Applica prima l'indicatore **Deep Trades** al grafico — il flusso di lavoro del builder dipende da esso (vedi [[deep-trades]]).
2. Fai clic sull'icona **Indicator**, cerca **Deep Pattern Builder** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto a Deep Pattern Builder.
4. Costruisci una prima condizione. Esempio — "chiusura sopra l'apertura con delta positivo": **Condition 1**: Input A = **Reference → Close**, Logical Operator **>**, Input C = **Reference → Open**. **Condition 2**: Input A = **Reference → Delta Volume**, Logical Operator **>**, Input C = **Constant → 0**. Combina con **AND (Simple)**.
5. Abilita **Calculate on Close** così i segnali vengono valutati solo al completamento della candela, senza sfarfallio intrabar.
6. In **Plot Settings**, scegli un **Plot Type** (inizia con **Marker**) e un posizionamento **Plot Price**.
7. Fai clic su **Apply and Save** e verifica che i marker compaiano sulle barre storiche dove la logica è vera.

[SCREENSHOT: Finestra delle impostazioni di Deep Pattern Builder con una condizione abilitata: Input A impostato su Reference Close, il menu a discesa Logical Operator, Input C impostato su Reference Open, e il selettore Combine Mode sotto | dc-it-deep-pattern-builder-02.png]

## Come leggerlo

Un segnale (marker o sfondo evidenziato) significa che ogni parte della tua logica combinata è risultata vera su quella barra — nulla di più. Lo strumento traccia la tua idea; giudicare l'idea è compito del backtest.

- **I marker** vengono posizionati al **Plot Price** che hai scelto (High = sopra la candela, Low = sotto, Current = alla chiusura, Mid Price = centro delle ombre), colorati per lato tramite i colori del subgraph.
- **Segnali che sfarfallano durante una barra live** significano che la condizione oscilla intrabar — abilita **Calculate on Close** se vuoi solo segnali confermati.
- **Report del backtest**: dopo aver eseguito un backtest, il report mostra come si sono comportati gli ingressi simulati con il tuo modello di stop/target. Itera: regola le condizioni o le impostazioni di rischio, riesegui, confronta con i report salvati in precedenza.

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### Condition

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Attiva la condizione. |
| **Inputs A, B, C, D** | Fino a quattro slot di input per condizione; B e D sono opzionali (imposta gli slot inutilizzati su **Unused**). |
| **Math Operator 1** | +, −, ×, / tra gli input A e B. |
| **Math Operator 2** | +, −, ×, / tra gli input C e D. |
| **Logical Operator** | Confronta il blocco AB con il blocco CD: >, >=, =, <> (diverso), <, <=. |

### Tipi di input

| Input Type | Che cosa fa |
|---|---|
| **Unused** | Disattiva lo slot di input. |
| **Reference** | Componenti della candela: Open, Close, High, Low, Bid Volume, Bid NT, Ask Volume, Ask NT, Total Volume, Total NT, Delta Volume, Delta NT, Low–High Ticks, Open–Close Ticks, POC Price %, POC Total Volume, POC on Shadow, Cumulative Delta Volume. |
| **Indicator** | Valori dal vivo di un altro indicatore applicato — richiede l'**Indicator ID** di quell'indicatore e il **Subgraph ID** (la specifica linea di valori da leggere). |
| **Constant** | Un valore numerico fisso che digiti tu. |

| Opzione | Che cosa fa |
|---|---|
| **Previous Bar** | Preleva il valore dell'input dalla candela precedente invece che da quella attuale — abilita logiche barra-su-barra come "delta in crescita" (A = Delta Volume > B = Delta Volume, Previous Bar). |

### Modalità di combinazione

| Modalità | Che cosa fa |
|---|---|
| **OR (Simple)** | Basta che una singola condizione sia vera perché il segnale scatti. |
| **AND (Simple)** | Tutte le condizioni devono essere vere. |
| **AND + OR (Advanced)** | Raggruppamenti annidati come (Condition 1 OR Condition 2) AND (Condition 3 OR Condition 4). |
| **Calculate on Close** | Valuta le condizioni solo dopo la chiusura della candela — nessuno sfarfallio intrabar. |

### Filtro di squilibrio

| Impostazione | Che cosa fa |
|---|---|
| **Imbalance filter** | Un filtro integrato la cui configurazione rispecchia le impostazioni dell'indicatore [[imbalance-tracker]] — limita i segnali alle barre che soddisfano anche i criteri di squilibrio. |

### Plot Settings

| Impostazione | Che cosa fa |
|---|---|
| **Plot Type** | **Marker** (solo marker di segnale), **Background** (evidenziazione dello sfondo della candela), o **Series & Background** (entrambi). |
| **Days to Load** | Per quanti giorni storici calcolare i segnali. |
| **Plot Price** | Posizionamento del marker: **High** (sopra la candela), **Low** (sotto la candela), **Current** (alla chiusura), **Mid Price** (centro delle ombre). |
| **Color / Opacity** | Colore del marker o dello sfondo e trasparenza dello sfondo. |

### Alert Settings

| Impostazione | Che cosa fa |
|---|---|
| **Alert selection** | Gli avvisi vanno prima creati tramite **Options → Add Alert**; solo allora compaiono nella lista avvisi del builder per la selezione. |

### Simulation (backtesting)

| Impostazione | Che cosa fa |
|---|---|
| **Enable** | Attiva la modalità di simulazione. |
| **Entry Type** | **Market** (ingresso immediato), **Half Bar**, o **Ticks from Close** (ordine limit a X tick dalla chiusura della candela). |
| **Side** | **Buy** o **Sell**. |
| **Allow Multiple Entries** | Consente posizioni concorrenti. |
| **Entry Expiration (Bars)** | Per quante barre un ingresso pendente resta valido. |
| **Stop (Ticks)** | Distanza fissa dello stop loss. |
| **Trailing Stop — Enable / Trigger (Ticks) / Offset (Ticks)** | Attiva un trailing stop; Trigger è la soglia di profitto prima che si inneschi, Offset la distanza che mantiene dietro il prezzo. |
| **Targets** | Più target di profitto in tick. |
| **Move to Break Even (B/E)** | Sposta lo stop al prezzo di ingresso quando un target viene raggiunto. |

### Subgraph

| Impostazione | Che cosa fa |
|---|---|
| **Color / Color 2** | Colori dei marker lato bid e lato ask. |
| **Subgraph style** | Selezione dello stile dei marker. |

## Eseguire un backtest

1. Configura condizioni, impostazioni di tracciamento e simulazione, poi fai clic su **Apply and Save**.
2. Fai clic con il tasto destro del mouse sul grafico.
3. Seleziona **Autotrading → Execute Backtest**.
4. Esamina il report. Tramite il tasto destro puoi anche cancellare i risultati, vedere i backtest precedenti e salvare i report.

[SCREENSHOT: Menu contestuale del tasto destro sul grafico con Autotrading espanso ed Execute Backtest evidenziato, con un report di backtest completato visibile | dc-it-deep-pattern-builder-03.png]

## Suggerimenti ed errori comuni

- **L'opzione di backtest manca nel menu del tasto destro?** Segui il flusso di lavoro completo nell'ordine: Deep Trades applicato, Deep Pattern Builder aggiunto e configurato, clic su **Apply and Save** — poi tasto destro → **Autotrading → Execute Backtest**.
- **L'avviso non compare nel builder?** Gli avvisi devono esistere prima che il builder possa usarli — creali prima tramite **Options → Add Alert**.
- **I segnali sfarfallano intrabar?** Abilita **Calculate on Close**.
- **Il riferimento a un altro indicatore non restituisce nulla?** Verifica sia l'**Indicator ID** sia il **Subgraph ID** — il Subgraph ID seleziona quale linea di valori di quell'indicatore leggi.
- **Inizia con una sola condizione.** Verifica che ogni condizione tracci sensatamente da sola prima di combinarla con AND/OR — fare debug di logiche annidate con quattro input per condizione è molto più difficile.
- **Le logiche barra-su-barra richiedono Previous Bar.** "Delta in crescita" è Delta Volume attuale > Delta Volume con **Previous Bar** abilitato sul secondo input, non due condizioni separate.

## Articoli correlati

- [[deep-trades]]
- [[imbalance-tracker]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[dynamic-poc]]