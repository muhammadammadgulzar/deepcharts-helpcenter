---
title: "Imbalance Rejector"
slug: "imbalance-rejector"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Riferimento per l'indicatore Imbalance Rejector: come marca le potenziali inversioni dagli squilibri su massimi e minimi di swing, e cosa controlla ogni impostazione."
keywords: ["imbalance rejector", "rifiuto dello squilibrio", "marcatore di inversione", "squilibrio diagonale", "rifiuto dello swing", "imbalance rejecter", "indicatore di inversione orderflow"]
source_hash: "1a70dc23083d5901"
ai_translated: true
source_hash: "1a70dc23083d5901"
---
L'Imbalance Rejector identifica pattern volumetrici basati sugli squilibri e restituisce marcatori direttamente sul grafico per evidenziare potenziali situazioni di inversione. Invece di disegnare zone come [[imbalance-tracker]], cerca un evento specifico: uno squilibrio aggressivo stampato su un massimo o un minimo di swing — un segnale che la spinta verso l'estremo potrebbe essere in fase di rifiuto.

Poiché lavora con confronti diagonali Bid/Ask sugli estremi delle barre, questo indicatore presuppone che tu abbia dimestichezza con la logica del footprint. Se termini come compratore aggressivo, tick Bid e tick Ask sono nuovi, inizia da [[orderflow-101]] e [[reading-a-footprint]].

## Cos'è

Sul massimo di una candela ribassista o sul minimo di una candela rialzista, l'indicatore confronta il volume in diagonale tra le colonne Ask e Bid dei tick di prezzo adiacenti. Quando la percentuale di squilibrio su quell'estremo supera il tuo minimo — e l'estremo si qualifica come swing point sul tuo periodo di lookback — viene tracciato un marcatore a un numero configurabile di tick di distanza dal massimo o dal minimo.

Il confronto diagonale è più facile da capire mettendolo in pratica: nel footprint interattivo qui sotto, regola il rapporto di squilibrio e passa il mouse sulle celle bid×ask per vedere quali coppie diagonali si qualificano.

[WIDGET: footprint-lab]

## Quando usarlo

- Per individuare potenziali punti di inversione dove un estremo ha stampato uno squilibrio forte.
- Per confermare un massimo o minimo di swing con evidenze di orderflow prima di andare contro un movimento.
- Per automatizzare un pattern che altrimenti cercheresti a mano su un grafico footprint.
- Per generare punti di riferimento per ulteriori analisi con i tuoi altri strumenti di orderflow.

## Avvio rapido

1. Aggiungi **Imbalance Rejector** al tuo grafico.
2. Rivedi **% Min. Imbalance** — è il controllo principale della sensibilità; valori più alti richiedono uno squilibrio più forte prima che un marcatore venga stampato.
3. Imposta il **Lookback Period** per definire quante barre a sinistra devono confermare un massimo o un minimo come swing point.
4. Nelle opzioni del subgraph, scegli colori e forme dei marcatori diversi per i segnali rialzisti e ribassisti, così puoi leggerli a colpo d'occhio.

[SCREENSHOT: Un grafico con l'Imbalance Rejector attivo, che mostra un marcatore ribassista tracciato pochi tick sopra un massimo di swing e un marcatore rialzista sotto un minimo di swing, in colori contrastanti | dc-it-imbalance-rejector-01.png]

## Come leggerlo

Un marcatore ribassista sopra un massimo di swing significa che l'indicatore ha trovato lo squilibrio richiesto sui massimi di una candela ribassista: la spinta verso il massimo ha incontrato uno squilibrio coerente con un rifiuto, quindi il livello è candidato per un movimento al ribasso. Un marcatore rialzista sotto un minimo di swing è il caso speculare sui minimi di una candela rialzista.

I marcatori sono contesto, non comandi. Il filtro di lookback richiede già che l'estremo sia un vero swing point, ma la qualità del segnale dipende comunque da dove compare — un marcatore di rifiuto su un livello di timeframe superiore pesa di più di uno nel mezzo di un range.

## Riferimento impostazioni

### Settings Imbalance

| Impostazione | Cosa fa |
|---|---|
| **% Min. Imbalance** | La percentuale minima di squilibrio che deve esistere sui massimi per le candele ribassiste, o sui minimi per le candele rialziste, prima che un marcatore venga preso in considerazione. |
| **Minimum Diagonal Comparison** | Il confronto diagonale minimo in cui cercare uno squilibrio. A 1, il tick Ask più recente viene confrontato con il tick Bid precedente per le barre ribassiste (e il tick Bid più recente con il tick Ask precedente per le barre rialziste); valori più alti espandono il confronto su ulteriori tick della candela. |
| **Lookback Period** | Il numero di barre richieste a sinistra perché il massimo o il minimo di una candela si qualifichi come swing point. Periodi più corti stampano più marcatori ma con minore affidabilità; periodi più lunghi ne stampano meno, ma più robusti. |
| **Tick Offset** | Di quanti tick il marcatore viene tracciato lontano dal massimo o dal minimo — un puro offset di visualizzazione per tenere i marcatori distanziati dalla barra. |

### Subgraphs

- **Colori** — colori separati per i segnali rialzisti e ribassisti.
- **Forma del marcatore** — quadrato, cerchio, rombo, triangolo o croce.
- **Spessore** — dimensione/peso dei marcatori tracciati.

[SCREENSHOT: La finestra delle impostazioni dell'Imbalance Rejector che mostra il gruppo Settings Imbalance con % Min. Imbalance, Minimum Diagonal Comparison, Lookback Period e Tick Offset | dc-it-imbalance-rejector-02.png]

## Suggerimenti ed errori comuni

- **Non impostare il lookback troppo corto.** Vale il compromesso descritto dalla documentazione stessa: i lookback corti inondano il grafico di segnali fragili; i lookback più lunghi ripagano la loro scarsità con la robustezza.
- **Regola % Min. Imbalance per ogni strumento.** Ciò che conta come squilibrio estremo su un contratto può essere rumore di routine su un altro.
- **Capisci cosa cambia Minimum Diagonal Comparison.** Alzarlo amplia la ricerca su più tick della candela, il che cambia il carattere del segnale — riverifica dopo averlo regolato.
- **Usa Tick Offset solo per la leggibilità.** Sposta il marcatore, non il livello rilevato; il rifiuto resta sul massimo o sul minimo effettivo.
- **Combina, non isolare.** Abbinare i marcatori alle zone di [[imbalance-tracker]] o a un framework di swing come [[swing-point]] dà a ogni segnale un contesto di posizione.

## Articoli correlati

- [[orderflow-101]]
- [[reading-a-footprint]]
- [[imbalance-tracker]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]