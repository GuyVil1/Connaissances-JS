//

const input = document.querySelector('input');
//avec le focus, quand je rentre dans mon input, je donne au fond de mon 
//input une couleur
input.addEventListener("focus", function(){
    input.style.background = "blue";
});

input.addEventListener("blur", function(){
    input.style.background = "white";
});