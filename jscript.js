let computerChoice = undefined
let playerChoice = undefined
let playerScore = 0
let computerScore = 0

// Function that generates computers input
function getComputerChoice() {
// Variable that lists the different choices
    computerChoice = [
    "Rock",
    "Paper",
    "Scissors"
];
// Variable that chooses the random choice
 computerChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
}

// Function for playing one round of RPS
function playRound(computerSelection, playerSelection) {
if (playerSelection == ("rock") && computerChoice == ("Scissors")) {
console.log("You win")
playerScore = playerScore + 1;
}

else if (playerSelection == ("rock") && computerChoice == ("Paper")) {
console.log("You lose")
computerScore = computerScore + 1;
}

else if (playerSelection == ("rock") && computerChoice == ("Rock")) {
console.log("It's a draw!")
}

else if (playerSelection == ("scissors") && computerChoice == ("Paper")) {
console.log("You win")
playerScore = playerScore + 1;
}

else if (playerSelection == ("scissors") && computerChoice == ("Rock")) {
console.log("You lose")
computerScore = computerScore + 1;
}

else if (playerSelection == ("scissors") && computerChoice == ("Scissors")) {
console.log("It's a draw!")
}

else if (playerSelection == ("paper") && computerChoice == ("Rock")) {
console.log("You win")
playerScore = playerScore + 1;
}

else if (playerSelection == ("paper") && computerChoice == ("Scissors")) {
console.log("You lose")
computerScore = computerScore + 1;
}

else if (playerSelection == ("paper") && computerChoice == ("Paper")) {
console.log("It's a draw!")
}
}

function game() {
    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Rock, Paper or Scissors?")
        playRound(computerSelection, playerSelection)
        const computerSelection = getComputerChoice();
        const playerSelection = playerChoice
    }
}





game();