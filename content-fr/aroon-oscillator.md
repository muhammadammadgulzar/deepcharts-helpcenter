---
title: "Oscillateur Aroon"
slug: "aroon-oscillator"
category: "Indicators & Analysis"
subcategory: "Trend"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Compressez Aroon Up et Aroon Down en une seule ligne autour de zéro avec l'oscillateur Aroon pour lire la force, la direction et l'épuisement de la tendance."
keywords: ["oscillateur aroon", "aroon osc", "différence aroon", "oscillateur de tendance", "oscillateur ligne zéro", "oscillateur arun"]
---

L'oscillateur Aroon mesure la force et la direction de la tendance en calculant la différence entre Aroon Up et Aroon Down. Là où [[aroon-up-down|Aroon Up/Down]] affiche deux lignes, l'oscillateur compresse la même information en une seule ligne qui fluctue autour d'une ligne zéro : positive quand les acheteurs établissent les nouveaux extrêmes, négative quand ce sont les vendeurs.

Si les croisements à deux lignes vous semblent visuellement bruyants, voici la façon la plus propre de consommer Aroon.

## De quoi s'agit-il

L'oscillateur répond à la question « quel camp est en train de gagner, et de combien ? » en une seule valeur. Comme Aroon Up et Aroon Down varient chacun de 0 à 100, leur différence évolue entre les extrêmes de part et d'autre de zéro : des lectures fortement positives signifient que les nouveaux plus hauts récents dominent, des lectures fortement négatives signifient que les nouveaux plus bas récents dominent, et des lectures proches de zéro signifient qu'aucun camp n'a l'avantage.

L'indicateur aide les traders à identifier les tendances émergentes, la force de la tendance, les retournements potentiels et les zones d'épuisement de type surachat/survente.

## Quand l'utiliser

- Pour lire la direction et la force de la tendance sur une seule ligne au lieu d'en suivre deux.
- Pour capter les transitions de tendance : le croisement de la ligne zéro est la version « oscillateur » du croisement Aroon Up/Down.
- Pour repérer l'épuisement : des lectures extrêmes qui stagnent puis reviennent vers zéro avertissent que le camp dominant perd sa mainmise.
- Pour confirmer les signaux d'outils basés sur le prix comme le [[donchian-channel|canal de Donchian]] — une cassure appuyée par un oscillateur fortement positif est portée par le momentum des nouveaux extrêmes.

## Démarrage rapide

1. Ouvrez un graphique et cliquez sur l'icône en forme de graphique à barres dans le coin supérieur gauche pour ouvrir le panneau **Indicators**.
2. Cliquez sur **Indicators** pour ouvrir la liste complète **Indicator List**.
3. Recherchez « Aroon Oscillator » et cliquez sur **+** pour l'ajouter — il s'affiche dans son propre panneau sous le graphique de prix.
4. Cliquez sur l'icône d'engrenage à côté de l'indicateur pour ouvrir ses paramètres.

La valeur **Length** par défaut de 14 correspond à la configuration Aroon standard. Le **Subgraph Style** par défaut est **Bars** avec **Auto Color (+/-)**, de sorte que les lectures positives et négatives sont colorées différemment dès le départ — un moyen simple de lire le régime d'un coup d'œil.

[SCREENSHOT: Un graphique de prix avec l'oscillateur Aroon dans un panneau inférieur rendu sous forme de barres, barres positives d'une couleur pendant la tendance haussière et barres négatives d'une autre couleur après le retournement, ligne zéro visible au milieu | dc-en-aroon-oscillator-01.png]

## Comment le lire

- **Au-dessus de zéro** : Aroon Up dépasse Aroon Down — les extrêmes les plus récents sont des plus hauts ; régime haussier. **Sous zéro** est le miroir baissier.
- **Distance par rapport à zéro = conviction.** Des lectures poussées vers les extrêmes signifient qu'un camp établit des extrêmes récemment tandis que le dernier extrême de l'autre camp est ancien — une tendance forte.
- **Les croisements de la ligne zéro** marquent des changements de tendance potentiels. Comme pour tout oscillateur, les croisements pendant des ranges calmes produisent des faux signaux ; les croisements accompagnés d'un mouvement de prix décisif sont plus fiables.
- **Extrêmes qui s'estompent** : lorsque l'oscillateur atteint une zone extrême puis se contracte vers zéro pendant que le prix stagne, la tendance vieillit — resserrez le risque ou cherchez une structure de retournement.

## Référence des paramètres

### Paramètres

| Paramètre | Ce qu'il fait |
|---|---|
| **Length** | Nombre de barres utilisées dans le calcul Aroon. Par défaut : 14. Des valeurs plus basses produisent des signaux plus réactifs ; des valeurs plus élevées génèrent des résultats plus lisses. |

### Paramètres de niveaux

| Paramètre | Ce qu'il fait |
|---|---|
| **Middle Level** | La ligne de référence de tendance neutre. Par défaut : 0. |
| **Lower Level** | Ligne de niveau marquant une zone extrême. Par défaut : 80. |
| **High Level** | Ligne de niveau marquant la zone extrême opposée. Par défaut : -80. |
| **Middle/Lower/Higher Level Color** | Couleur de chaque ligne de niveau. |
| **Level Width** | Épaisseur des lignes de niveau. |

Ces niveaux aident à identifier les conditions de tendance forte et les zones d'épuisement potentielles.

[CONFIRM: the source article lists Lower Level default as 80 and High Level default as -80 — verify in the app whether these two defaults are intentionally assigned this way or swapped.]

### Subgraphs

| Paramètre | Ce qu'il fait |
|---|---|
| **Color** / **2° Color** | Couleurs primaire et secondaire des barres de l'oscillateur. |
| **Subgraph Style** | Format d'affichage. Par défaut : **Bars**. |
| **Auto Color (+/-)** | Change automatiquement la couleur selon les valeurs positives ou négatives. |
| **Line Style** | Motif visuel lorsqu'il est tracé sous forme de ligne (Solid et autres styles). |
| **Line Width** | Épaisseur de la ligne/des barres. |
| **Short Name** | Libellé personnalisé affiché dans la légende du graphique. |
| **Name Label** / **Value Label** | Libellés facultatifs de nom et de valeur, avec les options de couleur **Name Background** et **Value Background**. |
| **Chart color for marker** | Utilise la couleur du graphique pour le marqueur de valeur. |
| **Include on Auto Center** | Indique si la série est prise en compte lors de la mise à l'échelle automatique du panneau. |

[SCREENSHOT: La boîte de dialogue des paramètres de l'oscillateur Aroon montrant Length 14, le groupe Level settings avec les champs Middle/Lower/High Level, et le groupe Subgraphs avec Subgraph Style réglé sur Bars et Auto Color (+/-) activé | dc-en-aroon-oscillator-02.png]

## Astuces et erreurs courantes

- **Les croisements de la ligne zéro sont légèrement en retard sur la vue à deux lignes** dans des conditions agitées et se répètent souvent dans les ranges. Exigez une confirmation — une poussée vers une zone extrême — avant de traiter un croisement comme un changement de tendance.
- **Une lecture extrême est un signe de force, pas un retournement automatique.** Contrairement à un véritable oscillateur de surachat/survente, un oscillateur Aroon collé à l'extrême signifie souvent simplement une tendance saine qui imprime extrême après extrême. Cherchez la contraction vers zéro, pas l'extrême lui-même.
- **Gardez une valeur Length cohérente** avec tout panneau [[aroon-up-down|Aroon Up/Down]] que vous exécutez en parallèle, sinon les deux seront en désaccord et créeront de la confusion plutôt que de la confirmation.
- Le style **Bars** avec **Auto Color (+/-)** est plus facile à lire d'un coup d'œil qu'une ligne ; conservez-le sauf si vous superposez plusieurs séries dans le même panneau (voir [[indicator-layout]]).

## Articles associés

- [[aroon-up-down]]
- [[adx]]
- [[macd]]
- [[different-types-of-input]]
- [[indicator-layout]]
