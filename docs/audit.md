# Audit — TP 1, 2 et 3

Contrôle du 4 novembre 2026, avec Edge et un serveur local.

## Structure et affichage

La vérification locale de la structure HTML et de la syntaxe CSS ne relève pas d’erreur sur les sept pages. Les documents et leurs liens locaux existent.

| Contrôle | Résultat |
|---|---|
| 320, 360, 768 et 1 280 px, clair et sombre | 56 affichages sans débordement horizontal |
| Lien d’évitement | Accès au contenu principal |
| Menu mobile | Ouverture au clavier, fermeture avec Échap et retour du focus |
| Menu à partir de 768 px | Toujours visible, bouton masqué |
| Carrousel | Boutons et pastilles synchronisés |
| Panier | Quantités, total, rechargement et deux onglets vérifiés |
| Données piégées | Texte affiché sans alerte |
| Console | Pas d’erreur JavaScript ni CSP en utilisation normale |

L’erreur HTTP 503 du test des avis est provoquée volontairement pour vérifier le message d’indisponibilité. Les tests du jour 3 sont détaillés dans [tests-js.md](tests-js.md).

Le texte agrandi à 200 % et la version imprimable ont été contrôlés au jour 2. Le zoom natif et l’impression de la version finale du jour 3 restent à vérifier manuellement.

## Lighthouse Accessibilité

Lighthouse 13.6.0, profil mobile, sur la version du jour 3 :

| Page | Score |
|---|---|
| Accueil | 100/100 |
| Catégorie | 100/100 |
| Produit | 100/100 |
| Recherche | 100/100 |
| Panier | 100/100 |
| Connexion | 100/100 |
| Inscription | 100/100 |

Ces scores automatiques ne remplacent pas un parcours avec un lecteur d’écran.

## Avant le rendu

- Renouveler les validations officielles HTML et CSS W3C : le contrôle local ne les remplace pas.
- Vérifier le zoom natif à 200 %, l’impression et le parcours avec Narrateur.
- Terminer le rendu Git en fin de journée : les derniers commits, les branches et pull requests par page prévues par le TP, puis le tag `jour-3`.

Le jour 3 est préparé en local. Sa publication est laissée pour la fin de journée, comme demandé.

Les captures sont dans `captures/` et dans le README. Les choix de mise en page sont dans [responsive.md](responsive.md) et les protections dans [securite.md](securite.md).

Dernier contr?le avant publication : les sept pages se chargent sans erreur JavaScript ni CSP, les dix tests passent et le panier conserve le total de 69,00 ? apr?s rechargement. Les photos de l?oxym?tre et du st?thoscope sont stock?es dans `img/`, avec leurs cr?dits dans le README.
