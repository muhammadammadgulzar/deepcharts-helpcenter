---
title: "Media mobile"
slug: "moving-average"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Riferimento per l'indicatore Moving Average in DeepCharts: dati di input, lunghezza, tipi di media (Simple, Exponential, Triangular, Weighted), avvisi e stile."
keywords: ["MA", "media mobile semplice", "SMA", "EMA", "media mobile esponenziale", "media mobile ponderata", "media mobile triangolare", "moving avarage"]
source_hash: "b77623441f284f4a"
ai_translated: true
source_hash: "b77623441f284f4a"
---
La media mobile è uno degli strumenti di analisi tecnica più utilizzati. Disegna sul grafico una linea che rappresenta il valore medio dei prezzi di uno strumento su un numero di periodi a tua scelta, smussando il rumore da barra a barra così la direzione di fondo è più facile da vedere.

In DeepCharts puoi scegliere da quale prezzo viene costruita la media, quanti periodi copre e quale formula di media viene usata — per poi personalizzare lo stile della linea e collegarle degli avvisi.

## Che cos'è

Una media mobile risponde alla domanda: dove ha scambiato il prezzo, in media, nelle ultime N barre? Poiché ogni nuova barra spinge fuori dal calcolo la più vecchia, la linea "si muove" con il mercato. I trader la usano per analizzare i trend, identificare potenziali inversioni di prezzo e creare segnali di acquisto o di vendita — ad esempio quando il prezzo incrocia la linea, o quando una media veloce incrocia una lenta. Provala dal vivo qui sotto — alterna tra Simple ed Exponential e trascina il cursore della lunghezza per vedere come la linea scambia reattività con fluidità.

[WIDGET: ma-lab]

## Quando usarla

- Per leggere a colpo d'occhio la direzione e la forza di un trend — una media in salita sotto il prezzo è un contesto di trend rialzista, una in discesa sopra il prezzo un contesto ribassista.
- Per filtrare la direzione delle operazioni: molti trader prendono posizioni long solo mentre il prezzo si mantiene sopra una media scelta.
- Per osservare gli incroci — il prezzo che incrocia la media, o due medie di lunghezze diverse che si incrociano tra loro.
- Per usare la linea come supporto o resistenza dinamica nei mercati in trend.

## Avvio rapido

1. Apri un grafico — vedi [[first-chart]] se non l'hai ancora fatto.
2. Fai clic sull'icona a grafico a barre nella fila di icone in alto a sinistra del grafico per aprire il pannello **Indicators**, poi fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca **Moving Average** e fai clic su **+** per aggiungerla.
4. Fai clic sull'icona a ingranaggio accanto all'indicatore per aprirne le impostazioni.
5. Configurazione iniziale: lascia **Input** su Close e **Length** al valore predefinito di 21, e scegli **Simple** o **Exponential** come **Type Average**. Regola la lunghezza in seguito per adattarla al tuo timeframe — più corta per una reazione più rapida, più lunga per un contesto di trend più fluido.

[SCREENSHOT: Finestra delle impostazioni della Moving Average aperta, con la sezione Parameters che mostra Input, Length impostata a 21 e il menu a discesa Type Average espanso con Simple, Exponential, Triangular e Weighted | dc-it-moving-average-01.png]

## Come leggerla

- **Pendenza**: una linea in salita significa che il prezzo medio sta aumentando — il contesto di trend è rialzista. Una linea piatta significa un range; le medie producono i loro segnali peggiori nei range.
- **Prezzo vs. linea**: un prezzo che si mantiene sopra la media suggerisce che i compratori hanno il controllo; chiusure ripetute sotto di essa suggeriscono che il trend si sta indebolendo o invertendo.
- **Incroci**: una media più corta che incrocia al rialzo una più lunga è un classico segnale rialzista, e l'opposto ribassista. Gli incroci sono in ritardo per costruzione — confermano un movimento già iniziato.
- **Il tipo di media conta**: una media Exponential pesa maggiormente i prezzi recenti e reagisce più in fretta di una Simple della stessa lunghezza; la Triangular è la più fluida, la Weighted si colloca nel mezzo.

## Riferimento delle impostazioni

### Parameters

| Impostazione | Cosa fa |
|---|---|
| **Input** | I dati di prezzo da cui viene calcolata la media: Close, Open, High, Low o volume. Close è la scelta abituale; usa High/Low per studi in stile envelope. |
| **Length** | Numero di periodi nel calcolo. Default: 21. Abbassala per una reazione più rapida, alzala per un contesto di trend più fluido e lento. |
| **Type Average** | La formula di media: **Simple**, **Exponential**, **Triangular** o **Weighted**. Exponential e Weighted enfatizzano le barre recenti; Triangular applica una doppia smussatura. |

### Alerts

| Impostazione | Cosa fa |
|---|---|
| **Enable Alert Sound** | Riproduce una notifica sonora quando l'avviso scatta. |
| **Enable Alert Message** | Mostra un messaggio di avviso popup quando scatta. |
| **Alert Name** | Un'etichetta personalizzata per la notifica, utile quando esegui più avvisi contemporaneamente. |

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| **Moving Average Color** | Colore della linea tracciata. |
| **Secondary Color** | Colore complementare opzionale. |
| **Subgraph Style** | Come viene visualizzata la serie. |
| **Line Style** | Aspetto della linea (continua, tratteggiata e così via). |
| **Line Width** | Spessore della linea. |
| **Use Secondary Axis** | Traccia l'indicatore su un asse alternativo — utile quando sovrapponi serie con scale diverse. |

## Suggerimenti ed errori comuni

- **Non trattare una lunghezza come universale.** Il default di 21 è un punto di partenza ragionevole, ma la lunghezza "giusta" dipende dal tuo timeframe e da quanta smussatura vuoi — testala prima di farci affidamento.
- **I range generano falsi incroci.** Nei mercati laterali il prezzo attraversa continuamente la media avanti e indietro; combina la MA con un filtro di trend come l'[[adx]] prima di agire sugli incroci.
- **Più veloce non è sempre meglio.** Una media Exponential reagisce prima, ma produce anche più segnali dettati dal rumore rispetto a una Simple della stessa lunghezza.
- Se la linea viene disegnata nel posto sbagliato o la vuoi in un proprio pannello, vedi [[indicator-layout]] per la disposizione delle aree del grafico.

## Articoli correlati

- [[super-trend]]
- [[parabolic-sar]]
- [[linear-regression]]
- [[adx]]
- [[different-types-of-input]]
- [[indicator-layout]]