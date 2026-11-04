import { produits, trouverProduit } from './produits.js';
import { trierCatalogue } from './tri.js';
import { el, formaterPrix } from './outils.js';
import { ajouter } from './panier.js';
import { mettreAJourIcone } from './icone-panier.js';
import { afficherCatalogue, brancherAjout } from './catalogue.js';

export function initialiserFiche() {
  const fiche = document.querySelector('.fiche');
  if (!fiche) return;
  // L'id vient de l'adresse (produit.html?id=oxymetre) : liste blanche. Un id inconnu donne le produit de la page.
  const produit = trouverProduit(new URLSearchParams(location.search).get('id')) ?? trouverProduit(fiche.dataset.id);
  if (!produit) return;
  fiche.dataset.id = produit.id; // avis.js relit cet id
  const epuise = produit.stock === 0;

  // Tout ce qui vient des données s'écrit avec textContent (ou une propriété) : jamais lu comme du HTML.
  document.title = `${produit.nom} · Althea Systems`;
  fiche.querySelector('h1').textContent = produit.nom;
  const dernier = document.querySelector('.ariane li:last-child a');
  dernier.textContent = produit.nom;
  dernier.href = `produit.html?id=${encodeURIComponent(produit.id)}`;
  fiche.querySelector('.description').textContent = produit.description;
  fiche.querySelector('.caracteristiques dl').replaceChildren(
    ...produit.caracteristiques.flatMap(([nom, valeur]) => [el('dt', '', nom), el('dd', '', valeur)]),
  );
  fiche.querySelector('#section-tailles').hidden = !produit.brassard;

  const photos = produit.galerie ?? [{ fichier: produit.image, alt: `Illustration : ${produit.nom}` }];
  fiche.querySelector('.galerie').replaceChildren(...photos.map(({ fichier, alt, srcset }) => {
    const img = el('img');
    img.src = `img/${fichier}`;
    img.alt = alt;
    if (srcset) {
      img.srcset = srcset;
      img.sizes = '(min-width: 64rem) 50vw, 100vw';
    }
    const li = el('li');
    li.append(img);
    return li;
  }));

  const formulaire = fiche.querySelector('.achat form');
  const champ = formulaire.querySelector('#quantite');
  const bouton = formulaire.querySelector('button');
  const message = formulaire.querySelector('.message-achat');
  const maximum = Math.min(10, produit.stock);
  const stock = fiche.querySelector('.stock');
  stock.textContent = epuise ? 'En rupture de stock' : 'En stock';
  stock.classList.toggle('stock-rupture', epuise);
  fiche.querySelector('.fiche-infos .prix').textContent = `${formaterPrix(produit.prix)} TTC`;
  champ.disabled = epuise;
  champ.max = String(maximum);
  bouton.disabled = epuise;
  bouton.textContent = epuise ? 'Indisponible' : 'Ajouter au panier';
  formulaire.querySelector('.aide-formulaire').hidden = !epuise;

  formulaire.addEventListener('submit', (event) => {
    event.preventDefault(); // pas de rechargement
    if (epuise) return;
    const quantite = Number(champ.value); // le champ donne du texte
    // min et max du HTML se suppriment dans l'inspecteur : on revérifie ici (règle n° 2)
    if (!Number.isInteger(quantite) || quantite < 1 || quantite > maximum) {
      message.textContent = `Entrez une quantité entière entre 1 et ${maximum}.`;
      champ.focus();
      return;
    }
    for (let i = 0; i < quantite; i++) ajouter(produit.id);
    message.textContent = `${quantite} × ${produit.nom} ajouté au panier.`;
    mettreAJourIcone();
  });

  const similaires = document.querySelector('#liste-similaires');
  if (similaires) {
    afficherCatalogue(similaires, trierCatalogue(produits.filter((p) => p.id !== produit.id)).slice(0, 4));
    brancherAjout(similaires);
  }
}
