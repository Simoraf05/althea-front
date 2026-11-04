# Plan des interfaces · Althea Systems

> Plan de travail basé sur le cahier des charges du TP. Les textes et caractéristiques du produit sont des contenus de démonstration à confirmer avec le groupe.

## 1. Sur toutes les pages

| Zone | Contenu, dans l'ordre | Balises / éléments |
|---|---|---|
| Lien d'évitement | Aller directement au contenu principal | `a.evitement` |
| En-tête | Logo avec lien vers l'accueil | `header`, `p`, `a`, `img` |
| En-tête | Panier et nombre d'articles | `p`, `a`, `span` |
| En-tête | Menu de navigation | `details`, `summary`, `nav`, `ul`, `li`, `a` |
| En-tête | Recherche produit | `form`, `label`, `input`, `button` |
| Contenu | Contenu spécifique à chaque page | `main` |
| Pied | Conditions générales, contact, Instagram et copyright | `footer`, `ul`, `li`, `a`, `p` |

Sur téléphone, le pied de page est masqué ; ses liens sont également disponibles dans le menu.

Le point du panier est décoratif. Le nombre d'articles est écrit en texte afin que l'information ne dépende pas de la couleur ou d'un point visuel.

## 2. Page Accueil (`index.html`)

| # | Bloc | Contenu | Balises |
|---|---|---|---|
| 1 | Titre | Phrase d'accroche principale | `h1` |
| 2 | Carrousel | 3 slides : image, titre, phrase et lien | `section`, `ul`, `li`, `img`, `h3`, `p`, `a` |
| 3 | Présentation | Deux phrases de présentation d'Althea | `section`, `h2`, `p` |
| 4 | Catégories | 4 liens avec image et nom | `section`, `ul`, `li`, `a`, `img`, `h3` |
| 5 | Top produits | 4 cartes avec image, nom, prix et stock | `section`, `ul`, `li`, `article`, `img`, `h3`, `p` |

Chaque carte produit utilise la classe commune `produit`. Une carte en rupture doit afficher le texte « En rupture de stock » et utiliser la classe `stock-rupture`.

## 3. Page Produit (`produit.html`)

Produit choisi pour la démonstration : tensiomètre électronique de bras.

| # | Bloc | Contenu | Balises |
|---|---|---|---|
| 1 | Fil d'Ariane | Accueil › Diagnostic › Tensiomètre | `nav`, `ol`, `li`, `a` |
| 2 | Nom | Nom du produit | `h1` |
| 3 | Photos | 3 vues du produit | `section`, `ul`, `li`, `img` |
| 4 | Prix | Prix TTC | `p` |
| 5 | Disponibilité | Texte « En rupture de stock » | `p.stock.stock-rupture` |
| 6 | Description | Présentation courte du produit | `p.description` |
| 7 | Achat | Quantité et bouton désactivés car le produit est épuisé | `form`, `label`, `input`, `button` |
| 8 | Caractéristiques | Type, affichage, utilisation, alimentation | `dl`, `dt`, `dd` |
| 9 | Similaires | 4 cartes produit | `section`, `ul`, `li`, `article` |

### Cas du produit épuisé

- Le statut est écrit explicitement en texte : « En rupture de stock ».
- Le champ de quantité est désactivé.
- Le bouton d'achat est désactivé.
- L'image est grisée en CSS, mais l'information reste compréhensible sans couleur.

## 4. Les morceaux qui reviennent

| Morceau | Pages | Classe |
|---|---|---|
| En-tête | Accueil, Produit | `entete` |
| Logo | Accueil, Produit | `logo` |
| Panier | Accueil, Produit | `panier` |
| Bouton du menu | Accueil, Produit | `menu-bouton` |
| Recherche | Accueil, Produit | `recherche` |
| Menu | Accueil, Produit | `menu` |
| Pied de page | Accueil, Produit | `pied` |
| Carrousel | Accueil | `carrousel` |
| Diapositive | Accueil | `slide` |
| Catégories | Accueil | `categories` |
| Top produits | Accueil | `top-produits` |
| Carte produit | Accueil, Produit | `produit` |
| Prix | Accueil, Produit | `prix` |
| Stock | Accueil, Produit | `stock` |
| Rupture de stock | Accueil, Produit | `stock-rupture` |
| Fil d'Ariane | Produit | `ariane` |
| Fiche produit | Produit | `fiche` |
| Zone d'achat | Produit | `achat` |
| Bouton | Accueil, Produit | `btn` |
| Caractéristiques | Produit | `caracteristiques` |

La classe `produit` est utilisée pour les cartes des deux pages. La classe `fiche` désigne l'article détaillé sur la page produit.
