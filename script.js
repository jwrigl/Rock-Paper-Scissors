function getComputerChoice(){
    const choices=["rock","paper","scissors"]
    computerChoice = choices[Math.floor(Math.random()*3)]
    return computerChoice;
}

function showdown(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log("It's a draw!");
        let winner = "none";
        return winner;
    }
    else {
        if (playerSelection.toLowerCase() === "rock") {
            if (computerSelection === "paper") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
                let winner = "computer";
                return winner;
            }
            else {
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                let winner = "human";
                return winner;
            }
        

        }
        else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "scissors") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
                let winner = "computer";
                return winner;
            }
            else {
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                let winner = "human";
                return winner;
            }
        }
        else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "rock") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
                let winner = "computer";
                return winner;
            }
            else {
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                let winner = "human";
                return winner;
            }
        }
    }
}

function game(){
    let humanWins = 0;
    let computerWins = 0;
    for (let i = 1; i <= 5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = prompt("Rock, paper, or scissors?");
        let lastWinner = showdown(playerSelection, computerSelection)
        if (lastWinner === "human") {
            humanWins++;
        }
        else if (lastWinner === "computer") {
            computerWins++;
        }

        else {}

    }
    if (humanWins > computerWins) {
        console.log(`You are the champion! The score was ${humanWins} to ${computerWins}. Not so clever now, are they?`)
    }
    else if (computerWins > humanWins) {
        console.log(`The computer is the champion! The score was ${computerWins} to ${humanWins}. The future looks bleak for humanity.`)
    }
    else {
        console.log(`No one was the champion! The score was 0 to 0. The future is undecided.`)

}




}
