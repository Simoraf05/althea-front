import { panier, changerQuantite, supprimer, calculerTotal } from './panier.js';
import { trouverProduit } from './produits.js';
import { formaterPrix } from './outils.js';
import { mettreAJourIcone } from './icone-panier.js';

export function afficherPanier() {
  const liste = document.querySelector('#lignes-panier');
  const total = document.querySelector('#total-panier');
  const vide = document.querySelector('#panier-vide');
  if (!liste || !total || !vide) return;
  liste.replaceChildren();
  panier.forEach(({ id, quantite }) => {
    const produit = trouverProduit(id);
    if (!produit) return;
    const ligne = document.createElement('li');
    ligne.className = 'ligne-panier';
    ligne.dataset.id = id;
    const photo = document.createElement('img');
    photo.src = produit.image;
    photo.alt = '';
    photo.width = 96;
    photo.height = 96;
    const infos = document.createElement('div');
    const nom = document.createElement('h2');
    nom.textContent = produit.nom;
    const prix = document.createElement('p');
    prix.textContent = `${formaterPrix(produit.prix)} l’unité`;
    infos.append(nom, prix);
    const label = document.createElement('label');
    const idChamp = `quantite-${id}`;
    label.htmlFor = idChamp;
    label.textContent = 'Quantité';
    const champ = document.createElement('input');
    champ.id = idChamp;
    champ.type = 'number';
    champ.min = '1';
    champ.max = String(Math.min(99, produit.stock));
    champ.value = String(quantite);
    champ.dataset.role = 'quantite';
    champ.setAttribute('aria-label', `Quantité pour ${produit.nom}`);
    const sousTotal = document.createElement('p');
    sousTotal.className = 'sous-total';
    sousTotal.textContent = `Sous-total : ${formaterPrix(produit.prix * quantite)}`;
    const supprimerBouton = document.createElement('button');
    supprimerBouton.type = 'button';
    supprimerBouton.className = 'btn-secondaire supprimer-ligne';
    supprimerBouton.dataset.role = 'supprimer';
    supprimerBouton.textContent = 'Supprimer';
    supprimerBouton.setAttribute('aria-label', `Supprimer ${produit.nom} du panier`);
    ligne.append(photo, infos, label, champ, sousTotal, supprimerBouton);
    liste.append(ligne);
  });
  const estVide = panier.length === 0;
  vide.hidden = !estVide;
  total.textContent = formaterPrix(calculerTotal());
  mettreAJourIcone();
}

export function initialiserVuePanier() {
  const liste = document.querySelector('#lignes-panier');
  if (!liste) return;
  const titre = document.querySelector('#titre-panier');
  liste.addEventListener('change', (event) => {
    const champ = event.target.closest('[data-role="quantite"]');
    const ligne = champ?.closest('li[data-id]');
    if (!champ || !ligne) return;
    changerQuantite(ligne.dataset.id, Number(champ.value));
    afficherPanier();
  });
  liste.addEventListener('click', (event) => {
    const bouton = event.target.closest('[data-role="supprimer"]');
    const ligne = bouton?.closest('li[data-id]');
    if (!bouton || !ligne) return;
    supprimer(ligne.dataset.id);
    afficherPanier();
    titre?.focus();
  });
  afficherPanier();
}

