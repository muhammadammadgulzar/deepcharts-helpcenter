---
title: "Objectif de l'amplitude quotidienne moyenne (ADR Target)"
slug: "adr-target"
category: "Indicators & Analysis"
subcategory: "Volatility & Bands"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Projette des objectifs de prix intraday à partir de l'amplitude quotidienne moyenne des sessions récentes afin de définir des objectifs de profit statistiquement fondés et de repérer les zones d'épuisement."
keywords: ["ADR", "objectif ADR", "amplitude quotidienne moyenne", "projection de range quotidien", "objectif de range", "objectifs intraday", "objectif d'expansion", "indicateur de range moyen"]
---

L'objectif de l'amplitude quotidienne moyenne (ADR Target) calcule le mouvement de prix moyen — du plus haut au plus bas — d'un instrument sur un nombre de jours défini et projette cette amplitude vers l'avant sous forme d'objectifs de prix intraday potentiels. Au lieu de deviner jusqu'où le mouvement du jour peut aller, vous le mesurez par rapport à ce que l'instrument a réellement fait récemment.

Cela en fait une règle graduée de volatilité : lorsque le prix a déjà parcouru sa distance quotidienne typique, la probabilité d'une expansion supplémentaire diminue, et vos objectifs de profit et décisions de risque peuvent en tenir compte.

## De quoi s'agit-il

ADR Target est un indicateur de niveaux statistiques. Il calcule la moyenne de l'amplitude plus haut–plus bas des N dernières périodes (barres quotidiennes par défaut, avec des options hebdomadaires et mensuelles) et trace cette amplitude attendue sur votre graphique sous forme de niveaux cibles étiquetés. Il répond aux questions « de combien ce marché bouge-t-il habituellement en une journée ? » et « quelle part de ce mouvement a déjà eu lieu ? »

[SCREENSHOT: Fenêtre graphique avec ADR Target appliqué — chandeliers intraday avec les niveaux cibles ADR projetés et leurs étiquettes de texte visibles sur le graphique, le prix se négociant à peu près à mi-chemin de la cible supérieure | dc-en-adr-target-01.png]

## Quand l'utiliser

- Vous voulez des objectifs d'expansion quotidiens réalistes plutôt que des objectifs arbitraires à chiffres ronds.
- Vous voulez estimer les zones d'épuisement intraday — les zones où la journée a déjà parcouru sa distance statistiquement typique.
- Vous gérez vos objectifs de profit par les statistiques : prendre les profits à l'intérieur de l'amplitude moyenne plutôt que d'espérer une journée atypique.
- Vous avez tendance à trop trader en fin de journée — l'ADR montre quand le marché a probablement épuisé son budget de volatilité typique.

## Démarrage rapide

1. Ouvrez l'**Indicator List** (liste des indicateurs) sur votre graphique.
2. Trouvez **ADR Target** et cliquez sur **+** pour l'ajouter.
3. Cliquez sur l'icône **Settings** (paramètres) à côté de l'indicateur.
4. Réglez **Length Type** sur **Daily** — l'ADR est alors calculé à partir des barres quotidiennes, la lecture standard.
5. Réglez **Length** sur **10** pour que la moyenne utilise les 10 derniers jours de trading.
6. Ajustez **Font Size**, **Text Align**, **Background** et **Text Color** dans les paramètres d'affichage jusqu'à ce que les étiquettes soient lisibles avec votre jeu de couleurs, puis appliquez.

[SCREENSHOT: Boîte de dialogue des paramètres d'ADR Target montrant la liste déroulante Length Type ouverte avec les options Daily, Weekly et Monthly, le champ Length réglé sur 10, et les paramètres d'affichage (Font Size, Text Align, Background, Text Color) en dessous | dc-en-adr-target-02.png]

## Comment le lire

Les niveaux projetés représentent la distance que l'instrument parcourt lors d'une journée moyenne. [CONFIRM: which price the ADR targets are projected from — session open, current day high/low, or previous close]

- **Prix bien à l'intérieur de l'ADR :** la journée dispose encore d'une marge statistique d'expansion. Des objectifs de continuation de tendance à l'intérieur de l'amplitude restante sont raisonnables.
- **Prix s'approchant d'une extension complète de l'ADR :** la journée a parcouru sa distance typique. C'est une zone naturelle de prise de profit et un mauvais endroit pour initier de nouveaux trades de cassure — la plupart des journées ne dépassent pas leur amplitude moyenne.
- **Prix dépassant l'ADR :** vous êtes dans une session atypique, généralement portée par l'actualité ou un véritable changement de régime. Considérez les niveaux comme informatifs, pas comme un plafond infranchissable.

Le Length Type change l'horizon : **Weekly** et **Monthly** moyennent l'amplitude des barres hebdomadaires et mensuelles, produisant des cibles plus larges adaptées à la planification en swing plutôt qu'à l'exécution intraday.

## Référence des paramètres

Regroupés comme dans la boîte de dialogue des paramètres.

### Calculation

| Paramètre | Fonction |
|---|---|
| **Length Type** | Taille de barre utilisée pour la moyenne d'amplitude : **Daily** (calcule l'ADR à partir des barres quotidiennes), **Weekly** ou **Monthly**. |
| **Length** | Nombre de périodes précédentes utilisées pour calculer l'amplitude moyenne. Exemple : **Length = 10** avec Daily utilise les 10 derniers jours de trading. |

### Plot Settings

| Paramètre | Fonction |
|---|---|
| **Font Size** | Ajuste la taille du texte des étiquettes ADR sur le graphique. |
| **Text Align** | Aligne les étiquettes à gauche (**Left**) ou à droite (**Right**) du niveau. |
| **Background** | Couleur d'arrière-plan de l'étiquette. |
| **Text Color** | Couleur du texte de l'étiquette. |

## Astuces et erreurs courantes

- **Adaptez Length au régime actuel.** Un Length court (5–10 jours) s'adapte rapidement après un changement de volatilité ; un Length plus long lisse les journées d'actualité ponctuelles. Si le marché a récemment changé de caractère, une moyenne longue sera en retard sur la réalité.
- **L'ADR est une probabilité, pas un mur.** Par définition, le prix dépasse son amplitude moyenne lors des journées atypiques. Ne prenez jamais le contre-pied d'un mouvement fort uniquement parce que l'ADR est « rempli » — combinez-le avec la structure et la confirmation de l'orderflow (flux d'ordres).
- **N'utilisez pas les cibles Weekly/Monthly pour le scalping.** Elles décrivent des amplitudes sur plusieurs jours ; sur un graphique intraday, elles se situeront loin du prix et vous inciteront à des objectifs surdimensionnés.
- **Vérifiez le contexte de session.** Les sessions de jours fériés et les demi-journées compriment les amplitudes et tirent la moyenne vers le bas pour les jours suivants. Consultez [[understanding-market-structure-sessions]] pour comprendre comment les sessions façonnent les chiffres.

## Articles associés

- [[atr]]
- [[standard-deviation]]
- [[understanding-market-structure-sessions]]
- [[different-types-of-input]]
- [[indicator-layout]]
