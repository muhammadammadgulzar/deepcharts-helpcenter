# de style guide + glossary (mined from the old human-written pages)

DEEPCHARTS HELP CENTER — ENGLISH -> GERMAN STYLE GUIDE
(derived from the human-written German pages at deepcharts.com/de/helpcenter and /de/helpcenter/deepdom)

1. FORM OF ADDRESS
- Always the formal "Sie" (capitalized: Sie, Ihr, Ihnen). Never "du". Tone is professional, sober and direct — written for serious traders, no marketing fluff, no exclamation marks.

2. STEP INSTRUCTIONS
- Use the Sie-imperative: "Klicken Sie auf …", "Wählen Sie …", "Verbinden Sie zuerst den Datenfeed", "Stellen Sie sicher, dass …". Never bare infinitive commands ("Klicken auf …") and never du-imperatives ("Klicke").
- How-to article titles use either the "So + verb + Sie" pattern ("So löschen Sie Marktdaten aus DeepCharts-Datenbankordnern") or a plain infinitive phrase ("Märkte richtig hinzufügen", "Tick-Daten abspielen").
- Multi-part guides are labelled "Teil 1", "Teil 2", "Teil 3".

3. UI ELEMENT NAMES
- Buttons, menus, tabs, dropdown entries and settings groups keep their EXACT English label as shown in the product, set in bold or quotation marks: Klicken Sie auf das Menü **Trading**, wählen Sie **Show Orders**; Klicken Sie auf "New" / "Connect" / "Select"; settings groups stay "Data Settings", "Plot Settings", "Source Settings", "Active Icebergs". Never invent a German translation for an English UI string.
- Translate a UI label only when the interface the user actually sees is German (e.g. the Windows dialog "Alle extrahieren").
- File names in bold/italic ("DeepDominstaller.zip", "DeepdomSetup.exe"); order-ticket abbreviations stay as-is (BID, ASK, LMT, STP).

4. PRODUCT AND FEATURE NAMES
- DeepCharts, DeepDOM, DeepGamma and the Deep series (Deep Iceberg, Deep Reload, Deep Liquidity Scan, Deep Print Studio) are never translated. "Help Center" also stays English in site titles.
- Feature names may take a Germanized hyphenated form when used generically in prose: Volume Bubbles -> "Volumen-Bubbles", Orders Window -> "Orders-Fenster", the iceberg detector -> "Iceberg-Detektor". A short German gloss in parentheses is acceptable on first mention: "Deep Iceberg (Iceberg-Detektor)".

5. TERMINOLOGY STRATEGY
- Established orderflow/trading vocabulary stays English and is treated as a German loanword with normal German articles: der Orderflow, das Delta, der Footprint, der Spread, das Tape, die Heatmap, die Order, der Trade, Bid/Ask, der Rollover, das Level.
- General concepts are translated: Orderbuch (order book), Markttiefe (market depth), Liquidität, Volumen, Echtzeitdaten, versteckte Liquidität, Ungleichgewicht (imbalance), Auktionstheorie.
- "Data feed" is one word in prose: "der Datenfeed" (plural Datenfeeds); the compound is "Datenfeed-Einstellung".

6. COMPOUNDS AND SPELLING
- English+German hybrid compounds are hyphenated: Limit-Order, Market-Order, Stop-Loss, Take-Profit, Tick-Daten, MBO-Daten, Cache-Probleme, Bid/Ask-Spread, Support-Ticket, Orderflow-Indikatoren, End-of-Day-Daten, Session-Ungleichgewicht, Tape-Geschwindigkeit.
- Pure German compounds are closed: Lizenzschlüssel, Simulationsumgebung, Volumenprofil, Chartfenster, Risikomanager, Datenbankprobleme, Installationsprobleme.

7. MISCELLANEOUS CONVENTIONS
- Category/navigation labels are short German nouns: Häufige Probleme, Anleitungen, Indikatoren, Funktionen, Einstellungen. "Trading" stays English as a category name.
- Search placeholder / empty-state wording: "Artikel durchsuchen …"; list links: "Alle Artikel anzeigen".
- Support boilerplate: refer users to a Support-Ticket via deepcharts.com or support@deepcharts.com, "mit Screenshots und einer kurzen Beschreibung des Problems".
- Use the em dash ( — ) for asides as the English source does; German quotation marks are not required — the site uses straight quotes around UI labels.

## Glossary

orderflow -> Orderflow (der; untranslated)
order flow analysis -> Orderflow-Analyse
order book -> Orderbuch (das)
DOM (Depth of Market) -> DOM (das Orderbuch)
market depth -> Markttiefe (die)
data feed -> Datenfeed (der; one word)
data feed setting -> Datenfeed-Einstellung
footprint -> Footprint (der; untranslated)
footprint chart -> Footprint-Chart
iceberg order -> Iceberg Order (untranslated; generic: Iceberg-Order)
iceberg detector -> Iceberg-Detektor
delta -> Delta (das; untranslated)
hidden delta -> verstecktes Delta
cumulative delta -> kumuliertes Delta
volume -> Volumen (das)
volume profile -> Volumenprofil (das)
Volume Bubbles (feature) -> Volumen-Bubbles
chart -> Chart (der; untranslated)
chart window -> Chartfenster
chart trading -> Chart-Trading
workspace -> Workspace (der; untranslated)
template -> Vorlage
drawing tools -> Zeichenwerkzeuge
heatmap -> Heatmap (die; untranslated)
liquidity -> Liquidität
hidden liquidity -> versteckte Liquidität
bid/ask -> Bid/Ask (untranslated)
spread -> Spread (der)
Spread Bid/Ask (indicator) -> Bid/Ask-Spread
order -> Order (die)
limit order -> Limit-Order
market order -> Market-Order
stop loss -> Stop-Loss
take profit -> Take-Profit
OCO (order-cancel-order) -> OCO (Order-Cancel-Order)
working/pending orders -> aktive und ausstehende Orders
position -> Position
fill / execution -> Ausführung
trade (noun) -> Trade (der)
to trade -> traden / handeln
market buy / market sell -> Marktkauf / Marktverkauf
aggressive buyers/sellers -> aggressive Käufer / Verkäufer
tape -> Tape (das; untranslated)
speed of tape -> Tape-Geschwindigkeit
Time & Sales -> Time & Sales (untranslated)
tick data -> Tick-Daten
tick-data replay -> Tick-Daten-Wiedergabe / Tick-Daten abspielen
real-time data -> Echtzeitdaten
historical data -> historische Daten
end-of-day data -> End-of-Day-Daten
market data -> Marktdaten
symbol -> Symbol (das)
market -> Markt (der)
session -> Session (die)
imbalance -> Ungleichgewicht (Session-Ungleichgewicht)
absorption -> Absorption
accumulation/distribution -> Akkumulation/Distribution
auction theory -> Auktionstheorie
MBO (market-by-order) -> MBO / MBO-Daten
level -> Level (das; plural Levels)
indicator -> Indikator
oscillator -> Oszillator
momentum -> Momentum (das)
volatility -> Volatilität
bands -> Bänder
trend -> Trend (der)
pattern -> Muster (das)
overlay -> Overlay (das; Chart-Overlays)
scanner -> Scanner (der)
correlation -> Korrelation
alert -> Alarm (der)
threshold -> Schwellenwert
settings -> Einstellungen
general settings -> Allgemeine Einstellungen
connection -> Verbindung
broker -> Broker (der)
prop firm -> Prop-Firma (plural Prop-Firmen)
subscription -> Abonnement (das)
license -> Lizenz
license key -> Lizenzschlüssel
activation -> Aktivierung
install / installation -> installieren / Installation
download (verb) -> herunterladen
database -> Datenbank
cache -> Cache (der)
rollover -> Rollover (der)
cleanup -> Bereinigung
repair -> Reparatur
risk management -> Risikomanagement
risk manager -> Risikomanager
simulation environment -> Simulationsumgebung
Orders Window -> Orders-Fenster
account -> Konto
billing -> Abrechnung
performance -> Performance (die)
machine (computer) -> Rechner
keyboard shortcut -> Tastenkürzel
troubleshooting -> Fehlerbehebung
common issues -> Häufige Probleme
how to (category) -> Anleitungen
features (category) -> Funktionen
getting started -> Erste Schritte
support ticket -> Support-Ticket
search placeholder -> "Artikel durchsuchen …"
view all articles -> Alle Artikel anzeigen