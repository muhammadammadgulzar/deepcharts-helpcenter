---
title: "Speed of Tape (Instant)"
slug: "speed-of-tape-instant"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Mostra la velocità istantanea di esecuzione degli scambi come barre colorate in base al delta, così puoi valutare urgenza e pressione in tempo reale."
keywords: ["speed of tape instant", "velocità istantanea del tape", "velocità del tape in tempo reale", "velocità di esecuzione degli scambi", "velocità del nastro", "speed of tape istantaneo"]
source_hash: "f9ad5b7653bb496e"
ai_translated: true
source_hash: "f9ad5b7653bb496e"
---
Speed of Tape (Instant) misura la velocità istantanea di esecuzione degli scambi — quanto viene scambiato in questo momento all'interno di una breve finestra temporale mobile. L'altezza delle barre mostra quanto corre veloce il tape; il colore delle barre mostra se nel flusso misurato domina la pressione in acquisto o in vendita.

Mentre l'indicatore standard [[speed-of-tape]] traccia il ritmo come serie storica, la variante Instant ti mantiene concentrato sulle ultime letture, rendendola un misuratore di urgenza in tempo reale per il trading attivo.

Il tape in streaming qui sotto è il flusso grezzo che questo indicatore distilla — osserva i contatori buy/sell/delta cambiare man mano che arrivano le stampe, e filtra per All/Ask/Bid per isolare un lato.

[WIDGET: tape-lab]

## Che cos'è

L'indicatore analizza il flusso di volume su una finestra configurabile (**Number of seconds**, predefinito **10**) e disegna il risultato come barre colorate: le barre verdi/turchesi segnano i periodi a delta positivo in cui domina la pressione in acquisto, le barre rosse/rosa segnano i periodi a delta negativo in cui domina la pressione in vendita, e l'altezza delle barre riflette l'intensità della velocità di scambio. Per impostazione predefinita vengono mostrate solo le letture più recenti (**Bars to show**, predefinito **3**), mantenendo la visualizzazione ancorata al presente.

[SCREENSHOT: Grafico con Speed of Tape (Instant) attivo — le tre barre di velocità del tape più recenti visibili, la barra più alta nel colore degli acquisti durante una spinta rapida al rialzo, con le candele di prezzo in movimento sullo sfondo | dc-it-speed-of-tape-instant-01.png]

## Quando usarlo

- Confermi il momentum in tempo reale: picchi improvvisi di velocità del tape nella direzione del tuo trade convalidano l'ingresso.
- Osservi l'esaurimento: barre che si accorciano progressivamente mentre il prezzo si estende avvertono che il movimento sta esaurendo la partecipazione.
- Identifichi le fasi di accelerazione: barre progressivamente più alte segnalano un'urgenza in crescita su scala istituzionale.
- Riconosci il consolidamento: una velocità persistentemente bassa ti dice di aspettarti oscillazioni laterali anziché follow-through.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico e aggiungi **Speed of Tape (Instant)**.
2. Apri le **Settings** (impostazioni) dell'indicatore.
3. Mantieni **Input data** su **Volume** (il predefinito) per ponderare la velocità in base alla dimensione scambiata (vedi [[different-types-of-input]]).
4. Lascia **Number of seconds** al valore predefinito **10** e **Display value** su **Total** — questo aggrega tutta l'attività di scambio all'interno di ogni finestra di 10 secondi.
5. Mantieni **Bars to show** al valore predefinito **3**; aumentalo solo se vuoi più storico recente in vista.

[SCREENSHOT: Finestra delle impostazioni di Speed of Tape (Instant) — Plot Settings con Bars to show = 3 e Scale min value = 0, sezioni Data Settings e Mode Settings visibili con Number of seconds = 10 | dc-it-speed-of-tape-instant-02.png]

## Come leggerlo

- **Barra alta, colore degli acquisti** — attività intensa dominata dalla pressione in acquisto; conferma di momentum per i long.
- **Barra alta, colore delle vendite** — la stessa urgenza sul lato delle vendite.
- **Barre che si riducono tra le letture** — un segnale di esaurimento: ogni finestra è più tranquilla della precedente anche se il prezzo continua a scivolare.
- **Barre che crescono tra le letture** — una fase di accelerazione; i breakout che partono con velocità del tape in aumento hanno più peso.
- **Barre uniformemente basse** — bassa velocità, tipica del consolidamento; qui i segnali degli altri strumenti scattano in modo meno affidabile.

Ricorda che il colore codifica la dominanza del delta nella finestra misurata, non la direzione della candela corrente — una barra di velocità rossa può comparire mentre il prezzo sale se i venditori dominano il flusso eseguito.

## Riferimento delle impostazioni

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Bars to show** | Quante barre storiche di dati Speed of Tape vengono visualizzate sul grafico. Predefinito **3**. |
| **Scale min value** | Stabilisce la base per la rappresentazione visiva della velocità del tape. Predefinito **0**. |

### General (Candle Settings)

| Impostazione | Cosa fa |
|---|---|
| **Line width** | Spessore delle barre per la visibilità. Predefinito **1**. |
| **Plot reversed** | Quando abilitato, inverte l'orientamento verticale delle barre. |
| **Delta Positive** | Colore per le barre a delta positivo (dominanza degli acquisti). Predefinito verde/turchese. |
| **Delta Negative** | Colore per le barre che rappresentano periodi a delta negativo. |
| **Delta Positive (Secondary)** / **Delta Negative (Secondary)** | Opzioni di colore aggiuntive per ciascun lato. |

### Data Settings

| Impostazione | Cosa fa |
|---|---|
| **Input data** | Sorgente dati: **Volume** (predefinito) oppure dati di flusso **Order**. Vedi [[different-types-of-input]]. |
| **Filter min** | Esclude dal calcolo i periodi a bassa attività. |
| **Filter max** | Limita i periodi di attività estremamente elevata. Predefinito **0** (nessun limite). |

### Mode Settings

| Impostazione | Cosa fa |
|---|---|
| **Display value** | Come viene riassunta l'attività nella finestra. Predefinito **Total** — aggrega tutta l'attività di scambio all'interno della finestra temporale specificata. |
| **Number of seconds** | La finestra temporale in secondi su cui viene calcolata la velocità del tape. Predefinito **10**. |

## Suggerimenti ed errori comuni

- **Dieci secondi sono un predefinito sensato — ma non sacro.** Gli scalper su simboli molto veloci possono preferire una finestra più corta; gli strumenti più lenti si leggono meglio con una più lunga. Cambia una cosa alla volta.
- **Non trattare il colore come un segnale di trade.** La colorazione a delta mostra chi ha dominato il flusso misurato; la direzione ha comunque bisogno di prezzo e struttura per essere confermata.
- **Mantieni Bars to show basso.** Il valore dell'indicatore è la sua immediatezza — trasformarlo in uno storico lungo duplica ciò che [[speed-of-tape]] fa già meglio.
- **Usa Filter min per silenziare il rumore sui mercati sottili**, dove una manciata di piccoli scambi può altrimenti registrarsi come "velocità" priva di significato.

## Articoli correlati

- [[speed-of-tape]]
- [[delta-bar]]
- [[big-trades]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]