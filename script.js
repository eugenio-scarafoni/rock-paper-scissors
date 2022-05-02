function computerPlay() {

    const randomInt = Math.floor(Math.random()*3);
    if (randomInt==0) {
        return "Rock";
    }

    else if (randomInt==1) {
        return "Paper";
    }

    else {
        return "Scissors";
    }
}

function capitalize(string) {

    let lenght = string.lenght;
    let firstletter = string.slice(0,1);
    firstletter = firstletter.toUpperCase();
    let restofstring = string.slice(1, lenght);
    restofstring = restofstring.toLowerCase();
    return firstletter+restofstring;

} 

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {

        if (computerSelection == "Rock") {
            return "It's a tie! You both chose Rock";
        }

        if (computerSelection == "Paper") {
            return "You Lose! Paper beats Rock";
        }

        if (computerSelection == "Scissors") {
            return "You Win! Rock beats Scissors";
        }

    }

    if (playerSelection == "Paper") {

        if (computerSelection == "Rock") {
            return "You Win! Paper beats Rock";
        }

        if (computerSelection == "Paper") {
            return "It's a tie! You both chose Paper";
        }

        if (computerSelection == "Scissors") {
            return "You Lose! Scissors beat Paper";
        }

    }

    if (playerSelection == "Scissors") {

        if (computerSelection == "Rock") {
            return "You Lose! Rock beats Scissors";
        }

        if (computerSelection == "Paper") {
            return "You Win! Scissors beats Paper";
        }

        if (computerSelection == "Scissors") {
            return "It's a tie! You both chose Scissors";
        }

    }
}

let playerSelection = window.prompt("Choose: rock, paper, scissors :");
playerSelection = capitalize(playerSelection);
console.log(playerSelection);
while (playerSelection!="Rock" && playerSelection!="Paper" && playerSelection!="Scissors") {
    playerSelection = window.prompt("Invalid input! Choose: rock, paper, scissors :");
    playerSelection = capitalize(playerSelection);
}
let computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection,computerSelection));