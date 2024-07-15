const posibilidades = [ "🗻", "📰", "✂️"]

const playerName = document.getElementById("playerName");
const startGame = document.getElementById("startGame")
const playerChoice = document.getElementById("playerChoice");

/* Geting Player's name and choice, and computer's choice*/

function displayName(name, choice) {
    let emojiChoice;
    if (choice === "rock") {
        emojiChoice = posibilidades[0];
    } else if (choice === "paper") {
        emojiChoice = posibilidades[1];
    } else if (choice === "scissors") {
        emojiChoice = posibilidades[2];
    } 

    if (emojiChoice) {
        alert(`Hola, ${name}! Has elegido ${emojiChoice} para jugar.`);
    } else {
        alert('Por favor, elige entre piedra, papel o tijera.');
    }
    
}

function getComputerChoice() {
    return posibilidades[Math.floor(Math.random() * 3)]
}

/* Checking the winner */

function checkWinner(playerChoice) {
    
    let computerChoice = getComputerChoice();
    alert(`La computadora ha elegido ${computerChoice}.`);

    if (playerChoice === computerChoice) {
        alert("Empate");
    } else if ((playerChoice === "rock" && computerChoice === posibilidades[2]) ||
        (playerChoice === "paper" && computerChoice === posibilidades[0]) ||
        (playerChoice === "scissors" && computerChoice === posibilidades[1])) {
    alert("¡Has ganado!");
    } else {
        alert("Vuelve a intentarlo 😢");
    }
}

/* Showing images based on result */

function showImg() {

    if (checkWinner(playerChoice).alert() === "Empate") {
        document.getElementById("id").src = "resources/images/empate.png";
    }
}


    
/* Showing choices and the winner */

startGame.addEventListener("click", function () {
    let playerSelectedChoice = playerChoice.value;
    displayName(playerName.value, playerSelectedChoice);
    checkWinner(playerSelectedChoice);
});

