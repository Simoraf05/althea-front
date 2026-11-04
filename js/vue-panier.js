import { panier, changerQuantite, supprimer, calculerTotal, stockageDisponible } from './panier.js';
import { trouverProduit } from './produits.js';
import { formaterPrix } from './outils.js';
import { mettreAJourIcone } from './icone-panier.js';

// On refait les lignes et le total à partir du contenu du panier.
export function afficherPanier() {
  const liste = document.querySelector('#lignes-panier');
  if (!liste) return;
  const actif = document.activeElement;
  const focusDansListe = liste.contains(actif);
  const idActif = actif.id;
  liste.replaceChildren();
  panier.forEach(({ id, quantite }) => {
    const produit = trouverProduit(id);
    const ligne = document.createElement('li');
    ligne.className = 'ligne-panier';
    ligne.dataset.id = id;
    const nom = document.createElement('h2');
    nom.textContent = produit.nom;
    const prix = document.createElement('p');
    prix.textContent = `Prix unitaire : ${formaterPrix(produit.prix)}`;
    const label = document.createElement('label');
    label.htmlFor = `quantite-${id}`;
    label.textContent = `Quantité pour ${produit.nom}`;
    const champ = document.createElement('input');
    champ.id = `quantite-${id}`;
    champ.type = 'number';
    champ.min = '0';
    champ.max = '99';
    champ.step = '1';
    champ.value = String(quantite);
    const sousTotal = document.createElement('p');
    sousTotal.textContent = `Sous-total : ${formaterPrix(Math.round(produit.prix * 100) * quantite / 100)}`;
    const bouton = document.createElement('button');
    bouton.type = 'button';
    bouton.className = 'btn';
    bouton.textContent = 'Supprimer';
    bouton.setAttribute('aria-label', `Supprimer ${produit.nom}`);
    ligne.append(nom, prix, label, champ, sousTotal, bouton);
    liste.append(ligne);
  });
  document.querySelector('#panier-vide').hidden = panier.length !== 0;
  document.querySelector('#total').textContent = formaterPrix(calculerTotal());
  mettreAJourIcone();
  // Une mise à jour venant d’un autre onglet ne doit pas faire perdre le focus.
  if (focusDansListe) {
    const nouveauChamp = document.getElementById(idActif);
    if (nouveauChamp) nouveauChamp.focus();
    else document.querySelector('#titre-panier').focus();
  }
}

export function initialiserPanier() {
  const liste = document.querySelector('#lignes-panier');
  if (!liste) return;
  const message = document.querySelector('#message-panier');
  if (!stockageDisponible()) message.textContent = 'Le stockage est indisponible : le panier ne sera pas conservé après fermeture.';
  liste.addEventListener('change', (event) => {
    if (!event.target.matches('input')) return;
    const champ = event.target;
    const id = champ.closest('li').dataset.id;
    const quantite = champ.value.trim() === '' ? NaN : Number(champ.value);
    if (!changerQuantite(id, quantite)) {
      message.textContent = 'Saisissez un entier entre 0 et 99 (0 retire le produit).';
      champ.value = String(panier.find((ligne) => ligne.id === id).quantite);
      champ.focus();
      return;
    }
    afficherPanier();
    message.textContent = quantite <= 0 ? 'Produit retiré du panier.' : 'Quantité mise à jour.';
    const nouveauChamp = document.getElementById(`quantite-${id}`);
    if (nouveauChamp) nouveauChamp.focus();
    else document.querySelector('#titre-panier').focus();
  });
  liste.addEventListener('click', (event) => {
    const bouton = event.target.closest('button');
    if (!bouton || !liste.contains(bouton)) return;
    supprimer(bouton.closest('li').dataset.id);
    afficherPanier();
    message.textContent = 'Produit supprimé du panier.';
    document.querySelector('#titre-panier').focus();
  });
  afficherPanier();
}
