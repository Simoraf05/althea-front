# Audit d’accessibilité · Jour 1

| Page | Test | Problème | Correction | Re-testé |
|---|---|---|---|---|
| Accueil | Lighthouse (valeur historique du README) | Score précédent de 88, sous l’objectif 90 | Carrousel clavier, lien d’évitement, libellés et structures vérifiés dans le HTML | À refaire dans le navigateur après les évolutions du Jour 2 |
| Produit | Lighthouse (valeur historique du README) | Aucun problème noté dans le contrôle précédent (100) | Conservation des libellés, textes alternatifs, statut en texte et contrôles désactivés | À refaire dans le navigateur après les évolutions du Jour 2 |

## Résultats techniques · Jour 2

| Périmètre | Vérification | Résultat | État |
|---|---|---|---|
| Six pages HTML | Validateur W3C Nu | 0 erreur sur chaque page | Passé le 3 novembre 2026 |
| `css/style.css` | Validateur W3C, profil CSS3 | Aucune erreur | Passé le 3 novembre 2026 |
| Responsive, clavier, zoom, impression et CSP en navigateur | Recette manuelle | Non vérifiée dans un navigateur | À faire |
| Lighthouse | Accessibilité et performance | Aucun score Jour 2 mesuré ; les scores du Jour 1 sont historiques | À faire |

## Jour 3 · JavaScript ES6 et DOM

- Catalogue généré depuis `js/produits.js`, trié sur une copie et filtrable par disponibilité.
- Recherche avec normalisation sans accents, filtres URL et validation des nombres.
- Menu burger accessible au clavier et carrousel piloté par boutons, pastilles et `IntersectionObserver`.
- Fiche produit avec vérification de quantité, avis chargés par `fetch` et données piégées rendues en texte.
- Panier calculé depuis les prix du catalogue, limité aux identifiants et quantités dans `localStorage`, avec mise à jour entre onglets.
- Dix tests JavaScript dans `docs/tests-js.md`, lançables avec `categorie.html?tests`.

Les tests automatisés portent sur les fonctions de tri, prix et recherche. Les essais visuels et clavier, les parcours du panier, les requêtes `fetch` et l’inspection de la console CSP nécessitent encore une session navigateur ; ils ne sont pas indiqués comme validés.

