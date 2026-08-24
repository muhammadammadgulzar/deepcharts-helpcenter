---
title: "Deep V-Tracker"
slug: "deep-v-tracker"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Indicatore Order Flow con due moduli: anomalie nei pattern delle candele (Acceleration, Slowdown, Exhaustion) e livelli orizzontali Absorption & Pressure."
keywords: ["deep v-tracker", "v tracker", "vtracker", "livelli absorption pressure", "pattern acceleration", "pattern exhaustion", "etichette PC PE AC AE", "cosa significa P deep v-tracker"]
source_hash: "86de14fa4b13a040"
ai_translated: true
source_hash: "86de14fa4b13a040"
---
Deep V-Tracker è un sofisticato indicatore Order Flow che rileva squilibri volumetrici e pattern di prezzo specifici. Combina due moduli indipendenti: **Patterns**, che segnala anomalie nella velocità di trading e nel comportamento delle candele, e **Absorption & Pressure**, che disegna livelli orizzontali dove compratori o venditori stanno esercitando forza reale.

Insieme rispondono a due domande diverse — "sta succedendo qualcosa di insolito dentro questa candela?" e "a quali prezzi i grandi partecipanti stanno premendo o assorbendo?"

## Che cos'è

Il modulo Patterns osserva come si forma ogni candela e contrassegna tre anomalie: accelerazione improvvisa dell'orderflow, decelerazione (slowdown) ed esaurimento del lato aggressivo. Il modulo Absorption & Pressure mappa livelli orizzontali di forza, etichettati per tipo (Pressure, Absorption, con le varianti Control ed Extreme), colorati in base al lato che agisce. Entrambi i moduli puntano allo stesso obiettivo: esporre l'attività istituzionale e livelli di trade ad alta probabilità.

[SCREENSHOT: Grafico con Deep V-Tracker attivo che mostra un riquadro Acceleration ciano sul corpo di una candela più diverse linee orizzontali Absorption & Pressure in viola e verde con le etichette P/A/PC/AC visibili | dc-it-deep-v-tracker-01.png]

## Quando usarlo

- Vuoi il rilevamento automatico degli "strappi" dell'orderflow (accelerazione) nei punti di rifiuto e nelle zone di continuazione del trend.
- Cerchi l'esaurimento agli estremi — compratori che finiscono in un trend rialzista, venditori che finiscono in un trend ribassista.
- Vuoi una mappa live dei livelli di pressione e assorbimento con etichette chiare dei livelli chiave e di invalidazione.
- Preferisci un filtraggio del rumore configurabile (Strong/Medium/Weak) a uno strumento di segnali tutto-o-niente.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico, trova **Deep V-Tracker** e fai clic su **+**.
2. Fai clic sull'icona **Settings** per configurare i moduli.
3. Nel modulo Patterns, per iniziare attiva solo **Acceleration** — il team consiglia di disattivare gli altri pattern all'inizio per ridurre la confusione — e imposta **Pattern Mode** su **Strong**.
4. Nel modulo Absorption & Pressure, parti con **Intensity = Strong** e **Level Mode = Conservative** così vengono disegnati solo i livelli più strutturali.
5. Se vuoi, crea avvisi in **Options → Settings → Add Alert**; l'avviso apparirà poi nella lista di Deep V-Tracker.

[SCREENSHOT: Finestra delle impostazioni di Deep V-Tracker che mostra il modulo Patterns con solo Acceleration attivo e Pattern Mode impostato su Strong, e la sezione Absorption & Pressure con i menu a discesa Intensity e Level Mode visibili | dc-it-deep-v-tracker-02.png]

## Come leggerlo

### Modulo Patterns

| Pattern | Significato |
|---|---|
| **Acceleration** | Uno "strappo" improvviso nell'orderflow durante la formazione della candela, disegnato come un riquadro ciano pieno sul corpo della candela. Segnala zone di forte interesse istituzionale — punti di rifiuto e aree di continuazione del trend. |
| **Slowdown** | Il movimento del prezzo sta decelerando nella direzione corrente — potenziale consolidamento o trend che si sta indebolendo. |
| **Exhaustion** | Il lato aggressivo ha esaurito i suoi ordini. In un trend rialzista: i compratori hanno finito, rischio di inversione. In un trend ribassista: i venditori hanno finito, potrebbe formarsi un minimo. |

### Modulo Absorption & Pressure

Il colore ti dice quale lato sta agendo: **viola = attività sul bid (pressione dei venditori)**, **verde = attività sull'ask (pressione dei compratori)**.

| Etichetta | Significato |
|---|---|
| **P** (tratteggiata) | Forte pressione in acquisto. |
| **P** (continua) | Forte pressione in vendita. |
| **A** | Assorbimento — ordini aggressivi bloccati da ordini passivi. |
| **PC** | Pressure Control — livello chiave di vendita. |
| **PE** | Pressure Extreme — livello di invalidazione della zona di pressione. |
| **AC** | Absorption Control — livello chiave di acquisto. |
| **AE** | Absorption Extreme — livello di invalidazione della zona di assorbimento. |

Leggi i livelli Control (**PC**, **AC**) come i prezzi chiave attorno a cui operare, e i livelli Extreme (**PE**, **AE**) come le linee del "mi sbaglio": se il prezzo attraversa un Extreme, la zona corrispondente è invalidata.

## Riferimento delle impostazioni

Raggruppate per modulo come nella finestra delle impostazioni.

### Modulo Patterns

| Impostazione | Cosa fa |
|---|---|
| **Pattern toggles** | Attiva/disattiva **Acceleration**, **Slowdown**, **Exhaustion** individualmente. |
| **Pattern Mode** | Filtro del rumore: **Strong** mostra solo i livelli forti con rumore minimo, **Medium** è bilanciato, **Weak** mostra più marker con più rumore. |
| **Color** (per pattern) | Colore personalizzato per ogni tipo di pattern. |

### Modulo Absorption & Pressure

| Impostazione | Cosa fa |
|---|---|
| **Intensity** | **Strong** disegna solo i livelli più forti (rumore minimo), **Medium** bilancia visibilità e rumore, **Weak** disegna più livelli con più rumore. |
| **Level Mode** | **Conservative** privilegia zone strutturali solide, **Medium** è bilanciato, **Aggressive** disegna livelli vicini al prezzo più facili da violare. |
| **Control/Extreme Line Width** | Spessore delle linee per i livelli Control ed Extreme. |
| **Bid Color / Ask Color** | Colori per i livelli viola lato bid e verdi lato ask. |
| **Text Size** | Dimensione delle etichette P/A/PC/PE/AC/AE. |
| **Number of Bars** | Quanto si estendono le linee (lunghezza in barre). |
| **Extend Far Right** | Estende i livelli fino alla scala dei prezzi. |

### Avvisi

| Impostazione | Cosa fa |
|---|---|
| **Add Alert** | Crea avvisi tramite **Options → Settings → Add Alert** per qualsiasi evento di pattern, pressione o assorbimento; l'avviso appare poi nella lista di Deep V-Tracker. |

## Suggerimenti ed errori comuni

- **Grafico troppo affollato?** Attiva solo il pattern Acceleration, alza **Pattern Mode** su **Strong** e imposta **Intensity = Strong** con **Level Mode = Conservative**. Aggiungi dettagli solo finché il grafico resta leggibile.
- **Non confondere il colore delle etichette con il colore dei pattern.** Viola/verde codifica quale lato agisce sui livelli; il riquadro ciano è specificamente il pattern Acceleration.
- **Rispetta gli Extreme.** PE e AE sono prezzi di invalidazione — tenere un trade oltre questi livelli significa operare contro la logica stessa dello strumento.
- **Il Level Mode Aggressive è per lo scalping.** I livelli vicini al prezzo vengono violati più spesso; usa la modalità Conservative per una struttura in stile swing.
- **Verifica l'esaurimento con altri strumenti.** Un segnale di Exhaustion si abbina bene alle colonne dei ratio e COT di [[deep-stats]] prima di andare contro un movimento.

## Articoli correlati

- [[orderflow-101]]
- [[understanding-icebergs-absorption]]
- [[understanding-auction-theory]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]