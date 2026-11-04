/* Aide au développement (script classique, il marche même hors serveur).
   Ouvert par double clic (file://), le navigateur bloque les modules JavaScript : ce bandeau explique pourquoi. */
if (location.protocol === 'file:') {
  document.addEventListener('DOMContentLoaded', function () {
    var message = document.createElement('p');
    message.className = 'alerte-serveur';
    message.setAttribute('role', 'alert');
    message.textContent = 'Page ouverte directement depuis le disque : le JavaScript (catalogue, carrousel, panier) est bloqué. '
      + 'Ouvrez le dossier dans VS Code, puis clic droit sur le fichier HTML → « Open with Live Server ».';
    document.body.prepend(message);
  });
}
