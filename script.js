function getComputerChoice(){
    const choices=["rock","paper","scissors"]
    computerChoice = choices[Math.floor(Math.random()*3)]
    return computerChoice;
}

function showdown(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("It's a draw!");
        let winner = "none";
    }
    else {
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "paper") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
                let winner = "computer";
            }
            else {
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                let winner = "human";
            }
        

        }
        else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "scissors") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
                let winner = "computer";
            }
            else {
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                let winner = "human";
            }
        }
        else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "rock") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
                winner = "computer";
            }
            else {
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                let winner = "human";
            }
        }
    }
    return winner

function game(){
    let humanWins = 0;
    let computerWins = 0;
    for (let i = 1; i <= ; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, paper, or scissors?");
        winner = showdown(playerSelection, computerSelection)
        if (winner === "human") {
            humanWins++1;
        }
        else {
            computerWins++1;
        }

    }
    if (humanWins > computerWins) {
        console.log(`You are the champion! The score was ${humanWins} to ${computerWins}. Not so clever now, are they?`)
    }
    else if (computerWins > humanWins) {
        console.log(`You are the champion! The score was ${computerWins} to ${humanWins}. The future looks bleak for humanity.`)
    }
    else {
        let champion = "No one";
        console.log(`No one was the champion! The score was 0 to 0. The future is undecided.`)

}




}