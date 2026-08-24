---
title: "Candlestick Bar"
slug: "candlestick-bar"
category: "Indicators & Analysis"
subcategory: "Chart Overlays"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Superposez des chandeliers japonais construits à partir d'un autre type de barre — minutes, barres de volume ou range — sur votre graphique principal."
keywords: ["candlestick bar", "superposition de chandeliers", "chandeliers japonais", "superposer des chandeliers", "superposition barres de volume", "superposition barres range", "indicateur chandelier"]
---

Il arrive que vous vouliez deux vues du même marché sur un seul graphique : votre graphique de travail dans un type de barre, et des chandeliers japonais classiques construits à partir d'une autre agrégation dessinés par-dessus. L'indicateur Candlestick Bar fait exactement cela — il superpose des chandeliers japonais sur le graphique principal, la construction des chandeliers (minutes, barres de volume ou range) étant choisie indépendamment du graphique sous-jacent.

Cela permet, par exemple, de conserver un graphique rapide orienté orderflow (flux d'ordres) comme base tout en visualisant la structure de chandeliers plus larges, basés sur le temps ou le range, dans le même panneau.

## De quoi s'agit-il

Le Candlestick Bar est une superposition graphique qui construit et dessine ses propres chandeliers à partir du type de paramètre sélectionné — **Minutes**, **Vol Bars** ou **Range** — et les affiche par-dessus l'affichage de prix existant. La couleur du corps, le remplissage, la bordure, l'opacité et la largeur sont tous configurables : la superposition peut donc être aussi visible ou aussi discrète que nécessaire pour votre analyse de l'action des prix.

Comme la superposition est indépendante du type de barre du graphique de base, elle appartient à la même famille d'outils que [[overlay-timeframe-candlestick]] et [[overlay-chart]] — choisissez celui qui correspond à la comparaison que vous souhaitez effectuer.

## Quand l'utiliser

- Pour voir la structure de chandeliers basés sur le temps sur un graphique dont les barres de base ne sont pas temporelles (tick, volume ou range).
- Pour superposer des chandeliers construits sur le volume ou le range sur un graphique temporel, et révéler comment les barres basées sur l'activité encadrent le même mouvement.
- Pour lire des figures de chandeliers classiques à une seconde agrégation sans ouvrir ni lier une autre fenêtre graphique.
- Pour garder visible une lecture structurelle de niveau supérieur pendant que vous exécutez depuis un graphique de base plus rapide.

## Démarrage rapide

1. Ouvrez un graphique et cliquez sur l'icône en forme de graphique à barres en haut à gauche pour ouvrir le panneau **Indicators**.
2. Cliquez sur **Indicators** pour ouvrir la liste complète **Indicator List**.
3. Recherchez « Candlestick Bar » et cliquez sur **+** pour l'ajouter.
4. Cliquez sur l'icône d'engrenage à côté de l'indicateur pour ouvrir ses paramètres. Choisissez un **Parameter Type** et définissez **Parameter 1** — par exemple, Minutes avec une valeur supérieure à l'intervalle de temps de votre graphique de base donne une superposition classique d'intervalle de temps supérieur.
5. Réduisez l'**Opacity** (opacité) du corps ou désactivez **Show Filled Bar** afin que le graphique sous-jacent reste lisible sous la superposition.

[SCREENSHOT: Un graphique intraday rapide avec la superposition Candlestick Bar active — des chandeliers plus grands semi-transparents dessinés par-dessus les barres de base, les deux clairement distinguables | dc-en-candlestick-bar-01.png]

## Comment le lire

Vous débutez dans la lecture des chandeliers japonais, ou vous voulez un rappel rapide ? Survolez le chandelier interactif ci-dessous — chaque zone (corps, mèches, ouverture, plus haut, plus bas, clôture) s'explique d'elle-même, et vous pouvez le basculer entre haussier et baissier — puis appliquez la même lecture à chaque chandelier de la superposition.

[WIDGET: candle-anatomy]

- **Chaque chandelier de la superposition résume plusieurs barres de base** (ou un quantum de volume/range de transactions) en une unité ouverture-plus haut-plus bas-clôture — lisez-le exactement comme n'importe quel chandelier japonais : la direction du corps pour le contrôle, les mèches pour le rejet.
- **Un désaccord entre superposition et base est une information.** Quand les barres de base rapides oscillent en dents de scie alors que les chandeliers de la superposition restent unidirectionnels, le bruit est en dessous de la résolution de votre superposition ; quand les deux s'alignent, les mouvements ont tendance à être plus nets.
- **Les chandeliers construits sur le volume égalisent l'activité.** Avec **Vol Bars**, chaque chandelier se clôture après un volume cible : les périodes calmes se compressent et les périodes actives s'étendent — les comparaisons de chandelier à chandelier deviennent normalisées par l'activité.
- **Les chandeliers range égalisent le mouvement.** Avec **Range**, chaque chandelier couvre une distance de prix fixe, ce qui retire complètement le temps de la lecture des figures.

## Référence des paramètres

### General Parameters

| Paramètre | Ce qu'il fait |
|---|---|
| **Parameter Type** | La manière dont les chandeliers de la superposition sont construits : **Minutes**, **Vol Bars** ou **Range**. |
| **Parameter 1** | La valeur de construction principale — s'applique aux chandeliers Minute et Range, et définit la cible pour Vol Bars. |
| **Parameter 2** | Contrôle la valeur de retournement pour Vol Bars. |

### Colors

| Paramètre | Ce qu'il fait |
|---|---|
| **Positive Bar** | Couleur des chandeliers haussiers de la superposition. |
| **Negative Bar** | Couleur des chandeliers baissiers de la superposition. |
| **Show Filled Bar** | Active ou désactive le remplissage du corps du chandelier. |

### Plot Settings

| Paramètre | Ce qu'il fait |
|---|---|
| **Candle Width** | Épaisseur des chandeliers de la superposition. |
| **Border Width** | Épaisseur des bordures des chandeliers. |
| **Opacity** | Transparence du remplissage du corps des chandeliers. |
| **Show Vertical Line on Close** | Lorsqu'activé, dessine une ligne verticale sur les chandeliers en clôture. |

[SCREENSHOT: La boîte de dialogue des paramètres du Candlestick Bar montrant Parameter Type réglé sur Minutes avec les champs Parameter 1 et Parameter 2, ainsi que les groupes Colors et Plot Settings | dc-en-candlestick-bar-02.png]

## Astuces et erreurs courantes

- **Gardez la superposition visuellement subordonnée.** Si les chandeliers de la superposition sont totalement opaques et larges, ils masquent le graphique de base ; réduisez l'**Opacity**, affinez la **Candle Width**, ou désactivez **Show Filled Bar** et lisez la superposition à partir des seules bordures.
- **Choisissez une agrégation réellement différente.** Superposer des chandeliers de 5 minutes sur un graphique de 3 minutes ajoute de l'encombrement sans apport ; la superposition mérite sa place quand elle résume de nombreuses barres de base ou une logique de construction de barres véritablement différente.
- **Souvenez-vous de quels chandeliers viennent vos figures.** Une figure de chandeliers sur la superposition ne se complète que lorsque le chandelier de la superposition clôture — agir dessus en cours de chandelier, parce que le graphique de base a déjà clôturé plusieurs barres, est une erreur fréquente.
- **Envisagez les alternatives pour les vues multi-symboles ou multi-intervalles.** Si vous voulez superposer un autre instrument, utilisez [[overlay-symbol]] ; pour une superposition dédiée de chandeliers d'intervalle de temps supérieur, comparez avec [[overlay-timeframe-candlestick]] avant de décider.

## Articles associés

- [[overlay-timeframe-candlestick]]
- [[overlay-chart]]
- [[overlay-symbol]]
- [[chart-display-options]]
- [[different-types-of-input]]
- [[indicator-layout]]
