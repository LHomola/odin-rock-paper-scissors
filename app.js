// values assigned to options: scissors = 1, paper = 2, rock = 3

// generate random integer between 1 and 3 and return the value
function getComputerChoice() {
    randInt = Math.floor(Math.random() * 3 + 1);
    if (randInt >= 1 && randInt <= 3) {
        return randInt; // return random value
    } else {
        alert("Random number generation error");
        return randInt; // if value not 1, 2, 3 show error message;
    }
}