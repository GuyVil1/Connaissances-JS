//faire rebondir mon cadre texte à l'interieur de ma box
//1 récupérer les élément dont j'ai besoin 

const titre = document.querySelector("h1");//je récupère mon texte
const cadre = document.querySelector("div");//je récupère mon cadre
const maxHeigth = cadre.clientHeight;//je récupère la hauteur max de mon cadre
const maxWidth = cadre.clientWidth;//je récupère la largeur max de mon cadre.

console.log(maxHeigth, maxWidth);

//je passe titre en position relative pour pouvoir le faire bouger
titre.style.position = 'relative';
//je vais définir deux position de mon texte

let topPos = 0;
let leftPos = 0;

//je défnini la force de mon animation

let forceH = - 2;//la hauteur
let forceW = - 2;//la largeur

//je crée ma fonction animation

function animation(){
    //d'abord empêcher mon élement de sortir de mon cadre (sur la hauteur)
    if (topPos == 0){forceH *= -1 }//si la position haute vien toucher le bord, alors je change la direction
    //de l'animation (si la direction de l'anim est en négatif, elle passe en positif, et vice versa)
    else if(topPos == maxHeigth - titre.offsetHeight)(forceH *= -1)//sinon faire la même chose si l'élement touche le bord du bas. ATTENTION
    //pour la direction du bas, je dois enlever la hauteur de mon contenu au maxHeigth, sinon il va dépasser du bord bottom
//Je défini maitenant mon animation gauche/droite
    if (leftPos == 0){ forceW *= -1 }
    else if (leftPos == maxWidth - titre.offsetWidth){forceW *= -1}
    
    topPos += forceH;//je donne la direction de hauteur à mon element
    leftPos += forceW;
    titre.style.top = topPos + "px";//j'applique la propriété à mon élément
    titre.style.left = leftPos + "px";

    requestAnimationFrame(animation);//avec requestAnimationFrame, je lance mon animation je le déclare à l'intérieur de ma fonction pour
    //créer une boucle d'animation infinie
}

//avec requestAnimationFrame, je lance mon animation
requestAnimationFrame(animation);