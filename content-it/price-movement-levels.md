---
title: "Price Movement Levels"
slug: "price-movement-levels"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Traccia livelli strutturati a passo percentuale o fisso sopra e sotto un prezzo di riferimento, costruendo una griglia automatica di zone di espansione, supporto e resistenza."
keywords: ["price movement levels", "livelli percentuali", "livelli a passo", "griglia di prezzo", "livelli di espansione", "indicatore movimento percentuale", "griglia di livelli", "livelli sul prezzo di riferimento"]
source_hash: "a29ceb1d5cd914da"
ai_translated: true
source_hash: "a29ceb1d5cd914da"
---
L'indicatore Price Movement Levels traccia livelli strutturati, percentuali o a passo fisso, sopra e sotto un prezzo di riferimento. Partendo da una base come l'apertura o la chiusura della sessione, costruisce una griglia a spaziatura uniforme — ogni 0,5%, ogni 20 punti, qualunque passo tu definisca — così sai sempre quanta strada ha fatto il prezzo dal suo ancoraggio e dove si trova la prossima area di reazione strutturata.

Trasforma "il mercato oggi è salito molto" in un'affermazione misurabile: il prezzo è al livello +1,5%, con il livello +2% appena sopra.

## Che cos'è

Price Movement Levels è un indicatore di livelli a griglia. Seleziona un prezzo di riferimento, poi calcola i livelli sopra e sotto di esso usando la spaziatura che hai scelto — su base percentuale (modalità **Percentual**) o a passi di valore fisso. I livelli sopra la base vengono tracciati come resistenza, quelli sotto come supporto, e una linea zero segna l'ancoraggio di riferimento stesso. Risponde alla domanda "quanto si è mosso il prezzo dal suo riferimento, e dove sono i prossimi livelli strutturati?"

[SCREENSHOT: Grafico intraday con Price Movement Levels applicato — la linea zero al prezzo di riferimento della sessione con livelli etichettati in percentuale impilati sopra (colore resistenza) e sotto (colore supporto), con il prezzo che scambia tra il primo e il secondo livello superiore | dc-it-price-movement-levels-01.png]

## Quando usarlo

- Vuoi identificare i livelli di espansione intraday — quanto si è allungato il movimento di oggi dalla sua base.
- Vuoi zone di supporto e resistenza tracciate automaticamente a intervalli costanti invece di prezzi scelti a mano.
- Segui il movimento del prezzo su base percentuale, per esempio su strumenti i cui movimenti giornalieri si discutono comunemente in percentuale.
- Vuoi aree di reazione strutturate per profit target a scaglioni — alleggerendo la posizione a ogni livello successivo.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Price Movement Levels** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** (impostazioni) accanto all'indicatore.
4. Imposta **Level based on** sul prezzo di riferimento che preferisci — per esempio l'**Open** della sessione come ancoraggio per il day trading.
5. Imposta **Step mode** su **Percentual** e scegli uno **Step value** che dia una spaziatura utilizzabile sul tuo strumento; allarga il passo se la griglia affolla il grafico.
6. Assegna a **Support Line**, **Resistance Line** e **Zero Line** colori distinti così i tre ruoli si leggono all'istante, poi applica.

[SCREENSHOT: Finestra delle impostazioni di Price Movement Levels che mostra le opzioni Chart Area, le impostazioni General (Days to load, Level based on, Step mode, Step value, Font size, Text color, Minimum levels) e i gruppi Support Line, Resistance Line, Zero Line e Custom Time Session | dc-it-price-movement-levels-02.png]

## Come leggerlo

L'indicatore lavora con una logica in cinque passaggi: seleziona il prezzo base, calcola i livelli usando la spaziatura scelta, visualizza i livelli positivi come resistenza, quelli negativi come supporto, e segna l'ancoraggio di riferimento con la linea zero.

- **La linea zero è il tuo ancoraggio di sessione.** Prezzo sopra di essa significa mercato in positivo netto rispetto al riferimento; sotto, in negativo netto. Attraversamenti ripetuti della linea zero segnalano una giornata rotazionale intorno all'ancoraggio.
- **Ogni livello è una tappa a scaglioni.** In un trend, il prezzo tende a muoversi di livello in livello; uno stallo su un livello è il primo segnale che l'espansione sta rallentando, e una rottura netta sposta l'attenzione al livello successivo della griglia.
- **La distanza dallo zero misura l'allungo.** Più il prezzo scambia lontano dal riferimento, più il movimento è esteso — i livelli più profondi della griglia sono aree naturali dove stringere il rischio o prendere profitto, piuttosto che aprire nuovi ingressi.
- **Passi percentuali o fissi cambiano il significato.** La spaziatura Percentual mantiene la griglia proporzionale tra strumenti e regimi di prezzo; i passi fissi corrispondono a distanze concrete in punti/tick, adatte a strumenti con un noto comportamento sui numeri tondi.

## Riferimento impostazioni

Raggruppate come nella finestra delle impostazioni.

### Chart Area

| Impostazione | Cosa fa |
|---|---|
| **Horizontal** | Disegna i livelli sul grafico dei prezzi principale. |
| **Vertical** | Visualizza i livelli in verticale, dove supportato. |
| **Panel** | Seleziona dove appaiono i livelli. |

### General Settings

| Impostazione | Cosa fa |
|---|---|
| **Days to load** | Numero di sessioni passate usate per calcolare e visualizzare i livelli. |
| **Level based on** | Prezzo di riferimento a cui è ancorata la griglia (per esempio **Open** o **Close**). |
| **Step mode** | Metodo di spaziatura: **Percentual** (su base percentuale) o passi di valore fisso. |
| **Step value** | Spaziatura tra un livello e l'altro. |
| **Font size** | Dimensione delle etichette percentuali. |
| **Text color** | Colore delle etichette dei livelli. |
| **Minimum levels** | Numero minimo di livelli tracciati sopra e sotto la base. |

### Support Line

| Impostazione | Cosa fa |
|---|---|
| **Color / Style / Width** | Formattazione dei livelli inferiori (supporto). Gli stili includono continuo e tratteggiato. |

### Resistance Line

| Impostazione | Cosa fa |
|---|---|
| **Color / Style / Width** | Formattazione dei livelli superiori (resistenza). |

### Zero Line

| Impostazione | Cosa fa |
|---|---|
| **Color / Style / Width** | Formattazione del livello di riferimento base (0%). |

### Custom Time Session

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Limita il calcolo a una specifica finestra di sessione. |
| **Ini Time / End Time** | Inizio e fine della finestra di sessione, nel fuso orario dell'exchange. |

## Suggerimenti ed errori comuni

- **Scegli l'ancoraggio con criterio.** Una griglia basata sull'**Open** risponde a "quanta strada abbiamo fatto oggi"; una griglia basata sul **Close** inquadra il movimento rispetto al settlement di ieri. Le due griglie possono trovarsi a prezzi molto diversi — sappi quale domanda stai facendo.
- **Calibra Step value sulla volatilità dello strumento.** Un passo che produce cinque livelli al giorno su uno strumento può produrne cinquanta su un altro. Se il prezzo attraversa più livelli per barra, la griglia è troppo fitta per essere utile.
- **Usa Minimum levels per garantire la copertura.** Nelle giornate tranquille una griglia rada può lasciare il prezzo senza livelli visibili sopra di sé; l'impostazione **Minimum levels** assicura che la mappa si estenda abbastanza in entrambe le direzioni.
- **Allinea la finestra di sessione.** Per i futures, attiva la **Custom Time Session** e imposta la finestra nel fuso orario dell'exchange così il prezzo di riferimento proviene dalla sessione in cui operi — una finestra disallineata sposta silenziosamente l'intera griglia. Vedi [[understanding-market-structure-sessions]].
- **Le griglie segnano struttura, non segnali.** Livelli a spaziatura fissa a volte coincideranno con veri prezzi di reazione e a volte no; combinali con riferimenti basati sul volume come [[important-levels]] prima di trattare un livello della griglia come operabile.

## Articoli correlati

- [[adr-target]]
- [[absolute-levels]]
- [[important-levels]]
- [[pivot-points]]
- [[different-types-of-input]]
- [[indicator-layout]]