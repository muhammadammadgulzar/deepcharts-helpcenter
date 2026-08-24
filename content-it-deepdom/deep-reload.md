---
title: "Deep Reload"
slug: "deep-reload"
category: "Deep Indicators"
subcategory: ""
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "Deep Reload (rilevatore di liquidità fresca) scansiona il book di negoziazione in tempo reale per trovare i momenti in cui nuova liquidità in attesa appare improvvisamente vicino al prezzo corrente."
keywords: ["deep reload", "deepdom deep reload", "deepdom", "deep indicators"]
source_hash: "f21e2864b2944ef2"
ai_translated: true
source_hash: "f21e2864b2944ef2"
---
Deep Reload (rilevatore di liquidità fresca) scansiona il book di negoziazione in tempo reale per trovare i momenti in cui *nuova liquidità in attesa* appare improvvisamente vicino al prezzo corrente. Invece di osservare ogni aggiornamento del Level 2, ottieni fasce orizzontali chiare che mostrano dove nuove dimensioni sono appena state aggiunte sul bid (potenziale supporto) o sull'ask (potenziale tetto), aiutandoti a vedere quando i partecipanti più grandi intervengono per difendere un livello o assistere un breakout.

[SCREENSHOT: Deep Reload — panoramica (DeepDOM) | dd-it-deep-reload-01.png]

## Come configurare Deep Reload

Segui questi passaggi per aggiungere l'indicatore al tuo grafico:

Fai clic con il tasto destro del mouse sul grafico -> Indicators

Trova Deep Reload nell'elenco e fai clic su + per aggiungerlo.

Fai clic sull'icona delle impostazioni sull'indicatore per aprire la sua finestra di configurazione.

[SCREENSHOT: Deep Reload — Come configurare Deep Reload (DeepDOM) | dd-it-deep-reload-02.png]

## 1. Concetto: liquidità fresca in attesa

La liquidità in attesa è il volume visibile presente nel book di negoziazione a ciascun livello di prezzo. Quando un grande trader o un algoritmo decide di entrare in gioco, spesso *aggiunge dimensioni vicino al prezzo corrente* invece di inseguire il movimento. Deep Reload si concentra su queste aggiunte: rileva quando una quantità significativa di nuovo volume appare improvvisamente in una fascia stretta di prezzi intorno all'inside market.

Questa liquidità fresca può agire come cuscinetto (bid che si impilano sotto il prezzo per sostenerlo) o come tetto (ask che si impilano sopra il prezzo per rallentare o invertire un rally). In molti casi il comportamento è legato a ordini iceberg o suddivisi, dove solo una parte della dimensione reale viene mostrata alla volta ma il trader continua a riaggiungere liquidità nella stessa area.

L'obiettivo di Deep Reload non è mostrare tutti i cambiamenti del book, ma evidenziare *solo le ricariche che superano le tue soglie di dimensione*, così le aree importanti restano visibili anche quando il grafico è rimpicciolito.

## 2. Impostazioni generali

[SCREENSHOT: Deep Reload — 2. Impostazioni generali (DeepDOM) | dd-it-deep-reload-03.png]

### 2.1 Value Type

Value type controlla come Deep Reload sceglie le soglie di dimensione che definiscono un segnale:

Automatic – le soglie derivano dalle condizioni correnti del book di negoziazione, adattandosi alla profondità e volatilità tipiche di ciascuno strumento.

Manual – ti consente di specificare tu stesso i valori numerici per *Total value* e *Pull value*.

### 2.2 Total Value

Total value definisce quanto *nuovo* volume deve apparire in un'area di prezzo prima che una fascia Deep Reload venga disegnata. L'indicatore somma tutte le aggiunte qualificanti in quell'area in un breve periodo; solo quando il totale supera questa soglia la zona viene tracciata.

Usa valori più alti su mercati molto liquidi (ES, NQ) e valori più bassi su prodotti più sottili, così i segnali rappresentano liquidità fresca davvero significativa per quello strumento.

### 2.3 Pull Value

Pull value è la dimensione minima che deve essere *rimossa o modificata* dal book in un singolo evento perché Deep Reload tratti la sequenza come una ricarica intenzionale anziché come rumore casuale. Le piccole micro-cancellazioni sotto questo valore vengono ignorate.

In pratica, molti pattern di ricarica prevedono una combinazione di volume ritirato e poi rapidamente riaggiunto agli stessi livelli o a quelli vicini. Pull value aiuta l'algoritmo a distinguere queste sequenze dalle normali fluttuazioni del book.

### 2.4 Number of Levels

Number of levels dice a Deep Reload quanto ampia deve essere la fascia intorno al prezzo da monitorare. Ad esempio, con un valore di 10 l'indicatore traccia la liquidità fresca sui primi 10 bid e sui primi 10 ask e aggrega gli eventi qualificanti in un'unica zona quando avvengono all'interno di quella finestra.

Valori più piccoli concentrano il rilevatore molto vicino all'inside market; valori più grandi catturano liquidità più profonda che può comunque essere rilevante quando fai trading con stop più ampi

## 3. Impostazioni di visualizzazione

[SCREENSHOT: Deep Reload — 3. Impostazioni di visualizzazione (DeepDOM) | dd-it-deep-reload-04.png]

La sezione Plot Settings definisce come le zone di liquidità fresca appaiono visivamente sul grafico.

### 3.1 Ask / Bid Color

Scegli colori separati per le zone di ricarica su Ask e Bid. Per impostazione predefinita, DeepDom usa il viola per la liquidità fresca sul lato ask (potenziale resistenza) e il verde per la liquidità fresca sul lato bid (potenziale supporto).

### 3.2 Opacity

Opacity imposta la trasparenza delle fasce orizzontali. Un'opacità più bassa le rende discrete quando hai già molti overlay; un'opacità più alta enfatizza le ricariche come livelli decisionali primari.

### 3.3 Plot Min Bar Width

Plot min bar width impone una larghezza orizzontale minima, così che ogni fascia resti visibile anche quando riduci lo zoom

### 3.4 Plot Max Ticks

Plot max ticks limita l'altezza verticale di ogni zona in tick di prezzo. Quando la liquidità fresca viene rilevata su più livelli adiacenti, Deep Reload li raggruppa in un'unica fascia fino a questo intervallo massimo, così puoi vedere l'intera area difesa a colpo d'occhio.

## 4. Filtro di trend

[SCREENSHOT: Deep Reload — 4. Filtro di trend (DeepDOM) | dd-it-deep-reload-05.png]

Il filtro opzionale Trend Filter limita i segnali a quelli allineati con un trend di breve termine su un periodo di lookback configurabile.

Enable trend filter – attiva o disattiva questo comportamento.

Trend filter lookback (minutes) – imposta quanti minuti di price action recente vengono usati per stimare la direzione del trend (ad es. tramite una media mobile o un confronto con il VWAP).

Con il filtro attivato, puoi scegliere di concentrarti solo sulla liquidità fresca che *supporta* il bias corrente (ad es. ricariche sul bid in un movimento rialzista, ricariche sull'ask in un movimento ribassista) e ignorare le fasce controtrend.

## 5. Avvisi

[SCREENSHOT: Deep Reload — 5. Avvisi (DeepDOM) | dd-it-deep-reload-06.png]

Hai anche la possibilità di impostare un avviso per i segnali dell'indicatore

## 6. Usi pratici nel trading

### 6.1 Individuare i livelli difesi

Quando Deep Reload disegna ripetute fasce verdi appena sotto il prezzo, suggerisce che i compratori stanno intervenendo con nuova liquidità in attesa per difendere quell'area. Molti trader usano queste zone come livelli di riferimento per ingressi long con un rischio contenuto appena oltre la fascia.

### 6.2 Rilevare l'assorbimento vicino a massimi o minimi

Fasce viola che si formano intorno ai massimi recenti indicano liquidità fresca sull'ask che sta assorbendo i compratori aggressivi. Se il prezzo fatica ad attraversare nonostante un forte flusso in acquisto, può segnalare un potenziale esaurimento e una possibile inversione.

### 6.3 Supportare i breakout

Nei breakout, le fasce che si formano *dietro* il movimento — bid che si ricaricano appena sotto una rottura rialzista o ask che si ricaricano appena sopra una rottura ribassista — mostrano che i player più grandi stanno aiutando a mantenere il nuovo range invece di andargli contro. Queste zone diventano spesso utili ingressi sui pullback.

## 7. Buone pratiche

Calibra per strumento: inizia con il value type Automatic, osserva la frequenza tipica delle fasce, poi passa alle soglie manuali se hai bisogno di più o meno segnali.

Combina con gli altri strumenti di DeepDom: allinea le zone Deep Reload con il CVD e con Deep Trades per costruire un quadro completo della partecipazione passiva rispetto a quella aggressiva.

Evita di affidarti troppo a singole fasce: tratta le zone di liquidità fresca come contesto e conferma, non come trigger di trade a sé stanti.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24 ore su 24, 7 giorni su 7, pronto ad aiutarti con qualsiasi problema tu possa incontrare.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Ticket di supporto (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.