const moves = ["rock", "paper", "scissors"];
let compChosen;
function getComputerChoice(){
    let rng = Math.floor(Math.random() * moves.length);;
    let compChosen = moves[rng];
    console.log(compChosen);
}
getComputerChoice();