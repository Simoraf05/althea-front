import { produits } from './produits.js';
import { formaterPrix } from './outils.js';
import { trierCatalogue, trierPar, lireTri } from './tri.js';
import { normaliser, filtrerProduits } from './recherche.js';

export function lancerTests() {
  const prioritaire = { id: 'p', stock: 3, prioritaire: true, prix: 30 };
  const standard = { id: 's', stock: 2, prioritaire: false, prix: 10 };
  const epuise = { id: 'e', stock: 0, prioritaire: false, prix: 1 };
  const prioritaireEpuise = { id: 'pe', stock: 0, prioritaire: true, prix: 2 };
  const source = [standard, epuise, prioritaireEpuise, prioritaire];
  const trie = trierCatalogue(source);
  const disponiblesSous50 = filtrerProduits(produits, { prixMax: 50, dispo: true });
  const essais = [
    ['prix 89,90', formaterPrix(89.9) === '89,90 €'],
    ['prix 24,00', formaterPrix(24) === '24,00 €'],
    ['prioritaire en tête', trie[0] === prioritaire],
    ['épuisé à la fin', trie.at(-1) === prioritaireEpuise],
    ['prioritaire épuisé reste à la fin', trie.slice(-2).includes(prioritaireEpuise)],
    ['le tableau source reste intact', source[0] === standard && source[1] === epuise],
    ['tri prix garde les épuisés à la fin', trierPar(source, 'prix-croissant').slice(-2).every((p) => p.stock === 0)],
    ['tri inconnu devient recommandé', lireTri('<script>') === 'recommande'],
    ['recherche sans accent', normaliser(' StéThoscope ') === 'stethoscope'],
    ['prix maximum et disponibilité : 4 produits', disponiblesSous50.length === 4],
  ];
  essais.forEach(([nom, ok]) => console.assert(ok, `Échec : ${nom}`));
  const reussis = essais.filter(([, ok]) => ok).length;
  const statut = document.querySelector('#statut-tests');
  if (statut) {
    statut.textContent = `Tests : ${reussis} / ${essais.length} réussis`;
    statut.hidden = false;
  }
  console.log(`Tests : ${reussis} / ${essais.length} réussis`);
}

