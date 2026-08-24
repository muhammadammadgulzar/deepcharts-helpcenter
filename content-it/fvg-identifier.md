---
title: "FVG Identifier"
slug: "fvg-identifier"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Rileva ed evidenzia automaticamente i Fair Value Gap (FVG) sul grafico, con filtri sulla dimensione in tick, regole di mitigazione e controlli di estensione."
keywords: ["fvg identifier", "fair value gap", "fvg", "zona di squilibrio", "mitigazione", "smart money concepts", "indicatore fvg", "fair value gaps"]
source_hash: "01bf1d90a35b0b3a"
ai_translated: true
source_hash: "01bf1d90a35b0b3a"
---
L'FVG Identifier rileva ed evidenzia automaticamente i Fair Value Gap (FVG) sul grafico. Un Fair Value Gap si forma quando il prezzo si muove in modo così aggressivo da lasciare uno squilibrio tra le candele — una fascia di prezzi che è stata saltata invece di essere scambiata in entrambe le direzioni. Queste zone agiscono spesso come future aree di reazione o mitigazione, ed è per questo che molti trader le tengono marcate.

Invece di cercare a occhio le sequenze di tre candele, l'indicatore trova i gap qualificati, li ombreggia, li estende in avanti e può rimuoverli automaticamente una volta che il prezzo vi è rientrato.

## Cos'è

L'FVG Identifier risponde alla domanda "dove il prezzo si è mosso così velocemente da lasciare uno squilibrio, e quali di queste zone sono ancora aperte?" Quando un gap tra le candele soddisfa la tua dimensione minima (in tick), l'indicatore disegna una zona ombreggiata su quella fascia di prezzo e la estende verso destra finché la tua regola di mitigazione non viene soddisfatta — per esempio, quando il prezzo entra nella zona con un'ombra o ne riempie una percentuale prestabilita.

Gli FVG vengono comunemente letti come impronte di un orderflow aggressivo e unidirezionale: il mercato si è mosso così in fretta che in quella fascia di prezzo non c'è mai stato uno scambio bidirezionale, e il prezzo spesso ritorna più tardi per "riequilibrarla".

## Quando usarlo

- Per marcare potenziali zone di reazione: gli FVG aperti sono aree popolari per ingressi in pullback nella direzione del movimento impulsivo originale.
- Per tracciare la mitigazione: l'indicatore può rimuovere o aggiornare le zone man mano che il prezzo vi rientra, mantenendo sul grafico solo gli squilibri ancora rilevanti.
- Per filtrare la significatività: i limiti sulla dimensione in tick ti permettono di ignorare i micro-gap e di limitare quelli fuori misura, così restano solo le zone effettivamente tradabili.
- Per integrare l'analisi dell'orderflow — gli FVG derivati dalla price action spesso coincidono con i segnali di squilibrio degli strumenti basati sul volume come [[imbalance-tracker]].

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a forma di grafico a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "FVG Identifier" e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprirne le impostazioni. Imposta **Min num ticks** a un valore abbastanza alto da escludere il normale rumore tra una barra e l'altra sul tuo timeframe — parti da un valore piccolo e alzalo finché non restano solo zone pulite.
5. Scegli se le zone devono sparire al tocco di un'ombra (**Remove Line On Shadow Triggered**) o solo dopo un riempimento percentuale (**% breakout**), a seconda di quanto è rigorosa la tua definizione di mitigazione.

[SCREENSHOT: Un grafico dei prezzi con l'FVG Identifier attivo — due zone FVG ombreggiate che si estendono a destra da movimenti impulsivi, una ancora aperta e una in procinto di essere toccata da un pullback | dc-it-fvg-identifier-01.png]

## Come leggerlo

- **Un FVG aperto sotto il prezzo** (lasciato da un movimento aggressivo al rialzo) è una potenziale zona di domanda/reazione su un pullback; **un FVG aperto sopra il prezzo** è il caso speculare per i movimenti al ribasso.
- **Il primo tocco è quello che conta di più.** Il playbook più comune osserva il primo ritorno in una zona fresca; una zona in cui il prezzo è entrato ripetutamente ha già completato la maggior parte del suo riequilibrio.
- **La mitigazione è la tua regola di pulizia.** Con una regola rigida (qualsiasi ombra rimuove la zona) il grafico resta minimale; con una regola a riempimento percentuale, le zone parzialmente riempite sopravvivono e puoi tradare la parte rimanente non riempita.
- **La dimensione è informazione.** I gap molto piccoli sono per lo più rumore — è a questo che serve **Min num ticks** — mentre i gap estremamente grandi derivano spesso da eventi di news e si comportano in modo meno prevedibile: ecco perché esiste il limite **Max num ticks**.

## Riferimento impostazioni

### Display

| Impostazione | Cosa fa |
|---|---|
| **Horizontal** | Disegna le evidenziazioni degli FVG direttamente sul grafico dei prezzi. |
| **Vertical** | Visualizza l'indicatore in verticale, dove supportato. |
| **Panel** | Seleziona quale pannello del grafico riceve l'overlay. |

### General Parameters

| Impostazione | Cosa fa |
|---|---|
| **Min num ticks** | La dimensione minima, in tick, richiesta perché un gap sia considerato un FVG valido. Valori più piccoli rilevano più gap; valori più grandi filtrano gli squilibri minori. |
| **Max num ticks** | La dimensione massima del gap ammessa per qualificarsi come FVG. Filtra i movimenti eccessivamente grandi. |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Line Width** | Spessore dei bordi delle zone FVG. |
| **Color** | Colore dell'area FVG evidenziata. |
| **Back Opacity** | Trasparenza dello sfondo della zona — più alto è più pieno, più basso è più trasparente. |

### Extension

| Impostazione | Cosa fa |
|---|---|
| **Reset Start Day** | Reimposta il tracciamento degli FVG all'inizio di ogni giornata di trading. |
| **Remove Line On Shadow Triggered** | Rimuove una zona FVG non appena il prezzo vi entra con un'ombra. |
| **Max bars extension** | Limita per quante barre una zona si estende in avanti. 0 = si estende indefinitamente. |
| **% breakout** | La percentuale del gap che deve essere riempita perché la zona sia considerata mitigata. |

[SCREENSHOT: La finestra delle impostazioni dell'FVG Identifier che mostra i General Parameters (Min num ticks, Max num ticks), i Plot Settings e il gruppo Extension con Reset Start Day, Remove Line On Shadow Triggered, Max bars extension e % breakout | dc-it-fvg-identifier-02.png]

## Suggerimenti ed errori comuni

- **Non usare un minimo di 0 tick sui grafici veloci.** I grafici sui futures a basso timeframe producono in continuazione minuscoli squilibri; senza un **Min num ticks** sensato il grafico diventa carta da parati.
- **Decidi cosa significa "mitigato" prima di tradarlo.** Una regola al tocco d'ombra e una regola al 50% di riempimento producono grafici diversi e trade diversi — imposta **Remove Line On Shadow Triggered** e **% breakout** in base al tuo playbook, non ai default dell'ultimo tutorial che hai guardato.
- **Usa Reset Start Day in modo deliberato.** Attivarlo mantiene il grafico concentrato sugli squilibri di oggi; disattivarlo conserva le zone multi-giorno, che contano di più sui timeframe superiori.
- **Gli FVG sono un proxy di price action per lo squilibrio, non una sua prova.** Gli strumenti basati sul volume misurano l'aggressività direttamente; quando un FVG e uno squilibrio di volume coincidono, la zona merita più peso. Vedi [[understanding-auction-theory]] per la logica di fondo.

## Articoli correlati

- [[gap-detector]]
- [[imbalance-tracker]]
- [[understanding-auction-theory]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]