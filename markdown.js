/* enregistrer sur le navigateur du user des données
pour les utiliser plus tard quand il revient sur le site.

MEMORISER LE TEXTE FRAPPE SUR UN SITE, POUR LE REAFFICHER SI L'UTILISATEUR 
QUITTE ET REVIENS SUR LA PAGE*/

const text = document.querySelector("textarea");
const render = document.querySelector("div");

//avant de lancer mon keyup, j'indique à mon navigateur de regarder si il y a des données dans le localStorage que je définirai plus bas
text.value = localStorage.getItem("texte");

if (text.value){// a réviser au soir
    render.innerHTML = marked( localStorage.getItem("texte"));
}

//des que le user tape quelque chose, il s'affichera dans le rendu


text.addEventListener("keyup", function(){
    // render.innerHTML = text.value;//j'affiche sous mon textarea ce qu'écrit mon user.
    //je met en commentaire mon code précédent et je le complète
    // render.innerHTML = marked(text.value);//tout ce qui va être inscrit par mon user sera converti en markdown
    //j'enregistre maintenant les données dans le storage local
    //de l'utilisateur. Je met mon code précédent en commentaire et je le complète
    localStorage.setItem("texte", texte.value);// j'envoie sur mon local storage les données que j'enferme dans mon container "texte"
    render.innerHTML = marked(text.value);
})