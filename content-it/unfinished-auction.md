---
title: "Unfinished Auction"
slug: "unfinished-auction"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Riferimento per l'indicatore Unfinished Auction: come rileva massimi e minimi dove l'asta non si è completata, e ogni impostazione per filtrarli ed estenderli."
keywords: ["asta incompiuta", "affari in sospeso", "asta finita", "bad high", "bad low", "anomalia dell'asta", "unfinished auktion", "zero stampe sul massimo"]
source_hash: "3eead02216946b22"
ai_translated: true
source_hash: "3eead02216946b22"
---
L'indicatore Unfinished Auction trova massimi e minimi dove l'asta del mercato non si è completata — estremi raggiunti senza che l'aggressione del lato opposto si manifestasse — e li marca con rettangoli sul tuo grafico. Questi livelli rappresentano affari in sospeso: nella teoria dell'asta, il prezzo torna frequentemente a rivisitarli.

Questo articolo copre l'indicatore in sé. Per la teoria sottostante delle aste finite e incompiute, vedi [[understanding-auction-theory]].

## Cos'è

Un'asta finita si verifica quando il prezzo raggiunge un estremo dove partecipano sia compratori aggressivi che venditori aggressivi — il mercato ha esplorato completamente il livello. Un'asta incompiuta si verifica quando un estremo viene raggiunto senza la presenza dell'aggressione del lato opposto: per esempio, un massimo che mostra 60 venditori aggressivi ma zero compratori aggressivi. Quell'estremo non è mai stato testato correttamente, e potrebbe attirare una futura rivisitazione.

Tecnicamente, l'indicatore va a caccia di anomalie sugli estremi delle barre. Normalmente il massimo di una candela mostra 0 Bid con contratti Ask, e il suo minimo mostra contratti Bid con 0 Ask. Quando questo pattern si rompe — contratti Bid stampati su un massimo, o contratti Ask stampati su un minimo — l'indicatore mostra un rettangolo sull'anomalia.

Passa il mouse sulle celle bid×ask nel footprint interattivo qui sotto per vedere quella struttura con i tuoi occhi — nota come gli estremi di una barra normalmente stampano zero su un lato:

[WIDGET: footprint-lab]

## Quando usarlo

- Per costruire una mappa di massimi e minimi incompiuti che potrebbero agire da magneti per future rivisitazioni del prezzo.
- Per giudicare se l'estremo di uno swing è stato un'asta completata (più sicura da negoziare in controtendenza) o incompiuta (probabilmente destinata a essere ritestata).
- Per combinare le evidenze di completamento dell'asta con la tua lettura del footprint — vedi [[reading-a-footprint]].
- Per tracciare come si comporta il prezzo quando torna a riparare gli affari in sospeso.

## Avvio rapido

1. Aggiungi **Unfinished Auction** al tuo grafico.
2. Imposta **Days to Load** per controllare quanta storia viene scansionata e visualizzata.
3. Mantieni **Show rectangle** abilitato e scegli colori distinti per **Color Bad High** e **Color Bad Low** così i due tipi di anomalia sono facili da separare.
4. Se il grafico diventa affollato, usa le impostazioni di filtro in modalità manuale per richiedere un volume minimo prima che un'anomalia venga evidenziata.

[SCREENSHOT: Un grafico futures con l'indicatore Unfinished Auction che mostra un rettangolo su uno swing high marcato come bad high, in un colore contrastante rispetto a un rettangolo bad-low su uno swing low sottostante | dc-it-unfinished-auction-01.png]

## Come leggerlo

Un rettangolo su un massimo (un bad high) significa che l'asta al rialzo è terminata senza compratori aggressivi partecipanti all'estremo — il mercato non ha finito di esplorare prezzi più alti lì. Un rettangolo su un minimo (un bad low) è il caso speculare. In entrambe le situazioni il livello è un candidato per una rivisitazione: molti trader dell'asta si aspettano che il prezzo torni, tocchi il livello e completi l'asta prima che il mercato prosegua.

Tratta questi livelli come punti di riferimento piuttosto che come trade automatici. Un massimo incompiuto sopra il mercato è un motivo per essere cauti sugli short aggressivi verso quell'area, e un candidato come obiettivo per i long; una volta che il livello è stato rivisitato e riparato, il suo effetto magnete è esaurito.

## Riferimento delle impostazioni

### General

| Impostazione | Cosa fa |
|---|---|
| **Days to Load** | Numero di giorni storici scansionati e visualizzati. |
| **Line Width** | Spessore della linea di divisione del rettangolo. |
| **Color Bad High** / **Color Bad Low** | Colori separati per differenziare le anomalie sui massimi da quelle sui minimi. |
| **Show rectangle** | Attiva/disattiva la visibilità del rettangolo. |
| **Show background** | Attiva/disattiva lo sfondo riempito dell'area marcata. |
| **Opacity** | Trasparenza del riempimento dello sfondo. |

### Filter

La modalità manuale abilita il filtraggio per volume minimo, così solo le anomalie con volume significativo vengono evidenziate. Usala su strumenti attivi dove piccole stampe agli estremi inonderebbero altrimenti il grafico.

### Extend

Controlla l'estensione delle linee dalle anomalie rilevate:

- Estendi le linee dall'anomalia in avanti nel tempo.
- Le opzioni di reset giornaliero fermano le estensioni a fine giornata.
- I controlli di intersezione con le ombre delle candele decidono come un tocco da parte dello stoppino di una candela interagisce con la linea estesa (e la termina).

[SCREENSHOT: La finestra delle impostazioni di Unfinished Auction che mostra la sezione General con Days to Load, Line Width, Color Bad High, Color Bad Low, Show rectangle, Show background e Opacity | dc-it-unfinished-auction-02.png]

## Suggerimenti ed errori comuni

- **Filtra per volume sui contratti liquidi.** Senza un filtro di volume minimo, stampe minori agli estremi generano anomalie che portano poca informazione.
- **Incompiuta non significa immediata.** La rivisitazione può arrivare molte barre — o sessioni — dopo; usa **Days to Load** e le impostazioni di estensione per tenere in vista i livelli più vecchi.
- **Distingui i livelli riparati.** Una volta che il prezzo è tornato su un estremo incompiuto, l'asta lì è completa; non continuare a negoziare quel livello come un magnete.
- **I colori sono la tua lettura più veloce.** Mantenere **Color Bad High** e **Color Bad Low** chiaramente distinti rende il grafico leggibile a colpo d'occhio nei mercati veloci.

## Articoli correlati

- [[understanding-auction-theory]]
- [[auction-gap-tracker]]
- [[reading-a-footprint]]
- [[deep-print]]
- [[different-types-of-input]]
- [[indicator-layout]]