//comment récupérer la taille en largeur et en hauteur d'un élément en vue de le modifier//
function go(){
    const titre = document.getElementById("titre");

    document.body.removeChild(buton);


    console.log(titre.offsetHeight);//je vais récupérer la hauteur de mon bloc titre
    console.log(titre.offsetWidth);//la largeur
    console.log(titre.offsetLeft, titre.offsetTop, titre.offsetParent)//voici les autres données que je peux récup

    /*je peux aussi récolter ces données avec une autre fonction clientHeight ect
    La différence est que pour le offset, le calcul est fait pour l'élément dans sa globalité
    pour le client il va prendre ce qu'il y a à l'interieur de l'élément*/

    console.log(titre.clientHeight);
    console.log(titre.clientWidth, titre.clientLeft);

    /*dans la majorité des cas, on prendra le offset pour avoir la bordure comprise dans nos données*/

}

//MODIFIER LE STYLE

function go2(){

    const titre = document.getElementById("titre");

    document.body.removeChild(buton2);

    //Je modifie le style du titre

    titre.style.color = "blue";//je change la couleur du titre
    titre.style.fontFamily = "'Srisakdi', cursive";//je change la police du titre
    titre.style.boxShabow = "10px 10px 5px 0px rgba(148,21,148,1)";//et un petit box shadow en prime
    
}

/*UNE AUTRE METHODE POUR TROUVER UN ELEMENT
ON VA TOUT SIMPLEMENT UTILISER LES SELECTEURS ID ET CLASS et query selector*/

function go3(){

    document.body.removeChild(buton3);
    
    const text = document.getElementsByTagName("p");
    const lien = document.getElementsByTagName("a");

    const titre = document.querySelector("h1");//je sélectionne tout le contenu de h1
    console.log(titre);
    const titreID = document.querySelector('#titre');//une autre manière de faire
    console.log(titreID);

    const titrePara = document.querySelector(".para");//par classe maintenant
    console.log(titrePara);

    //queryselector va renvoyer uniquement le premier qu'il va trouver dans ma feuille html
    //queryselectorAll va lui parcourir tout le document pour trouver tout les éléments recherché

    const titreParaAll = document.querySelectorAll(".para")[1];
    console.log(titreParaAll);
    //Je récupérer un array qui contient tout les nod. je peux isoler un élement de la manière classique:
}
