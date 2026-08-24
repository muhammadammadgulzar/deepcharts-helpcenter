---
title: "Portfolio e Responsabile del rischio"
slug: "portfolio-risk-manager"
category: "Trading"
subcategory: ""
type: "how-to"
difficulty: "intermediate"
time: "6 min read"
description: "Gestisci e monitora ordini attivi, posizioni e cronologia delle esecuzioni tramite l'interfaccia dedicata della finestra Ordini"
keywords: ["portfolio risk manager", "risk manager deepdom", "deepdom", "trading"]
source_hash: "f903492cbabd5799"
ai_translated: true
source_hash: "f903492cbabd5799"
---
Gestisci e monitora ordini attivi, posizioni e cronologia delle esecuzioni tramite l'interfaccia dedicata della finestra Ordini

## Risk Manager

Il Risk Manager di DeepDOM consente ai trader di applicare controlli del rischio professionali e automatizzati direttamente all'interno della piattaforma.

Definendo regole rigorose di gestione del rischio, i trader possono imporsi disciplina in tempo reale. Se una qualsiasi regola predefinita viene violata, il conto viene automaticamente bloccato per la giornata (o per una durata specificata), garantendo l'aderenza al piano di trading e prevenendo decisioni emotive.

## 1. Come accedere al Risk Manager

1. Vai su Trading nella barra di navigazione principale.
2. Fai clic su Show Portfolio .

[SCREENSHOT: Portfolio e Responsabile del rischio — 1. Come accedere al Risk Manager (DeepDOM) | dd-it-portfolio-risk-manager-01.png]

## 2. Sezione Overview

Nella scheda Overview puoi vedere tutti i conti collegati a DeepDOM.

[SCREENSHOT: Portfolio e Responsabile del rischio — 2. Sezione Overview (DeepDOM) | dd-it-portfolio-risk-manager-02.png]

Vedrai una scheda principale per ogni connessione (ad esempio: SIM, Rithmic, Dxfeed).

[SCREENSHOT: Portfolio e Responsabile del rischio — 2. Sezione Overview (DeepDOM) | dd-it-portfolio-risk-manager-03.png]

#### Informazioni della scheda di connessione

Nome della connessione (in alto a sinistra, es. SIM)

Daily Profit – PnL giornaliero totale su tutti i conti sotto quella connessione

Open Profit – PnL non realizzato corrente

[SCREENSHOT: Portfolio e Responsabile del rischio — Informazioni della scheda di connessione (DeepDOM) | dd-it-portfolio-risk-manager-04.png]

#### Controlli a livello di connessione

Sul lato destro della scheda di connessione:

#### Pulsante Pause

Ti consente di mettere in pausa il trading per:

1 minuto

10 minuti

30 minuti

60 minuti

Intera sessione

#### Quando è in pausa:

Tutti i conti sotto la connessione sono bloccati

Compare lo stato "Lockout"

Un conto alla rovescia mostra quando il trading riprenderà

[SCREENSHOT: Portfolio e Responsabile del rischio — Quando è in pausa: (DeepDOM) | dd-it-portfolio-risk-manager-05.png]

#### Pulsante Close

Chiude (azzera) istantaneamente tutte le posizioni aperte su ogni conto sotto quella connessione.

## 3. Schede dei singoli conti

Ogni conto sotto una connessione ha il proprio pannello di controllo.

[SCREENSHOT: Portfolio e Responsabile del rischio — 3. Schede dei singoli conti (DeepDOM) | dd-it-portfolio-risk-manager-06.png]

#### Pulsanti a livello di conto

• Pulsante Eye (occhio) – Apre la vista dettagliata di gestione del rischio di quel conto

• Pulsante Pause – Mette in pausa solo quel conto specifico

• Pulsante Close – Azzera le posizioni solo di quel conto

#### Informazioni del conto

• Saldo

• PnL giornaliero

• PnL aperto

## 4. Impostazioni di Money Management (lato client)

Fai clic sul pulsante Settings (Impostazioni) per configurare le regole di rischio.

Ti verrà chiesto di scegliere tra:

• Impostazioni a livello di conto

• Impostazioni a livello di connessione

[SCREENSHOT: Portfolio e Responsabile del rischio — 4. Impostazioni di Money Management (lato client) (DeepDOM) | dd-it-portfolio-risk-manager-07.png]

Importante: il Risk Manager opera lato client. Se la piattaforma è chiusa, il money manager non funzionerà.

## 5. General Settings

[SCREENSHOT: Portfolio e Responsabile del rischio — 5. General Settings (DeepDOM) | dd-it-portfolio-risk-manager-08.png]

#### Enable

Attiva o disattiva il money manager.

#### Symbol – Exclude Not Listed

Se abilitato, puoi fare trading solo sui simboli che aggiungi manualmente.

Esempio: se vuoi evitare di fare trading per sbaglio sul contratto Mini invece che sul Micro, aggiungi solo il simbolo Micro. Tutti gli altri simboli verranno bloccati.

## 6. Daily Loss Limit

[SCREENSHOT: Portfolio e Responsabile del rischio — 6. Daily Loss Limit (DeepDOM) | dd-it-portfolio-risk-manager-09.png]

• Enable – Attiva la protezione dalla perdita giornaliera

• Value – Perdita massima consentita

• Unit – Denaro ($) o percentuale (%)

Una volta superato il limite, verrà innescata l'azione selezionata.

## 7. Daily Profit Limit

[SCREENSHOT: Portfolio e Responsabile del rischio — 7. Daily Profit Limit (DeepDOM) | dd-it-portfolio-risk-manager-10.png]

• Enable: Attiva la protezione sul profitto giornaliero

• Value: Profitto massimo consentito

• Unit – Denaro ($) o percentuale (%)

• Include Open Position – Se abilitato, le operazioni aperte verranno chiuse una volta raggiunto il limite.

## 8. Trailing Stop (Daily Trailing Drawdown)

#### Enable

Attiva il limite trailing.

#### Opzioni di azione:

[SCREENSHOT: Portfolio e Responsabile del rischio — Opzioni di azione: (DeepDOM) | dd-it-portfolio-risk-manager-11.png]

• Daily Pause – Blocca il conto per la sessione

• Time Pause – Blocca il conto per i minuti selezionati

[SCREENSHOT: Portfolio e Responsabile del rischio — Opzioni di azione: (DeepDOM) | dd-it-portfolio-risk-manager-12.png]

• Flat – Chiude le posizioni ma non blocca il conto

#### Value & Unit

Impostabili in denaro o in percentuale.

#### Include Open Position

Se abilitato, il trailing stop si applica anche al PnL non realizzato.

Esempio: se il profitto aperto ritraccia oltre il limite trailing, il sistema innesca l'azione selezionata.

## 9. Limiti a livello di portafoglio

#### Portfolio Loss Limit

Controlla la perdita totale su tutte le posizioni aperte (es. ES + NQ combinati).

[SCREENSHOT: Portfolio e Responsabile del rischio — Portfolio Loss Limit (DeepDOM) | dd-it-portfolio-risk-manager-13.png]

#### Stesse opzioni di configurazione:

• Enable

• Action

• Value

• Unit

#### Portfolio Profit Limit

Stessa logica del Daily Profit Limit, ma applicata all'intero portafoglio.

[SCREENSHOT: Portfolio e Responsabile del rischio — Portfolio Profit Limit (DeepDOM) | dd-it-portfolio-risk-manager-14.png]

## 10. Limiti a livello di posizione

#### Position Loss Limit

Si applica alle singole operazioni. Se superato, la posizione viene azzerata automaticamente e l'azione viene innescata.

#### Position Profit Limit

Stessa logica, ma per gli obiettivi di profitto sulle singole posizioni.

[SCREENSHOT: Portfolio e Responsabile del rischio — Position Profit Limit (DeepDOM) | dd-it-portfolio-risk-manager-15.png]

## 11. Limitare gli orari di trading (fuso orario EST)

[SCREENSHOT: Portfolio e Responsabile del rischio — 11. Limitare gli orari di trading (fuso orario EST) (DeepDOM) | dd-it-portfolio-risk-manager-16.png]

Puoi limitare il trading a specifiche finestre temporali.

#### Importante:

• L'orario si basa sul fuso orario EST

• È indipendente dal fuso orario del tuo PC o del grafico

#### Imposta:

• Begin Time (ora di inizio)

• End Time (ora di fine)

## 12. Add Symbol

[SCREENSHOT: Portfolio e Responsabile del rischio — 12. Add Symbol (DeepDOM) | dd-it-portfolio-risk-manager-17.png]

Aggiungi o rimuovi i simboli consentiti per il trading.

Se Symbol – Exclude Not Listed è abilitato, è possibile fare trading solo sui simboli aggiunti.

## 13. Inhibit Changes Until Next Session

[SCREENSHOT: Portfolio e Responsabile del rischio — 13. Inhibit Changes Until Next Session (DeepDOM) | dd-it-portfolio-risk-manager-18.png]

Se abilitato:

• Qualsiasi modifica alle impostazioni di rischio verrà applicata solo dal giorno di trading successivo.

## 14. Stato

Lo stato può mostrare:

Lockout – Il conto è bloccato per violazione di una regola. Un conto alla rovescia mostra quando il trading riprenderà.

[SCREENSHOT: Portfolio e Responsabile del rischio — 14. Stato (DeepDOM) | dd-it-portfolio-risk-manager-19.png]

## 15. Vista dettagliata del conto

Fai clic sul pulsante Eye (occhio) per vedere le posizioni dettagliate e le informazioni di rischio del conto.

#### Nota importante

Il Risk Manager segue il fuso orario del CME (EST) per i reset giornalieri.

#### Se bloccato per la giornata:

• Il conto si sblocca automaticamente alle 18:00 EST.

• L'unico modo per sbloccare il conto dopo che è scattato il timeout del Risk Manager è chiedere al team di supporto DeepDOM di sbloccarlo dal backend, e questo può richiedere un po' di tempo.

[SCREENSHOT: Portfolio e Responsabile del rischio — Se bloccato per la giornata: (DeepDOM) | dd-it-portfolio-risk-manager-20.png]

## Riepilogo

Il Risk Manager di DeepDOM fornisce:

• Limiti giornalieri di perdita e profitto

• Protezione con trailing drawdown

• Controlli del rischio a livello di portafoglio

• Limiti a livello di posizione

• Trading limitato per fasce orarie

• Protezione basata sui simboli

• Applicazione automatica del lockout

Trasforma la gestione del rischio da decisione discrezionale a sistema di disciplina automatizzato—assicurando che i trader seguano rigorosamente il loro piano di rischio predefinito.

## Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu incontri. Quando ci contatti, includi:

Uno screenshot del problema.

Una breve descrizione di ciò che stavi cercando di fare.

Ticket di supporto (risposta più rapida): visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email: puoi anche scriverci a support@deepcharts.com. Tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.