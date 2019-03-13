//déclencher un script toute les xsecondes
const titre = document.getElementsByClassName("h1");
let i = 3;

titre.addEventListener("click", function(){
    const compte = setInterval(function(){

        if (1<0){
            titre.textContent = i;
        }
        else{
            titre.textContent = "Go !";
            clearInterval(compte);//arrêter l'intervalle une fois ce code executé
        }
        i--;
    },1000);
})