---
title: "Deep Wall"
slug: "deep-wall"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "3 min read"
description: "Rilevatore solo per ES di muri di ordini passivi che assorbono gli ordini aggressivi e causano un rifiuto del prezzo — la firma di ordini iceberg nascosti."
keywords: ["deep wall", "rilevatore di ordini iceberg", "muro di ordini", "indicatore ES", "muro di liquidità", "deep wall nessun segnale", "deep wall non si attiva mai"]
source_hash: "fb98a32afa58fc99"
ai_translated: true
source_hash: "fb98a32afa58fc99"
---
Deep Wall è un indicatore specializzato sviluppato dal team DeepCharts specificamente per i grafici ES. Monitora il comportamento del prezzo sui livelli chiave e segnala i momenti in cui un muro di ordini passivi assorbe gli ordini aggressivi in arrivo e provoca un rifiuto del prezzo — la firma classica di un ordine iceberg nascosto.

È volutamente uno strumento a bassa frequenza. I segnali compaiono solo poche volte a settimana o addirittura al mese, per lo più in contesti a bassa liquidità come la sessione di Londra. Se resta silenzioso per giorni, è un comportamento normale, non un malfunzionamento.

Un muro è semplicemente liquidità passiva fuori misura in attesa nel book di negoziazione. Passa il mouse sul ladder live qui sotto per vedere come gli ordini limit di vendita si accumulano sopra il prezzo e quelli di acquisto sotto — gli ordini in attesa di cui è fatto un muro.

[WIDGET: dom-ladder]

## Che cos'è

Deep Wall risponde a una sola domanda: "un grande operatore passivo ha difeso questo prezzo?" Quando gli ordini aggressivi colpiscono ripetutamente un livello e la liquidità lì in attesa continua ad assorbirli finché il prezzo non rifiuta, Deep Wall contrassegna l'evento. Poiché quel pattern proviene tipicamente da ordini iceberg — grandi ordini mostrati al mercato in piccole porzioni — il segnale punta a liquidità istituzionale nascosta.

> **Attenzione:** Deep Wall è costruito specificamente per i grafici **ES**. Applicarlo ad altri strumenti non produrrà segnali significativi.

[SCREENSHOT: Grafico ES con un rilevamento Deep Wall visibile — il livello contrassegnato dove il prezzo ha colpito ripetutamente la liquidità in attesa ed è stato rifiutato, con il segnale Deep Wall evidenziato | dc-it-deep-wall-01.png]

## Quando usarlo

- Fai trading su ES e vuoi avvisi per l'attività iceberg nascosta senza guardare il DOM per tutta la sessione.
- Cerchi punti di rifiuto/inversione ad alta probabilità supportati da un reale assorbimento passivo.
- Operi in finestre a bassa liquidità (per esempio la sessione di Londra), dove il comportamento dei muri è più visibile.
- Vuoi un livello di conferma indipendente sopra strumenti come [[deep-trades]] o il DOM.

## Avvio rapido

1. Apri un grafico **ES**.
2. Apri l'**Indicator List**, individua **Deep Wall** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto a Deep Wall.
4. Configura un avviso per non perderti i rari rilevamenti: vai su **Options → Settings → Add Alert** e configura l'**Alert Sound** e il **Message Popup** per gli eventi di Deep Wall.

[SCREENSHOT: Finestra delle impostazioni di Deep Wall insieme alla schermata Options → Settings → Add Alert che mostra un avviso configurato con Alert Sound e Message Popup attivi per Deep Wall | dc-it-deep-wall-02.png]

## Come leggerlo

Un rilevamento Deep Wall significa che il flusso aggressivo si è scontrato con liquidità passiva che si è rifiutata di cedere — assorbimento seguito da rifiuto. Tratta il livello contrassegnato come difeso:

- **Trade sul rifiuto**: il rilevamento stesso suggerisce un movimento lontano dal muro; molti trader lo usano come punto di inversione o di fade.
- **Memoria dei livelli**: un livello che un grande operatore ha difeso una volta spesso conta di nuovo su un retest.
- **Anche il fallimento è informazione**: se il prezzo in seguito rompe nettamente un muro rilevato, il difensore se n'è andato — quella rottura porta con sé un proprio segnale.

Poiché i segnali sono rari, ognuno pesa. Non diluire lo strumento aspettandoti diversi segnali per sessione.

## Riferimento delle impostazioni

La logica di rilevamento di Deep Wall è preconfigurata; le impostazioni a disposizione dell'utente riguardano le notifiche.

| Impostazione | Cosa fa |
|---|---|
| **Alert Sound** | Riproduce un suono quando si attiva un evento Deep Wall. Si configura tramite **Options → Settings → Add Alert**. |
| **Message Popup** | Mostra un messaggio popup al rilevamento, così l'evento non passa inosservato. |

## Suggerimenti ed errori comuni

- **"Non si attiva mai" di solito è normale.** Pochi segnali a settimana o al mese è il comportamento previsto. La pazienza fa parte dello strumento.
- **Controlla prima il simbolo.** Se non vedi nulla per molto tempo, verifica che l'indicatore sia applicato a un grafico ES — è specifico per ES.
- **Configura sempre l'avviso.** Con segnali così rari, un grafico non osservato significa rilevamenti persi.
- **Conferma con il contesto.** Combina un rilevamento con il contesto orderflow — il tape, le letture di assorbimento di [[deep-stats]] o la struttura footprint in [[deep-print]] — prima di impegnarti in un trade.

## Articoli correlati

- [[understanding-icebergs-absorption]]
- [[orderflow-101]]
- [[deep-trades]]
- [[big-trades]]
- [[different-types-of-input]]
- [[indicator-layout]]