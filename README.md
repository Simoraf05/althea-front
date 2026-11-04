# Althea Systems · site vitrine front-end

Projet pédagogique HTML, CSS et JavaScript ES6 pour une boutique de matériel médical. Le site comprend l’accueil, un catalogue, une fiche produit, la recherche, le panier, la connexion et l’inscription.

## Arborescence

```text
index.html, categorie.html, produit.html, recherche.html, panier.html
connexion.html, inscription.html
css/variables.css, css/style.css
js/produits.js, js/tri.js, js/outils.js, js/catalogue.js, js/recherche.js
js/panier.js, js/icone-panier.js, js/vue-panier.js, js/fiche.js, js/avis.js
js/menu.js, js/carrousel.js, js/tests.js, js/main.js
data/avis.json
img/ (logo, icônes, catégories, produits et images adaptatives)
docs/ (analyse, audit, sécurité, responsive et tests JavaScript)
```

## Démarrer

Ouvrir le dossier dans VS Code puis lancer `index.html` avec Live Server. Les modules JavaScript et `fetch` nécessitent un serveur local ; l’ouverture directe par `file://` ne suffit pas. Pour lancer les tests des fonctions, ouvrir `categorie.html?tests`.

Les formulaires de connexion et d’inscription restent des maquettes front-end : aucun serveur de compte n’est fourni.

## JavaScript (Jour 3)

- `js/produits.js` contient les données du catalogue et `trouverProduit(id)`.
- `js/tri.js` trie une copie : produits prioritaires en premier, autres ensuite, épuisés toujours à la fin. Les tris par prix conservent cette règle.
- `js/outils.js` formate les prix en euros.
- `js/catalogue.js` crée les cartes et écrit les données avec `textContent`.
- `js/recherche.js` normalise les accents et applique les critères issus de l’URL.
- `js/panier.js` gère l’état, le total, le stockage validé et le rechargement entre onglets.
- `js/icone-panier.js` met à jour le nombre annoncé et le point du panier.
- `js/vue-panier.js` dessine les lignes, les sous-totaux et le total.
- `js/fiche.js` vérifie les quantités et bloque les achats indisponibles.
- `js/avis.js` charge les avis JSON, contrôle les notes et les affiche sans interpréter leur texte.
- `js/menu.js` gère le menu au clavier, son état ARIA et la touche Échap.
- `js/carrousel.js` commande les slides et synchronise les pastilles avec leur visibilité.
- `js/tests.js` lance les dix tests accessibles via `categorie.html?tests`.
- `js/main.js` initialise les fonctions partagées et les éléments présents sur la page.

La règle XSS du projet : toute donnée variable est affichée comme du texte avec `textContent`, jamais comme du HTML avec `innerHTML`. Les saisies et les données relues dans `localStorage` sont vérifiées en JavaScript.

## Couleurs et responsive

Les couleurs sont définies dans `css/variables.css`. Le thème clair est appliqué par défaut ; le bouton du menu permet de passer au thème sombre et le choix est conservé entre les pages. Les mises en page s’adaptent aux écrans mobiles et larges ; le menu mobile se ferme avec Échap et rend le focus à son bouton.

## Vérification

Les dix tests JavaScript sont documentés dans `docs/tests-js.md` et passent. Des captures mobiles à 360 px sont disponibles dans `docs/captures/`. Les essais clavier complets, le parcours interactif du carrousel et du panier, la validation de toutes les saisies, la synchronisation entre onglets, ainsi que les mesures Lighthouse restent à réaliser.

