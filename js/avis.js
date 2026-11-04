export async function chargerAvis() {
  const liste = document.querySelector('#liste-avis');
  if (!liste) return;
  const etat = document.querySelector('#etat-avis');
  const id = document.querySelector('.fiche').dataset.id;
  try {
    // On attend le fichier des avis sans bloquer le reste de la page.
    const reponse = await fetch('data/avis.json');
    if (!reponse.ok) throw new Error(`HTTP ${reponse.status}`);
    const donnees = await reponse.json();
    if (!Array.isArray(donnees)) throw new Error('Format des avis incorrect');
    // On garde les avis du produit avec une note entière entre 1 et 5.
    const avis = donnees.filter((avis) => avis && avis.produit === id
      && Number.isInteger(avis.note) && avis.note >= 1 && avis.note <= 5
      && typeof avis.auteur === 'string' && typeof avis.texte === 'string');
    liste.replaceChildren();
    avis.forEach(({ auteur, note, texte }) => {
      const ligne = document.createElement('li');
      const nom = document.createElement('strong');
      nom.textContent = auteur;
      const etoiles = document.createElement('span');
      etoiles.setAttribute('aria-hidden', 'true');
      etoiles.textContent = ` ${'★'.repeat(note)}${'☆'.repeat(5 - note)} `;
      const annonce = document.createElement('span');
      annonce.className = 'visually-hidden';
      annonce.textContent = ` ${note} sur 5`;
      const commentaire = document.createElement('p');
      commentaire.textContent = texte;
      ligne.append(nom, etoiles, annonce, commentaire);
      liste.append(ligne);
    });
    const moyenne = avis.reduce((somme, avis) => somme + avis.note, 0) / avis.length;
    etat.textContent = avis.length ? `${avis.length} avis — note moyenne : ${moyenne.toFixed(1).replace('.', ',')} sur 5.` : 'Aucun avis pour ce produit.';
  } catch {
    etat.textContent = 'Les avis ne sont pas disponibles pour le moment.';
  }
}
