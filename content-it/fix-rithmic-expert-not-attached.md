---
title: "Correzione: Rithmic — Expert Not Attached"
slug: "fix-rithmic-expert-not-attached"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Risolvi l'errore 'Rithmic: Expert not attached' che mantiene la connessione del feed Rithmic gialla invece che verde."
keywords: ["Rithmic: Expert not attached", "expert not attached", "punto giallo rithmic", "connessione resta gialla", "Use R|Trader", "plugin rtrader", "rithmic non diventa verde"]
source_hash: "be93c540cc29f16f"
ai_translated: true
source_hash: "be93c540cc29f16f"
---
L'errore **Rithmic: Expert not attached** appare quando DeepCharts è in attesa di un componente Rithmic esterno che non è in esecuzione sul tuo computer. La connessione non è interrotta — DeepCharts è semplicemente configurato per aspettarsi R Trader Pro in background, e non riesce a trovarlo.

## Sintomo

- Colleghi un feed dati Rithmic e l'indicatore di connessione diventa **giallo** — e resta giallo invece di diventare verde.
- Viene mostrato il messaggio di errore **Rithmic: Expert not attached**.

[SCREENSHOT: Connessione del feed Rithmic con l'indicatore di stato giallo insieme al messaggio di errore "Rithmic: Expert not attached" | dc-it-fix-rithmic-expert-not-attached-01.png]

Un indicatore giallo significa che la connessione è in attesa o solo parzialmente stabilita; il verde conferma una connessione al feed dati riuscita.

Da non confondere con:

- [[fix-log-in-using-rtrader]] — un messaggio diverso che ti chiede di accedere con R Trader o R Trader Pro.
- [[fix-username-password]] — la connessione fallisce del tutto con un errore di credenziali.
- [[fix-bad-server]] — la connessione fallisce perché è selezionato il server sbagliato.

## Causa più probabile

L'opzione **Use R|Trader** è abilitata nelle impostazioni del tuo feed Rithmic, quindi DeepCharts si aspetta che R Trader Pro sia in esecuzione in background con i plugin richiesti abilitati — e non lo è.

## Soluzione rapida

Disabilitare **Use R|Trader** è l'approccio più semplice e risolve il problema per la maggior parte degli utenti:

1. Apri DeepCharts.
2. Apri le **Feed Settings** (impostazioni del feed) della tua connessione Rithmic (vedi [[manage-feed-connections]] se non sai dove trovarle).
3. Trova l'opzione **Use R|Trader**.
4. Deseleziona (disabilita) l'opzione.

[SCREENSHOT: Finestra Feed Settings di Rithmic con la casella Use R|Trader visibile ed evidenziata nello stato deselezionato | dc-it-fix-rithmic-expert-not-attached-02.png]

5. Fai clic su **Save**.
6. Riavvia DeepCharts.

Dopo il riavvio, la connessione dovrebbe diventare verde.

## Se non ha funzionato

### Causa: usi R Trader Pro intenzionalmente

Se hai specificamente bisogno del percorso via R Trader Pro — per esempio perché il tuo conto è configurato così — mantieni abilitata l'opzione **Use R|Trader** e assicurati che il componente esterno sia effettivamente in esecuzione:

1. Apri R Trader Pro.
2. Accedi con le **stesse credenziali Rithmic** che hai inserito in DeepCharts.
3. Abilita i plugin richiesti.
4. Mantieni R Trader Pro in esecuzione in background.
5. Avvia DeepCharts.

La configurazione completa dei plugin è descritta in [[rtrader-pro-plugin]].

> **Nota:** Nella maggior parte dei casi questo metodo non è necessario. Abilita **Use R|Trader** solo se ne hai specificamente bisogno.

### Causa: un problema di connessione diverso

Se l'indicatore non diventa verde nemmeno dopo aver disabilitato **Use R|Trader**, il problema rimanente probabilmente non è legato a questo errore. Ricontrolla le credenziali e la selezione del server con la guida di configurazione in [[connect-rithmic]], e vedi [[fix-username-password]] e [[fix-bad-server]] per i due errori successivi più comuni.

## Ancora bloccato

Genera un [[diagnostic-report]] così il supporto potrà vedere lo stato della tua connessione, poi contatta il team attraverso i canali elencati in [[get-help]].

## Come prevenirlo

Segui la guida di configurazione di Rithmic in [[connect-rithmic]] e lascia disabilitata l'opzione **Use R|Trader**, a meno che tu non usi deliberatamente il flusso di lavoro con i plugin descritto in [[rtrader-pro-plugin]].

## Articoli correlati

- [[connect-rithmic]]
- [[rtrader-pro-plugin]]
- [[fix-log-in-using-rtrader]]
- [[fix-username-password]]
- [[fix-bad-server]]
- [[manage-feed-connections]]