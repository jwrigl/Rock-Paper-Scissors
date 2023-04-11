function getComputerChoice(){
    const choices=["Rock","Paper","Scissors"]
    computerChoice = choices[Math.floor(Math.random()*3)]
    return computerChoice;
}

function showdown(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a draw!")
    }
    else {
        if (playerSelection === "Rock") {
            if (computerSelection === "Paper") {
                console.log("Computer wins!")
            }
            else {
                console.log("Player wins!")
            }
        

        }
        if (playerSelection === "Paper") {
            if (computerSelection === "Scissors") {
                console.log("Computer wins!")
            }
            else {
                console.log("Player wins!")
            }
        }
        if (playerSelection === "Scissors") {
            if (computerSelection === "Rock") {
                console.log("Computer wins!")
            }
            else {
                console.log("Player wins!")
            }
        }
    }
}