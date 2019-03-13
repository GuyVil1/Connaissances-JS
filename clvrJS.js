const texte = document.querySelector("textarea");//Je selection le contenu de textarea
const txt = [];//stocker le contenu qui sera tapé par le user
const voyelles = ["a","e","i","o","u","y"];//Je stocke les voyelles dans une tableau de manière à pouvoir faire une vérification et les enlever
// du contenu qu'aura tapé mon user


//Vérifier ce qu'a tapé mon user

texte.addEventListener("keypress", function(event){//j'ajoute un evenement keypress sur ma page
    console.log(event.key);//log de verif pour voir si mon event est bien suiv
    const key = event.key;//Je stocke les frappes de mon user dans un tableau
    if(!voyelles.includes(key))//si une frappe est contenue dans mon array voyelles
    //mais avec le ! avant voyelles.includes(key), le javascript fera l'inverse de ce qui est prévu
    {
        txt.push(key);
        console.log(txt.join(""));//avec le joint("") je vais joindre le contenu de text en gros coller tout les éléments
        //du tableau dans une chaine de caractére
        console.log(txt.join("-"));//là je join les éléments de mon tableau mais en rajoutant un - entre chaque caractére

    }
})