---
title: "Session Imbalance"
slug: "session-imbalance"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Riferimento per l'indicatore Session Imbalance: massimo, minimo e punto medio dell'Initial Balance più i livelli di estensione al 50% e al 100%, con ogni impostazione e avviso spiegati."
keywords: ["session imbalance", "initial balance", "IB high", "IB low", "estensioni initial balance", "range della prima ora", "indicatore opening range", "session imbalence"]
source_hash: "007b39b16f489f57"
ai_translated: true
source_hash: "007b39b16f489f57"
---
L'indicatore Session Imbalance evidenzia i livelli di prezzo chiave creati nella prima ora di contrattazione — o in qualsiasi periodo personalizzato tu definisca. Traccia l'Initial Balance High, l'Initial Balance Low e il Midpoint (punto medio) tra i due, e può aggiungere livelli di estensione opzionali al 50% e al 100% sopra e sotto il range.

L'Initial Balance è una pietra angolare del day trading basato sulla teoria dell'asta: il range costruito durante il periodo di apertura inquadra come si legge il resto della sessione. Per la teoria alla base, vedi [[understanding-auction-theory]] e [[understanding-market-structure-sessions]].

## Che cos'è

All'inizio di ogni sessione l'indicatore misura il massimo e il minimo registrati nel numero di minuti configurato (60 per impostazione predefinita) e proietta quei livelli — più il punto medio — sul resto della sessione. I livelli di estensione al 50% e al 100% del range dell'Initial Balance possono essere proiettati oltre il massimo e il minimo, offrendoti target precalcolati per le giornate di breakout.

## Quando usarlo

- Per inquadrare la giornata di trading: rotazione all'interno dell'Initial Balance oppure estensione oltre di esso.
- Per avere target di breakout pronti (estensioni al 50% e al 100%) senza misurazioni manuali.
- Per studiare quante sessioni recenti hanno rispettato o esteso il proprio opening range, caricando più giorni.
- Per ricevere un avviso quando il prezzo supera gli estremi dell'Initial Balance o raggiunge un livello di estensione.

## Avvio rapido

1. Aggiungi **Session Imbalance** al tuo grafico.
2. Mantieni **Number of Minutes** al valore predefinito di 60 per il classico Initial Balance della prima ora.
3. Imposta **Number of Days (0 - All)** su un numero piccolo (per esempio 5) mentre impari lo strumento — 0 disegna ogni sessione disponibile e può affollare il grafico.
4. Abilita i livelli di estensione **50%** e **100%** se vuoi che i target di breakout siano tracciati automaticamente.
5. Attiva i gruppi di avvisi che ti interessano — estremi dell'Initial Balance, livelli al 50%, livelli al 100% — e scegli un suono per ciascuno.

[SCREENSHOT: Un grafico intraday sui futures con l'indicatore Session Imbalance che traccia le linee Initial Balance High, Low e Mid per i primi 60 minuti, con i livelli di estensione al 50% e al 100% visibili sopra e sotto | dc-it-session-imbalance-01.png]

## Come leggerlo

L'Initial Balance è il range dell'asta di apertura del mercato. Un prezzo che si mantiene al suo interno segnala una sessione bilanciata e rotazionale, dove il fading degli estremi è la giocata classica. Una rottura netta e mantenuta oltre l'IB High o l'IB Low segnala un'estensione del range — una sessione direzionale — e le estensioni al 50% e al 100% diventano target naturali: l'estensione al 100% è una proiezione completa del range di apertura oltre il lato rotto.

Anche la linea **Mid** conta nell'intraday: spesso funge da perno tra la metà dei compratori e quella dei venditori del range di apertura, e le reazioni su di essa ti dicono quale lato ha il controllo.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Number of Minutes** | Durata del periodo usato per calcolare lo squilibrio di sessione. Predefinito: 60 minuti (il classico Initial Balance). |
| **Custom Start Time** | Quando abilitato, ti consente di impostare un orario di inizio personalizzato; quando disabilitato, il calcolo inizia all'apertura della sessione (per i futures statunitensi, 00:00 ora dell'Europa centrale). |
| **Number of Days (0 - All)** | Quante sessioni visualizzare. 0 mostra tutte le sessioni disponibili. |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **High Color** / **Low Color** / **Mid Color** | Colori delle tre linee principali. |
| **Line Width** | Spessore delle linee tracciate. |
| **Line Style** | Solid, Dashed, Dotted e altri stili. |
| **Text Size** / **Text Alignment** | Dimensione e posizionamento delle etichette dei livelli. |

### Extension Levels

| Impostazione | Cosa fa |
|---|---|
| **50% Extensions** | Attiva o disattiva i livelli di estensione al 50%, con una selezione di colore dedicata. |
| **100% Extensions** | Attiva o disattiva i livelli di estensione al 100%, con una selezione di colore separata. |

### Alerts

Tre categorie di avvisi, ciascuna con opzioni di popup e suono e un tipo di suono selezionabile:

- **HH/LL Alerts** — scattano quando il prezzo supera gli estremi dell'Initial Balance.
- **50% Level Alerts** — scattano alle soglie di estensione del 50%.
- **100% Level Alerts** — scattano alle soglie di estensione del 100%.

[SCREENSHOT: La finestra delle impostazioni di Session Imbalance con il gruppo General, Number of Minutes impostato su 60 e i campi Custom Start Time e Number of Days | dc-it-session-imbalance-02.png]

## Suggerimenti ed errori comuni

- **Verifica l'orario di inizio rispetto al tuo strumento.** Se l'apertura di sessione del tuo mercato non corrisponde al valore predefinito, abilita **Custom Start Time** e impostalo esplicitamente — un Initial Balance misurato dall'apertura sbagliata è peggio di nessun Initial Balance.
- **Non trattare ogni tocco di un'estensione come un'inversione.** Nelle giornate di trend forte il prezzo può attraversare il livello del 50% e toccare l'estensione del 100%; leggi i livelli insieme alla struttura della giornata.
- **Limita i giorni visualizzati.** **Number of Days** a 0 carica ogni sessione, utile per gli studi ma pesante per i grafici di trading in tempo reale.
- **Usa gli avvisi invece di fissare le linee.** I tre gruppi di avvisi coprono gli eventi significativi; lascia che siano loro a fare il monitoraggio.

## Articoli correlati

- [[understanding-auction-theory]]
- [[understanding-market-structure-sessions]]
- [[market-profile-tpo]]
- [[session-marker]]
- [[different-types-of-input]]
- [[indicator-layout]]