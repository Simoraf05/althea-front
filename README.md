# Althea Systems · site vitrine front-end

Projet pédagogique HTML et CSS responsive, sans JavaScript. Il présente une boutique de matériel médical avec accueil, catalogue de diagnostic, fiche produit, recherche, connexion et inscription.

## Arborescence

```text
index.html, categorie.html, produit.html, recherche.html
connexion.html, inscription.html
css/variables.css, css/style.css
img/ (logo, icônes, catégories, produits et photos adaptatives)
docs/analyse.md, docs/audit.md, docs/responsive.md, docs/securite.md
```

## Ouvrir le site

Ouvrir `index.html` dans un navigateur. Pour vérifier le responsive, utiliser le mode appareil à 320, 360, 768 et 1 280 px. Les formulaires d’authentification sont des maquettes front-end : aucun serveur de compte n’est fourni.

## Choix techniques

1. Le CSS est mobile d’abord. Flexbox aligne les éléments de navigation, Grid compose les catégories et les résultats, et `srcset` propose des images de fiche en 400 et 800 px.
2. Le produit épuisé est annoncé avec du texte, son achat est désactivé et sa photo est grisée. Les formulaires utilisent des libellés explicites et des méthodes POST pour les mots de passe.
3. Les couleurs sont centralisées dans `css/variables.css` et s’adaptent au réglage clair ou sombre de l’appareil. Le mouvement respecte `prefers-reduced-motion`.
4. Chaque page porte une CSP adaptée au site statique. En production, la politique doit aussi être envoyée comme en-tête HTTP et les contrôles doivent être validés côté serveur.

## Vérification

Les scores Lighthouse déjà consignés avant ce travail étaient Accueil 88/100 et Produit 100/100. Ils doivent être mesurés de nouveau dans le navigateur après les évolutions du Jour 2. Les validateurs HTML/CSS, essais de contraste, zoom, mode sombre, impression et largeurs mobiles restent à confirmer dans le navigateur avant publication. Les captures des dix vues demandées par le TP restent également à ajouter dans `docs/captures/`.
