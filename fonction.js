function maFonction()//création d'une fonction primaire pour additionner deux chiffre
{
    console.log(2+3);
}

maFonction();

function maFonction2(num)//création d'une fonction avec l'attribut num que je définirai
{//quand j'appellerai ma fonction
    console.log(2 + num)
}

maFonction2(8);//num aura 8 comme valeur
maFonction2(12);//cette fois-ci 12

//création d'une fonction pour soustraire deux chiffres

function substract(a, b)
{
    console.log(a - b);
}

substract(8, 2);

//je peux aller plus loin en demander à l'utilsateur de choisir ses nombres:
/*
a = prompt('donne un chiffre');
b = prompt("donne un autre chiffre");

substract(a, b);*/

//retourner une valeur

function substract2(a, b)
{
    return `le résultat de la soustraction est: ${a - b}.`;//permet de transformer notre fonction en variable
    return a - b;
}

let resultat = substract2(8, 6);

console.log(resultat);

/*Exercices pratique faire la moyenne de deux variables au moyen d'une fonction*/

let note1 = 17;
let note2 = 14;

function moyenne(a, b)
{
    return `La moyenne des deux notes est: ${(a + b)/2}.`;
}

console.log(moyenne(note1, note2));

//la condition ternaire

/*
en gros, c'est une autre manière de faire un if -> else
*/
let a=2;
let b=1;

console.log(a == b ? "vrai" : "faux");// estce que a = b? si oui, on écrit vrai, si pas faux.
//dans ce cas la valeur renvoyée sera fausse

a=2;
b=2;

console.log(a == b ? "vrai" : "faux");
//dans ce cas, la valeur renvoyée sera vrai

let age = 17;
let majeur = 18;

console.log( age >=majeur ? "Ok rentre !" : "Dégage de là !");

//on peut rajouter plusieurs condition en rajoutant un "ou" ou un "et"

age = 18;
majeur = 18;
genre = "garcon";

console.log( age >=majeur && genre == 'fille' ? "Ok rentre !" : "Dégage de là !")

// et s'écrit && ou s'écrit || (alt1)


/* Exercice pratique caculer moyenne V2
même chose que moyenne v1 mais si moyenne >15 -> très bien
si >10 --> bien
si <10 --> echec
*/


function level(arr)
{
    return (arr[0] + arr[1] + arr[2]) / 3;
}

resultat = level(([12, 8, 7]))

console.log(resultat);

if(resultat > 15)
{
    console.log("Très bien");
}
else if(resultat >= 10)
{
    console.log("bien");
}
else if(resultat<10)
{
    console.log("Vos parents sont convoqués à la direction");
}

