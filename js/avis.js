const element = (nom, classe, texte) => {
  const noeud = document.createElement(nom);
  if (classe) noeud.className = classe;
  if (texte !== undefined) noeud.textContent = texte;
  return noeud;
};

export async function chargerAvis() {
  const fiche = document.querySelector('.fiche');
  const liste = document.querySelector('#liste-avis');
  const etat = document.querySelector('#etat-avis');
  if (!fiche || !liste || !etat) return;
  try {
    const reponse = await fetch('data/avis.json');
    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
    const donnees = await reponse.json();
    if (!Array.isArray(donnees)) throw new Error('Format JSON invalide');
    const avis = donnees.filter((avisClient) => avisClient
      && avisClient.produit === fiche.dataset.id
      && Number.isInteger(avisClient.note) && avisClient.note >= 1 && avisClient.note <= 5
      && typeof avisClient.auteur === 'string' && typeof avisClient.texte === 'string');
    liste.replaceChildren();
    avis.forEach(({ auteur, note, texte }) => {
      const ligne = element('li', 'avis-carte');
      const nom = element('strong', 'avis-auteur', auteur);
      const etoiles = element('span', 'avis-etoiles', '★'.repeat(note));
      etoiles.setAttribute('aria-hidden', 'true');
      const noteAccess = element('span', 'visually-hidden', `${note} sur 5`);
      const contenu = element('p', 'avis-texte', texte);
      ligne.append(nom, etoiles, noteAccess, contenu);
      liste.append(ligne);
    });
    const moyenne = avis.length ? avis.reduce((total, avisClient) => total + avisClient.note, 0) / avis.length : 0;
    etat.textContent = avis.length
      ? `${avis.length} avis · note moyenne ${moyenne.toFixed(1).replace('.', ',')} sur 5.`
      : 'Aucun avis pour le moment.';
  } catch (erreur) {
    console.error('Chargement des avis impossible.', erreur);
    liste.replaceChildren();
    etat.textContent = 'Les avis ne sont pas disponibles pour le moment.';
  }
}

