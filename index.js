var party = new Audio("partyrock.mp3");

window.addEventListener("click", function playMusic() {

    if (party.paused) {

        party.play();
    }

    else {
        party.pause();
    }

})