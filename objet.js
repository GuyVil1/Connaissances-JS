let chevalier = {//je défini un ibjet chevalier qui a des caractéristiques
    "force": 15,
    "vitesse": 5,
    "faiblesse": ["mage", "ninja"],
};//important terminer la édclaration de notre objet par un;

console.log(chevalier);

//si je veux accèder à une propriété de l'objet:
console.log(chevalier.force);
console.log(chevalier.vitesse);

//je peux aussi utiliser:

console.log(chevalier["force"]); //utile si c'est mon user qui clique sur un attribut
//du chevalier pour en connaître les caractéristiques exemple:

let requete = "force";//mon user à cliqué sur force par exemple
console.log(chevalier[requete]);

//pour traiter un tableau
console.log(chevalier.faiblesse[0]);

//AJOUTER OU SUPPRIMER DES PARAMETRE A UN OBJET

//exemple: mon chevalier à gagné un niveau, ses attributs vont changer

chevalier.force = 20;
chevalier.vitesse = 6;
console.log(chevalier.force + " " + chevalier.vitesse);

//mon chevalier à trouvé une épée, il a donc une caractéristique en plus

chevalier.arme = "épée";
console.log(chevalier);

//il combat beaucoup, son épée se casse:

delete chevalier.arme;
console.log(chevalier);

//Vérifier si mon objet à une propriété:

console.log(chevalier.hasOwnProperty("arme"));//me renvoie un boleans

//Le Json est un objet qui va nous permettre d'avoir des objets dans des objets
// je prends un autre chevalier:

let chevalier2 = {
    "force": 10,
    "vitesse": 3,
    "faiblesse": ["guerrier", "mage", "spectre"],
    "compagnon" : {//je déclare deux compagnons qui accompagnent mon chevalier:
        "animal": {  //un animal qui a ses propres caractéristiques
        "type": "chien",
        "attaque": 15,
        "vitesse": 8,
        "faiblesse": ["loup", "puma"],
        },
        "aide": {//idem pour mon écuyer
            "type": "écuyer",
            "force": 2,
            "vitesse": 1,
            "faiblesse": ["guerrier", "mage", "spectre"],
        }    
    }
};

console.log(chevalier2);
//si je veux accéder à mes compagnons:

console.log(chevalier2.compagnon);

//si je veux accéder à chacun de mes compagnons:

console.log(chevalier2.compagnon.aide);
console.log(chevalier2.compagnon.animal);