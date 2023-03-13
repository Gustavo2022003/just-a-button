document.addEventListener("keydown", function(event){
    if (event.key == " "){
        darkMode();
    }
});




function darkMode() {
    let botaoBorda = document.getElementById("botaoBorda");
    let botaoCirculo = document.getElementById("botaoCirculo");

    botaoBorda.classList.toggle("button-light");
    botaoCirculo.classList.toggle("button-circle-light");
    document.body.classList.toggle("body-dark");
    if (document.title != "It's just a button") {
        document.title = "It's just a button";
    } else{
        document.title = "I told you";
    }

    var audio = new Audio("Space Ambient [Loop].m4a"); 
    var toggleSound = new Audio("Radio Switch Button Sound Effect.m4a"); 
    toggleSound.volume = "0.1";
    audio.volume = "0.2";

    if (botaoBorda.classList.length == 1){
        toggleSound.play();
    } else {
        toggleSound.play();
        audio.play();
    }

    console.log(botaoBorda.classList.length);
}