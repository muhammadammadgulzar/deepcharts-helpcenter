---
title: "Session Marker"
slug: "session-marker"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "beginner"
time: "6 min read"
description: "Segna sul grafico le sessioni di trading asiatica, europea e statunitense, con massimo, minimo, apertura, chiusura e range di squilibrio di ogni sessione disegnati come livelli."
keywords: ["session marker", "sessioni di trading", "sessione asiatica", "sessione europea", "sessione usa", "massimo minimo di sessione", "apertura di sessione", "initial balance", "orari di sessione", "sesion marker"]
source_hash: "8a08dfc4c62160b4"
ai_translated: true
source_hash: "8a08dfc4c62160b4"
---
I mercati dei futures trattano quasi 24 ore su 24, ma il mercato non si comporta alle 3 del mattino come dopo l'apertura statunitense. Il Session Marker suddivide la giornata di trading nelle sue tre sessioni principali — asiatica, europea e USA — e disegna ciascuna direttamente sul tuo grafico insieme ai suoi livelli di riferimento chiave.

Invece di memorizzare gli orari delle sessioni o strizzare gli occhi sull'asse del tempo, vedi a colpo d'occhio quale sessione ha prodotto ogni parte del movimento della giornata e dove si trovano i massimi e i minimi di ciascuna sessione.

## Che cos'è

Il Session Marker visualizza le diverse sessioni di mercato (asiatica, europea e USA) sul grafico e ne segna i massimi e i minimi. Per ogni sessione abilitata può disegnare:

- Le linee del **massimo e minimo di sessione**.
- I livelli di **massimo e minimo dello squilibrio** — il range costruito durante la finestra di squilibrio di apertura della sessione (60 minuti per impostazione predefinita).
- I livelli di **apertura e chiusura** della sessione.
- **Range di sfondo** ombreggiati per l'intera sessione e per la finestra di squilibrio.
- Un **marcatore di apertura** all'apertura della sessione, con colori separati per le condizioni positive (rialziste) e negative (ribassiste).

## Quando usarlo

- Per vedere all'istante quale sessione — asiatica, europea o USA — ha formato ogni parte del range notturno e diurno.
- Per fare trading contro i livelli overnight: i massimi e i minimi delle sessioni asiatica ed europea agiscono spesso da livelli di reazione una volta aperta la sessione USA.
- Per seguire il range di squilibrio di inizio sessione e osservare breakout o rifiuti ai suoi estremi.
- Per mantenere visibili aperture e chiusure di sessione come prezzi di riferimento senza disegnarle a mano ogni giorno.

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a grafico a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "Session Marker" e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprirne le impostazioni, abilita le sessioni su cui fai trading e verifica l'orario di inizio di ogni sessione rispetto al tuo mercato. La sessione USA ha come orario di inizio predefinito **15:30:00**. [CONFIRM: which time zone session start times are interpreted in]
5. Scegli colori di sfondo contrastanti per ogni sessione, così i tre blocchi sono facili da distinguere.

[SCREENSHOT: Un grafico a 5 minuti sui futures con il Session Marker attivo — tre blocchi di sessione ombreggiati a colori (asiatica, europea, USA) visibili lungo la giornata, con le linee di massimo/minimo di sessione e il range di squilibrio evidenziato all'interno della sessione USA | dc-it-session-marker-01.png]

## Come leggerlo

- **Blocchi di sessione**: ogni blocco ombreggiato è una sessione. Confrontarne le dimensioni ti dice da dove è arrivata la volatilità della giornata — un blocco europeo ampio e un blocco asiatico stretto è un pattern comune nei futures.
- **Massimi e minimi di sessione**: sono riferimenti naturali di supporto e resistenza. Una spinta della sessione USA attraverso il massimo europeo è un trade diverso da un rifiuto su di esso.
- **Range di squilibrio**: il massimo e il minimo formati nei primi minuti della sessione (la finestra **Imbalance Minutes**). Un prezzo che viene accettato fuori da questo range iniziale suggerisce convinzione direzionale; una rotazione ripetuta al suo interno suggerisce equilibrio.
- **Livelli di apertura e chiusura**: l'apertura di sessione in particolare è un riferimento molto osservato — trattare sopra l'apertura è in generale costruttivo per quella sessione, sotto è in generale segno di debolezza.
- **Marcatore di apertura**: segnala l'apertura della sessione, colorato positivo (rialzista) o negativo (ribassista). La regola esatta di colorazione può variare — trattalo come un indizio direzionale rapido piuttosto che come un segnale.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Imbalance Minutes** | Durata della finestra di squilibrio di ogni sessione, misurata dall'apertura della sessione. Il range costruito in questa finestra viene disegnato come livelli di squilibrio. Predefinito: 60. |
| **Line Width** | Spessore delle linee del marcatore. Predefinito: 20. |
| **Line Style** | Aspetto delle linee dei livelli di sessione. |
| **Extended** | Estende le marcature di sessione oltre gli orari di negoziazione standard. |
| **Text Size** | Dimensione del carattere delle etichette di sessione. Predefinito: 11.00. |
| **Text Color** | Colore delle etichette di sessione. |

### Sessioni asiatica, europea e USA

Ciascuna delle tre sessioni ha un blocco di impostazioni identico:

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Attiva o disattiva le marcature della sessione. |
| **Start time** | Quando inizia la sessione. La sessione USA ha come predefinito 15:30:00. |
| **High/low line colors** | Colori delle linee del massimo e del minimo di sessione. |
| **Imbalance high/low colors** | Colori dei livelli di massimo e minimo della finestra di squilibrio. |
| **Open and close colors** | Colori dei livelli di apertura e chiusura di sessione. |
| **Range background colors** | Ombreggiatura di sfondo per l'intero range di sessione e per il range di squilibrio. |

### Open Marker

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Mostra o nasconde il marcatore all'apertura della sessione. |
| **Positive marker color** | Colore usato per il caso rialzista. |
| **Negative marker color** | Colore usato per il caso ribassista. |

[SCREENSHOT: La finestra delle impostazioni del Session Marker con il gruppo General (Imbalance Minutes, Line Width, Line Style, Extended, Text Size, Text Color) e i gruppi delle sessioni asiatica, europea e USA compressi sotto | dc-it-session-marker-02.png]

## Suggerimenti ed errori comuni

- **Verifica gli orari di inizio prima di fidarti dei livelli.** Se un blocco di sessione parte con un'ora di scarto, ogni massimo, minimo e livello di squilibrio eredita l'errore — controlla i valori predefiniti rispetto al calendario effettivo delle sessioni del tuo strumento, anche in prossimità dei cambi di ora legale.
- **Disabilita le sessioni che non usi.** Se fai trading solo sulla mattinata statunitense, tenere attive tutte e tre le sessioni con sfondi e livelli completi affolla il grafico; mantieni le sessioni notturne ma riducile alle sole linee di massimo/minimo tramite le loro impostazioni colore.
- **Il range di squilibrio vale quanto la sua finestra.** I 60 minuti predefiniti sono una scelta comune, ma un prodotto veloce può costruire il suo opening range in molto meno tempo — regola **Imbalance Minutes** in base a come apre davvero il tuo mercato.
- **Abbinalo a un piano consapevole delle sessioni.** I livelli di sessione sono contesto, non ingressi; abbinali ai concetti in [[understanding-market-structure-sessions]] per decidere quali livelli contano oggi.

## Articoli correlati

- [[understanding-market-structure-sessions]]
- [[session-imbalance]]
- [[important-levels]]
- [[pivot-points]]
- [[different-types-of-input]]
- [[indicator-layout]]