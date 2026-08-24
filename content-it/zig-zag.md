---
title: "Zig Zag"
slug: "zig-zag"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "5 min read"
description: "Usa l'indicatore Zig Zag per filtrare i movimenti di prezzo minori, collegare i massimi e minimi di swing e mostrare automaticamente i livelli di ritracciamento di Fibonacci."
keywords: ["zig zag", "zigzag", "massimi e minimi di swing", "indicatore pivot point", "ritracciamento fibonacci automatico", "ritracciamento zig zag", "rilevamento swing"]
source_hash: "db4d1587790cd37c"
ai_translated: true
source_hash: "db4d1587790cd37c"
---
L'indicatore Zig Zag filtra i movimenti di prezzo minori ed evidenzia gli swing significativi tracciando linee rette tra i massimi e i minimi di swing. Invece di osservare ogni candela, vedi il mercato ridotto alle sue gambe principali.

È uno degli indicatori più utili per imparare a leggere la struttura: inversioni di trend, supporti e resistenze e i pattern di prezzo più ampi diventano evidenti una volta rimosso il rumore tra i pivot. La versione DeepCharts può anche etichettare ogni swing con livelli di ritracciamento di Fibonacci automatici.

## Che cos'è

Lo Zig Zag risponde alla domanda "quali movimenti di prezzo sono davvero contati?" Collega i punti pivot confermati con linee rette, ignorando ogni fluttuazione più piccola della soglia scelta. Tre modalità di rilevamento ti permettono di definire uno swing "significativo" tramite il prezzo estremo su un periodo di osservazione, una percentuale fissa di inversione o un numero fisso di tick.

Le etichette di ritracciamento opzionali misurano poi ogni pullback rispetto alla gamba precedente, tracciando i classici livelli 38,2%, 50%, 61,8% e 75% direttamente sul grafico.

## Quando usarlo

- Per identificare la struttura del trend: una sequenza di massimi e minimi crescenti (o l'inverso) è immediatamente visibile.
- Per individuare livelli di supporto e resistenza basati sugli swing per pianificare ingressi e uscite.
- Per misurare i pullback con i livelli di ritracciamento di Fibonacci integrati invece di disegnarli a mano.
- Come strumento di allenamento: rivedere una sessione in replay con lo Zig Zag attivo rende la struttura del mercato molto più facile da interiorizzare (vedi [[replay-data]]).

## Guida rapida

1. Apri un grafico e fai clic sull'icona a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "Zig Zag" e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona dell'ingranaggio accanto all'indicatore per aprire le sue impostazioni.

Parti dalla configurazione predefinita e regola solo la sensibilità: in modalità **Absolute Reversal** il valore predefinito di **Zig Zag Abs. Rev** dello 0,50% funziona come prima prova sulla maggior parte degli strumenti. Se la linea cattura troppe piccole oscillazioni, alza la soglia; se salta swing che ti interessano, abbassala.

[SCREENSHOT: Un grafico dei prezzi con l'indicatore Zig Zag che collega massimi e minimi di swing con linee colorate, etichette di ritracciamento che mostrano i livelli 38,2%/50%/61,8% sull'ultimo pullback | dc-it-zig-zag-01.png]

## Come leggerlo

- **Gambe**: ogni segmento retto è uno swing significativo. Gli swing rialzisti e ribassisti usano i colori **Color Up** e **Color Down**, così la direzione si legge all'istante.
- **Struttura**: confronta i pivot consecutivi. Massimi e minimi crescenti significano trend rialzista; massimi e minimi decrescenti significano trend ribassista; pivot sovrapposti significano range.
- **Ritracciamenti**: le etichette percentuali mostrano quanto in profondità ogni pullback ha inciso sulla gamba precedente. Ritracciamenti poco profondi (vicini al 38,2%) suggeriscono un trend forte; quelli profondi (61,8%–75%) suggeriscono un trend che si indebolisce o una possibile inversione.

> **Attenzione:** L'ultima gamba di uno Zig Zag è per natura provvisoria — continua a ridisegnarsi mentre il prezzo si estende, e un pivot si fissa solo quando la soglia di inversione viene raggiunta. Non trattare mai l'ultima gamba non confermata come un segnale; usa lo Zig Zag per leggere la struttura completata, non per fare timing degli ingressi da solo.

## Riferimento delle impostazioni

### Impostazioni principali

| Impostazione | Cosa fa |
|---|---|
| **Zig Zag Mode** | Come vengono identificati gli swing: **Highest Lowest** (livelli di prezzo estremi su un periodo definito), **Absolute Reversal** (una percentuale fissa di inversione del prezzo conferma un nuovo swing) o **Tick Reversal** (un conteggio fisso di tick è la soglia di inversione). |
| **Zig Zag Abs. Rev** | Variazione percentuale minima richiesta per registrare un nuovo swing in modalità Absolute Reversal. Predefinito: 0,50%. Valori più alti riducono la sensibilità; valori più bassi aumentano la reattività. |
| **Zig Zag Tick Rev./Highest Lowest** | Campo a doppio uso: in modalità **Tick Reversal**, il numero di tick richiesti (predefinito: 10); in modalità **Highest Lowest**, il periodo di osservazione in barre. |
| **Color Up** | Colore della linea per gli swing rialzisti. |
| **Color Down** | Colore della linea per gli swing ribassisti. |
| **Line Width** | Spessore delle linee di swing. Predefinito: 2. |

### Impostazioni dei ritracciamenti

| Impostazione | Cosa fa |
|---|---|
| **Background Color** | Sfondo dietro le etichette di ritracciamento, per la leggibilità. |
| **Font Size** | Dimensione del testo delle etichette di ritracciamento. Predefinito: 11.00. |
| **Font Color** | Colore del testo delle etichette. |
| **Line Width** | Spessore delle linee dei livelli di ritracciamento. Predefinito: 1. |
| **Line Color** | Colore delle linee dei livelli di ritracciamento. |
| **Show 38.2%** | Mostra il livello di ritracciamento di Fibonacci del 38,2%. |
| **Show 50%** | Mostra il livello di ritracciamento di metà. |
| **Show 61.8%** | Mostra il livello del 61,8% ("rapporto aureo"). |
| **Show 75%** | Mostra il livello di ritracciamento più profondo del 75%. |
| **Extend Right** | Proietta i livelli di ritracciamento in avanti sulle barre future. |

### Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Color** / **2° Color** | Colori primario e secondario della linea zigzag. |
| **Subgraph Style** | Formato di visualizzazione. Predefinito: **Ignore**. |
| **Auto Color** | Logica di colorazione: **+/-**, **Bars** o **Ignore**. |
| **Line Style** | Pattern visivo. Predefinito: **Solid**. |
| **Line Width** | Spessore della linea principale. |
| **Short Name** | Etichetta personalizzata mostrata nella legenda del grafico. |

[SCREENSHOT: La finestra delle impostazioni dello Zig Zag con il gruppo delle impostazioni principali visibile — menu a discesa Zig Zag Mode aperto che mostra Highest Lowest, Absolute Reversal e Tick Reversal — e il gruppo delle impostazioni dei ritracciamenti sotto | dc-it-zig-zag-02.png]

## Suggerimenti ed errori comuni

- **Scegli la modalità adatta al tuo strumento.** L'inversione percentuale (Absolute Reversal) si adatta a strumenti con prezzi diversi; Tick Reversal è più naturale sui futures, dove ragioni in tick.
- **Non fare backtest di segnali sulla linea Zig Zag.** Poiché l'ultima gamba si ridisegna finché non è confermata, i grafici storici appaiono molto più puliti di quelli live. Usalo per la struttura, non come sistema di ingresso.
- **Regola una soglia alla volta** e giudicala su qualche sessione di dati, non su un singolo pomeriggio.
- Abilita **Extend Right** quando vuoi che i livelli di ritracciamento fungano da zone di supporto/resistenza proiettate in avanti anziché da annotazioni storiche.

## Articoli correlati

- [[swing-point]]
- [[drawing-tools]]
- [[replay-data]]
- [[different-types-of-input]]
- [[indicator-layout]]