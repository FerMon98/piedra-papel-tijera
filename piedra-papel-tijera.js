const posibilidades = [ "🗻", "📰", "✂️"]

const playerName = document.getElementById("playerName");
const startGame = document.getElementById("startGame")

startGame.addEventListener("click", function () {
    displayName(playerName.value);
});

function displayName(name) {
    alert(`Hola, ${name}!`);
}


const playerChoice = document.getElementById("playerChoice");


