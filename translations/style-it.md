# Italian style guide + glossary (mined from the old human-written pages)

DEEPCHARTS HELP CENTER — ENGLISH > ITALIAN STYLE GUIDE
(derived from the human-written Italian pages at deepcharts.com/it/helpcenter and /it/helpcenter/deepdom, incl. the heatmap, volume-bubbles, deep-iceberg, orders-window, replay-tick-data, data-feed-setting and simulation-environment articles)

1. REGISTER — informal "tu", never "Lei"
- Address the reader as "tu" throughout: "La finestra Ordini ti offre una vista centralizzata di tutti i tuoi ordini", "ti consente di", "puoi esercitarti a inserire ordini", "il tuo strumento", "i tuoi conti reali".
- Capability statements: prefer "puoi + infinito" or "ti consente di"; the impersonal "è possibile" appears occasionally and is acceptable for variety, but "tu" is the default voice.
- Exception: legal/risk-disclaimer boilerplate stays formal and impersonal ("Gli strumenti per futures, valute e opzioni comportano un rischio sostanziale"). Do not carry the "tu" voice into disclaimers, privacy or licensing legal text.

2. STEP-BY-STEP INSTRUCTIONS — second-person singular imperative
- Every numbered step starts with a tu-imperative: "Apri", "Vai su", "Seleziona", "Inserisci", "Imposta", "Scegli", "Collega", "Usa", "Assicurati che…". Attested: "Fai clic su Opzioni", "Seleziona Tick Data Replay dal menu", "Inserisci il nome utente e la password che hai ricevuto", "Assicurati che il cerchio diventi verde".
- Never use infinitive-style instructions ("Fare clic…") or Lei forms ("Clicchi…"); one older page uses infinitives — treat it as legacy, not the standard.
- "Click" = "Fai clic su" (house standard; "Clicca su" appears and is tolerated in older pages). Right-click = "fai clic con il tasto destro del mouse". Dropdown = "menu a discesa". Double-click = "fai doppio clic su".
- Results of an action use the future/reflexive: "Si aprirà la finestra Ordini, mostrando i tuoi ordini attuali."

3. UI ELEMENT NAMES — quote the product, don't translate it
- Reproduce UI labels exactly as they appear in the software, usually bold. Where the product UI is English, KEEP the English label: "Source Settings", "Select Symbols", "Start Date", "Play", "Pause", "Speed", "Reset", "Trading Panel", "Volume Filter", "Bubble Mode", "Filter min / Filter max", "Iceberg timeout seconds".
- Where the product surface is localised, use its Italian label: "Opzioni", "Impostazioni", "Mostra Ordini", "Salva e chiudi", "Gestione simboli", "Conto SIM", "Saldo iniziale".
- On first mention, an English feature/label may take an Italian gloss in parentheses: "Deep Iceberg (Rilevatore di ordini Iceberg)", "Volume Bubbles (bolle di volume)", "Highest Visible Limit Order (ordine limit visibile più alto)". Gloss once, then use the English name alone.

4. PRODUCT & FEATURE NAMES — never translated
- DeepCharts, DeepDOM, Deep Iceberg, Deep Reload, Deep Liquidity Scan, Volume Bubbles, Heatmap, Time & Sales, VWAP, CVD, DOM, MBO/MBP stay in English. (Legacy body text sometimes writes "DeepDom"; standardise on DeepDOM.)
- Gender of borrowed names: masculine by default ("il DOM", "il feed dati", "l'orderflow", "il replay"); "Heatmap" is feminine ("la Heatmap").

5. TERMINOLOGY POLICY
- Keep established English trading jargon untranslated and invariable: orderflow, trader, trading, broker, prop firm, exchange, spread, bid/ask, tick, delta, stop loss, take profit, rollover, workspace, template, toolbar, cache, database, footprint.
- Translate generic concepts: liquidità, profondità del mercato, grafico, ordine, posizione, esecuzione, impostazioni, finestra, pannello, saldo, sessione.
- Hybrids follow the human pages: "ordine limit", "ordini a mercato", "dati tick", "feed dati", "book di negoziazione", "conto SIM".
- "account": use "conto" for trading/SIM/broker accounts ("conti SIM", "i tuoi conti reali") and "account" for platform login/user accounts ("account DeepCharts").
- English plurals of loanwords are invariable in Italian: "i tick", "gli ordini limit", "i feed dati" (never "feeds", "ticks").

6. TONE & MECHANICS
- Tone is expert but warm and direct, occasionally vivid ("La Heatmap è il cuore pulsante di DeepDom"). Marketing-flavoured intros are fine; steps stay terse.
- Headings and article titles in sentence case: "Finestra degli ordini", "Ambiente di simulazione", "Connessione al feed dati / Impostazioni del feed dati".
- Keep em dashes (—) from source. Numbers/dates follow Italian conventions (decimal comma) except inside quoted UI values.
- Placeholder/empty-state microcopy is informal imperative: search placeholder "Cerca negli articoli…", link "Vedi tutti gli articoli", closing encouragements are allowed ("Apri il grafico e visualizza i tuoi dati!").

## Glossary

orderflow / order flow -> orderflow (m. inv.; "l'orderflow", "trading orderflow")
order book -> book di negoziazione (anche: book d'ordine; mai "libro degli ordini")
DOM / Depth of Market -> DOM (m.: "il DOM")
market depth -> profondità del mercato
data feed -> feed dati (m. inv.)
data feed connection -> connessione al feed dati
data feed settings -> impostazioni del feed dati
footprint -> footprint (m. inv., non tradotto)
iceberg order -> ordine iceberg
iceberg detector -> rilevatore di ordini iceberg
hidden liquidity -> liquidità nascosta
hidden delta -> delta nascosto
delta -> delta (m. inv.)
cumulative volume delta (CVD) -> CVD (glossa: delta cumulativo)
volume profile -> Volume Profile (nome funzione; concetto: profilo del volume)
chart -> grafico
price chart -> grafico dei prezzi
chart trading -> trading dal grafico
workspace -> workspace (m. inv.)
template -> template (m. inv.)
drawing tools -> strumenti di disegno
indicator -> indicatore
chart overlay -> overlay del grafico (m. inv.)
oscillator -> oscillatore
momentum -> momentum (m. inv.)
trend -> trend (m. inv.)
volatility -> volatilità
bands -> bande
levels -> livelli
pattern -> pattern (m. inv.)
auction theory -> teoria dell'asta
imbalance -> squilibrio (nomi funzione come "Session Imbalance" restano in inglese)
liquidity -> liquidità
limit order -> ordine limit
market order -> ordine a mercato
stop loss -> stop loss (m. inv.)
take profit -> take profit (m. inv.)
active / working orders -> ordini attivi
pending orders -> ordini pendenti
position -> posizione
execution / fill -> esecuzione
market buy / market sell -> acquisto a mercato / vendita a mercato
aggressive buyers / sellers -> compratori / venditori aggressivi
bid / ask -> bid / ask (invariati; mai "denaro/lettera")
spread -> spread (m. inv.)
tick -> tick (m. inv.)
tick data -> dati tick
tick-data replay -> replay dei dati tick
playback speed -> velocità di riproduzione
real-time data -> dati in tempo reale
historical data -> dati storici
end-of-day data -> dati di fine giornata
market data -> dati di mercato
database folders -> cartelle del database
rollover -> rollover (m. inv.)
cache -> cache (f. inv.)
connection -> connessione
broker -> broker (m. inv.)
prop firm -> prop firm (f. inv.)
exchange -> exchange (m. inv.)
symbol -> simbolo
symbol management (UI) -> Gestione simboli
symbol subscription -> sottoscrizione dei simboli
instrument -> strumento (finanziario)
trading session -> sessione di trading
simulation environment -> ambiente di simulazione
SIM account -> conto SIM
paper trading -> trading in simulazione
account (trading/broker) -> conto
account (login/platform) -> account
balance -> saldo ("Saldo iniziale")
risk manager -> Responsabile del rischio (titolo attestato)
risk management -> gestione del rischio
portfolio -> portafoglio
heatmap -> Heatmap (f.: "la Heatmap"; glossa: mappa termica)
volume bubbles -> Volume Bubbles (glossa: bolle di volume)
Time & Sales -> Time & Sales (invariato)
scanner -> scanner (m. inv.)
correlation -> correlazione
MBO / MBP -> dati MBO (Market By Order) / dati MBP (Market By Price)
order reload -> ripristino (degli ordini); la funzione "Deep Reload" resta invariata
toolbar -> toolbar (f. inv.)
trading panel -> pannello di trading
Orders Window -> finestra Ordini
dropdown menu -> menu a discesa
right-click -> fai clic con il tasto destro del mouse
settings -> impostazioni
Options (menu) -> Opzioni
license -> licenza
subscription (plan) -> abbonamento
billing -> fatturazione
troubleshooting -> risoluzione dei problemi
keyboard shortcut -> scorciatoia da tastiera
search placeholder "Search articles…" -> "Cerca negli articoli…"
"View all articles" -> "Vedi tutti gli articoli"