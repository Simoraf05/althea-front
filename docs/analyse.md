# Analyse des pages — TP 1, 2 et 3

## Éléments communs

Chaque page reprend le même en-tête : logo, panier, bouton du menu (`aria-expanded`), recherche et navigation. Le logo renvoie à l’accueil. Le compteur du panier vient des données enregistrées : un point apparaît seulement si le panier contient des articles. Le nombre est aussi écrit pour le lecteur d’écran. La recherche utilise un formulaire avec un champ de type `search`.

Le contenu principal est dans `main`. Le lien « Aller au contenu », placé au début de la page, permet d’y accéder au clavier sans parcourir tout le menu.

Le pied de page contient les liens d’information et les réseaux sociaux. Il est masqué sur les petits écrans. Ses liens sont aussi dans le menu pour rester accessibles.

## TP 1 : accueil et fiche produit

### Accueil — index.html

| Partie | Contenu | Balises principales |
|---|---|---|
| Introduction | Titre et présentation | `h1`, `p` |
| Carrousel | Trois images avec texte et lien | `section`, `ul`, `li`, `img`, `a` |
| Catégories | Diagnostic, Soins, Mobilier et Consommables | `section`, `h2`, `ul`, `a` |
| Top produits | Quatre cartes avec nom, image, prix et stock | `article`, `h3`, `img`, `data`, `p` |

Les pastilles du carrousel sont des liens vers les trois images. Il n’y a pas de défilement automatique.

### Fiche produit — produit.html

| Partie | Contenu | Balises principales |
|---|---|---|
| Fil d’Ariane | Chemin depuis l’accueil | `nav`, `ol`, `a` |
| Galerie | Trois vues du produit | `section`, `ul`, `img` |
| Informations | Nom, description, prix et stock | `h1`, `p`, `data` |
| Achat | Quantité et bouton désactivés | `form`, `label`, `input`, `button` |
| Caractéristiques | Détails du produit et tableau des tailles | `dl`, `dt`, `dd`, `table` |
| Produits similaires | Six cartes produit | `section`, `h2`, `ul`, `article` |

La rupture de stock est indiquée en texte et pas seulement par une couleur. L’achat est bloqué avec l’attribut `disabled`.

## TP 2 : pages ajoutées

### Catégorie — categorie.html

La page Diagnostic contient un bandeau, une grille de produits et une pagination. Les cartes reprennent la même présentation que sur l’accueil. Au jour 3, tous les produits sont affichés sur une page ; la pagination est masquée.

### Recherche — recherche.html

Le formulaire propose des critères sur le nom, la description, les caractéristiques, le prix, les catégories et la disponibilité. Une liste permet de choisir le tri. Les champs liés sont regroupés avec `fieldset` et `legend`.

Six produits sont affichés à côté des filtres sur ordinateur et en dessous sur téléphone. Au jour 3, les critères sont lus dans l’adresse et appliqués en JavaScript.

### Connexion — connexion.html

Le formulaire contient l’adresse e-mail et le mot de passe. Les deux champs sont obligatoires. Les labels indiquent ce qui doit être saisi et `autocomplete` aide à remplir les informations du compte.

### Inscription — inscription.html

Le formulaire demande le prénom, le nom, l’adresse e-mail, le mot de passe et sa confirmation. Une case obligatoire permet d’accepter les CGU. Le mot de passe demande au moins 12 caractères. Les deux mots de passe ne sont pas encore comparés.

## Classes réutilisées

| Élément | Classes |
|---|---|
| En-tête et navigation | `entete`, `logo`, `panier`, `menu`, `recherche` |
| Carte produit | `produit`, `prix`, `stock`, `stock-rupture` |
| Grille de produits | `produits` |
| Défilement du carrousel et de la galerie | `defile` |
| Boutons | `btn` |
| Formulaires de compte | `formulaire` |
| Pied de page | `pied` |

Les couleurs et les espacements sont dans `variables.css`. La mise en page, les media queries et les styles d’impression sont dans `style.css`.

## Jour 3 : panier et données

Les produits sont regroupés dans `js/produits.js`. Le catalogue, les résultats, la fiche et le panier réutilisent ces données pour garder les mêmes noms et les mêmes prix.

`panier.html` contient un titre, un message pour le panier vide, une liste de lignes et le total. JavaScript crée les lignes et actualise l’affichage après un ajout, une modification ou une suppression.

Les avis de la fiche sont chargés depuis `data/avis.json`. Les étoiles ont un texte équivalent pour le lecteur d’écran. La recherche, les avis et les ajouts utilisent des messages annoncés avec `aria-live`.
