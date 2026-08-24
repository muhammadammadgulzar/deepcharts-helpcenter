---
title: "Risoluzione: Installation Setup Failed"
slug: "installation-setup-failed"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Risolvi l'errore Installation Setup Failed durante l'installazione di DeepCharts su Windows: leggi il log del programma di installazione, installa il Visual C++ Redistributable, sistema i problemi di lingua e grafica."
keywords: ["installation setup failed", "setup fallito", "errore programma di installazione", "visual c++ redistributable", "vc_redist", "slimdx", "componenti di sistema mancanti", "errore installazione windows", "installation setup fallito"]
source_hash: "cd871fe42ca4c4dc"
ai_translated: true
source_hash: "cd871fe42ca4c4dc"
---
Durante l'installazione di DeepCharts su Windows, alcuni utenti incontrano una finestra di errore con il messaggio **Installation Setup Failed**. È tipicamente causata da componenti di sistema richiesti che mancano o sono incompatibili sulla tua installazione di Windows — e il programma di installazione ti dice esattamente quale, se sai dove guardare.

## Sintomo

- Il programma di installazione di DeepCharts si ferma con una finestra di errore **Installation Setup Failed**.
- La finestra di errore include un pulsante **Log File** che apre un log dettagliato di ciò che è fallito.

[SCREENSHOT: La finestra di errore Installation Setup Failed durante l'installazione di DeepCharts con il pulsante Log File visibile ed evidenziato | dc-it-installation-setup-failed-01.png]

Da non confondere con:

- [[installation-problems]] — il programma di installazione fallisce o scompare senza questa specifica finestra di errore.
- [[application-control-policy]] — Windows segnala "An Application Control policy has blocked this file".

## Causa più probabile

Un componente di sistema richiesto manca o è incompatibile — più comunemente il Microsoft Visual C++ Redistributable. Il log del programma di installazione identifica il guasto esatto, quindi leggilo per primo.

## Soluzione rapida

1. Fai clic sul pulsante **Log File** nella finestra di errore dell'installazione e leggi i dettagli registrati — identificano la causa del fallimento. Conserva questo file; il supporto te lo chiederà se avrai bisogno di aiuto in seguito.

[SCREENSHOT: Il file di log del programma di installazione aperto in Notepad con le righe del fallimento visibili verso la fine del log | dc-it-installation-setup-failed-02.png]

2. Scarica e installa l'ultimo **Microsoft Visual C++ Redistributable** per l'architettura del tuo sistema — DeepCharts richiede l'ultima versione per funzionare correttamente:

| Architettura | Link di download | Note |
|---|---|---|
| ARM64 | https://aka.ms/vc14/vc_redist.arm64.exe | Ultima versione ARM64 supportata |
| X86 (32 bit) | https://aka.ms/vc14/vc_redist.x86.exe | Richiesto anche su alcuni sistemi a 64 bit |
| X64 (64 bit) | https://aka.ms/vc14/vc_redist.x64.exe | Include i binari sia ARM64 sia X64 |

3. Riavvia il PC. Questo passaggio non è facoltativo — Windows completa la registrazione dei componenti di sistema solo dopo un riavvio.
4. Esegui di nuovo il programma di installazione di DeepCharts.

## Se non ha funzionato

### Causa: la lingua di sistema di Windows non è l'inglese

DeepCharts e le sue dipendenze richiedono che la lingua di sistema di Windows sia impostata su **English** (inglese). Su sistemi con una lingua diversa dall'inglese, il programma di installazione può fallire in modi imprevisti.

1. Apri **Windows Settings → Time & Language → Language** (Impostazioni di Windows → Data/ora e lingua → Lingua) e imposta la lingua di visualizzazione e di sistema di Windows su **English**.

[SCREENSHOT: Pagina Time & Language delle impostazioni di Windows con il menu a discesa della lingua di visualizzazione di Windows aperto ed English selezionato | dc-it-installation-setup-failed-03.png]

2. Riavvia il PC.
3. Esegui di nuovo il programma di installazione di DeepCharts.

### Causa: problema di rendering grafico (SlimDX)

DeepCharts usa SlimDX per il rendering grafico. In rari casi, un problema grafico o DirectX a livello di sistema impedisce il completamento dell'installazione. Non esiste una correzione mirata sul posto per questo caso — le tue opzioni sono:

- **Opzione 1:** Installa DeepCharts su un'altra macchina Windows, se ne hai una disponibile.
- **Opzione 2:** Esegui un'installazione pulita di Windows, installa tutti gli aggiornamenti di sistema e i componenti richiesti indicati sopra, poi reinstalla DeepCharts.

> **Attenzione:** Un'installazione pulita di Windows cancella i programmi e le impostazioni su quel PC. Fai prima un backup dei tuoi file e considera questa opzione come ultima risorsa, dopo aver escluso ogni altra causa.

## Ancora bloccato

Recupera il file di log del programma di installazione (il pulsante **Log File** nella finestra di errore), poi contatta il supporto tramite [[get-help]] e allega il log così il team può indagare sul guasto esatto. Se DeepCharts si è installato parzialmente e si avvia, includi anche un [[diagnostic-report]].

## Come prevenirlo

- Riavvia sempre il PC dopo aver installato le dipendenze di sistema, prima di eseguire il programma di installazione di DeepCharts.
- Evita di eseguire più programmi di installazione contemporaneamente.
- Mantieni aggiornati Windows e i driver grafici.
- Segui [[install-deepcharts]] per la procedura di installazione completa e nell'ordine corretto, e controlla prima i [[system-requirements]] su una nuova macchina.

## Articoli correlati

- [[install-deepcharts]]
- [[installation-problems]]
- [[system-requirements]]
- [[application-control-policy]]
- [[get-help]]