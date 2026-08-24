---
title: "VWAP Envelopes"
slug: "vwap-envelopes"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Riferimento per l'indicatore VWAP Envelopes in DeepCharts: VWAP continuo con bande a deviazione standard o percentuale, impostazioni del Period Mode e come fare trading con le envelope."
keywords: ["vwap envelopes", "bande vwap", "deviazione standard vwap", "prezzo medio ponderato per il volume", "bande di deviazione vwap", "vwap continuo", "envelope vwap"]
source_hash: "98cc1a74dcccc427"
ai_translated: true
source_hash: "98cc1a74dcccc427"
---
L'indicatore VWAP Envelopes mostra il prezzo medio ponderato per il volume (VWAP, Volume-Weighted Average Price) degli scambi effettuati durante un certo periodo di tempo, insieme a bande di deviazione standard attorno ad esso. Le envelope misurano la distanza media dei prezzi dal valore medio, aiutandoti a valutare quanto il prezzo sia teso rispetto alla media ponderata per il volume.

Una distinzione chiave rispetto a un classico VWAP di sessione: questo indicatore calcola in modalità continua, aggiornandosi progressivamente anziché azzerarsi a mezzanotte. Questo comportamento rolling lo rende particolarmente adatto all'analisi intraday che attraversa i confini di sessione.

## Che cos'è

Le VWAP Envelopes rispondono alla domanda: dov'è il prezzo equo ponderato per il volume, e quanto lontano da esso sta scambiando il mercato in questo momento? L'indicatore traccia la linea VWAP sopra il prezzo più fino a tre bande envelope su ciascun lato, costruite dalle deviazioni standard del prezzo attorno al VWAP oppure da percentuali fisse di esso.

Poiché il VWAP pondera ogni prezzo con il volume scambiato a quel livello, rappresenta la posizione media dei partecipanti al mercato nel periodo — motivo per cui la distanza dal VWAP viene spesso letta come premio (sopra) o sconto (sotto).

> **Nota:** Il VWAP calcolato da questo indicatore coincide con il VWAP del Daily Volume Profile solo a fine sessione. Durante la giornata, il calcolo continuo e un VWAP ancorato alla sessione differiranno.

Il modello interattivo qui sotto mostra l'idea — regola le bande sigma attorno al VWAP e passa il mouse sul grafico per una lettura dello z-score di quanto il prezzo è teso.

[WIDGET: vwap-lab]

## Quando usarlo

- Identificazione di supporti e resistenze — la linea VWAP e le bande esterne sono livelli di reazione molto osservati.
- Riconoscimento di premio/sconto — valutare se il prezzo attuale è caro o conveniente rispetto alla media ponderata per il volume.
- Trading di ritorno alla media — contrastare le spinte verso le bande esterne riportandole verso il VWAP in condizioni di equilibrio.
- Conferma di breakout — un'accettazione sostenuta oltre una banda esterna segnala vera iniziativa, non rumore.
- Precisione intraday — il calcolo continuo mantiene il riferimento valido attraverso il confine della mezzanotte.

## Guida rapida

1. Apri un grafico dei prezzi — vedi [[first-chart]].
2. Fai clic sul pulsante verde **Indicators** (o premi **Ctrl I**) per aprire l'**Indicator List**.
3. Cerca **VWAP Envelopes** e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona dell'ingranaggio per aprire le sue impostazioni.
5. Come configurazione di partenza, imposta **Period Mode** su **Daily** con un **Period Value** di 1 per una vista rolling di un giorno, mantieni **Envelope Mode** su **Standard Deviation** e abilita la 1ª e la 2ª banda. Il comportamento rolling esatto rispetto ai tuoi orari di sessione può variare — verifica sul tuo strumento prima di affidarti ai livelli.

[SCREENSHOT: Finestra delle impostazioni di VWAP Envelopes aperta che mostra Period Mode (Daily/Minutes), Period Value, Envelope Mode (Standard Deviation / Price Percentage) e i parametri delle bande 1st/2nd/3rd Standard | dc-it-vwap-envelopes-01.png]

## Come leggerlo

- **Il VWAP come gravità della sessione.** Prezzo sopra il VWAP con i pullback che lo tengono = compratori in controllo; l'immagine speculare sotto. Attraversamenti ripetuti del VWAP = equilibrio.
- **Le bande statistiche.** In modalità Standard Deviation le bande portano la consueta intuizione della distribuzione normale: circa il 68% dell'azione dei prezzi cade tipicamente entro 1 deviazione standard, circa il 95% entro 2 e circa il 99,7% entro 3. Un tocco della 2ª o 3ª banda è quindi un prezzo statisticamente teso.
- **Ritorno alla media contro accettazione.** Un rapido rifiuto a una banda esterna verso il VWAP favorisce il ritorno alla media. Un prezzo che chiude e si mantiene oltre una banda — "accettazione" — ribalta la lettura verso la forza del breakout.
- **Zone di premio e sconto.** I long presi molto sotto il VWAP comprano a sconto rispetto al partecipante medio; gli short molto sopra vendono a premio. Questa impostazione conta soprattutto per gli stili di ritorno alla media.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Period Mode** | Seleziona il tipo di finestra di calcolo: **Daily** per una prospettiva di più lungo periodo su n giorni, o **Minutes** per un'analisi di periodo più breve che segue più da vicino il movimento di prezzo e volume. |
| **Period Value** | Il parametro numerico corrispondente alla modalità selezionata (numero di giorni o di minuti). |

### Envelope Mode

| Impostazione | Cosa fa |
|---|---|
| **Standard Deviation** | Costruisce le bande dalla deviazione tipica del prezzo attorno al VWAP. |
| **Price Percentage** | Costruisce le bande come scostamenti percentuali fissi sopra e sotto il VWAP. |

### Parametri delle envelope

| Banda | Significato statistico (modalità Standard Deviation) |
|---|---|
| **1st Standard** | Circa il 68% dell'azione dei prezzi cade tipicamente entro 1 deviazione standard. |
| **2nd Standard** | Circa il 95% dell'azione dei prezzi cade tipicamente entro 2 deviazioni standard. |
| **3rd Standard** | Circa il 99,7% dell'azione dei prezzi cade tipicamente entro 3 deviazioni standard. |

### Subgraphs

La linea VWAP e ogni linea envelope supportano colore regolabile, stile di linea (continua, punteggiata o tratteggiata), spessore e interruttori di visibilità — nascondi le bande su cui non fai trading per mantenere il grafico leggibile.

## Suggerimenti ed errori comuni

- **Sappi quale VWAP stai guardando.** Questo è un VWAP continuo e rolling — coincide con il VWAP del Daily Volume Profile solo a fine sessione. Confrontare i due durante la giornata e presumere che uno sia "sbagliato" è la confusione più comune con questo strumento.
- **Le percentuali presuppongono condizioni quasi normali.** In trend forti, il prezzo può mantenersi oltre la 2ª banda molto più a lungo di quanto suggerisca la cifra del 95% — tratta le statistiche delle bande come contesto, non come garanzie.
- **Abbina il Period Mode al tuo orizzonte.** La modalità Minutes con un valore breve reagisce rapidamente ma produce un riferimento che si muove in fretta; la modalità Daily offre l'ancoraggio stabile in stile istituzionale.
- **La modalità percentuale è per gli strumenti, non per le statistiche.** Le bande Price Percentage non si adattano alla volatilità — usale quando vuoi scostamenti fissi, e la modalità Standard Deviation quando li vuoi aggiustati per la volatilità.

## Articoli correlati

- [[understanding-vwap]]
- [[bollinger-bands]]
- [[standard-deviation]]
- [[deep-profile]]
- [[different-types-of-input]]
- [[indicator-layout]]