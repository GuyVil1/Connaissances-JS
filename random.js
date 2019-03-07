//avec ce random, on tire un nombre au sort compris entre 0 et 1

let random = Math.random();
console.log(random);

//si je veux un nombre compris entre 0 et 10, j'ai juste à multiplier le random par le nombre max que je désire

let random2 = Math.random() * 10;
console.log(random2);

//pour si je veux un nombre entier, j'utilise un Math.flor
//pour arrondir au premier entier en dessous

let random3 = Math.floor(Math.random()*10);
console.log(random3);

/*
si je veux simuler le tirage d'un dés à 6 faces par exemple, et donc exclure le 0
de mon tirage, je rajoute 1 à mon random
*/

let des6 = Math.floor(Math.random() * 6) + 1;
console.log(des6);

//choisir un nombre aléatoire compris entre un min et un max

function rangRangdom(min, max){

    let result = Math.floor((Math.random() * (max -min + 1) + min));
    return result;

}
console.log(rangRangdom(5, 10));

//exercices faire la même chose pour des nombre de 50 à 100 

function rangdom100(min2, max2){
    return Math.floor((Math.random() * (max2 - min2 + 1) + min2));
}
console.log(rangdom100(50,100));

//exercices de 100 à 150

function random150(min3, max3){
    return Math.floor((Math.random() * (max3 - min3+ 1) + min3));
}

console.log(random150(100, 150));// ok connaissance + que validée.

/*exercice final: mélanger un array
retourner l'array melénagé*/


function randomize(arr){

    let temp = 0;
    let random = 0;

    for (let i = 0; i < arr.length; i++){//a chaque tour, il doit me générer un nombre aléatoire
        random = Math.floor(Math.random() * arr.length);//on a un nombre entre 0 et 7 (vu mon arr demandé dans le console.log)
        //si je suppose que arr[i]=3
        //et que arr[random]=1
        temp = arr[i];//je stocke 3 dans ma variable temporaire
        arr[i] = arr[random];//3devient 1 mais 3 est toujours dans ma variable temp
        arr[random] = temp;// 1 devient 3, mes variables sont interverties
    }
    return arr;

}
console.log(randomize([1,2,3,4,5,6,7,8]));

/*je refais l'exercices*/

function randomize2(arr3){
    let temp =0;
    let random =0;

    for (let i = 0; i < arr3.length; i++){

        random = Math.floor (Math.random() * arr3.length);
        temp = arr3[i];
        arr3[i] = arr3[random];
        arr3[random] = temp;

    }
    return arr3;
}

console.log(randomize2([1,2,3,4,5]));


//le map

let table = [1,2,3,4,5];

let tabPlus1 = table.map(function(nombre){//même chose qu'une boucle agissant sur un tableau, le .map va agir sur chacune des valeur du tableau et s'arreter quand il a fini
    return nombre + 1;//on va juste rajouter 1 sur chacune des valeurs du tableau
});

console.log(tabPlus1);
