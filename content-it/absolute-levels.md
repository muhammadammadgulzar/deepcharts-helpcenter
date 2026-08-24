---
title: "Livelli assoluti"
slug: "absolute-levels"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Traccia due livelli di prezzo orizzontali fissi definiti da te, ciascuno con colore, stile e spessore propri — un modo leggero per tenere i prezzi chiave sul grafico."
keywords: ["livelli assoluti", "livello di prezzo fisso", "livello orizzontale", "livelli personalizzati", "linea di prezzo", "livelli statici", "linea di prezzo chiave", "indicatore livelli manuali"]
source_hash: "0912f4fe445c8262"
ai_translated: true
source_hash: "0912f4fe445c8262"
---
L'indicatore Absolute Levels disegna linee orizzontali ai valori di prezzo che digiti tu stesso. È uno strumento di analisi tecnica per marcare livelli chiave di supporto e resistenza sul grafico dei prezzi di uno strumento — ma a differenza degli indicatori di livelli automatici, sei tu a scegliere i prezzi esatti, e l'indicatore li mantiene tracciati con la formattazione che hai scelto.

Questo lo rende lo strumento giusto per i livelli che nascono dalla tua analisi o che arrivano da fuori del grafico: un prezzo di settlement, un numero tondo, un livello da uno studio su timeframe superiore, o un prezzo segnato nel tuo piano di trading.

## Che cos'è

Absolute Levels è un indicatore di livelli manuali. Inserisci fino a due valori di prezzo fissi — **First Value** e **Second Value** — e l'indicatore traccia ciascuno come linea orizzontale con colore, stile e spessore configurabili in modo indipendente. Risponde alla domanda "dove si trovano i miei prezzi pre-decisi rispetto al mercato in questo momento?"

[SCREENSHOT: Finestra del grafico con Absolute Levels applicato — due linee orizzontali a prezzi definiti dall'utente con colori e stili diversi, una sopra e una sotto il prezzo corrente, chiaramente estese su tutta la larghezza del grafico | dc-it-absolute-levels-01.png]

## Quando usarlo

- Hai prezzi esatti dal tuo piano di trading (ingressi, livelli di invalidazione, target) e vuoi fissarli sul grafico.
- Tieni traccia di prezzi che nessun indicatore automatico produce — numeri tondi, settlement, un livello legato a una notizia.
- Vuoi livelli che non si spostano mai: a differenza dei livelli calcolati, i livelli assoluti restano esattamente dove li hai messi finché non li cambi.
- Vuoi una coppia di linee di riferimento con formattazione distinta — per esempio, una linea target verde e una linea di rischio rossa.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Absolute Levels** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto all'indicatore.
4. Inserisci il prezzo del tuo primo livello in **First Value** e quello del secondo livello in **Second Value**.
5. Dai alle due linee una formattazione contrastante — per esempio, una linea continua per il livello più importante e una tratteggiata per quello secondario — usando le impostazioni **Color**, **Style** e **Thickness** di ciascuna linea.
6. Applica e verifica che entrambe le linee si trovino esattamente ai prezzi che hai inserito.

[SCREENSHOT: Finestra delle impostazioni di Absolute Levels con la sezione Parameters e i campi First Value e Second Value compilati, e i gruppi di formattazione First Line e Second Line con i controlli Color, Style e Thickness | dc-it-absolute-levels-02.png]

## Come leggerlo

Absolute Levels non aggiunge alcun calcolo proprio — l'interpretazione è il significato che i tuoi prezzi portano con sé:

- **Il prezzo che si avvicina a un livello** è il tuo segnale di attenzione: osserva come si comporta il mercato in prossimità del prezzo che hai pre-marcato, invece di decidere sul momento.
- **Un rigetto netto su un livello** convalida l'analisi che ha prodotto quel prezzo; una chiusura decisa oltre il livello invalida l'idea e trasforma la linea in un potenziale riferimento di retest dall'altro lato.
- **Due livelli formano una forchetta.** Con un valore sopra e uno sotto il prezzo, hai una semplice mappa di range: fuori dalla forchetta il mercato sta facendo qualcosa di cui il tuo piano dovrebbe tenere conto.

## Riferimento impostazioni

Raggruppate come nella finestra delle impostazioni.

### Parameters

| Impostazione | Che cosa fa |
|---|---|
| **First Value** | Prezzo del primo livello assoluto visualizzato sul grafico. |
| **Second Value** | Prezzo del secondo livello assoluto visualizzato sul grafico. |

### First Line

| Impostazione | Che cosa fa |
|---|---|
| **First Line Color** | Colore della prima linea tracciata. |
| **First Line Style** | Stile visivo della prima linea tracciata. |
| **First Line Thickness** | Spessore della prima linea tracciata. |

### Second Line

| Impostazione | Che cosa fa |
|---|---|
| **Second Line Color** | Colore della seconda linea tracciata. |
| **Second Line Style** | Stile visivo della seconda linea tracciata. |
| **Second Line Thickness** | Spessore della seconda linea tracciata. |

## Suggerimenti ed errori comuni

- **Aggiorna i valori quando il tuo piano cambia.** I livelli assoluti non fanno rollover né si ricalcolano; una linea obsoleta del piano della settimana scorsa è peggio di nessuna linea. Rivedi i valori come parte della preparazione della sessione.
- **Usalo insieme ai — non al posto dei — livelli calcolati.** Gli strumenti automatici come [[important-levels]] e [[pivot-points]] coprono i prezzi di riferimento standard; riserva Absolute Levels alla manciata di prezzi che solo tu stai monitorando.
- **Differenzia visivamente le due linee.** Se entrambe condividono colore e stile, perdi l'informazione di quale livello sia quale; codifica il significato nella formattazione.
- **Preferiscilo a una linea disegnata quando conta la precisione.** Digitare il valore esatto in **First Value** evita i piccoli errori di posizionamento del trascinamento a mano — vedi [[drawing-tools]] per quando una linea a mano libera è la scelta migliore.

## Articoli correlati

- [[important-levels]]
- [[pivot-points]]
- [[price-movement-levels]]
- [[drawing-tools]]
- [[different-types-of-input]]
- [[indicator-layout]]