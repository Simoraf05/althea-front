# Protections · Althea Systems

| Où | Protection | Contre quoi | Limite |
|---|---|---|---|
| Toutes les pages | CSP `default-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'` | Ressources externes non prévues, plugins, détournement de base et soumission vers un tiers | En production, envoyer aussi la CSP dans un en-tête HTTP. |
| Toutes les pages | `strict-origin-when-cross-origin` | Réduit les informations de provenance transmises aux autres sites | Ne remplace pas une politique serveur. |
| Recherche | `method="get"` | Permet de partager des filtres non secrets | Ne jamais y envoyer de mot de passe. |
| Connexion et inscription | `method="post"`, types et autocomplete adaptés | Évite d’exposer le mot de passe dans l’URL et aide le navigateur | Le serveur doit revérifier toutes les entrées et appliquer TLS. |
| Liens externes | HTTPS, `noopener noreferrer`, annonce du nouvel onglet | Protège le transport et l’onglet d’origine | Vérifier les URL avant publication. |
| Dépôt | `.gitignore` | Évite d’ajouter secrets et fichiers locaux | Vérifier qu’aucun secret n’a déjà été suivi par Git. |

## XSS (injection de HTML ou de script)

Un nom de produit, une recherche dans l’URL ou un avis sont des données non fiables. Les interpréter avec `innerHTML` pourrait exécuter du code dans la page et agir au nom du visiteur.

Les modules créent les éléments avec `document.createElement`, puis affectent chaque valeur avec `textContent`. Ils n’utilisent pas `innerHTML` pour afficher des données. La CSP `default-src 'self'` bloque aussi l’exécution de scripts inline.

Le catalogue conserve volontairement le nom de test `Gants nitrile <img src="x" onerror="alert(1)">`. Le fichier `data/avis.json` contient également un texte d’avis piégé et une note invalide. Ces valeurs doivent rester visibles comme du texte ; l’avis noté 50 est écarté. Les scénarios interactifs sont listés dans `docs/tests-js.md`.

