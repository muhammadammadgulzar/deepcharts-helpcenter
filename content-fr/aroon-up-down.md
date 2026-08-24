---
title: "Aroon Up/Down"
slug: "aroon-up-down"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Lisez le momentum de tendance avec l'indicateur Aroon Up/Down : deux lignes de 0 à 100 qui mesurent la fraîcheur du dernier plus haut ou plus bas du prix."
keywords: ["aroon", "aroon up down", "indicateur aroon", "momentum de tendance", "indicateur nouveaux plus hauts plus bas", "indicateur arun", "croisement aroon"]
---

L'indicateur Aroon Up/Down évalue le momentum de la tendance en mesurant à quel point le prix a récemment établi un nouveau plus haut ou un nouveau plus bas au sein d'une période sélectionnée. Au lieu de demander « de combien le prix a-t-il bougé ? », Aroon demande « quelle est la fraîcheur du dernier extrême ? » — une lecture subtilement différente et souvent plus précoce de la santé de la tendance.

L'indicateur trace deux lignes dans leur propre panneau, chacune variant de 0 à 100, de sorte que vous voyez toujours les côtés haussier et baissier du marché mesurés séparément.

## De quoi s'agit-il

Aroon se compose de deux éléments :

- **Aroon Up** — mesure la force du momentum haussier : il est élevé lorsqu'un nouveau plus haut de période a été établi récemment et décroît à mesure que ce plus haut vieillit.
- **Aroon Down** — mesure de la même manière la force du momentum baissier, à partir du plus bas de période le plus récent.

Une lecture proche de 100 signifie que l'extrême correspondant a été établi très récemment ; une lecture proche de 0 signifie qu'il s'est produit il y a longtemps au sein de la fenêtre d'observation. Comme les deux lignes sont indépendantes, Aroon distingue « forte tendance haussière » (Up élevé, Down bas) de « range volatil » (les deux élevées) d'une manière impossible pour les outils à une seule ligne.

## Quand l'utiliser

- Pour repérer tôt les tendances émergentes : une ligne collée près de 100 signifie que le prix continue d'imprimer de nouveaux extrêmes dans cette direction.
- Pour synchroniser les changements de tendance avec les **croisements Aroon Up/Aroon Down**.
- Pour confirmer une consolidation : les deux lignes dérivant à des niveaux bas signifient qu'aucun nouveau plus haut ni plus bas n'est établi — un range.
- En complément de l'[[adx|ADX]] : l'ADX mesure la force de la tendance sans la direction ; Aroon montre quel camp produit les nouveaux extrêmes.

## Démarrage rapide

1. Ouvrez un graphique et cliquez sur l'icône en forme de graphique à barres dans le coin supérieur gauche pour ouvrir le panneau **Indicators**.
2. Cliquez sur **Indicators** pour ouvrir la liste complète **Indicator List**.
3. Recherchez « Aroon Up/Down » et cliquez sur **+** pour l'ajouter — il s'affiche dans son propre panneau sous le graphique de prix.
4. Cliquez sur l'icône d'engrenage à côté de l'indicateur pour ouvrir ses paramètres.

La valeur **Length** par défaut de 14 avec les niveaux standard (75 / 50 / 25) constitue un point de départ solide. Donnez à Aroon Up et Aroon Down des couleurs fortement contrastées — les croisements sont le signal, ils doivent donc être visibles d'un coup d'œil.

[SCREENSHOT: Un graphique de prix avec l'indicateur Aroon Up/Down dans un panneau inférieur — Aroon Up évoluant près de 100 pendant une tendance haussière tandis qu'Aroon Down se situe près de 0, avec les lignes de niveau 75/50/25 visibles | dc-en-aroon-up-down-01.png]

## Comment le lire

- **Aroon Up près de 100, Aroon Down près de 0** : forte tendance haussière — de nouveaux plus hauts continuent d'arriver tandis que le dernier plus bas vieillit. Inversez la lecture pour une tendance baissière.
- **Croisements** : Aroon Up croisant au-dessus d'Aroon Down suggère que le momentum haussier prend le contrôle ; le croisement inverse suggère un contrôle baissier. Les croisements qui se produisent près du **Middle Level** (50) avec les deux lignes en mouvement décisif sont plus propres que les croisements dans la zone basse.
- **Au-dessus du High Level (75)** : fort momentum de tendance de ce côté.
- **Sous le Lower Level (25)** : momentum faible — ce côté du marché n'a pas établi d'extrême depuis longtemps.
- **Les deux lignes basses** : consolidation. Aucun camp ne progresse, donc les signaux de tendance sont peu fiables jusqu'à ce qu'une ligne reparte à la hausse.

## Référence des paramètres

### Paramètres

| Paramètre | Ce qu'il fait |
|---|---|
| **Length** | Nombre de barres utilisées dans le calcul. Par défaut : 14. Des valeurs plus basses produisent des signaux plus réactifs ; des valeurs plus élevées offrent une analyse de tendance plus lisse. |

### Paramètres de niveaux

| Paramètre | Ce qu'il fait |
|---|---|
| **Middle Level** | La ligne d'équilibre entre les forces haussières et baissières. Par défaut : 50. |
| **Lower Level** | Le seuil qui signale un momentum de tendance faible. Par défaut : 25. |
| **High Level** | Le seuil qui signale un momentum de tendance fort. Par défaut : 75. |
| Couleurs des niveaux / **Level Width** | La couleur de chaque ligne de niveau et l'épaisseur des lignes sont personnalisables. |

### Subgraphs (Aroon Up et Aroon Down)

Les deux lignes offrent une configuration identique :

| Paramètre | Ce qu'il fait |
|---|---|
| **Color** | Couleur de la ligne du subgraph. |
| **Line Style** | Motif visuel. Par défaut : **Solid**. |
| **Line Width** | Épaisseur de la ligne. |
| **Short Name** | Libellé personnalisé affiché dans la légende du graphique. |
| **Name Label** / **Value Label** | Libellés facultatifs affichant le nom de la ligne et sa valeur actuelle, avec des couleurs d'arrière-plan configurables. |
| **Include on Auto Center** | Indique si cette ligne est prise en compte lors de la mise à l'échelle automatique du panneau. |

[SCREENSHOT: La boîte de dialogue des paramètres d'Aroon Up/Down montrant Length 14, les champs Middle/Lower/High Level à 50/25/75, et les deux sections de subgraph pour Aroon Up et Aroon Down | dc-en-aroon-up-down-02.png]

## Astuces et erreurs courantes

- **Ne tradez pas chaque croisement.** Dans un range, les lignes se croisent constamment ; exigez qu'une ligne pousse vers le High Level après le croisement avant de le traiter comme un signal de tendance.
- **Aroon mesure la récence, pas l'amplitude.** Un nouveau plus haut d'un seul tick réinitialise Aroon Up au sommet exactement comme le ferait une cassure majeure. Vérifiez la structure du prix ou le volume avant de conclure à la force.
- **Length définit ce qui compte comme « récent ».** Un Aroon à 14 barres sur un graphique 5 minutes décrit environ la dernière heure d'extrêmes ; le même réglage sur un graphique journalier décrit trois semaines. Réglez-le sur l'horizon que vous tradez réellement.
- Si vous préférez la même information compressée en une seule ligne autour de zéro, utilisez plutôt l'[[aroon-oscillator|oscillateur Aroon]].

## Articles associés

- [[aroon-oscillator]]
- [[adx]]
- [[donchian-channel]]
- [[different-types-of-input]]
- [[indicator-layout]]
