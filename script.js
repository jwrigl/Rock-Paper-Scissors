function getComputerChoice(){
    const choices=["Rock","Paper","Scissors"]
    computerChoice = choices[Math.floor(Math.random()*3)]
    return computerChoice
}