function getComputerChoice() {
    randInt = Math.floor(Math.random() * 3 + 1);
    if (randInt === 1) {
        return "Rock";
    } else if (randInt === 2) {
        return "Paper";
    } else if (randInt === 3) {
        return "Scissors";
    } else {
        console.log("Random number generation error")
        return;
    }
}

console.log(getComputerChoice());