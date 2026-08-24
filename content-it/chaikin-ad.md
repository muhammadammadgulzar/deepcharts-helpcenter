---
title: "Chaikin Accumulation/Distribution"
slug: "chaikin-ad"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Indicatore cumulativo classico che combina posizione del prezzo e volume per mostrare se un mercato è in fase di accumulazione o distribuzione."
keywords: ["chaikin ad", "accumulazione distribuzione", "chaikin accumulation distribution", "linea A/D", "linea AD", "linea di accumulazione distribuzione", "indicatore chaikin"]
source_hash: "893be0d63c5aad5b"
ai_translated: true
source_hash: "893be0d63c5aad5b"
---
Il Chaikin Accumulation/Distribution (AD) misura la pressione di acquisto e di vendita combinando prezzo e volume in un'unica linea cumulativa. Risponde a una domanda a cui il volume grezzo non può rispondere: quel volume è stato scambiato mentre il prezzo chiudeva forte, o mentre chiudeva debole?

A differenza degli strumenti delta di orderflow di DeepCharts, che classificano gli scambi per aggressore sul bid o sull'ask, il Chaikin AD è una stima classica basata sul prezzo — deduce la pressione da dove ogni candela chiude all'interno del suo range, ponderata per il volume. Questo lo rende utilizzabile su qualsiasi dato e un buon ponte tra l'analisi tecnica tradizionale e l'orderflow.

## Che cos'è

La linea AD calcola la pressione cumulativa di acquisto e di vendita usando la posizione del prezzo all'interno della candela e il suo volume. Una chiusura vicino al massimo della barra contribuisce positivamente (accumulazione); una chiusura vicino al minimo contribuisce negativamente (distribuzione). Questi contributi vengono sommati nel tempo, quindi la direzione della linea conta più del suo valore assoluto: una linea AD in salita indica accumulazione, una linea AD in discesa indica distribuzione.

[SCREENSHOT: Finestra del grafico con l'indicatore Chaikin Accumulation/Distribution in un pannello inferiore — la linea AD che sale di pari passo con un trend rialzista, con la linea media opzionale sovrapposta | dc-it-chaikin-ad-01.png]

## Quando usarlo

- Vuoi confermare un trend: il prezzo che sale insieme a una linea AD in salita significa che il volume sostiene il movimento.
- Cerchi divergenze: il prezzo segna un nuovo massimo mentre la linea AD no — la pressione ponderata per il volume non sta confermando, un classico segnale di allarme.
- Vuoi una lettura di accumulazione/distribuzione su mercati o dati dove il vero delta bid/ask non è disponibile.
- Preferisci un indicatore di pressione fluido e cumulativo rispetto a letture barra per barra come [[delta-bar]].

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico e aggiungi **Chaikin Accumulation/Distribution**.
2. Apri le **Settings** (impostazioni) dell'indicatore.
3. Nella sezione **Average**, attiva **Enable** per tracciare una media di segnale sopra la linea AD.
4. Scegli un **Average Type** (inizia con **Exponential** per la reattività) e imposta **Avg Length** su un periodo coerente con il tuo orizzonte di trading.
5. Lascia il subgraph **AD** sul suo stile predefinito **Line** con stile di linea **Solid**.

[SCREENSHOT: Finestra di dialogo delle impostazioni di Chaikin Accumulation/Distribution con la sezione Average (Enable, Average Type, Avg Length) e sotto la configurazione del subgraph AD | dc-it-chaikin-ad-02.png]

## Come leggerlo

- **Linea AD in salita** — accumulazione: le chiusure stanno atterrando nella parte superiore dei loro range su volume significativo.
- **Linea AD in discesa** — distribuzione: il volume viene scambiato mentre il prezzo chiude debole.
- **AD che incrocia la sua linea media** — un cambio di momentum nella pressione cumulativa; molti trader usano l'incrocio come trigger di conferma del trend piuttosto che come segnale a sé stante.
- **Divergenza** — il trend del prezzo e il trend dell'AD puntano in direzioni opposte. Una divergenza ribassista (massimi di prezzo crescenti, massimi dell'AD decrescenti) suggerisce che il rally non ha il supporto del volume; la divergenza rialzista è l'immagine speculare.

Poiché la linea è cumulativa, il suo livello assoluto è arbitrario — confronta pendenza e struttura degli swing, mai il numero grezzo.

## Riferimento impostazioni

### Average

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Attiva o disattiva la linea media di segnale disegnata sopra i valori AD. |
| **Average Type** | Metodo di media mobile per la linea di segnale: **Simple**, **Exponential**, **Triangular** o **Weighted**. |
| **Avg Length** | Numero di periodi usati per lo smussamento della linea media. |

### AD (subgraph)

| Impostazione | Cosa fa |
|---|---|
| **Color** / **2° Color** | Colori primario e secondario della linea AD. |
| **Subgraph Style** | **Line** o **Hidden** (nasconde la linea AD grezza e mostra solo la media). |
| **Auto Color** | **None**, **Slope** (colore in base alla direzione della linea) o **+/-** (colore in base al segno). |
| **Line Style** | Rendering della linea. Predefinito **Solid**. |
| **Line Width** | Spessore della linea AD. |
| **Short Name** | Etichetta personalizzata mostrata nella legenda del pannello. |

### AVG (subgraph)

| Impostazione | Cosa fa |
|---|---|
| **Color / Style / Width** | Configurazione visiva della linea media, indipendente dalla linea AD, che ti consente di separare visivamente il segnale smussato dai valori grezzi. |

### Display

| Impostazione | Cosa fa |
|---|---|
| **Name Label** | Mostra il nome dell'indicatore nel pannello. |
| **Value Label** | Mostra il valore corrente accanto alla linea. |
| **Name/Value Background** | Disegna uno sfondo dietro le etichette per la leggibilità. |
| **Include on Auto Center** | Include questo indicatore quando il pannello centra automaticamente la sua scala. |

## Suggerimenti ed errori comuni

- **Pendenza, non livello.** I trader nuovi agli indicatori cumulativi cercano di leggere il valore AD in sé. Non ha una scala fissa — solo la direzione e la divergenza portano informazione.
- **Attenzione alla distorsione dei gap.** Il calcolo usa la posizione della chiusura all'interno del range di ogni barra, quindi non tiene conto dei gap di apertura; sugli strumenti ricchi di gap tratta con cautela le letture su singola barra.
- **Usa Auto Color: Slope** per una lettura visiva rapida — la linea cambia colore nel momento in cui la pressione cumulativa si inverte.
- **Abbinalo al delta reale.** Sui futures con dati di orderflow completi, conferma le divergenze dell'AD con il delta reale degli aggressori ([[delta-cumulative-histogram]]) prima di agire; la stima e il nastro occasionalmente non concordano.

## Articoli correlati

- [[volume]]
- [[delta-cumulative-histogram]]
- [[divergence-detector]]
- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]