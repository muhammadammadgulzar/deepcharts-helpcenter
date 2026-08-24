---
title: "Deep Delta"
slug: "deep-delta"
category: "Indicators & Analysis"
subcategory: "Deep Indicators"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Référence pour Deep Delta : delta filtré avec jusqu'à quatre plages de taille pour séparer les petits, moyens et grands participants, plus des lignes de seuil et des marqueurs d'absorption."
keywords: ["deep delta", "filtre de delta", "barres de delta", "delta filtré", "delta multi-plages", "delta des gros intervenants", "marqueur d'absorption", "plages de delta"]
---

Deep Delta est une évolution avancée de l'indicateur classique Delta Bars. Au lieu d'un seul chiffre de delta par bougie, il vous permet d'appliquer des filtres de taille au delta et de le diviser en jusqu'à quatre plages distinctes — vous pouvez ainsi observer indépendamment le delta des petits, moyens et grands participants au sein de la même bougie.

Cette séparation est tout l'intérêt : le flux de taille « retail » et le flux de taille institutionnelle sont souvent en désaccord, et Deep Delta rend ce désaccord visible.

## De quoi s'agit-il

Le delta est le volume d'achat agressif moins le volume de vente agressif. Le delta classique agrège toutes les tailles de trades ; le mode Multi-Range de Deep Delta filtre les trades par taille en jusqu'à quatre plages (chacune avec son propre minimum et maximum) et trace le delta de chaque plage comme une série distincte. Des lignes de seuil et des marqueurs verticaux signalent les moments où les extrêmes de delta atteignent les niveaux que vous définissez.

## Quand l'utiliser

- Vous voulez voir si les gros intervenants accompagnent le mouvement en cours — ou le contrent.
- Vous voulez éliminer le bruit des petits lots et lire uniquement les tailles au-dessus d'un seuil.
- Vous recherchez l'absorption : de fortes poussées de delta dans une direction que le prix ne suit pas.
- Vous utilisez déjà Delta Bars et souhaitez la même lecture enrichie du contexte de taille ([[delta-bar]] couvre la version classique).

## Démarrage rapide

1. Ouvrez un graphique et ajoutez **Deep Delta** depuis le bouton **Indicators** du graphique.
2. Réglez **Delta Mode** sur **Multi-Range**.
3. Activez deux plages pour commencer : une avec un minimum bas pour le petit flux, et une avec un filtre **Min** élevé (et **Max** = 0, ce qui désactive le maximum) pour le grand flux uniquement.
4. Réglez **Input Data** sur **Aggregate Trades** afin que les exécutions fractionnées soient recombinées avant le filtrage — sinon un ordre important comptabilisé comme de nombreuses petites exécutions atterrit dans la mauvaise plage.
5. Appliquez, puis attribuez à chaque plage une couleur distincte dans la section **Subgraph**.

La démo en direct ci-dessous montre la lecture sous-jacente — le delta par barre avec la ligne de delta cumulé. Survolez une barre pour connaître son histoire.

[WIDGET: delta-lab]

## Comment le lire

- **Les plages concordent** (toutes positives ou toutes négatives) : la participation est alignée entre les tailles — la pression est large.
- **Les plages divergent** : le cas intéressant. Par exemple, un delta de grande taille (une plage avec Min = 50) positif alors que le delta de petite taille est négatif suggère que les gros intervenants achètent face aux ventes du retail.
- **Des marqueurs se déclenchent alors que le prix ne suit pas la poussée du delta** : l'agression est absorbée par des ordres passifs — un avertissement classique que le mouvement peut caler ou s'inverser. Voir [[understanding-icebergs-absorption]].
- **Lignes de seuil** : vos propres niveaux de significativité — un delta au-delà de la ligne signifie que l'agression de la barre est inhabituelle selon votre définition.

Pour la mécanique sous-jacente bid/ask/agresseur, voir [[orderflow-101]].

## Référence des paramètres

Regroupés comme dans la boîte de dialogue de l'indicateur.

### Parameters

| Paramètre | Ce qu'il fait |
|---|---|
| **Delta Mode** | **Classic** (Delta Bars standard, sans filtres) ou **Multi-Range** (active les plages de delta filtrées) |
| **Input Data** | Base de calcul : **Volume** (volume total négocié à chaque niveau de prix — zones de haute intensité), **Aggregate Trades** (trades combinés au même niveau de prix — réduit le bruit de fragmentation des exécutions), **Trades** (nombre de transactions par niveau — fréquence des trades), **Order** (données d'ordres telles que les quantités d'ordres d'achat/vente — pression des ordres). Voir [[different-types-of-input]] |
| **Range 1–4** | Chaque plage possède un filtre **Min**, un filtre **Max** et un interrupteur d'activation. Régler Max sur 0 désactive le filtre maximum |

### Threshold

| Paramètre | Ce qu'il fait |
|---|---|
| **Level-settings** | Jusqu'à deux lignes horizontales personnalisables à des niveaux de delta positifs/négatifs définis |
| **Marker** | Marqueurs verticaux lorsque les deltas minimum et maximum atteignent tous deux un seuil défini — met en évidence des poussées de delta opposées au sein d'une même barre et les situations d'absorption |

### Subgraph

| Paramètre | Ce qu'il fait |
|---|---|
| **Range colors** | Une couleur par plage activée |
| **Maximum Positive/Negative Delta shadows** | Couleurs d'ombre marquant les extrêmes de delta de chaque barre |
| **Line Thickness** | Ajuste l'apparence du corps et des ombres des plages de delta |

[SCREENSHOT: Boîte de dialogue des paramètres de Deep Delta ouverte à la section Parameters montrant Delta Mode réglé sur Multi-Range et les quatre lignes de plage avec filtres Min/Max | dc-en-deep-delta-01.png]

## Astuces et erreurs courantes

- **Rien ne s'affiche en mode Multi-Range ?** Les plages doivent être activées individuellement, et les filtres Min/Max ne doivent pas tout exclure — rappelez-vous que Max = 0 désactive le maximum, vérifiez donc si votre Min se situe au-dessus des tailles de delta réellement négociées. Vérifiez également le choix de Input Data.
- **Vous voulez uniquement le delta des gros intervenants ?** Une seule plage activée avec un filtre Min élevé, et **Input Data** = **Aggregate Trades** pour que les exécutions fractionnées soient d'abord recombinées à leur taille d'origine.
- **Les plages semblent identiques ?** Vos bornes Min/Max se chevauchent peut-être fortement — rendez les bandes de taille distinctes (par exemple 1–9, 10–49, 50+).
- **Des marqueurs partout ?** Le seuil est trop bas pour le delta typique de l'instrument. Augmentez-le jusqu'à ce que les marqueurs signalent des barres véritablement inhabituelles.
- Le delta mesure l'agression, pas le résultat — lisez-le toujours par rapport au prix. Un delta positif fort sans progression haussière est une observation baissière, pas haussière.

## Articles associés

- [[delta-bar]]
- [[orderflow-101]]
- [[deep-print]]
- [[understanding-icebergs-absorption]]
- [[different-types-of-input]]
- [[indicator-layout]]
