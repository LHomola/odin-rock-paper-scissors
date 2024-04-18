// values assigned to options: scissors = 1, paper = 2, rock = 3

// generate random integer between 1 and 3 and return the value
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

// function that plays a single round of Rock Paper Scissors
// function takes two parameters (playerSelection and computerSelection) and returns a string that declares the winner or tie of the round
function playRound(playerSelection, computerSelection) {
    console.log(`Computer picked: %s`, computerSelection);
    console.log(`You picked: %s`, playerSelection);
    if (playerSelection === 1) { // scissors
        if (computerSelection === 1) {
            return "Draw! Scissors and Scissors"
        } else if (computerSelection === 2) {
            return "You Lose! Scissors beats Paper"
        } else {
            return "You Win! Scissors beats Rock";
        }
    } else if (playerSelection === 2) { // paper
        if (computerSelection === 1) {
            return "You Lose! Scissors beats Paper"
        } else if (computerSelection === 2) {
            return "Draw! Paper and Paper"
        } else {
            return "You Win! Paper beats Rock";
        }
    } else { // rock
        if (computerSelection === 1) {
            return "You Win! Rock beats Scissors";
        } else if (computerSelection === 2) {
            return "You Lose! Paper beats Rock"
        } else {
            return "Draw! Rock and Rock"
        }
    }
}

// prompt user for their choice and convert to an int (1, 2, 3)
function getPlayerChoice() {
    let choice = 0;
    // get user choice
    while (choice === 0) {
        const choiceStr = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();
        // convert user selection to an int    
        if (choiceStr === "rock") {
            choice = 3;
        } else if (choiceStr === "paper") {
            choice = 2;
        } else if (choiceStr === "scissors") {
            choice = 1;
        }
    }

    return choice;
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

// print result of game to console
console.log(playRound(playerSelection, computerSelection));