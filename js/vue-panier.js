import { el, formaterPrix, centimes } from './outils.js';
import { trouverProduit } from './produits.js';
import { panier, changerQuantite, supprimer, calculerTotal } from './panier.js';
import { mettreAJourIcone } from './icone-panier.js';

// Une seule fonction redessine tout à partir de l'état du panier.
export function afficherPanier() {
  const liste = document.querySelector('#lignes-panier');
  if (!liste) return;
  liste.replaceChildren(...panier.map(({ id, quantite }) => {
    const { nom, prix, stock } = trouverProduit(id);
    const champ = el('input');
    champ.type = 'number';
    champ.id = `qte-${id}`;
    champ.min = '1';
    champ.max = String(Math.min(99, stock));
    champ.value = String(quantite);
    const label = el('label', '', 'Quantité');
    label.htmlFor = champ.id;
    const zone = el('div');
    zone.append(label, champ);
    const supprimerBtn = el('button', 'btn-secondaire supprimer', 'Supprimer');
    supprimerBtn.type = 'button';
    supprimerBtn.setAttribute('aria-label', `Supprimer ${nom}`);
    const li = el('li', 'ligne-panier');
    li.dataset.id = id;
    li.append(el('p', 'ligne-nom', nom), zone, el('p', 'sous-total', formaterPrix(centimes(prix) * quantite / 100)), supprimerBtn);
    return li;
  }));
  document.querySelector('#total').textContent = formaterPrix(calculerTotal());
  document.querySelector('#panier-vide').hidden = panier.length > 0;
  mettreAJourIcone();
}

export function initialiserPagePanier() {
  const liste = document.querySelector('#lignes-panier');
  if (!liste) return;
  liste.addEventListener('change', (event) => {
    const champ = event.target.closest('input[type="number"]');
    if (!champ) return;
    if (champ.value.trim() !== '') changerQuantite(champ.closest('li').dataset.id, Number(champ.value));
    afficherPanier(); // un champ vide ne supprime rien : on redessine l'état
  });
  liste.addEventListener('click', (event) => {
    const bouton = event.target.closest('button.supprimer');
    if (!bouton) return;
    supprimer(bouton.closest('li').dataset.id);
    afficherPanier();
    document.querySelector('#titre-panier').focus(); // le bouton a disparu : le focus ne se perd pas
  });
  afficherPanier();
}
