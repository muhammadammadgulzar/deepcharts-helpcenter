---
title: "Rollover dei simboli (cambio del mese di contratto)"
slug: "symbol-rollover"
category: "Data & Database"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Esegui il rollover di un simbolo futures al mese di contratto successivo in DeepCharts, così il tuo grafico segue il contratto front-month attivo."
keywords: ["rollover", "rollover dei simboli", "mese di contratto", "front month", "scadenza", "il grafico non mostra volume", "prezzo diverso dal broker", "perform rollover", "perform rollback", "roll over", "rolover"]
source_hash: "5f46fc8cc6fe1cc0"
ai_translated: true
source_hash: "5f46fc8cc6fe1cc0"
---
I contratti futures scadono. Con l'avvicinarsi di ogni scadenza, l'attività di trading migra verso il mese di contratto successivo, e un grafico che segue ancora il vecchio contratto mostra volumi sottili e prezzi che non corrispondono più al tuo broker. Alla fine di questa guida avrai eseguito il rollover di un simbolo al suo nuovo contratto front-month usando la finestra **Manage Rollover** — e saprai come annullare un rollover se scegli il simbolo sbagliato.

Se non sei sicuro del perché i contratti passano al mese successivo, leggi prima [[understanding-market-structure-sessions|Comprendere la struttura del mercato e le sessioni]] — spiega il ciclo di rollover in parole semplici.

## Prima di iniziare

- [[connect-data-feed|Un feed dati è già configurato]] — lo disconnetterai durante il rollover, poi lo riconnetterai.
- [[manage-feed-connections|Sai come disconnettere e riconnettere il tuo feed]].
- [[understanding-market-structure-sessions|Sai cos'è un rollover di contratto]] (lettura di approfondimento facoltativa).

> **Nota:** Il rollover cambia localmente a quale mese di contratto punta il simbolo. Non tocca il tuo conto, le tue sottoscrizioni o le impostazioni del tuo broker.

## Passaggi

1. Chiudi il grafico dei prezzi del simbolo di cui vuoi eseguire il rollover (chiudi qualsiasi finestra di grafico che lo utilizza).
2. Disconnettiti dal tuo feed dati.
3. Vai su **Options → Symbols Rollover**.

[SCREENSHOT: Il menu Options aperto sulla barra principale di DeepCharts con la voce Symbols Rollover evidenziata | dc-it-symbol-rollover-01.png]

4. Si apre la finestra **Manage Rollover**. Ha due riquadri: **Contracts in Roll-window** (simboli che devono essere rollati) e **Contracts Rolled** (simboli già rollati).

[SCREENSHOT: La finestra Manage Rollover che mostra entrambi i riquadri — Contracts in Roll-window con almeno un simbolo elencato, e Contracts Rolled — con i pulsanti Perform Rollover e Perform Rollback visibili | dc-it-symbol-rollover-02.png]

5. Fai clic sul simbolo di cui vuoi eseguire il rollover nel riquadro **Contracts in Roll-window**.
6. Premi **Perform Rollover**. Il simbolo passa al nuovo mese di contratto.

[SCREENSHOT: La finestra Manage Rollover subito dopo un rollover, con il simbolo rollato ora elencato nel riquadro Contracts Rolled | dc-it-symbol-rollover-03.png]

### Se hai rollato il simbolo sbagliato

La stessa finestra include un pulsante **Perform Rollback**. Seleziona il simbolo nel riquadro **Contracts Rolled** e premi **Perform Rollback** per annullare il rollover e riportare il simbolo al suo mese di contratto precedente.

## Verifica che abbia funzionato

1. Riconnetti il tuo feed dati.
2. Apri un nuovo grafico per il simbolo.
3. Il grafico dovrebbe ora mostrare il contratto front-month corrente: prezzi live che corrispondono alla piattaforma del tuo broker e volume di trading normale. Se il vecchio grafico sembrava "morto" — volume quasi assente, prezzo che si allontanava da quello del broker — è esattamente il sintomo che il rollover risolve.

> **Suggerimento:** Se preferisci non eseguire il rollover manualmente a ogni ciclo, controlla le opzioni di contratto continuo in [[price-chart-settings|Impostazioni del grafico dei prezzi]] — controllano come il grafico unisce i mesi di contratto tra loro.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| Il grafico mostra ancora vecchi prezzi o dati obsoleti dopo il rollover | Elimina i dati locali del simbolo così vengono riscaricati freschi — vedi [[delete-market-data]] |
| Compaiono gap nel prezzo attorno alla data di roll | Vedi [[gaps-in-price]] — le date di rollover sono una causa comune di gap apparenti |
| Il feed è connesso ma il grafico non si muove affatto | Vedi [[feed-connected-chart-not-moving]] |
| Il simbolo manca o non è sottoscritto | Controlla le tue sottoscrizioni degli exchange in [[symbol-manage|Symbol Manage]] |

## Articoli correlati

- [[price-chart-settings]]
- [[gaps-in-price]]
- [[delete-market-data]]
- [[download-data]]
- [[understanding-market-structure-sessions]]
- [[symbol-manage]]