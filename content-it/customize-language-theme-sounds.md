---
title: "Personalizza lingua, tema e suoni di notifica"
slug: "customize-language-theme-sounds"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Cambia la lingua dell'interfaccia di DeepCharts, il fuso orario, il tema colore e la voce delle notifiche di avviso dalle impostazioni General."
keywords: ["cambiare lingua", "impostazioni lingua", "modalità scura", "tema chiaro", "aspetto piattaforma", "fuso orario", "timezone", "suoni di notifica", "voce avvisi", "impostazioni deepchart", "impostazioni deepcharts"]
source_hash: "38f8f0c4c1c1d041"
ai_translated: true
source_hash: "38f8f0c4c1c1d041"
---
Alla fine di questa guida avrai DeepCharts con la lingua, il fuso orario, il tema colore e la voce delle notifiche di avviso che preferisci. Tutte e quattro le impostazioni si trovano in un unico posto — la sezione **General** della finestra delle impostazioni — quindi si tratta di un unico breve giro tra i menu.

Potresti aver già scelto un tema e un profilo suoni di avviso nello Startup Wizard al primo avvio. Tutto ciò che il wizard ha impostato può essere modificato di nuovo in qualsiasi momento con i passaggi qui sotto.

## Prima di iniziare

- [[install-deepcharts|DeepCharts è installato e la tua licenza è attivata]]
- Non serve alcuna connessione al feed dati — sono impostazioni locali della piattaforma
- Preparati a riavviare DeepCharts: le modifiche a lingua e fuso orario si applicano solo dopo un riavvio

## Passaggi

1. Nella barra dei menu principale, fai clic su **Options**.

   [SCREENSHOT: Barra dei menu principale di DeepCharts con il menu Options aperto, che mostra la voce Settings sul punto di essere cliccata | options-menu-settings.png]

2. Seleziona **Settings**. Si apre la finestra **General Settings**. Assicurati che sia selezionata la scheda **General** (le altre schede sono **Toolbar**, **Alert**, **Sim Account**, **Trading Quantity** e **Shortcuts**).

   [SCREENSHOT: Finestra General Settings sulla scheda General, con le impostazioni Language, Time Zone, Theme e Notification Sounds visibili nella parte superiore | general-settings-general-tab.png]

3. Modifica una qualsiasi delle impostazioni qui sotto, poi prosegui con il passaggio 4.

   ### Se vuoi cambiare la lingua

   Apri il menu a discesa **Language** e scegli una delle cinque lingue disponibili per l'interfaccia: **English**, **Italian**, **Spanish**, **German** o **Chinese**.

   [SCREENSHOT: Finestra General Settings con il menu a discesa Language aperto, che mostra tutte e cinque le voci: English, Italian, Spanish, German, Chinese | general-settings-language-dropdown.png]

   > **Nota:** La piattaforma supporta cinque lingue, ma la dashboard dell'account my.deepcharts.com al momento supporta solo inglese e italiano. Cambiare la lingua della piattaforma non cambia la dashboard.

   ### Se vuoi cambiare il fuso orario

   Apri il menu a discesa **Time Zone** e scegli il tuo fuso orario dall'elenco. Questo controlla come vengono visualizzati gli orari sui grafici. Come per la lingua, la modifica richiede un riavvio per essere applicata — se l'asse temporale del tuo grafico appare invariato subito dopo il salvataggio, è normale.

   ### Se vuoi cambiare il tema

   Apri il menu a discesa **Theme: Platform Appearance** e scegli uno dei sei temi: **Dark**, **Dark (Standard)**, **Blue**, **Light**, **Light (Standard)** o **Purple**.

   [SCREENSHOT: Finestra General Settings con il menu a discesa Theme aperto che elenca Dark, Dark (Standard), Blue, Light, Light (Standard), Purple | general-settings-theme-dropdown.png]

   ### Se vuoi cambiare la voce delle notifiche

   Sotto **Notification Sounds**, scegli il profilo vocale usato per le notifiche di avviso. Le opzioni disponibili sono **Female - Emily**, **Female - Daniela**, **Male** e **Warzone**.

   [SCREENSHOT: Finestra General Settings che mostra l'impostazione Notification Sounds con le sue quattro opzioni: Female - Emily, Female - Daniela, Male, Warzone | general-settings-notification-sounds.png]

   > **Suggerimento:** Questa impostazione sceglie la voce per le notifiche. I file audio personalizzati per gli avvisi degli indicatori e degli strumenti di disegno si gestiscono separatamente nella scheda **Alert** della stessa finestra (aggiungi lì file .wav o .mp3), e il suono di esecuzione degli ordini si attiva in **Options → Alerts → Trading Sounds**.

4. Fai clic su **Save Settings** in fondo alla finestra.

   [SCREENSHOT: Parte inferiore della finestra General Settings con i pulsanti Cancel e Save Settings, Save Settings evidenziato | general-settings-save-button.png]

5. Chiudi e riapri DeepCharts se hai cambiato la lingua o il fuso orario. Entrambi richiedono un riavvio per avere effetto.

## Verifica che abbia funzionato

- **Lingua** — dopo il riavvio, i menu (per esempio **Options** e le sue voci) sono visualizzati nella lingua che hai selezionato.
- **Fuso orario** — dopo il riavvio, l'asse temporale di un grafico aperto mostra gli orari nel fuso che hai selezionato.
- **Tema** — i colori della piattaforma corrispondono al tema che hai scelto.
- **Voce delle notifiche** — il prossimo avviso che scatta usa il profilo vocale che hai selezionato.

## Se qualcosa è andato storto

- **La lingua o il fuso orario del grafico non è cambiato** — le due cause più comuni sono aver fatto clic sul pulsante di chiusura della finestra invece che su **Save Settings**, e non aver riavviato l'app. Ripeti i passaggi, salva, poi riavvia.
- **La dashboard my.deepcharts.com è ancora in inglese** — è normale. La dashboard supporta solo inglese e italiano e si imposta indipendentemente dalla piattaforma.
- **Un avviso di un indicatore non riproduce alcun suono** — la voce delle notifiche non c'entra. Gli avvisi degli indicatori e degli strumenti di disegno usano i file audio di **Options → Settings → Alert**; se lì non è stato aggiunto alcun suono, l'elenco dei suoni nelle impostazioni degli avvisi dell'indicatore è vuoto.
- **Nessun suono quando un ordine viene eseguito** — attiva **Options → Alerts → Trading Sounds**.

## Articoli correlati

- [[keyboard-shortcuts]]
- [[keyboard-shortcuts-reference]]
- [[templates-workspaces]]
- [[chart-display-options]]
- [[welcome-to-deepcharts]]