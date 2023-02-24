// Playing a game - ROCK PAPER SCISSORS
// Human vs Computer
// SCISSORS win over PAPER
// PAPER win over ROCK
// ROCK win over SCISSORS

let humanChoice;
let computerChoice;
let computerChoiceNum;
let playCount = 1;

let continueGame = true; // flag

// Set value for Human choice
humanChoice = "scissors";

humanChoice = humanChoice.toUpperCase();

while (continueGame == true) {

    console.log(`##### ROUND ${playCount} #####`);
    
    computerChoiceNum = getRandomNumber(1, 3);

    playCount++

    if (computerChoiceNum == 1) {
        computerChoice = "ROCK";
    }

    if (computerChoiceNum == 2) {
        computerChoice = "PAPER";
    }

    if (computerChoiceNum == 3) {
        computerChoice = "SCISSORS";
    }  

    console.log(`Human choice is ${humanChoice}`)
    console.log(`Computer choice is ${computerChoice}`)

    if (humanChoice == computerChoice) {
        console.log("It's a tie, let's try again !!!");
    }


    if (humanChoice == "SCISSORS" && computerChoice == "PAPER") {
        console.log("Human wins !!!");
        continueGame = false;
    }
    if (humanChoice == "SCISSORS" && computerChoice == "ROCK") {
        console.log("Computer wins :( ");
        continueGame = false;
    }

    if (humanChoice == "PAPER" && computerChoice == "ROCK") {
        console.log("Human wins !!!");
        continueGame = false;
    }
    if (humanChoice == "PAPER" && computerChoice == "SCISSORS") {
        console.log("Computer wins :( ");
        continueGame = false;
    }

    if (humanChoice == "ROCK" && computerChoice == "SCISSORS") {
        console.log("Human wins !!!");
        continueGame = false;
    }
    if (humanChoice == "ROCK" && computerChoice == "PAPER") {
        console.log("Computer wins :( ");
        continueGame = false;
    }

}

// ======= FUNCTIONS ARE BELOW ======== //

function getRandomNumber(min, max) {
    let randomNumber;
    randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber;
}