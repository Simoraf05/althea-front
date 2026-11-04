import { trouverProduit } from './produits.js';
import { ajouter, panier } from './panier.js';
import { mettreAJourIcone } from './icone-panier.js';
import { formaterPrix } from './outils.js';

export function initialiserFiche() {
  const fiche = document.querySelector('.fiche');
  if (!fiche) return;
  const params = new URLSearchParams(location.search);
  const produit = trouverProduit(params.get('id') ?? fiche.dataset.id);
  const form = fiche.querySelector('.achat');
  const champ = form.querySelector('input');
  const bouton = form.querySelector('button');
  const message = form.querySelector('.message-achat');
  form.noValidate = true;
  if (!produit) {
    fiche.querySelector('h1').textContent = 'Produit introuvable';
    champ.disabled = true;
    bouton.disabled = true;
    message.textContent = 'Ce produit n’existe pas dans le catalogue.';
    return;
  }
  fiche.dataset.id = produit.id;
  fiche.querySelector('h1').textContent = produit.nom;
  document.title = `${produit.nom} · Althea Systems`;
  fiche.querySelector('.description-produit').textContent = produit.description;
  const prix = fiche.querySelector('.prix-fiche data');
  prix.value = String(produit.prix);
  prix.textContent = formaterPrix(produit.prix);
  const stock = fiche.querySelector('.stock');
  stock.textContent = produit.stock === 0 ? 'En rupture de stock' : 'En stock';
  stock.classList.toggle('stock-rupture', produit.stock === 0);
  champ.disabled = produit.stock === 0;
  bouton.disabled = produit.stock === 0;
  bouton.textContent = produit.stock === 0 ? 'En rupture de stock' : 'Ajouter au panier';
  // Les tailles de brassard concernent uniquement le tensiomètre de départ.
  if (produit.id !== 'tensiometre') {
    const galerie = fiche.querySelector('.galerie');
    const photo = document.createElement('img');
    photo.src = produit.image;
    photo.alt = produit.nom;
    photo.width = 800;
    photo.height = 600;
    const ligne = document.createElement('li');
    ligne.append(photo);
    galerie.replaceChildren(ligne);
    fiche.querySelector('.tailles').hidden = true;
    const details = fiche.querySelector('.caracteristiques dl');
    const terme = document.createElement('dt');
    terme.textContent = 'Caractéristiques';
    const valeur = document.createElement('dd');
    valeur.textContent = produit.caracteristique;
    details.replaceChildren(terme, valeur);
    fiche.querySelector('.caracteristiques > p').textContent = produit.description;
  }
  document.querySelector('.ariane [aria-current]').textContent = produit.nom;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (produit.stock === 0) {
      message.textContent = 'Ce produit est en rupture de stock.';
      return;
    }
    // On revérifie la quantité, car les limites du HTML peuvent être retirées.
    const quantite = Number(champ.value);
    if (!Number.isInteger(quantite) || quantite < 1 || quantite > 10) {
      message.textContent = 'Saisissez un entier entre 1 et 10.';
      champ.focus();
      return;
    }
    const existante = panier.find((ligne) => ligne.id === produit.id);
    if ((existante ? existante.quantite : 0) + quantite > 99) {
      message.textContent = 'La limite est de 99 articles par produit dans le panier.';
      champ.focus();
      return;
    }
    // La même fonction ajoute chaque exemplaire au panier.
    for (let i = 0; i < quantite; i++) ajouter(produit.id);
    message.textContent = `${quantite} article${quantite > 1 ? 's' : ''} ajouté${quantite > 1 ? 's' : ''} au panier.`;
    mettreAJourIcone();
  });
}
