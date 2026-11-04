import { el } from './outils.js';

let minuterie;

// La zone existe (vide) dès le chargement : les lecteurs d'écran annoncent ce qu'on y écrit ensuite.
export function initialiserAnnonce() {
  const zone = el('div', 'annonce');
  zone.setAttribute('role', 'status');
  document.body.append(zone);
}

export function annoncer(texte) {
  const zone = document.querySelector('.annonce');
  if (!zone) return;
  const lien = el('a', '', 'Voir le panier');
  lien.href = 'panier.html';
  zone.replaceChildren(el('span', '', `${texte} `), lien); // textContent : le nom du produit reste du texte
  zone.classList.add('visible');
  clearTimeout(minuterie);
  minuterie = setTimeout(() => {
    zone.classList.remove('visible');
    zone.replaceChildren();
  }, 5000);
}
