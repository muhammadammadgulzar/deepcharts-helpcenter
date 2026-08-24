---
title: "Dynamic POC"
slug: "dynamic-poc"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Riferimento per l'indicatore Dynamic POC: un point of control mobile sugli ultimi N minuti o barre, con bande envelope configurabili e ogni impostazione spiegata."
keywords: ["dynamic POC", "POC mobile", "point of control", "moving POC", "envelope POC", "point of control del volume", "dinamic poc", "dynamic point of control"]
source_hash: "6a1d0d69c54c8a0e"
ai_translated: true
source_hash: "6a1d0d69c54c8a0e"
---
L'indicatore Dynamic POC traccia il livello di prezzo in cui si è sviluppato il volume maggiore in una finestra mobile — gli ultimi N minuti o le ultime N barre — e lo rappresenta come una linea in movimento sul tuo grafico. Attorno a quella linea può disegnare fino a tre bande envelope configurabili, offrendoti una vista dinamica di dove si concentra il volume e di quanto il prezzo si sia allontanato da esso.

Mentre un profilo di sessione ti dà un unico POC statico per periodo, il Dynamic POC risponde a una domanda diversa: dov'è l'ancora di volume del mercato in questo momento? Per la teoria alla base del point of control, vedi [[understanding-volume-profile]].

## Che cos'è

In ogni istante l'indicatore costruisce una distribuzione di volume sul periodo di riferimento scelto e ne marca il point of control — il singolo livello di prezzo con il massimo volume scambiato in quella finestra. Man mano che arrivano nuovi dati e i dati vecchi escono dalla finestra, il POC si aggiorna, producendo una linea che segue il centro di volume in continuo spostamento del mercato. La sezione envelope aggiunge bande percentuali sopra e sotto il POC che fungono da deviazioni di volatilità.

Per toccare con mano come una distribuzione di volume produce il suo point of control, passa il mouse sulle righe del profilo interattivo qui sotto — il POC è la riga magenta:

[WIDGET: volume-profile-lab]

## Quando usarlo

- Per seguire intraday l'ancora di volume corrente del mercato senza gestire manualmente i periodi del profilo.
- Per valutare se il prezzo sta scambiando sul livello più trattato dal mercato, sopra o sotto di esso.
- Per inquadrare i comportamenti di allungo e ritorno con le bande envelope attorno al POC mobile.
- Per confrontare finestre corte (asta recente) con finestre lunghe (accettazione consolidata) eseguendo due istanze.

## Avvio rapido

1. Aggiungi **Dynamic POC** al tuo grafico.
2. Scegli una **Period Mode**: **Minutes** per una finestra basata sul tempo (utile per pattern di volume intraday di breve termine) oppure **Bars** per una finestra basata sul conteggio delle candele.
3. Imposta il **Period Value** — per esempio, 120 con **Minutes** mostra il POC della finestra dei 120 minuti precedenti.
4. Per iniziare lascia le tre percentuali dell'envelope ai valori configurati, poi allargale o restringile una volta che avrai visto quanto il tuo strumento si allontana tipicamente dal suo POC.

[SCREENSHOT: Un grafico intraday con la linea Dynamic POC che segue il point of control mobile, con tre bande envelope tracciate sopra e sotto di essa | dc-it-dynamic-poc-01.png]

## Come leggerlo

La linea del POC è il consenso mobile: il prezzo a cui è stata fatta la maggior parte degli scambi nella tua finestra. Un prezzo che si mantiene vicino a essa significa che il mercato sta accettando valore lì; un prezzo che se ne allontana significa che il mercato sta cercando valore altrove. Quando il prezzo scambia molto sopra il POC mobile, gli acquisti recenti non sono ancora stati ratificati dal volume a quei prezzi più alti — un allungo che o viene consolidato (il POC migra verso l'alto) o rientra.

Le envelope graduano quell'allungo. La prima banda segna una deviazione lieve, la seconda una significativa, la terza un'estrema. Osservare se la linea del POC segue il prezzo (comportamento di trend) o resta ferma mentre il prezzo torna indietro (comportamento di rotazione) è la lettura fondamentale.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Period Mode** | Tipo di periodo di riferimento: **Minutes** mostra il POC degli ultimi n minuti (adatto all'analisi intraday del volume di breve termine); **Bars** mostra il POC delle ultime n barre (basato sul conteggio delle candele). |
| **Period Value** | La finestra numerica per la modalità selezionata — per esempio, 120 in modalità **Minutes** visualizza il POC della finestra dei 120 minuti precedenti. |

### Envelope

Bande percentuali attorno al POC che mostrano le deviazioni di volatilità:

| Impostazione | Cosa fa |
|---|---|
| **% First** | Deviazione della prima banda envelope (la più interna). Il valore predefinito tipico documentato è 0.10. |
| **% Second** | Deviazione della seconda banda envelope. Il valore predefinito tipico documentato è 0.25. |
| **% Third** | Deviazione della terza banda envelope (la più esterna). Il valore predefinito tipico documentato è 0.50. |

La documentazione di origine fornisce questo esempio: con il POC a 5900 e **% First** a 0.10, le prime bande compaiono approssimativamente a 5890 e 5910. [CONFIRM: exact unit/scaling of the envelope percentage values — the 5900 → ±10 points example does not correspond to a plain 0.10% calculation.]

### Subgraphs

- **Colore della linea POC**, più un'opzione di colore secondario.
- Regolazioni di **stile della linea**, **larghezza** e spessore.
- **Nome breve personalizzato** per l'etichetta dell'indicatore.

[SCREENSHOT: La finestra delle impostazioni del Dynamic POC che mostra Period Mode, Period Value e i tre campi percentuali dell'envelope | dc-it-dynamic-poc-02.png]

## Suggerimenti ed errori comuni

- **Adatta la finestra al tuo orizzonte operativo.** Un POC a 120 minuti e un POC a 20 barre rispondono a domande diverse; prendere decisioni di scalping su una finestra lenta (o viceversa) mescola i timeframe.
- **Minutes e Bars non sono intercambiabili.** In modalità **Minutes** il numero di barre nella finestra varia con il timeframe del grafico; in modalità **Bars** varia l'intervallo di tempo. Scegli la modalità che rispecchia il tuo modo di ragionare.
- **Non trattare i tocchi dell'envelope come fade automatici.** Nei giorni di trend il POC migra e il prezzo può cavalcare la banda esterna; conferma con la direzione della linea del POC stessa.
- **Verifica la scala dell'envelope sul tuo strumento.** Traccia le bande e controlla le distanze effettive prima di dimensionare il rischio su di esse.

## Articoli correlati

- [[understanding-volume-profile]]
- [[bar-poc]]
- [[deep-profile]]
- [[market-profile-tpo]]
- [[different-types-of-input]]
- [[indicator-layout]]