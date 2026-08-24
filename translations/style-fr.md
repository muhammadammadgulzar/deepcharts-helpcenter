# fr style guide + glossary (mined from the old human-written pages)

DEEPCHARTS EN->FR STYLE GUIDE (derived from the human-written French pages at deepcharts.com/fr/helpcenter)

1. Register — vouvoiement, always. The human pages use formal "vous" exclusively ("vous devrez choisir", "Vous verrez", "vous pouvez lui donner n'importe quel nom"). Never "tu". Tone is professional, technical, direct — no marketing fluff, no exclamation marks.

2. Step-by-step instructions — 2nd-person-plural imperative, one action per step, matching the human pages: "Cliquez sur…", "Sélectionnez…", "Accédez à…", "Saisissez…", "Faites un clic droit…", "Téléchargez…", "Redémarrez…", "Attendez…", "Collez…". Descriptive/explanatory prose uses present indicative ("Le POC représente le niveau de prix avec le volume le plus élevé"). Parameter descriptions may use impersonal "Permet de + infinitive".

3. Titles — sentence case (only first word capitalised): "Fenêtre des ordres", "Problèmes de base de données". How-to titles use "Comment + infinitive": "Comment supprimer les données de marché…".

4. UI element names — reproduce EXACTLY as displayed in the software, in bold, without quotation marks and without translation. The interface is mostly English, so English labels stay: "Cliquez sur le menu Trading", "Sélectionnez Show Orders", "Cliquez sur Select a Connection & Feed Settings", filter values Placed / Executed / Cancelled / Submitted, column headers BID, ASK, LMT, STP, MKT, MBO, MBP. Menu paths use ">" between levels: "Options > Paramètres > Divers". Where the UI itself is localised, use the French label as shown (Paramètres, Divers, Supprimer les données).

5. Product and feature names — DeepCharts, DeepDOM never translated. Proprietary feature names generally kept in English (Deep V Tracker, Volume Bubbles, Heatmap, Important Levels, Spread Bid/Ask, Work Plan). Precedent exists for translating descriptive "Deep …" tool names with "approfondi" in article titles ("Valeurs du profil approfondi" = Deep Profile Values, "Trades approfondis" = Deep Trades); when doing so, keep or gloss the English name so the UI remains findable.

6. First-mention glossing — when keeping an English term or acronym, add a French gloss in parentheses on first mention, mirroring the human pages: "Stratégies OCO (ordre-annulation-ordre)", "Portefeuille (Wallet)", "Objectif de l'amplitude quotidienne moyenne (ADR Target)". Reverse also allowed ("l'orderflow (flux d'ordres)").

7. Anglicisms — established trading jargon stays English and is treated as ordinary French nouns: trading, trader, trade, orderflow, footprint, tick, spread, bid/ask, stop loss, take profit, trailing stop, PnL, heatmap, replay, rollover, prop firm, flat, tape, scalping. Everything that has a standard French financial/computing equivalent is translated: carnet d'ordres, flux de données, courtier, graphique, paramètres, base de données, fenêtre. Genders used on the site: la Heatmap, le DOM, le delta, le footprint, le spread, le tick, le trade, la Value Area, le tape.

8. Typography — French conventions: non-breaking space before : ; ! ? ("Important : le Risk Manager fonctionne côté client."); bold rather than guillemets for emphasis and UI names; acronyms in caps without periods (DOM, POC, OCO, ADR, MBO, MBP, PnL); "&" may be kept in short category labels; em dash "—" kept for appositions as in the source.

9. Warnings/notes — introduced by a bold French label + colon: "Important :", "Remarque :", "Astuce :".

## Glossary

orderflow -> l'orderflow (m., keep English; gloss « flux d'ordres » on first mention)
order book -> carnet d'ordres
market depth -> profondeur de marché
DOM (Depth of Market) -> le DOM (acronym kept)
data feed -> flux de données
real-time data -> données en temps réel
historical data -> données historiques
end-of-day data -> données de fin de journée
chart -> graphique
chart window -> fenêtre graphique
chart trading -> trading sur graphique
workspace -> espace de travail
Work Plan (UI object) -> Work Plan (kept as in UI)
template -> modèle
drawing tools -> outils de dessin
indicator -> indicateur
footprint (chart) -> le footprint (kept)
heatmap -> la Heatmap (kept)
iceberg (order) -> ordre iceberg
delta -> le delta
hidden delta -> delta caché
cumulative delta -> delta cumulé
volume profile -> profil de volume
POC (Point of Control) -> POC (point de contrôle)
value area -> Value Area (f., kept; gloss « zone de valeur »)
imbalance -> déséquilibre
auction theory -> théorie des enchères
Time & Sales -> fenêtre Time & Sales (kept)
tape -> le tape
speed of tape -> vitesse du tape
tick -> le tick
tick-data replay -> replay des données tick
bid / ask -> bid / ask (kept)
spread -> le spread
liquidity -> liquidité
limit order -> ordre limité
market order -> ordre au marché
stop order -> ordre stop
stop loss -> stop loss (m., kept)
take profit -> take profit (m., kept)
trailing stop -> trailing stop (kept)
OCO -> OCO (ordre-annulation-ordre)
working orders -> ordres actifs
filled / executed -> exécuté(s)
cancelled -> annulé(s)
open positions -> positions ouvertes
flatten / go flat -> mise à plat / passer flat
PnL -> PnL (kept)
risk management -> gestion du risque
Risk Manager (feature) -> Gestionnaire du risque (Risk Manager)
broker -> courtier
prop firm -> prop firm (kept)
account -> compte
subscription -> abonnement
symbol subscription -> abonnement aux symboles
billing -> facturation
licence -> licence
symbol -> symbole
settings -> paramètres
window -> fenêtre
database -> base de données
cache -> le cache
rollover -> le rollover (kept)
cleanup -> nettoyage
repair -> réparation
folder -> dossier
download (v.) -> télécharger
install / installation -> installer / installation
troubleshooting -> dépannage
support -> support
error -> erreur
trade (n.) -> le trade
trader -> trader
trading session -> session de trading
timeframe -> intervalle de temps
time zone -> fuseau horaire
price level -> niveau de prix
standard deviation -> écart-type
scanner -> le scanner
correlation -> corrélation
keyboard shortcut -> raccourci clavier
simulation environment -> environnement de simulation
portfolio / wallet -> portefeuille (Wallet)
getting started -> premiers pas
Search articles… (placeholder) -> Rechercher des articles…
View All Articles -> Voir tous les articles
No results found -> Aucun résultat trouvé
Last updated -> Dernière mise à jour
Related articles -> Articles associés