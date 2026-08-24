---
title: "Opzioni di visualizzazione del grafico (stili di barra, sessioni, countdown)"
slug: "chart-display-options"
category: "Charts & Workspace"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Il menu a discesa a due candele spiegato: stili candlestick/linea/OHLC, candele equi-volume e delta-volume, interruttore di sessione ETH/RTH, filtro d'asta, valori delle barre e countdown."
keywords: ["stile barra", "grafico a linea", "OHLC", "barre equi-volume", "barre delta-volume", "sessione ETH", "RTH", "filtro asta", "timer countdown", "valori barre", "colori candele", "larghezza candele"]
source_hash: "ef4e8ba50ad718eb"
ai_translated: true
source_hash: "ef4e8ba50ad718eb"
---
Il modo più veloce per cambiare l'aspetto di un grafico in DeepCharts è l'icona a due candele in alto a sinistra di ogni finestra grafico. Il suo menu a discesa contiene lo stile delle barre (candlestick, linea, OHLC), due modificatori visivi che codificano volume e delta nelle candele, l'interruttore di sessione ETH/RTH, il filtro d'asta, il riquadro dei valori delle barre e il countdown alla chiusura della barra.

Diversi di questi interruttori sono scorciatoie verso impostazioni che vivono anche nella finestra di dialogo **Price Settings** — questo articolo ti dice quali, così sai sempre dove si trova l'impostazione "vera". Per la finestra di dialogo completa, vedi [[price-chart-settings]].

## Che cos'è

Il menu a discesa dello stile delle barre è il menu rapido di visualizzazione del grafico. Risponde a "come passo a un grafico a linea", "perché le mie candele hanno larghezze diverse o colori strani", "come nascondo i dati notturni" e "come ottengo un countdown alla chiusura della barra" — tutto senza aprire una finestra di impostazioni.

[SCREENSHOT: Il menu a discesa dell'icona a due candele aperto su un grafico, con Candlestick evidenziato come attivo, Line, OHLC, le caselle Equi-Volume Bars e Delta-Volume Bars, ETH Session selezionato, Auction filter, Bar values selezionato, Countdown timer e la voce Price Settings in fondo | dc-it-chart-display-options-01.png]

## Quando usarlo

- Passare tra rendering candlestick, linea e OHLC.
- Attivare candele a larghezza-volume (Equi-Volume) o candele colorate in base al delta (Delta-Volume).
- Mostrare solo le Regular Trading Hours, o l'intera sessione ETH incluse le ore notturne.
- Attivare o disattivare il riquadro OHLC in alto a sinistra e il countdown alla chiusura della barra.
- Saltare alla finestra di dialogo completa **Price Settings**.

## Avvio rapido

1. Fai clic sull'icona a due candele in alto a sinistra del grafico.
2. Scegli uno stile di base: **Candlestick** (predefinito), **Line** o **OHLC** — sono esclusivi, e quello attivo è evidenziato.
3. Facoltativamente seleziona **Equi-Volume Bars** e/o **Delta-Volume Bars** — sono caselle di controllo stratificate sopra lo stile di base, ed entrambe possono essere attive contemporaneamente.
4. Il grafico si ridisegna immediatamente (il filtro d'asta è l'unica voce che attiva una ricostruzione completa).

## Come leggerlo

**Candele Equi-Volume:** la larghezza codifica il volume della barra rispetto alle altre candele — una candela larga ha scambiato molto, una sottile molto poco. Lo scopo è vedere all'istante se un grande movimento ha avuto volume reale dietro, o se un book sottile ha permesso a un piccolo ordine aggressivo di spostare il prezzo di molto — giudicarlo mentalmente da un istogramma di volume in tempo reale è difficile.

**Candele Delta-Volume:** l'intensità del colore codifica il delta. Colore pallido = delta basso; colore intenso = delta alto. Verde più scuro = più compratori aggressivi (delta positivo); rosso più scuro = più venditori aggressivi (delta negativo). Sei nuovo al delta? Inizia con [[orderflow-101]].

**Riquadro dei valori delle barre:** i campi **O: H: L: C:** in alto a sinistra più **%V** (variazione percentuale dalla chiusura del giorno precedente), **ΣV** e **ΔV** (i dati di volume della barra [CONFIRM: exact definitions of ΣV and ΔV]). I valori si popolano per la barra su cui passi il mouse, o per l'ultima barra quando il cursore è fuori dal grafico.

Sei nuovo alla lettura di O, H, L e C su una candela? Passa il mouse sulla candela qui sotto — ogni zona si spiega da sola, e puoi alternarla tra rialzista e ribassista.

[WIDGET: candle-anatomy]

[SCREENSHOT: Confronto affiancato dello stesso movimento di prezzo come candlestick standard e con Equi-Volume + Delta-Volume attivi, con larghezze delle candele variabili e differenze di intensità verde/viola | dc-it-chart-display-options-02.png]

## Riferimento impostazioni

Voci nell'ordine in cui appaiono nel menu a discesa:

| Voce | Cosa fa |
|---|---|
| **Candlestick** | Candele standard. Stile di base predefinito. |
| **Line** | Una linea continua che collega i prezzi di chiusura di ogni candela. |
| **OHLC** | Barre open/high/low/close — barre verticali con tacche di apertura e chiusura. |
| **Equi-Volume Bars** | Modificatore a casella di controllo: larghezza della candela = volume scambiato. Scorciatoia verso **Price Settings → VOLUME → Width based volume** (stessa impostazione, due posti). |
| **Delta-Volume Bars** | Modificatore a casella di controllo: intensità del colore della candela = delta. Scorciatoia verso **Price Settings → DELTA → Color based on delta**. Combinabile con Equi-Volume. |
| **ETH Session** | Attivo per impostazione predefinita: il grafico mostra tutte le Electronic Trading Hours incluse le ore notturne. Disattivo: le barre ETH vengono nascoste e viene mostrata solo la price action delle Regular Trading Hours. Inverso di **Price Settings → DATA → RTH - only** (stesso interruttore). |
| **Auction filter** | Disattivo per impostazione predefinita. Rimuove i dati delle aste di apertura/chiusura dai calcoli — il comportamento esatto può variare [CONFIRM: precisely which auction prints are excluded]. Stessa impostazione di **Price Settings → Exclude Auction (Tick Data)**. Attivarlo ricostruisce l'intero grafico. |
| **Bar values** | Attivo per impostazione predefinita. Mostra/nasconde il riquadro in alto a sinistra (O H L C, %V, ΣV, ΔV). |
| **Countdown timer** | Mostra un riquadro 00:00 che conta alla rovescia fino alla chiusura della candela corrente, in fondo alla scala dei prezzi (un grafico a 5 minuti conta 5 minuti per candela). La posizione del riquadro è configurabile in **Price Settings → COUNTDOWN**: la modalità **Axis** lo fissa alla scala, la modalità **Floating** lo rende un riquadro libero che puoi trascinare ovunque. |
| **⚙ Price Settings** | Apre la finestra di dialogo completa Price Settings — vedi [[price-chart-settings]]. |

> **Nota:** Attivare **Auction filter** mostra lo spinner **Building chart** mentre l'intero grafico viene ricostruito. La breve attesa è normale — non si è rotto nulla.

### Altri controlli di visualizzazione altrove

- **Tipo di barra e timeframe** (minuti, Range, Renko, Volume, barre Delta...) si scelgono nel menu a discesa del timeframe nella barra del titolo o in **Price Settings → Param Type** — vedi [[price-chart-settings]].
- **Finestre di sessione personalizzate** (per esempio solo le prime due ore dopo l'apertura) e la linea verticale di inizio giornata si configurano in **Price Settings → CUSTOM TIME SESSION** e **LINE START DAY**.
- Sfondo del grafico, griglia e colori del testo vivono in clic con il tasto destro → **Properties** — vedi [[chart-window]].

## Suggerimenti ed errori comuni

- **"Le mie candele sembrano sbiadite / i colori sono strani"** — la modalità Delta-Volume è attiva. L'intensità codifica il delta; non è un tema rotto. Deseleziona **Delta-Volume Bars** per tornare indietro.
- **"Le mie candele hanno larghezze diverse"** — la modalità Equi-Volume è attiva; la larghezza codifica il volume.
- **"Il mio grafico mostra candele diverse da quelle del mio collega"** — controlla prima l'interruttore **ETH Session**: uno di voi è probabilmente in modalità solo-RTH. Nozioni di base sulle sessioni: [[understanding-market-structure-sessions]].
- **"Il countdown resta a 00:00"** — su un feed ritardato o inattivo non ci sono tick in tempo reale a guidarlo; vedi [[free-delayed-data-feed]].
- **"Il mio riquadro OHLC è vuoto"** — i campi si popolano solo mentre passi il mouse sulle barre (o dall'ultima barra); se non si popolano mai, verifica che **Bar values** sia selezionato.
- I due modificatori a casella di controllo e gli stili di base sono indipendenti: passare da Candlestick a Line mantiene Equi-Volume/Delta-Volume selezionati.

## Articoli correlati

- [[price-chart-settings]]
- [[chart-window]]
- [[understanding-market-structure-sessions]]
- [[orderflow-101]]
- [[quick-chart-templates]]