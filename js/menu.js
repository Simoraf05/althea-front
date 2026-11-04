export function initialiserMenu() {
  const bouton = document.querySelector('.menu-bouton');
  if (!bouton) return;
  const mobile = matchMedia('(max-width: 47.999rem)');
  const fermer = () => bouton.setAttribute('aria-expanded', 'false');
  fermer();
  bouton.addEventListener('click', () => {
    const ouvert = bouton.getAttribute('aria-expanded') === 'true';
    bouton.setAttribute('aria-expanded', String(!ouvert));
  });
  // Échap ferme le menu et remet le focus sur son bouton.
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mobile.matches && bouton.getAttribute('aria-expanded') === 'true') {
      fermer();
      bouton.focus();
    }
  });
  // En passant au mobile, on referme le menu sans cacher le focus dedans.
  mobile.addEventListener('change', () => {
    if (mobile.matches && document.activeElement.closest('.menu')) bouton.focus();
    fermer();
  });
}
