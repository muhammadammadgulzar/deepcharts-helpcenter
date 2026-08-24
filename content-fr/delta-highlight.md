---
title: "Delta % Highlight"
slug: "delta-highlight"
category: "Indicators & Analysis"
subcategory: "Volume & Delta"
type: "reference"
difficulty: "intermediate"
time: "4 min read"
description: "Marque les bougies dont le pourcentage de delta atteint votre seuil afin que l'agression extrême à sens unique ressorte instantanément sur le graphique."
keywords: ["delta % highlight", "surlignage delta pourcent", "pourcentage de delta", "surligner bougies delta", "marqueur delta", "bougies déséquilibrées", "delta extrême"]
---

Delta % Highlight marque sur votre graphique les bougies dont le pourcentage de delta — la pression acheteuse contre la pression vendeuse rapportée au volume de la bougie — atteint un seuil que vous définissez. Au lieu de scruter manuellement le delta de chaque barre, vous laissez le graphique signaler les bougies présentant une agression significative à sens unique.

C'est un outil de filtrage : il ne calcule rien de nouveau, il rend impossibles à manquer les bougies d'orderflow extrêmes.

## De quoi s'agit-il

L'indicateur surligne les bougies dont le pourcentage de delta répond à vos critères. Une bougie dont la quasi-totalité du volume provient d'achats agressifs est marquée dans la couleur **Ask Color** ; une bougie dominée par des ventes agressives est marquée dans la couleur **Bid Color**. Tout ce qui se situe entre les deux reste non marqué, ce qui garde votre graphique propre.

[SCREENSHOT: Fenêtre graphique avec Delta % Highlight appliqué — une série de bougies ordinaires avec deux ou trois bougies visiblement teintées dans la couleur Ask et une dans la couleur Bid, montrant comment les bougies à delta extrême ressortent | dc-en-delta-highlight-01.png]

## Quand l'utiliser

- Vous voulez que les bougies de déséquilibre extrême soient signalées automatiquement pendant que vous vous concentrez sur la structure.
- Vous analysez les sessions après la clôture et devez repérer rapidement les bougies à sens unique.
- Vous tradez les mouvements d'initiative : une bougie surlignée cassant un niveau clé témoigne d'une véritable participation agressive.
- Vous cherchez l'épuisement : une bougie à delta extrême qui ne parvient pas à prolonger le mouvement est un signe classique que l'agresseur est piégé.

## Démarrage rapide

1. Ouvrez la liste **Indicator List** sur votre graphique.
2. Trouvez **Delta % Highlight** et cliquez sur **+** pour l'ajouter.
3. Cliquez sur l'icône **Settings** (paramètres) à côté de l'indicateur.
4. Réglez **Min Value** sur un seuil pertinent — c'est le pourcentage de delta minimal qu'une bougie doit atteindre pour être marquée. Commencez suffisamment haut pour que seules quelques bougies par session soient retenues, puis ajustez à la baisse.
5. Laissez **Max Value** à **0** pour désactiver le filtre maximal, afin que chaque bougie au-dessus du minimum soit marquée.
6. Choisissez une **Bid Color** et une **Ask Color** qui contrastent avec vos bougies habituelles, et réglez **Opacity** (opacité) pour que le surlignage soit visible sans masquer la bougie en dessous.

[SCREENSHOT: Boîte de dialogue des paramètres de Delta % Highlight montrant les champs Min Value et Max Value, les sélecteurs Bid Color et Ask Color, et le contrôle Opacity | dc-en-delta-highlight-02.png]

## Comment le lire

- **Bougie de couleur Ask (delta % positif) :** les acheteurs agressifs ont dominé le volume de la bougie. Dans une tendance, c'est une confirmation ; contre une résistance après un mouvement prolongé, ce peut être le climax d'achat.
- **Bougie de couleur Bid (delta % négatif) :** les vendeurs agressifs ont dominé — l'image miroir.
- **Ce qui se passe ensuite compte le plus.** Une bougie surlignée suivie d'une continuation valide l'agression. Une bougie surlignée immédiatement rejetée — le prix reclôture au travers — suggère que le côté agressif a été absorbé, l'un des signaux de retournement les plus solides en orderflow (voir [[understanding-icebergs-absorption]]).
- **La fréquence est un indice de régime.** Les sessions qui impriment de nombreux surlignages sont unilatérales et en tendance ; les sessions qui n'en impriment aucun sont équilibrées et rotationnelles.

## Référence des paramètres

| Paramètre | Ce qu'il fait |
|---|---|
| **Min Value** | Seuil minimal de pourcentage de delta — seules les bougies atteignant ou dépassant ce niveau sont marquées. |
| **Max Value** | Filtre maximal de pourcentage de delta. Réglez-le sur **0** pour désactiver le filtrage maximal, afin que toutes les bougies au-dessus du minimum soient marquées. |
| **Bid Color** | Couleur du marqueur pour les pourcentages de delta négatifs — dominance de la pression vendeuse. |
| **Ask Color** | Couleur du marqueur pour les pourcentages de delta positifs — dominance de la pression acheteuse. |
| **Opacity** | Transparence du marqueur : des valeurs plus basses rendent le surlignage plus transparent, des valeurs plus élevées le rendent plus opaque et visible. |

## Astuces et erreurs courantes

- **Calibrez par instrument.** Un pourcentage de delta rare sur un contrat peut être routinier sur un contrat moins liquide. Ajustez **Min Value** jusqu'à ce que les surlignages soient réellement exceptionnels pour le marché que vous tradez.
- **Le pourcentage masque la taille.** Une bougie minuscule de trois contrats peut afficher un pourcentage de delta extrême. Vérifiez le volume réel — associez le surlignage à [[volume]] ou [[deep-stats]] avant de le considérer comme significatif.
- **Ne tradez pas la couleur, tradez la réaction.** Le surlignage identifie la bougie candidate ; la logique d'entrée vient de ce que fait le prix au niveau de cette bougie et après.
- **Utilisez les deux bornes pour un filtrage passe-bande.** Définir une **Max Value** au-dessus du minimum ne marque que les déséquilibres intermédiaires et ignore les extrêmes de blow-off, ce que préfèrent certains styles de retour à la moyenne.

## Articles associés

- [[orderflow-101]]
- [[different-types-of-input]]
- [[indicator-layout]]
- [[delta-bar]]
- [[deep-stats]]
- [[ratio-highlight]]
