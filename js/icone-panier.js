import { compterArticles } from './panier.js';

export function mettreAJourIcone() {
  const nombre = compterArticles();
  document.querySelectorAll('.panier').forEach((conteneur) => {
    conteneur.classList.toggle('a-des-articles', nombre > 0);
    const compteur = conteneur.querySelector('.compteur');
    const annonce = conteneur.querySelector('.compteur-texte');
    const lien = conteneur.querySelector('a');
    if (compteur) compteur.textContent = String(nombre);
    if (annonce) annonce.textContent = `(${nombre} article${nombre > 1 ? 's' : ''})`;
    if (lien) lien.setAttribute('aria-label', `Panier, ${nombre} article${nombre > 1 ? 's' : ''}`);
  });
}

