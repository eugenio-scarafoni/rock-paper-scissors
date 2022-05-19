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

function playRound(playerSelection, computerSelection) {
   
    if (playerSelection == "Rock") {

        if (computerSelection == "Rock") {
            results.textContent = `It's a tie! You both chose Rock || Score: ${playerScore} - ${computerScore}`; 
        }

        if (computerSelection == "Paper") {
            computerScore++;
            results.textContent = `You Lose! Paper beats Rock || Score: ${playerScore} - ${computerScore}`;
        }

        if (computerSelection == "Scissors") {
            playerScore++;
            results.textContent = `You Win! Rock beats Scissors || Score: ${playerScore} - ${computerScore}`;
        }

    }

    if (playerSelection == "Paper") {

        if (computerSelection == "Rock") {
            playerScore++;
            results.textContent = `You Win! Paper beats Rock || Score: ${playerScore} - ${computerScore}`;
        }

        if (computerSelection == "Paper") {
            results.textContent = `It's a tie! You both chose Paper || Score: ${playerScore} - ${computerScore}`;
        }

        if (computerSelection == "Scissors") {
            computerScore++;
            results.textContent = `You Lose! Scissors beat Paper || Score: ${playerScore} - ${computerScore}`;
        }

    }

    if (playerSelection == "Scissors") {

        if (computerSelection == "Rock") {
            computerScore++;
            results.textContent = `You Lose! Rock beats Scissors || Score: ${playerScore} - ${computerScore}`;
        }

        if (computerSelection == "Paper") {
            playerScore++;
            results.textContent = `You Win! Scissors beats Paper || Score: ${playerScore} - ${computerScore}`;
        }

        if (computerSelection == "Scissors") {
            results.textContent = `It's a tie! You both chose Scissors || Score: ${playerScore} - ${computerScore}`;
        }
    }

    checkWin();

}

function checkWin () {

    if(playerScore == 5) {
        const winner = document.createElement("div");
        winner.textContent = "You won the game!";
        results.appendChild(winner);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    if(computerScore == 5) {
        const winner = document.createElement("div");
        winner.textContent = "The computer won the game!";
        results.appendChild(winner);
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }
    
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector('#results');

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", () => {playRound("Rock", computerPlay());});
paper.addEventListener("click", () => {playRound("Paper", computerPlay());});
scissors.addEventListener("click", () => {playRound("Scissors", computerPlay());});




