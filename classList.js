const titre = document.querySelector("h1");
const liens = document.querySelectorAll("a");

//dans le premier "a", je claque une fonction qui va juste m'indiquer quelle classe est
//présente dans mon "titre" (donc dans la balise h1)

liens[0].addEventListener("click", function(){
    console.log(titre.classList);
});
//Mon console log me renvoie "" --> pas de classe

//Je vais changer de classe maintenant

liens[0].addEventListener("click", function(){
    titre.classList.add("fbi");//la classe fbi est définie dans ma feuille html
});
//je claque la fonction sur mon deuxième "a" et je retire la classe
liens[1].addEventListener("click", function(){
    titre.classList.remove("fbi");//la classe fbi est définie dans ma feuille html
});

//pour le 3ème "a", je fais un toggle (j'allume ou éteins --> si la classe existe, je la retire, si pas, je l'ajoute)

liens[2].addEventListener("click", function(){
    titre.classList.toggle("fbi");//la classe fbi est définie dans ma feuille html
});//enun mot: INTERRUPTEUR

