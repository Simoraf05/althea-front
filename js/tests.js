import { formaterPrix } from './outils.js';
import { trierCatalogue, trierPar, lireTri } from './tri.js';
import { normaliser, filtrerProduits } from './recherche.js';

// Lancés seulement avec categorie.html?tests (voir main.js)
export function lancerTests() {
  const jeu = [
    { nom: 'A', prix: 30, stock: 3, prioritaire: false },
    { nom: 'B', prix: 20, stock: 0, prioritaire: true },
    { nom: 'C', prix: 10, stock: 5, prioritaire: true },
    { nom: 'D', prix: 40, stock: 0, prioritaire: false },
  ];
  const noms = (liste) => liste.map((p) => p.nom).join('');
  const avant = JSON.stringify(jeu);
  const essais = [
    ['prix 89.9', formaterPrix(89.9) === '89,90 €'],
    ['prix 24', formaterPrix(24) === '24,00 €'],
    ['épuisé à la fin', trierCatalogue(jeu).slice(-2).every((p) => p.stock === 0)],
    ['prioritaire en tête', trierCatalogue(jeu)[0].nom === 'C'],
    ['prioritaire épuisé à la fin', noms(trierCatalogue(jeu)) === 'CABD'],
    ['tableau d’origine inchangé', JSON.stringify(jeu) === avant],
    ['tri par prix, épuisés à la fin', noms(trierPar(jeu, 'prix-croissant')) === 'CABD'],
    ['tri inconnu = recommandé', lireTri('<script>') === 'recommande'],
    ['normaliser', normaliser(' StéThoscope ') === 'stethoscope'],
    ['filtre prix maximum', noms(filtrerProduits(jeu, { prixMax: 20 })) === 'BC'],
  ];
  essais.forEach(([nom, ok]) => console.assert(ok, `Échec : ${nom}`));
  const reussis = essais.filter(([, ok]) => ok).length;
  console.log(`Tests : ${reussis} / ${essais.length} réussis`);
}
