---
title: "Comment connecter un flux de données Rithmic"
slug: "connect-rithmic"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Connectez un flux de données Rithmic à DeepCharts — signez l'accord dans R Trader Pro, saisissez vos identifiants avec la bonne valeur Server et vérifiez que les graphiques sont en direct."
keywords: ["rithmic", "rithmic rapi", "connecter rithmic", "configuration rithmic", "rithmic paper trading", "rythmic", "ritmic", "rithmik", "feed source rithmic manquante", "rithmic wss beta"]
---
À la fin de ce guide, vous aurez un flux de données Rithmic connecté à DeepCharts et un graphique en direct à l'écran. Le guide principal couvre un abonnement Rithmic acheté sur le site web de DeepCharts ; les sections annexes couvrent les comptes Rithmic fournis par un courtier ou provenant d'une autre plateforme de trading.

> **Remarque :** Rithmic ne vend pas de flux de données directement depuis rithmic.com. Vos identifiants Rithmic proviennent toujours de l'une de ces quatre sources : le site web de DeepCharts, un courtier, une prop firm ou une autre plateforme de trading. Si votre compte provient d'une prop firm, suivez plutôt [[connect-rithmic-prop-firm]] (ou [[connect-apex]] pour Apex Trader Funding).

## Avant de commencer

Assurez-vous d'avoir :

- [ ] DeepCharts installé et activé — voir [[install-deepcharts]]
- [ ] Un abonnement Rithmic actif avec son nom d'utilisateur et son mot de passe — voir [[buy-data-feed]] si vous n'en avez pas encore acheté
- [ ] L'accord de données de marché Rithmic signé via R Trader Pro — voir [[sign-market-data-agreement]] (les étapes 2–3 ci-dessous résument le processus)
- [ ] Vérifié que la source de votre compte est prise en charge — voir [[compatibility-guide]]

## Étapes

1. Récupérez vos identifiants Rithmic. Pour un flux acheté sur le site web de DeepCharts : connectez-vous sur my.deepcharts.com, ouvrez la section **Subscriptions** et repérez votre nom d'utilisateur et votre mot de passe Rithmic. Gardez-les à portée de main — vous en aurez besoin à chaque étape qui suit.

[SCREENSHOT: Tableau de bord DeepCharts sur my.deepcharts.com avec la section Subscriptions ouverte et la ligne de l'abonnement Rithmic visible, zone des identifiants mise en évidence (flouter le nom d'utilisateur/mot de passe réels) | dc-en-connect-rithmic-01.png]

2. Signez l'accord de données de marché Rithmic dans R Trader Pro. Rithmic exige que vous acceptiez ses accords avant qu'une plateforme tierce puisse se connecter — s'ils ne sont pas signés, la connexion échoue même avec des identifiants corrects. Téléchargez R Trader Pro depuis https://www.rithmic.com/rtraderpro (cliquez sur **Download R | Trader Pro**), installez-le et ouvrez-le. Remplissez **les deux** formulaires de connexion avec les mêmes valeurs : votre nom d'utilisateur et votre mot de passe Rithmic, **System** = **Rithmic Paper Trading**, et la **Gateway** la plus proche de chez vous. Cliquez sur **Login**, choisissez votre statut de données de marché lorsqu'il vous est demandé (les traders particuliers sélectionnent normalement **Non-Professional**), puis lisez et acceptez chaque accord jusqu'à ce qu'aucune invite ne reste. Le processus complet est couvert dans [[sign-market-data-agreement]].

[SCREENSHOT: Écran de connexion de R Trader Pro montrant les deux formulaires de connexion côte à côte, tous deux remplis à l'identique, avec System réglé sur Rithmic Paper Trading et le menu déroulant Gateway visible | dc-en-connect-rithmic-02.png]

> **Remarque :** Les accords sont stockés sur les serveurs de Rithmic, vous n'avez donc pas besoin de garder R Trader Pro ouvert pendant l'utilisation de DeepCharts. Vous ne répétez cette opération que si votre compte est réinitialisé ou si Rithmic introduit de nouveaux accords obligatoires.

3. Pendant que vous êtes dans R Trader Pro (première configuration uniquement), supprimez la limite de réception de données de Rithmic : ouvrez **Window → Preferences → Performance** et faites glisser les deux curseurs — **Quotes** et **Order Book** — au maximum, puis cliquez sur **Apply** et **OK**. Avec une limite active, les graphiques peuvent prendre du retard pendant les périodes de fort volume. Fermez R Trader Pro lorsque vous avez terminé.

[SCREENSHOT: Fenêtre Preferences de R Trader Pro sur l'onglet Performance avec les curseurs Quotes et Order Book tous deux glissés en position maximale | dc-en-connect-rithmic-03.png]

4. Dans DeepCharts, cliquez sur **Select Connection** dans la barre d'outils supérieure, puis cliquez sur **Feed Settings** en bas du menu déroulant. La fenêtre Feed Settings s'ouvre.

[SCREENSHOT: Barre d'outils principale de DeepCharts avec le menu déroulant Select Connection ouvert et l'entrée Feed Settings mise en évidence en bas | dc-en-connect-rithmic-04.png]

5. Cliquez sur **Add Connection** et remplissez le formulaire :

| Champ | Que saisir |
|---|---|
| **Name** | N'importe quel libellé que vous reconnaîtrez plus tard, par exemple « Rithmic Live ». |
| **Feed Source** | **Rithmic RAPI** — l'option recommandée. |
| **Username** | Votre nom d'utilisateur Rithmic (pas votre identifiant du site web DeepCharts). |
| **Password** | Votre mot de passe Rithmic. |
| **Server** | **Rithmic Paper Trading** pour un flux acheté sur le site web de DeepCharts. |
| **Gateway** | **Automatic** (par défaut), ou la région la plus proche de chez vous. |

Laissez tous les autres champs tels quels. L'option **Include commissions** est activée par défaut — elle affiche les commissions dans votre P/L.

Essayez le formulaire en direct ci-dessous — réglez la Feed Source sur Rithmic RAPI et observez les champs Server et Gateway apparaître.

[WIDGET: feed-navigator]

> **Remarque :** Le menu déroulant Feed Source affiche **Rithmic RAPI** et **Rithmic Wss - beta** — il n'existe plus d'option « Rithmic » simple, donc si un ancien guide en mentionne une, choisissez **Rithmic RAPI**. Si les graphiques semblent retardés ou instables, vérifiez que vous êtes sur RAPI et non sur la beta Wss.

> **Remarque :** « Paper Trading » n'est que le libellé du serveur de Rithmic pour les comptes de flux de données — les données livrées sont réelles et en direct, identiques aux flux Rithmic de courtiers et de prop firms.

Le menu déroulant Gateway propose : Automatic, Chicago Area, Seoul, Mumbai, Hong Kong, Sao Paolo, Singapore, Sydney, Tokyo, Frankfurt, Europe, Cape Town, NYC Area et US West. Une gateway éloignée fonctionne quand même mais ajoute de la latence — si vous êtes loin de Chicago et que les données semblent lentes, choisissez la région la plus proche de chez vous (par exemple Europe ou Frankfurt pour les utilisateurs européens, Singapore ou Mumbai pour l'Asie) et reconnectez-vous.

### Si votre compte Rithmic provient d'un courtier

Pour les comptes Rithmic délivrés par AMP Futures, EdgeClear, Ironbeam, Phillips Capital ou Optimus Futures, la configuration est identique à l'exception du champ **Server** : sélectionnez **Rithmic 01** au lieu de Rithmic Paper Trading. Utilisez la même valeur dans le champ System lors de la signature de l'accord dans R Trader Pro.

### Si vos identifiants Rithmic proviennent d'une autre plateforme de trading

Les identifiants Rithmic délivrés via une autre plateforme d'orderflow (flux d'ordres) ou de Heatmap (Quantower, Sierra Chart, MotiveWave, ATAS, NinjaTrader et similaires) fonctionnent avec DeepCharts. Utilisez **Server** = **Rithmic Paper Trading**, et assurez-vous que l'accord est signé dans R Trader Pro avec la même valeur dans le champ System.

> **Avertissement :** Seuls les identifiants Rithmic sont transférables depuis d'autres plateformes de cette manière. Les identifiants dxFeed délivrés via d'autres plateformes ne peuvent pas être utilisés avec DeepCharts — pour dxFeed, vous devez acheter via le site web de DeepCharts ou directement sur dxfeed.com avec DeepCharts sélectionné comme plateforme (voir [[connect-dxfeed]]).

### Si votre compte Rithmic provient d'une prop firm

Suivez [[connect-rithmic-prop-firm]] — chaque firme utilise sa propre valeur Server nommée, listée dans le tableau de cet article. Apex Trader Funding dispose d'un guide dédié : [[connect-apex]].

6. Cliquez sur **Save**.

7. De retour dans la barre d'outils principale, cliquez à nouveau sur **Select Connection** — votre nouveau flux Rithmic apparaît maintenant dans le menu déroulant sous le nom que vous lui avez donné. Cliquez dessus pour vous connecter.

8. Acheminez vos bourses vers le nouveau flux : ouvrez **Options → Symbol Manage** et assurez-vous que les bourses sur lesquelles vous tradez sont souscrites et associées à cette connexion Rithmic (l'icône de maillon de chaîne sur une ligne change le flux depuis lequel cette bourse se charge). Le sélecteur d'instruments n'affiche que les bourses auxquelles vous êtes abonné. Tous les détails dans [[symbol-manage]].

Essayez l'association ci-dessous — cliquez sur l'icône de maillon de chaîne d'une ligne pour faire défiler le flux depuis lequel la bourse se charge.

[WIDGET: symbol-manage-mock]

9. Ouvrez un graphique : cliquez sur **New** dans le menu supérieur, puis sur **Price Chart**, sélectionnez un instrument (par exemple ES ou NQ) et confirmez.

## Vérifier que cela a fonctionné

- Dans les 10 secondes environ suivant la connexion, l'indicateur de connexion devient **vert**.
- Le graphique que vous avez ouvert charge les bougies et le prix se met à jour en direct.

[SCREENSHOT: Barre d'outils principale de DeepCharts affichant l'indicateur de connexion vert à côté du nom du flux Rithmic, avec un graphique ES en direct se mettant à jour en arrière-plan | dc-en-connect-rithmic-05.png]

## Si quelque chose s'est mal passé

| Symptôme | Où aller |
|---|---|
| Connexion échouée — vérifiez le nom d'utilisateur et le mot de passe | [[fix-username-password]] — la cause la plus fréquente est la saisie d'un identifiant de site web au lieu des identifiants Rithmic |
| Connexion échouée — mauvais serveur | [[fix-bad-server]] — la valeur Server ne correspond pas à la source de votre compte |
| Un message vous demande de vous connecter via R Trader ou R Trader Pro | [[fix-log-in-using-rtrader]] — l'étape de l'accord a été sautée ou est incomplète |
| L'indicateur devient jaune avec « Expert not attached » | [[fix-rithmic-expert-not-attached]] |
| Connexion échouée — impossible d'établir la connexion | [[fix-unable-to-establish-connection]] |
| Le point est vert mais le graphique ne bouge pas | [[feed-connected-chart-not-moving]] — presque toujours un problème de routage dans Symbol Manage |
| Les graphiques se chargent mais prennent du retard pendant les marchés agités | [[data-delayed-lagging]] — vérifiez que la Feed Source est Rithmic RAPI et que les curseurs Performance de R Trader Pro sont au maximum |

## Articles associés

- [[buy-data-feed]]
- [[sign-market-data-agreement]]
- [[connect-rithmic-prop-firm]]
- [[rtrader-pro-plugin]]
- [[symbol-manage]]
- [[manage-feed-connections]]
