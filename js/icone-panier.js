import { compterArticles } from './panier.js';

export function mettreAJourIcone() {
  const panierEl = document.querySelector('.panier');
  if (!panierEl) return;
  const n = compterArticles();
  panierEl.classList.toggle('a-des-articles', n > 0); // le CSS dessine le point rouge
  panierEl.querySelector('.compteur').textContent = String(n);
  panierEl.querySelector('a').setAttribute('aria-label', `Panier, ${n} article${n > 1 ? 's' : ''}`);
}
