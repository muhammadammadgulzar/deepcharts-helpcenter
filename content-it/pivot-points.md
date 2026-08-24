---
title: "Pivot Points"
slug: "pivot-points"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Traccia un livello pivot più le linee di resistenza R1/R2 e di supporto S1/S2 calcolate dal massimo, minimo e chiusura del giorno, della settimana o del mese precedente."
keywords: ["pivot points", "pivot", "R1", "R2", "S1", "S2", "pivot giornalieri", "livelli di supporto e resistenza", "indicatore pivot point", "linee pivot"]
source_hash: "39c9c2f999554fa7"
ai_translated: true
source_hash: "39c9c2f999554fa7"
---
L'indicatore Pivot Points traccia potenziali livelli di supporto e resistenza calcolati dai prezzi di massimo, minimo e chiusura dei periodi precedenti — giornalieri, settimanali o mensili. Disegna un livello pivot centrale con i livelli di resistenza (R1, R2) sopra e i livelli di supporto (S1, S2) sotto, offrendoti una mappa già pronta dei prezzi in cui il mercato ha reagito, ancora prima dell'apertura.

Poiché i livelli derivano da prezzi storici fissi, sono identici per chiunque usi lo stesso calcolo — ed è proprio per questo che così tanti trader li osservano, e che il prezzo reagisce così spesso intorno a essi.

## Che cos'è

Pivot Points è un classico indicatore di livelli. All'inizio di ogni periodo calcola un pivot e i livelli di supporto/resistenza circostanti a partire da massimo, minimo e chiusura del periodo precedente, poi li disegna come linee orizzontali etichettate lungo il nuovo periodo. Risponde alla domanda "in base agli scambi di ieri (o della settimana scorsa, o del mese scorso), dove sono i probabili prezzi di reazione di oggi?"

[CONFIRM: which pivot calculation variant DeepCharts uses to derive the pivot, R1/R2 and S1/S2 from the previous period's high, low and close]

[SCREENSHOT: Grafico intraday con Pivot Points applicato — la linea pivot centrale con R1 e R2 sopra e S1 e S2 sotto, ciascuna linea etichettata e con un colore distinto, con il prezzo che reagisce vicino a R1 | dc-it-pivot-points-01.png]

## Quando usarlo

- Sei alle prime armi con supporti e resistenze e vuoi livelli oggettivi, tracciati automaticamente, invece di trendline soggettive.
- Fai day trading e vuoi la mappa dei pivot giornalieri sul grafico prima dell'apertura della sessione.
- Ti servono prezzi di riferimento comuni — i pivot sono osservati da moltissimi trader, quindi le reazioni intorno a essi tendono ad autoalimentarsi.
- Fai swing trading e vuoi la griglia di pivot settimanale o mensile, più ampia, per target e gestione del rischio.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Pivot Points** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** (impostazioni) accanto all'indicatore.
4. Mantieni **Period to Show** al valore predefinito di **1**, così viene disegnato solo il set di livelli corrente — un grafico pulito mentre impari a usare lo strumento.
5. Assegna alle linee di pivot, resistenza e supporto colori distinti nelle impostazioni dei colori, così distingui a colpo d'occhio i livelli R dai livelli S.
6. Regola **Font Size** (predefinito 12.00) e **Line Width** (predefinito 1.00) a piacere, poi applica.

[SCREENSHOT: Finestra delle impostazioni di Pivot Points che mostra Plot Settings (Font Size 12.00, Line Width 1.00, Line Style, Label Align, Period to Show 1), la sezione Custom Reference - Timeframe, le impostazioni dei colori per Pivot Point, R1, R2, S1, S2 e la sezione Custom Time - Market Timezone | dc-it-pivot-points-02.png]

## Come leggerlo

- **La linea pivot è il punto di equilibrio della sessione.** Scambiare sopra il pivot viene generalmente letto come un bias rialzista per il periodo; sotto, come ribassista. Attraversamenti ripetuti avanti e indietro segnalano una sessione rotazionale, in range.
- **R1 e R2 sono resistenze a scaglioni.** In un movimento al rialzo, R1 è la prima area naturale di reazione e un primo profit target molto comune; R2 segna un movimento esteso per il periodo.
- **S1 e S2 sono supporti a scaglioni.** L'immagine speculare sotto il pivot: S1 è la prima area in cui aspettarsi compratori, S2 una discesa più profonda.
- **I livelli funzionano come zone di inversione di ruolo.** Un livello di resistenza rotto spesso agisce da supporto al retest (e viceversa). Il primo retest di un livello pivot appena rotto è uno dei setup più comuni costruiti su questo indicatore.
- **Abbina il periodo al tuo orizzonte.** I pivot giornalieri si adattano al trading intraday; i pivot settimanali e mensili producono griglie più ampie, rilevanti per ingressi swing e target più grandi.

## Riferimento impostazioni

Raggruppate come nella finestra delle impostazioni.

### Plot Settings

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Font Size** | 12.00 | Dimensione del testo delle etichette dei livelli. |
| **Line Width** | 1.00 | Spessore delle linee pivot. |
| **Line Style** | — | Stile visivo delle linee. |
| **Label Align** | — | Posizione/allineamento delle etichette dei livelli. |
| **Period to Show** | 1 | Quanti periodi di livelli visualizzare. Aumentalo per mantenere sul grafico i livelli dei periodi precedenti come contesto. |

### Custom Reference — Timeframe

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Attiva il riferimento personalizzato, permettendoti di basare i livelli su un periodo di riferimento diverso da quello standard. |
| **Param Type** | Seleziona il tipo di riferimento temporale usato. |
| **Param Value** | Valore per il tipo di parametro scelto. |

### Impostazioni dei colori

| Impostazione | Cosa fa |
|---|---|
| **Pivot Point Color** | Colore della linea pivot centrale. |
| **R1 Color / R2 Color** | Colori del primo e del secondo livello di resistenza. |
| **S1 Color / S2 Color** | Colori del primo e del secondo livello di supporto. |

### Custom Time — Market Timezone

| Impostazione | Predefinito | Cosa fa |
|---|---|---|
| **Enable** | — | Attiva o disattiva la finestra temporale personalizzata. |
| **Ini Time** | 00:00:00 | Ora di inizio del periodo usato per il calcolo. |
| **End Time** | 00:00:00 | Ora di fine del periodo usato per il calcolo. |

> **Suggerimento:** La finestra temporale personalizzata è importante per i futures, dove la giornata dell'exchange e il tuo giorno di calendario locale non coincidono. Definire esplicitamente il periodo assicura che massimo, minimo e chiusura che alimentano i pivot provengano dalla sessione in cui operi davvero.

## Suggerimenti ed errori comuni

- **Non trattare i pivot come punti di svolta garantiti.** Sono prezzi di riferimento, non previsioni. Opera sulla reazione che vedi al livello — rifiuto, assorbimento o rottura netta — non sul livello in sé.
- **Attenzione alla definizione della sessione.** Se i livelli sembrano "sballati" rispetto ad altre piattaforme, il confine del periodo è il colpevole più comune; usa la sezione **Custom Time — Market Timezone** per allineare la finestra di calcolo alla sessione del tuo mercato.
- **Meno periodi, grafico più pulito.** Un **Period to Show** alto seppellisce i livelli correnti sotto quelli vecchi. Tienilo basso in intraday e alzalo solo quando studi come il prezzo ha trattato le griglie passate.
- **Combinali con livelli basati sul volume.** I pivot sono livelli da formula sui prezzi; abbinarli a riferimenti derivati dal volume come [[important-levels]] (POC, aree di valore, VWAP) ti mostra dove i livelli da formula e l'interesse realmente scambiato concordano — quelle confluenze sono le zone più forti.

## Articoli correlati

- [[important-levels]]
- [[absolute-levels]]
- [[price-movement-levels]]
- [[understanding-market-structure-sessions]]
- [[different-types-of-input]]
- [[indicator-layout]]