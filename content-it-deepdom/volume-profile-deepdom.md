---
title: "Volume Profile"
slug: "volume-profile-deepdom"
category: "Indicators"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "7 min read"
description: "Il Deep Profile mostra il volume scambiato a ogni livello di prezzo in un periodo specifico. Ti offre una mappa visiva chiara di dove si è svolta la maggior parte dell'attività di mercato, aiutandoti a identificare livelli strutturali chiave tra cui:"
keywords: ["volume profile", "volume profile deepdom", "deepdom", "indicatori"]
source_hash: "b484e60e1b7ebbd5"
ai_translated: true
source_hash: "b484e60e1b7ebbd5"
---
Il Deep Profile mostra il volume scambiato a ogni livello di prezzo in un periodo specifico. Ti offre una mappa visiva chiara di dove si è svolta la maggior parte dell'attività di mercato, aiutandoti a identificare livelli strutturali chiave tra cui:

POC (Point of Control) — il livello di prezzo con il volume scambiato più alto

Value Area — l'intervallo di prezzo in cui si è verificata una percentuale definita del volume totale

High Volume Nodes (HVN) — livelli di prezzo con attività intensa, che spesso agiscono da supporto o resistenza

Low Volume Nodes (LVN) — livelli di prezzo con poca attività, che spesso consentono al prezzo di attraversarli rapidamente

[SCREENSHOT: Volume Profile — panoramica (DeepDOM) | dd-it-volume-profile-deepdom-01.png]

### Come aggiungere il Volume Profile al tuo grafico

Fai clic con il tasto destro del mouse sul grafico e seleziona Indicators.

Cerca l'indicatore desiderato e aggiungilo al tuo workspace facendo clic sul pulsante "+".

Apri il pannello delle impostazioni dell'indicatore, personalizza i parametri secondo le tue preferenze e conferma le modifiche facendo clic su Save.

[SCREENSHOT: Volume Profile — Come aggiungere il Volume Profile al tuo grafico (DeepDOM) | dd-it-volume-profile-deepdom-02.png]

## Impostazioni generali

Vbp Type Seleziona quali dati mostra il profilo:

Volume — mostra il volume totale scambiato a ogni livello di prezzo, evidenziando le aree più attive

Ask/Bid Volume — suddivide il volume in Ask (vendita) e Bid (acquisto) separatamente, mostrando l'equilibrio tra compratori e venditori

Delta — mostra la differenza tra volume in acquisto e in vendita a ogni livello, utile per identificare la pressione del mercato

Total Delta and Volume — combina delta e volume totale per una visione completa dell'attività a ogni livello di prezzo

Grouping Definisce come i livelli di prezzo vengono raggruppati nel profilo:

Automatic — DeepDOM raggruppa automaticamente i tick in base alle caratteristiche del mercato e alla risoluzione del grafico

Manual — ti consente di specificare un numero personalizzato di tick per il raggruppamento

Auto Group Factor Quando usi il raggruppamento Automatic, definisce quanto aggressivamente vengono aggregati i tick. Un valore più alto significa maggiore aggregazione e un profilo più ampio.

Manual Ticks Quando usi il raggruppamento Manual, imposta il numero esatto di tick da raggruppare insieme, dandoti un controllo preciso sulla granularità del profilo.

[SCREENSHOT: Volume Profile — Impostazioni generali (DeepDOM) | dd-it-volume-profile-deepdom-03.png]

## Impostazioni di visualizzazione (Plot Settings)

Method Color — Definisce come vengono colorate le barre del profilo:

None — nessun colore applicato, visualizzazione semplice dei dati

Fixed — un unico colore uniforme applicato a tutti i livelli di prezzo

Fading — l'intensità del colore varia con il volume; i livelli con volume più alto appaiono più intensi, quelli con volume più basso appaiono più chiari

More Colors — usa una gamma di colori per rappresentare diversi livelli di volume, completamente personalizzabile dall'utente

Color Calculation — Definisce cosa rappresenta il colore:

Volume — colori basati sul volume totale

Delta — colori basati sulla differenza tra ordini di acquisto e di vendita

Imbalance — colori basati sullo squilibrio degli ordini

Color Ti consente di impostare colori fissi per Volume, Bid, Ask e la linea del profilo.

Range Definisce l'intervallo usato per la scala dei colori:

Automatic — usa gli intervalli predefiniti della piattaforma

User — ti consente di definire intervalli di valori personalizzati

[SCREENSHOT: Volume Profile — Impostazioni di visualizzazione (DeepDOM) | dd-it-volume-profile-deepdom-04.png]

Show Text Quando è attivo, mostra il volume totale scambiato a ogni tick o livello di prezzo direttamente sulle barre del profilo.

Text Settings Ti consente di personalizzare il colore delle etichette Bid, Ask e Total Volume, oltre alla dimensione del carattere.

[SCREENSHOT: Volume Profile — Impostazioni di visualizzazione (DeepDOM) | dd-it-volume-profile-deepdom-05.png]

## POC (Point of Control)

Il POC è il livello di prezzo con il volume scambiato più alto nel profilo. È uno dei livelli di riferimento più importanti nell'analisi del volume.

Enable — mostra o nasconde il POC sul grafico

Highlight — evidenzia visivamente la barra del POC all'interno del profilo per farla risaltare

Highlight Color — imposta il colore usato per l'evidenziazione del POC

Show Line — traccia una linea orizzontale che si estende dal POC lungo il grafico

Line Color — imposta il colore della linea del POC

Line Width — imposta lo spessore della linea del POC

[SCREENSHOT: Volume Profile — POC (Point of Control) (DeepDOM) | dd-it-volume-profile-deepdom-06.png]

## Value Area

La Value Area è l'intervallo di prezzo all'interno del quale si è verificata una percentuale definita del volume totale. Rappresenta la zona di maggiore accettazione del mercato.

Enable — mostra o nasconde la Value Area sul grafico

% Value Area — imposta la percentuale del volume totale usata per definire la Value Area. Il valore predefinito è tipicamente 70%, ovvero l'intervallo in cui si è verificato il 70% di tutto il volume

Highlight — evidenzia visivamente la Value Area sulle candele

Outside Color — imposta il colore applicato all'area esterna alla Value Area, aiutando a distinguerla chiaramente

Show Line — traccia le linee che segnano il Value Area High (VAH) e il Value Area Low (VAL)

Line Color — imposta il colore delle linee di confine della Value Area

Line Width — imposta lo spessore delle linee di confine della Value Area

[SCREENSHOT: Volume Profile — Value Area (DeepDOM) | dd-it-volume-profile-deepdom-07.png]

## Picchi e valli (Peaks and Valleys)

Peaks and Valleys evidenzia le aree di alta e bassa concentrazione di volume all'interno del profilo:

Peaks — livelli di prezzo dove il volume è fortemente concentrato, che indicano spesso forte interesse del mercato e potenziali supporti o resistenze

Valleys — livelli di prezzo dove il volume è molto scarso, che agiscono spesso da zone vuote in cui il prezzo può muoversi rapidamente

Sensitivity Controlla quanto rigorosamente vengono identificati picchi e valli. Un valore più alto significa picchi e valli meno numerosi ma più significativi. Un valore più basso mostra più livelli con un filtro meno restrittivo.

Peak Settings

Highlight — contrassegna visivamente i livelli dei picchi sul profilo

Minimum Volume — imposta una soglia minima di volume; i picchi sotto questo valore non verranno mostrati

Highlight Color — imposta il colore per l'evidenziazione dei picchi

Show Line — traccia una linea orizzontale a ogni livello di picco

Line Width — imposta lo spessore della linea del picco

Line Color — imposta il colore della linea del picco

Valley Settings

Highlight — contrassegna visivamente i livelli delle valli sul profilo

Minimum Volume — imposta una soglia minima di volume; le valli sotto questo valore non verranno mostrate

Highlight Color — imposta il colore per l'evidenziazione delle valli

Show Line — traccia una linea orizzontale a ogni livello di valle

Line Width — imposta lo spessore della linea della valle

Line Color — imposta il colore della linea della valle

[SCREENSHOT: Volume Profile — Picchi e valli (DeepDOM) | dd-it-volume-profile-deepdom-08.png]

## Summary

Il Summary mostra un pannello dati dettagliato per ogni volume profile sul grafico, con volume totale, delta, numero di scambi, numero di tick e altre statistiche. Questo rende facile confrontare a colpo d'occhio l'attività di sessioni o periodi diversi.

Enable Summary — mostra o nasconde il pannello di riepilogo per ogni profilo

Text Color — imposta il colore del testo del riepilogo

Ask Color — imposta il colore che rappresenta il volume Ask nel riepilogo

Bid Color — imposta il colore che rappresenta il volume Bid nel riepilogo

[SCREENSHOT: Volume Profile — Summary (DeepDOM) | dd-it-volume-profile-deepdom-09.png]

## Etichette sulle linee (Labels on Line)

Text Color — modifica il colore delle linee

Text on Line — attiva le etichette sulle linee derivate dal Volume Profile, come le etichette del VPOC e del Value Area High/Low

[SCREENSHOT: Volume Profile — Etichette sulle linee (DeepDOM) | dd-it-volume-profile-deepdom-10.png]

## Conclusione

L'indicatore Deep Profile è uno degli strumenti più completi disponibili in DeepDOM per comprendere la struttura del mercato. Identificando dove il volume si è concentrato e dove è assente, ottieni un vantaggio significativo nell'individuare livelli di supporto e resistenza rilevanti, pianificare gli ingressi e comprendere il contesto generale della price action.

### Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu possa incontrare.

Quando ci contatti, includi:

Uno screenshot del problema

Una breve descrizione di ciò che stavi cercando di fare

Support Ticket (risposta più rapida) Visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email Scrivici a support@deepcharts.com — tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.