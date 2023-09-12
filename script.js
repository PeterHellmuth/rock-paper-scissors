function getComputerChoice(){
    let rnd = Math.floor(Math.random()*3);
    if (rnd === 0){
        return "rock";
    } else if (rnd === 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(event){
    let playerSelection = event.target.id;
    let playerWon = false;
    let computerSelection = getComputerChoice();

    if(!gameOver){
        if (playerSelection != computerSelection){
            if (playerSelection == "rock"){
                if(computerSelection != "paper"){
                    playerWon = true;
                }
            } else if (playerSelection == "paper"){
                if(computerSelection != "scissors"){
                    playerWon = true;
                } 
            } else { //scissors
                if(computerSelection != "rock"){
                    playerWon = true;
                }
            }
        }
        if(playerWon){
            playerWins++;
        } else{
            computerWins++;
        }
    }


    if(playerWins >= 3){
        outputDiv.innerText = "You won 3 out of 5! You beat the mindless random computer in a game of chance!"
        outputDiv.innerText += `\nThe final score was: \nYou: ${playerWins} Computer: ${computerWins}`
        gameOver = true;
    } else if(computerWins >= 3){
        outputDiv.innerText = "You lost 3 out of 5! You lost to the mindless random computer in a game of chance!"
        outputDiv.innerText += `\nThe final score was: \nYou: ${playerWins} Computer: ${computerWins}`
        gameOver = true;
    } else{
        outputDiv.innerText = calcResultText(playerSelection, computerSelection);
        outputDiv.innerText += "\n"
        outputDiv.innerText += `The current score is: \nYou: ${playerWins} Computer: ${computerWins}`
    }

}



function calcResultText(playerChoice, computerChoice){
    if (playerChoice == computerChoice){
        return "You tied, you both picked " + computerChoice + "! We won't count this as one of the five rounds.";
    } else if (playerChoice == "rock"){
        if(computerChoice == "paper"){
            return "The computer picked paper and smothered your rock. You lose!";
        } else {
            return "You crushed the computer's scissors with a rock, you win!";
        }
    } else if (playerChoice == "paper"){
        if(computerChoice == "rock"){
            return "You smothered the computer's rock with your paper. You win!";
        } else {
            return "The computer snipped up your paper with scissors. You lose!";
        }
    } else{
        if(computerChoice == "rock"){
            return "The computer bashed your scissors into dust with a rock. You lose!";
        } else {
            return "You sliced and diced the paper's paper with your scissors. You win!";
        }
    }
}




document.getElementById("rock").addEventListener("click", playRound);
document.getElementById("paper").addEventListener("click", playRound);
document.getElementById("scissors").addEventListener("click", playRound);

let outputDiv = document.getElementById("Result");
let playerWins = 0;
let computerWins = 0;
let gameOver = false;