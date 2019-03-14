const form = document.querySelector("form");

form.addEventListener("submit", function(event){//je colle un focus sur mon bouton submit et je déclenche une fonction event
    event.preventDefault();//au moment ou le user clique sur submit, le processus s'arrête, la page ne se rafraichi pas
    console.log("ok");
    form.reset();//le contenu de mon formulaire se vide
})