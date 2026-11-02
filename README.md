# Althea Systems · front-end (jour 1)

Deux pages mobiles (accueil et produit) d'Althea Systems, écrites en HTML et CSS, sans JavaScript.

## Arborescence

```
althea-front/
├── index.html
├── produit.html
├── css/
│   ├── variables.css
│   └── style.css
├── img/
└── docs/
    ├── analyse.md
    └── audit.md
```

## Ouvrir les pages

Ouvrir `index.html` dans un navigateur, puis passer en mode téléphone (F12, largeur 360 px).

## Scores Lighthouse (Accessibilité)

- index.html : 88 / 100
- produit.html : 100 / 100

## Deux choix techniques

1. **Rupture de stock écrite en texte.** Le produit épuisé est signalé par le texte
   « En rupture de stock », le bouton désactivé en pointillés et l'image grisée,
   pas seulement par une couleur. Une personne daltonienne ou aveugle reçoit la même information.
2. **Toutes les valeurs dans `variables.css`.** Couleurs, tailles et espacements sont définis une fois.
   Changer la charte se fait à un seul endroit, et chaque couleur a son ratio de contraste noté en commentaire.