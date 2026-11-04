import { formaterPrix } from './outils.js';

const imagesParDefaut = {
  'tensiometre-bras': 'img/tensiometre.svg',
  'tensiometre-poignet': 'img/tensiometre-poignet.svg',
  oxymetre: 'img/oxymetre.svg',
  thermometre: 'img/thermometre.svg',
  stethoscope: 'img/stethoscope.svg',
  glucometre: 'img/glucometre.svg',
};

export function creerCarte({ id, nom, prix, stock, image }) {
  const li = document.createElement('li');
  const article = document.createElement('article');
  article.className = 'produit';
  const lien = document.createElement('a');
  lien.href = `produit.html?id=${encodeURIComponent(id)}`;
  const photo = document.createElement('img');
  photo.src = image || imagesParDefaut[id] || 'img/categorie-diagnostic.svg';
  photo.alt = nom;
  photo.width = 400;
  photo.height = 300;
  const titre = document.createElement('h3');
  titre.textContent = nom;
  lien.append(photo, titre);
  const prixElement = document.createElement('p');
  prixElement.className = 'prix';
  prixElement.textContent = `${formaterPrix(prix)} TTC`;
  const stockElement = document.createElement('p');
  stockElement.className = stock > 0 ? 'stock' : 'stock stock-rupture';
  stockElement.textContent = stock > 0 ? 'En stock' : 'En rupture de stock';
  const bouton = document.createElement('button');
  bouton.className = 'btn ajouter-panier';
  bouton.type = 'button';
  bouton.dataset.id = id;
  bouton.textContent = stock > 0 ? 'Ajouter au panier' : 'Indisponible';
  bouton.disabled = stock <= 0;
  article.append(lien, prixElement, stockElement, bouton);
  li.append(article);
  return li;
}

export const afficherCatalogue = (liste, items) => {
  if (!liste) return;
  liste.replaceChildren(...items.map((produit) => creerCarte(produit)));
};

