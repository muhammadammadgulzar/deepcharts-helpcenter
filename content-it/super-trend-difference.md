---
title: "Super Trend Difference"
slug: "super-trend-difference"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Guida di riferimento all'indicatore Super Trend Difference in DeepCharts: l'istogramma della distanza prezzo–Super Trend, lunghezza e moltiplicatore dell'ATR, e stile dell'istogramma."
keywords: ["supertrend difference", "istogramma super trend", "oscillatore supertrend", "distanza del prezzo dal supertrend", "istogramma di momentum del trend"]
source_hash: "677775add5851008"
ai_translated: true
source_hash: "677775add5851008"
---
Super Trend Difference traccia la distanza tra il prezzo corrente e la linea del Super Trend come istogramma in un pannello separato. Invece di dirti solo da quale lato del trend ti trovi, mostra quanto il prezzo si è allontanato dalla linea del trend — una lettura rapida del momentum e del potenziale esaurimento.

Usa lo stesso calcolo basato sull'ATR di [[super-trend]], quindi i due indicatori si abbinano naturalmente: Super Trend sul grafico dei prezzi per la direzione, Super Trend Difference sotto di esso per la forza di quella direzione.

## Che cos'è

L'indicatore risponde alla domanda: il trend sta guadagnando o perdendo slancio? Ogni barra dell'istogramma è la differenza tra il prezzo e la linea del Super Trend. Barre positive significano che il prezzo è sopra la linea (stato rialzista); barre negative significano che è sotto (stato ribassista). Barre in crescita mostrano il prezzo che si allontana dalla linea del trend; barre in contrazione mostrano il prezzo che vi si riavvicina — spesso il primo indizio di uno stallo o di un'inversione prima che la linea del Super Trend stessa cambi lato.

[SCREENSHOT: Un grafico a candele con Super Trend sul prezzo e l'istogramma Super Trend Difference in un pannello sottostante, con barre verdi positive che si contraggono verso lo zero prima di un cambio di trend | dc-it-super-trend-difference-01.png]

## Quando usarlo

- Per valutare il momentum dietro un segnale del Super Trend — un flip sostenuto da barre dell'istogramma in rapida crescita ha più convinzione di uno che supera appena lo zero.
- Per individuare l'esaurimento anticipato: barre che si contraggono verso lo zero mentre il prezzo è ancora in trend avvertono che il movimento sta decelerando.
- Per calibrare le uscite prima del flip — molti trader alleggeriscono la posizione man mano che l'istogramma si contrae, invece di aspettare che il Super Trend cambi lato.
- Per confrontare la forza degli swing: picchi dell'istogramma via via più bassi durante un uptrend suggeriscono spinte in indebolimento.

## Avvio rapido

1. Apri un grafico — vedi [[first-chart]].
2. Fai clic sull'icona a barre nella fila di icone in alto a sinistra del grafico per aprire il pannello **Indicators**, poi fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca **Super Trend Difference** e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona a ingranaggio per aprire le sue impostazioni.
5. Configurazione di partenza: mantieni **Length** a 10 e **Multiplier** a 3.00 — e se usi [[super-trend]] sullo stesso grafico, imposta valori identici su entrambi, così l'istogramma corrisponde alla linea che vedi sul prezzo.

[SCREENSHOT: Finestra delle impostazioni di Super Trend Difference con i parametri General Length = 10 e Multiplier = 3.00, e la sezione Subgraphs con Auto Color +/- e Line Width 4 | dc-it-super-trend-difference-02.png]

## Come leggerlo

- **Segno** = stato del trend. Istogramma positivo: prezzo sopra la linea del Super Trend. Negativo: sotto di essa.
- **Altezza** = distanza. Barre più alte significano che il prezzo è più esteso rispetto alla linea. Poiché la linea è basata sull'ATR, parte di quell'altezza è volatilità — confronta con le barre recenti, non con valori assoluti.
- **La pendenza delle barre** è la parte operativa: barre in espansione confermano il momentum con il trend; barre in contrazione significano che il prezzo sta convergendo sulla linea e un flip si avvicina.
- **L'attraversamento dello zero** avviene nello stesso momento in cui la linea del Super Trend cambia lato — l'istogramma non anticipa il flip in sé, ma la sua contrazione precedente spesso sì.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Length** | Definisce la lunghezza del periodo per il calcolo dell'Average True Range (ATR) usato nel calcolo del Super Trend. Predefinito: 10. Valori più alti riducono la sensibilità alle fluttuazioni di breve termine; valori più bassi aumentano la reattività. |
| **Multiplier** | Imposta il moltiplicatore del valore ATR, che determina la distanza della linea del Super Trend dal prezzo. Predefinito: 3.00. Moltiplicatori più alti producono valori di differenza maggiori nell'istogramma. |

### Chart Settings

| Impostazione | Cosa fa |
|---|---|
| **Chart Area** | **Horizontal** visualizza l'istogramma sopra o sotto il grafico principale; **Vertical** lo visualizza in un pannello verticale separato. |
| **Use Sec. Axis** | Traccia su un asse secondario per una scala indipendente. |

### Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Color** | Colore principale delle barre dell'istogramma quando la differenza è positiva (condizioni rialziste). |
| **2° Color** | Colore secondario delle barre dell'istogramma quando la differenza è negativa (condizioni ribassiste). |
| **Subgraph Style** | Il predefinito visualizza i dati come istogramma con barre verticali. |
| **Auto Color** | L'impostazione **+/-** assegna automaticamente i colori in base ai valori positivi o negativi. |
| **Line Style** | Predefinito: Solid, per barre piene. |
| **Line Width** | Predefinito: 4. Barre più larghe aumentano la visibilità; barre più strette possono diventare difficili da vedere ad alcuni livelli di zoom. |
| **Short Name** | Etichetta personalizzata usata per identificare l'indicatore nella legenda del grafico. |

## Suggerimenti ed errori comuni

- **Allinea i parametri al tuo overlay Super Trend.** Se l'istogramma usa una **Length** o un **Multiplier** diversi dalla linea del Super Trend sul tuo grafico dei prezzi, gli attraversamenti dello zero non coincideranno con i flip visibili e i due strumenti sembreranno in disaccordo.
- **Non leggere l'altezza grezza come forza tra strumenti o sessioni diverse.** L'ATR scala con la volatilità, quindi una barra "alta" in una giornata tranquilla può essere più piccola in punti di una barra modesta in una giornata volatile. Confronta le barre con le loro vicine recenti.
- **La contrazione è un avvertimento, non un segnale.** Barre che si contraggono verso lo zero segnalano una decelerazione; attendi i tuoi criteri di ingresso/uscita invece di trattare ogni contrazione come un'inversione.
- Se il pannello dell'istogramma è stretto o nella posizione sbagliata, riorganizza le aree del grafico — vedi [[indicator-layout]].

## Articoli correlati

- [[super-trend]]
- [[atr]]
- [[macd]]
- [[momentum]]
- [[different-types-of-input]]
- [[indicator-layout]]