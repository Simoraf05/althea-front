export function initialiserCarrousel() {
  const zone = document.querySelector('#une-defile');
  if (!zone) return;
  const precedent = document.querySelector('.precedent');
  const suivant = document.querySelector('.suivant');
  const pastilles = [...document.querySelectorAll('.pastilles a')];
  const defiler = (sens) => {
    const reduit = matchMedia('(prefers-reduced-motion: reduce)').matches;
    zone.scrollBy({ left: sens * zone.clientWidth, behavior: reduit ? 'auto' : 'smooth' });
  };
  precedent.addEventListener('click', () => defiler(-1));
  suivant.addEventListener('click', () => defiler(1));
  // La pastille suit aussi les déplacements au doigt et au clavier.
  const observateur = new IntersectionObserver((entrees) => {
    entrees.forEach((entree) => {
      if (!entree.isIntersecting) return;
      pastilles.forEach((lien) => {
        if (lien.hash === `#${entree.target.id}`) lien.setAttribute('aria-current', 'true');
        else lien.removeAttribute('aria-current');
      });
    });
  }, { root: zone, threshold: 0.6 });
  [...zone.children].forEach((slide) => observateur.observe(slide));
}
