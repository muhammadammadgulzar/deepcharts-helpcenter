---
title: "Commodity Channel Index (CCI)"
slug: "cci"
category: "Indicators & Analysis"
subcategory: "Momentum & Oscillators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Comment le Commodity Channel Index mesure la déviation du prix par rapport à sa moyenne statistique, avec des conseils d'interprétation et tous les paramètres du CCI dans DeepCharts."
keywords: ["CCI", "commodity channel index", "indicateur cci", "CCI de Lambert", "cci surachat survente"]
---

Le Commodity Channel Index (CCI) mesure l'ampleur de la déviation du prix d'un actif par rapport à sa valeur moyenne statistique. Développé par Donald Lambert dans les années 1980 pour les marchés de matières premières, il s'applique aujourd'hui également aux actions, aux devises et aux indices, et constitue un outil de référence pour identifier les conditions de surachat et de survente.

Dans DeepCharts, le CCI dessine une seule ligne dans sa propre zone graphique autour d'une ligne zéro, avec des lignes de seuil de surachat et de survente configurables et une moyenne de lissage optionnelle.

## De quoi s'agit-il

Le CCI répond à la question : le prix est-il anormalement éloigné de sa propre moyenne ? Une valeur fortement positive signifie que le prix se traite bien au-dessus de son niveau habituel sur la fenêtre d'observation ; une valeur fortement négative signifie qu'il se traite bien en dessous. Comme l'indice mesure la déviation plutôt que la variation brute, il est aussi à l'aise pour signaler des opportunités de retour à la moyenne dans les ranges que pour confirmer la force dans les tendances.

## Quand l'utiliser

- Vous tradez des configurations de retour à la moyenne et voulez une mesure statistique de « l'étirement » plutôt qu'une estimation visuelle.
- Vous voulez confirmer la force d'une cassure — une valeur qui se maintient profondément en territoire positif signale une forte déviation haussière qui ne revient pas immédiatement.
- Vous recherchez des divergences entre les extrêmes de prix et les extrêmes de déviation.
- Vous tradez des matières premières ou des futures et voulez l'outil qui a été conçu pour leur comportement cyclique.

## Démarrage rapide

1. Ouvrez un graphique et appuyez sur **Ctrl I** — ou cliquez sur l'icône en forme de graphique à barres dans la barre d'outils du graphique, puis sur **Indicators** — pour ouvrir l'**Indicator List**.
2. Recherchez « Commodity Channel Index » (ou « CCI ») et cliquez sur **+** pour l'ajouter. L'indicateur s'affiche dans sa propre zone graphique sous les barres de prix (voir [[indicator-layout]]).
3. Cliquez sur l'icône d'engrenage sur la ligne de l'indicateur pour ouvrir ses paramètres.
4. Réglez **Input Data** sur Close et choisissez un **Period** — 14 ou 20 sont les points de départ classiques des manuels. Réglez les niveaux de surachat et de survente selon votre zone d'extrême ; +100 et −100 constituent la convention classique.

[SCREENSHOT: Un graphique avec l'indicateur CCI dans sa propre zone sous le prix, la ligne dépassant la ligne de seuil de surachat puis revenant vers zéro | dc-en-cci-01.png]

## Comment le lire

- **Ligne zéro.** Une valeur proche de zéro signifie que le prix se situe à sa moyenne statistique sur la fenêtre. Plus la ligne s'éloigne de zéro, plus le prix est étiré.
- **Zones d'extrême.** La plupart des traders considèrent les valeurs au-delà de ±100 comme la zone d'extrême. Dans un range, un retour à l'intérieur de la zone est un déclencheur classique de retour à la moyenne. Dans une tendance, une valeur qui *se maintient* au-delà de +100 (ou −100) est une preuve de force de la tendance, pas un signal automatique de contre-tendance.
- **Divergence.** Le prix atteint un nouvel extrême alors que le CCI en atteint un moins prononcé — la déviation se réduit et le mouvement pourrait s'essouffler.
- **Le régime d'abord.** La même valeur signifie des choses opposées dans un range et dans une tendance. Déterminez dans quel état de marché vous êtes avant d'agir sur un extrême.

## Référence des paramètres

Ouvrez la boîte de dialogue depuis l'icône d'engrenage sur la ligne de l'indicateur dans le panneau **Indicators**.

### Parameters — General

| Paramètre | Ce qu'il fait |
|---|---|
| **Input Data** | La série de données utilisée pour le calcul du CCI. Voir [[different-types-of-input]]. |
| **Period** | Nombre de périodes dans le calcul. Des périodes plus courtes produisent plus de visites en zone d'extrême ; des périodes plus longues réservent les extrêmes aux mouvements réellement inhabituels. |

### Parameters — Average

| Paramètre | Ce qu'il fait |
|---|---|
| **Enable** | Active ou désactive la ligne de moyenne (lissage) optionnelle. |
| **Average Type** | Méthode de moyenne pour la ligne — Simple, Exponential et autres méthodes. |
| **Periods** | Nombre de périodes pour le calcul de la moyenne. |

### Levels

| Paramètre | Ce qu'il fait |
|---|---|
| **Overbought level** | Position de la ligne de seuil supérieure. ±100 est la convention classique. |
| **Oversold level** | Position de la ligne de seuil inférieure. |
| **Zero line color** | Couleur de la ligne centrale (zéro). |

### Series

| Paramètre | Ce qu'il fait |
|---|---|
| **CCI line color** | Couleur de la ligne CCI principale. |
| **Secondary color** | Couleur supplémentaire optionnelle pour l'affichage. |
| **Average line color** | Couleur de la ligne de moyenne optionnelle. |
| **Display style** | La manière dont la série est dessinée dans la zone graphique. |
| **Line style / Line width** | Style de rendu et épaisseur des lignes. |
| **Use secondary axis** | Trace l'indicateur sur un axe de valeurs secondaire. |

[SCREENSHOT: La boîte de dialogue des paramètres du CCI montrant les paramètres General avec Input Data et Period, la section Average, et la section Levels avec les options de surachat, de survente et de ligne zéro | dc-en-cci-02.png]

## Astuces et erreurs courantes

- **Le CCI n'est pas borné.** Il peut aller bien au-delà de ±100 dans une forte tendance — une valeur de surachat n'est pas, en soi, un signal de vente.
- **Contre-tendance dans les ranges, suivi dans les tendances.** Les valeurs au-delà de ±100 sont matière à retournement à l'intérieur d'un range et matière à continuation à l'intérieur d'une tendance. Appliquer par erreur la stratégie de range à un marché en tendance est l'erreur la plus courante avec le CCI.
- **Lissez avant de raccourcir.** Si la ligne est trop bruitée, activez la section Average plutôt que de réduire le Period — vous conservez la signification statistique de la fenêtre d'observation tout en nettoyant l'affichage.
- **Gardez Input Data cohérent.** Backtestez et tradez avec la même donnée d'entrée ; changer la source de prix modifie l'emplacement des extrêmes.

## Articles associés

- [[rsi|Relative Strength Index (RSI)]]
- [[stochastic-oscillator]]
- [[williams-r|Williams %R]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]
