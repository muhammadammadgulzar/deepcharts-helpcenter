---
title: "Broker, prop firm e feed dati supportati"
slug: "compatibility-guide"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "reference"
difficulty: "beginner"
time: "7 min read"
description: "Ogni broker, prop firm e feed dati che si connette a DeepCharts, con i valori esatti di Feed Source e Server per ciascuno."
keywords: ["compatibilità", "broker supportati", "prop firm supportate", "la mia prop firm è supportata", "apex", "topstep", "tradovate", "rithmic paper trading", "dxfeed prop", "lista server", "quale feed", "ninjatrader"]
source_hash: "7d9f341a746fbbfa"
ai_translated: true
source_hash: "7d9f341a746fbbfa"
---
DeepCharts si connette ai dati di mercato in tempo reale attraverso un piccolo insieme di tecnologie di feed — Rithmic, dxFeed, CQG e l'API TWS di Interactive Brokers — ma decine di broker e prop firm emettono conti basati su queste tecnologie. Questa pagina è la lista principale: chi è supportato, quale **Feed Source** scegliere e quale valore di **Server** appartiene a ciascun provider.

Se il tuo provider è elencato qui, la connessione richiede pochi minuti in [[connect-data-feed|Feed Settings]]. Se si trova nella tabella dei non supportati in fondo, DeepCharts non può connettersi direttamente — ma puoi comunque fare grafici su un feed supportato ed eseguire le operazioni sulla piattaforma del provider stesso.

## Che cos'è

Una matrice di compatibilità. Risponde a tre domande prima ancora di toccare le impostazioni: "Il mio conto può connettersi a DeepCharts?", "Quale Feed Source seleziono?" e "Cosa va esattamente nel campo Server?" Risposte sbagliate alle ultime due sono le cause più comuni di una connessione che resta rossa, quindi tratta le tabelle qui sotto come il riferimento definitivo.

## Quando usarla

- Stai scegliendo un broker o una prop firm e vuoi sapere se funzionerà con DeepCharts prima di pagare.
- Hai già un conto e ti servono i valori esatti di **Feed Source** e **Server** per [[connect-data-feed|Feed Settings]].
- Il tuo indicatore di connessione resta rosso e sospetti un valore di Server sbagliato — vedi [[fix-bad-server]].
- Qualcuno ti ha detto che una piattaforma "funziona con tutto" e vuoi verificarlo prima di acquistare.

## Avvio rapido

1. Trova il tuo provider nelle tabelle sotto Riferimento impostazioni.
2. Prendi nota del suo valore di **Feed Source** e, dove esiste, del suo valore di **Server**.
3. Firma il contratto per i dati di mercato per quel tipo di conto — vedi [[sign-market-data-agreement]].
4. Inserisci i valori in **Select Connection → Feed Settings** — vedi [[connect-data-feed]].
5. Instrada i tuoi exchange sul nuovo feed in **Options → Symbol Manage** — vedi [[symbol-manage]].

Prova il mock interattivo di Feed Settings qui sotto — apri il menu a discesa Feed Source e guarda i campi cambiare per ciascuna sorgente.

[WIDGET: feed-navigator]

## Come leggerla

- **Feed Source** è il valore del menu a discesa in Feed Settings. Nota che Rithmic compare come **Rithmic RAPI** e **Rithmic Wss - beta** — non esiste una voce semplice "Rithmic". Scegli **Rithmic RAPI**; è la sorgente consigliata.
- **Server** è un campo separato che compare solo per alcune sorgenti. Deve corrispondere esattamente alla tabella. Quando Feed Source è **dxFeed Prop**, non compare alcun campo Server — non cercarlo.
- **Contratto** ti dice dove si firma il contratto per i dati di mercato per quel tipo di conto. Ogni feed in tempo reale ne richiede uno prima di connettersi; vedi [[sign-market-data-agreement]].

## Riferimento impostazioni

### Prop firm — conti Rithmic

Tutti i conti Rithmic delle prop firm usano **Feed Source = Rithmic RAPI**. I conti Evaluation e Funded si connettono allo stesso modo. Il contratto si firma dentro R Trader Pro per ogni conto Rithmic.

| Prop firm | Valore Server |
|---|---|
| Apex Trader Funding | Apex |
| 4PropTrader | 4PropTrader |
| 10X Futures | 10XFutures |
| Bulenox | Bulenox |
| DayTraders.com | DayTraders.com |
| Earn2Trade | Earn2Trade |
| FundedFuturesNetwork | FundedFuturesNetwork |
| Legends Trading | LegendsTrading |
| Lucid Trading | LucidTrading |
| MES Capital | MES Capital |
| PropShopTrader | PropShopTrader |
| The Trading Pit | TheTradingPit |
| Thrive Trading | ThriveTrading |
| TradeFundrr | TradeFundrr |
| Tradeify | Tradeify [CONFIRM: exact Tradeify server spelling in the dropdown] |
| tradesea | tradesea (in minuscolo nel menu a discesa) |
| TakeProfitTrader | Rithmic Paper Trading |
| OneUpTrader | Rithmic Paper Trading |

> **Nota:** Se la tua prop firm Rithmic non è in questa tabella e il suo nome non compare nel menu a discesa Server, seleziona **Rithmic Paper Trading** — è il server predefinito di Rithmic per i conti solo-feed-dati e per le prop firm più piccole. Lo stesso valore si usa in R Trader Pro. Vedi [[connect-rithmic-prop-firm]] per la procedura completa, o [[connect-apex]] per la guida specifica di Apex.

### Prop firm — conti dxFeed

Queste firm emettono credenziali dxFeed. Usa **Feed Source = dxFeed Prop** — questa sorgente non ha il campo Server. Il contratto si firma sulla dashboard della prop firm stessa (o tramite il loro link via email), mai in R Trader Pro. Procedura completa: [[connect-dxfeed-prop-firm]].

| Prop firm | Note |
|---|---|
| Aqua Futures | Include una licenza della piattaforma DeepCharts |
| MyFundedFutures (MFF) | Include una licenza della piattaforma DeepCharts |
| Phidias | Emette dxFeed (non Rithmic, nonostante alcune documentazioni più vecchie) |
| YRM Prop | Include una licenza della piattaforma DeepCharts |
| BlueSky Trading | Offre sia conti dxFeed sia conti Rithmic — verifica quale hai acquistato; la variante Rithmic usa Server = Rithmic Paper Trading |
| SoloClashes | — |
| Goat Funded Futures | Offre sia CQG sia dxFeed — solo il conto dxFeed funziona con DeepCharts |

> **Nota:** Al checkout queste firm ti chiedono di scegliere una piattaforma di trading. Scegliere DeepCharts o DeepDom produce le stesse credenziali dxFeed funzionanti — entrambe le scelte si connettono. Solo la scelta di una piattaforma non correlata (Tradovate, NinjaTrader, Quantower e simili) rompe la compatibilità; in quel caso chiedi al supporto della firm di cambiare la tua selezione di piattaforma in modo che possano riemettere le credenziali.

### Broker di futures

| Broker | Tipi di conto | Valore Server Rithmic |
|---|---|---|
| AMP Futures | CQG o Rithmic | Rithmic 01 |
| EdgeClear | CQG o Rithmic | Rithmic 01 |
| Ironbeam | CQG o Rithmic | Rithmic 01 |
| Phillips Capital | CQG o Rithmic | Rithmic 01 |
| Optimus Futures | CQG o Rithmic | Rithmic 01 |
| Interactive Brokers (IBKR) | API TWS — solo esecuzione | — |

I conti CQG dei broker usano **Feed Source = CQG**; vedi [[connect-cqg]]. I conti CQG funzionano esattamente in due casi: emessi da uno di questi broker, o emessi da una prop firm direttamente da CQG. Un conto CQG che arriva tramite Tradovate o NinjaTrader non può essere connesso.

IBKR restituisce dati aggregati, quindi è utile solo per l'esecuzione delle operazioni — devi abbinarlo a un feed dati reale (Rithmic o dxFeed) e instradare i tuoi grafici su quel feed in [[symbol-manage|Symbol Manage]]. Vedi [[connect-interactive-brokers]].

### Feed dati diretti (senza broker o prop firm)

| Dove l'hai acquistato | Feed Source | Server | Contratto firmato |
|---|---|---|---|
| dxFeed dal sito DeepCharts | dxFeed | Website Account | Dashboard DeepCharts — Sign Market Data Contract |
| Rithmic dal sito DeepCharts | Rithmic RAPI | Rithmic Paper Trading | Dentro R Trader Pro |
| dxFeed da dxfeed.com | dxFeed | dxFeed Account | Sul sito dxFeed |
| Rithmic emesso tramite un'altra piattaforma (Quantower, Sierra Chart, MotiveWave, ATAS, NinjaTrader...) | Rithmic RAPI | Rithmic Paper Trading | Dentro R Trader Pro |
| Feed gratuito ritardato di 15 minuti (integrato) | 15 min delayed | — | Nessuno richiesto |
| Conto DeepCharts Competition | V-Sim | — | Vedi [[competition-connect]] |

> **Attenzione:** Le credenziali dxFeed emesse tramite altre piattaforme di charting non possono essere usate con DeepCharts — solo le credenziali Rithmic si trasferiscono in quel modo. E quando acquisti su dxfeed.com devi selezionare DeepCharts come piattaforma al momento dell'acquisto, altrimenti le credenziali non saranno compatibili.

> **Nota:** Rithmic non vende feed dati da rithmic.com. Se credi di aver acquistato "Rithmic da Rithmic", il conto in realtà è arrivato da un broker, da una prop firm, da una piattaforma di terze parti o dal sito DeepCharts — trova quella riga qui sopra.

### Profondità del mercato per feed

La capacità di profondità conta se fai trading con il DOM o con gli indicatori di orderflow.

| Feed | Profondità Level 2 |
|---|---|
| dxFeed (exchange del gruppo CME) | MBO — un campo DOM Type ti consente di scegliere tra MBO e il più leggero MBP |
| Rithmic (exchange del gruppo CME) | Sempre MBO — nessuna scelta MBO/MBP |
| dxFeed (azioni ed exchange non-CME come Eurex) | Non MBO |
| CQG | Non MBO; profondità completa per ES ma non per NQ |

### Non supportati

Questi provider non emettono credenziali che DeepCharts possa usare. La soluzione alternativa è la stessa per tutti: connetti un qualsiasi feed supportato (il feed gratuito ritardato di 15 minuti va bene per iniziare — vedi [[free-delayed-data-feed]]), analizza su DeepCharts e inserisci manualmente le tue operazioni sulla piattaforma del provider.

| Provider | Tipo |
|---|---|
| TopStep | Prop firm |
| Tradovate | Broker |
| TradeStation | Broker |
| Charles Schwab | Broker |
| Tastytrade | Broker |
| FundedNext Futures | Prop firm |
| FTMO | Prop firm CFD |
| FP Markets | Broker CFD |
| IC Markets | Broker CFD |
| HankoTrade | Broker CFD |
| Vantage Markets | Broker CFD |

## Suggerimenti ed errori comuni

- **Il valore Server è esatto.** "Apex" non è "Paper Trading", e la voce dedicata di una firm non è intercambiabile con il valore di ripiego. Un Server sbagliato è la seconda causa più comune di un indicatore di connessione rosso dopo le credenziali sbagliate — vedi [[fix-bad-server]].
- **CQG deve arrivare direttamente da CQG.** Il CQG emesso dai broker (AMP, EdgeClear, Ironbeam, Phillips Capital, Optimus) e il CQG delle prop firm emesso direttamente da CQG funzionano entrambi. Il CQG tramite Tradovate o NinjaTrader non funziona mai. La stessa divisione vale per i conti NinjaTrader: le credenziali Rithmic di NinjaTrader si connettono (Server = Rithmic Paper Trading); le credenziali CQG di NinjaTrader no.
- **Le credenziali del feed non sono i login del sito web.** Prop firm e broker emettono credenziali Rithmic o dxFeed separate, di solito in un'email di benvenuto. Inserire il login della dashboard della tua firm è la causa numero uno degli errori di connessione — vedi [[fix-username-password]].
- **Bulenox si scrive Bulenox** — gli utenti spesso digitano "Bluenox" e poi non trovano la voce del server.
- **Puoi salvare più connessioni** e passare dall'una all'altra dal selettore del feed nella barra principale — vedi [[manage-feed-connections]].

## Articoli correlati

- [[connect-data-feed]]
- [[sign-market-data-agreement]]
- [[connect-rithmic-prop-firm]]
- [[connect-dxfeed-prop-firm]]
- [[connect-cqg]]
- [[symbol-manage]]