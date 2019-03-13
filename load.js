/* Avec un event load, on va pouvoir attendre qu'un élement soit chargé avant de continuer une action
on peut aussi attendre d'afficher une page avant que toute la page ne soit chargée*/

const images = document.querySelectorAll('img');//je vais récupérer toutes mes balises images que je
//vais poser dans un array
const imagesArray = Array.from(images);

//je vais maintenant ajouter un événement load sur chacune de mes images avec un map

imagesArray.map((images, index) => images.addEventListener("load", function(){
    console.log(`Image n°${index +1}:ok`);//me permet de vérifier que les images ne sont jamais chargées
    //dans l'ordre que l'on pense, d'ou l'importance de mettre un load quand on l'estime nécéssaire?
}))
