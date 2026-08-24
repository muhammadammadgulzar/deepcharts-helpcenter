---
title: "Report diagnostico: prima di contattare il supporto"
slug: "diagnostic-report"
category: "Troubleshooting & Support"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Genera il report diagnostico integrato di DeepCharts e invialo al supporto — più dove trovare i file di log se il supporto li richiede."
keywords: ["report diagnostico", "contattare il supporto", "inviare diagnostica", "file di log", "piattaforma lenta", "ritardo", "utilizzo RAM", "report prestazioni"]
source_hash: "a82fa10e6b3e238e"
ai_translated: true
source_hash: "a82fa10e6b3e238e"
---
Alla fine avrai generato il report diagnostico integrato di DeepCharts — un'istantanea del tuo sistema, della connettività e dello stato della piattaforma — e lo avrai inviato al supporto. Allegare questo report al tuo primo messaggio è il modo migliore in assoluto per accorciare una conversazione con il supporto: risponde alla maggior parte delle domande che il supporto dovrebbe altrimenti farti una per una.

Usalo ogni volta che riscontri problemi di prestazioni, ritardi o problemi di connettività che gli articoli di risoluzione dei problemi non hanno risolto.

## Prima di iniziare

- Tieni DeepCharts in esecuzione, idealmente poco dopo che il problema si è verificato, così il report riflette lo stato del problema — vedi [[install-deepcharts]] se la piattaforma non si avvia affatto.
- Sappi quale feed dati e quale broker o prop firm usi — vedi [[compatibility-guide]] — così puoi menzionarli nel tuo messaggio.
- Se il tuo problema è il lag o dati in ritardo, segui prima la checklist in [[data-delayed-lagging]]; risolve molti casi senza aprire un ticket.

## Passaggi

1. Dai un'occhiata all'indicatore **RAM** sulla toolbar prima di iniziare. Mostra due valori: il primo è l'utilizzo totale della RAM di sistema, e il valore tra parentesi è l'utilizzo di memoria di DeepCharts. Se l'utilizzo totale della RAM è costantemente alto, può influire sulle prestazioni della piattaforma — vale la pena menzionarlo nel tuo messaggio al supporto.

[SCREENSHOT: Toolbar principale di DeepCharts con l'indicatore RAM evidenziato, che mostra il valore totale della RAM di sistema e il valore tra parentesi della memoria di DeepCharts | dc-it-diagnostic-report-01.png]

2. Fai clic sull'icona **?** (punto interrogativo) nella toolbar.
3. Seleziona **Contact Support**.

[SCREENSHOT: Il menu ? (punto interrogativo) aperto sulla toolbar di DeepCharts con la voce Contact Support evidenziata | dc-it-diagnostic-report-02.png]

4. Scegli **I have a problem or delay with the platform** (Ho un problema o un ritardo con la piattaforma).
5. Esamina la finestra diagnostica. Raccoglie e mostra: versione della piattaforma, sistema operativo, dettagli della CPU, statistiche della memoria, connettività di rete, tempi di ping ai server e velocità di download.

[SCREENSHOT: La finestra diagnostica che mostra versione, sistema operativo, CPU, memoria, connettività di rete, tempi di ping ai server e risultati della velocità di download | dc-it-diagnostic-report-03.png]

6. Fai clic su **Click Here to Confirm** per permettere alla piattaforma di raccogliere dati aggiuntivi.
7. Fai clic su **Contact Support and Send Information** per inviare i risultati al team di supporto, insieme a una breve descrizione del tuo problema.

> **Nota:** Durante questo processo non viene raccolto alcun nome utente né alcuna credenziale. Il report copre solo dati di sistema e di connettività.

### Se il supporto richiede i file di log

DeepCharts scrive anche file di log giornalieri che il supporto può richiedere per un'analisi più approfondita:

1. Apri **My PC → Documents → DeepCharts → Logs**.
2. Individua il file richiesto dal supporto. Esistono quattro tipi di log — **General**, **Trade Copier**, **Trading** e **Various** — e ogni file è nominato con la sua data, ad esempio `trading_2026-06-22`.

[SCREENSHOT: Esplora file aperto su Documents > DeepCharts > Logs che mostra i file di log General, Trade Copier, Trading e Various con nomi datati | dc-it-diagnostic-report-04.png]

3. Allega alla conversazione con il supporto il file del giorno in cui si è verificato il problema.

## Verifica che abbia funzionato

La finestra diagnostica completa i suoi controlli (i tempi di ping e le velocità di download mostrano i risultati invece di essere in esecuzione), e il report viene inviato dopo che fai clic su **Contact Support and Send Information**. [CONFIRM: exact confirmation the app shows after the report is sent]

Quando il supporto risponde, avrà già la tua versione della piattaforma, le specifiche di sistema e i risultati di connettività — aspettati meno domande avanti e indietro.

## Se qualcosa è andato storto

| Sintomo | Cosa fare |
|---|---|
| Non trovi l'icona **?** | Si trova nella toolbar principale; se la piattaforma non si apre affatto, vedi [[installation-problems]] e contatta il supporto tramite il sito web — vedi [[get-help]] |
| I controlli di connettività falliscono o non finiscono mai | La tua macchina potrebbe essere offline o bloccata da software di sicurezza; annota l'errore (fai uno screenshot) e segnalalo tramite la chat del sito web — vedi [[get-help]] |
| Il problema è specificamente il ritardo dei dati | Includi il report, poi segui [[data-delayed-lagging]] |
| Il problema riguarda errori del database | Vedi [[database-problems]] prima di inviare — potrebbe risolvere il problema direttamente |

## Articoli correlati

- [[get-help]]
- [[data-delayed-lagging]]
- [[database-problems]]
- [[installation-problems]]
- [[license-issues]]