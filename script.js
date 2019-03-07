window.onload = function(){ 

let nom = "Gui";
let age = "42";
let result = `Bonjour ${nom}, tu as ${age} ans`;
console.log(result);
console.log(nom.length);
console.log(nom[1]);
console.log(nom[nom.length - 1]);

let sats = ["attaque", "défense"];
let array = [nom, age, sats];

console.log(array[2][0]);
array[0] = "toto";
console.log(array);
array[2][1] = "puissance";
console.log(array);

let test = [1,2,3];
test.push(4,5,6);//ajoute les valeurs au tableau
console.log(test);

let pope =test.pop();//je retire la dernière donnée du tableau et je la stocke dans une variable
console.log(pope);
console.log(test);

test.push(pope);//je remplace la donnée retirée dans le tableau

console.log(test);

let debut = test.shift();//je retire le premier élement du tableau et le stock dans une variable
console.log(debut);
console.log(test);

test.unshift(debut);//je remet l'élement à la premiere place de mon tableau.
console.log(test);


//EXERCICE
// a partir des variable nom et prenom, creer un tableau dans lequel nous stockerons le nom
//le prenom, et les initiales. Afficher le résultat dans un console.log

let nom2 ="Vilain";
let prenom = "Guy"
let resultat = [];

resultat.push(nom2);
resultat.push(prenom);

console.log(resultat);
let tabName = [];
let tabPrenom = [];
tabName.push(nom2);
tabPrenom.push(prenom);

let initialName = nom2.substring(0,1);
console.log(initialName)
let initialePrenom = prenom.substring(0,1);
console.log(initialePrenom);

resultat.push(`${initialName}.${initialePrenom}.`);
console.log(resultat);

//Solution du cours:

let resultsoluce = [];

resultsoluce.push(nom2);
resultsoluce.push(prenom);

console.log(resultsoluce);

let initName = prenom[0] + nom2[0];

resultsoluce.push(initName);

console.log(resultsoluce);

/* 3ème option serait:

let initName = prenom[0] + "." + nom2[0] + ".";
resultSoluce.push(prenom, nom2, initName);*/


}