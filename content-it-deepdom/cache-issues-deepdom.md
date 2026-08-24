---
title: "Problemi di cache"
slug: "cache-issues-deepdom"
category: "Common Issues"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "3 min read"
description: "Questo articolo spiega come risolvere gli errori di Data Gap in DeepDom svuotando il database della cache locale."
keywords: ["problemi di cache", "problemi di cache deepdom", "deepdom", "problemi comuni"]
source_hash: "6893199321766511"
ai_translated: true
source_hash: "6893199321766511"
---
Questo articolo spiega come risolvere gli errori di Data Gap in DeepDom svuotando il database della cache locale. Questi problemi sono di solito causati da interruzioni della connessione, blackout della piattaforma o chiusure improvvise che lasciano dati incompleti nella cache. Seguendo i passaggi qui sotto costringi DeepDom a ricostruire il suo database a partire dal fornitore dei dati.

## Possibili cause degli errori di Data Gap

Le cause più comuni sono:

Perdita di connessione al feed dati mentre la piattaforma è in esecuzione.

Interruzione di corrente, crash del sistema operativo o riavvio forzato del computer.

Chiusura improvvisa di DeepDom, ad esempio terminando il processo o chiudendo Windows prima che la piattaforma possa finire di scrivere i dati.

In questi casi alcuni file nella cache possono risultare corrotti o incompleti, e la soluzione più sicura è rimuovere la cartella della cache in modo che DeepDom possa ricrearla da zero al prossimo avvio.

## Passo dopo passo – Rimuovere la cartella della cache

[SCREENSHOT: Problemi di cache — Passo dopo passo – Rimuovere la cartella della cache (DeepDOM) | dd-it-cache-issues-deepdom-01.png]

### 1. Apri il percorso della cartella del database

1. In DeepDom, vai su Options > Settings > Various.
2. Individua il campo denominato Database Folder.
3. Fai clic all'interno del campo e copia il percorso completo mostrato (ad esempio con *Ctrl + C*).

### 2. Chiudi in sicurezza DeepDom e il flusso dati

1. Disconnetti il flusso dati o la connessione al feed dati all'interno di DeepDom, così che non vengano scritti nuovi dati.
2. Chiudi tutti i Work Plans e i grafici aperti.
3. Esci completamente da DeepDom, assicurandoti che la piattaforma non sia più in esecuzione nella barra delle applicazioni o nell'area di notifica.

### 3. Elimina la cartella del database locale

[SCREENSHOT: Problemi di cache — 3. Elimina la cartella del database locale (DeepDOM) | dd-it-cache-issues-deepdom-02.png]

1. Apri Esplora risorse di Windows (File Explorer).
2. Fai clic sulla barra degli indirizzi, incolla il percorso della Database Folder copiato in precedenza e premi Invio.
3. Quando la cartella si apre, seleziona ed elimina i file/simboli corrotti.
4. Conferma l'eliminazione nel cestino se Windows richiede l'autorizzazione di amministratore.

Eliminando questi file rimuovi tutti i dati in cache di DeepDom, permettendo alla piattaforma di ricreare un database nuovo al prossimo avvio.

### 4. Riavvia DeepDom

1. Avvia di nuovo DeepDom.
2. Ricollega il tuo flusso dati o feed.
3. Apri i tuoi Work Plans e grafici abituali. DeepDom inizierà ora a scaricare e ricostruire il database dal fornitore, colmando lo storico mancante ed eliminando i precedenti errori di Data Gap.

## Suggerimenti aggiuntivi

Per ridurre al minimo la probabilità di futuri problemi di cache, disconnetti sempre il feed dati e chiudi DeepDom normalmente prima di spegnere Windows. Evita di terminare l'applicazione dal Task Manager se non strettamente necessario e assicurati di avere una connessione Internet stabile durante sessioni lunghe o durante la registrazione di dati storici pesanti.

## Hai ancora problemi?

Il nostro team di supporto è disponibile 24 ore su 24, 7 giorni su 7, pronto ad aiutarti con qualsiasi problema tu possa incontrare. Quando ci contatti, includi:

Uno screenshot del problema.

Una breve descrizione di ciò che stavi cercando di fare.

Ticket di supporto (risposta più rapida): visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email: puoi anche scriverci a support@deepcharts.com. Tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.