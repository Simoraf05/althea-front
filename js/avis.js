import { el } from './outils.js';

const noteValide = (n) => Number.isInteger(n) && n >= 1 && n <= 5;

function creerAvis({ auteur, note, texte }) {
  const etoiles = el('span', 'etoiles', '★'.repeat(note) + '☆'.repeat(5 - note));
  etoiles.setAttribute('aria-hidden', 'true'); // un dessin : le lecteur d'écran lit « 4 sur 5 »
  const li = el('li');
  const ligne = el('p');
  ligne.append(el('strong', '', auteur), etoiles, el('span', 'visually-hidden', `${note} sur 5`));
  li.append(ligne, el('p', '', texte)); // tout en textContent : un avis est écrit par un client
  return li;
}

export async function chargerAvis() {
  const fiche = document.querySelector('.fiche');
  const etat = document.querySelector('#etat-avis');
  const liste = document.querySelector('#liste-avis');
  if (!fiche || !etat || !liste) return;
  try {
    const reponse = await fetch('data/avis.json');
    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`); // fichier absent (404)
    const tous = await reponse.json();
    const miens = tous.filter((a) => a && a.produit === fiche.dataset.id && noteValide(a.note)
      && typeof a.auteur === 'string' && typeof a.texte === 'string');
    liste.replaceChildren(...miens.map(creerAvis));
    if (miens.length === 0) {
      etat.textContent = 'Aucun avis pour le moment.';
      return;
    }
    const moyenne = miens.reduce((somme, a) => somme + a.note, 0) / miens.length;
    etat.textContent = `${miens.length} avis, note moyenne ${moyenne.toFixed(1).replace('.', ',')} sur 5.`;
  } catch (erreur) {
    console.error(erreur); // pour le développeur
    etat.textContent = 'Les avis ne sont pas disponibles pour le moment.'; // pour le client
  }
}
