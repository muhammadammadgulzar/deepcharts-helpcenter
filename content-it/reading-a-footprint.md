---
title: "Leggere un footprint: esempi svolti"
slug: "reading-a-footprint"
category: "Concepts"
subcategory: ""
type: "concept"
difficulty: "intermediate"
time: "8 min read"
description: "Come leggere una barra footprint bid/ask — squilibri diagonali, squilibri impilati, aste incompiute e assorbimento — con tre esempi svolti."
keywords: ["footprint", "grafico footprint", "footprint bid ask", "squilibrio diagonale", "squilibri impilati", "asta incompiuta", "zero print", "assorbimento footprint", "come leggere il footprint", "grafico order flow"]
source_hash: "168d4f72eab8e480"
ai_translated: true
source_hash: "168d4f72eab8e480"
---
Un footprint prende la candela che già conosci e la apre: invece di un solo corpo e due ombre, vedi quanto è stato scambiato a ogni prezzo dentro la barra, suddiviso per lato aggressivo. È la vista di un mercato alla massima risoluzione che ancora sta su un grafico — e premia una lettura strutturata molto più del semplice fissarlo.

Questo articolo presuppone che tu sappia cosa significano bid, ask, aggressore e delta; in caso contrario, leggi prima [[orderflow-101]]. Tutto quello che trovi qui è concetto e convenzione — l'indicatore di DeepCharts che disegna i footprint è trattato in [[deep-print]].

## L'idea in un paragrafo

Una candela è il punteggio finale di una battaglia; un footprint è la cronaca azione per azione. Per ogni prezzo dentro la barra mostra due numeri: quanti contratti i venditori hanno colpito sul bid, e quanti i compratori hanno prelevato dall'ask. Immagina una casa d'aste dove, invece di conoscere solo il prezzo finale di aggiudicazione, ottieni il registro completo — a ogni livello di bid, quanti lotti hanno scaricato i venditori impazienti e quanti ne hanno afferrati i compratori impazienti. Leggere un footprint significa leggere quel registro alla ricerca di pattern: dove una parte ha travolto l'altra, dove un grande attore passivo ha assorbito in silenzio tutto quello che gli veniva lanciato contro, e dove un movimento è rimasto senza partecipanti.

## Perché interessa ai trader

- **Mostra la convinzione al prezzo esatto.** Un livello di supporto che "tiene" dice poco; un livello di supporto dove i venditori aggressivi hanno scaricato pesantemente e il prezzo si è rifiutato di scendere è un evento misurabile.
- **Espone il perdente in tempo reale.** Gli squilibri mostrano quale parte sta venendo travolta in questo momento, barra per barra, prezzo per prezzo.
- **Rivela ciò che la candela nasconde.** Due hammer identici possono contenere storie opposte — uno che assorbe i venditori sul minimo, l'altro che semplicemente li esaurisce. Il footprint li distingue.
- **Valuta i tuoi livelli.** Se un breakout, un pullback o un livello del profilo meritano di essere tradati lo dicono i footprint stampati lì, non il livello in sé.

## Come funziona

### Anatomia di una barra footprint

Ogni riga di prezzo in un footprint bid/ask mostra `bid volume × ask volume` — a sinistra i contratti scambiati sul bid (vendite aggressive), a destra i contratti scambiati sull'ask (acquisti aggressivi). Sotto o accanto alla barra trovi in genere i totali della barra: volume e delta (volume scambiato sull'ask meno volume scambiato sul bid). L'intensità del colore di solito scala con la dimensione, così le righe pesanti risaltano a colpo d'occhio.

Esplora una barra dal vivo qui sotto — passa il mouse su qualsiasi cella bid × ask per decodificarla, e osserva la lettura del delta per barra mentre procedi.

[WIDGET: footprint-lab]

### Squilibri diagonali

Ecco la parte che i principianti sbagliano: il volume bid e il volume ask allo *stesso* prezzo non sono direttamente confrontabili, perché non hanno mai competuto tra loro. Quando l'ask a 5.300,25 viene prelevato, il bid che viene colpito è a 5.300,00 — un tick più in basso. Per questo gli squilibri del footprint si calcolano **in diagonale**: il volume ask a un prezzo contro il volume bid un tick più in basso. Quando la parte vincente supera l'altra di un rapporto configurato (il 300%, cioè 3:1, è una convenzione comune; la soglia è configurabile nell'indicatore), la cella viene contrassegnata come squilibrio — compratori che sopraffanno i venditori su quella diagonale, o il contrario.

Un singolo squilibrio è rumore. Gli **squilibri impilati** — di solito tre o più su prezzi consecutivi — marcano una zona dove una parte è stata travolta, e quelle zone spesso agiscono da supporto (pile lato acquisti) o resistenza (pile lato vendite) a una rivisitazione.

### Completamento dell'asta agli estremi

La cima e il fondo di una barra o di uno swing portano un segnale proprio. Per convenzione, un massimo *concluso* stampa `0 × n` proprio in cima — nessuno era rimasto a comprare sull'estremo, gli acquisti si sono esauriti in modo naturale. Se il prezzo estremo mostra invece volume su **entrambi** i lati (nessuno zero), i compratori erano ancora attivi proprio sul massimo quando il prezzo si è girato: un'**asta incompiuta**. L'aspettativa comune è che il mercato rivisiti quei livelli per finire il lavoro — una calamita, non una certezza. La stessa logica si rispecchia sui minimi con la colonna ask.

### Sforzo contro risultato

La domanda più importante sul footprint non è "chi è stato aggressivo?" ma "che cosa ha ottenuto la sua aggressività?" Un volume pesante lato ask che non riesce a far salire il prezzo significa che qualcuno di grosso sta vendendo passivamente contro i compratori — **assorbimento** (vedi [[understanding-icebergs-absorption]]). Un volume che si riduce mentre il prezzo preme verso un nuovo estremo è **esaurimento**. Entrambe sono letture sforzo-contro-risultato, ed entrambe contano di più in posizioni significative — bordi della value area, livelli della sessione precedente, VWAP — che in mezzo al nulla.

### La matematica (facoltativa)

Per uno squilibrio diagonale con soglia *r* (ad es. 3):

```
buy imbalance at price P:  ask_volume(P) ≥ r × bid_volume(P − 1 tick)
sell imbalance at price P: bid_volume(P) ≥ r × ask_volume(P + 1 tick)
```

Delta della barra = Σ volume ask − Σ volume bid su tutti i prezzi della barra. Soglie esatte, filtri di volume minimo e definizioni delle pile sono impostazioni dell'indicatore, non leggi — vedi [[deep-print]].

## Vederlo in DeepCharts

- [[deep-print|Deep Print]] — l'indicatore footprint di DeepCharts.
- [[quick-chart-templates]] — il preset **OF-VP** (ogni candela come Volume Profile a sé) e il preset **OF-B/A** (colonne bid/ask con gli squilibri in grassetto e intensità di colore) caricano un footprint pronto all'uso in un clic.
- [[imbalance-tracker]] e [[imbalance-rejector]] — il rilevamento degli squilibri come studi autonomi.
- [[unfinished-auction|Unfinished Auction]] — segnala automaticamente gli estremi con asta incompiuta.
- [[ratio-highlight]] — evidenzia i ratio bid/ask degni di nota.
- [[deep-delta]] e [[delta-cumulative-candlestick]] — il contesto di delta su cui leggere i footprint.
- [[adv-time-and-sales|Advanced Time And Sales]] — il tape grezzo da cui il footprint viene aggregato.

## Esempio svolto

Tre letture brevi, tutte con numeri ES illustrativi.

### Esempio 1: breakout con squilibri impilati

Il prezzo rompe un massimo del mattino a 5.310,00. La barra del breakout stampa squilibri diagonali lato acquisti su quattro prezzi consecutivi da 5.310,25 a 5.311,00, delta +1.800, e chiude sul massimo. Lettura: i compratori aggressivi hanno sopraffatto i venditori attraverso il livello e non sono stati assorbiti — acquisti d'iniziativa con follow-through. La zona impilata a 5.310,25–5.311,00 è ora la zona di pullback di interesse; restare sopra di essa mantiene il breakout in salute.

[SCREENSHOT: Barre footprint attorno a un breakout con quattro squilibri buy impilati evidenziati su celle diagonali consecutive, lettura del delta positivo sotto la barra e la zona impilata marcata come supporto futuro | dc-it-reading-a-footprint-01.png]

### Esempio 2: assorbimento sul massimo

Più tardi il prezzo spinge fino a 5.318,00. La barra stampa il volume lato ask più pesante della giornata a 5.317,75–5.318,00 — compratori che prelevano con forza — eppure un delta di +2.400 produce una chiusura nel *mezzo* della barra, e la barra successiva non riesce a scambiare sopra 5.318,00. Lettura: massimo sforzo d'acquisto, nessun risultato. Un venditore passivo ha assorbito i compratori sui massimi. Quando la barra seguente passa a squilibri lato vendite, l'assorbimento è confermato e la storia dell'inversione comincia — la stessa sequenza descritta in [[orderflow-101]], ora visibile cella per cella.

### Esempio 3: asta incompiuta sul minimo

Durante il selloff pomeridiano, il minimo di swing a 5.296,50 stampa `41 × 17` — volume sia sul bid sia sull'ask al prezzo estremo, nessuno zero. Lettura: l'asta sul minimo non si è conclusa; i compratori erano ancora attivi quando il prezzo è rimbalzato. Molti trader di footprint terranno 5.296,50 sul grafico come candidato a una rivisitazione e tratteranno ogni successivo avvicinamento come un evento pianificato, non come una sorpresa. Se il minimo avesse stampato `0 × 22`, invece, le vendite si sarebbero esaurite in modo naturale e il livello non avrebbe conti in sospeso.

[SCREENSHOT: Un footprint su un minimo di swing con la riga del prezzo estremo che mostra volume sia sul bid sia sull'ask, annotata "asta incompiuta — nessuno zero print", più una successiva rivisitazione dello stesso prezzo marcata con una freccia | dc-it-reading-a-footprint-02.png]

## Letture errate comuni

- **Confrontare bid e ask allo stesso prezzo.** Gli squilibri sono diagonali. Il confronto sulla stessa riga inverte silenziosamente metà delle tue letture.
- **Tradare ogni squilibrio.** Gli squilibri si stampano di continuo. Significano qualcosa nelle posizioni che contano — livelli di sessione, bordi della value area, VWAP — e poco nel mezzo di una rotazione.
- **"Numero grande = segnale grande."** Il volume pesante è solo metà della frase; l'altra metà è cosa ha fatto il prezzo subito dopo. Sforzo senza risultato è un indizio di *inversione*, non di continuazione.
- **Leggere i footprint alla risoluzione sbagliata.** I footprint aggregano per barra, quindi tipo e dimensione della barra cambiano quello che vedi. Un pattern su un footprint a 5 minuti può non esistere su uno a 30 minuti.
- **Ignorare la qualità dei dati.** La classificazione bid/ask dipende dalla granularità del tuo feed — vedi [[orderflow-101]] e [[compatibility-guide]]. Leggi i pattern, non le cifre precise.

## Approfondisci

I footprint sono il microscopio; la teoria dell'asta è la mappa. [[understanding-auction-theory]] colloca squilibrio, assorbimento e conti in sospeso nel quadro balance/imbalance, e [[understanding-icebergs-absorption]] spiega come i grandi attori passivi nascondano gli ordini che stai leggendo. Quando sei pronto a configurare lo strumento vero e proprio, parti da [[deep-print]] o carica i preset OF da [[quick-chart-templates]]. I termini che non conosci sono raccolti nel [[glossary]].

## Articoli correlati

- [[orderflow-101]]
- [[deep-print]]
- [[quick-chart-templates]]
- [[understanding-auction-theory]]
- [[understanding-icebergs-absorption]]
- [[glossary]]