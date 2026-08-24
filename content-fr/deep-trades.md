---
title: "Trades approfondis (Deep Trades)"
slug: "deep-trades"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "5 min read"
description: "Marque les gros ordres agressifs sur le graphique et révèle la liquidité passive qui les a absorbés, à l'aide de quatre types de marqueurs distincts."
keywords: ["deep trades", "gros ordres", "grands ordres sur graphique", "MBO", "iceberg", "marqueur losange", "deep trades pas de marqueurs", "deep trades historique manquant"]
---

Deep Trades visualise en temps réel les gros ordres agressifs au marché — et, contrairement à une simple bulle de gros trades, il vous montre aussi ce qu'il y avait de l'autre côté du trade. Quatre formes de marqueurs vous indiquent si l'ordre a balayé de petites quantités passives, heurté un mur passif significatif, ou s'est affronté de front avec un autre gros intervenant.

C'est le successeur de [[big-trades|Big Trades]] : Big Trades marque seulement où les gros trades se sont exécutés ; Deep Trades révèle le côté passif — si de la liquidité au repos était présente, comment le trade était composé, et quand deux gros ordres sont entrés en collision directe.

## De quoi s'agit-il

Deep Trades est un indicateur d'orderflow (flux d'ordres) qui trace des marqueurs codés par forme sur le graphique partout où un gros ordre agressif s'exécute. Il répond à la question « qu'y avait-il de l'autre côté de ce trade ? » en reliant les ordres agressifs à la liquidité passive qui les a exécutés. Il nécessite des données de marché ordre par ordre (MBO), raison pour laquelle il ne fonctionne que sur certains flux.

> **Avertissement :** la compatibilité du flux est une exigence stricte. Deep Trades fonctionne sur **Rithmic Level 1**, **Rithmic Level 2** et **dxFeed Level 2** (avec **DOM Type = MBO** pour les symboles du groupe CME). Il ne fonctionne **pas** sur dxFeed Level 1 ni CQG, car ces flux ne fournissent pas de données MBO. Sur un flux compatible MBO, réglez également **Source Type = MBO** dans **Source Settings**. Si votre flux n'est pas compatible, utilisez plutôt [[big-trades]] avec l'entrée Aggregate.

[SCREENSHOT: Graphique avec Deep Trades actif montrant plusieurs types de marqueurs à la fois — au moins un carré, un cercle creux, un cercle plein et un losange sur des bougies récentes, avec des marqueurs de couleur ask et de couleur bid distinguables | dc-en-deep-trades-01.png]

## Quand l'utiliser

- Vous tradez avec l'orderflow et voulez voir où les ordres de taille institutionnelle s'exécutent en direct.
- Vous voulez distinguer un gros ordre qui a balayé une liquidité mince d'un ordre qui a heurté un vrai mur.
- Vous cherchez les affrontements directs entre gros ordres agressifs et gros ordres passifs (marqueurs en losange) — les événements les plus significatifs que l'outil détecte.
- Les ordres iceberg et l'absorption font partie de votre plan de jeu (voir [[understanding-icebergs-absorption]]).

## Démarrage rapide

1. Vérifiez votre flux : Rithmic L1/L2 ou dxFeed L2. Sur dxFeed L2, réglez **DOM Type = MBO** pour les symboles du groupe CME ; sur tout flux compatible MBO, réglez **Source Type = MBO** dans **Source Settings**.
2. Ouvrez l'**Indicator List** sur votre graphique, trouvez **Deep Trades** et cliquez sur **+**.
3. Cliquez sur l'icône **Settings** à côté de Deep Trades.
4. Sous **Data Settings**, réglez le **Filter Mode**. Configuration de départ : **Automatic** avec **Intensity = Medium**, ou **Manual** avec un **Filter** d'environ 30 contrats sur un future d'indice liquide — puis ajustez selon votre instrument.
5. Laissez **Standard Dev.** à sa valeur par défaut (recommandé) pour que la taille des marqueurs évolue de façon cohérente.
6. Appliquez et regardez les marqueurs apparaître au fil de l'exécution des gros trades.

[SCREENSHOT: Boîte de dialogue des paramètres Deep Trades ouverte sur Data Settings, montrant Chart Area, Days to Load, et Filter Mode réglé sur Automatic avec le menu déroulant Intensity déployé (Low/Medium/Strong) | dc-en-deep-trades-02.png]

> **Remarque :** les utilisateurs existants doivent exécuter une migration de base de données unique avant que l'historique Deep Trades puisse être stocké : **Options → Database → Settings → Migrate/Compress**. Déconnectez d'abord vos flux et fermez l'espace de travail ; la migration prend environ 10 à 15 minutes.

## Comment le lire

| Marqueur | Signification |
|---|---|
| **Square** | Un gros ordre a heurté une liquidité passive au repos significative. |
| **Hollow Circle** | Un gros trade composé de nombreuses petites quantités combinées ensemble. |
| **Filled Circle** | Un gros trade exécuté par de grosses quantités individuelles en une ou quelques exécutions. |
| **Diamond** | Un gros ordre agressif s'est affronté directement avec un gros ordre passif au repos — le marqueur le plus significatif. |

Les marqueurs sont colorés par côté (**Ask Color** pour l'agression acheteuse, **Bid Color** pour l'agression vendeuse), avec des couleurs « Battle » distinctes pour les affrontements en losange. La taille du marqueur évolue avec la taille du trade.

Priorité de lecture : les losanges d'abord (deux gros intervenants en désaccord sur le prix), puis les carrés (agression contre un mur — absorption potentielle), puis les cercles (détail de composition du côté agressif). Un groupe de carrés ou de losanges qui ne parvient pas à faire bouger le prix est une absorption classique ; le même groupe suivi d'une continuation vous indique que le mur a cédé.

Chaque marqueur commence sa vie sous forme de prints sur le tape. Observez la fenêtre Time & Sales en direct ci-dessous et filtrez par Ask ou Bid pour vous familiariser avec les exécutions agressives que Deep Trades évalue.

[WIDGET: tape-lab]

## Référence des paramètres

Regroupés comme dans la boîte de dialogue des paramètres.

### Data Settings

| Paramètre | Ce qu'il fait |
|---|---|
| **Chart Area** | Où les marqueurs s'affichent : panneau Horizontal ou Vertical, plus le numéro du panneau. |
| **Days to Load** | Nombre de jours d'historique de gros trades stocké à afficher. |
| **Filter Mode** | **Manual** : vous définissez **Filter** = nombre minimum de contrats par trade (par exemple 30). **Automatic** : la plateforme choisit les seuils ; vous choisissez l'**Intensity** (**Low / Medium / Strong**). |

### Plot Settings

| Paramètre | Ce qu'il fait |
|---|---|
| **Standard Dev.** | Contrôle la mise à l'échelle de la taille des marqueurs. Conserver la valeur par défaut est recommandé. |
| **Minimum / Maximum Opacity** | Plage d'opacité selon la taille des marqueurs. |
| **Ask Color / Ask Color Battle** | Couleurs des marqueurs côté achat et des affrontements en losange côté achat. |
| **Bid Color / Bid Color Battle** | Couleurs des marqueurs côté vente et des affrontements en losange côté vente. |

### Marker Settings

| Paramètre | Ce qu'il fait |
|---|---|
| **Minimum / Maximum Size** | La plage de tailles entre lesquelles les marqueurs évoluent. |

### Alert Settings

| Paramètre | Ce qu'il fait |
|---|---|
| **Enable Alert Sound** | Active les alertes sonores. |
| **Bid Alert / Ask Alert** | Sons distincts pour les détections côté bid et côté ask. |

## Astuces et erreurs courantes

- **Aucun marqueur ?** Presque toujours lié au flux : dxFeed L1 et CQG ne fonctionnent pas, DOM Type n'est pas en MBO, ou **Source Type** n'est pas réglé sur MBO dans Source Settings. Ensuite, vérifiez que le Manual Filter n'est pas réglé trop haut pour l'instrument.
- **Pas d'historique pour les jours passés ?** C'est voulu. Les données MBO ne peuvent pas être récupérées rétroactivement auprès du fournisseur — les marqueurs historiques n'existent que pour les périodes où votre plateforme était en marche et connectée. Une semaine où votre PC était éteint n'a pas d'historique Deep Trades.
- **Trop ou trop peu de marqueurs :** en mode Manual, ajustez le minimum de contrats ; en mode Automatic, changez l'Intensity.
- **Laissez la plateforme calibrer les seuils.** Exécutez **Options → Tools → Big Trades Analysis** — l'outil calcule les seuils optimaux par instrument (utilisés avec le mode de filtre Automatic) et les enregistre automatiquement. Relancez-le chaque semaine ou chaque mois selon l'évolution des conditions de liquidité.
- **Combinez avec le tableau.** Associez les marqueurs à [[deep-stats]] pour confirmer l'absorption numériquement (lectures COT et Effort) au lieu de vous fier à un seul marqueur.

## Articles associés

- [[orderflow-101]]
- [[understanding-icebergs-absorption]]
- [[big-trades]]
- [[deep-stats]]
- [[different-types-of-input]]
- [[indicator-layout]]
