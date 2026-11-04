export function initialiserMenu() {
  const bouton = document.querySelector('.menu-bouton');
  if (!bouton) return;
  const ouvert = () => bouton.getAttribute('aria-expanded') === 'true'; // du texte : 'true'
  const regler = (valeur) => bouton.setAttribute('aria-expanded', String(valeur));
  regler(false); // sans JavaScript, l'attribut reste à true : le menu reste visible
  bouton.addEventListener('click', () => regler(!ouvert()));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && ouvert()) {
      regler(false);
      bouton.focus(); // on ne perd pas sa place
    }
  });
}
