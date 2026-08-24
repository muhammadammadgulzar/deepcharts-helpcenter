---
title: "Deep-M IVB"
slug: "deep-m-ivb"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "advanced"
time: "4 min read"
description: "Indicateur algorithmique d'Opening Range Breakout (ORB) qui trace des niveaux de projection, de protection et de sortie dérivés statistiquement, plus des zones de réaction et un biais quotidien."
keywords: ["deep m ivb", "deep-m ivb", "ivb", "opening range breakout", "indicateur ORB", "niveaux d'opening range", "cibles orb"]
---

Deep-M IVB est un indicateur algorithmique développé par l'équipe DeepCharts pour simplifier le trading de la structure Opening Range Breakout (ORB, cassure du range d'ouverture). Au lieu de mesurer vous-même le range d'ouverture et de deviner les cibles, il dérive ses niveaux d'années de statistiques historiques et les trace automatiquement : le range lui-même, les niveaux de protection et de sortie après une cassure, les zones de réaction, et un affichage du biais quotidien.

Le résultat est un cadre ORB complet sur le graphique — où se trouve le range, jusqu'où une cassure tend statistiquement à aller, où elle tend à caler, et dans quelle direction penche la journée.

## De quoi s'agit-il

Deep-M IVB construit le range d'ouverture RTH (High, Mid, Low) sur une fenêtre de votre choix, puis projette au-delà des niveaux dérivés statistiquement. Après une cassure, il trace des niveaux de protection et de sortie — cibles à haute probabilité et zones structurées — et met en évidence les zones de réaction les plus fortes où le prix peut décélérer. Un panneau de synthèse dans le coin supérieur gauche du graphique affiche le biais quotidien.

[SCREENSHOT: Graphique avec Deep-M IVB appliqué après l'ouverture — lignes High/Mid/Low du range d'ouverture, niveaux de projection au-dessus du range après une cassure, zones de réaction ombrées, et le Summary Panel visible dans le coin supérieur gauche affichant le biais quotidien | dc-en-deep-m-ivb-01.png]

## Quand l'utiliser

- Vous tradez l'Opening Range Breakout et voulez des cibles fondées statistiquement plutôt que des projections à multiple fixe.
- Vous voulez des zones de sortie partielle planifiées à l'avance : les zones de réaction marquent où l'élan de la cassure tend à ralentir.
- Vous voulez une lecture rapide du biais quotidien (Neutral / Positive / Negative) sans construire votre propre modèle.
- Vous avez besoin de niveaux d'invalidation et de protection clairs pour gérer un trade de cassure.

## Démarrage rapide

1. Ouvrez l'**Indicator List** sur votre graphique, recherchez **Deep-M IVB** et cliquez sur **+**.
2. Cliquez sur l'icône **Settings** pour le configurer.
3. Réglez **RTH Opening Range (Min)** sur **30** — les options prises en charge sont 15, 30 et 60 minutes, et l'équipe recommande 30.
4. Activez **Enable Protection** pour que les niveaux de protection et de sortie se tracent après la cassure du range.
5. Activez **Enable Zones** pour mettre en évidence les zones de réaction les plus fortes pendant une cassure.
6. Appliquez et attendez que la fenêtre du range d'ouverture soit complète après l'ouverture RTH.

[SCREENSHOT: Boîte de dialogue des paramètres de Deep-M IVB montrant RTH Opening Range (Min) réglé sur 30, avec Enable Protection et Enable Zones activés, et les contrôles de couleur/largeur/style du Range visibles | dc-en-deep-m-ivb-02.png]

## Comment le lire

- **Range d'ouverture (High / Mid / Low) :** la structure sur laquelle tout le reste s'appuie. Au-dessus du range, la journée penche à l'achat ; en dessous, à la vente ; à l'intérieur, pas encore de cassure.
- **Projections (trois niveaux, par probabilité) :** **Protection** est la cible quotidienne à plus haute probabilité, **Average** (Ext. Avg) est la deuxième cible, et **Projection** (Ext. Std-1) est la troisième. Une approche courante consiste à alléger la position à mesure que chacune est atteinte.
- **Zones de réaction :** zones où le prix peut réagir et où l'élan peut ralentir pendant une cassure — emplacements naturels de sortie partielle ou de ré-entrée en cas de tenue. Les zones **Support** colorent le côté haussier, les zones **Resistance** le côté baissier.
- **Summary Panel (coin supérieur gauche) :** le biais quotidien — **Neutral**, **Positive** (haussier) ou **Negative** (baissier) — pour une inclinaison directionnelle en un coup d'œil.

Une cassure qui atteint le niveau Protection a déjà accompli son objectif statistiquement le plus probable ; attendre les projections suivantes est un pari à plus faible probabilité, d'où leur séquencement.

## Référence des paramètres

Regroupés comme dans la boîte de dialogue des paramètres.

### Range

| Paramètre | Ce qu'il fait |
|---|---|
| **RTH Opening Range (Min)** | Minutes utilisées pour construire le range d'ouverture : 15, 30 ou 60. Recommandation de l'équipe : 30. Définit les niveaux High, Mid et Low du range. |
| **High / Mid / Low Colors** | Couleurs des lignes pour les trois niveaux du range. |
| **Line Width / Style** | Épaisseur et style des lignes du range. |

### Niveaux de cassure

| Paramètre | Ce qu'il fait |
|---|---|
| **Enable Protection** | Trace les niveaux de protection et de sortie après la cassure du range — cibles à haute probabilité et zones structurées. |
| **Projection Colors** | Couleurs des trois projections : **Protection** (plus haute probabilité), **Average** (Ext. Avg), **Projection** (Ext. Std-1). |

### Zones

| Paramètre | Ce qu'il fait |
|---|---|
| **Enable Zones** | Met en évidence les zones de réaction les plus fortes pendant une cassure, où le prix peut décélérer. |
| **Support Color / Resistance Color** | Couleurs des zones haussières (support) et baissières (résistance). |
| **Opacity** | Transparence des zones. |
| **Bar Extension** | Nombre de bougies vers l'avant sur lesquelles les zones s'étendent (par exemple 10). |
| **Line Width** | Épaisseur de la bordure des zones. |

### Summary Panel

| Paramètre | Ce qu'il fait |
|---|---|
| **Bias colors** | Couleurs des états de biais quotidien **Neutral**, **Positive** et **Negative** affichés dans le panneau supérieur gauche. |

## Astuces et erreurs courantes

- **Choisissez une fenêtre de range et gardez-la.** Les niveaux sont statistiques ; basculer entre 15/30/60 en cours de journée invalide la comparaison. L'équipe recommande 30 minutes.
- **Rien ne se trace avant que le range soit complet.** L'indicateur a besoin de la fenêtre complète du range d'ouverture après l'ouverture RTH avant que les niveaux apparaissent.
- **Traitez les projections comme des cibles séquencées, pas des garanties.** Protection d'abord, puis Average, puis Projection — la probabilité diminue à chaque extension.
- **Utilisez les zones pour la gestion, pas comme entrées seules.** Elles marquent où l'élan peut ralentir ; combinez-les avec une confirmation par l'orderflow telle que [[deep-stats]] ou [[deep-trades]] au niveau de la zone.
- **Le contexte de session compte.** La logique ORB suppose une ouverture RTH propre — voir [[understanding-market-structure-sessions]] pour le comportement RTH vs ETH.

## Articles associés

- [[understanding-market-structure-sessions]]
- [[pivot-points]]
- [[important-levels]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]
