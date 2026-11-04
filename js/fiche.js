import { produits, trouverProduit } from './produits.js';
import { ajouter } from './panier.js';
import { formaterPrix } from './outils.js';
import { mettreAJourIcone } from './icone-panier.js';

export function initialiserFiche() {
  const fiche = document.querySelector('.fiche');
  if (!fiche) return;
  const parametre = new URLSearchParams(location.search).get('id');
  const produit = trouverProduit(parametre) || trouverProduit(fiche.dataset.id) || produits[0];
  fiche.dataset.id = produit.id;
  const titre = fiche.querySelector('h1');
  const prix = fiche.querySelector('.achat .prix');
  const stock = fiche.querySelector('.achat .stock');
  const photo = fiche.querySelector('.galerie img');
  const description = fiche.querySelector('.fiche-description .description');
  if (titre) titre.textContent = produit.nom;
  if (prix) prix.textContent = `${formaterPrix(produit.prix)} TTC`;
  if (photo) { photo.src = produit.image; photo.alt = produit.nom; }
  if (description && produit.description) description.textContent = produit.description;
  const formulaire = fiche.querySelector('.achat form');
  const champ = formulaire?.querySelector('input[name="quantite"]');
  const bouton = formulaire?.querySelector('button[type="submit"]');
  const message = fiche.querySelector('.message-achat');
  if (!formulaire || !champ || !bouton || !message) return;
  const epuise = produit.stock <= 0;
  champ.disabled = epuise;
  bouton.disabled = epuise;
  champ.max = String(Math.min(10, produit.stock));
  bouton.textContent = epuise ? 'En rupture de stock' : 'Ajouter au panier';
  if (stock) {
    stock.classList.toggle('stock-rupture', epuise);
    stock.textContent = epuise ? 'Disponibilité : en rupture de stock' : `${produit.stock} en stock`;
  }
  formulaire.addEventListener('submit', (event) => {
    event.preventDefault();
    const quantite = Number(champ.value);
    if (epuise || !Number.isInteger(quantite) || quantite < 1 || quantite > 10 || quantite > produit.stock) {
      message.textContent = `Choisissez une quantité entière entre 1 et ${Math.min(10, produit.stock)}.`;
      champ.focus();
      return;
    }
    let ajoutees = 0;
    for (let i = 0; i < quantite; i += 1) {
      if (ajouter(produit.id)) ajoutees += 1;
    }
    if (ajoutees === 0) {
      message.textContent = 'La quantité disponible a été atteinte.';
      champ.focus();
      return;
    }
    mettreAJourIcone();
    message.textContent = `${ajoutees} × ${produit.nom} ajouté${ajoutees > 1 ? 's' : ''} au panier.`;
  });
}

