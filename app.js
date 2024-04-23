const SCISSORS = 1;
const PAPER = 2;
const ROCK = 3;

// generate random integer between 1 and 3 and return the value
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

// prompt user for their choice and convert to an int (1, 2, 3)
function getPlayerChoice() {
    let choice = 0;
    // get user choice
    while (choice === 0) {
        const choiceStr = prompt("Enter your choice (rock, paper, scissors): ").toLowerCase();
        // convert user selection to an int    
        if (choiceStr === "rock") {
            choice = ROCK;
        } else if (choiceStr === "paper") {
            choice = PAPER;
        } else if (choiceStr === "scissors") {
            choice = SCISSORS;
        }
    }

    return choice;
}

// function that plays a single round of Rock Paper Scissors
// function takes two parameters (playerSelection and computerSelection) and returns a number representing the result (1: win, 0: tie, -1 loss)
function playRound(playerSelection, computerSelection) {
    console.log(`Computer picked: %s`, computerSelection);
    console.log(`You picked: %s`, playerSelection);
    if (playerSelection === SCISSORS) {
        if (computerSelection === SCISSORS) {
            console.log("Tie! Scissors and Scissors");
            return 0;
        } else if (computerSelection === PAPER) {
            console.log("You Win! Scissors beats Paper");
            return 1;
        } else {
            console.log("You Lose! Rock beats Scissors");
            return -1;
        }
    } else if (playerSelection === PAPER) { // paper
        if (computerSelection === SCISSORS) {
            console.log("You Lose! Scissors beats Paper");
            return -1;
        } else if (computerSelection === PAPER) {
            console.log("Tie! Paper and Paper");
            return 0;
        } else {
            console.log("You Win! Paper beats Rock");
            return 1;
        }
    } else { // rock
        if (computerSelection === SCISSORS) {
            console.log("You Win! Rock beats Scissors");
            return 1;
        } else if (computerSelection === PAPER) {
            console.log("You Lose! Paper beats Rock");
            return -1;
        } else {
            console.log("Tie! Rock and Rock");
            return 0;
        }
    }
}

// play given number of rounds of the game
/*
function playGame() {
    let gameResult;
    let wins = 0;
    let losses = 0;
    const rounds = 5; // number of games to be played

    for (let i = 0; i < rounds; i++) { // loop 'rounds' number of times
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();

        gameResult = playRound(playerSelection, computerSelection); // get result of each game
        if (gameResult === 1) { // if win
            wins++;
        } else if (gameResult === -1) { // if loss
            losses++;
        }
    }

    // print results to the console
    console.log(`Wins: %d`, wins);
    console.log(`Losses: %d`, losses);
    if (wins > losses) {        
        console.log("You win!")
    } else if (wins < losses) {
        console.log("You lose!")
    } else {
        console.log("Tie!")
    }
}
*/

playGame();