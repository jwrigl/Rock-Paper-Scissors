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
    rock.innerText="Rock";
    rock.setAttribute("class", "battleButtons");
    rock.setAttribute("id", "rockButton");
    rock.setAttribute("onclick","battleButtonPress(\"rock\",event)");
    container.appendChild(rock);

    let paper = document.createElement("button");
    paper.setAttribute("class", "battleButtons");
    paper.setAttribute("id", "paperButton");
    paper.setAttribute("onclick","battleButtonPress(\"paper\",event)");
    paper.innerText="Paper"
    container.appendChild(paper);

    let scissors = document.createElement("button");
    scissors.setAttribute("class", "battleButtons");
    scissors.setAttribute("id", "scissorsButton");
    scissors.setAttribute("onclick","battleButtonPress(\"scissors\",event)");
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
    buttons = document.getElementsByClassName("battleButtons")
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
    }
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
    //evaluate if there is a winner 

    if (computerScore === 5) {
        winLossScreen("computer")
        return;
    }
    else if (humanScore === 5) {
        winLossScreen("human")
        return;
    }



    let resultsMessage = document.createElement("div");
    if (winner === 'none' ? resultsMessage.innerText="It's a draw!" : resultsMessage.innerText="The "+winner+" is the winner!")
    resultsMessage.setAttribute("id","resultsMessage");
    resultsMessage.setAttribute("class","resultsScreen");


    let scoreMessage = document.createElement("div");
    scoreMessage.innerText=`${humanScore}:${computerScore}`
    scoreMessage.setAttribute("id","scoreMessage");
    scoreMessage.setAttribute("class","resultsScreen");

    let nextButton = document.createElement("button");
    nextButton.innerText="Next Round!";
    nextButton.setAttribute("id","nextButton");
    nextButton.setAttribute("class","resultsScreen");
    nextButton.setAttribute("onclick","deleteResultsScreen(\"resultsScreen\")");

    let container = document.getElementById("mainContainer");
    container.appendChild(resultsMessage);
    container.appendChild(scoreMessage);
    container.appendChild(nextButton);

}

function deleteResultsScreen(calledfrom) {
    results = document.getElementsByClassName("resultsScreen")
    let resultsArray = Array.from(results);
    resultsArray.forEach(resultElement => { resultElement.remove()});
    if (calledfrom === "resultsScreen") {
        addBattleButtons()

    }

}

function winLossScreen(winner) {
    deleteResultsScreen("winLossScreen")
    let container = document.getElementById("mainContainer")
    if (winner === "computer") {
        let winMsg = document.createElement("div");
        let winDesc = document.createElement("div");
        winMsg.setAttribute("id","winMsg");
        winMsg.innerText="YOU HAVE LOST.";
        winDesc.setAttribute("id","winDesc");
        winDesc.innerText="The future looks bleak for humanity.";
        container.appendChild(winMsg);
        container.appendChild(winDesc);
        console.log("cpu")

    }

    if (winner ==="human") {
        let winMsg = document.createElement("div");
        let winDesc = document.createElement("div");
        winMsg.setAttribute("id","winMsg")
        winMsg.innerText="YOU HAVE WON."
        winDesc.setAttribute("id","winDesc")
        winDesc.innerText="Humanity lives to fight another day."
        container.appendChild(winMsg);
        container.appendChild(winDesc);
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
                humanScore += 1
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
                humanScore += 1
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
                humanScore += 1
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

