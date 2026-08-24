---
title: "Fix: una policy di controllo delle applicazioni blocca DeepCharts"
slug: "application-control-policy"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Risolvi l'errore 'An Application Control policy has blocked this file' disattivando Windows Smart App Control, così DeepCharts e i suoi feed dati possono funzionare."
keywords: ["application control policy", "an application control policy has blocked this file", "smart app control", "bloccato da windows security", "app bloccata", "rithmic bloccato", "dxfeed bloccato", "controllo app e browser"]
source_hash: "28e6df84871a7f29"
ai_translated: true
source_hash: "28e6df84871a7f29"
---
Windows ferma DeepCharts — o una delle sue connessioni al feed dati — con il messaggio **"An Application Control policy has blocked this file."** Si tratta quasi sempre di Smart App Control, una funzione di Sicurezza di Windows che blocca le applicazioni che il servizio di Microsoft non riconosce, e può interferire con software di trading legittimo.

## Sintomo

- Windows mostra l'errore **"An Application Control policy has blocked this file"** quando avvii DeepCharts o quando la piattaforma prova a connettere un feed dati come Rithmic o dxFeed.
- Il file bloccato può essere l'applicazione DeepCharts stessa o un componente del feed caricato al momento della connessione.

[SCREENSHOT: La notifica o finestra di Windows con il testo "An Application Control policy has blocked this file", mostrata durante l'avvio di DeepCharts | dc-it-application-control-policy-01.png]

Da non confondere con:

- [[installation-problems]] — l'installer stesso fallisce senza questo specifico messaggio di Windows.
- [[fix-unable-to-establish-connection]] — il feed non si connette per motivi di rete o di credenziali, senza alcun messaggio di blocco di Windows.

## Causa più probabile

**Smart App Control** — una funzione di Sicurezza di Windows che blocca le applicazioni che considera sconosciute — è impostato su **On** o **Evaluation** e sta bloccando un file di DeepCharts.

## Soluzione rapida

Disattiva Smart App Control:

1. Digita **Smart App Control** nella barra di ricerca di Windows e premi **Enter**.

[SCREENSHOT: Barra di ricerca di Windows con "Smart App Control" digitato e il risultato delle impostazioni di Smart App Control evidenziato | dc-it-application-control-policy-02.png]

2. Si apre la pagina delle impostazioni di Smart App Control (si trova dentro Sicurezza di Windows sotto **App & browser control**). Lo stato corrente è mostrato come **On**, **Evaluation** o **Off**.

[SCREENSHOT: Pagina delle impostazioni di Smart App Control in Sicurezza di Windows con i tre pulsanti radio di stato On, Evaluation e Off | dc-it-application-control-policy-03.png]

3. Seleziona l'opzione **Off** e conferma le eventuali finestre di dialogo mostrate da Windows.

> **Attenzione:** Nelle versioni attuali di Windows, una volta disattivato Smart App Control non può essere riattivato senza reimpostare o reinstallare Windows. Se questo compromesso conta per te, tienilo presente prima di confermare — ma con la funzione attiva, DeepCharts e i componenti dei feed potrebbero continuare a essere bloccati.

4. Chiudi completamente DeepCharts, attendi qualche secondo, poi avvialo di nuovo. L'applicazione e le sue connessioni ai feed dati dovrebbero ora funzionare.

[SCREENSHOT: Pagina delle impostazioni di Smart App Control con l'opzione Off selezionata e confermata | dc-it-application-control-policy-04.png]

## Se non ha funzionato

### Causa: una policy di controllo delle applicazioni gestita o di terze parti

Se Smart App Control era già su **Off** — o l'opzione manca — e vedi ancora il messaggio di blocco, potrebbe essere responsabile un altro livello di controllo delle applicazioni:

- Su un PC gestito dall'azienda, una policy di controllo delle applicazioni a livello amministrativo può bloccare il software non riconosciuto. Chiedi al tuo amministratore IT di consentire DeepCharts.
- Le suite di sicurezza di terze parti possono applicare un proprio controllo delle applicazioni. Controlla l'elenco delle applicazioni bloccate del tuo software di sicurezza e aggiungi un'eccezione per DeepCharts. Vedi anche [[installation-problems]] per le interferenze generali degli antivirus.

## Ancora bloccato

Fai uno screenshot del messaggio di blocco esatto, genera un [[diagnostic-report]] se DeepCharts si avvia, e contatta il supporto tramite [[get-help]].

## Come prevenirlo

- Controlla lo stato di Smart App Control prima di installare DeepCharts su una nuova macchina — vedi [[install-deepcharts]] e [[system-requirements]].
- Dopo averlo disattivato, non serve altro; l'impostazione persiste.

## Articoli correlati

- [[installation-problems]]
- [[install-deepcharts]]
- [[system-requirements]]
- [[fix-unable-to-establish-connection]]
- [[get-help]]