// Hent elementene fra HTML-koden
var game = document.getElementById("game");
var startButton = document.getElementById("start");

// Sett opp variabler for spilltilstanden
var gameStarted = false;
var score = 0;

// Legg til event listener for startknappen
startButton.addEventListener("click", function() {
    // Sett spilltilstanden til startet
    gameStarted = true;
    // Start spill-loop
    gameLoop();
});

// Legg til event listener for tastetrykk
document.addEventListener("keydown", function(event) {
    if (gameStarted) {
        // Sjekk hvilken tast som ble trykket
        switch (event.keyCode) {
            case 37: // Venstre piltast
                game.style.left = parseInt(game.style.left) - 10 + "px";
                break;
            case 38: // Opp piltast
                game.style.top = parseInt(game.style.top) - 10 + "px";
                break;
            case 39: // Høyre piltast
                game.style.left = parseInt(game.style.left) + 10 + "px";
                break;
            case 40: // Ned piltast
                game.style.top = parseInt(game.style.top) + 10 + "px";
                break;
        }
    }
});

// Legg til event listener for berøring av div'en
game.addEventListener("click", function() {
    if (gameStarted) {
        // Øk poengsummen
        score++;
        // Oppdater poengsummen på skjermen
        document.title = "Poengsum: " + score;
        // Flytt div'en til en tilfeldig posisjon
        game.style.left = Math.random() * window.innerWidth + "px";
        game.style.top = Math.random() * window.innerHeight + "px";
    }
});

// Spill-loop
function gameLoop() {
    // Sjekk om spillet er over
    if (gameStarted) {
        // Vent et sekund før neste runde
        setTimeout(gameLoop, 1000);
    } else {
        // Spillet er over, vis poengsummen
        alert("Spillet er over! Din poengsum er: " + score);
    }
}