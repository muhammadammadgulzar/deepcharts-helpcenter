---
title: "Soluzione: lo strumento di disegno Rettangolo non funziona"
slug: "rectangle-drawing-tool"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Ripara lo strumento di disegno Rettangolo (e gli altri strumenti di disegno) eliminando il file tool_config danneggiato, così DeepCharts lo rigenera."
keywords: ["strumento rettangolo non funziona", "strumento rettangolo rotto", "strumento di disegno non funziona", "tool_config", "impossibile disegnare rettangolo", "strumenti di disegno smesso di funzionare", "configurazione danneggiata"]
source_hash: "318605c1c3587672"
ai_translated: true
source_hash: "318605c1c3587672"
---
Lo strumento di disegno **Rectangle** (Rettangolo) smette di funzionare sui tuoi grafici — lo selezioni, ma non disegna. Questo problema è di solito causato da un file di configurazione danneggiato legato agli strumenti di disegno. Eliminando quel file, DeepCharts lo rigenera automaticamente, ripristinando lo strumento.

## Sintomo

- Lo strumento di disegno **Rectangle** non funziona quando provi a usarlo su un grafico.
- Anche altri strumenti di disegno possono comportarsi in modo anomalo nello stesso momento — lo stesso file danneggiato influisce anche su di loro.

Da non confondere con:

- [[chart-zoom]] — lo zoom del grafico in avanti e indietro non risponde; un problema diverso con la propria soluzione.
- [[drawing-tools]] — il riferimento generale se non sei sicuro di come dovrebbero funzionare gli strumenti di disegno.

## Causa più probabile

Un file di configurazione degli strumenti di disegno danneggiato, chiamato `tool_config`, nella cartella delle impostazioni di DeepCharts. Rimuoverlo obbliga DeepCharts a generarne uno nuovo al prossimo avvio.

## Soluzione rapida

Reimposta la configurazione degli strumenti di disegno:

1. **Chiudi completamente l'applicazione DeepCharts** prima di procedere.
2. Apri **Esplora file** e vai alla tua cartella **Documenti**.
3. Naviga fino alla cartella delle impostazioni di DeepCharts:

```
Documents → DeepChart → Settings
```

[SCREENSHOT: Esplora file che mostra la cartella Settings dentro la cartella DeepChart in Documenti, con il percorso della cartella visibile nella barra degli indirizzi | dc-it-rectangle-drawing-tool-01.png]

4. Individua il file chiamato `tool_config` ed **eliminalo**.

[SCREENSHOT: Esplora file dentro la cartella Settings con il file tool_config selezionato e il menu contestuale del tasto destro aperto su Elimina | dc-it-rectangle-drawing-tool-02.png]

> **Attenzione:** Questo file memorizza le impostazioni dei tuoi strumenti di disegno, quindi eliminarlo le riporta ai valori predefiniti. Non influisce sui tuoi dati di mercato, sui grafici o sulle impostazioni dell'account.

5. Avvia di nuovo DeepCharts — l'applicazione genera automaticamente un nuovo file `tool_config`.
6. Prova lo strumento di disegno **Rectangle** su un grafico. Ora dovrebbe funzionare correttamente.

[SCREENSHOT: Un grafico DeepCharts con lo strumento di disegno Rettangolo selezionato e un rettangolo disegnato con successo su un'area di prezzo | dc-it-rectangle-drawing-tool-03.png]

## Se non ha funzionato

### Causa: DeepCharts era ancora in esecuzione quando hai eliminato il file

Se l'applicazione era ancora in esecuzione in background, potrebbe aver riscritto il file danneggiato alla chiusura. Ripeti la procedura assicurandoti prima che DeepCharts sia completamente chiuso — controlla nel Task Manager di Windows che non resti alcun processo DeepCharts prima di eliminare `tool_config`.

### Causa: il problema riguarda anche altri strumenti di disegno

Lo stesso file di configurazione copre anche gli altri strumenti di disegno, quindi se più strumenti si comportano male, il reset qui sopra risolve anche quelli. Se dopo il reset un singolo strumento diverso continua a non funzionare, annota quale sia prima di contattare il supporto.

## Ancora bloccato

Genera un [[diagnostic-report]] e contatta il supporto tramite [[get-help]] — indica che hai già reimpostato il file `tool_config` e quali strumenti risultano ancora interessati.

## Come prevenirlo

Non esiste un'impostazione utente che causi questo danneggiamento — può capitare a qualsiasi installazione. Due abitudini riducono in generale il rischio di file di configurazione danneggiati:

- Chiudi DeepCharts normalmente invece di terminare il processo, perché i file delle impostazioni vengono scritti alla chiusura.
- Evita di spegnere il PC mentre DeepCharts sta ancora salvando o chiudendosi.

Per l'uso quotidiano degli strumenti stessi, vedi [[drawing-tools]].

## Articoli correlati

- [[drawing-tools]]
- [[chart-zoom]]
- [[chart-window]]
- [[diagnostic-report]]
- [[get-help]]