const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const ROUNDS = 5; // number of games to be played

let gameCounter = 0;
let score = 0; 

// generate random integer between 1 and 3 and return the value
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

// function that plays a single round of Rock Paper Scissors
// function takes two parameters (playerSelection and computerSelection) and returns a number representing the result (1: win, 0: tie, -1 loss)
function playRound(playerSelection, computerSelection) {
    const resultDiv = document.querySelector("#result-container");

    if (playerSelection === SCISSORS) {
        if (computerSelection === SCISSORS) {
            resultDiv.textContent = "Tie! Scissors and Scissors";
            return 0;
        } else if (computerSelection === PAPER) {
            resultDiv.textContent = "You Win! Scissors beats Paper";
            return 1;
        } else {
            resultDiv.textContent = "You Lose! Rock beats Scissors";
            return -1;
        }
    } else if (playerSelection === PAPER) { // paper
        if (computerSelection === SCISSORS) {
            resultDiv.textContent = "You Lose! Scissors beats Paper";
            return -1;
        } else if (computerSelection === PAPER) {
            resultDiv.textContent = "Tie! Paper and Paper";
            return 0;
        } else {
            resultDiv.textContent = "You Win! Paper beats Rock";
            return 1;
        }
    } else { // rock
        if (computerSelection === SCISSORS) {
            resultDiv.textContent = "You Win! Rock beats Scissors";
            return 1;
        } else if (computerSelection === PAPER) {
            resultDiv.textContent = "You Lose! Paper beats Rock";
            return -1;
        } else {
            resultDiv.textContent = "Tie! Rock and Rock";
            return 0;
        }
    }
}

// play given number of rounds of the game
function playGame(playerSelection, computerSelection) {    
    const buttons = document.querySelectorAll(".rpcBtn");    
    const counterDiv = document.querySelector("#counter-container");
    const scoreDiv = document.querySelector("#score-container");
    
    score += playRound(playerSelection, computerSelection); // get result of each game and adjust score accordingly
    gameCounter++;
    counterDiv.textContent = `Games played: ${gameCounter}`;
    
    scoreDiv.textContent = `Score: ${score}`;
    
    if (gameCounter === ROUNDS) { 
        buttons.forEach((btn) => btn.setAttribute("disabled", "disabled")); // disable rock-paper-scissors buttons if no more games left
        
        if (score > 0) {
            scoreDiv.textContent = `Score: ${score} -> You win!!!`;
        } else if (score < 0) {
            scoreDiv.textContent = `Score: ${score} -> You lose!!!`;
        } else {
            scoreDiv.textContent = `Score: ${score} -> Tie!!!`;
        }
    }    
}

function attachEventListeners() {
    const buttons = document.querySelectorAll(".rpcBtn");
    const counterDiv = document.querySelector("#counter-container");
    const resetButton = document.querySelector("#resetBtn");
    const resultDiv = document.querySelector("#result-container");    
    const scoreDiv = document.querySelector("#score-container");

    let playerSelection = 0;
    
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const computerSelection = getComputerChoice();
            const choiceStr = btn.textContent.toLowerCase();

            if (choiceStr === "rock") {
                playerSelection = ROCK;                
            } else if (choiceStr === "paper") {
                playerSelection = PAPER;
            } else if (choiceStr === "scissors") {
                playerSelection = SCISSORS;
            }

            playGame(playerSelection, computerSelection);
        })
    })

    resetButton.addEventListener("click", () => {
        gameCounter = 0;
        score = 0;
        buttons.forEach((btn) => btn.removeAttribute("disabled"));
        resultDiv.textContent = "Click Rock / Paper / Scissors button above to start a game";
        counterDiv.textContent = `Games played: ${gameCounter}`;        
        scoreDiv.textContent = `Score: ${score}`;
    })    
}

attachEventListeners();