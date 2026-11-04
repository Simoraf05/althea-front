# Responsive · Althea Systems

## 1. Constats avant les corrections (étape 1)

Relevés faits dans Chromium (mode appareil) et par lecture du CSS de la version du jour 1.

| Page | 360 px | 768 px | 1 280 px |
|---------|--------|--------|----------|
| Accueil | carrousel de 1 146 px de haut (les 3 slides sont empilées) ; catégories sur 1 colonne | en-tête sur plusieurs lignes (333 px) ; pied de page visible | en-tête sur 3 lignes (251 px) ; prix des cartes non alignés (24 px d’écart) |
| Produit | 3 photos empilées, sans défilement | galerie en 3 colonnes serrées ; fiche sur une seule colonne | fiche sur une seule colonne ; pas de tableau des tailles |

Aucun débordement horizontal n’existait déjà à 320, 360, 768 et 1 280 px.

## 2. Carrousel sans JavaScript (étape 22)

| Ce qui marche en CSS seul | Ce qui manque (jour 3) |
|---------------------------------------------|---------------------------------------|
| glisser au doigt et à la souris | des flèches Précédent / Suivant |
| s’arrêter net sur chaque slide (scroll snap) | un défilement automatique |
| aller à une slide avec les pastilles (#une-2) | la pastille de la slide active mise en valeur |
| défiler au clavier (Tab puis flèches) | mettre le défilement automatique en pause |

## 3. Contrôle après corrections (Chromium headless)

Pas de barre de défilement horizontale (largeur de la page = largeur de la fenêtre).

| Page | 320 px | 360 px | 768 px | 1 280 px |
|---------|--------|--------|--------|----------|
| Accueil | ok | ok | ok | ok |
| Catégorie | ok | ok | ok | ok |
| Produit | ok | ok | ok | ok |
| Recherche | ok | ok | ok | ok |
| Connexion | ok | ok | ok | ok |
| Inscription | ok | ok | ok | ok |
| CGU | ok | ok | ok | ok |

Autres mesures : en-tête à 1 280 px : logo, panier et recherche sur une rangée, menu dessous (le bouton Menu ne sert que sous 48rem) ; 2 catégories par ligne à 360 px, 4 à 1 280 px ; 1 / 2 / 4 produits par ligne dans la page Catégorie à 360 / 768 / 1 280 px ; fiche produit en 2 colonnes à 1 280 px ; pied de page affiché sur tous les écrans (une colonne, puis 3 colonnes dès 48rem) ; bouton de mode sombre qui garde le choix d’une page à l’autre ; la photo chargée est tensiometre-face-400.jpg à 360 px et tensiometre-face-800.jpg à 768 px et plus ; une erreur apparaît sous un champ invalide seulement après la saisie ; aucun message de CSP dans la console.

## 4. À faire à la main

- Zoom à 200 %, navigation au clavier sur chaque page, rendu « moins d’animations ».
- Validateurs HTML et CSS du W3C, Lighthouse (voir README) : non lancés dans cet environnement.
