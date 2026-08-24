---
title: "Livelli importanti"
slug: "important-levels"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Traccia automaticamente massimi, minimi, aperture, chiusure, POC, value area e VWAP dei periodi giornalieri, settimanali e mensili precedenti come livelli di riferimento etichettati sul tuo grafico intraday."
keywords: ["livelli importanti", "livelli chiave", "massimo del giorno precedente", "minimo del giorno precedente", "PDH", "PDL", "chiusura precedente", "massimo minimo settimanale", "livello POC", "value area", "livello VWAP", "indicatore livelli"]
source_hash: "207a45bed4654139"
ai_translated: true
source_hash: "207a45bed4654139"
---
L'indicatore Important Levels evidenzia i prezzi di riferimento più significativi dei periodi precedenti direttamente sul tuo grafico intraday: massimi, minimi, aperture, chiusure, POC, value area, VWAP e medie, sui timeframe giornaliero, settimanale e mensile. Invece di disegnare e aggiornare una dozzina di linee orizzontali ogni mattina, attivi una sola volta i livelli che ti interessano e l'indicatore li mantiene aggiornati automaticamente.

Questi sono i prezzi che la maggior parte dei partecipanti osserva — il massimo e il minimo del giorno precedente, la chiusura della settimana scorsa, il POC mensile — il che li rende luoghi ricorrenti di reazioni, rotture e retest.

## Che cos'è

Important Levels è un indicatore automatico di livelli multi-timeframe pensato per i grafici intraday. Per ogni periodo attivato (giorno, settimana, mese) traccia le statistiche chiave del periodo precedente come linee etichettate e le mantiene aggiornate quando iniziano nuovi periodi. Risponde alla domanda "dove si trovano i prezzi di riferimento dei timeframe superiori rispetto al prezzo in questo momento?"

[SCREENSHOT: Grafico intraday con Important Levels applicato — linee orizzontali etichettate per massimo, minimo, chiusura, POC e VWAP del giorno precedente in colori distinti, con il prezzo che scambia tra il POC e il massimo del giorno precedente | dc-it-important-levels-01.png]

## Quando usarlo

- Prepari un piano di sessione e vuoi che i prezzi chiave di ieri, della settimana scorsa e del mese scorso siano segnati senza disegnare a mano.
- Fai trading su breakout e retest dei massimi/minimi precedenti — i luoghi di liquidità più osservati.
- Combini i livelli basati sul prezzo (massimo, minimo, apertura, chiusura) con quelli basati sul volume (POC, value area, VWAP) per trovare zone di confluenza.
- Segui diversi strumenti e non puoi mantenere livelli disegnati a mano su ogni grafico.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Important Levels** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto all'indicatore.
4. Nelle impostazioni di lunghezza, imposta **Days** su **1**, e **Weeks** e **Months** su **1** ciascuno — un periodo precedente per timeframe è più che sufficiente per iniziare.
5. Nella sezione dei livelli attivati, inizia con **High**, **Low**, **Close** e **POC** solo per il periodo giornaliero; aggiungi i livelli settimanali e mensili solo quando il grafico resta comunque leggibile.
6. Imposta **Plot Type** su **Label and Line** in modo che ogni linea abbia un nome, scegli colori distinti per ciascun tipo di livello, poi applica.

[SCREENSHOT: Finestra delle impostazioni di Important Levels con la sezione Length (Days, Weeks, Months, Skip Last), le Plot Settings con il menu a discesa Plot Type aperto (Label, Line, Label and Line), gli interruttori dei livelli per periodo (Average Value, Low, High, Open, Close, POC, Value Area, VWAP), le impostazioni dei colori e il menu a discesa Filter Time | dc-it-important-levels-02.png]

## Come leggerlo

- **Massimi e minimi precedenti sono calamite di liquidità.** Gli stop e gli ordini di breakout si concentrano oltre di essi, quindi aspettati un'accelerazione alla rottura e reazioni frequenti al primo test. Sono i livelli da avere segnati prima dell'apertura.
- **La chiusura e l'apertura precedenti definiscono il gap.** Un prezzo che scambia lontano dalla chiusura precedente significa un gap in apertura; molte strategie di sessione ruotano attorno alla domanda se quel gap si chiuda o si estenda.
- **POC e value area descrivono il valore accettato.** Il Point of Control del periodo precedente è dove è stato scambiato il maggior volume; la value area racchiude il grosso di quell'attività. Un prezzo che rientra in una vecchia value area tende a ruotarla per intero, mentre un rifiuto sul suo bordo segnala che il mercato sta trattando il vecchio valore come supporto o resistenza. Vedi [[understanding-volume-profile]] per il concetto di base.
- **I livelli VWAP hanno peso istituzionale.** Il VWAP di un periodo precedente è un prezzo medio di riferimento; le reazioni in quel punto spesso riflettono partecipanti che difendono o smontano posizioni attorno alla loro media. Vedi [[understanding-vwap]].
- **La confluenza è il vero segnale.** Un minimo settimanale precedente che coincide con il bordo della value area mensile è una zona molto più forte di ciascun livello preso da solo.

## Riferimento delle impostazioni

Raggruppate come nella finestra delle impostazioni.

### Length Settings

| Impostazione | Cosa fa |
|---|---|
| **Days** | Quanti giorni precedenti di livelli mostrare. |
| **Weeks** | Quante settimane precedenti di livelli mostrare. |
| **Months** | Quanti mesi precedenti di livelli mostrare. |
| **Skip Last** | Se attivata, esclude i valori del periodo corrente (ancora in formazione), così vengono tracciati solo i periodi completati. |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Font Size** | Dimensione del testo delle etichette dei livelli. |
| **Plot Type** | **Label** (solo testo), **Line** (solo linee orizzontali) o **Label and Line** (entrambi). |
| **Text Align** | Posizionamento delle etichette: **Left**, **Right**, **Current to Right** o **Current to Last**. |

### Livelli attivati (per periodo)

Per ogni timeframe — giornaliero, settimanale, mensile — puoi attivare singolarmente:

| Livello | Cosa segna |
|---|---|
| **Average Value** | Il livello di valore medio del periodo. |
| **Low / High** | Il minimo e il massimo del periodo. |
| **Open / Close** | I prezzi di apertura e chiusura del periodo. |
| **POC** | Il Point of Control del periodo — il prezzo con il volume scambiato più alto. |
| **Value Area** | I confini della value area del periodo. |
| **VWAP** | Il prezzo medio ponderato per il volume del periodo. |

### Color Settings

Colori personalizzabili per **Low**, **High**, **Open**, **Close**, **Mid Point**, **POC**, **Value Area** e **VWAP**.

### Filter Time

| Impostazione | Cosa fa |
|---|---|
| **Filter Time** | Sessione di trading usata per costruire i livelli: **None**, **ETH**, **RTH** o **Custom**. Con **Custom**, imposti gli orari di inizio e fine in base al fuso orario dell'exchange. |

> **Nota:** Il filtro di sessione cambia i livelli stessi, non solo la loro visualizzazione — un massimo del giorno precedente calcolato solo su RTH può differire notevolmente dal massimo dell'intera sessione (ETH). Scegli la sessione a cui la tua strategia fa effettivamente riferimento.

## Suggerimenti ed errori comuni

- **Attiva i livelli progressivamente.** Accendere ogni livello per ogni periodo crea un muro di linee. Inizia con i livelli giornalieri su cui fai davvero trading e aggiungi i livelli dei timeframe superiori solo dove si guadagnano il loro posto.
- **Usa il colore per codificare il timeframe.** Assegna a livelli giornalieri, settimanali e mensili famiglie di colori distinte, così sai all'istante quanto pesa un livello quando il prezzo vi si avvicina.
- **Decidi consapevolmente tra ETH e RTH.** I trader di futures di solito pianificano sui livelli RTH mentre il mercato scambia in ETH durante la notte; impostazioni di sessione non coerenti sono il motivo abituale per cui "il massimo precedente sembra sbagliato". Vedi [[understanding-market-structure-sessions]].
- **Usa Skip Last per evitare bersagli mobili.** Con il periodo corrente incluso, i livelli si spostano man mano che il periodo si sviluppa; attivando **Skip Last** la mappa resta ancorata ai periodi completati.

## Articoli correlati

- [[understanding-volume-profile]]
- [[understanding-vwap]]
- [[understanding-market-structure-sessions]]
- [[pivot-points]]
- [[different-types-of-input]]
- [[indicator-layout]]