function getComputerChoice(){
    const choices=["rock","paper","scissors"]
    computerChoice = choices[Math.floor(Math.random()*3)]
    return computerChoice;
}

function showdown(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("It's a draw!");
    }
    else {
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "paper") {
                console.log("Computer wins!");
            }
            else {
                console.log("Player wins!");
            }
        

        }
        else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "scissors") {
                console.log("Computer wins!");
            }
            else {
                console.log("Player wins!");
            }
        }
        else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "rock") {
                console.log("Computer wins!");
            }
            else {
                console.log("Player wins!");
            }
        }
    }
}

const computerSelection = getComputerChoice()
const playerSelection = prompt("Rock, paper, or scissors?")
showdown(playerSelection, computerSelection)
