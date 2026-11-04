import { el, formaterPrix } from './outils.js';
import { trouverProduit } from './produits.js';
import { ajouter } from './panier.js';
import { mettreAJourIcone } from './icone-panier.js';
import { annoncer } from './annonce.js';

export function creerCarte({ id, nom, prix, stock, image }) {
  const epuise = stock === 0;
  const titre = el('h3', '', nom); // textContent : le nom reste du texte
  titre.id = `nom-${id}`;
  const img = el('img');
  img.src = `img/${image}`;
  img.alt = '';
  const lien = el('a');
  lien.href = `produit.html?id=${encodeURIComponent(id)}`;
  lien.append(img, titre);

  const bouton = el('button', 'btn', epuise ? 'Indisponible' : 'Ajouter au panier');
  bouton.type = 'button';
  bouton.dataset.id = id;
  bouton.disabled = epuise;
  bouton.setAttribute('aria-describedby', titre.id);

  const article = el('article', 'produit');
  article.append(
    lien,
    el('p', 'prix', `${formaterPrix(prix)} TTC`),
    el('p', epuise ? 'stock stock-rupture' : 'stock', epuise ? 'En rupture de stock' : 'En stock'),
    bouton,
  );
  const li = el('li');
  li.append(article);
  return li;
}

export function afficherCatalogue(liste, produits) {
  liste.replaceChildren(...produits.map(creerCarte)); // vider, puis une carte par produit
}

// Délégation : un seul écouteur pour tous les boutons « Ajouter au panier » d'une liste, même recréés.
export function brancherAjout(liste) {
  liste.addEventListener('click', (event) => {
    const bouton = event.target.closest('button[data-id]');
    const produit = bouton && trouverProduit(bouton.dataset.id);
    if (!produit || bouton.disabled) return;
    ajouter(produit.id);
    mettreAJourIcone();
    annoncer(`${produit.nom} ajouté au panier.`);
  });
}
