//website changes

var computerScore = 0;
var humanScore = 0; 

function deleteLanding() {
    parentElement = document.getElementById("mainContainer");
    let p = document.getElementById("flavourText")
    let btn = document.getElementById("readyButton")
    parentElement.removeChild(p)
    parentElement.removeChild(btn)

}

function addBattleButtons() {
    let container = document.getElementById("battleButtonsContainer");

    let rock = document.createElement("button");
    rock.innerText="Rock"
    rock.setAttribute("class", "battleButtons")
    rock.setAttribute("id", "rockButton")
    rock.setAttribute("onclick","battleButtonPress(\"rock\",event)")
    container.appendChild(rock);

    let paper = document.createElement("button");
    paper.setAttribute("class", "battleButtons")
    paper.setAttribute("id", "paperButton")
    paper.setAttribute("onclick","battleButtonPress(\"paper\",event)")
    paper.innerText="Paper"
    container.appendChild(paper);

    let scissors = document.createElement("button");
    scissors.setAttribute("class", "battleButtons")
    scissors.setAttribute("id", "scissorsButton")
    scissors.setAttribute("onclick","battleButtonPress(\"scissors\",event)")
    scissors.innerText="Scissors"
    container.appendChild(scissors);


}


function startButton() {
    let btn = document.getElementById("readyButton")
    btn.disabled = true;
    deleteLanding()
    addBattleButtons()

}


function battleButtonPress(playerChoice) {
    console.log(event)
    computerChoice = getComputerChoice();
    winner = showdown(playerChoice,computerChoice);
    deleteBattleButtons();
    resultsScreen(winner);


}


function deleteBattleButtons() {
    buttons = document.getElementsByClassName("battleButtons")
    let buttonArray = Array.from(buttons);
    buttonArray.forEach(button => { button.remove()});


  
}

function resultsScreen(winner) {
    let resultsMessage = document.createElement("div");
    if (winner === 'none' ? resultsMessage.innerText="It's a draw!" : resultsMessage.innerText="The "+winner+" is the winner!")
    resultsMessage.setAttribute("id","resultsMessage")

    let scoreMessage = document.createElement("div");
    scoreMessage.innerText=`${humanScore}:${computerScore}`
    scoreMessage.setAttribute("id","scoreMessage")


    let container = document.getElementById("mainContainer");
    container.appendChild(resultsMessage);
    container.appendChild(scoreMessage);




}


function winLossScreen(winner); {
    if (winner === "computer") {
        console.log("cpu")

    }

    if (winner ==="human") {
        console.log("humans")

    }
};











//RPS logic
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
                computerScore += 1
                return winner;
            }
            else {
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                let winner = "human";
                huumanScore += 1
                return winner;
            }
        

        }
        else if (playerSelection.toLowerCase() === "paper") {
            if (computerSelection === "scissors") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
                let winner = "computer";
                computerScore += 1
                return winner;
            }
            else {
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                let winner = "human";
                huumanScore += 1
                return winner;
            }
        }
        else if (playerSelection.toLowerCase() === "scissors") {
            if (computerSelection === "rock") {
                console.log(`You Lose! ${computerSelection} beats ${playerSelection}.`);
                let winner = "computer";
                computerScore += 1
                return winner;
            }
            else {
                console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
                let winner = "human";
                huumanScore += 1
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
        return `You are the champion! The score was ${humanWins} to ${computerWins}. Not so clever now, are they?`
    }
    else if (computerWins > humanWins) {
        return `The computer is the champion! The score was ${computerWins} to ${humanWins}. The future looks bleak for humanity.`
    }
    else {
        return `No one was the champion! The score was 0 to 0. The future is undecided.`

}




}

