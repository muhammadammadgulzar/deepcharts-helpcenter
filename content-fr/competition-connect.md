---
title: "Compétition DeepCharts : participer et se connecter"
slug: "competition-connect"
category: "Connections & Data Feeds"
subcategory: "Setup"
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Rejoignez une compétition de trading DeepCharts et connectez le compte de concours V-Sim en parallèle de votre flux de données."
keywords: ["compétition", "concours", "championnat", "V-Sim", "vsim", "rejoindre la compétition", "identifiants du concours", "concours de trading", "réinitialiser le compte"]
---
À la fin de ce guide, vous aurez rejoint une compétition DeepCharts et vous traderez sur votre compte de concours avec des graphiques en direct. DeepCharts organise périodiquement des compétitions de trading ; les comptes de concours fonctionnent sur la source de flux **V-Sim**, qui est **exécution uniquement** — elle place vos trades de concours mais ne fournit aucune donnée de marché. C'est pourquoi vous connectez deux éléments à la fois : le compte de concours pour les trades, et votre propre flux de données pour les graphiques.

Comme V-Sim exécute les trades dans des conditions de marché en temps réel, le flux gratuit différé de 15 minutes n'est pas pris en charge pour les compétitions — vous avez besoin d'une connexion Rithmic ou dxFeed en direct.

## Avant de commencer

- Une licence de plateforme DeepCharts active — [[install-deepcharts]]
- Un flux de données en direct (Rithmic ou dxFeed) connecté et fonctionnel — [[connect-data-feed]] (le flux différé de [[free-delayed-data-feed]] n'est pas éligible)
- Un compte sur le site web DeepCharts pour vous inscrire au concours

## Étapes

1. Accédez à `my.deepcharts.com` et connectez-vous à votre tableau de bord.

2. Sélectionnez **Contest** dans la barre latérale.

[SCREENSHOT: Tableau de bord DeepCharts avec l'entrée Contest mise en évidence dans la barre latérale et une carte de compétition active visible | dc-en-competition-connect-01.png]

3. Trouvez la compétition active et cliquez sur **Join Competition**. Vous pouvez d'abord consulter le règlement de la compétition via le lien du règlement sur la même page.

4. Confirmez l'invite, puis actualisez la page du navigateur.

5. Cliquez sur **See Credentials**. Notez les quatre valeurs affichées : **Username** (nom d'utilisateur), **Password** (mot de passe), **Feed Source** (V-Sim) et votre **Account ID** (identifiant de compte) de compétition.

[SCREENSHOT: Page Contest après l'inscription, montrant le bouton See Credentials et le panneau d'identifiants avec le nom d'utilisateur, le mot de passe, la source de flux V-Sim et l'identifiant de compte visibles (valeurs masquées) | dc-en-competition-connect-02.png]

> **Remarque :** Les identifiants n'apparaissent qu'une fois la compétition commencée. Si vous êtes inscrit mais ne voyez pas encore d'identifiants, attendez la date de début.

6. Dans DeepCharts, cliquez sur **Select Connection** → **Feed Settings**, puis cliquez sur **Add Connection**.

7. Remplissez le formulaire :
   - **Name** — n'importe quel libellé, par exemple « Contest ».
   - **Feed Source** — sélectionnez **V-Sim**. C'est le champ critique ; V-Sim figure dans le même menu déroulant que Rithmic et dxFeed.
   - **Username** et **Password** — issus du panneau d'identifiants de l'étape 5.

[SCREENSHOT: Boîte de dialogue Feed Settings avec Feed Source réglé sur V-Sim et le nom d'utilisateur du concours saisi | dc-en-competition-connect-03.png]

8. Cliquez sur **Save** et fermez la fenêtre Feed Settings.

9. Dans **Select Connection**, connectez le flux du concours — et assurez-vous que votre flux de données est **également** connecté. Les deux doivent afficher des points verts en même temps ; vous pouvez maintenir plusieurs connexions simultanément (voir [[manage-feed-connections]]).

[SCREENSHOT: Menu déroulant Select Connection avec la connexion de concours V-Sim et une connexion de flux de données en direct affichant toutes deux des points verts | dc-en-competition-connect-04.png]

10. Ouvrez **Options → Symbol Manage** et confirmez que chaque bourse est routée vers votre **flux de données, et non vers le compte de concours V-Sim**. Si Symbol Manage pointe vers V-Sim, les graphiques n'affichent aucune donnée car le compte de concours n'en fournit pas. Essayez la maquette interactive ci-dessous — cliquez sur l'icône de maillon de chaîne d'une ligne pour faire défiler le flux qui lui est associé. Voir [[symbol-manage]].

[WIDGET: symbol-manage-mock]

11. Ouvrez un graphique de prix. Dans le **Trading Panel** (panneau de trading, à droite du graphique), réglez le champ **Broker** sur **V-Sim** et choisissez votre compte de compétition dans le menu déroulant. Le solde de départ affiché est de 50 000 $. Explorez le panneau dans la maquette interactive ci-dessous — survolez n'importe quel bouton pour voir sa fonction, et cliquez sur la position SIM pour observer le P/L en direct :

[WIDGET: trading-panel-mock]

### Si vous souhaitez réinitialiser votre compte

Depuis la page Contest du tableau de bord, cliquez sur **Reset Account** et confirmez. Votre solde revient à 50 000 $. Vous avez droit à **une seule réinitialisation**, et uniquement pendant la **première semaine** de la compétition — passé ce délai, l'option disparaît, alors utilisez-la de manière réfléchie.

### Si aucune compétition n'est ouverte

La page Contest n'affiche un bouton **Join Competition** que pendant que les inscriptions sont ouvertes. Si rien n'est listé, revenez plus tard — les compétitions ont lieu périodiquement.

## Vérifier que cela fonctionne

- La connexion de concours V-Sim et votre flux de données affichent tous deux des points verts.
- Les graphiques se mettent à jour en direct depuis votre flux de données.
- Le Trading Panel affiche le courtier V-Sim, votre compte de compétition et le solde de 50 000 $.

## Règles de la compétition

Le règlement de chaque compétition est publié sur la page Contest — consultez-le avant de trader. Les compétitions récentes appliquaient les règles suivantes :

| Règle | Valeur |
|---|---|
| Type de compte | Démo simulée uniquement (pas d'argent réel) |
| Éligibilité au classement | Minimum 3 jours de trading actifs |
| Limite de perte journalière | 3 % du solde du compte |
| Limite de profit journalier | 10 % du solde du compte |
| Position maximale | 5 contrats mini à la fois |
| Positions overnight | Interdites — clôturées automatiquement à la fermeture du marché |
| Réinitialisations | 1 réinitialisation, première semaine uniquement |

Une licence de plateforme active et un flux de données en direct sont requis pendant toute la durée de la compétition. Les détails des prix de chaque compétition sont indiqués sur la page Contest.

## En cas de problème

- **Les graphiques n'affichent aucune donnée** — Symbol Manage pointe vers le compte V-Sim au lieu de votre flux de données, ou le flux de données n'est pas connecté. Refaites le routage dans [[symbol-manage]] et vérifiez que les deux points sont verts.
- **Pas de bouton See Credentials** — la compétition n'a pas encore commencé, ou vous vous êtes inscrit sans terminer la confirmation d'adhésion. Vérifiez que la page Contest vous indique comme inscrit.
- **La connexion du concours reste rouge** — recopiez exactement le nom d'utilisateur et le mot de passe depuis le panneau d'identifiants ; voir [[fix-username-password]].
- Pour tout autre problème — voir [[get-help]].

## Articles associés

- [[connect-data-feed]]
- [[connect-rithmic]]
- [[connect-dxfeed]]
- [[symbol-manage]]
- [[manage-feed-connections]]
- [[trading-panel-reference]]
