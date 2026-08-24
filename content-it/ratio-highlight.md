---
title: "Ratio Highlight"
slug: "ratio-highlight"
category: "Indicators & Analysis"
subcategory: "Order Flow & Auction"
type: "reference"
difficulty: "advanced"
time: "5 min read"
description: "Contrassegna le barre il cui Ratio High o Ratio Low rientra nelle tue soglie, segnalando possibili assorbimenti di compratori o venditori agli estremi della barra."
keywords: ["ratio highlight", "ratio high", "ratio low", "assorbimento", "esaurimento compratori", "esaurimento venditori", "assorbimento bid", "assorbimento ask", "ratio footprint"]
source_hash: "03953f8096ba8da3"
ai_translated: true
source_hash: "03953f8096ba8da3"
---
L'indicatore Ratio Highlight posiziona dei marcatori sulle barre i cui valori di **Ratio High** e **Ratio Low** soddisfano le soglie che hai definito. Funziona analizzando il rapporto di attività di trading tra tick di prezzo consecutivi agli estremi di una barra, il che lo rende un modo rapido per individuare possibili assorbimenti di compratori e venditori senza dover leggere a mano ogni colonna del footprint.

Un ratio estremo in cima o in fondo a una barra suggerisce che una delle due parti ha spinto con forza nell'estremo ottenendo in cambio pochissimo movimento di prezzo — la firma classica dell'esaurimento o dell'assorbimento.

## Che cos'è

Ratio Highlight è un rilevatore di esaurimento basato sull'orderflow. Per ogni barra valuta il Ratio High (rapporto di attività in cima alla barra) e il Ratio Low (rapporto di attività in fondo alla barra) ed evidenzia la barra con un marcatore colorato quando il valore cade tra le tue soglie **Min Ratio** e **Maximum Ratio**. Risponde alla domanda "gli acquisti o le vendite sono stati assorbiti all'estremo di questa barra?"

[CONFIRM: the exact Ratio High / Ratio Low formula — which consecutive price levels of the bar are compared and in which direction the ratio is taken]

I ratio che valuta provengono direttamente da celle del footprint come quelle qui sotto — passa il mouse sulle coppie bid×ask in cima e in fondo a ciascuna barra per vedere i numeri grezzi dietro un Ratio High o un Ratio Low:

[WIDGET: footprint-lab]

[SCREENSHOT: Finestra del grafico con Ratio Highlight applicato — un massimo di swing dove una barra ribassista porta un marcatore Ask Absorption in cima, e un minimo di swing dove una barra rialzista porta un marcatore Bid Absorption, con i due colori chiaramente distinguibili | dc-it-ratio-highlight-01.png]

## Quando usarlo

- Fai trading sulle inversioni nei punti di esaurimento e vuoi che le barre con ratio estremi in alto/in basso vengano segnalate automaticamente.
- Leggi i footprint e vuoi un pre-filtro che ti dica quali barre vale la pena aprire in [[deep-print]].
- Cerchi l'assorbimento — ordini a mercato aggressivi inghiottiti da ordini limit passivi — sui massimi e minimi di swing.
- Vuoi un overlay visivamente leggero: l'indicatore aggiunge solo marcatori colorati, non un intero pannello dati.

## Avvio rapido

1. Apri l'**Indicator List** sul tuo grafico.
2. Trova **Ratio Highlight** e fai clic su **+** per aggiungerlo.
3. Fai clic sull'icona **Settings** accanto all'indicatore per aprire la sua finestra di configurazione.
4. Lascia la selezione del ratio nella modalità predefinita, che evidenzia il **Ratio High** nelle barre ribassiste e il **Ratio Low** nelle barre rialziste — la combinazione che fa emergere sia i segnali di esaurimento dei compratori sia quelli dei venditori.
5. Imposta **Min Ratio** abbastanza alto da escludere le barre ordinarie; alzalo ulteriormente se il tuo grafico mostra marcatori sulla maggior parte delle barre.
6. Scegli valori nettamente contrastanti per **Bid Absorption Color** e **Ask Absorption Color**, quindi applica.

[SCREENSHOT: Finestra delle impostazioni di Ratio Highlight che mostra la sezione Ratio con la selezione del ratio, i campi Min Ratio e Maximum Ratio, e la sezione Plot con Bid Absorption Color, Ask Absorption Color e Opacity | dc-it-ratio-highlight-02.png]

## Come leggerlo

- **Marcatore Ratio High (Ask Absorption Color) — esaurimento dei compratori.** I compratori hanno spinto nella parte alta della barra ma la loro aggressività ha prodotto un rapporto di attività estremo sul massimo: gli acquisti sono stati assorbiti e il livello ha tenuto. Vicino a una resistenza o dopo una salita prolungata, è un avvertimento che la spinta rialzista sta esaurendo i partecipanti.
- **Marcatore Ratio Low (Bid Absorption Color) — esaurimento dei venditori.** L'immagine speculare sul minimo della barra: debolezza significativa lato vendite, con i venditori che premono sul minimo e vengono assorbiti. Su un supporto dopo una discesa, segnala un possibile rimbalzo.
- **Il contesto decide il trade.** Un singolo marcatore dentro un range in rotazione è rumore; un marcatore stampato esattamente su un massimo precedente, su un estremo di sessione o su un livello pesante del profilo è informazione. Combinalo con uno strumento di livelli e con il quadro del delta circostante.
- **La conferma conta comunque.** L'assorbimento ti dice che un tentativo è fallito; non garantisce l'inversione. Aspetta che il mercato giri davvero — una barra opposta forte o un cambiamento nel delta — prima di agire.

## Riferimento impostazioni

Raggruppate come nella finestra delle impostazioni.

### Ratio Settings

| Impostazione | Cosa fa |
|---|---|
| **Ratio selection** | Controlla quali ratio vengono evidenziati. In modalità predefinita evidenzia il **Ratio High** nelle barre ribassiste e il **Ratio Low** nelle barre rialziste, mostrando sia i segnali di esaurimento dei compratori sia quelli dei venditori. |
| **Min Ratio** | Valore minimo della soglia del ratio. Vengono evidenziate solo le barre con valori di ratio pari o superiori a questo minimo. |
| **Maximum Ratio** | Valore massimo della soglia del ratio. Vengono evidenziate solo le barre con valori di ratio pari o inferiori a questo massimo. |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Bid Absorption Color** | Colore del marcatore per il **Ratio Low** (esaurimento dei venditori), visualizzato sulle barre che mostrano una significativa debolezza lato vendite. |
| **Ask Absorption Color** | Colore del marcatore per il **Ratio High** (esaurimento dei compratori), visualizzato sulle barre che mostrano una significativa debolezza lato acquisti. |
| **Opacity** | Trasparenza dei marcatori. Valori più bassi rendono i marcatori più trasparenti; valori più alti li rendono più opachi e visibili. |

## Suggerimenti ed errori comuni

- **Usa entrambe le soglie come una banda.** **Min Ratio** e **Maximum Ratio** insieme definiscono una finestra, permettendoti di escludere sia i ratio insignificanti sia gli outlier patologici (per esempio livelli dove su un lato non è stato scambiato quasi nulla e il ratio esplode senza significato).
- **Calibra per ogni strumento.** Le distribuzioni dei ratio differiscono tra mercati spessi e sottili; soglie selettive su un contratto possono segnalare una barra sì e una no su un altro. Ritara quando cambi simbolo.
- **Non fare fading su ogni marcatore.** I segnali di esaurimento contro un trend forte falliscono di frequente. Tratta i marcatori come punti da cui iniziare a osservare, e richiedi una conferma dalla struttura o dal tape.
- **Verifica nel footprint.** Quando un marcatore compare su un livello che ti interessa, apri la barra in [[deep-print]] e controlla i volumi bid/ask effettivi sull'estremo — il ratio riassume il footprint, non lo sostituisce.

## Articoli correlati

- [[understanding-icebergs-absorption]]
- [[orderflow-101]]
- [[reading-a-footprint]]
- [[deep-print]]
- [[different-types-of-input]]
- [[indicator-layout]]