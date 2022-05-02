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

function round(playerSelection, computerSelection) {

}

let playerSelection = window.prompt("Choose: rock, paper, scissors :");
playerSelection = capitalize(playerSelection);
console.log(playerSelection);
while (playerSelection!="Rock" && playerSelection!="Paper" && playerSelection!="Scissors") {
    playerSelection = window.prompt("Invalid input! Choose: rock, paper, scissors :");
    playerSelection = capitalize(playerSelection);
}
let computerSelection = computerPlay();