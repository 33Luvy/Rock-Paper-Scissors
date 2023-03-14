// Initalize the global variables
let playerScore = 0;
let computerScore = 0;
let gameDraw = 0;
let computerChoice

// Function for computer choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"]
    return choices[Math.floor(Math.random() * choices.length)]
}

// Function for playing one round of rock, paper, scissors
function playRound(playerSelection, computerSelection) {
// IF statement for all possible winning conditions
if ((playerSelection == "rock" && computerSelection == "Scissors") || 
    (playerSelection == "paper" && computerSelection == "Rock") || 
    (playerSelection == "scissors" && computerSelection == "Paper")) {
    
    playerScore += 1;

    if (playerScore == 5) {
    }
}
// ELSE IF statement for all possible losing conditions
else if ((playerSelection == "rock" && computerSelection == "Paper") || 
        (playerSelection == "paper" && computerSelection == "Scissors") || 
        (playerSelection == "scissors" && computerSelection == "Rock")) {
    
        computerScore += 1;

        if (computerScore == 5) { 
        }
}
// ELSE statement for all possible draw conditions
else {
    gameDraw += 1;
}
}

function game() {
    for (let i = 0; i < 5; i++) {
        // Player and computer selection parameters
        const playerSelection = prompt("rock, paper or scissors?").toLowerCase()
        const computerSelection = getComputerChoice();
        // Play round function
        playRound(playerSelection, computerSelection)
        // Check who won
}
if (playerScore > computerScore) {
    console.log("Player wins")
}
else if (playerScore < computerScore) {
    console.log("Computer wins")
}
else if (gameDraw > playerScore, computerScore) {
    console.log("Its a draw!")
}
}   


game();