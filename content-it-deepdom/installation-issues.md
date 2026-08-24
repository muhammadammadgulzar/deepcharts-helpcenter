---
title: "Problemi di installazione"
slug: "installation-issues"
category: "Common Issues"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "3 min read"
description: "Questo articolo fornisce i passaggi per la risoluzione dei problemi in caso di errori durante l'installazione della versione desktop di DeepDOM."
keywords: ["problemi di installazione", "problemi di installazione deepdom", "deepdom", "problemi comuni"]
source_hash: "9cc661490a5fa06b"
ai_translated: true
source_hash: "9cc661490a5fa06b"
---
Questo articolo fornisce i passaggi per la risoluzione dei problemi in caso di errori durante l'installazione della versione desktop di DeepDOM. La maggior parte dei problemi di installazione è legata a requisiti di sistema mancanti, a software di sicurezza che blocca l'installer o all'uso di un pacchetto di installazione obsoleto. Segui la checklist qui sotto prima di aprire un ticket di supporto.

## Verifica i requisiti minimi di sistema

Prima di installare DeepDOM, assicurati che il tuo PC soddisfi i requisiti minimi hardware e software indicati nella pagina di download. Se la macchina non soddisfa questi requisiti, la piattaforma potrebbe fallire durante l'installazione o non funzionare correttamente dopo l'installazione.

## Risoluzione dei problemi passo dopo passo

### Disattiva temporaneamente gli antivirus di terze parti

Alcuni prodotti antivirus possono bloccare l'installer di DeepDOM o mettere in quarantena file essenziali durante l'installazione. Per evitarlo, puoi:

Disattivare temporaneamente tutti gli antivirus e le suite di sicurezza di terze parti mentre installi DeepDOM, lasciando attivo solo Windows Defender, oppure

Aggiungere un'eccezione per la cartella di installazione di DeepDOM nelle impostazioni del tuo antivirus.

Il percorso di installazione predefinito è in genere:

C:\Program Files\Volumetric Trading

Assicurati che questa cartella (e tutte le sottocartelle usate da DeepDOM) sia completamente considerata attendibile dal tuo software di sicurezza.

### 2. Verifica la presenza di .NET Framework 4.8 o successivo

DeepDOM richiede .NET Framework 4.8 o successivo per funzionare. Sulla maggior parte delle versioni moderne di Windows questo componente è preinstallato o disponibile come funzionalità facoltativa di Windows. Se il framework richiesto è mancante o danneggiato, l'installer potrebbe interrompersi con un errore generico.

Apri App > Funzionalità facoltative oppure Attiva o disattiva le funzionalità di Windows e verifica che .NET 4.8 (o una versione successiva) sia abilitato. In caso contrario, installa o ripara il framework e poi esegui di nuovo l'installer di DeepDOM.

### 3. Verifica lo spazio libero sul Disco locale (C:)

Assicurati che ci sia abbastanza spazio libero sul tuo Disco locale (C:) per memorizzare i file dell'applicazione DeepDOM, i log e la cache. Uno spazio su disco insufficiente può causare installazioni incomplete o errori imprevisti durante la scrittura dei file.

Come linea guida, mantieni diversi gigabyte di spazio libero disponibili sull'unità C: prima di avviare l'installazione, soprattutto se prevedi di registrare grandi quantità di dati di mercato.

### 4. Usa l'installer di DeepDOM più recente

Scarica sempre l'ultima versione di DeepDOM dal sito ufficiale. Il numero di versione corrente è mostrato accanto al pulsante di download. Se provi a installare un pacchetto obsoleto, potrebbe fallire sulle versioni più recenti di Windows o mancare di correzioni critiche.

Se hai ancora un vecchio installer sulla tua macchina, eliminalo e scarica il file di installazione più recente prima di riprovare.

### 5. Esegui una reinstallazione pulita

Se DeepDOM era già installato e ora l'aggiornamento o la reinstallazione falliscono, prova un'installazione pulita:

Disinstalla DeepDOM da App > App installate (oppure Programmi e funzionalità sulle versioni di Windows meno recenti).

Verifica manualmente che la cartella di installazione principale in C:\Program Files\Volumetric Trading sia stata rimossa. In caso contrario, elimina eventuali file di DeepDOM rimasti.

Riavvia Windows per liberare eventuali file bloccati.

Esegui di nuovo l'ultimo installer di DeepDOM con l'antivirus disattivato o con le eccezioni appropriate configurate.

## Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu incontri. Quando ci contatti, includi:

Uno screenshot del problema.

Una breve descrizione di ciò che stavi cercando di fare.

Ticket di supporto (risposta più rapida): visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email: puoi anche scriverci a support@deepcharts.com. Tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.