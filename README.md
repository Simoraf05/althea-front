# Althea — TP 1 et TP 2

Site de matériel médical en HTML et CSS, sans JavaScript.

## Lancer le projet

Ouvrir `index.html` avec Live Server dans VS Code.

## Travail réalisé

- TP 1 : page d’accueil et fiche produit.
- TP 2 : pages catégorie, recherche, connexion et inscription, puis adaptation aux différentes tailles d’écran.

Le CSS utilise Flexbox et Grid. Le menu s’ouvre avec `details` et `summary`. Le mode sombre suit le réglage de l’appareil. La fiche produit a aussi un style pour l’impression.

Les filtres, la pagination et les comptes ne sont pas encore fonctionnels. Certaines pages liées dans le menu restent à créer. Les prix sont des exemples.

## Documents

- [Analyse](docs/analyse.md) : organisation des pages.
- [Audit](docs/audit.md) : résultats des tests et vérifications restantes.
- [Responsive](docs/responsive.md) : adaptation aux écrans.
- [Sécurité](docs/securite.md) : formulaires et protections ajoutées.

## Responsive et captures

Les cartes passent sur plusieurs colonnes quand l’écran est plus large. La galerie et le tableau défilent dans leur bloc pour éviter de faire dépasser la page.

Tests réalisés à 320, 360, 768 et 1 280 px, en clair et en sombre : aucun débordement détecté. Lighthouse Accessibilité : 100/100 sur les six pages au contrôle du 4 novembre 2026. Les validations officielles W3C restent à refaire.

| Page | 360 px | 768 px | 1 280 px |
|---|---|---|---|
| Accueil | ![Accueil à 360 px](docs/captures/index-360.png) | ![Accueil à 768 px](docs/captures/index-768.png) | ![Accueil à 1280 px](docs/captures/index-1280.png) |
| Catégorie | ![Catégorie à 360 px](docs/captures/categorie-360.png) | ![Catégorie à 768 px](docs/captures/categorie-768.png) | ![Catégorie à 1280 px](docs/captures/categorie-1280.png) |
| Produit | ![Produit à 360 px](docs/captures/produit-360.png) | ![Produit à 768 px](docs/captures/produit-768.png) | ![Produit à 1280 px](docs/captures/produit-1280.png) |

![Accueil sombre](docs/captures/accueil-sombre.png)
