---
title: "Connecter n'importe quel compte prop firm Rithmic (tableau des serveurs)"
slug: "connect-rithmic-prop-firm"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "15 min to complete"
description: "Une seule procédure de configuration pour toutes les prop firms Rithmic — trouvez la valeur Server de votre firme dans le tableau, signez l'accord dans R Trader Pro et connectez-vous à DeepCharts."
keywords: ["prop firm rithmic", "liste serveurs rithmic", "serveur prop firm", "rithmic paper trading", "bulenox", "bluenox", "takeprofittrader", "earn2trade", "oneuptrader", "tradeify", "the trading pit", "configuration compte financé"]
---
Chaque compte prop firm Rithmic se connecte à DeepCharts de la même manière — la seule chose qui varie d'une firme à l'autre est la valeur **Server** que vous sélectionnez. À la fin de ce guide, votre flux prop firm sera connecté et vos graphiques diffuseront en direct.

Les comptes Evaluation et Funded (financés) utilisent une procédure identique — il n'existe pas de configuration distincte réservée aux comptes financés.

> **Remarque :** Apex Trader Funding dispose de son propre guide dédié : [[connect-apex]]. Si votre prop firm vous a fourni un compte dxFeed au lieu de Rithmic (MyFundedFutures, Aqua Futures, Goat Funded Futures et autres), suivez [[connect-dxfeed-prop-firm]].

## Avant de commencer

- [ ] Un compte prop firm actif (Evaluation ou Funded — les deux se connectent de la même manière) — achetez-le d'abord auprès de votre firme si ce n'est pas déjà fait
- [ ] Le nom d'utilisateur et le mot de passe Rithmic fournis par votre firme. Ils figurent dans l'e-mail de bienvenue de la firme et ne sont **pas** identiques à vos identifiants du site web de la firme — consultez [[fix-username-password]] pour comprendre pourquoi c'est important
- [ ] R Trader Pro installé pour signer l'accord de données de marché — voir [[sign-market-data-agreement]]
- [ ] DeepCharts installé et activé — voir [[install-deepcharts]]
- [ ] Vérifié que votre firme est prise en charge — voir [[compatibility-guide]]

> **Avertissement :** Toutes les prop firms ne peuvent pas être connectées. TopStep, FTMO et FundedNext Futures ne délivrent pas d'identifiants utilisables avec DeepCharts. Les comptes CQG de prop firms ne fonctionnent que lorsque la firme délivre le compte CQG directement depuis CQG — un compte CQG passant par Tradovate ou NinjaTrader ne peut pas être connecté (voir [[connect-cqg]]).

## Étapes

1. Trouvez la valeur **Server** de votre firme dans le tableau ci-dessous. Vous utiliserez cette même valeur deux fois : comme **System** dans R Trader Pro lors de la signature de l'accord, et comme **Server** dans les Feed Settings de DeepCharts.

| Prop firm | Valeur Server |
|---|---|
| Apex Trader Funding (voir [[connect-apex]]) | Apex |
| 4PropTrader | 4PropTrader |
| 10X Futures | 10XFutures |
| Bulenox | Bulenox |
| DayTraders.com | DayTraders.com |
| Earn2Trade | Earn2Trade |
| FundedFuturesNetwork | FundedFuturesNetwork |
| Legends Trading | LegendsTrading |
| Lucid Trading | LucidTrading |
| MES Capital | MES Capital |
| PropShopTrader | PropShopTrader |
| The Trading Pit | TheTradingPit |
| Thrive Trading | ThriveTrading |
| TradeFundrr | TradeFundrr |
| Tradeify | Tradeify [CONFIRM: exact spelling of the Tradeify entry in the Server dropdown] |
| tradesea | tradesea (en minuscules dans le menu déroulant) |
| BlueSky Trading (comptes Rithmic) | Rithmic Paper Trading |
| OneUpTrader | Rithmic Paper Trading |
| TakeProfitTrader | Rithmic Paper Trading |
| Toute autre prop firm Rithmic | Rithmic Paper Trading |

> **Astuce :** Attention à l'orthographe — le nom correct de la firme est « Bulenox » (souvent mal écrit « Bluenox ») et l'entrée serveur est « TradeFundrr » sans deuxième « e ».

### Si votre firme n'apparaît pas dans le menu déroulant Server

Sélectionnez **Rithmic Paper Trading** — c'est le serveur par défaut de Rithmic pour les comptes limités au flux de données et les petits comptes prop. Utilisez-le à la fois dans R Trader Pro et dans DeepCharts. Malgré son nom, les données sont réelles et en direct.

2. Signez l'accord de données de marché Rithmic dans R Trader Pro. Sans cela, la connexion reste rouge même avec des identifiants corrects. Téléchargez R Trader Pro depuis https://www.rithmic.com/rtraderpro (cliquez sur **Download R | Trader Pro**), ouvrez-le et remplissez **les deux** formulaires de connexion côte à côte avec les mêmes valeurs : **System** = la valeur serveur de votre firme issue du tableau, **Gateway** = l'emplacement le plus proche de chez vous, et le nom d'utilisateur et le mot de passe Rithmic figurant dans l'e-mail de bienvenue de votre firme. Cliquez sur **Login**, sélectionnez votre statut de données de marché lorsqu'il vous est demandé (les traders particuliers sélectionnent normalement **Non-Professional**), puis lisez et acceptez les accords. Tous les détails dans [[sign-market-data-agreement]].

[SCREENSHOT: Écran de connexion de R Trader Pro avec les deux formulaires remplis, le menu déroulant System ouvert affichant les entrées serveur des prop firms, et le champ Gateway visible | dc-en-connect-rithmic-prop-firm-01.png]

3. Première configuration uniquement : pendant que vous êtes dans R Trader Pro, ouvrez **Window → Preferences → Performance** et faites glisser les deux curseurs — **Quotes** et **Order Book** — au maximum, puis cliquez sur **Apply** et **OK**. Cela supprime la limite de réception de données de Rithmic ; avec une limite active, les graphiques peuvent prendre du retard pendant les périodes de fort volume. Fermez R Trader Pro lorsque vous avez terminé.

[SCREENSHOT: Onglet Performance des Preferences de R Trader Pro avec les deux curseurs Quotes et Order Book au maximum | dc-en-connect-rithmic-prop-firm-02.png]

4. Dans DeepCharts, cliquez sur **Select Connection** dans la barre d'outils supérieure, puis sur **Feed Settings** en bas du menu déroulant.

5. Cliquez sur **Add Connection** et remplissez le formulaire :

| Champ | Que saisir |
|---|---|
| **Name** | N'importe quel libellé, par exemple « MyFirm Eval » ou « MyFirm Live ». |
| **Feed Source** | **Rithmic RAPI** (le menu déroulant affiche aussi **Rithmic Wss - beta** — choisissez RAPI). |
| **Username** | Le nom d'utilisateur Rithmic figurant dans l'e-mail de bienvenue de votre firme — pas l'identifiant du site web de la firme. |
| **Password** | Le mot de passe Rithmic du même e-mail. |
| **Server** | La valeur de votre firme issue du tableau de l'étape 1 — exactement telle qu'écrite. |
| **Gateway** | **Automatic** (par défaut), ou la région la plus proche de chez vous pour une latence plus faible. |

Laissez tous les autres champs tels quels. Essayez la maquette interactive Feed Settings ci-dessous — passez la Feed Source sur Rithmic et observez le champ Server apparaître :

[WIDGET: feed-navigator]

> **Astuce :** Si d'anciens comptes prop expirés encombrent votre liste de comptes, activez l'option **Show only active accounts** dans la section LOGIN INFO des Feed Settings.

6. Cliquez sur **Save**.

7. Cliquez à nouveau sur **Select Connection** puis cliquez sur votre nouveau flux pour vous connecter.

8. Acheminez vos bourses vers le flux : ouvrez **Options → Symbol Manage** et vérifiez que les bourses sur lesquelles vous tradez sont bien souscrites et associées à cette connexion (l'icône de maillon de chaîne sur une ligne change son flux). Essayez-le dans la maquette ci-dessous — cliquez sur l'icône de maillon de chaîne d'une ligne pour faire défiler le flux associé. Guide complet dans [[symbol-manage]].

[WIDGET: symbol-manage-mock]

## Vérifier que cela a fonctionné

- L'indicateur de connexion devient **vert** dans les 10 secondes environ suivant la connexion.
- Ouvrez **New → Price Chart**, choisissez un symbole couvert par votre compte (par exemple ES ou NQ) et confirmez que le prix se met à jour en direct.

Une fois les graphiques chargés, vous pouvez passer des ordres via le Trading Panel en bas à droite du graphique en sélectionnant votre compte prop firm — voir [[trading-from-chart]].

## Si quelque chose s'est mal passé

Les trois causes ci-dessous expliquent la quasi-totalité des connexions prop firm échouées, dans cet ordre :

1. **Mauvais identifiants** — vous avez saisi les identifiants du site web de la firme au lieu des identifiants Rithmic de l'e-mail de bienvenue. Voir [[fix-username-password]].
2. **Accord non signé** — l'accord de données de marché n'a jamais été accepté dans R Trader Pro. Voir [[fix-log-in-using-rtrader]] et [[sign-market-data-agreement]].
3. **Mauvaise valeur Server** — le champ Server ne correspond pas exactement à l'entrée de votre firme dans le tableau. Voir [[fix-bad-server]].

Autres symptômes :

- Le point est vert mais les graphiques ne bougent pas — [[feed-connected-chart-not-moving]]
- Connexion échouée — impossible d'établir la connexion — [[fix-unable-to-establish-connection]]
- Les graphiques prennent du retard pendant les marchés agités — [[data-delayed-lagging]] (vérifiez que la Feed Source est Rithmic RAPI et que les curseurs de R Trader Pro sont au maximum)

Si aucun de ces cas ne correspond, rassemblez les informations dont le support a besoin — voir [[diagnostic-report]].

## Articles associés

- [[connect-apex]]
- [[connect-rithmic]]
- [[connect-dxfeed-prop-firm]]
- [[sign-market-data-agreement]]
- [[symbol-manage]]
- [[compatibility-guide]]
