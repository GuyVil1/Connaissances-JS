//selectionner le a et lui ajouter un eventlistener et faire un bête console.log

const lien = document.querySelector("a");

// lien.addEventListener("click", click => console.log("clic"));//je rajoute l'eventListener qui sera déclenché au clic, et activera la fonction clic qui fait un console.log

//Je peux supprimer un eventlistener, je vais mettre en commentaire ma fonction précédente.

function clic(){
    console.log("clic")
    //Dans la fonction, je vais retirer l'eventlistener pour qu'il ne puisse plus être appelé
    lien.removeEventListener("click", clic);//au click, je retire ma fonction clic
};
lien.addEventListener("click", clic);

//SURVEILLER LE CLAVIER DE L'UTILISATEUR

//Je vais rajouter un eventlistener sur ma page complète
//avec l'évement keypress, je vais centré mon attention sur ce que tape mon user
addEventListener("keypress", function(event){
    console.log(event);//console.log de la touche préssée par le user
//sur ce console.log, je vais obtenir tout le contenu de la saisie sous forme de tableau, 
//si je veux juste écrire la lettre poussée, je fais:
    console.log(event.key);

})

//AFFICHER UNE IMAGE AU CLIC

//afficher une image à l'endroit ou je vais cliquer.

addEventListener("click", function(event){
    console.log('clac');
    //avec clientX et clientY, je peux retrouver la position exacte ou le user à cliqué
    console.log(event.x, event.y);
    const image = document.createElement("img");//je crée une constante image qui créera un element img
    image.setAttribute("src", "trollface.png");//je donne l'attribut src="trollface.png"
    // document.body.appendChild(image);//j'affiche mon image sur ma page html

    //a ce stade, l'image apparait bien, mais elle est affichée en queue de mon body, pour l'afficher au click, je rajoute un style CSS
    //qui impliquera mon clientX et clientY. 
    //Je met en commentaire ma dernière entrée.

    image.style.position = "absolute"; //je met mon image en absolute
    image.style.top = event.y + "px";//j'applique la position en hauteur (je n'oublie pas de rajouter en px, nous sommes en css)
    image.style.left = event.x + "px";//j'applique la position en left
    document.body.appendChild(image);//je fais apparaître mon image

    /*
     a ce stade, mon image va bien s'afficher, au click, correspondra la position 0,0 de mon image.
    au lieu de faire la position event.y et event.x, j'aurai pour inclure la taille de mon image dans une constante
    et faire un event.y - size / 2 +"px" pour que mon image soit centrée sur mon clic
    */
    image2 = document.createElement("img");
    const size = 100;
    image2.setAttribute("src", `http://lorempixel.com/${size}/${size}`);

    image2.style.position = "absolute"; 
    image2.style.top = event.y - size / 2 + "px";
    image2.style.left = event.x - size / 2 + "px";
    document.body.appendChild(image2);

    //mon trollface va s'afficher en position 0.0
    //mon image lorempixel va s'afficher au centre de ma souris
    

});

//INTERESSANT, pour trouver l'équivalent d'un lorem ipsum en image:
// http://lorempixel.com/100/100