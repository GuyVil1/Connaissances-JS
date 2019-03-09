//getElementsByTagName va aller chercher tout le contenu de la balise selectionnée pour le claquer à l'interieur
//d'un tableau en indice 0 (c'est un html connexion, pas vraiment un tableau en fait)

function go(){
    
    const title = document.getElementsByTagName("h1");
    console.log(title);

    const text = document.getElementsByTagName("p");
    console.log(text);


    //getElementsById, je vais maintenant sniper un élément de ma feuille html par son ID
    const title2 = document.getElementById("titre");
    console.log(title2);

    //3 méthodes pour déplacer des éléments sur notre page.

    // 1) insertBefore

    document.body.insertBefore(text[1], titre);//j'insère avant mon body, l'élément n° qui se trouve dans la
    //const text que j'ai créé précédement.

    //2) ajouter un élement à la fin

    document.body.appendChild(title[0]);// Je met le contenu de ma const title créé précédement à la fin de ma page

    //03) supprimer un element

    document.body.removeChild(buton);

}

function go2(){
    document.body.removeChild(buton2);

    const title = document.getElementsByTagName("h1");
    console.log(title);

    const text = document.getElementsByTagName("p");
    console.log(text);

    //Créer un texte et le claquer sur sont html

    //Je crée une constante dans laquelle l'action creer un texte sera incluse.
    const newText = document.createTextNode("Ceci est un nouveau texte");

    document.body.appendChild(newText);

    //remplacer un élément par un autre
    const newText2 = document.createTextNode("je remplace un texte EXISTANT");

    document.body.replaceChild(newText2, title[0]);//mon nouveau texte va replacer le contenu qui se trouve dans mon array0 title

}

function go3(){
    document.body.removeChild(buton3);

    const title = document.getElementsByTagName("h1");
    console.log(title);

    const text = document.getElementsByTagName("p");
    console.log(text);

    //ajouter du texte 

    function ajoutText(pseudo, monText){//je crée une fonction qui va contenir deux attribut 'pseudo' et monText

        const nouveauText = document.createElement("p");//cree une constante qui va créer un nouveau paragraphe "p"
        nouveauText.innerHTML = `Bonjour <strong>${pseudo}</strong>, ${monText}`;//le nouveau paragraphe créé contiendra...
        document.body.appendChild(nouveauText);//mon texte s'inscrira en bas de ma page.
    }
    pseudo = prompt('Quel est ton pseudo');// Je demande à l'utilisateur son pseudo
    monText = "Content de te voir ici";// je crée le contenu de monText
    ajoutText(pseudo, monText);//j'execute ma fonction
    
}

//changer un hypperlien par un autre
function go4(){
    document.body.removeChild(buton4);

    const title4 = document.getElementById('titre');
    const text4 = document.getElementsByTagName('p');

    const lien = document.body.getElementsByTagName("a"[0]);
    console.log(lien.getAttribute("href"));
    lien.setAttribute("href", "https://aftercoaching.be");//setAttribute doesn' wor
}
//modifier une liste d'élement d'un array

function go5(){
    document.body.removeChild(buton5);

    const texte = document.getElementsByTagName("p");

    const texteArray = Array.from(texte);// Je récupére le contenu des éléments p dans un tableau

    console.log(texteArray);

    //je remplace tout les élements par un texte

    texteArray.map(paragraphe => paragraphe.innerHTML = "ha ha ha je t'ai hacké");
//ES6-> le contenu du tableau couplé à map et une fonction paragraphe écrira sur le html mon nouveau texte
}