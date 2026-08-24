---
title: "Rate of Change (ROC)"
slug: "rate-of-change"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "beginner"
time: "4 min read"
description: "Come l'indicatore Rate of Change misura la variazione percentuale del prezzo su un periodo di osservazione, e ogni impostazione del ROC in DeepCharts."
keywords: ["ROC", "indicatore rate of change", "rate of change del prezzo", "indicatore variazione percentuale", "oscillatore roc"]
source_hash: "588a4bf32656c442"
ai_translated: true
source_hash: "588a4bf32656c442"
---
Il Rate of Change (ROC) misura la variazione percentuale del prezzo di un asset su un numero prestabilito di barre. È un parente stretto dell'indicatore [[momentum]] con un vantaggio pratico: poiché l'output può essere espresso in percentuale, le letture sono confrontabili tra simboli e scale di prezzo diverse.

In DeepCharts, il ROC disegna una singola linea in una propria area del grafico, oscillando intorno a una linea zero.

## Che cos'è

Il ROC risponde a: quanto è cambiato il prezzo, in termini percentuali, rispetto a N barre fa? Una lettura sopra lo zero significa che il prezzo è più alto di quanto fosse nella finestra di osservazione; sotto lo zero, che è più basso. Più ripida è la linea, più veloce è il cambiamento. I trader lo usano per valutare la forza del trend, identificare possibili inversioni di prezzo, individuare estremi di ipercomprato e ipervenduto e confermare la direzione del trend.

## Quando usarlo

- Vuoi una lettura di momentum confrontabile tra strumenti o timeframe diversi.
- Vuoi un indicatore pulito e oggettivo della direzione del trend — su quale lato dello zero si trova la linea.
- Cerchi estremi di ipercomprato o ipervenduto relativi alla storia del simbolo stesso.
- Vuoi segnali di divergenza che avvisino di un movimento in indebolimento.

## Avvio rapido

1. Apri un grafico e premi **Ctrl I** — oppure fai clic sull'icona a grafico a barre nella toolbar del grafico, poi su **Indicators** — per aprire l'**Indicator List**.
2. Cerca "Rate of Change" e fai clic su **+** per aggiungerlo. Il ROC si renderizza in una propria area del grafico sotto le barre dei prezzi (vedi [[indicator-layout]]).
3. Fai clic sull'icona a ingranaggio sulla riga dell'indicatore per aprire le sue impostazioni.
4. Mantieni il **Period** predefinito di 10 per iniziare, e usa **Use Percent** per scegliere tra letture percentuali e variazione assoluta del prezzo. La percentuale è il modo più comune di leggere il ROC.

[SCREENSHOT: Un grafico con l'indicatore Rate of Change nella propria area sotto il prezzo, con la linea del ROC che attraversa al rialzo la linea zero mentre il prezzo rompe al rialzo | dc-it-rate-of-change-01.png]

## Come leggerlo

- **Linea zero.** Sopra lo zero, il prezzo è più alto di N barre fa — la finestra di osservazione è rialzista netta. Sotto lo zero, ribassista netta. Un attraversamento della linea zero segna l'inversione del trend su quella finestra.
- **Pendenza ed estremi.** Una linea ripida significa che il prezzo sta cambiando rapidamente. Letture insolitamente alte o basse — rispetto al recente range dei valori ROC del simbolo stesso — segnalano condizioni di ipercomprato e ipervenduto.
- **Conferma.** Una rottura accompagnata da un ROC in salita ha velocità dietro di sé; una rottura con un ROC piatto è sospetta.
- **Divergenza.** Il prezzo fa un nuovo massimo mentre il ROC fa un massimo più basso (o lo speculare sui minimi) — il movimento sta decelerando.

## Riferimento impostazioni

Apri la finestra dall'icona a ingranaggio sulla riga dell'indicatore nel pannello **Indicators**.

### Parametri

| Impostazione | Cosa fa |
|---|---|
| **Period** | Numero di periodi usati nel calcolo del ROC. Predefinito: 10. Periodi più brevi lo rendono uno strumento di timing veloce; periodi più lunghi descrivono il regime più ampio. |
| **Use Percent** | Alterna l'output tra variazione percentuale e variazione assoluta del prezzo. |

### Subgraph

| Impostazione | Cosa fa |
|---|---|
| **ROC Color** | Colore della linea del ROC. |
| **Secondary Color** | Colore aggiuntivo opzionale per la visualizzazione. |
| **Subgraph Style** | Come la serie viene disegnata nell'area del grafico. |
| **Line Style** | Stile di rendering della linea. |
| **Line Width** | Spessore della linea. |
| **Use Secondary Axis** | Traccia l'indicatore su un asse dei valori secondario. |

[SCREENSHOT: La finestra delle impostazioni del Rate of Change che mostra Period 10, l'interruttore Use Percent e le opzioni di aspetto del Subgraph | dc-it-rate-of-change-02.png]

## Suggerimenti ed errori comuni

- **Controlla Use Percent prima di confrontare simboli.** Con l'output percentuale le letture sono confrontabili tra strumenti; con l'output assoluto sono in punti di prezzo e hanno significato solo su quel singolo grafico.
- **Non esiste un numero universale di ipercomprato.** Il ROC non è limitato — calibra i livelli estremi per simbolo e per timeframe guardando dove sono avvenute le inversioni passate.
- **ROC e Momentum si sovrappongono.** Misurano la stessa cosa su scale diverse; usarli entrambi su un grafico non aggiunge informazioni. Scegline uno — il ROC se vuoi la normalizzazione percentuale.
- **Attenzione alle distorsioni da singola barra.** Una barra grande che esce dal fondo della finestra di osservazione può muovere la lettura anche quando il prezzo corrente è tranquillo. Periodi più lunghi attenuano questo effetto.

## Articoli correlati

- [[momentum]]
- [[rsi|Relative Strength Index (RSI)]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]