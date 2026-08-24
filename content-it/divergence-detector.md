---
title: "Divergence Detector"
slug: "divergence-detector"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "advanced"
time: "6 min read"
description: "Rileva le divergenze di volume e delta sui nuovi massimi e minimi e le etichetta sul grafico come potenziali false rotture e avvisi di inversione."
keywords: ["divergence detector", "divergenza di volume", "divergenza di delta", "divergenza", "falso breakout", "etichetta VD", "etichetta DV", "VDD", "divergance"]
source_hash: "83a4a57134999b9e"
ai_translated: true
source_hash: "83a4a57134999b9e"
---
Un breakout a cui nessuno partecipa è un breakout di cui dubitare. Il Divergence Detector osserva esattamente questo: evidenzia le divergenze di volume o delta con etichette direttamente sul grafico, segnalando i momenti in cui viene fatto un nuovo massimo o minimo relativo senza un corrispondente aumento di volume o delta.

Poiché gli estremi con scarsa partecipazione spesso precedono false rotture e inversioni, l'indicatore agisce come uno scettico automatizzato — contrassegna i massimi e i minimi dove lo sforzo dietro il movimento non ha eguagliato il risultato.

## Che cos'è

Il Divergence Detector confronta gli estremi di prezzo con il volume e il delta che li hanno prodotti. Quando il prezzo stampa un nuovo massimo o minimo relativo (identificato tramite un motore di swing Zig Zag integrato) ma il volume o il delta non si espande di pari passo, l'indicatore stampa un'etichetta su quell'estremo:

- **VD** — solo divergenza di volume.
- **DV** — solo divergenza di delta.
- **VDD** — divergenza sia di volume sia di delta, con priorità alla divergenza più significativa.

Il delta qui è la differenza tra acquisto aggressivo e vendita aggressiva — se il concetto è nuovo per te, leggi prima [[orderflow-101]]. Puoi costruirti un'intuizione qui sotto: passa il mouse sulle barre di questo istogramma delta interattivo e osserva come si comportano il delta per barra e la linea cumulativa mentre il prezzo spinge verso nuovi estremi.

[WIDGET: delta-lab]

## Quando usarlo

- Per fare fading dei breakout sospetti: un nuovo massimo su volume in calo o delta debole è un classico setup da falsa rottura.
- Per temporizzare le uscite: una divergenza su un estremo a tuo favore è un motivo per stringere gli stop o alleggerire, anche se non inverti la posizione.
- Per confermare i fallimenti di swing: combinata con una lettura della struttura da [[swing-point]] o [[zig-zag]], una divergenza etichettata aggiunge evidenza che uno swing non terrà.
- Per monitorare la partecipazione in tempo reale — la modalità di calcolo Tick valuta la divergenza nel momento in cui un estremo precedente viene rotto, non solo alla chiusura della barra.

## Avvio rapido

1. Apri un grafico e fai clic sull'icona a grafico a barre nell'angolo in alto a sinistra per aprire il pannello **Indicators**.
2. Fai clic su **Indicators** per aprire l'**Indicator List** completa.
3. Cerca "Divergence Detector" e fai clic su **+** per aggiungerlo.
4. Fai clic sull'icona dell'ingranaggio accanto all'indicatore per aprirne le impostazioni. Imposta **Calculation Mode (1)** su **Volume and delta** così vedi il quadro completo (etichette VDD), e inizia con **Calculation Mode (2)** = **Close** in modo che i segnali vengano stampati solo su candele completate.
5. Regola le impostazioni dello Zig Zag in modo che gli swing corrispondano alla struttura su cui operi davvero — se le etichette compaiono su ogni piccola oscillazione, il parametro di inversione è troppo piccolo.

[SCREENSHOT: Un grafico di futures con il Divergence Detector attivo — un nuovo massimo di swing contrassegnato con un'etichetta VDD sopra la candela, che mostra il prezzo fare un massimo più alto mentre la partecipazione cala | dc-it-divergence-detector-01.png]

## Come leggerlo

- **Un'etichetta su un nuovo massimo** significa che il prezzo ha superato il massimo relativo precedente senza un corrispondente aumento di volume (VD), delta (DV) o entrambi (VDD). Il movimento è mancato di partecipazione — un avviso che il breakout potrebbe fallire.
- **Un'etichetta su un nuovo minimo** è lo specchio: estensione al ribasso senza espansione dello sforzo in vendita.
- **VDD supera un'etichetta a fonte singola.** Quando sia il volume sia il delta divergono sullo stesso estremo, l'evidenza è più forte; l'etichetta dà priorità alla divergenza più significativa.
- **La modalità di temporizzazione cambia il significato.** In modalità **Tick** un'etichetta può comparire intrabar nel momento in cui l'estremo precedente viene rotto — segnale più tempestivo, più rumore. La modalità **Close** attende la fine della candela — la più tardiva, la più pulita. **Sec. to close** è il compromesso: valuta un numero definito di secondi prima della chiusura.
- **La divergenza è un avviso, non un ordine.** I mercati possono avanzare verso nuovi estremi con partecipazione debole più a lungo di quanto una posizione in fading sopravviva; richiedi un trigger strutturale prima di agire.

## Riferimento delle impostazioni

### Generale

| Impostazione | Cosa fa |
|---|---|
| **Calculation Mode (1)** | Sceglie quali divergenze mostrare: **Volume** (solo etichette VD), **Delta** (solo etichette DV) o **Volume and delta** (etichetta VDD, con priorità alla divergenza più significativa). |
| **Calculation Mode (2)** | Imposta quando la divergenza viene valutata: **Tick** (alla rottura del tick del massimo/minimo precedente), **Sec. to close** (a un numero specificato di secondi prima della chiusura della candela) o **Close** (alla chiusura della candela). |
| **Maximum Seconds To Close** | Il parametro di temporizzazione usato dalla modalità **Sec. to close**. |

### Zig Zag Settings

I massimi e minimi di swing con cui il rilevatore fa il confronto sono trovati da uno Zig Zag interno.

| Impostazione | Cosa fa |
|---|---|
| **Zig Zag Mode** | Come vengono identificate le inversioni (punti di swing): **Absolute Reversal** usa un valore fisso di inversione di prezzo, richiedendo un movimento sufficiente nella direzione opposta; **Tick Reversal** è basato sui tick, consentendo un movimento minimo in tick per generare un'inversione; **Highest Lowest** si basa sulla differenza in tick tra il massimo e il minimo dello swing. |
| **Absolute reversal parameter** | Il valore di inversione usato nella modalità Absolute Reversal. |
| **Tick Reversal / Highest Lowest parameter** | Il valore in tick usato dalle modalità Tick Reversal e Highest Lowest. |

### Plot Settings

| Impostazione | Cosa fa |
|---|---|
| **Text size** | Dimensione delle etichette di divergenza. |
| **Distance ticks** | Distanza, in tick, tra l'etichetta e l'estremo della candela che contrassegna. |

### Avvisi e Subgraphs

| Impostazione | Cosa fa |
|---|---|
| **Alert Sound** | Abilita una notifica sonora quando viene rilevata una divergenza. |
| **Subgraphs** | Personalizza i colori dello sfondo e del testo delle etichette. |

[SCREENSHOT: La finestra delle impostazioni del Divergence Detector che mostra i menu a discesa Calculation Mode (1) e Calculation Mode (2), Maximum Seconds To Close e il gruppo Zig Zag Settings con le tre modalità di inversione | dc-it-divergence-detector-02.png]

## Suggerimenti ed errori comuni

- **Scegli la temporizzazione di calcolo che corrisponde al tuo stile.** Gli scalper che osservano il fallimento immediato vogliono **Tick**; se rivedi candele completate, **Close** evita etichette che sarebbero scomparse entro la fine della barra.
- **Lo Zig Zag definisce tutto.** Se gli swing sono definiti troppo stretti, ogni micro-estremo viene testato per la divergenza e il numero di etichette esplode; troppo larghi, e le inversioni reali passano senza etichetta. Regola il parametro di inversione per strumento e timeframe.
- **La divergenza di volume e quella di delta non sono intercambiabili.** La divergenza di volume dice che l'attività totale è calata; la divergenza di delta dice che lo squilibrio degli aggressori è calato. Un massimo su volume forte ma delta debole racconta una storia diversa rispetto a uno su volume debole — usare la modalità **Volume and delta** preserva questa distinzione.
- **Aspettati che le divergenze falliscano nei trend forti.** I trend persistenti stampano regolarmente estremi con partecipazione debole e continuano; usa la divergenza come filtro contro l'inseguimento, non come sistema di inversione a sé stante.

## Articoli correlati

- [[orderflow-101]]
- [[zig-zag]]
- [[delta-bar]]
- [[volume]]
- [[different-types-of-input]]
- [[indicator-layout]]