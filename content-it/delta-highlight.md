---
title: "Delta % Highlight"
slug: "delta-highlight"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Contrassegna le candele la cui percentuale di delta raggiunge la soglia che hai impostato, così l'aggressione estrema a senso unico risalta subito sul grafico."
keywords: ["delta % highlight", "evidenziazione delta percentuale", "percentuale di delta", "evidenziare candele delta", "marcatore delta", "candele sbilanciate", "delta estremo"]
source_hash: "bdb1b8c03bce9a93"
ai_translated: true
source_hash: "bdb1b8c03bce9a93"
---
Delta % Highlight contrassegna sul tuo grafico le candele la cui percentuale di delta — la pressione in acquisto rispetto a quella in vendita in rapporto al volume della candela — raggiunge una soglia che definisci tu. Invece di controllare manualmente il delta di ogni barra, lasci che sia il grafico a segnalare le candele con un'aggressione significativa a senso unico.

È uno strumento di screening: non calcola nulla di nuovo, rende impossibili da ignorare le candele di orderflow estreme.

## Che cos'è

L'indicatore evidenzia le candele in cui la percentuale di delta soddisfa i tuoi criteri. Una candela in cui quasi tutto il volume è stato acquisto aggressivo viene contrassegnata con l'**Ask Color**; una candela dominata dalla vendita aggressiva viene contrassegnata con il **Bid Color**. Tutto ciò che sta nel mezzo resta senza marcatore, mantenendo il grafico pulito.

[SCREENSHOT: Finestra del grafico con Delta % Highlight applicato — una serie di candele ordinarie con due o tre candele visibilmente colorate con l'Ask color e una con il Bid color, che mostra come risaltano le candele con delta estremo | dc-it-delta-highlight-01.png]

## Quando usarlo

- Vuoi che le candele con squilibrio estremo vengano segnalate automaticamente mentre ti concentri sulla struttura.
- Rivedi le sessioni dopo la chiusura e hai bisogno di trovare rapidamente le candele a senso unico.
- Fai trading sui movimenti di iniziativa: una candela evidenziata che rompe un livello chiave mostra una partecipazione aggressiva genuina.
- Vai a caccia di esaurimenti: una candela con delta estremo che non riesce a proseguire è un segnale classico che l'aggressore è in trappola.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Delta % Highlight** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto all'indicatore.
4. Imposta **Min Value** su una soglia significativa — è la percentuale minima di delta che una candela deve raggiungere per essere contrassegnata. Parti abbastanza alto perché solo poche candele per sessione si qualifichino, poi affina verso il basso.
5. Lascia **Max Value** a **0** per disattivare il filtro massimo, così ogni candela sopra il minimo viene contrassegnata.
6. Scegli un **Bid Color** e un **Ask Color** che contrastino con le tue candele normali e imposta l'**Opacity** in modo che l'evidenziazione sia visibile senza nascondere la candela sottostante.

[SCREENSHOT: Finestra delle impostazioni di Delta % Highlight che mostra i campi Min Value e Max Value, i selettori Bid Color e Ask Color e il controllo Opacity | dc-it-delta-highlight-02.png]

## Come leggerlo

- **Candela con Ask color (delta % positivo):** i compratori aggressivi hanno dominato il volume della candela. All'interno di un trend è una conferma; contro una resistenza dopo un'estensione prolungata, può essere il climax di acquisto.
- **Candela con Bid color (delta % negativo):** hanno dominato i venditori aggressivi — l'immagine speculare.
- **Ciò che accade dopo è la cosa più importante.** Una candela evidenziata seguita da una continuazione convalida l'aggressione. Una candela evidenziata immediatamente rifiutata — il prezzo chiude riattraversandola — suggerisce che il lato aggressivo è stato assorbito, uno dei segnali di inversione più forti nell'orderflow (vedi [[understanding-icebergs-absorption]]).
- **La frequenza è un indizio di regime.** Le sessioni che stampano molte evidenziazioni sono a senso unico e in trend; le sessioni senza evidenziazioni sono bilanciate e rotazionali.

## Riferimento delle impostazioni

| Impostazione | Cosa fa |
|---|---|
| **Min Value** | Soglia minima di percentuale di delta — vengono contrassegnate solo le candele che raggiungono o superano questo livello. |
| **Max Value** | Filtro massimo di percentuale di delta. Imposta **0** per disattivare il filtro massimo, così tutte le candele sopra il minimo vengono contrassegnate. |
| **Bid Color** | Colore del marcatore per le percentuali di delta negative — dominanza della pressione in vendita. |
| **Ask Color** | Colore del marcatore per le percentuali di delta positive — dominanza della pressione in acquisto. |
| **Opacity** | Trasparenza del marcatore: valori più bassi rendono l'evidenziazione più trasparente, valori più alti la rendono più opaca e visibile. |

## Suggerimenti ed errori comuni

- **Calibra per ogni strumento.** Una percentuale di delta rara su un contratto può essere routine su uno più sottile. Regola **Min Value** finché le evidenziazioni non sono davvero eccezionali per il mercato su cui operi.
- **La percentuale nasconde la dimensione.** Una candela minuscola con tre contratti può stampare una percentuale di delta estrema. Verifica il volume effettivo — abbina l'evidenziazione a [[volume]] o [[deep-stats]] prima di considerarla significativa.
- **Non fare trading sul colore, fai trading sulla reazione.** L'evidenziazione identifica la candela candidata; la logica di ingresso viene da ciò che il prezzo fa su di essa e dopo di essa.
- **Usa entrambi i limiti per uno screening a banda.** Impostare un **Max Value** sopra il minimo contrassegna solo gli squilibri di fascia media e salta gli estremi da blow-off, cosa che alcuni stili mean-reversion preferiscono.

## Articoli correlati

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-bar]]
- [[deep-stats]]
- [[ratio-highlight]]