// Initalize the global variables
let playerScore = 0;
let computerScore = 0;
let gameRounds = 0;
let computerChoice

// Function for computer choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

// Player and computer selection parameters
const playerSelection = "rock"
const computerSelection = getComputerChoice();

// Function for playing one round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
// IF statement for all possible winning conditions
if ((playerSelection == "rock" && computerSelection == "Scissors") || 
    (playerSelection == "paper" && computerSelection == "Rock") || 
    (playerSelection == "scissors" && computerSelection == "Paper")) {
    
    playerScore += 1;

    if (playerScore == 5) {
        console.log("Player Wins!")
    }
}
// ELSE IF statement for all possible losing conditions
else if ((playerSelection == "rock" && computerSelection == "Paper") || 
        (playerSelection == "paper" && computerSelection == "Scissors") || 
        (playerSelection == "scissors" && computerSelection == "Rock")) {
    
        computerScore += 1;

        if (computerScore == 5) {
            console.log("Computer Wins!")
        }
}
// ELSE statement for all possible draw conditions
else {
    console.log("Both players have chosen",playerSelection,)
}
}


playRound(playerSelection, computerSelection)