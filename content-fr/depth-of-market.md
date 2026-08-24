---
title: "Indicateur Depth of Market (DOM)"
slug: "depth-of-market"
category: "Trading & Orders"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "6 min read"
description: "Référence de l'échelle de prix DOM de DeepCharts : colonnes, règles de placement des ordres, colonnes pull/stack et trades, profils et paramètres de profondeur."
keywords: ["profondeur de marché", "DOM", "échelle de prix", "adv dom", "carnet d'ordres", "level 2", "pull stack", "échelle bid ask", "colonnes dom"]
---
Le Depth of Market (DOM), ou profondeur de marché, est la vue en échelle de prix du carnet d'ordres : une colonne verticale de prix avec la liquidité acheteuse au repos (bids) d'un côté et la liquidité vendeuse au repos (asks) de l'autre. Dans DeepCharts, le DOM complet est la fenêtre **Advanced DOM**, et une version compacte peut être superposée directement sur le graphique.

Cet article est la référence de l'interface du DOM — ses colonnes, ses règles de clic et ses paramètres. Pour la présentation complète de la fenêtre, voir [[advanced-dom]] ; pour l'échelle sur graphique, voir [[dom-trading-chart]].

[CONFIRM: whether "Depth of Market" also exists as a standalone chart indicator in the Indicator List, separate from the Advanced DOM window and the on-chart DOM Trading mode — adjust the intro if so]

## De quoi s'agit-il

Le DOM répond à la question : qui attend d'acheter et de vendre à chaque prix, et comment trader face à cela ? Chaque ligne est un niveau de prix. Les quantités bid s'empilent sous le marché, les quantités ask au-dessus, et l'affichage se met à jour en temps réel à mesure que des ordres sont ajoutés, retirés et exécutés. Comme les ordres se placent en cliquant directement sur une ligne de prix, le DOM est l'outil de prédilection des traders qui se soucient des niveaux d'entrée exacts et de la position dans la file d'attente plutôt que des entrées basées sur le graphique.

Observez une échelle en direct ci-dessous — la liquidité acheteuse s'empile en vert sous le marché, la liquidité vendeuse en violet au-dessus ; survolez n'importe quelle ligne pour voir ce que ce niveau vous indique.

[WIDGET: dom-ladder]

## Quand l'utiliser

- Scalping ou trading à court terme où le tick exact d'entrée compte.
- Observer comment la liquidité au repos se construit ou disparaît autour d'un niveau avant de s'engager.
- Gérer visuellement les ordres actifs — glisser pour déplacer, clic droit pour supprimer.
- Lire le volume exécuté par niveau à côté d'un profil de volume en direct.

## Démarrage rapide

1. Ouvrez DeepCharts et connectez votre flux de données — [[connect-data-feed]].
2. Accédez à **New → Book → ADV DOM**.
3. Choisissez votre instrument dans la liste des symboles souscrits (par exemple **ES**) et cliquez sur **Select**.
4. Définissez la quantité d'ordre dans le champ situé en bas du DOM.
5. Réglez le menu de type d'ordre (le menu **A**) sur **Automatic** — les types d'ordres sont alors déterminés par l'endroit où vous cliquez (voir le tableau ci-dessous).

[SCREENSHOT: Menu New ouvert avec le sous-menu Book et ADV DOM en surbrillance, la boîte de dialogue Select Instrument visible derrière | dc-en-depth-of-market-01.png]

> **Remarque :** Le DOM a besoin de données Level 2 (profondeur) de votre flux pour remplir les échelles bid et ask. Avec des données Level 1, seul le meilleur bid/ask est disponible.

## Comment le lire

La disposition par défaut affiche, de gauche à droite :

| Colonne | Signification |
|---|---|
| **P&L** | Votre profit ou perte à chaque tick — ce que vaudrait la position si le prix s'échangeait à ce niveau |
| **B** | Gestion des ordres d'achat |
| **Bid** | Liquidité acheteuse au repos ; cliquez ici pour placer des ordres d'achat |
| **Price** | L'échelle de prix centrale |
| **Ask** | Liquidité vendeuse au repos ; cliquez ici pour placer des ordres de vente |
| **S** | Gestion des ordres de vente |
| **VP** | Profil de volume journalier — volume exécuté par niveau de prix |

L'en-tête affiche l'instrument sélectionné, le courtier connecté, le compte de trading actif, la quantité de la position ouverte et le P&L journalier. En dessous, le tableau des fondamentaux donne le contexte de la session : variation en pourcentage par rapport à la clôture précédente, variation par rapport à l'ouverture de la session, volume total échangé, nombre de trades (actions), et les prix de suspension supérieur et inférieur.

Avec **Automatic** sélectionné dans le menu **A**, la position du clic détermine le type d'ordre :

| Clic | Ordre |
|---|---|
| Clic gauche sur **Bid** sous le prix actuel | Buy Limit |
| Clic gauche sur **Bid** au-dessus du prix actuel | Buy Stop |
| Clic gauche sur **Ask** au-dessus du prix actuel | Sell Limit |
| Clic gauche sur **Ask** sous le prix actuel | Sell Stop |
| Clic droit sur **Bid** | Buy Market |
| Clic droit sur **Ask** | Sell Market |

Les ordres actifs se gèrent sur l'échelle elle-même : **clic gauche et glisser** pour déplacer un ordre, **clic droit** pour le supprimer, **double clic gauche** pour modifier sa quantité.

[SCREENSHOT: Échelle DOM avec un ordre buy limit actif dans la colonne B en cours de glissement vers une ligne de prix inférieure, curseur visible en plein glissement | dc-en-depth-of-market-02.png]

### Colonnes d'analyse optionnelles

Faites un clic droit sur la ligne d'en-tête des colonnes pour activer d'autres colonnes (ou redimensionner automatiquement celles existantes) :

- **Pull/Stack** (**B.PS** / **A.PS**) — la variation de la liquidité au repos par niveau. Côté bid, le vert signifie qu'une quantité a été ajoutée (stacked), le rouge qu'une quantité a été retirée (pulled) ; le côté ask inverse la logique des couleurs.
- **Trades** (**BT** / **AT**) — volume exécuté par niveau : BT est le volume vendu au marché (frappant le bid), AT est le volume acheté au marché (levant l'ask).
- **Offers** — le nombre d'ordres individuels au repos à chaque niveau bid et ask.

[SCREENSHOT: Menu contextuel de l'en-tête des colonnes ouvert sur l'Advanced DOM montrant la liste des colonnes supplémentaires dont Pull/Stack, Trades et Offers avec des coches | dc-en-depth-of-market-03.png]

### Profils

Le DOM peut dessiner des profils à côté de l'échelle à partir des données **Volume**, **Delta** ou **Bid/Ask**. Deux modes d'enregistrement existent : le **Resettable Profile** commence à enregistrer dès que vous l'activez et s'efface avec l'icône de gomme ; le **Daily Profile** affiche les données depuis le début de la session de trading. Les concepts de lecture des profils sont couverts dans [[understanding-volume-profile]].

## Référence des paramètres

Ouvrez les paramètres du DOM avec l'**icône d'engrenage** (en haut à gauche).

| Groupe de paramètres | Ce qu'il fait |
|---|---|
| Bascules de sections | Permet d'activer ou de désactiver des sections entières du DOM pour simplifier la disposition |
| **Order Column Settings** | Réorganiser les colonnes |
| **Chart DOM Settings** | Personnaliser le texte, les couleurs et l'arrière-plan |
| Marqueurs | Activer des marqueurs de niveau pour les prix **High**, **Low**, **Open** et **Suspension** |
| **DOM Settings → Number of Levels Show** | Limite le nombre de niveaux de profondeur affichés — réglez 20 pour afficher 20 niveaux ; laissez sans restriction pour la profondeur complète envoyée par votre fournisseur |
| Section **Model** | Enregistrer votre disposition personnalisée comme modèle et charger des modèles enregistrés plus tard |

En bas de la fenêtre se trouvent le champ de quantité d'ordre, les boutons de trading classiques et l'activation **OCO** ; l'icône d'engrenage en bas à droite crée, enregistre et rappelle des stratégies OCO depuis un menu déroulant — le même système de brackets décrit dans [[oco-strategies]].

Échelle verticale : sur la colonne **Price**, cliquer près du prix actuel fait défiler la vue, tandis que cliquer près du haut ou du bas étend ou compresse l'échelle de prix (la colonne utilise un mode de reconnaissance automatique, le comportement exact dépend donc de l'endroit où vous la saisissez).

## Astuces et erreurs courantes

- **Échelles bid/ask vides mais la ligne de prix se met à jour** — votre flux est Level 1 uniquement. Vérifiez quelle profondeur inclut votre formule de flux ([[compatibility-guide]]).
- **Surprises de type d'ordre** — en mode **Automatic**, le type découle de la position du clic par rapport au prix actuel. Si vous voulez forcer un type, basculez le menu **A** sur **Limit**, **Market** ou **Conditional**.
- **Trop de scintillement sur les marchés rapides** — limitez **Number of Levels Show** et désactivez les colonnes que vous ne lisez pas ; moins de profondeur signifie un affichage plus calme et plus rapide.
- **Disposition perdue après l'avoir reconstruite** — enregistrez-la dans la section **Model** afin de pouvoir la recharger sur n'importe quel DOM.
- **Observer la liquidité sans vouloir trader** — rappelez-vous que chaque clic gauche dans Bid/Ask place un ordre réel lorsqu'un compte est actif. Entraînez-vous d'abord à lire l'échelle sur un compte SIM ([[simulation-accounts]]).

## Articles associés

- [[advanced-dom]]
- [[dom-trading-chart]]
- [[trading-panel-reference]]
- [[oco-strategies]]
- [[orderflow-101]]
- [[understanding-volume-profile]]
