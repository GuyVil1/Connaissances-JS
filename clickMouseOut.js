/*Créer un pop-up qui va apparaître au moment ou le visiteur va sortir sa
souris de notre fenêtre et l'inciter à rester sur notre site*/

const kdo = document.querySelector("h1");
//avec l'évement mouseout, je vais pouvoir savoir quand
addEventListener("mouseout", function(){
    kdo.style.display = "block";//je peux inscrire un petit mot sur la page, 
    alert("Tu ne veux pas rester encore un peu avec moi ??")//mais je peux aussi claquer une alerte avec mon contenu
});