---
title: "Template e workspace"
slug: "templates-workspaces"
category: "Charts & Workspace"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Salva la configurazione di un grafico come Template o l'intero layout come Workspace, in locale o nel cloud, così la tua configurazione sopravvive a ogni riavvio."
keywords: ["salvare layout grafico", "template grafico", "workspace", "salvare workspace", "caricare template", "impostazioni azzerate dopo il riavvio", "layout perso", "configurazione grafico scomparsa", "template cloud", "template condivisi"]
source_hash: "8737a82b96dc8153"
ai_translated: true
source_hash: "8737a82b96dc8153"
---
Alla fine avrai la configurazione di un grafico salvata come **Template** e l'intero layout dello schermo salvato come **Workspace**, e saprai come ricaricare entrambi — su questo PC o su qualsiasi altro PC dove usi la tua licenza DeepCharts.

La regola pratica: la configurazione di un singolo grafico (indicatori, stili, impostazioni) → salva un **Template**. L'intero layout — più grafici, indicatori, profili — → salva un **Workspace**.

> **Attenzione:** DeepCharts non salva automaticamente layout o configurazioni dei grafici. Se chiudi l'app (o spegni il PC) senza salvare un Template o un Workspace, il prossimo avvio parte dal layout predefinito. Nulla è rotto e nulla è stato "azzerato" — la configurazione non era mai stata salvata. Salva un Workspace prima di chiudere l'app.

## Prima di iniziare

- Un grafico configurato come piace a te — [[first-chart]]
- Gli indicatori che vuoi preservare già applicati — [[indicator-layout]]

## Passaggi

### Salva un Template di grafico

1. Configura il grafico esattamente come lo vuoi: indicatori, stile delle barre, colori, impostazioni.

2. Fai clic con il tasto destro del mouse in un punto qualsiasi del grafico e scegli **Template → Save As**.

[SCREENSHOT: Menu contestuale del grafico aperto con il sottomenu Template espanso che mostra Load e Save As, con Save As evidenziato | dc-it-templates-workspaces-01.png]

3. Scegli dove archiviarlo — **Local** (questo PC) o **Cloud** (il tuo account DeepCharts, disponibile su qualsiasi PC dove attivi la stessa licenza) — e dai al template un nome chiaro, per esempio la strategia o il layout a cui appartiene.

[SCREENSHOT: Finestra di salvataggio del template che mostra le opzioni di origine Local e Cloud con un nome di template in fase di inserimento | dc-it-templates-workspaces-02.png]

### Carica un Template

1. Fai clic con il tasto destro del mouse sul grafico e scegli **Template → Load**. Il pulsante **Templates** nella barra inferiore del grafico apre lo stesso selettore — è una scorciatoia per questa voce di menu.

2. Nel selettore di file, scegli una scheda di origine:
   - **Local** — file archiviati nella cartella **Documents → deepchart → Template** su questo PC. Il pulsante **Add folder** ti consente di aggiungere un'altra cartella in cui cercare.
   - **Cloud** — template salvati sul server DeepCharts, legati al tuo account e alla tua licenza. Usa la stessa licenza su un altro PC (per esempio in viaggio) e i tuoi template cloud compariranno anche lì.
   - **Shared** — un'area di sola lettura curata dal team DeepCharts, che include i template usati nei video didattici. Puoi caricare da Shared, ma non puoi mai pubblicarvi nulla.

[SCREENSHOT: Selettore di file dei template con le schede di origine Local, Cloud e Shared visibili, un template selezionato e il riquadro di anteprima che ne mostra l'anteprima | dc-it-templates-workspaces-03.png]

3. Seleziona il template e caricalo. Il grafico si ridisegna con la configurazione salvata.

> **Nota:** I pulsanti radio dei template rapidi accanto al pulsante **Templates** (OF-VP, D-VP, C-VP e così via) sono preset integrati, non i tuoi template salvati — vedi [[quick-chart-templates]].

### Salva un Workspace

1. Disponi l'intera schermata di trading: ogni grafico, finestra e pannello dove lo vuoi.

2. Nella barra principale, apri il selettore **Workspace** — mostra il nome del workspace corrente (per esempio **Untitled**) — e scegli l'opzione di salvataggio. [CONFIRM: exact item labels in the Workspace menu (Save as / Load / New)]

[SCREENSHOT: Barra principale di DeepCharts con il menu a discesa Workspace aperto che mostra il nome del workspace corrente e le opzioni di salvataggio/caricamento | dc-it-templates-workspaces-04.png]

3. Scegli **Local** o **Cloud** e dai un nome al workspace. I workspace locali risiedono in **Documents → deepchart → Workspace** su questo PC; i workspace cloud seguono la tua licenza su qualsiasi macchina.

### Carica un Workspace

1. Apri il selettore **Workspace** nella barra principale e scegli l'opzione di caricamento.

2. Scegli l'origine (**Local**, **Cloud** o **Shared**) e seleziona il workspace. L'intero layout viene ripristinato.

[SCREENSHOT: Selettore di file dei workspace che mostra un workspace salvato selezionato nella scheda Local con il riquadro di anteprima visibile | dc-it-templates-workspaces-05.png]

### Se lavori su più di un PC

Salva i tuoi template e workspace su **Cloud**. Sono legati al tuo account e alla tua licenza DeepCharts, quindi sopravvivono a reinstallazioni e cambi di macchina — vedi [[move-to-new-computer]] per la checklist completa di migrazione. I file locali possono anche essere copiati manualmente dalle cartelle **Documents → deepchart → Template** e **Workspace**.

## Verifica che abbia funzionato

Salva un Workspace, chiudi completamente DeepCharts, riaprilo e carica il workspace dal selettore **Workspace**. Ogni grafico, indicatore e posizione delle finestre dovrebbe tornare esattamente come l'avevi lasciato. Se hai salvato su Cloud, il workspace compare anche nella scheda Cloud su qualsiasi altro PC che esegue la tua licenza.

## Se qualcosa è andato storto

- **"Tutte le mie impostazioni si sono azzerate dopo il riavvio"** — è il comportamento senza salvataggio automatico descritto sopra, non un guasto. Se l'elenco dei workspace è vuoto, non era mai stato salvato nulla; configura di nuovo il tuo layout e salva un Workspace prima di chiudere.
- **Un template salvato su un altro PC non compare** — i file Local restano sul PC dove sono stati salvati. Salva su **Cloud** invece, oppure copia i file dalle cartelle **Documents → deepchart** dell'altra macchina.
- **Non riesci a caricare nella scheda Shared** — è così per progettazione. Shared è di sola lettura; solo il team DeepCharts vi pubblica.
- **Un workspace o template salvato è davvero scomparso** — se prima compariva nell'elenco e ora non c'è più, contatta il supporto con i dettagli (Local o Cloud, un file o tutti): [[get-help]].

## Articoli correlati

- [[quick-chart-templates]]
- [[first-chart]]
- [[indicator-layout]]
- [[multi-monitor-windows]]
- [[move-to-new-computer]]
- [[chart-window]]