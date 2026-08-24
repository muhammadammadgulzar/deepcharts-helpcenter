---
title: "Confluence Identifier"
slug: "confluence-identifier"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "advanced"
time: "7 min read"
description: "Trouvez automatiquement des zones de support et de résistance à forte probabilité où les niveaux du profil de volume, les swings de prix et les retracements s'alignent."
keywords: ["confluence identifier", "confluence", "zones support résistance", "niveaux profil de volume", "poc value area", "zones de confluence", "confluance"]
---

La plupart des niveaux de support et de résistance solides le sont parce que plusieurs raisons indépendantes pointent vers le même prix : un POC de profil, un swing antérieur, un niveau de retracement. Le Confluence Identifier automatise ce raisonnement — il identifie des zones de support et de résistance à forte probabilité en combinant plusieurs sources de données de marché et en mettant en évidence les prix où elles s'alignent.

C'est l'un des indicateurs les plus configurables de DeepCharts, aussi cette référence passe en revue chaque groupe de paramètres dans l'ordre où la boîte de dialogue les présente.

## De quoi s'agit-il

Le Confluence Identifier détecte les zones de confluence à partir de trois familles d'éléments :

- **Niveaux de Volume Profile** — POC, bords de la Value Area, Peaks et Valleys issus de jusqu'à trois profils Volume By Price distincts.
- **Swings de price action** — hauts et bas de swing détectés par un moteur Zig Zag.
- **Niveaux de retracement de tendance** — retracements de 38,2 %, 50 %, 61,8 % et 75 % du swing principal.

Lorsqu'un nombre suffisant de ces éléments se situe dans une plage de prix définie (votre sensibilité en ticks), l'indicateur met cette plage en évidence comme zone potentielle de support ou de résistance. Les zones soutenues par davantage de confluences sont visuellement accentuées comme plus fortes.

Si les niveaux de profil sont la famille qui vous est la moins familière, essayez le profil de volume interactif ci-dessous — survolez les lignes et faites glisser le pourcentage de Value Area pour voir d'où proviennent le POC, le VAH et le VAL :

[WIDGET: volume-profile-lab]

## Quand l'utiliser

- Pour construire une carte de niveaux objective : au lieu de choisir les niveaux à la main, vous définissez les éléments de preuve et l'indicateur note chaque prix selon la quantité de preuves qui s'y accumule.
- Pour classer les zones par force — une zone à 5 confluences est une proposition de trading différente d'une zone à 2 confluences, et la coloration le reflète.
- Pour combiner l'analyse de profil et la price action dans une seule vue sans exécuter une demi-douzaine d'études séparées.
- Pour cadrer vos trades : les zones de confluence sont des emplacements naturels pour les entrées, les stops et les objectifs lorsqu'elles s'alignent avec votre lecture directionnelle.

## Démarrage rapide

1. Ouvrez un graphique et cliquez sur l'icône en forme de graphique à barres dans le coin supérieur gauche pour ouvrir le panneau **Indicators**.
2. Cliquez sur **Indicators** pour ouvrir la liste complète **Indicator List**.
3. Recherchez « Confluence Identifier » et cliquez sur **+** pour l'ajouter.
4. Cliquez sur l'icône d'engrenage à côté de l'indicateur pour ouvrir ses paramètres. Commencez modestement : activez un profil Volume By Price et les swings Zig Zag, et laissez les retracements désactivés jusqu'à ce que vous ayez une bonne idée du résultat.
5. Au fur et à mesure que vous activez plus de sources, augmentez **Minimum Number of Confluences** et réduisez **Tick Sensitivity** afin que seules les zones les plus significatives subsistent. Une configuration de travail issue de la documentation utilise trois Volume Profiles, les swings de prix et les retracements du dernier swing avec un minimum de 5 confluences et une sensibilité de 3 ticks.

[SCREENSHOT: Un graphique de futures avec le Confluence Identifier actif — plusieurs zones de support/résistance ombrées d'intensité de couleur variable, la zone la plus forte se situant là où un POC de profil, un bas de swing et un niveau de retracement s'alignent | dc-en-confluence-identifier-01.png]

## Comment le lire

- **Chaque zone mise en évidence est une plage de prix où plusieurs éléments se sont alignés** dans les limites de votre sensibilité en ticks. Les zones au-dessus du prix font office de résistance candidate, celles en dessous de support candidat.
- **La couleur encode la force.** Les paramètres Support & Resistance Colors lient la couleur de la zone au nombre de confluences, de sorte que les zones plus fortes (plus de confluences) ressortent — traitez-les comme les niveaux de décision principaux.
- **Moins de zones plus larges ou plus de zones plus étroites : c'est votre arbitrage.** Des valeurs plus petites de **Tick Sensitivity** produisent des zones plus précises ; des valeurs plus grandes produisent des zones plus larges. Un **Minimum Number of Confluences** plus élevé donne des zones moins nombreuses mais plus fortes.
- **Les zones sont des emplacements, pas des directions.** L'indicateur vous dit où une réaction est probable, pas dans quel sens le prix va casser ; combinez-le avec votre lecture de la tendance et de l'orderflow (flux d'ordres).

## Référence des paramètres

### Data Settings

| Paramètre | Fonction |
|---|---|
| **Input Data** | Ce que les profils mesurent : **Volume** (volume échangé à chaque niveau de prix) ou **Orders** (nombre d'ordres exécutés). Voir [[different-types-of-input]]. |
| **Filter Min** | Seuil minimum qui filtre les valeurs insignifiantes. |
| **Filter Max** | Seuil maximum ; 0 = pas de filtre maximum. |

### Confluence Settings

| Paramètre | Fonction |
|---|---|
| **Tick Sensitivity** | La plage de prix, en ticks, à l'intérieur de laquelle les éléments comptent comme alignés. Valeurs plus petites = zones plus précises ; valeurs plus grandes = zones plus larges. |
| **Minimum Number of Confluences** | Combien d'éléments doivent s'aligner pour créer une zone. Des valeurs plus élevées donnent des zones moins nombreuses mais plus fortes ; des valeurs plus faibles produisent des zones plus fréquentes. |
| **Starting Mode** | Où commence le calcul : **Zig Zag** (utilise les swings de prix basés sur la logique Zig Zag) ou **Date** (démarre à une date précise). |
| **Start Date** | La date de départ, utilisée lorsque le mode **Date** est sélectionné. |
| **Absolute % of Reversal for Zig Zag Trend** | Le retournement de prix minimum utilisé pour identifier les points de swing qui déterminent le début du calcul. |
| **Number of Swings** | Combien de swings sont pris en compte pour déterminer le point de départ du calcul. |

### Zig Zag Swing Settings

| Paramètre | Fonction |
|---|---|
| **% Absolute Variation for Zig Zag Inversion** | Le pourcentage de retournement de prix utilisé pour identifier les swings qui alimentent le calcul de confluence. |
| **Enable Zig Zag Swing** | Inclut les hauts et bas de swing comme éléments de confluence. |
| **Include Swings in the First Half** | Activé : les points de swing plus anciens sont inclus. Désactivé : seuls les swings récents sont pris en compte. |

> **Remarque :** Il y a deux Zig Zags dans cet indicateur, et ils remplissent des rôles différents. Le premier (dans Confluence Settings) sert uniquement à déterminer la date de début du calcul et peut utiliser un pourcentage plus grand. Le second (ici) identifie les swings utilisés pour les confluences et doit utiliser un **pourcentage plus petit** afin d'inclure les swings mineurs.

### Volume By Price Profiles

Jusqu'à trois profils Volume By Price distincts peuvent être activés, chacun avec son propre bloc :

| Paramètre | Fonction |
|---|---|
| **Enable** | Active ou désactive ce profil. |
| **Profile Settings** | Type de profil — Daily, Weekly, Monthly ou Composite — plus le regroupement de ticks et les seuils de volume. |
| **Enablements** | Quels éléments du profil participent à la confluence : POC, Value Area, Peaks, Valleys, Delta Imbalances. |
| **Visual Appearance** | Couleurs, épaisseur et style de ligne pour les niveaux de ce profil. |
| **Include by Number** | Bascule entre un nombre fixe de profils récents et tous les profils depuis la date de début. |
| **Number of Profiles** | Combien de profils récents sont utilisés lorsque l'option fixe est activée. |

### Trend Retracement Enables

| Paramètre | Fonction |
|---|---|
| **Enable Retracements** | Ajoute les niveaux de retracement (38,2 %, 50 %, 61,8 %, 75 %) du swing principal comme éléments de confluence. |
| **Exclude Previous Retracements** | Activé : seuls les retracements du swing le plus récent sont utilisés. Désactivé : les retracements précédents sont également inclus. |

### Developing Settings

| Paramètre | Fonction |
|---|---|
| **Zig Zag line display** | Affiche les lignes Zig Zag sur le graphique, avec des couleurs personnalisables pour les swings haussiers et baissiers, afin que vous puissiez voir la structure de marché sur laquelle l'indicateur travaille. |

### Support & Resistance Colors

| Paramètre | Fonction |
|---|---|
| **Zone colors by confluence count** | Définit les couleurs des zones selon le nombre de confluences qui les soutiennent, afin que les zones plus fortes soient visuellement accentuées. |

[SCREENSHOT: La boîte de dialogue des paramètres du Confluence Identifier montrant le groupe Confluence Settings (Tick Sensitivity, Minimum Number of Confluences, Starting Mode) avec les trois blocs de profils Volume By Price repliés en dessous | dc-en-confluence-identifier-02.png]

## Astuces et erreurs courantes

- **Adaptez les seuils à la quantité de preuves.** À mesure que vous activez plus d'éléments (plusieurs VBP, swings, retracements), augmentez le **Minimum Number of Confluences** et réduisez la **Tick Sensitivity** — sinon presque chaque prix devient une zone et l'outil ne discrimine plus rien.
- **Réglez correctement les deux pourcentages Zig Zag.** Une erreur de configuration courante consiste à utiliser le même pourcentage pour les deux : le Zig Zag de date de début doit être plus grossier (% plus grand), le Zig Zag de swing plus fin (% plus petit) afin que les swings mineurs puissent contribuer aux confluences.
- **Désencombrez avec des indicateurs de profil séparés.** Pour un graphique plus propre, vous pouvez désactiver les lignes VBP ici et afficher les Volume Profiles avec des indicateurs séparés tels que [[deep-profile]] — les zones de confluence continuent de se calculer à partir des éléments activés.
- **Validez les zones par rapport au concept.** Si vous ne savez pas pourquoi un POC ou un bord de Value Area devrait agir comme support, lisez d'abord [[understanding-volume-profile]] — l'indicateur n'est utile qu'à hauteur de votre interprétation des preuves qu'il empile.

## Articles associés

- [[understanding-volume-profile]]
- [[deep-profile]]
- [[zig-zag]]
- [[swing-point]]
- [[different-types-of-input]]
- [[indicator-layout]]
