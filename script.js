function getComputerChoice(){
    const moves = ["rock", "paper", "scissors"];
    let rngmove = moves[Math.floor(Math.random() * moves.length)];
    return rngmove;
}
//console.log(getComputerChoice());

function getHumanChoice(){
    let playermove = prompt("Choose your move").toLowerCase();
    return playermove;
    
}
//console.log(getHumanChoice());
let humanScore = 0;
let computerScore = 0;
function playRound(humanChoice, computerChoice){
    
}