---
title: "Speed of Tape"
slug: "speed-of-tape"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Misura quanto velocemente il mercato sta scambiando in una finestra temporale scelta, così puoi individuare picchi di attività, accelerazioni e zone morte."
keywords: ["speed of tape", "velocità del tape", "indicatore velocità di scambio", "tape reading", "intensità dell'attività di mercato", "scambi al secondo", "ritmo del tape"]
source_hash: "a8ff9848277e0e00"
ai_translated: true
source_hash: "a8ff9848277e0e00"
---
Speed of Tape monitora l'intensità dell'attività di mercato — quanto volume, quanti ordini o quanti scambi passano in una finestra temporale fissa. Quando il tape accelera, i partecipanti hanno urgenza; quando rallenta fino a fermarsi, nessuno è convinto. Questo indicatore trasforma quell'istinto da tape reading in una serie misurabile e tracciabile sul grafico.

È un misuratore di ritmo, non di direzione: ti dice quanto duramente sta lavorando il mercato, e la sua colorazione in stile candela suggerisce quale lato sta facendo il lavoro.

Prendi confidenza con il ritmo sul tape in tempo reale qui sotto — lascialo scorrere, poi passa il mouse per mettere in pausa e ispezionare le singole stampe mentre i contatori buy/sell continuano a scorrere.

[WIDGET: tape-lab]

## Che cos'è

L'indicatore misura l'attività per intervallo di tempo — la finestra **Number Seconds** — usando a tua scelta volume, ordini o scambi eseguiti come input. Il risultato viene tracciato come barre in stile candlestick in un pannello separato, con la colorazione rialzista e ribassista che riflette una forte partecipazione dei compratori o dei venditori. I filtri e un'opzione di deviazione standard ti consentono di mantenere solo le letture statisticamente insolite.

[SCREENSHOT: Finestra del grafico con l'indicatore Speed of Tape in un pannello inferiore — barre di velocità in stile candlestick che schizzano durante un breakout, con barre di colore rialzista sull'impulso e barre più piccole durante il consolidamento precedente | dc-it-speed-of-tape-01.png]

## Quando usarlo

- Vuoi un preavviso che l'attività sta impennando prima che un breakout si estenda — il ritmo spesso sale insieme al movimento, o appena prima.
- Identifichi pattern di accelerazione: aumenti successivi di velocità confermano un'urgenza crescente dietro un trend.
- Eviti i mercati morti: una velocità del tape persistentemente bassa segnala condizioni in cui i breakout tendono a fallire.
- Integri l'analisi del footprint o dei profili con una pura dimensione di ritmo che nessuno dei due mostra direttamente.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico e aggiungi **Speed of Tape**.
2. Apri le **Settings** (impostazioni) dell'indicatore.
3. Imposta **Input Data** su **Trades** per misurare il numero di esecuzioni, oppure mantieni **Volume** per ponderare in base alla dimensione (vedi [[different-types-of-input]]).
4. Imposta **Number Seconds** sull'intervallo su cui vuoi misurare la velocità — intervalli più corti reagiscono più in fretta, intervalli più lunghi smussano la lettura.
5. Lascia **Filter Min** e **Filter Max** non impostati all'inizio; aggiungi un **Filter Min** più avanti per marcare solo i periodi davvero veloci.

[SCREENSHOT: Finestra delle impostazioni di Speed of Tape aperta sulla sezione General — il menu a discesa Input Data espanso con Volume, Order e Trades, con Number Seconds e i campi dei filtri visibili sotto | dc-it-speed-of-tape-02.png]

## Come leggerlo

- **Barre alte** — attività elevata per la finestra misurata: urgenza, partecipazione e di solito un follow-through più pulito.
- **Sequenza crescente di barre** — accelerazione: ogni finestra è più intensa della precedente, tipico di un movimento che raccoglie partecipazione reale.
- **Picco e poi crollo** — un'esplosione che non ha trovato continuazione; spesso segna punti di climax o esaurimento.
- **Barre di colore rialzista vs. ribassista** — forte partecipazione dei compratori contro forte partecipazione dei venditori, che ti dice quale lato ha generato il ritmo.
- **Barre piatte e minuscole** — il mercato è al minimo; tratta gli estremi del range e i segnali con scetticismo extra finché il ritmo non torna.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Input Data** | Cosa viene conteggiato: **Volume** (quantità di volume scambiato nel periodo), **Order** (numero di ordini inseriti durante il periodo) oppure **Trades** (numero di scambi eseguiti durante il periodo). |
| **Filter Min** | Soglia minima — vengono marcate solo le barre che superano questo livello. |
| **Filter Max** | Soglia massima — vengono marcate solo le barre sotto questo livello. |
| **Number Seconds** | L'intervallo di tempo (in secondi) in cui viene misurata la velocità. |
| **Std Dev Per Filter** | Valore di deviazione standard per filtrare i dati in un intervallo statistico specifico. |

### Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Bull Border / Bull Fill** | Colori delle candele positive che mostrano una forte partecipazione dei compratori. |
| **Bear Border / Bear Fill** | Colori delle candele negative che mostrano una forte partecipazione dei venditori. |
| **Subgraph Style** | Stile di disegno — **Candlesticks**. |
| **Line Style / Line Width** | Stile di rendering e spessore. |
| **Short Name** | Etichetta personalizzata mostrata nella legenda del pannello. |

## Suggerimenti ed errori comuni

- **Scegli la finestra con criterio.** Un valore di **Number Seconds** corto rende il pannello nervoso; uno lungo nasconde le micro-esplosioni. Abbinalo al tempo che il tuo tipico setup impiega a svilupparsi.
- **La velocità non è direzione.** Un tape veloce può esserlo in entrambe le direzioni (una battaglia). Leggi qui il ritmo e la direzione dagli strumenti di delta come [[delta-bar]].
- **Usa Std Dev Per Filter per trovare l'insolito.** Filtrare le letture oltre una banda statistica mantiene solo le finestre che deviano davvero dal ritmo normale, che è dove sta l'informazione.
- **Combina, non isolare.** L'indicatore è più efficace insieme al profilo del volume e all'analisi del delta — il ritmo conferma se i livelli basati sulla struttura vengono attaccati con partecipazione reale.
- **Conosci la differenza rispetto alla variante Instant.** [[speed-of-tape-instant]] si concentra sulla velocità del tape corrente e istantanea sulle barre più recenti; questo indicatore traccia la serie della velocità lungo tutto lo storico del grafico.

## Articoli correlati

- [[speed-of-tape-instant]]
- [[delta-bar]]
- [[adv-time-and-sales]]
- [[understanding-volume-profile]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]