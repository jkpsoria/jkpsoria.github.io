var party = new Audio("partyrock.mp3");

window.addEventListener("click", function playMusic() {

    if (party.paused) {

        party.play();
    }

    else {
        party.pause();
    }

})


window.addEventListener("load", function(){

    
    var h2 = document.querySelectorAll("h2").length;

    for(var i = 0; i<h2; i++){
        document.querySelectorAll("h2")[i].classList.add("animate__animated",  "animate__jackInTheBox",  "animate__infinite", "animate__slower");
    }


})