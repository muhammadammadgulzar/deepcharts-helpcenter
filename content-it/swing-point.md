---
title: "Swing Point"
slug: "swing-point"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Marca automaticamente gli swing high e gli swing low con linee orizzontali, così i livelli di supporto, resistenza e inversione sono sempre sul tuo grafico."
keywords: ["swing point", "swing points", "swing high", "swing low", "indicatore supporti resistenze", "pivot high low", "struttura di mercato", "swingpoint"]
source_hash: "81f159f66c7de974"
ai_translated: true
source_hash: "81f159f66c7de974"
---
Ogni trader marca gli swing high e gli swing low — i picchi e gli avvallamenti locali dove il prezzo ha invertito. L'indicatore Swing Point lo fa per te: identifica gli swing significativi usando una finestra di osservazione personalizzabile e disegna linee orizzontali a quei livelli di prezzo, così la tua mappa di supporti e resistenze si aggiorna da sola man mano che il mercato stampa nuova struttura.

Poiché la definizione di swing è completamente parametrizzata, sei tu a controllare quanto l'indicatore è selettivo — da ogni minimo tentennamento fino ai soli punti di svolta principali.

## Che cos'è

L'indicatore Swing Point risponde alla domanda "dove ha invertito il prezzo più di recente, e a quali livelli?" Uno **swing high** è una barra il cui massimo è più alto dei massimi di un certo numero di barre su entrambi i lati; uno **swing low** è l'immagine speculare con i minimi. Quando una barra si qualifica, l'indicatore disegna una linea orizzontale a quel livello, con etichette, così il livello resta visibile mentre il prezzo se ne allontana.

Gli swing high marcano potenziali zone di resistenza e inversione; gli swing low marcano potenziali supporti. Insieme delineano la struttura di mercato su cui si basa la maggior parte dei metodi di price action.

## Quando usarlo

- Per mantenere una mappa sempre aggiornata dei livelli di supporto e resistenza senza tracciare le linee a mano.
- Per leggere la struttura di mercato: una sequenza di swing high e swing low crescenti definisce un uptrend, e la rottura di quella sequenza è un primo avvertimento di cambio di trend.
- Per trovare riferimenti per il posizionamento degli stop e per i target — gli swing sono i punti dove gli ordini in attesa si accumulano naturalmente.
- Per alimentare altre analisi: il lavoro su divergenze e confluenze è di solito ancorato agli swing point (vedi [[divergence-detector]] e [[confluence-identifier]]).

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "Swing Point" e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprire le sue impostazioni. Inizia con i valori predefiniti (**Left Bars** 2, **Right Bars** 2) e aumentali entrambi se il grafico mostra più linee di swing di quante te ne servano.
5. Imposta valori distinti per **High Color** e **Low Color**, così i livelli di resistenza e supporto sono distinguibili a colpo d'occhio.

[SCREENSHOT: Un grafico dei prezzi con l'indicatore Swing Point attivo — linee orizzontali tratteggiate che si estendono da diversi swing high e swing low, ciascuna con una piccola etichetta di testo vicino alla linea | dc-it-swing-point-01.png]

## Come leggerlo

- **Le linee degli swing high** sono livelli dove i venditori hanno precedentemente sopraffatto i compratori — osserva se ci sarà rigetto (resistenza che tiene) o accettazione (breakout) quando il prezzo vi ritorna.
- **Le linee degli swing low** sono lo speculare lato supporto.
- **La selettività è la tua manopola.** Con valori piccoli di **Left Bars** / **Right Bars** vedi molti swing minori — utili per la struttura in scalping. Valori più grandi mantengono solo le svolte più significative che definiscono il quadro di timeframe superiore.
- **La conferma ritarda per costruzione.** Uno swing non può essere confermato finché non è stato stampato il numero richiesto di barre sul lato destro, quindi una nuova linea di swing appare solo dopo che quel numero di barre si è chiuso oltre l'estremo. Valori di **Right Bars** più alti significano che l'indicatore attende più a lungo la conferma — meno falsi swing, segnali più tardivi.

## Riferimento delle impostazioni

### General Parameters

| Impostazione | Cosa fa |
|---|---|
| **Left Bars** | Numero di barre a sinistra della barra candidata che devono avere massimi più bassi (per uno swing high) o minimi più alti (per uno swing low). Aumentando questo valore l'indicatore diventa più selettivo, identificando solo gli swing più significativi. Predefinito: 2. |
| **Right Bars** | Numero di barre a destra che devono mostrare massimi più bassi o minimi più alti prima che lo swing sia convalidato. Valori più alti significano che l'indicatore attende più a lungo la conferma. Predefinito: 2. |
| **Filter Swing** | Quando attivato, applica un filtraggio aggiuntivo che rimuove gli swing minori che non soddisfano le soglie di qualità, riducendo il rumore. |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Line Width** | Spessore delle linee orizzontali degli swing. Predefinito: 2. |
| **Line Style** | Stile delle linee degli swing. Predefinito: Dash — le linee tratteggiate mantengono i livelli di swing visivamente distinti dagli altri elementi del grafico. |
| **High Color** | Colore delle linee degli swing high (zone di resistenza/inversione). |
| **Low Color** | Colore delle linee degli swing low (zone di supporto/inversione). |
| **Text Tick Offset** | Distanza, in tick, tra una linea di swing e la sua etichetta di testo. Predefinito: 1. |
| **Text Size** | Dimensione delle etichette degli swing. Predefinito: 11.00. |
| **High Text Color** | Colore del testo per le etichette degli swing high. |
| **Low Text Color** | Colore del testo per le etichette degli swing low. |

[SCREENSHOT: La finestra delle impostazioni di Swing Point con General Parameters (Left Bars, Right Bars, Filter Swing) e il gruppo Plot Settings con Line Width, Line Style, i colori High/Low e le opzioni di testo | dc-it-swing-point-02.png]

## Suggerimenti ed errori comuni

- **Non trattare uno swing appena formato come operabile sulla barra in cui si forma.** La linea appare **Right Bars** barre dopo l'estremo effettivo; a quel punto il prezzo si è già allontanato. Usa gli swing come livelli per la visita successiva, non come segnali di ingresso alla conferma.
- **Adatta la selettività al timeframe.** Left/Right a 2 su un grafico a 1 minuto produce una fitta rete di linee; aumenta i valori o attiva **Filter Swing** prima di concludere che l'indicatore è "troppo rumoroso".
- **Valori simmetrici sono un punto di partenza, non una regola.** Un **Right Bars** più grande di **Left Bars** richiede più prove che la svolta abbia tenuto, il che si addice agli swing trader; gli scalper spesso preferiscono il compromesso opposto.
- **Leggi gli swing come struttura, non come segnali a sé stanti.** Uno swing low rotto in un uptrend conta per ciò che dice sulla sequenza di minimi crescenti — combina le linee con una lettura di trend invece di fare fade su ogni livello.

## Articoli correlati

- [[zig-zag]]
- [[pivot-points]]
- [[important-levels]]
- [[divergence-detector]]
- [[different-types-of-input]]
- [[indicator-layout]]