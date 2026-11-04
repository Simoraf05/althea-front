# Althea Systems — TP 1 et TP 2

Projet de bachelor : créer les pages d’un site de matériel médical en HTML et CSS.

## Ouvrir le site

Ouvrir le dossier dans VS Code, puis lancer `index.html` avec Live Server. Il n’y a pas de dépendance à installer.

## Contenu du projet

Le TP 1 concerne l’accueil et la fiche produit : navigation, images, prix, stock et caractéristiques.

Le TP 2 ajoute les pages catégorie, recherche, connexion et inscription. La mise en page s’adapte au téléphone, à la tablette et à l’ordinateur avec Flexbox, Grid et des media queries.

Le menu utilise `details` et `summary` pour fonctionner sans JavaScript. Le mode sombre suit les préférences de l’appareil. La fiche produit contient un tableau des tailles et une version pour l’impression.

## Organisation

- Les pages sont à la racine du projet.
- `css/variables.css` contient les couleurs et les valeurs communes.
- `css/style.css` contient la mise en page.
- `img/` contient les images.
- `docs/` contient [l’analyse](docs/analyse.md), [les tests](docs/audit.md), [le responsive](docs/responsive.md) et [la sécurité](docs/securite.md).

## Responsive et vérifications

Sur téléphone, les blocs sont empilés. Sur les écrans plus larges, les produits passent en grille et la fiche produit en deux colonnes. La galerie et le tableau défilent dans leur bloc pour ne pas faire dépasser la page.

Les tests à 320, 360, 768 et 1 280 px ne montrent pas de débordement. Le contrôle Lighthouse du 4 novembre 2026 donne 100/100 en accessibilité sur les six pages. Les validations officielles W3C et les vérifications manuelles restantes sont indiquées dans l’audit.

## Limites

Le projet reste en HTML et CSS. Les filtres et la pagination ne modifient pas encore les résultats. Les formulaires ne créent pas de compte, car il n’y a pas de serveur. Les prix sont des exemples et certaines pages du menu ne sont pas encore réalisées.

## Captures

| Page | 360 px | 768 px | 1 280 px |
|---|---|---|---|
| Accueil | ![Accueil à 360 px](docs/captures/index-360.png) | ![Accueil à 768 px](docs/captures/index-768.png) | ![Accueil à 1280 px](docs/captures/index-1280.png) |
| Catégorie | ![Catégorie à 360 px](docs/captures/categorie-360.png) | ![Catégorie à 768 px](docs/captures/categorie-768.png) | ![Catégorie à 1280 px](docs/captures/categorie-1280.png) |
| Produit | ![Produit à 360 px](docs/captures/produit-360.png) | ![Produit à 768 px](docs/captures/produit-768.png) | ![Produit à 1280 px](docs/captures/produit-1280.png) |

![Accueil sombre](docs/captures/accueil-sombre.png)
