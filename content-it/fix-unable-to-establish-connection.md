---
title: "Correzione: Connection Failed — Unable to Establish Connection"
slug: "fix-unable-to-establish-connection"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "15 min to complete"
description: "Risolvi l'errore del feed dati 'Unable to establish connection' causato da VPN, componenti Visual C++ mancanti o impostazioni di Windows non in inglese."
keywords: ["Unable to establish connection", "Connection Failed: Unable to Establish Connection", "please check your internet connection", "vpn blocca feed dati", "visual c++ redistributable", "vc_redist", "lingua windows inglese", "il feed non si connette"]
source_hash: "dab974b325d1ab1e"
ai_translated: true
source_hash: "dab974b325d1ab1e"
---
Questo errore significa che DeepCharts non riesce a stabilire una connessione stabile al feed dati. È quasi sempre causato da qualcosa sul lato sistema — restrizioni di rete, un componente Windows mancante o un'incompatibilità di lingua/area geografica di Windows — piuttosto che dalle credenziali del feed. Procedi con le soluzioni qui sotto nell'ordine indicato.

## Sintomo

Quando colleghi un feed dati, la connessione fallisce con:

**Connection Failed: Unable to establish connection. Please check your internet connection.**

[SCREENSHOT: La finestra di errore di connessione con il messaggio completo "Unable to establish connection" dopo un tentativo di connessione al feed fallito | dc-it-fix-unable-to-establish-connection-01.png]

Da non confondere con:

- [[fix-username-password]] — il feed raggiunge il server ma rifiuta le tue credenziali.
- [[fix-bad-server]] — un errore di autorizzazione dxFeed, non un problema di rete.
- [[fix-dxfeed-dll]] — un errore di caricamento DLL che nomina esplicitamente `DXFeed_64.dll`.

## Causa più probabile

Una connessione internet instabile, oppure un servizio VPN/proxy che blocca o reindirizza il traffico del feed dati.

## Soluzione rapida

1. Verifica che la tua connessione internet sia stabile e veloce (carica alcuni siti web o esegui uno speed test).
2. Se usi una VPN o un proxy, disconnettili. L'uso di una VPN è una causa comune di questo errore.
3. Chiudi completamente DeepCharts.
4. Riapri DeepCharts e prova di nuovo a collegare il feed.

## Se non ha funzionato

### Causa: Microsoft Visual C++ Redistributable mancante o obsoleto

DeepCharts richiede il Microsoft Visual C++ Redistributable più recente supportato — è una dipendenza di sistema obbligatoria, e una versione mancante o obsoleta impedisce al feed di connettersi.

Scarica ed esegui l'installer adatto al tuo sistema:

| Architettura | Link di download | Note |
|---|---|---|
| X64 (64 bit) | https://aka.ms/vc14/vc_redist.x64.exe | Standard per la maggior parte dei PC moderni |
| X86 (32 bit) | https://aka.ms/vc14/vc_redist.x86.exe | Richiesto su alcuni sistemi a 64 bit |
| ARM64 | https://aka.ms/vc14/vc_redist.arm64.exe | Per i dispositivi Windows basati su ARM |

[SCREENSHOT: La finestra dell'installer del Microsoft Visual C++ Redistributable nella schermata di setup, prima di fare clic su Install | dc-it-fix-unable-to-establish-connection-02.png]

Dopo l'installazione:

1. Riavvia il computer.
2. Avvia DeepCharts.
3. Prova di nuovo a collegare il feed.

### Causa: la lingua o l'area geografica di Windows non è impostata sull'inglese

Una lingua di sistema o un formato regionale non in inglese può causare problemi di connessione e di parsing, ed è una causa nota di errori di inizializzazione del feed.

1. Apri **Windows Settings → Time & Language → Language** (Impostazioni di Windows → Data/ora e lingua → Lingua) e imposta la lingua di visualizzazione di Windows su **English**.

[SCREENSHOT: Pagina Windows Settings Time & Language > Language con il menu a discesa della lingua di visualizzazione impostato su English | dc-it-fix-unable-to-establish-connection-03.png]

2. Apri **Windows Settings → Time & Language → Region** (Area geografica) e imposta **Country or region** su **United States** (o un'altra area geografica con supporto per l'inglese).

[SCREENSHOT: Pagina Windows Settings Time & Language > Region con Country or region impostato su United States | dc-it-fix-unable-to-establish-connection-04.png]

3. Riavvia il PC, apri DeepCharts, collega il feed dati e apri un grafico.

> **Nota:** Riavvia sempre il computer dopo aver modificato impostazioni a livello di sistema — la modifica non ha effetto per DeepCharts finché non lo fai.

## Ancora bloccato

Genera un [[diagnostic-report]] così il supporto potrà vedere i dettagli del tentativo di connessione, poi contatta il team tramite [[get-help]].

## Come prevenirlo

- Evita di usare una VPN mentre DeepCharts è connesso a un feed.
- Mantieni aggiornati i Visual C++ Redistributable.
- Mantieni la lingua e l'area geografica di Windows compatibili con l'inglese (English/US consigliato).
- Verifica la tua macchina rispetto a [[system-requirements]] e segui [[connect-data-feed]] quando configuri i feed.

## Articoli correlati

- [[connect-data-feed]]
- [[system-requirements]]
- [[fix-username-password]]
- [[fix-bad-server]]
- [[connection-lost-opening-chart]]
- [[fix-dxfeed-dll]]