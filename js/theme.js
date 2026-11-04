/* Mode sombre : bouton de l'en-tête.
   Au premier passage, on suit le réglage de l'appareil ; ensuite le choix de la personne est gardé
   (localStorage) et appliqué sur toutes les pages. Sans JavaScript, le CSS suit seulement l'appareil. */
(function () {
  'use strict';
  var racine = document.documentElement;
  var CLE = 'althea-theme';
  var systeme = window.matchMedia('(prefers-color-scheme: dark)');

  function lire() {
    try {
      var v = localStorage.getItem(CLE);
      return v === 'dark' || v === 'light' ? v : null;
    } catch (e) {
      return null;
    }
  }

  function ecrire(valeur) {
    try {
      localStorage.setItem(CLE, valeur);
    } catch (e) {
      /* stockage refusé : le choix ne durera que pour cette page */
    }
  }

  function themeActuel() {
    return lire() || (systeme.matches ? 'dark' : 'light');
  }

  function appliquer(theme) {
    racine.setAttribute('data-theme', theme);
    var bouton = document.querySelector('.theme-bouton');
    if (bouton) {
      bouton.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }
  }

  appliquer(themeActuel()); /* tout de suite, avant l'affichage : pas de flash */

  document.addEventListener('DOMContentLoaded', function () {
    var bouton = document.querySelector('.theme-bouton');
    if (!bouton) { return; }
    bouton.hidden = false;
    appliquer(themeActuel());
    bouton.addEventListener('click', function () {
      var nouveau = racine.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      ecrire(nouveau);
      appliquer(nouveau);
    });
  });

  systeme.addEventListener('change', function () {
    if (!lire()) { appliquer(themeActuel()); }
  });
})();
