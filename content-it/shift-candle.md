---
title: "Shift Candle"
slug: "shift-candle"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "Rileva le candele di inversione 'Shift' con la logica Trinity e la conferma opzionale degli squilibri impilati, tracciate come marcatori e zone fresh sul grafico."
keywords: ["shift candle", "logica trinity", "indicatore candela di inversione", "conferma squilibrio", "rilevamento inversioni", "candele shift", "zona di squilibrio fresh"]
source_hash: "937df42f4ae80fa5"
ai_translated: true
source_hash: "937df42f4ae80fa5"
---
Shift Candle identifica le candele di inversione "Shift" usando la logica Trinity e una conferma opzionale basata sugli squilibri, tracciando marcatori e zone di squilibrio direttamente sul grafico. È uno strumento avanzato di inversione basato sull'orderflow: invece di una semplice corrispondenza di pattern, convalida una potenziale inversione rispetto alla distanza di breakout, al comportamento del delta e alla posizione del point of control prima di segnarla.

## Che cos'è

L'indicatore cerca candele in cui il mercato inverte direzione sotto specifiche condizioni strutturali e di orderflow — i criteri Trinity — come un breakout minimo in tick oltre la struttura precedente, una differenza minima di delta tra le barre confrontate e una distanza massima dal point of control della barra. Quando una candela soddisfa i criteri, Shift Candle traccia un marcatore su di essa. Un filtro di squilibrio opzionale richiede squilibri bid/ask impilati per confermare il segnale, e le zone di squilibrio fresh confermate possono essere disegnate come aree colorate che fungono da zone di riferimento nelle successive rivisitazioni.

Gli squilibri diagonali impilati sono qui il livello di conferma — per farti un'idea di come appare uno squilibrio nei dati bid×ask, regola il rapporto di squilibrio e passa il mouse sulle celle evidenziate nel footprint qui sotto.

[WIDGET: footprint-lab]

## Quando usarlo

- Fai trading sulle inversioni e vuoi candidati filtrati da condizioni di orderflow anziché dalla sola forma.
- Sai già leggere footprint e squilibri e vuoi che la piattaforma segnali automaticamente le candele qualificate, con avvisi.
- Vuoi che le zone di squilibrio fresh vengano marcate nei punti di inversione, per osservare come si comporta il prezzo quando vi ritorna.
- Vuoi codificare una checklist di inversione (distanza di breakout, cambio di delta, prossimità al POC, squilibri impilati) in un unico strumento configurabile.

## Avvio rapido

1. Apri il menu degli indicatori sul tuo grafico e aggiungi **Shift Candle**.
2. Apri le impostazioni dell'indicatore.
3. Parti dal gruppo Trinity: imposta **Minimum tick breakout** e i requisiti di delta (**Minimum delta % difference**, **Minimum delta value difference**) su livelli adeguati alla dimensione del tick e al volume tipico del tuo strumento.
4. Facoltativamente attiva **Enable** nel gruppo Imbalance per richiedere la conferma degli squilibri impilati — meno segnali ma di maggiore convinzione.
5. Scegli un **Buy color** e un **Sell color** distinti nel gruppo Imbalance Fresh Zone, così le zone sono facili da distinguere.
6. Abilita il suono di avviso o il popup del messaggio se vuoi essere avvisato quando compare una candela Shift, poi applica.

Poiché le soglie sono specifiche per strumento (un breakout in tick sensato su un contratto è rumore su un altro), aspettati di iterare sui valori Trinity osservando i segnali sul tuo mercato.

[SCREENSHOT: Un grafico sui futures con Shift Candle attivo — un marcatore di inversione tracciato sotto una barra di inversione rialzista qualificata e una zona di squilibrio fresh colorata che si estende verso destra dalla candela del segnale | dc-it-shift-candle-01.png]

## Come leggerlo

- **Un marcatore è un candidato, non un ingresso.** Significa che la candela ha soddisfatto le condizioni Trinity configurate (e il filtro di squilibrio, se abilitato). Leggilo nel contesto: posizione rispetto alla struttura della sessione, livelli di timeframe superiori e trend precedente.
- **Le zone di squilibrio fresh** segnano dove si sono verificati squilibri aggressivi confermati durante l'inversione. Molti trader orderflow osservano come si comporta il prezzo al *ritorno* su queste zone — se tengono, la parte responsabile sta ancora difendendo; se vengono attraversate, l'inversione è fallita. Vedi [[understanding-auction-theory]] per il ragionamento dietro le letture di squilibrio e assorbimento.
- **Le condizioni sul delta** nella logica Trinity esistono per garantire che l'inversione sia sostenuta da un reale cambiamento di aggressività, non solo da uno stoppino di prezzo — vedi [[orderflow-101]] per come viene calcolato il delta.
- Soglie più strette producono meno segnali ma più forti; soglie più larghe fanno emergere più candidati con più rumore. Non esiste un'impostazione universalmente corretta — calibra per strumento e timeframe.

## Riferimento delle impostazioni

[SCREENSHOT: Finestra delle impostazioni di Shift Candle con le sezioni Trinity Settings, Marker Settings, Imbalance Settings, Imbalance Fresh Zone e Alert | dc-it-shift-candle-02.png]

### Trinity Settings

| Impostazione | Cosa fa |
|---|---|
| **Maximum number of bars after reversal** | Limite massimo di barre consentite per convalidare l'inversione. |
| **Minimum tick breakout** | Movimento minimo in tick oltre la struttura precedente richiesto perché la candela si qualifichi. |
| **Minimum delta % difference** | Varianza percentuale minima di delta richiesta tra le barre confrontate. |
| **Minimum delta value difference** | Differenza assoluta minima di delta richiesta tra le barre confrontate. |
| **Maximum tick of POC distance** | Limita quanto lontano (in tick) la candela può trovarsi dal suo point of control. |
| **Highest/Lowest reversal bar** | Periodo di lookback usato per identificare lo swing high o low che viene invertito. |

### Marker Settings

| Impostazione | Cosa fa |
|---|---|
| **Tick offset** | Posizionamento verticale, in tick, del marcatore tracciato rispetto alla candela. |
| **Plot price** | Il prezzo di riferimento a cui è ancorato il marcatore. |

### Imbalance Settings

| Impostazione | Cosa fa |
|---|---|
| **Enable** | Attiva il filtro di conferma dello squilibrio. |
| **Minimum Imbalance %** | Soglia minima di intensità dello squilibrio richiesta (per esempio 150%). |
| **Minimum Volume Diff.** | Differenza minima di volume perché uno squilibrio conti. |
| **Include zero on imbalance** | Include le stampe a zero nel calcolo dello squilibrio. |
| **Min. Num. of Consecutive Imb.** | Quanti livelli di squilibrio impilati (consecutivi) sono richiesti per la conferma. |

### Imbalance Fresh Zone

| Impostazione | Cosa fa |
|---|---|
| **Buy color** | Colore per le zone fresh di squilibrio lato acquisti. |
| **Sell color** | Colore per le zone fresh di squilibrio lato vendite. |

### Alert Sound & Message Popup

Entrambe le sezioni includono interruttori di attivazione/disattivazione più opzioni di personalizzazione per il suono di avviso e per la notifica popup mostrata quando viene rilevata una candela Shift.

## Suggerimenti ed errori comuni

- **Non usare soglie identiche su strumenti diversi.** Le impostazioni basate sui tick (**Minimum tick breakout**, **Maximum tick of POC distance**) devono riflettere la dimensione del tick e la volatilità di ciascun contratto; le soglie di delta devono riflettere il suo volume tipico.
- **Parti con il filtro di squilibrio abilitato.** I segnali Trinity non filtrati sono più frequenti; richiedere squilibri impilati (tramite **Min. Num. of Consecutive Imb.**) riduce sostanzialmente il rumore.
- Le condizioni su delta e squilibri richiedono dal tuo feed dati classificati bid/ask — verifica cosa fornisce il tuo feed in [[different-types-of-input]].
- Un marcatore contro un forte trend di timeframe superiore è un tentativo di fade; trattalo con cautela extra e pretendi confluenza da livelli o comportamenti di assorbimento.
- I dettagli interni esatti della valutazione Trinity oltre le impostazioni esposte non sono documentati; calibra per osservazione, non per supposizione.

## Articoli correlati

- [[imbalance-tracker]]
- [[understanding-auction-theory]]
- [[orderflow-101]]
- [[bar-poc]]
- [[different-types-of-input]]
- [[indicator-layout]]