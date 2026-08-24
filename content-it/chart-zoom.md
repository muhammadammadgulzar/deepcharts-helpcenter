---
title: "Soluzione: lo zoom del grafico non funziona"
slug: "chart-zoom"
category: "Troubleshooting & Support"
subcategory: ""
type: "troubleshooting"
difficulty: "beginner"
time: "5 min to complete"
description: "Ripristina lo zoom con la rotella del mouse e da tastiera sui grafici DeepCharts — impostazioni di scorrimento di Windows, opzioni della scala dei prezzi e controlli hardware del mouse."
keywords: ["zoom non funziona", "impossibile zoomare grafico", "zoom rotella mouse", "scorrere finestre inattive", "zoom Ctrl +", "zoom grafico bloccato", "zoom scala prezzi", "zoom trackpad"]
source_hash: "8d4f3cd5a084bed6"
ai_translated: true
source_hash: "8d4f3cd5a084bed6"
---
Scorri la rotella del mouse sopra un grafico e non succede nulla, oppure le scorciatoie da tastiera per lo zoom non hanno effetto. I problemi di zoom in DeepCharts derivano quasi sempre da una di tre origini: un'impostazione del mouse di Windows, la configurazione della scala dei prezzi, o l'hardware di puntamento stesso. Questo articolo le esamina dalla più alla meno comune.

Per riferimento, DeepCharts effettua lo zoom su due assi con due metodi di input:

| Azione | Input |
|---|---|
| Zoom avanti (asse X, scala temporale) | **Ctrl** + **+** |
| Zoom indietro (asse X, scala temporale) | **Ctrl** + **-** |
| Zoom asse X (scala temporale) | Scorrimento della rotella del mouse sopra il grafico |
| Zoom asse Y (scala dei prezzi) | **Alt** + scorrimento della rotella del mouse |

## Sintomo

- Scorrere la rotella del mouse sopra un grafico non zooma la scala temporale.
- **Alt** + scorrimento non cambia la scala dei prezzi.
- **Ctrl** + **+** / **Ctrl** + **-** non zoomano avanti o indietro.

Da non confondere con un grafico che zooma bene ma non mostra nuovi aggiornamenti di prezzo — quello è un problema di feed dati, trattato in [[feed-connected-chart-not-moving]].

## Causa più probabile

Per impostazione predefinita, Windows consegna gli eventi della rotella del mouse solo alla finestra che ha attualmente il focus. Se la finestra del grafico non è la finestra attiva quando scorri — molto comune nei layout multi-finestra — l'input della rotella non raggiunge mai DeepCharts. L'impostazione di Windows **Scroll inactive windows when hovering over them** (Scorri le finestre inattive al passaggio del mouse) risolve il problema.

## Soluzione rapida

1. Apri **Windows Settings → Bluetooth & devices → Mouse**.
2. Attiva **Scroll inactive windows when hovering over them**.

[SCREENSHOT: Impostazioni di Windows, pagina Bluetooth & devices > Mouse con l'interruttore "Scroll inactive windows when hovering over them" impostato su On ed evidenziato | dc-it-chart-zoom-01.png]

3. Riavvia DeepCharts.
4. Passa il mouse sopra un grafico e scorri — la scala temporale dovrebbe zoomare. Tieni premuto **Alt** e scorri per confermare che anche la scala dei prezzi zooma.

[SCREENSHOT: Finestra grafico di DeepCharts durante uno zoom, con il cursore sopra le candele e l'asse temporale visibilmente compresso rispetto a un secondo stato — prima/dopo di uno zoom con la rotella del mouse | dc-it-chart-zoom-02.png]

## Se non ha funzionato

### Causa: le opzioni della scala dei prezzi stanno prevalendo sullo zoom

Se l'asse temporale zooma ma l'asse dei prezzi non risponde (o torna indietro di scatto), le opzioni della scala dell'asse Y potrebbero non essere impostate come ti aspetti.

1. Fai clic con il tasto destro del mouse sulla scala dei prezzi (l'asse Y sul bordo destro del grafico).
2. Rivedi le opzioni della scala nel menu e conferma che la modalità della scala sia corretta per come vuoi che il grafico si comporti. [CONFIRM: exact price-scale right-click option names that affect zoom behavior]

[SCREENSHOT: Menu contestuale del tasto destro aperto sulla scala dei prezzi dell'asse Y del grafico con le opzioni della scala disponibili | dc-it-chart-zoom-03.png]

Vedi [[price-chart-settings]] per il riferimento completo delle impostazioni del grafico.

### Causa: trackpad, desktop remoto o software del mouse stanno intercettando la rotella

Gli eventi della rotella possono essere assorbiti prima ancora di raggiungere DeepCharts:

- **Trackpad** — i gesti di scorrimento del trackpad dei laptop sono meno affidabili di una rotella fisica. Prova con un mouse esterno.
- **Sessioni di desktop remoto** — gli strumenti di accesso remoto spesso inoltrano l'input di scorrimento in modo incompleto. Prova direttamente sulla macchina che esegue DeepCharts.
- **Software del mouse di terze parti** — le utility dei produttori che rimappano o "migliorano" lo scorrimento possono intercettare la rotella. Chiudile o disattivale, e mantieni le impostazioni del mouse di Windows ai valori predefiniti.

### Causa: una scorciatoia da tastiera è stata cambiata

Le scorciatoie di DeepCharts sono configurabili, quindi **Ctrl** + **+** / **Ctrl** + **-** potrebbero essere state riassegnate a qualcos'altro nella tua installazione. Apri le impostazioni delle scorciatoie e controlla a cosa sono attualmente associate le azioni di zoom — vedi [[keyboard-shortcuts]].

## Ancora bloccato

Se nulla di quanto sopra ripristina lo zoom, genera un [[diagnostic-report]] e contatta il supporto tramite [[get-help]] — indica quale asse non funziona e quale metodo di input (rotella, Alt + rotella, tastiera) hai testato.

## Prevenire il problema

- Mantieni attiva l'opzione **Scroll inactive windows when hovering over them** in Windows.
- Usa un mouse esterno anziché un trackpad per lavorare sui grafici.
- Evita di eseguire DeepCharts tramite desktop remoto quando puoi lavorare in locale.
- Lascia le impostazioni del mouse di Windows ai valori predefiniti ed evita utility di scorrimento di terze parti.

## Articoli correlati

- [[chart-window]]
- [[price-chart-settings]]
- [[keyboard-shortcuts]]
- [[keyboard-shortcuts-reference]]
- [[feed-connected-chart-not-moving]]
- [[get-help]]