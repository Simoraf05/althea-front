# Protections · Althea Systems

| Où | Protection | Contre quoi | Limite |
|---|---|---|---|
| Toutes les pages | CSP `default-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'` | Ressources externes non prévues, plugins, détournement de base et soumission vers un tiers | En production, envoyer aussi la CSP dans un en-tête HTTP. |
| Toutes les pages | `strict-origin-when-cross-origin` | Réduit les informations de provenance transmises aux autres sites | Ne remplace pas une politique serveur. |
| Recherche | `method="get"` | Permet de partager des filtres non secrets | Ne jamais y envoyer de mot de passe. |
| Connexion et inscription | `method="post"`, types et autocomplete adaptés | Évite d’exposer le mot de passe dans l’URL et aide le navigateur | Le serveur doit revérifier toutes les entrées et appliquer TLS. |
| Liens externes | HTTPS, `noopener noreferrer`, annonce du nouvel onglet | Protège le transport et l’onglet d’origine | Vérifier les URL avant publication. |
| Dépôt | `.gitignore` | Évite d’ajouter secrets et fichiers locaux | Vérifier qu’aucun secret n’a déjà été suivi par Git. |
