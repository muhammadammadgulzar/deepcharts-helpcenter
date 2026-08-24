---
title: "Know Sure Thing (KST)"
slug: "know-sure-thing"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Riferimento per l'oscillatore Know Sure Thing (KST) in DeepCharts: quattro componenti ROC smussate, incroci con la signal line e ogni impostazione della finestra di dialogo."
keywords: ["know sure thing", "KST", "indicatore kst", "kst di pring", "oscillatore rate of change", "signal line kst", "incrocio kst", "roc smussato"]
source_hash: "c46feb17bce2cc38"
ai_translated: true
source_hash: "c46feb17bce2cc38"
---
Il Know Sure Thing (KST) è un oscillatore di momentum basato su più calcoli di Rate of Change (ROC) smussati. Combina il momentum di breve, medio e lungo periodo in un unico indicatore e include una signal line per l'analisi degli incroci.

Mentre una singola lettura del [[rate-of-change]] ti parla solo di una finestra di osservazione, il KST ne fonde quattro — ciascuna smussata e ponderata singolarmente — così un vero cambiamento di momentum deve manifestarsi su più orizzonti prima che la linea giri. Questo lo rende più lento di un ROC grezzo, ma decisamente più difficile da ingannare con falsi segnali.

## Che cos'è

Il KST risponde alla domanda: il momentum sta girando su più orizzonti temporali contemporaneamente, o solo su uno? Traccia due linee in un pannello separato:

- **KST** — la linea di momentum composita costruita da quattro componenti ROC smussate.
- **Signal** — una copia smussata del KST usata per i segnali di incrocio.

La linea dello zero separa il bias di momentum rialzista da quello ribassista. L'indicatore è ampiamente attribuito a Martin Pring.

[SCREENSHOT: Grafico dei prezzi con l'indicatore KST in un pannello inferiore, linee KST e Signal in colori contrastanti, con evidenziato un incrocio rialzista del KST sopra la Signal al di sotto della linea dello zero | dc-it-know-sure-thing-01.png]

## Quando usarlo

- Per identificare cambiamenti di momentum confermati contemporaneamente su orizzonti brevi, medi e lunghi.
- Per confermare un trend — un KST che si mantiene sopra lo zero supporta un bias rialzista, sotto lo zero uno ribassista.
- Per individuare divergenze tra KST e prezzo sui massimi e minimi di swing.
- Per segnalare condizioni di eccessiva estensione quando il KST si allontana molto dalla linea dello zero.

## Avvio rapido

1. Apri un grafico dei prezzi — vedi [[first-chart]].
2. Fai clic sul pulsante verde **Indicators** (o premi **Ctrl I**) per aprire l'**Indicator List**.
3. Cerca **Know Sure Thing** e fai clic su **+** per aggiungerlo. Compare in un pannello dedicato sotto il prezzo.
4. Fai clic sull'icona dell'ingranaggio per aprirne le impostazioni.
5. Una configurazione di partenza molto diffusa è il setup classico di Martin Pring: lunghezze ROC di 10, 15, 20 e 30, lunghezze delle medie di 10, 10, 10 e 15, e un periodo del segnale di 9. Da lì regola in base al tuo orizzonte temporale.

[SCREENSHOT: Finestra di dialogo delle impostazioni del KST aperta, con il gruppo General con Use percent, il gruppo Average con Average Type, Avg Length 1-4 e Signal Period, e il gruppo ROC con ROC Length 1-4 | dc-it-know-sure-thing-02.png]

## Come leggerlo

Le letture fondamentali, secondo la logica dell'indicatore:

| Osservazione | Interpretazione |
|---|---|
| KST sopra lo zero | Bias di momentum rialzista |
| KST sotto lo zero | Bias di momentum ribassista |
| KST che incrocia sopra la Signal | Potenziale svolta rialzista |
| KST che incrocia sotto la Signal | Potenziale svolta ribassista |

I segnali più forti combinano entrambi gli elementi: un incrocio KST/Signal che attraversa anche la linea dello zero, oppure un incrocio nella direzione del lato dello zero in cui ti trovi già (un incrocio rialzista sopra lo zero è un segnale di continuazione, non un'indicazione di inversione). La divergenza — il prezzo che segna un nuovo estremo mentre il KST non lo fa — avverte che il momentum multi-orizzonte alla base del movimento si sta esaurendo.

## Riferimento delle impostazioni

Raggruppate come nella finestra di configurazione dell'indicatore.

### Area del grafico

| Impostazione | Cosa fa |
|---|---|
| **Horizontal** | Visualizza il KST in un pannello separato. |
| **Vertical** | Visualizza l'indicatore in verticale (se supportato). |
| Selettore del pannello | Sceglie in quale pannello compare l'indicatore. |
| **Use sec. axis** | Abilita la scala secondaria. |

### Parametri — General

| Impostazione | Cosa fa |
|---|---|
| **Use percent** | Passa il calcolo del ROC tra valori grezzi e momentum in percentuale. La modalità percentuale rende le letture confrontabili tra strumenti con scale di prezzo diverse. |

### Parametri — Average

| Impostazione | Cosa fa |
|---|---|
| **Average Type** | Definisce il metodo di smussamento applicato a ciascuna componente ROC. |
| **Avg Length 1–4** | Controlla lo smussamento di ciascun calcolo ROC. Valori più alti producono una risposta più fluida ma più lenta. |
| **Signal Period** | Definisce la lunghezza di smussamento della signal line usata per i segnali di incrocio. |

### Parametri — ROC

| Impostazione | Cosa fa |
|---|---|
| **ROC Length 1–4** | Definisce il periodo di osservazione di ciascuna componente Rate of Change. Lunghezze più brevi reagiscono più in fretta; lunghezze maggiori catturano trend di momentum più ampi. |

### Livelli

| Impostazione | Cosa fa |
|---|---|
| **Middle Level** | Definisce la linea di riferimento neutra (zero). |
| **Middle Level Color** | Personalizza il colore della linea dello zero. |
| **Level Width** | Regola lo spessore della linea di riferimento. |

### Subgraphs

- **KST** — controlla l'aspetto della linea di momentum principale: colore, stile della linea, spessore, comportamento auto-color e visualizzazione delle etichette.
- **Signal** — controlla l'aspetto della signal line: colore, stile della linea, spessore e visualizzazione delle etichette.

Opzioni di visualizzazione disponibili per entrambe le linee: **Name Label**, **Value Label**, **Name Background**, **Value Background**, **Include on Auto Center** e **Chart color for marker**.

## Suggerimenti ed errori comuni

- **Mantieni le quattro lunghezze ROC scaglionate.** Il valore dell'indicatore sta nel fondere orizzonti diversi; impostare lunghezze troppo vicine lo riduce a un singolo ROC costoso.
- **Gli incroci con la signal line ritardano per costruzione.** Il KST è costruito da componenti smussate, quindi gli incroci confermano le svolte anziché anticiparle — abbinalo all'analisi della struttura o dei livelli per il timing di ingresso.
- **Prima il contesto della linea dello zero, poi l'incrocio.** Un incrocio ribassista molto sopra lo zero spesso segnala solo una pausa in un trend rialzista, non un'inversione.
- **Adatta le lunghezze al tuo grafico.** I valori classici di Pring erano pensati per analisi di lungo periodo; i trader intraday di solito accorciano proporzionalmente tutte e quattro le lunghezze ROC e delle medie.

## Articoli correlati

- [[rate-of-change]]
- [[macd]]
- [[momentum]]
- [[inverse-cyber-cycle]]
- [[different-types-of-input]]
- [[indicator-layout]]