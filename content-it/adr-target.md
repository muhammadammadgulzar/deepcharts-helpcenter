---
title: "Average Daily Range Target (ADR Target)"
slug: "adr-target"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Proietta target di prezzo intraday dal range medio giornaliero delle sessioni recenti, così puoi impostare take profit fondati statisticamente e individuare le zone di esaurimento."
keywords: ["ADR", "ADR target", "range medio giornaliero", "proiezione range giornaliero", "target di range", "target intraday", "target di espansione", "indicatore range medio"]
source_hash: "470e5baa1b0e0804"
ai_translated: true
source_hash: "470e5baa1b0e0804"
---
L'Average Daily Range Target (ADR Target) calcola il movimento di prezzo medio — dal massimo al minimo — di uno strumento su un numero prestabilito di giorni e proietta quel range in avanti come potenziali target di prezzo intraday. Invece di indovinare quanto lontano possa arrivare il movimento di oggi, lo misuri rispetto a quello che lo strumento ha effettivamente fatto di recente.

Questo lo rende un righello di volatilità: quando il prezzo ha già coperto la sua distanza giornaliera tipica, le probabilità di ulteriore espansione calano, e i tuoi take profit e le decisioni di rischio possono tenerne conto.

## Che cos'è

ADR Target è un indicatore di livelli statistici. Fa la media del range massimo-minimo degli ultimi N periodi (barre giornaliere di default, con opzioni settimanali e mensili) e disegna quel range atteso sul grafico come livelli target etichettati. Risponde alle domande "quanto si muove di solito questo mercato in un giorno?" e "quanta parte di quel movimento è già avvenuta?"

[SCREENSHOT: Finestra del grafico con ADR Target applicato — candele intraday con i livelli target ADR proiettati e le loro etichette di testo visibili sul grafico, con il prezzo circa a metà strada verso il target superiore | dc-it-adr-target-01.png]

## Quando usarlo

- Vuoi target di espansione giornaliera realistici invece di obiettivi arbitrari a numeri tondi.
- Vuoi stimare le zone di esaurimento intraday — aree in cui la giornata ha già percorso la sua distanza statisticamente tipica.
- Gestisci i take profit con le statistiche: prendi profitto dentro il range medio invece di sperare in una giornata anomala.
- Tendi a fare overtrading a fine giornata — l'ADR mostra quando il mercato ha probabilmente esaurito il suo budget di volatilità tipico.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **ADR Target** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto all'indicatore.
4. Imposta **Length Type** su **Daily** — questo calcola l'ADR dalle barre giornaliere, la lettura standard.
5. Imposta **Length** su **10** in modo che la media usi gli ultimi 10 giorni di negoziazione.
6. Regola **Font Size**, **Text Align**, **Background** e **Text Color** nelle impostazioni di visualizzazione finché le etichette non risultano leggibili con la tua combinazione di colori, poi applica.

[SCREENSHOT: Finestra delle impostazioni di ADR Target con il menu a discesa Length Type aperto con le opzioni Daily, Weekly e Monthly, il campo Length impostato a 10 e sotto le impostazioni di visualizzazione (Font Size, Text Align, Background, Text Color) | dc-it-adr-target-02.png]

## Come leggerlo

I livelli proiettati rappresentano la distanza che lo strumento copre in una giornata media. [CONFIRM: which price the ADR targets are projected from — session open, current day high/low, or previous close]

- **Prezzo ben dentro l'ADR:** la giornata ha ancora spazio statistico per espandersi. Target di continuazione del trend entro il range residuo sono ragionevoli.
- **Prezzo che si avvicina all'estensione ADR completa:** la giornata ha percorso la sua distanza tipica. È una zona naturale di presa di profitto e un pessimo posto per aprire nuovi trade di breakout — la maggior parte delle giornate non supera il proprio range medio.
- **Prezzo che supera l'ADR:** sei in una sessione anomala, di solito guidata da notizie o da un vero cambio di regime. Tratta i livelli come informativi, non come un tetto invalicabile.

Il Length Type cambia l'orizzonte: **Weekly** e **Monthly** mediano il range delle barre settimanali e mensili, producendo target più ampi adatti alla pianificazione swing piuttosto che all'esecuzione intraday.

## Riferimento impostazioni

Raggruppate come nella finestra delle impostazioni.

### Calculation

| Impostazione | Che cosa fa |
|---|---|
| **Length Type** | Dimensione della barra usata per la media del range: **Daily** (calcola l'ADR usando barre giornaliere), **Weekly** o **Monthly**. |
| **Length** | Numero di periodi precedenti usati per calcolare il range medio. Esempio: **Length = 10** con Daily usa gli ultimi 10 giorni di negoziazione. |

### Plot Settings

| Impostazione | Che cosa fa |
|---|---|
| **Font Size** | Regola la dimensione del testo delle etichette ADR sul grafico. |
| **Text Align** | Allinea le etichette a sinistra (**Left**) o a destra (**Right**) del livello. |
| **Background** | Colore di sfondo dell'etichetta. |
| **Text Color** | Colore del testo dell'etichetta. |

## Suggerimenti ed errori comuni

- **Adatta Length al regime corrente.** Un Length breve (5–10 giorni) si adatta rapidamente dopo un cambiamento di volatilità; un Length più lungo smussa le giornate anomale legate a notizie. Se il mercato ha cambiato carattere di recente, una media lunga resterà indietro rispetto alla realtà.
- **L'ADR è una probabilità, non un muro.** Il prezzo supera il proprio range medio nelle giornate anomale per definizione. Non andare mai contro un movimento forte solo perché l'ADR è "pieno" — combinalo con la struttura e con la conferma dell'orderflow.
- **Non usare i target Weekly/Monthly per lo scalping.** Descrivono range su più giorni; su un grafico intraday resteranno lontani dal prezzo e ti tenteranno con target sovradimensionati.
- **Controlla il contesto della sessione.** Le sessioni festive e le mezze giornate comprimono i range e trascinano in basso la media per i giorni successivi. Vedi [[understanding-market-structure-sessions]] per come le sessioni influenzano i numeri.

## Articoli correlati

- [[atr]]
- [[standard-deviation]]
- [[understanding-market-structure-sessions]]
- [[different-types-of-input]]
- [[indicator-layout]]