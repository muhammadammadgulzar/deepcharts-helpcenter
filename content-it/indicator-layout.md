---
title: "Come cambiare il layout degli indicatori"
slug: "indicator-layout"
category: "Indicators & Analysis"
subcategory: "Indicator Basics"
type: "howto"
difficulty: "beginner"
time: "5 min to complete"
description: "Sposta un indicatore in un'altra area del grafico, oppure unisci due indicatori nello stesso pannello."
keywords: ["layout indicatori", "area del grafico", "unire indicatori", "pannello indicatore", "spostare indicatore", "combinare indicatori", "indicatore sul grafico dei prezzi"]
source_hash: "e902a187a56b3f8f"
ai_translated: true
source_hash: "e902a187a56b3f8f"
---
Alla fine di questa guida avrai ogni indicatore esattamente dove lo vuoi — nel suo pannello sotto il grafico dei prezzi, oppure unito nella stessa area di un altro indicatore.

La finestra del grafico di DeepCharts si divide in sezioni in base al numero di indicatori attivi. Ad esempio, con ADX e MACD aggiunti, la finestra mostra tre aree distinte: una per il prezzo, una per l'ADX e una per il MACD. Ogni area ha un numero, e ogni indicatore è assegnato a una di esse.

## Prima di iniziare

- Un grafico aperto con i dati caricati — vedi [[first-chart]]
- Almeno un indicatore aggiunto al grafico
- Approfondimento facoltativo sulla finestra del grafico stessa — [[chart-window]]

## Passaggi

1. Aggiungi gli indicatori che vuoi disporre. Il grafico si divide automaticamente in un'area per il prezzo più una per ogni indicatore a pannello inferiore.

   [SCREENSHOT: Finestra del grafico con ADX e MACD attivi, con tre aree impilate — prezzo in alto, ADX al centro, MACD in basso | indicator-layout-three-areas.png]

2. Fai clic sul pulsante **Indicators** sul grafico. Un menu a discesa elenca ogni indicatore attivo insieme all'area del grafico che occupa attualmente — usalo per vedere il layout corrente a colpo d'occhio.

   [SCREENSHOT: Il menu a discesa del pulsante Indicators aperto, con gli indicatori attivi elencati e il numero dell'area del grafico accanto a ciascuno | indicators-dropdown-areas.png]

3. Apri le impostazioni dell'indicatore che vuoi spostare.

4. Seleziona per lui una diversa assegnazione di area del grafico. [CONFIRM: exact label of the chart-area field in the indicator settings dialog]

   [SCREENSHOT: Una finestra di impostazioni di un indicatore con il controllo di assegnazione dell'area del grafico visibile e un numero di area diverso in fase di selezione | indicator-settings-change-area.png]

5. Applica la modifica. Il grafico si ridivide e l'indicatore si sposta nella sua nuova area.

### Se vuoi due indicatori nello stesso pannello

Assegna a entrambi gli indicatori lo **stesso** numero di area. Due o più indicatori che condividono un numero di area vengono disegnati insieme in quel pannello. Un esempio comune è visualizzare il prezzo e una media mobile insieme nell'area 1 del grafico, così la media viene tracciata direttamente sulle candele.

[SCREENSHOT: Grafico dei prezzi con una media mobile unita nell'area 1 del grafico, tracciata sopra le candele invece che in un pannello separato | dc-it-indicator-layout-01.png]

### Se vuoi riportare un indicatore nel suo pannello

Assegnagli un numero di area che nessun altro indicatore sta usando. Il grafico aggiunge una nuova sezione per lui.

## Verifica che abbia funzionato

- Il grafico si ripartisce immediatamente: l'indicatore ora viene disegnato nell'area che gli hai assegnato.
- Fai di nuovo clic sul pulsante **Indicators** — il menu a discesa mostra l'indicatore elencato con il suo nuovo numero di area del grafico.

## Se qualcosa è andato storto

- **Un indicatore sembra scomparso dopo l'unione.** Controlla prima il menu a discesa **Indicators** — ti dirà in quale area si trova effettivamente l'indicatore. Quando due indicatori con scale di valori molto diverse condividono lo stesso pannello, uno dei due può apparire come una linea quasi piatta; riportarlo nella sua area ripristina il suo intervallo visibile.
- **Il tuo layout è sparito dopo il riavvio di DeepCharts.** La piattaforma non salva automaticamente i layout dei grafici. Salva la tua disposizione come template (singolo grafico) o workspace (schermo intero) — vedi [[templates-workspaces]].

> **Suggerimento:** Una volta che la disposizione dei tuoi indicatori è quella giusta, salvala subito come template o workspace. I layout non salvati vanno persi alla chiusura dell'applicazione.

## Articoli correlati

- [[different-types-of-input]]
- [[chart-window]]
- [[templates-workspaces]]
- [[moving-average]]
- [[macd]]
- [[adx]]