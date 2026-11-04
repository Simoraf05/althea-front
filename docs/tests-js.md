# Tests JavaScript · Jour 3

## Tests automatiques

La page `categorie.html?tests` lance les tests des fonctions pures et affiche le résultat dans la page et dans la console.

| Test | Attendu | Résultat |
|---|---|---|
| Formater 89,9 € | `89,90 €` | OK |
| Formater 24 € | `24,00 €` | OK |
| Produit prioritaire disponible | En tête | OK |
| Produits épuisés | En fin de liste | OK |
| Produit à la fois prioritaire et épuisé | En fin de liste | OK |
| Tri | Ne modifie pas le tableau source | OK |
| Tri par prix | Les produits épuisés restent à la fin | OK |
| Valeur de tri inconnue | Recommandé par défaut, sans erreur | OK |
| Normalisation | ` StéThoscope ` devient `stethoscope` | OK |
| Prix maximum 50 € + disponibles seulement | 4 produits | OK |

Résultat attendu : **Tests : 10 / 10 réussis**.

## Vérifications manuelles à terminer dans le navigateur

| Vérification | Résultat |
|---|---|
| Menu clavier à 360 px, fermeture avec Échap et retour du focus | À faire dans un navigateur |
| Boutons, pastilles et glissement tactile du carrousel | À faire dans un navigateur |
| Ajout, quantité, suppression et total du panier | À faire dans un navigateur |
| Persistance après rechargement et synchronisation entre deux onglets | À faire dans un navigateur |
| Quantités 0, 50 et `abc` sur la fiche produit | À faire dans un navigateur |
| Avis piégé affiché comme texte et avis de note 50 écarté | À faire dans un navigateur |
| Recherche sans accent et URL de recherche piégée | À faire dans un navigateur |
| Console CSP de toutes les pages | À faire dans un navigateur |

Le produit piège du catalogue et le texte piégé des avis restent comme tests permanents. Les données injectées sont affectées à `textContent`; elles ne sont jamais interprétées comme du HTML.

