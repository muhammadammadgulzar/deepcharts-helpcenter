---
title: "Portafoglio (Wallet)"
slug: "portfolio-wallet"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Monitora ogni broker connesso, il saldo dei conti e il P/L in un'unica finestra — e metti in pausa o appiattisci i conti dalle stesse schede."
keywords: ["portafoglio", "wallet", "show portfolio", "saldo del conto", "p/l giornaliero", "p/l aperto", "panoramica conti", "mettere in pausa il conto", "appiattire il conto", "chiudere tutte le posizioni"]
source_hash: "59fd538368f1f1cf"
ai_translated: true
source_hash: "59fd538368f1f1cf"
---
La finestra Portfolio (a volte chiamata Wallet) è la dashboard dei tuoi conti: ogni broker connesso, ogni conto al suo interno, con saldi e profitti/perdite — tutto aggiornato in tempo reale. È anche la superficie di controllo per le azioni a livello di conto: mettere in pausa il trading su un conto o appiattire tutto con un clic, ed è dove si configurano le regole del [[risk-manager|Responsabile del rischio]].

La apri dalla barra principale: **Trading → Show Portfolio**.

## Che cos'è

Un'unica finestra che risponde a "come stanno andando tutti i miei conti in questo momento?". Ogni connessione al feed (SIM, Rithmic, dxFeed e così via) appare come una scheda dedicata, con i singoli conti di quella connessione elencati al suo interno. Saldi e P/L si aggiornano in tempo reale su tutti i sotto-conti, così i trader prop che gestiscono più conti possono osservarli fianco a fianco senza cambiare finestra.

[SCREENSHOT: La finestra Portfolio aperta tramite Trading → Show Portfolio, con le schede di connessione per SIM e un feed live, ciascuna con i valori Daily Profit e Open Profit e le righe dei conti sotto | dc-it-portfolio-wallet-01.png]

## Quando usarla

- **A inizio giornata** — verifica che ogni connessione sia attiva e che i saldi siano corretti prima di operare.
- **Mentre operi su più conti** — osserva a colpo d'occhio Daily P/L e Open P/L su tutti.
- **Chiusura d'emergenza** — il pulsante **Close** a livello di connessione appiattisce in una volta tutte le posizioni sotto quella connessione.
- **Imporre disciplina** — il pulsante **Pause** blocca i conti per un tempo prestabilito; le regole automatiche complete vivono nel [[risk-manager|Responsabile del rischio]].

## Avvio rapido

1. Fai clic su **Trading → Show Portfolio** nella barra principale.
2. Trova la scheda della connessione che ti interessa — il nome della connessione è nell'angolo in alto a sinistra della scheda.
3. Leggi i totali della connessione: **Daily Profit** (PnL giornaliero totale di tutti i conti della connessione) e **Open Profit** (PnL non realizzato corrente).
4. Espandi i singoli conti per vedere **Balance**, **Daily PnL** e **Open PnL** per ciascun conto.

## Come leggerla

La finestra ha due livelli:

**Schede di connessione** — una per ogni connessione a feed/broker. L'intestazione mostra il nome della connessione; i totali della scheda aggregano tutti i conti al suo interno. I controlli sul lato destro della scheda agiscono su *ogni* conto di quella connessione.

**Schede dei conti** — una per ogni conto all'interno di una connessione. Ognuna mostra **Balance**, **Daily PnL** e **Open PnL**, più tre pulsanti propri: **Eye** (occhio: apre la vista dettagliata con posizioni e informazioni di rischio del conto), **Pause** (blocca solo quel conto) e **Close** (appiattisce solo quel conto).

[SCREENSHOT: Una singola scheda di un conto ingrandita, con i pulsanti Eye, Pause e Close visibili accanto ai valori Balance, Daily PnL e Open PnL | dc-it-portfolio-wallet-02.png]

La panoramica elenca anche **Connected Brokers**, **Sales**, **Daily P/L** e **Open P/L** per ogni conto. [CONFIRM: what exactly the Sales field reports]

Quando un conto è in pausa o scatta una regola del Responsabile del rischio, il suo stato mostra **Lockout** con un conto alla rovescia fino alla ripresa del trading.

## Riferimento impostazioni

| Controllo | Livello | Cosa fa |
|---|---|---|
| **Pause** | Connessione | Blocca tutti i conti della connessione per **1**, **10**, **30** o **60 minuti**, oppure per l'**intera sessione**. I conti bloccati mostrano lo stato **Lockout** con un conto alla rovescia. |
| **Close** | Connessione | Appiattisce istantaneamente tutte le posizioni aperte di ogni conto sotto quella connessione. |
| **Eye** | Conto | Apre la vista di rischio dettagliata di quel conto: posizioni e informazioni di rischio del conto. |
| **Pause** | Conto | Blocca solo quel conto (stesse opzioni di durata). |
| **Close** | Conto | Appiattisce solo le posizioni aperte di quel conto. |
| **Settings** | Connessione o conto | Apre le regole del Risk Manager (gestione del capitale) per quel livello — vedi [[risk-manager]]. |

> **Attenzione:** **Close** invia immediatamente ordini di chiusura reali — ogni posizione aperta nell'ambito scelto viene appiattita a mercato. La documentazione attuale non descrive alcun passaggio di conferma aggiuntivo, quindi trattalo come un vero interruttore d'emergenza, non come un'anteprima.

## Suggerimenti ed errori comuni

- **Pause è un lockout, non un tasto pausa per il mercato** — mentre è bloccato, il conto non può inserire operazioni finché il conto alla rovescia non termina. Se il lockout è stato causato da una regola del Responsabile del rischio, lo sblocco anticipato è possibile solo tramite il supporto DeepCharts; vedi [[risk-manager]].
- **Livello connessione vs livello conto** — lo stesso nome di pulsante agisce su ambiti molto diversi a seconda della scheda su cui si trova. Controlla su quale scheda sei prima di fare clic su **Close**.
- **Il P/L sembra congelato** — il Portfolio si aggiorna dalla connessione live. Se non si muove nulla, verifica che il feed sia connesso in [[manage-feed-connections]].
- **Testare i pulsanti in sicurezza** — usa prima un conto SIM; vedi [[simulation-accounts]].

## Articoli correlati

- [[risk-manager]]
- [[orders-window]]
- [[trading-panel-reference]]
- [[performance-analysis]]
- [[simulation-accounts]]
- [[manage-feed-connections]]