//afficher un texte au bout de 5 secondes

const titre = document.querySelector("h1");

const texte = setTimeout(function(){
    document.body.style.background = "#FB1";
    titre.textContent = "le JAVASCRIPT? c'est trop de la balle";
    titre.style.opacity = 1;
},5000)