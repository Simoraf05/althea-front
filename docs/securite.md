# Sécurité du front · Althea Systems

| Protection | Où | Contre quoi |
|---|---|---|
| CSP `default-src 'self'; object-src 'none'; base-uri 'self'; form-action 'self'` | `<head>` de chaque page | scripts, styles ou images venus d’ailleurs ; code écrit dans le HTML ; changement de l’adresse de base ; envoi d’un formulaire vers un autre site |
| `<meta name="referrer" content="strict-origin-when-cross-origin">` | `<head>` de chaque page | fuite de l’adresse complète vers les autres sites |
| Aucun `style=""` ni script écrit dans le HTML (le seul JavaScript est `js/theme.js`, un fichier du site) | toutes les pages | contournement de la CSP (un langage par fichier) |
| `method="post"`, `type="password"`, `autocomplete` adapté | `connexion.html`, `inscription.html` | mot de passe visible dans l’adresse, l’historique ou à l’écran ; blocage des gestionnaires de mots de passe |
| `method="get"` | recherche (en-tête et page Recherche) | rien de secret : l’adresse peut être partagée |
| `target="_blank"` avec `rel="noopener noreferrer"` et texte caché « (nouvel onglet) » | lien Instagram du pied de page | prise de contrôle de l’onglet Althea par la page ouverte |
| Liens externes en `https://` | pied de page | lecture ou modification de la page sur le réseau |
| `.gitignore` (`.env`, `*.key`, `.DS_Store`, `Thumbs.db`, `.vscode/`, `node_modules/`) | racine du dépôt | envoi de secrets ou de fichiers propres à un ordinateur |

## Limites

- Une balise `meta` ne fait pas tout : en production, le serveur enverra la CSP dans un en-tête HTTP.
- Les contrôles HTML (`required`, `minlength`, `maxlength`) peuvent être retirés avec l’inspecteur : le serveur devra tout revérifier.
- `js/theme.js` garde seulement « light » ou « dark » dans le `localStorage` du navigateur : aucune donnée personnelle.
- Après l’envoi d’un formulaire, l’erreur « Cannot POST » est normale tant qu’il n’y a pas de serveur.

## XSS : une donnée s’écrit comme du texte (jour 3)

**Le risque.** Un nom de produit, un avis ou un mot de recherche peut contenir du code (`<img src=x onerror=alert(1)>`). Avec `innerHTML`, le navigateur le lit comme du HTML et l’exécute : sur un vrai site, ce code pourrait voler la session d’un client.

**La règle (OWASP).** Une donnée s’écrit toujours avec `textContent` (ou `createElement` + `textContent`), jamais avec `innerHTML`. La fonction `el()` de `js/outils.js` est le seul endroit qui crée des éléments avec du texte.

**Les tests permanents.**

| Piège | Où | Résultat attendu |
|---|---|---|
| Produit « Gants nitrile `<img … onerror=…>` » | `js/produits.js` | le nom s’affiche en entier, en texte, sans alerte |
| Avis dont l’auteur et le texte contiennent du HTML | `data/avis.json` | affiché en texte, sans gras ni alerte |
| Avis avec une note de 50 | `data/avis.json` | ignoré (note entière de 1 à 5 seulement) |
| `recherche.html?q=<img src=x onerror=alert(1)>` | adresse | le mot piégé s’affiche en texte (XSS réfléchi évité) |

Si quelqu’un remet `innerHTML` un jour, une alerte s’ouvre : le test le montre tout de suite.

## Les valeurs qu’on ne croit jamais sur parole (jour 3)

- **Adresse** : le tri est vérifié par une liste blanche (`lireTri`, `Object.hasOwn`) ; l’identifiant de la fiche produit (`?id=`) doit exister dans `js/produits.js`, sinon on affiche le produit par défaut ; les prix par `Number.isFinite` (`lireNombre`).
- **Quantité de la fiche** : revérifiée en JavaScript (entier de 1 à 10), même si `min` et `max` sont retirés dans l’inspecteur.
- **`localStorage`** : relu avec `try / catch` ; seules les lignes dont le produit existe et dont la quantité est un entier de 1 à 99 sont gardées. On n’y range que l’id et la quantité : jamais de prix, de mot de passe ni de donnée personnelle (le prix vient toujours de `js/produits.js`).
- **Pas de code dans le HTML** : aucun `onclick=`, aucun `style="` ; tout passe par `addEventListener`. La CSP refuse le reste.
- **Aucun secret** dans le dépôt (`.gitignore`).
