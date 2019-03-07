//imbriquer une boucle dans une boucle


function plusUn(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            arr[i][j] += 1;
        }
    }
    return arr;
}
console.log(plusUn([[1,2],[3,4],[5,6],[7,8]]));