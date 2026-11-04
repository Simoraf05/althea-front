import { produits } from './produits.js';
import { formaterPrix } from './outils.js';
import { lireTri, trierPar } from './tri.js';
import { ajouter } from './panier.js';
import { mettreAJourIcone } from './icone-panier.js';

export function creerCarte({ id, nom, prix, stock, image }) {
  const ligne = document.createElement('li');
  const carte = document.createElement('article');
  carte.className = 'produit';
  const photo = document.createElement('img');
  photo.src = image;
  photo.alt = '';
  photo.width = 400;
  photo.height = 300;
  photo.loading = 'lazy';
  const titre = document.createElement('h3');
  const lien = document.createElement('a');
  lien.href = `produit.html?id=${encodeURIComponent(id)}`;
  // Le nom reste du texte, même s’il contient des balises HTML.
  lien.textContent = nom;
  titre.append(lien);
  const tarif = document.createElement('p');
  tarif.className = 'prix';
  tarif.textContent = formaterPrix(prix);
  const disponibilite = document.createElement('p');
  disponibilite.className = stock === 0 ? 'stock stock-rupture' : 'stock';
  disponibilite.textContent = stock === 0 ? 'En rupture de stock' : 'En stock';
  const bouton = document.createElement('button');
  bouton.type = 'button';
  bouton.className = 'btn';
  bouton.dataset.id = id;
  bouton.disabled = stock === 0;
  bouton.textContent = stock === 0 ? 'Indisponible' : 'Ajouter au panier';
  carte.append(photo, titre, tarif, disponibilite, bouton);
  ligne.append(carte);
  return ligne;
}

export function afficherCatalogue(liste, selection) {
  liste.replaceChildren();
  selection.forEach((produit) => liste.append(creerCarte(produit)));
}

export function brancherAjouts(liste, message) {
  // Un seul écouteur fonctionne aussi pour les cartes recréées après le tri.
  liste.addEventListener('click', (event) => {
    const bouton = event.target.closest('button[data-id]');
    if (!bouton || !liste.contains(bouton) || bouton.disabled) return;
    const ok = ajouter(bouton.dataset.id);
    mettreAJourIcone();
    message.textContent = ok ? 'Produit ajouté au panier.' : 'Ajout impossible : limite de 99 articles par produit.';
  });
}

export function initialiserCatalogue() {
  const liste = document.querySelector('#liste-produits');
  if (!liste) return;
  const choix = document.querySelector('#choix-tri');
  const caseDispo = document.querySelector('#dispo-seulement');
  const nombre = document.querySelector('#nb-produits');
  const url = new URL(location.href);
  choix.value = lireTri(url.searchParams.get('tri'));
  caseDispo.checked = url.searchParams.get('disponible') === 'oui';
  // On filtre, on trie, puis on refait les cartes avec les produits retenus.
  const rafraichir = () => {
    const selection = caseDispo.checked ? produits.filter((produit) => produit.stock > 0) : produits;
    afficherCatalogue(liste, trierPar(selection, choix.value));
    nombre.textContent = `${selection.length} produits`;
    url.searchParams.set('tri', choix.value);
    if (caseDispo.checked) url.searchParams.set('disponible', 'oui');
    else url.searchParams.delete('disponible');
    history.replaceState(null, '', url);
  };
  choix.addEventListener('change', rafraichir);
  caseDispo.addEventListener('change', rafraichir);
  brancherAjouts(liste, document.querySelector('#message-catalogue'));
  document.querySelector('.pagination').hidden = true;
  rafraichir();
}

export function initialiserSelections() {
  const accueil = document.querySelector('#selection-accueil');
  if (accueil) {
    const selection = trierPar(produits, 'recommande').filter((produit) => produit.stock > 0).slice(0, 4);
    afficherCatalogue(accueil, selection);
    brancherAjouts(accueil, document.querySelector('#message-selection-accueil'));
  }
  const similaires = document.querySelector('#selection-similaires');
  if (similaires) {
    const id = document.querySelector('.fiche').dataset.id;
    const selection = trierPar(produits, 'recommande').filter((produit) => produit.id !== id).slice(0, 6);
    afficherCatalogue(similaires, selection);
    brancherAjouts(similaires, document.querySelector('#message-selection-similaires'));
  }
}
