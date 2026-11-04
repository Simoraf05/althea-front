import { compterArticles } from './panier.js';

export function mettreAJourIcone() {
  const nombre = compterArticles();
  document.querySelectorAll('a.panier').forEach((lien) => {
    lien.classList.toggle('a-des-articles', nombre > 0);
    lien.querySelector('.compteur-texte').textContent = `(${nombre} article${nombre > 1 ? 's' : ''})`;
  });
}
