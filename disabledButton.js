//Exercice: Désactiver le boutton "tweeter" si le user entre plus de 280 caractere

const text = document.querySelector("textarea");
const btn = document.querySelector("button");

//keyup regarder quand une touche est relachée et son inverse: keydown
//on choisira keyup car si j'appuie sur une lettre sans la relacher, mon event va se relancer continuellement.

text.addEventListener("keyup", function(){
    btn.disabled  = text.value.length > 280 ? true : false;//condition ternaire: si la gradeur du texte est supérieure à 280
    //alors le button sera désactivé, sinon, il est actif
})