---
title: "Come configurare le scorciatoie da tastiera"
slug: "keyboard-shortcuts"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Assegna, modifica o elimina le scorciatoie da tastiera per le azioni della piattaforma e del grafico dalla scheda Shortcuts nelle impostazioni di DeepCharts."
keywords: ["scorciatoie da tastiera", "tasti di scelta rapida", "combinazioni di tasti", "tasti rapidi", "riassegnare tasti", "configurare scorciatoie", "hotkey", "shortcut tastiera"]
source_hash: "be9d87024052a03e"
ai_translated: true
source_hash: "be9d87024052a03e"
---
Alla fine di questa guida avrai la tua scorciatoia da tastiera personale assegnata a un'azione di DeepCharts — e saprai come modificare o rimuovere qualunque scorciatoia esistente. Ogni scorciatoia in DeepCharts è rimappabile, quindi se una combinazione predefinita entra in conflitto con la memoria muscolare di un'altra piattaforma, puoi sistemarla qui in meno di un minuto.

## Prima di iniziare

- [[install-deepcharts|DeepCharts è installato e in esecuzione]]
- Dai prima un'occhiata alle [[keyboard-shortcuts-reference|scorciatoie predefinite]] — l'azione che ti interessa potrebbe avere già una combinazione che puoi semplicemente imparare invece di rimapparla

## Passaggi

1. Nella barra dei menu principale, fai clic su **Options** (Opzioni), poi seleziona **Settings** (Impostazioni). Si apre la finestra **General Settings**.

2. Passa alla scheda **Shortcuts**.

   [SCREENSHOT: Finestra General Settings sulla scheda Shortcuts, con la tabella delle scorciatoie che mostra le colonne Category, Type, Description e Combination e i pulsanti Delete e Register per ogni riga | shortcuts-tab-overview.png]

3. Trova nella tabella l'azione che ti interessa. Ogni riga ha quattro colonne che ti aiutano a individuarla:

   | Colonna | Cosa mostra |
   |---|---|
   | **Category** | **General** (funzioni a livello di piattaforma) o **Chart** (funzioni del grafico) |
   | **Type** | Il tipo di azione: **Action**, **Control**, **Drawing and Annotation**, **Scroll** o **Trading** |
   | **Description** | Cosa fa la scorciatoia |
   | **Combination** | La combinazione di tasti attualmente assegnata |

4. Fai clic su **Register** su quella riga. La riga è ora in registrazione.

   [SCREENSHOT: Una singola riga della tabella delle scorciatoie con il pulsante Register evidenziato, pronta a registrare una nuova combinazione di tasti | shortcuts-register-button.png]

5. Premi la combinazione di tasti che vuoi assegnare (per esempio Ctrl Alt D). La combinazione compare nella colonna **Combination** della riga.

6. Fai clic su **Save Settings** in fondo alla finestra. La nuova scorciatoia è ora attiva — non è necessario alcun riavvio.

   [SCREENSHOT: Scheda Shortcuts con una combinazione appena registrata visibile nella colonna Combination e il pulsante Save Settings evidenziato in basso | shortcuts-save-settings.png]

   ### Se vuoi rimuovere una scorciatoia

   1. Fai clic su **Delete** sulla riga della scorciatoia che vuoi rimuovere. La combinazione salvata viene cancellata.
   2. Fai clic su **Save Settings**.

   ### Se vuoi sostituire una scorciatoia esistente

   1. Fai clic su **Register** sulla riga e premi la nuova combinazione — non è necessario eliminare prima quella vecchia.
   2. Fai clic su **Save Settings**.

## Verifica che abbia funzionato

Premi la tua nuova combinazione nel contesto a cui appartiene. Per una scorciatoia di categoria **Chart**, fai prima clic su una finestra grafico in modo che abbia il focus, poi premi i tasti — per esempio, una combinazione assegnata a **Indicators** dovrebbe aprire il gestore degli indicatori del grafico. Per una scorciatoia di categoria **General**, dovrebbe funzionare ovunque nella piattaforma.

## Se qualcosa è andato storto

- **La scorciatoia non fa nulla** — la causa più comune è aver saltato **Save Settings** dopo la registrazione. Riapri **Options → Settings → Shortcuts** e controlla la colonna **Combination**: se la tua combinazione non compare sulla riga, registrala di nuovo e salva.
- **Una scorciatoia Chart non fa nulla** — assicurati che una finestra grafico abbia il focus quando premi i tasti. Le scorciatoie di categoria Chart operano sui grafici, non sulla piattaforma nel suo insieme.
- **I tasti attivano l'azione sbagliata** — scorri la colonna **Combination** in cerca della stessa combinazione assegnata a più righe. Eliminala dalla riga che non ti interessa, scegli una combinazione diversa per una delle due e salva.
- **Non ricordi cosa hai cambiato** — la [[keyboard-shortcuts-reference]] elenca le combinazioni predefinite, così puoi confrontare la tua tabella e registrare di nuovo tutto ciò che vuoi ripristinare.

## Articoli correlati

- [[keyboard-shortcuts-reference]]
- [[customize-language-theme-sounds]]
- [[chart-window]]
- [[drawing-tools]]
- [[templates-workspaces]]