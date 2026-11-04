import { formaterPrix } from './outils.js';
import { trierCatalogue, trierPar, lireTri } from './tri.js';
import { normaliser, filtrerProduits } from './recherche.js';

export function lancerTests() {
  const liste = [
    { id: 'a', stock: 0, prioritaire: true, prix: 1 },
    { id: 'b', stock: 3, prioritaire: false, prix: 24 },
    { id: 'c', stock: 2, prioritaire: true, prix: 89.9 },
  ];
  const avant = JSON.stringify(liste);
  const tries = trierCatalogue(liste);
  const prix = trierPar(liste, 'prix-croissant');
  const essais = [
    ['prix avec décimales', formaterPrix(89.9) === '89,90 €'],
    ['prix entier', formaterPrix(24) === '24,00 €'],
    ['épuisé à la fin', trierCatalogue([{ stock: 0 }, { stock: 3 }])[1].stock === 0],
    ['prioritaire en tête', tries[0].id === 'c'],
    ['prioritaire épuisé à la fin', tries[2].id === 'a'],
    ['tableau d’origine conservé', JSON.stringify(liste) === avant],
    ['prix croissant, épuisé en dernier', prix[0].id === 'b' && prix[1].id === 'c' && prix[2].id === 'a'],
    ['tri inconnu', lireTri('<script>') === 'recommande'],
    ['recherche sans accent', normaliser(' StéThoscope ') === 'stethoscope'],
    ['filtre prix maximum', filtrerProduits([
      { nom: 'A', description: '', caracteristique: '', prix: 24, stock: 1 },
      { nom: 'B', description: '', caracteristique: '', prix: 89.9, stock: 1 },
    ], { prixMax: 50 }).length === 1],
  ];
  essais.forEach(([nom, ok]) => console.assert(ok, `Échec : ${nom}`));
  const reussis = essais.filter(([, ok]) => ok).length;
  const resultat = `Tests : ${reussis} / ${essais.length} réussis`;
  console.log(resultat);
  const message = document.createElement('p');
  message.id = 'resultats-tests';
  message.setAttribute('role', 'status');
  message.textContent = resultat;
  document.querySelector('main').prepend(message);
}
