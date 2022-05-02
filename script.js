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
    // the functions returns 1 if the user wins, -1 if the computer wins, 0 if it's a tie
    if (playerSelection == "Rock") {

        if (computerSelection == "Rock") {
            console.log("It's a tie! You both chose Rock"); 
            return 0;
        }

        if (computerSelection == "Paper") {
            console.log("You Lose! Paper beats Rock");
            return -1;
        }

        if (computerSelection == "Scissors") {
            console.log("You Win! Rock beats Scissors");
            return 1;
        }

    }

    if (playerSelection == "Paper") {

        if (computerSelection == "Rock") {
            console.log("You Win! Paper beats Rock");
            return 1;
        }

        if (computerSelection == "Paper") {
            console.log("It's a tie! You both chose Paper");
            return 0;
        }

        if (computerSelection == "Scissors") {
            console.log("You Lose! Scissors beat Paper");
            return -1;
        }

    }

    if (playerSelection == "Scissors") {

        if (computerSelection == "Rock") {
            console.log("You Lose! Rock beats Scissors");
            return -1;
        }

        if (computerSelection == "Paper") {
            console.log("You Win! Scissors beats Paper");
            return 1;
        }

        if (computerSelection == "Scissors") {
            console.log("It's a tie! You both chose Scissors");
            return 0;
        }

    }
}

function game () {

    let computerScore = 0;
    let userScore = 0;

    for (let i=0; i<5 ; i++) {

        let playerSelection = window.prompt("Choose: rock, paper, scissors :");
        playerSelection = capitalize(playerSelection);
        while (playerSelection!="Rock" && playerSelection!="Paper" && playerSelection!="Scissors") {
            playerSelection = window.prompt("Invalid input! Choose: rock, paper, scissors :");
            playerSelection = capitalize(playerSelection);
        }
        console.log("You chose: " + playerSelection);
        let computerSelection = computerPlay();
        console.log("The computer chose: " + computerSelection);
        let roundresult = playRound(playerSelection, computerSelection)
        if (roundresult == 1) {
            userScore++;
        }
        else if (roundresult == -1) {
            computerScore++;
        }
    }

    if (userScore>computerScore) {
        return `You won the game! Final score ${userScore} - ${computerScore}`;
    }

    else if (computerScore>userScore) {
        return `You lost the game! Final score ${userScore} - ${computerScore}`;
    }

    else {
        return `It's a tie! Final score ${userScore} - ${computerScore}`;
    }
}

console.log(game());
