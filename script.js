function getComputerChoice(){
    const moves = ["rock", "paper", "scissors"];
    let rngmove = moves[Math.floor(Math.random() * moves.length)];
    return rngmove;
}
//console.log(getComputerChoice());

function getHumanChoice(){
    let playermove = prompt("Choose your move");
    return playermove;
    
}
//console.log(getHumanChoice());



//playRound();
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = getHumanChoice().toLowerCase();
        computerChoice = getComputerChoice();
        if(humanChoice.localeCompare(computerChoice) == 0) {
            console.log("it's a draw!");
        }else if(humanChoice == "paper" && computerChoice == "rock" || humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "scissors" && computerChoice == "paper"){
            console.log("You win!");
            humanScore++;
        }else {
            console.log("You loose");
            computerScore++;
        }
        console.log("Your score: "+humanScore+" Computer's score: "+computerScore);
    }
    
    for(i=0; i<=4; i++){
        playRound();
    }
}
playGame();