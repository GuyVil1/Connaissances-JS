//révision template Strings

const perso = {
    nom: "Guy Vilain",
    attaque: 15,
    arme: "épée",
}

const text = `${perso.nom} a une force de ${perso.attaque} et une ${perso.arme}.`;

console.log(text);

//cas pratique avec un perso 2 qui n'a pas de nom:

const perso2 = {
    attaque: 15,
    arme: "hache",
}

//je peux rajouter une condition ternaire et définir dans mon code que si une variable n'existe pas
//(dans ce cas-ci le nom dans mon objet, je peux forcer l'affichage d'un nom prédéfini)

const text2 = `${perso2.nom ? perso2.nom :"Jhon Snow"} est mon nom`;
//donc ici, j'affiche le nom de mon perso2, si perso2.nom existe ? tu l'affiche, si pas, tu écris "Jhon Snoww
console.log(text2);


//Les fonctions fléchées
// quelques manière de gagner des caractéres dans notre code grâce aux fonctions fléchées
//Pour un même code voici différentes manières de faire:
//traditionnellement je code de cette manière:

const arr = [1,2,3,4,5,6];
//je vais utiliser map pour ajouter 1 à toutes les valeur de mon tableau
const arrPlusUn = arr.map(function(nombre){//je défini ici ma fonction
    return `${nombre} + 1 = ${nombre + 1}`;
});

console.log(arrPlusUn);

// le même code en fonction fléchées

const arr2 = [1,2,3,4,5,6];

const arrPlusUn2 = arr2.map((nombre) =>{//je ne mets plus function devant (), je mets juste => après
    return `${nombre} + 1 = ${nombre + 1}`;
});

console.log(arrPlusUn2);

// on peut aller encore un peu plus loin:

const arr3 = [1,2,3,4,5,6];

const arrPlusUn3 = arr3.map(nombre =>{//Plus besoin de mettre les parenthèse
    return `${nombre} + 1 = ${nombre + 1}`;
});

console.log(arrPlusUn3);

//je peux retirer encore plus de chose:

const arr4 = [1,2,3,4,5,6,7];

const arrPlusUn4 = arr4.map( nombre => `${nombre} + 1 = ${nombre + 1}`);
//Je retire les accolades, je mets tout sur une même ligne, j'élimine le return.
//je lui donne un paramètre (nombre) qui est une fonction, donc implicitement, le navigateur sait
//qu'il va devoir retourner quelque chose
console.log(arrPlusUn4);

//!!attention, une fonction fléchée est toujours anonyme. pour transformer une fonction fléchée en fonction
//définie, je la met dans une constante. EXEMPLE:

const maFonction = () => console.log("coucou");

maFonction();

//METTRE DES PARAMETRES PAR DEFAUT DANS UNE FONCTION
//Partons d'une simple fonction qui affiche un nom

function sayMyName(name) {
    console.log(name);
}

sayMyName("Guy");

//si name est une valeur que doit rentrer un joueur par exemple et que celui-ci
//ne le rentre pas, on peut décider d'une valeur par défaut si la valeur attendue est manquante.

function sayMyName2(name = "No Name") {//je rajoute à name la valeur par défaut "No Name" qui sera affichée si l'utilisateur ne tape rien au moment voulu
    console.log(name);
}

sayMyName2();//ici l'utilisateur ne rentre pas son nom

//cette technique permet de ne plus avoir de valeur undefined lors de l'execution d'un code

//LE DESTRUCTURING AVEC UN OBJET

// va nous permettre de créer des variables à la volée.
// Je pars de nouveau de mes connaissances actuelles:

const player = {//j'ai un joueur avec plusieurs caractéristique
    nom: "John",
    attaque: 15,
    arme: "épée",
}

const nom = player.nom;//je vais stocker le nom dans une constante pour l'utiliser ensuite.

console.log(nom)

//si je veux que toutes les caractéristiques soient dans des constantes, je vais destructurer mon objet:

const player2 = {//j'ai un joueur avec plusieurs caractéristique
    nom2: "Guy",
    attaque2: 20,
    arme2: "hache",
}

const { nom2, attaque2, arme2} = player2;
//je crée une constante ou je snipe les données que je veux récupérer dans ma fiche player
// "=player2", j'indique dans quel objets le navigateur va pouvoir sniper les données.

console.log(nom2, attaque2, arme2);//j'affiche les données récupérées.

//je peux changer le nom de ma caractéristique:

const player3 = {
    nom3: "Daenerys",
    attaque3: 10,
    arme3: "Dragons",
}

const { nom3: prenom, attaque3: force, arme3: booster} = player3;// je vais chercher les caractéristiques, mais je les 
//appelle "prenom", "force" et "booster"

console.log(prenom, force, booster);

//En allant plus loin si des caractéristiques ne sont pas présentes dans un player, je peux
//claquer une caractéristique par défaut comme vu plus haut

const player4 = {
    nom4: "Tyrion",
    attaque4: 5,
}

const { nom4: surnom, attaque4: maitrise, arme4: special = "Main du roi"} = player4;// le joueur n'a pas d'arme
//mais il aura un spécial défini par défaut

console.log(surnom, maitrise, special);

//DESTRUCTURER UN ARRAY

const stats = [154, 12 , 78, 28, 54, 130]
// on destructurait un objet avec {}... On destructure le tableau avec []
const [attack, def, speed, magical] = stats;
//Je donne à chacune des valeur de mon tableau un nom, je fini par = et le nom du tableau à destructurer.
//les deux dernière valeurs de mon tableau ne sont pas snipée, mon navigateur va les ignorer lors du destructuring
console.log(attack, def, speed, magical);


//INTERVERTIR DES VALEURS

let maCarte = "Dracaufeu";
let taCarte = "Ratatta";
console.log(maCarte, taCarte);


//je veux échanger les deux valeurs, je peux utiliser la technique qui nous a déjà servi pour les random:

let temp = maCarte;//je stocke ma carte dans une variable temporaire
maCarte = taCarte;//je prends ta carte
taCarte = temp;//je rends macarte qui est dans la variable temporaire

console.log(maCarte, taCarte);

//avec le destructuring, je peux faire ça plus simplement:

let maCarte2 = "Pikachu";
let taCarte2 = "Mew";
console.log(maCarte2, taCarte2);

[maCarte2, taCarte2] = [taCarte2, maCarte2]//Vive le destructuring

console.log(maCarte2, taCarte2);

//ET DONC Melanger un array façon ES6:
// avant je faisait:


function randomize(arr) {
let tempo = 0;
let random = 0;

    for (let i = 0; i < arr.length; i++) {
        random = Math.floor(Math.random() * arr.length);
        tempo = arr[i];
        arr[i] = arr[random];
        arr[random] = tempo;
    }
    return arr;
}

console.log(randomize([1,2,3,4,5,6,7,8]));

//EN ES6 CA DONNERA:

function randomize2(es){
    for(let j = 0; j < es.length; j++){
        let hasard = Math.floor(Math.random() * es.length);
        [es[j], es[hasard]] = [es[hasard], es[j]];
    }
    return es;
}

console.log(randomize2([1,2,3,4,5,6,7,8]));
