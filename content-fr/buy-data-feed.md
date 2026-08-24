---
title: "Comment acheter un flux de données et obtenir vos identifiants"
slug: "buy-data-feed"
category: "Getting Started"
subcategory: ""
type: "howto"
difficulty: "beginner"
time: "10 min to complete"
description: "Achetez un abonnement à un flux de données sur my.deepcharts.com, signez le contrat de données de marché et récupérez le nom d'utilisateur et le mot de passe que DeepCharts utilise pour se connecter."
keywords: ["acheter flux de données", "achat flux de données", "abonnement flux de données", "obtenir identifiants", "nom d'utilisateur et mot de passe flux de données", "signer contrat de données de marché", "acheter données de marché", "ajouter abonnement flux de données"]
---
À la fin de ce guide, vous disposerez d'un abonnement actif à un flux de données ainsi que du nom d'utilisateur et du mot de passe dont DeepCharts a besoin pour se connecter aux données de marché en temps réel.

DeepCharts construit ses graphiques à partir d'un flux de données de marché en temps réel. Si vous ne possédez pas déjà des identifiants de flux fournis par un courtier ou une prop firm, vous pouvez acheter un abonnement de flux directement depuis le tableau de bord de votre compte sur my.deepcharts.com — les identifiants y sont délivrés dès que le contrat de données de marché est signé. Voici où ces identifiants aboutissent — la fenêtre **Feed Settings** (paramètres du flux) dans DeepCharts. Choisissez une source dans la maquette ci-dessous pour voir quels champs chaque fournisseur demande :

[WIDGET: feed-navigator]

## Avant de commencer

- Un compte DeepCharts sur my.deepcharts.com — le même compte que celui qui détient votre licence (voir [[install-deepcharts]])
- Une décision sur le flux que vous souhaitez — [[compatibility-guide]] compare les options prises en charge
- Une carte de paiement
- Quelques minutes pour remplir le contrat de données de marché (il demande des informations personnelles et votre statut d'abonné)

> **Remarque :** Si votre compte provient d'une **prop firm**, n'achetez pas de flux ici — vos identifiants de flux proviennent du tableau de bord de la prop firm elle-même. Consultez plutôt [[connect-rithmic-prop-firm]] ou [[connect-dxfeed-prop-firm]].

> **Astuce :** Vous explorez simplement la plateforme pour l'instant ? Vous n'avez rien à acheter — le [[free-delayed-data-feed|flux gratuit différé de 15 minutes]] intégré fonctionne sans identifiants ni contrat.

## Étapes

1. Connectez-vous à votre tableau de bord sur my.deepcharts.com.

2. Cliquez sur **Data Feed** dans le menu de gauche.

[SCREENSHOT: Tableau de bord my.deepcharts.com après connexion, avec le menu de gauche visible et l'entrée Data Feed mise en évidence | dc-en-buy-data-feed-01.png]

3. Sélectionnez **Add data feed subscription**.

[SCREENSHOT: La section Data Feed montrant le bouton Add data feed subscription mis en évidence | dc-en-buy-data-feed-02.png]

4. Choisissez le flux de données que vous souhaitez et poursuivez la commande. Pendant la commande, vous sélectionnez les produits de données de marché spécifiques — les bourses dont vous avez besoin (CME, COMEX, etc.) et le niveau de données (top of book ou profondeur de marché). Choisissez la profondeur de marché si vous comptez utiliser le DOM et les outils d'orderflow ; le top of book suffit pour un simple affichage en chandeliers.

[SCREENSHOT: La page de commande du flux de données avec le flux sélectionné et la liste des produits de données de marché (bourses, options top of book / profondeur de marché) visible | dc-en-buy-data-feed-03.png]

5. Saisissez les informations de votre carte et effectuez le paiement.

6. Une fois le paiement validé, retournez dans la section **Data Feed** du tableau de bord.

7. Signez le contrat de données de marché. Le contrat vous demande de :
   - Sélectionner votre statut d'abonnement. La plupart des traders individuels relèvent du statut **Non-Professional** — les bourses définissent les critères exacts, lisez donc attentivement les descriptions du formulaire avant de choisir.
   - Saisir vos informations personnelles.

[SCREENSHOT: Le parcours de signature du contrat de données de marché sur le tableau de bord, avec l'option de statut d'abonnement Non-Professional visible | dc-en-buy-data-feed-04.png]

8. Une fois le contrat complété, retournez dans la section **Data Feed**. Votre **nom d'utilisateur et votre mot de passe** de flux y sont maintenant affichés — ce sont les identifiants que vous saisirez dans la fenêtre Feed Settings de DeepCharts.

[SCREENSHOT: La section Data Feed montrant un abonnement actif avec les champs nom d'utilisateur et mot de passe visibles (valeurs masquées) | dc-en-buy-data-feed-05.png]

### Si vous avez acheté un flux Rithmic

Rithmic délivre ses identifiants via son propre système : l'accord de données de marché pour un abonnement Rithmic se complète donc dans **R Trader Pro** et non sur le tableau de bord. Suivez d'abord [[sign-market-data-agreement]], puis connectez-vous en suivant [[connect-rithmic]].

### Si vous avez acheté votre flux sur dxfeed.com

Acheter directement sur dxfeed.com fonctionne également, mais vous devez sélectionner **DeepChart** comme plateforme lors du paiement — sinon les identifiants ne seront pas compatibles avec DeepCharts. Consultez [[connect-dxfeed]] pour les étapes de connexion.

## Vérifiez que cela a fonctionné

Dans la section **Data Feed** de my.deepcharts.com, votre abonnement apparaît comme actif, et un nom d'utilisateur et un mot de passe sont visibles. C'est tout ce dont DeepCharts a besoin — l'étape suivante consiste à les saisir dans Feed Settings, comme décrit dans [[connect-data-feed]].

## En cas de problème

| Symptôme | Que faire |
|---|---|
| Aucun nom d'utilisateur/mot de passe affiché après le paiement | Le contrat de données de marché n'est pas entièrement signé — rouvrez la section Data Feed et complétez chaque étape du contrat |
| Identifiants rejetés lors de la connexion | [[fix-username-password]] |
| Vous ne savez pas si ce flux couvre votre marché ou votre courtier | [[compatibility-guide]] |
| Vous avez un compte prop firm | Obtenez vos identifiants depuis le tableau de bord de la prop firm — [[connect-rithmic-prop-firm]] ou [[connect-dxfeed-prop-firm]] |

## Articles associés

- [[connect-data-feed]]
- [[connect-dxfeed]]
- [[connect-rithmic]]
- [[sign-market-data-agreement]]
- [[free-delayed-data-feed]]
- [[compatibility-guide]]
