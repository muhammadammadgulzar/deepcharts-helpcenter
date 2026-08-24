---
title: "Advanced Time And Sales (le tape)"
slug: "adv-time-and-sales"
category: "Platform Windows"
subcategory: ""
type: "reference"
difficulty: "intermediate"
time: "12 min read"
description: "Lisez le tape de DeepCharts : les prints trade par trade avec les couleurs d'agresseur, les filtres par côté, et les panneaux inférieurs Bid/Ask, Delta et déséquilibre du carnet."
keywords: ["time and sales", "tape", "adv time and sales", "T&S", "time & sales", "lecture du tape", "lignes vertes et roses", "lignes grises", "panneau delta", "déséquilibre du carnet", "time and sales vide"]
---

Advanced Time And Sales est le tape de DeepCharts : une liste en direct où chaque trade exécuté apparaît sous forme d'une ligne au moment où il s'imprime. Là où un graphique compresse l'activité en barres, le tape vous montre chaque transaction individuelle — son heure, sa taille, et quel côté du marché était l'agresseur.

Cet article couvre la fenêtre elle-même : comment l'ouvrir, ce que signifient les couleurs des lignes, les trois panneaux inférieurs optionnels (Bid/Ask, Delta, déséquilibre du carnet), et chaque paramètre des boîtes de dialogue **Chart Settings** et **TS Settings**.

## De quoi s'agit-il

La fenêtre répond à une question : qui trade en ce moment, combien, et à quel prix. Chaque ligne est un print de trade unique avec trois colonnes — **Time**, **Volume** et **Price**. La cellule de prix est codée par couleur selon l'endroit où le trade a été exécuté, si bien qu'en un coup d'œil vous voyez si les acheteurs lèvent l'ask ou si les vendeurs frappent le bid. Des panneaux optionnels en bas de la fenêtre agrègent ces prints en totaux cumulés par côté, en barre de delta, ou en vue en direct du carnet d'ordres au repos.

Si la logique du côté agresseur est nouvelle pour vous (pourquoi un trade « à l'ask » signifie un acheteur agressif), lisez d'abord [[orderflow-101]] — le tape est bien plus compréhensible avec ce modèle en tête.

## Quand l'utiliser

- Confirmer si un mouvement rapide est soutenu par un vrai volume agressif ou par des prints maigres.
- Observer la vitesse d'exécution et la taille des prints autour d'un niveau qui vous intéresse — se combine bien avec [[speed-of-tape]] et [[big-trades]].
- Surveiller un seul côté (tous les achats ou toutes les ventes) avec le filtre de côté de trade.
- Garder un delta cumulé compact ou un décompte de volume bid/ask sans ouvrir un graphique complet.
- Suivre la pression du carnet au repos avec le panneau de déséquilibre du carnet pendant que vous gérez une entrée sur le [[advanced-dom]].

## Démarrage rapide

1. Dans la barre principale, ouvrez **New → Adv. Time And Sales**.
2. Dans la fenêtre **Select Instrument**, choisissez votre instrument (par exemple NQ) et confirmez. Seules les bourses auxquelles vous êtes abonné dans [[symbol-manage]] apparaissent ici — un sélecteur vide signifie qu'aucun abonnement n'est encore actif.
3. La fenêtre du tape s'ouvre et commence à se remplir avec les prints en direct.

[SCREENSHOT: Le menu New ouvert dans la barre principale de DeepCharts avec Adv. Time And Sales en surbrillance, et la boîte de dialogue Select Instrument visible avec NQ sélectionné | dc-en-adv-time-and-sales-01.png]

> **Remarque :** un tape fraîchement ouvert démarre vide et ne se remplit qu'au fil des nouveaux trades. Selon le comportement vérifié en vidéo, les fenêtres Time And Sales dupliquées et nouvelles n'affichaient aucun historique — sur un marché calme, la fenêtre peut rester clairsemée un moment. Cela semble voulu, mais le comportement exact de rechargement de l'historique est [CONFIRM: does a new/duplicated Adv. TS window intentionally load no trade history?].

## Anatomie de la fenêtre

[SCREENSHOT: Fenêtre Adv. Time And Sales complète sur NQ montrant les icônes de la barre de titre (logo, engrenage, lien, réduire, fermer), la liste déroulante de symbole en pleine largeur, et un tape mixte de cellules de prix vertes et roses avec des chiffres de volume bleus | dc-en-adv-time-and-sales-02.png]

- **Barre de titre**, de gauche à droite : le logo DeepCharts, l'icône **engrenage** (le centre des paramètres — tout se trouve ici), l'icône **lien** carrée, réduire et fermer. L'icône de lien n'a pas été démontrée dans notre matériel source ; il s'agit vraisemblablement des groupes de couleurs standard de liaison de fenêtres (voir [[link-windows]]), mais le comportement exact peut varier.
- **Liste déroulante de symbole** — pleine largeur, directement sous la barre de titre (par exemple NQ-202609). La modifier bascule le tape sur un autre instrument.
- **Le tape** — colonnes **Time | Volume | Price**. Les lignes apparaissent de haut en bas au fur et à mesure des exécutions. Le volume s'affiche en texte bleu.
- La fenêtre est librement redimensionnable ; les colonnes s'étirent avec elle.

## Comment le lire

L'arrière-plan de la cellule **Price** de chaque ligne encode le côté agresseur :

| Couleur | Signification |
|---|---|
| Vert | Trade exécuté à l'ask — acheteur agresseur |
| Rose | Trade exécuté au bid — vendeur agresseur |
| Gris | Non confirmé — probablement un trade exécuté entre le bid et l'ask (à l'intérieur du spread) |

La lecture du gris est une inférence, pas un fait confirmé : les champs de couleur de **TS Settings** incluent un arrière-plan **Between Bid/Ask** gris par défaut, ce qui suggère fortement que les lignes grises sont des prints à l'intérieur du spread — mais cela reste à confirmer, donc considérez-le comme probable plutôt que certain. Les mêmes jeux de couleurs incluent aussi des arrière-plans **Below Bid** et **Above Ask**, ce qui signifie que le tape peut aussi distinguer les prints en dehors du spread coté ; les conditions de déclenchement de ces colorations sont [CONFIRM: exact conditions for Below Bid / Above Ask row coloring].

Essayez-le sur le tape en direct ci-dessous — survolez n'importe quel print pour mettre le flux en pause et voir pourquoi il est vert ou rose, et basculez les filtres All/Ask/Bid pour voir le tape prendre une seule couleur.

[WIDGET: tape-lab]

Un tape soudainement d'une seule couleur n'est généralement pas le marché — c'est le filtre de côté de trade (section suivante).

## Le menu engrenage

L'icône d'engrenage ouvre le menu complet : **All Trades / Ask Trades / Bid Trades** (un filtre à trois positions), **Enable Bid/Ask**, **Enable Delta**, **Chart Settings**, **Enable book imbalance**, **Book imbalance settings**, **Duplicate Adv. TS**, **Always on Top**, **Template** (Load / Save As), **Rebuild TS**, **Rename TS** et **Settings TS**.

[SCREENSHOT: Menu engrenage d'Adv. Time And Sales entièrement ouvert montrant tous les éléments : le filtre All/Ask/Bid Trades avec la coche sur All Trades, et les entrées Enable Bid/Ask, Enable Delta, Chart Settings, Enable book imbalance, Book imbalance settings, Duplicate Adv. TS, Always on Top, Template, Rebuild TS, Rename TS et Settings TS | dc-en-adv-time-and-sales-03.png]

### Filtres par côté de trade

**All Trades** (par défaut) affiche le tape mixte. **Ask Trades** n'affiche que les exécutions côté ask — chaque ligne visible devient verte. **Bid Trades** n'affiche que les exécutions côté bid — tout en rose. Le même choix existe aussi dans **Settings TS** sous **TS Mode** ; les deux restent synchronisés.

[SCREENSHOT: Tape avec le filtre Ask Trades actif — toutes les lignes vertes — et le menu engrenage ouvert montrant la coche déplacée sur Ask Trades | dc-en-adv-time-and-sales-04.png]

### Panneau Bid/Ask

**Enable Bid/Ask** (désactivé par défaut) ajoute un panneau dans le tiers inférieur de la fenêtre. Il démarre vide avec un bouton **Reset** vert pleine largeur, puis fait apparaître deux boîtes : violette à gauche et verte à droite, chacune avec un compteur en dessous. Les boîtes grandissent au fil des prints, et **Reset** remet les deux compteurs à zéro.

D'après la convention de couleurs du tape, la boîte violette semble suivre le volume négocié côté bid et la boîte verte le volume côté ask depuis la dernière remise à zéro — une lecture raisonnable, mais la sémantique exacte est [CONFIRM: Bid/Ask panel — do the two counters equal cumulative contracts traded at bid vs at ask since last Reset?].

[SCREENSHOT: Adv. Time And Sales avec le panneau inférieur Bid/Ask activé — boîte violette à gauche, boîte verte à droite, décomptes de contrats sous chaque boîte et le bouton Reset vert pleine largeur | dc-en-adv-time-and-sales-05.png]

### Panneau Delta

**Enable Delta** (désactivé par défaut) affiche une seule barre horizontale dans le panneau inférieur : violette quand le delta cumulé est négatif, verte quand il est positif, avec deux nombres superposés qui évoluent au fil des prints (par exemple -5 / -3 devenant -14 / -12 pendant une vague de ventes). **Reset** remet la barre à zéro.

Les champs de texte de **Chart Settings** incluent des couleurs séparées pour « Delta Volume » et « Delta Trade », donc les deux nombres sont très probablement le delta de volume (en haut) et le delta du nombre de trades (en bas) — correspondance exacte non confirmée.

[SCREENSHOT: Panneau inférieur Delta montrant une barre de delta négative violette avec deux nombres négatifs superposés, puis le même panneau en vert après le passage du delta en positif | dc-en-adv-time-and-sales-06.png]

### Panneau de déséquilibre du carnet

**Enable book imbalance** (désactivé par défaut) bascule le panneau inférieur en vue du carnet au repos : un nombre à gauche (côté bid) et un à droite (côté ask). Quand les deux côtés sont égaux, seuls des nombres simples s'affichent. Quand un côté domine, ce côté fait apparaître une boîte colorée dimensionnée selon sa part — une boîte verte à gauche quand le carnet bid domine, une boîte rouge à droite quand le carnet ask domine. Les couleurs sont confirmées par la boîte de dialogue **Imbalance settings** (Bid Volume = vert, Ask Volume = rouge).

Contrairement aux deux autres panneaux, ce mode n'a pas de bouton **Reset** — il reflète le carnet actuel au lieu d'accumuler. Ce que les nombres additionnent exactement (seulement le meilleur niveau bid/ask, ou plusieurs niveaux du carnet) n'est pas confirmé, tout comme la nécessité éventuelle de données de profondeur Level 2 pour alimenter le panneau.

[SCREENSHOT: Panneau inférieur de déséquilibre du carnet dans deux états — valeurs égales affichées en nombres simples, et un côté bid dominant avec une boîte verte à gauche dimensionnée proportionnellement | dc-en-adv-time-and-sales-07.png]

### Utilitaires de fenêtre

- **Duplicate Adv. TS** — ouvre une seconde fenêtre de tape avec le même symbole présélectionné. Le duplicata démarre avec un tape vide et des compteurs de panneau réinitialisés, et chaque fenêtre conserve ses propres paramètres.
- **Always on Top** — maintient la fenêtre au-dessus des autres ; le comportement exact n'a pas été démontré dans notre matériel source, mais l'élément de menu correspond à l'option de fenêtre standard.
- **Template → Load / Save As** — enregistrez ou chargez une configuration Time And Sales nommée, sur le même modèle que les modèles de graphique et de DOM ([[templates-workspaces]]).
- **Rebuild TS** — vide et reconstruit le tape. Utilisez-le comme premier correctif léger quand le tape semble buggé ou figé. Les compteurs des panneaux reviennent à zéro après une reconstruction.
- **Rename TS** — renomme la fenêtre. [CONFIRM: Rename TS dialog contents — never opened in source material]

## Référence des paramètres

### Chart Settings (panneaux Bid/Ask et Delta)

**Engrenage → Chart Settings** contrôle la façon dont les deux panneaux accumulateurs mesurent et affichent.

| Section | Paramètre | Fonction |
|---|---|---|
| GENERAL | **Period Mode** | Fenêtre d'accumulation. Par défaut **Resettable** — accumule jusqu'à ce que vous appuyiez sur Reset. Autres options : **Fixed count**, **Fixed seconds** — celles-ci semblent se réinitialiser automatiquement en utilisant **Period Length** comme fenêtre, mais le comportement exact n'est pas confirmé. |
| GENERAL | **Period Length** | Nombre utilisé par les modes Fixed. Par défaut 10. |
| GENERAL | **Visual Mode** | Par défaut **Pos and neg**. [CONFIRM: other Visual Mode options] |
| GENERAL | **Enable Shortcut Reset** | Désactivé par défaut. [CONFIRM: which shortcut this binds] |
| COLOR SETTINGS | **Bid Volume / Ask Volume / Bid Trades / Ask Trades** | Pastilles de couleur pour les boîtes des panneaux et la barre de delta (bid = violet, ask = vert par défaut). |
| COLOR SETTINGS | **Color only dominant delta** | Bascule affectant la coloration de la barre de delta. |
| TEXT SETTINGS | **Text Size / Text Color** | Style du texte des panneaux. Taille par défaut 14. |
| TEXT SETTINGS | **Pos./Neg. Delta Volume, Pos./Neg. Delta Trade** | Sélecteurs de couleur séparés pour les deux nombres affichés sur la barre de delta, selon le signe. |

**Apply** applique sans fermer ; **OK** ferme la boîte de dialogue.

[SCREENSHOT: Boîte de dialogue Chart Settings ouverte montrant la section GENERAL avec la liste déroulante Period Mode déployée listant Resettable, Fixed count et Fixed seconds | dc-en-adv-time-and-sales-08.png]

### Book imbalance settings

**Engrenage → Book imbalance settings** ouvre la boîte de dialogue **Imbalance settings** : COLOR SETTINGS (**Bid Volume** = vert, **Ask Volume** = rouge) et TEXT SETTINGS (**Text Size** par défaut 14, **Bid color**, **Ask color**).

### TS Settings (le tape lui-même)

**Engrenage → Settings TS** ouvre la boîte de dialogue **TS Settings** avec cinq sections repliables :

| Section | Paramètres |
|---|---|
| GENERAL | **Back color**, **Border color**, **Font color**, **Font size** (par défaut 12.00), **Bold font** (s'applique en direct via Apply), **Input data** (par défaut **Volume** ; passer sur **Order** change l'en-tête de la colonne du milieu — le tape affiche alors un décompte lié aux ordres par print au lieu du volume en contrats ; sémantique exacte et éventuelles options supplémentaires non confirmées), **Show milliseconds** (la colonne Time devient par exemple 02:03:42.382), **TS Mode** (**All trades / Ask trades / Bid trades** — identique au filtre de l'engrenage). |
| FILTER SETTINGS | **Filter 1** (nombre, par défaut 0), **Enable Filter 2** (désactivé), **Filter 2** (nombre, par défaut 0). Ces champs ressemblent à des seuils de taille minimale qui conditionnent les jeux de couleurs FILTER 1 / FILTER 2 pour mettre en évidence les prints plus gros — non confirmé. |
| FILTER 1 | Dix champs de couleur : arrière-plans **Bid**, **Below Bid**, **Between Bid/Ask** (gris par défaut), **Ask**, **Above Ask** plus les cinq couleurs de texte correspondantes. |
| FILTER 2 | Les dix mêmes champs avec un second jeu de couleurs plus saturé. |
| ALERT SOUND | Listes déroulantes de sons **Enable Filter 1**, **Bid Filter 1** et **Ask Filter 1** avec boutons de pré-écoute, **Enable Filter 2**, **Bid/Ask Filter 2**. Joue vraisemblablement le son choisi quand un print passe le filtre de ce côté — sémantique de déclenchement non confirmée. |

[SCREENSHOT: Boîte de dialogue TS Settings ouverte sur la section GENERAL montrant les pastilles Back/Border/Font color, Font size 12.00, la bascule Bold font, la liste déroulante Input data réglée sur Volume, la bascule Show milliseconds et la liste déroulante TS Mode | dc-en-adv-time-and-sales-09.png]

[SCREENSHOT: Boîte de dialogue TS Settings défilée jusqu'à FILTER SETTINGS et la section FILTER 1 déployée montrant les champs d'arrière-plan et de couleur de texte Bid, Below Bid, Between Bid/Ask (gris), Ask et Above Ask | dc-en-adv-time-and-sales-10.png]

## Dépannage

- **Le tape est vide.** Les fenêtres nouvelles et dupliquées démarrent vides et ne se remplissent qu'avec les prints en direct — attendez des trades, vérifiez que le flux est connecté et que le marché est ouvert, puis essayez **Engrenage → Rebuild TS**. Si le tape reste mort alors que les graphiques bougent, consultez [[feed-connected-chart-not-moving]].
- **Uniquement des lignes vertes / uniquement des lignes roses.** Le filtre de côté de trade est réglé sur Ask Trades ou Bid Trades. Repassez sur **All Trades** (vérifiez aussi **Settings TS → TS Mode**).
- **La colonne du milieu indique Order au lieu de Volume.** **Settings TS → GENERAL → Input data** a été modifié — remettez-le sur **Volume**.
- **Le tape semble figé ou buggé.** **Engrenage → Rebuild TS** en premier ; si tout le flux est en panne, suivez [[data-delayed-lagging]].
- **Les nombres du panneau inférieur ne se réinitialisent pas.** Le mode déséquilibre du carnet n'a pas de Reset, par conception — il reflète le carnet actuel. Seuls les modes Bid/Ask et Delta disposent du contrôle Reset vert.

## Astuces et erreurs courantes

- Le panneau inférieur n'affiche qu'un mode à la fois — Bid/Ask, Delta ou déséquilibre du carnet. Si le panneau ne ressemble pas à ce que vous attendez, vérifiez laquelle des trois bascules de l'engrenage est active.
- Utilisez **Duplicate Adv. TS** plus la liste déroulante de symbole pour faire tourner deux tapes côte à côte sur des instruments différents ; chaque fenêtre conserve ses filtres, panneaux et paramètres indépendants.
- Enregistrez votre tape configuré comme modèle (**Engrenage → Template → Save As**) pour pouvoir reconstruire votre disposition en quelques secondes sur un nouvel espace de travail.
- Ne lisez pas les lignes grises comme un signal définitif — l'interprétation « à l'intérieur du spread » est probable mais non confirmée. Si votre stratégie en dépend, vérifiez d'abord auprès du support ([[get-help]]).
- Les millisecondes (**Show milliseconds**) valent la peine d'être activées quand vous étudiez les rafales d'activité — les prints d'une même seconde deviennent distinguables.

## Articles associés

- [[orderflow-101]]
- [[advanced-dom]]
- [[speed-of-tape]]
- [[big-trades]]
- [[deep-trades]]
- [[symbol-manage]]
