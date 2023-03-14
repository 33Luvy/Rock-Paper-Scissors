// Initalize the global variables
let playerScore = 0;
let computerScore = 0;
let gameRounds = 0;
let computerChoice

// Function for computer choice
function getComputerChoice(computerChoice) {
    // Variable that generates a number 0 - 3
    let randomChoice = Math.floor(Math.random() * 3);
    if (randomChoice == 1) {
        computerChoice = ("rock")
    }
    else if (randomChoice == 2) {
        computerChoice = ("Paper")
    }
    else {
        computerChoice = ("Scissors")
    }
}