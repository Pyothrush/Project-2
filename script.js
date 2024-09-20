function getComputerChoice(){
    const moves = ["rock", "paper", "scissors"];
    let rngmove = moves[Math.floor(Math.random() * moves.length)];
    return rngmove;
}
console.log(getComputerChoice());

function getHumanChoice(){
    let playermove = prompt("Choose your move");
    return playermove;
    
}
//console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    if(humanChoice.localeCompare(computerChoice) == 0) {
        console.log("it's a draw!");
    }
}
playRound();