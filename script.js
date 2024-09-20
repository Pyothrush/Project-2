function getComputerChoice(){
    const moves = ["rock", "paper", "scissors"];
    let rng = Math.floor(Math.random() * moves.length);;
    moves[rng];
    
}

function getHumanChoice(){
    prompt("Choose your move!", "rock, paper or scissors");
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        if (humanChoice === computerChoice){
            console.log("It's a draw!");
        }
        else if(humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper" || humanChoice == "rock" && computerChoice == "scissors")
        {
            console.log("You win!");
            humanScore++;
        }
        else{
            console.log("You loose!");
            computerScore++;
        } 
        console.log(humanChoice);
        console.log(computerChoice);
    } 

    playRound();
    
}
playGame();
