// values assigned to options: scissors = 1, paper = 2, rock = 3

// generate random integer between 1 and 3 and return the value
function getComputerChoice() {
    return Math.floor(Math.random() * 3 + 1);
}

function getPlayerChoice() {
    const choice = 0;
    // get user choice
    while (choice === 0) {
        const choiceStr = prompt("Enter your choice (rock, paper, scissors): ").toLocaleLowerCase;
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