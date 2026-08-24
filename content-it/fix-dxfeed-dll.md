---
title: "Correzione: Unable to Load DLL DXFeed_64.dll"
slug: "fix-dxfeed-dll"
category: "Connections & Data Feeds"
subcategory: "Troubleshooting"
type: "troubleshooting"
difficulty: "beginner"
time: "10 min to complete"
description: "Risolvi l'errore di connessione 'Unable to load DLL DXFeed_64.dll' installando il Microsoft Visual C++ Redistributable."
keywords: ["Unable to load DLL 'DXFeed_64.dll'", "DXFeed_64.dll", "HRESULT: 0x8007007E", "errore dll dxfeed", "visual c++ redistributable", "dll dxfeed mancante", "connessione fallita dll"]
source_hash: "7b8d5566ac0382e0"
ai_translated: true
source_hash: "7b8d5566ac0382e0"
---
Questo errore appare quando DeepCharts non riesce a caricare il file DLL di dxFeed necessario al funzionamento del feed dati. Si tratta di un problema di dipendenze di sistema di Windows — non di un bug del software DeepCharts — e si risolve installando il Microsoft Visual C++ Redistributable.

## Sintomo

Quando colleghi un feed dati dxFeed, la connessione fallisce con:

**Connection Failed: Unable to load DLL 'DXFeed_64.dll' (Exception from HRESULT: 0x8007007E)**

[SCREENSHOT: La finestra di errore di connessione con il messaggio completo "Unable to load DLL 'DXFeed_64.dll' (Exception from HRESULT: 0x8007007E)" | dc-it-fix-dxfeed-dll-01.png]

Da non confondere con:

- [[fix-unable-to-establish-connection]] — un errore di connessione a livello di rete senza alcun riferimento a una DLL.
- [[fix-system-cannot-find-file]] — un errore "file" diverso, causato dal componente Volumetrica Bridge.

## Causa più probabile

I pacchetti Microsoft Visual C++ Redistributable da cui dipende `DXFeed_64.dll` sono mancanti, obsoleti o corrotti sul tuo sistema Windows, quindi la DLL non riesce a caricare le proprie librerie di runtime.

## Soluzione rapida

Installa (o reinstalla) il Visual C++ Redistributable:

1. Chiudi completamente DeepCharts.
2. Scarica il Microsoft Visual C++ Redistributable adatto al tuo sistema — **X64**, **X86** o **ARM64**. [CONFIRM: official Microsoft download link to include here]

> **Suggerimento:** Installare sia la versione X86 sia la versione X64 è sicuro e consigliato — molte piattaforme di trading richiedono questi runtime, quindi risolverai il problema anche per altri software.

3. Esegui l'installer (o gli installer).

[SCREENSHOT: La finestra dell'installer del Microsoft Visual C++ Redistributable nella schermata di setup, prima di fare clic su Install | dc-it-fix-dxfeed-dll-02.png]

4. Riavvia il computer.
5. Riapri DeepCharts e ricollega il feed dati.

> **Nota:** Non è necessario reinstallare DeepCharts per questa correzione.

## Se non ha funzionato

### Causa: il redistributable installato è corrotto

Se il redistributable era già presente, la copia installata potrebbe essere danneggiata. Esegui di nuovo l'installer scaricato — se offre un'opzione **Repair** (Ripristina), usala — poi riavvia il computer e riprova la connessione.

### Causa: è installata una sola architettura

Se hai installato un solo pacchetto, aggiungi anche l'altro (sia X86 sia X64 su un PC Windows standard a 64 bit; ARM64 sui dispositivi basati su ARM). Riavvia il computer al termine.

## Ancora bloccato

Genera un [[diagnostic-report]] così il supporto potrà vedere l'eccezione esatta, poi contatta il team tramite [[get-help]].

## Come prevenirlo

Mantieni aggiornati i runtime di Windows e configura il feed seguendo [[connect-dxfeed]]. Verificare la tua macchina rispetto a [[system-requirements]] prima di installare DeepCharts evita la maggior parte degli errori di dipendenze mancanti.

## Articoli correlati

- [[connect-dxfeed]]
- [[system-requirements]]
- [[fix-unable-to-establish-connection]]
- [[fix-system-cannot-find-file]]
- [[fix-data-access-suspended]]