# Tests JavaScript — Althea Systems

| Test | Résultat attendu | Statut |
|---|---|---|
| Tri recommandé | Produits prioritaires en premier, épuisés à la fin | OK |
| Tri par prix croissant | Prix du plus petit au plus grand, épuisés à la fin | OK |
| Tri par prix décroissant | Prix du plus grand au plus petit, épuisés à la fin | OK |
| Filtre disponibilité | Seuls les produits en stock apparaissent | OK |
| Produit piégé | Le HTML apparaît comme du texte | OK |
| Recherche sans accent | stethoscope trouve le produit | OK |
| Recherche XSS | Le code est affiché comme du texte | OK |
| Achat produit épuisé | Bouton désactivé | OK |
| Quantité 0 | Refusée | OK |
| Quantité 50 | Refusée | OK |
| Quantité abc | Refusée | OK |
| Avis note 50 | Avis ignoré | OK |
| Avis piégé | Le HTML apparaît comme du texte | OK |
| Panier | Les produits et le total sont corrects | OK |
| Sauvegarde panier | Le panier survit au rechargement | OK |
| Deux onglets | Le panier est synchronisé | OK |
| Menu au clavier | Échap ferme le menu et rend le focus | OK |
| Carrousel | Les boutons changent de slide | OK |