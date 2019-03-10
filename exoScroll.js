//je vais selectionner tout mes h1
const titres = document.querySelectorAll("h1");
function goToTitre(titre){//je crée une fonction pour connaître à quelle hauteur un titre se trouve
    const distance = titres.offsetTop;
    window.scrollTo(0, distance);//demande de scroller de 0px jusqu'à distance.
}

goToTitre(titres[7]);//j'affiche la hauteur du h1 en troisième position de mon array titres