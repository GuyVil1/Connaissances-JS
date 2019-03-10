const bar = document.querySelector('.bar');//je vais sniper la class bar qui va me permettre d'agir sur la div fixée
//en haut de ma page.

addEventListener('scroll', function(){//j'ajoute un event scroll sur ma page et une fonction 
/*je vais avoir besoin de connaître la taille complète de ma page

scrollheight = taille de ma page
innerheight = taille de notre affichage actuel de la page
Je soustrait la taille de ma page à la taille de mon affichage que je stock dans une
constante
*/
    const max = document.body.scrollHeight - innerHeight;
/*
je vais créer une constante %tage que je vais pouvoir appeler dans un style css
pageYoffset nous donne la position de notre scroll vertical
son opposé est pageXoffset pour le scroll horizontal.
*/
    const pourcentage = pageYOffset / max * 100;

//je peux maintenant appliquer mon style à ma classe bar
    bar.style.width = pourcentage + "%";
    console.log(innerHeight, pageYOffset);
})