---
title: "Ichimoku"
slug: "ichimoku"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Riferimento per l'indicatore Ichimoku in DeepCharts: Tenkan-sen, Kijun-sen, Chikou Span, Senkou Span e la nuvola, con impostazioni dei periodi e stili."
keywords: ["ichimoku kinko hyo", "nuvola ichimoku", "kumo", "tenkan", "kijun", "senkou span", "chikou span", "conversion line", "baseline"]
source_hash: "f536e77e60463be4"
ai_translated: true
source_hash: "f536e77e60463be4"
---
L'indicatore Ichimoku, formalmente noto come Ichimoku Kinko Hyo, è uno strumento di analisi tecnica completo sviluppato negli anni '30 dal giornalista giapponese Goichi Hosoda. Da un singolo indicatore ottieni livelli di supporto e resistenza, direzione del trend e una lettura del momentum — il nome si traduce approssimativamente come "grafico di equilibrio a colpo d'occhio".

Traccia diverse linee e una nuvola ombreggiata (il Kumo) direttamente sul grafico dei prezzi. Ogni linea risponde a una domanda diversa, e le loro posizioni rispetto al prezzo e tra loro costruiscono il quadro complessivo.

## Cos'è

Ichimoku risponde alla domanda: qual è il trend, dov'è l'equilibrio e dove sono i livelli che contano — tutto in un colpo d'occhio? Invece di mediare le chiusure come una media mobile, le sue linee sono costruite dal punto medio di massimi e minimi su lookback fissi, e alcune vengono poi proiettate in avanti o spostate indietro nel tempo. È questo spostamento temporale che crea la nuvola davanti al prezzo e la linea di confronto ritardata dietro di esso.

[SCREENSHOT: Un grafico a candele con l'indicatore Ichimoku completo applicato — le linee Tenkan-sen e Kijun-sen sul prezzo, la nuvola Kumo ombreggiata proiettata davanti all'ultima candela e la Chikou Span che segue dietro al prezzo | dc-it-ichimoku-01.png]

## Quando usarlo

- Per leggere la direzione del trend e la sua qualità in un'unica vista — prezzo sopra una nuvola in salita è un trend rialzista sano; prezzo dentro la nuvola è un mercato in transizione.
- Per trovare supporti e resistenze dinamici: la Kijun-sen e i bordi della nuvola sono livelli molto osservati.
- Per il timing con gli incroci delle linee — la Tenkan-sen che incrocia la Kijun-sen è il segnale Ichimoku classico.
- Per confermare il momentum con la posizione della Chikou Span rispetto al prezzo passato.

## Avvio rapido

1. Apri un grafico — vedi [[first-chart]].
2. Fai clic sull'icona a forma di grafico a barre nella fila di icone in alto a sinistra del grafico per aprire il pannello **Indicators**, poi fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca **Ichimoku** e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona a ingranaggio per aprirne le impostazioni.
5. Configurazione di partenza: mantieni i default — **Conversion Line Period** 9, **Baseline Period** 26, **Lagging Span Period** 26. Sono i valori originali di Hosoda e quelli che praticamente tutta la letteratura su Ichimoku dà per scontati.

[SCREENSHOT: La finestra delle impostazioni di Ichimoku che mostra Conversion Line Period = 9, Baseline Period = 26 e Lagging Span Period = 26, con visibili le opzioni di colore Subgraph per ciascuna linea | dc-it-ichimoku-02.png]

## Come leggerlo

I componenti dell'indicatore:

| Componente | Costruzione | Ruolo |
|---|---|---|
| **Tenkan-sen** (Conversion Line) | Media dei massimi e minimi degli ultimi 9 periodi | Direzione del trend di breve termine |
| **Kijun-sen** (Baseline) | Media dei massimi e minimi degli ultimi 26 periodi | Supporto/resistenza; potenziale livello di cambio di trend |
| **Chikou Span** (Delay Line) | Il prezzo di chiusura spostato indietro di 26 periodi | Confronta il prezzo corrente con la price action passata |
| **Senkou Span** | Media di Tenkan-sen e Kijun-sen, proiettata in avanti di 26 periodi | Una delle due linee che formano la nuvola (Kumo) |

Leggere il quadro:

- **Prezzo vs nuvola**: sopra la nuvola = contesto rialzista, sotto = ribassista, dentro = terra di nessuno. La nuvola davanti al prezzo mappa i futuri supporti/resistenze.
- **Incrocio Tenkan/Kijun**: la Tenkan-sen che incrocia al rialzo la Kijun-sen è rialzista (più forte quando avviene sopra la nuvola); l'incrocio al ribasso è ribassista.
- **La Kijun-sen come ancora**: il prezzo tende a tornare verso la Baseline; una distanza marcata da essa avverte di un movimento esteso.
- **Conferma della Chikou Span**: la linea ritardata che si trova sopra le barre di prezzo di 26 periodi fa conferma il momentum rialzista; sotto di esse, quello ribassista.
- **Spessore della nuvola**: una nuvola spessa implica supporto/resistenza forti; una nuvola sottile è più facile da attraversare per il prezzo.

## Riferimento impostazioni

### Parameters

| Impostazione | Cosa fa |
|---|---|
| **Conversion Line Period** | Lookback per il punto medio della Tenkan-sen. Default: 9. Più corto = linea di segnale più veloce e rumorosa. |
| **Baseline Period** | Lookback per il punto medio della Kijun-sen. Default: 26. |
| **Lagging Span Period** | Spostamento della Chikou Span (chiusura spostata indietro). Default: 26. |

[CONFIRM: whether the settings dialog also exposes a separate period for the second cloud line (Senkou Span B) — the live article documents one Senkou Span and three period parameters only]

### Subgraph

Colori e stili sono regolabili per ogni linea — **Tenkan-sen**, **Kijun-sen**, **Chikou Span** e **Senkou Span** — più:

| Impostazione | Cosa fa |
|---|---|
| **Line Style** | Aspetto di ogni linea tracciata. |
| **Line Width** | Spessore di ogni linea. |
| **Use Secondary Axis** | Visualizza l'indicatore su un asse alternativo. |

## Suggerimenti ed errori comuni

- **Non scegliere una sola linea a piacere.** Ichimoku è un sistema — un incrocio rialzista Tenkan/Kijun sotto una nuvola ribassista è un segnale in conflitto, non un acquisto.
- **Resisti alla tentazione di riconfigurare subito i periodi.** La struttura 9/26 è il linguaggio condiviso di ogni riferimento su Ichimoku; cambiala solo quando avrai capito cosa fa ogni spostamento.
- **Rispetta lo stato "dentro la nuvola".** È il modo dell'indicatore di dire che il mercato è in equilibrio — la maggior parte delle strategie Ichimoku lì resta a guardare.
- **Alleggerisci se serve.** Cinque plot sovrapposti possono seppellire la price action; assottiglia gli spessori delle linee o ricolora i componenti nella sezione Subgraph, e vedi [[indicator-layout]] per organizzare i grafici affollati.

## Articoli correlati

- [[moving-average]]
- [[super-trend]]
- [[donchian-channel]]
- [[adx]]
- [[different-types-of-input]]
- [[indicator-layout]]