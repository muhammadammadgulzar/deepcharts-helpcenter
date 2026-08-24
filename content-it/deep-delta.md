---
title: "Deep Delta"
slug: "deep-delta"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Riferimento per Deep Delta: delta filtrato con fino a quattro fasce dimensionali per separare partecipanti piccoli, medi e grandi, con linee di soglia e marker di assorbimento."
keywords: ["deep delta", "filtro delta", "delta bars", "delta filtrato", "delta multi range", "delta dei grandi operatori", "marker di assorbimento", "fasce delta"]
source_hash: "d143e9434af2a2b0"
ai_translated: true
source_hash: "d143e9434af2a2b0"
---
Deep Delta è un'evoluzione avanzata del classico indicatore Delta Bars. Invece di un solo valore di delta per candela, ti consente di applicare filtri dimensionali al delta e suddividerlo in fino a quattro fasce separate — così puoi osservare in modo indipendente, all'interno della stessa candela, il delta dei partecipanti piccoli, medi e grandi.

Questa separazione è il punto centrale: il flusso di dimensione retail e quello di dimensione istituzionale spesso non concordano, e Deep Delta rende visibile il disaccordo.

## Che cos'è

Il delta è il volume di acquisti aggressivi meno il volume di vendite aggressive. Il delta classico raggruppa insieme tutte le dimensioni degli scambi; la modalità Multi-Range di Deep Delta filtra gli scambi per dimensione in fino a quattro fasce (ognuna con il proprio minimo e massimo) e traccia il delta di ciascuna fascia come una serie a sé. Linee di soglia e marker verticali segnalano i momenti in cui gli estremi del delta raggiungono i livelli che definisci tu.

## Quando usarlo

- Vuoi vedere se i grandi operatori sono d'accordo con il movimento in corso — o lo stanno contrastando.
- Vuoi eliminare il rumore dei piccoli lotti e leggere solo le dimensioni sopra una soglia.
- Cerchi l'assorbimento: forti spinte di delta in una direzione che il prezzo non segue.
- Usi già Delta Bars e vuoi la stessa lettura con in più il contesto dimensionale ([[delta-bar]] copre la versione classica).

## Avvio rapido

1. Apri un grafico e aggiungi **Deep Delta** dal pulsante **Indicators** del grafico.
2. Imposta **Delta Mode** su **Multi-Range**.
3. Abilita due fasce per iniziare: una con un minimo basso per il flusso piccolo, e una con un filtro **Min** alto (e **Max** = 0, che disattiva il massimo) per il solo flusso grande.
4. Imposta **Input Data** su **Aggregate Trades** in modo che le esecuzioni frazionate vengano ricombinate prima del filtraggio — altrimenti un ordine grande conteggiato come tante piccole esecuzioni finisce nella fascia sbagliata.
5. Applica, e assegna a ogni fascia un colore distinto nella sezione **Subgraph**.

La demo dal vivo qui sotto mostra la lettura di base — il delta per barra con la linea del delta cumulativo. Passa il mouse su qualsiasi barra per la sua storia.

[WIDGET: delta-lab]

## Come leggerlo

- **Le fasce concordano** (tutte positive o tutte negative): la partecipazione è allineata tra le dimensioni — la pressione è ampia.
- **Le fasce divergono**: il caso interessante. Ad esempio, un delta delle dimensioni grandi (una fascia con Min = 50) positivo mentre il delta delle dimensioni piccole è negativo suggerisce che i grandi operatori stanno comprando mentre il retail vende.
- **Marker che scattano mentre il prezzo non segue la spinta del delta**: l'aggressione viene assorbita da ordini passivi — un classico avvertimento che il movimento potrebbe fermarsi o invertire. Vedi [[understanding-icebergs-absorption]].
- **Linee di soglia**: i tuoi livelli di significatività — un delta oltre la linea significa che l'aggressione della barra è insolita secondo la tua definizione.

Per la meccanica di base di bid/ask/aggressore, vedi [[orderflow-101]].

## Riferimento delle impostazioni

Raggruppate come nella finestra di dialogo dell'indicatore.

### Parameters

| Impostazione | Che cosa fa |
|---|---|
| **Delta Mode** | **Classic** (Delta Bars standard, senza filtri) o **Multi-Range** (attiva le fasce di delta filtrato) |
| **Input Data** | Base di calcolo: **Volume** (volume totale scambiato a ogni livello di prezzo — zone ad alta intensità), **Aggregate Trades** (scambi combinati allo stesso livello di prezzo — riduce il rumore da frammentazione delle esecuzioni), **Trades** (numero di transazioni per livello — frequenza degli scambi), **Order** (dati sugli ordini come le quantità di ordini in acquisto/vendita — pressione degli ordini). Vedi [[different-types-of-input]] |
| **Range 1–4** | Ogni fascia ha un filtro **Min**, un filtro **Max** e un interruttore di attivazione. Impostare Max a 0 disattiva il filtro massimo |

### Threshold

| Impostazione | Che cosa fa |
|---|---|
| **Level-settings** | Fino a due linee orizzontali personalizzabili a livelli di delta positivi/negativi definiti |
| **Marker** | Marker verticali quando sia il delta minimo sia il delta massimo raggiungono una soglia impostata — evidenzia spinte di delta opposte all'interno di una singola barra e situazioni di assorbimento |

### Subgraph

| Impostazione | Che cosa fa |
|---|---|
| **Range colors** | Un colore per ogni fascia abilitata |
| **Maximum Positive/Negative Delta shadows** | Colori delle ombre che marcano gli estremi di delta di ogni barra |
| **Line Thickness** | Regola l'aspetto del corpo e delle ombre delle fasce di delta |

[SCREENSHOT: Finestra delle impostazioni di Deep Delta aperta sulla sezione Parameters con Delta Mode impostato su Multi-Range e le quattro righe di fascia con i filtri Min/Max | dc-it-deep-delta-01.png]

## Suggerimenti ed errori comuni

- **Non viene tracciato nulla in modalità Multi-Range?** Le fasce devono essere abilitate una per una, e i filtri Min/Max non devono escludere tutto — ricorda che Max = 0 disattiva il massimo, quindi verifica se il tuo Min è sopra le dimensioni di delta effettivamente scambiate. Conferma anche la scelta di Input Data.
- **Vuoi solo il delta dei grandi operatori?** Una sola fascia abilitata con un filtro Min alto, e **Input Data** = **Aggregate Trades** in modo che le esecuzioni frazionate vengano prima ricombinate nella loro dimensione originale.
- **Le fasce sembrano identiche?** I tuoi confini Min/Max potrebbero sovrapporsi in modo consistente — rendi distinte le bande dimensionali (ad esempio 1–9, 10–49, 50+).
- **Marker dappertutto?** La soglia è troppo bassa per il delta tipico dello strumento. Alzala finché i marker non segnalano barre davvero insolite.
- Il delta misura l'aggressione, non il risultato — leggilo sempre insieme al prezzo. Un delta positivo forte senza progresso al rialzo è un'osservazione ribassista, non rialzista.

## Articoli correlati

- [[delta-bar]]
- [[orderflow-101]]
- [[deep-print]]
- [[understanding-icebergs-absorption]]
- [[different-types-of-input]]
- [[indicator-layout]]