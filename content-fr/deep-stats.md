---
title: "Deep Stats"
slug: "deep-stats"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Tableau de statistiques d'orderflow par barre affichant volumes, delta, valeurs COT, ratios et mesures d'effort sous votre graphique."
keywords: ["deep stats", "deepstats", "statistiques orderflow", "COT H", "COT L", "delta cumulé", "delta pourcentage", "tableau statistiques barre", "tableau stats sous graphique"]
---

Deep Stats affiche un tableau texte multi-niveaux sous votre graphique, avec une colonne par barre. Chaque ligne est une mesure d'orderflow (flux d'ordres) — volume total, delta, nombre de trades, valeurs COT, ratios, effort — pour lire les chiffres derrière chaque bougie au lieu de les deviner d'après sa forme.

Là où les outils footprint vous montrent où le volume s'est échangé à l'intérieur de la barre, Deep Stats condense chaque barre en un ensemble de chiffres comparables. C'est la radiographie numérique de la bougie.

## De quoi s'agit-il

Deep Stats est un indicateur de statistiques d'orderflow qui affiche une grille de texte sous le graphique de prix. Chaque barre terminée reçoit une colonne de valeurs, et la couleur des cellules évolue avec l'intensité statistique afin que les valeurs aberrantes ressortent d'un coup d'œil. Il répond à des questions comme « quel delta cette barre a-t-elle réellement eu ? », « cette poussée a-t-elle été absorbée ? » et « le volume s'assèche-t-il sur ces sommets ? »

[SCREENSHOT: Fenêtre graphique avec Deep Stats appliqué — bougies de prix en haut et le tableau texte multi-niveaux Deep Stats dans un panneau en dessous, avec plusieurs lignes de mesures (Tot Vol, Delta Vol, Delta %, COT Bar) visibles et une cellule aberrante fortement colorée | dc-en-deep-stats-01.png]

## Quand l'utiliser

- Vous voulez une confirmation barre par barre de ce que la forme de la bougie suggère (delta réel, nombre de trades, intensité) avant d'agir.
- Vous traquez l'absorption : effort élevé ou lectures COT à contre-sens alors que le prix bouge à peine.
- Vous cherchez des indices d'épuisement sur les sommets ou les creux via les colonnes High Ratio et Low Ratio.
- Vous suivez le delta cumulé (CVD) numériquement à côté du prix plutôt que sous forme de tracé séparé.

## Démarrage rapide

1. Ouvrez l'**Indicator List** sur votre graphique.
2. Trouvez **Deep Stats** et cliquez sur **+** pour l'ajouter.
3. Cliquez sur l'icône **Settings** à côté de Deep Stats.
4. Sous **Data Settings**, choisissez votre **Input Data** (**Volume**, **Order** ou **Aggregate Trades** — voir [[different-types-of-input]] pour la signification de chacun). **Volume** est le point de départ naturel.
5. Dans la section **Subgraphs**, réglez le **Series style** de chaque mesure dont vous n'avez pas besoin sur **Ignore**. Un ensemble de départ compact : **Tot Vol**, **Delta Vol**, **Delta %**, **Delta Dly**, **COT Bar**.
6. Cliquez sur appliquer/enregistrer et vérifiez que le tableau s'affiche sous le graphique.

[SCREENSHOT: Boîte de dialogue des paramètres Deep Stats ouverte sur la section Data Settings, montrant le menu déroulant Input Data déployé avec les options Volume, Order et Aggregate Trades, ainsi que les champs Min Filter et Max Filter | dc-en-deep-stats-02.png]

## Comment le lire

Chaque colonne est une barre ; chaque ligne est une mesure. L'intensité de la couleur des cellules est basée sur les écarts-types, donc une cellule fortement colorée signifie « statistiquement inhabituel pour cet instrument en ce moment ».

| Mesure | Ce qu'elle vous indique |
|---|---|
| **Tot Vol / Bid Vol / Ask Vol / Delta Vol** | Les bases du volume : total échangé, vendu au bid, acheté à l'ask, et la différence nette. |
| **Max Delta Vol / Min Delta Vol** | Les extrêmes de delta atteints dans la barre — une barre peut clôturer avec un delta neutre après une oscillation interne violente. |
| **Tot NT / Delta NT** | Nombre de trades et différentiel du nombre de trades ask vs bid. |
| **Delta HL** | Nombre de ticks entre le plus haut et le plus bas de la barre. |
| **Delta %** | Delta Vol en pourcentage du Tot Vol : (Delta Vol / Tot Vol) × 100. |
| **Delta Dly** | Delta de volume cumulé courant (CVD). |
| **Vol(s)** | Volume par seconde — intensité de trading. |
| **COT H** | Delta cumulé du dernier plus bas jusqu'à la clôture. Un COT H négatif sur une barre baissière est un signal d'absorption haussière. |
| **COT L** | Delta cumulé du dernier plus haut jusqu'à la clôture. Un COT L positif sur une barre haussière est un signal d'absorption baissière. |
| **COT Bar** | Affiche automatiquement COT H sur les barres haussières et COT L sur les barres baissières. |
| **Time(s)** | Durée de la barre en secondes — contextualise les chiffres de volume. |
| **Bar Ratio / High Ratio / Low Ratio** | Ratios de volume tick avant-dernier/dernier. Un High Ratio faible signale un épuisement des acheteurs sur les sommets ; un Low Ratio faible signale un épuisement des vendeurs sur les creux. |
| **Total Effort / Delta Effort** | Volume (ou delta) rapporté à l'amplitude de la barre. Un effort élevé avec peu de mouvement de prix pointe vers de l'absorption. |

Lectures pratiques :

- **Absorption** : COT H négatif sur des barres baissières (les acheteurs absorbent la vente), COT L positif sur des barres haussières (les vendeurs absorbent l'achat), ou Effort élevé alors que le prix avance à peine.
- **Épuisement** : un High Ratio faible à l'approche d'une résistance ou un Low Ratio faible à l'approche d'un support suggère que l'agresseur est à court d'ordres.
- **Changements d'intensité** : Vol(s) qui bondit pendant que Time(s) se réduit signifie que la participation s'accélère.

## Référence des paramètres

Regroupés comme dans la boîte de dialogue des paramètres.

### Data Settings

| Paramètre | Ce qu'il fait |
|---|---|
| **Input Data** | Source de données pour les calculs : **Volume**, **Order** ou **Aggregate Trades**. Voir [[different-types-of-input]]. |
| **Min Filter** | Seuil minimum de taille de trade ; les trades plus petits sont exclus des statistiques. |
| **Max Filter** | Seuil maximum de taille de trade ; **0** signifie aucun filtre maximum. |

### Plot Settings

| Paramètre | Ce qu'il fait |
|---|---|
| **Dev. std. for Coloring** | Contrôle l'agressivité de l'échelle de couleur des cellules selon l'écart-type, ainsi que la taille/couleur du texte, le format des nombres (**Auto Text Format** compacte les grands nombres) et l'ordre des cellules. |
| **Settings-Header** | Visibilité, couleurs et taille de la ligne d'en-tête. |
| **Threshold** | Met en surbrillance les cellules lorsque les mesures choisies dépassent les seuils que vous définissez. |

### Subgraphs

| Paramètre | Ce qu'il fait |
|---|---|
| **Series style** (par mesure) | **Text** affiche la ligne de la mesure ; **Ignore** la masque. |
| **Colors** (par mesure) | Couleur de cellule utilisée pour la ligne de cette mesure. |

## Astuces et erreurs courantes

- **Commencez minimal.** Activer toutes les mesures noie les plus utiles. Réglez tout ce que vous ne lisez pas activement sur **Ignore**, puis rajoutez des lignes au fur et à mesure de vos besoins.
- **Utilisez Auto Text Format** si les longs nombres sont tronqués — il compacte les valeurs pour que les colonnes restent lisibles.
- **Ne lisez pas COT H/COT L isolément.** Ce sont des indices d'absorption, pas des signaux d'entrée — confirmez avec la structure et le tape (voir [[adv-time-and-sales]]).
- **Adaptez le Min Filter à l'instrument.** Un filtre qui isole la taille institutionnelle sur un contrat élimine presque tout sur un contrat moins liquide.
- **La surbrillance par Threshold vaut mieux que la contemplation.** Si vous ne vous intéressez, par exemple, qu'aux Delta % démesurés, définissez un Threshold pour que le tableau vous les signale.

## Articles associés

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[deep-print]]
- [[deep-trades]]
- [[on-candle-stats]]
