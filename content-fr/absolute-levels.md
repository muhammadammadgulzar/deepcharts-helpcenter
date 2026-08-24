---
title: "Niveaux absolus"
slug: "absolute-levels"
category: "Indicators & Analysis"
subcategory: "Levels & Patterns"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Trace deux niveaux de prix horizontaux fixes que vous définissez vous-même, chacun avec sa propre couleur, son style et son épaisseur — un moyen léger de garder les prix clés sur le graphique."
keywords: ["niveaux absolus", "niveau de prix fixe", "niveau horizontal", "niveaux personnalisés", "ligne de prix", "niveaux statiques", "ligne de prix clé", "indicateur de niveaux manuels"]
---

L'indicateur Absolute Levels (niveaux absolus) trace des lignes horizontales aux valeurs de prix que vous saisissez vous-même. C'est un outil d'analyse technique pour marquer les niveaux clés de support et de résistance sur le graphique de prix d'un actif — mais contrairement aux indicateurs de niveaux automatisés, vous choisissez les prix exacts, et l'indicateur les maintient tracés avec la mise en forme de votre choix.

Cela en fait l'outil idéal pour les niveaux issus de votre propre analyse ou entièrement extérieurs au graphique : un prix de règlement, un chiffre rond, un niveau provenant d'une étude sur un intervalle de temps supérieur, ou un prix repéré dans un plan de trading.

## De quoi s'agit-il

Absolute Levels est un indicateur de niveaux manuels. Vous saisissez jusqu'à deux valeurs de prix fixes — **First Value** et **Second Value** — et l'indicateur trace chacune sous forme de ligne horizontale avec couleur, style et épaisseur configurables indépendamment. Il répond à la question « où se situent mes prix prédéfinis par rapport au marché en ce moment ? »

[SCREENSHOT: Fenêtre graphique avec Absolute Levels appliqué — deux lignes horizontales à des prix définis par l'utilisateur, de couleurs et styles différents, l'une au-dessus et l'autre en dessous du prix actuel, s'étendant clairement sur toute la largeur du graphique | dc-en-absolute-levels-01.png]

## Quand l'utiliser

- Vous disposez de prix exacts issus de votre plan de trading (entrées, niveaux d'invalidation, objectifs) et vous voulez les fixer sur le graphique.
- Vous suivez des prix qu'aucun indicateur automatique ne produit — chiffres ronds, règlement, un niveau lié à un événement d'actualité.
- Vous voulez des niveaux qui ne bougent jamais : contrairement aux niveaux calculés, les niveaux absolus restent exactement là où vous les avez placés jusqu'à ce que vous les modifiiez.
- Vous voulez une paire de lignes de référence avec une mise en forme distincte — par exemple, une ligne d'objectif verte et une ligne de risque rouge.

## Démarrage rapide

1. Ouvrez l'**Indicator List** (liste des indicateurs) sur votre graphique.
2. Trouvez **Absolute Levels** et cliquez sur **+** pour l'ajouter.
3. Cliquez sur l'icône **Settings** (paramètres) à côté de l'indicateur.
4. Saisissez le prix de votre premier niveau dans **First Value** et le prix de votre second niveau dans **Second Value**.
5. Donnez aux deux lignes une mise en forme contrastée — par exemple, une ligne pleine pour le niveau le plus important et une ligne en pointillés pour le niveau secondaire — à l'aide des paramètres **Color**, **Style** et **Thickness** de chaque ligne.
6. Appliquez et vérifiez que les deux lignes se situent exactement aux prix saisis.

[SCREENSHOT: Boîte de dialogue des paramètres d'Absolute Levels montrant la section Parameters avec les champs First Value et Second Value remplis, et les groupes de mise en forme First Line et Second Line avec les contrôles Color, Style et Thickness | dc-en-absolute-levels-02.png]

## Comment le lire

Absolute Levels n'ajoute aucun calcul propre — l'interprétation dépend entièrement de la signification que portent vos prix :

- **Un prix qui s'approche d'un niveau** est votre signal pour rester attentif : observez comment le marché se comporte à l'approche de votre prix prédéfini plutôt que de décider dans l'instant.
- **Un rejet net à un niveau** valide l'analyse qui a produit ce prix ; une clôture décisive au-delà invalide cette idée et transforme la ligne en référence potentielle de retest depuis l'autre côté.
- **Deux niveaux forment un encadrement.** Avec une valeur au-dessus et une en dessous du prix, vous disposez d'une carte de range simple : en dehors de l'encadrement, le marché fait quelque chose que votre plan doit prendre en compte.

## Référence des paramètres

Regroupés comme dans la boîte de dialogue des paramètres.

### Parameters

| Paramètre | Fonction |
|---|---|
| **First Value** | Prix du premier niveau absolu affiché sur votre graphique. |
| **Second Value** | Prix du second niveau absolu affiché sur votre graphique. |

### First Line

| Paramètre | Fonction |
|---|---|
| **First Line Color** | Couleur de la première ligne tracée. |
| **First Line Style** | Style visuel de la première ligne tracée. |
| **First Line Thickness** | Épaisseur de la première ligne tracée. |

### Second Line

| Paramètre | Fonction |
|---|---|
| **Second Line Color** | Couleur de la seconde ligne tracée. |
| **Second Line Style** | Style visuel de la seconde ligne tracée. |
| **Second Line Thickness** | Épaisseur de la seconde ligne tracée. |

## Astuces et erreurs courantes

- **Mettez les valeurs à jour quand votre plan change.** Les niveaux absolus ne se recalculent pas et n'effectuent pas de rollover ; une ligne périmée issue du plan de la semaine dernière est pire que pas de ligne du tout. Vérifiez les valeurs dans le cadre de votre préparation de session.
- **Utilisez-le en complément — et non à la place — des niveaux calculés.** Les outils automatisés comme [[important-levels]] et [[pivot-points]] couvrent les prix de référence standard ; réservez Absolute Levels à la poignée de prix que vous seul suivez.
- **Différenciez visuellement les deux lignes.** Si les deux lignes partagent la même couleur et le même style, vous perdez l'information de savoir quel niveau est lequel ; encodez la signification dans la mise en forme.
- **Préférez-le à une ligne dessinée quand la précision compte.** Saisir la valeur exacte dans **First Value** évite les petites erreurs de placement d'un dessin déplacé à la main — consultez [[drawing-tools]] pour savoir quand une ligne à main levée convient mieux.

## Articles associés

- [[important-levels]]
- [[pivot-points]]
- [[price-movement-levels]]
- [[drawing-tools]]
- [[different-types-of-input]]
- [[indicator-layout]]
