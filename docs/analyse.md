# Plan des interfaces · Althea

## 1. Sur toutes les pages

En-tête (header), de haut en bas :

- le lien d'évitement « Aller au contenu » (premier lien de la page) ... a
- le logo, qui ramène à l'accueil ........................................ a + img
- le panier, avec le nombre d'articles ................................... a
- le nombre d'articles, lu à voix haute mais caché (pour le point rouge) . span.visually-hidden
- le bouton Menu ......................................................... button
- la recherche ........................................................... form, label, input, button
- les liens du menu (Accueil, Catalogue, Mon compte, CGU,
  Mentions légales, Contact) ............................................. nav, ul, li, a

Pied (footer) : CGU, Mentions légales, Contact, LinkedIn, Instagram, © 2026 Althea Systems ... ul, li, a, p

Sur téléphone : le pied est caché, ses liens (CGU, Mentions légales, Contact) sont déjà dans le menu.

## 2. Page Accueil (index.html)

| # | Bloc | Ce qu'on y met | Balise |
|---|------|----------------|--------|
| 1 | Titre | « Le matériel médical fiable, livré à votre cabinet » | h1 |
| 2 | Carrousel | 3 slides : image, phrase, lien | section, ul, li, img, p, a |
| 3 | Présentation | 2 phrases sur Althea (depuis quand, ce qu'elle garantit) | p |
| 4 | Catégories | h2 « Nos catégories » + 4 liens : Diagnostic, Soins, Mobilier, Consommables (image + nom) | section, h2, ul, a, img |
| 5 | Top Produits | h2 « Les Top Produits du moment » + 4 cartes | section, h2, ul, article |

- Carte « Top Produits » : une image, le nom (h3 avec lien vers produit.html), le prix (p + data), le stock (p).
- Une des 4 cartes est en rupture : texte « En rupture de stock ».

## 3. Page Produit (produit.html)

Produit choisi : Tensiomètre électronique de bras, 49,90 € TTC.

| # | Bloc | Ce qu'on y met | Balise |
|---|------|----------------|--------|
| 1 | Fil d'Ariane | Accueil › Diagnostic › Tensiomètre électronique de bras | nav, ol, li, a |
| 2 | Nom | le nom du produit, en grand | h1 |
| 3 | Photos | 3 vues du produit, un alt différent chacune | section, ul, li, img |
| 4 | Description | une ou deux phrases | p |
| 5 | Prix | 49,90 € TTC | p, data |
| 6 | Disponibilité | « Disponibilité : en rupture de stock » | p |
| 7 | Achat | quantité + bouton « En rupture de stock » | form, label, input, button |
| 8 | Caractéristiques | tour de bras, mémoire, alimentation, poids | section, h2, dl, dt, dd |
| 9 | Similaires | h2 « Produits similaires » + 6 cartes | section, h2, ul, article |

Produit épuisé :

- le texte « En rupture de stock » est écrit dans la page (pas seulement une couleur) ;
- le champ quantité et le bouton sont désactivés (`disabled`) ;
- le bouton affiche « En rupture de stock » ;
- côté CSS : bouton en pointillés, image grisée.

## 4. Les morceaux qui reviennent

| Morceau | Pages | Classe |
|---------|-------|--------|
| En-tête | toutes | entete |
| Logo | toutes | logo |
| Panier | toutes | panier |
| Bouton Menu | toutes | menu-bouton |
| Recherche | toutes | recherche |
| Menu | toutes | menu |
| Pied de page | toutes | pied |
| Carrousel | accueil | carrousel |
| Slide | accueil | slide |
| Catégories | accueil | categories |
| Liste de produits | accueil, produit | top-produits |
| Carte produit | accueil, produit | produit |
| Prix (carte) | accueil, produit | prix |
| Stock | accueil, produit | stock |
| Stock épuisé | accueil, produit | stock-rupture |
| Fil d'Ariane | produit | ariane |
| Fiche produit | produit | fiche |
| Formulaire d'achat | produit | achat |
| Bouton | produit | btn |
| Caractéristiques | produit | caracteristiques |