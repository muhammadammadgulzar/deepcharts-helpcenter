---
title: "Problemi di sottoscrizione dei simboli"
slug: "symbol-subscription-issues"
category: "Common Issues"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "2 min read"
description: "Questa guida ti aiuta a risolvere la mancanza di dati in tempo reale o l'indisponibilità di strumenti in DeepDOM quando il problema è causato dalle impostazioni di sottoscrizione dei simboli o della connessione al feed dati."
keywords: ["problemi di sottoscrizione dei simboli", "problemi di sottoscrizione dei simboli deepdom", "deepdom", "problemi comuni"]
source_hash: "846e846c8c7c33a2"
ai_translated: true
source_hash: "846e846c8c7c33a2"
---
Questa guida ti aiuta a risolvere la mancanza di dati in tempo reale o l'indisponibilità di strumenti in DeepDOM quando il problema è causato dalle impostazioni di sottoscrizione dei simboli o della connessione al feed dati.

### Passo 1 – Verifica la connessione al feed dati

[SCREENSHOT: Problemi di sottoscrizione dei simboli — Passo 1 – Verifica la connessione al feed dati (DeepDOM) | dd-it-symbol-subscription-issues-01.png]

Assicurati che il tuo flusso dati sia correttamente connesso (l'indicatore di connessione nella toolbar di DeepDOM deve essere verde). Verifica inoltre di aver acquistato il pacchetto dati corretto per i mercati che vuoi analizzare, inclusa la profondità del mercato / Level 2 se necessaria.

### Passo 2 – Controlla la sottoscrizione dei simboli

[SCREENSHOT: Problemi di sottoscrizione dei simboli — Passo 2 – Controlla la sottoscrizione dei simboli (DeepDOM) | dd-it-symbol-subscription-issues-02.png]

Se il feed è connesso ma alcuni strumenti continuano a non mostrare dati, controlla che i mercati corrispondenti siano correttamente sottoscritti presso il tuo fornitore di dati e collegati alla connessione corretta all'interno di DeepDOM.

#### Aggiornare le sottoscrizioni dei simboli

Disconnetti il feed dati (rimuovi il segno di spunta accanto al nome della connessione nel menu Feed).

Chiudi tutti i Workspace e i grafici aperti.

Vai su Options > Symbols Manage .

Verifica che tutti i mercati necessari siano stati aggiunti e che, accanto al nome di ciascun mercato, sia associato il nome della connessione corretta.

Se un mercato è collegato alla connessione sbagliata, selezionalo, fai clic con il tasto destro del mouse e scegli la connessione corretta dal menu contestuale.

Fai clic su Select (o sul pulsante di conferma equivalente) per salvare le modifiche.

Chiudi la finestra Symbol Management (Gestione simboli).

### Passo 3 – Riconnetti e verifica

Dopo aver aggiornato le sottoscrizioni:

Riconnetti il feed dati dal menu Feed.

Apri un grafico o un Work Plan che usa i simboli interessati.

DeepDOM dovrebbe ora mostrare dati in tempo reale e profondità per tutti gli strumenti contenuti nei mercati sottoscritti associati alla connessione.

## Hai ancora problemi?

Il nostro team di supporto è disponibile 24/7 e pronto ad aiutarti con qualsiasi problema tu incontri. Quando ci contatti, includi:

Uno screenshot del problema.

Una breve descrizione di ciò che stavi cercando di fare.

Ticket di supporto (risposta più rapida): visita www.deepcharts.com e crea un ticket di supporto direttamente sul nostro sito.

Supporto via email: puoi anche scriverci a support@deepcharts.com. Tieni presente che le risposte via email possono richiedere un po' più di tempo rispetto a un ticket di supporto.