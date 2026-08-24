---
title: "Big Trades"
slug: "big-trades"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Segna i grandi ordini a mercato aggressivi direttamente sul grafico e può disegnare zone a partire da essi, così vedi dove è stato scambiato il size e quali livelli contano."
keywords: ["big trades", "indicatore grandi scambi", "big print", "grandi ordini sul grafico", "big trades analysis", "filtro dimensione scambi", "whale trades", "block trades"]
source_hash: "f4225a8a8dea556f"
ai_translated: true
source_hash: "f4225a8a8dea556f"
---
Big Trades visualizza in tempo reale i grandi ordini a mercato aggressivi, evidenziando l'attività significativa di acquisto e vendita direttamente sul grafico. Invece di scandagliare il nastro alla ricerca di size, vedi comparire marcatori al prezzo e alla barra esatti in cui i grandi partecipanti hanno eseguito — e, opzionalmente, zone orizzontali che si estendono da quei prezzi.

L'indicatore può filtrare manualmente per dimensione dello scambio oppure usare l'algoritmo integrato **Big Trades Analysis** per calcolare automaticamente soglie sensate per il tuo simbolo.

Prima di regolare qualsiasi filtro, osserva il tape dal vivo qui sotto — le stampe fuori misura che spiccano nel flusso sono esattamente ciò che Big Trades segna sul tuo grafico. Passa il mouse su una stampa per vedere perché conta.

[WIDGET: tape-lab]

## Che cos'è

Big Trades traccia un marcatore (cerchio, quadrato, rombo o testo) ogni volta che uno scambio supera il tuo filtro di dimensione. Il colore del marcatore separa i compratori aggressivi (**Ask Color**) dai venditori aggressivi (**Bid Color**), e la dimensione del marcatore scala con la dimensione dello scambio. Poiché i grandi ordini definiscono spesso supporti e resistenze, l'indicatore può anche disegnare zone da quei prezzi ed estenderle in avanti per un numero di barre impostato.

[SCREENSHOT: Finestra del grafico con l'indicatore Big Trades attivo — marcatori circolari di varie dimensioni su diverse candele, marcatori color ask sui movimenti rialzisti e color bid su quelli ribassisti, con una zona orizzontale che si estende verso destra da uno scambio grande | dc-it-big-trades-01.png]

## Quando usarlo

- Vuoi rilevare compratori o venditori aggressivi nel momento in cui colpiscono il mercato con size.
- Segni livelli di prezzo ad alto impatto: i prezzi dove sono stati eseguiti grandi scambi vengono spesso ritestati e difesi.
- Studi le dinamiche dell'orderflow — se i grandi operatori tradano con o contro il movimento corrente.
- Vuoi un'alternativa basata sul grafico all'osservazione del size su [[adv-time-and-sales]].

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico e aggiungi **Big Trades**.
2. Apri le **Settings** dell'indicatore.
3. In **Data Settings**, imposta **Filter Mode** su **Manual** e scegli un valore **Min** chiaramente sopra la media per il tuo simbolo (per esempio, **Min = 30** traccia solo gli scambi da 30 contratti in su).
4. In **Plot Settings**, mantieni **Marker Type** su **Circle** e lascia il ridimensionamento **Standard Deviation** al valore predefinito (consigliato).
5. Verifica che **Ask Color** e **Bid Color** siano facili da distinguere sullo sfondo del tuo grafico.
6. Quando ti senti a tuo agio, passa **Filter Mode** su **Automatic** ed esegui l'analisi (vedi sotto) in modo che le soglie si adattino al simbolo.

[SCREENSHOT: Finestra delle impostazioni di Big Trades aperta su Data Settings — Days to Load, Input Type, Filter Mode impostato su Manual e i campi del filtro manuale Min/Max visibili | dc-it-big-trades-02.png]

## Come leggerlo

- **Grande marcatore color ask su una spinta rialzista** — un compratore aggressivo che alza l'offerta; convinzione nella direzione del movimento.
- **Grande marcatore color bid contro un supporto che non riesce a romperlo** — è stato venduto size e il livello ha retto: potenziale assorbimento (vedi [[understanding-icebergs-absorption]]).
- **Cluster di grandi scambi a un prezzo** — un livello a cui le istituzioni tengono; le zone opzionali fanno persistere visivamente questi livelli.
- **Grandi scambi contro trend vicino agli estremi** — possibile presa di posizione per un'inversione; conferma con il delta e il contesto invece di agire su una singola stampa.

## Riferimento delle impostazioni

### Data Settings

| Impostazione | Che cosa fa |
|---|---|
| **Days to Load** | Quanti giorni storici di dati dei grandi scambi compaiono sul grafico. |
| **Input Type** | Quale tipo di dati orderflow usa l'indicatore. Vedi [[different-types-of-input]]. |
| **Filter Mode** | **Manual** filtra con i tuoi valori Min/Max; **Automatic** usa l'algoritmo Big Trades Analysis per determinare le soglie ottimali. |
| **Manual Filter (Min & Max)** | Dimensioni minima e massima degli scambi visualizzati. Esempio: con **Min = 30**, vengono tracciati solo gli scambi da 30 contratti in su — questo taglia il rumore e mantiene il focus sugli scambi significativi. |

### Plot Settings

| Impostazione | Che cosa fa |
|---|---|
| **Marker Type** | **Circle**, **Square**, **Diamond** o **Text**. |
| **Hollow Fill** | Disegna i contorni dei marcatori senza colore di riempimento. |
| **Standard Deviation** | Controlla come la dimensione del marcatore scala con la dimensione dello scambio (predefinito consigliato). |
| **Minimum Size** / **Maximum Size** | Dimensioni minima e massima dei marcatori. |
| **Minimum Opacity** / **Maximum Opacity** | Intervallo di trasparenza dei marcatori. |
| **Ask Color** | Colore del marcatore per i compratori aggressivi. |
| **Bid Color** | Colore del marcatore per i venditori aggressivi. |
| **Plot Only Inside Bar** | (Tipo di marcatore Text) Limita il testo al corpo della candela. |
| **Text Size** / **Text Color** | (Tipo di marcatore Text) Dimensione e colore del carattere. |

### Zones Settings

Quando attivato, l'indicatore traccia zone orizzontali basate sui grandi scambi.

| Impostazione | Che cosa fa |
|---|---|
| **Biggest Only** | Traccia zone solo per gli scambi più grandi. |
| **Shadow Mode** | Zone per gli scambi nell'ombra della candela: **All**, **Reverse Only** (candela ribassista → compratori aggressivi; candela rialzista → venditori aggressivi), **Trend Only** (candela ribassista → venditori aggressivi; candela rialzista → compratori aggressivi) o **None**. |
| **Body Mode** | Le stesse quattro opzioni di Shadow Mode, applicate agli scambi all'interno del corpo della candela. |
| **Bid Color / Ask Color** | Colori delle zone per ciascun lato dello scambio. |
| **Opacity** | Trasparenza delle zone. |
| **Number of Bars** | Fin dove le zone si estendono verso destra. |

### Big Trades Analysis (modalità Automatic)

Big Trades Analysis è un algoritmo di DeepCharts che calcola dinamicamente le soglie ottimali dei grandi scambi in base al comportamento del prezzo e alla volatilità del simbolo selezionato. I risultati vengono salvati automaticamente, quindi ti basta eseguirlo circa una volta a settimana o al mese — non prima di ogni sessione.

Per usarlo:

1. Applica l'indicatore Big Trades al tuo grafico.
2. Apri le **Settings** dell'indicatore e imposta **Filter Mode** su **Automatic**.
3. Seleziona un **Intensity Level**: **Low**, **Medium** o **Strong**.
4. Salva le impostazioni.
5. Vai su **Options → Tools → Big Trades Analysis** ed esegui l'analisi.
6. Ricarica o riavvia il grafico se i marcatori non si aggiornano.

L'indicatore applica poi automaticamente le soglie ottimizzate ai tuoi grafici.

[SCREENSHOT: Menu Options espanso che mostra Tools → Big Trades Analysis, con la finestra dello strumento di analisi aperta e pronta all'esecuzione | dc-it-big-trades-03.png]

## Suggerimenti ed errori comuni

- **Non impostare Min troppo basso.** Una soglia vicina alla dimensione media degli scambi inonda il grafico di marcatori e nasconde i veri outlier — parti alto e abbassala gradualmente.
- **Riesegui l'analisi dopo i cambi di regime di volatilità.** Le soglie automatiche vengono salvate, ma un simbolo la cui volatilità è raddoppiata dall'ultima esecuzione merita un'analisi fresca.
- **Reverse Only e Trend Only fanno la differenza.** Queste modalità di zona classificano gli stessi scambi sulle ombre in modo diverso — scegli quella che corrisponde a ciò che vuoi studiare (pressione in controtendenza o size a favore di trend) invece di attivarle entrambe.
- **Una singola stampa grande è contesto, non un segnale.** Combinala con la reazione del livello, il delta e la struttura prima di tradarla.

## Articoli correlati

- [[adv-time-and-sales]]
- [[deep-trades]]
- [[understanding-icebergs-absorption]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]