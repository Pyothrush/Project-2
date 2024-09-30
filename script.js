function getComputerChoice(){
    const moves = ["rock", "paper", "scissors"];
    let rngmove = moves[Math.floor(Math.random() * moves.length)];
    return rngmove;
}

function getHumanChoice(element){
    return element.id;
}
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanScore < 5 && computerScore < 5){
        if((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ){
            humanScore++;
            winners.textContent = "You win!";
        }else if (humanChoice === computerChoice){
            winners.textContent = "Its a tie";
        }else{
            computerScore++;
            winners.textContent = "Computer wins!";
        }
        score.textContent = "Your score: " + humanScore + " Computer score: " + computerScore;
    }else{
        if(humanScore>computerScore){
            winners.textContent += " You won the game!";
        }else{winners.textContent += " You lost the game";}
    }
    
}
const container = document.querySelector("#container");
const score = document.createElement("div");

const winners = document.createElement("div");
container.appendChild(score);
container.appendChild(winners);
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        const humanChoice = getHumanChoice(e.target);
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    });
});
//console.log(getHumanChoice());


