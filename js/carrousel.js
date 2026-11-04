export function initialiserCarrousel() {
  const zone = document.querySelector('#une-defile');
  if (!zone) return;
  const defiler = (sens) => {
    const doux = !matchMedia('(prefers-reduced-motion: reduce)').matches;
    zone.scrollBy({ left: sens * zone.clientWidth, behavior: doux ? 'smooth' : 'auto' }); // une largeur = une slide
  };
  document.querySelector('.precedent')?.addEventListener('click', () => defiler(-1));
  document.querySelector('.suivant')?.addEventListener('click', () => defiler(1));

  const pastilles = [...document.querySelectorAll('.pastilles a')];
  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;
      pastilles.forEach((a) => {
        if (a.hash === `#${entree.target.id}`) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    });
  }, { root: zone, threshold: 0.6 }); // slide visible à 60 %
  [...zone.children].forEach((slide) => observateur.observe(slide));
}
